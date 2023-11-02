var flag = 'added';
if ((typeof jQuery === 'undefined') || (typeof jQuery === 'NaN') || (typeof jQuery === NaN) || (typeof jQuery === undefined) || (parseFloat(jQuery.fn.jquery) > 3.5)) {
    var flag = 'notadded';
    ! function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        var c = [],
            d = a.document,
            e = c.slice,
            f = c.concat,
            g = c.push,
            h = c.indexOf,
            i = {},
            j = i.toString,
            k = i.hasOwnProperty,
            l = {},
            m = "2.2.4",
            n = function(a, b) {
                return new n.fn.init(a, b)
            },
            o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            p = /^-ms-/,
            q = /-([\da-z])/gi,
            r = function(a, b) {
                return b.toUpperCase()
            };
        n.fn = n.prototype = {
            jquery: m,
            constructor: n,
            selector: "",
            length: 0,
            toArray: function() {
                return e.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
            },
            pushStack: function(a) {
                var b = n.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a) {
                return n.each(this, a)
            },
            map: function(a) {
                return this.pushStack(n.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(e.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: g,
            sort: c.sort,
            splice: c.splice
        }, n.extend = n.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g
        }, n.extend({
            expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === n.type(a)
            },
            isArray: Array.isArray,
            isWindow: function(a) {
                return null != a && a === a.window
            },
            isNumeric: function(a) {
                var b = a && a.toString();
                return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
            },
            isPlainObject: function(a) {
                var b;
                if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (b in a);
                return void 0 === b || k.call(a, b)
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
            },
            globalEval: function(a) {
                var b, c = eval;
                a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
            },
            camelCase: function(a) {
                return a.replace(p, "ms-").replace(q, r)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b) {
                var c, d = 0;
                if (s(a)) {
                    for (c = a.length; c > d; d++)
                        if (b.call(a[d], d, a[d]) === !1) break
                } else
                    for (d in a)
                        if (b.call(a[d], d, a[d]) === !1) break;
                return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(o, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
            },
            inArray: function(a, b, c) {
                return null == b ? -1 : h.call(b, a, c)
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, c) {
                var d, e, g = 0,
                    h = [];
                if (s(a))
                    for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
                else
                    for (g in a) e = b(a[g], g, c), null != e && h.push(e);
                return f.apply([], h)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, f;
                return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() {
                    return a.apply(b || this, d.concat(e.call(arguments)))
                }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
            },
            now: Date.now,
            support: l
        }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
            i["[object " + b + "]"] = b.toLowerCase()
        });

        function s(a) {
            var b = !!a && "length" in a && a.length,
                c = n.type(a);
            return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }
        var t = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
                v = a.document,
                w = 0,
                x = 0,
                y = ga(),
                z = ga(),
                A = ga(),
                B = function(a, b) {
                    return a === b && (l = !0), 0
                },
                C = 1 << 31,
                D = {}.hasOwnProperty,
                E = [],
                F = E.pop,
                G = E.push,
                H = E.push,
                I = E.slice,
                J = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                L = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
                O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
                P = new RegExp(L + "+", "g"),
                Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                R = new RegExp("^" + L + "*," + L + "*"),
                S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
                U = new RegExp(O),
                V = new RegExp("^" + M + "$"),
                W = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M + "|[*])"),
                    ATTR: new RegExp("^" + N),
                    PSEUDO: new RegExp("^" + O),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + K + ")$", "i"),
                    needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                },
                X = /^(?:input|select|textarea|button)$/i,
                Y = /^h\d$/i,
                Z = /^[^{]+\{\s*\[native \w/,
                $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                _ = /[+~]/,
                aa = /'|\\/g,
                ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
                ca = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                da = function() {
                    m()
                };
            try {
                H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
            } catch (ea) {
                H = {
                    apply: E.length ? function(a, b) {
                        G.apply(a, I.call(b))
                    } : function(a, b) {
                        var c = a.length,
                            d = 0;
                        while (a[c++] = b[d++]);
                        a.length = c - 1
                    }
                }
            }

            function fa(a, b, d, e) {
                var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                    x = b ? b.nodeType : 9;
                if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
                if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                    if (11 !== x && (o = $.exec(a)))
                        if (f = o[1]) {
                            if (9 === x) {
                                if (!(j = b.getElementById(f))) return d;
                                if (j.id === f) return d.push(j), d
                            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                        } else {
                            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                            if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                        } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                        if (1 !== x) w = b, s = a;
                        else if ("object" !== b.nodeName.toLowerCase()) {
                            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                            while (h--) r[h] = l + " " + qa(r[h]);
                            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                        }
                        if (s) try {
                            return H.apply(d, w.querySelectorAll(s)), d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                    }
                }
                return i(a.replace(Q, "$1"), b, d, e)
            }

            function ga() {
                var a = [];

                function b(c, e) {
                    return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
                }
                return b
            }

            function ha(a) {
                return a[u] = !0, a
            }

            function ia(a) {
                var b = n.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function ja(a, b) {
                var c = a.split("|"),
                    e = c.length;
                while (e--) d.attrHandle[c[e]] = b
            }

            function ka(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
                if (d) return d;
                if (c)
                    while (c = c.nextSibling)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function la(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function ma(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function na(a) {
                return ha(function(b) {
                    return b = +b, ha(function(c, d) {
                        var e, f = a([], c.length, b),
                            g = f.length;
                        while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function oa(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }
            c = fa.support = {}, f = fa.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, m = fa.setDocument = function(a) {
                var b, e, g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), c.getElementsByTagName = ia(function(a) {
                    return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
                }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                    return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
                }), c.getById ? (d.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }, d.filter.ID = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete d.find.ID, d.filter.ID = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        while (c = f[e++]) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                    return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                }), ia(function(a) {
                    var b = n.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                    c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
                }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        while (b = b.parentNode)
                            if (b === a) return !0;
                    return !1
                }, B = b ? function(a, b) {
                    if (a === b) return l = !0, 0;
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return l = !0, 0;
                    var c, d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        g = [a],
                        h = [b];
                    if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                    if (e === f) return ka(a, b);
                    c = a;
                    while (c = c.parentNode) g.unshift(c);
                    c = b;
                    while (c = c.parentNode) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
                }, n) : n
            }, fa.matches = function(a, b) {
                return fa(a, null, null, b)
            }, fa.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return fa(b, n, null, [a]).length > 0
            }, fa.contains = function(a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b)
            }, fa.attr = function(a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            }, fa.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, fa.uniqueSort = function(a) {
                var b, d = [],
                    e = 0,
                    f = 0;
                if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                    while (b = a[f++]) b === a[f] && (e = d.push(f));
                    while (e--) a.splice(d[e], 1)
                }
                return k = null, a
            }, e = fa.getText = function(a) {
                var b, c = "",
                    d = 0,
                    f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                    } else if (3 === f || 4 === f) return a.nodeValue
                } else
                    while (b = a[d++]) c += e(b);
                return c
            }, d = fa.selectors = {
                cacheLength: 50,
                createPseudo: ha,
                match: W,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(ba, ca).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, b, c) {
                        return function(d) {
                            var e = fa.attr(d, a);
                            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h,
                                t = !1;
                            if (q) {
                                if (f) {
                                    while (p) {
                                        m = b;
                                        while (m = m[p])
                                            if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                        if (1 === m.nodeType && ++t && m === b) {
                                            k[a] = [w, n, t];
                                            break
                                        }
                                } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                        if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                                return t -= e, t === d || t % d === 0 && t / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                        return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                            var d, f = e(a, b),
                                g = f.length;
                            while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                        }) : function(a) {
                            return e(a, 0, c)
                        }) : e
                    }
                },
                pseudos: {
                    not: ha(function(a) {
                        var b = [],
                            c = [],
                            d = h(a.replace(Q, "$1"));
                        return d[u] ? ha(function(a, b, c, e) {
                            var f, g = d(a, null, e, []),
                                h = a.length;
                            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: ha(function(a) {
                        return function(b) {
                            return fa(a, b).length > 0
                        }
                    }),
                    contains: ha(function(a) {
                        return a = a.replace(ba, ca),
                            function(b) {
                                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                            }
                    }),
                    lang: ha(function(a) {
                        return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === o
                    },
                    focus: function(a) {
                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !d.pseudos.empty(a)
                    },
                    header: function(a) {
                        return Y.test(a.nodeName)
                    },
                    input: function(a) {
                        return X.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: na(function() {
                        return [0]
                    }),
                    last: na(function(a, b) {
                        return [b - 1]
                    }),
                    eq: na(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: na(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: na(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: na(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: na(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, d.pseudos.nth = d.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) d.pseudos[b] = la(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) d.pseudos[b] = ma(b);

            function pa() {}
            pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
                var c, e, f, g, h, i, j, k = z[a + " "];
                if (k) return b ? 0 : k.slice(0);
                h = a, i = [], j = d.preFilter;
                while (h) {
                    c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                        value: c,
                        type: e[0].replace(Q, " ")
                    }), h = h.slice(c.length));
                    for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                    if (!c) break
                }
                return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
            };

            function qa(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function ra(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = x++;
                return b.first ? function(b, c, f) {
                    while (b = b[d])
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j, k = [w, f];
                    if (g) {
                        while (b = b[d])
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        while (b = b[d])
                            if (1 === b.nodeType || e) {
                                if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                                if (i[d] = k, k[2] = a(b, c, g)) return !0
                            }
                }
            }

            function sa(a) {
                return a.length > 1 ? function(b, c, d) {
                    var e = a.length;
                    while (e--)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function ta(a, b, c) {
                for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
                return c
            }

            function ua(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
                return g
            }

            function va(a, b, c, d, e, f) {
                return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                        q = !a || !f && b ? p : ua(p, m, a, h, i),
                        r = c ? e || (f ? a : o || d) ? [] : g : q;
                    if (c && c(q, r, h, i), d) {
                        j = ua(r, n), d(j, [], h, i), k = j.length;
                        while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                j = [], k = r.length;
                                while (k--)(l = r[k]) && j.push(q[k] = l);
                                e(null, r = [], j, i)
                            }
                            k = r.length;
                            while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                })
            }

            function wa(a) {
                for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                        return a === b
                    }, h, !0), l = ra(function(a) {
                        return J(b, a) > -1
                    }, h, !0), m = [function(a, c, d) {
                        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                        return b = null, e
                    }]; f > i; i++)
                    if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                    else {
                        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                            for (e = ++i; f > e; e++)
                                if (d.relative[a[e].type]) break;
                            return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                                value: " " === a[i - 2].type ? "*" : ""
                            })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                        }
                        m.push(c)
                    } return sa(m)
            }

            function xa(a, b) {
                var c = b.length > 0,
                    e = a.length > 0,
                    f = function(f, g, h, i, k) {
                        var l, o, q, r = 0,
                            s = "0",
                            t = f && [],
                            u = [],
                            v = j,
                            x = f || e && d.find.TAG("*", k),
                            y = w += null == v ? 1 : Math.random() || .1,
                            z = x.length;
                        for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                            if (e && l) {
                                o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                                while (q = a[o++])
                                    if (q(l, g || n, h)) {
                                        i.push(l);
                                        break
                                    } k && (w = y)
                            }
                            c && ((l = !q && l) && r--, f && t.push(l))
                        }
                        if (r += s, c && s !== r) {
                            o = 0;
                            while (q = b[o++]) q(t, u, g, h);
                            if (f) {
                                if (r > 0)
                                    while (s--) t[s] || u[s] || (u[s] = F.call(i));
                                u = ua(u)
                            }
                            H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                        }
                        return k && (w = y, j = v), t
                    };
                return c ? ha(f) : f
            }
            return h = fa.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = A[a + " "];
                if (!f) {
                    b || (b = g(a)), c = b.length;
                    while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                    f = A(a, xa(e, d)), f.selector = a
                }
                return f
            }, i = fa.select = function(a, b, e, f) {
                var i, j, k, l, m, n = "function" == typeof a && a,
                    o = !f && g(a = n.selector || a);
                if (e = e || [], 1 === o.length) {
                    if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                        if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                        n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                    }
                    i = W.needsContext.test(a) ? 0 : j.length;
                    while (i--) {
                        if (k = j[i], d.relative[l = k.type]) break;
                        if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                            break
                        }
                    }
                }
                return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
            }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
                return 1 & a.compareDocumentPosition(n.createElement("div"))
            }), ia(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || ja("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), c.attributes && ia(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || ja("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), ia(function(a) {
                return null == a.getAttribute("disabled")
            }) || ja(K, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), fa
        }(a);
        n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
        var u = function(a, b, c) {
                var d = [],
                    e = void 0 !== c;
                while ((a = a[b]) && 9 !== a.nodeType)
                    if (1 === a.nodeType) {
                        if (e && n(a).is(c)) break;
                        d.push(a)
                    } return d
            },
            v = function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            },
            w = n.expr.match.needsContext,
            x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            y = /^.[^:#\[\.,]*$/;

        function z(a, b, c) {
            if (n.isFunction(b)) return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return n.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (y.test(b)) return n.filter(b, a, c);
                b = n.filter(b, a)
            }
            return n.grep(a, function(a) {
                return h.call(b, a) > -1 !== c
            })
        }
        n.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, n.fn.extend({
            find: function(a) {
                var b, c = this.length,
                    d = [],
                    e = this;
                if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (n.contains(e[b], this)) return !0
                }));
                for (b = 0; c > b; b++) n.find(a, e[b], d);
                return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
            },
            filter: function(a) {
                return this.pushStack(z(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(z(this, a || [], !0))
            },
            is: function(a) {
                return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
            }
        });
        var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            C = n.fn.init = function(a, b, c) {
                var e, f;
                if (!a) return this;
                if (c = c || A, "string" == typeof a) {
                    if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                    if (e[1]) {
                        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                            for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                        return this
                    }
                    return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
            };
        C.prototype = n.fn, A = n(d);
        var D = /^(?:parents|prev(?:Until|All))/,
            E = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        n.fn.extend({
            has: function(a) {
                var b = n(a, this),
                    c = b.length;
                return this.filter(function() {
                    for (var a = 0; c > a; a++)
                        if (n.contains(this, b[a])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        } return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        });

        function F(a, b) {
            while ((a = a[b]) && 1 !== a.nodeType);
            return a
        }
        n.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return u(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return u(a, "parentNode", c)
            },
            next: function(a) {
                return F(a, "nextSibling")
            },
            prev: function(a) {
                return F(a, "previousSibling")
            },
            nextAll: function(a) {
                return u(a, "nextSibling")
            },
            prevAll: function(a) {
                return u(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return u(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return u(a, "previousSibling", c)
            },
            siblings: function(a) {
                return v((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return v(a.firstChild)
            },
            contents: function(a) {
                return a.contentDocument || n.merge([], a.childNodes)
            }
        }, function(a, b) {
            n.fn[a] = function(c, d) {
                var e = n.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
            }
        });
        var G = /\S+/g;

        function H(a) {
            var b = {};
            return n.each(a.match(G) || [], function(a, c) {
                b[c] = !0
            }), b
        }
        n.Callbacks = function(a) {
            a = "string" == typeof a ? H(a) : n.extend({}, a);
            var b, c, d, e, f = [],
                g = [],
                h = -1,
                i = function() {
                    for (e = a.once, d = b = !0; g.length; h = -1) {
                        c = g.shift();
                        while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                    }
                    a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
                },
                j = {
                    add: function() {
                        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                            n.each(b, function(b, c) {
                                n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                            })
                        }(arguments), c && !b && i()), this
                    },
                    remove: function() {
                        return n.each(arguments, function(a, b) {
                            var c;
                            while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                        }), this
                    },
                    has: function(a) {
                        return a ? n.inArray(a, f) > -1 : f.length > 0
                    },
                    empty: function() {
                        return f && (f = []), this
                    },
                    disable: function() {
                        return e = g = [], f = c = "", this
                    },
                    disabled: function() {
                        return !f
                    },
                    lock: function() {
                        return e = g = [], c || (f = c = ""), this
                    },
                    locked: function() {
                        return !!e
                    },
                    fireWith: function(a, c) {
                        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                    },
                    fire: function() {
                        return j.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!d
                    }
                };
            return j
        }, n.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", n.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return n.Deferred(function(c) {
                                n.each(b, function(b, f) {
                                    var g = n.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? n.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, n.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b = 0,
                    c = e.call(arguments),
                    d = c.length,
                    f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                    g = 1 === f ? a : n.Deferred(),
                    h = function(a, b, c) {
                        return function(d) {
                            b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                        }
                    },
                    i, j, k;
                if (d > 1)
                    for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
                return f || g.resolveWith(k, c), g.promise()
            }
        });
        var I;
        n.fn.ready = function(a) {
            return n.ready.promise().done(a), this
        }, n.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? n.readyWait++ : n.ready(!0)
            },
            ready: function(a) {
                (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
            }
        });

        function J() {
            d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
        }
        n.ready.promise = function(b) {
            return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
        }, n.ready.promise();
        var K = function(a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === n.type(c)) {
                    e = !0;
                    for (h in c) K(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                        return j.call(n(a), c)
                    })), b))
                    for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            L = function(a) {
                return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
            };

        function M() {
            this.expando = n.expando + M.uid++
        }
        M.uid = 1, M.prototype = {
            register: function(a, b) {
                var c = b || {};
                return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                    value: c,
                    writable: !0,
                    configurable: !0
                }), a[this.expando]
            },
            cache: function(a) {
                if (!L(a)) return {};
                var b = a[this.expando];
                return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0
                }))), b
            },
            set: function(a, b, c) {
                var d, e = this.cache(a);
                if ("string" == typeof b) e[b] = c;
                else
                    for (d in b) e[d] = b[d];
                return e
            },
            get: function(a, b) {
                return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
            },
            access: function(a, b, c) {
                var d;
                return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
            },
            remove: function(a, b) {
                var c, d, e, f = a[this.expando];
                if (void 0 !== f) {
                    if (void 0 === b) this.register(a);
                    else {
                        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
                        while (c--) delete f[d[c]]
                    }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
                }
            },
            hasData: function(a) {
                var b = a[this.expando];
                return void 0 !== b && !n.isEmptyObject(b)
            }
        };
        var N = new M,
            O = new M,
            P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Q = /[A-Z]/g;

        function R(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
                    } catch (e) {}
                    O.set(a, b, c)
                } else c = void 0;
            return c
        }
        n.extend({
            hasData: function(a) {
                return O.hasData(a) || N.hasData(a)
            },
            data: function(a, b, c) {
                return O.access(a, b, c)
            },
            removeData: function(a, b) {
                O.remove(a, b)
            },
            _data: function(a, b, c) {
                return N.access(a, b, c)
            },
            _removeData: function(a, b) {
                N.remove(a, b)
            }
        }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                        N.set(f, "hasDataAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    O.set(this, a)
                }) : K(this, function(b) {
                    var c, d;
                    if (f && void 0 === b) {
                        if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
                        if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
                        if (c = R(f, d, void 0), void 0 !== c) return c
                    } else d = n.camelCase(a), this.each(function() {
                        var c = O.get(this, d);
                        O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                    })
                }, null, b, arguments.length > 1, null, !0)
            },
            removeData: function(a) {
                return this.each(function() {
                    O.remove(this, a)
                })
            }
        }), n.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return N.get(a, c) || N.access(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        N.remove(a, [b + "queue", c])
                    })
                })
            }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
            U = ["Top", "Right", "Bottom", "Left"],
            V = function(a, b) {
                return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
            };

        function W(a, b, c, d) {
            var e, f = 1,
                g = 20,
                h = d ? function() {
                    return d.cur()
                } : function() {
                    return n.css(a, b, "")
                },
                i = h(),
                j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
                k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
            if (k && k[3] !== j) {
                j = j || k[3], c = c || [], k = +i || 1;
                do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
            }
            return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
        }
        var X = /^(?:checkbox|radio)$/i,
            Y = /<([\w:-]+)/,
            Z = /^$|\/(?:java|ecma)script/i,
            $ = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

        function _(a, b) {
            var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
            return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
        }

        function aa(a, b) {
            for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
        }
        var ba = /<|&#?\w+;/;

        function ca(a, b, c, d, e) {
            for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
                if (f = a[o], f || 0 === f)
                    if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                    else if (ba.test(f)) {
                g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
                while (k--) g = g.lastChild;
                n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
            } else m.push(b.createTextNode(f));
            l.textContent = "", o = 0;
            while (f = m[o++])
                if (d && n.inArray(f, d) > -1) e && e.push(f);
                else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
                k = 0;
                while (f = g[k++]) Z.test(f.type || "") && c.push(f)
            }
            return l
        }! function() {
            var a = d.createDocumentFragment(),
                b = a.appendChild(d.createElement("div")),
                c = d.createElement("input");
            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
        }();
        var da = /^key/,
            ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            fa = /^([^.]*)(?:\.(.+)|)/;

        function ga() {
            return !0
        }

        function ha() {
            return !1
        }

        function ia() {
            try {
                return d.activeElement
            } catch (a) {}
        }

        function ja(a, b, c, d, e, f) {
            var g, h;
            if ("object" == typeof b) {
                "string" != typeof c && (d = d || c, c = void 0);
                for (h in b) ja(a, h, c, d, b[h], f);
                return a
            }
            if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
            else if (!e) return a;
            return 1 === f && (g = e, e = function(a) {
                return n().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
                n.event.add(this, b, e, d, c)
            })
        }
        n.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
                if (r) {
                    c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                        return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(G) || [""], j = b.length;
                    while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
                }
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
                if (r && (i = r.events)) {
                    b = (b || "").match(G) || [""], j = b.length;
                    while (j--)
                        if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                            while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                        } else
                            for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                    n.isEmptyObject(i) && N.remove(a, "handle events")
                }
            },
            dispatch: function(a) {
                a = n.event.fix(a);
                var b, c, d, f, g, h = [],
                    i = e.call(arguments),
                    j = (N.get(this, "events") || {})[a.type] || [],
                    k = n.event.special[a.type] || {};
                if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                    h = n.event.handlers.call(this, a, j), b = 0;
                    while ((f = h[b++]) && !a.isPropagationStopped()) {
                        a.currentTarget = f.elem, c = 0;
                        while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                    }
                    return k.postDispatch && k.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                    for (; i !== this; i = i.parentNode || this)
                        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                        } return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, e, f, g = b.button;
                    return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                }
            },
            fix: function(a) {
                if (a[n.expando]) return a;
                var b, c, e, f = a.type,
                    g = a,
                    h = this.fixHooks[f];
                h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
                while (b--) c = e[b], a[c] = g[c];
                return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== ia() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === ia() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return n.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            }
        }, n.removeEvent = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c)
        }, n.Event = function(a, b) {
            return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
        }, n.Event.prototype = {
            constructor: n.Event,
            isDefaultPrevented: ha,
            isPropagationStopped: ha,
            isImmediatePropagationStopped: ha,
            isSimulated: !1,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault()
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, n.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            n.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), n.fn.extend({
            on: function(a, b, c, d) {
                return ja(this, a, b, c, d)
            },
            one: function(a, b, c, d) {
                return ja(this, a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function() {
                    n.event.remove(this, a, c, b)
                })
            }
        });
        var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            la = /<script|<style|<link/i,
            ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
            na = /^true\/(.*)/,
            oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function pa(a, b) {
            return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function qa(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
        }

        function ra(a) {
            var b = na.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function sa(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                    delete g.handle, g.events = {};
                    for (e in j)
                        for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
                }
                O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
            }
        }

        function ta(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }

        function ua(a, b, c, d) {
            b = f.apply([], b);
            var e, g, h, i, j, k, m = 0,
                o = a.length,
                p = o - 1,
                q = b[0],
                r = n.isFunction(q);
            if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
            });
            if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
                for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
                if (i)
                    for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
            }
            return a
        }

        function va(a, b, c) {
            for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
            return a
        }
        n.extend({
            htmlPrefilter: function(a) {
                return a.replace(ka, "<$1></$2>")
            },
            clone: function(a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0),
                    i = n.contains(a.ownerDocument, a);
                if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                    for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
                if (b)
                    if (c)
                        for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
                    else sa(a, h);
                return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
            },
            cleanData: function(a) {
                for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                    if (L(c)) {
                        if (b = c[N.expando]) {
                            if (b.events)
                                for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                            c[N.expando] = void 0
                        }
                        c[O.expando] && (c[O.expando] = void 0)
                    }
            }
        }), n.fn.extend({
            domManip: ua,
            detach: function(a) {
                return va(this, a, !0)
            },
            remove: function(a) {
                return va(this, a)
            },
            text: function(a) {
                return K(this, function(a) {
                    return void 0 === a ? n.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                    })
                }, null, a, arguments.length)
            },
            append: function() {
                return ua(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = pa(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return ua(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = pa(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return ua(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return ua(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return n.clone(this, a, b)
                })
            },
            html: function(a) {
                return K(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = n.htmlPrefilter(a);
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = [];
                return ua(this, arguments, function(b) {
                    var c = this.parentNode;
                    n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
                }, a)
            }
        }), n.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            n.fn[a] = function(a) {
                for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
                return this.pushStack(d)
            }
        });
        var wa, xa = {
            HTML: "block",
            BODY: "block"
        };

        function ya(a, b) {
            var c = n(b.createElement(a)).appendTo(b.body),
                d = n.css(c[0], "display");
            return c.detach(), d
        }

        function za(a) {
            var b = d,
                c = xa[a];
            return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
        }
        var Aa = /^margin/,
            Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
            Ca = function(b) {
                var c = b.ownerDocument.defaultView;
                return c && c.opener || (c = a), c.getComputedStyle(b)
            },
            Da = function(a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e
            },
            Ea = d.documentElement;
        ! function() {
            var b, c, e, f, g = d.createElement("div"),
                h = d.createElement("div");
            if (h.style) {
                h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

                function i() {
                    h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
                    var d = a.getComputedStyle(h);
                    b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
                }
                n.extend(l, {
                    pixelPosition: function() {
                        return i(), b
                    },
                    boxSizingReliable: function() {
                        return null == c && i(), c
                    },
                    pixelMarginRight: function() {
                        return null == c && i(), e
                    },
                    reliableMarginLeft: function() {
                        return null == c && i(), f
                    },
                    reliableMarginRight: function() {
                        var b, c = h.appendChild(d.createElement("div"));
                        return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
                    }
                })
            }
        }();

        function Fa(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
        }

        function Ga(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }
        var Ha = /^(none|table(?!-c[ea]).+)/,
            Ia = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ja = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ka = ["Webkit", "O", "Moz", "ms"],
            La = d.createElement("div").style;

        function Ma(a) {
            if (a in La) return a;
            var b = a[0].toUpperCase() + a.slice(1),
                c = Ka.length;
            while (c--)
                if (a = Ka[c] + b, a in La) return a
        }

        function Na(a, b, c) {
            var d = T.exec(b);
            return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
        }

        function Oa(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
            return g
        }

        function Pa(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = Ca(a),
                g = "border-box" === n.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;
                d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function Qa(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }
        n.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = Fa(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = n.camelCase(b),
                        i = a.style;
                    return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = n.camelCase(b);
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
            }
        }), n.each(["height", "width"], function(a, b) {
            n.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                        return Pa(a, b, d)
                    }) : Pa(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e, f = d && Ca(a),
                        g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                    return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
                }
            }
        }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
            return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left
            })) + "px" : void 0
        }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
            return b ? Da(a, {
                display: "inline-block"
            }, Fa, [a, "marginRight"]) : void 0
        }), n.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            n.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
        }), n.fn.extend({
            css: function(a, b) {
                return K(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (n.isArray(b)) {
                        for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return Qa(this, !0)
            },
            hide: function() {
                return Qa(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    V(this) ? n(this).show() : n(this).hide()
                })
            }
        });

        function Ra(a, b, c, d, e) {
            return new Ra.prototype.init(a, b, c, d, e)
        }
        n.Tween = Ra, Ra.prototype = {
            constructor: Ra,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = Ra.propHooks[this.prop];
                return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = Ra.propHooks[this.prop];
                return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
            }
        }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
                },
                set: function(a) {
                    n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
                }
            }
        }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, n.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            _default: "swing"
        }, n.fx = Ra.prototype.init, n.fx.step = {};
        var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
            Va = /queueHooks$/;

        function Wa() {
            return a.setTimeout(function() {
                Sa = void 0
            }), Sa = n.now()
        }

        function Xa(a, b) {
            var c, d = 0,
                e = {
                    height: a
                };
            for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
            return b && (e.opacity = e.width = a), e
        }

        function Ya(a, b, c) {
            for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function Za(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this,
                m = {},
                o = a.style,
                p = a.nodeType && V(a),
                q = N.get(a, "fxshow");
            c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, l.always(function() {
                l.always(function() {
                    h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], Ua.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                        if ("show" !== e || !q || void 0 === q[d]) continue;
                        p = !0
                    }
                    m[d] = q && q[d] || n.style(a, d)
                } else j = void 0;
            if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
            else {
                q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                    n(a).hide()
                }), l.done(function() {
                    var b;
                    N.remove(a, "fxshow");
                    for (b in m) n.style(a, b, m[b])
                });
                for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function $a(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function _a(a, b, c) {
            var d, e, f = 0,
                g = _a.prefilters.length,
                h = n.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: n.extend({}, b),
                    opts: n.extend(!0, {
                        specialEasing: {},
                        easing: n.easing._default
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: Sa || Wa(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for ($a(k, j.opts.specialEasing); g > f; f++)
                if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
            return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }
        n.Animation = n.extend(_a, {
                tweeners: {
                    "*": [function(a, b) {
                        var c = this.createTween(a, b);
                        return W(c.elem, a, T.exec(b), c), c
                    }]
                },
                tweener: function(a, b) {
                    n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                    for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
                },
                prefilters: [Za],
                prefilter: function(a, b) {
                    b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
                }
            }), n.speed = function(a, b, c) {
                var d = a && "object" == typeof a ? n.extend({}, a) : {
                    complete: c || !c && b || n.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !n.isFunction(b) && b
                };
                return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                    n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
                }, d
            }, n.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(V).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function(a, b, c, d) {
                    var e = n.isEmptyObject(a),
                        f = n.speed(b, c, d),
                        g = function() {
                            var b = _a(this, n.extend({}, a), f);
                            (e || N.get(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = n.timers,
                            g = N.get(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        !b && c || n.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"), this.each(function() {
                        var b, c = N.get(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = n.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), n.each(["toggle", "show", "hide"], function(a, b) {
                var c = n.fn[b];
                n.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
                }
            }), n.each({
                slideDown: Xa("show"),
                slideUp: Xa("hide"),
                slideToggle: Xa("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                n.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), n.timers = [], n.fx.tick = function() {
                var a, b = 0,
                    c = n.timers;
                for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
                c.length || n.fx.stop(), Sa = void 0
            }, n.fx.timer = function(a) {
                n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
            }, n.fx.interval = 13, n.fx.start = function() {
                Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
            }, n.fx.stop = function() {
                a.clearInterval(Ta), Ta = null
            }, n.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, n.fn.delay = function(b, c) {
                return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function() {
                        a.clearTimeout(e)
                    }
                })
            },
            function() {
                var a = d.createElement("input"),
                    b = d.createElement("select"),
                    c = b.appendChild(d.createElement("option"));
                a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
            }();
        var ab, bb = n.expr.attrHandle;
        n.fn.extend({
            attr: function(a, b) {
                return K(this, n.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    n.removeAttr(this, a)
                })
            }
        }), n.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(G);
                if (f && 1 === a.nodeType)
                    while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
            }
        }), ab = {
            set: function(a, b, c) {
                return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
            }
        }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = bb[b] || n.find.attr;
            bb[b] = function(a, b, d) {
                var e, f;
                return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
            }
        });
        var cb = /^(?:input|select|textarea|button)$/i,
            db = /^(?:a|area)$/i;
        n.fn.extend({
            prop: function(a, b) {
                return K(this, n.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return this.each(function() {
                    delete this[n.propFix[a] || a]
                })
            }
        }), n.extend({
            prop: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]),
                    void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = n.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), l.optSelected || (n.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex, null
            },
            set: function(a) {
                var b = a.parentNode;
                b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
            }
        }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            n.propFix[this.toLowerCase()] = this
        });
        var eb = /[\t\r\n\f]/g;

        function fb(a) {
            return a.getAttribute && a.getAttribute("class") || ""
        }
        n.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (n.isFunction(a)) return this.each(function(b) {
                    n(this).addClass(a.call(this, b, fb(this)))
                });
                if ("string" == typeof a && a) {
                    b = a.match(G) || [];
                    while (c = this[i++])
                        if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                            g = 0;
                            while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                            h = n.trim(d), e !== h && c.setAttribute("class", h)
                        }
                }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (n.isFunction(a)) return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, fb(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof a && a) {
                    b = a.match(G) || [];
                    while (c = this[i++])
                        if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                            g = 0;
                            while (f = b[g++])
                                while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                            h = n.trim(d), e !== h && c.setAttribute("class", h)
                        }
                }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                    n(this).toggleClass(a.call(this, c, fb(this), b), b)
                }) : this.each(function() {
                    var b, d, e, f;
                    if ("string" === c) {
                        d = 0, e = n(this), f = a.match(G) || [];
                        while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
                })
            },
            hasClass: function(a) {
                var b, c, d = 0;
                b = " " + a + " ";
                while (c = this[d++])
                    if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
                return !1
            }
        });
        var gb = /\r/g,
            hb = /[\x20\t\r\n\f]+/g;
        n.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0]; {
                    if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                    if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
                }
            }
        }), n.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = n.find.attr(a, "value");
                        return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                                if (b = n(c).val(), f) return b;
                                g.push(b)
                            } return g
                    },
                    set: function(a, b) {
                        var c, d, e = a.options,
                            f = n.makeArray(b),
                            g = e.length;
                        while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            }
        }), n.each(["radio", "checkbox"], function() {
            n.valHooks[this] = {
                set: function(a, b) {
                    return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
                }
            }, l.checkOn || (n.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var ib = /^(?:focusinfocus|focusoutblur)$/;
        n.extend(n.event, {
            trigger: function(b, c, e, f) {
                var g, h, i, j, l, m, o, p = [e || d],
                    q = k.call(b, "type") ? b.type : b,
                    r = k.call(b, "namespace") ? b.namespace.split(".") : [];
                if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                    if (!f && !o.noBubble && !n.isWindow(e)) {
                        for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                        i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                    }
                    g = 0;
                    while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                    return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
                }
            },
            simulate: function(a, b, c) {
                var d = n.extend(new n.Event, c, {
                    type: a,
                    isSimulated: !0
                });
                n.event.trigger(d, null, b)
            }
        }), n.fn.extend({
            trigger: function(a, b) {
                return this.each(function() {
                    n.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? n.event.trigger(a, b, c, !0) : void 0
            }
        }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            n.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), n.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), l.focusin = "onfocusin" in a, l.focusin || n.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                n.event.simulate(b, a.target, n.event.fix(a))
            };
            n.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = N.access(d, b);
                    e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = N.access(d, b) - 1;
                    e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
                }
            }
        });
        var jb = a.location,
            kb = n.now(),
            lb = /\?/;
        n.parseJSON = function(a) {
            return JSON.parse(a + "")
        }, n.parseXML = function(b) {
            var c;
            if (!b || "string" != typeof b) return null;
            try {
                c = (new a.DOMParser).parseFromString(b, "text/xml")
            } catch (d) {
                c = void 0
            }
            return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
        };
        var mb = /#.*$/,
            nb = /([?&])_=[^&]*/,
            ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            qb = /^(?:GET|HEAD)$/,
            rb = /^\/\//,
            sb = {},
            tb = {},
            ub = "*/".concat("*"),
            vb = d.createElement("a");
        vb.href = jb.href;

        function wb(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(G) || [];
                if (n.isFunction(c))
                    while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function xb(a, b, c, d) {
            var e = {},
                f = a === tb;

            function g(h) {
                var i;
                return e[h] = !0, n.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
                }), i
            }
            return g(b.dataTypes[0]) || !e["*"] && g("*")
        }

        function yb(a, b) {
            var c, d, e = n.ajaxSettings.flatOptions || {};
            for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && n.extend(!0, a, d), a
        }

        function zb(a, b, c) {
            var d, e, f, g, h = a.contents,
                i = a.dataTypes;
            while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break
                    } if (i[0] in c) f = i[0];
            else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) {
                        f = e;
                        break
                    }
                    g || (g = e)
                }
                f = f || g
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function Ab(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            f = k.shift();
            while (f)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break
                        } if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }
        n.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: jb.href,
                type: "GET",
                isLocal: pb.test(jb.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ub,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": n.parseJSON,
                    "text xml": n.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
            },
            ajaxPrefilter: wb(sb),
            ajaxTransport: wb(tb),
            ajax: function(b, c) {
                "object" == typeof b && (c = b, b = void 0), c = c || {};
                var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                    o = m.context || m,
                    p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                    q = n.Deferred(),
                    r = n.Callbacks("once memory"),
                    s = m.statusCode || {},
                    t = {},
                    u = {},
                    v = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === v) {
                                if (!h) {
                                    h = {};
                                    while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2]
                                }
                                b = h[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === v ? g : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return v || (a = u[c] = u[c] || a, t[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return v || (m.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > v)
                                    for (b in a) s[b] = [s[b], a[b]];
                                else x.always(a[x.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || w;
                            return e && e.abort(b), z(0, b), this
                        }
                    };
                if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
                    j = d.createElement("a");
                    try {
                        j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
                    } catch (y) {
                        m.crossDomain = !0
                    }
                }
                if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
                k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
                for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
                if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
                w = "abort";
                for (l in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[l](m[l]);
                if (e = xb(tb, m, c, x)) {
                    if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                    m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                        x.abort("timeout")
                    }, m.timeout));
                    try {
                        v = 1, e.send(t, z)
                    } catch (y) {
                        if (!(2 > v)) throw y;
                        z(-1, y)
                    }
                } else z(-1, "No Transport");

                function z(b, c, d, h) {
                    var j, l, t, u, w, y = c;
                    2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
                }
                return x
            },
            getJSON: function(a, b, c) {
                return n.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return n.get(a, void 0, b, "script")
            }
        }), n.each(["get", "post"], function(a, b) {
            n[b] = function(a, c, d, e) {
                return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                }, n.isPlainObject(a) && a))
            }
        }), n._evalUrl = function(a) {
            return n.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, n.fn.extend({
            wrapAll: function(a) {
                var b;
                return n.isFunction(a) ? this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstElementChild) a = a.firstElementChild;
                    return a
                }).append(this)), this)
            },
            wrapInner: function(a) {
                return n.isFunction(a) ? this.each(function(b) {
                    n(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = n(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = n.isFunction(a);
                return this.each(function(c) {
                    n(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
                }).end()
            }
        }), n.expr.filters.hidden = function(a) {
            return !n.expr.filters.visible(a)
        }, n.expr.filters.visible = function(a) {
            return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
        };
        var Bb = /%20/g,
            Cb = /\[\]$/,
            Db = /\r?\n/g,
            Eb = /^(?:submit|button|image|reset|file)$/i,
            Fb = /^(?:input|select|textarea|keygen)/i;

        function Gb(a, b, c, d) {
            var e;
            if (n.isArray(b)) n.each(b, function(b, e) {
                c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== n.type(b)) d(a, b);
            else
                for (e in b) Gb(a + "[" + e + "]", b[e], c, d)
        }
        n.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (c in a) Gb(c, a[c], b, e);
            return d.join("&").replace(Bb, "+")
        }, n.fn.extend({
            serialize: function() {
                return n.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = n.prop(this, "elements");
                    return a ? n.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
                }).map(function(a, b) {
                    var c = n(this).val();
                    return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(Db, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(Db, "\r\n")
                    }
                }).get()
            }
        }), n.ajaxSettings.xhr = function() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        };
        var Hb = {
                0: 200,
                1223: 204
            },
            Ib = n.ajaxSettings.xhr();
        l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) {
            var c, d;
            return l.cors || Ib && !b.crossDomain ? {
                send: function(e, f) {
                    var g, h = b.xhr();
                    if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (g in b.xhrFields) h[g] = b.xhrFields[g];
                    b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    for (g in e) h.setRequestHeader(g, e[g]);
                    c = function(a) {
                        return function() {
                            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                                binary: h.response
                            } : {
                                text: h.responseText
                            }, h.getAllResponseHeaders()))
                        }
                    }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                        4 === h.readyState && a.setTimeout(function() {
                            c && d()
                        })
                    }, c = c("abort");
                    try {
                        h.send(b.hasContent && b.data || null)
                    } catch (i) {
                        if (c) throw i
                    }
                },
                abort: function() {
                    c && c()
                }
            } : void 0
        }), n.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(a) {
                    return n.globalEval(a), a
                }
            }
        }), n.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
        }), n.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function(e, f) {
                        b = n("<script>").prop({
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function(a) {
                            b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                        }), d.head.appendChild(b[0])
                    },
                    abort: function() {
                        c && c()
                    }
                }
            }
        });
        var Jb = [],
            Kb = /(=)\?(?=&|$)|\?\?/;
        n.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Jb.pop() || n.expando + "_" + kb++;
                return this[a] = !0, a
            }
        }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                return g || n.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments
            }, d.always(function() {
                void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), n.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || d;
            var e = x.exec(a),
                f = !c && [];
            return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
        };
        var Lb = n.fn.load;
        n.fn.load = function(a, b, c) {
            if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
                url: a,
                type: e || "GET",
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
            }).always(c && function(a, b) {
                g.each(function() {
                    c.apply(this, f || [a.responseText, b, a])
                })
            }), this
        }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            n.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), n.expr.filters.evmanimated = function(a) {
            return n.grep(n.timers, function(b) {
                return a === b.elem
            }).length
        };

        function Mb(a) {
            return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
        }
        n.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = n.css(a, "position"),
                    l = n(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, n.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
                var b, c, d = this[0],
                    e = {
                        top: 0,
                        left: 0
                    },
                    f = d && d.ownerDocument;
                if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = this[0],
                        d = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - d.top - n.css(c, "marginTop", !0),
                        left: b.left - d.left - n.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent;
                    while (a && "static" === n.css(a, "position")) a = a.offsetParent;
                    return a || Ea
                })
            }
        }), n.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = "pageYOffset" === b;
            n.fn[a] = function(d) {
                return K(this, function(a, d, e) {
                    var f = Mb(a);
                    return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
                }, a, d, arguments.length)
            }
        }), n.each(["top", "left"], function(a, b) {
            n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
                return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
            })
        }), n.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            n.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                n.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return K(this, function(b, c, d) {
                        var e;
                        return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), n.fn.extend({
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            },
            size: function() {
                return this.length
            }
        }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return n
        });
        var Nb = a.jQuery,
            Ob = a.$;
        return n.noConflict = function(b) {
            return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n
        }, b || (a.jQuery = a.$ = n), n
    });
    ! function(e, t, i, n) {
        "use strict";
        var a = i("html"),
            s = i(e),
            o = i(t),
            r = i.evmfancybox = function() {
                r.open.apply(this, arguments)
            },
            l = navigator.userAgent.match(/msie/i),
            c = null,
            d = t.createTouch !== n,
            h = function(e) {
                return e && e.hasOwnProperty && e instanceof i
            },
            p = function(e) {
                return e && "string" === i.type(e)
            },
            u = function(e) {
                return p(e) && e.indexOf("%") > 0
            },
            f = function(e) {
                return e && !(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
            },
            g = function(e, t) {
                var i = parseInt(e, 10) || 0;
                return t && u(e) && (i = r.getViewport()[t] / 100 * i), Math.ceil(i)
            },
            m = function(e, t) {
                return g(e, t) + "px"
            };
        i.extend(r, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !d,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="evm_fancybox-wrap" tabIndex="-1"><div class="evm_fancybox-skin"><div class="evm_fancybox-outer"><div class="evm_fancybox-inner"></div></div></div></div>',
                    image: '<img class="evm_fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="evm_fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="evm_fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item evm_fancybox-close" href="javascript:void(0);">&times;</a>',
                    next: '<a title="Next" class="evm_fancybox-nav evm_fancybox-next" href="javascript:void(0);"><span></span></a>',
                    prev: '<a title="Previous" class="evm_fancybox-nav evm_fancybox-prev" href="javascript:void(0);"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: i.noop,
                beforeLoad: i.noop,
                afterLoad: i.noop,
                beforeShow: i.noop,
                afterShow: i.noop,
                beforeChange: i.noop,
                beforeClose: i.noop,
                afterClose: i.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(e, t) {
                return e && (i.isPlainObject(t) || (t = {}), !1 !== r.close(!0)) ? (i.isArray(e) || (e = h(e) ? i(e).get() : [e]), i.each(e, function(a, s) {
                    var o, l, c, d, u, f, g, m = {};
                    "object" === i.type(s) && (s.nodeType && (s = i(s)), h(s) ? (m = {
                        href: s.data("fancybox-href") || s.attr("href"),
                        title: s.data("evm_fancybox-title") || s.attr("title"),
                        isDom: !0,
                        element: s
                    }, i.metadata && i.extend(!0, m, s.metadata())) : m = s), o = t.href || m.href || (p(s) ? s : null), l = t.title !== n ? t.title : m.title || "", c = t.content || m.content, d = c ? "html" : t.type || m.type, !d && m.isDom && (d = s.data("fancybox-type"), d || (u = s.prop("class").match(/fancybox\.(\w+)/), d = u ? u[1] : null)), p(o) && (d || (r.isImage(o) ? d = "image" : r.isSWF(o) ? d = "swf" : "#" === o.charAt(0) ? d = "inline" : p(s) && (d = "html", c = s)), "ajax" === d && (f = o.split(/\s+/, 2), o = f.shift(), g = f.shift())), c || ("inline" === d ? o ? c = i(p(o) ? o.replace(/.*(?=#[^\s]+$)/, "") : o) : m.isDom && (c = s) : "html" === d ? c = o : d || o || !m.isDom || (d = "inline", c = s)), i.extend(m, {
                        href: o,
                        type: d,
                        content: c,
                        title: l,
                        selector: g
                    }), e[a] = m
                }), r.opts = i.extend(!0, {}, r.defaults, t), t.keys !== n && (r.opts.keys = t.keys ? i.extend({}, r.defaults.keys, t.keys) : !1), r.group = e, r._start(r.opts.index)) : void 0
            },
            cancel: function() {
                var e = r.coming;
                e && !1 !== r.trigger("onCancel") && (r.hideLoading(), r.ajaxLoad && r.ajaxLoad.abort(), r.ajaxLoad = null, r.imgPreload && (r.imgPreload.onload = r.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), r.coming = null, r.current || r._afterZoomOut(e))
            },
            close: function(e) {
                r.cancel(), !1 !== r.trigger("beforeClose") && (r.unbindEvents(), r.isActive && (r.isOpen && e !== !0 ? (r.isOpen = r.isOpened = !1, r.isClosing = !0, i(".fancybox-item, .evm_fancybox-nav").remove(), r.wrap.stop(!0, !0).removeClass("evm_fancybox-opened"), r.transitions[r.current.closeMethod]()) : (i(".evm_fancybox-wrap").stop(!0).trigger("onReset").remove(), r._afterZoomOut())))
            },
            play: function(e) {
                var t = function() {
                        clearTimeout(r.player.timer)
                    },
                    i = function() {
                        t(), r.current && r.player.isActive && (r.player.timer = setTimeout(r.next, r.current.playSpeed))
                    },
                    n = function() {
                        t(), o.unbind(".player"), r.player.isActive = !1, r.trigger("onPlayEnd")
                    },
                    a = function() {
                        r.current && (r.current.loop || r.current.index < r.group.length - 1) && (r.player.isActive = !0, o.bind({
                            "onCancel.player beforeClose.player": n,
                            "onUpdate.player": i,
                            "beforeLoad.player": t
                        }), i(), r.trigger("onPlayStart"))
                    };
                e === !0 || !r.player.isActive && e !== !1 ? a() : n()
            },
            next: function(e) {
                var t = r.current;
                t && (p(e) || (e = t.direction.next), r.jumpto(t.index + 1, e, "next"))
            },
            prev: function(e) {
                var t = r.current;
                t && (p(e) || (e = t.direction.prev), r.jumpto(t.index - 1, e, "prev"))
            },
            jumpto: function(e, t, i) {
                var a = r.current;
                a && (e = g(e), r.direction = t || a.direction[e >= a.index ? "next" : "prev"], r.router = i || "jumpto", a.loop && (0 > e && (e = a.group.length + e % a.group.length), e %= a.group.length), a.group[e] !== n && (r.cancel(), r._start(e)))
            },
            reposition: function(e, t) {
                var n, a = r.current,
                    s = a ? a.wrap : null;
                s && (n = r._getPosition(t), e && "scroll" === e.type ? (delete n.position, s.stop(!0, !0).animate(n, 200)) : (s.css(n), a.pos = i.extend({}, a.dim, n)))
            },
            update: function(e) {
                var t = e && e.type,
                    i = !t || "orientationchange" === t;
                i && (clearTimeout(c), c = null), r.isOpen && !c && (c = setTimeout(function() {
                    var n = r.current;
                    n && !r.isClosing && (r.wrap.removeClass("evm_fancybox-tmp"), (i || "load" === t || "resize" === t && n.autoResize) && r._setDimension(), "scroll" === t && n.canShrink || r.reposition(e), r.trigger("onUpdate"), c = null)
                }, i && !d ? 0 : 300))
            },
            toggle: function(e) {
                r.isOpen && (r.current.fitToView = "boolean" === i.type(e) ? e : !r.current.fitToView, d && (r.wrap.removeAttr("style").addClass("evm_fancybox-tmp"), r.trigger("onUpdate")), r.update())
            },
            hideLoading: function() {
                o.unbind(".loading"), i("#evm_fancybox-loading").remove()
            },
            showLoading: function() {
                var e, t;
                r.hideLoading(), e = i('<div id="evm_fancybox-loading"></div>').click(r.cancel).appendTo("body"), o.bind("keydown.loading", function(e) {
                    27 === (e.which || e.keyCode) && (e.preventDefault(), r.cancel())
                }), r.defaults.fixed || (t = r.getViewport(), e.css({
                    position: "absolute",
                    top: .5 * t.h + t.y,
                    left: .5 * t.w + t.x
                }))
            },
            getViewport: function() {
                var t = r.current && r.current.locked || !1,
                    i = {
                        x: s.scrollLeft(),
                        y: s.scrollTop()
                    };
                return t ? (i.w = t[0].clientWidth, i.h = t[0].clientHeight) : (i.w = d && e.innerWidth ? e.innerWidth : s.width(), i.h = d && e.innerHeight ? e.innerHeight : s.height()), i
            },
            unbindEvents: function() {
                r.wrap && h(r.wrap) && r.wrap.unbind(".fb"), o.unbind(".fb"), s.unbind(".fb")
            },
            bindEvents: function() {
                var e, t = r.current;
                t && (s.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), r.update), e = t.keys, e && o.bind("keydown.fb", function(a) {
                    var s = a.which || a.keyCode,
                        o = a.target || a.srcElement;
                    return 27 === s && r.coming ? !1 : (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || o && (o.type || i(o).is("[contenteditable]")) || i.each(e, function(e, o) {
                        return t.group.length > 1 && o[s] !== n ? (r[e](o[s]), a.preventDefault(), !1) : i.inArray(s, o) > -1 ? (r[e](), a.preventDefault(), !1) : void 0
                    }), void 0)
                }), i.fn.mousewheel && t.mouseWheel && r.wrap.bind("mousewheel.fb", function(e, n, a, s) {
                    for (var o = e.target || null, l = i(o), c = !1; l.length && !(c || l.is(".evm_fancybox-skin") || l.is(".evm_fancybox-wrap"));) c = f(l[0]), l = i(l).parent();
                    0 === n || c || r.group.length > 1 && !t.canShrink && (s > 0 || a > 0 ? r.prev(s > 0 ? "down" : "left") : (0 > s || 0 > a) && r.next(0 > s ? "up" : "right"), e.preventDefault())
                }))
            },
            trigger: function(e, t) {
                var n, a = t || r.coming || r.current;
                if (a) {
                    if (i.isFunction(a[e]) && (n = a[e].apply(a, Array.prototype.slice.call(arguments, 1))), n === !1) return !1;
                    a.helpers && i.each(a.helpers, function(t, n) {
                        n && r.helpers[t] && i.isFunction(r.helpers[t][e]) && r.helpers[t][e](i.extend(!0, {}, r.helpers[t].defaults, n), a)
                    }), o.trigger(e)
                }
            },
            isImage: function(e) {
                return p(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(e) {
                return p(e) && e.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(e) {
                var t, n, a, s, o, l = {};
                if (e = g(e), t = r.group[e] || null, !t) return !1;
                if (l = i.extend(!0, {}, r.opts, t), s = l.margin, o = l.padding, "number" === i.type(s) && (l.margin = [s, s, s, s]), "number" === i.type(o) && (l.padding = [o, o, o, o]), l.modal && i.extend(!0, l, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = r.group, l.index = e, r.coming = l, !1 === r.trigger("beforeLoad")) return r.coming = null, void 0;
                if (a = l.type, n = l.href, !a) return r.coming = null, r.current && r.router && "jumpto" !== r.router ? (r.current.index = e, r[r.router](r.direction)) : !1;
                if (r.isActive = !0, ("image" === a || "swf" === a) && (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === a && (l.aspectRatio = !0), "iframe" === a && d && (l.scrolling = "scroll"), l.wrap = i(l.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + a + " evm_fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), i.extend(l, {
                        skin: i(".evm_fancybox-skin", l.wrap),
                        outer: i(".evm_fancybox-outer", l.wrap),
                        inner: i(".evm_fancybox-inner", l.wrap)
                    }), i.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                        l.skin.css("padding" + t, m(l.padding[e]))
                    }), r.trigger("onReady"), "inline" === a || "html" === a) {
                    if (!l.content || !l.content.length) return r._error("content")
                } else if (!n) return r._error("href");
                "image" === a ? r._loadImage() : "ajax" === a ? r._loadAjax() : "iframe" === a ? r._loadIframe() : r._afterLoad()
            },
            _error: function(e) {
                i.extend(r.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: e,
                    content: r.coming.tpl.error
                }), r._afterLoad()
            },
            _loadImage: function() {
                var e = r.imgPreload = new Image;
                e.onload = function() {
                    this.onload = this.onerror = null, r.coming.width = this.width / r.opts.pixelRatio, r.coming.height = this.height / r.opts.pixelRatio, r._afterLoad()
                }, e.onerror = function() {
                    this.onload = this.onerror = null, r._error("image")
                }, e.src = r.coming.href, e.complete !== !0 && r.showLoading()
            },
            _loadAjax: function() {
                var e = r.coming;
                r.showLoading(), r.ajaxLoad = i.ajax(i.extend({}, e.ajax, {
                    url: e.href,
                    error: function(e, t) {
                        r.coming && "abort" !== t ? r._error("ajax", e) : r.hideLoading()
                    },
                    success: function(t, i) {
                        "success" === i && (e.content = t, r._afterLoad())
                    }
                }))
            },
            _loadIframe: function() {
                var e = r.coming,
                    t = i(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", d ? "auto" : e.iframe.scrolling).attr("src", e.href);
                i(e.wrap).bind("onReset", function() {
                    try {
                        i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (e) {}
                }), e.iframe.preload && (r.showLoading(), t.one("load", function() {
                    i(this).data("ready", 1), d || i(this).bind("load.fb", r.update), i(this).parents(".evm_fancybox-wrap").width("100%").removeClass("evm_fancybox-tmp").show(), r._afterLoad()
                })), e.content = t.appendTo(e.inner), e.iframe.preload || r._afterLoad()
            },
            _preloadImages: function() {
                var e, t, i = r.group,
                    n = r.current,
                    a = i.length,
                    s = n.preload ? Math.min(n.preload, a - 1) : 0;
                for (t = 1; s >= t; t += 1) e = i[(n.index + t) % a], "image" === e.type && e.href && ((new Image).src = e.href)
            },
            _afterLoad: function() {
                var e, t, n, a, s, o, l = r.coming,
                    c = r.current,
                    d = "fancybox-placeholder";
                if (r.hideLoading(), l && r.isActive !== !1) {
                    if (!1 === r.trigger("afterLoad", l, c)) return l.wrap.stop(!0).trigger("onReset").remove(), r.coming = null, void 0;
                    switch (c && (r.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("evm_fancybox-opened").find(".fancybox-item, .evm_fancybox-nav").remove()), r.unbindEvents(), e = l, t = l.content, n = l.type, a = l.scrolling, i.extend(r, {
                            wrap: e.wrap,
                            skin: e.skin,
                            outer: e.outer,
                            inner: e.inner,
                            current: e,
                            previous: c
                        }), s = e.href, n) {
                        case "inline":
                        case "ajax":
                        case "html":
                            e.selector ? t = i("<div>").html(t).find(e.selector) : h(t) && (t.data(d) || t.data(d, i('<div class="' + d + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function() {
                                i(this).find(t).length && t.hide().replaceAll(t.data(d)).data(d, !1)
                            }));
                            break;
                        case "image":
                            t = e.tpl.image.replace("{href}", s);
                            break;
                        case "swf":
                            t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + s + '"></param>', o = "", i.each(e.swf, function(e, i) {
                                t += '<param name="' + e + '" value="' + i + '"></param>', o += " " + e + '="' + i + '"'
                            }), t += '<embed src="' + s + '" type="application/x-shockwave-flash" width="100%" height="100%"' + o + "></embed></object>"
                    }
                    h(t) && t.parent().is(e.inner) || e.inner.append(t), r.trigger("beforeShow"), e.inner.css("overflow", "yes" === a ? "scroll" : "no" === a ? "hidden" : a), r._setDimension(), r.reposition(), r.isOpen = !1, r.coming = null, r.bindEvents(), r.isOpened ? c.prevMethod && r.transitions[c.prevMethod]() : i(".evm_fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), r.transitions[r.isOpened ? e.nextMethod : e.openMethod](), r._preloadImages()
                }
            },
            _setDimension: function() {
                var e, t, n, a, s, o, l, c, d, h, p, f, v, w, b, y = r.getViewport(),
                    x = 0,
                    _ = !1,
                    k = !1,
                    j = r.wrap,
                    C = r.skin,
                    I = r.inner,
                    T = r.current,
                    S = T.width,
                    W = T.height,
                    H = T.minWidth,
                    L = T.minHeight,
                    D = T.maxWidth,
                    A = T.maxHeight,
                    P = T.scrolling,
                    B = T.scrollOutside ? T.scrollbarWidth : 0,
                    M = T.margin,
                    R = g(M[1] + M[3]),
                    O = g(M[0] + M[2]);
                if (j.add(C).add(I).width("auto").height("auto").removeClass("evm_fancybox-tmp"), e = g(C.outerWidth(!0) - C.width()), t = g(C.outerHeight(!0) - C.height()), n = R + e, a = O + t, s = u(S) ? (y.w - n) * g(S) / 100 : S, o = u(W) ? (y.h - a) * g(W) / 100 : W, "iframe" === T.type) {
                    if (w = T.content, T.autoHeight && 1 === w.data("ready")) try {
                        w[0].contentWindow.document.location && (I.width(s).height(9999), b = w.contents().find("body"), B && b.css("overflow-x", "hidden"), o = b.outerHeight(!0))
                    } catch (E) {}
                } else(T.autoWidth || T.autoHeight) && (I.addClass("evm_fancybox-tmp"), T.autoWidth || I.width(s), T.autoHeight || I.height(o), T.autoWidth && (s = I.width()), T.autoHeight && (o = I.height()), I.removeClass("evm_fancybox-tmp"));
                if (S = g(s), W = g(o), d = s / o, H = g(u(H) ? g(H, "w") - n : H), D = g(u(D) ? g(D, "w") - n : D), L = g(u(L) ? g(L, "h") - a : L), A = g(u(A) ? g(A, "h") - a : A), l = D, c = A, T.fitToView && (D = Math.min(y.w - n, D), A = Math.min(y.h - a, A)), f = y.w - R, v = y.h - O, T.aspectRatio ? (S > D && (S = D, W = g(S / d)), W > A && (W = A, S = g(W * d)), H > S && (S = H, W = g(S / d)), L > W && (W = L, S = g(W * d))) : (S = Math.max(H, Math.min(S, D)), T.autoHeight && "iframe" !== T.type && (I.width(S), W = I.height()), W = Math.max(L, Math.min(W, A))), T.fitToView)
                    if (I.width(S).height(W), j.width(S + e), h = j.width(), p = j.height(), T.aspectRatio)
                        for (;
                            (h > f || p > v) && S > H && W > L && !(x++ > 19);) W = Math.max(L, Math.min(A, W - 10)), S = g(W * d), H > S && (S = H, W = g(S / d)), S > D && (S = D, W = g(S / d)), I.width(S).height(W), j.width(S + e), h = j.width(), p = j.height();
                    else S = Math.max(H, Math.min(S, S - (h - f))), W = Math.max(L, Math.min(W, W - (p - v)));
                B && "auto" === P && o > W && f > S + e + B && (S += B), I.width(S).height(W), j.width(S + e), h = j.width(), p = j.height(), _ = (h > f || p > v) && S > H && W > L, k = T.aspectRatio ? l > S && c > W && s > S && o > W : (l > S || c > W) && (s > S || o > W), i.extend(T, {
                    dim: {
                        width: m(h),
                        height: m(p)
                    },
                    origWidth: s,
                    origHeight: o,
                    canShrink: _,
                    canExpand: k,
                    wPadding: e,
                    hPadding: t,
                    wrapSpace: p - C.outerHeight(!0),
                    skinSpace: C.height() - W
                }), !w && T.autoHeight && W > L && A > W && !k && I.height("auto")
            },
            _getPosition: function(e) {
                var t = r.current,
                    i = r.getViewport(),
                    n = t.margin,
                    a = r.wrap.width() + n[1] + n[3],
                    s = r.wrap.height() + n[0] + n[2],
                    o = {
                        position: "absolute",
                        top: n[0],
                        left: n[3]
                    };
                return t.autoCenter && t.fixed && !e && s <= i.h && a <= i.w ? o.position = "fixed" : t.locked || (o.top += i.y, o.left += i.x), o.top = m(Math.max(o.top, o.top + (i.h - s) * t.topRatio)), o.left = m(Math.max(o.left, o.left + (i.w - a) * t.leftRatio)), o
            },
            _afterZoomIn: function() {
                var e = r.current;
                e && (r.isOpen = r.isOpened = !0, r.wrap.css("overflow", "visible").addClass("evm_fancybox-opened"), r.update(), (e.closeClick || e.nextClick && r.group.length > 1) && r.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                    i(t.target).is("a") || i(t.target).parent().is("a") || (t.preventDefault(), r[e.closeClick ? "close" : "next"]())
                }), e.closeBtn && i(e.tpl.closeBtn).appendTo(r.skin).bind("click.fb", function(e) {
                    e.preventDefault(), r.close()
                }), e.arrows && r.group.length > 1 && ((e.loop || e.index > 0) && i(e.tpl.prev).appendTo(r.outer).bind("click.fb", r.prev), (e.loop || e.index < r.group.length - 1) && i(e.tpl.next).appendTo(r.outer).bind("click.fb", r.next)), r.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? r.opts.autoPlay && !r.player.isActive && (r.opts.autoPlay = !1, r.play()) : r.play(!1))
            },
            _afterZoomOut: function(e) {
                e = e || r.current, i(".evm_fancybox-wrap").trigger("onReset").remove(), i.extend(r, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), r.trigger("afterClose", e)
            }
        }), r.transitions = {
            getOrigPosition: function() {
                var e = r.current,
                    t = e.element,
                    i = e.orig,
                    n = {},
                    a = 50,
                    s = 50,
                    o = e.hPadding,
                    l = e.wPadding,
                    c = r.getViewport();
                return !i && e.isDom && t.is(":visible") && (i = t.find("img:first"), i.length || (i = t)), h(i) ? (n = i.offset(), i.is("img") && (a = i.outerWidth(), s = i.outerHeight())) : (n.top = c.y + (c.h - s) * e.topRatio, n.left = c.x + (c.w - a) * e.leftRatio), ("fixed" === r.wrap.css("position") || e.locked) && (n.top -= c.y, n.left -= c.x), n = {
                    top: m(n.top - o * e.topRatio),
                    left: m(n.left - l * e.leftRatio),
                    width: m(a + l),
                    height: m(s + o)
                }
            },
            step: function(e, t) {
                var i, n, a, s = t.prop,
                    o = r.current,
                    l = o.wrapSpace,
                    c = o.skinSpace;
                ("width" === s || "height" === s) && (i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), r.isClosing && (i = 1 - i), n = "width" === s ? o.wPadding : o.hPadding, a = e - n, r.skin[s](g("width" === s ? a : a - l * i)), r.inner[s](g("width" === s ? a : a - l * i - c * i)))
            },
            zoomIn: function() {
                var e = r.current,
                    t = e.pos,
                    n = e.openEffect,
                    a = "elastic" === n,
                    s = i.extend({
                        opacity: 1
                    }, t);
                delete s.position, a ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === n && (t.opacity = .1), r.wrap.css(t).animate(s, {
                    duration: "none" === n ? 0 : e.openSpeed,
                    easing: e.openEasing,
                    step: a ? this.step : null,
                    complete: r._afterZoomIn
                })
            },
            zoomOut: function() {
                var e = r.current,
                    t = e.closeEffect,
                    i = "elastic" === t,
                    n = {
                        opacity: .1
                    };
                i && (n = this.getOrigPosition(), e.closeOpacity && (n.opacity = .1)), r.wrap.animate(n, {
                    duration: "none" === t ? 0 : e.closeSpeed,
                    easing: e.closeEasing,
                    step: i ? this.step : null,
                    complete: r._afterZoomOut
                })
            },
            changeIn: function() {
                var e, t = r.current,
                    i = t.nextEffect,
                    n = t.pos,
                    a = {
                        opacity: 1
                    },
                    s = r.direction,
                    o = 200;
                n.opacity = .1, "elastic" === i && (e = "down" === s || "up" === s ? "top" : "left", "down" === s || "right" === s ? (n[e] = m(g(n[e]) - o), a[e] = "+=" + o + "px") : (n[e] = m(g(n[e]) + o), a[e] = "-=" + o + "px")), "none" === i ? r._afterZoomIn() : r.wrap.css(n).animate(a, {
                    duration: t.nextSpeed,
                    easing: t.nextEasing,
                    complete: r._afterZoomIn
                })
            },
            changeOut: function() {
                var e = r.previous,
                    t = e.prevEffect,
                    n = {
                        opacity: .1
                    },
                    a = r.direction,
                    s = 200;
                "elastic" === t && (n["down" === a || "up" === a ? "top" : "left"] = ("up" === a || "left" === a ? "-" : "+") + "=" + s + "px"), e.wrap.animate(n, {
                    duration: "none" === t ? 0 : e.prevSpeed,
                    easing: e.prevEasing,
                    complete: function() {
                        i(this).trigger("onReset").remove()
                    }
                })
            }
        }, r.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !d,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            el: i("html"),
            create: function(e) {
                e = i.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = i('<div class="evm_fancybox-overlay"></div>').appendTo(r.coming ? r.coming.parent : e.parent), this.fixed = !1, e.fixed && r.defaults.fixed && (this.overlay.addClass("evm_fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(e) {
                var t = this;
                e = i.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (s.bind("resize.overlay", i.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
                    return i(e.target).hasClass("evm_fancybox-overlay") ? (r.isActive ? r.close() : t.close(), !1) : void 0
                }), this.overlay.css(e.css).show()
            },
            close: function() {
                var e, t;
                s.unbind("resize.overlay"), this.el.hasClass("evm_fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), e = s.scrollTop(), t = s.scrollLeft(), this.el.removeClass("evm_fancybox-lock"), s.scrollTop(e).scrollLeft(t)), i(".evm_fancybox-overlay").remove().hide(), i.extend(this, {
                    overlay: null,
                    fixed: !1
                })
            },
            update: function() {
                var e, i = "100%";
                this.overlay.width(i).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), o.width() > e && (i = o.width())) : o.width() > s.width() && (i = o.width()), this.overlay.width(i).height(o.height())
            },
            onReady: function(e, t) {
                var n = this.overlay;
                i(".evm_fancybox-overlay").stop(!0, !0), n || this.create(e), e.locked && this.fixed && t.fixed && (n || (this.margin = o.height() > s.height() ? i("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1), e.showEarly === !0 && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(e, t) {
                var n, a;
                t.locked && (this.margin !== !1 && (i("*").filter(function() {
                    return "fixed" === i(this).css("position") && !i(this).hasClass("evm_fancybox-overlay") && !i(this).hasClass("evm_fancybox-wrap")
                }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = s.scrollTop(), a = s.scrollLeft(), this.el.addClass("evm_fancybox-lock"), s.scrollTop(n).scrollLeft(a)), this.open(e)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(e) {
                this.overlay && !r.coming && this.overlay.fadeOut(e.speedOut, i.proxy(this.close, this))
            }
        }, r.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(e) {
                var t, n, a = r.current,
                    s = a.title,
                    o = e.type;
                if (i.isFunction(s) && (s = s.call(a.element, a)), p(s) && "" !== i.trim(s)) {
                    switch (t = i('<div class="evm_fancybox-title evm_fancybox-title-' + o + '-wrap">' + s + "</div>"), o) {
                        case "inside":
                            n = r.skin;
                            break;
                        case "outside":
                            n = r.wrap;
                            break;
                        case "over":
                            n = r.inner;
                            break;
                        default:
                            n = r.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), r.current.margin[2] += Math.abs(g(t.css("margin-bottom")))
                    }
                    t["top" === e.position ? "prependTo" : "appendTo"](n)
                }
            }
        }, i.fn.evmfancybox = function(e) {
            var t, n = i(this),
                a = this.selector || "",
                s = function(s) {
                    var o, l, c = i(this).blur(),
                        d = t;
                    s.ctrlKey || s.altKey || s.shiftKey || s.metaKey || c.is(".evm_fancybox-wrap") || (o = e.groupAttr || "data-fancybox-group", l = c.attr(o), l || (o = "rel", l = c.get(0)[o]), l && "" !== l && "nofollow" !== l && (c = a.length ? i(a) : n, c = c.filter("[" + o + '="' + l + '"]'), d = c.index(this)), e.index = d, r.open(c, e) !== !1 && s.preventDefault())
                };
            return e = e || {}, t = e.index || 0, a && e.live !== !1 ? o.undelegate(a, "click.fb-start").delegate(a + ":not('.fancybox-item, .evm_fancybox-nav')", "click.fb-start", s) : n.unbind("click.fb-start").bind("click.fb-start", s), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, o.ready(function() {
            var t, s;
            i.scrollbarWidth === n && (i.scrollbarWidth = function() {
                var e = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    t = e.children(),
                    n = t.innerWidth() - t.height(99).innerWidth();
                return e.remove(), n
            }), i.support.fixedPosition === n && (i.support.fixedPosition = function() {
                var e = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                    t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
                return e.remove(), t
            }()), i.extend(r.defaults, {
                scrollbarWidth: i.scrollbarWidth(),
                fixed: i.support.fixedPosition,
                parent: i("body")
            }), t = i(e).width(), a.addClass("evm_fancybox-lock-test"), s = i(e).width(), a.removeClass("evm_fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (s - t) + "px;}</style>").appendTo("head")
        })
    }(window, document, jQuery);
}
var bootstrap_enabled = (typeof $().modal == 'function');
if (Shopify.shop != 'wyselondon-co-uk.myshopify.com') {
    //forever-21-dubai.myshopify.com
    $("body").append('<script src="https://d3emlu4sl5epij.cloudfront.net/evmshopifyapps/lookbook/masonry.pkgd.min.js"></script>');;
    window.EVMModernizr = function(a, b, c) {
            function x(a) {
                j.cssText = a
            }

            function y(a, b) {
                return x(prefixes.join(a + ";") + (b || ""))
            }

            function z(a, b) {
                return typeof a === b
            }

            function A(a, b) {
                return !!~("" + a).indexOf(b)
            }

            function B(a, b) {
                for (var d in a) {
                    var e = a[d];
                    if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
                }
                return !1
            }

            function C(a, b, d) {
                for (var e in a) {
                    var f = b[a[e]];
                    if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
                }
                return !1
            }

            function D(a, b, c) {
                var d = a.charAt(0).toUpperCase() + a.slice(1),
                    e = (a + " " + n.join(d + " ") + d).split(" ");
                return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
            }
            var d = "2.6.2",
                e = {},
                f = !0,
                g = b.documentElement,
                h = "modernizr",
                i = b.createElement(h),
                j = i.style,
                k, l = {}.toString,
                m = "Webkit Moz O ms",
                n = m.split(" "),
                o = m.toLowerCase().split(" "),
                p = {},
                q = {},
                r = {},
                s = [],
                t = s.slice,
                u, v = {}.hasOwnProperty,
                w;
            !z(v, "undefined") && !z(v.call, "undefined") ? w = function(a, b) {
                return v.call(a, b)
            } : w = function(a, b) {
                return b in a && z(a.constructor.prototype[b], "undefined")
            }, Function.prototype.bind || (Function.prototype.bind = function(b) {
                var c = this;
                if (typeof c != "function") throw new TypeError;
                var d = t.call(arguments, 1),
                    e = function() {
                        if (this instanceof e) {
                            var a = function() {};
                            a.prototype = c.prototype;
                            var f = new a,
                                g = c.apply(f, d.concat(t.call(arguments)));
                            return Object(g) === g ? g : f
                        }
                        return c.apply(b, d.concat(t.call(arguments)))
                    };
                return e
            }), p.cssanimations = function() {
                return D("animationName")
            };
            for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
            return e.addTest = function(a, b) {
                    if (typeof a == "object")
                        for (var d in a) w(a, d) && e.addTest(d, a[d]);
                    else {
                        a = a.toLowerCase();
                        if (e[a] !== c) return e;
                        b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                    }
                    return e
                }, x(""), i = k = null,
                function(a, b) {
                    function k(a, b) {
                        var c = a.createElement("p"),
                            d = a.getElementsByTagName("head")[0] || a.documentElement;
                        return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                    }

                    function l() {
                        var a = r.elements;
                        return typeof a == "string" ? a.split(" ") : a
                    }

                    function m(a) {
                        var b = i[a[g]];
                        return b || (b = {}, h++, a[g] = h, i[h] = b), b
                    }

                    function n(a, c, f) {
                        c || (c = b);
                        if (j) return c.createElement(a);
                        f || (f = m(c));
                        var g;
                        return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                    }

                    function o(a, c) {
                        a || (a = b);
                        if (j) return a.createDocumentFragment();
                        c = c || m(a);
                        var d = c.frag.cloneNode(),
                            e = 0,
                            f = l(),
                            g = f.length;
                        for (; e < g; e++) d.createElement(f[e]);
                        return d
                    }

                    function p(a, b) {
                        b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                            return r.shivMethods ? n(c, a, b) : b.createElem(c)
                        }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                        }) + ");return n}")(r, b.frag)
                    }

                    function q(a) {
                        a || (a = b);
                        var c = m(a);
                        return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
                    }
                    var c = a.html5 || {},
                        d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                        e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                        f, g = "_html5shiv",
                        h = 0,
                        i = {},
                        j;
                    (function() {
                        try {
                            var a = b.createElement("a");
                            a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
                                b.createElement("a");
                                var a = b.createDocumentFragment();
                                return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                            }()
                        } catch (c) {
                            f = !0, j = !0
                        }
                    })();
                    var r = {
                        elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                        shivCSS: c.shivCSS !== !1,
                        supportsUnknownElements: j,
                        shivMethods: c.shivMethods !== !1,
                        type: "default",
                        shivDocument: q,
                        createElement: n,
                        createDocumentFragment: o
                    };
                    a.html5 = r, q(b)
                }(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function(a) {
                    return B([a])
                }, e.testAllProps = D, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
        }(this, this.document),
        function(a, b, c) {
            function d(a) {
                return "[object Function]" == o.call(a)
            }

            function e(a) {
                return "string" == typeof a
            }

            function f() {}

            function g(a) {
                return !a || "loaded" == a || "complete" == a || "uninitialized" == a
            }

            function h() {
                var a = p.shift();
                q = 1, a ? a.t ? m(function() {
                    ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
                }, 0) : (a(), h()) : q = 0
            }

            function i(a, c, d, e, f, i, j) {
                function k(b) {
                    if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                        "img" != a && m(function() {
                            t.removeChild(l)
                        }, 50);
                        for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                    }
                }
                var j = j || B.errorTimeout,
                    l = b.createElement(a),
                    o = 0,
                    r = 0,
                    u = {
                        t: d,
                        s: c,
                        e: f,
                        a: i,
                        x: j
                    };
                1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                    k.call(this, r)
                }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
            }

            function j(a, b, c, d, f) {
                return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
            }

            function k() {
                var a = B;
                return a.loader = {
                    load: j,
                    i: 0
                }, a
            }
            var l = b.documentElement,
                m = a.setTimeout,
                n = b.getElementsByTagName("script")[0],
                o = {}.toString,
                p = [],
                q = 0,
                r = "MozAppearance" in l.style,
                s = r && !!b.createRange().compareNode,
                t = s ? l : n.parentNode,
                l = a.opera && "[object Opera]" == o.call(a.opera),
                l = !!b.attachEvent && !l,
                u = r ? "object" : l ? "script" : "img",
                v = l ? "script" : u,
                w = Array.isArray || function(a) {
                    return "[object Array]" == o.call(a)
                },
                x = [],
                y = {},
                z = {
                    timeout: function(a, b) {
                        return b.length && (a.timeout = b[0]), a
                    }
                },
                A, B;
            B = function(a) {
                function b(a) {
                    var a = a.split("!"),
                        b = x.length,
                        c = a.pop(),
                        d = a.length,
                        c = {
                            url: c,
                            origUrl: c,
                            prefixes: a
                        },
                        e, f, g;
                    for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                    for (f = 0; f < b; f++) c = x[f](c);
                    return c
                }

                function g(a, e, f, g, h) {
                    var i = b(a),
                        j = i.autoCallback;
                    i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                        k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                    })))
                }

                function h(a, b) {
                    function c(a, c) {
                        if (a) {
                            if (e(a)) c || (j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            }), g(a, j, b, 0, h);
                            else if (Object(a) === a)
                                for (n in m = function() {
                                        var b = 0,
                                            c;
                                        for (c in a) a.hasOwnProperty(c) && b++;
                                        return b
                                    }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                    var a = [].slice.call(arguments);
                                    k.apply(this, a), l()
                                } : j[n] = function(a) {
                                    return function() {
                                        var b = [].slice.call(arguments);
                                        a && a.apply(this, b), l()
                                    }
                                }(k[n])), g(a[n], j, b, n, h))
                        } else !c && l()
                    }
                    var h = !!a.test,
                        i = a.load || a.both,
                        j = a.callback || f,
                        k = j,
                        l = a.complete || f,
                        m, n;
                    c(h ? a.yep : a.nope, !!i), i && c(i)
                }
                var i, j, l = this.yepnope.loader;
                if (e(a)) g(a, 0, l, 0);
                else if (w(a))
                    for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
                else Object(a) === a && h(a, l)
            }, B.addPrefix = function(a, b) {
                z[a] = b
            }, B.addFilter = function(a) {
                x.push(a)
            }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
                b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
            }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
                var k = b.createElement("script"),
                    l, o, e = e || B.errorTimeout;
                k.src = a;
                for (o in d) k.setAttribute(o, d[o]);
                c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                    !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
                }, m(function() {
                    l || (l = 1, c(1))
                }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
            }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
                var e = b.createElement("link"),
                    j, c = i ? h : c || f;
                e.href = a, e.rel = "stylesheet", e.type = "text/css";
                for (j in d) e.setAttribute(j, d[j]);
                g || (n.parentNode.insertBefore(e, n), m(c, 0))
            }
        }(this, document), EVMModernizr.load = function() {
            yepnope.apply(window, [].slice.call(arguments, 0))
        };
}
window.addEventListener("load", function() {
    $("body").append('<link href="https://d3emlu4sl5epij.cloudfront.net/evmshopifyapps/lookbook/lookbook_embed.css?ver1.0" rel="stylesheet" type="text/css" media="all" />');
    ///$("body").append('<link href="https://apps.expertvillagemedia.com/shopify/evm-lookbook/lookbook_embed.css" rel="stylesheet" type="text/css" media="all" />');
    $('<link rel="stylesheet" type="text/css" href="https://d3emlu4sl5epij.cloudfront.net/evmshopifyapps/lookbook/fancybox.css">').appendTo('body');
    if (Shopify.shop == 'carlottagee.myshopify.com') {
        $('div[id^="evm-lookbook-"]').before('<div align="center" id="lookbookloaderImg" ><div class="evm_dotanimation"></div> <div class="evm_dotanimation" ></div> <div class="evm_dotanimation"></div> <div class="evm_dotanimation"></div> <div class="evm_dotanimation"></div></div>');
        $('<style>@keyframes scaling{ 0%, 100%{ transform: scale(0.2); background-color: #000; } 40%{ transform: scale(1); background-color: #000; } 50%{ transform: scale(1); background-color: #000; } } .evm_dotanimation{ height: 20px; width: 20px; border-radius:50%; transform: scale(0); background-color:red; animation: scaling 2.5s ease-in-out infinite; display: inline-block; margin:.5rem; } .evm_dotanimation:nth-child(0){ animation-delay:0s; } .evm_dotanimation:nth-child(1){ animation-delay:0.2s; } .evm_dotanimation:nth-child(2){ animation-delay:0.4s; } .evm_dotanimation:nth-child(3){ animation-delay:0.6s; } .evm_dotanimation:nth-child(4){ animation-delay:0.8s; } .evm_dotanimation:nth-child(5){ animation-delay:1s; }</style>').appendTo('body');
    } else {
        $('div[id^="evm-lookbook-"]').before('<div align="center" id="lookbookloaderImg" ><div align="center" class="cssload-fond"><div class="cssload-container-general"><div class="cssload-internal"><div class="cssload-ballcolor cssload-ball_1"></div></div><div class="cssload-internal"><div class="cssload-ballcolor cssload-ball_2"></div></div><div class="cssload-internal"><div class="cssload-ballcolor cssload-ball_3"></div></div><div class="cssload-internal"><div class="cssload-ballcolor cssload-ball_4"></div></div></div></div></div>');
    }

    proceed();
}, false);

