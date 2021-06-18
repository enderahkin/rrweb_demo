/*
 * @Author: ZHOUWEN
 * @Date: 2021-05-28 18:27:50
 * @LastEditTime: 2021-05-28 18:44:03
 * @LastEditors: ZHOUWEN
 * @Description: 
 * @fileheader.Author: ZHOUWEN
 * @fileheader.LastModifiedBy: ZHOUWEN
 */
var rrwebPlayer = function () {
    "use strict";

    function e() {}

    function t(e, t) {
        for (const n in t) e[n] = t[n];
        return e
    }

    function n(e) {
        return e()
    }

    function r() {
        return Object.create(null)
    }

    function i(e) {
        e.forEach(n)
    }

    function o(e) {
        return "function" == typeof e
    }

    function a(e, t) {
        return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
    }

    function s(e) {
        const t = {};
        for (const n in e) "$" !== n[0] && (t[n] = e[n]);
        return t
    }

    function l(e, t) {
        e.appendChild(t)
    }

    function c(e, t, n) {
        e.insertBefore(t, n || null)
    }

    function u(e) {
        e.parentNode.removeChild(e)
    }

    function d(e, t) {
        for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
    }

    function f(e) {
        return document.createElement(e)
    }

    function p(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e)
    }

    function h(e) {
        return document.createTextNode(e)
    }

    function m() {
        return h(" ")
    }

    function v(e, t, n, r) {
        return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
    }

    function g(e, t, n) {
        null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
    }

    function y(e, t) {
        t = "" + t, e.wholeText !== t && (e.data = t)
    }

    function w(e, t, n, r) {
        e.style.setProperty(t, n, r ? "important" : "")
    }

    function b(e, t, n) {
        e.classList[n ? "add" : "remove"](t)
    }
    let x;

    function E(e) {
        x = e
    }

    function S() {
        if (!x) throw new Error("Function called outside component initialization");
        return x
    }

    function M(e) {
        S().$$.on_mount.push(e)
    }

    function T(e) {
        S().$$.on_destroy.push(e)
    }

    function k() {
        const e = S();
        return (t, n) => {
            const r = e.$$.callbacks[t];
            if (r) {
                const i = function (e, t) {
                    const n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, !1, !1, t), n
                }(t, n);
                r.slice().forEach(t => {
                    t.call(e, i)
                })
            }
        }
    }
    const C = [],
        _ = [],
        N = [],
        I = [],
        $ = Promise.resolve();
    let A = !1;

    function F(e) {
        N.push(e)
    }
    let O = !1;
    const L = new Set;

    function D() {
        if (!O) {
            O = !0;
            do {
                for (let e = 0; e < C.length; e += 1) {
                    const t = C[e];
                    E(t), P(t.$$)
                }
                for (C.length = 0; _.length;) _.pop()();
                for (let e = 0; e < N.length; e += 1) {
                    const t = N[e];
                    L.has(t) || (L.add(t), t())
                }
                N.length = 0
            } while (C.length);
            for (; I.length;) I.pop()();
            A = !1, O = !1, L.clear()
        }
    }

    function P(e) {
        if (null !== e.fragment) {
            e.update(), i(e.before_update);
            const t = e.dirty;
            e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(F)
        }
    }
    const R = new Set;
    let j;

    function z() {
        j = {
            r: 0,
            c: [],
            p: j
        }
    }

    function B() {
        j.r || i(j.c), j = j.p
    }

    function U(e, t) {
        e && e.i && (R.delete(e), e.i(t))
    }

    function q(e, t, n, r) {
        if (e && e.o) {
            if (R.has(e)) return;
            R.add(e), j.c.push(() => {
                R.delete(e), r && (n && e.d(1), r())
            }), e.o(t)
        }
    }

    function V(e) {
        e && e.c()
    }

    function W(e, t, r) {
        const {
            fragment: a,
            on_mount: s,
            on_destroy: l,
            after_update: c
        } = e.$$;
        a && a.m(t, r), F(() => {
            const t = s.map(n).filter(o);
            l ? l.push(...t) : i(t), e.$$.on_mount = []
        }), c.forEach(F)
    }

    function X(e, t) {
        const n = e.$$;
        null !== n.fragment && (i(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
    }

    function Y(e, t) {
        -1 === e.$$.dirty[0] && (C.push(e), A || (A = !0, $.then(D)), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
    }

    function H(t, n, o, a, s, l, c = [-1]) {
        const d = x;
        E(t);
        const f = n.props || {},
            p = t.$$ = {
                fragment: null,
                ctx: null,
                props: l,
                update: e,
                not_equal: s,
                bound: r(),
                on_mount: [],
                on_destroy: [],
                before_update: [],
                after_update: [],
                context: new Map(d ? d.$$.context : []),
                callbacks: r(),
                dirty: c
            };
        let h = !1;
        if (p.ctx = o ? o(t, f, (e, n, ...r) => {
                const i = r.length ? r[0] : n;
                return p.ctx && s(p.ctx[e], p.ctx[e] = i) && (p.bound[e] && p.bound[e](i), h && Y(t, e)), n
            }) : [], p.update(), h = !0, i(p.before_update), p.fragment = !!a && a(p.ctx), n.target) {
            if (n.hydrate) {
                const e = function (e) {
                    return Array.from(e.childNodes)
                }(n.target);
                p.fragment && p.fragment.l(e), e.forEach(u)
            } else p.fragment && p.fragment.c();
            n.intro && U(t.$$.fragment), W(t, n.target, n.anchor), D()
        }
        E(d)
    }
    class G {
        $destroy() {
            X(this, 1), this.$destroy = e
        }
        $on(e, t) {
            const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return n.push(t), () => {
                const e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
            }
        }
        $set() {}
    }
    var J, K, Q, Z, ee;
    ! function (e) {
        e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom"
    }(J || (J = {})),
    function (e) {
        e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log"
    }(K || (K = {})),
    function (e) {
        e[e.MouseUp = 0] = "MouseUp", e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", e[e.TouchEnd = 9] = "TouchEnd"
    }(Q || (Q = {})),
    function (e) {
        e[e.Play = 0] = "Play", e[e.Pause = 1] = "Pause"
    }(Z || (Z = {})),
    function (e) {
        e.Start = "start", e.Pause = "pause", e.Resume = "resume", e.Resize = "resize", e.Finish = "finish", e.FullsnapshotRebuilded = "fullsnapshot-rebuilded", e.LoadStylesheetStart = "load-stylesheet-start", e.LoadStylesheetEnd = "load-stylesheet-end", e.SkipStart = "skip-start", e.SkipEnd = "skip-end", e.MouseInteraction = "mouse-interaction", e.EventCast = "event-cast", e.CustomEvent = "custom-event", e.Flush = "flush", e.StateChange = "state-change"
    }(ee || (ee = {}));
    /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.

        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.

        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
    var te, ne = function () {
        return (ne = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };

    function re(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
            next: function () {
                return e && r >= e.length && (e = void 0), {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function ie(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, i, o = n.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    }

    function oe() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(ie(arguments[t]));
        return e
    }! function (e) {
        e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment"
    }(te || (te = {}));
    var ae = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

    function se(e, t) {
        void 0 === t && (t = {});
        var n = 1,
            r = 1;

        function i(e) {
            var t = e.match(/\n/g);
            t && (n += t.length);
            var i = e.lastIndexOf("\n");
            r = -1 === i ? r + e.length : e.length - i
        }

        function o() {
            var e = {
                line: n,
                column: r
            };
            return function (t) {
                return t.position = new a(e), p(), t
            }
        }
        var a = function (e) {
            this.start = e, this.end = {
                line: n,
                column: r
            }, this.source = t.source
        };
        a.prototype.content = e;
        var s = [];

        function l(i) {
            var o = new Error(t.source + ":" + n + ":" + r + ": " + i);
            if (o.reason = i, o.filename = t.source, o.line = n, o.column = r, o.source = e, !t.silent) throw o;
            s.push(o)
        }

        function c() {
            return f(/^{\s*/)
        }

        function u() {
            return f(/^}/)
        }

        function d() {
            var t, n = [];
            for (p(), h(n); e.length && "}" !== e.charAt(0) && (t = T() || k());) !1 !== t && (n.push(t), h(n));
            return n
        }

        function f(t) {
            var n = t.exec(e);
            if (n) {
                var r = n[0];
                return i(r), e = e.slice(r.length), n
            }
        }

        function p() {
            f(/^\s*/)
        }

        function h(e) {
            var t;
            for (void 0 === e && (e = []); t = m();) !1 !== t && e.push(t), t = m();
            return e
        }

        function m() {
            var t = o();
            if ("/" === e.charAt(0) && "*" === e.charAt(1)) {
                for (var n = 2;
                    "" !== e.charAt(n) && ("*" !== e.charAt(n) || "/" !== e.charAt(n + 1));) ++n;
                if (n += 2, "" === e.charAt(n - 1)) return l("End of comment missing");
                var a = e.slice(2, n - 2);
                return r += 2, i(a), e = e.slice(n), r += 2, t({
                    type: "comment",
                    comment: a
                })
            }
        }

        function v() {
            var e = f(/^([^{]+)/);
            if (e) return le(e[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, (function (e) {
                return e.replace(/,/g, "‌")
            })).split(/\s*(?![^(]*\)),\s*/).map((function (e) {
                return e.replace(/\u200C/g, ",")
            }))
        }

        function g() {
            var e = o(),
                t = f(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
            if (t) {
                var n = le(t[0]);
                if (!f(/^:\s*/)) return l("property missing ':'");
                var r = f(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/),
                    i = e({
                        type: "declaration",
                        property: n.replace(ae, ""),
                        value: r ? le(r[0]).replace(ae, "") : ""
                    });
                return f(/^[;\s]*/), i
            }
        }

        function y() {
            var e, t = [];
            if (!c()) return l("missing '{'");
            for (h(t); e = g();) !1 !== e && (t.push(e), h(t)), e = g();
            return u() ? t : l("missing '}'")
        }

        function w() {
            for (var e, t = [], n = o(); e = f(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);) t.push(e[1]), f(/^,\s*/);
            if (t.length) return n({
                type: "keyframe",
                values: t,
                declarations: y()
            })
        }
        var b, x = M("import"),
            E = M("charset"),
            S = M("namespace");

        function M(e) {
            var t = new RegExp("^@" + e + "\\s*([^;]+);");
            return function () {
                var n = o(),
                    r = f(t);
                if (r) {
                    var i = {
                        type: e
                    };
                    return i[e] = r[1].trim(), n(i)
                }
            }
        }

        function T() {
            if ("@" === e[0]) return function () {
                var e = o(),
                    t = f(/^@([-\w]+)?keyframes\s*/);
                if (t) {
                    var n = t[1];
                    if (!(t = f(/^([-\w]+)\s*/))) return l("@keyframes missing name");
                    var r, i = t[1];
                    if (!c()) return l("@keyframes missing '{'");
                    for (var a = h(); r = w();) a.push(r), a = a.concat(h());
                    return u() ? e({
                        type: "keyframes",
                        name: i,
                        vendor: n,
                        keyframes: a
                    }) : l("@keyframes missing '}'")
                }
            }() || function () {
                var e = o(),
                    t = f(/^@media *([^{]+)/);
                if (t) {
                    var n = le(t[1]);
                    if (!c()) return l("@media missing '{'");
                    var r = h().concat(d());
                    return u() ? e({
                        type: "media",
                        media: n,
                        rules: r
                    }) : l("@media missing '}'")
                }
            }() || function () {
                var e = o(),
                    t = f(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
                if (t) return e({
                    type: "custom-media",
                    name: le(t[1]),
                    media: le(t[2])
                })
            }() || function () {
                var e = o(),
                    t = f(/^@supports *([^{]+)/);
                if (t) {
                    var n = le(t[1]);
                    if (!c()) return l("@supports missing '{'");
                    var r = h().concat(d());
                    return u() ? e({
                        type: "supports",
                        supports: n,
                        rules: r
                    }) : l("@supports missing '}'")
                }
            }() || x() || E() || S() || function () {
                var e = o(),
                    t = f(/^@([-\w]+)?document *([^{]+)/);
                if (t) {
                    var n = le(t[1]),
                        r = le(t[2]);
                    if (!c()) return l("@document missing '{'");
                    var i = h().concat(d());
                    return u() ? e({
                        type: "document",
                        document: r,
                        vendor: n,
                        rules: i
                    }) : l("@document missing '}'")
                }
            }() || function () {
                var e = o();
                if (f(/^@page */)) {
                    var t = v() || [];
                    if (!c()) return l("@page missing '{'");
                    for (var n, r = h(); n = g();) r.push(n), r = r.concat(h());
                    return u() ? e({
                        type: "page",
                        selectors: t,
                        declarations: r
                    }) : l("@page missing '}'")
                }
            }() || function () {
                var e = o();
                if (f(/^@host\s*/)) {
                    if (!c()) return l("@host missing '{'");
                    var t = h().concat(d());
                    return u() ? e({
                        type: "host",
                        rules: t
                    }) : l("@host missing '}'")
                }
            }() || function () {
                var e = o();
                if (f(/^@font-face\s*/)) {
                    if (!c()) return l("@font-face missing '{'");
                    for (var t, n = h(); t = g();) n.push(t), n = n.concat(h());
                    return u() ? e({
                        type: "font-face",
                        declarations: n
                    }) : l("@font-face missing '}'")
                }
            }()
        }

        function k() {
            var e = o(),
                t = v();
            return t ? (h(), e({
                type: "rule",
                selectors: t,
                declarations: y()
            })) : l("selector missing")
        }
        return function e(t, n) {
            for (var r = t && "string" == typeof t.type, i = r ? t : n, o = 0, a = Object.keys(t); o < a.length; o++) {
                var s = a[o],
                    l = t[s];
                Array.isArray(l) ? l.forEach((function (t) {
                    e(t, i)
                })) : l && "object" == typeof l && e(l, i)
            }
            r && Object.defineProperty(t, "parent", {
                configurable: !0,
                writable: !0,
                enumerable: !1,
                value: n || null
            });
            return t
        }((b = d(), {
            type: "stylesheet",
            stylesheet: {
                source: t.source,
                rules: b,
                parsingErrors: s
            }
        }))
    }

    function le(e) {
        return e ? e.replace(/^\s+|\s+$/g, "") : ""
    }
    var ce = {
        script: "noscript",
        altglyph: "altGlyph",
        altglyphdef: "altGlyphDef",
        altglyphitem: "altGlyphItem",
        animatecolor: "animateColor",
        animatemotion: "animateMotion",
        animatetransform: "animateTransform",
        clippath: "clipPath",
        feblend: "feBlend",
        fecolormatrix: "feColorMatrix",
        fecomponenttransfer: "feComponentTransfer",
        fecomposite: "feComposite",
        feconvolvematrix: "feConvolveMatrix",
        fediffuselighting: "feDiffuseLighting",
        fedisplacementmap: "feDisplacementMap",
        fedistantlight: "feDistantLight",
        fedropshadow: "feDropShadow",
        feflood: "feFlood",
        fefunca: "feFuncA",
        fefuncb: "feFuncB",
        fefuncg: "feFuncG",
        fefuncr: "feFuncR",
        fegaussianblur: "feGaussianBlur",
        feimage: "feImage",
        femerge: "feMerge",
        femergenode: "feMergeNode",
        femorphology: "feMorphology",
        feoffset: "feOffset",
        fepointlight: "fePointLight",
        fespecularlighting: "feSpecularLighting",
        fespotlight: "feSpotLight",
        fetile: "feTile",
        feturbulence: "feTurbulence",
        foreignobject: "foreignObject",
        glyphref: "glyphRef",
        lineargradient: "linearGradient",
        radialgradient: "radialGradient"
    };
    var ue = /([^\\]):hover/g;

    function de(e) {
        var t = se(e, {
            silent: !0
        });
        return t.stylesheet ? (t.stylesheet.rules.forEach((function (t) {
            "selectors" in t && (t.selectors || []).forEach((function (t) {
                if (ue.test(t)) {
                    var n = t.replace(ue, "$1.\\:hover");
                    e = e.replace(t, t + ", " + n)
                }
            }))
        })), e) : e
    }

    function fe(e, t) {
        var n = t.doc,
            r = t.hackCss;
        switch (e.type) {
            case te.Document:
                return n.implementation.createDocument(null, "", null);
            case te.DocumentType:
                return n.implementation.createDocumentType(e.name || "html", e.publicId, e.systemId);
            case te.Element:
                var i, o = function (e) {
                    var t = ce[e.tagName] ? ce[e.tagName] : e.tagName;
                    return "link" === t && e.attributes._cssText && (t = "style"), t
                }(e);
                i = e.isSVG ? n.createElementNS("http://www.w3.org/2000/svg", o) : n.createElement(o);
                var a = function (t) {
                    if (!e.attributes.hasOwnProperty(t)) return "continue";
                    var a = e.attributes[t];
                    if (a = "boolean" == typeof a || "number" == typeof a ? "" : a, t.startsWith("rr_")) {
                        if ("canvas" === o && "rr_dataURL" === t) {
                            var s = document.createElement("img");
                            s.src = a, s.onload = function () {
                                var e = i.getContext("2d");
                                e && e.drawImage(s, 0, 0, s.width, s.height)
                            }
                        }
                        if ("rr_width" === t && (i.style.width = a), "rr_height" === t && (i.style.height = a), "rr_mediaState" === t) switch (a) {
                            case "played":
                                i.play();
                            case "paused":
                                i.pause()
                        }
                    } else {
                        var l = "textarea" === o && "value" === t,
                            c = "style" === o && "_cssText" === t;
                        if (c && r && (a = de(a)), l || c) {
                            for (var u = n.createTextNode(a), d = 0, f = Array.from(i.childNodes); d < f.length; d++) {
                                var p = f[d];
                                p.nodeType === i.TEXT_NODE && i.removeChild(p)
                            }
                            return i.appendChild(u), "continue"
                        }
                        if ("iframe" === o && "src" === t) return "continue";
                        try {
                            e.isSVG && "xlink:href" === t ? i.setAttributeNS("http://www.w3.org/1999/xlink", t, a) : "onload" === t || "onclick" === t || "onmouse" === t.substring(0, 7) ? i.setAttribute("_" + t, a) : i.setAttribute(t, a)
                        } catch (e) {}
                    }
                };
                for (var s in e.attributes) a(s);
                return i;
            case te.Text:
                return n.createTextNode(e.isStyle && r ? de(e.textContent) : e.textContent);
            case te.CDATA:
                return n.createCDATASection(e.textContent);
            case te.Comment:
                return n.createComment(e.textContent);
            default:
                return null
        }
    }

    function pe(e, t) {
        var n = t.doc,
            r = t.map,
            i = t.skipChild,
            o = void 0 !== i && i,
            a = t.hackCss,
            s = void 0 === a || a,
            l = fe(e, {
                doc: n,
                hackCss: s
            });
        if (!l) return null;
        if (e.type === te.Document && (n.close(), n.open(), l = n), l.__sn = e, r[e.id] = l, (e.type === te.Document || e.type === te.Element) && !o)
            for (var c = 0, u = e.childNodes; c < u.length; c++) {
                var d = u[c],
                    f = pe(d, {
                        doc: n,
                        map: r,
                        skipChild: !1,
                        hackCss: s
                    });
                f ? l.appendChild(f) : console.warn("Failed to rebuild", d)
            }
        return l
    }

    function he(e, t) {
        var n = t.doc,
            r = t.onVisit,
            i = t.hackCss,
            o = {},
            a = pe(e, {
                doc: n,
                map: o,
                skipChild: !1,
                hackCss: void 0 === i || i
            });
        return function (e, t) {
            for (var n in e) e[n] && (r = e[n], t(r));
            var r
        }(o, (function (e) {
            r && r(e),
                function (e) {
                    var t = e.__sn;
                    if (t.type === te.Element) {
                        var n = e;
                        for (var r in t.attributes)
                            if (t.attributes.hasOwnProperty(r) && r.startsWith("rr_")) {
                                var i = t.attributes[r];
                                "rr_scrollLeft" === r && (n.scrollLeft = i), "rr_scrollTop" === r && (n.scrollTop = i)
                            }
                    }
                }(e)
        })), [a, o]
    }
    var me = {
        map: {},
        getId: function (e) {
            return e.__sn ? e.__sn.id : -1
        },
        getNode: function (e) {
            return me.map[e] || null
        },
        removeNodeFromMap: function (e) {
            var t = e.__sn && e.__sn.id;
            delete me.map[t], e.childNodes && e.childNodes.forEach((function (e) {
                return me.removeNodeFromMap(e)
            }))
        },
        has: function (e) {
            return me.map.hasOwnProperty(e)
        }
    };
    var ve = function () {
        function e() {
            this.reset()
        }
        return e.prototype.add = function (e) {
            var t = this.indexes.get(e.parentId),
                n = {
                    id: e.node.id,
                    mutation: e,
                    children: [],
                    texts: [],
                    attributes: []
                };
            t ? (n.parent = t, t.children[n.id] = n) : this.tree[n.id] = n, this.indexes.set(n.id, n)
        }, e.prototype.remove = function (e) {
            var t = this,
                n = this.indexes.get(e.parentId),
                r = this.indexes.get(e.id),
                i = function (e) {
                    t.removeIdSet.add(e);
                    var n = me.getNode(e);
                    null == n || n.childNodes.forEach((function (e) {
                        "__sn" in e && i(e.__sn.id)
                    }))
                },
                o = function (n) {
                    t.removeIdSet.add(n.id), Object.values(n.children).forEach((function (e) {
                        return o(e)
                    }));
                    var r = t.indexes.get(n.id);
                    if (r) {
                        var i = r.parent;
                        i && (delete r.parent, delete i.children[r.id], t.indexes.delete(e.id))
                    }
                };
            r ? n ? (delete r.parent, delete n.children[r.id], this.indexes.delete(e.id), o(r)) : (delete this.tree[r.id], this.indexes.delete(r.id), o(r)) : (this.removeNodeMutations.push(e), i(e.id))
        }, e.prototype.text = function (e) {
            var t = this.indexes.get(e.id);
            t ? t.texts.push(e) : this.textMutations.push(e)
        }, e.prototype.attribute = function (e) {
            var t = this.indexes.get(e.id);
            t ? t.attributes.push(e) : this.attributeMutations.push(e)
        }, e.prototype.scroll = function (e) {
            this.scrollMap.set(e.id, e)
        }, e.prototype.input = function (e) {
            this.inputMap.set(e.id, e)
        }, e.prototype.flush = function () {
            var e, t, n, r, i = this,
                o = this.tree,
                a = this.removeNodeMutations,
                s = this.textMutations,
                l = this.attributeMutations,
                c = {
                    source: K.Mutation,
                    removes: a,
                    texts: s,
                    attributes: l,
                    adds: []
                },
                u = function (e, t) {
                    t && i.removeIdSet.add(e.id), c.texts = c.texts.concat(t ? [] : e.texts).filter((function (e) {
                        return !i.removeIdSet.has(e.id)
                    })), c.attributes = c.attributes.concat(t ? [] : e.attributes).filter((function (e) {
                        return !i.removeIdSet.has(e.id)
                    })), i.removeIdSet.has(e.id) || i.removeIdSet.has(e.mutation.parentId) || t ? Object.values(e.children).forEach((function (e) {
                        return u(e, !0)
                    })) : (c.adds.push(e.mutation), e.children && Object.values(e.children).forEach((function (e) {
                        return u(e, !1)
                    })))
                };
            Object.values(o).forEach((function (e) {
                return u(e, !1)
            }));
            try {
                for (var d = re(this.scrollMap.keys()), f = d.next(); !f.done; f = d.next()) {
                    var p = f.value;
                    this.removeIdSet.has(p) && this.scrollMap.delete(p)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    f && !f.done && (t = d.return) && t.call(d)
                } finally {
                    if (e) throw e.error
                }
            }
            try {
                for (var h = re(this.inputMap.keys()), m = h.next(); !m.done; m = h.next()) {
                    p = m.value;
                    this.removeIdSet.has(p) && this.inputMap.delete(p)
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    m && !m.done && (r = h.return) && r.call(h)
                } finally {
                    if (n) throw n.error
                }
            }
            var v = new Map(this.scrollMap),
                g = new Map(this.inputMap);
            return this.reset(), {
                mutationData: c,
                scrollMap: v,
                inputMap: g
            }
        }, e.prototype.reset = function () {
            this.tree = [], this.indexes = new Map, this.removeNodeMutations = [], this.textMutations = [], this.attributeMutations = [], this.removeIdSet = new Set, this.scrollMap = new Map, this.inputMap = new Map
        }, e
    }();

    function ge(e) {
        var t, n, r = {},
            i = function (e, t) {
                var n = {
                    value: e,
                    parent: t,
                    children: []
                };
                return r[e.node.id] = n, n
            },
            o = [];
        try {
            for (var a = re(e), s = a.next(); !s.done; s = a.next()) {
                var l = s.value,
                    c = l.nextId,
                    u = l.parentId;
                if (c && c in r) {
                    var d = r[c];
                    if (d.parent) {
                        var f = d.parent.children.indexOf(d);
                        d.parent.children.splice(f, 0, i(l, d.parent))
                    } else {
                        f = o.indexOf(d);
                        o.splice(f, 0, i(l, null))
                    }
                } else if (u in r) {
                    var p = r[u];
                    p.children.push(i(l, p))
                } else o.push(i(l, null))
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                s && !s.done && (n = a.return) && n.call(a)
            } finally {
                if (t) throw t.error
            }
        }
        return o
    }

    function ye(e, t) {
        t(e.value);
        for (var n = e.children.length - 1; n >= 0; n--) ye(e.children[n], t)
    }

    function we(e) {
        return e = e || Object.create(null), {
            on: function (t, n) {
                (e[t] || (e[t] = [])).push(n)
            },
            off: function (t, n) {
                e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1)
            },
            emit: function (t, n) {
                (e[t] || []).slice().map((function (e) {
                    e(n)
                })), (e["*"] || []).slice().map((function (e) {
                    e(t, n)
                }))
            }
        }
    }
    var be = Object.freeze({
        __proto__: null,
        default: we
    });

    function xe(e, t) {
        if (void 0 === e && (e = window), void 0 === t && (t = document), !("scrollBehavior" in t.documentElement.style) || !0 === e.__forceSmoothScrollPolyfill__) {
            var n, r = e.HTMLElement || e.Element,
                i = {
                    scroll: e.scroll || e.scrollTo,
                    scrollBy: e.scrollBy,
                    elementScroll: r.prototype.scroll || s,
                    scrollIntoView: r.prototype.scrollIntoView
                },
                o = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now,
                a = (n = e.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n) ? 1 : 0);
            e.scroll = e.scrollTo = function () {
                void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? h.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : i.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
            }, e.scrollBy = function () {
                void 0 !== arguments[0] && (l(arguments[0]) ? i.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : h.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
            }, r.prototype.scroll = r.prototype.scrollTo = function () {
                if (void 0 !== arguments[0])
                    if (!0 !== l(arguments[0])) {
                        var e = arguments[0].left,
                            t = arguments[0].top;
                        h.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                    } else {
                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                        i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                    }
            }, r.prototype.scrollBy = function () {
                void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                    left: ~~arguments[0].left + this.scrollLeft,
                    top: ~~arguments[0].top + this.scrollTop,
                    behavior: arguments[0].behavior
                }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
            }, r.prototype.scrollIntoView = function () {
                if (!0 !== l(arguments[0])) {
                    var n = f(this),
                        r = n.getBoundingClientRect(),
                        o = this.getBoundingClientRect();
                    n !== t.body ? (h.call(this, n, n.scrollLeft + o.left - r.left, n.scrollTop + o.top - r.top), "fixed" !== e.getComputedStyle(n).position && e.scrollBy({
                        left: r.left,
                        top: r.top,
                        behavior: "smooth"
                    })) : e.scrollBy({
                        left: o.left,
                        top: o.top,
                        behavior: "smooth"
                    })
                } else i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
            }
        }

        function s(e, t) {
            this.scrollLeft = e, this.scrollTop = t
        }

        function l(e) {
            if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
            if ("object" == typeof e && "smooth" === e.behavior) return !1;
            throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
        }

        function c(e, t) {
            return "Y" === t ? e.clientHeight + a < e.scrollHeight : "X" === t ? e.clientWidth + a < e.scrollWidth : void 0
        }

        function u(t, n) {
            var r = e.getComputedStyle(t, null)["overflow" + n];
            return "auto" === r || "scroll" === r
        }

        function d(e) {
            var t = c(e, "Y") && u(e, "Y"),
                n = c(e, "X") && u(e, "X");
            return t || n
        }

        function f(e) {
            for (; e !== t.body && !1 === d(e);) e = e.parentNode || e.host;
            return e
        }

        function p(t) {
            var n, r, i, a = (o() - t.startTime) / 468;
            n = function (e) {
                return .5 * (1 - Math.cos(Math.PI * e))
            }(a = a > 1 ? 1 : a), r = t.startX + (t.x - t.startX) * n, i = t.startY + (t.y - t.startY) * n, t.method.call(t.scrollable, r, i), r === t.x && i === t.y || e.requestAnimationFrame(p.bind(e, t))
        }

        function h(n, r, a) {
            var l, c, u, d, f = o();
            n === t.body ? (l = e, c = e.scrollX || e.pageXOffset, u = e.scrollY || e.pageYOffset, d = i.scroll) : (l = n, c = n.scrollLeft, u = n.scrollTop, d = s), p({
                scrollable: l,
                method: d,
                startTime: f,
                startX: c,
                startY: u,
                x: r,
                y: a
            })
        }
    }
    var Ee, Se = function () {
        function e(e, t) {
            void 0 === e && (e = []), this.timeOffset = 0, this.raf = null, this.actions = e, this.speed = t
        }
        return e.prototype.addAction = function (e) {
            var t = this.findActionIndex(e);
            this.actions.splice(t, 0, e)
        }, e.prototype.addActions = function (e) {
            var t;
            (t = this.actions).push.apply(t, oe(e))
        }, e.prototype.start = function () {
            this.actions.sort((function (e, t) {
                return e.delay - t.delay
            })), this.timeOffset = 0;
            var e = performance.now(),
                t = this.actions,
                n = this;
            this.raf = requestAnimationFrame((function r() {
                var i = performance.now();
                for (n.timeOffset += (i - e) * n.speed, e = i; t.length;) {
                    var o = t[0];
                    if (!(n.timeOffset >= o.delay)) break;
                    t.shift(), o.doAction()
                }(t.length > 0 || n.liveMode) && (n.raf = requestAnimationFrame(r))
            }))
        }, e.prototype.clear = function () {
            this.raf && (cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
        }, e.prototype.setSpeed = function (e) {
            this.speed = e
        }, e.prototype.toggleLiveMode = function (e) {
            this.liveMode = e
        }, e.prototype.isActive = function () {
            return null !== this.raf
        }, e.prototype.findActionIndex = function (e) {
            for (var t = 0, n = this.actions.length - 1; t <= n;) {
                var r = Math.floor((t + n) / 2);
                if (this.actions[r].delay < e.delay) t = r + 1;
                else {
                    if (!(this.actions[r].delay > e.delay)) return r;
                    n = r - 1
                }
            }
            return t
        }, e
    }();

    function Me(e, t) {
        if (e.type === J.IncrementalSnapshot && e.data.source === K.MouseMove) {
            var n = e.data.positions[0].timeOffset,
                r = e.timestamp + n;
            return e.delay = r - t, r - t
        }
        return e.delay = e.timestamp - t, e.delay
    }
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
    ! function (e) {
        e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped"
    }(Ee || (Ee = {}));
    var Te = {
        type: "xstate.init"
    };

    function ke(e) {
        return void 0 === e ? [] : [].concat(e)
    }

    function Ce(e) {
        return {
            type: "xstate.assign",
            assignment: e
        }
    }

    function _e(e, t) {
        return "string" == typeof (e = "string" == typeof e && t && t[e] ? t[e] : e) ? {
            type: e
        } : "function" == typeof e ? {
            type: e.name,
            exec: e
        } : e
    }

    function Ne(e) {
        return function (t) {
            return e === t
        }
    }

    function Ie(e) {
        return "string" == typeof e ? {
            type: e
        } : e
    }

    function $e(e, t) {
        return {
            value: e,
            context: t,
            actions: [],
            changed: !1,
            matches: Ne(e)
        }
    }

    function Ae(e, t) {
        void 0 === t && (t = {});
        var n = {
            config: e,
            _options: t,
            initialState: {
                value: e.initial,
                actions: ke(e.states[e.initial].entry).map((function (e) {
                    return _e(e, t.actions)
                })),
                context: e.context,
                matches: Ne(e.initial)
            },
            transition: function (t, r) {
                var i, o, a = "string" == typeof t ? {
                        value: t,
                        context: e.context
                    } : t,
                    s = a.value,
                    l = a.context,
                    c = Ie(r),
                    u = e.states[s];
                if (u.on) {
                    var d = ke(u.on[c.type]),
                        f = function (t) {
                            if (void 0 === t) return {
                                value: $e(s, l)
                            };
                            var r = "string" == typeof t ? {
                                    target: t
                                } : t,
                                i = r.target,
                                o = void 0 === i ? s : i,
                                a = r.actions,
                                d = void 0 === a ? [] : a,
                                f = r.cond,
                                p = l;
                            if ((void 0 === f ? function () {
                                    return !0
                                } : f)(l, c)) {
                                var h = e.states[o],
                                    m = !1,
                                    v = [].concat(u.exit, d, h.entry).filter((function (e) {
                                        return e
                                    })).map((function (e) {
                                        return _e(e, n._options.actions)
                                    })).filter((function (e) {
                                        if ("xstate.assign" === e.type) {
                                            m = !0;
                                            var t = Object.assign({}, p);
                                            return "function" == typeof e.assignment ? t = e.assignment(p, c) : Object.keys(e.assignment).forEach((function (n) {
                                                t[n] = "function" == typeof e.assignment[n] ? e.assignment[n](p, c) : e.assignment[n]
                                            })), p = t, !1
                                        }
                                        return !0
                                    }));
                                return {
                                    value: {
                                        value: o,
                                        context: p,
                                        actions: v,
                                        changed: o !== s || v.length > 0 || m,
                                        matches: Ne(o)
                                    }
                                }
                            }
                        };
                    try {
                        for (var p = function (e) {
                                var t = "function" == typeof Symbol && e[Symbol.iterator],
                                    n = 0;
                                return t ? t.call(e) : {
                                    next: function () {
                                        return e && n >= e.length && (e = void 0), {
                                            value: e && e[n++],
                                            done: !e
                                        }
                                    }
                                }
                            }(d), h = p.next(); !h.done; h = p.next()) {
                            var m = f(h.value);
                            if ("object" == typeof m) return m.value
                        }
                    } catch (e) {
                        i = {
                            error: e
                        }
                    } finally {
                        try {
                            h && !h.done && (o = p.return) && o.call(p)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                }
                return $e(s, l)
            }
        };
        return n
    }
    var Fe = function (e, t) {
        return e.actions.forEach((function (n) {
            var r = n.exec;
            return r && r(e.context, t)
        }))
    };

    function Oe(e) {
        var t = e.initialState,
            n = Ee.NotStarted,
            r = new Set,
            i = {
                _machine: e,
                send: function (i) {
                    n === Ee.Running && (t = e.transition(t, i), Fe(t, Ie(i)), r.forEach((function (e) {
                        return e(t)
                    })))
                },
                subscribe: function (e) {
                    return r.add(e), e(t), {
                        unsubscribe: function () {
                            return r.delete(e)
                        }
                    }
                },
                start: function (r) {
                    if (r) {
                        var o = "object" == typeof r ? r : {
                            context: e.config.context,
                            value: r
                        };
                        t = {
                            value: o.value,
                            actions: [],
                            context: o.context,
                            matches: Ne(o.value)
                        }
                    }
                    return n = Ee.Running, Fe(t, Te), i
                },
                stop: function () {
                    return n = Ee.Stopped, r.clear(), i
                },
                get state() {
                    return t
                },
                get status() {
                    return n
                }
            };
        return i
    }

    function Le(e, t) {
        var n = t.getCastFn,
            r = t.emitter;
        return Oe(Ae({
            id: "player",
            context: e,
            initial: "paused",
            states: {
                playing: {
                    on: {
                        PAUSE: {
                            target: "paused",
                            actions: ["pause"]
                        },
                        CAST_EVENT: {
                            target: "playing",
                            actions: "castEvent"
                        },
                        END: {
                            target: "paused",
                            actions: ["resetLastPlayedEvent", "pause"]
                        },
                        ADD_EVENT: {
                            target: "playing",
                            actions: ["addEvent"]
                        }
                    }
                },
                paused: {
                    on: {
                        PLAY: {
                            target: "playing",
                            actions: ["recordTimeOffset", "play"]
                        },
                        CAST_EVENT: {
                            target: "paused",
                            actions: "castEvent"
                        },
                        TO_LIVE: {
                            target: "live",
                            actions: ["startLive"]
                        },
                        ADD_EVENT: {
                            target: "paused",
                            actions: ["addEvent"]
                        }
                    }
                },
                live: {
                    on: {
                        ADD_EVENT: {
                            target: "live",
                            actions: ["addEvent"]
                        },
                        CAST_EVENT: {
                            target: "live",
                            actions: ["castEvent"]
                        }
                    }
                }
            }
        }, {
            actions: {
                castEvent: Ce({
                    lastPlayedEvent: function (e, t) {
                        return "CAST_EVENT" === t.type ? t.payload.event : e.lastPlayedEvent
                    }
                }),
                recordTimeOffset: Ce((function (e, t) {
                    var n = e.timeOffset;
                    return "payload" in t && "timeOffset" in t.payload && (n = t.payload.timeOffset), ne(ne({}, e), {
                        timeOffset: n,
                        baselineTime: e.events[0].timestamp + n
                    })
                })),
                play: function (e) {
                    var t, i, o, a, s;
                    console.warn("play");
                    var l = e.timer,
                        c = e.events,
                        u = e.baselineTime,
                        d = e.lastPlayedEvent;
                    l.clear();
                    try {
                        for (var f = re(c), p = f.next(); !p.done; p = f.next()) {
                            Me(p.value, u)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            p && !p.done && (i = f.return) && i.call(f)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    var h = function (e, t) {
                            for (var n = e.length - 1; n >= 0; n--) {
                                var r = e[n];
                                if (r.type === J.Meta && r.timestamp <= t) return e.slice(n)
                            }
                            return e
                        }(c, u),
                        m = new Array,
                        v = function (e) {
                            var t = null == d ? void 0 : d.timestamp;
                            if ((null == d ? void 0 : d.type) === J.IncrementalSnapshot && d.data.source === K.MouseMove && (t = d.timestamp + (null === (s = d.data.positions[0]) || void 0 === s ? void 0 : s.timeOffset)), t && t < u && (e.timestamp <= t || e === d)) return "continue";
                            var i = e.timestamp < u;
                            if (i && ! function (e) {
                                    switch (e.type) {
                                        case J.DomContentLoaded:
                                        case J.Load:
                                        case J.Custom:
                                            return !1;
                                        case J.FullSnapshot:
                                        case J.Meta:
                                            return !0
                                    }
                                    switch (e.data.source) {
                                        case K.MouseMove:
                                        case K.MouseInteraction:
                                        case K.TouchMove:
                                        case K.MediaInteraction:
                                            return !1;
                                        case K.ViewportResize:
                                        case K.StyleSheetRule:
                                        case K.Scroll:
                                        case K.Input:
                                            return !0
                                    }
                                    return !0
                                }(e)) return "continue";
                            var o = n(e, i);
                            i ? o() : m.push({
                                doAction: function () {
                                    o(), r.emit(ee.EventCast, e)
                                },
                                delay: e.delay
                            })
                        };
                    try {
                        for (var g = re(h), y = g.next(); !y.done; y = g.next()) {
                            v(y.value)
                        }
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            y && !y.done && (a = g.return) && a.call(g)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    r.emit(ee.Flush), l.addActions(m), l.start()
                },
                pause: function (e) {
                    e.timer.clear()
                },
                resetLastPlayedEvent: Ce((function (e) {
                    return ne(ne({}, e), {
                        lastPlayedEvent: null
                    })
                })),
                startLive: Ce({
                    baselineTime: function (e, t) {
                        return e.timer.toggleLiveMode(!0), e.timer.start(), "TO_LIVE" === t.type && t.payload.baselineTime ? t.payload.baselineTime : Date.now()
                    }
                }),
                addEvent: Ce((function (e, t) {
                    var i = e.baselineTime,
                        o = e.timer,
                        a = e.events;
                    if ("ADD_EVENT" === t.type) {
                        var s = t.payload.event;
                        Me(s, i), a.push(s);
                        var l = s.timestamp < i,
                            c = n(s, l);
                        l ? c() : (o.addAction({
                            doAction: function () {
                                c(), r.emit(ee.EventCast, s)
                            },
                            delay: s.delay
                        }), o.isActive() || o.start())
                    }
                    return ne(ne({}, e), {
                        events: a
                    })
                }))
            }
        }))
    }
    var De = we || be,
        Pe = {
            duration: 500,
            lineCap: "round",
            lineWidth: 3,
            strokeStyle: "red"
        },
        Re = {
            level: ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"],
            replayLogger: void 0
        },
        je = function () {
            function e(e, t) {
                var n = this;
                if (this.mouseTail = null, this.tailPositions = [], this.emitter = De(), this.legacy_missingNodeRetryMap = {}, this.imageMap = new Map, !(null == t ? void 0 : t.liveMode) && e.length < 2) throw new Error("Replayer need at least 2 events.");
                var r = {
                    speed: 1,
                    root: document.body,
                    loadTimeout: 0,
                    skipInactive: !1,
                    showWarning: !0,
                    showDebug: !1,
                    blockClass: "rr-block",
                    liveMode: !1,
                    insertStyleRules: [],
                    triggerFocus: !0,
                    UNSAFE_replayCanvas: !1,
                    pauseAnimation: !0,
                    mouseTail: Pe,
                    logConfig: Re
                };
                this.config = Object.assign({}, r, t), this.config.logConfig.replayLogger || (this.config.logConfig.replayLogger = this.getConsoleLogger()), this.handleResize = this.handleResize.bind(this), this.getCastFn = this.getCastFn.bind(this), this.emitter.on(ee.Resize, this.handleResize), this.setupDom(), this.treeIndex = new ve, this.fragmentParentMap = new Map, this.elementStateMap = new Map, this.emitter.on(ee.Flush, (function () {
                    var e, t, r, i, o, a, s = n.treeIndex.flush(),
                        l = s.scrollMap,
                        c = s.inputMap;
                    try {
                        for (var u = re(n.fragmentParentMap.entries()), d = u.next(); !d.done; d = u.next()) {
                            var f = ie(d.value, 2),
                                p = f[0],
                                h = f[1];
                            me.map[h.__sn.id] = h, h.__sn.type === te.Element && "textarea" === h.__sn.tagName && p.textContent && (h.value = p.textContent), h.appendChild(p), n.restoreState(h)
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            d && !d.done && (t = u.return) && t.call(u)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    n.fragmentParentMap.clear(), n.elementStateMap.clear();
                    try {
                        for (var m = re(l.values()), v = m.next(); !v.done; v = m.next()) {
                            var g = v.value;
                            n.applyScroll(g)
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            v && !v.done && (i = m.return) && i.call(m)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    try {
                        for (var y = re(c.values()), w = y.next(); !w.done; w = y.next()) {
                            g = w.value;
                            n.applyInput(g)
                        }
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            w && !w.done && (a = y.return) && a.call(y)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                }));
                var i = new Se([], (null == t ? void 0 : t.speed) || r.speed);
                this.service = Le({
                    events: e.map((function (e) {
                        return t && t.unpackFn ? t.unpackFn(e) : e
                    })),
                    timer: i,
                    timeOffset: 0,
                    baselineTime: 0,
                    lastPlayedEvent: null
                }, {
                    getCastFn: this.getCastFn,
                    emitter: this.emitter
                }), this.service.start(), this.service.subscribe((function (e) {
                    n.emitter.emit(ee.StateChange, {
                        player: e
                    })
                })), this.speedService = Oe(Ae({
                    id: "speed",
                    context: {
                        normalSpeed: -1,
                        timer: i
                    },
                    initial: "normal",
                    states: {
                        normal: {
                            on: {
                                FAST_FORWARD: {
                                    target: "skipping",
                                    actions: ["recordSpeed", "setSpeed"]
                                },
                                SET_SPEED: {
                                    target: "normal",
                                    actions: ["setSpeed"]
                                }
                            }
                        },
                        skipping: {
                            on: {
                                BACK_TO_NORMAL: {
                                    target: "normal",
                                    actions: ["restoreSpeed"]
                                },
                                SET_SPEED: {
                                    target: "normal",
                                    actions: ["setSpeed"]
                                }
                            }
                        }
                    }
                }, {
                    actions: {
                        setSpeed: function (e, t) {
                            "payload" in t && e.timer.setSpeed(t.payload.speed)
                        },
                        recordSpeed: Ce({
                            normalSpeed: function (e) {
                                return e.timer.speed
                            }
                        }),
                        restoreSpeed: function (e) {
                            e.timer.setSpeed(e.normalSpeed)
                        }
                    }
                })), this.speedService.start(), this.speedService.subscribe((function (e) {
                    n.emitter.emit(ee.StateChange, {
                        speed: e
                    })
                }));
                var o = this.service.state.context.events.find((function (e) {
                        return e.type === J.Meta
                    })),
                    a = this.service.state.context.events.find((function (e) {
                        return e.type === J.FullSnapshot
                    }));
                if (o) {
                    var s = o.data,
                        l = s.width,
                        c = s.height;
                    setTimeout((function () {
                        n.emitter.emit(ee.Resize, {
                            width: l,
                            height: c
                        })
                    }), 0)
                }
                a && setTimeout((function () {
                    n.rebuildFullSnapshot(a), n.iframe.contentWindow.scrollTo(a.data.initialOffset)
                }), 1)
            }
            return Object.defineProperty(e.prototype, "timer", {
                get: function () {
                    return this.service.state.context.timer
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.on = function (e, t) {
                return this.emitter.on(e, t), this
            }, e.prototype.setConfig = function (e) {
                var t = this;
                Object.keys(e).forEach((function (n) {
                    t.config[n] = e[n]
                })), this.config.skipInactive || this.backToNormal(), void 0 !== e.speed && this.speedService.send({
                    type: "SET_SPEED",
                    payload: {
                        speed: e.speed
                    }
                }), void 0 !== e.mouseTail && (!1 === e.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail.height = Number.parseFloat(this.iframe.height), this.mouseTail.classList.add("replayer-mouse-tail"), this.wrapper.insertBefore(this.mouseTail, this.iframe)), this.mouseTail.style.display = "inherit"))
            }, e.prototype.getMetaData = function () {
                var e = this.service.state.context.events[0],
                    t = this.service.state.context.events[this.service.state.context.events.length - 1];
                return {
                    startTime: e.timestamp,
                    endTime: t.timestamp,
                    totalTime: t.timestamp - e.timestamp
                }
            }, e.prototype.getCurrentTime = function () {
                return this.timer.timeOffset + this.getTimeOffset()
            }, e.prototype.getTimeOffset = function () {
                var e = this.service.state.context;
                return e.baselineTime - e.events[0].timestamp
            }, e.prototype.play = function (e) {
                var t;
                void 0 === e && (e = 0), this.service.state.matches("paused") || this.service.send({
                    type: "PAUSE"
                }), this.service.send({
                    type: "PLAY",
                    payload: {
                        timeOffset: e
                    }
                }), null === (t = this.iframe.contentDocument) || void 0 === t || t.getElementsByTagName("html")[0].classList.remove("rrweb-paused"), this.emitter.emit(ee.Start)
            }, e.prototype.pause = function (e) {
                var t;
                void 0 === e && this.service.state.matches("playing") && this.service.send({
                    type: "PAUSE"
                }), "number" == typeof e && (this.play(e), this.service.send({
                    type: "PAUSE"
                })), null === (t = this.iframe.contentDocument) || void 0 === t || t.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(ee.Pause)
            }, e.prototype.resume = function (e) {
                void 0 === e && (e = 0), console.warn("The 'resume' will be departed in 1.0. Please use 'play' method which has the same interface."), this.play(e), this.emitter.emit(ee.Resume)
            }, e.prototype.startLive = function (e) {
                this.service.send({
                    type: "TO_LIVE",
                    payload: {
                        baselineTime: e
                    }
                })
            }, e.prototype.addEvent = function (e) {
                var t = this,
                    n = this.config.unpackFn ? this.config.unpackFn(e) : e;
                Promise.resolve().then((function () {
                    return t.service.send({
                        type: "ADD_EVENT",
                        payload: {
                            event: n
                        }
                    })
                }))
            }, e.prototype.enableInteract = function () {
                this.iframe.setAttribute("scrolling", "auto"), this.iframe.style.pointerEvents = "auto"
            }, e.prototype.disableInteract = function () {
                this.iframe.setAttribute("scrolling", "no"), this.iframe.style.pointerEvents = "none"
            }, e.prototype.setupDom = function () {
                this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== this.config.mouseTail && (this.mouseTail = document.createElement("canvas"), this.mouseTail.classList.add("replayer-mouse-tail"), this.mouseTail.style.display = "inherit", this.wrapper.appendChild(this.mouseTail)), this.iframe = document.createElement("iframe");
                var e, t = ["allow-same-origin"];
                this.config.UNSAFE_replayCanvas && t.push("allow-scripts"), this.iframe.style.display = "none", this.iframe.setAttribute("sandbox", t.join(" ")), this.disableInteract(), this.wrapper.appendChild(this.iframe), this.iframe.contentWindow && this.iframe.contentDocument && (xe(this.iframe.contentWindow, this.iframe.contentDocument), void 0 === (e = this.iframe.contentWindow) && (e = window), "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach))
            }, e.prototype.handleResize = function (e) {
                var t, n;
                this.iframe.style.display = "inherit";
                try {
                    for (var r = re([this.mouseTail, this.iframe]), i = r.next(); !i.done; i = r.next()) {
                        var o = i.value;
                        o && (o.setAttribute("width", String(e.width)), o.setAttribute("height", String(e.height)))
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (n = r.return) && n.call(r)
                    } finally {
                        if (t) throw t.error
                    }
                }
            }, e.prototype.getCastFn = function (e, t) {
                var n, r = this;
                switch (void 0 === t && (t = !1), e.type) {
                    case J.DomContentLoaded:
                    case J.Load:
                        break;
                    case J.Custom:
                        n = function () {
                            r.emitter.emit(ee.CustomEvent, e)
                        };
                        break;
                    case J.Meta:
                        n = function () {
                            return r.emitter.emit(ee.Resize, {
                                width: e.data.width,
                                height: e.data.height
                            })
                        };
                        break;
                    case J.FullSnapshot:
                        n = function () {
                            r.rebuildFullSnapshot(e, t), r.iframe.contentWindow.scrollTo(e.data.initialOffset)
                        };
                        break;
                    case J.IncrementalSnapshot:
                        n = function () {
                            var n, i;
                            if (r.applyIncremental(e, t), !t && (e === r.nextUserInteractionEvent && (r.nextUserInteractionEvent = null, r.backToNormal()), r.config.skipInactive && !r.nextUserInteractionEvent)) {
                                try {
                                    for (var o = re(r.service.state.context.events), a = o.next(); !a.done; a = o.next()) {
                                        var s = a.value;
                                        if (!(s.timestamp <= e.timestamp) && r.isUserInteraction(s)) {
                                            s.delay - e.delay > 1e4 * r.speedService.state.context.timer.speed && (r.nextUserInteractionEvent = s);
                                            break
                                        }
                                    }
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        a && !a.done && (i = o.return) && i.call(o)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                                if (r.nextUserInteractionEvent) {
                                    var l = r.nextUserInteractionEvent.delay - e.delay,
                                        c = {
                                            speed: Math.min(Math.round(l / 5e3), 360)
                                        };
                                    r.speedService.send({
                                        type: "FAST_FORWARD",
                                        payload: c
                                    }), r.emitter.emit(ee.SkipStart, c)
                                }
                            }
                        }
                }
                return function () {
                    if (n && n(), r.service.send({
                            type: "CAST_EVENT",
                            payload: {
                                event: e
                            }
                        }), e === r.service.state.context.events[r.service.state.context.events.length - 1]) {
                        var t = function () {
                            r.backToNormal(), r.service.send("END"), r.emitter.emit(ee.Finish)
                        };
                        e.type === J.IncrementalSnapshot && e.data.source === K.MouseMove && e.data.positions.length ? setTimeout((function () {
                            t()
                        }), Math.max(0, 50 - e.data.positions[0].timeOffset)) : t()
                    }
                }
            }, e.prototype.rebuildFullSnapshot = function (e, t) {
                if (void 0 === t && (t = !1), !this.iframe.contentDocument) return console.warn("Looks like your replayer has been destroyed.");
                Object.keys(this.legacy_missingNodeRetryMap).length && console.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {}, me.map = he(e.data.node, {
                    doc: this.iframe.contentDocument
                })[1];
                var n = document.createElement("style"),
                    r = this.iframe.contentDocument,
                    i = r.documentElement,
                    o = r.head;
                i.insertBefore(n, o);
                var a, s = (a = this.config.blockClass, ["iframe, ." + a + " { background: #ccc }", "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
                this.config.pauseAnimation && s.push("html.rrweb-paused * { animation-play-state: paused !important; }"), this.service.state.matches("playing") || this.iframe.contentDocument.getElementsByTagName("html")[0].classList.add("rrweb-paused");
                for (var l = 0; l < s.length; l++) n.sheet.insertRule(s[l], l);
                this.emitter.emit(ee.FullsnapshotRebuilded, e), t || this.waitForStylesheetLoad(), this.config.UNSAFE_replayCanvas && this.preloadAllImages()
            }, e.prototype.waitForStylesheetLoad = function () {
                var e, t = this,
                    n = null === (e = this.iframe.contentDocument) || void 0 === e ? void 0 : e.head;
                if (n) {
                    var r, i = new Set,
                        o = this.service.state,
                        a = function () {
                            o = t.service.state
                        };
                    this.emitter.on(ee.Start, a), this.emitter.on(ee.Pause, a);
                    var s = function () {
                        t.emitter.off(ee.Start, a), t.emitter.off(ee.Pause, a)
                    };
                    n.querySelectorAll('link[rel="stylesheet"]').forEach((function (e) {
                        e.sheet || (i.add(e), e.addEventListener("load", (function () {
                            i.delete(e), 0 === i.size && -1 !== r && (o.matches("playing") && t.play(t.getCurrentTime()), t.emitter.emit(ee.LoadStylesheetEnd), r && window.clearTimeout(r), s())
                        })))
                    })), i.size > 0 && (this.service.send({
                        type: "PAUSE"
                    }), this.emitter.emit(ee.LoadStylesheetStart), r = window.setTimeout((function () {
                        o.matches("playing") && t.play(t.getCurrentTime()), r = -1, s()
                    }), this.config.loadTimeout))
                }
            }, e.prototype.preloadAllImages = function () {
                var e, t, n = this,
                    r = this.service.state,
                    i = function () {
                        r = n.service.state
                    };
                this.emitter.on(ee.Start, i), this.emitter.on(ee.Pause, i);
                var o = 0,
                    a = 0;
                try {
                    for (var s = re(this.service.state.context.events), l = s.next(); !l.done; l = s.next()) {
                        var c = l.value;
                        if (c.type === J.IncrementalSnapshot && c.data.source === K.CanvasMutation && "drawImage" === c.data.property && "string" == typeof c.data.args[0] && !this.imageMap.has(c)) {
                            o++;
                            var u = document.createElement("img");
                            u.src = c.data.args[0], this.imageMap.set(c, u), u.onload = function () {
                                ++a === o && (r.matches("playing") && n.play(n.getCurrentTime()), n.emitter.off(ee.Start, i), n.emitter.off(ee.Pause, i))
                            }
                        }
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        l && !l.done && (t = s.return) && t.call(s)
                    } finally {
                        if (e) throw e.error
                    }
                }
                o !== a && this.service.send({
                    type: "PAUSE"
                })
            }, e.prototype.applyIncremental = function (e, t) {
                var n, r, i = this,
                    o = e.data;
                switch (o.source) {
                    case K.Mutation:
                        t && (o.adds.forEach((function (e) {
                            return i.treeIndex.add(e)
                        })), o.texts.forEach((function (e) {
                            return i.treeIndex.text(e)
                        })), o.attributes.forEach((function (e) {
                            return i.treeIndex.attribute(e)
                        })), o.removes.forEach((function (e) {
                            return i.treeIndex.remove(e)
                        }))), this.applyMutation(o, t);
                        break;
                    case K.MouseMove:
                        if (t) {
                            var a = o.positions[o.positions.length - 1];
                            this.moveAndHover(o, a.x, a.y, a.id)
                        } else o.positions.forEach((function (t) {
                            var n = {
                                doAction: function () {
                                    i.moveAndHover(o, t.x, t.y, t.id)
                                },
                                delay: t.timeOffset + e.timestamp - i.service.state.context.baselineTime
                            };
                            i.timer.addAction(n)
                        })), this.timer.addAction({
                            doAction: function () {},
                            delay: e.delay - (null === (n = o.positions[0]) || void 0 === n ? void 0 : n.timeOffset)
                        });
                        break;
                    case K.MouseInteraction:
                        if (-1 === o.id) break;
                        var s = new Event(Q[o.type].toLowerCase());
                        if (!(v = me.getNode(o.id))) return this.debugNodeNotFound(o, o.id);
                        this.emitter.emit(ee.MouseInteraction, {
                            type: o.type,
                            target: v
                        });
                        var l = this.config.triggerFocus;
                        switch (o.type) {
                            case Q.Blur:
                                "blur" in v && v.blur();
                                break;
                            case Q.Focus:
                                l && v.focus && v.focus({
                                    preventScroll: !0
                                });
                                break;
                            case Q.Click:
                            case Q.TouchStart:
                            case Q.TouchEnd:
                                t || (this.moveAndHover(o, o.x, o.y, o.id), this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active"));
                                break;
                            default:
                                v.dispatchEvent(s)
                        }
                        break;
                    case K.Scroll:
                        if (-1 === o.id) break;
                        if (t) {
                            this.treeIndex.scroll(o);
                            break
                        }
                        this.applyScroll(o);
                        break;
                    case K.ViewportResize:
                        this.emitter.emit(ee.Resize, {
                            width: o.width,
                            height: o.height
                        });
                        break;
                    case K.Input:
                        if (-1 === o.id) break;
                        if (t) {
                            this.treeIndex.input(o);
                            break
                        }
                        this.applyInput(o);
                        break;
                    case K.MediaInteraction:
                        if (!(v = me.getNode(o.id))) return this.debugNodeNotFound(o, o.id);
                        var c = v;
                        try {
                            o.type === Z.Pause && c.pause(), o.type === Z.Play && (c.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA ? c.play() : c.addEventListener("canplay", (function () {
                                c.play()
                            })))
                        } catch (e) {
                            this.config.showWarning && console.warn("Failed to replay media interactions: " + (e.message || e))
                        }
                        break;
                    case K.StyleSheetRule:
                        if (!(v = me.getNode(o.id))) return this.debugNodeNotFound(o, o.id);
                        var u = v,
                            d = v.parentNode,
                            f = this.fragmentParentMap.has(d),
                            p = void 0;
                        if (f) {
                            var h = this.fragmentParentMap.get(v.parentNode);
                            p = document.createTextNode(""), d.replaceChild(p, v), h.appendChild(v)
                        }
                        var m = u.sheet;
                        o.adds && o.adds.forEach((function (e) {
                            var t = e.rule,
                                n = e.index;
                            try {
                                var r = void 0 === n ? void 0 : Math.min(n, m.rules.length);
                                try {
                                    m.insertRule(t, r)
                                } catch (e) {}
                            } catch (e) {}
                        })), o.removes && o.removes.forEach((function (e) {
                            var t = e.index;
                            try {
                                m.deleteRule(t)
                            } catch (e) {}
                        })), f && p && d.replaceChild(v, p);
                        break;
                    case K.CanvasMutation:
                        if (!this.config.UNSAFE_replayCanvas) return;
                        var v;
                        if (!(v = me.getNode(o.id))) return this.debugNodeNotFound(o, o.id);
                        try {
                            var g = v.getContext("2d");
                            if (o.setter) return void(g[o.property] = o.args[0]);
                            var y = g[o.property];
                            if ("drawImage" === o.property && "string" == typeof o.args[0]) {
                                var w = this.imageMap.get(e);
                                o.args[0] = w, y.apply(g, o.args)
                            } else y.apply(g, o.args)
                        } catch (e) {
                            this.warnCanvasMutationFailed(o, o.id, e)
                        }
                        break;
                    case K.Font:
                        try {
                            var b = new FontFace(o.family, o.buffer ? new Uint8Array(JSON.parse(o.fontSource)) : o.fontSource, o.descriptors);
                            null === (r = this.iframe.contentDocument) || void 0 === r || r.fonts.add(b)
                        } catch (e) {
                            this.config.showWarning && console.warn(e)
                        }
                        break;
                    case K.Log:
                        try {
                            var x = e.data,
                                E = this.config.logConfig.replayLogger;
                            "function" == typeof E[x.level] && E[x.level](x)
                        } catch (e) {
                            this.config.showWarning && console.warn(e)
                        }
                }
            }, e.prototype.applyMutation = function (e, t) {
                var n, r, i = this;
                e.removes.forEach((function (t) {
                    var n = me.getNode(t.id);
                    if (!n) return i.warnNodeNotFound(e, t.id);
                    var r = me.getNode(t.parentId);
                    if (!r) return i.warnNodeNotFound(e, t.parentId);
                    if (me.removeNodeFromMap(n), r) {
                        var o = i.fragmentParentMap.get(r);
                        if (o && o.contains(n)) o.removeChild(n);
                        else if (i.fragmentParentMap.has(n)) {
                            var a = i.fragmentParentMap.get(n);
                            r.removeChild(a), i.fragmentParentMap.delete(n)
                        } else r.removeChild(n)
                    }
                }));
                var o = ne({}, this.legacy_missingNodeRetryMap),
                    a = [];
                var s = function (e) {
                    if (!i.iframe.contentDocument) return console.warn("Looks like your replayer has been destroyed.");
                    var n = me.getNode(e.parentId);
                    if (!n) return a.push(e);
                    var r = null;
                    if (i.iframe.contentDocument.contains ? r = i.iframe.contentDocument.contains(n) : i.iframe.contentDocument.body.contains && (r = i.iframe.contentDocument.body.contains(n)), t && r) {
                        var s = document.createDocumentFragment();
                        for (me.map[e.parentId] = s, i.fragmentParentMap.set(s, n), i.storeState(n); n.firstChild;) s.appendChild(n.firstChild);
                        n = s
                    }
                    var l = null,
                        c = null;
                    if (e.previousId && (l = me.getNode(e.previousId)), e.nextId && (c = me.getNode(e.nextId)), function (e) {
                            var t = null;
                            return e.nextId && (t = me.getNode(e.nextId)), null !== e.nextId && void 0 !== e.nextId && -1 !== e.nextId && !t
                        }(e)) return a.push(e);
                    var u = pe(e.node, {
                        doc: i.iframe.contentDocument,
                        map: me.map,
                        skipChild: !0,
                        hackCss: !0
                    }); - 1 !== e.previousId && -1 !== e.nextId ? (l && l.nextSibling && l.nextSibling.parentNode ? n.insertBefore(u, l.nextSibling) : c && c.parentNode ? n.contains(c) ? n.insertBefore(u, c) : n.insertBefore(u, null) : n.appendChild(u), (e.previousId || e.nextId) && i.legacy_resolveMissingNode(o, n, u, e)) : o[e.node.id] = {
                        node: u,
                        mutation: e
                    }
                };
                e.adds.forEach((function (e) {
                    s(e)
                }));
                for (var l = Date.now(); a.length;) {
                    var c = ge(a);
                    if (a.length = 0, Date.now() - l > 500) {
                        this.warn("Timeout in the loop, please check the resolve tree data:", c);
                        break
                    }
                    try {
                        for (var u = (n = void 0, re(c)), d = u.next(); !d.done; d = u.next()) {
                            var f = d.value;
                            me.getNode(f.value.parentId) ? ye(f, (function (e) {
                                s(e)
                            })) : this.debug("Drop resolve tree since there is no parent for the root node.", f)
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            d && !d.done && (r = u.return) && r.call(u)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }
                Object.keys(o).length && Object.assign(this.legacy_missingNodeRetryMap, o), e.texts.forEach((function (t) {
                    var n = me.getNode(t.id);
                    if (!n) return i.warnNodeNotFound(e, t.id);
                    i.fragmentParentMap.has(n) && (n = i.fragmentParentMap.get(n)), n.textContent = t.value
                })), e.attributes.forEach((function (t) {
                    var n = me.getNode(t.id);
                    if (!n) return i.warnNodeNotFound(e, t.id);
                    for (var r in i.fragmentParentMap.has(n) && (n = i.fragmentParentMap.get(n)), t.attributes)
                        if ("string" == typeof r) {
                            var o = t.attributes[r];
                            try {
                                null !== o ? n.setAttribute(r, o) : n.removeAttribute(r)
                            } catch (e) {
                                i.config.showWarning && console.warn("An error occurred may due to the checkout feature.", e)
                            }
                        }
                }))
            }, e.prototype.applyScroll = function (e) {
                var t = me.getNode(e.id);
                if (!t) return this.debugNodeNotFound(e, e.id);
                if (t === this.iframe.contentDocument) this.iframe.contentWindow.scrollTo({
                    top: e.y,
                    left: e.x,
                    behavior: "smooth"
                });
                else try {
                    t.scrollTop = e.y, t.scrollLeft = e.x
                } catch (e) {}
            }, e.prototype.applyInput = function (e) {
                var t = me.getNode(e.id);
                if (!t) return this.debugNodeNotFound(e, e.id);
                try {
                    t.checked = e.isChecked, t.value = e.text
                } catch (e) {}
            }, e.prototype.formatMessage = function (e) {
                if (0 === e.trace.length) return "";
                var t = "\n\tat ";
                return t += e.trace.join("\n\tat ")
            }, e.prototype.getConsoleLogger = function () {
                var e, t, n = this,
                    r = {},
                    i = function (e) {
                        r[e] = "trace" === e ? function (e) {
                            (console.log.__rrweb_original__ ? console.log.__rrweb_original__ : console.log).apply(void 0, oe(e.payload.map((function (e) {
                                return JSON.parse(e)
                            })), [n.formatMessage(e)]))
                        } : function (t) {
                            (console[e].__rrweb_original__ ? console[e].__rrweb_original__ : console[e]).apply(void 0, oe(t.payload.map((function (e) {
                                return JSON.parse(e)
                            })), [n.formatMessage(t)]))
                        }
                    };
                try {
                    for (var o = re(this.config.logConfig.level), a = o.next(); !a.done; a = o.next()) {
                        i(a.value)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        a && !a.done && (t = o.return) && t.call(o)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return r
            }, e.prototype.legacy_resolveMissingNode = function (e, t, n, r) {
                var i = r.previousId,
                    o = r.nextId,
                    a = i && e[i],
                    s = o && e[o];
                if (a) {
                    var l = a,
                        c = l.node,
                        u = l.mutation;
                    t.insertBefore(c, n), delete e[u.node.id], delete this.legacy_missingNodeRetryMap[u.node.id], (u.previousId || u.nextId) && this.legacy_resolveMissingNode(e, t, c, u)
                }
                if (s) {
                    var d = s;
                    c = d.node, u = d.mutation;
                    t.insertBefore(c, n.nextSibling), delete e[u.node.id], delete this.legacy_missingNodeRetryMap[u.node.id], (u.previousId || u.nextId) && this.legacy_resolveMissingNode(e, t, c, u)
                }
            }, e.prototype.moveAndHover = function (e, t, n, r) {
                this.mouse.style.left = t + "px", this.mouse.style.top = n + "px", this.drawMouseTail({
                    x: t,
                    y: n
                });
                var i = me.getNode(r);
                if (!i) return this.debugNodeNotFound(e, r);
                this.hoverElements(i)
            }, e.prototype.drawMouseTail = function (e) {
                var t = this;
                if (this.mouseTail) {
                    var n = !0 === this.config.mouseTail ? Pe : Object.assign({}, Pe, this.config.mouseTail),
                        r = n.lineCap,
                        i = n.lineWidth,
                        o = n.strokeStyle,
                        a = n.duration,
                        s = function () {
                            if (t.mouseTail) {
                                var e = t.mouseTail.getContext("2d");
                                e && t.tailPositions.length && (e.clearRect(0, 0, t.mouseTail.width, t.mouseTail.height), e.beginPath(), e.lineWidth = i, e.lineCap = r, e.strokeStyle = o, e.moveTo(t.tailPositions[0].x, t.tailPositions[0].y), t.tailPositions.forEach((function (t) {
                                    return e.lineTo(t.x, t.y)
                                })), e.stroke())
                            }
                        };
                    this.tailPositions.push(e), s(), setTimeout((function () {
                        t.tailPositions = t.tailPositions.filter((function (t) {
                            return t !== e
                        })), s()
                    }), a / this.speedService.state.context.timer.speed)
                }
            }, e.prototype.hoverElements = function (e) {
                var t;
                null === (t = this.iframe.contentDocument) || void 0 === t || t.querySelectorAll(".\\:hover").forEach((function (e) {
                    e.classList.remove(":hover")
                }));
                for (var n = e; n;) n.classList && n.classList.add(":hover"), n = n.parentElement
            }, e.prototype.isUserInteraction = function (e) {
                return e.type === J.IncrementalSnapshot && (e.data.source > K.Mutation && e.data.source <= K.Input)
            }, e.prototype.backToNormal = function () {
                this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
                    type: "BACK_TO_NORMAL"
                }), this.emitter.emit(ee.SkipEnd, {
                    speed: this.speedService.state.context.normalSpeed
                }))
            }, e.prototype.storeState = function (e) {
                var t, n;
                if (e && e.nodeType === e.ELEMENT_NODE) {
                    var r = e;
                    (r.scrollLeft || r.scrollTop) && this.elementStateMap.set(e, {
                        scroll: [r.scrollLeft, r.scrollTop]
                    });
                    var i = r.children;
                    try {
                        for (var o = re(Array.from(i)), a = o.next(); !a.done; a = o.next()) {
                            var s = a.value;
                            this.storeState(s)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (n = o.return) && n.call(o)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                }
            }, e.prototype.restoreState = function (e) {
                var t, n;
                if (e.nodeType === e.ELEMENT_NODE) {
                    var r = e;
                    if (this.elementStateMap.has(e)) {
                        var i = this.elementStateMap.get(e);
                        i.scroll && (r.scrollLeft = i.scroll[0], r.scrollTop = i.scroll[1]), this.elementStateMap.delete(e)
                    }
                    var o = r.children;
                    try {
                        for (var a = re(Array.from(o)), s = a.next(); !s.done; s = a.next()) {
                            var l = s.value;
                            this.restoreState(l)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (n = a.return) && n.call(a)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                }
            }, e.prototype.warnNodeNotFound = function (e, t) {
                this.warn("Node with id '" + t + "' not found in", e)
            }, e.prototype.warnCanvasMutationFailed = function (e, t, n) {
                this.warn("Has error on update canvas '" + t + "'", e, n)
            }, e.prototype.debugNodeNotFound = function (e, t) {
                this.debug("[replayer]", "Node with id '" + t + "' not found in", e)
            }, e.prototype.warn = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.config.showWarning && console.warn.apply(console, oe(["[replayer]"], e))
            }, e.prototype.debug = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.config.showDebug && console.log.apply(console, oe(["[replayer]"], e))
            }, e
        }(),
        ze = Uint8Array,
        Be = Uint16Array,
        Ue = Uint32Array,
        qe = new ze([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        Ve = new ze([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        We = new ze([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        Xe = function (e, t) {
            for (var n = new Be(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
            var i = new Ue(n[30]);
            for (r = 1; r < 30; ++r)
                for (var o = n[r]; o < n[r + 1]; ++o) i[o] = o - n[r] << 5 | r;
            return [n, i]
        },
        Ye = Xe(qe, 2),
        He = Ye[0],
        Ge = Ye[1];
    He[28] = 258, Ge[258] = 28;
    for (var Je = Xe(Ve, 0)[0], Ke = new Be(32768), Qe = 0; Qe < 32768; ++Qe) {
        var Ze = (43690 & Qe) >>> 1 | (21845 & Qe) << 1;
        Ze = (61680 & (Ze = (52428 & Ze) >>> 2 | (13107 & Ze) << 2)) >>> 4 | (3855 & Ze) << 4, Ke[Qe] = ((65280 & Ze) >>> 8 | (255 & Ze) << 8) >>> 1
    }
    var et = function (e, t, n) {
            for (var r = e.length, i = 0, o = new Be(t); i < r; ++i) ++o[e[i] - 1];
            var a, s = new Be(t);
            for (i = 0; i < t; ++i) s[i] = s[i - 1] + o[i - 1] << 1;
            if (n) {
                a = new Be(1 << t);
                var l = 15 - t;
                for (i = 0; i < r; ++i)
                    if (e[i])
                        for (var c = i << 4 | e[i], u = t - e[i], d = s[e[i] - 1]++ << u, f = d | (1 << u) - 1; d <= f; ++d) a[Ke[d] >>> l] = c
            } else
                for (a = new Be(r), i = 0; i < r; ++i) a[i] = Ke[s[e[i] - 1]++] >>> 15 - e[i];
            return a
        },
        tt = new ze(288);
    for (Qe = 0; Qe < 144; ++Qe) tt[Qe] = 8;
    for (Qe = 144; Qe < 256; ++Qe) tt[Qe] = 9;
    for (Qe = 256; Qe < 280; ++Qe) tt[Qe] = 7;
    for (Qe = 280; Qe < 288; ++Qe) tt[Qe] = 8;
    var nt = new ze(32);
    for (Qe = 0; Qe < 32; ++Qe) nt[Qe] = 5;
    et(tt, 9, 0);
    var rt = et(tt, 9, 1),
        it = (et(nt, 5, 0), et(nt, 5, 1)),
        ot = function (e) {
            for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
            return t
        },
        at = function (e, t, n) {
            var r = t / 8 >> 0;
            return (e[r] | e[r + 1] << 8) >>> (7 & t) & n
        },
        st = function (e, t) {
            var n = t / 8 >> 0;
            return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >>> (7 & t)
        },
        lt = function (e, t, n) {
            (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
            var r = new(e instanceof Be ? Be : e instanceof Ue ? Ue : ze)(n - t);
            return r.set(e.subarray(t, n)), r
        },
        ct = new Ue(256);
    for (Qe = 0; Qe < 256; ++Qe) {
        for (var ut = Qe, dt = 9; --dt;) ut = (1 & ut && 3988292384) ^ ut >>> 1;
        ct[Qe] = ut
    }

    function ft(e, t) {
        return function (e, t, n) {
            var r = e.length,
                i = !t || n,
                o = !n || n.i;
            n || (n = {}), t || (t = new ze(3 * r));
            var a = function (e) {
                    var n = t.length;
                    if (e > n) {
                        var r = new ze(Math.max(2 * n, e));
                        r.set(t), t = r
                    }
                },
                s = n.f || 0,
                l = n.p || 0,
                c = n.b || 0,
                u = n.l,
                d = n.d,
                f = n.m,
                p = n.n;
            if (s && !u) return t;
            var h, m = 8 * r;
            do {
                if (!u) {
                    n.f = s = at(e, l, 1);
                    var v = at(e, l + 1, 3);
                    if (l += 3, !v) {
                        var g = e[(_ = ((h = l) / 8 >> 0) + (7 & h && 1) + 4) - 4] | e[_ - 3] << 8,
                            y = _ + g;
                        if (y > r) {
                            if (o) throw "unexpected EOF";
                            break
                        }
                        i && a(c + g), t.set(e.subarray(_, y), c), n.b = c += g, n.p = l = 8 * y;
                        continue
                    }
                    if (1 == v) u = rt, d = it, f = 9, p = 5;
                    else {
                        if (2 != v) throw "invalid block type";
                        var w = at(e, l, 31) + 257,
                            b = at(e, l + 10, 15) + 4,
                            x = w + at(e, l + 5, 31) + 1;
                        l += 14;
                        for (var E = new ze(x), S = new ze(19), M = 0; M < b; ++M) S[We[M]] = at(e, l + 3 * M, 7);
                        l += 3 * b;
                        var T = ot(S),
                            k = (1 << T) - 1;
                        if (!o && l + x * (T + 7) > m) break;
                        var C = et(S, T, 1);
                        for (M = 0; M < x;) {
                            var _, N = C[at(e, l, k)];
                            if (l += 15 & N, (_ = N >>> 4) < 16) E[M++] = _;
                            else {
                                var I = 0,
                                    $ = 0;
                                for (16 == _ ? ($ = 3 + at(e, l, 3), l += 2, I = E[M - 1]) : 17 == _ ? ($ = 3 + at(e, l, 7), l += 3) : 18 == _ && ($ = 11 + at(e, l, 127), l += 7); $--;) E[M++] = I
                            }
                        }
                        var A = E.subarray(0, w),
                            F = E.subarray(w);
                        f = ot(A), p = ot(F), u = et(A, f, 1), d = et(F, p, 1)
                    }
                    if (l > m) throw "unexpected EOF"
                }
                i && a(c + 131072);
                for (var O = (1 << f) - 1, L = (1 << p) - 1, D = f + p + 18; o || l + D < m;) {
                    var P = (I = u[st(e, l) & O]) >>> 4;
                    if ((l += 15 & I) > m) throw "unexpected EOF";
                    if (!I) throw "invalid length/literal";
                    if (P < 256) t[c++] = P;
                    else {
                        if (256 == P) {
                            u = null;
                            break
                        }
                        var R = P - 254;
                        if (P > 264) {
                            var j = qe[M = P - 257];
                            R = at(e, l, (1 << j) - 1) + He[M], l += j
                        }
                        var z = d[st(e, l) & L],
                            B = z >>> 4;
                        if (!z) throw "invalid distance";
                        l += 15 & z;
                        F = Je[B];
                        if (B > 3) {
                            j = Ve[B];
                            F += st(e, l) & (1 << j) - 1, l += j
                        }
                        if (l > m) throw "unexpected EOF";
                        i && a(c + 131072);
                        for (var U = c + R; c < U; c += 4) t[c] = t[c - F], t[c + 1] = t[c + 1 - F], t[c + 2] = t[c + 2 - F], t[c + 3] = t[c + 3 - F];
                        c = U
                    }
                }
                n.l = u, n.p = l, n.b = c, u && (s = 1, n.m = f, n.d = d, n.n = p)
            } while (!s);
            return c == t.length ? t : lt(t, 0, c)
        }((function (e) {
            if (8 != (15 & e[0]) || e[0] >>> 4 > 7 || (e[0] << 8 | e[1]) % 31) throw "invalid zlib data";
            if (32 & e[1]) throw "invalid zlib data: preset dictionaries not supported"
        }(e), e.subarray(2, -4)), t)
    }
    var pt = function (e) {
        if ("string" != typeof e) return e;
        try {
            if ((t = JSON.parse(e)).timestamp) return t
        } catch (e) {}
        try {
            var t;
            if ("v1" === (t = JSON.parse(function (e, t) {
                    var n = "";
                    if (!t && "undefined" != typeof TextDecoder) return (new TextDecoder).decode(e);
                    for (var r = 0; r < e.length;) {
                        var i = e[r++];
                        i < 128 || t ? n += String.fromCharCode(i) : i < 224 ? n += String.fromCharCode((31 & i) << 6 | 63 & e[r++]) : i < 240 ? n += String.fromCharCode((15 & i) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) : (i = ((15 & i) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) - 65536, n += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i))
                    }
                    return n
                }(ft(function (e, t) {
                    var n = e.length;
                    if (!t && "undefined" != typeof TextEncoder) return (new TextEncoder).encode(e);
                    for (var r = new ze(e.length + (e.length >>> 1)), i = 0, o = function (e) {
                            r[i++] = e
                        }, a = 0; a < n; ++a) {
                        if (i + 5 > r.length) {
                            var s = new ze(i + 8 + (n - a << 1));
                            s.set(r), r = s
                        }
                        var l = e.charCodeAt(a);
                        l < 128 || t ? o(l) : l < 2048 ? (o(192 | l >>> 6), o(128 | 63 & l)) : l > 55295 && l < 57344 ? (o(240 | (l = 65536 + (1047552 & l) | 1023 & e.charCodeAt(++a)) >>> 18), o(128 | l >>> 12 & 63), o(128 | l >>> 6 & 63), o(128 | 63 & l)) : (o(224 | l >>> 12), o(128 | l >>> 6 & 63), o(128 | 63 & l))
                    }
                    return lt(r, 0, i)
                }(e, !0))))).v) return t;
            throw new Error("These events were packed with packer " + t.v + " which is incompatible with current packer v1.")
        } catch (e) {
            throw console.error(e), new Error("Unknown data format.")
        }
    };

    function ht(e) {
        let t = "";
        return Object.keys(e).forEach(n => {
            t += `${n}: ${e[n]};`
        }), t
    }

    function mt(e, t = 2) {
        let n = String(e);
        const r = Math.pow(10, t - 1);
        if (e < r)
            for (; String(r).length > n.length;) n = "0" + e;
        return n
    }

    function vt(e) {
        if (e <= 0) return "00:00";
        const t = Math.floor(e / 36e5);
        e %= 36e5;
        const n = Math.floor(e / 6e4);
        e %= 6e4;
        const r = Math.floor(e / 1e3);
        return t ? `${mt(t)}:${mt(n)}:${mt(r)}` : `${mt(n)}:${mt(r)}`
    }

    function gt() {
        return document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement
    }

    function yt(e) {
        return {
            "[object Boolean]": "boolean",
            "[object Number]": "number",
            "[object String]": "string",
            "[object Function]": "function",
            "[object Array]": "array",
            "[object Date]": "date",
            "[object RegExp]": "regExp",
            "[object Undefined]": "undefined",
            "[object Null]": "null",
            "[object Object]": "object"
        } [Object.prototype.toString.call(e)]
    }

    function wt(t) {
        let n, r, i, o, a, s, d, p, w;
        return {
            c() {
                n = f("div"), r = f("input"), i = m(), o = f("label"), a = m(), s = f("span"), d = h(t[3]), g(r, "type", "checkbox"), g(r, "id", t[2]), r.disabled = t[1], g(r, "class", "svelte-1mmdovf"), g(o, "for", t[2]), g(o, "class", "svelte-1mmdovf"), g(s, "class", "label svelte-1mmdovf"), g(n, "class", "switch svelte-1mmdovf"), b(n, "disabled", t[1])
            },
            m(e, u) {
                c(e, n, u), l(n, r), r.checked = t[0], l(n, i), l(n, o), l(n, a), l(n, s), l(s, d), p || (w = v(r, "change", t[4]), p = !0)
            },
            p(e, [t]) {
                4 & t && g(r, "id", e[2]), 2 & t && (r.disabled = e[1]), 1 & t && (r.checked = e[0]), 4 & t && g(o, "for", e[2]), 8 & t && y(d, e[3]), 2 & t && b(n, "disabled", e[1])
            },
            i: e,
            o: e,
            d(e) {
                e && u(n), p = !1, w()
            }
        }
    }

    function bt(e, t, n) {
        let {
            disabled: r
        } = t, {
            checked: i
        } = t, {
            id: o
        } = t, {
            label: a
        } = t;
        return e.$set = e => {
            "disabled" in e && n(1, r = e.disabled), "checked" in e && n(0, i = e.checked), "id" in e && n(2, o = e.id), "label" in e && n(3, a = e.label)
        }, [i, r, o, a, function () {
            i = this.checked, n(0, i)
        }]
    }
    class xt extends G {
        constructor(e) {
            super(), H(this, e, bt, wt, a, {
                disabled: 1,
                checked: 0,
                id: 2,
                label: 3
            })
        }
    }

    function Et(e, t, n) {
        const r = e.slice();
        return r[33] = t[n], r
    }

    function St(e, t, n) {
        const r = e.slice();
        return r[36] = t[n], r
    }

    function Mt(e) {
        let t, n, r, o, a, s, p, x, E, S, M, T, k, C, N, $, A, F, O, L, D, P, R, j, z, B = vt(e[6]) + "",
            Y = vt(e[11].totalTime) + "",
            H = e[13],
            G = [];
        for (let t = 0; t < H.length; t += 1) G[t] = Tt(St(e, H, t));

        function J(e, t) {
            return "playing" === e[7] ? Ct : kt
        }
        let K = J(e),
            Q = K(e),
            Z = e[3],
            ee = [];
        for (let t = 0; t < Z.length; t += 1) ee[t] = _t(Et(e, Z, t));

        function te(t) {
            e[27].call(null, t)
        }
        let ne = {
            id: "skip",
            disabled: "skipping" === e[8],
            label: "skip inactive"
        };
        return void 0 !== e[0] && (ne.checked = e[0]), O = new xt({
            props: ne
        }), _.push(() => function (e, t, n) {
            const r = e.$$.props[t];
            void 0 !== r && (e.$$.bound[r] = n, n(e.$$.ctx[r]))
        }(O, "checked", te)), {
            c() {
                t = f("div"), n = f("div"), r = f("span"), o = h(B), a = m(), s = f("div"), p = f("div"), x = m();
                for (let e = 0; e < G.length; e += 1) G[e].c();
                E = m(), S = f("div"), M = m(), T = f("span"), k = h(Y), C = m(), N = f("div"), $ = f("button"), Q.c(), A = m();
                for (let e = 0; e < ee.length; e += 1) ee[e].c();
                F = m(), V(O.$$.fragment), D = m(), P = f("button"), P.innerHTML = '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M916 380c-26.4 0-48-21.6-48-48L868 223.2 613.6 477.6c-18.4\n            18.4-48.8 18.4-68 0-18.4-18.4-18.4-48.8 0-68L800 156 692 156c-26.4\n            0-48-21.6-48-48 0-26.4 21.6-48 48-48l224 0c26.4 0 48 21.6 48 48l0\n            224C964 358.4 942.4 380 916 380zM231.2 860l108.8 0c26.4 0 48 21.6 48\n            48s-21.6 48-48 48l-224 0c-26.4 0-48-21.6-48-48l0-224c0-26.4 21.6-48\n            48-48 26.4 0 48 21.6 48 48L164 792l253.6-253.6c18.4-18.4 48.8-18.4\n            68 0 18.4 18.4 18.4 48.8 0 68L231.2 860z" p-id="1286"></path></svg>', g(r, "class", "rr-timeline__time svelte-dxnc1j"), g(p, "class", "rr-progress__step svelte-dxnc1j"), w(p, "width", e[12]), g(S, "class", "rr-progress__handler svelte-dxnc1j"), w(S, "left", e[12]), g(s, "class", "rr-progress svelte-dxnc1j"), b(s, "disabled", "skipping" === e[8]), g(T, "class", "rr-timeline__time svelte-dxnc1j"), g(n, "class", "rr-timeline svelte-dxnc1j"), g($, "class", "svelte-dxnc1j"), g(P, "class", "svelte-dxnc1j"), g(N, "class", "rr-controller__btns svelte-dxnc1j"), g(t, "class", "rr-controller svelte-dxnc1j")
            },
            m(i, u) {
                c(i, t, u), l(t, n), l(n, r), l(r, o), l(n, a), l(n, s), l(s, p), e[23](p), l(s, x);
                for (let e = 0; e < G.length; e += 1) G[e].m(s, null);
                l(s, E), l(s, S), e[24](s), l(n, M), l(n, T), l(T, k), l(t, C), l(t, N), l(N, $), Q.m($, null), l(N, A);
                for (let e = 0; e < ee.length; e += 1) ee[e].m(N, null);
                l(N, F), W(O, N, null), l(N, D), l(N, P), R = !0, j || (z = [v(s, "click", e[25]), v($, "click", e[4]), v(P, "click", e[28])], j = !0)
            },
            p(e, t) {
                if ((!R || 64 & t[0]) && B !== (B = vt(e[6]) + "") && y(o, B), (!R || 4096 & t[0]) && w(p, "width", e[12]), 8192 & t[0]) {
                    let n;
                    for (H = e[13], n = 0; n < H.length; n += 1) {
                        const r = St(e, H, n);
                        G[n] ? G[n].p(r, t) : (G[n] = Tt(r), G[n].c(), G[n].m(s, E))
                    }
                    for (; n < G.length; n += 1) G[n].d(1);
                    G.length = H.length
                }
                if ((!R || 4096 & t[0]) && w(S, "left", e[12]), 256 & t[0] && b(s, "disabled", "skipping" === e[8]), (!R || 2048 & t[0]) && Y !== (Y = vt(e[11].totalTime) + "") && y(k, Y), K !== (K = J(e)) && (Q.d(1), Q = K(e), Q && (Q.c(), Q.m($, null))), 298 & t[0]) {
                    let n;
                    for (Z = e[3], n = 0; n < Z.length; n += 1) {
                        const r = Et(e, Z, n);
                        ee[n] ? ee[n].p(r, t) : (ee[n] = _t(r), ee[n].c(), ee[n].m(N, F))
                    }
                    for (; n < ee.length; n += 1) ee[n].d(1);
                    ee.length = Z.length
                }
                const n = {};
                var r;
                256 & t[0] && (n.disabled = "skipping" === e[8]), !L && 1 & t[0] && (L = !0, n.checked = e[0], r = () => L = !1, I.push(r)), O.$set(n)
            },
            i(e) {
                R || (U(O.$$.fragment, e), R = !0)
            },
            o(e) {
                q(O.$$.fragment, e), R = !1
            },
            d(n) {
                n && u(t), e[23](null), d(G, n), e[24](null), Q.d(), d(ee, n), X(O), j = !1, i(z)
            }
        }
    }

    function Tt(e) {
        let t, n;
        return {
            c() {
                t = f("div"), g(t, "title", n = e[36].name), w(t, "width", "10px"), w(t, "height", "5px"), w(t, "position", "absolute"), w(t, "top", "2px"), w(t, "transform", "translate(-50%, -50%)"), w(t, "background", e[36].background), w(t, "left", e[36].position)
            },
            m(e, n) {
                c(e, t, n)
            },
            p(e, r) {
                8192 & r[0] && n !== (n = e[36].name) && g(t, "title", n), 8192 & r[0] && w(t, "background", e[36].background), 8192 & r[0] && w(t, "left", e[36].position)
            },
            d(e) {
                e && u(t)
            }
        }
    }

    function kt(e) {
        let t, n;
        return {
            c() {
                t = p("svg"), n = p("path"), g(n, "d", "M170.65984 896l0-768 640 384zM644.66944\n              512l-388.66944-233.32864 0 466.65728z"), g(t, "class", "icon"), g(t, "viewBox", "0 0 1024 1024"), g(t, "version", "1.1"), g(t, "xmlns", "http://www.w3.org/2000/svg"), g(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), g(t, "width", "16"), g(t, "height", "16")
            },
            m(e, r) {
                c(e, t, r), l(t, n)
            },
            d(e) {
                e && u(t)
            }
        }
    }

    function Ct(e) {
        let t, n;
        return {
            c() {
                t = p("svg"), n = p("path"), g(n, "d", "M682.65984 128q53.00224 0 90.50112 37.49888t37.49888 90.50112l0\n              512q0 53.00224-37.49888 90.50112t-90.50112\n              37.49888-90.50112-37.49888-37.49888-90.50112l0-512q0-53.00224\n              37.49888-90.50112t90.50112-37.49888zM341.34016 128q53.00224 0\n              90.50112 37.49888t37.49888 90.50112l0 512q0 53.00224-37.49888\n              90.50112t-90.50112\n              37.49888-90.50112-37.49888-37.49888-90.50112l0-512q0-53.00224\n              37.49888-90.50112t90.50112-37.49888zM341.34016 213.34016q-17.67424\n              0-30.16704 12.4928t-12.4928 30.16704l0 512q0 17.67424 12.4928\n              30.16704t30.16704 12.4928 30.16704-12.4928\n              12.4928-30.16704l0-512q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM682.65984\n              213.34016q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 512q0\n              17.67424 12.4928 30.16704t30.16704 12.4928 30.16704-12.4928\n              12.4928-30.16704l0-512q0-17.67424-12.4928-30.16704t-30.16704-12.4928z"), g(t, "class", "icon"), g(t, "viewBox", "0 0 1024 1024"), g(t, "version", "1.1"), g(t, "xmlns", "http://www.w3.org/2000/svg"), g(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), g(t, "width", "16"), g(t, "height", "16")
            },
            m(e, r) {
                c(e, t, r), l(t, n)
            },
            d(e) {
                e && u(t)
            }
        }
    }

    function _t(e) {
        let t, n, r, i, o, a, s = e[33] + "";

        function d(...t) {
            return e[26](e[33], ...t)
        }
        return {
            c() {
                t = f("button"), n = h(s), r = h("x"), t.disabled = i = "skipping" === e[8], g(t, "class", "svelte-dxnc1j"), b(t, "active", e[33] === e[1] && "skipping" !== e[8])
            },
            m(e, i) {
                c(e, t, i), l(t, n), l(t, r), o || (a = v(t, "click", d), o = !0)
            },
            p(r, o) {
                e = r, 8 & o[0] && s !== (s = e[33] + "") && y(n, s), 256 & o[0] && i !== (i = "skipping" === e[8]) && (t.disabled = i), 266 & o[0] && b(t, "active", e[33] === e[1] && "skipping" !== e[8])
            },
            d(e) {
                e && u(t), o = !1, a()
            }
        }
    }

    function Nt(e) {
        let t, n, r = e[2] && Mt(e);
        return {
            c() {
                r && r.c(), t = h("")
            },
            m(e, i) {
                r && r.m(e, i), c(e, t, i), n = !0
            },
            p(e, n) {
                e[2] ? r ? (r.p(e, n), 4 & n[0] && U(r, 1)) : (r = Mt(e), r.c(), U(r, 1), r.m(t.parentNode, t)) : r && (z(), q(r, 1, 1, () => {
                    r = null
                }), B())
            },
            i(e) {
                n || (U(r), n = !0)
            },
            o(e) {
                q(r), n = !1
            },
            d(e) {
                r && r.d(e), e && u(t)
            }
        }
    }

    function It(e, t, n) {
        const r = k();
        let i, o, a, s, l, c, u, d, {
                replayer: f
            } = t,
            {
                showController: p
            } = t,
            {
                autoPlay: h
            } = t,
            {
                skipInactive: m
            } = t,
            {
                speedOption: v
            } = t,
            {
                speed: g = (v.length ? v[0] : 1)
            } = t,
            {
                tags: y = {}
            } = t,
            w = 0,
            b = null;
        const x = () => {
                b && (cancelAnimationFrame(b), b = null)
            },
            E = () => {
                "paused" === i && (l ? (f.play(), l = !1) : f.play(w))
            },
            C = () => {
                "playing" === i && f.pause()
            },
            N = e => {
                n(6, w = e);
                const t = "playing" === i;
                f.pause(), f.play(e), t || f.pause()
            },
            I = e => {
                if ("skipping" === o) return;
                const t = a.getBoundingClientRect();
                let n = (e.clientX - t.left) / t.width;
                n < 0 ? n = 0 : n > 1 && (n = 1);
                const r = c.totalTime * n;
                N(r)
            },
            $ = e => {
                let t = "playing" === i;
                n(1, g = e), t && f.pause(), f.setConfig({
                    speed: g
                }), t && f.play(w)
            };
        var A;
        M(() => {
            n(7, i = f.service.state.value), n(8, o = f.speedService.state.value), f.on("state-change", e => {
                const {
                    player: t,
                    speed: r
                } = e;
                if ((null == t ? void 0 : t.value) && i !== t.value) switch (n(7, i = t.value), i) {
                    case "playing":
                        x(), b = requestAnimationFrame((function e() {
                            n(6, w = f.getCurrentTime()), w < c.totalTime && (b = requestAnimationFrame(e))
                        }));
                        break;
                    case "paused":
                        x()
                }(null == r ? void 0 : r.value) && o !== r.value && n(8, o = r.value)
            }), f.on("finish", () => {
                l = !0
            }), h && f.play()
        }), A = () => {
            m !== f.config.skipInactive && f.setConfig({
                skipInactive: m
            })
        }, S().$$.after_update.push(A), T(() => {
            f.pause(), x()
        });
        return e.$set = e => {
            "replayer" in e && n(16, f = e.replayer), "showController" in e && n(2, p = e.showController), "autoPlay" in e && n(17, h = e.autoPlay), "skipInactive" in e && n(0, m = e.skipInactive), "speedOption" in e && n(3, v = e.speedOption), "speed" in e && n(1, g = e.speed), "tags" in e && n(18, y = e.tags)
        }, e.$$.update = () => {
            if (64 & e.$$.dirty[0] && r("ui-update-current-time", {
                    payload: w
                }), 128 & e.$$.dirty[0] && r("ui-update-player-state", {
                    payload: i
                }), 65536 & e.$$.dirty[0] && n(11, c = f.getMetaData()), 2112 & e.$$.dirty[0]) {
                const e = Math.min(1, w / c.totalTime);
                n(12, u = 100 * e + "%"), r("ui-update-progress", {
                    payload: e
                })
            }
            327680 & e.$$.dirty[0] && n(13, d = (() => {
                const {
                    context: e
                } = f.service.state, t = e.events.length, n = e.events[0].timestamp, r = e.events[t - 1].timestamp, i = [];
                return e.events.forEach(e => {
                    if (e.type === J.Custom) {
                        const s = {
                            name: e.data.tag,
                            background: y[e.data.tag] || "rgb(73, 80, 246)",
                            position: (t = n, o = r, a = e.timestamp, (100 - (o - a) / (o - t) * 100).toFixed(2)) + "%"
                        };
                        i.push(s)
                    }
                    var t, o, a
                }), i
            })())
        }, [m, g, p, v, () => {
            switch (i) {
                case "playing":
                    C();
                    break;
                case "paused":
                    E()
            }
        }, $, w, i, o, a, s, c, u, d, r, I, f, h, y, E, C, N, () => {
            n(0, m = !m)
        }, function (e) {
            _[e ? "unshift" : "push"](() => {
                s = e, n(10, s)
            })
        }, function (e) {
            _[e ? "unshift" : "push"](() => {
                a = e, n(9, a)
            })
        }, e => I(e), e => $(e), function (e) {
            m = e, n(0, m)
        }, () => r("fullscreen")]
    }
    class $t extends G {
        constructor(e) {
            super(), H(this, e, It, Nt, a, {
                replayer: 16,
                showController: 2,
                autoPlay: 17,
                skipInactive: 0,
                speedOption: 3,
                speed: 1,
                tags: 18,
                toggle: 4,
                play: 19,
                pause: 20,
                goto: 21,
                setSpeed: 5,
                toggleSkipInactive: 22
            }, [-1, -1])
        }
        get toggle() {
            return this.$$.ctx[4]
        }
        get play() {
            return this.$$.ctx[19]
        }
        get pause() {
            return this.$$.ctx[20]
        }
        get goto() {
            return this.$$.ctx[21]
        }
        get setSpeed() {
            return this.$$.ctx[5]
        }
        get toggleSkipInactive() {
            return this.$$.ctx[22]
        }
    }

    function At(e) {
        let t, n, r = {
            replayer: e[8],
            showController: e[3],
            autoPlay: e[1],
            speedOption: e[2],
            skipInactive: e[0],
            tags: e[4]
        };
        return t = new $t({
            props: r
        }), e[29](t), t.$on("fullscreen", e[30]), {
            c() {
                V(t.$$.fragment)
            },
            m(e, r) {
                W(t, e, r), n = !0
            },
            p(e, n) {
                const r = {};
                256 & n[0] && (r.replayer = e[8]), 8 & n[0] && (r.showController = e[3]), 2 & n[0] && (r.autoPlay = e[1]), 4 & n[0] && (r.speedOption = e[2]), 1 & n[0] && (r.skipInactive = e[0]), 16 & n[0] && (r.tags = e[4]), t.$set(r)
            },
            i(e) {
                n || (U(t.$$.fragment, e), n = !0)
            },
            o(e) {
                q(t.$$.fragment, e), n = !1
            },
            d(n) {
                e[29](null), X(t, n)
            }
        }
    }

    function Ft(e) {
        let t, n, r, i, o = e[8] && At(e);
        return {
            c() {
                t = f("div"), n = f("div"), r = m(), o && o.c(), g(n, "class", "rr-player__frame"), g(n, "style", e[10]), g(t, "class", "rr-player"), g(t, "style", e[11])
            },
            m(a, s) {
                c(a, t, s), l(t, n), e[28](n), l(t, r), o && o.m(t, null), e[31](t), i = !0
            },
            p(e, r) {
                (!i || 1024 & r[0]) && g(n, "style", e[10]), e[8] ? o ? (o.p(e, r), 256 & r[0] && U(o, 1)) : (o = At(e), o.c(), U(o, 1), o.m(t, null)) : o && (z(), q(o, 1, 1, () => {
                    o = null
                }), B()), (!i || 2048 & r[0]) && g(t, "style", e[11])
            },
            i(e) {
                i || (U(o), i = !0)
            },
            o(e) {
                q(o), i = !1
            },
            d(n) {
                n && u(t), e[28](null), o && o.d(), e[31](null)
            }
        }
    }

    function Ot(e, n, r) {
        let {
            width: i = 1024
        } = n, {
            height: o = 576
        } = n, {
            events: a = []
        } = n, {
            skipInactive: l = !0
        } = n, {
            autoPlay: c = !0
        } = n, {
            speedOption: u = [1, 2, 4, 8]
        } = n, {
            speed: d = 1
        } = n, {
            showController: f = !0
        } = n, {
            tags: p = {}
        } = n;
        let h, m, v, g, y, w, b, x = i,
            E = o;
        const S = (e, t) => {
                const n = i / t.width,
                    r = o / t.height;
                e.style.transform = `scale(${Math.min(n,r,1)})translate(-50%, -50%)`
            },
            k = () => {
                var e;
                h && (gt() ? document.exitFullscreen ? document.exitFullscreen() : document.mozExitFullscreen ? document.mozExitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen() : (e = h).requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen())
            };
        M(() => {
            if (void 0 !== u && "array" !== yt(u)) throw new Error("speedOption must be array");
            if (u.forEach(e => {
                    if ("number" !== yt(e)) throw new Error("item of speedOption must be number")
                }), u.indexOf(d) < 0) throw new Error(`speed must be one of speedOption,\n      current config:\n      {\n        ...\n        speed: ${d},\n        speedOption: [${u.toString()}]\n        ...\n      }\n      `);
            var e;
            r(8, v = new je(a, Object.assign({
                speed: d,
                root: m,
                unpackFn: pt
            }, n))), v.on("resize", e => {
                S(v.wrapper, e)
            }), e = () => {
                gt() ? setTimeout(() => {
                    x = i, E = o, r(12, i = h.offsetWidth), r(13, o = h.offsetHeight), S(v.wrapper, {
                        width: v.iframe.offsetWidth,
                        height: v.iframe.offsetHeight
                    })
                }, 0) : (r(12, i = x), r(13, o = E), S(v.wrapper, {
                    width: v.iframe.offsetWidth,
                    height: v.iframe.offsetHeight
                }))
            }, document.addEventListener("fullscreenchange", e), document.addEventListener("webkitfullscreenchange", e), document.addEventListener("mozfullscreenchange", e), document.addEventListener("MSFullscreenChange", e), g = () => {
                document.removeEventListener("fullscreenchange", e), document.removeEventListener("webkitfullscreenchange", e), document.removeEventListener("mozfullscreenchange", e), document.removeEventListener("MSFullscreenChange", e)
            }
        }), T(() => {
            g && g()
        });
        return e.$set = e => {
            r(36, n = t(t({}, n), s(e))), "width" in e && r(12, i = e.width), "height" in e && r(13, o = e.height), "events" in e && r(14, a = e.events), "skipInactive" in e && r(0, l = e.skipInactive), "autoPlay" in e && r(1, c = e.autoPlay), "speedOption" in e && r(2, u = e.speedOption), "speed" in e && r(15, d = e.speed), "showController" in e && r(3, f = e.showController), "tags" in e && r(4, p = e.tags)
        }, e.$$.update = () => {
            12288 & e.$$.dirty[0] && r(10, w = ht({
                width: i + "px",
                height: o + "px"
            })), 12296 & e.$$.dirty[0] && r(11, b = ht({
                width: i + "px",
                height: o + (f ? 80 : 0) + "px"
            }))
        }, n = s(n), [l, c, u, f, p, k, h, m, v, y, w, b, i, o, a, d, () => me, () => {
            S(v.wrapper, {
                width: v.iframe.offsetWidth,
                height: v.iframe.offsetHeight
            })
        }, (e, t) => {
            switch (v.on(e, t), e) {
                case "ui-update-current-time":
                case "ui-update-progress":
                case "ui-update-player-state":
                    y.$on(e, ({
                        detail: e
                    }) => t(e))
            }
        }, e => {
            v.addEvent(e)
        }, () => v.getMetaData(), () => v, () => {
            y.toggle()
        }, e => {
            y.setSpeed(e)
        }, () => {
            y.toggleSkipInactive()
        }, () => {
            y.play()
        }, () => {
            y.pause()
        }, e => {
            y.goto(e)
        }, function (e) {
            _[e ? "unshift" : "push"](() => {
                m = e, r(7, m)
            })
        }, function (e) {
            _[e ? "unshift" : "push"](() => {
                y = e, r(9, y)
            })
        }, () => k(), function (e) {
            _[e ? "unshift" : "push"](() => {
                h = e, r(6, h)
            })
        }]
    }
    class Lt extends G {
        constructor(e) {
            super(), H(this, e, Ot, Ft, a, {
                width: 12,
                height: 13,
                events: 14,
                skipInactive: 0,
                autoPlay: 1,
                speedOption: 2,
                speed: 15,
                showController: 3,
                tags: 4,
                getMirror: 16,
                triggerResize: 17,
                toggleFullscreen: 5,
                addEventListener: 18,
                addEvent: 19,
                getMetaData: 20,
                getReplayer: 21,
                toggle: 22,
                setSpeed: 23,
                toggleSkipInactive: 24,
                play: 25,
                pause: 26,
                goto: 27
            }, [-1, -1])
        }
        get getMirror() {
            return this.$$.ctx[16]
        }
        get triggerResize() {
            return this.$$.ctx[17]
        }
        get toggleFullscreen() {
            return this.$$.ctx[5]
        }
        get addEventListener() {
            return this.$$.ctx[18]
        }
        get addEvent() {
            return this.$$.ctx[19]
        }
        get getMetaData() {
            return this.$$.ctx[20]
        }
        get getReplayer() {
            return this.$$.ctx[21]
        }
        get toggle() {
            return this.$$.ctx[22]
        }
        get setSpeed() {
            return this.$$.ctx[23]
        }
        get toggleSkipInactive() {
            return this.$$.ctx[24]
        }
        get play() {
            return this.$$.ctx[25]
        }
        get pause() {
            return this.$$.ctx[26]
        }
        get goto() {
            return this.$$.ctx[27]
        }
    }
    return class extends Lt {
        constructor(e) {
            super({
                target: e.target,
                props: e.data || e.props
            })
        }
    }
}({});