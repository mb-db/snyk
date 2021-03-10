! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(function() {
        try {
            return require("moment")
        } catch (t) {}
    }()) : "function" == typeof define && define.amd ? define(["require"], (function(t) {
        return e(function() {
            try {
                return t("moment")
            } catch (e) {}
        }())
    })) : (t = t || self).Chart = e(t.moment)
}(this, (function(t) {
    "use strict";
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var e = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        },
        n = function(t, n) {
            return function(t) {
                var n = {};
                for (var i in e) e.hasOwnProperty(i) && (n[e[i]] = i);
                var a = t.exports = {
                    rgb: {
                        channels: 3,
                        labels: "rgb"
                    },
                    hsl: {
                        channels: 3,
                        labels: "hsl"
                    },
                    hsv: {
                        channels: 3,
                        labels: "hsv"
                    },
                    hwb: {
                        channels: 3,
                        labels: "hwb"
                    },
                    cmyk: {
                        channels: 4,
                        labels: "cmyk"
                    },
                    xyz: {
                        channels: 3,
                        labels: "xyz"
                    },
                    lab: {
                        channels: 3,
                        labels: "lab"
                    },
                    lch: {
                        channels: 3,
                        labels: "lch"
                    },
                    hex: {
                        channels: 1,
                        labels: ["hex"]
                    },
                    keyword: {
                        channels: 1,
                        labels: ["keyword"]
                    },
                    ansi16: {
                        channels: 1,
                        labels: ["ansi16"]
                    },
                    ansi256: {
                        channels: 1,
                        labels: ["ansi256"]
                    },
                    hcg: {
                        channels: 3,
                        labels: ["h", "c", "g"]
                    },
                    apple: {
                        channels: 3,
                        labels: ["r16", "g16", "b16"]
                    },
                    gray: {
                        channels: 1,
                        labels: ["gray"]
                    }
                };
                for (var r in a)
                    if (a.hasOwnProperty(r)) {
                        if (!("channels" in a[r])) throw new Error("missing channels property: " + r);
                        if (!("labels" in a[r])) throw new Error("missing channel labels property: " + r);
                        if (a[r].labels.length !== a[r].channels) throw new Error("channel and label counts mismatch: " + r);
                        var o = a[r].channels,
                            s = a[r].labels;
                        delete a[r].channels, delete a[r].labels, Object.defineProperty(a[r], "channels", {
                            value: o
                        }), Object.defineProperty(a[r], "labels", {
                            value: s
                        })
                    } a.rgb.hsl = function(t) {
                    var e, n, i = t[0] / 255,
                        a = t[1] / 255,
                        r = t[2] / 255,
                        o = Math.min(i, a, r),
                        s = Math.max(i, a, r),
                        l = s - o;
                    return s === o ? e = 0 : i === s ? e = (a - r) / l : a === s ? e = 2 + (r - i) / l : r === s && (e = 4 + (i - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (o + s) / 2, [e, 100 * (s === o ? 0 : n <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * n]
                }, a.rgb.hsv = function(t) {
                    var e, n, i, a, r, o = t[0] / 255,
                        s = t[1] / 255,
                        l = t[2] / 255,
                        u = Math.max(o, s, l),
                        d = u - Math.min(o, s, l),
                        h = function(t) {
                            return (u - t) / 6 / d + .5
                        };
                    return 0 === d ? a = r = 0 : (r = d / u, e = h(o), n = h(s), i = h(l), o === u ? a = i - n : s === u ? a = 1 / 3 + e - i : l === u && (a = 2 / 3 + n - e), a < 0 ? a += 1 : a > 1 && (a -= 1)), [360 * a, 100 * r, 100 * u]
                }, a.rgb.hwb = function(t) {
                    var e = t[0],
                        n = t[1],
                        i = t[2];
                    return [a.rgb.hsl(t)[0], 1 / 255 * Math.min(e, Math.min(n, i)) * 100, 100 * (i = 1 - 1 / 255 * Math.max(e, Math.max(n, i)))]
                }, a.rgb.cmyk = function(t) {
                    var e, n = t[0] / 255,
                        i = t[1] / 255,
                        a = t[2] / 255;
                    return [100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - a))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e]
                }, a.rgb.keyword = function(t) {
                    var i = n[t];
                    if (i) return i;
                    var a, r, o, s = 1 / 0;
                    for (var l in e)
                        if (e.hasOwnProperty(l)) {
                            var u = (r = t, o = e[l], Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2) + Math.pow(r[2] - o[2], 2));
                            u < s && (s = u, a = l)
                        } return a
                }, a.keyword.rgb = function(t) {
                    return e[t]
                }, a.rgb.xyz = function(t) {
                    var e = t[0] / 255,
                        n = t[1] / 255,
                        i = t[2] / 255;
                    return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)]
                }, a.rgb.lab = function(t) {
                    var e = a.rgb.xyz(t),
                        n = e[0],
                        i = e[1],
                        r = e[2];
                    return i /= 100, r /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
                }, a.hsl.rgb = function(t) {
                    var e, n, i, a, r, o = t[0] / 360,
                        s = t[1] / 100,
                        l = t[2] / 100;
                    if (0 === s) return [r = 255 * l, r, r];
                    e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];
                    for (var u = 0; u < 3; u++)(i = o + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, a[u] = 255 * (r = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e);
                    return a
                }, a.hsl.hsv = function(t) {
                    var e = t[0],
                        n = t[1] / 100,
                        i = t[2] / 100,
                        a = n,
                        r = Math.max(i, .01);
                    return n *= (i *= 2) <= 1 ? i : 2 - i, a *= r <= 1 ? r : 2 - r, [e, 100 * (0 === i ? 2 * a / (r + a) : 2 * n / (i + n)), (i + n) / 2 * 100]
                }, a.hsv.rgb = function(t) {
                    var e = t[0] / 60,
                        n = t[1] / 100,
                        i = t[2] / 100,
                        a = Math.floor(e) % 6,
                        r = e - Math.floor(e),
                        o = 255 * i * (1 - n),
                        s = 255 * i * (1 - n * r),
                        l = 255 * i * (1 - n * (1 - r));
                    switch (i *= 255, a) {
                        case 0:
                            return [i, l, o];
                        case 1:
                            return [s, i, o];
                        case 2:
                            return [o, i, l];
                        case 3:
                            return [o, s, i];
                        case 4:
                            return [l, o, i];
                        case 5:
                            return [i, o, s]
                    }
                }, a.hsv.hsl = function(t) {
                    var e, n, i, a = t[0],
                        r = t[1] / 100,
                        o = t[2] / 100,
                        s = Math.max(o, .01);
                    return i = (2 - r) * o, n = r * s, [a, 100 * (n = (n /= (e = (2 - r) * s) <= 1 ? e : 2 - e) || 0), 100 * (i /= 2)]
                }, a.hwb.rgb = function(t) {
                    var e, n, i, a, r, o, s, l = t[0] / 360,
                        u = t[1] / 100,
                        d = t[2] / 100,
                        h = u + d;
                    switch (h > 1 && (u /= h, d /= h), i = 6 * l - (e = Math.floor(6 * l)), 0 != (1 & e) && (i = 1 - i), a = u + i * ((n = 1 - d) - u), e) {
                        default:
                        case 6:
                        case 0:
                            r = n, o = a, s = u;
                            break;
                        case 1:
                            r = a, o = n, s = u;
                            break;
                        case 2:
                            r = u, o = n, s = a;
                            break;
                        case 3:
                            r = u, o = a, s = n;
                            break;
                        case 4:
                            r = a, o = u, s = n;
                            break;
                        case 5:
                            r = n, o = u, s = a
                    }
                    return [255 * r, 255 * o, 255 * s]
                }, a.cmyk.rgb = function(t) {
                    var e = t[1] / 100,
                        n = t[2] / 100,
                        i = t[3] / 100;
                    return [255 * (1 - Math.min(1, t[0] / 100 * (1 - i) + i)), 255 * (1 - Math.min(1, e * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i))]
                }, a.xyz.rgb = function(t) {
                    var e, n, i, a = t[0] / 100,
                        r = t[1] / 100,
                        o = t[2] / 100;
                    return n = -.9689 * a + 1.8758 * r + .0415 * o, i = .0557 * a + -.204 * r + 1.057 * o, e = (e = 3.2406 * a + -1.5372 * r + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))]
                }, a.xyz.lab = function(t) {
                    var e = t[0],
                        n = t[1],
                        i = t[2];
                    return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
                }, a.lab.xyz = function(t) {
                    var e, n, i;
                    e = t[1] / 500 + (n = (t[0] + 16) / 116), i = n - t[2] / 200;
                    var a = Math.pow(n, 3),
                        r = Math.pow(e, 3),
                        o = Math.pow(i, 3);
                    return n = a > .008856 ? a : (n - 16 / 116) / 7.787, e = r > .008856 ? r : (e - 16 / 116) / 7.787, i = o > .008856 ? o : (i - 16 / 116) / 7.787, [e *= 95.047, n *= 100, i *= 108.883]
                }, a.lab.lch = function(t) {
                    var e, n = t[0],
                        i = t[1],
                        a = t[2];
                    return (e = 360 * Math.atan2(a, i) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + a * a), e]
                }, a.lch.lab = function(t) {
                    var e, n = t[1];
                    return e = t[2] / 360 * 2 * Math.PI, [t[0], n * Math.cos(e), n * Math.sin(e)]
                }, a.rgb.ansi16 = function(t) {
                    var e = t[0],
                        n = t[1],
                        i = t[2],
                        r = 1 in arguments ? arguments[1] : a.rgb.hsv(t)[2];
                    if (0 === (r = Math.round(r / 50))) return 30;
                    var o = 30 + (Math.round(i / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255));
                    return 2 === r && (o += 60), o
                }, a.hsv.ansi16 = function(t) {
                    return a.rgb.ansi16(a.hsv.rgb(t), t[2])
                }, a.rgb.ansi256 = function(t) {
                    var e = t[0],
                        n = t[1],
                        i = t[2];
                    return e === n && n === i ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(i / 255 * 5)
                }, a.ansi16.rgb = function(t) {
                    var e = t % 10;
                    if (0 === e || 7 === e) return t > 50 && (e += 3.5), [e = e / 10.5 * 255, e, e];
                    var n = .5 * (1 + ~~(t > 50));
                    return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255]
                }, a.ansi256.rgb = function(t) {
                    if (t >= 232) {
                        var e = 10 * (t - 232) + 8;
                        return [e, e, e]
                    }
                    var n;
                    return t -= 16, [Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
                }, a.rgb.hex = function(t) {
                    var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
                    return "000000".substring(e.length) + e
                }, a.hex.rgb = function(t) {
                    var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                    if (!e) return [0, 0, 0];
                    var n = e[0];
                    3 === e[0].length && (n = n.split("").map((function(t) {
                        return t + t
                    })).join(""));
                    var i = parseInt(n, 16);
                    return [i >> 16 & 255, i >> 8 & 255, 255 & i]
                }, a.rgb.hcg = function(t) {
                    var e, n = t[0] / 255,
                        i = t[1] / 255,
                        a = t[2] / 255,
                        r = Math.max(Math.max(n, i), a),
                        o = Math.min(Math.min(n, i), a),
                        s = r - o;
                    return e = s <= 0 ? 0 : r === n ? (i - a) / s % 6 : r === i ? 2 + (a - n) / s : 4 + (n - i) / s + 4, e /= 6, [360 * (e %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)]
                }, a.hsl.hcg = function(t) {
                    var e, n = t[1] / 100,
                        i = t[2] / 100,
                        a = 0;
                    return (e = i < .5 ? 2 * n * i : 2 * n * (1 - i)) < 1 && (a = (i - .5 * e) / (1 - e)), [t[0], 100 * e, 100 * a]
                }, a.hsv.hcg = function(t) {
                    var e = t[2] / 100,
                        n = t[1] / 100 * e,
                        i = 0;
                    return n < 1 && (i = (e - n) / (1 - n)), [t[0], 100 * n, 100 * i]
                }, a.hcg.rgb = function(t) {
                    var e = t[1] / 100,
                        n = t[2] / 100;
                    if (0 === e) return [255 * n, 255 * n, 255 * n];
                    var i, a = [0, 0, 0],
                        r = t[0] / 360 % 1 * 6,
                        o = r % 1,
                        s = 1 - o;
                    switch (Math.floor(r)) {
                        case 0:
                            a[0] = 1, a[1] = o, a[2] = 0;
                            break;
                        case 1:
                            a[0] = s, a[1] = 1, a[2] = 0;
                            break;
                        case 2:
                            a[0] = 0, a[1] = 1, a[2] = o;
                            break;
                        case 3:
                            a[0] = 0, a[1] = s, a[2] = 1;
                            break;
                        case 4:
                            a[0] = o, a[1] = 0, a[2] = 1;
                            break;
                        default:
                            a[0] = 1, a[1] = 0, a[2] = s
                    }
                    return [255 * (e * a[0] + (i = (1 - e) * n)), 255 * (e * a[1] + i), 255 * (e * a[2] + i)]
                }, a.hcg.hsv = function(t) {
                    var e = t[1] / 100,
                        n = e + t[2] / 100 * (1 - e),
                        i = 0;
                    return n > 0 && (i = e / n), [t[0], 100 * i, 100 * n]
                }, a.hcg.hsl = function(t) {
                    var e = t[1] / 100,
                        n = t[2] / 100 * (1 - e) + .5 * e,
                        i = 0;
                    return n > 0 && n < .5 ? i = e / (2 * n) : n >= .5 && n < 1 && (i = e / (2 * (1 - n))), [t[0], 100 * i, 100 * n]
                }, a.hcg.hwb = function(t) {
                    var e = t[1] / 100,
                        n = e + t[2] / 100 * (1 - e);
                    return [t[0], 100 * (n - e), 100 * (1 - n)]
                }, a.hwb.hcg = function(t) {
                    var e = 1 - t[2] / 100,
                        n = e - t[1] / 100,
                        i = 0;
                    return n < 1 && (i = (e - n) / (1 - n)), [t[0], 100 * n, 100 * i]
                }, a.apple.rgb = function(t) {
                    return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]
                }, a.rgb.apple = function(t) {
                    return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]
                }, a.gray.rgb = function(t) {
                    return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]
                }, a.gray.hsl = a.gray.hsv = function(t) {
                    return [0, 0, t[0]]
                }, a.gray.hwb = function(t) {
                    return [0, 100, t[0]]
                }, a.gray.cmyk = function(t) {
                    return [0, 0, 0, t[0]]
                }, a.gray.lab = function(t) {
                    return [t[0], 0, 0]
                }, a.gray.hex = function(t) {
                    var e = 255 & Math.round(t[0] / 100 * 255),
                        n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
                    return "000000".substring(n.length) + n
                }, a.rgb.gray = function(t) {
                    return [(t[0] + t[1] + t[2]) / 3 / 255 * 100]
                }
            }(n = {
                exports: {}
            }), n.exports
        }();

    function i(t, e) {
        return function(n) {
            return e(t(n))
        }
    }

    function a(t, e) {
        for (var a = [e[t].parent, t], r = n[e[t].parent][t], o = e[t].parent; e[o].parent;) a.unshift(e[o].parent), r = i(n[e[o].parent][o], r), o = e[o].parent;
        return r.conversion = a, r
    }
    var r = {};
    Object.keys(n).forEach((function(t) {
        r[t] = {}, Object.defineProperty(r[t], "channels", {
            value: n[t].channels
        }), Object.defineProperty(r[t], "labels", {
            value: n[t].labels
        });
        var e = function(t) {
            for (var e = function(t) {
                    var e = function() {
                            for (var t = {}, e = Object.keys(n), i = e.length, a = 0; a < i; a++) t[e[a]] = {
                                distance: -1,
                                parent: null
                            };
                            return t
                        }(),
                        i = [t];
                    for (e[t].distance = 0; i.length;)
                        for (var a = i.pop(), r = Object.keys(n[a]), o = r.length, s = 0; s < o; s++) {
                            var l = r[s],
                                u = e[l]; - 1 === u.distance && (u.distance = e[a].distance + 1, u.parent = a, i.unshift(l))
                        }
                    return e
                }(t), i = {}, r = Object.keys(e), o = r.length, s = 0; s < o; s++) {
                var l = r[s];
                null !== e[l].parent && (i[l] = a(l, e))
            }
            return i
        }(t);
        Object.keys(e).forEach((function(n) {
            var i = e[n];
            r[t][n] = function(t) {
                var e = function(e) {
                    if (null == e) return e;
                    arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
                    var n = t(e);
                    if ("object" == typeof n)
                        for (var i = n.length, a = 0; a < i; a++) n[a] = Math.round(n[a]);
                    return n
                };
                return "conversion" in t && (e.conversion = t.conversion), e
            }(i), r[t][n].raw = function(t) {
                var e = function(e) {
                    return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e))
                };
                return "conversion" in t && (e.conversion = t.conversion), e
            }(i)
        }))
    }));
    var o = r,
        s = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        },
        l = {
            getRgba: u,
            getHsla: d,
            getRgb: function(t) {
                var e = u(t);
                return e && e.slice(0, 3)
            },
            getHsl: function(t) {
                var e = d(t);
                return e && e.slice(0, 3)
            },
            getHwb: h,
            getAlpha: function(t) {
                var e = u(t);
                return e || (e = d(t)) || (e = h(t)) ? e[3] : void 0
            },
            hexString: function(t, e) {
                return e = void 0 !== e && 3 === t.length ? e : t[3], "#" + m(t[0]) + m(t[1]) + m(t[2]) + (e >= 0 && e < 1 ? m(Math.round(255 * e)) : "")
            },
            rgbString: function(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? c(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            },
            rgbaString: c,
            percentString: function(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? f(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)"
            },
            percentaString: f,
            hslString: function(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? g(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
            },
            hslaString: g,
            hwbString: function(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
            },
            keyword: function(t) {
                return v[t.slice(0, 3)]
            }
        };

    function u(t) {
        if (t) {
            var e = [0, 0, 0],
                n = 1,
                i = t.match(/^#([a-fA-F0-9]{3,4})$/i),
                a = "";
            if (i) {
                a = (i = i[1])[3];
                for (var r = 0; r < e.length; r++) e[r] = parseInt(i[r] + i[r], 16);
                a && (n = Math.round(parseInt(a + a, 16) / 255 * 100) / 100)
            } else if (i = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
                for (a = i[2], i = i[1], r = 0; r < e.length; r++) e[r] = parseInt(i.slice(2 * r, 2 * r + 2), 16);
                a && (n = Math.round(parseInt(a, 16) / 255 * 100) / 100)
            } else if (i = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (r = 0; r < e.length; r++) e[r] = parseInt(i[r + 1]);
                n = parseFloat(i[4])
            } else if (i = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (r = 0; r < e.length; r++) e[r] = Math.round(2.55 * parseFloat(i[r + 1]));
                n = parseFloat(i[4])
            } else if (i = t.match(/(\w+)/)) {
                if ("transparent" == i[1]) return [0, 0, 0, 0];
                if (!(e = s[i[1]])) return
            }
            for (r = 0; r < e.length; r++) e[r] = p(e[r], 0, 255);
            return n = n || 0 == n ? p(n, 0, 1) : 1, e[3] = n, e
        }
    }

    function d(t) {
        if (t) {
            var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var n = parseFloat(e[4]);
                return [p(parseInt(e[1]), 0, 360), p(parseFloat(e[2]), 0, 100), p(parseFloat(e[3]), 0, 100), p(isNaN(n) ? 1 : n, 0, 1)]
            }
        }
    }

    function h(t) {
        if (t) {
            var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var n = parseFloat(e[4]);
                return [p(parseInt(e[1]), 0, 360), p(parseFloat(e[2]), 0, 100), p(parseFloat(e[3]), 0, 100), p(isNaN(n) ? 1 : n, 0, 1)]
            }
        }
    }

    function c(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
    }

    function f(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
    }

    function g(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
    }

    function p(t, e, n) {
        return Math.min(Math.max(e, t), n)
    }

    function m(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e
    }
    var v = {};
    for (var b in s) v[s[b]] = b;
    var x = function(t) {
        return t instanceof x ? t : this instanceof x ? (this.valid = !1, this.values = {
            rgb: [0, 0, 0],
            hsl: [0, 0, 0],
            hsv: [0, 0, 0],
            hwb: [0, 0, 0],
            cmyk: [0, 0, 0, 0],
            alpha: 1
        }, void("string" == typeof t ? (e = l.getRgba(t)) ? this.setValues("rgb", e) : (e = l.getHsla(t)) ? this.setValues("hsl", e) : (e = l.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new x(t);
        var e
    };
    x.prototype = {
        isValid: function() {
            return this.valid
        },
        rgb: function() {
            return this.setSpace("rgb", arguments)
        },
        hsl: function() {
            return this.setSpace("hsl", arguments)
        },
        hsv: function() {
            return this.setSpace("hsv", arguments)
        },
        hwb: function() {
            return this.setSpace("hwb", arguments)
        },
        cmyk: function() {
            return this.setSpace("cmyk", arguments)
        },
        rgbArray: function() {
            return this.values.rgb
        },
        hslArray: function() {
            return this.values.hsl
        },
        hsvArray: function() {
            return this.values.hsv
        },
        hwbArray: function() {
            var t = this.values;
            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
        },
        cmykArray: function() {
            return this.values.cmyk
        },
        rgbaArray: function() {
            var t = this.values;
            return t.rgb.concat([t.alpha])
        },
        hslaArray: function() {
            var t = this.values;
            return t.hsl.concat([t.alpha])
        },
        alpha: function(t) {
            return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
        },
        red: function(t) {
            return this.setChannel("rgb", 0, t)
        },
        green: function(t) {
            return this.setChannel("rgb", 1, t)
        },
        blue: function(t) {
            return this.setChannel("rgb", 2, t)
        },
        hue: function(t) {
            return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
        },
        saturation: function(t) {
            return this.setChannel("hsl", 1, t)
        },
        lightness: function(t) {
            return this.setChannel("hsl", 2, t)
        },
        saturationv: function(t) {
            return this.setChannel("hsv", 1, t)
        },
        whiteness: function(t) {
            return this.setChannel("hwb", 1, t)
        },
        blackness: function(t) {
            return this.setChannel("hwb", 2, t)
        },
        value: function(t) {
            return this.setChannel("hsv", 2, t)
        },
        cyan: function(t) {
            return this.setChannel("cmyk", 0, t)
        },
        magenta: function(t) {
            return this.setChannel("cmyk", 1, t)
        },
        yellow: function(t) {
            return this.setChannel("cmyk", 2, t)
        },
        black: function(t) {
            return this.setChannel("cmyk", 3, t)
        },
        hexString: function() {
            return l.hexString(this.values.rgb)
        },
        rgbString: function() {
            return l.rgbString(this.values.rgb, this.values.alpha)
        },
        rgbaString: function() {
            return l.rgbaString(this.values.rgb, this.values.alpha)
        },
        percentString: function() {
            return l.percentString(this.values.rgb, this.values.alpha)
        },
        hslString: function() {
            return l.hslString(this.values.hsl, this.values.alpha)
        },
        hslaString: function() {
            return l.hslaString(this.values.hsl, this.values.alpha)
        },
        hwbString: function() {
            return l.hwbString(this.values.hwb, this.values.alpha)
        },
        keyword: function() {
            return l.keyword(this.values.rgb, this.values.alpha)
        },
        rgbNumber: function() {
            var t = this.values.rgb;
            return t[0] << 16 | t[1] << 8 | t[2]
        },
        luminosity: function() {
            for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                var i = t[n] / 255;
                e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
            }
            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
        },
        contrast: function(t) {
            var e = this.luminosity(),
                n = t.luminosity();
            return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
        },
        level: function(t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
        },
        dark: function() {
            var t = this.values.rgb;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
        },
        light: function() {
            return !this.dark()
        },
        negate: function() {
            for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
            return this.setValues("rgb", t), this
        },
        lighten: function(t) {
            var e = this.values.hsl;
            return e[2] += e[2] * t, this.setValues("hsl", e), this
        },
        darken: function(t) {
            var e = this.values.hsl;
            return e[2] -= e[2] * t, this.setValues("hsl", e), this
        },
        saturate: function(t) {
            var e = this.values.hsl;
            return e[1] += e[1] * t, this.setValues("hsl", e), this
        },
        desaturate: function(t) {
            var e = this.values.hsl;
            return e[1] -= e[1] * t, this.setValues("hsl", e), this
        },
        whiten: function(t) {
            var e = this.values.hwb;
            return e[1] += e[1] * t, this.setValues("hwb", e), this
        },
        blacken: function(t) {
            var e = this.values.hwb;
            return e[2] += e[2] * t, this.setValues("hwb", e), this
        },
        greyscale: function() {
            var t = this.values.rgb,
                e = .3 * t[0] + .59 * t[1] + .11 * t[2];
            return this.setValues("rgb", [e, e, e]), this
        },
        clearer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e - e * t), this
        },
        opaquer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e + e * t), this
        },
        rotate: function(t) {
            var e = this.values.hsl,
                n = (e[0] + t) % 360;
            return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this
        },
        mix: function(t, e) {
            var n = t,
                i = void 0 === e ? .5 : e,
                a = 2 * i - 1,
                r = this.alpha() - n.alpha(),
                o = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2,
                s = 1 - o;
            return this.rgb(o * this.red() + s * n.red(), o * this.green() + s * n.green(), o * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i))
        },
        toJSON: function() {
            return this.rgb()
        },
        clone: function() {
            var t, e, n = new x,
                i = this.values,
                a = n.values;
            for (var r in i) i.hasOwnProperty(r) && ("[object Array]" === (e = {}.toString.call(t = i[r])) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
            return n
        }
    }, x.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
    }, x.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
    }, x.prototype.getValues = function(t) {
        for (var e = this.values, n = {}, i = 0; i < t.length; i++) n[t.charAt(i)] = e[t][i];
        return 1 !== e.alpha && (n.a = e.alpha), n
    }, x.prototype.setValues = function(t, e) {
        var n, i, a = this.values,
            r = this.spaces,
            s = this.maxes,
            l = 1;
        if (this.valid = !0, "alpha" === t) l = e;
        else if (e.length) a[t] = e.slice(0, t.length), l = e[t.length];
        else if (void 0 !== e[t.charAt(0)]) {
            for (n = 0; n < t.length; n++) a[t][n] = e[t.charAt(n)];
            l = e.a
        } else if (void 0 !== e[r[t][0]]) {
            var u = r[t];
            for (n = 0; n < t.length; n++) a[t][n] = e[u[n]];
            l = e.alpha
        }
        if (a.alpha = Math.max(0, Math.min(1, void 0 === l ? a.alpha : l)), "alpha" === t) return !1;
        for (n = 0; n < t.length; n++) i = Math.max(0, Math.min(s[t][n], a[t][n])), a[t][n] = Math.round(i);
        for (var d in r) d !== t && (a[d] = o[t][d](a[t]));
        return !0
    }, x.prototype.setSpace = function(t, e) {
        var n = e[0];
        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
    }, x.prototype.setChannel = function(t, e, n) {
        var i = this.values[t];
        return void 0 === n ? i[e] : (n === i[e] || (i[e] = n, this.setValues(t, i)), this)
    }, "undefined" != typeof window && (window.Color = x);
    var y, _ = x,
        k = {
            noop: function() {},
            uid: (y = 0, function() {
                return y++
            }),
            isNullOrUndef: function(t) {
                return null == t
            },
            isArray: function(t) {
                if (Array.isArray && Array.isArray(t)) return !0;
                var e = Object.prototype.toString.call(t);
                return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
            },
            isObject: function(t) {
                return null !== t && "[object Object]" === Object.prototype.toString.call(t)
            },
            isFinite: function(t) {
                return ("number" == typeof t || t instanceof Number) && isFinite(t)
            },
            valueOrDefault: function(t, e) {
                return void 0 === t ? e : t
            },
            valueAtIndexOrDefault: function(t, e, n) {
                return k.valueOrDefault(k.isArray(t) ? t[e] : t, n)
            },
            callback: function(t, e, n) {
                if (t && "function" == typeof t.call) return t.apply(n, e)
            },
            each: function(t, e, n, i) {
                var a, r, o;
                if (k.isArray(t))
                    if (r = t.length, i)
                        for (a = r - 1; a >= 0; a--) e.call(n, t[a], a);
                    else
                        for (a = 0; a < r; a++) e.call(n, t[a], a);
                else if (k.isObject(t))
                    for (r = (o = Object.keys(t)).length, a = 0; a < r; a++) e.call(n, t[o[a]], o[a])
            },
            arrayEquals: function(t, e) {
                var n, i, a, r;
                if (!t || !e || t.length !== e.length) return !1;
                for (n = 0, i = t.length; n < i; ++n)
                    if (r = e[n], (a = t[n]) instanceof Array && r instanceof Array) {
                        if (!k.arrayEquals(a, r)) return !1
                    } else if (a !== r) return !1;
                return !0
            },
            clone: function(t) {
                if (k.isArray(t)) return t.map(k.clone);
                if (k.isObject(t)) {
                    for (var e = {}, n = Object.keys(t), i = n.length, a = 0; a < i; ++a) e[n[a]] = k.clone(t[n[a]]);
                    return e
                }
                return t
            },
            _merger: function(t, e, n, i) {
                var a = e[t],
                    r = n[t];
                k.isObject(a) && k.isObject(r) ? k.merge(a, r, i) : e[t] = k.clone(r)
            },
            _mergerIf: function(t, e, n) {
                var i = e[t],
                    a = n[t];
                k.isObject(i) && k.isObject(a) ? k.mergeIf(i, a) : e.hasOwnProperty(t) || (e[t] = k.clone(a))
            },
            merge: function(t, e, n) {
                var i, a, r, o, s, l = k.isArray(e) ? e : [e],
                    u = l.length;
                if (!k.isObject(t)) return t;
                for (i = (n = n || {}).merger || k._merger, a = 0; a < u; ++a)
                    if (k.isObject(e = l[a]))
                        for (s = 0, o = (r = Object.keys(e)).length; s < o; ++s) i(r[s], t, e, n);
                return t
            },
            mergeIf: function(t, e) {
                return k.merge(t, e, {
                    merger: k._mergerIf
                })
            },
            extend: Object.assign || function(t) {
                return k.merge(t, [].slice.call(arguments, 1), {
                    merger: function(t, e, n) {
                        e[t] = n[t]
                    }
                })
            },
            inherits: function(t) {
                var e = this,
                    n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return e.apply(this, arguments)
                    },
                    i = function() {
                        this.constructor = n
                    };
                return i.prototype = e.prototype, n.prototype = new i, n.extend = k.inherits, t && k.extend(n.prototype, t), n.__super__ = e.prototype, n
            },
            _deprecated: function(t, e, n, i) {
                void 0 !== e && console.warn(t + ': "' + n + '" is deprecated. Please use "' + i + '" instead')
            }
        },
        w = k;
    k.callCallback = k.callback, k.indexOf = function(t, e, n) {
        return Array.prototype.indexOf.call(t, e, n)
    }, k.getValueOrDefault = k.valueOrDefault, k.getValueAtIndexOrDefault = k.valueAtIndexOrDefault;
    var M = {
            linear: function(t) {
                return t
            },
            easeInQuad: function(t) {
                return t * t
            },
            easeOutQuad: function(t) {
                return -t * (t - 2)
            },
            easeInOutQuad: function(t) {
                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function(t) {
                return t * t * t
            },
            easeOutCubic: function(t) {
                return (t -= 1) * t * t + 1
            },
            easeInOutCubic: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            easeInQuart: function(t) {
                return t * t * t * t
            },
            easeOutQuart: function(t) {
                return -((t -= 1) * t * t * t - 1)
            },
            easeInOutQuart: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function(t) {
                return t * t * t * t * t
            },
            easeOutQuint: function(t) {
                return (t -= 1) * t * t * t * t + 1
            },
            easeInOutQuint: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function(t) {
                return 1 - Math.cos(t * (Math.PI / 2))
            },
            easeOutSine: function(t) {
                return Math.sin(t * (Math.PI / 2))
            },
            easeInOutSine: function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            },
            easeInExpo: function(t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
            },
            easeOutExpo: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            easeInOutExpo: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
            },
            easeInCirc: function(t) {
                return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
            },
            easeOutCirc: function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            },
            easeInOutCirc: function(t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function(t) {
                var e = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
            },
            easeOutElastic: function(t) {
                var e = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
            },
            easeInOutElastic: function(t) {
                var e = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
            },
            easeInBack: function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            easeOutBack: function(t) {
                var e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            easeInOutBack: function(t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: function(t) {
                return 1 - M.easeOutBounce(1 - t)
            },
            easeOutBounce: function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            easeInOutBounce: function(t) {
                return t < .5 ? .5 * M.easeInBounce(2 * t) : .5 * M.easeOutBounce(2 * t - 1) + .5
            }
        },
        S = {
            effects: M
        };
    w.easingEffects = M;
    var C = Math.PI,
        P = C / 180,
        A = 2 * C,
        D = C / 2,
        T = C / 4,
        I = 2 * C / 3,
        F = {
            clear: function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            },
            roundedRect: function(t, e, n, i, a, r) {
                if (r) {
                    var o = Math.min(r, a / 2, i / 2),
                        s = e + o,
                        l = n + o,
                        u = e + i - o,
                        d = n + a - o;
                    t.moveTo(e, l), s < u && l < d ? (t.arc(s, l, o, -C, -D), t.arc(u, l, o, -D, 0), t.arc(u, d, o, 0, D), t.arc(s, d, o, D, C)) : s < u ? (t.moveTo(s, n), t.arc(u, l, o, -D, D), t.arc(s, l, o, D, C + D)) : l < d ? (t.arc(s, l, o, -C, 0), t.arc(s, d, o, 0, C)) : t.arc(s, l, o, -C, C), t.closePath(), t.moveTo(e, n)
                } else t.rect(e, n, i, a)
            },
            drawPoint: function(t, e, n, i, a, r) {
                var o, s, l, u, d, h = (r || 0) * P;
                if (e && "object" == typeof e && ("[object HTMLImageElement]" === (o = e.toString()) || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, a), t.rotate(h), t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height), void t.restore();
                if (!(isNaN(n) || n <= 0)) {
                    switch (t.beginPath(), e) {
                        default:
                            t.arc(i, a, n, 0, A), t.closePath();
                            break;
                        case "triangle":
                            t.moveTo(i + Math.sin(h) * n, a - Math.cos(h) * n), h += I, t.lineTo(i + Math.sin(h) * n, a - Math.cos(h) * n), h += I, t.lineTo(i + Math.sin(h) * n, a - Math.cos(h) * n), t.closePath();
                            break;
                        case "rectRounded":
                            u = n - (d = .516 * n), s = Math.cos(h + T) * u, l = Math.sin(h + T) * u, t.arc(i - s, a - l, d, h - C, h - D), t.arc(i + l, a - s, d, h - D, h), t.arc(i + s, a + l, d, h, h + D), t.arc(i - l, a + s, d, h + D, h + C), t.closePath();
                            break;
                        case "rect":
                            if (!r) {
                                u = Math.SQRT1_2 * n, t.rect(i - u, a - u, 2 * u, 2 * u);
                                break
                            }
                            h += T;
                        case "rectRot":
                            s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + l, a - s), t.lineTo(i + s, a + l), t.lineTo(i - l, a + s), t.closePath();
                            break;
                        case "crossRot":
                            h += T;
                        case "cross":
                            s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s);
                            break;
                        case "star":
                            s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s), h += T, s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s);
                            break;
                        case "line":
                            s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l);
                            break;
                        case "dash":
                            t.moveTo(i, a), t.lineTo(i + Math.cos(h) * n, a + Math.sin(h) * n)
                    }
                    t.fill(), t.stroke()
                }
            },
            _isPointInArea: function(t, e) {
                return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6
            },
            clipArea: function(t, e) {
                t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
            },
            unclipArea: function(t) {
                t.restore()
            },
            lineTo: function(t, e, n, i) {
                var a = n.steppedLine;
                if (a) {
                    if ("middle" === a) {
                        var r = (e.x + n.x) / 2;
                        t.lineTo(r, i ? n.y : e.y), t.lineTo(r, i ? e.y : n.y)
                    } else "after" === a && !i || "after" !== a && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
                    t.lineTo(n.x, n.y)
                } else n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y)
            }
        },
        O = F;
    w.clear = F.clear, w.drawRoundedRectangle = function(t) {
        t.beginPath(), F.roundedRect.apply(F, arguments)
    };
    var L = {
        _set: function(t, e) {
            return w.merge(this[t] || (this[t] = {}), e)
        }
    };
    L._set("global", {
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        defaultLineHeight: 1.2,
        showLines: !0
    });
    var R = L,
        z = w.valueOrDefault,
        N = {
            toLineHeight: function(t, e) {
                var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                if (!n || "normal" === n[1]) return 1.2 * e;
                switch (t = +n[2], n[3]) {
                    case "px":
                        return t;
                    case "%":
                        t /= 100
                }
                return e * t
            },
            toPadding: function(t) {
                var e, n, i, a;
                return w.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, i = +t.bottom || 0, a = +t.left || 0) : e = n = i = a = +t || 0, {
                    top: e,
                    right: n,
                    bottom: i,
                    left: a,
                    height: e + i,
                    width: a + n
                }
            },
            _parseFont: function(t) {
                var e = R.global,
                    n = z(t.fontSize, e.defaultFontSize),
                    i = {
                        family: z(t.fontFamily, e.defaultFontFamily),
                        lineHeight: w.options.toLineHeight(z(t.lineHeight, e.defaultLineHeight), n),
                        size: n,
                        style: z(t.fontStyle, e.defaultFontStyle),
                        weight: null,
                        string: ""
                    };
                return i.string = function(t) {
                    return !t || w.isNullOrUndef(t.size) || w.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
                }(i), i
            },
            resolve: function(t, e, n, i) {
                var a, r, o, s = !0;
                for (a = 0, r = t.length; a < r; ++a)
                    if (void 0 !== (o = t[a]) && (void 0 !== e && "function" == typeof o && (o = o(e), s = !1), void 0 !== n && w.isArray(o) && (o = o[n], s = !1), void 0 !== o)) return i && !s && (i.cacheable = !1), o
            }
        },
        B = {
            _factorize: function(t) {
                var e, n = [],
                    i = Math.sqrt(t);
                for (e = 1; e < i; e++) t % e == 0 && (n.push(e), n.push(t / e));
                return i === (0 | i) && n.push(i), n.sort((function(t, e) {
                    return t - e
                })).pop(), n
            },
            log10: Math.log10 || function(t) {
                var e = Math.log(t) * Math.LOG10E,
                    n = Math.round(e);
                return t === Math.pow(10, n) ? n : e
            }
        },
        E = B;
    w.log10 = B.log10;
    var W = w,
        V = O,
        H = N,
        j = E;
    W.easing = S, W.canvas = V, W.options = H, W.math = j, W.rtl = {
        getRtlAdapter: function(t, e, n) {
            return t ? function(t, e) {
                return {
                    x: function(n) {
                        return t + t + e - n
                    },
                    setWidth: function(t) {
                        e = t
                    },
                    textAlign: function(t) {
                        return "center" === t ? t : "right" === t ? "left" : "right"
                    },
                    xPlus: function(t, e) {
                        return t - e
                    },
                    leftForLtr: function(t, e) {
                        return t - e
                    }
                }
            }(e, n) : {
                x: function(t) {
                    return t
                },
                setWidth: function(t) {},
                textAlign: function(t) {
                    return t
                },
                xPlus: function(t, e) {
                    return t + e
                },
                leftForLtr: function(t, e) {
                    return t
                }
            }
        },
        overrideTextDirection: function(t, e) {
            var n, i;
            "ltr" !== e && "rtl" !== e || (i = [(n = t.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", e, "important"), t.prevTextDirection = i)
        },
        restoreTextDirection: function(t) {
            var e = t.prevTextDirection;
            void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
        }
    };
    var q = function(t) {
        W.extend(this, t), this.initialize.apply(this, arguments)
    };
    W.extend(q.prototype, {
        _type: void 0,
        initialize: function() {
            this.hidden = !1
        },
        pivot: function() {
            var t = this;
            return t._view || (t._view = W.extend({}, t._model)), t._start = {}, t
        },
        transition: function(t) {
            var e = this,
                n = e._model,
                i = e._start,
                a = e._view;
            return n && 1 !== t ? (a || (a = e._view = {}), i || (i = e._start = {}), function(t, e, n, i) {
                var a, r, o, s, l, u, d, h, c, f = Object.keys(n);
                for (a = 0, r = f.length; a < r; ++a)
                    if (u = n[o = f[a]], e.hasOwnProperty(o) || (e[o] = u), (s = e[o]) !== u && "_" !== o[0]) {
                        if (t.hasOwnProperty(o) || (t[o] = s), (d = typeof u) == typeof(l = t[o]))
                            if ("string" === d) {
                                if ((h = _(l)).valid && (c = _(u)).valid) {
                                    e[o] = c.mix(h, i).rgbString();
                                    continue
                                }
                            } else if (W.isFinite(l) && W.isFinite(u)) {
                            e[o] = l + (u - l) * i;
                            continue
                        }
                        e[o] = u
                    }
            }(i, a, n, t), e) : (e._view = W.extend({}, n), e._start = null, e)
        },
        tooltipPosition: function() {
            return {
                x: this._model.x,
                y: this._model.y
            }
        },
        hasValue: function() {
            return W.isNumber(this._model.x) && W.isNumber(this._model.y)
        }
    }), q.extend = W.inherits;
    var U = q,
        Y = U.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
        }),
        $ = Y;
    Object.defineProperty(Y.prototype, "animationObject", {
        get: function() {
            return this
        }
    }), Object.defineProperty(Y.prototype, "chartInstance", {
        get: function() {
            return this.chart
        },
        set: function(t) {
            this.chart = t
        }
    }), R._set("global", {
        animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: W.noop,
            onComplete: W.noop
        }
    });
    var G = {
            animations: [],
            request: null,
            addAnimation: function(t, e, n, i) {
                var a, r, o = this.animations;
                for (e.chart = t, e.startTime = Date.now(), e.duration = n, i || (t.animating = !0), a = 0, r = o.length; a < r; ++a)
                    if (o[a].chart === t) return void(o[a] = e);
                o.push(e), 1 === o.length && this.requestAnimationFrame()
            },
            cancelAnimation: function(t) {
                var e = W.findIndex(this.animations, (function(e) {
                    return e.chart === t
                })); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
            },
            requestAnimationFrame: function() {
                var t = this;
                null === t.request && (t.request = W.requestAnimFrame.call(window, (function() {
                    t.request = null, t.startDigest()
                })))
            },
            startDigest: function() {
                this.advance(), this.animations.length > 0 && this.requestAnimationFrame()
            },
            advance: function() {
                for (var t, e, n, i, a = this.animations, r = 0; r < a.length;) e = (t = a[r]).chart, n = t.numSteps, i = Math.floor((Date.now() - t.startTime) / t.duration * n) + 1, t.currentStep = Math.min(i, n), W.callback(t.render, [e, t], e), W.callback(t.onAnimationProgress, [t], e), t.currentStep >= n ? (W.callback(t.onAnimationComplete, [t], e), e.animating = !1, a.splice(r, 1)) : ++r
            }
        },
        X = W.options.resolve,
        K = ["push", "pop", "shift", "splice", "unshift"];

    function Z(t, e) {
        var n = t._chartjs;
        if (n) {
            var i = n.listeners,
                a = i.indexOf(e); - 1 !== a && i.splice(a, 1), i.length > 0 || (K.forEach((function(e) {
                delete t[e]
            })), delete t._chartjs)
        }
    }
    var J = function(t, e) {
        this.initialize(t, e)
    };
    W.extend(J.prototype, {
        datasetElementType: null,
        dataElementType: null,
        _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
        initialize: function(t, e) {
            var n = this;
            n.chart = t, n.index = e, n.linkScales(), n.addElements(), n._type = n.getMeta().type
        },
        updateIndex: function(t) {
            this.index = t
        },
        linkScales: function() {
            var t = this.getMeta(),
                e = this.chart,
                n = e.scales,
                i = this.getDataset(),
                a = e.options.scales;
            null !== t.xAxisID && t.xAxisID in n && !i.xAxisID || (t.xAxisID = i.xAxisID || a.xAxes[0].id), null !== t.yAxisID && t.yAxisID in n && !i.yAxisID || (t.yAxisID = i.yAxisID || a.yAxes[0].id)
        },
        getDataset: function() {
            return this.chart.data.datasets[this.index]
        },
        getMeta: function() {
            return this.chart.getDatasetMeta(this.index)
        },
        getScaleForId: function(t) {
            return this.chart.scales[t]
        },
        _getValueScaleId: function() {
            return this.getMeta().yAxisID
        },
        _getIndexScaleId: function() {
            return this.getMeta().xAxisID
        },
        _getValueScale: function() {
            return this.getScaleForId(this._getValueScaleId())
        },
        _getIndexScale: function() {
            return this.getScaleForId(this._getIndexScaleId())
        },
        reset: function() {
            this._update(!0)
        },
        destroy: function() {
            this._data && Z(this._data, this)
        },
        createMetaDataset: function() {
            var t = this.datasetElementType;
            return t && new t({
                _chart: this.chart,
                _datasetIndex: this.index
            })
        },
        createMetaData: function(t) {
            var e = this.dataElementType;
            return e && new e({
                _chart: this.chart,
                _datasetIndex: this.index,
                _index: t
            })
        },
        addElements: function() {
            var t, e, n = this.getMeta(),
                i = this.getDataset().data || [],
                a = n.data;
            for (t = 0, e = i.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
            n.dataset = n.dataset || this.createMetaDataset()
        },
        addElementAndReset: function(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
        },
        buildOrUpdateElements: function() {
            var t, e, n = this,
                i = n.getDataset(),
                a = i.data || (i.data = []);
            n._data !== a && (n._data && Z(n._data, n), a && Object.isExtensible(a) && (e = n, (t = a)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                configurable: !0,
                enumerable: !1,
                value: {
                    listeners: [e]
                }
            }), K.forEach((function(e) {
                var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                    i = t[e];
                Object.defineProperty(t, e, {
                    configurable: !0,
                    enumerable: !1,
                    value: function() {
                        var e = Array.prototype.slice.call(arguments),
                            a = i.apply(this, e);
                        return W.each(t._chartjs.listeners, (function(t) {
                            "function" == typeof t[n] && t[n].apply(t, e)
                        })), a
                    }
                })
            })))), n._data = a), n.resyncElements()
        },
        _configure: function() {
            this._config = W.merge({}, [this.chart.options.datasets[this._type], this.getDataset()], {
                merger: function(t, e, n) {
                    "_meta" !== t && "data" !== t && W._merger(t, e, n)
                }
            })
        },
        _update: function(t) {
            this._configure(), this._cachedDataOpts = null, this.update(t)
        },
        update: W.noop,
        transition: function(t) {
            for (var e = this.getMeta(), n = e.data || [], i = n.length, a = 0; a < i; ++a) n[a].transition(t);
            e.dataset && e.dataset.transition(t)
        },
        draw: function() {
            var t = this.getMeta(),
                e = t.data || [],
                n = e.length,
                i = 0;
            for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw()
        },
        getStyle: function(t) {
            var e, n = this.getMeta(),
                i = n.dataset;
            return this._configure(), !1 !== (e = i && void 0 === t ? this._resolveDatasetElementOptions(i || {}) : this._resolveDataElementOptions(n.data[t = t || 0] || {}, t)).fill && null !== e.fill || (e.backgroundColor = e.borderColor), e
        },
        _resolveDatasetElementOptions: function(t, e) {
            var n, i, a, r, o = this,
                s = o.chart,
                l = o._config,
                u = t.custom || {},
                d = s.options.elements[o.datasetElementType.prototype._type] || {},
                h = o._datasetElementOptions,
                c = {},
                f = {
                    chart: s,
                    dataset: o.getDataset(),
                    datasetIndex: o.index,
                    hover: e
                };
            for (n = 0, i = h.length; n < i; ++n) a = h[n], r = e ? "hover" + a.charAt(0).toUpperCase() + a.slice(1) : a, c[a] = X([u[r], l[r], d[r]], f);
            return c
        },
        _resolveDataElementOptions: function(t, e) {
            var n = this,
                i = t && t.custom,
                a = n._cachedDataOpts;
            if (a && !i) return a;
            var r, o, s, l, u = n.chart,
                d = n._config,
                h = u.options.elements[n.dataElementType.prototype._type] || {},
                c = n._dataElementOptions,
                f = {},
                g = {
                    chart: u,
                    dataIndex: e,
                    dataset: n.getDataset(),
                    datasetIndex: n.index
                },
                p = {
                    cacheable: !i
                };
            if (i = i || {}, W.isArray(c))
                for (o = 0, s = c.length; o < s; ++o) f[l = c[o]] = X([i[l], d[l], h[l]], g, e, p);
            else
                for (o = 0, s = (r = Object.keys(c)).length; o < s; ++o) f[l = r[o]] = X([i[l], d[c[l]], d[l], h[l]], g, e, p);
            return p.cacheable && (n._cachedDataOpts = Object.freeze(f)), f
        },
        removeHoverStyle: function(t) {
            W.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
        },
        setHoverStyle: function(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                i = t.custom || {},
                a = t._model,
                r = W.getHoverColor;
            t.$previousStyle = {
                backgroundColor: a.backgroundColor,
                borderColor: a.borderColor,
                borderWidth: a.borderWidth
            }, a.backgroundColor = X([i.hoverBackgroundColor, e.hoverBackgroundColor, r(a.backgroundColor)], void 0, n), a.borderColor = X([i.hoverBorderColor, e.hoverBorderColor, r(a.borderColor)], void 0, n), a.borderWidth = X([i.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth], void 0, n)
        },
        _removeDatasetHoverStyle: function() {
            var t = this.getMeta().dataset;
            t && this.removeHoverStyle(t)
        },
        _setDatasetHoverStyle: function() {
            var t, e, n, i, a, r, o = this.getMeta().dataset,
                s = {};
            if (o) {
                for (r = o._model, a = this._resolveDatasetElementOptions(o, !0), t = 0, e = (i = Object.keys(a)).length; t < e; ++t) s[n = i[t]] = r[n], r[n] = a[n];
                o.$previousStyle = s
            }
        },
        resyncElements: function() {
            var t = this.getMeta(),
                e = this.getDataset().data,
                n = t.data.length,
                i = e.length;
            i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n)
        },
        insertElements: function(t, e) {
            for (var n = 0; n < e; ++n) this.addElementAndReset(t + n)
        },
        onDataPush: function() {
            var t = arguments.length;
            this.insertElements(this.getDataset().data.length - t, t)
        },
        onDataPop: function() {
            this.getMeta().data.pop()
        },
        onDataShift: function() {
            this.getMeta().data.shift()
        },
        onDataSplice: function(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
        },
        onDataUnshift: function() {
            this.insertElements(0, arguments.length)
        }
    }), J.extend = W.inherits;
    var Q = J,
        tt = 2 * Math.PI;

    function et(t, e) {
        var n = e.startAngle,
            i = e.endAngle,
            a = e.pixelMargin,
            r = a / e.outerRadius,
            o = e.x,
            s = e.y;
        t.beginPath(), t.arc(o, s, e.outerRadius, n - r, i + r), e.innerRadius > a ? t.arc(o, s, e.innerRadius - a, i + (r = a / e.innerRadius), n - r, !0) : t.arc(o, s, a, i + Math.PI / 2, n - Math.PI / 2), t.closePath(), t.clip()
    }
    R._set("global", {
        elements: {
            arc: {
                backgroundColor: R.global.defaultColor,
                borderColor: "#fff",
                borderWidth: 2,
                borderAlign: "center"
            }
        }
    });
    var nt = U.extend({
            _type: "arc",
            inLabelRange: function(t) {
                var e = this._view;
                return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
            },
            inRange: function(t, e) {
                var n = this._view;
                if (n) {
                    for (var i = W.getAngleFromPoint(n, {
                            x: t,
                            y: e
                        }), a = i.angle, r = i.distance, o = n.startAngle, s = n.endAngle; s < o;) s += tt;
                    for (; a > s;) a -= tt;
                    for (; a < o;) a += tt;
                    return a >= o && a <= s && r >= n.innerRadius && r <= n.outerRadius
                }
                return !1
            },
            getCenterPoint: function() {
                var t = this._view,
                    e = (t.startAngle + t.endAngle) / 2,
                    n = (t.innerRadius + t.outerRadius) / 2;
                return {
                    x: t.x + Math.cos(e) * n,
                    y: t.y + Math.sin(e) * n
                }
            },
            getArea: function() {
                var t = this._view;
                return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
            },
            tooltipPosition: function() {
                var t = this._view,
                    e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                    n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                return {
                    x: t.x + Math.cos(e) * n,
                    y: t.y + Math.sin(e) * n
                }
            },
            draw: function() {
                var t, e = this._chart.ctx,
                    n = this._view,
                    i = "inner" === n.borderAlign ? .33 : 0,
                    a = {
                        x: n.x,
                        y: n.y,
                        innerRadius: n.innerRadius,
                        outerRadius: Math.max(n.outerRadius - i, 0),
                        pixelMargin: i,
                        startAngle: n.startAngle,
                        endAngle: n.endAngle,
                        fullCircles: Math.floor(n.circumference / tt)
                    };
                if (e.save(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, a.fullCircles) {
                    for (a.endAngle = a.startAngle + tt, e.beginPath(), e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle), e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0), e.closePath(), t = 0; t < a.fullCircles; ++t) e.fill();
                    a.endAngle = a.startAngle + n.circumference % tt
                }
                e.beginPath(), e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle), e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0), e.closePath(), e.fill(), n.borderWidth && function(t, e, n) {
                    var i = "inner" === e.borderAlign;
                    i ? (t.lineWidth = 2 * e.borderWidth, t.lineJoin = "round") : (t.lineWidth = e.borderWidth, t.lineJoin = "bevel"), n.fullCircles && function(t, e, n, i) {
                        var a, r = n.endAngle;
                        for (i && (n.endAngle = n.startAngle + tt, et(t, n), n.endAngle = r, n.endAngle === n.startAngle && n.fullCircles && (n.endAngle += tt, n.fullCircles--)), t.beginPath(), t.arc(n.x, n.y, n.innerRadius, n.startAngle + tt, n.startAngle, !0), a = 0; a < n.fullCircles; ++a) t.stroke();
                        for (t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + tt), a = 0; a < n.fullCircles; ++a) t.stroke()
                    }(t, e, n, i), i && et(t, n), t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle), t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0), t.closePath(), t.stroke()
                }(e, n, a), e.restore()
            }
        }),
        it = W.valueOrDefault,
        at = R.global.defaultColor;
    R._set("global", {
        elements: {
            line: {
                tension: .4,
                backgroundColor: at,
                borderWidth: 3,
                borderColor: at,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                capBezierPoints: !0,
                fill: !0
            }
        }
    });
    var rt = U.extend({
            _type: "line",
            draw: function() {
                var t, e, n, i = this,
                    a = i._view,
                    r = i._chart.ctx,
                    o = a.spanGaps,
                    s = i._children.slice(),
                    l = R.global,
                    u = l.elements.line,
                    d = -1,
                    h = i._loop;
                if (s.length) {
                    if (i._loop) {
                        for (t = 0; t < s.length; ++t)
                            if (e = W.previousItem(s, t), !s[t]._view.skip && e._view.skip) {
                                s = s.slice(t).concat(s.slice(0, t)), h = o;
                                break
                            } h && s.push(s[0])
                    }
                    for (r.save(), r.lineCap = a.borderCapStyle || u.borderCapStyle, r.setLineDash && r.setLineDash(a.borderDash || u.borderDash), r.lineDashOffset = it(a.borderDashOffset, u.borderDashOffset), r.lineJoin = a.borderJoinStyle || u.borderJoinStyle, r.lineWidth = it(a.borderWidth, u.borderWidth), r.strokeStyle = a.borderColor || l.defaultColor, r.beginPath(), (n = s[0]._view).skip || (r.moveTo(n.x, n.y), d = 0), t = 1; t < s.length; ++t) n = s[t]._view, e = -1 === d ? W.previousItem(s, t) : s[d], n.skip || (d !== t - 1 && !o || -1 === d ? r.moveTo(n.x, n.y) : W.canvas.lineTo(r, e._view, n), d = t);
                    h && r.closePath(), r.stroke(), r.restore()
                }
            }
        }),
        ot = W.valueOrDefault,
        st = R.global.defaultColor;

    function lt(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
    }
    R._set("global", {
        elements: {
            point: {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: st,
                borderColor: st,
                borderWidth: 1,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }
        }
    });
    var ut = U.extend({
            _type: "point",
            inRange: function(t, e) {
                var n = this._view;
                return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
            },
            inLabelRange: lt,
            inXRange: lt,
            inYRange: function(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
            },
            getCenterPoint: function() {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y
                }
            },
            getArea: function() {
                return Math.PI * Math.pow(this._view.radius, 2)
            },
            tooltipPosition: function() {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y,
                    padding: t.radius + t.borderWidth
                }
            },
            draw: function(t) {
                var e = this._view,
                    n = this._chart.ctx,
                    i = e.pointStyle,
                    a = e.rotation,
                    r = e.radius,
                    o = e.x,
                    s = e.y,
                    l = R.global,
                    u = l.defaultColor;
                e.skip || (void 0 === t || W.canvas._isPointInArea(e, t)) && (n.strokeStyle = e.borderColor || u, n.lineWidth = ot(e.borderWidth, l.elements.point.borderWidth), n.fillStyle = e.backgroundColor || u, W.canvas.drawPoint(n, i, r, o, s, a))
            }
        }),
        dt = R.global.defaultColor;

    function ht(t) {
        return t && void 0 !== t.width
    }

    function ct(t) {
        var e, n, i, a, r;
        return ht(t) ? (e = t.x - (r = t.width / 2), n = t.x + r, i = Math.min(t.y, t.base), a = Math.max(t.y, t.base)) : (r = t.height / 2, e = Math.min(t.x, t.base), n = Math.max(t.x, t.base), i = t.y - r, a = t.y + r), {
            left: e,
            top: i,
            right: n,
            bottom: a
        }
    }

    function ft(t, e, n) {
        return t === e ? n : t === n ? e : t
    }

    function gt(t, e, n) {
        var i = null === e,
            a = null === n,
            r = !(!t || i && a) && ct(t);
        return r && (i || e >= r.left && e <= r.right) && (a || n >= r.top && n <= r.bottom)
    }
    R._set("global", {
        elements: {
            rectangle: {
                backgroundColor: dt,
                borderColor: dt,
                borderSkipped: "bottom",
                borderWidth: 0
            }
        }
    });
    var pt = U.extend({
            _type: "rectangle",
            draw: function() {
                var t = this._chart.ctx,
                    e = this._view,
                    n = function(t) {
                        var e = ct(t),
                            n = e.right - e.left,
                            i = e.bottom - e.top,
                            a = function(t, e, n) {
                                var i, a, r, o, s = t.borderWidth,
                                    l = function(t) {
                                        var e = t.borderSkipped,
                                            n = {};
                                        return e ? (t.horizontal ? t.base > t.x && (e = ft(e, "left", "right")) : t.base < t.y && (e = ft(e, "bottom", "top")), n[e] = !0, n) : n
                                    }(t);
                                return W.isObject(s) ? (i = +s.top || 0, a = +s.right || 0, r = +s.bottom || 0, o = +s.left || 0) : i = a = r = o = +s || 0, {
                                    t: l.top || i < 0 ? 0 : i > n ? n : i,
                                    r: l.right || a < 0 ? 0 : a > e ? e : a,
                                    b: l.bottom || r < 0 ? 0 : r > n ? n : r,
                                    l: l.left || o < 0 ? 0 : o > e ? e : o
                                }
                            }(t, n / 2, i / 2);
                        return {
                            outer: {
                                x: e.left,
                                y: e.top,
                                w: n,
                                h: i
                            },
                            inner: {
                                x: e.left + a.l,
                                y: e.top + a.t,
                                w: n - a.l - a.r,
                                h: i - a.t - a.b
                            }
                        }
                    }(e),
                    i = n.outer,
                    a = n.inner;
                t.fillStyle = e.backgroundColor, t.fillRect(i.x, i.y, i.w, i.h), i.w === a.w && i.h === a.h || (t.save(), t.beginPath(), t.rect(i.x, i.y, i.w, i.h), t.clip(), t.fillStyle = e.borderColor, t.rect(a.x, a.y, a.w, a.h), t.fill("evenodd"), t.restore())
            },
            height: function() {
                var t = this._view;
                return t.base - t.y
            },
            inRange: function(t, e) {
                return gt(this._view, t, e)
            },
            inLabelRange: function(t, e) {
                var n = this._view;
                return ht(n) ? gt(n, t, null) : gt(n, null, e)
            },
            inXRange: function(t) {
                return gt(this._view, t, null)
            },
            inYRange: function(t) {
                return gt(this._view, null, t)
            },
            getCenterPoint: function() {
                var t, e, n = this._view;
                return ht(n) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
                    x: t,
                    y: e
                }
            },
            getArea: function() {
                var t = this._view;
                return ht(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base)
            },
            tooltipPosition: function() {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y
                }
            }
        }),
        mt = {},
        vt = rt,
        bt = ut,
        xt = pt;
    mt.Arc = nt, mt.Line = vt, mt.Point = bt, mt.Rectangle = xt;
    var yt = W._deprecated,
        _t = W.valueOrDefault;
    R._set("bar", {
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }],
            yAxes: [{
                type: "linear"
            }]
        }
    }), R._set("global", {
        datasets: {
            bar: {
                categoryPercentage: .8,
                barPercentage: .9
            }
        }
    });
    var kt = Q.extend({
            dataElementType: mt.Rectangle,
            _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
            initialize: function() {
                var t, e, n = this;
                Q.prototype.initialize.apply(n, arguments), (t = n.getMeta()).stack = n.getDataset().stack, t.bar = !0, e = n._getIndexScale().options, yt("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), yt("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), yt("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), yt("bar chart", n._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), yt("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
            },
            update: function(t) {
                var e, n, i = this.getMeta().data;
                for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e) this.updateElement(i[e], e, t)
            },
            updateElement: function(t, e, n) {
                var i = this,
                    a = i.getMeta(),
                    r = i.getDataset(),
                    o = i._resolveDataElementOptions(t, e);
                t._xScale = i.getScaleForId(a.xAxisID), t._yScale = i.getScaleForId(a.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
                    backgroundColor: o.backgroundColor,
                    borderColor: o.borderColor,
                    borderSkipped: o.borderSkipped,
                    borderWidth: o.borderWidth,
                    datasetLabel: r.label,
                    label: i.chart.data.labels[e]
                }, W.isArray(r.data[e]) && (t._model.borderSkipped = null), i._updateElementGeometry(t, e, n, o), t.pivot()
            },
            _updateElementGeometry: function(t, e, n, i) {
                var a = this,
                    r = t._model,
                    o = a._getValueScale(),
                    s = o.getBasePixel(),
                    l = o.isHorizontal(),
                    u = a._ruler || a.getRuler(),
                    d = a.calculateBarValuePixels(a.index, e, i),
                    h = a.calculateBarIndexPixels(a.index, e, u, i);
                r.horizontal = l, r.base = n ? s : d.base, r.x = l ? n ? s : d.head : h.center, r.y = l ? h.center : n ? s : d.head, r.height = l ? h.size : void 0, r.width = l ? void 0 : h.size
            },
            _getStacks: function(t) {
                var e, n, i = this._getIndexScale(),
                    a = i._getMatchingVisibleMetas(this._type),
                    r = i.options.stacked,
                    o = a.length,
                    s = [];
                for (e = 0; e < o && (n = a[e], (!1 === r || -1 === s.indexOf(n.stack) || void 0 === r && void 0 === n.stack) && s.push(n.stack), n.index !== t); ++e);
                return s
            },
            getStackCount: function() {
                return this._getStacks().length
            },
            getStackIndex: function(t, e) {
                var n = this._getStacks(t),
                    i = void 0 !== e ? n.indexOf(e) : -1;
                return -1 === i ? n.length - 1 : i
            },
            getRuler: function() {
                var t, e, n = this._getIndexScale(),
                    i = [];
                for (t = 0, e = this.getMeta().data.length; t < e; ++t) i.push(n.getPixelForValue(null, t, this.index));
                return {
                    pixels: i,
                    start: n._startPixel,
                    end: n._endPixel,
                    stackCount: this.getStackCount(),
                    scale: n
                }
            },
            calculateBarValuePixels: function(t, e, n) {
                var i, a, r, o, s, l, u, d = this.chart,
                    h = this._getValueScale(),
                    c = h.isHorizontal(),
                    f = d.data.datasets,
                    g = h._getMatchingVisibleMetas(this._type),
                    p = h._parseValue(f[t].data[e]),
                    m = n.minBarLength,
                    v = h.options.stacked,
                    b = this.getMeta().stack,
                    x = void 0 === p.start ? 0 : p.max >= 0 && p.min >= 0 ? p.min : p.max,
                    y = void 0 === p.start ? p.end : p.max >= 0 && p.min >= 0 ? p.max - p.min : p.min - p.max,
                    _ = g.length;
                if (v || void 0 === v && void 0 !== b)
                    for (i = 0; i < _ && (a = g[i]).index !== t; ++i) a.stack === b && (r = void 0 === (u = h._parseValue(f[a.index].data[e])).start ? u.end : u.min >= 0 && u.max >= 0 ? u.max : u.min, (p.min < 0 && r < 0 || p.max >= 0 && r > 0) && (x += r));
                return o = h.getPixelForValue(x), l = (s = h.getPixelForValue(x + y)) - o, void 0 !== m && Math.abs(l) < m && (l = m, s = y >= 0 && !c || y < 0 && c ? o - m : o + m), {
                    size: l,
                    base: o,
                    head: s,
                    center: s + l / 2
                }
            },
            calculateBarIndexPixels: function(t, e, n, i) {
                var a = "flex" === i.barThickness ? function(t, e, n) {
                        var i, a = e.pixels,
                            r = a[t],
                            o = t > 0 ? a[t - 1] : null,
                            s = t < a.length - 1 ? a[t + 1] : null,
                            l = n.categoryPercentage;
                        return null === o && (o = r - (null === s ? e.end - e.start : s - r)), null === s && (s = r + r - o), i = r - (r - Math.min(o, s)) / 2 * l, {
                            chunk: Math.abs(s - o) / 2 * l / e.stackCount,
                            ratio: n.barPercentage,
                            start: i
                        }
                    }(e, n, i) : function(t, e, n) {
                        var i, a, r = n.barThickness,
                            o = e.stackCount,
                            s = e.pixels[t],
                            l = W.isNullOrUndef(r) ? function(t, e) {
                                var n, i, a, r, o = t._length;
                                for (a = 1, r = e.length; a < r; ++a) o = Math.min(o, Math.abs(e[a] - e[a - 1]));
                                for (a = 0, r = t.getTicks().length; a < r; ++a) i = t.getPixelForTick(a), o = a > 0 ? Math.min(o, Math.abs(i - n)) : o, n = i;
                                return o
                            }(e.scale, e.pixels) : -1;
                        return W.isNullOrUndef(r) ? (i = l * n.categoryPercentage, a = n.barPercentage) : (i = r * o, a = 1), {
                            chunk: i / o,
                            ratio: a,
                            start: s - i / 2
                        }
                    }(e, n, i),
                    r = this.getStackIndex(t, this.getMeta().stack),
                    o = a.start + a.chunk * r + a.chunk / 2,
                    s = Math.min(_t(i.maxBarThickness, 1 / 0), a.chunk * a.ratio);
                return {
                    base: o - s / 2,
                    head: o + s / 2,
                    center: o,
                    size: s
                }
            },
            draw: function() {
                var t = this.chart,
                    e = this._getValueScale(),
                    n = this.getMeta().data,
                    i = this.getDataset(),
                    a = n.length,
                    r = 0;
                for (W.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) {
                    var o = e._parseValue(i.data[r]);
                    isNaN(o.min) || isNaN(o.max) || n[r].draw()
                }
                W.canvas.unclipArea(t.ctx)
            },
            _resolveDataElementOptions: function() {
                var t = this,
                    e = W.extend({}, Q.prototype._resolveDataElementOptions.apply(t, arguments)),
                    n = t._getIndexScale().options,
                    i = t._getValueScale().options;
                return e.barPercentage = _t(n.barPercentage, e.barPercentage), e.barThickness = _t(n.barThickness, e.barThickness), e.categoryPercentage = _t(n.categoryPercentage, e.categoryPercentage), e.maxBarThickness = _t(n.maxBarThickness, e.maxBarThickness), e.minBarLength = _t(i.minBarLength, e.minBarLength), e
            }
        }),
        wt = W.valueOrDefault,
        Mt = W.options.resolve;
    R._set("bubble", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                position: "left",
                id: "y-axis-0"
            }]
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    return (e.datasets[t.datasetIndex].label || "") + ": (" + t.xLabel + ", " + t.yLabel + ", " + e.datasets[t.datasetIndex].data[t.index].r + ")"
                }
            }
        }
    });
    var St = Q.extend({
            dataElementType: mt.Point,
            _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
            update: function(t) {
                var e = this,
                    n = e.getMeta();
                W.each(n.data, (function(n, i) {
                    e.updateElement(n, i, t)
                }))
            },
            updateElement: function(t, e, n) {
                var i = this,
                    a = i.getMeta(),
                    r = t.custom || {},
                    o = i.getScaleForId(a.xAxisID),
                    s = i.getScaleForId(a.yAxisID),
                    l = i._resolveDataElementOptions(t, e),
                    u = i.getDataset().data[e],
                    d = i.index,
                    h = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof u ? u : NaN, e, d),
                    c = n ? s.getBasePixel() : s.getPixelForValue(u, e, d);
                t._xScale = o, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
                    backgroundColor: l.backgroundColor,
                    borderColor: l.borderColor,
                    borderWidth: l.borderWidth,
                    hitRadius: l.hitRadius,
                    pointStyle: l.pointStyle,
                    rotation: l.rotation,
                    radius: n ? 0 : l.radius,
                    skip: r.skip || isNaN(h) || isNaN(c),
                    x: h,
                    y: c
                }, t.pivot()
            },
            setHoverStyle: function(t) {
                var e = t._model,
                    n = t._options,
                    i = W.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                }, e.backgroundColor = wt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = wt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = wt(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius
            },
            _resolveDataElementOptions: function(t, e) {
                var n = this,
                    i = n.chart,
                    a = n.getDataset(),
                    r = t.custom || {},
                    o = a.data[e] || {},
                    s = Q.prototype._resolveDataElementOptions.apply(n, arguments),
                    l = {
                        chart: i,
                        dataIndex: e,
                        dataset: a,
                        datasetIndex: n.index
                    };
                return n._cachedDataOpts === s && (s = W.extend({}, s)), s.radius = Mt([r.radius, o.r, n._config.radius, i.options.elements.point.radius], l, e), s
            }
        }),
        Ct = W.valueOrDefault,
        Pt = Math.PI,
        At = 2 * Pt,
        Dt = Pt / 2;
    R._set("doughnut", {
        animation: {
            animateRotate: !0,
            animateScale: !1
        },
        hover: {
            mode: "single"
        },
        legendCallback: function(t) {
            var e, n, i, a = document.createElement("ul"),
                r = t.data,
                o = r.datasets,
                s = r.labels;
            if (a.setAttribute("class", t.id + "-legend"), o.length)
                for (e = 0, n = o[0].data.length; e < n; ++e)(i = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e]));
            return a.outerHTML
        },
        legend: {
            labels: {
                generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map((function(n, i) {
                        var a = t.getDatasetMeta(0),
                            r = a.controller.getStyle(i);
                        return {
                            text: n,
                            fillStyle: r.backgroundColor,
                            strokeStyle: r.borderColor,
                            lineWidth: r.borderWidth,
                            hidden: isNaN(e.datasets[0].data[i]) || a.data[i].hidden,
                            index: i
                        }
                    })) : []
                }
            },
            onClick: function(t, e) {
                var n, i, a, r = e.index,
                    o = this.chart;
                for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)(a = o.getDatasetMeta(n)).data[r] && (a.data[r].hidden = !a.data[r].hidden);
                o.update()
            }
        },
        cutoutPercentage: 50,
        rotation: -Dt,
        circumference: At,
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    var n = e.labels[t.index],
                        i = ": " + e.datasets[t.datasetIndex].data[t.index];
                    return W.isArray(n) ? (n = n.slice())[0] += i : n += i, n
                }
            }
        }
    });
    var Tt = Q.extend({
        dataElementType: mt.Arc,
        linkScales: W.noop,
        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
        getRingIndex: function(t) {
            for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
            return e
        },
        update: function(t) {
            var e, n, i = this,
                a = i.chart,
                r = a.chartArea,
                o = a.options,
                s = 1,
                l = 1,
                u = 0,
                d = 0,
                h = i.getMeta(),
                c = h.data,
                f = o.cutoutPercentage / 100 || 0,
                g = o.circumference,
                p = i._getRingWeight(i.index);
            if (g < At) {
                var m = o.rotation % At,
                    v = (m += m >= Pt ? -At : m < -Pt ? At : 0) + g,
                    b = Math.cos(m),
                    x = Math.sin(m),
                    y = Math.cos(v),
                    _ = Math.sin(v),
                    k = m <= 0 && v >= 0 || v >= At,
                    w = m <= Dt && v >= Dt || v >= At + Dt,
                    M = m <= -Dt && v >= -Dt || v >= Pt + Dt,
                    S = m === -Pt || v >= Pt ? -1 : Math.min(b, b * f, y, y * f),
                    C = M ? -1 : Math.min(x, x * f, _, _ * f),
                    P = k ? 1 : Math.max(b, b * f, y, y * f),
                    A = w ? 1 : Math.max(x, x * f, _, _ * f);
                s = (P - S) / 2, l = (A - C) / 2, u = -(P + S) / 2, d = -(A + C) / 2
            }
            for (e = 0, n = c.length; e < n; ++e) c[e]._options = i._resolveDataElementOptions(c[e], e);
            for (a.borderWidth = i.getMaxBorderWidth(), a.outerRadius = Math.max(Math.min((r.right - r.left - a.borderWidth) / s, (r.bottom - r.top - a.borderWidth) / l) / 2, 0), a.innerRadius = Math.max(a.outerRadius * f, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / (i._getVisibleDatasetWeightTotal() || 1), a.offsetX = u * a.outerRadius, a.offsetY = d * a.outerRadius, h.total = i.calculateTotal(), i.outerRadius = a.outerRadius - a.radiusLength * i._getRingWeightOffset(i.index), i.innerRadius = Math.max(i.outerRadius - a.radiusLength * p, 0), e = 0, n = c.length; e < n; ++e) i.updateElement(c[e], e, t)
        },
        updateElement: function(t, e, n) {
            var i = this,
                a = i.chart,
                r = a.chartArea,
                o = a.options,
                s = o.animation,
                l = (r.left + r.right) / 2,
                u = (r.top + r.bottom) / 2,
                d = o.rotation,
                h = o.rotation,
                c = i.getDataset(),
                f = n && s.animateRotate || t.hidden ? 0 : i.calculateCircumference(c.data[e]) * (o.circumference / At),
                g = t._options || {};
            W.extend(t, {
                _datasetIndex: i.index,
                _index: e,
                _model: {
                    backgroundColor: g.backgroundColor,
                    borderColor: g.borderColor,
                    borderWidth: g.borderWidth,
                    borderAlign: g.borderAlign,
                    x: l + a.offsetX,
                    y: u + a.offsetY,
                    startAngle: d,
                    endAngle: h,
                    circumference: f,
                    outerRadius: n && s.animateScale ? 0 : i.outerRadius,
                    innerRadius: n && s.animateScale ? 0 : i.innerRadius,
                    label: W.valueAtIndexOrDefault(c.label, e, a.data.labels[e])
                }
            });
            var p = t._model;
            n && s.animateRotate || (p.startAngle = 0 === e ? o.rotation : i.getMeta().data[e - 1]._model.endAngle, p.endAngle = p.startAngle + p.circumference), t.pivot()
        },
        calculateTotal: function() {
            var t, e = this.getDataset(),
                n = this.getMeta(),
                i = 0;
            return W.each(n.data, (function(n, a) {
                t = e.data[a], isNaN(t) || n.hidden || (i += Math.abs(t))
            })), i
        },
        calculateCircumference: function(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? At * (Math.abs(t) / e) : 0
        },
        getMaxBorderWidth: function(t) {
            var e, n, i, a, r, o, s, l, u = 0,
                d = this.chart;
            if (!t)
                for (e = 0, n = d.data.datasets.length; e < n; ++e)
                    if (d.isDatasetVisible(e)) {
                        t = (i = d.getDatasetMeta(e)).data, e !== this.index && (r = i.controller);
                        break
                    } if (!t) return 0;
            for (e = 0, n = t.length; e < n; ++e) a = t[e], r ? (r._configure(), o = r._resolveDataElementOptions(a, e)) : o = a._options, "inner" !== o.borderAlign && (u = (l = o.hoverBorderWidth) > (u = (s = o.borderWidth) > u ? s : u) ? l : u);
            return u
        },
        setHoverStyle: function(t) {
            var e = t._model,
                n = t._options,
                i = W.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = Ct(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Ct(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Ct(n.hoverBorderWidth, n.borderWidth)
        },
        _getRingWeightOffset: function(t) {
            for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
            return e
        },
        _getRingWeight: function(t) {
            return Math.max(Ct(this.chart.data.datasets[t].weight, 1), 0)
        },
        _getVisibleDatasetWeightTotal: function() {
            return this._getRingWeightOffset(this.chart.data.datasets.length)
        }
    });
    R._set("horizontalBar", {
        hover: {
            mode: "index",
            axis: "y"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                type: "category",
                position: "left",
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }]
        },
        elements: {
            rectangle: {
                borderSkipped: "left"
            }
        },
        tooltips: {
            mode: "index",
            axis: "y"
        }
    }), R._set("global", {
        datasets: {
            horizontalBar: {
                categoryPercentage: .8,
                barPercentage: .9
            }
        }
    });
    var It = kt.extend({
            _getValueScaleId: function() {
                return this.getMeta().xAxisID
            },
            _getIndexScaleId: function() {
                return this.getMeta().yAxisID
            }
        }),
        Ft = W.valueOrDefault,
        Ot = W.options.resolve,
        Lt = W.canvas._isPointInArea;

    function Rt(t, e) {
        var n = t && t.options.ticks || {},
            i = n.reverse,
            a = void 0 === n.min ? e : 0,
            r = void 0 === n.max ? e : 0;
        return {
            start: i ? r : a,
            end: i ? a : r
        }
    }

    function zt(t, e, n) {
        var i = n / 2,
            a = Rt(t, i),
            r = Rt(e, i);
        return {
            top: r.end,
            right: a.end,
            bottom: r.start,
            left: a.start
        }
    }

    function Nt(t) {
        var e, n, i, a;
        return W.isObject(t) ? (e = t.top, n = t.right, i = t.bottom, a = t.left) : e = n = i = a = t, {
            top: e,
            right: n,
            bottom: i,
            left: a
        }
    }
    R._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                id: "y-axis-0"
            }]
        }
    });
    var Bt = Q.extend({
            datasetElementType: mt.Line,
            dataElementType: mt.Point,
            _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
            _dataElementOptions: {
                backgroundColor: "pointBackgroundColor",
                borderColor: "pointBorderColor",
                borderWidth: "pointBorderWidth",
                hitRadius: "pointHitRadius",
                hoverBackgroundColor: "pointHoverBackgroundColor",
                hoverBorderColor: "pointHoverBorderColor",
                hoverBorderWidth: "pointHoverBorderWidth",
                hoverRadius: "pointHoverRadius",
                pointStyle: "pointStyle",
                radius: "pointRadius",
                rotation: "pointRotation"
            },
            update: function(t) {
                var e, n, i = this,
                    a = i.getMeta(),
                    r = a.dataset,
                    o = a.data || [],
                    s = i._config,
                    l = i._showLine = Ft(s.showLine, i.chart.options.showLines);
                for (i._xScale = i.getScaleForId(a.xAxisID), i._yScale = i.getScaleForId(a.yAxisID), l && (void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), r._scale = i._yScale, r._datasetIndex = i.index, r._children = o, r._model = i._resolveDatasetElementOptions(r), r.pivot()), e = 0, n = o.length; e < n; ++e) i.updateElement(o[e], e, t);
                for (l && 0 !== r._model.tension && i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e) o[e].pivot()
            },
            updateElement: function(t, e, n) {
                var i, a, r = this,
                    o = r.getMeta(),
                    s = t.custom || {},
                    l = r.getDataset(),
                    u = r.index,
                    d = l.data[e],
                    h = r._xScale,
                    c = r._yScale,
                    f = o.dataset._model,
                    g = r._resolveDataElementOptions(t, e);
                i = h.getPixelForValue("object" == typeof d ? d : NaN, e, u), a = n ? c.getBasePixel() : r.calculatePointY(d, e, u), t._xScale = h, t._yScale = c, t._options = g, t._datasetIndex = u, t._index = e, t._model = {
                    x: i,
                    y: a,
                    skip: s.skip || isNaN(i) || isNaN(a),
                    radius: g.radius,
                    pointStyle: g.pointStyle,
                    rotation: g.rotation,
                    backgroundColor: g.backgroundColor,
                    borderColor: g.borderColor,
                    borderWidth: g.borderWidth,
                    tension: Ft(s.tension, f ? f.tension : 0),
                    steppedLine: !!f && f.steppedLine,
                    hitRadius: g.hitRadius
                }
            },
            _resolveDatasetElementOptions: function(t) {
                var e = this,
                    n = e._config,
                    i = t.custom || {},
                    a = e.chart.options,
                    r = a.elements.line,
                    o = Q.prototype._resolveDatasetElementOptions.apply(e, arguments);
                return o.spanGaps = Ft(n.spanGaps, a.spanGaps), o.tension = Ft(n.lineTension, r.tension), o.steppedLine = Ot([i.steppedLine, n.steppedLine, r.stepped]), o.clip = Nt(Ft(n.clip, zt(e._xScale, e._yScale, o.borderWidth))), o
            },
            calculatePointY: function(t, e, n) {
                var i, a, r, o, s, l, u = this.chart,
                    d = this._yScale,
                    h = 0,
                    c = 0;
                if (d.options.stacked) {
                    for (o = +d.getRightValue(t), l = (s = u._getSortedVisibleDatasetMetas()).length, i = 0; i < l && (a = s[i]).index !== n; ++i) "line" === a.type && a.yAxisID === d.id && ((r = +d.getRightValue(u.data.datasets[a.index].data[e])) < 0 ? c += r || 0 : h += r || 0);
                    return d.getPixelForValue(o < 0 ? c + o : h + o)
                }
                return d.getPixelForValue(t)
            },
            updateBezierControlPoints: function() {
                var t, e, n, i, a = this.chart,
                    r = this.getMeta(),
                    o = r.dataset._model,
                    s = a.chartArea,
                    l = r.data || [];

                function u(t, e, n) {
                    return Math.max(Math.min(t, n), e)
                }
                if (o.spanGaps && (l = l.filter((function(t) {
                        return !t._model.skip
                    }))), "monotone" === o.cubicInterpolationMode) W.splineCurveMonotone(l);
                else
                    for (t = 0, e = l.length; t < e; ++t) n = l[t]._model, i = W.splineCurve(W.previousItem(l, t)._model, n, W.nextItem(l, t)._model, o.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
                if (a.options.elements.line.capBezierPoints)
                    for (t = 0, e = l.length; t < e; ++t) Lt(n = l[t]._model, s) && (t > 0 && Lt(l[t - 1]._model, s) && (n.controlPointPreviousX = u(n.controlPointPreviousX, s.left, s.right), n.controlPointPreviousY = u(n.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && Lt(l[t + 1]._model, s) && (n.controlPointNextX = u(n.controlPointNextX, s.left, s.right), n.controlPointNextY = u(n.controlPointNextY, s.top, s.bottom)))
            },
            draw: function() {
                var t, e = this.chart,
                    n = this.getMeta(),
                    i = n.data || [],
                    a = e.chartArea,
                    r = e.canvas,
                    o = 0,
                    s = i.length;
                for (this._showLine && (W.canvas.clipArea(e.ctx, {
                        left: !1 === (t = n.dataset._model.clip).left ? 0 : a.left - t.left,
                        right: !1 === t.right ? r.width : a.right + t.right,
                        top: !1 === t.top ? 0 : a.top - t.top,
                        bottom: !1 === t.bottom ? r.height : a.bottom + t.bottom
                    }), n.dataset.draw(), W.canvas.unclipArea(e.ctx)); o < s; ++o) i[o].draw(a)
            },
            setHoverStyle: function(t) {
                var e = t._model,
                    n = t._options,
                    i = W.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                }, e.backgroundColor = Ft(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Ft(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Ft(n.hoverBorderWidth, n.borderWidth), e.radius = Ft(n.hoverRadius, n.radius)
            }
        }),
        Et = W.options.resolve;
    R._set("polarArea", {
        scale: {
            type: "radialLinear",
            angleLines: {
                display: !1
            },
            gridLines: {
                circular: !0
            },
            pointLabels: {
                display: !1
            },
            ticks: {
                beginAtZero: !0
            }
        },
        animation: {
            animateRotate: !0,
            animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function(t) {
            var e, n, i, a = document.createElement("ul"),
                r = t.data,
                o = r.datasets,
                s = r.labels;
            if (a.setAttribute("class", t.id + "-legend"), o.length)
                for (e = 0, n = o[0].data.length; e < n; ++e)(i = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e]));
            return a.outerHTML
        },
        legend: {
            labels: {
                generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map((function(n, i) {
                        var a = t.getDatasetMeta(0),
                            r = a.controller.getStyle(i);
                        return {
                            text: n,
                            fillStyle: r.backgroundColor,
                            strokeStyle: r.borderColor,
                            lineWidth: r.borderWidth,
                            hidden: isNaN(e.datasets[0].data[i]) || a.data[i].hidden,
                            index: i
                        }
                    })) : []
                }
            },
            onClick: function(t, e) {
                var n, i, a, r = e.index,
                    o = this.chart;
                for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)(a = o.getDatasetMeta(n)).data[r].hidden = !a.data[r].hidden;
                o.update()
            }
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    return e.labels[t.index] + ": " + t.yLabel
                }
            }
        }
    });
    var Wt = Q.extend({
        dataElementType: mt.Arc,
        linkScales: W.noop,
        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
        _getIndexScaleId: function() {
            return this.chart.scale.id
        },
        _getValueScaleId: function() {
            return this.chart.scale.id
        },
        update: function(t) {
            var e, n, i, a = this,
                r = a.getDataset(),
                o = a.getMeta(),
                s = a.chart.options.startAngle || 0,
                l = a._starts = [],
                u = a._angles = [],
                d = o.data;
            for (a._updateRadius(), o.count = a.countVisibleElements(), e = 0, n = r.data.length; e < n; e++) l[e] = s, i = a._computeAngle(e), u[e] = i, s += i;
            for (e = 0, n = d.length; e < n; ++e) d[e]._options = a._resolveDataElementOptions(d[e], e), a.updateElement(d[e], e, t)
        },
        _updateRadius: function() {
            var t = this,
                e = t.chart,
                n = e.chartArea,
                i = e.options,
                a = Math.min(n.right - n.left, n.bottom - n.top);
            e.outerRadius = Math.max(a / 2, 0), e.innerRadius = Math.max(i.cutoutPercentage ? e.outerRadius / 100 * i.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
        },
        updateElement: function(t, e, n) {
            var i = this,
                a = i.chart,
                r = i.getDataset(),
                o = a.options,
                s = o.animation,
                l = a.scale,
                u = a.data.labels,
                d = l.xCenter,
                h = l.yCenter,
                c = o.startAngle,
                f = t.hidden ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
                g = i._starts[e],
                p = g + (t.hidden ? 0 : i._angles[e]),
                m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
                v = t._options || {};
            W.extend(t, {
                _datasetIndex: i.index,
                _index: e,
                _scale: l,
                _model: {
                    backgroundColor: v.backgroundColor,
                    borderColor: v.borderColor,
                    borderWidth: v.borderWidth,
                    borderAlign: v.borderAlign,
                    x: d,
                    y: h,
                    innerRadius: 0,
                    outerRadius: n ? m : f,
                    startAngle: n && s.animateRotate ? c : g,
                    endAngle: n && s.animateRotate ? c : p,
                    label: W.valueAtIndexOrDefault(u, e, u[e])
                }
            }), t.pivot()
        },
        countVisibleElements: function() {
            var t = this.getDataset(),
                e = this.getMeta(),
                n = 0;
            return W.each(e.data, (function(e, i) {
                isNaN(t.data[i]) || e.hidden || n++
            })), n
        },
        setHoverStyle: function(t) {
            var e = t._model,
                n = t._options,
                i = W.getHoverColor,
                a = W.valueOrDefault;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = a(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = a(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = a(n.hoverBorderWidth, n.borderWidth)
        },
        _computeAngle: function(t) {
            var e = this,
                n = this.getMeta().count,
                i = e.getDataset(),
                a = e.getMeta();
            return isNaN(i.data[t]) || a.data[t].hidden ? 0 : Et([e.chart.options.elements.arc.angle, 2 * Math.PI / n], {
                chart: e.chart,
                dataIndex: t,
                dataset: i,
                datasetIndex: e.index
            }, t)
        }
    });
    R._set("pie", W.clone(R.doughnut)), R._set("pie", {
        cutoutPercentage: 0
    });
    var Vt = Tt,
        Ht = W.valueOrDefault;
    R._set("radar", {
        spanGaps: !1,
        scale: {
            type: "radialLinear"
        },
        elements: {
            line: {
                fill: "start",
                tension: 0
            }
        }
    });
    var jt = Q.extend({
        datasetElementType: mt.Line,
        dataElementType: mt.Point,
        linkScales: W.noop,
        _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
        _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation"
        },
        _getIndexScaleId: function() {
            return this.chart.scale.id
        },
        _getValueScaleId: function() {
            return this.chart.scale.id
        },
        update: function(t) {
            var e, n, i = this,
                a = i.getMeta(),
                r = a.dataset,
                o = a.data || [],
                s = i.chart.scale,
                l = i._config;
            for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = s, r._datasetIndex = i.index, r._children = o, r._loop = !0, r._model = i._resolveDatasetElementOptions(r), r.pivot(), e = 0, n = o.length; e < n; ++e) i.updateElement(o[e], e, t);
            for (i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e) o[e].pivot()
        },
        updateElement: function(t, e, n) {
            var i = this,
                a = t.custom || {},
                r = i.getDataset(),
                o = i.chart.scale,
                s = o.getPointPositionForValue(e, r.data[e]),
                l = i._resolveDataElementOptions(t, e),
                u = i.getMeta().dataset._model,
                d = n ? o.xCenter : s.x,
                h = n ? o.yCenter : s.y;
            t._scale = o, t._options = l, t._datasetIndex = i.index, t._index = e, t._model = {
                x: d,
                y: h,
                skip: a.skip || isNaN(d) || isNaN(h),
                radius: l.radius,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                backgroundColor: l.backgroundColor,
                borderColor: l.borderColor,
                borderWidth: l.borderWidth,
                tension: Ht(a.tension, u ? u.tension : 0),
                hitRadius: l.hitRadius
            }
        },
        _resolveDatasetElementOptions: function() {
            var t = this,
                e = t._config,
                n = t.chart.options,
                i = Q.prototype._resolveDatasetElementOptions.apply(t, arguments);
            return i.spanGaps = Ht(e.spanGaps, n.spanGaps), i.tension = Ht(e.lineTension, n.elements.line.tension), i
        },
        updateBezierControlPoints: function() {
            var t, e, n, i, a = this.getMeta(),
                r = this.chart.chartArea,
                o = a.data || [];

            function s(t, e, n) {
                return Math.max(Math.min(t, n), e)
            }
            for (a.dataset._model.spanGaps && (o = o.filter((function(t) {
                    return !t._model.skip
                }))), t = 0, e = o.length; t < e; ++t) n = o[t]._model, i = W.splineCurve(W.previousItem(o, t, !0)._model, n, W.nextItem(o, t, !0)._model, n.tension), n.controlPointPreviousX = s(i.previous.x, r.left, r.right), n.controlPointPreviousY = s(i.previous.y, r.top, r.bottom), n.controlPointNextX = s(i.next.x, r.left, r.right), n.controlPointNextY = s(i.next.y, r.top, r.bottom)
        },
        setHoverStyle: function(t) {
            var e = t._model,
                n = t._options,
                i = W.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius
            }, e.backgroundColor = Ht(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Ht(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Ht(n.hoverBorderWidth, n.borderWidth), e.radius = Ht(n.hoverRadius, n.radius)
        }
    });
    R._set("scatter", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                id: "x-axis-1",
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                id: "y-axis-1",
                type: "linear",
                position: "left"
            }]
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t) {
                    return "(" + t.xLabel + ", " + t.yLabel + ")"
                }
            }
        }
    }), R._set("global", {
        datasets: {
            scatter: {
                showLine: !1
            }
        }
    });
    var qt = {
        bar: kt,
        bubble: St,
        doughnut: Tt,
        horizontalBar: It,
        line: Bt,
        polarArea: Wt,
        pie: Vt,
        radar: jt,
        scatter: Bt
    };

    function Ut(t, e) {
        return t.native ? {
            x: t.x,
            y: t.y
        } : W.getRelativePosition(t, e)
    }

    function Yt(t, e) {
        var n, i, a, r, o, s, l = t._getSortedVisibleDatasetMetas();
        for (i = 0, r = l.length; i < r; ++i)
            for (a = 0, o = (n = l[i].data).length; a < o; ++a)(s = n[a])._view.skip || e(s)
    }

    function $t(t, e) {
        var n = [];
        return Yt(t, (function(t) {
            t.inRange(e.x, e.y) && n.push(t)
        })), n
    }

    function Gt(t, e, n, i) {
        var a = Number.POSITIVE_INFINITY,
            r = [];
        return Yt(t, (function(t) {
            if (!n || t.inRange(e.x, e.y)) {
                var o = t.getCenterPoint(),
                    s = i(e, o);
                s < a ? (r = [t], a = s) : s === a && r.push(t)
            }
        })), r
    }

    function Xt(t) {
        var e = -1 !== t.indexOf("x"),
            n = -1 !== t.indexOf("y");
        return function(t, i) {
            var a = e ? Math.abs(t.x - i.x) : 0,
                r = n ? Math.abs(t.y - i.y) : 0;
            return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2))
        }
    }

    function Kt(t, e, n) {
        var i = Ut(e, t);
        n.axis = n.axis || "x";
        var a = Xt(n.axis),
            r = n.intersect ? $t(t, i) : Gt(t, i, !1, a),
            o = [];
        return r.length ? (t._getSortedVisibleDatasetMetas().forEach((function(t) {
            var e = t.data[r[0]._index];
            e && !e._view.skip && o.push(e)
        })), o) : []
    }
    var Zt = {
            modes: {
                single: function(t, e) {
                    var n = Ut(e, t),
                        i = [];
                    return Yt(t, (function(t) {
                        if (t.inRange(n.x, n.y)) return i.push(t), i
                    })), i.slice(0, 1)
                },
                label: Kt,
                index: Kt,
                dataset: function(t, e, n) {
                    var i = Ut(e, t);
                    n.axis = n.axis || "xy";
                    var a = Xt(n.axis),
                        r = n.intersect ? $t(t, i) : Gt(t, i, !1, a);
                    return r.length > 0 && (r = t.getDatasetMeta(r[0]._datasetIndex).data), r
                },
                "x-axis": function(t, e) {
                    return Kt(t, e, {
                        intersect: !1
                    })
                },
                point: function(t, e) {
                    return $t(t, Ut(e, t))
                },
                nearest: function(t, e, n) {
                    var i = Ut(e, t);
                    n.axis = n.axis || "xy";
                    var a = Xt(n.axis);
                    return Gt(t, i, n.intersect, a)
                },
                x: function(t, e, n) {
                    var i = Ut(e, t),
                        a = [],
                        r = !1;
                    return Yt(t, (function(t) {
                        t.inXRange(i.x) && a.push(t), t.inRange(i.x, i.y) && (r = !0)
                    })), n.intersect && !r && (a = []), a
                },
                y: function(t, e, n) {
                    var i = Ut(e, t),
                        a = [],
                        r = !1;
                    return Yt(t, (function(t) {
                        t.inYRange(i.y) && a.push(t), t.inRange(i.x, i.y) && (r = !0)
                    })), n.intersect && !r && (a = []), a
                }
            }
        },
        Jt = W.extend;

    function Qt(t, e) {
        return W.where(t, (function(t) {
            return t.pos === e
        }))
    }

    function te(t, e) {
        return t.sort((function(t, n) {
            var i = e ? n : t,
                a = e ? t : n;
            return i.weight === a.weight ? i.index - a.index : i.weight - a.weight
        }))
    }

    function ee(t, e, n, i) {
        return Math.max(t[n], e[n]) + Math.max(t[i], e[i])
    }

    function ne(t, e, n) {
        var i, a, r = n.box,
            o = t.maxPadding;
        if (n.size && (t[n.pos] -= n.size), n.size = n.horizontal ? r.height : r.width, t[n.pos] += n.size, r.getPadding) {
            var s = r.getPadding();
            o.top = Math.max(o.top, s.top), o.left = Math.max(o.left, s.left), o.bottom = Math.max(o.bottom, s.bottom), o.right = Math.max(o.right, s.right)
        }
        if (i = e.outerWidth - ee(o, t, "left", "right"), a = e.outerHeight - ee(o, t, "top", "bottom"), i !== t.w || a !== t.h) return t.w = i, t.h = a, n.horizontal ? i !== t.w : a !== t.h
    }

    function ie(t, e) {
        var n, i = e.maxPadding;
        return n = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }, (t ? ["left", "right"] : ["top", "bottom"]).forEach((function(t) {
            n[t] = Math.max(e[t], i[t])
        })), n
    }

    function ae(t, e, n) {
        var i, a, r, o, s, l, u = [];
        for (i = 0, a = t.length; i < a; ++i)(o = (r = t[i]).box).update(r.width || e.w, r.height || e.h, ie(r.horizontal, e)), ne(e, n, r) && (l = !0, u.length && (s = !0)), o.fullWidth || u.push(r);
        return s && ae(u, e, n) || l
    }

    function re(t, e, n) {
        var i, a, r, o, s = n.padding,
            l = e.x,
            u = e.y;
        for (i = 0, a = t.length; i < a; ++i) o = (r = t[i]).box, r.horizontal ? (o.left = o.fullWidth ? s.left : e.left, o.right = o.fullWidth ? n.outerWidth - s.right : e.left + e.w, o.top = u, o.bottom = u + o.height, o.width = o.right - o.left, u = o.bottom) : (o.left = l, o.right = l + o.width, o.top = e.top, o.bottom = e.top + e.h, o.height = o.bottom - o.top, l = o.right);
        e.x = l, e.y = u
    }
    R._set("global", {
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
    });
    var oe, se = {
            defaults: {},
            addBox: function(t, e) {
                t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
                    return [{
                        z: 0,
                        draw: function() {
                            e.draw.apply(e, arguments)
                        }
                    }]
                }, t.boxes.push(e)
            },
            removeBox: function(t, e) {
                var n = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== n && t.boxes.splice(n, 1)
            },
            configure: function(t, e, n) {
                for (var i, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; o < r; ++o) n.hasOwnProperty(i = a[o]) && (e[i] = n[i])
            },
            update: function(t, e, n) {
                if (t) {
                    var i = W.options.toPadding((t.options.layout || {}).padding),
                        a = e - i.width,
                        r = n - i.height,
                        o = function(t) {
                            var e = function(t) {
                                    var e, n, i, a = [];
                                    for (e = 0, n = (t || []).length; e < n; ++e) a.push({
                                        index: e,
                                        box: i = t[e],
                                        pos: i.position,
                                        horizontal: i.isHorizontal(),
                                        weight: i.weight
                                    });
                                    return a
                                }(t),
                                n = te(Qt(e, "left"), !0),
                                i = te(Qt(e, "right")),
                                a = te(Qt(e, "top"), !0),
                                r = te(Qt(e, "bottom"));
                            return {
                                leftAndTop: n.concat(a),
                                rightAndBottom: i.concat(r),
                                chartArea: Qt(e, "chartArea"),
                                vertical: n.concat(i),
                                horizontal: a.concat(r)
                            }
                        }(t.boxes),
                        s = o.vertical,
                        l = o.horizontal,
                        u = Object.freeze({
                            outerWidth: e,
                            outerHeight: n,
                            padding: i,
                            availableWidth: a,
                            vBoxMaxWidth: a / 2 / s.length,
                            hBoxMaxHeight: r / 2
                        }),
                        d = Jt({
                            maxPadding: Jt({}, i),
                            w: a,
                            h: r,
                            x: i.left,
                            y: i.top
                        }, i);
                    ! function(t, e) {
                        var n, i, a;
                        for (n = 0, i = t.length; n < i; ++n)(a = t[n]).width = a.horizontal ? a.box.fullWidth && e.availableWidth : e.vBoxMaxWidth, a.height = a.horizontal && e.hBoxMaxHeight
                    }(s.concat(l), u), ae(s, d, u), ae(l, d, u) && ae(s, d, u),
                        function(t) {
                            var e = t.maxPadding;

                            function n(n) {
                                var i = Math.max(e[n] - t[n], 0);
                                return t[n] += i, i
                            }
                            t.y += n("top"), t.x += n("left"), n("right"), n("bottom")
                        }(d), re(o.leftAndTop, d, u), d.x += d.w, d.y += d.h, re(o.rightAndBottom, d, u), t.chartArea = {
                            left: d.left,
                            top: d.top,
                            right: d.left + d.w,
                            bottom: d.top + d.h
                        }, W.each(o.chartArea, (function(e) {
                            var n = e.box;
                            Jt(n, t.chartArea), n.update(d.w, d.h)
                        }))
                }
            }
        },
        le = (oe = Object.freeze({
            __proto__: null,
            default: "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n"
        })) && oe.default || oe,
        ue = ["animationstart", "webkitAnimationStart"],
        de = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        };

    function he(t, e) {
        var n = W.getStyle(t, e),
            i = n && n.match(/^(\d+)(\.\d+)?px$/);
        return i ? Number(i[1]) : void 0
    }
    var ce = !! function() {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0
                }
            });
            window.addEventListener("e", null, e)
        } catch (n) {}
        return t
    }() && {
        passive: !0
    };

    function fe(t, e, n) {
        t.addEventListener(e, n, ce)
    }

    function ge(t, e, n) {
        t.removeEventListener(e, n, ce)
    }

    function pe(t, e, n, i, a) {
        return {
            type: t,
            chart: e,
            native: a || null,
            x: void 0 !== n ? n : null,
            y: void 0 !== i ? i : null
        }
    }

    function me(t) {
        var e = document.createElement("div");
        return e.className = t || "", e
    }
    var ve = {
        disableCSSInjection: !1,
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        _ensureLoaded: function(t) {
            if (!this.disableCSSInjection) {
                var e = t.getRootNode ? t.getRootNode() : document;
                ! function(t, e) {
                    var n = t.$chartjs || (t.$chartjs = {});
                    if (!n.containsStyles) {
                        n.containsStyles = !0, e = "/* Chart.js */\n" + e;
                        var i = document.createElement("style");
                        i.setAttribute("type", "text/css"), i.appendChild(document.createTextNode(e)), t.appendChild(i)
                    }
                }(e.host ? e : document.head, le)
            }
        },
        acquireContext: function(t, e) {
            "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
            var n = t && t.getContext && t.getContext("2d");
            return n && n.canvas === t ? (this._ensureLoaded(t), function(t, e) {
                var n = t.style,
                    i = t.getAttribute("height"),
                    a = t.getAttribute("width");
                if (t.$chartjs = {
                        initial: {
                            height: i,
                            width: a,
                            style: {
                                display: n.display,
                                height: n.height,
                                width: n.width
                            }
                        }
                    }, n.display = n.display || "block", null === a || "" === a) {
                    var r = he(t, "width");
                    void 0 !== r && (t.width = r)
                }
                if (null === i || "" === i)
                    if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                    else {
                        var o = he(t, "height");
                        void 0 !== r && (t.height = o)
                    }
            }(t, e), n) : null
        },
        releaseContext: function(t) {
            var e = t.canvas;
            if (e.$chartjs) {
                var n = e.$chartjs.initial;
                ["height", "width"].forEach((function(t) {
                    var i = n[t];
                    W.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i)
                })), W.each(n.style || {}, (function(t, n) {
                    e.style[n] = t
                })), e.width = e.width, delete e.$chartjs
            }
        },
        addEventListener: function(t, e, n) {
            var i = t.canvas;
            if ("resize" !== e) {
                var a = n.$chartjs || (n.$chartjs = {});
                fe(i, e, (a.proxies || (a.proxies = {}))[t.id + "_" + e] = function(e) {
                    n(function(t, e) {
                        var n = de[t.type] || t.type,
                            i = W.getRelativePosition(t, e);
                        return pe(n, e, i.x, i.y, t)
                    }(e, t))
                })
            } else ! function(t, e, n) {
                var i, a, r, o, s = t.$chartjs || (t.$chartjs = {}),
                    l = s.resizer = function(t) {
                        var e = me("chartjs-size-monitor"),
                            n = me("chartjs-size-monitor-expand"),
                            i = me("chartjs-size-monitor-shrink");
                        n.appendChild(me()), i.appendChild(me()), e.appendChild(n), e.appendChild(i), e._reset = function() {
                            n.scrollLeft = 1e6, n.scrollTop = 1e6, i.scrollLeft = 1e6, i.scrollTop = 1e6
                        };
                        var a = function() {
                            e._reset(), t()
                        };
                        return fe(n, "scroll", a.bind(n, "expand")), fe(i, "scroll", a.bind(i, "shrink")), e
                    }((i = function() {
                        if (s.resizer) {
                            var i = n.options.maintainAspectRatio && t.parentNode,
                                a = i ? i.clientWidth : 0;
                            e(pe("resize", n)), i && i.clientWidth < a && n.canvas && e(pe("resize", n))
                        }
                    }, r = !1, o = [], function() {
                        o = Array.prototype.slice.call(arguments), a = a || this, r || (r = !0, W.requestAnimFrame.call(window, (function() {
                            r = !1, i.apply(a, o)
                        })))
                    }));
                ! function(t, e) {
                    var n = t.$chartjs || (t.$chartjs = {}),
                        i = n.renderProxy = function(t) {
                            "chartjs-render-animation" === t.animationName && e()
                        };
                    W.each(ue, (function(e) {
                        fe(t, e, i)
                    })), n.reflow = !!t.offsetParent, t.classList.add("chartjs-render-monitor")
                }(t, (function() {
                    if (s.resizer) {
                        var e = t.parentNode;
                        e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset()
                    }
                }))
            }(i, n, t)
        },
        removeEventListener: function(t, e, n) {
            var i, a, r, o = t.canvas;
            if ("resize" !== e) {
                var s = ((n.$chartjs || {}).proxies || {})[t.id + "_" + e];
                s && ge(o, e, s)
            } else r = (a = (i = o).$chartjs || {}).resizer, delete a.resizer,
                function(t) {
                    var e = t.$chartjs || {},
                        n = e.renderProxy;
                    n && (W.each(ue, (function(e) {
                        ge(t, e, n)
                    })), delete e.renderProxy), t.classList.remove("chartjs-render-monitor")
                }(i), r && r.parentNode && r.parentNode.removeChild(r)
        }
    };
    W.addEvent = fe, W.removeEvent = ge;
    var be = W.extend({
        initialize: function() {},
        acquireContext: function() {},
        releaseContext: function() {},
        addEventListener: function() {},
        removeEventListener: function() {}
    }, ve._enabled ? ve : {
        acquireContext: function(t) {
            return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
        }
    });
    R._set("global", {
        plugins: {}
    });
    var xe = {
            _plugins: [],
            _cacheId: 0,
            register: function(t) {
                var e = this._plugins;
                [].concat(t).forEach((function(t) {
                    -1 === e.indexOf(t) && e.push(t)
                })), this._cacheId++
            },
            unregister: function(t) {
                var e = this._plugins;
                [].concat(t).forEach((function(t) {
                    var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                })), this._cacheId++
            },
            clear: function() {
                this._plugins = [], this._cacheId++
            },
            count: function() {
                return this._plugins.length
            },
            getAll: function() {
                return this._plugins
            },
            notify: function(t, e, n) {
                var i, a, r, o, s, l = this.descriptors(t),
                    u = l.length;
                for (i = 0; i < u; ++i)
                    if ("function" == typeof(s = (r = (a = l[i]).plugin)[e]) && ((o = [t].concat(n || [])).push(a.options), !1 === s.apply(r, o))) return !1;
                return !0
            },
            descriptors: function(t) {
                var e = t.$plugins || (t.$plugins = {});
                if (e.id === this._cacheId) return e.descriptors;
                var n = [],
                    i = [],
                    a = t && t.config || {},
                    r = a.options && a.options.plugins || {};
                return this._plugins.concat(a.plugins || []).forEach((function(t) {
                    if (-1 === n.indexOf(t)) {
                        var e = t.id,
                            a = r[e];
                        !1 !== a && (!0 === a && (a = W.clone(R.global.plugins[e])), n.push(t), i.push({
                            plugin: t,
                            options: a || {}
                        }))
                    }
                })), e.descriptors = i, e.id = this._cacheId, i
            },
            _invalidate: function(t) {
                delete t.$plugins
            }
        },
        ye = {
            constructors: {},
            defaults: {},
            registerScaleType: function(t, e, n) {
                this.constructors[t] = e, this.defaults[t] = W.clone(n)
            },
            getScaleConstructor: function(t) {
                return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
            },
            getScaleDefaults: function(t) {
                return this.defaults.hasOwnProperty(t) ? W.merge({}, [R.scale, this.defaults[t]]) : {}
            },
            updateScaleDefaults: function(t, e) {
                this.defaults.hasOwnProperty(t) && (this.defaults[t] = W.extend(this.defaults[t], e))
            },
            addScalesToLayout: function(t) {
                W.each(t.scales, (function(e) {
                    e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, se.addBox(t, e)
                }))
            }
        },
        _e = W.valueOrDefault,
        ke = W.rtl.getRtlAdapter;
    R._set("global", {
        tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
                beforeTitle: W.noop,
                title: function(t, e) {
                    var n = "",
                        i = e.labels,
                        a = i ? i.length : 0;
                    if (t.length > 0) {
                        var r = t[0];
                        r.label ? n = r.label : r.xLabel ? n = r.xLabel : a > 0 && r.index < a && (n = i[r.index])
                    }
                    return n
                },
                afterTitle: W.noop,
                beforeBody: W.noop,
                beforeLabel: W.noop,
                label: function(t, e) {
                    var n = e.datasets[t.datasetIndex].label || "";
                    return n && (n += ": "), W.isNullOrUndef(t.value) ? n += t.yLabel : n += t.value, n
                },
                labelColor: function(t, e) {
                    var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                    return {
                        borderColor: n.borderColor,
                        backgroundColor: n.backgroundColor
                    }
                },
                labelTextColor: function() {
                    return this._options.bodyFontColor
                },
                afterLabel: W.noop,
                afterBody: W.noop,
                beforeFooter: W.noop,
                footer: W.noop,
                afterFooter: W.noop
            }
        }
    });
    var we = {
        average: function(t) {
            if (!t.length) return !1;
            var e, n, i = 0,
                a = 0,
                r = 0;
            for (e = 0, n = t.length; e < n; ++e) {
                var o = t[e];
                if (o && o.hasValue()) {
                    var s = o.tooltipPosition();
                    i += s.x, a += s.y, ++r
                }
            }
            return {
                x: i / r,
                y: a / r
            }
        },
        nearest: function(t, e) {
            var n, i, a, r = e.x,
                o = e.y,
                s = Number.POSITIVE_INFINITY;
            for (n = 0, i = t.length; n < i; ++n) {
                var l = t[n];
                if (l && l.hasValue()) {
                    var u = l.getCenterPoint(),
                        d = W.distanceBetweenPoints(e, u);
                    d < s && (s = d, a = l)
                }
            }
            if (a) {
                var h = a.tooltipPosition();
                r = h.x, o = h.y
            }
            return {
                x: r,
                y: o
            }
        }
    };

    function Me(t, e) {
        return e && (W.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
    }

    function Se(t) {
        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
    }

    function Ce(t) {
        var e = R.global;
        return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            rtl: t.rtl,
            textDirection: t.textDirection,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: _e(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: _e(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: _e(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: _e(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: _e(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: _e(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: _e(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: _e(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: _e(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth
        }
    }

    function Pe(t, e) {
        return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding
    }

    function Ae(t) {
        return Me([], Se(t))
    }
    var De = U.extend({
        initialize: function() {
            this._model = Ce(this._options), this._lastActive = []
        },
        getTitle: function() {
            var t = this,
                e = t._options,
                n = e.callbacks,
                i = n.beforeTitle.apply(t, arguments),
                a = n.title.apply(t, arguments),
                r = n.afterTitle.apply(t, arguments),
                o = [];
            return o = Me(o, Se(i)), o = Me(o, Se(a)), Me(o, Se(r))
        },
        getBeforeBody: function() {
            return Ae(this._options.callbacks.beforeBody.apply(this, arguments))
        },
        getBody: function(t, e) {
            var n = this,
                i = n._options.callbacks,
                a = [];
            return W.each(t, (function(t) {
                var r = {
                    before: [],
                    lines: [],
                    after: []
                };
                Me(r.before, Se(i.beforeLabel.call(n, t, e))), Me(r.lines, i.label.call(n, t, e)), Me(r.after, Se(i.afterLabel.call(n, t, e))), a.push(r)
            })), a
        },
        getAfterBody: function() {
            return Ae(this._options.callbacks.afterBody.apply(this, arguments))
        },
        getFooter: function() {
            var t = this,
                e = t._options.callbacks,
                n = e.beforeFooter.apply(t, arguments),
                i = e.footer.apply(t, arguments),
                a = e.afterFooter.apply(t, arguments),
                r = [];
            return r = Me(r, Se(n)), r = Me(r, Se(i)), Me(r, Se(a))
        },
        update: function(t) {
            var e, n, i, a, r, o, s, l, u, d, h = this,
                c = h._options,
                f = h._model,
                g = h._model = Ce(c),
                p = h._active,
                m = h._data,
                v = {
                    xAlign: f.xAlign,
                    yAlign: f.yAlign
                },
                b = {
                    x: f.x,
                    y: f.y
                },
                x = {
                    width: f.width,
                    height: f.height
                },
                y = {
                    x: f.caretX,
                    y: f.caretY
                };
            if (p.length) {
                g.opacity = 1;
                var _ = [],
                    k = [];
                y = we[c.position].call(h, p, h._eventPosition);
                var w = [];
                for (e = 0, n = p.length; e < n; ++e) w.push((a = void 0, r = void 0, l = void 0, u = void 0, d = void 0, a = (i = p[e])._xScale, r = i._yScale || i._scale, o = i._index, u = (l = i._chart.getDatasetMeta(s = i._datasetIndex).controller)._getIndexScale(), d = l._getValueScale(), {
                    xLabel: a ? a.getLabelForIndex(o, s) : "",
                    yLabel: r ? r.getLabelForIndex(o, s) : "",
                    label: u ? "" + u.getLabelForIndex(o, s) : "",
                    value: d ? "" + d.getLabelForIndex(o, s) : "",
                    index: o,
                    datasetIndex: s,
                    x: i._model.x,
                    y: i._model.y
                }));
                c.filter && (w = w.filter((function(t) {
                    return c.filter(t, m)
                }))), c.itemSort && (w = w.sort((function(t, e) {
                    return c.itemSort(t, e, m)
                }))), W.each(w, (function(t) {
                    _.push(c.callbacks.labelColor.call(h, t, h._chart)), k.push(c.callbacks.labelTextColor.call(h, t, h._chart))
                })), g.title = h.getTitle(w, m), g.beforeBody = h.getBeforeBody(w, m), g.body = h.getBody(w, m), g.afterBody = h.getAfterBody(w, m), g.footer = h.getFooter(w, m), g.x = y.x, g.y = y.y, g.caretPadding = c.caretPadding, g.labelColors = _, g.labelTextColors = k, g.dataPoints = w, x = function(t, e) {
                    var n = t._chart.ctx,
                        i = 2 * e.yPadding,
                        a = 0,
                        r = e.body,
                        o = r.reduce((function(t, e) {
                            return t + e.before.length + e.lines.length + e.after.length
                        }), 0),
                        s = e.title.length,
                        l = e.footer.length,
                        u = e.titleFontSize,
                        d = e.bodyFontSize,
                        h = e.footerFontSize;
                    i += s * u, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += (o += e.beforeBody.length + e.afterBody.length) * d, i += o ? (o - 1) * e.bodySpacing : 0, i += l ? e.footerMarginTop : 0, i += l * h, i += l ? (l - 1) * e.footerSpacing : 0;
                    var c = 0,
                        f = function(t) {
                            a = Math.max(a, n.measureText(t).width + c)
                        };
                    return n.font = W.fontString(u, e._titleFontStyle, e._titleFontFamily), W.each(e.title, f), n.font = W.fontString(d, e._bodyFontStyle, e._bodyFontFamily), W.each(e.beforeBody.concat(e.afterBody), f), c = e.displayColors ? d + 2 : 0, W.each(r, (function(t) {
                        W.each(t.before, f), W.each(t.lines, f), W.each(t.after, f)
                    })), c = 0, n.font = W.fontString(h, e._footerFontStyle, e._footerFontFamily), W.each(e.footer, f), {
                        width: a += 2 * e.xPadding,
                        height: i
                    }
                }(this, g), b = function(t, e, n, i) {
                    var a = t.x,
                        r = t.y,
                        o = t.caretPadding,
                        s = n.xAlign,
                        l = n.yAlign,
                        u = t.caretSize + o,
                        d = t.cornerRadius + o;
                    return "right" === s ? a -= e.width : "center" === s && ((a -= e.width / 2) + e.width > i.width && (a = i.width - e.width), a < 0 && (a = 0)), "top" === l ? r += u : r -= "bottom" === l ? e.height + u : e.height / 2, "center" === l ? "left" === s ? a += u : "right" === s && (a -= u) : "left" === s ? a -= d : "right" === s && (a += d), {
                        x: a,
                        y: r
                    }
                }(g, x, v = function(t, e) {
                    var n, i, a, r, o, s = t._model,
                        l = t._chart,
                        u = t._chart.chartArea,
                        d = "center",
                        h = "center";
                    s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom");
                    var c = (u.left + u.right) / 2,
                        f = (u.top + u.bottom) / 2;
                    "center" === h ? (n = function(t) {
                        return t <= c
                    }, i = function(t) {
                        return t > c
                    }) : (n = function(t) {
                        return t <= e.width / 2
                    }, i = function(t) {
                        return t >= l.width - e.width / 2
                    }), a = function(t) {
                        return t + e.width + s.caretSize + s.caretPadding > l.width
                    }, r = function(t) {
                        return t - e.width - s.caretSize - s.caretPadding < 0
                    }, o = function(t) {
                        return t <= f ? "top" : "bottom"
                    }, n(s.x) ? (d = "left", a(s.x) && (d = "center", h = o(s.y))) : i(s.x) && (d = "right", r(s.x) && (d = "center", h = o(s.y)));
                    var g = t._options;
                    return {
                        xAlign: g.xAlign ? g.xAlign : d,
                        yAlign: g.yAlign ? g.yAlign : h
                    }
                }(this, x), h._chart)
            } else g.opacity = 0;
            return g.xAlign = v.xAlign, g.yAlign = v.yAlign, g.x = b.x, g.y = b.y, g.width = x.width, g.height = x.height, g.caretX = y.x, g.caretY = y.y, h._model = g, t && c.custom && c.custom.call(h, g), h
        },
        drawCaret: function(t, e) {
            var n = this._chart.ctx,
                i = this.getCaretPosition(t, e, this._view);
            n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3)
        },
        getCaretPosition: function(t, e, n) {
            var i, a, r, o, s, l, u = n.caretSize,
                d = n.cornerRadius,
                h = n.xAlign,
                c = n.yAlign,
                f = t.x,
                g = t.y,
                p = e.width,
                m = e.height;
            if ("center" === c) s = g + m / 2, "left" === h ? (a = (i = f) - u, r = i, o = s + u, l = s - u) : (a = (i = f + p) + u, r = i, o = s - u, l = s + u);
            else if ("left" === h ? (i = (a = f + d + u) - u, r = a + u) : "right" === h ? (i = (a = f + p - d - u) - u, r = a + u) : (i = (a = n.caretX) - u, r = a + u), "top" === c) s = (o = g) - u, l = o;
            else {
                s = (o = g + m) + u, l = o;
                var v = r;
                r = i, i = v
            }
            return {
                x1: i,
                x2: a,
                x3: r,
                y1: o,
                y2: s,
                y3: l
            }
        },
        drawTitle: function(t, e, n) {
            var i, a, r, o = e.title,
                s = o.length;
            if (s) {
                var l = ke(e.rtl, e.x, e.width);
                for (t.x = Pe(e, e._titleAlign), n.textAlign = l.textAlign(e._titleAlign), n.textBaseline = "middle", i = e.titleFontSize, a = e.titleSpacing, n.fillStyle = e.titleFontColor, n.font = W.fontString(i, e._titleFontStyle, e._titleFontFamily), r = 0; r < s; ++r) n.fillText(o[r], l.x(t.x), t.y + i / 2), t.y += i + a, r + 1 === s && (t.y += e.titleMarginBottom - a)
            }
        },
        drawBody: function(t, e, n) {
            var i, a, r, o, s, l, u, d, h = e.bodyFontSize,
                c = e.bodySpacing,
                f = e._bodyAlign,
                g = e.body,
                p = e.displayColors,
                m = 0,
                v = p ? Pe(e, "left") : 0,
                b = ke(e.rtl, e.x, e.width),
                x = function(e) {
                    n.fillText(e, b.x(t.x + m), t.y + h / 2), t.y += h + c
                },
                y = b.textAlign(f);
            for (n.textAlign = f, n.textBaseline = "middle", n.font = W.fontString(h, e._bodyFontStyle, e._bodyFontFamily), t.x = Pe(e, y), n.fillStyle = e.bodyFontColor, W.each(e.beforeBody, x), m = p && "right" !== y ? "center" === f ? h / 2 + 1 : h + 2 : 0, s = 0, u = g.length; s < u; ++s) {
                for (i = g[s], r = e.labelColors[s], n.fillStyle = a = e.labelTextColors[s], W.each(i.before, x), l = 0, d = (o = i.lines).length; l < d; ++l) {
                    if (p) {
                        var _ = b.x(v);
                        n.fillStyle = e.legendColorBackground, n.fillRect(b.leftForLtr(_, h), t.y, h, h), n.lineWidth = 1, n.strokeStyle = r.borderColor, n.strokeRect(b.leftForLtr(_, h), t.y, h, h), n.fillStyle = r.backgroundColor, n.fillRect(b.leftForLtr(b.xPlus(_, 1), h - 2), t.y + 1, h - 2, h - 2), n.fillStyle = a
                    }
                    x(o[l])
                }
                W.each(i.after, x)
            }
            m = 0, W.each(e.afterBody, x), t.y -= c
        },
        drawFooter: function(t, e, n) {
            var i, a, r = e.footer,
                o = r.length;
            if (o) {
                var s = ke(e.rtl, e.x, e.width);
                for (t.x = Pe(e, e._footerAlign), t.y += e.footerMarginTop, n.textAlign = s.textAlign(e._footerAlign), n.textBaseline = "middle", i = e.footerFontSize, n.fillStyle = e.footerFontColor, n.font = W.fontString(i, e._footerFontStyle, e._footerFontFamily), a = 0; a < o; ++a) n.fillText(r[a], s.x(t.x), t.y + i / 2), t.y += i + e.footerSpacing
            }
        },
        drawBackground: function(t, e, n, i) {
            n.fillStyle = e.backgroundColor, n.strokeStyle = e.borderColor, n.lineWidth = e.borderWidth;
            var a = e.xAlign,
                r = e.yAlign,
                o = t.x,
                s = t.y,
                l = i.width,
                u = i.height,
                d = e.cornerRadius;
            n.beginPath(), n.moveTo(o + d, s), "top" === r && this.drawCaret(t, i), n.lineTo(o + l - d, s), n.quadraticCurveTo(o + l, s, o + l, s + d), "center" === r && "right" === a && this.drawCaret(t, i), n.lineTo(o + l, s + u - d), n.quadraticCurveTo(o + l, s + u, o + l - d, s + u), "bottom" === r && this.drawCaret(t, i), n.lineTo(o + d, s + u), n.quadraticCurveTo(o, s + u, o, s + u - d), "center" === r && "left" === a && this.drawCaret(t, i), n.lineTo(o, s + d), n.quadraticCurveTo(o, s, o + d, s), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke()
        },
        draw: function() {
            var t = this._chart.ctx,
                e = this._view;
            if (0 !== e.opacity) {
                var n = {
                        width: e.width,
                        height: e.height
                    },
                    i = {
                        x: e.x,
                        y: e.y
                    },
                    a = Math.abs(e.opacity < .001) ? 0 : e.opacity;
                this._options.enabled && (e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length) && (t.save(), t.globalAlpha = a, this.drawBackground(i, e, t, n), i.y += e.yPadding, W.rtl.overrideTextDirection(t, e.textDirection), this.drawTitle(i, e, t), this.drawBody(i, e, t), this.drawFooter(i, e, t), W.rtl.restoreTextDirection(t, e.textDirection), t.restore())
            }
        },
        handleEvent: function(t) {
            var e, n = this,
                i = n._options;
            return n._lastActive = n._lastActive || [], "mouseout" === t.type ? n._active = [] : (n._active = n._chart.getElementsAtEventForMode(t, i.mode, i), i.reverse && n._active.reverse()), (e = !W.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = {
                x: t.x,
                y: t.y
            }, n.update(!0), n.pivot())), e
        }
    });
    De.positioners = we;
    var Te = W.valueOrDefault;

    function Ie() {
        return W.merge({}, [].slice.call(arguments), {
            merger: function(t, e, n, i) {
                if ("xAxes" === t || "yAxes" === t) {
                    var a, r, o, s = n[t].length;
                    for (e[t] || (e[t] = []), a = 0; a < s; ++a) r = Te((o = n[t][a]).type, "xAxes" === t ? "category" : "linear"), a >= e[t].length && e[t].push({}), W.merge(e[t][a], !e[t][a].type || o.type && o.type !== e[t][a].type ? [ye.getScaleDefaults(r), o] : o)
                } else W._merger(t, e, n, i)
            }
        })
    }

    function Fe() {
        return W.merge({}, [].slice.call(arguments), {
            merger: function(t, e, n, i) {
                var a = e[t] || {},
                    r = n[t];
                "scales" === t ? e[t] = Ie(a, r) : "scale" === t ? e[t] = W.merge(a, [ye.getScaleDefaults(r.type), r]) : W._merger(t, e, n, i)
            }
        })
    }

    function Oe(t) {
        var e = t.options;
        W.each(t.scales, (function(e) {
            se.removeBox(t, e)
        })), e = Fe(R.global, R[t.config.type], e), t.options = t.config.options = e, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = e.tooltips, t.tooltip.initialize()
    }

    function Le(t, e, n) {
        var i, a = function(t) {
            return t.id === i
        };
        do {
            i = e + n++
        } while (W.findIndex(t, a) >= 0);
        return i
    }

    function Re(t) {
        return "top" === t || "bottom" === t
    }

    function ze(t, e) {
        return function(n, i) {
            return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t]
        }
    }
    R._set("global", {
        elements: {},
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400
        },
        onClick: null,
        maintainAspectRatio: !0,
        responsive: !0,
        responsiveAnimationDuration: 0
    });
    var Ne = function(t, e) {
        return this.construct(t, e), this
    };
    W.extend(Ne.prototype, {
        construct: function(t, e) {
            var n = this;
            e = function(t) {
                var e = (t = t || {}).data = t.data || {};
                return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = Fe(R.global, R[t.type], t.options || {}), t
            }(e);
            var i = be.acquireContext(t, e),
                a = i && i.canvas,
                r = a && a.height,
                o = a && a.width;
            n.id = W.uid(), n.ctx = i, n.canvas = a, n.config = e, n.width = o, n.height = r, n.aspectRatio = r ? o / r : null, n.options = e.options, n._bufferedRender = !1, n._layers = [], n.chart = n, n.controller = n, Ne.instances[n.id] = n, Object.defineProperty(n, "data", {
                get: function() {
                    return n.config.data
                },
                set: function(t) {
                    n.config.data = t
                }
            }), i && a ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
        },
        initialize: function() {
            var t = this;
            return xe.notify(t, "beforeInit"), W.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.initToolTip(), xe.notify(t, "afterInit"), t
        },
        clear: function() {
            return W.canvas.clear(this), this
        },
        stop: function() {
            return G.cancelAnimation(this), this
        },
        resize: function(t) {
            var e = this,
                n = e.options,
                i = e.canvas,
                a = n.maintainAspectRatio && e.aspectRatio || null,
                r = Math.max(0, Math.floor(W.getMaximumWidth(i))),
                o = Math.max(0, Math.floor(a ? r / a : W.getMaximumHeight(i)));
            if ((e.width !== r || e.height !== o) && (i.width = e.width = r, i.height = e.height = o, i.style.width = r + "px", i.style.height = o + "px", W.retinaScale(e, n.devicePixelRatio), !t)) {
                var s = {
                    width: r,
                    height: o
                };
                xe.notify(e, "resize", [s]), n.onResize && n.onResize(e, s), e.stop(), e.update({
                    duration: n.responsiveAnimationDuration
                })
            }
        },
        ensureScalesHaveIDs: function() {
            var t = this.options,
                e = t.scales || {},
                n = t.scale;
            W.each(e.xAxes, (function(t, n) {
                t.id || (t.id = Le(e.xAxes, "x-axis-", n))
            })), W.each(e.yAxes, (function(t, n) {
                t.id || (t.id = Le(e.yAxes, "y-axis-", n))
            })), n && (n.id = n.id || "scale")
        },
        buildOrUpdateScales: function() {
            var t = this,
                e = t.options,
                n = t.scales || {},
                i = [],
                a = Object.keys(n).reduce((function(t, e) {
                    return t[e] = !1, t
                }), {});
            e.scales && (i = i.concat((e.scales.xAxes || []).map((function(t) {
                return {
                    options: t,
                    dtype: "category",
                    dposition: "bottom"
                }
            })), (e.scales.yAxes || []).map((function(t) {
                return {
                    options: t,
                    dtype: "linear",
                    dposition: "left"
                }
            })))), e.scale && i.push({
                options: e.scale,
                dtype: "radialLinear",
                isDefault: !0,
                dposition: "chartArea"
            }), W.each(i, (function(e) {
                var i = e.options,
                    r = i.id,
                    o = Te(i.type, e.dtype);
                Re(i.position) !== Re(e.dposition) && (i.position = e.dposition), a[r] = !0;
                var s = null;
                if (r in n && n[r].type === o)(s = n[r]).options = i, s.ctx = t.ctx, s.chart = t;
                else {
                    var l = ye.getScaleConstructor(o);
                    if (!l) return;
                    s = new l({
                        id: r,
                        type: o,
                        options: i,
                        ctx: t.ctx,
                        chart: t
                    }), n[s.id] = s
                }
                s.mergeTicksOptions(), e.isDefault && (t.scale = s)
            })), W.each(a, (function(t, e) {
                t || delete n[e]
            })), t.scales = n, ye.addScalesToLayout(this)
        },
        buildOrUpdateControllers: function() {
            var t, e, n = this,
                i = [],
                a = n.data.datasets;
            for (t = 0, e = a.length; t < e; t++) {
                var r = a[t],
                    o = n.getDatasetMeta(t),
                    s = r.type || n.config.type;
                if (o.type && o.type !== s && (n.destroyDatasetMeta(t), o = n.getDatasetMeta(t)), o.type = s, o.order = r.order || 0, o.index = t, o.controller) o.controller.updateIndex(t), o.controller.linkScales();
                else {
                    var l = qt[o.type];
                    if (void 0 === l) throw new Error('"' + o.type + '" is not a chart type.');
                    o.controller = new l(n, t), i.push(o.controller)
                }
            }
            return i
        },
        resetElements: function() {
            var t = this;
            W.each(t.data.datasets, (function(e, n) {
                t.getDatasetMeta(n).controller.reset()
            }), t)
        },
        reset: function() {
            this.resetElements(), this.tooltip.initialize()
        },
        update: function(t) {
            var e, n, i = this;
            if (t && "object" == typeof t || (t = {
                    duration: t,
                    lazy: arguments[1]
                }), Oe(i), xe._invalidate(i), !1 !== xe.notify(i, "beforeUpdate")) {
                i.tooltip._data = i.data;
                var a = i.buildOrUpdateControllers();
                for (e = 0, n = i.data.datasets.length; e < n; e++) i.getDatasetMeta(e).controller.buildOrUpdateElements();
                i.updateLayout(), i.options.animation && i.options.animation.duration && W.each(a, (function(t) {
                    t.reset()
                })), i.updateDatasets(), i.tooltip.initialize(), i.lastActive = [], xe.notify(i, "afterUpdate"), i._layers.sort(ze("z", "_idx")), i._bufferedRender ? i._bufferedRequest = {
                    duration: t.duration,
                    easing: t.easing,
                    lazy: t.lazy
                } : i.render(t)
            }
        },
        updateLayout: function() {
            var t = this;
            !1 !== xe.notify(t, "beforeLayout") && (se.update(this, this.width, this.height), t._layers = [], W.each(t.boxes, (function(e) {
                e._configure && e._configure(), t._layers.push.apply(t._layers, e._layers())
            }), t), t._layers.forEach((function(t, e) {
                t._idx = e
            })), xe.notify(t, "afterScaleUpdate"), xe.notify(t, "afterLayout"))
        },
        updateDatasets: function() {
            if (!1 !== xe.notify(this, "beforeDatasetsUpdate")) {
                for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                xe.notify(this, "afterDatasetsUpdate")
            }
        },
        updateDataset: function(t) {
            var e = this.getDatasetMeta(t),
                n = {
                    meta: e,
                    index: t
                };
            !1 !== xe.notify(this, "beforeDatasetUpdate", [n]) && (e.controller._update(), xe.notify(this, "afterDatasetUpdate", [n]))
        },
        render: function(t) {
            var e = this;
            t && "object" == typeof t || (t = {
                duration: t,
                lazy: arguments[1]
            });
            var n = e.options.animation,
                i = Te(t.duration, n && n.duration),
                a = t.lazy;
            if (!1 !== xe.notify(e, "beforeRender")) {
                var r = function(t) {
                    xe.notify(e, "afterRender"), W.callback(n && n.onComplete, [t], e)
                };
                if (n && i) {
                    var o = new $({
                        numSteps: i / 16.66,
                        easing: t.easing || n.easing,
                        render: function(t, e) {
                            var n = e.currentStep,
                                i = n / e.numSteps;
                            t.draw((0, W.easing.effects[e.easing])(i), i, n)
                        },
                        onAnimationProgress: n.onProgress,
                        onAnimationComplete: r
                    });
                    G.addAnimation(e, o, i, a)
                } else e.draw(), r(new $({
                    numSteps: 0,
                    chart: e
                }));
                return e
            }
        },
        draw: function(t) {
            var e, n, i = this;
            if (i.clear(), W.isNullOrUndef(t) && (t = 1), i.transition(t), !(i.width <= 0 || i.height <= 0) && !1 !== xe.notify(i, "beforeDraw", [t])) {
                for (n = i._layers, e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(i.chartArea);
                for (i.drawDatasets(t); e < n.length; ++e) n[e].draw(i.chartArea);
                i._drawTooltip(t), xe.notify(i, "afterDraw", [t])
            }
        },
        transition: function(t) {
            for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
            this.tooltip.transition(t)
        },
        _getSortedDatasetMetas: function(t) {
            var e, n, i = [];
            for (e = 0, n = (this.data.datasets || []).length; e < n; ++e) t && !this.isDatasetVisible(e) || i.push(this.getDatasetMeta(e));
            return i.sort(ze("order", "index")), i
        },
        _getSortedVisibleDatasetMetas: function() {
            return this._getSortedDatasetMetas(!0)
        },
        drawDatasets: function(t) {
            var e, n;
            if (!1 !== xe.notify(this, "beforeDatasetsDraw", [t])) {
                for (n = (e = this._getSortedVisibleDatasetMetas()).length - 1; n >= 0; --n) this.drawDataset(e[n], t);
                xe.notify(this, "afterDatasetsDraw", [t])
            }
        },
        drawDataset: function(t, e) {
            var n = {
                meta: t,
                index: t.index,
                easingValue: e
            };
            !1 !== xe.notify(this, "beforeDatasetDraw", [n]) && (t.controller.draw(e), xe.notify(this, "afterDatasetDraw", [n]))
        },
        _drawTooltip: function(t) {
            var e = this.tooltip,
                n = {
                    tooltip: e,
                    easingValue: t
                };
            !1 !== xe.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), xe.notify(this, "afterTooltipDraw", [n]))
        },
        getElementAtEvent: function(t) {
            return Zt.modes.single(this, t)
        },
        getElementsAtEvent: function(t) {
            return Zt.modes.label(this, t, {
                intersect: !0
            })
        },
        getElementsAtXAxis: function(t) {
            return Zt.modes["x-axis"](this, t, {
                intersect: !0
            })
        },
        getElementsAtEventForMode: function(t, e, n) {
            var i = Zt.modes[e];
            return "function" == typeof i ? i(this, t, n) : []
        },
        getDatasetAtEvent: function(t) {
            return Zt.modes.dataset(this, t, {
                intersect: !0
            })
        },
        getDatasetMeta: function(t) {
            var e = this.data.datasets[t];
            e._meta || (e._meta = {});
            var n = e._meta[this.id];
            return n || (n = e._meta[this.id] = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: e.order || 0,
                index: t
            }), n
        },
        getVisibleDatasetCount: function() {
            for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++;
            return t
        },
        isDatasetVisible: function(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
        },
        generateLegend: function() {
            return this.options.legendCallback(this)
        },
        destroyDatasetMeta: function(t) {
            var e = this.id,
                n = this.data.datasets[t],
                i = n._meta && n._meta[e];
            i && (i.controller.destroy(), delete n._meta[e])
        },
        destroy: function() {
            var t, e, n = this,
                i = n.canvas;
            for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t) n.destroyDatasetMeta(t);
            i && (n.unbindEvents(), W.canvas.clear(n), be.releaseContext(n.ctx), n.canvas = null, n.ctx = null), xe.notify(n, "destroy"), delete Ne.instances[n.id]
        },
        toBase64Image: function() {
            return this.canvas.toDataURL.apply(this.canvas, arguments)
        },
        initToolTip: function() {
            var t = this;
            t.tooltip = new De({
                _chart: t,
                _chartInstance: t,
                _data: t.data,
                _options: t.options.tooltips
            }, t)
        },
        bindEvents: function() {
            var t = this,
                e = t._listeners = {},
                n = function() {
                    t.eventHandler.apply(t, arguments)
                };
            W.each(t.options.events, (function(i) {
                be.addEventListener(t, i, n), e[i] = n
            })), t.options.responsive && (n = function() {
                t.resize()
            }, be.addEventListener(t, "resize", n), e.resize = n)
        },
        unbindEvents: function() {
            var t = this,
                e = t._listeners;
            e && (delete t._listeners, W.each(e, (function(e, n) {
                be.removeEventListener(t, n, e)
            })))
        },
        updateHoverStyle: function(t, e, n) {
            var i, a, r, o = n ? "set" : "remove";
            for (a = 0, r = t.length; a < r; ++a)(i = t[a]) && this.getDatasetMeta(i._datasetIndex).controller[o + "HoverStyle"](i);
            "dataset" === e && this.getDatasetMeta(t[0]._datasetIndex).controller["_" + o + "DatasetHoverStyle"]()
        },
        eventHandler: function(t) {
            var e = this,
                n = e.tooltip;
            if (!1 !== xe.notify(e, "beforeEvent", [t])) {
                e._bufferedRender = !0, e._bufferedRequest = null;
                var i = e.handleEvent(t);
                n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), xe.notify(e, "afterEvent", [t]);
                var a = e._bufferedRequest;
                return a ? e.render(a) : i && !e.animating && (e.stop(), e.render({
                    duration: e.options.hover.animationDuration,
                    lazy: !0
                })), e._bufferedRender = !1, e._bufferedRequest = null, e
            }
        },
        handleEvent: function(t) {
            var e, n = this,
                i = n.options || {},
                a = i.hover;
            return n.lastActive = n.lastActive || [], n.active = "mouseout" === t.type ? [] : n.getElementsAtEventForMode(t, a.mode, a), W.callback(i.onHover || i.hover.onHover, [t.native, n.active], n), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, a.mode, !1), n.active.length && a.mode && n.updateHoverStyle(n.active, a.mode, !0), e = !W.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e
        }
    }), Ne.instances = {};
    var Be = Ne;

    function Ee() {
        throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
    }

    function We(t) {
        this.options = t || {}
    }
    Ne.Controller = Ne, Ne.types = {}, W.configMerge = Fe, W.scaleMerge = Ie, W.extend(We.prototype, {
        formats: Ee,
        parse: Ee,
        format: Ee,
        add: Ee,
        diff: Ee,
        startOf: Ee,
        endOf: Ee,
        _create: function(t) {
            return t
        }
    }), We.override = function(t) {
        W.extend(We.prototype, t)
    };
    var Ve = {
            _date: We
        },
        He = {
            formatters: {
                values: function(t) {
                    return W.isArray(t) ? t : "" + t
                },
                linear: function(t, e, n) {
                    var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                    Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
                    var a = W.log10(Math.abs(i)),
                        r = "";
                    if (0 !== t)
                        if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                            var o = W.log10(Math.abs(t)),
                                s = Math.floor(o) - Math.floor(a);
                            s = Math.max(Math.min(s, 20), 0), r = t.toExponential(s)
                        } else {
                            var l = -1 * Math.floor(a);
                            l = Math.max(Math.min(l, 20), 0), r = t.toFixed(l)
                        }
                    else r = "0";
                    return r
                },
                logarithmic: function(t, e, n) {
                    var i = t / Math.pow(10, Math.floor(W.log10(t)));
                    return 0 === t ? "0" : 1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1 ? t.toExponential() : ""
                }
            }
        },
        je = W.isArray,
        qe = W.isNullOrUndef,
        Ue = W.valueOrDefault,
        Ye = W.valueAtIndexOrDefault;

    function $e(t, e, n) {
        var i, a = t.getTicks().length,
            r = Math.min(e, a - 1),
            o = t.getPixelForTick(r),
            s = t._startPixel,
            l = t._endPixel;
        if (!(n && (i = 1 === a ? Math.max(o - s, l - o) : 0 === e ? (t.getPixelForTick(1) - o) / 2 : (o - t.getPixelForTick(r - 1)) / 2, (o += r < e ? i : -i) < s - 1e-6 || o > l + 1e-6))) return o
    }

    function Ge(t) {
        return t.drawTicks ? t.tickMarkLength : 0
    }

    function Xe(t) {
        var e, n;
        return t.display ? (e = W.options._parseFont(t), n = W.options.toPadding(t.padding), e.lineHeight + n.height) : 0
    }

    function Ke(t, e) {
        return W.extend(W.options._parseFont({
            fontFamily: Ue(e.fontFamily, t.fontFamily),
            fontSize: Ue(e.fontSize, t.fontSize),
            fontStyle: Ue(e.fontStyle, t.fontStyle),
            lineHeight: Ue(e.lineHeight, t.lineHeight)
        }), {
            color: W.options.resolve([e.fontColor, t.fontColor, R.global.defaultFontColor])
        })
    }

    function Ze(t) {
        var e = Ke(t, t.minor);
        return {
            minor: e,
            major: t.major.enabled ? Ke(t, t.major) : e
        }
    }

    function Je(t) {
        var e, n, i, a = [];
        for (n = 0, i = t.length; n < i; ++n) void 0 !== (e = t[n])._index && a.push(e);
        return a
    }

    function Qe(t, e, n, i) {
        var a, r, o, s, l = Ue(n, 0),
            u = Math.min(Ue(i, t.length), t.length),
            d = 0;
        for (e = Math.ceil(e), i && (e = (a = i - n) / Math.floor(a / e)), s = l; s < 0;) d++, s = Math.round(l + d * e);
        for (r = Math.max(l, 0); r < u; r++) o = t[r], r === s ? (o._index = r, d++, s = Math.round(l + d * e)) : delete o.label
    }
    R._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
            display: !0,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0
        },
        scaleLabel: {
            display: !1,
            labelString: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: He.formatters.values,
            minor: {},
            major: {}
        }
    });
    var tn = U.extend({
        zeroLineIndex: 0,
        getPadding: function() {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0
            }
        },
        getTicks: function() {
            return this._ticks
        },
        _getLabels: function() {
            var t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
        },
        mergeTicksOptions: function() {},
        beforeUpdate: function() {
            W.callback(this.options.beforeUpdate, [this])
        },
        update: function(t, e, n) {
            var i, a, r, o, s, l = this,
                u = l.options.ticks,
                d = u.sampleSize;
            if (l.beforeUpdate(), l.maxWidth = t, l.maxHeight = e, l.margins = W.extend({
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, n), l._ticks = null, l.ticks = null, l._labelSizes = null, l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l._gridLineItems = null, l._labelItems = null, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), o = l.buildTicks() || [], (!(o = l.afterBuildTicks(o) || o) || !o.length) && l.ticks)
                for (o = [], i = 0, a = l.ticks.length; i < a; ++i) o.push({
                    value: l.ticks[i],
                    major: !1
                });
            return l._ticks = o, r = l._convertTicksToLabels((s = d < o.length) ? function(t, e) {
                for (var n = [], i = t.length / e, a = 0, r = t.length; a < r; a += i) n.push(t[Math.floor(a)]);
                return n
            }(o, d) : o), l._configure(), l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l._ticksToDraw = u.display && (u.autoSkip || "auto" === u.source) ? l._autoSkip(o) : o, s && (r = l._convertTicksToLabels(l._ticksToDraw)), l.ticks = r, l.afterUpdate(), l.minSize
        },
        _configure: function() {
            var t, e, n = this,
                i = n.options.ticks.reverse;
            n.isHorizontal() ? (t = n.left, e = n.right) : (t = n.top, e = n.bottom, i = !i), n._startPixel = t, n._endPixel = e, n._reversePixels = i, n._length = e - t
        },
        afterUpdate: function() {
            W.callback(this.options.afterUpdate, [this])
        },
        beforeSetDimensions: function() {
            W.callback(this.options.beforeSetDimensions, [this])
        },
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
        },
        afterSetDimensions: function() {
            W.callback(this.options.afterSetDimensions, [this])
        },
        beforeDataLimits: function() {
            W.callback(this.options.beforeDataLimits, [this])
        },
        determineDataLimits: W.noop,
        afterDataLimits: function() {
            W.callback(this.options.afterDataLimits, [this])
        },
        beforeBuildTicks: function() {
            W.callback(this.options.beforeBuildTicks, [this])
        },
        buildTicks: W.noop,
        afterBuildTicks: function(t) {
            var e = this;
            return je(t) && t.length ? W.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = W.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t)
        },
        beforeTickToLabelConversion: function() {
            W.callback(this.options.beforeTickToLabelConversion, [this])
        },
        convertTicksToLabels: function() {
            var t = this.options.ticks;
            this.ticks = this.ticks.map(t.userCallback || t.callback, this)
        },
        afterTickToLabelConversion: function() {
            W.callback(this.options.afterTickToLabelConversion, [this])
        },
        beforeCalculateTickRotation: function() {
            W.callback(this.options.beforeCalculateTickRotation, [this])
        },
        calculateTickRotation: function() {
            var t, e, n, i, a, r, o, s = this,
                l = s.options,
                u = l.ticks,
                d = s.getTicks().length,
                h = u.minRotation || 0,
                c = u.maxRotation,
                f = h;
            !s._isVisible() || !u.display || h >= c || d <= 1 || !s.isHorizontal() ? s.labelRotation = h : (e = (t = s._getLabelSizes()).widest.width, n = t.highest.height - t.highest.offset, i = Math.min(s.maxWidth, s.chart.width - e), e + 6 > (a = l.offset ? s.maxWidth / d : i / (d - 1)) && (a = i / (d - (l.offset ? .5 : 1)), r = s.maxHeight - Ge(l.gridLines) - u.padding - Xe(l.scaleLabel), o = Math.sqrt(e * e + n * n), f = W.toDegrees(Math.min(Math.asin(Math.min((t.highest.height + 6) / a, 1)), Math.asin(Math.min(r / o, 1)) - Math.asin(n / o))), f = Math.max(h, Math.min(c, f))), s.labelRotation = f)
        },
        afterCalculateTickRotation: function() {
            W.callback(this.options.afterCalculateTickRotation, [this])
        },
        beforeFit: function() {
            W.callback(this.options.beforeFit, [this])
        },
        fit: function() {
            var t = this,
                e = t.minSize = {
                    width: 0,
                    height: 0
                },
                n = t.chart,
                i = t.options,
                a = i.ticks,
                r = i.scaleLabel,
                o = i.gridLines,
                s = t._isVisible(),
                l = "bottom" === i.position,
                u = t.isHorizontal();
            if (u ? e.width = t.maxWidth : s && (e.width = Ge(o) + Xe(r)), u ? s && (e.height = Ge(o) + Xe(r)) : e.height = t.maxHeight, a.display && s) {
                var d = Ze(a),
                    h = t._getLabelSizes(),
                    c = h.first,
                    f = h.last,
                    g = h.widest,
                    p = h.highest,
                    m = .4 * d.minor.lineHeight,
                    v = a.padding;
                if (u) {
                    var b = 0 !== t.labelRotation,
                        x = W.toRadians(t.labelRotation),
                        y = Math.cos(x),
                        _ = Math.sin(x);
                    e.height = Math.min(t.maxHeight, e.height + (_ * g.width + y * (p.height - (b ? p.offset : 0)) + (b ? 0 : m)) + v);
                    var k, w, M = t.getPixelForTick(0) - t.left,
                        S = t.right - t.getPixelForTick(t.getTicks().length - 1);
                    b ? (k = l ? y * c.width + _ * c.offset : _ * (c.height - c.offset), w = l ? _ * (f.height - f.offset) : y * f.width + _ * f.offset) : (k = c.width / 2, w = f.width / 2), t.paddingLeft = Math.max((k - M) * t.width / (t.width - M), 0) + 3, t.paddingRight = Math.max((w - S) * t.width / (t.width - S), 0) + 3
                } else e.width = Math.min(t.maxWidth, e.width + (a.mirror ? 0 : g.width + v + m)), t.paddingTop = c.height / 2, t.paddingBottom = f.height / 2
            }
            t.handleMargins(), u ? (t.width = t._length = n.width - t.margins.left - t.margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = n.height - t.margins.top - t.margins.bottom)
        },
        handleMargins: function() {
            var t = this;
            t.margins && (t.margins.left = Math.max(t.paddingLeft, t.margins.left), t.margins.top = Math.max(t.paddingTop, t.margins.top), t.margins.right = Math.max(t.paddingRight, t.margins.right), t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom))
        },
        afterFit: function() {
            W.callback(this.options.afterFit, [this])
        },
        isHorizontal: function() {
            var t = this.options.position;
            return "top" === t || "bottom" === t
        },
        isFullWidth: function() {
            return this.options.fullWidth
        },
        getRightValue: function(t) {
            if (qe(t)) return NaN;
            if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN;
            if (t)
                if (this.isHorizontal()) {
                    if (void 0 !== t.x) return this.getRightValue(t.x)
                } else if (void 0 !== t.y) return this.getRightValue(t.y);
            return t
        },
        _convertTicksToLabels: function(t) {
            var e, n, i, a = this;
            for (a.ticks = t.map((function(t) {
                    return t.value
                })), a.beforeTickToLabelConversion(), e = a.convertTicksToLabels(t) || a.ticks, a.afterTickToLabelConversion(), n = 0, i = t.length; n < i; ++n) t[n].label = e[n];
            return e
        },
        _getLabelSizes: function() {
            var t = this,
                e = t._labelSizes;
            return e || (t._labelSizes = e = function(t, e, n, i) {
                var a, r, o, s, l, u, d, h, c, f, g, p, m, v = n.length,
                    b = [],
                    x = [],
                    y = [];
                for (a = 0; a < v; ++a) {
                    if (s = n[a].label, t.font = u = (l = n[a].major ? e.major : e.minor).string, d = i[u] = i[u] || {
                            data: {},
                            gc: []
                        }, h = l.lineHeight, c = f = 0, qe(s) || je(s)) {
                        if (je(s))
                            for (r = 0, o = s.length; r < o; ++r) qe(g = s[r]) || je(g) || (c = W.measureText(t, d.data, d.gc, c, g), f += h)
                    } else c = W.measureText(t, d.data, d.gc, c, s), f = h;
                    b.push(c), x.push(f), y.push(h / 2)
                }

                function _(t) {
                    return {
                        width: b[t] || 0,
                        height: x[t] || 0,
                        offset: y[t] || 0
                    }
                }
                return function(t, e) {
                    W.each(t, (function(t) {
                        var n, i = t.gc,
                            a = i.length / 2;
                        if (a > e) {
                            for (n = 0; n < a; ++n) delete t.data[i[n]];
                            i.splice(0, a)
                        }
                    }))
                }(i, v), p = b.indexOf(Math.max.apply(null, b)), m = x.indexOf(Math.max.apply(null, x)), {
                    first: _(0),
                    last: _(v - 1),
                    widest: _(p),
                    highest: _(m)
                }
            }(t.ctx, Ze(t.options.ticks), t.getTicks(), t.longestTextCache), t.longestLabelWidth = e.widest.width), e
        },
        _parseValue: function(t) {
            var e, n, i, a;
            return je(t) ? (e = +this.getRightValue(t[0]), n = +this.getRightValue(t[1]), i = Math.min(e, n), a = Math.max(e, n)) : (e = void 0, n = t = +this.getRightValue(t), i = t, a = t), {
                min: i,
                max: a,
                start: e,
                end: n
            }
        },
        _getScaleLabel: function(t) {
            var e = this._parseValue(t);
            return void 0 !== e.start ? "[" + e.start + ", " + e.end + "]" : +this.getRightValue(t)
        },
        getLabelForIndex: W.noop,
        getPixelForValue: W.noop,
        getValueForPixel: W.noop,
        getPixelForTick: function(t) {
            var e = this.options.offset,
                n = this._ticks.length,
                i = 1 / Math.max(n - (e ? 0 : 1), 1);
            return t < 0 || t > n - 1 ? null : this.getPixelForDecimal(t * i + (e ? i / 2 : 0))
        },
        getPixelForDecimal: function(t) {
            return this._reversePixels && (t = 1 - t), this._startPixel + t * this._length
        },
        getDecimalForPixel: function(t) {
            var e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e
        },
        getBasePixel: function() {
            return this.getPixelForValue(this.getBaseValue())
        },
        getBaseValue: function() {
            var t = this.min,
                e = this.max;
            return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
        },
        _autoSkip: function(t) {
            var e, n, i, a, r = this.options.ticks,
                o = r.maxTicksLimit || this._length / this._tickSize() + 1,
                s = r.major.enabled ? function(t) {
                    var e, n, i = [];
                    for (e = 0, n = t.length; e < n; e++) t[e].major && i.push(e);
                    return i
                }(t) : [],
                l = s.length,
                u = s[0],
                d = s[l - 1];
            if (l > o) return function(t, e, n) {
                var i, a, r = 0,
                    o = e[0];
                for (n = Math.ceil(n), i = 0; i < t.length; i++) a = t[i], i === o ? (a._index = i, o = e[++r * n]) : delete a.label
            }(t, s, l / o), Je(t);
            if (i = function(t, e, n, i) {
                    var a, r, o, s, l = function(t) {
                            var e, n, i = t.length;
                            if (i < 2) return !1;
                            for (n = t[0], e = 1; e < i; ++e)
                                if (t[e] - t[e - 1] !== n) return !1;
                            return n
                        }(t),
                        u = (e.length - 1) / i;
                    if (!l) return Math.max(u, 1);
                    for (o = 0, s = (a = W.math._factorize(l)).length - 1; o < s; o++)
                        if ((r = a[o]) > u) return r;
                    return Math.max(u, 1)
                }(s, t, 0, o), l > 0) {
                for (e = 0, n = l - 1; e < n; e++) Qe(t, i, s[e], s[e + 1]);
                return Qe(t, i, W.isNullOrUndef(a = l > 1 ? (d - u) / (l - 1) : null) ? 0 : u - a, u), Qe(t, i, d, W.isNullOrUndef(a) ? t.length : d + a), Je(t)
            }
            return Qe(t, i), Je(t)
        },
        _tickSize: function() {
            var t = this.options.ticks,
                e = W.toRadians(this.labelRotation),
                n = Math.abs(Math.cos(e)),
                i = Math.abs(Math.sin(e)),
                a = this._getLabelSizes(),
                r = t.autoSkipPadding || 0,
                o = a ? a.widest.width + r : 0,
                s = a ? a.highest.height + r : 0;
            return this.isHorizontal() ? s * n > o * i ? o / n : s / i : s * i < o * n ? s / n : o / i
        },
        _isVisible: function() {
            var t, e, n, i = this.chart,
                a = this.options.display;
            if ("auto" !== a) return !!a;
            for (t = 0, e = i.data.datasets.length; t < e; ++t)
                if (i.isDatasetVisible(t) && ((n = i.getDatasetMeta(t)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
            return !1
        },
        _computeGridLineItems: function(t) {
            var e, n, i, a, r, o, s, l, u, d, h, c, f, g, p, m, v, b = this,
                x = b.chart,
                y = b.options,
                _ = y.gridLines,
                k = y.position,
                w = _.offsetGridLines,
                M = b.isHorizontal(),
                S = b._ticksToDraw,
                C = S.length + (w ? 1 : 0),
                P = Ge(_),
                A = [],
                D = _.drawBorder ? Ye(_.lineWidth, 0, 0) : 0,
                T = D / 2,
                I = W._alignPixel,
                F = function(t) {
                    return I(x, t, D)
                };
            for ("top" === k ? (e = F(b.bottom), s = b.bottom - P, u = e - T, h = F(t.top) + T, f = t.bottom) : "bottom" === k ? (e = F(b.top), h = t.top, f = F(t.bottom) - T, s = e + T, u = b.top + P) : "left" === k ? (e = F(b.right), o = b.right - P, l = e - T, d = F(t.left) + T, c = t.right) : (e = F(b.left), d = t.left, c = F(t.right) - T, o = e + T, l = b.left + P), n = 0; n < C; ++n) qe((i = S[n] || {}).label) && n < S.length || (n === b.zeroLineIndex && y.offset === w ? (g = _.zeroLineWidth, p = _.zeroLineColor, m = _.zeroLineBorderDash || [], v = _.zeroLineBorderDashOffset || 0) : (g = Ye(_.lineWidth, n, 1), p = Ye(_.color, n, "rgba(0,0,0,0.1)"), m = _.borderDash || [], v = _.borderDashOffset || 0), void 0 !== (a = $e(b, i._index || n, w)) && (r = I(x, a, g), M ? o = l = d = c = r : s = u = h = f = r, A.push({
                tx1: o,
                ty1: s,
                tx2: l,
                ty2: u,
                x1: d,
                y1: h,
                x2: c,
                y2: f,
                width: g,
                color: p,
                borderDash: m,
                borderDashOffset: v
            })));
            return A.ticksLength = C, A.borderValue = e, A
        },
        _computeLabelItems: function() {
            var t, e, n, i, a, r, o, s, l, u, d, h, c = this,
                f = c.options,
                g = f.ticks,
                p = f.position,
                m = g.mirror,
                v = c.isHorizontal(),
                b = c._ticksToDraw,
                x = Ze(g),
                y = g.padding,
                _ = Ge(f.gridLines),
                k = -W.toRadians(c.labelRotation),
                w = [];
            for ("top" === p ? (r = c.bottom - _ - y, o = k ? "left" : "center") : "bottom" === p ? (r = c.top + _ + y, o = k ? "right" : "center") : "left" === p ? (a = c.right - (m ? 0 : _) - y, o = m ? "left" : "right") : (a = c.left + (m ? 0 : _) + y, o = m ? "right" : "left"), t = 0, e = b.length; t < e; ++t) qe(i = (n = b[t]).label) || (s = c.getPixelForTick(n._index || t) + g.labelOffset, u = (l = n.major ? x.major : x.minor).lineHeight, d = je(i) ? i.length : 1, v ? (a = s, h = "top" === p ? ((k ? 1 : .5) - d) * u : (k ? 0 : .5) * u) : (r = s, h = (1 - d) * u / 2), w.push({
                x: a,
                y: r,
                rotation: k,
                label: i,
                font: l,
                textOffset: h,
                textAlign: o
            }));
            return w
        },
        _drawGrid: function(t) {
            var e = this,
                n = e.options.gridLines;
            if (n.display) {
                var i, a, r, o, s, l = e.ctx,
                    u = e.chart,
                    d = W._alignPixel,
                    h = n.drawBorder ? Ye(n.lineWidth, 0, 0) : 0,
                    c = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
                for (r = 0, o = c.length; r < o; ++r) a = (s = c[r]).color, (i = s.width) && a && (l.save(), l.lineWidth = i, l.strokeStyle = a, l.setLineDash && (l.setLineDash(s.borderDash), l.lineDashOffset = s.borderDashOffset), l.beginPath(), n.drawTicks && (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)), n.drawOnChartArea && (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)), l.stroke(), l.restore());
                if (h) {
                    var f, g, p, m, v = h,
                        b = Ye(n.lineWidth, c.ticksLength - 1, 1),
                        x = c.borderValue;
                    e.isHorizontal() ? (f = d(u, e.left, v) - v / 2, g = d(u, e.right, b) + b / 2, p = m = x) : (p = d(u, e.top, v) - v / 2, m = d(u, e.bottom, b) + b / 2, f = g = x), l.lineWidth = h, l.strokeStyle = Ye(n.color, 0), l.beginPath(), l.moveTo(f, p), l.lineTo(g, m), l.stroke()
                }
            }
        },
        _drawLabels: function() {
            var t = this;
            if (t.options.ticks.display) {
                var e, n, i, a, r, o, s, l, u = t.ctx,
                    d = t._labelItems || (t._labelItems = t._computeLabelItems());
                for (e = 0, i = d.length; e < i; ++e) {
                    if (o = (r = d[e]).font, u.save(), u.translate(r.x, r.y), u.rotate(r.rotation), u.font = o.string, u.fillStyle = o.color, u.textBaseline = "middle", u.textAlign = r.textAlign, l = r.textOffset, je(s = r.label))
                        for (n = 0, a = s.length; n < a; ++n) u.fillText("" + s[n], 0, l), l += o.lineHeight;
                    else u.fillText(s, 0, l);
                    u.restore()
                }
            }
        },
        _drawTitle: function() {
            var t = this,
                e = t.ctx,
                n = t.options,
                i = n.scaleLabel;
            if (i.display) {
                var a, r, o = Ue(i.fontColor, R.global.defaultFontColor),
                    s = W.options._parseFont(i),
                    l = W.options.toPadding(i.padding),
                    u = s.lineHeight / 2,
                    d = n.position,
                    h = 0;
                if (t.isHorizontal()) a = t.left + t.width / 2, r = "bottom" === d ? t.bottom - u - l.bottom : t.top + u + l.top;
                else {
                    var c = "left" === d;
                    a = c ? t.left + u + l.top : t.right - u - l.top, r = t.top + t.height / 2, h = c ? -.5 * Math.PI : .5 * Math.PI
                }
                e.save(), e.translate(a, r), e.rotate(h), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = o, e.font = s.string, e.fillText(i.labelString, 0, 0), e.restore()
            }
        },
        draw: function(t) {
            this._isVisible() && (this._drawGrid(t), this._drawTitle(), this._drawLabels())
        },
        _layers: function() {
            var t = this,
                e = t.options,
                n = e.ticks && e.ticks.z || 0,
                i = e.gridLines && e.gridLines.z || 0;
            return t._isVisible() && n !== i && t.draw === t._draw ? [{
                z: i,
                draw: function() {
                    t._drawGrid.apply(t, arguments), t._drawTitle.apply(t, arguments)
                }
            }, {
                z: n,
                draw: function() {
                    t._drawLabels.apply(t, arguments)
                }
            }] : [{
                z: n,
                draw: function() {
                    t.draw.apply(t, arguments)
                }
            }]
        },
        _getMatchingVisibleMetas: function(t) {
            var e = this,
                n = e.isHorizontal();
            return e.chart._getSortedVisibleDatasetMetas().filter((function(i) {
                return (!t || i.type === t) && (n ? i.xAxisID === e.id : i.yAxisID === e.id)
            }))
        }
    });
    tn.prototype._draw = tn.prototype.draw;
    var en = tn,
        nn = W.isNullOrUndef,
        an = en.extend({
            determineDataLimits: function() {
                var t, e = this,
                    n = e._getLabels(),
                    i = e.options.ticks,
                    a = i.min,
                    r = i.max,
                    o = 0,
                    s = n.length - 1;
                void 0 !== a && (t = n.indexOf(a)) >= 0 && (o = t), void 0 !== r && (t = n.indexOf(r)) >= 0 && (s = t), e.minIndex = o, e.maxIndex = s, e.min = n[o], e.max = n[s]
            },
            buildTicks: function() {
                var t = this._getLabels(),
                    e = this.minIndex,
                    n = this.maxIndex;
                this.ticks = 0 === e && n === t.length - 1 ? t : t.slice(e, n + 1)
            },
            getLabelForIndex: function(t, e) {
                var n = this.chart;
                return n.getDatasetMeta(e).controller._getValueScaleId() === this.id ? this.getRightValue(n.data.datasets[e].data[t]) : this._getLabels()[t]
            },
            _configure: function() {
                var t = this,
                    e = t.options.offset,
                    n = t.ticks;
                en.prototype._configure.call(t), t.isHorizontal() || (t._reversePixels = !t._reversePixels), n && (t._startValue = t.minIndex - (e ? .5 : 0), t._valueRange = Math.max(n.length - (e ? 0 : 1), 1))
            },
            getPixelForValue: function(t, e, n) {
                var i, a, r, o = this;
                return nn(e) || nn(n) || (t = o.chart.data.datasets[n].data[e]), nn(t) || (i = o.isHorizontal() ? t.x : t.y), (void 0 !== i || void 0 !== t && isNaN(e)) && (a = o._getLabels(), t = W.valueOrDefault(i, t), e = -1 !== (r = a.indexOf(t)) ? r : e, isNaN(e) && (e = t)), o.getPixelForDecimal((e - o._startValue) / o._valueRange)
            },
            getPixelForTick: function(t) {
                var e = this.ticks;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t], t + this.minIndex)
            },
            getValueForPixel: function(t) {
                var e = Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
                return Math.min(Math.max(e, 0), this.ticks.length - 1)
            },
            getBasePixel: function() {
                return this.bottom
            }
        });
    an._defaults = {
        position: "bottom"
    };
    var rn = W.isNullOrUndef,
        on = en.extend({
            getRightValue: function(t) {
                return "string" == typeof t ? +t : en.prototype.getRightValue.call(this, t)
            },
            handleTickRangeOptions: function() {
                var t = this,
                    e = t.options.ticks;
                if (e.beginAtZero) {
                    var n = W.sign(t.min),
                        i = W.sign(t.max);
                    n < 0 && i < 0 ? t.max = 0 : n > 0 && i > 0 && (t.min = 0)
                }
                var a = void 0 !== e.min || void 0 !== e.suggestedMin,
                    r = void 0 !== e.max || void 0 !== e.suggestedMax;
                void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (t.min = null === t.min ? e.suggestedMin : Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (t.max = null === t.max ? e.suggestedMax : Math.max(t.max, e.suggestedMax)), a !== r && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
            },
            getTickLimit: function() {
                var t, e = this.options.ticks,
                    n = e.stepSize,
                    i = e.maxTicksLimit;
                return n ? t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (t = this._computeTickLimit(), i = i || 11), i && (t = Math.min(i, t)), t
            },
            _computeTickLimit: function() {
                return Number.POSITIVE_INFINITY
            },
            handleDirectionalChanges: W.noop,
            buildTicks: function() {
                var t = this,
                    e = t.options.ticks,
                    n = t.getTickLimit(),
                    i = {
                        maxTicks: n = Math.max(2, n),
                        min: e.min,
                        max: e.max,
                        precision: e.precision,
                        stepSize: W.valueOrDefault(e.fixedStepSize, e.stepSize)
                    },
                    a = t.ticks = function(t, e) {
                        var n, i, a, r, o = [],
                            s = t.stepSize,
                            l = s || 1,
                            u = t.maxTicks - 1,
                            d = t.min,
                            h = t.max,
                            c = t.precision,
                            f = e.min,
                            g = e.max,
                            p = W.niceNum((g - f) / u / l) * l;
                        if (p < 1e-14 && rn(d) && rn(h)) return [f, g];
                        (r = Math.ceil(g / p) - Math.floor(f / p)) > u && (p = W.niceNum(r * p / u / l) * l), s || rn(c) ? n = Math.pow(10, W._decimalPlaces(p)) : (n = Math.pow(10, c), p = Math.ceil(p * n) / n), i = Math.floor(f / p) * p, a = Math.ceil(g / p) * p, s && (!rn(d) && W.almostWhole(d / p, p / 1e3) && (i = d), !rn(h) && W.almostWhole(h / p, p / 1e3) && (a = h)), r = W.almostEquals(r = (a - i) / p, Math.round(r), p / 1e3) ? Math.round(r) : Math.ceil(r), i = Math.round(i * n) / n, a = Math.round(a * n) / n, o.push(rn(d) ? i : d);
                        for (var m = 1; m < r; ++m) o.push(Math.round((i + m * p) * n) / n);
                        return o.push(rn(h) ? a : h), o
                    }(i, t);
                t.handleDirectionalChanges(), t.max = W.max(a), t.min = W.min(a), e.reverse ? (a.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
            },
            convertTicksToLabels: function() {
                var t = this;
                t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), en.prototype.convertTicksToLabels.call(t)
            },
            _configure: function() {
                var t, e = this,
                    n = e.getTicks(),
                    i = e.min,
                    a = e.max;
                en.prototype._configure.call(e), e.options.offset && n.length && (i -= t = (a - i) / Math.max(n.length - 1, 1) / 2, a += t), e._startValue = i, e._endValue = a, e._valueRange = a - i
            }
        }),
        sn = {
            position: "left",
            ticks: {
                callback: He.formatters.linear
            }
        };

    function ln(t, e, n, i) {
        var a, r, o = t.options,
            s = function(t, e, n) {
                var i = [n.type, void 0 === e && void 0 === n.stack ? n.index : "", n.stack].join(".");
                return void 0 === t[i] && (t[i] = {
                    pos: [],
                    neg: []
                }), t[i]
            }(e, o.stacked, n),
            l = s.pos,
            u = s.neg,
            d = i.length;
        for (a = 0; a < d; ++a) r = t._parseValue(i[a]), isNaN(r.min) || isNaN(r.max) || n.data[a].hidden || (l[a] = l[a] || 0, u[a] = u[a] || 0, o.relativePoints ? l[a] = 100 : r.min < 0 || r.max < 0 ? u[a] += r.min : l[a] += r.max)
    }

    function un(t, e, n) {
        var i, a, r = n.length;
        for (i = 0; i < r; ++i) a = t._parseValue(n[i]), isNaN(a.min) || isNaN(a.max) || e.data[i].hidden || (t.min = Math.min(t.min, a.min), t.max = Math.max(t.max, a.max))
    }
    var dn = on.extend({
        determineDataLimits: function() {
            var t, e, n, i, a = this,
                r = a.options,
                o = a.chart.data.datasets,
                s = a._getMatchingVisibleMetas(),
                l = r.stacked,
                u = {},
                d = s.length;
            if (a.min = Number.POSITIVE_INFINITY, a.max = Number.NEGATIVE_INFINITY, void 0 === l)
                for (t = 0; !l && t < d; ++t) l = void 0 !== (e = s[t]).stack;
            for (t = 0; t < d; ++t) n = o[(e = s[t]).index].data, l ? ln(a, u, e, n) : un(a, e, n);
            W.each(u, (function(t) {
                i = t.pos.concat(t.neg), a.min = Math.min(a.min, W.min(i)), a.max = Math.max(a.max, W.max(i))
            })), a.min = W.isFinite(a.min) && !isNaN(a.min) ? a.min : 0, a.max = W.isFinite(a.max) && !isNaN(a.max) ? a.max : 1, a.handleTickRangeOptions()
        },
        _computeTickLimit: function() {
            var t;
            return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = W.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight))
        },
        handleDirectionalChanges: function() {
            this.isHorizontal() || this.ticks.reverse()
        },
        getLabelForIndex: function(t, e) {
            return this._getScaleLabel(this.chart.data.datasets[e].data[t])
        },
        getPixelForValue: function(t) {
            return this.getPixelForDecimal((+this.getRightValue(t) - this._startValue) / this._valueRange)
        },
        getValueForPixel: function(t) {
            return this._startValue + this.getDecimalForPixel(t) * this._valueRange
        },
        getPixelForTick: function(t) {
            var e = this.ticksAsNumbers;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
        }
    });
    dn._defaults = sn;
    var hn = W.valueOrDefault,
        cn = W.math.log10,
        fn = {
            position: "left",
            ticks: {
                callback: He.formatters.logarithmic
            }
        };

    function gn(t, e) {
        return W.isFinite(t) && t >= 0 ? t : e
    }
    var pn = en.extend({
        determineDataLimits: function() {
            var t, e, n, i, a, r, o = this,
                s = o.options,
                l = o.chart,
                u = l.data.datasets,
                d = o.isHorizontal();

            function h(t) {
                return d ? t.xAxisID === o.id : t.yAxisID === o.id
            }
            o.min = Number.POSITIVE_INFINITY, o.max = Number.NEGATIVE_INFINITY, o.minNotZero = Number.POSITIVE_INFINITY;
            var c = s.stacked;
            if (void 0 === c)
                for (t = 0; t < u.length; t++)
                    if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && h(e) && void 0 !== e.stack) {
                        c = !0;
                        break
                    } if (s.stacked || c) {
                var f = {};
                for (t = 0; t < u.length; t++) {
                    var g = [(e = l.getDatasetMeta(t)).type, void 0 === s.stacked && void 0 === e.stack ? t : "", e.stack].join(".");
                    if (l.isDatasetVisible(t) && h(e))
                        for (void 0 === f[g] && (f[g] = []), a = 0, r = (i = u[t].data).length; a < r; a++) {
                            var p = f[g];
                            n = o._parseValue(i[a]), isNaN(n.min) || isNaN(n.max) || e.data[a].hidden || n.min < 0 || n.max < 0 || (p[a] = p[a] || 0, p[a] += n.max)
                        }
                }
                W.each(f, (function(t) {
                    if (t.length > 0) {
                        var e = W.min(t),
                            n = W.max(t);
                        o.min = Math.min(o.min, e), o.max = Math.max(o.max, n)
                    }
                }))
            } else
                for (t = 0; t < u.length; t++)
                    if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && h(e))
                        for (a = 0, r = (i = u[t].data).length; a < r; a++) n = o._parseValue(i[a]), isNaN(n.min) || isNaN(n.max) || e.data[a].hidden || n.min < 0 || n.max < 0 || (o.min = Math.min(n.min, o.min), o.max = Math.max(n.max, o.max), 0 !== n.min && (o.minNotZero = Math.min(n.min, o.minNotZero)));
            o.min = W.isFinite(o.min) ? o.min : null, o.max = W.isFinite(o.max) ? o.max : null, o.minNotZero = W.isFinite(o.minNotZero) ? o.minNotZero : null, this.handleTickRangeOptions()
        },
        handleTickRangeOptions: function() {
            var t = this,
                e = t.options.ticks;
            t.min = gn(e.min, t.min), t.max = gn(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(cn(t.min)) - 1), t.max = Math.pow(10, Math.floor(cn(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(cn(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(cn(t.min)) + 1) : 10), null === t.minNotZero && (t.minNotZero = t.min > 0 ? t.min : t.max < 1 ? Math.pow(10, Math.floor(cn(t.max))) : 1)
        },
        buildTicks: function() {
            var t = this,
                e = t.options.ticks,
                n = !t.isHorizontal(),
                i = {
                    min: gn(e.min),
                    max: gn(e.max)
                },
                a = t.ticks = function(t, e) {
                    var n, i, a = [],
                        r = hn(t.min, Math.pow(10, Math.floor(cn(e.min)))),
                        o = Math.floor(cn(e.max)),
                        s = Math.ceil(e.max / Math.pow(10, o));
                    0 === r ? (n = Math.floor(cn(e.minNotZero)), i = Math.floor(e.minNotZero / Math.pow(10, n)), a.push(r), r = i * Math.pow(10, n)) : (n = Math.floor(cn(r)), i = Math.floor(r / Math.pow(10, n)));
                    var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                    do {
                        a.push(r), 10 == ++i && (i = 1, l = ++n >= 0 ? 1 : l), r = Math.round(i * Math.pow(10, n) * l) / l
                    } while (n < o || n === o && i < s);
                    var u = hn(t.max, r);
                    return a.push(u), a
                }(i, t);
            t.max = W.max(a), t.min = W.min(a), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && a.reverse()
        },
        convertTicksToLabels: function() {
            this.tickValues = this.ticks.slice(), en.prototype.convertTicksToLabels.call(this)
        },
        getLabelForIndex: function(t, e) {
            return this._getScaleLabel(this.chart.data.datasets[e].data[t])
        },
        getPixelForTick: function(t) {
            var e = this.tickValues;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
        },
        _getFirstTickValue: function(t) {
            var e = Math.floor(cn(t));
            return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
        },
        _configure: function() {
            var t = this,
                e = t.min,
                n = 0;
            en.prototype._configure.call(t), 0 === e && (e = t._getFirstTickValue(t.minNotZero), n = hn(t.options.ticks.fontSize, R.global.defaultFontSize) / t._length), t._startValue = cn(e), t._valueOffset = n, t._valueRange = (cn(t.max) - cn(e)) / (1 - n)
        },
        getPixelForValue: function(t) {
            var e = this,
                n = 0;
            return (t = +e.getRightValue(t)) > e.min && t > 0 && (n = (cn(t) - e._startValue) / e._valueRange + e._valueOffset), e.getPixelForDecimal(n)
        },
        getValueForPixel: function(t) {
            var e = this,
                n = e.getDecimalForPixel(t);
            return 0 === n && 0 === e.min ? 0 : Math.pow(10, e._startValue + (n - e._valueOffset) * e._valueRange)
        }
    });
    pn._defaults = fn;
    var mn = W.valueOrDefault,
        vn = W.valueAtIndexOrDefault,
        bn = W.options.resolve,
        xn = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
                display: !0,
                color: "rgba(0,0,0,0.1)",
                lineWidth: 1,
                borderDash: [],
                borderDashOffset: 0
            },
            gridLines: {
                circular: !1
            },
            ticks: {
                showLabelBackdrop: !0,
                backdropColor: "rgba(255,255,255,0.75)",
                backdropPaddingY: 2,
                backdropPaddingX: 2,
                callback: He.formatters.linear
            },
            pointLabels: {
                display: !0,
                fontSize: 10,
                callback: function(t) {
                    return t
                }
            }
        };

    function yn(t) {
        var e = t.ticks;
        return e.display && t.display ? mn(e.fontSize, R.global.defaultFontSize) + 2 * e.backdropPaddingY : 0
    }

    function _n(t, e, n, i, a) {
        return t === i || t === a ? {
            start: e - n / 2,
            end: e + n / 2
        } : t < i || t > a ? {
            start: e - n,
            end: e
        } : {
            start: e,
            end: e + n
        }
    }

    function kn(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
    }

    function wn(t, e, n, i) {
        var a, r, o = n.y + i / 2;
        if (W.isArray(e))
            for (a = 0, r = e.length; a < r; ++a) t.fillText(e[a], n.x, o), o += i;
        else t.fillText(e, n.x, o)
    }

    function Mn(t, e, n) {
        90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h)
    }

    function Sn(t) {
        return W.isNumber(t) ? t : 0
    }
    var Cn = on.extend({
        setDimensions: function() {
            var t = this;
            t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = yn(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
        },
        determineDataLimits: function() {
            var t = this,
                e = t.chart,
                n = Number.POSITIVE_INFINITY,
                i = Number.NEGATIVE_INFINITY;
            W.each(e.data.datasets, (function(a, r) {
                if (e.isDatasetVisible(r)) {
                    var o = e.getDatasetMeta(r);
                    W.each(a.data, (function(e, a) {
                        var r = +t.getRightValue(e);
                        isNaN(r) || o.data[a].hidden || (n = Math.min(r, n), i = Math.max(r, i))
                    }))
                }
            })), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions()
        },
        _computeTickLimit: function() {
            return Math.ceil(this.drawingArea / yn(this.options))
        },
        convertTicksToLabels: function() {
            var t = this;
            on.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map((function() {
                var e = W.callback(t.options.pointLabels.callback, arguments, t);
                return e || 0 === e ? e : ""
            }))
        },
        getLabelForIndex: function(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t])
        },
        fit: function() {
            var t = this.options;
            t.display && t.pointLabels.display ? function(t) {
                var e, n, i, a = W.options._parseFont(t.options.pointLabels),
                    r = {
                        l: 0,
                        r: t.width,
                        t: 0,
                        b: t.height - t.paddingTop
                    },
                    o = {};
                t.ctx.font = a.string, t._pointLabelSizes = [];
                var s, l, u, d = t.chart.data.labels.length;
                for (e = 0; e < d; e++) {
                    i = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = a.lineHeight, n = W.isArray(u = t.pointLabels[e]) ? {
                        w: W.longestText(s, s.font, u),
                        h: u.length * l
                    } : {
                        w: s.measureText(u).width,
                        h: l
                    }, t._pointLabelSizes[e] = n;
                    var h = t.getIndexAngle(e),
                        c = W.toDegrees(h) % 360,
                        f = _n(c, i.x, n.w, 0, 180),
                        g = _n(c, i.y, n.h, 90, 270);
                    f.start < r.l && (r.l = f.start, o.l = h), f.end > r.r && (r.r = f.end, o.r = h), g.start < r.t && (r.t = g.start, o.t = h), g.end > r.b && (r.b = g.end, o.b = h)
                }
                t.setReductions(t.drawingArea, r, o)
            }(this) : this.setCenterPoint(0, 0, 0, 0)
        },
        setReductions: function(t, e, n) {
            var i = this,
                a = e.l / Math.sin(n.l),
                r = Math.max(e.r - i.width, 0) / Math.sin(n.r),
                o = -e.t / Math.cos(n.t),
                s = -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b);
            a = Sn(a), r = Sn(r), o = Sn(o), s = Sn(s), i.drawingArea = Math.min(Math.floor(t - (a + r) / 2), Math.floor(t - (o + s) / 2)), i.setCenterPoint(a, r, o, s)
        },
        setCenterPoint: function(t, e, n, i) {
            var a = this,
                r = n + a.drawingArea,
                o = a.height - a.paddingTop - i - a.drawingArea;
            a.xCenter = Math.floor((t + a.drawingArea + (a.width - e - a.drawingArea)) / 2 + a.left), a.yCenter = Math.floor((r + o) / 2 + a.top + a.paddingTop)
        },
        getIndexAngle: function(t) {
            var e = this.chart,
                n = (t * (360 / e.data.labels.length) + ((e.options || {}).startAngle || 0)) % 360;
            return (n < 0 ? n + 360 : n) * Math.PI * 2 / 360
        },
        getDistanceFromCenterForValue: function(t) {
            var e = this;
            if (W.isNullOrUndef(t)) return NaN;
            var n = e.drawingArea / (e.max - e.min);
            return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n
        },
        getPointPosition: function(t, e) {
            var n = this.getIndexAngle(t) - Math.PI / 2;
            return {
                x: Math.cos(n) * e + this.xCenter,
                y: Math.sin(n) * e + this.yCenter
            }
        },
        getPointPositionForValue: function(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
        },
        getBasePosition: function(t) {
            var e = this.min,
                n = this.max;
            return this.getPointPositionForValue(t || 0, this.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0)
        },
        _drawGrid: function() {
            var t, e, n, i = this,
                a = i.ctx,
                r = i.options,
                o = r.gridLines,
                s = r.angleLines,
                l = mn(s.lineWidth, o.lineWidth),
                u = mn(s.color, o.color);
            if (r.pointLabels.display && function(t) {
                    var e = t.ctx,
                        n = t.options,
                        i = n.pointLabels,
                        a = yn(n),
                        r = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                        o = W.options._parseFont(i);
                    e.save(), e.font = o.string, e.textBaseline = "middle";
                    for (var s = t.chart.data.labels.length - 1; s >= 0; s--) {
                        var l = t.getPointPosition(s, r + (0 === s ? a / 2 : 0) + 5),
                            u = vn(i.fontColor, s, R.global.defaultFontColor);
                        e.fillStyle = u;
                        var d = t.getIndexAngle(s),
                            h = W.toDegrees(d);
                        e.textAlign = kn(h), Mn(h, t._pointLabelSizes[s], l), wn(e, t.pointLabels[s], l, o.lineHeight)
                    }
                    e.restore()
                }(i), o.display && W.each(i.ticks, (function(t, n) {
                    0 !== n && (e = i.getDistanceFromCenterForValue(i.ticksAsNumbers[n]), function(t, e, n, i) {
                        var a, r = t.ctx,
                            o = e.circular,
                            s = t.chart.data.labels.length,
                            l = vn(e.color, i - 1),
                            u = vn(e.lineWidth, i - 1);
                        if ((o || s) && l && u) {
                            if (r.save(), r.strokeStyle = l, r.lineWidth = u, r.setLineDash && (r.setLineDash(e.borderDash || []), r.lineDashOffset = e.borderDashOffset || 0), r.beginPath(), o) r.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
                            else {
                                a = t.getPointPosition(0, n), r.moveTo(a.x, a.y);
                                for (var d = 1; d < s; d++) a = t.getPointPosition(d, n), r.lineTo(a.x, a.y)
                            }
                            r.closePath(), r.stroke(), r.restore()
                        }
                    }(i, o, e, n))
                })), s.display && l && u) {
                for (a.save(), a.lineWidth = l, a.strokeStyle = u, a.setLineDash && (a.setLineDash(bn([s.borderDash, o.borderDash, []])), a.lineDashOffset = bn([s.borderDashOffset, o.borderDashOffset, 0])), t = i.chart.data.labels.length - 1; t >= 0; t--) e = i.getDistanceFromCenterForValue(r.ticks.reverse ? i.min : i.max), n = i.getPointPosition(t, e), a.beginPath(), a.moveTo(i.xCenter, i.yCenter), a.lineTo(n.x, n.y), a.stroke();
                a.restore()
            }
        },
        _drawLabels: function() {
            var t = this,
                e = t.ctx,
                n = t.options.ticks;
            if (n.display) {
                var i, a, r = t.getIndexAngle(0),
                    o = W.options._parseFont(n),
                    s = mn(n.fontColor, R.global.defaultFontColor);
                e.save(), e.font = o.string, e.translate(t.xCenter, t.yCenter), e.rotate(r), e.textAlign = "center", e.textBaseline = "middle", W.each(t.ticks, (function(r, l) {
                    (0 !== l || n.reverse) && (i = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]), n.showLabelBackdrop && (a = e.measureText(r).width, e.fillStyle = n.backdropColor, e.fillRect(-a / 2 - n.backdropPaddingX, -i - o.size / 2 - n.backdropPaddingY, a + 2 * n.backdropPaddingX, o.size + 2 * n.backdropPaddingY)), e.fillStyle = s, e.fillText(r, 0, -i))
                })), e.restore()
            }
        },
        _drawTitle: W.noop
    });
    Cn._defaults = xn;
    var Pn = W._deprecated,
        An = W.options.resolve,
        Dn = W.valueOrDefault,
        Tn = Number.MIN_SAFE_INTEGER || -9007199254740991,
        In = Number.MAX_SAFE_INTEGER || 9007199254740991,
        Fn = {
            millisecond: {
                common: !0,
                size: 1,
                steps: 1e3
            },
            second: {
                common: !0,
                size: 1e3,
                steps: 60
            },
            minute: {
                common: !0,
                size: 6e4,
                steps: 60
            },
            hour: {
                common: !0,
                size: 36e5,
                steps: 24
            },
            day: {
                common: !0,
                size: 864e5,
                steps: 30
            },
            week: {
                common: !1,
                size: 6048e5,
                steps: 4
            },
            month: {
                common: !0,
                size: 2628e6,
                steps: 12
            },
            quarter: {
                common: !1,
                size: 7884e6,
                steps: 4
            },
            year: {
                common: !0,
                size: 3154e7
            }
        },
        On = Object.keys(Fn);

    function Ln(t, e) {
        return t - e
    }

    function Rn(t) {
        return W.valueOrDefault(t.time.min, t.ticks.min)
    }

    function zn(t) {
        return W.valueOrDefault(t.time.max, t.ticks.max)
    }

    function Nn(t, e, n, i) {
        var a = function(t, e, n) {
                for (var i, a, r, o = 0, s = t.length - 1; o >= 0 && o <= s;) {
                    if (r = t[i = o + s >> 1], !(a = t[i - 1] || null)) return {
                        lo: null,
                        hi: r
                    };
                    if (r[e] < n) o = i + 1;
                    else {
                        if (!(a[e] > n)) return {
                            lo: a,
                            hi: r
                        };
                        s = i - 1
                    }
                }
                return {
                    lo: r,
                    hi: null
                }
            }(t, e, n),
            r = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
            o = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
            s = o[e] - r[e];
        return r[i] + (o[i] - r[i]) * (s ? (n - r[e]) / s : 0)
    }

    function Bn(t, e) {
        var n = t._adapter,
            i = t.options.time,
            a = i.parser,
            r = a || i.format,
            o = e;
        return "function" == typeof a && (o = a(o)), W.isFinite(o) || (o = "string" == typeof r ? n.parse(o, r) : n.parse(o)), null !== o ? +o : (a || "function" != typeof r || (o = r(e), W.isFinite(o) || (o = n.parse(o))), o)
    }

    function En(t, e) {
        if (W.isNullOrUndef(e)) return null;
        var n = t.options.time,
            i = Bn(t, t.getRightValue(e));
        return null === i || n.round && (i = +t._adapter.startOf(i, n.round)), i
    }

    function Wn(t, e, n, i) {
        var a, r, o = On.length;
        for (a = On.indexOf(t); a < o - 1; ++a)
            if ((r = Fn[On[a]]).common && Math.ceil((n - e) / ((r.steps ? r.steps : In) * r.size)) <= i) return On[a];
        return On[o - 1]
    }

    function Vn(t, e, n) {
        var i, a, r = [],
            o = {},
            s = e.length;
        for (i = 0; i < s; ++i) o[a = e[i]] = i, r.push({
            value: a,
            major: !1
        });
        return 0 !== s && n ? function(t, e, n, i) {
            var a, r, o = t._adapter,
                s = +o.startOf(e[0].value, i),
                l = e[e.length - 1].value;
            for (a = s; a <= l; a = +o.add(a, 1, i))(r = n[a]) >= 0 && (e[r].major = !0);
            return e
        }(t, r, o, n) : r
    }
    var Hn = en.extend({
        initialize: function() {
            this.mergeTicksOptions(), en.prototype.initialize.call(this)
        },
        update: function() {
            var t = this,
                e = t.options,
                n = e.time || (e.time = {}),
                i = t._adapter = new Ve._date(e.adapters.date);
            return Pn("time scale", n.format, "time.format", "time.parser"), Pn("time scale", n.min, "time.min", "ticks.min"), Pn("time scale", n.max, "time.max", "ticks.max"), W.mergeIf(n.displayFormats, i.formats()), en.prototype.update.apply(t, arguments)
        },
        getRightValue: function(t) {
            return t && void 0 !== t.t && (t = t.t), en.prototype.getRightValue.call(this, t)
        },
        determineDataLimits: function() {
            var t, e, n, i, a, r, o, s = this,
                l = s.chart,
                u = s._adapter,
                d = s.options,
                h = d.time.unit || "day",
                c = In,
                f = Tn,
                g = [],
                p = [],
                m = [],
                v = s._getLabels();
            for (t = 0, n = v.length; t < n; ++t) m.push(En(s, v[t]));
            for (t = 0, n = (l.data.datasets || []).length; t < n; ++t)
                if (l.isDatasetVisible(t))
                    if (W.isObject((a = l.data.datasets[t].data)[0]))
                        for (p[t] = [], e = 0, i = a.length; e < i; ++e) r = En(s, a[e]), g.push(r), p[t][e] = r;
                    else p[t] = m.slice(0), o || (g = g.concat(m), o = !0);
            else p[t] = [];
            m.length && (c = Math.min(c, m[0]), f = Math.max(f, m[m.length - 1])), g.length && (g = n > 1 ? function(t) {
                var e, n, i, a = {},
                    r = [];
                for (e = 0, n = t.length; e < n; ++e) a[i = t[e]] || (a[i] = !0, r.push(i));
                return r
            }(g).sort(Ln) : g.sort(Ln), c = Math.min(c, g[0]), f = Math.max(f, g[g.length - 1])), c = En(s, Rn(d)) || c, f = En(s, zn(d)) || f, c = c === In ? +u.startOf(Date.now(), h) : c, f = f === Tn ? +u.endOf(Date.now(), h) + 1 : f, s.min = Math.min(c, f), s.max = Math.max(c + 1, f), s._table = [], s._timestamps = {
                data: g,
                datasets: p,
                labels: m
            }
        },
        buildTicks: function() {
            var t, e, n, i = this,
                a = i.min,
                r = i.max,
                o = i.options,
                s = o.ticks,
                l = o.time,
                u = i._timestamps,
                d = [],
                h = i.getLabelCapacity(a),
                c = s.source,
                f = o.distribution;
            for (u = "data" === c || "auto" === c && "series" === f ? u.data : "labels" === c ? u.labels : function(t, e, n, i) {
                    var a, r = t._adapter,
                        o = t.options,
                        s = o.time,
                        l = s.unit || Wn(s.minUnit, e, n, i),
                        u = An([s.stepSize, s.unitStepSize, 1]),
                        d = "week" === l && s.isoWeekday,
                        h = e,
                        c = [];
                    if (d && (h = +r.startOf(h, "isoWeek", d)), h = +r.startOf(h, d ? "day" : l), r.diff(n, e, l) > 1e5 * u) throw e + " and " + n + " are too far apart with stepSize of " + u + " " + l;
                    for (a = h; a < n; a = +r.add(a, u, l)) c.push(a);
                    return a !== n && "ticks" !== o.bounds || c.push(a), c
                }(i, a, r, h), "ticks" === o.bounds && u.length && (a = u[0], r = u[u.length - 1]), a = En(i, Rn(o)) || a, r = En(i, zn(o)) || r, t = 0, e = u.length; t < e; ++t)(n = u[t]) >= a && n <= r && d.push(n);
            return i.min = a, i.max = r, i._unit = l.unit || (s.autoSkip ? Wn(l.minUnit, i.min, i.max, h) : function(t, e, n, i, a) {
                var r, o;
                for (r = On.length - 1; r >= On.indexOf(n); r--)
                    if (Fn[o = On[r]].common && t._adapter.diff(a, i, o) >= e - 1) return o;
                return On[n ? On.indexOf(n) : 0]
            }(i, d.length, l.minUnit, i.min, i.max)), i._majorUnit = s.major.enabled && "year" !== i._unit ? function(t) {
                for (var e = On.indexOf(t) + 1, n = On.length; e < n; ++e)
                    if (Fn[On[e]].common) return On[e]
            }(i._unit) : void 0, i._table = function(t, e, n, i) {
                if ("linear" === i || !t.length) return [{
                    time: e,
                    pos: 0
                }, {
                    time: n,
                    pos: 1
                }];
                var a, r, o, s, l, u = [],
                    d = [e];
                for (a = 0, r = t.length; a < r; ++a)(s = t[a]) > e && s < n && d.push(s);
                for (d.push(n), a = 0, r = d.length; a < r; ++a) l = d[a + 1], s = d[a], void 0 !== (o = d[a - 1]) && void 0 !== l && Math.round((l + o) / 2) === s || u.push({
                    time: s,
                    pos: a / (r - 1)
                });
                return u
            }(i._timestamps.data, a, r, f), i._offsets = function(t, e, n, i, a) {
                var r, o, s = 0,
                    l = 0;
                return a.offset && e.length && (r = Nn(t, "time", e[0], "pos"), s = 1 === e.length ? 1 - r : (Nn(t, "time", e[1], "pos") - r) / 2, o = Nn(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? o : (o - Nn(t, "time", e[e.length - 2], "pos")) / 2), {
                    start: s,
                    end: l,
                    factor: 1 / (s + 1 + l)
                }
            }(i._table, d, 0, 0, o), s.reverse && d.reverse(), Vn(i, d, i._majorUnit)
        },
        getLabelForIndex: function(t, e) {
            var n = this,
                i = n._adapter,
                a = n.chart.data,
                r = n.options.time,
                o = a.labels && t < a.labels.length ? a.labels[t] : "",
                s = a.datasets[e].data[t];
            return W.isObject(s) && (o = n.getRightValue(s)), r.tooltipFormat ? i.format(Bn(n, o), r.tooltipFormat) : "string" == typeof o ? o : i.format(Bn(n, o), r.displayFormats.datetime)
        },
        tickFormatFunction: function(t, e, n, i) {
            var a = this.options,
                r = a.time.displayFormats,
                o = this._majorUnit,
                s = r[o],
                l = n[e],
                u = a.ticks,
                d = o && s && l && l.major,
                h = this._adapter.format(t, i || (d ? s : r[this._unit])),
                c = d ? u.major : u.minor,
                f = An([c.callback, c.userCallback, u.callback, u.userCallback]);
            return f ? f(h, e, n) : h
        },
        convertTicksToLabels: function(t) {
            var e, n, i = [];
            for (e = 0, n = t.length; e < n; ++e) i.push(this.tickFormatFunction(t[e].value, e, t));
            return i
        },
        getPixelForOffset: function(t) {
            var e = this._offsets,
                n = Nn(this._table, "time", t, "pos");
            return this.getPixelForDecimal((e.start + n) * e.factor)
        },
        getPixelForValue: function(t, e, n) {
            var i = null;
            if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = En(this, t)), null !== i) return this.getPixelForOffset(i)
        },
        getPixelForTick: function(t) {
            var e = this.getTicks();
            return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
        },
        getValueForPixel: function(t) {
            var e = this._offsets,
                n = this.getDecimalForPixel(t) / e.factor - e.end,
                i = Nn(this._table, "pos", n, "time");
            return this._adapter._create(i)
        },
        _getLabelSize: function(t) {
            var e = this.options.ticks,
                n = this.ctx.measureText(t).width,
                i = W.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation),
                a = Math.cos(i),
                r = Math.sin(i),
                o = Dn(e.fontSize, R.global.defaultFontSize);
            return {
                w: n * a + o * r,
                h: n * r + o * a
            }
        },
        getLabelWidth: function(t) {
            return this._getLabelSize(t).w
        },
        getLabelCapacity: function(t) {
            var e = this,
                n = e.options.time,
                i = n.displayFormats,
                a = i[n.unit] || i.millisecond,
                r = e.tickFormatFunction(t, 0, Vn(e, [t], e._majorUnit), a),
                o = e._getLabelSize(r),
                s = Math.floor(e.isHorizontal() ? e.width / o.w : e.height / o.h);
            return e.options.offset && s--, s > 0 ? s : 1
        }
    });
    Hn._defaults = {
        position: "bottom",
        distribution: "linear",
        bounds: "data",
        adapters: {},
        time: {
            parser: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {}
        },
        ticks: {
            autoSkip: !1,
            source: "auto",
            major: {
                enabled: !1
            }
        }
    };
    var jn = {
            category: an,
            linear: dn,
            logarithmic: pn,
            radialLinear: Cn,
            time: Hn
        },
        qn = {
            datetime: "MMM D, YYYY, h:mm:ss a",
            millisecond: "h:mm:ss.SSS a",
            second: "h:mm:ss a",
            minute: "h:mm a",
            hour: "hA",
            day: "MMM D",
            week: "ll",
            month: "MMM YYYY",
            quarter: "[Q]Q - YYYY",
            year: "YYYY"
        };
    Ve._date.override("function" == typeof t ? {
        _id: "moment",
        formats: function() {
            return qn
        },
        parse: function(e, n) {
            return "string" == typeof e && "string" == typeof n ? e = t(e, n) : e instanceof t || (e = t(e)), e.isValid() ? e.valueOf() : null
        },
        format: function(e, n) {
            return t(e).format(n)
        },
        add: function(e, n, i) {
            return t(e).add(n, i).valueOf()
        },
        diff: function(e, n, i) {
            return t(e).diff(t(n), i)
        },
        startOf: function(e, n, i) {
            return e = t(e), "isoWeek" === n ? e.isoWeekday(i).valueOf() : e.startOf(n).valueOf()
        },
        endOf: function(e, n) {
            return t(e).endOf(n).valueOf()
        },
        _create: function(e) {
            return t(e)
        }
    } : {}), R._set("global", {
        plugins: {
            filler: {
                propagate: !0
            }
        }
    });
    var Un = {
        dataset: function(t) {
            var e = t.fill,
                n = t.chart,
                i = n.getDatasetMeta(e),
                a = i && n.isDatasetVisible(e) && i.dataset._children || [],
                r = a.length || 0;
            return r ? function(t, e) {
                return e < r && a[e]._view || null
            } : null
        },
        boundary: function(t) {
            var e = t.boundary,
                n = e ? e.x : null,
                i = e ? e.y : null;
            return W.isArray(e) ? function(t, n) {
                return e[n]
            } : function(t) {
                return {
                    x: null === n ? t.x : n,
                    y: null === i ? t.y : i
                }
            }
        }
    };

    function Yn(t, e, n) {
        var i, a = t._model || {},
            r = a.fill;
        if (void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r) return !1;
        if (!0 === r) return "origin";
        if (i = parseFloat(r, 10), isFinite(i) && Math.floor(i) === i) return "-" !== r[0] && "+" !== r[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;
        switch (r) {
            case "bottom":
                return "start";
            case "top":
                return "end";
            case "zero":
                return "origin";
            case "origin":
            case "start":
            case "end":
                return r;
            default:
                return !1
        }
    }

    function $n(t) {
        return (t.el._scale || {}).getPointPositionForValue ? function(t) {
            var e, n, i, a, r, o = t.el._scale,
                s = o.options,
                l = o.chart.data.labels.length,
                u = t.fill,
                d = [];
            if (!l) return null;
            for (n = s.ticks.reverse ? o.min : o.max, i = o.getPointPositionForValue(0, e = s.ticks.reverse ? o.max : o.min), a = 0; a < l; ++a) r = "start" === u || "end" === u ? o.getPointPositionForValue(a, "start" === u ? e : n) : o.getBasePosition(a), s.gridLines.circular && (r.cx = i.x, r.cy = i.y, r.angle = o.getIndexAngle(a) - Math.PI / 2), d.push(r);
            return d
        }(t) : function(t) {
            var e, n = t.el._model || {},
                i = t.el._scale || {},
                a = t.fill,
                r = null;
            if (isFinite(a)) return null;
            if ("start" === a ? r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === a ? r = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : i.getBasePixel && (r = i.getBasePixel()), null != r) {
                if (void 0 !== r.x && void 0 !== r.y) return r;
                if (W.isFinite(r)) return {
                    x: (e = i.isHorizontal()) ? r : null,
                    y: e ? null : r
                }
            }
            return null
        }(t)
    }

    function Gn(t, e, n) {
        var i, a = t[e].fill,
            r = [e];
        if (!n) return a;
        for (; !1 !== a && -1 === r.indexOf(a);) {
            if (!isFinite(a)) return a;
            if (!(i = t[a])) return !1;
            if (i.visible) return a;
            r.push(a), a = i.fill
        }
        return !1
    }

    function Xn(t) {
        var e = t.fill,
            n = "dataset";
        return !1 === e ? null : (isFinite(e) || (n = "boundary"), Un[n](t))
    }

    function Kn(t) {
        return t && !t.skip
    }

    function Zn(t, e, n, i, a) {
        var r, o, s, l;
        if (i && a) {
            for (t.moveTo(e[0].x, e[0].y), r = 1; r < i; ++r) W.canvas.lineTo(t, e[r - 1], e[r]);
            if (void 0 === n[0].angle)
                for (t.lineTo(n[a - 1].x, n[a - 1].y), r = a - 1; r > 0; --r) W.canvas.lineTo(t, n[r], n[r - 1], !0);
            else
                for (o = n[0].cx, s = n[0].cy, l = Math.sqrt(Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2)), r = a - 1; r > 0; --r) t.arc(o, s, l, n[r].angle, n[r - 1].angle, !0)
        }
    }

    function Jn(t, e, n, i, a, r) {
        var o, s, l, u, d, h, c, f, g = e.length,
            p = i.spanGaps,
            m = [],
            v = [],
            b = 0,
            x = 0;
        for (t.beginPath(), o = 0, s = g; o < s; ++o) d = n(u = e[l = o % g]._view, l, i), h = Kn(u), c = Kn(d), r && void 0 === f && h && (s = g + (f = o + 1)), h && c ? (b = m.push(u), x = v.push(d)) : b && x && (p ? (h && m.push(u), c && v.push(d)) : (Zn(t, m, v, b, x), b = x = 0, m = [], v = []));
        Zn(t, m, v, b, x), t.closePath(), t.fillStyle = a, t.fill()
    }
    var Qn = {
            id: "filler",
            afterDatasetsUpdate: function(t, e) {
                var n, i, a, r, o = (t.data.datasets || []).length,
                    s = e.propagate,
                    l = [];
                for (i = 0; i < o; ++i) r = null, (a = (n = t.getDatasetMeta(i)).dataset) && a._model && a instanceof mt.Line && (r = {
                    visible: t.isDatasetVisible(i),
                    fill: Yn(a, i, o),
                    chart: t,
                    el: a
                }), n.$filler = r, l.push(r);
                for (i = 0; i < o; ++i)(r = l[i]) && (r.fill = Gn(l, i, s), r.boundary = $n(r), r.mapper = Xn(r))
            },
            beforeDatasetsDraw: function(t) {
                var e, n, i, a, r, o, s, l = t._getSortedVisibleDatasetMetas(),
                    u = t.ctx;
                for (n = l.length - 1; n >= 0; --n)(e = l[n].$filler) && e.visible && (r = (i = e.el)._children || [], s = (a = i._view).backgroundColor || R.global.defaultColor, (o = e.mapper) && s && r.length && (W.canvas.clipArea(u, t.chartArea), Jn(u, r, o, a, s, i._loop), W.canvas.unclipArea(u)))
            }
        },
        ti = W.rtl.getRtlAdapter,
        ei = W.noop,
        ni = W.valueOrDefault;

    function ii(t, e) {
        return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth
    }
    R._set("global", {
        legend: {
            display: !0,
            position: "top",
            align: "center",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function(t, e) {
                var n = e.datasetIndex,
                    i = this.chart,
                    a = i.getDatasetMeta(n);
                a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null, i.update()
            },
            onHover: null,
            onLeave: null,
            labels: {
                boxWidth: 40,
                padding: 10,
                generateLabels: function(t) {
                    var e = t.data.datasets,
                        n = t.options.legend || {},
                        i = n.labels && n.labels.usePointStyle;
                    return t._getSortedDatasetMetas().map((function(n) {
                        var a = n.controller.getStyle(i ? 0 : void 0);
                        return {
                            text: e[n.index].label,
                            fillStyle: a.backgroundColor,
                            hidden: !t.isDatasetVisible(n.index),
                            lineCap: a.borderCapStyle,
                            lineDash: a.borderDash,
                            lineDashOffset: a.borderDashOffset,
                            lineJoin: a.borderJoinStyle,
                            lineWidth: a.borderWidth,
                            strokeStyle: a.borderColor,
                            pointStyle: a.pointStyle,
                            rotation: a.rotation,
                            datasetIndex: n.index
                        }
                    }), this)
                }
            }
        },
        legendCallback: function(t) {
            var e, n, i, a = document.createElement("ul"),
                r = t.data.datasets;
            for (a.setAttribute("class", t.id + "-legend"), e = 0, n = r.length; e < n; e++)(i = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = r[e].backgroundColor, r[e].label && i.appendChild(document.createTextNode(r[e].label));
            return a.outerHTML
        }
    });
    var ai = U.extend({
        initialize: function(t) {
            W.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1
        },
        beforeUpdate: ei,
        update: function(t, e, n) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
        },
        afterUpdate: ei,
        beforeSetDimensions: ei,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: ei,
        beforeBuildLabels: ei,
        buildLabels: function() {
            var t = this,
                e = t.options.labels || {},
                n = W.callback(e.generateLabels, [t.chart], t) || [];
            e.filter && (n = n.filter((function(n) {
                return e.filter(n, t.chart.data)
            }))), t.options.reverse && n.reverse(), t.legendItems = n
        },
        afterBuildLabels: ei,
        beforeFit: ei,
        fit: function() {
            var t = this,
                e = t.options,
                n = e.labels,
                i = e.display,
                a = t.ctx,
                r = W.options._parseFont(n),
                o = r.size,
                s = t.legendHitBoxes = [],
                l = t.minSize,
                u = t.isHorizontal();
            if (u ? (l.width = t.maxWidth, l.height = i ? 10 : 0) : (l.width = i ? 10 : 0, l.height = t.maxHeight), i) {
                if (a.font = r.string, u) {
                    var d = t.lineWidths = [0],
                        h = 0;
                    a.textAlign = "left", a.textBaseline = "middle", W.each(t.legendItems, (function(t, e) {
                        var i = ii(n, o) + o / 2 + a.measureText(t.text).width;
                        (0 === e || d[d.length - 1] + i + 2 * n.padding > l.width) && (h += o + n.padding, d[d.length - (e > 0 ? 0 : 1)] = 0), s[e] = {
                            left: 0,
                            top: 0,
                            width: i,
                            height: o
                        }, d[d.length - 1] += i + n.padding
                    })), l.height += h
                } else {
                    var c = n.padding,
                        f = t.columnWidths = [],
                        g = t.columnHeights = [],
                        p = n.padding,
                        m = 0,
                        v = 0;
                    W.each(t.legendItems, (function(t, e) {
                        var i = ii(n, o) + o / 2 + a.measureText(t.text).width;
                        e > 0 && v + o + 2 * c > l.height && (p += m + n.padding, f.push(m), g.push(v), m = 0, v = 0), m = Math.max(m, i), v += o + c, s[e] = {
                            left: 0,
                            top: 0,
                            width: i,
                            height: o
                        }
                    })), p += m, f.push(m), g.push(v), l.width += p
                }
                t.width = l.width, t.height = l.height
            } else t.width = l.width = t.height = l.height = 0
        },
        afterFit: ei,
        isHorizontal: function() {
            return "top" === this.options.position || "bottom" === this.options.position
        },
        draw: function() {
            var t = this,
                e = t.options,
                n = e.labels,
                i = R.global,
                a = i.defaultColor,
                r = i.elements.line,
                o = t.height,
                s = t.columnHeights,
                l = t.width,
                u = t.lineWidths;
            if (e.display) {
                var d, h = ti(e.rtl, t.left, t.minSize.width),
                    c = t.ctx,
                    f = ni(n.fontColor, i.defaultFontColor),
                    g = W.options._parseFont(n),
                    p = g.size;
                c.textAlign = h.textAlign("left"), c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = g.string;
                var m = ii(n, p),
                    v = t.legendHitBoxes,
                    b = function(t, i) {
                        switch (e.align) {
                            case "start":
                                return n.padding;
                            case "end":
                                return t - i;
                            default:
                                return (t - i + n.padding) / 2
                        }
                    },
                    x = t.isHorizontal();
                d = x ? {
                    x: t.left + b(l, u[0]),
                    y: t.top + n.padding,
                    line: 0
                } : {
                    x: t.left + n.padding,
                    y: t.top + b(o, s[0]),
                    line: 0
                }, W.rtl.overrideTextDirection(t.ctx, e.textDirection);
                var y = p + n.padding;
                W.each(t.legendItems, (function(e, i) {
                    var f = c.measureText(e.text).width,
                        g = m + p / 2 + f,
                        _ = d.x,
                        k = d.y;
                    h.setWidth(t.minSize.width), x ? i > 0 && _ + g + n.padding > t.left + t.minSize.width && (k = d.y += y, d.line++, _ = d.x = t.left + b(l, u[d.line])) : i > 0 && k + y > t.top + t.minSize.height && (_ = d.x = _ + t.columnWidths[d.line] + n.padding, d.line++, k = d.y = t.top + b(o, s[d.line]));
                    var w = h.x(_);
                    ! function(t, e, i) {
                        if (!(isNaN(m) || m <= 0)) {
                            c.save();
                            var o = ni(i.lineWidth, r.borderWidth);
                            if (c.fillStyle = ni(i.fillStyle, a), c.lineCap = ni(i.lineCap, r.borderCapStyle), c.lineDashOffset = ni(i.lineDashOffset, r.borderDashOffset), c.lineJoin = ni(i.lineJoin, r.borderJoinStyle), c.lineWidth = o, c.strokeStyle = ni(i.strokeStyle, a), c.setLineDash && c.setLineDash(ni(i.lineDash, r.borderDash)), n && n.usePointStyle) {
                                var s = m * Math.SQRT2 / 2,
                                    l = h.xPlus(t, m / 2);
                                W.canvas.drawPoint(c, i.pointStyle, s, l, e + p / 2, i.rotation)
                            } else c.fillRect(h.leftForLtr(t, m), e, m, p), 0 !== o && c.strokeRect(h.leftForLtr(t, m), e, m, p);
                            c.restore()
                        }
                    }(w, k, e), v[i].left = h.leftForLtr(w, v[i].width), v[i].top = k,
                        function(t, e, n, i) {
                            var a = p / 2,
                                r = h.xPlus(t, m + a),
                                o = e + a;
                            c.fillText(n.text, r, o), n.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(r, o), c.lineTo(h.xPlus(r, i), o), c.stroke())
                        }(w, k, e, f), x ? d.x += g + n.padding : d.y += y
                })), W.rtl.restoreTextDirection(t.ctx, e.textDirection)
            }
        },
        _getLegendItemAt: function(t, e) {
            var n, i, a, r = this;
            if (t >= r.left && t <= r.right && e >= r.top && e <= r.bottom)
                for (a = r.legendHitBoxes, n = 0; n < a.length; ++n)
                    if (t >= (i = a[n]).left && t <= i.left + i.width && e >= i.top && e <= i.top + i.height) return r.legendItems[n];
            return null
        },
        handleEvent: function(t) {
            var e, n = this,
                i = n.options,
                a = "mouseup" === t.type ? "click" : t.type;
            if ("mousemove" === a) {
                if (!i.onHover && !i.onLeave) return
            } else {
                if ("click" !== a) return;
                if (!i.onClick) return
            }
            e = n._getLegendItemAt(t.x, t.y), "click" === a ? e && i.onClick && i.onClick.call(n, t.native, e) : (i.onLeave && e !== n._hoveredItem && (n._hoveredItem && i.onLeave.call(n, t.native, n._hoveredItem), n._hoveredItem = e), i.onHover && e && i.onHover.call(n, t.native, e))
        }
    });

    function ri(t, e) {
        var n = new ai({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        se.configure(t, n, e), se.addBox(t, n), t.legend = n
    }
    var oi = {
            id: "legend",
            _element: ai,
            beforeInit: function(t) {
                var e = t.options.legend;
                e && ri(t, e)
            },
            beforeUpdate: function(t) {
                var e = t.options.legend,
                    n = t.legend;
                e ? (W.mergeIf(e, R.global.legend), n ? (se.configure(t, n, e), n.options = e) : ri(t, e)) : n && (se.removeBox(t, n), delete t.legend)
            },
            afterEvent: function(t, e) {
                var n = t.legend;
                n && n.handleEvent(e)
            }
        },
        si = W.noop;
    R._set("global", {
        title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
        }
    });
    var li = U.extend({
        initialize: function(t) {
            W.extend(this, t), this.legendHitBoxes = []
        },
        beforeUpdate: si,
        update: function(t, e, n) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
        },
        afterUpdate: si,
        beforeSetDimensions: si,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: si,
        beforeBuildLabels: si,
        buildLabels: si,
        afterBuildLabels: si,
        beforeFit: si,
        fit: function() {
            var t, e = this,
                n = e.options,
                i = e.minSize = {},
                a = e.isHorizontal();
            n.display ? (t = (W.isArray(n.text) ? n.text.length : 1) * W.options._parseFont(n).lineHeight + 2 * n.padding, e.width = i.width = a ? e.maxWidth : t, e.height = i.height = a ? t : e.maxHeight) : e.width = i.width = e.height = i.height = 0
        },
        afterFit: si,
        isHorizontal: function() {
            var t = this.options.position;
            return "top" === t || "bottom" === t
        },
        draw: function() {
            var t = this,
                e = t.ctx,
                n = t.options;
            if (n.display) {
                var i, a, r, o = W.options._parseFont(n),
                    s = o.lineHeight,
                    l = s / 2 + n.padding,
                    u = 0,
                    d = t.top,
                    h = t.left,
                    c = t.bottom,
                    f = t.right;
                e.fillStyle = W.valueOrDefault(n.fontColor, R.global.defaultFontColor), e.font = o.string, t.isHorizontal() ? (a = h + (f - h) / 2, r = d + l, i = f - h) : (a = "left" === n.position ? h + l : f - l, r = d + (c - d) / 2, i = c - d, u = Math.PI * ("left" === n.position ? -.5 : .5)), e.save(), e.translate(a, r), e.rotate(u), e.textAlign = "center", e.textBaseline = "middle";
                var g = n.text;
                if (W.isArray(g))
                    for (var p = 0, m = 0; m < g.length; ++m) e.fillText(g[m], 0, p, i), p += s;
                else e.fillText(g, 0, 0, i);
                e.restore()
            }
        }
    });

    function ui(t, e) {
        var n = new li({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        se.configure(t, n, e), se.addBox(t, n), t.titleBlock = n
    }
    var di = {},
        hi = Qn,
        ci = oi,
        fi = {
            id: "title",
            _element: li,
            beforeInit: function(t) {
                var e = t.options.title;
                e && ui(t, e)
            },
            beforeUpdate: function(t) {
                var e = t.options.title,
                    n = t.titleBlock;
                e ? (W.mergeIf(e, R.global.title), n ? (se.configure(t, n, e), n.options = e) : ui(t, e)) : n && (se.removeBox(t, n), delete t.titleBlock)
            }
        };
    for (var gi in di.filler = hi, di.legend = ci, di.title = fi, Be.helpers = W,
            function() {
                function t(t, e, n) {
                    var i;
                    return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i
                }

                function e(t) {
                    return null != t && "none" !== t
                }

                function n(n, i, a) {
                    var r = document.defaultView,
                        o = W._getParentNode(n),
                        s = r.getComputedStyle(n)[i],
                        l = r.getComputedStyle(o)[i],
                        u = e(s),
                        d = e(l),
                        h = Number.POSITIVE_INFINITY;
                    return u || d ? Math.min(u ? t(s, n, a) : h, d ? t(l, o, a) : h) : "none"
                }
                W.where = function(t, e) {
                    if (W.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var n = [];
                    return W.each(t, (function(t) {
                        e(t) && n.push(t)
                    })), n
                }, W.findIndex = Array.prototype.findIndex ? function(t, e, n) {
                    return t.findIndex(e, n)
                } : function(t, e, n) {
                    n = void 0 === n ? t : n;
                    for (var i = 0, a = t.length; i < a; ++i)
                        if (e.call(n, t[i], i, t)) return i;
                    return -1
                }, W.findNextWhere = function(t, e, n) {
                    W.isNullOrUndef(n) && (n = -1);
                    for (var i = n + 1; i < t.length; i++) {
                        var a = t[i];
                        if (e(a)) return a
                    }
                }, W.findPreviousWhere = function(t, e, n) {
                    W.isNullOrUndef(n) && (n = t.length);
                    for (var i = n - 1; i >= 0; i--) {
                        var a = t[i];
                        if (e(a)) return a
                    }
                }, W.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, W.almostEquals = function(t, e, n) {
                    return Math.abs(t - e) < n
                }, W.almostWhole = function(t, e) {
                    var n = Math.round(t);
                    return n - e <= t && n + e >= t
                }, W.max = function(t) {
                    return t.reduce((function(t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }), Number.NEGATIVE_INFINITY)
                }, W.min = function(t) {
                    return t.reduce((function(t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }), Number.POSITIVE_INFINITY)
                }, W.sign = Math.sign ? function(t) {
                    return Math.sign(t)
                } : function(t) {
                    return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
                }, W.toRadians = function(t) {
                    return t * (Math.PI / 180)
                }, W.toDegrees = function(t) {
                    return t * (180 / Math.PI)
                }, W._decimalPlaces = function(t) {
                    if (W.isFinite(t)) {
                        for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
                        return n
                    }
                }, W.getAngleFromPoint = function(t, e) {
                    var n = e.x - t.x,
                        i = e.y - t.y,
                        a = Math.sqrt(n * n + i * i),
                        r = Math.atan2(i, n);
                    return r < -.5 * Math.PI && (r += 2 * Math.PI), {
                        angle: r,
                        distance: a
                    }
                }, W.distanceBetweenPoints = function(t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, W.aliasPixel = function(t) {
                    return t % 2 == 0 ? 0 : .5
                }, W._alignPixel = function(t, e, n) {
                    var i = t.currentDevicePixelRatio,
                        a = n / 2;
                    return Math.round((e - a) * i) / i + a
                }, W.splineCurve = function(t, e, n, i) {
                    var a = t.skip ? e : t,
                        r = e,
                        o = n.skip ? e : n,
                        s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
                        l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                        u = s / (s + l),
                        d = l / (s + l),
                        h = i * (u = isNaN(u) ? 0 : u),
                        c = i * (d = isNaN(d) ? 0 : d);
                    return {
                        previous: {
                            x: r.x - h * (o.x - a.x),
                            y: r.y - h * (o.y - a.y)
                        },
                        next: {
                            x: r.x + c * (o.x - a.x),
                            y: r.y + c * (o.y - a.y)
                        }
                    }
                }, W.EPSILON = Number.EPSILON || 1e-14, W.splineCurveMonotone = function(t) {
                    var e, n, i, a, r, o, s, l, u, d = (t || []).map((function(t) {
                            return {
                                model: t._model,
                                deltaK: 0,
                                mK: 0
                            }
                        })),
                        h = d.length;
                    for (e = 0; e < h; ++e)
                        if (!(i = d[e]).model.skip) {
                            if (n = e > 0 ? d[e - 1] : null, (a = e < h - 1 ? d[e + 1] : null) && !a.model.skip) {
                                var c = a.model.x - i.model.x;
                                i.deltaK = 0 !== c ? (a.model.y - i.model.y) / c : 0
                            }
                            i.mK = !n || n.model.skip ? i.deltaK : !a || a.model.skip ? n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? 0 : (n.deltaK + i.deltaK) / 2
                        } for (e = 0; e < h - 1; ++e) a = d[e + 1], (i = d[e]).model.skip || a.model.skip || (W.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = a.mK = 0 : (r = i.mK / i.deltaK, o = a.mK / i.deltaK, (l = Math.pow(r, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(l), i.mK = r * s * i.deltaK, a.mK = o * s * i.deltaK)));
                    for (e = 0; e < h; ++e)(i = d[e]).model.skip || (a = e < h - 1 ? d[e + 1] : null, (n = e > 0 ? d[e - 1] : null) && !n.model.skip && (i.model.controlPointPreviousX = i.model.x - (u = (i.model.x - n.model.x) / 3), i.model.controlPointPreviousY = i.model.y - u * i.mK), a && !a.model.skip && (i.model.controlPointNextX = i.model.x + (u = (a.model.x - i.model.x) / 3), i.model.controlPointNextY = i.model.y + u * i.mK))
                }, W.nextItem = function(t, e, n) {
                    return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, W.previousItem = function(t, e, n) {
                    return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }, W.niceNum = function(t, e) {
                    var n = Math.floor(W.log10(t)),
                        i = t / Math.pow(10, n);
                    return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
                }, W.requestAnimFrame = "undefined" == typeof window ? function(t) {
                    t()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }, W.getRelativePosition = function(t, e) {
                    var n, i, a = t.originalEvent || t,
                        r = t.target || t.srcElement,
                        o = r.getBoundingClientRect(),
                        s = a.touches;
                    s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = a.clientX, i = a.clientY);
                    var l = parseFloat(W.getStyle(r, "padding-left")),
                        u = parseFloat(W.getStyle(r, "padding-top")),
                        d = parseFloat(W.getStyle(r, "padding-right")),
                        h = parseFloat(W.getStyle(r, "padding-bottom")),
                        c = o.bottom - o.top - u - h;
                    return {
                        x: n = Math.round((n - o.left - l) / (o.right - o.left - l - d) * r.width / e.currentDevicePixelRatio),
                        y: i = Math.round((i - o.top - u) / c * r.height / e.currentDevicePixelRatio)
                    }
                }, W.getConstraintWidth = function(t) {
                    return n(t, "max-width", "clientWidth")
                }, W.getConstraintHeight = function(t) {
                    return n(t, "max-height", "clientHeight")
                }, W._calculatePadding = function(t, e, n) {
                    return (e = W.getStyle(t, e)).indexOf("%") > -1 ? n * parseInt(e, 10) / 100 : parseInt(e, 10)
                }, W._getParentNode = function(t) {
                    var e = t.parentNode;
                    return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
                }, W.getMaximumWidth = function(t) {
                    var e = W._getParentNode(t);
                    if (!e) return t.clientWidth;
                    var n = e.clientWidth,
                        i = n - W._calculatePadding(e, "padding-left", n) - W._calculatePadding(e, "padding-right", n),
                        a = W.getConstraintWidth(t);
                    return isNaN(a) ? i : Math.min(i, a)
                }, W.getMaximumHeight = function(t) {
                    var e = W._getParentNode(t);
                    if (!e) return t.clientHeight;
                    var n = e.clientHeight,
                        i = n - W._calculatePadding(e, "padding-top", n) - W._calculatePadding(e, "padding-bottom", n),
                        a = W.getConstraintHeight(t);
                    return isNaN(a) ? i : Math.min(i, a)
                }, W.getStyle = function(t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, W.retinaScale = function(t, e) {
                    var n = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
                    if (1 !== n) {
                        var i = t.canvas,
                            a = t.height,
                            r = t.width;
                        i.height = a * n, i.width = r * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = a + "px", i.style.width = r + "px")
                    }
                }, W.fontString = function(t, e, n) {
                    return e + " " + t + "px " + n
                }, W.longestText = function(t, e, n, i) {
                    var a = (i = i || {}).data = i.data || {},
                        r = i.garbageCollect = i.garbageCollect || [];
                    i.font !== e && (a = i.data = {}, r = i.garbageCollect = [], i.font = e), t.font = e;
                    var o, s, l, u, d, h = 0,
                        c = n.length;
                    for (o = 0; o < c; o++)
                        if (null != (u = n[o]) && !0 !== W.isArray(u)) h = W.measureText(t, a, r, h, u);
                        else if (W.isArray(u))
                        for (s = 0, l = u.length; s < l; s++) null == (d = u[s]) || W.isArray(d) || (h = W.measureText(t, a, r, h, d));
                    var f = r.length / 2;
                    if (f > n.length) {
                        for (o = 0; o < f; o++) delete a[r[o]];
                        r.splice(0, f)
                    }
                    return h
                }, W.measureText = function(t, e, n, i, a) {
                    var r = e[a];
                    return r || (r = e[a] = t.measureText(a).width, n.push(a)), r > i && (i = r), i
                }, W.numberOfLabelLines = function(t) {
                    var e = 1;
                    return W.each(t, (function(t) {
                        W.isArray(t) && t.length > e && (e = t.length)
                    })), e
                }, W.color = _ ? function(t) {
                    return t instanceof CanvasGradient && (t = R.global.defaultColor), _(t)
                } : function(t) {
                    return console.error("Color.js not found!"), t
                }, W.getHoverColor = function(t) {
                    return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : W.color(t).saturate(.5).darken(.1).rgbString()
                }
            }(), Be._adapters = Ve, Be.Animation = $, Be.animationService = G, Be.controllers = qt, Be.DatasetController = Q, Be.defaults = R, Be.Element = U, Be.elements = mt, Be.Interaction = Zt, Be.layouts = se, Be.platform = be, Be.plugins = xe, Be.Scale = en, Be.scaleService = ye, Be.Ticks = He, Be.Tooltip = De, Be.helpers.each(jn, (function(t, e) {
                Be.scaleService.registerScaleType(e, t, t._defaults)
            })), di) di.hasOwnProperty(gi) && Be.plugins.register(di[gi]);
    Be.platform.initialize();
    var pi = Be;
    return "undefined" != typeof window && (window.Chart = Be), Be.Chart = Be, Be.Legend = di.legend._element, Be.Title = di.title._element, Be.pluginService = Be.plugins, Be.PluginBase = Be.Element.extend({}), Be.canvasHelpers = Be.helpers.canvas, Be.layoutService = Be.layouts, Be.LinearScaleBase = on, Be.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function(t) {
        Be[t] = function(e, n) {
            return new Be(e, Be.helpers.merge(n || {}, {
                type: t.charAt(0).toLowerCase() + t.slice(1)
            }))
        }
    })), pi
}));