function plusqty(c, e, f, g, h) {
    var a = $("#plus_" + c);
    if (!a.hasClass("disabled")) {
        var d = a.closest("div").find("input"),
            b = parseInt(d.val());
        b <= 100 ? (b += 1) : (b = 100),
            $(a).addClass("disabled"),
            $(a).html('<i class="fa fa-refresh fa-spin" style="font-size:11px;">'),
            $.ajax({
                type: "POST",
                url: "/cart/change.js",
                dataType: "json",
                data: {
                    quantity: b,
                    id: c
                },
                success: function(c) {
                    $(a).removeClass("disabled"), $(".evmcartplus-btn").html('<i class="fa fa-plus" style="font-size:11px;">');
                    var g = $(".cartsubtotal").html();
                    $(".cartsubtotal").html(""),
                        jQuery.getJSON("/cart.js", function(i) {
                            var a = i.original_total_price / 100;
                            (a = a.toFixed(2)),
                            (6023 == h || 6061 == h) && ((a *= 1.1), (a = (internationalNumberFormat = new Intl.NumberFormat("en-US")).format(a))),
                            g === e + "" + a ?
                                ((b -= 1), $(".cartmsg").fadeIn(), $(".cartmsg").html('<div class="alert alert-danger">Inventory is not available.</div>')) :
                                ($(".cartmsg").fadeIn(), $(".cartmsg").html('<div class="alert alert-success">' + f + ' <span class="added_msg">added to your Cart.</span> </div>')),
                                d.val(b),
                                $(".cartsubtotal").append(e + "" + a),
                                $(".CartCost .money").text(e + "" + a + " USD");
                            var c = $(".CartCount").text(),
                                j = c ? parseInt(c) : 0;
                            $(".CartCount").text(j + 1);
                            $(".cart-count").html(i.item_count);
                            $(".cart-count").removeClass("hidden-count");
                            $(".cart-count").css("display", "inline-block");

                            // if(d=="nina-store-abbigliamento.myshopify.com"){
                            $(".cart-link__bubble-num").html(i.item_count);
                            $("body").addClass("cart-has-items");
                            $(".cart-link__bubble-num").css("display", "block");
                        }),
                        setTimeout(function() {
                            $(".cartmsg").fadeOut();
                        }, 2e3);
                },
                error: function(a) {},
            });
    }
}

function minusqty(c, f, g, h, i) {
    var b = $("#minus_" + c);
    if (!b.hasClass("disabled")) {
        $(b).html('<i class="fa fa-refresh fa-spin" style="font-size:11px;">'), $(b).addClass("disabled");
        var d = b.parent().find("input"),
            a = parseInt(d.val());
        a > 1 ? (a -= 1) : (a = 0), d.val(a);
        var e = c;
        $.ajax({
            type: "POST",
            url: "/cart/change.js",
            dataType: "json",
            data: {
                quantity: a,
                id: e
            },
            success: function(c) {
                0 == a && $("#cartID" + e).fadeOut(),
                    $(".cartmsg").fadeIn(),
                    $(".cartmsg").html('<div class="alert alert-success">' + g + " removed from your Cart.</div>"),
                    $(".cartsubtotal").html(""),
                    $(".evmcartminus-btn").html('<i class="fa fa-minus" style="font-size:11px;">'),
                    jQuery.getJSON("/cart.js", function(d) {
                        $(b).removeClass("disabled");
                        var a = d.original_total_price / 100;
                        if (((a = a.toFixed(2)), (6023 == i || 6061 == i) && ((a *= 1.1), (a = (internationalNumberFormat = new Intl.NumberFormat("en-US")).format(a))), a <= 0))
                            $(".evmshopping-cartsubtotal").html("Empty Cart"), $(".btn_checkout").attr("disabled", "true");
                        else {
                            $(".cartsubtotal").append(f + "" + a), $(".CartCost .money").text(f + "" + a + " USD");
                            var c = $(".CartCount").text(),
                                e = (c ? parseInt(c) : 0) + 1;
                            $(".CartCount").text(e);
                            $(".cart-count").html(i.item_count);
                            $(".cart-count").removeClass("hidden-count");
                            $(".cart-count").css("display", "inline-block");

                            // if(d=="nina-store-abbigliamento.myshopify.com"){
                            $(".cart-link__bubble-num").html(d.item_count);
                            $("body").addClass("cart-has-items");
                            $(".cart-link__bubble-num").css("display", "block");
                        }
                    }),
                    setTimeout(function() {
                        $(".cartmsg").fadeOut();
                    }, 2e3);
            },
        });
    }
}

function deletecartitem(a, c, d, e, f) {
    var b = a;
    $.ajax({
        type: "POST",
        url: "/cart/change.js",
        dataType: "json",
        data: {
            quantity: 0,
            id: b
        },
        success: function(a) {
            $(".cartmsg").fadeIn(),
                $(".cartmsg").html('<div class="alert alert-success">' + d + " removed from your Cart.</div>"),
                $(".cartsubtotal").html(""),
                jQuery.getJSON("/cart.js", function(g) {
                    $("#cartID" + b).fadeOut();
                    var a = g.original_total_price / 100;
                    if (((a = a.toFixed(2)), (6023 == f || 6061 == f) && ((a *= 1.1), (a = (internationalNumberFormat = new Intl.NumberFormat("en-US")).format(a))), a <= 0))
                        $(".evmshopping-cartsubtotal").html("Empty Cart"), $(".btn_checkout").attr("disabled", "true");
                    else {
                        $(".cartsubtotal").append(c + "" + a + e), $(".CartCost .money").text(c + "" + a + " USD");
                        var d = $(".CartCount").text(),
                            h = (d ? parseInt(d) : 0) + 1;
                        $(".CartCount").text(h);
                    }
                }),
                setTimeout(function() {
                    $(".cartmsg").fadeOut();
                }, 2e3);
        },
    });
}

function changecartoptions(a, b, c, d, e) {
    var f = "";
    $(".addtocartwithvariant").html("Add to Cart"),
        $(".addtocartwithvariant").removeAttr("disabled"),
        (selecttext1 = ""),
        $.ajax({
            url: "/products/" + a + ".js",
            dataType: "json",
            success: function(a) {
                $(".selectedoptions").each(function(a) {
                        if ("radio" == c) {
                            if (void 0 != $("input[name=option" + a + "]:checked").val() && "undefined" != $("input[name=option" + a + "]:checked").val()) {
                                var b = $("input[name=option" + a + "]:checked").val() + " / ";
                                selecttext1 = selecttext1.concat(b);
                            }
                        } else if (void 0 != $(this).val() && "undefined" != $(this).val()) {
                            var b = $(this).val() + " / ";
                            selecttext1 = selecttext1.concat(b);
                        }
                    }),
                    (selecttext1 = selecttext1.slice(0, -3));
                var g = 0;
                $(a.variants).each(function(b, a) {
                        a.title == selecttext1 && ((g = 1), (f = a.id), (productroundPrice = a.price), (featuredimg = ""), $.inArray("featured_image.src", a) > -1 && (featuredimg = a.featured_image.src));
                    }),
                    1 == g ?
                    (featuredimg && $(".evmcart-product-image").attr("src", featuredimg),
                        $(".addtocartwithvariant").html("Add to Cart"),
                        $(".addtocartwithvariant").removeAttr("disabled"),
                        (productroundPrice = (productroundPrice / 100).toFixed(2)),
                        (6023 == e || 6061 == e) && ((productroundPrice *= 1.1), (productroundPrice = (internationalNumberFormat = new Intl.NumberFormat("en-US")).format(productroundPrice))),
                        6045 == e && (productroundPrice = parseFloat(productroundPrice)),
                        $(".evmcart-product-price").html(b + productroundPrice + d),
                        $(".addtocartwithvariant").attr("evm-product-variant-id", f)) :
                    ($(".addtocartwithvariant").html("Not Available"), $(".addtocartwithvariant").attr("disabled", "true"));
            },
        });
}

function changeimg(a) {
    var b = $("#fimg" + a).attr("src");
    $(".evmcart-product-image").attr("src", b), $(".smallimg").css("border", "1px solid #999"), $("#fimg" + a).css("border", "1px solid #000");
}

function proceed() {
    var URL = "https://apps.expertvillagemedia.com/shopify/evm-lookbook/evm-lookbook-embed.php";
    var ShopId = "25home.myshopify.com";
    GalleryId = "9547";
    ProductId = "";
    // var scripts = document.getElementsByTagName('script');
    // for (var i = 0, l = scripts.length; i < l; i++) {
    //     if (scripts[i].getAttribute('src') == "https://apps.expertvillagemedia.com/shopify/evm-lookbook/embed.js") {
    //         if (scripts[i].getAttribute('data-shop-id') != null) {
    //             ShopId = scripts[i].getAttribute('data-shop-id');
    //         }
    //         if (scripts[i].getAttribute('data-gallery-id') != null) {
    //             GalleryId = scripts[i].getAttribute('data-gallery-id');
    //         }
    //         if (scripts[i].getAttribute('evmlook-product-id') != null) {
    //             ProductId = scripts[i].getAttribute('evmlook-product-id');
    //         }
    //     }
    // }
    var start = '0';
    get_data(ShopId, GalleryId, URL, start, ProductId);
}

function get_data(ShopId, GalleryId, URL, start, ProductId) {
    // if(Shopify.shop =='marmar-copenhagen.myshopify.com') { $("#lookbookloaderImg").hide(); return true; }
    $("body").append('<link href="https://d3emlu4sl5epij.cloudfront.net/evmshopifyapps/lookbook/bootstrap.min.css" rel="stylesheet" type="text/css" media="all" />');
    if (ProductId !== "") {
        var URL = "https://apps.expertvillagemedia.com/shopify/evm-lookbook/evm-lookbook-embed_product.php";
    }
    $.ajax({
        url: URL,
        dataType: "jsonp",
        jsonp: "evmcallback",
        data: {
            ShopId: ShopId,
            GalleryId: GalleryId,
            start: start,
            ProductId: ProductId
        },
        success: function(data) {
            // if(Shopify.shop =='marmar-copenhagen.myshopify.com') { $("#lookbookloaderImg").hide(); return true; }   
            if (data.msg == 'No data found') {
                $("#lookbookloaderImg").hide();
                return true;
            }
            // console.log(data,'datadata')

            $('<style>.page-container, #site-canvas{transform:none;}</style>').appendTo('body');
            $('<style>.noIE .evmanimated{transform:none!important; } .Rte .evm-lookbook .EVMLookbookgrid .evm_grid:hover img,.Rte .evm-lookbook .EVMLookbookgrid .evm_grid img{margin-top: 0px !important; margin-bottom: 0px !important; }.EVMLookbookgrid li:before{display:none;}</style>').appendTo('body');
            $('<style>.evm_grid_content a img {max-width: 100%!important;margin: 0!important; float: left; width:100%;}.lookbook_modalclose{cursor:pointer; float: right;font-size: 2rem;font-weight: 700;line-height: 1;color: #505b69;text-shadow: 0 1px 0 #fff;margin-top: -30px; }  .evm_viewcart{font-size: 14px;font-weight: 500;font-style: normal;font-stretch: normal;line-height: normal;letter-spacing: normal;text-align: center;color: #ffffff;background: black;border-radius: 3px;text-transform: none;padding: 9px;border: solid 2px #333333;}</style>').appendTo('body');
            var store = data.store;
            var iname = data.iname;
            var imgNames = data.img_name;
            var shopname = data.shop_name;
            var imgId = data.img_id;
            var img_caption = data.img_caption;
            var tag_products = data.tag_products;
            var icon_background = data.icon_background;
            var icon_border_enable = data.icon_border_enable;
            var grid_with_border = data.grid_with_border;
            var slider_item = data.slider_item;
            var view = data.view;
            var collage_style = data.collage_style;
            var show_captions = data.show_captions;
            var shop_now = data.shop_now;
            var shop_now_custom_url = data.shop_now_custom_url;
            var grayscale = data.grayscale;
            var no_of_img = data.no_of_img;
            var img_heading_location = data.img_heading_location;
            var font_color = data.font_color;
            var plus_font_color = data.plus_font_color;
            var plus_bg_color = data.plus_bg_color;
            var font_size = data.font_size;
            var grid_width = data.grid_width;
            var grid_margin = data.grid_margin;
            var currency = data.currency;
            var enable_auto_rotate = data.enable_auto_rotate;
            var show_arrow_on_hover = data.show_arrow_on_hover;
            var start_limit = data.start_limit;
            var total_records = data.total_records;
            var display_next = data.display_next;
            var custom_css = data.custom_css;
            var enable_hotspot = data.enable_hotspot;
            var animation_style = "";
            var enable_pager = data.enable_pager;
            var enable_loadmore = data.enable_loadmore;
            var hovereffectstatus = data.grid_hover_effect;
            var overlay_color = "#34343c29";
            var hoverclass = "";
            var hovercontentshopnow = "";
            var hovercontent = "";
            var mobile_column = data.mobile_column;
            var shop_now_hover = data.shop_now_hover;
            var anchor_target = data.anchor_target;
            if (view != 'list') {
                if (hovereffectstatus == "true") {
                    $('<link rel="stylesheet" type="text/css" href="https://d3emlu4sl5epij.cloudfront.net/evmshopifyapps/lookbook/imagehover.css">').appendTo('body');
                    var overlay_color = "#34343c4a";
                    var hoverclass = "imghvr-push-right";
                    var hovercontentshopnow = "<span class='lookbook-overlay-content sshop_now'>" + shop_now_hover + "</span>";
                    var hovercontent = "<span class='lookbook-overlay-content'><i class='fa fa-search'></i></span>";
                }
                $('<style>.lookbook-overlay-content .fa { color: #FFFFFF; font-size: 22px; } .lookbook-overlay { position: absolute; opacity: 0.9; text-align: center;  background-color: #222; color:#fff; }  .lookbook-overlay-content{position: relative; top: 40%; float: left; width: 100%; text-align: center}.sshop_now{background-color: #ffffff08; color: #FFF; width: auto; padding: 4px; margin: 6px auto; left: 35%; border: 2px solid; border-radius: 4px;z-index:99;}.evm_tagged_img{overflow: hidden;}  .evm_grid img { max-width: 100%; -moz-transition: all .9s; -webkit-transition: all .9s; transition: all .9s; }.evm_grid:hover img { -webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1) }.evm_fancybox-overlay_disabledbg{background:none !important;}  .evm_fancybox-overlay_disabled {background:none;overflow:hidden; pointer-events: none; -webkit-transform: translate(-20%, 0) scale(0.10); -moz-transform: translate(-20%, 0) scale(0.10); transform: translate(-20%, 0) scale(0.8);  -webkit-transition: all 0.6s ease; -moz-transition:all 0.6s ease; -o-transition:all 0.6s ease; } </style>').appendTo('body');
            }
            if ($(".img").evmfancybox) {} else { //Fancybox box JS				    
                ! function(e, t, i, n) {
                    "use strict";
                    var a = i("html"),
                        s = i(e),
                        o = i(t),
                        r = i.evmfancybox = function() {
                            r.open.apply(this, arguments)
                        },
                        l = navigator.userAgent.match(/msie/i),
                        c = null,
                        d = t.createTouch !== n,
                        h = function(e) {
                            return e && e.hasOwnProperty && e instanceof i
                        },
                        p = function(e) {
                            return e && "string" === i.type(e)
                        },
                        u = function(e) {
                            return p(e) && e.indexOf("%") > 0
                        },
                        f = function(e) {
                            return e && !(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
                        },
                        g = function(e, t) {
                            var i = parseInt(e, 10) || 0;
                            return t && u(e) && (i = r.getViewport()[t] / 100 * i), Math.ceil(i)
                        },
                        m = function(e, t) {
                            return g(e, t) + "px"
                        };
                    i.extend(r, {
                        version: "2.1.5",
                        defaults: {
                            padding: 15,
                            margin: 20,
                            width: 800,
                            height: 600,
                            minWidth: 100,
                            minHeight: 100,
                            maxWidth: 9999,
                            maxHeight: 9999,
                            pixelRatio: 1,
                            autoSize: !0,
                            autoHeight: !1,
                            autoWidth: !1,
                            autoResize: !0,
                            autoCenter: !d,
                            fitToView: !0,
                            aspectRatio: !1,
                            topRatio: .5,
                            leftRatio: .5,
                            scrolling: "auto",
                            wrapCSS: "",
                            arrows: !0,
                            closeBtn: !0,
                            closeClick: !1,
                            nextClick: !1,
                            mouseWheel: !0,
                            autoPlay: !1,
                            playSpeed: 3e3,
                            preload: 3,
                            modal: !1,
                            loop: !0,
                            ajax: {
                                dataType: "html",
                                headers: {
                                    "X-fancyBox": !0
                                }
                            },
                            iframe: {
                                scrolling: "auto",
                                preload: !0
                            },
                            swf: {
                                wmode: "transparent",
                                allowfullscreen: "true",
                                allowscriptaccess: "always"
                            },
                            keys: {
                                next: {
                                    13: "left",
                                    34: "up",
                                    39: "left",
                                    40: "up"
                                },
                                prev: {
                                    8: "right",
                                    33: "down",
                                    37: "right",
                                    38: "down"
                                },
                                close: [27],
                                play: [32],
                                toggle: [70]
                            },
                            direction: {
                                next: "left",
                                prev: "right"
                            },
                            scrollOutside: !0,
                            index: 0,
                            type: null,
                            href: null,
                            content: null,
                            title: null,
                            tpl: {
                                wrap: '<div class="evm_fancybox-wrap" tabIndex="-1"><div class="evm_fancybox-skin"><div class="evm_fancybox-outer"><div class="evm_fancybox-inner"></div></div></div></div>',
                                image: '<img class="evm_fancybox-image" src="{href}" alt="" />',
                                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="evm_fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                                error: '<p class="evm_fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                                closeBtn: '<a title="Close" class="fancybox-item evm_fancybox-close" href="javascript:void(0);">&times;</a>',
                                next: '<a title="Next" class="evm_fancybox-nav evm_fancybox-next" href="javascript:void(0);"><span></span></a>',
                                prev: '<a title="Previous" class="evm_fancybox-nav evm_fancybox-prev" href="javascript:void(0);"><span></span></a>'
                            },
                            openEffect: "fade",
                            openSpeed: 250,
                            openEasing: "swing",
                            openOpacity: !0,
                            openMethod: "zoomIn",
                            closeEffect: "fade",
                            closeSpeed: 250,
                            closeEasing: "swing",
                            closeOpacity: !0,
                            closeMethod: "zoomOut",
                            nextEffect: "elastic",
                            nextSpeed: 250,
                            nextEasing: "swing",
                            nextMethod: "changeIn",
                            prevEffect: "elastic",
                            prevSpeed: 250,
                            prevEasing: "swing",
                            prevMethod: "changeOut",
                            helpers: {
                                overlay: !0,
                                title: !0
                            },
                            onCancel: i.noop,
                            beforeLoad: i.noop,
                            afterLoad: i.noop,
                            beforeShow: i.noop,
                            afterShow: i.noop,
                            beforeChange: i.noop,
                            beforeClose: i.noop,
                            afterClose: i.noop
                        },
                        group: {},
                        opts: {},
                        previous: null,
                        coming: null,
                        current: null,
                        isActive: !1,
                        isOpen: !1,
                        isOpened: !1,
                        wrap: null,
                        skin: null,
                        outer: null,
                        inner: null,
                        player: {
                            timer: null,
                            isActive: !1
                        },
                        ajaxLoad: null,
                        imgPreload: null,
                        transitions: {},
                        helpers: {},
                        open: function(e, t) {
                            return e && (i.isPlainObject(t) || (t = {}), !1 !== r.close(!0)) ? (i.isArray(e) || (e = h(e) ? i(e).get() : [e]), i.each(e, function(a, s) {
                                var o, l, c, d, u, f, g, m = {};
                                "object" === i.type(s) && (s.nodeType && (s = i(s)), h(s) ? (m = {
                                    href: s.data("fancybox-href") || s.attr("href"),
                                    title: s.data("evm_fancybox-title") || s.attr("title"),
                                    isDom: !0,
                                    element: s
                                }, i.metadata && i.extend(!0, m, s.metadata())) : m = s), o = t.href || m.href || (p(s) ? s : null), l = t.title !== n ? t.title : m.title || "", c = t.content || m.content, d = c ? "html" : t.type || m.type, !d && m.isDom && (d = s.data("fancybox-type"), d || (u = s.prop("class").match(/fancybox\.(\w+)/), d = u ? u[1] : null)), p(o) && (d || (r.isImage(o) ? d = "image" : r.isSWF(o) ? d = "swf" : "#" === o.charAt(0) ? d = "inline" : p(s) && (d = "html", c = s)), "ajax" === d && (f = o.split(/\s+/, 2), o = f.shift(), g = f.shift())), c || ("inline" === d ? o ? c = i(p(o) ? o.replace(/.*(?=#[^\s]+$)/, "") : o) : m.isDom && (c = s) : "html" === d ? c = o : d || o || !m.isDom || (d = "inline", c = s)), i.extend(m, {
                                    href: o,
                                    type: d,
                                    content: c,
                                    title: l,
                                    selector: g
                                }), e[a] = m
                            }), r.opts = i.extend(!0, {}, r.defaults, t), t.keys !== n && (r.opts.keys = t.keys ? i.extend({}, r.defaults.keys, t.keys) : !1), r.group = e, r._start(r.opts.index)) : void 0
                        },
                        cancel: function() {
                            var e = r.coming;
                            e && !1 !== r.trigger("onCancel") && (r.hideLoading(), r.ajaxLoad && r.ajaxLoad.abort(), r.ajaxLoad = null, r.imgPreload && (r.imgPreload.onload = r.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), r.coming = null, r.current || r._afterZoomOut(e))
                        },
                        close: function(e) {
                            r.cancel(), !1 !== r.trigger("beforeClose") && (r.unbindEvents(), r.isActive && (r.isOpen && e !== !0 ? (r.isOpen = r.isOpened = !1, r.isClosing = !0, i(".fancybox-item, .evm_fancybox-nav").remove(), r.wrap.stop(!0, !0).removeClass("evm_fancybox-opened"), r.transitions[r.current.closeMethod]()) : (i(".evm_fancybox-wrap").stop(!0).trigger("onReset").remove(), r._afterZoomOut())))
                        },
                        play: function(e) {
                            var t = function() {
                                    clearTimeout(r.player.timer)
                                },
                                i = function() {
                                    t(), r.current && r.player.isActive && (r.player.timer = setTimeout(r.next, r.current.playSpeed))
                                },
                                n = function() {
                                    t(), o.unbind(".player"), r.player.isActive = !1, r.trigger("onPlayEnd")
                                },
                                a = function() {
                                    r.current && (r.current.loop || r.current.index < r.group.length - 1) && (r.player.isActive = !0, o.bind({
                                        "onCancel.player beforeClose.player": n,
                                        "onUpdate.player": i,
                                        "beforeLoad.player": t
                                    }), i(), r.trigger("onPlayStart"))
                                };
                            e === !0 || !r.player.isActive && e !== !1 ? a() : n()
                        },
                        next: function(e) {
                            var t = r.current;
                            t && (p(e) || (e = t.direction.next), r.jumpto(t.index + 1, e, "next"))
                        },
                        prev: function(e) {
                            var t = r.current;
                            t && (p(e) || (e = t.direction.prev), r.jumpto(t.index - 1, e, "prev"))
                        },
                        jumpto: function(e, t, i) {
                            var a = r.current;
                            a && (e = g(e), r.direction = t || a.direction[e >= a.index ? "next" : "prev"], r.router = i || "jumpto", a.loop && (0 > e && (e = a.group.length + e % a.group.length), e %= a.group.length), a.group[e] !== n && (r.cancel(), r._start(e)))
                        },
                        reposition: function(e, t) {
                            var n, a = r.current,
                                s = a ? a.wrap : null;
                            s && (n = r._getPosition(t), e && "scroll" === e.type ? (delete n.position, s.stop(!0, !0).animate(n, 200)) : (s.css(n), a.pos = i.extend({}, a.dim, n)))
                        },
                        update: function(e) {
                            var t = e && e.type,
                                i = !t || "orientationchange" === t;
                            i && (clearTimeout(c), c = null), r.isOpen && !c && (c = setTimeout(function() {
                                var n = r.current;
                                n && !r.isClosing && (r.wrap.removeClass("evm_fancybox-tmp"), (i || "load" === t || "resize" === t && n.autoResize) && r._setDimension(), "scroll" === t && n.canShrink || r.reposition(e), r.trigger("onUpdate"), c = null)
                            }, i && !d ? 0 : 300))
                        },
                        toggle: function(e) {
                            r.isOpen && (r.current.fitToView = "boolean" === i.type(e) ? e : !r.current.fitToView, d && (r.wrap.removeAttr("style").addClass("evm_fancybox-tmp"), r.trigger("onUpdate")), r.update())
                        },
                        hideLoading: function() {
                            o.unbind(".loading"), i("#evm_fancybox-loading").remove()
                        },
                        showLoading: function() {
                            var e, t;
                            r.hideLoading(), e = i('<div id="evm_fancybox-loading"><div></div></div>').click(r.cancel).appendTo("body"), o.bind("keydown.loading", function(e) {
                                27 === (e.which || e.keyCode) && (e.preventDefault(), r.cancel())
                            }), r.defaults.fixed || (t = r.getViewport(), e.css({
                                position: "absolute",
                                top: .5 * t.h + t.y,
                                left: .5 * t.w + t.x
                            }))
                        },
                        getViewport: function() {
                            var t = r.current && r.current.locked || !1,
                                i = {
                                    x: s.scrollLeft(),
                                    y: s.scrollTop()
                                };
                            return t ? (i.w = t[0].clientWidth, i.h = t[0].clientHeight) : (i.w = d && e.innerWidth ? e.innerWidth : s.width(), i.h = d && e.innerHeight ? e.innerHeight : s.height()), i
                        },
                        unbindEvents: function() {
                            r.wrap && h(r.wrap) && r.wrap.unbind(".fb"), o.unbind(".fb"), s.unbind(".fb")
                        },
                        bindEvents: function() {
                            var e, t = r.current;
                            t && (s.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), r.update), e = t.keys, e && o.bind("keydown.fb", function(a) {
                                var s = a.which || a.keyCode,
                                    o = a.target || a.srcElement;
                                return 27 === s && r.coming ? !1 : (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || o && (o.type || i(o).is("[contenteditable]")) || i.each(e, function(e, o) {
                                    return t.group.length > 1 && o[s] !== n ? (r[e](o[s]), a.preventDefault(), !1) : i.inArray(s, o) > -1 ? (r[e](), a.preventDefault(), !1) : void 0
                                }), void 0)
                            }), i.fn.mousewheel && t.mouseWheel && r.wrap.bind("mousewheel.fb", function(e, n, a, s) {
                                for (var o = e.target || null, l = i(o), c = !1; l.length && !(c || l.is(".evm_fancybox-skin") || l.is(".evm_fancybox-wrap"));) c = f(l[0]), l = i(l).parent();
                                0 === n || c || r.group.length > 1 && !t.canShrink && (s > 0 || a > 0 ? r.prev(s > 0 ? "down" : "left") : (0 > s || 0 > a) && r.next(0 > s ? "up" : "right"), e.preventDefault())
                            }))
                        },
                        trigger: function(e, t) {
                            var n, a = t || r.coming || r.current;
                            if (a) {
                                if (i.isFunction(a[e]) && (n = a[e].apply(a, Array.prototype.slice.call(arguments, 1))), n === !1) return !1;
                                a.helpers && i.each(a.helpers, function(t, n) {
                                    n && r.helpers[t] && i.isFunction(r.helpers[t][e]) && r.helpers[t][e](i.extend(!0, {}, r.helpers[t].defaults, n), a)
                                }), o.trigger(e)
                            }
                        },
                        isImage: function(e) {
                            return p(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
                        },
                        isSWF: function(e) {
                            return p(e) && e.match(/\.(swf)((\?|#).*)?$/i)
                        },
                        _start: function(e) {
                            var t, n, a, s, o, l = {};
                            if (e = g(e), t = r.group[e] || null, !t) return !1;
                            if (l = i.extend(!0, {}, r.opts, t), s = l.margin, o = l.padding, "number" === i.type(s) && (l.margin = [s, s, s, s]), "number" === i.type(o) && (l.padding = [o, o, o, o]), l.modal && i.extend(!0, l, {
                                    closeBtn: !1,
                                    closeClick: !1,
                                    nextClick: !1,
                                    arrows: !1,
                                    mouseWheel: !1,
                                    keys: null,
                                    helpers: {
                                        overlay: {
                                            closeClick: !1
                                        }
                                    }
                                }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = r.group, l.index = e, r.coming = l, !1 === r.trigger("beforeLoad")) return r.coming = null, void 0;
                            if (a = l.type, n = l.href, !a) return r.coming = null, r.current && r.router && "jumpto" !== r.router ? (r.current.index = e, r[r.router](r.direction)) : !1;
                            if (r.isActive = !0, ("image" === a || "swf" === a) && (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === a && (l.aspectRatio = !0), "iframe" === a && d && (l.scrolling = "scroll"), l.wrap = i(l.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + a + " evm_fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), i.extend(l, {
                                    skin: i(".evm_fancybox-skin", l.wrap),
                                    outer: i(".evm_fancybox-outer", l.wrap),
                                    inner: i(".evm_fancybox-inner", l.wrap)
                                }), i.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                                    l.skin.css("padding" + t, m(l.padding[e]))
                                }), r.trigger("onReady"), "inline" === a || "html" === a) {
                                if (!l.content || !l.content.length) return r._error("content")
                            } else if (!n) return r._error("href");
                            "image" === a ? r._loadImage() : "ajax" === a ? r._loadAjax() : "iframe" === a ? r._loadIframe() : r._afterLoad()
                        },
                        _error: function(e) {
                            i.extend(r.coming, {
                                type: "html",
                                autoWidth: !0,
                                autoHeight: !0,
                                minWidth: 0,
                                minHeight: 0,
                                scrolling: "no",
                                hasError: e,
                                content: r.coming.tpl.error
                            }), r._afterLoad()
                        },
                        _loadImage: function() {
                            var e = r.imgPreload = new Image;
                            e.onload = function() {
                                this.onload = this.onerror = null, r.coming.width = this.width / r.opts.pixelRatio, r.coming.height = this.height / r.opts.pixelRatio, r._afterLoad()
                            }, e.onerror = function() {
                                this.onload = this.onerror = null, r._error("image")
                            }, e.src = r.coming.href, e.complete !== !0 && r.showLoading()
                        },
                        _loadAjax: function() {
                            var e = r.coming;
                            r.showLoading(), r.ajaxLoad = i.ajax(i.extend({}, e.ajax, {
                                url: e.href,
                                error: function(e, t) {
                                    r.coming && "abort" !== t ? r._error("ajax", e) : r.hideLoading()
                                },
                                success: function(t, i) {
                                    "success" === i && (e.content = t, r._afterLoad())
                                }
                            }))
                        },
                        _loadIframe: function() {
                            var e = r.coming,
                                t = i(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", d ? "auto" : e.iframe.scrolling).attr("src", e.href);
                            i(e.wrap).bind("onReset", function() {
                                try {
                                    i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                                } catch (e) {}
                            }), e.iframe.preload && (r.showLoading(), t.one("load", function() {
                                i(this).data("ready", 1), d || i(this).bind("load.fb", r.update), i(this).parents(".evm_fancybox-wrap").width("100%").removeClass("evm_fancybox-tmp").show(), r._afterLoad()
                            })), e.content = t.appendTo(e.inner), e.iframe.preload || r._afterLoad()
                        },
                        _preloadImages: function() {
                            var e, t, i = r.group,
                                n = r.current,
                                a = i.length,
                                s = n.preload ? Math.min(n.preload, a - 1) : 0;
                            for (t = 1; s >= t; t += 1) e = i[(n.index + t) % a], "image" === e.type && e.href && ((new Image).src = e.href)
                        },
                        _afterLoad: function() {
                            var e, t, n, a, s, o, l = r.coming,
                                c = r.current,
                                d = "fancybox-placeholder";
                            if (r.hideLoading(), l && r.isActive !== !1) {
                                if (!1 === r.trigger("afterLoad", l, c)) return l.wrap.stop(!0).trigger("onReset").remove(), r.coming = null, void 0;
                                switch (c && (r.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("evm_fancybox-opened").find(".fancybox-item, .evm_fancybox-nav").remove()), r.unbindEvents(), e = l, t = l.content, n = l.type, a = l.scrolling, i.extend(r, {
                                        wrap: e.wrap,
                                        skin: e.skin,
                                        outer: e.outer,
                                        inner: e.inner,
                                        current: e,
                                        previous: c
                                    }), s = e.href, n) {
                                    case "inline":
                                    case "ajax":
                                    case "html":
                                        e.selector ? t = i("<div>").html(t).find(e.selector) : h(t) && (t.data(d) || t.data(d, i('<div class="' + d + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function() {
                                            i(this).find(t).length && t.hide().replaceAll(t.data(d)).data(d, !1)
                                        }));
                                        break;
                                    case "image":
                                        t = e.tpl.image.replace("{href}", s);
                                        break;
                                    case "swf":
                                        t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + s + '"></param>', o = "", i.each(e.swf, function(e, i) {
                                            t += '<param name="' + e + '" value="' + i + '"></param>', o += " " + e + '="' + i + '"'
                                        }), t += '<embed src="' + s + '" type="application/x-shockwave-flash" width="100%" height="100%"' + o + "></embed></object>"
                                }
                                h(t) && t.parent().is(e.inner) || e.inner.append(t), r.trigger("beforeShow"), e.inner.css("overflow", "yes" === a ? "scroll" : "no" === a ? "hidden" : a), r._setDimension(), r.reposition(), r.isOpen = !1, r.coming = null, r.bindEvents(), r.isOpened ? c.prevMethod && r.transitions[c.prevMethod]() : i(".evm_fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), r.transitions[r.isOpened ? e.nextMethod : e.openMethod](), r._preloadImages()
                            }
                        },
                        _setDimension: function() {
                            var e, t, n, a, s, o, l, c, d, h, p, f, v, w, b, y = r.getViewport(),
                                x = 0,
                                _ = !1,
                                k = !1,
                                j = r.wrap,
                                C = r.skin,
                                I = r.inner,
                                T = r.current,
                                S = T.width,
                                W = T.height,
                                H = T.minWidth,
                                L = T.minHeight,
                                D = T.maxWidth,
                                A = T.maxHeight,
                                P = T.scrolling,
                                B = T.scrollOutside ? T.scrollbarWidth : 0,
                                M = T.margin,
                                R = g(M[1] + M[3]),
                                O = g(M[0] + M[2]);
                            if (j.add(C).add(I).width("auto").height("auto").removeClass("evm_fancybox-tmp"), e = g(C.outerWidth(!0) - C.width()), t = g(C.outerHeight(!0) - C.height()), n = R + e, a = O + t, s = u(S) ? (y.w - n) * g(S) / 100 : S, o = u(W) ? (y.h - a) * g(W) / 100 : W, "iframe" === T.type) {
                                if (w = T.content, T.autoHeight && 1 === w.data("ready")) try {
                                    w[0].contentWindow.document.location && (I.width(s).height(9999), b = w.contents().find("body"), B && b.css("overflow-x", "hidden"), o = b.outerHeight(!0))
                                } catch (E) {}
                            } else(T.autoWidth || T.autoHeight) && (I.addClass("evm_fancybox-tmp"), T.autoWidth || I.width(s), T.autoHeight || I.height(o), T.autoWidth && (s = I.width()), T.autoHeight && (o = I.height()), I.removeClass("evm_fancybox-tmp"));
                            if (S = g(s), W = g(o), d = s / o, H = g(u(H) ? g(H, "w") - n : H), D = g(u(D) ? g(D, "w") - n : D), L = g(u(L) ? g(L, "h") - a : L), A = g(u(A) ? g(A, "h") - a : A), l = D, c = A, T.fitToView && (D = Math.min(y.w - n, D), A = Math.min(y.h - a, A)), f = y.w - R, v = y.h - O, T.aspectRatio ? (S > D && (S = D, W = g(S / d)), W > A && (W = A, S = g(W * d)), H > S && (S = H, W = g(S / d)), L > W && (W = L, S = g(W * d))) : (S = Math.max(H, Math.min(S, D)), T.autoHeight && "iframe" !== T.type && (I.width(S), W = I.height()), W = Math.max(L, Math.min(W, A))), T.fitToView)
                                if (I.width(S).height(W), j.width(S + e), h = j.width(), p = j.height(), T.aspectRatio)
                                    for (;
                                        (h > f || p > v) && S > H && W > L && !(x++ > 19);) W = Math.max(L, Math.min(A, W - 10)), S = g(W * d), H > S && (S = H, W = g(S / d)), S > D && (S = D, W = g(S / d)), I.width(S).height(W), j.width(S + e), h = j.width(), p = j.height();
                                else S = Math.max(H, Math.min(S, S - (h - f))), W = Math.max(L, Math.min(W, W - (p - v)));
                            B && "auto" === P && o > W && f > S + e + B && (S += B), I.width(S).height(W), j.width(S + e), h = j.width(), p = j.height(), _ = (h > f || p > v) && S > H && W > L, k = T.aspectRatio ? l > S && c > W && s > S && o > W : (l > S || c > W) && (s > S || o > W), i.extend(T, {
                                dim: {
                                    width: m(h),
                                    height: m(p)
                                },
                                origWidth: s,
                                origHeight: o,
                                canShrink: _,
                                canExpand: k,
                                wPadding: e,
                                hPadding: t,
                                wrapSpace: p - C.outerHeight(!0),
                                skinSpace: C.height() - W
                            }), !w && T.autoHeight && W > L && A > W && !k && I.height("auto")
                        },
                        _getPosition: function(e) {
                            var t = r.current,
                                i = r.getViewport(),
                                n = t.margin,
                                a = r.wrap.width() + n[1] + n[3],
                                s = r.wrap.height() + n[0] + n[2],
                                o = {
                                    position: "absolute",
                                    top: n[0],
                                    left: n[3]
                                };
                            return t.autoCenter && t.fixed && !e && s <= i.h && a <= i.w ? o.position = "fixed" : t.locked || (o.top += i.y, o.left += i.x), o.top = m(Math.max(o.top, o.top + (i.h - s) * t.topRatio)), o.left = m(Math.max(o.left, o.left + (i.w - a) * t.leftRatio)), o
                        },
                        _afterZoomIn: function() {
                            var e = r.current;
                            e && (r.isOpen = r.isOpened = !0, r.wrap.css("overflow", "visible").addClass("evm_fancybox-opened"), r.update(), (e.closeClick || e.nextClick && r.group.length > 1) && r.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                                i(t.target).is("a") || i(t.target).parent().is("a") || (t.preventDefault(), r[e.closeClick ? "close" : "next"]())
                            }), e.closeBtn && i(e.tpl.closeBtn).appendTo(r.skin).bind("click.fb", function(e) {
                                e.preventDefault(), r.close()
                            }), e.arrows && r.group.length > 1 && ((e.loop || e.index > 0) && i(e.tpl.prev).appendTo(r.outer).bind("click.fb", r.prev), (e.loop || e.index < r.group.length - 1) && i(e.tpl.next).appendTo(r.outer).bind("click.fb", r.next)), r.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? r.opts.autoPlay && !r.player.isActive && (r.opts.autoPlay = !1, r.play()) : r.play(!1))
                        },
                        _afterZoomOut: function(e) {
                            e = e || r.current, i(".evm_fancybox-wrap").trigger("onReset").remove(), i.extend(r, {
                                group: {},
                                opts: {},
                                router: !1,
                                current: null,
                                isActive: !1,
                                isOpened: !1,
                                isOpen: !1,
                                isClosing: !1,
                                wrap: null,
                                skin: null,
                                outer: null,
                                inner: null
                            }), r.trigger("afterClose", e)
                        }
                    }), r.transitions = {
                        getOrigPosition: function() {
                            var e = r.current,
                                t = e.element,
                                i = e.orig,
                                n = {},
                                a = 50,
                                s = 50,
                                o = e.hPadding,
                                l = e.wPadding,
                                c = r.getViewport();
                            return !i && e.isDom && t.is(":visible") && (i = t.find("img:first"), i.length || (i = t)), h(i) ? (n = i.offset(), i.is("img") && (a = i.outerWidth(), s = i.outerHeight())) : (n.top = c.y + (c.h - s) * e.topRatio, n.left = c.x + (c.w - a) * e.leftRatio), ("fixed" === r.wrap.css("position") || e.locked) && (n.top -= c.y, n.left -= c.x), n = {
                                top: m(n.top - o * e.topRatio),
                                left: m(n.left - l * e.leftRatio),
                                width: m(a + l),
                                height: m(s + o)
                            }
                        },
                        step: function(e, t) {
                            var i, n, a, s = t.prop,
                                o = r.current,
                                l = o.wrapSpace,
                                c = o.skinSpace;
                            ("width" === s || "height" === s) && (i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), r.isClosing && (i = 1 - i), n = "width" === s ? o.wPadding : o.hPadding, a = e - n, r.skin[s](g("width" === s ? a : a - l * i)), r.inner[s](g("width" === s ? a : a - l * i - c * i)))
                        },
                        zoomIn: function() {
                            var e = r.current,
                                t = e.pos,
                                n = e.openEffect,
                                a = "elastic" === n,
                                s = i.extend({
                                    opacity: 1
                                }, t);
                            delete s.position, a ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === n && (t.opacity = .1), r.wrap.css(t).animate(s, {
                                duration: "none" === n ? 0 : e.openSpeed,
                                easing: e.openEasing,
                                step: a ? this.step : null,
                                complete: r._afterZoomIn
                            })
                        },
                        zoomOut: function() {
                            var e = r.current,
                                t = e.closeEffect,
                                i = "elastic" === t,
                                n = {
                                    opacity: .1
                                };
                            i && (n = this.getOrigPosition(), e.closeOpacity && (n.opacity = .1)), r.wrap.animate(n, {
                                duration: "none" === t ? 0 : e.closeSpeed,
                                easing: e.closeEasing,
                                step: i ? this.step : null,
                                complete: r._afterZoomOut
                            })
                        },
                        changeIn: function() {
                            var e, t = r.current,
                                i = t.nextEffect,
                                n = t.pos,
                                a = {
                                    opacity: 1
                                },
                                s = r.direction,
                                o = 200;
                            n.opacity = .1, "elastic" === i && (e = "down" === s || "up" === s ? "top" : "left", "down" === s || "right" === s ? (n[e] = m(g(n[e]) - o), a[e] = "+=" + o + "px") : (n[e] = m(g(n[e]) + o), a[e] = "-=" + o + "px")), "none" === i ? r._afterZoomIn() : r.wrap.css(n).animate(a, {
                                duration: t.nextSpeed,
                                easing: t.nextEasing,
                                complete: r._afterZoomIn
                            })
                        },
                        changeOut: function() {
                            var e = r.previous,
                                t = e.prevEffect,
                                n = {
                                    opacity: .1
                                },
                                a = r.direction,
                                s = 200;
                            "elastic" === t && (n["down" === a || "up" === a ? "top" : "left"] = ("up" === a || "left" === a ? "-" : "+") + "=" + s + "px"), e.wrap.animate(n, {
                                duration: "none" === t ? 0 : e.prevSpeed,
                                easing: e.prevEasing,
                                complete: function() {
                                    i(this).trigger("onReset").remove()
                                }
                            })
                        }
                    }, r.helpers.overlay = {
                        defaults: {
                            closeClick: !0,
                            speedOut: 200,
                            showEarly: !0,
                            css: {},
                            locked: !d,
                            fixed: !0
                        },
                        overlay: null,
                        fixed: !1,
                        el: i("html"),
                        create: function(e) {
                            e = i.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = i('<div class="evm_fancybox-overlay"></div>').appendTo(r.coming ? r.coming.parent : e.parent), this.fixed = !1, e.fixed && r.defaults.fixed && (this.overlay.addClass("evm_fancybox-overlay-fixed"), this.fixed = !0)
                        },
                        open: function(e) {
                            var t = this;
                            e = i.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (s.bind("resize.overlay", i.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
                                return i(e.target).hasClass("evm_fancybox-overlay") ? (r.isActive ? r.close() : t.close(), !1) : void 0
                            }), this.overlay.css(e.css).show()
                        },
                        close: function() {
                            var e, t;
                            s.unbind("resize.overlay"), this.el.hasClass("evm_fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), e = s.scrollTop(), t = s.scrollLeft(), this.el.removeClass("evm_fancybox-lock"), s.scrollTop(e).scrollLeft(t)), i(".evm_fancybox-overlay").remove().hide(), i.extend(this, {
                                overlay: null,
                                fixed: !1
                            })
                        },
                        update: function() {
                            var e, i = "100%";
                            this.overlay.width(i).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), o.width() > e && (i = o.width())) : o.width() > s.width() && (i = o.width()), this.overlay.width(i).height(o.height())
                        },
                        onReady: function(e, t) {
                            var n = this.overlay;
                            i(".evm_fancybox-overlay").stop(!0, !0), n || this.create(e), e.locked && this.fixed && t.fixed && (n || (this.margin = o.height() > s.height() ? i("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1), e.showEarly === !0 && this.beforeShow.apply(this, arguments)
                        },
                        beforeShow: function(e, t) {
                            var n, a;
                            t.locked && (this.margin !== !1 && (i("*").filter(function() {
                                return "fixed" === i(this).css("position") && !i(this).hasClass("evm_fancybox-overlay") && !i(this).hasClass("evm_fancybox-wrap")
                            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = s.scrollTop(), a = s.scrollLeft(), this.el.addClass("evm_fancybox-lock"), s.scrollTop(n).scrollLeft(a)), this.open(e)
                        },
                        onUpdate: function() {
                            this.fixed || this.update()
                        },
                        afterClose: function(e) {
                            this.overlay && !r.coming && this.overlay.fadeOut(e.speedOut, i.proxy(this.close, this))
                        }
                    }, r.helpers.title = {
                        defaults: {
                            type: "float",
                            position: "bottom"
                        },
                        beforeShow: function(e) {
                            var t, n, a = r.current,
                                s = a.title,
                                o = e.type;
                            if (i.isFunction(s) && (s = s.call(a.element, a)), p(s) && "" !== i.trim(s)) {
                                switch (t = i('<div class="evm_fancybox-title evm_fancybox-title-' + o + '-wrap">' + s + "</div>"), o) {
                                    case "inside":
                                        n = r.skin;
                                        break;
                                    case "outside":
                                        n = r.wrap;
                                        break;
                                    case "over":
                                        n = r.inner;
                                        break;
                                    default:
                                        n = r.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), r.current.margin[2] += Math.abs(g(t.css("margin-bottom")))
                                }
                                t["top" === e.position ? "prependTo" : "appendTo"](n)
                            }
                        }
                    }, i.fn.evmfancybox = function(e) {
                        var t, n = i(this),
                            a = this.selector || "",
                            s = function(s) {
                                var o, l, c = i(this).blur(),
                                    d = t;
                                s.ctrlKey || s.altKey || s.shiftKey || s.metaKey || c.is(".evm_fancybox-wrap") || (o = e.groupAttr || "data-fancybox-group", l = c.attr(o), l || (o = "rel", l = c.get(0)[o]), l && "" !== l && "nofollow" !== l && (c = a.length ? i(a) : n, c = c.filter("[" + o + '="' + l + '"]'), d = c.index(this)), e.index = d, r.open(c, e) !== !1 && s.preventDefault())
                            };
                        return e = e || {}, t = e.index || 0, a && e.live !== !1 ? o.undelegate(a, "click.fb-start").delegate(a + ":not('.fancybox-item, .evm_fancybox-nav')", "click.fb-start", s) : n.unbind("click.fb-start").bind("click.fb-start", s), this.filter("[data-fancybox-start=1]").trigger("click"), this
                    }, o.ready(function() {
                        var t, s;
                        i.scrollbarWidth === n && (i.scrollbarWidth = function() {
                            var e = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                                t = e.children(),
                                n = t.innerWidth() - t.height(99).innerWidth();
                            return e.remove(), n
                        }), i.support.fixedPosition === n && (i.support.fixedPosition = function() {
                            var e = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                                t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
                            return e.remove(), t
                        }()), i.extend(r.defaults, {
                            scrollbarWidth: i.scrollbarWidth(),
                            fixed: i.support.fixedPosition,
                            parent: i("body")
                        }), t = i(e).width(), a.addClass("evm_fancybox-lock-test"), s = i(e).width(), a.removeClass("evm_fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (s - t) + "px;}</style>").appendTo("head")
                    })
                }(window, document, jQuery);
            }
            if (data.directby == 'true') {
                if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
                    "use strict";
                    var b = a.fn.jquery.split(" ")[0].split(".");
                    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
                }(jQuery), + function(a) {
                    "use strict";

                    function b() {
                        var a = document.createElement("bootstrap"),
                            b = {
                                WebkitTransition: "webkitTransitionEnd",
                                MozTransition: "transitionend",
                                OTransition: "oTransitionEnd otransitionend",
                                transition: "transitionend"
                            };
                        for (var c in b)
                            if (void 0 !== a.style[c]) return {
                                end: b[c]
                            };
                        return !1
                    }
                    a.fn.emulateTransitionEnd = function(b) {
                        var c = !1,
                            d = this;
                        a(this).one("bsTransitionEnd", function() {
                            c = !0
                        });
                        var e = function() {
                            c || a(d).trigger(a.support.transition.end)
                        };
                        return setTimeout(e, b), this
                    }, a(function() {
                        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
                            bindType: a.support.transition.end,
                            delegateType: a.support.transition.end,
                            handle: function(b) {
                                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
                            }
                        })
                    })
                }(jQuery), + function(a) {
                    "use strict";

                    function b(b) {
                        return this.each(function() {
                            var c = a(this),
                                e = c.data("bs.alert");
                            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
                        })
                    }
                    var c = '[data-dismiss="alert"]',
                        d = function(b) {
                            a(b).on("click", c, this.close)
                        };
                    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
                        function c() {
                            g.detach().trigger("closed.bs.alert").remove()
                        }
                        var e = a(this),
                            f = e.attr("data-target");
                        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
                        var g = a("#" === f ? [] : f);
                        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
                    };
                    var e = a.fn.alert;
                    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
                        return a.fn.alert = e, this
                    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
                }(jQuery), + function(a) {
                    "use strict";

                    function b(b) {
                        return this.each(function() {
                            var d = a(this),
                                e = d.data("bs.button"),
                                f = "object" == typeof b && b;
                            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
                        })
                    }
                    var c = function(b, d) {
                        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
                    };
                    c.VERSION = "3.3.7", c.DEFAULTS = {
                        loadingText: "loading..."
                    }, c.prototype.setState = function(b) {
                        var c = "disabled",
                            d = this.$element,
                            e = d.is("input") ? "val" : "html",
                            f = d.data();
                        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
                            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
                        }, this), 0)
                    }, c.prototype.toggle = function() {
                        var a = !0,
                            b = this.$element.closest('[data-toggle="buttons"]');
                        if (b.length) {
                            var c = this.$element.find("input");
                            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
                        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
                    };
                    var d = a.fn.button;
                    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
                        return a.fn.button = d, this
                    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
                        var d = a(c.target).closest(".btn");
                        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
                    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
                        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
                    })
                }(jQuery), + function(a) {
                    "use strict";

                    function b(b) {
                        return this.each(function() {
                            var d = a(this),
                                e = d.data("bs.carousel"),
                                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                                g = "string" == typeof b ? b : f.slide;
                            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
                        })
                    }
                    var c = function(b, c) {
                        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
                    };
                    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
                        interval: 5e3,
                        pause: "hover",
                        wrap: !0,
                        keyboard: !0
                    }, c.prototype.keydown = function(a) {
                        if (!/input|textarea/i.test(a.target.tagName)) {
                            switch (a.which) {
                                case 37:
                                    this.prev();
                                    break;
                                case 39:
                                    this.next();
                                    break;
                                default:
                                    return
                            }
                            a.preventDefault()
                        }
                    }, c.prototype.cycle = function(b) {
                        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
                    }, c.prototype.getItemIndex = function(a) {
                        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
                    }, c.prototype.getItemForDirection = function(a, b) {
                        var c = this.getItemIndex(b),
                            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
                        if (d && !this.options.wrap) return b;
                        var e = "prev" == a ? -1 : 1,
                            f = (c + e) % this.$items.length;
                        return this.$items.eq(f)
                    }, c.prototype.to = function(a) {
                        var b = this,
                            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                        if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                            b.to(a)
                        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
                    }, c.prototype.pause = function(b) {
                        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
                    }, c.prototype.next = function() {
                        if (!this.sliding) return this.slide("next")
                    }, c.prototype.prev = function() {
                        if (!this.sliding) return this.slide("prev")
                    }, c.prototype.slide = function(b, d) {
                        var e = this.$element.find(".item.active"),
                            f = d || this.getItemForDirection(b, e),
                            g = this.interval,
                            h = "next" == b ? "left" : "right",
                            i = this;
                        if (f.hasClass("active")) return this.sliding = !1;
                        var j = f[0],
                            k = a.Event("slide.bs.carousel", {
                                relatedTarget: j,
                                direction: h
                            });
                        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
                            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                                this.$indicators.find(".active").removeClass("active");
                                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                                l && l.addClass("active")
                            }
                            var m = a.Event("slid.bs.carousel", {
                                relatedTarget: j,
                                direction: h
                            });
                            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                                    i.$element.trigger(m)
                                }, 0)
                            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
                        }
                    };
                    var d = a.fn.carousel;
                    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
                        return a.fn.carousel = d, this
                    };
                    var e = function(c) {
                        var d, e = a(this),
                            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
                        if (f.hasClass("carousel")) {
                            var g = a.extend({}, f.data(), e.data()),
                                h = e.attr("data-slide-to");
                            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
                        }
                    };
                    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
                        a('[data-ride="carousel"]').each(function() {
                            var c = a(this);
                            b.call(c, c.data())
                        })
                    })
                }(jQuery), + function(a) {
                    "use strict";

                    function b(b) {
                        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
                        return a(d)
                    }

                    function c(b) {
                        return this.each(function() {
                            var c = a(this),
                                e = c.data("bs.collapse"),
                                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
                            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
                        })
                    }
                    var d = function(b, c) {
                        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
                    };
                    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
                        toggle: !0
                    }, d.prototype.dimension = function() {
                        var a = this.$element.hasClass("width");
                        return a ? "width" : "height"
                    }, d.prototype.show = function() {
                        if (!this.transitioning && !this.$element.hasClass("in")) {
                            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                                var f = a.Event("show.bs.collapse");
                                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                                    var g = this.dimension();
                                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                                    var h = function() {
                                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                                    };
                                    if (!a.support.transition) return h.call(this);
                                    var i = a.camelCase(["scroll", g].join("-"));
                                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                                }
                            }
                        }
                    }, d.prototype.hide = function() {
                        if (!this.transitioning && this.$element.hasClass("in")) {
                            var b = a.Event("hide.bs.collapse");
                            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                                var c = this.dimension();
                                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                                var e = function() {
                                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                                };
                                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
                            }
                        }
                    }, d.prototype.toggle = function() {
                        this[this.$element.hasClass("in") ? "hide" : "show"]()
                    }, d.prototype.getParent = function() {
                        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
                            var e = a(d);
                            this.addAriaAndCollapsedClass(b(e), e)
                        }, this)).end()
                    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
                        var c = a.hasClass("in");
                        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
                    };
                    var e = a.fn.collapse;
                    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
                        return a.fn.collapse = e, this
                    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
                        var e = a(this);
                        e.attr("data-target") || d.preventDefault();
                        var f = b(e),
                            g = f.data("bs.collapse"),
                            h = g ? "toggle" : e.data();
                        c.call(f, h)
                    })
                }(jQuery), + function(a) {
                    "use strict";

                    function b(b) {
                        var c = b.attr("data-target");
                        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
                        var d = c && a(c);
                        return d && d.length ? d : b.parent()
                    }

                    function c(c) {
                        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
                            var d = a(this),
                                e = b(d),
                                f = {
                                    relatedTarget: this
                                };
                            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
                        }))
                    }

                    function d(b) {
                        return this.each(function() {
                            var c = a(this),
                                d = c.data("bs.dropdown");
                            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
                        })
                    }
                    var e = ".dropdown-backdrop",
                        f = '[data-toggle="dropdown"]',
                        g = function(b) {
                            a(b).on("click.bs.dropdown", this.toggle)
                        };
                    g.VERSION = "3.3.7", g.prototype.toggle = function(d) {
                        var e = a(this);
                        if (!e.is(".disabled, :disabled")) {
                            var f = b(e),
                                g = f.hasClass("open");
                            if (c(), !g) {
                                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                                var h = {
                                    relatedTarget: this
                                };
                                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
                            }
                            return !1
                        }
                    }, g.prototype.keydown = function(c) {
                        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                            var d = a(this);
                            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                                var e = b(d),
                                    g = e.hasClass("open");
                                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                                var h = " li:not(.disabled):visible a",
                                    i = e.find(".dropdown-menu" + h);
                                if (i.length) {
                                    var j = i.index(c.target);
                                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                                }
                            }
                        }
                    };
                    var h = a.fn.dropdown;
                    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
                        return a.fn.dropdown = h, this
                    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
                        a.stopPropagation()
                    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
                }(jQuery), + function(a) {
                    "use strict";

                    function b(b, d) {
                        return this.each(function() {
                            var e = a(this),
                                f = e.data("bs.evmmodal"),
                                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
                            f || e.data("bs.evmmodal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
                        })
                    }
                    var c = function(b, c) {
                        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".evmmodal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".evmmodal-content").load(this.options.remote, a.proxy(function() {
                            this.$element.trigger("loaded.bs.evmmodal")
                        }, this))
                    };
                    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
                        backdrop: !0,
                        keyboard: !0,
                        show: !0
                    }, c.prototype.toggle = function(a) {
                        return this.isShown ? this.hide() : this.show(a)
                    }, c.prototype.show = function(b) {
                        var d = this,
                            e = a.Event("show.bs.evmmodal", {
                                relatedTarget: b
                            });
                        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.evmmodal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.evmmodal", function() {
                            d.$element.one("mouseup.dismiss.bs.evmmodal", function(b) {
                                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
                            })
                        }), this.backdrop(function() {
                            var e = a.support.transition && d.$element.hasClass("fade");
                            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
                            var f = a.Event("shown.bs.evmmodal", {
                                relatedTarget: b
                            });
                            e ? d.$dialog.one("bsTransitionEnd", function() {
                                d.$element.trigger("focus").trigger(f)
                            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
                        }))
                    }, c.prototype.hide = function(b) {
                        b && b.preventDefault(), b = a.Event("hide.bs.evmmodal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.evmmodal"), this.$element.removeClass("in").off("click.dismiss.bs.evmmodal").off("mouseup.dismiss.bs.evmmodal"), this.$dialog.off("mousedown.dismiss.bs.evmmodal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
                    }, c.prototype.enforceFocus = function() {
                        a(document).off("focusin.bs.evmmodal").on("focusin.bs.evmmodal", a.proxy(function(a) {
                            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
                        }, this))
                    }, c.prototype.escape = function() {
                        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.evmmodal", a.proxy(function(a) {
                            27 == a.which && this.hide()
                        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.evmmodal")
                    }, c.prototype.resize = function() {
                        this.isShown ? a(window).on("resize.bs.evmmodal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.evmmodal")
                    }, c.prototype.hideModal = function() {
                        var a = this;
                        this.$element.hide(), this.backdrop(function() {
                            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.evmmodal")
                        })
                    }, c.prototype.removeBackdrop = function() {
                        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
                    }, c.prototype.backdrop = function(b) {
                        var d = this,
                            e = this.$element.hasClass("fade") ? "fade" : "";
                        if (this.isShown && this.options.backdrop) {
                            var f = a.support.transition && e;
                            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.evmmodal", a.proxy(function(a) {
                                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
                            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
                        } else if (!this.isShown && this.$backdrop) {
                            this.$backdrop.removeClass("in");
                            var g = function() {
                                d.removeBackdrop(), b && b()
                            };
                            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
                        } else b && b()
                    }, c.prototype.handleUpdate = function() {
                        this.adjustDialog()
                    }, c.prototype.adjustDialog = function() {
                        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                        this.$element.css({
                            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
                            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
                        })
                    }, c.prototype.resetAdjustments = function() {
                        this.$element.css({
                            paddingLeft: "",
                            paddingRight: ""
                        })
                    }, c.prototype.checkScrollbar = function() {
                        var a = window.innerWidth;
                        if (!a) {
                            var b = document.documentElement.getBoundingClientRect();
                            a = b.right - Math.abs(b.left)
                        }
                        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
                    }, c.prototype.setScrollbar = function() {
                        var a = parseInt(this.$body.css("padding-right") || 0, 10);
                        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
                    }, c.prototype.resetScrollbar = function() {
                        this.$body.css("padding-right", this.originalBodyPad)
                    }, c.prototype.measureScrollbar = function() {
                        var a = document.createElement("div");
                        a.className = "modal-scrollbar-measure", this.$body.append(a);
                        var b = a.offsetWidth - a.clientWidth;
                        return this.$body[0].removeChild(a), b
                    };
                    var d = a.fn.evmmodal;
                    a.fn.evmmodal = b, a.fn.evmmodal.Constructor = c, a.fn.evmmodal.noConflict = function() {
                        return a.fn.evmmodal = d, this
                    }, a(document).on("click.bs.evmmodal.data-api", '[data-toggle="modal"]', function(c) {
                        var d = a(this),
                            e = d.attr("href"),
                            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
                            g = f.data("bs.evmmodal") ? "toggle" : a.extend({
                                remote: !/#/.test(e) && e
                            }, f.data(), d.data());
                        d.is("a") && c.preventDefault(), f.one("show.bs.evmmodal", function(a) {
                            a.isDefaultPrevented() || f.one("hidden.bs.evmmodal", function() {
                                d.is(":visible") && d.trigger("focus")
                            })
                        }), b.call(f, g, this)
                    })
                }(jQuery), + function(a) {
                    "use strict";

                    function b(b) {
                        return this.each(function() {
                            var d = a(this),
                                e = d.data("bs.tooltip"),
                                f = "object" == typeof b && b;
                            !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
                        })
                    }
                    var c = function(a, b) {
                        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
                    };
                    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
                        animation: !0,
                        placement: "top",
                        selector: !1,
                        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        container: !1,
                        viewport: {
                            selector: "body",
                            padding: 0
                        }
                    }, c.prototype.init = function(b, c, d) {
                        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                                click: !1,
                                hover: !1,
                                focus: !1
                            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
                            var g = e[f];
                            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
                            else if ("manual" != g) {
                                var h = "hover" == g ? "mouseenter" : "focusin",
                                    i = "hover" == g ? "mouseleave" : "focusout";
                                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
                            }
                        }
                        this.options.selector ? this._options = a.extend({}, this.options, {
                            trigger: "manual",
                            selector: ""
                        }) : this.fixTitle()
                    }, c.prototype.getDefaults = function() {
                        return c.DEFAULTS
                    }, c.prototype.getOptions = function(b) {
                        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                            show: b.delay,
                            hide: b.delay
                        }), b
                    }, c.prototype.getDelegateOptions = function() {
                        var b = {},
                            c = this.getDefaults();
                        return this._options && a.each(this._options, function(a, d) {
                            c[a] != d && (b[a] = d)
                        }), b
                    }, c.prototype.enter = function(b) {
                        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
                        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
                            "in" == c.hoverState && c.show()
                        }, c.options.delay.show)) : c.show())
                    }, c.prototype.isInStateTrue = function() {
                        for (var a in this.inState)
                            if (this.inState[a]) return !0;
                        return !1
                    }, c.prototype.leave = function(b) {
                        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
                        if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
                            "out" == c.hoverState && c.hide()
                        }, c.options.delay.hide)) : c.hide()
                    }, c.prototype.show = function() {
                        var b = a.Event("show.bs." + this.type);
                        if (this.hasContent() && this.enabled) {
                            this.$element.trigger(b);
                            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                            if (b.isDefaultPrevented() || !d) return;
                            var e = this,
                                f = this.tip(),
                                g = this.getUID(this.type);
                            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
                            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                                i = /\s?auto?\s?/i,
                                j = i.test(h);
                            j && (h = h.replace(i, "") || "top"), f.detach().css({
                                top: 0,
                                left: 0,
                                display: "block"
                            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                            var k = this.getPosition(),
                                l = f[0].offsetWidth,
                                m = f[0].offsetHeight;
                            if (j) {
                                var n = h,
                                    o = this.getPosition(this.$viewport);
                                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
                            }
                            var p = this.getCalculatedOffset(h, k, l, m);
                            this.applyPlacement(p, h);
                            var q = function() {
                                var a = e.hoverState;
                                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
                            };
                            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
                        }
                    }, c.prototype.applyPlacement = function(b, c) {
                        var d = this.tip(),
                            e = d[0].offsetWidth,
                            f = d[0].offsetHeight,
                            g = parseInt(d.css("margin-top"), 10),
                            h = parseInt(d.css("margin-left"), 10);
                        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
                            using: function(a) {
                                d.css({
                                    top: Math.round(a.top),
                                    left: Math.round(a.left)
                                })
                            }
                        }, b), 0), d.addClass("in");
                        var i = d[0].offsetWidth,
                            j = d[0].offsetHeight;
                        "top" == c && j != f && (b.top = b.top + f - j);
                        var k = this.getViewportAdjustedDelta(c, b, i, j);
                        k.left ? b.left += k.left : b.top += k.top;
                        var l = /top|bottom/.test(c),
                            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
                            n = l ? "offsetWidth" : "offsetHeight";
                        d.offset(b), this.replaceArrow(m, d[0][n], l)
                    }, c.prototype.replaceArrow = function(a, b, c) {
                        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
                    }, c.prototype.setContent = function() {
                        var a = this.tip(),
                            b = this.getTitle();
                        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
                    }, c.prototype.hide = function(b) {
                        function d() {
                            "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
                        }
                        var e = this,
                            f = a(this.$tip),
                            g = a.Event("hide.bs." + this.type);
                        if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
                    }, c.prototype.fixTitle = function() {
                        var a = this.$element;
                        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
                    }, c.prototype.hasContent = function() {
                        return this.getTitle()
                    }, c.prototype.getPosition = function(b) {
                        b = b || this.$element;
                        var c = b[0],
                            d = "BODY" == c.tagName,
                            e = c.getBoundingClientRect();
                        null == e.width && (e = a.extend({}, e, {
                            width: e.right - e.left,
                            height: e.bottom - e.top
                        }));
                        var f = window.SVGElement && c instanceof window.SVGElement,
                            g = d ? {
                                top: 0,
                                left: 0
                            } : f ? null : b.offset(),
                            h = {
                                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
                            },
                            i = d ? {
                                width: a(window).width(),
                                height: a(window).height()
                            } : null;
                        return a.extend({}, e, h, i, g)
                    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
                        return "bottom" == a ? {
                            top: b.top + b.height,
                            left: b.left + b.width / 2 - c / 2
                        } : "top" == a ? {
                            top: b.top - d,
                            left: b.left + b.width / 2 - c / 2
                        } : "left" == a ? {
                            top: b.top + b.height / 2 - d / 2,
                            left: b.left - c
                        } : {
                            top: b.top + b.height / 2 - d / 2,
                            left: b.left + b.width
                        }
                    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
                        var e = {
                            top: 0,
                            left: 0
                        };
                        if (!this.$viewport) return e;
                        var f = this.options.viewport && this.options.viewport.padding || 0,
                            g = this.getPosition(this.$viewport);
                        if (/right|left/.test(a)) {
                            var h = b.top - f - g.scroll,
                                i = b.top + f - g.scroll + d;
                            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
                        } else {
                            var j = b.left - f,
                                k = b.left + f + c;
                            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
                        }
                        return e
                    }, c.prototype.getTitle = function() {
                        var a, b = this.$element,
                            c = this.options;
                        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
                    }, c.prototype.getUID = function(a) {
                        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
                        return a
                    }, c.prototype.tip = function() {
                        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                        return this.$tip
                    }, c.prototype.arrow = function() {
                        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
                    }, c.prototype.enable = function() {
                        this.enabled = !0
                    }, c.prototype.disable = function() {
                        this.enabled = !1
                    }, c.prototype.toggleEnabled = function() {
                        this.enabled = !this.enabled
                    }, c.prototype.toggle = function(b) {
                        var c = this;
                        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
                    }, c.prototype.destroy = function() {
                        var a = this;
                        clearTimeout(this.timeout), this.hide(function() {
                            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
                        })
                    };
                    var d = a.fn.tooltip;
                    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
                        return a.fn.tooltip = d, this
                    }
                }(jQuery);
            }
            if (img_heading_location == 'above' && (view == "masonry" || view == "grid" || view == "collage")) {
                $('<style>.evm_fancybox-title-float-wrap {margin-bottom: 0px;margin-top: -23px; top: 0;height: 30px;}</style>').appendTo('body');
            }
            $('<style>' + custom_css + '</style>').appendTo('body');
            if (view == "masonry") {
                view = "grid",
                    function(a) {
                        "use strict";
                        var $ = a.jQuery;

                        function c(a, b) {
                            for (var c in b) a[c] = b[c];
                            return a
                        }
                        a.console;
                        var d = Object.prototype.toString;

                        function b(e, f) {
                            function a(b, e, f) {
                                if (!(this instanceof a)) return new a(b, e);
                                "string" == typeof b && (b = document.querySelectorAll(b)), this.elements = function(a) {
                                    var e, b = [];
                                    if (e = a, "[object Array]" === d.call(e)) b = a;
                                    else if ("number" == typeof a.length)
                                        for (var c = 0, f = a.length; c < f; c++) b.push(a[c]);
                                    else b.push(a);
                                    return b
                                }(b), this.options = c({}, this.options), "function" == typeof e ? f = e : c(this.options, e), f && this.on("always", f), this.getImages(), $ && (this.jqDeferred = new $.Deferred);
                                var g = this;
                                setTimeout(function() {
                                    g.check()
                                })
                            }
                            a.prototype = new e, a.prototype.options = {}, a.prototype.getImages = function() {
                                this.images = [];
                                for (var a = 0, e = this.elements.length; a < e; a++) {
                                    var b = this.elements[a];
                                    "IMG" === b.nodeName && this.addImage(b);
                                    for (var d = b.querySelectorAll("img"), c = 0, f = d.length; c < f; c++) {
                                        var g = d[c];
                                        this.addImage(g)
                                    }
                                }
                            }, a.prototype.addImage = function(a) {
                                var c = new b(a);
                                this.images.push(c)
                            }, a.prototype.check = function() {
                                var e = this,
                                    f = 0,
                                    b = this.images.length;
                                if (this.hasAnyBroken = !1, !b) {
                                    this.complete();
                                    return
                                }

                                function d(a, c) {
                                    return e.options.debug, e.progress(a), ++f === b && e.complete(), !0
                                }
                                for (var a = 0; a < b; a++) {
                                    var c = this.images[a];
                                    c.on("confirm", d), c.check()
                                }
                            }, a.prototype.progress = function(a) {
                                this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emit("progress", this, a), this.jqDeferred && this.jqDeferred.notify(this, a)
                            }, a.prototype.complete = function() {
                                var a = this.hasAnyBroken ? "fail" : "done";
                                if (this.isComplete = !0, this.emit(a, this), this.emit("always", this), this.jqDeferred) {
                                    var b = this.hasAnyBroken ? "reject" : "resolve";
                                    this.jqDeferred[b](this)
                                }
                            }, $ && ($.fn.imagesLoaded = function(b, c) {
                                return new a(this, b, c).jqDeferred.promise($(this))
                            });
                            var g = {};

                            function b(a) {
                                this.img = a
                            }
                            return b.prototype = new e, b.prototype.check = function() {
                                var b = g[this.img.src];
                                if (b) {
                                    this.useCached(b);
                                    return
                                }
                                if (g[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) {
                                    this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                                    return
                                }
                                var a = this.proxyImage = new Image;
                                f.bind(a, "load", this), f.bind(a, "error", this), a.src = this.img.src
                            }, b.prototype.useCached = function(a) {
                                if (a.isConfirmed) this.confirm(a.isLoaded, "cached was confirmed");
                                else {
                                    var b = this;
                                    a.on("confirm", function(a) {
                                        return b.confirm(a.isLoaded, "cache emitted confirmed"), !0
                                    })
                                }
                            }, b.prototype.confirm = function(a, b) {
                                this.isConfirmed = !0, this.isLoaded = a, this.emit("confirm", this, b)
                            }, b.prototype.handleEvent = function(a) {
                                var b = "on" + a.type;
                                this[b] && this[b](a)
                            }, b.prototype.onload = function() {
                                this.confirm(!0, "onload"), this.unbindProxyEvents()
                            }, b.prototype.onerror = function() {
                                this.confirm(!1, "onerror"), this.unbindProxyEvents()
                            }, b.prototype.unbindProxyEvents = function() {
                                f.unbind(this.proxyImage, "load", this), f.unbind(this.proxyImage, "error", this)
                            }, a
                        }
                        "function" == typeof define && define.amd ? define(["eventEmitter", "eventie"], b) : a.imagesLoaded = b(a.EventEmitter, a.eventie)
                    }(window),
                    function(f) {
                        "use strict";

                        function g(a) {
                            return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
                        }

                        function a(a, e) {
                            (b(a, e) ? d : c)(a, e)
                        }
                        "classList" in document.documentElement ? (b = function(a, b) {
                            return a.classList.contains(b)
                        }, c = function(a, b) {
                            a.classList.add(b)
                        }, d = function(a, b) {
                            a.classList.remove(b)
                        }) : (b = function(a, b) {
                            return g(b).test(a.className)
                        }, c = function(a, c) {
                            b(a, c) || (a.className = a.className + " " + c)
                        }, d = function(a, b) {
                            a.className = a.className.replace(g(b), " ")
                        });
                        var b, c, d, e = {
                            hasClass: b,
                            addClass: c,
                            removeClass: d,
                            toggleClass: a,
                            has: b,
                            add: c,
                            remove: d,
                            toggle: a
                        };
                        "function" == typeof define && define.amd ? define(e) : f.classie = e
                    }(window),
                    function(a) {
                        "use strict";
                        var c = a.document.documentElement;

                        function d() {
                            var b = c.clientHeight,
                                d = a.innerHeight;
                            return b < d ? d : b
                        }

                        function e() {
                            return a.pageYOffset || c.scrollTop
                        }

                        function f(c, a) {
                            var b = c.offsetHeight,
                                f = e(),
                                h = f + d(),
                                g = function(a) {
                                    var b = 0,
                                        c = 0;
                                    do isNaN(a.offsetTop) || (b += a.offsetTop), isNaN(a.offsetLeft) || (c += a.offsetLeft); while (a = a.offsetParent) return {
                                        top: b,
                                        left: c
                                    }
                                }(c).top,
                                a = a || 0;
                            return g + b * a <= h && g + b - b * a >= f
                        }

                        function b(a, b) {
                            this.el = a, this.options = function(c, a) {
                                for (var b in a) a.hasOwnProperty(b) && (c[b] = a[b]);
                                return c
                            }(this.defaults, b), this._init()
                        }
                        b.prototype = {
                            defaults: {
                                minDuration: 0,
                                maxDuration: 0,
                                viewportFactor: 0
                            },
                            _init: function() {
                                this.items = Array.prototype.slice.call(document.querySelectorAll("#" + this.el.id + " > li")), this.itemsCount = this.items.length, this.itemsRenderedCount = 0, this.didScroll = !1;
                                var b = this;
                                imagesLoaded(this.el, function() {
                                    new Masonry(b.el, {
                                        itemSelector: "li",
                                        transitionDuration: 0
                                    }), EVMModernizr.cssanimations && (b.items.forEach(function(a, c) {
                                        f(a) && (b._checkTotalRendered(), classie.add(a, "shown"))
                                    }), a.addEventListener("scroll", function() {
                                        b._onScrollFn()
                                    }, !1), a.addEventListener("resize", function() {
                                        b._resizeHandler()
                                    }, !1))
                                })
                            },
                            _onScrollFn: function() {
                                var a = this;
                                this.didScroll || (this.didScroll = !0, setTimeout(function() {
                                    a._scrollPage()
                                }, 60))
                            },
                            _scrollPage: function() {
                                var a = this;
                                this.items.forEach(function(b, c) {
                                    !classie.has(b, "shown") && !classie.has(b, "animate") && f(b, a.options.viewportFactor) && setTimeout(function() {
                                        var c = e() + d() / 2;
                                        if (a.el.style.WebkitPerspectiveOrigin = "50% " + c + "px", a.el.style.MozPerspectiveOrigin = "50% " + c + "px", a.el.style.perspectiveOrigin = "50% " + c + "px", a._checkTotalRendered(), a.options.minDuration && a.options.maxDuration) {
                                            var f = Math.random() * (a.options.maxDuration - a.options.minDuration) + a.options.minDuration + "s";
                                            b.style.WebkitAnimationDuration = f, b.style.MozAnimationDuration = f, b.style.animationDuration = f
                                        }
                                        classie.add(b, "animate")
                                    }, 25)
                                }), this.didScroll = !1
                            },
                            _resizeHandler: function() {
                                var a = this;
                                this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                                    a._scrollPage(), a.resizeTimeout = null
                                }, 1e3)
                            },
                            _checkTotalRendered: function() {
                                ++this.itemsRenderedCount, this.itemsRenderedCount === this.itemsCount && a.removeEventListener("scroll", this._onScrollFn)
                            }
                        }, a.AnimOnScroll = b
                    }(window)
                var animation_style = data.animation_style;
                $('<link rel="stylesheet" type="text/css" href="https://d3emlu4sl5epij.cloudfront.net/evmshopifyapps/lookbook/animations.css">').appendTo('body');
                //$('<link rel="stylesheet" type="text/css" href="https://d3emlu4sl5epij.cloudfront.net/evmshopifyapps/lookbook/style_component.css">').appendTo('body');
                $('<link rel="stylesheet" type="text/css" href="https://apps.expertvillagemedia.com/shopify/evm-lookbook/css/style_component.css">').appendTo('body');
            }
            $("#lookbookloaderImg").hide();
            $('<style>.evm_fancybox-title-float-wrap .child{color:' + font_color + '!important;font-size:' + font_size + 'px!important;}</style>').appendTo('body');
            if (show_arrow_on_hover == true || show_arrow_on_hover == "true") {
                $('<style>.lSAction > a{top:50%!important;}.lSAction > .lSPrev{right:initial!important;}.lSAction > .lSNext {background-position: 10px 0;}</style>').appendTo('body');
            }
            if (data.addimp == 'no') {
                $('<style>.plus_icon{background:rgba(' + plus_bg_color + ',1) !important;color:' + plus_font_color + '!important;}</style>').appendTo('body');
            } else {
                $('<style>.plus_icon{background:rgba(' + plus_bg_color + ',1) !important;color:' + plus_font_color + '!important;}</style>').appendTo('body');
            }
            if (icon_border_enable == "true") {
                $('<style>.plus_icon{border:1px solid ' + plus_font_color + '!important;}</style>').appendTo('body');
            }
            // if (icon_background == "square") { $('<style>.evm_tag_view span.plus_icon{border-radius:0;}</style>').appendTo('body'); }
            if (icon_background == "square") {
                $('<style></style>').appendTo('body');
            }
            if (view == "list") {
                $("#evm-lookbook-" + GalleryId).before("<div><input type='hidden' value='' id='evm_fancybox-wrap_left_px' /><input type='hidden' value='" + ProductId + "' id='ProID' /><input type='hidden' value='" + URL + "' id='URL' /><input type='hidden' value='" + start_limit + "' id='startlimit' /><input type='hidden' value='" + ShopId + "' id='ShopId' /><input type='hidden' value='" + GalleryId + "' id='GalleryId' /></div>");
                $('<style>.evm-list{display:block!important;}@media only screen and (max-width:440px){.evm_tagged_img.evm_grid {width:100%!important;margin-left:0!important;margin-right:0!important;}}</style>').appendTo('body');
            }
            if (view == "grid" || view == "collage") {
                if (total_records <= display_next) {
                    $(".loadmore").hide();
                }
                if (Shopify.shop == 'marmar-copenhagen.myshopify.com') {

                    $('<style>@media only screen and (max-width:440px){.evm_tagged_img.evm_grid {width:49%!important;!important;margin: 0.5%!important;}}</style>').appendTo('body');

                } else {
                    $('<style>@media only screen and (max-width:440px){.evm_tagged_img.evm_grid {width:' + mobile_column + '!important;margin: 0.5%!important;}}</style>').appendTo('body');
                }
                $("#evm-lookbook-" + GalleryId).addClass("evm-lookbook");
                if (grid_with_border == "grid_with_border") {
                    $('<style>.evm_tagged_img{width:' + grid_width + '%!important; padding:10px!important; box-sizing: border-box; background: #f7f7f7; margin: ' + grid_margin + '%!important; box-shadow:0 8px 13px rgba(3, 3, 3, .2), 0 0 40px rgba(0, 0, 0, 0)  inset;}.evm_tagged_img:before, .evm_tagged_img:after{content:""; position:absolute; z-index:-1; box-shadow:0 0 20px rgba(0,0,0,0.3); top:50%; bottom:0; left:10px; }</style>').appendTo('body');
                } else {
                    $('<style>.evm_tagged_img{width:' + grid_width + '%!important; padding:2px!important; box-sizing:border-box; margin:0!important; }</style>').appendTo('body');
                }
                if (enable_hotspot == 'false') {
                    $('<style>button#evm_more {background: #222;border: 0;color: #fff;border-radius: 3px;padding: 6px 12px;}.lookbook-overlay{bottom: 0;left: 0;right: 0;top:0;background:' + overlay_color + ';height:100%; width:100%;opacity:0;}.evm_tagged_img:hover .lookbook-overlay {opacity:1;} </style>').appendTo('body');
                } else {
                    $('<style>button#evm_more {background: #222;border: 0;color: #fff;border-radius: 3px;padding: 6px 12px;}.lookbook-overlay{bottom: 0;left: 0;right: 0;top:0;background:' + overlay_color + ';height:100%; width:100%;opacity:0;} .evm_tagged_img:hover .lookbook-overlay {opacity:1;}</style>').appendTo('body');
                }
                if (grayscale == "show_grayscale") {
                    $('<style>.evm_tagged_img:hover img{opacity:1;filter:grayscale(100%);} </style>').appendTo('body');
                }
                if (screen.width > 440) {
                    $('<style>.evm-lookbook li:nth-child(' + no_of_img + 'n+1){clear:both}</style>').appendTo('body');
                }
                if (screen.width <= 440) {
                    $(".evm-lookbook li:nth-child(2n+1)").css("clear", "both");
                }
                if (start == 0 && total_records > display_next) {
                    $('<div style="float:left;width:100%;padding-top:10px;"><div id="loadmoreimage" style="display:none;text-align:center;" >Loading...</div><p align="center" class="loadmore" ><button id="evm_more">Load More..</button></p></div>').insertAfter("#evm-lookbook-" + GalleryId);
                }
                if (start == 0) {
                    // if(flag=='notadded')
                    //       {
                    //           $.noConflict();
                    //       }
                    $("#evm-lookbook-" + GalleryId).before("<div><input type='hidden' value='' id='evm_fancybox-wrap_left_px' /><input type='hidden' value='" + ProductId + "' id='ProID' /><input type='hidden' value='" + URL + "' id='URL' /><input type='hidden' value='" + start_limit + "' id='startlimit' /><input type='hidden' value='" + ShopId + "' id='ShopId' /><input type='hidden' value='" + GalleryId + "' id='GalleryId' /></div>");
                }
                if (enable_loadmore == 'false' || enable_loadmore == false) {
                    $(".loadmore").hide();
                }

            }
            $("#evm-lookbook-" + GalleryId).before("<div><input type='hidden' value='" + data.store + "' id='evm_shop_id' /><input type='hidden' value='" + data.shop_currency_format + "' id='evm_shop_currencyformat' /><input type='hidden' value='" + currency + "' id='evm_currency' /><input type='hidden' value='" + data.cart_option_type + "' id='evm_cart_option_type' /></div>");
            if (view == "slider") {
                $('<style>.slider_caption{font-size:' + font_size + '; color:' + font_color + ';}</style>').appendTo('body');
                ! function($, a) {
                    "use strict";
                    var b = {
                        item: slider_item,
                        autoWidth: !1,
                        slideMove: 1,
                        slideMargin: 10,
                        addClass: "",
                        mode: "slide",
                        useCSS: !0,
                        cssEasing: "ease",
                        easing: "linear",
                        speed: 1e3,
                        auto: !0,
                        pauseOnHover: !0,
                        loop: !0,
                        slideEndAnimation: !0,
                        pause: 2e3,
                        keyPress: !1,
                        controls: !0,
                        prevHtml: "",
                        nextHtml: "",
                        rtl: !1,
                        adaptiveHeight: !1,
                        vertical: !1,
                        verticalHeight: 500,
                        vThumbWidth: 100,
                        thumbItem: 10,
                        pager: !0,
                        gallery: !1,
                        galleryMargin: 5,
                        thumbMargin: 5,
                        currentPagerPosition: "middle",
                        enableTouch: !0,
                        enableDrag: !0,
                        freeMove: !0,
                        swipeThreshold: 40,
                        responsive: [],
                        onBeforeStart: function(a) {},
                        onSliderLoad: function(a) {},
                        onBeforeSlide: function(a, b) {},
                        onAfterSlide: function(a, b) {},
                        onBeforeNextSlide: function(a, b) {},
                        onBeforePrevSlide: function(a, b) {}
                    };
                    $.fn.lightSlider = function(f) {
                        if (0 === this.length) return this;
                        if (this.length > 1) return this.each(function() {
                            $(this).lightSlider(f)
                        }), this;
                        var e = {},
                            c = $.extend(!0, {}, b, f),
                            g = {},
                            a = this;
                        e.$el = this, "fade" === c.mode && (c.vertical = !1);
                        var h = a.children(),
                            i = $(window).width(),
                            j = null,
                            k = null,
                            l = 0,
                            m = 0,
                            n = !1,
                            o = 0,
                            p = "",
                            q = 0,
                            r = !0 === c.vertical ? "height" : "width",
                            s = !0 === c.vertical ? "margin-bottom" : "margin-right",
                            t = 0,
                            u = 0,
                            v = 0,
                            w = 0,
                            x = null,
                            y = "ontouchstart" in document.documentElement,
                            d = {};
                        return d.chbreakpoint = function() {
                            if (i = $(window).width(), c.responsive.length) {
                                var e;
                                if (!1 === c.autoWidth && (e = c.item), i < c.responsive[0].breakpoint)
                                    for (var b = 0; b < c.responsive.length; b++) i < c.responsive[b].breakpoint && (j = c.responsive[b].breakpoint, k = c.responsive[b]);
                                if (null != k)
                                    for (var a in k.settings) k.settings.hasOwnProperty(a) && ((void 0 === g[a] || null === g[a]) && (g[a] = c[a]), c[a] = k.settings[a]);
                                if (!$.isEmptyObject(g) && i > c.responsive[0].breakpoint)
                                    for (var d in g) g.hasOwnProperty(d) && (c[d] = g[d]);
                                !1 === c.autoWidth && t > 0 && v > 0 && e !== c.item && (q = Math.round(t / ((v + c.slideMargin) * c.slideMove)))
                            }
                        }, d.calSW = function() {
                            !1 === c.autoWidth && (v = (o - (c.item * c.slideMargin - c.slideMargin)) / c.item)
                        }, d.calWidth = function(d) {
                            var b = !0 === d ? p.find(".lslide").length : h.length;
                            if (!1 === c.autoWidth) m = b * (v + c.slideMargin);
                            else {
                                m = 0;
                                for (var a = 0; a < b; a++) m += parseInt(h.eq(a).width()) + c.slideMargin
                            }
                            return m
                        }, (e = {
                            doCss: function() {
                                return !!(c.useCSS && function() {
                                    for (var b = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], c = document.documentElement, a = 0; a < b.length; a++)
                                        if (b[a] in c.style) return !0
                                }())
                            },
                            keyPress: function() {
                                c.keyPress && $(document).on("keyup.lightslider", function(b) {
                                    $(":focus").is("input, textarea") || (b.preventDefault ? b.preventDefault() : b.returnValue = !1, 37 === b.keyCode ? a.goToPrevSlide() : 39 === b.keyCode && a.goToNextSlide())
                                })
                            },
                            controls: function() {
                                c.controls && (a.after('<div class="lSAction"><a class="lSPrev">' + c.prevHtml + '</a><a class="lSNext">' + c.nextHtml + "</a></div>"), c.autoWidth ? d.calWidth(!1) < o && p.find(".lSAction").hide() : l <= c.item && p.find(".lSAction").hide(), p.find(".lSAction a").on("click", function(b) {
                                    return b.preventDefault ? b.preventDefault() : b.returnValue = !1, "lSPrev" === $(this).attr("class") ? a.goToPrevSlide() : a.goToNextSlide(), !1
                                }))
                            },
                            initialStyle: function() {
                                var b = this;
                                "fade" === c.mode && (c.autoWidth = !1, c.slideEndAnimation = !1), c.auto && (c.slideEndAnimation = !1), c.autoWidth && (c.slideMove = 1, c.item = 1), c.loop && (c.slideMove = 1, c.freeMove = !1), c.onBeforeStart.call(this, a), d.chbreakpoint(), a.addClass("lightSlider").wrap('<div class="lSSlideOuter ' + c.addClass + '"><div class="lSSlideWrapper"></div></div>'), p = a.parent(".lSSlideWrapper"), !0 === c.rtl && p.parent().addClass("lSrtl"), c.vertical ? (p.parent().addClass("vertical"), o = c.verticalHeight, p.css("height", o + "px")) : o = a.outerWidth(), h.addClass("lslide"), !0 === c.loop && "slide" === c.mode && (d.calSW(), d.clone = function() {
                                    if (d.calWidth(!0) > o) {
                                        for (var l = 0, m = 0, f = 0; f < h.length && (l += parseInt(a.find(".lslide").eq(f).width()) + c.slideMargin, m++, !(l >= o + c.slideMargin)); f++);
                                        var e = !0 === c.autoWidth ? m : c.item;
                                        if (e < a.find(".clone.left").length)
                                            for (var g = 0; g < a.find(".clone.left").length - e; g++) h.eq(g).remove();
                                        if (e < a.find(".clone.right").length)
                                            for (var i = h.length - 1; i > h.length - 1 - a.find(".clone.right").length; i--) q--, h.eq(i).remove();
                                        for (var j = a.find(".clone.right").length; j < e; j++) a.find(".lslide").eq(j).clone().removeClass("lslide").addClass("clone right").appendTo(a), q++;
                                        for (var k = a.find(".lslide").length - a.find(".clone.left").length; k > a.find(".lslide").length - e; k--) a.find(".lslide").eq(k - 1).clone().removeClass("lslide").addClass("clone left").prependTo(a);
                                        h = a.children()
                                    } else h.hasClass("clone") && (a.find(".clone").remove(), b.move(a, 0))
                                }, d.clone()), d.sSW = function() {
                                    l = h.length, !0 === c.rtl && !1 === c.vertical && (s = "margin-left"), !1 === c.autoWidth && h.css(r, v + "px"), h.css(s, c.slideMargin + "px"), m = d.calWidth(!1), a.css(r, m + "px"), !0 === c.loop && "slide" === c.mode && !1 === n && (q = a.find(".clone.left").length)
                                }, d.calL = function() {
                                    l = (h = a.children()).length
                                }, this.doCss() && p.addClass("usingCss"), d.calL(), "slide" === c.mode ? (d.calSW(), d.sSW(), !0 === c.loop && (t = b.slideValue(), this.move(a, t)), !1 === c.vertical && this.setHeight(a, !1)) : (this.setHeight(a, !0), a.addClass("lSFade"), this.doCss() || (h.fadeOut(0), h.eq(q).fadeIn(0))), !0 === c.loop && "slide" === c.mode ? h.eq(q).addClass("active") : h.first().addClass("active")
                            },
                            pager: function() {
                                var f = this;
                                if (d.createPager = function() {
                                        w = (o - (c.thumbItem * c.thumbMargin - c.thumbMargin)) / c.thumbItem;
                                        var h = p.find(".lslide"),
                                            k = p.find(".lslide").length,
                                            b = 0,
                                            d = "",
                                            g = 0;
                                        for (b = 0; b < k; b++) {
                                            "slide" === c.mode && (c.autoWidth ? g += (parseInt(h.eq(b).width()) + c.slideMargin) * c.slideMove : g = b * ((v + c.slideMargin) * c.slideMove));
                                            var l = h.eq(b * c.slideMove).attr("data-thumb");
                                            if (!0 === c.gallery ? d += '<li style="width:100%;' + r + ":" + w + "px;" + s + ":" + c.thumbMargin + 'px"><a href="#"><img src="' + l + '" /></a></li>' : d += '<li><a href="#">' + (b + 1) + "</a></li>", "slide" === c.mode && g >= m - o - c.slideMargin) {
                                                b += 1;
                                                var i = 2;
                                                c.autoWidth && (d += '<li><a href="#">' + (b + 1) + "</a></li>", i = 1), b < i ? (d = null, p.parent().addClass("noPager")) : p.parent().removeClass("noPager");
                                                break
                                            }
                                        }
                                        var e = p.parent();
                                        e.find(".lSPager").html(d), !0 === c.gallery && (!0 === c.vertical && e.find(".lSPager").css("width", c.vThumbWidth + "px"), u = b * (c.thumbMargin + w) + .5, e.find(".lSPager").css({
                                            property: u + "px",
                                            "transition-duration": c.speed + "ms"
                                        }), !0 === c.vertical && p.parent().css("padding-right", c.vThumbWidth + c.galleryMargin + "px"), e.find(".lSPager").css(r, u + "px"));
                                        var j = e.find(".lSPager").find("li");
                                        j.first().addClass("active"), j.on("click", function() {
                                            return !0 === c.loop && "slide" === c.mode ? q += j.index(this) - e.find(".lSPager").find("li.active").index() : q = j.index(this), a.mode(!1), !0 === c.gallery && f.slideThumb(), !1
                                        })
                                    }, c.pager) {
                                    var b = "lSpg";
                                    c.gallery && (b = "lSGallery"), p.after('<ul class="lSPager ' + b + '"></ul>');
                                    var e = c.vertical ? "margin-left" : "margin-top";
                                    p.parent().find(".lSPager").css(e, c.galleryMargin + "px"), d.createPager()
                                }
                                setTimeout(function() {
                                    d.init()
                                }, 0)
                            },
                            setHeight: function(b, f) {
                                var a = null,
                                    d = this;
                                a = c.loop ? b.children(".lslide ").first() : b.children().first();
                                var e = function() {
                                    var c = a.outerHeight(),
                                        d = 0,
                                        e = c;
                                    f && (c = 0, d = 100 * e / o), b.css({
                                        "min-height": "743px",
                                        "padding-bottom": d + "%"
                                    })
                                };
                                e(), a.find("img").length ? a.find("img")[0].complete ? (e(), x || d.auto()) : a.find("img").on("load", function() {
                                    setTimeout(function() {
                                        e(), x || d.auto()
                                    }, 100)
                                }) : x || d.auto()
                            },
                            active: function(b, e) {
                                this.doCss() && "fade" === c.mode && p.addClass("on");
                                var f, g, d = 0;
                                q * c.slideMove < l ? (b.removeClass("active"), this.doCss() || "fade" !== c.mode || !1 !== e || b.fadeOut(c.speed), d = !0 === e ? q : q * c.slideMove, !0 === e && (g = (f = b.length) - 1, d + 1 >= f && (d = g)), !0 === c.loop && "slide" === c.mode && (d = !0 === e ? q - a.find(".clone.left").length : q * c.slideMove, !0 === e && (g = (f = b.length) - 1, d + 1 === f ? d = g : d + 1 > f && (d = 0))), this.doCss() || "fade" !== c.mode || !1 !== e || b.eq(d).fadeIn(c.speed), b.eq(d).addClass("active")) : (b.removeClass("active"), b.eq(b.length - 1).addClass("active"), this.doCss() || "fade" !== c.mode || !1 !== e || (b.fadeOut(c.speed), b.eq(d).fadeIn(c.speed)))
                            },
                            move: function(b, a) {
                                !0 === c.rtl && (a = -a), this.doCss() ? !0 === c.vertical ? b.css({
                                    transform: "translate3d(0px, " + -a + "px, 0px)",
                                    "-webkit-transform": "translate3d(0px, " + -a + "px, 0px)"
                                }) : b.css({
                                    transform: "translate3d(" + -a + "px, 0px, 0px)",
                                    "-webkit-transform": "translate3d(" + -a + "px, 0px, 0px)"
                                }) : !0 === c.vertical ? b.css("position", "relative").animate({
                                    top: -a + "px"
                                }, c.speed, c.easing) : b.css("position", "relative").animate({
                                    left: -a + "px"
                                }, c.speed, c.easing);
                                var d = p.parent().find(".lSPager").find("li");
                                this.active(d, !0)
                            },
                            fade: function() {
                                this.active(h, !1);
                                var a = p.parent().find(".lSPager").find("li");
                                this.active(a, !0)
                            },
                            slide: function() {
                                var b = this;
                                d.calSlide = function() {
                                    m > o && (t = b.slideValue(), b.active(h, !1), t > m - o - c.slideMargin ? t = m - o - c.slideMargin : t < 0 && (t = 0), b.move(a, t), !0 === c.loop && "slide" === c.mode && (q >= l - a.find(".clone.left").length / c.slideMove && b.resetSlide(a.find(".clone.left").length), 0 === q && b.resetSlide(p.find(".lslide").length)))
                                }, d.calSlide()
                            },
                            resetSlide: function(b) {
                                var d = this;
                                p.find(".lSAction a").addClass("disabled"), setTimeout(function() {
                                    q = b, p.css("transition-duration", "0ms"), t = d.slideValue(), d.active(h, !1), e.move(a, t), setTimeout(function() {
                                        p.css("transition-duration", c.speed + "ms"), p.find(".lSAction a").removeClass("disabled")
                                    }, 50)
                                }, c.speed + 100)
                            },
                            slideValue: function() {
                                var a = 0;
                                if (!1 === c.autoWidth) a = q * ((v + c.slideMargin) * c.slideMove);
                                else {
                                    a = 0;
                                    for (var b = 0; b < q; b++) a += parseInt(h.eq(b).width()) + c.slideMargin
                                }
                                return a
                            },
                            slideThumb: function() {
                                switch (c.currentPagerPosition) {
                                    case "left":
                                        f = 0;
                                        break;
                                    case "middle":
                                        f = o / 2 - w / 2;
                                        break;
                                    case "right":
                                        f = o - w
                                }
                                var f, b = q - a.find(".clone.left").length,
                                    e = p.parent().find(".lSPager");
                                "slide" === c.mode && !0 === c.loop && (b >= e.children().length ? b = 0 : b < 0 && (b = e.children().length));
                                var d = b * (w + c.thumbMargin) - f;
                                d + o > u && (d = u - o - c.thumbMargin), d < 0 && (d = 0), this.move(e, d)
                            },
                            auto: function() {
                                c.auto && (clearInterval(x), x = setInterval(function() {
                                    a.goToNextSlide()
                                }, c.pause))
                            },
                            pauseOnHover: function() {
                                var b = this;
                                c.auto && c.pauseOnHover && (p.on("mouseenter", function() {
                                    $(this).addClass("ls-hover"), a.pause(), c.auto = !0
                                }), p.on("mouseleave", function() {
                                    $(this).removeClass("ls-hover"), p.find(".lightSlider").hasClass("lsGrabbing") || b.auto()
                                }))
                            },
                            touchMove: function(e, f) {
                                if (p.css("transition-duration", "0ms"), "slide" === c.mode) {
                                    var b = t - (e - f);
                                    if (b >= m - o - c.slideMargin) {
                                        if (!1 === c.freeMove) b = m - o - c.slideMargin;
                                        else {
                                            var d = m - o - c.slideMargin;
                                            b = d + (b - d) / 5
                                        }
                                    } else b < 0 && (!1 === c.freeMove ? b = 0 : b /= 5);
                                    this.move(a, b)
                                }
                            },
                            touchEnd: function(b) {
                                if (p.css("transition-duration", c.speed + "ms"), "slide" === c.mode) {
                                    var f = !1,
                                        d = !0;
                                    (t -= b) > m - o - c.slideMargin ? (t = m - o - c.slideMargin, !1 === c.autoWidth && (f = !0)) : t < 0 && (t = 0);
                                    var e = function(g) {
                                        var b = 0;
                                        if (!f && g && (b = 1), c.autoWidth)
                                            for (var d = 0, a = 0; a < h.length && (d += parseInt(h.eq(a).width()) + c.slideMargin, q = a + b, !(d >= t)); a++);
                                        else {
                                            var e = t / ((v + c.slideMargin) * c.slideMove);
                                            q = parseInt(e) + b, t >= m - o - c.slideMargin && e % 1 != 0 && q++
                                        }
                                    };
                                    b >= c.swipeThreshold ? (e(!1), d = !1) : b <= -c.swipeThreshold && (e(!0), d = !1), a.mode(d), this.slideThumb()
                                } else b >= c.swipeThreshold ? a.goToPrevSlide() : b <= -c.swipeThreshold && a.goToNextSlide()
                            },
                            enableDrag: function() {
                                var a = this;
                                if (!y) {
                                    var b = 0,
                                        d = 0,
                                        e = !1;
                                    p.find(".lightSlider").addClass("lsGrab"), p.on("mousedown", function(a) {
                                        if (m < o && 0 !== m) return !1;
                                        "lSPrev" !== $(a.target).attr("class") && "lSNext" !== $(a.target).attr("class") && (b = !0 === c.vertical ? a.pageY : a.pageX, e = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1, p.scrollLeft += 1, p.scrollLeft -= 1, p.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"), clearInterval(x))
                                    }), $(window).on("mousemove", function(f) {
                                        e && (d = !0 === c.vertical ? f.pageY : f.pageX, a.touchMove(d, b))
                                    }), $(window).on("mouseup", function(f) {
                                        if (e) {
                                            p.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"), e = !1;
                                            var g = (d = !0 === c.vertical ? f.pageY : f.pageX) - b;
                                            Math.abs(g) >= c.swipeThreshold && $(window).on("click.ls", function(a) {
                                                a.preventDefault ? a.preventDefault() : a.returnValue = !1, a.stopImmediatePropagation(), a.stopPropagation(), $(window).off("click.ls")
                                            }), a.touchEnd(g)
                                        }
                                    })
                                }
                            },
                            enableTouch: function() {
                                var a = this;
                                if (y) {
                                    var b = {},
                                        d = {};
                                    p.on("touchstart", function(a) {
                                        d = a.originalEvent.targetTouches[0], b.pageX = a.originalEvent.targetTouches[0].pageX, b.pageY = a.originalEvent.targetTouches[0].pageY, clearInterval(x)
                                    }), p.on("touchmove", function(e) {
                                        if (m < o && 0 !== m) return !1;
                                        var f = Math.abs((d = e.originalEvent.targetTouches[0]).pageX - b.pageX),
                                            g = Math.abs(d.pageY - b.pageY);
                                        !0 === c.vertical ? (3 * g > f && e.preventDefault(), a.touchMove(d.pageY, b.pageY)) : (3 * f > g && e.preventDefault(), a.touchMove(d.pageX, b.pageX))
                                    }), p.on("touchend", function() {
                                        var e;
                                        if (m < o && 0 !== m) return !1;
                                        e = !0 === c.vertical ? d.pageY - b.pageY : d.pageX - b.pageX, a.touchEnd(e)
                                    })
                                }
                            },
                            build: function() {
                                var a = this;
                                a.initialStyle(), this.doCss() && (!0 === c.enableTouch && a.enableTouch(), !0 === c.enableDrag && a.enableDrag()), $(window).on("focus", function() {
                                    a.auto()
                                }), $(window).on("blur", function() {
                                    clearInterval(x)
                                }), a.pager(), a.pauseOnHover(), a.controls(), a.keyPress()
                            }
                        }).build(), d.init = function() {
                            d.chbreakpoint(), !0 === c.vertical ? (o = c.item > 1 ? c.verticalHeight : h.outerHeight(), p.css("height", o + "px")) : o = p.outerWidth(), !0 === c.loop && "slide" === c.mode && d.clone(), d.calL(), "slide" === c.mode && a.removeClass("lSSlide"), "slide" === c.mode && (d.calSW(), d.sSW()), setTimeout(function() {
                                "slide" === c.mode && a.addClass("lSSlide")
                            }, 1e3), c.pager && d.createPager(), !0 === c.adaptiveHeight && !1 === c.vertical && a.css("height", h.eq(q).outerHeight(!0)), !1 === c.adaptiveHeight && ("slide" === c.mode ? !1 === c.vertical ? e.setHeight(a, !1) : e.auto() : e.setHeight(a, !0)), !0 === c.gallery && e.slideThumb(), "slide" === c.mode && e.slide(), !1 === c.autoWidth ? h.length <= c.item ? p.find(".lSAction").hide() : p.find(".lSAction").show() : d.calWidth(!1) < o && 0 !== m ? p.find(".lSAction").hide() : p.find(".lSAction").show()
                        }, a.goToPrevSlide = function() {
                            q > 0 ? (c.onBeforePrevSlide.call(this, a, q), q--, a.mode(!1), !0 === c.gallery && e.slideThumb()) : !0 === c.loop ? (c.onBeforePrevSlide.call(this, a, q), "fade" === c.mode && (q = parseInt((l - 1) / c.slideMove)), a.mode(!1), !0 === c.gallery && e.slideThumb()) : !0 === c.slideEndAnimation && (a.addClass("leftEnd"), setTimeout(function() {
                                a.removeClass("leftEnd")
                            }, 400))
                        }, a.goToNextSlide = function() {
                            var b = !0;
                            "slide" === c.mode && (b = e.slideValue() < m - o - c.slideMargin), q * c.slideMove < l - c.slideMove && b ? (c.onBeforeNextSlide.call(this, a, q), q++, a.mode(!1), !0 === c.gallery && e.slideThumb()) : !0 === c.loop ? (c.onBeforeNextSlide.call(this, a, q), q = 0, a.mode(!1), !0 === c.gallery && e.slideThumb()) : !0 === c.slideEndAnimation && (a.addClass("rightEnd"), setTimeout(function() {
                                a.removeClass("rightEnd")
                            }, 400))
                        }, a.mode = function(b) {
                            !0 === c.adaptiveHeight && !1 === c.vertical && a.css("height", h.eq(q).outerHeight(!0)), !1 === n && ("slide" === c.mode ? e.doCss() && (a.addClass("lSSlide"), "" !== c.speed && p.css("transition-duration", c.speed + "ms"), "" !== c.cssEasing && p.css("transition-timing-function", c.cssEasing)) : e.doCss() && ("" !== c.speed && a.css("transition-duration", c.speed + "ms"), "" !== c.cssEasing && a.css("transition-timing-function", c.cssEasing))), b || c.onBeforeSlide.call(this, a, q), "slide" === c.mode ? e.slide() : e.fade(), p.hasClass("ls-hover") || e.auto(), setTimeout(function() {
                                b || c.onAfterSlide.call(this, a, q)
                            }, c.speed), n = !0
                        }, a.play = function() {
                            a.goToNextSlide(), c.auto = !0, e.auto()
                        }, a.pause = function() {
                            c.auto = !1, clearInterval(x)
                        }, a.refresh = function() {
                            d.init()
                        }, a.getCurrentSlideCount = function() {
                            var e = q;
                            if (c.loop) {
                                var d = p.find(".lslide").length,
                                    b = a.find(".clone.left").length;
                                e = q <= b - 1 ? d + (q - b) : q >= d + b ? q - d - b : q - b
                            }
                            return e + 1
                        }, a.getTotalSlideCount = function() {
                            return p.find(".lslide").length
                        }, a.goToSlide = function(b) {
                            q = c.loop ? b + a.find(".clone.left").length - 1 : b, a.mode(!1), !0 === c.gallery && e.slideThumb()
                        }, a.destroy = function() {
                            a.lightSlider && (a.goToPrevSlide = function() {}, a.goToNextSlide = function() {}, a.mode = function() {}, a.play = function() {}, a.pause = function() {}, a.refresh = function() {}, a.getCurrentSlideCount = function() {}, a.getTotalSlideCount = function() {}, a.goToSlide = function() {}, a.lightSlider = null, d = {
                                init: function() {}
                            }, a.parent().parent().find(".lSAction, .lSPager").remove(), a.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(), a.children().removeAttr("style"), h.removeClass("lslide active"), a.find(".clone").remove(), h = null, x = null, n = !1, q = 0)
                        }, setTimeout(function() {
                            c.onSliderLoad.call(this, a)
                        }, 10), $(window).on("resize orientationchange", function(a) {
                            setTimeout(function() {
                                a.preventDefault ? a.preventDefault() : a.returnValue = !1, d.init()
                            }, 200)
                        }), this
                    }
                }(jQuery)
                jQuery(document).ready(function($) {

                    $(window).resize(function() {
                        $lightSlider = "#evm-lookbook-" + GalleryId.find('.lightSlider');
                        $lightSlider.css('height', $lightSlider.find('.lslide').first().outerHeight(true));
                    });


                    var rtlval = false;
                    if (ShopId == 'badimtlv.myshopify.com') {
                        rtlval = true;
                    }
                    var evmpager = false;
                    var evmcontrols = evmloop = true;
                    if (enable_pager == "true") {
                        evmpager = true;
                        evmcontrols = false;
                    }
                    mobile_slider_item = 1;
                    if ($("#evm_shop_id").val() == '6039') {
                        mobile_slider_item = slider_item;
                    } else if ($("#evm_shop_id").val() == '5281') {
                        mobile_slider_item = 2;
                    }
                    // else if($("#evm_shop_id").val() == '7088')
                    // {
                    // 	mobile_slider_item = 3;
                    // }
                    if ($("#evm_shop_id").val() == '7313') {
                        evmloop = false;
                    }
                    if (enable_auto_rotate == "true") {
                        $("#evm-lookbook-" + GalleryId).lightSlider({
                            loop: evmloop,
                            item: slider_item,
                            pager: evmpager,
                            controls: evmcontrols,
                            auto: true,
                            speed: 500,
                            pause: 4000,
                            pauseOnHover: true,
                            keyPress: true,
                            slideMove: 1,
                            rtl: rtlval,
                            responsive: [{
                                breakpoint: 800,
                                settings: {
                                    item: mobile_slider_item,
                                    slideMove: 1
                                }
                            }, {
                                breakpoint: 480,
                                settings: {
                                    item: mobile_slider_item,
                                    slideMove: 1
                                }
                            }]
                        });
                    }
                    if (enable_auto_rotate == "false") {
                        $("#evm-lookbook-" + GalleryId).lightSlider({
                            loop: evmloop,
                            item: slider_item,
                            pager: evmpager,
                            controls: evmcontrols,
                            auto: false,
                            speed: 500,
                            pauseOnHover: true,
                            keyPress: true,
                            slideMove: 1,
                            rtl: rtlval,
                            responsive: [{
                                breakpoint: 800,
                                settings: {
                                    item: mobile_slider_item,
                                    slideMove: 1
                                }
                            }, {
                                breakpoint: 480,
                                settings: {
                                    item: mobile_slider_item,
                                    slideMove: 1
                                }
                            }]
                        });
                    }
                });
            }
            if (view == "list") {
                view = "grid";
            }
            $("#startlimit").val(start_limit);
            $("#display_next").val(data.display_next);
            $("#total_records").val(data.total_records);
            $("#evm-lookbook-" + GalleryId).after("<div id='evmcartdivadd'></div>");
            $("#evm-lookbook-" + GalleryId).after('<div class="evmcartmodal fade" tabindex="-1" id="evmcartwithchekout" style="display:none;"> <div class="evmcartmodal-dialog" role="document" > <form action="/cart" method="post" novalidate="" ><div class="evmcartmodal-content"> <div class="evmcartmodal-header" style="background: #ffffff; color: black;"><div class="cartmsg"></div>  <div> <h4 class="evmcartmodal-title evmcartmsg">YOUR SHOPPING CART</h4> <span aria-hidden="true" class="lookbook_modalclose">Ã—</span></div>  </div> <div class="evmcartmodal-body" > <div class="evmshopping-cart"> </div> <div class="evmshopping-cartsubtotal"> </div>  </div> <div class="evmcartmodal-footer" style="margin-top: 0px;"><button type="button" name="viewcart" id="view_cart" class="ebtn evm_viewcart" >View Cart</button><button type="submit" name="checkout" class="ebtn btn_checkout" >Checkout</button><button type="button" class="ebtn evmcheckoutcountinueshopping" data-dismiss="evmcartmodal" aria-hidden="true">Continue Shopping</button></div></div></form></div></div>');
            if (start == 0) {
                if (view == "grid" || view == "collage") {
                    $("#evm-lookbook-" + GalleryId).append("<ul class='EVMLookbookgrid " + animation_style + "' id='EVMgrid'>");
                }
            }
            if (view == 'slider') {

                $('<style>.evmsliderdiv img {max-width: 100% !important;margin: 0 auto !important;}.evmsliderdiv{ position: relative; display: inline-block; max-width: 100% !important; text-align: center;} .lSSlideWrapper .evm_tagged_img { text-align: center; } .evmsliderdiv img { text-align: center; margin: 0 auto; width: auto;} </style>').appendTo('body');
                if (screen.width <= 479) {
                    $('<style>.evm_tag_view span.plus_icon { width: 15px !important; font-size: 15px !important;height: 15px !important; line-height: 15px !important; }</style>').appendTo('body');
                }
            }
            $.each(imgId, function(i, val) {
                if (show_captions == "") {
                    img_caption[i] = "";
                }
                if (view == "grid") {
                    if (show_captions == "") {
                        $(".EVMLookbookgrid").append("<li style='padding:20px 0px; float:left; width:100%;  list-style: none;' id='evm_tagged_img-" + imgId[i] + "' class='evm_tagged_img " + hoverclass + "'><img src='" + iname[i] + "' style='float:left;width:100%;' id='" + i + "' alt='" + img_caption[i] + "'/><figcaption></figcaption></li>  ");
                    } else {
                        $(".EVMLookbookgrid").append("<li style='padding:20px 0px; float:left; width:100%;  list-style: none;' id='evm_tagged_img-" + imgId[i] + "' class='evm_tagged_img " + hoverclass + "'><img src='" + iname[i] + "' style='float:left;width:100%;' id='" + i + "' alt='" + img_caption[i] + "'/><figcaption></figcaption><div style='color:black; margin-bottom: 25px;margin-top: 25px;float: left;'>" + img_caption[i] + "</div></li>");
                    }
                    if (tag_products != null) {
                        if (typeof tag_products[val] != 'undefined' && tag_products[val] instanceof Array) {
                            var target = '';
                            if (ShopId == "the-perfect-hoop.myshopify.com") target = "target='_blank'";
                            $('#evm_tagged_img-' + imgId[i]).append("<a " + target + " class='img evmhash' rel='gallery1' href='" + imgNames[i] + "' id='" + imgId[i] + "' data-value='" + val + "' title='" + img_caption[i] + "'><div class='lookbook-overlay lkbboverlay'>" + hovercontentshopnow + "</div></a>");
                        } else {
                            $('#evm_tagged_img-' + imgId[i]).append("<a class='img evmhash' rel='gallery1' href='" + imgNames[i] + "' id='" + imgId[i] + "' data-value='" + val + "' title='" + img_caption[i] + "'><div class='lookbook-overlay lkbboverlay'><span class='lookbook-overlay-content lkbboverlay'>" + hovercontent + "</div></a>");
                        }
                    } else {
                        $('#evm_tagged_img-' + imgId[i]).append("<a class='img evmhash' rel='gallery1' href='" + imgNames[i] + "' id='" + imgId[i] + "' data-value='" + val + "' title='" + img_caption[i] + "'><div class='lookbook-overlay lkbboverlay'><span class='lookbook-overlay-content'>" + hovercontent + "</div></a>");
                    }
                    $(".evm_tagged_img").addClass("evm_grid");
                } else if (view == "collage") {
                    /**********collage code here**********/
                    $(".EVMLookbookgrid").append("<div class='lkbk_container_evm " + collage_style + " " + hoverclass + "' id='evm_tagged_img-" + imgId[i] + "' ><div class='lkbk_div_im' style='background:url(" + iname[i] + ");' id='" + i + "' aria-label='" + img_caption[i] + "' ><figcaption></figcaption></div></div>");
                    if (tag_products != null) {
                        if (typeof tag_products[val] != 'undefined' && tag_products[val] instanceof Array) {
                            $('#evm_tagged_img-' + imgId[i]).append("<a class='img evmhash' rel='gallery1' href='" + imgNames[i] + "' id='" + imgId[i] + "' data-value='" + val + "' title='" + img_caption[i] + "'><div class='lookbook-overlay lkbboverlay'>" + hovercontentshopnow + "</div></a>");
                        } else {
                            $('#evm_tagged_img-' + imgId[i]).append("<a class='img evmhash' rel='gallery1' href='" + imgNames[i] + "' id='" + imgId[i] + "' data-value='" + val + "' title='" + img_caption[i] + "'><div class='lookbook-overlay lkbboverlay'><span class='lookbook-overlay-content lkbboverlay'>" + hovercontent + "</div></a>");
                        }
                    } else {
                        $('#evm_tagged_img-' + imgId[i]).append("<a class='img evmhash' rel='gallery1' href='" + imgNames[i] + "' id='" + imgId[i] + "' data-value='" + val + "' title='" + img_caption[i] + "'><div class='lookbook-overlay lkbboverlay'><span class='lookbook-overlay-content'>" + hovercontent + "</div></a>");
                    }
                    $(".evm_tagged_img").addClass("evm_grid");
                } else {
                    if (img_heading_location == 'above') {
                        $("#evm-lookbook-" + GalleryId).append("<li style='padding:20px 0px; float:left; width:100%;  list-style: none;' id='evm_tagged_img-" + imgId[i] + "' class='evm_tagged_img lslide'><div class='evmsliderdiv' id='evm_tagged_img_inner_div-" + imgId[i] + "''><p class='slider_caption'>" + img_caption[i] + "</p><img src='" + iname[i] + "' id='" + i + "' alt='" + img_caption[i] + "' /></div></li>");
                    } else {
                        $("#evm-lookbook-" + GalleryId).append("<li style='padding:20px 0px; float:left; width:100%;  list-style: none;' id='evm_tagged_img-" + imgId[i] + "' class='evm_tagged_img lslide'><div class='evmsliderdiv' id='evm_tagged_img_inner_div-" + imgId[i] + "''><img src='" + iname[i] + "' id='" + i + "' alt='" + img_caption[i] + "' /><p class='slider_caption'>" + img_caption[i] + "</p></div></li>");
                    }
                }
                if (tag_products != null) {
                    if (typeof tag_products[val] != 'undefined' && tag_products[val] instanceof Array) {
                        var product_detail = tag_products[val];
                        $.each(product_detail, function(index, value) {
                            if (product_detail[index]['PRO_id']) {
                                var PID = product_detail[index]['PRO_id'];
                            }
                            if (product_detail[index]['tag_y'] > "60") {
                                $('<style>#evm_lookbook_detail-' + product_detail[index]['id'] + '{bottom:-10px;} </style>').appendTo('body');
                            }
                            if (product_detail[index]['tag_y'] < "30") {
                                $('<style>#evm_lookbook_detail-' + product_detail[index]['id'] + '{top:0px;} </style>').appendTo('body');
                            }
                            if (product_detail[index]['tag_x'] < "30") {
                                $('<style>#evm_lookbook_detail-' + product_detail[index]['id'] + '{left:0px;} </style>').appendTo('body');
                            }
                            if (product_detail[index]['tag_x'] > "60") {
                                $('<style>#evm_lookbook_detail-' + product_detail[index]['id'] + '{right:-10px;} </style>').appendTo('body');
                            }
                            if (view == "slider") {
                                var tag_y = product_detail[index]['tag_y'];
                                if (screen.width <= 1024) {
                                    tag_y = product_detail[index]['tag_y'] - 5;
                                }
                                if (screen.width <= 479) {
                                    tag_y = product_detail[index]['tag_y'] - 2;
                                }
                                if (product_detail[index]['product_image'] != "blank") {
                                    //console.log(product_detail[index]['shopnowbuttonanchor']);			//style='font-family:arial;'
                                    $('#evm_tagged_img_inner_div-' + imgId[i]).append("<div class='evm_tag_view' id='evm_view_" + imgId[i] + "' style='left:" + product_detail[index]['tag_x'] + "%;top:" + tag_y + "%; '><a href='javascript:void(0);' id='evm_anchor_" + PID + "'><span class='plus_icon hotspot' id= 'plus" + product_detail[index]['id'] + "' onmouseover='changepdata(" + PID + ")' style='width:23px; height:23px; line-height:23px;font-size:23px; font-family: normal; text-align:center;'><div class='plus_icon_container'>+</div></span></a><div class='evm_lookbook_detail evmanimated fadeInLeftShort go' id='evm_lookbook_detail-" + product_detail[index]['id'] + "' style='position: absolute; width: 158px; z-index: 9999; margin-left: 18px;border-radius: 4px'><div class='evm_lookbook_detail_content'><a " + product_detail[index]['shopnowbuttonanchor'] + " id='evm_anchor_" + PID + "'><div class='evm_lookbook_img' style='background:url(" + product_detail[index]['product_image'] + ") no-repeat center center/cover; margin:0 auto; width:80px; max-width:98%; height:80px;float:none;'></div><div class='evm_look_book_title' >" + product_detail[index]['product_title'] + "</div></a></div><div class='evm_product_price' style='font-family:Arial;'>" + product_detail[index]['product_price'] + "</div><div class='evm_shop_now'><div class='evm_shop_now_container' " + product_detail[index]['shopnowbuttonanchor'] + " ><a  style='color:#eee; font-family:Arial; background:#222;padding: 6px 14px; border-radius: 4px;font-size:11px;text-transform:uppercase;cursor:pointer;' " + product_detail[index]['shopnowbuttonanchor'] + " id='evm_shopnow_anchor_" + PID + "'>" + product_detail[index]['shop_now'] + "</a></div></div></div></div>");
                                } else {
                                    $('#evm_tagged_img_inner_div-' + imgId[i]).append("<div class='evm_tag_view' id='evm_view_" + imgId[i] + "' style='left:" + product_detail[index]['tag_x'] + "%;top:" + tag_y + "%; '><a href='javascript:void(0);' id='evm_anchor_" + PID + "' ><span class='plus_icon hotspot' id= 'plus" + product_detail[index]['id'] + "' onmouseover='changepdata(" + PID + ")'  style='width:23px; height:23px; line-height:23px;text-align:center;font-size:23px; font-family: normal;'><div class='plus_icon_container'>+</div></span></a><div class='evm_lookbook_detail evm_lookbook_custom_url_detail evmanimated fadeInLeftShort go' id='evm_lookbook_detail-" + product_detail[index]['id'] + "' style='position: absolute; width: 158px; z-index: 9999; margin-left: 18px;border-radius: 4px'><div class='evm_lookbook_detail_content'><a " + product_detail[index]['shopnowbuttonanchor'] + " target='" + anchor_target + "' id='evm_ptitle_anchor_" + PID + "'><div class='evm_look_book_title' >" + product_detail[index]['product_title'] + "</div></a></div><div class='evm_product_price' style='font-family:Arial;'>" + product_detail[index]['product_price'] + "</div><div class='evm_shop_now'><div class='evm_shop_now_container'><a " + product_detail[index]['shopnowbuttonanchor'] + " id='evm_shopnow_anchor_" + PID + "' style='color:#eee; font-family:Arial; background:#222;padding: 6px 14px; border-radius: 4px;font-size:11px;text-transform:uppercase; cursor:pointer;'>" + product_detail[index]['shop_now'] + "</a></div></div></div></div>");
                                }
                            }
                            if (view == "grid" || view == "collage") {
                                if (product_detail[index]['product_image'] != "blank") {
                                    $('#evm_tagged_img-' + imgId[i]).append("<div class='evm-list evm-content" + i + "' style='display:none;'><div class='evm_tag_view' id='evm_view_" + imgId[i] + "' style='left:" + product_detail[index]['tag_x'] + "%;top:" + product_detail[index]['tag_y'] + "%; '><a href='javascript:void(0);' id='evm_anchor_" + PID + "' style='cursor:pointer;'><span class='plus_icon hotspot' id= 'plus" + product_detail[index]['id'] + "' style='width:23px; height:23px; line-height:23px; text-align:center;font-size:23px; font-family: normal;' onmouseover='changepdata(" + PID + ")' ><div class='plus_icon_container'>+</div></span></a><div class='evm_lookbook_detail evmanimated fadeInLeftShort go' id='evm_lookbook_detail-" + product_detail[index]['id'] + "' style='position: absolute; width: 158px; z-index: 9999; margin-left: 18px;border-radius: 4px'><div class='evm_lookbook_detail_content'><a " + product_detail[index]['shopnowbuttonanchor'] + " id='evm_ptitle_anchor_" + PID + "' style='cursor:pointer;'><div class='evm_lookbook_img' style='background:url(" + product_detail[index]['product_image'] + ") no-repeat center center/cover; margin:0 auto;width:80px; max-width:98%; height:130px;float:none;'></div><div class='evm_look_book_title' >" + product_detail[index]['product_title'] + "</div></a></div><div class='evm_product_price' style='font-family:Arial;'>" + product_detail[index]['product_price'] + "</div><div class='evm_shop_now'><div class='evm_shop_now_container'><a " + product_detail[index]['shopnowbuttonanchor'] + " id='evm_shopnow_anchor_" + PID + "'  style='color:#eee; font-family:Arial; background:#222;padding: 6px 14px; border-radius: 4px;font-size:11px;text-transform:uppercase;cursor:pointer;'>" + product_detail[index]['shop_now'] + "</a></div></div></div></div></div>");
                                } else {
                                    $('#evm_tagged_img-' + imgId[i]).append("<div class='evm-list evm-content" + i + "' style='display:none;'><div class='evm_tag_view' id='evm_view_" + imgId[i] + "' style='left:" + product_detail[index]['tag_x'] + "%;top:" + product_detail[index]['tag_y'] + "%; '><a href='javascript:void(0);' id='evm_anchor_" + PID + "'><span class='plus_icon hotspot' id= 'plus" + product_detail[index]['id'] + "' style=' width:23px; height:23px; line-height:23px;text-align:center;font-size:23px; font-family: normal;' onmouseover='changepdata(" + PID + ")'><div class='plus_icon_container'>+</div></span></a><div class='evm_lookbook_detail evm_lookbook_custom_url_detail evmanimated fadeInLeftShort go' id='evm_lookbook_detail-" + product_detail[index]['id'] + "' style='position: absolute; width: 158px; z-index: 9999; margin-left: 18px;border-radius: 4px'><div class='evm_lookbook_detail_content'><a " + product_detail[index]['shopnowbuttonanchor'] + " id='evm_ptitle_anchor_" + PID + "'><div class='evm_look_book_title' >" + product_detail[index]['product_title'] + "</div></a></div><div class='evm_product_price' style='font-family:Arial;'>" + product_detail[index]['product_price'] + "</div><div class='evm_shop_now'><div class='evm_shop_now_container'><a " + product_detail[index]['shopnowbuttonanchor'] + " id='evm_shopnow_anchor_" + PID + "' style='color:#eee; font-family:Arial; background:#222;padding: 6px 14px; border-radius: 4px;font-size:11px;text-transform:uppercase;cursor:pointer;'>" + product_detail[index]['shop_now'] + "</a></div></div></div></div></div>");
                                }
                                if (screen.width <= 1024) {
                                    $('.evm_grid').click(function() {
                                        $('.evm_lookbook_detail').hide();
                                    });
                                    $('#evm_view_' + imgId[i] + ' #evm_lookbook_detail-' + product_detail[index]['id'] + '').hide();
                                    $('#evm_view_' + imgId[i] + ' #plus' + product_detail[index]['id'] + '').click(function() {
                                        $('.evm_lookbook_detail').hide();
                                        $('#evm_view_' + imgId[i] + ' #evm_lookbook_detail-' + product_detail[index]['id'] + '').show();
                                        return false;
                                    });
                                    $('#evm_view_' + imgId[i] + ' #evm_lookbook_detail-' + product_detail[index]['id'] + '').hide();
                                }
                                if (enable_hotspot == 'true') {
                                    $('#' + imgId[i]).append("<div class='evm-list evm-content" + i + " evmhotspot' style='display:block;'><div class='evm_tag_view' id='evm_view_" + imgId[i] + "' style='left:" + product_detail[index]['tag_x'] + "%;top:" + product_detail[index]['tag_y'] + "%; '><a href='javascript:void(0);' target='" + anchor_target + "'>		<span class='plus_icon hotspot evmhotspot' id= 'outerplus" + product_detail[index]['id'] + "' style=' width:17px; height:17px; line-height:17px;font-size:17px; font-family: normal;'><div class='plus_icon_container'>+</div></span></a></div>");
                                }
                            }
                        });
                    }
                }
            });
            $(".evmhash").on("click", function(e) {
                e.preventDefault();
            });
            $('div[id^="evm-lookbook-"]').append("</ul>");
            setTimeout(function() {
                $("#evm_more").html('Load More...');
            }, 3000);
            if (animation_style) {
                if (start == 0) {
                    var image = $("#EVMgrid img").length;
                    var i = 1;
                    $("#EVMgrid img").on("load", function() {
                        if (i == image) {
                            new AnimOnScroll(document.getElementById('EVMgrid'), {
                                minDuration: 0.4,
                                maxDuration: 0.7,
                                viewportFactor: 0
                            });
                        }
                        i++
                    })
                } else {
                    new AnimOnScroll(document.getElementById('EVMgrid'), {
                        minDuration: 0.4,
                        maxDuration: 0.7,
                        viewportFactor: 0
                    });
                }
            }
            $(".img").evmfancybox({
                openEffect: "elastic",
                closeEffect: "elastic",
                afterLoad: function(element) {
                    var pixelRatio = window.devicePixelRatio || 1;
                    var jquery_element = $(element);
                    var val = jquery_element['0']['element']['0']['attributes']['data-value']['nodeValue'];
                    var j = jquery_element['0']['element']['0']['attributes']['id']['nodeValue'];
                    if (tag_products != null) {
                        if (typeof tag_products[val] != 'undefined' && tag_products[val] instanceof Array) {
                            var product_detail = tag_products[val];
                            $.each(product_detail, function(index, value) {
                                if (product_detail[index]['tag_y'] > "60") {
                                    $('<style>#evm_lookbook_detail-' + product_detail[index]['id'] + '{bottom:-10px;} </style>').appendTo('body');
                                }
                                if (product_detail[index]['tag_y'] < "30") {
                                    $('<style>#evm_lookbook_detail-' + product_detail[index]['id'] + '{top:0px;} </style>').appendTo('body');
                                }
                                if (product_detail[index]['tag_x'] < "30") {
                                    $('<style>#evm_lookbook_detail-' + product_detail[index]['id'] + '{left:0px;} </style>').appendTo('body');
                                }
                                if (product_detail[index]['tag_x'] > "60") {
                                    $('<style>#evm_lookbook_detail-' + product_detail[index]['id'] + '{right:-10px;} </style>').appendTo('body');
                                }
                                if (view == "grid" || view == "collage") {
                                    if (product_detail[index]['PRO_id']) {
                                        var PID = product_detail[index]['PRO_id'];
                                    }
                                    if (product_detail[index]['product_image'] != "blank") {
                                        $('#evm_tagged_img-' + j).append("<div class='evm-list evm-content" + j + "' style='display:none;'><div class='evm_tag_view' id='evm_view_" + j + "' style='left:" + product_detail[index]['tag_x'] + "%;top:" + product_detail[index]['tag_y'] + "%; '><a href='javascript:void(0);' id='evm_anchor_" + PID + "' ><span class='plus_icon hotspot' id= 'plus" + product_detail[index]['id'] + "' style=' width:23px; height:23px;text-align:center;font-size:23px; line-height:23px;font-family: normal;' onmouseover='changepdata(" + PID + ")'><div class='plus_icon_container'>+</div></span></a><div class='evm_lookbook_detail evmanimated fadeInLeftShort go' id='evm_lookbook_detail-" + product_detail[index]['id'] + "' style='position: absolute; width: 158px; z-index: 9999; margin-left: 18px; border-radius: 4px'><div class='evm_lookbook_detail_content'><a " + product_detail[index]['shopnowbuttonanchor'] + " id='evm_ptitle_anchor_" + PID + "' ><div class='evm_lookbook_img' style='background:url(" + product_detail[index]['product_image'] + ") no-repeat center center/cover; margin:0 auto;width:80px; max-width:98%; height:115px;float:none;'></div><div class='evm_look_book_title' >" + product_detail[index]['product_title'] + "</div></a></div><div class='evm_product_price' style='font-family:Arial;'>" + product_detail[index]['product_price'] + "</div><div class='evm_shop_now'><div class='evm_shop_now_container' ><a " + product_detail[index]['shopnowbuttonanchor'] + " id='evm_shopnow_anchor_" + PID + "' style='color:#eee; font-family:Arial; background:#222; padding: 6px 14px; border-radius: 4px;font-size:11px;text-transform:uppercase;cursor:pointer;'>" + product_detail[index]['shop_now'] + "</a></div></div></div></div></div>");
                                    } else {
                                        $('#evm_tagged_img-' + j).append("<div class='evm-list evm-content" + j + "' style='display:none;'><div class='evm_tag_view' id='evm_view_" + j + "' style='left:" + product_detail[index]['tag_x'] + "%;top:" + product_detail[index]['tag_y'] + "%; '><a href='javascript:void(0);' id='evm_anchor_" + PID + "'><span class='plus_icon hotspot' id= 'plus" + product_detail[index]['id'] + "' style=' width:23px; height:23px; line-height:23px; text-align:center;font-size:23px; font-family: normal;' onmouseover='changepdata(" + PID + ")'><div class='plus_icon_container'>+</div></span></a><div class='evm_lookbook_detail evm_lookbook_custom_url_detail evmanimated fadeInLeftShort go' id='evm_lookbook_detail-" + product_detail[index]['id'] + "' style='position: absolute; width: 158px; z-index: 9999; margin-left: 18px; border-radius: 4px'><div class='evm_lookbook_detail_content'><a " + product_detail[index]['shopnowbuttonanchor'] + " id='evm_ptitle_anchor_" + PID + "' ><div class='evm_look_book_title' >" + product_detail[index]['product_title'] + "</div></a></div><div class='evm_product_price' style='font-family:Arial;'>" + product_detail[index]['product_price'] + "</div><div class='evm_shop_now'><div class='evm_shop_now_container'><a " + product_detail[index]['shopnowbuttonanchor'] + " style='color:#eee; font-family:Arial; background:#222; padding: 6px 14px; border-radius: 4px;font-size:11px;text-transform:uppercase;cursor:pointer;' id='evm_shopnow_anchor_" + PID + "'>" + product_detail[index]['shop_now'] + "</a></div></div></div></div></div>");
                                    }
                                    if (screen.width <= 1024) {
                                        $('#evm_view_' + j + ' #evm_lookbook_detail-' + product_detail[index]['id'] + '').hide();
                                        $('#evm_view_' + j + ' #plus' + product_detail[index]['id'] + '').click(function() {
                                            $('#evm_view_' + j + ' #evm_lookbook_detail-' + product_detail[index]['id'] + '').show();
                                            return false;
                                        });
                                        $('#evm_view_' + j + ' #evm_lookbook_detail-' + product_detail[index]['id'] + '').hide();
                                    }
                                }
                            });
                        }
                    }
                    $(".evm-content" + j).show();
                    $(".evm-content" + j).prependTo(".evm_fancybox-inner");
                }
            });
        }
    });
}

function changepdata(id) {
    if (id == undefined) {
        return false;
    }
    var ShopId = $("#ShopId").val();
    var gallery_id = $("#GalleryId").val();
    $.ajax({
        url: 'https://apps.expertvillagemedia.com/shopify/evm-lookbook/get_product_handle.php',
        data: {
            ShopId: ShopId,
            ProductId: id,
            gallery_id: gallery_id
        },
        dataType: "jsonp",
        jsonp: "evmcallback",
        success: function(data) {
            if (data.msg == 'success') {
                var handle_url = 'https://' + ShopId + '/products/' + data.producthandle;
                if (data.directby == 'true') {
                    $("#evm_shopnow_anchor_" + id).attr("href", 'javascript:void(0)');
                    $("#evm_shopnow_anchor_" + id).attr('data-handle', data.producthandle);
                    $("#evm_shopnow_anchor_" + id).addClass('addtocartdirect');
                    $("#evm_ptitle_anchor_" + id).attr("href", 'javascript:void(0)');
                    $("#evm_ptitle_anchor_" + id).attr('data-handle', data.producthandle);
                    $("#evm_ptitle_anchor_" + id).addClass('addtocartdirect');
                    $("#evm_anchor_" + id).attr("href", 'javascript:void(0)');
                    $("#evm_anchor_" + id).attr('data-handle', data.producthandle);
                    $("#evm_anchor_" + id).addClass('addtocartdirect');
                } else {
                    //console.log(handle_url);
                    // $("#evm_shopnow_anchor_"+id).attr("href", handle_url); 
                    // $("#evm_shopnow_anchor_"+id).attr('target','_blank');
                    // $("#evm_ptitle_anchor_"+id).attr("href", handle_url);  
                    // $("#evm_ptitle_anchor_"+id).attr('target','_blank');
                    // $("#evm_anchor_"+id).attr("href", handle_url);   
                    // $("#evm_anchor_"+id).attr('target','_blank');
                }
            }
        }
    });
}
$("body").on("click", ".addtocartdirect", function(b) {
        $("#evmcartdivadd").html(
                '<div class="evmcartmodal fade" tabindex="-1" id="evmcartloading"> <div class="evmcartmodal-dialog1 evmloading_div" role="document" > <div class="evmcartmodal-content"> <div class="evmcartmodal-header" style="background: black; color: white;"> Loading... </div> </div> </div> </div>'
            ),
            bootstrap_enabled,
            $("#evmcartloading").evmmodal("show", 500),
            $(".evm_fancybox-wrap").addClass("evm_fancybox-overlay_disabled"),
            $("#evmcartloading").css("margin-top", Math.max(($(window).height() - $(".evmcartmodal-dialog").height()) / 2)),
            $(".addtocartdirect").html();
        var c = $("#evm_currency").val(),
            d = $("#evm_shop_id").val(),
            e = $("#evm_shop_currencyformat").val();
        $("#evmcartdivadd").append(
            '<div class="evmcartmodal fade" tabindex="-1" id="evmcartwithoption"><div class="evmcartmodal-dialog" role="document" class="optiondiv" ><div class="evmcartmodal-content"><div class="evmcartmodal-header" style="background: #ffffff; color: black;"><h4 class="evmcartmodal-title">CHOOSE OPTION</h4><span aria-hidden="true" class="lookbook_modalclose">\xd7</span> </div><div class="evmcartmodal-body" > <div class="cartmaindiv"> <div class="evmcartpimgdiv fleft" ><img class="evmcart-product-image" src=""><div class="cartfeaturedimg" style="float:left;width:100%" ></div> </div><div class="pdesc"><div class="evmcart-product-title"> </div> <div class="evmcart-product-price product-single__price"> </div>  <div class="evmcart-product-variants" ></div> <div class="evmcart-product-variants-hidden"></div> </div></div>   </div><div class="evmcartmodal-footer"><div class="cartmsgwithoption"></div><button type="button" class="ebtn addtocartwithvariant" >Add to Cart</button><button type="button" class="ebtn evmcountinueshopping" data-dismiss="evmcartmodal" aria-hidden="true">Continue Shopping</button></div></div></div></div>'
        );
        var a = $(this).data("handle");
        $.ajax({
            url: "/products/" + a + ".js",
            dataType: "json",
            success: function(b) {
                if (($(".evmcart-product-variants").html(""), $(".product-var-select-tag").html(""), "object" != typeof b && (b = $.parseJSON(b)), b.options.length >= 1 && "Title" != b.options[0].name)) {
                    var g = b.featured_image;
                    null == g && (g = URL + "images/no-image.gif"),
                        g.indexOf(".jpg"),
                        (g = g.replace(".jpg?", "_240X240.jpg?")),
                        $(".evmcart-product-image").attr("src", g),
                        b.images.length > 1 &&
                        $(b.images).each(function(b, a) {
                            (a = a.indexOf(".jpg") > -1 ? a.replace(".jpg?", "_240X240.jpg?") : a.replace(".png?", "_240X240.png?")), $(".cartfeaturedimg").append('<img src="' + a + '" id="fimg' + b + '" onclick="changeimg(' + b + ');">');
                        }),
                        $(".evmcart-product-title").html(b.title);
                    var f = b.price / 100;
                    (f = f.toFixed(2)), (6023 == d || 6061 == d) && ((f *= 1.1), (f = (internationalNumberFormat = new Intl.NumberFormat("en-US")).format(f))), 6045 == d && (f = parseFloat(f)), $(".evmcart-product-price").html(c + f + e);
                    var i = $("#evm_cart_option_type").val();
                    $(".evmcart-product-variants").html("");
                    var j = c;
                    b.options.length >= 1 &&
                        $(b.options).each(function(c, f) {
                            var g = 0;
                            if (b.variants[c] && b.variants[c].length >= 1) var g = b.variants[c].inventory_quantity;
                            $(".evmcart-product-variants").append(
                                    '<div class="optionmaindiv"> <div class="leftoption" >' +
                                    f.name +
                                    ':</div><div class="rightoption"  ><div style="float:right;width:100%;" class="maxl" id="cartoption' +
                                    c +
                                    '"><select id="selectid' +
                                    c +
                                    '" name="selectid" class="selectedoptions selectdropdown"  onChange="changecartoptions(\'' +
                                    a +
                                    "', '" +
                                    j +
                                    "' ,'" +
                                    i +
                                    "','" +
                                    e +
                                    "','" +
                                    d +
                                    "');\" ></select> </div>"
                                ),
                                $(f.values).each(function(h, b) {
                                    var f = "";
                                    if (0 == h) var f = "checked";
                                    "radio" == i
                                        ?
                                        ($(".selectdropdown").hide(),
                                            $("#cartoption" + c).append(
                                                '<label class="radio inline"  >    <input type="radio" name="option' +
                                                c +
                                                '" ' +
                                                f +
                                                ' data-producturl = "' +
                                                a +
                                                '" data-productinventory = "' +
                                                g +
                                                '" value="' +
                                                b +
                                                '" class="selectedoptions" onclick="changecartoptions(\'' +
                                                a +
                                                "', '" +
                                                j +
                                                "','" +
                                                i +
                                                "' ,'" +
                                                e +
                                                "','" +
                                                d +
                                                "');\" > <span> " +
                                                b +
                                                " </span> </label>"
                                            )) :
                                        $("#selectid" + c).append('<option value="' + b + '"  data-producturl = "' + a + '" data-productinventory = "' + g + '">' + b + "</option>");
                                });
                        }),
                        b.options.length >= 1 &&
                        $(b.variants).each(function(a, c) {
                            if (0 == a) {
                                var d = c.id;
                                $(".addtocartwithvariant").attr("evm-product-variant-id", d), $(".addtocartwithvariant").attr("evm-product-variant-title", b.title);
                            }
                        }),
                        bootstrap_enabled,
                        $(".evm_fancybox-overlay").addClass("evm_fancybox-overlay_disabledbg"),
                        $("#evmcartwithoption").evmmodal("show"),
                        $("#evmcartwithoption").prop("class", "evmcartmodal fade").addClass("right"),
                        $("#evmcartloading").evmmodal("hide");
                    var h = $(".evm_fancybox-wrap").css("left");
                    $("#evm_fancybox-wrap_left_px").val(h), $(".evm_fancybox-wrap").css("left", "0");
                } else
                    $(b.variants).each(function(f, a) {
                        if (0 == f)
                            var g = a.id,
                                h = a.name;
                        var i = $("#ShopId").val();
                        $.ajax({
                            type: "POST",
                            url: "/cart/add.js",
                            dataType: "json",
                            data: {
                                quantity: 1,
                                id: g
                            },
                            success: function(a) {
                                $(".cartmsg").fadeIn(),
                                    $(".cartmsg").html('<div class="alert alert-success">' + h + ' <span class="added_msg"> added to your Cart.</span> </div>'),
                                    jQuery.getJSON("/cart.js", function(f) {
                                        bootstrap_enabled,
                                        $("#evmcartwithchekout").evmmodal("show"),
                                        $("#evmcartwithchekout").prop("class", "evmcartmodal fade").addClass("right"),
                                        $("#evmcartloading").evmmodal("hide");
                                        var h = $(".evm_fancybox-wrap").css("left");
                                        $("#evm_fancybox-wrap_left_px").val(h),
                                        $(".evm_fancybox-wrap").css("left", "0"),
                                        $(".btn_checkout").removeAttr("disabled"),
                                        $(".evmshopping-cart").html(""),
                                        $(".evmshopping-cartsubtotal").html(""),
                                        $(f.items).each(function(j, a) {
                                            var f = a.price / 100;
                                            (f = f.toFixed(2)), (6023 == d || 6061 == d) && ((f *= 1.1), (f = (internationalNumberFormat = new Intl.NumberFormat("en-US")).format(f))), 6045 == d && (f = parseFloat(f));
                                            var g = c,
                                                h = "";
                                            if (a.variant_title) var h = a.variant_title;
                                            a.image.indexOf(".jpg"),
                                                (a.image = a.image.replace(".jpg?", "_260X260.jpg?")),
                                                $(".evmshopping-cart").append(
                                                    '<div class="evmcartitem" id="cartID' +
                                                    a.id +
                                                    '"> <div class="evmcartimage"> <a href="https://' +
                                                    i +
                                                    "/products/" +
                                                    b.handle +
                                                    '"> <img src="' +
                                                    a.image +
                                                    '" alt="" width="25%" /> </a></div> <div class="evmcarttitle"> <a target="_blank" href="https://' +
                                                    i +
                                                    "/products/" +
                                                    b.handle +
                                                    '"><span class="cartptitle">' +
                                                    a.product_title +
                                                    "</span></a> <span>" +
                                                    h +
                                                    '</span> <div class="evmcarttotal-price">' +
                                                    g +
                                                    f +
                                                    " " +
                                                    e +
                                                    ' </div>   <div class="evmcartdeletediv"><div class="evmbuttonwrap" > <button class="evmcartminus-btn" type="button" name="button" data-cartid="' +
                                                    a.id +
                                                    '" id="minus_' +
                                                    a.id +
                                                    '" onclick="minusqty(' +
                                                    a.id +
                                                    ",'" +
                                                    g +
                                                    "', '" +
                                                    a.product_title +
                                                    "','" +
                                                    d +
                                                    '\');"> <i class="fa fa-minus" style="font-size:11px;"></i></button>  <input type="text" name="name" readonly="true"  value=' +
                                                    a.quantity +
                                                    '>  <button class="evmcartplus-btn" type="button" name="button" data-cartid="' +
                                                    a.id +
                                                    '" id="plus_' +
                                                    a.id +
                                                    '" onclick="plusqty(' +
                                                    a.id +
                                                    ",'" +
                                                    g +
                                                    "', '" +
                                                    a.product_title +
                                                    "','" +
                                                    e +
                                                    "','" +
                                                    d +
                                                    '\');" > <i class="fa fa-plus" style="font-size:11px;"></i></button></div>  <div class="evmcartdelete-btn" id="' +
                                                    a.id +
                                                    '" onclick="deletecartitem(' +
                                                    a.id +
                                                    ",'" +
                                                    g +
                                                    "', '" +
                                                    a.product_title +
                                                    "','" +
                                                    d +
                                                    '\');" ><i class="fa fa-trash-o"></i></div></div></div>  </div>'
                                                );
                                        });
                                        var a = f.original_total_price / 100;
                                        (a = a.toFixed(2)),
                                        (6023 == d || 6061 == d) && ((a *= 1.1), (a = (internationalNumberFormat = new Intl.NumberFormat("en-US")).format(a))),
                                        $(".evmshopping-cartsubtotal").append('<div> <div class="cartsubtotaldiv">Subtotal</div> <div class="cartsubtotal cartsubtotaldivr ">' + c + a + "</div>  </div>"),
                                        $(".CartCost .money").text(c + "" + a + " USD");
                                        var g = $(".CartCount").text(),
                                            j = g ? parseInt(g) : 0,
                                            k = j + 1;
                                        $(".cart-count").html(f.item_count);
                                        $(".cart-count").removeClass("hidden-count");
                                        $(".cart-count").css("display", "inline-block");

                                        // if(d=="nina-store-abbigliamento.myshopify.com"){
                                        $(".cart-link__bubble-num").html(f.item_count);
                                        $("body").addClass("cart-has-items");
                                        $(".cart-link__bubble-num").css("display", "block");
                                        // }

                                        // $(".CartCount").text(k);
                                    }),
                                    setTimeout(function() {
                                        $(".cartmsg").fadeOut();
                                    }, 2e3);
                            },
                            error: function(b) {
                                $("#evmcartwithchekout").evmmodal("show"), $("#evmcartwithchekout").prop("class", "evmcartmodal fade").addClass("right"), $("#evmcartloading").evmmodal("hide");
                                var a = $(".evm_fancybox-wrap").css("left");
                                $("#evm_fancybox-wrap_left_px").val(a),
                                    $(".evm_fancybox-wrap").css("left", "0"),
                                    $(".btn_checkout").removeAttr("disabled"),
                                    $(".evmshopping-cart").html('<span style="text-align:center;float:left;width:100%;">This Product is Not Available.</span>'),
                                    $(".evmshopping-cartsubtotal").html(""),
                                    $(".btn_checkout").attr("disabled", "true");
                            },
                        });
                    });
            },
            error: function(b) {
                $("#evmcartwithchekout").evmmodal("show"), $("#evmcartwithchekout").prop("class", "evmcartmodal fade").addClass("right"), $("#evmcartloading").evmmodal("hide");
                var a = $(".evm_fancybox-wrap").css("left");
                $("#evm_fancybox-wrap_left_px").val(a),
                    $(".evm_fancybox-wrap").css("left", "0"),
                    $(".btn_checkout").removeAttr("disabled"),
                    $(".evmshopping-cart").html('<span style="text-align:center;float:left;width:100%;">This Product is Not Available.</span>'),
                    $(".evmshopping-cartsubtotal").html(""),
                    $(".btn_checkout").attr("disabled", "true");
            },
        });
    }),
    $(document).on("click", "#evmcartwithoption, #evmcartwithchekout", function(a) {
        if (
            (("evmcartwithoption" == a.target.id || "evmcartwithchekout" == a.target.id) && $(".evm_fancybox-wrap").hasClass("evm_fancybox-overlay_disabled")) ||
            ("radio" != a.target.type && "select-one" != a.target.type && void 0 != a.target.type && $(".evm_fancybox-wrap").hasClass("evm_fancybox-overlay_disabled"))
        ) {
            $(".evm_fancybox-wrap").removeClass("evm_fancybox-overlay_disabled"), $(".evm_fancybox-overlay").removeClass("evm_fancybox-overlay_disabledbg");
            var b = $("#evm_fancybox-wrap_left_px").val();
            $(".evm_fancybox-wrap").css("left", b);
        }
    }),
    $(document).on("click", ".evmmodalclose, .lookbook_modalclose, .evmcountinueshopping", function(b) {
        $(".evm_fancybox-wrap").removeClass("evm_fancybox-overlay_disabled"), $(".evm_fancybox-overlay").removeClass("evm_fancybox-overlay_disabledbg");
        var a = $("#evm_fancybox-wrap_left_px").val();
        $(".evm_fancybox-wrap").css("left", a), $("#evmcartwithoption").evmmodal("hide");
    }),
    $(document).on("click", "#view_cart", function(b) {
        var a = location.protocol + "//" + location.hostname;
        window.location.href = a + "/cart";
    }),
    $(document).on("click", ".evmcheckoutmodalclose, .lookbook_modalclose, .evmcheckoutcountinueshopping", function(b) {
        $(".evm_fancybox-wrap").removeClass("evm_fancybox-overlay_disabled"), $(".evm_fancybox-overlay").removeClass("evm_fancybox-overlay_disabledbg");
        var a = $("#evm_fancybox-wrap_left_px").val();
        $(".evm_fancybox-wrap").css("left", a), $("#evmcartwithchekout").evmmodal("hide");
    }),
    $(document).on("click", ".addtocartwithvariant", function(b) {
        var c = $("#evm_currency").val(),
            d = $("#evm_shop_id").val(),
            e = $("#evm_shop_currencyformat").val(),
            a = $(".addtocartwithvariant").attr("evm-product-variant-id"),
            f = $(".addtocartwithvariant").attr("evm-product-variant-title"),
            g = $("#ShopId").val();
        $.ajax({
            type: "POST",
            url: "/cart/add.js",
            dataType: "json",
            data: {
                quantity: 1,
                id: a
            },
            success: function(a) {
                jQuery.getJSON("/cart.js", function(i) {
                        bootstrap_enabled,
                        $("#evmcartwithoption").evmmodal("hide"),
                        $("#evmcartwithchekout").evmmodal("show"),
                        $("#evmcartwithchekout").prop("class", "evmcartmodal fade").addClass("right"),
                        $(".evm_fancybox-wrap").addClass("evm_fancybox-overlay_disabled"),
                        $(".evm_fancybox-overlay").addClass("evm_fancybox-overlay_disabledbg"),
                        $(".cartmsg").show(),
                        $(".cartmsg").html('<div class="alert alert-success">' + f + ' <span class="added_msg" > added to your Cart.</span> </div>'),
                        $(".btn_checkout").removeAttr("disabled"),
                        $(".evmshopping-cart").html(""),
                        $(".evmshopping-cartsubtotal").html(""),
                        $(i.items).each(function(j, b) {
                            var f = b.price / 100;
                            (f = f.toFixed(2)), (6023 == d || 6061 == d) && ((f *= 1.1), (f = (internationalNumberFormat = new Intl.NumberFormat("en-US")).format(f))), 6045 == d && (f = parseFloat(f));
                            var h = c,
                                i = "";
                            if (b.variant_title) var i = b.variant_title;
                            b.image.indexOf(".jpg"),
                                (b.image = b.image.replace(".jpg?", "_260X260.jpg?")),
                                $(".evmshopping-cart").append(
                                    '<div class="evmcartitem" id="cartID' +
                                    b.id +
                                    '"> <div class="evmcartimage"><a target="_blank" href="https://' +
                                    g +
                                    "/products/" +
                                    a.handle +
                                    '"> <img src="' +
                                    b.image +
                                    '" alt="" width="25%" /></a> </div> <div class="evmcarttitle"> <a target="_blank" href="https://' +
                                    g +
                                    "/products/" +
                                    a.handle +
                                    '"><span class="cartptitle">' +
                                    b.product_title +
                                    "</span></a> <span>" +
                                    i +
                                    '</span> <div class="evmcarttotal-price">' +
                                    h +
                                    f +
                                    " " +
                                    e +
                                    ' </div>   <div class="evmcartdeletediv"><div class="evmbuttonwrap" > <button class="evmcartminus-btn" type="button" name="button" data-cartid="' +
                                    b.id +
                                    '" id="minus_' +
                                    b.id +
                                    '" onclick="minusqty(' +
                                    b.id +
                                    ",'" +
                                    h +
                                    "', '" +
                                    b.product_title +
                                    "','" +
                                    e +
                                    "','" +
                                    d +
                                    '\');"> <i class="fa fa-minus" style="font-size:11px;"></i></button>  <input type="text" name="name" readonly="true"  value=' +
                                    b.quantity +
                                    '>  <button class="evmcartplus-btn" type="button" name="button" data-cartid="' +
                                    b.id +
                                    '" id="plus_' +
                                    b.id +
                                    '" onclick="plusqty(' +
                                    b.id +
                                    ",'" +
                                    h +
                                    "', '" +
                                    b.product_title +
                                    "','" +
                                    e +
                                    "','" +
                                    d +
                                    '\');" > <i class="fa fa-plus" style="font-size:11px;"></i></button></div>  <div class="evmcartdelete-btn" id="' +
                                    b.id +
                                    '" onclick="deletecartitem(' +
                                    b.id +
                                    ",'" +
                                    h +
                                    "', '" +
                                    b.product_title +
                                    "','" +
                                    e +
                                    "','" +
                                    d +
                                    '\' );" ><i class="fa fa-trash-o"></i></div></div></div>  </div>'
                                );
                        });
                        var b = i.original_total_price / 100;
                        (b = b.toFixed(2)),
                        (6023 == d || 6061 == d) && ((b *= 1.1), (b = (internationalNumberFormat = new Intl.NumberFormat("en-US")).format(b))),
                        6045 == d && (b = parseFloat(b)),
                        $(".evmshopping-cartsubtotal").append('<div> <div class="cartsubtotaldiv">Subtotal</div> <div class="cartsubtotal cartsubtotaldivr ">' + c + b + "</div>  </div>"),
                        $(".CartCost .money").text(c + "" + b + " USD");
                        $(".cart-count").html(i.item_count);
                        $(".cart-count").removeClass("hidden-count");
                        $(".cart-count").css("display", "inline-block");

                        // if(d=="nina-store-abbigliamento.myshopify.com"){
                        $(".cart-link__bubble-num").html(i.item_count);
                        $("body").addClass("cart-has-items");
                        $(".cart-link__bubble-num").css("display", "block");
                        // }

                        var h = $(".CartCount,.cart_count, #cart-count").text(),
                            j = ((h = (h = h.replace("(", "")).replace(")", "")) ? parseInt(h) : 0) + 1;
                        $(".CartCount ").text(j),
                        $(".cart_count").text("(" + j + ")"),
                        $("#cart-count").text("(" + j + ")");
                    }),
                    setTimeout(function() {
                        $(".cartmsg").hide();
                    }, 2e3);
            },
            error: function(a) {
                $(".cartmsgwithoption").show(),
                    $(".cartmsgwithoption").html('<div class="alert alert-danger">Inventory is not available. </div>'),
                    setTimeout(function() {
                        $(".cartmsgwithoption").hide();
                    }, 2e3);
            },
        });
    });


$('body').on('click', '#evm_more', function(e) {
    $("#evm_more").html('Loading...');
    start = $("#startlimit").val();
    ShopId = $("#ShopId").val();
    ProID = $("#ProID").val();
    GalleryId = $("#GalleryId").val();
    URL = $("#URL").val();
    get_data(ShopId, GalleryId, URL, start, ProID);
})
$('body').on('click', '.evm_lookbook_detail', function(e) {
    ShopId = $("#ShopId").val();
    GalleryId = $("#GalleryId").val();
    var evmlookbookurl = "https://apps.expertvillagemedia.com/shopify/evm-lookbook/evm-lookbook-click.php";;
    $.ajax({
        url: evmlookbookurl,
        data: {
            ShopId: ShopId,
            GalleryId: GalleryId
        },
        dataType: "jsonp",
        async: true,
        jsonp: "evmcallback",
        success: function(data) {}
    });
})