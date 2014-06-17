;(function(){
var h, aa = this;
function m(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ba(a) {
  var b = m(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function ca(a) {
  return "string" == typeof a;
}
function ea(a) {
  return "function" == m(a);
}
function fa(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
function ga(a) {
  return a[ha] || (a[ha] = ++ia);
}
var ha = "closure_uid_" + (1E9 * Math.random() >>> 0), ia = 0;
function ja(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ka(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function la(a, b, c) {
  la = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
  return la.apply(null, arguments);
}
var na = Date.now || function() {
  return+new Date;
};
function oa(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Kb = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
}
;var pa = Array.prototype, qa = pa.indexOf ? function(a, b, c) {
  return pa.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ca(a)) {
    return ca(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, ra = pa.forEach ? function(a, b, c) {
  pa.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ca(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
};
function sa(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
;function ta(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
var ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function va(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < ua.length;f++) {
      c = ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function wa(a, b) {
  null != a && this.append.apply(this, arguments);
}
wa.prototype.ua = "";
wa.prototype.append = function(a, b, c) {
  this.ua += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.ua += arguments[d];
    }
  }
  return this;
};
wa.prototype.toString = function() {
  return this.ua;
};
var xa = null;
function ya() {
  return new q(null, 5, [za, !0, Aa, !0, Ba, !1, Ca, !1, Ea, null], null);
}
function s(a) {
  return null != a && !1 !== a;
}
function Fa(a) {
  return s(a) ? !1 : !0;
}
function t(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : u ? !1 : null;
}
function Ga(a) {
  return null == a ? null : a.constructor;
}
function v(a, b) {
  var c = Ga(b), c = s(s(c) ? c.Ib : c) ? c.Hb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Ha(a) {
  var b = a.Hb;
  return s(b) ? b : "" + x(a);
}
function y(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Ia = {}, Ja = {};
function Ka(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = Ka[m(null == a ? null : a)];
  if (!b && (b = Ka._, !b)) {
    throw v("ICounted.-count", a);
  }
  return b.call(null, a);
}
function La(a, b) {
  if (a ? a.C : a) {
    return a.C(a, b);
  }
  var c;
  c = La[m(null == a ? null : a)];
  if (!c && (c = La._, !c)) {
    throw v("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ma = {}, z = function() {
  function a(a, b, c) {
    if (a ? a.V : a) {
      return a.V(a, b, c);
    }
    var g;
    g = z[m(null == a ? null : a)];
    if (!g && (g = z._, !g)) {
      throw v("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.M : a) {
      return a.M(a, b);
    }
    var c;
    c = z[m(null == a ? null : a)];
    if (!c && (c = z._, !c)) {
      throw v("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Na = {};
function A(a) {
  if (a ? a.Q : a) {
    return a.Q(a);
  }
  var b;
  b = A[m(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw v("ISeq.-first", a);
  }
  return b.call(null, a);
}
function B(a) {
  if (a ? a.S : a) {
    return a.S(a);
  }
  var b;
  b = B[m(null == a ? null : a)];
  if (!b && (b = B._, !b)) {
    throw v("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Oa = {}, Pa = function() {
  function a(a, b, c) {
    if (a ? a.I : a) {
      return a.I(a, b, c);
    }
    var g;
    g = Pa[m(null == a ? null : a)];
    if (!g && (g = Pa._, !g)) {
      throw v("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.H : a) {
      return a.H(a, b);
    }
    var c;
    c = Pa[m(null == a ? null : a)];
    if (!c && (c = Pa._, !c)) {
      throw v("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Qa(a, b, c) {
  if (a ? a.va : a) {
    return a.va(a, b, c);
  }
  var d;
  d = Qa[m(null == a ? null : a)];
  if (!d && (d = Qa._, !d)) {
    throw v("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Ra = {}, Sa = {};
function Ta(a) {
  if (a ? a.jb : a) {
    return a.jb();
  }
  var b;
  b = Ta[m(null == a ? null : a)];
  if (!b && (b = Ta._, !b)) {
    throw v("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ua(a) {
  if (a ? a.kb : a) {
    return a.kb();
  }
  var b;
  b = Ua[m(null == a ? null : a)];
  if (!b && (b = Ua._, !b)) {
    throw v("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Va = {};
function Wa(a, b, c) {
  if (a ? a.cb : a) {
    return a.cb(a, b, c);
  }
  var d;
  d = Wa[m(null == a ? null : a)];
  if (!d && (d = Wa._, !d)) {
    throw v("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Xa(a) {
  if (a ? a.wb : a) {
    return a.state;
  }
  var b;
  b = Xa[m(null == a ? null : a)];
  if (!b && (b = Xa._, !b)) {
    throw v("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Ya = {};
function Za(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var b;
  b = Za[m(null == a ? null : a)];
  if (!b && (b = Za._, !b)) {
    throw v("IMeta.-meta", a);
  }
  return b.call(null, a);
}
function $a(a, b) {
  if (a ? a.L : a) {
    return a.L(a, b);
  }
  var c;
  c = $a[m(null == a ? null : a)];
  if (!c && (c = $a._, !c)) {
    throw v("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var ab = {}, bb = function() {
  function a(a, b, c) {
    if (a ? a.O : a) {
      return a.O(a, b, c);
    }
    var g;
    g = bb[m(null == a ? null : a)];
    if (!g && (g = bb._, !g)) {
      throw v("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.N : a) {
      return a.N(a, b);
    }
    var c;
    c = bb[m(null == a ? null : a)];
    if (!c && (c = bb._, !c)) {
      throw v("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function cb(a, b) {
  if (a ? a.u : a) {
    return a.u(a, b);
  }
  var c;
  c = cb[m(null == a ? null : a)];
  if (!c && (c = cb._, !c)) {
    throw v("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function db(a) {
  if (a ? a.A : a) {
    return a.A(a);
  }
  var b;
  b = db[m(null == a ? null : a)];
  if (!b && (b = db._, !b)) {
    throw v("IHash.-hash", a);
  }
  return b.call(null, a);
}
var eb = {};
function fb(a) {
  if (a ? a.D : a) {
    return a.D(a);
  }
  var b;
  b = fb[m(null == a ? null : a)];
  if (!b && (b = fb._, !b)) {
    throw v("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var gb = {};
function C(a, b) {
  if (a ? a.nb : a) {
    return a.nb(0, b);
  }
  var c;
  c = C[m(null == a ? null : a)];
  if (!c && (c = C._, !c)) {
    throw v("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var hb = {};
function ib(a, b, c) {
  if (a ? a.v : a) {
    return a.v(a, b, c);
  }
  var d;
  d = ib[m(null == a ? null : a)];
  if (!d && (d = ib._, !d)) {
    throw v("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function jb(a, b, c) {
  if (a ? a.mb : a) {
    return a.mb(0, b, c);
  }
  var d;
  d = jb[m(null == a ? null : a)];
  if (!d && (d = jb._, !d)) {
    throw v("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function kb(a) {
  if (a ? a.Da : a) {
    return a.Da(a);
  }
  var b;
  b = kb[m(null == a ? null : a)];
  if (!b && (b = kb._, !b)) {
    throw v("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function lb(a, b) {
  if (a ? a.Ea : a) {
    return a.Ea(a, b);
  }
  var c;
  c = lb[m(null == a ? null : a)];
  if (!c && (c = lb._, !c)) {
    throw v("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function mb(a) {
  if (a ? a.Fa : a) {
    return a.Fa(a);
  }
  var b;
  b = mb[m(null == a ? null : a)];
  if (!b && (b = mb._, !b)) {
    throw v("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function nb(a, b, c) {
  if (a ? a.xa : a) {
    return a.xa(a, b, c);
  }
  var d;
  d = nb[m(null == a ? null : a)];
  if (!d && (d = nb._, !d)) {
    throw v("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function ob(a, b, c) {
  if (a ? a.lb : a) {
    return a.lb(0, b, c);
  }
  var d;
  d = ob[m(null == a ? null : a)];
  if (!d && (d = ob._, !d)) {
    throw v("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function pb(a) {
  if (a ? a.hb : a) {
    return a.hb();
  }
  var b;
  b = pb[m(null == a ? null : a)];
  if (!b && (b = pb._, !b)) {
    throw v("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function qb(a) {
  if (a ? a.Oa : a) {
    return a.Oa(a);
  }
  var b;
  b = qb[m(null == a ? null : a)];
  if (!b && (b = qb._, !b)) {
    throw v("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function rb(a) {
  if (a ? a.Pa : a) {
    return a.Pa(a);
  }
  var b;
  b = rb[m(null == a ? null : a)];
  if (!b && (b = rb._, !b)) {
    throw v("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function sb(a) {
  if (a ? a.Na : a) {
    return a.Na(a);
  }
  var b;
  b = sb[m(null == a ? null : a)];
  if (!b && (b = sb._, !b)) {
    throw v("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function tb(a) {
  this.Jb = a;
  this.p = 0;
  this.h = 1073741824;
}
tb.prototype.nb = function(a, b) {
  return this.Jb.append(b);
};
function ub(a) {
  var b = new wa;
  a.v(null, new tb(b), ya());
  return "" + x(b);
}
function vb(a, b) {
  if (s(D.a ? D.a(a, b) : D.call(null, a, b))) {
    return 0;
  }
  var c = Fa(a.F);
  if (s(c ? b.F : c)) {
    return-1;
  }
  if (s(a.F)) {
    if (Fa(b.F)) {
      return 1;
    }
    c = wb.a ? wb.a(a.F, b.F) : wb.call(null, a.F, b.F);
    return 0 === c ? wb.a ? wb.a(a.name, b.name) : wb.call(null, a.name, b.name) : c;
  }
  return xb ? wb.a ? wb.a(a.name, b.name) : wb.call(null, a.name, b.name) : null;
}
function yb(a, b, c, d, e) {
  this.F = a;
  this.name = b;
  this.ka = c;
  this.la = d;
  this.ta = e;
  this.h = 2154168321;
  this.p = 4096;
}
h = yb.prototype;
h.v = function(a, b) {
  return C(b, this.ka);
};
h.A = function() {
  var a = this.la;
  return null != a ? a : this.la = a = zb.a ? zb.a(E.b ? E.b(this.F) : E.call(null, this.F), E.b ? E.b(this.name) : E.call(null, this.name)) : zb.call(null, E.b ? E.b(this.F) : E.call(null, this.F), E.b ? E.b(this.name) : E.call(null, this.name));
};
h.L = function(a, b) {
  return new yb(this.F, this.name, this.ka, this.la, b);
};
h.J = function() {
  return this.ta;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Pa.c(c, this, null);
      case 3:
        return Pa.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
h.b = function(a) {
  return Pa.c(a, this, null);
};
h.a = function(a, b) {
  return Pa.c(a, this, b);
};
h.u = function(a, b) {
  return b instanceof yb ? this.ka === b.ka : !1;
};
h.toString = function() {
  return this.ka;
};
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.h & 8388608 || a.Tb)) {
    return a.D(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Ab(a, 0);
  }
  if (t(eb, a)) {
    return fb(a);
  }
  if (u) {
    throw Error([x(a), x("is not ISeqable")].join(""));
  }
  return null;
}
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.h & 64 || a.wa)) {
    return a.Q(null);
  }
  a = F(a);
  return null == a ? null : A(a);
}
function I(a) {
  return null != a ? a && (a.h & 64 || a.wa) ? a.S(null) : (a = F(a)) ? B(a) : K : K;
}
function L(a) {
  return null == a ? null : a && (a.h & 128 || a.Sb) ? a.ea(null) : F(I(a));
}
var D = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || cb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (L(e)) {
            a = d, d = G(e), e = L(e);
          } else {
            return b.a(d, G(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.l = 2;
    a.g = function(a) {
      var b = G(a);
      a = L(a);
      var d = G(a);
      a = I(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.g = c.g;
  b.b = function() {
    return!0;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
Ja["null"] = !0;
Ka["null"] = function() {
  return 0;
};
Date.prototype.u = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
cb.number = function(a, b) {
  return a === b;
};
Ya["function"] = !0;
Za["function"] = function() {
  return null;
};
Ia["function"] = !0;
db._ = function(a) {
  return ga(a);
};
var Bb = function() {
  function a(a, b, d, c) {
    for (var l = Ka(a);;) {
      if (c < l) {
        d = b.a ? b.a(d, z.a(a, c)) : b.call(null, d, z.a(a, c)), c += 1;
      } else {
        return d;
      }
    }
  }
  function b(a, b, d) {
    for (var c = Ka(a), l = 0;;) {
      if (l < c) {
        d = b.a ? b.a(d, z.a(a, l)) : b.call(null, d, z.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  function c(a, b) {
    var d = Ka(a);
    if (0 === d) {
      return b.q ? b.q() : b.call(null);
    }
    for (var c = z.a(a, 0), l = 1;;) {
      if (l < d) {
        c = b.a ? b.a(c, z.a(a, l)) : b.call(null, c, z.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.i = a;
  return d;
}(), Cb = function() {
  function a(a, b, d, c) {
    for (var l = a.length;;) {
      if (c < l) {
        d = b.a ? b.a(d, a[c]) : b.call(null, d, a[c]), c += 1;
      } else {
        return d;
      }
    }
  }
  function b(a, b, d) {
    for (var c = a.length, l = 0;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  function c(a, b) {
    var d = a.length;
    if (0 === a.length) {
      return b.q ? b.q() : b.call(null);
    }
    for (var c = a[0], l = 1;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.i = a;
  return d;
}();
function Db(a) {
  return a ? a.h & 2 || a.vb ? !0 : a.h ? !1 : t(Ja, a) : t(Ja, a);
}
function Eb(a) {
  return a ? a.h & 16 || a.ib ? !0 : a.h ? !1 : t(Ma, a) : t(Ma, a);
}
function Ab(a, b) {
  this.d = a;
  this.j = b;
  this.h = 166199550;
  this.p = 8192;
}
h = Ab.prototype;
h.A = function() {
  return Fb.b ? Fb.b(this) : Fb.call(null, this);
};
h.ea = function() {
  return this.j + 1 < this.d.length ? new Ab(this.d, this.j + 1) : null;
};
h.C = function(a, b) {
  return N.a ? N.a(b, this) : N.call(null, b, this);
};
h.toString = function() {
  return ub(this);
};
h.N = function(a, b) {
  return Cb.i(this.d, b, this.d[this.j], this.j + 1);
};
h.O = function(a, b, c) {
  return Cb.i(this.d, b, c, this.j);
};
h.D = function() {
  return this;
};
h.G = function() {
  return this.d.length - this.j;
};
h.Q = function() {
  return this.d[this.j];
};
h.S = function() {
  return this.j + 1 < this.d.length ? new Ab(this.d, this.j + 1) : K;
};
h.u = function(a, b) {
  return Gb.a ? Gb.a(this, b) : Gb.call(null, this, b);
};
h.M = function(a, b) {
  var c = b + this.j;
  return c < this.d.length ? this.d[c] : null;
};
h.V = function(a, b, c) {
  a = b + this.j;
  return a < this.d.length ? this.d[a] : c;
};
var Hb = function() {
  function a(a, b) {
    return b < a.length ? new Ab(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(d, c) {
    switch(arguments.length) {
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), M = function() {
  function a(a, b) {
    return Hb.a(a, b);
  }
  function b(a) {
    return Hb.a(a, 0);
  }
  var c = null, c = function(d, c) {
    switch(arguments.length) {
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Ib(a) {
  for (;;) {
    var b = L(a);
    if (null != b) {
      a = b;
    } else {
      return G(a);
    }
  }
}
cb._ = function(a, b) {
  return a === b;
};
var Jb = function() {
  function a(a, b) {
    return null != a ? La(a, b) : La(K, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (s(e)) {
          a = b.a(a, d), d = G(e), e = L(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.l = 2;
    a.g = function(a) {
      var b = G(a);
      a = L(a);
      var d = G(a);
      a = I(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b;
}();
function O(a) {
  if (null != a) {
    if (a && (a.h & 2 || a.vb)) {
      a = a.G(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (t(Ja, a)) {
            a = Ka(a);
          } else {
            if (u) {
              a: {
                a = F(a);
                for (var b = 0;;) {
                  if (Db(a)) {
                    a = b + Ka(a);
                    break a;
                  }
                  a = L(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var Kb = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return F(a) ? G(a) : c;
      }
      if (Eb(a)) {
        return z.c(a, b, c);
      }
      if (F(a)) {
        a = L(a), b -= 1;
      } else {
        return u ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (F(a)) {
          return G(a);
        }
        throw Error("Index out of bounds");
      }
      if (Eb(a)) {
        return z.a(a, b);
      }
      if (F(a)) {
        var c = L(a), g = b - 1;
        a = c;
        b = g;
      } else {
        if (u) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), P = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.h & 16 || a.ib)) {
        return a.V(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (t(Ma, a)) {
        return z.a(a, b);
      }
      if (u) {
        if (a ? a.h & 64 || a.wa || (a.h ? 0 : t(Na, a)) : t(Na, a)) {
          return Kb.c(a, b, c);
        }
        throw Error([x("nth not supported on this type "), x(Ha(Ga(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.h & 16 || a.ib)) {
      return a.M(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (t(Ma, a)) {
      return z.a(a, b);
    }
    if (u) {
      if (a ? a.h & 64 || a.wa || (a.h ? 0 : t(Na, a)) : t(Na, a)) {
        return Kb.a(a, b);
      }
      throw Error([x("nth not supported on this type "), x(Ha(Ga(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), R = function() {
  function a(a, b, c) {
    return null != a ? a && (a.h & 256 || a.xb) ? a.I(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : t(Oa, a) ? Pa.c(a, b, c) : u ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.h & 256 || a.xb) ? a.H(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : t(Oa, a) ? Pa.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Mb = function() {
  function a(a, b, c) {
    return null != a ? Qa(a, b, c) : Lb.a ? Lb.a([b], [c]) : Lb.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.c(a, d, e), s(l)) {
          d = G(l), e = G(L(l)), l = L(L(l));
        } else {
          return a;
        }
      }
    }
    a.l = 3;
    a.g = function(a) {
      var b = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var l = G(a);
      a = I(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.e(b, e, f, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 3;
  b.g = c.g;
  b.c = a;
  b.e = c.e;
  return b;
}();
function Nb(a) {
  var b = ea(a);
  return b ? b : a ? s(s(null) ? null : a.Nb) ? !0 : a.Xb ? !1 : t(Ia, a) : t(Ia, a);
}
function Ob(a) {
  var b = null != a;
  return(b ? a ? a.h & 131072 || a.zb || (a.h ? 0 : t(Ya, a)) : t(Ya, a) : b) ? Za(a) : null;
}
var Pb = {}, Qb = 0;
function E(a) {
  if (a && (a.h & 4194304 || a.Qb)) {
    a = a.A(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < Qb && (Pb = {}, Qb = 0);
            var b = Pb[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              Pb[a] = b;
              Qb += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : u ? db(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function Rb(a) {
  return a ? a.h & 16384 || a.Vb ? !0 : a.h ? !1 : t(Va, a) : t(Va, a);
}
function Sb(a) {
  return a ? a.p & 512 || a.Ob ? !0 : !1 : !1;
}
function Tb(a) {
  var b = [];
  ta(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function Vb(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function Wb(a) {
  return null == a ? !1 : a ? a.h & 64 || a.wa ? !0 : a.h ? !1 : t(Na, a) : t(Na, a);
}
function Xb(a) {
  return s(a) ? !0 : !1;
}
function wb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (Ga(a) === Ga(b)) {
    return a && (a.p & 2048 || a.Ba) ? a.Ca(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (u) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Yb = function() {
  function a(a, b, c, g) {
    for (;;) {
      var k = wb(P.a(a, g), P.a(b, g));
      if (0 === k && g + 1 < c) {
        g += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = O(a), g = O(b);
    return f < g ? -1 : f > g ? 1 : u ? c.i(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.i = a;
  return c;
}(), S = function() {
  function a(a, b, c) {
    for (c = F(c);;) {
      if (c) {
        b = a.a ? a.a(b, G(c)) : a.call(null, b, G(c)), c = L(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = F(b);
    return c ? Zb.c ? Zb.c(a, G(c), L(c)) : Zb.call(null, a, G(c), L(c)) : a.q ? a.q() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Zb = function() {
  function a(a, b, c) {
    return c && (c.h & 524288 || c.Bb) ? c.O(null, a, b) : c instanceof Array ? Cb.c(c, a, b) : "string" === typeof c ? Cb.c(c, a, b) : t(ab, c) ? bb.c(c, a, b) : u ? S.c(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.h & 524288 || b.Bb) ? b.N(null, a) : b instanceof Array ? Cb.a(b, a) : "string" === typeof b ? Cb.a(b, a) : t(ab, b) ? bb.a(b, a) : u ? S.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function $b(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
}
var ac = function() {
  function a(a) {
    return a * c.q();
  }
  function b() {
    return Math.random.q ? Math.random.q() : Math.random.call(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.b = a;
  return c;
}();
function bc(a) {
  return $b(ac.b(a));
}
function cc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var x = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new wa(b.b(a)), l = d;;) {
        if (s(l)) {
          e = e.append(b.b(G(l))), l = L(l);
        } else {
          return e.toString();
        }
      }
    }
    a.l = 1;
    a.g = function(a) {
      var b = G(a);
      a = I(a);
      return c(b, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.g = c.g;
  b.q = function() {
    return "";
  };
  b.b = a;
  b.e = c.e;
  return b;
}();
function Gb(a, b) {
  return Xb((b ? b.h & 16777216 || b.Ub || (b.h ? 0 : t(gb, b)) : t(gb, b)) ? function() {
    for (var c = F(a), d = F(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (D.a(G(c), G(d))) {
        c = L(c), d = L(d);
      } else {
        return u ? !1 : null;
      }
    }
  }() : null);
}
function zb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Fb(a) {
  if (F(a)) {
    var b = E(G(a));
    for (a = L(a);;) {
      if (null == a) {
        return b;
      }
      b = zb(b, E(G(a)));
      a = L(a);
    }
  } else {
    return 0;
  }
}
function dc(a) {
  var b = 0;
  for (a = F(a);;) {
    if (a) {
      var c = G(a), b = (b + (E(ec.b ? ec.b(c) : ec.call(null, c)) ^ E(fc.b ? fc.b(c) : fc.call(null, c)))) % 4503599627370496;
      a = L(a);
    } else {
      return b;
    }
  }
}
function gc(a, b, c, d, e) {
  this.m = a;
  this.ya = b;
  this.ga = c;
  this.count = d;
  this.k = e;
  this.h = 65937646;
  this.p = 8192;
}
h = gc.prototype;
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Fb(this);
};
h.ea = function() {
  return 1 === this.count ? null : this.ga;
};
h.C = function(a, b) {
  return new gc(this.m, b, this, this.count + 1, null);
};
h.toString = function() {
  return ub(this);
};
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.c(b, c, this);
};
h.D = function() {
  return this;
};
h.G = function() {
  return this.count;
};
h.Q = function() {
  return this.ya;
};
h.S = function() {
  return 1 === this.count ? K : this.ga;
};
h.u = function(a, b) {
  return Gb(this, b);
};
h.L = function(a, b) {
  return new gc(b, this.ya, this.ga, this.count, this.k);
};
h.J = function() {
  return this.m;
};
function hc(a) {
  this.m = a;
  this.h = 65937614;
  this.p = 8192;
}
h = hc.prototype;
h.A = function() {
  return 0;
};
h.ea = function() {
  return null;
};
h.C = function(a, b) {
  return new gc(this.m, b, null, 1, null);
};
h.toString = function() {
  return ub(this);
};
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.c(b, c, this);
};
h.D = function() {
  return null;
};
h.G = function() {
  return 0;
};
h.Q = function() {
  return null;
};
h.S = function() {
  return K;
};
h.u = function(a, b) {
  return Gb(this, b);
};
h.L = function(a, b) {
  return new hc(b);
};
h.J = function() {
  return this.m;
};
var K = new hc(null), ic = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Ab && 0 === a.j) {
      b = a.d;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.Q(null)), a = a.ea(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = K;;) {
      if (0 < a) {
        var f = a - 1, e = e.C(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.l = 0;
  a.g = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function jc(a, b, c, d) {
  this.m = a;
  this.ya = b;
  this.ga = c;
  this.k = d;
  this.h = 65929452;
  this.p = 8192;
}
h = jc.prototype;
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Fb(this);
};
h.ea = function() {
  return null == this.ga ? null : F(this.ga);
};
h.C = function(a, b) {
  return new jc(null, b, this, this.k);
};
h.toString = function() {
  return ub(this);
};
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.c(b, c, this);
};
h.D = function() {
  return this;
};
h.Q = function() {
  return this.ya;
};
h.S = function() {
  return null == this.ga ? K : this.ga;
};
h.u = function(a, b) {
  return Gb(this, b);
};
h.L = function(a, b) {
  return new jc(b, this.ya, this.ga, this.k);
};
h.J = function() {
  return this.m;
};
function N(a, b) {
  var c = null == b;
  return(c ? c : b && (b.h & 64 || b.wa)) ? new jc(null, a, b, null) : new jc(null, a, F(b), null);
}
function U(a, b, c, d) {
  this.F = a;
  this.name = b;
  this.ia = c;
  this.la = d;
  this.h = 2153775105;
  this.p = 4096;
}
h = U.prototype;
h.v = function(a, b) {
  return C(b, [x(":"), x(this.ia)].join(""));
};
h.A = function() {
  null == this.la && (this.la = zb(E(this.F), E(this.name)) + 2654435769);
  return this.la;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return R.a(c, this);
      case 3:
        return R.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
h.b = function(a) {
  return R.a(a, this);
};
h.a = function(a, b) {
  return R.c(a, this, b);
};
h.u = function(a, b) {
  return b instanceof U ? this.ia === b.ia : !1;
};
h.toString = function() {
  return[x(":"), x(this.ia)].join("");
};
var lc = function() {
  function a(a, b) {
    return new U(a, b, [x(s(a) ? [x(a), x("/")].join("") : null), x(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof U) {
      return a;
    }
    if (a instanceof yb) {
      var b;
      if (a && (a.p & 4096 || a.Ab)) {
        b = a.F;
      } else {
        throw Error([x("Doesn't support namespace: "), x(a)].join(""));
      }
      return new U(b, kc.b ? kc.b(a) : kc.call(null, a), a.ka, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new U(b[0], b[1], a, null) : new U(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function V(a, b, c, d) {
  this.m = a;
  this.ra = b;
  this.r = c;
  this.k = d;
  this.p = 0;
  this.h = 32374988;
}
h = V.prototype;
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Fb(this);
};
h.ea = function() {
  fb(this);
  return null == this.r ? null : L(this.r);
};
h.C = function(a, b) {
  return N(b, this);
};
h.toString = function() {
  return ub(this);
};
function mc(a) {
  null != a.ra && (a.r = a.ra.q ? a.ra.q() : a.ra.call(null), a.ra = null);
  return a.r;
}
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.c(b, c, this);
};
h.D = function() {
  mc(this);
  if (null == this.r) {
    return null;
  }
  for (var a = this.r;;) {
    if (a instanceof V) {
      a = mc(a);
    } else {
      return this.r = a, F(this.r);
    }
  }
};
h.Q = function() {
  fb(this);
  return null == this.r ? null : G(this.r);
};
h.S = function() {
  fb(this);
  return null != this.r ? I(this.r) : K;
};
h.u = function(a, b) {
  return Gb(this, b);
};
h.L = function(a, b) {
  return new V(b, this.ra, this.r, this.k);
};
h.J = function() {
  return this.m;
};
function nc(a, b) {
  this.Ma = a;
  this.end = b;
  this.p = 0;
  this.h = 2;
}
nc.prototype.G = function() {
  return this.end;
};
nc.prototype.add = function(a) {
  this.Ma[this.end] = a;
  return this.end += 1;
};
nc.prototype.$ = function() {
  var a = new oc(this.Ma, 0, this.end);
  this.Ma = null;
  return a;
};
function oc(a, b, c) {
  this.d = a;
  this.s = b;
  this.end = c;
  this.p = 0;
  this.h = 524306;
}
h = oc.prototype;
h.N = function(a, b) {
  return Cb.i(this.d, b, this.d[this.s], this.s + 1);
};
h.O = function(a, b, c) {
  return Cb.i(this.d, b, c, this.s);
};
h.hb = function() {
  if (this.s === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new oc(this.d, this.s + 1, this.end);
};
h.M = function(a, b) {
  return this.d[this.s + b];
};
h.V = function(a, b, c) {
  return 0 <= b && b < this.end - this.s ? this.d[this.s + b] : c;
};
h.G = function() {
  return this.end - this.s;
};
var pc = function() {
  function a(a, b, c) {
    return new oc(a, b, c);
  }
  function b(a, b) {
    return new oc(a, b, a.length);
  }
  function c(a) {
    return new oc(a, 0, a.length);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d;
}();
function qc(a, b, c, d) {
  this.$ = a;
  this.aa = b;
  this.m = c;
  this.k = d;
  this.h = 31850732;
  this.p = 1536;
}
h = qc.prototype;
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Fb(this);
};
h.ea = function() {
  if (1 < Ka(this.$)) {
    return new qc(pb(this.$), this.aa, this.m, null);
  }
  var a = fb(this.aa);
  return null == a ? null : a;
};
h.C = function(a, b) {
  return N(b, this);
};
h.toString = function() {
  return ub(this);
};
h.D = function() {
  return this;
};
h.Q = function() {
  return z.a(this.$, 0);
};
h.S = function() {
  return 1 < Ka(this.$) ? new qc(pb(this.$), this.aa, this.m, null) : null == this.aa ? K : this.aa;
};
h.Na = function() {
  return null == this.aa ? null : this.aa;
};
h.u = function(a, b) {
  return Gb(this, b);
};
h.L = function(a, b) {
  return new qc(this.$, this.aa, b, this.k);
};
h.J = function() {
  return this.m;
};
h.Oa = function() {
  return this.$;
};
h.Pa = function() {
  return null == this.aa ? K : this.aa;
};
function rc(a, b) {
  return 0 === Ka(a) ? b : new qc(a, b, null, null);
}
function sc(a) {
  for (var b = [];;) {
    if (F(a)) {
      b.push(G(a)), a = L(a);
    } else {
      return b;
    }
  }
}
function tc(a, b) {
  if (Db(a)) {
    return O(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && F(c)) {
      c = L(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var vc = function uc(b) {
  return null == b ? null : null == L(b) ? F(G(b)) : u ? N(G(b), uc(L(b))) : null;
}, wc = function() {
  function a(a, b) {
    return new V(null, function() {
      var c = F(a);
      return c ? Sb(c) ? rc(qb(c), d.a(rb(c), b)) : N(G(c), d.a(I(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new V(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new V(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function r(a, b) {
        return new V(null, function() {
          var c = F(a);
          return c ? Sb(c) ? rc(qb(c), r(rb(c), b)) : N(G(c), r(I(c), b)) : s(b) ? r(G(b), L(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.l = 2;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = I(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g);
      default:
        return e.e(d, g, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 2;
  d.g = e.g;
  d.q = c;
  d.b = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), xc = function() {
  function a(a, b, c, d) {
    return N(a, N(b, N(c, d)));
  }
  function b(a, b, c) {
    return N(a, N(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, n, p) {
      var r = null;
      4 < arguments.length && (r = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, r);
    }
    function b(a, c, d, e, f) {
      return N(a, N(c, N(d, N(e, vc(f)))));
    }
    a.l = 4;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var e = G(a);
      a = L(a);
      var p = G(a);
      a = I(a);
      return b(c, d, e, p, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, g, k, l) {
    switch(arguments.length) {
      case 1:
        return F(c);
      case 2:
        return N(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, k);
      default:
        return d.e(c, f, g, k, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = 4;
  c.g = d.g;
  c.b = function(a) {
    return F(a);
  };
  c.a = function(a, b) {
    return N(a, b);
  };
  c.c = b;
  c.i = a;
  c.e = d.e;
  return c;
}(), yc = function() {
  var a = null, b = function() {
    function a(c, f, g, k) {
      var l = null;
      3 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = nb(a, c, d), s(k)) {
          c = G(k), d = G(L(k)), k = L(L(k));
        } else {
          return a;
        }
      }
    }
    a.l = 3;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var g = G(a);
      a = L(a);
      var k = G(a);
      a = I(a);
      return b(c, g, k, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return nb(a, d, e);
      default:
        return b.e(a, d, e, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 3;
  a.g = b.g;
  a.c = function(a, b, e) {
    return nb(a, b, e);
  };
  a.e = b.e;
  return a;
}();
function zc(a, b, c) {
  var d = F(c);
  if (0 === b) {
    return a.q ? a.q() : a.call(null);
  }
  c = A(d);
  var e = B(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = A(e), f = B(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = A(f), g = B(f);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var f = A(g), k = B(g);
  if (4 === b) {
    return a.i ? a.i(c, d, e, f) : a.i ? a.i(c, d, e, f) : a.call(null, c, d, e, f);
  }
  g = A(k);
  k = B(k);
  if (5 === b) {
    return a.o ? a.o(c, d, e, f, g) : a.o ? a.o(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  a = A(k);
  var l = B(k);
  if (6 === b) {
    return a.da ? a.da(c, d, e, f, g, a) : a.da ? a.da(c, d, e, f, g, a) : a.call(null, c, d, e, f, g, a);
  }
  var k = A(l), n = B(l);
  if (7 === b) {
    return a.oa ? a.oa(c, d, e, f, g, a, k) : a.oa ? a.oa(c, d, e, f, g, a, k) : a.call(null, c, d, e, f, g, a, k);
  }
  var l = A(n), p = B(n);
  if (8 === b) {
    return a.ab ? a.ab(c, d, e, f, g, a, k, l) : a.ab ? a.ab(c, d, e, f, g, a, k, l) : a.call(null, c, d, e, f, g, a, k, l);
  }
  var n = A(p), r = B(p);
  if (9 === b) {
    return a.bb ? a.bb(c, d, e, f, g, a, k, l, n) : a.bb ? a.bb(c, d, e, f, g, a, k, l, n) : a.call(null, c, d, e, f, g, a, k, l, n);
  }
  var p = A(r), w = B(r);
  if (10 === b) {
    return a.Qa ? a.Qa(c, d, e, f, g, a, k, l, n, p) : a.Qa ? a.Qa(c, d, e, f, g, a, k, l, n, p) : a.call(null, c, d, e, f, g, a, k, l, n, p);
  }
  var r = A(w), H = B(w);
  if (11 === b) {
    return a.Ra ? a.Ra(c, d, e, f, g, a, k, l, n, p, r) : a.Ra ? a.Ra(c, d, e, f, g, a, k, l, n, p, r) : a.call(null, c, d, e, f, g, a, k, l, n, p, r);
  }
  var w = A(H), J = B(H);
  if (12 === b) {
    return a.Sa ? a.Sa(c, d, e, f, g, a, k, l, n, p, r, w) : a.Sa ? a.Sa(c, d, e, f, g, a, k, l, n, p, r, w) : a.call(null, c, d, e, f, g, a, k, l, n, p, r, w);
  }
  var H = A(J), Q = B(J);
  if (13 === b) {
    return a.Ta ? a.Ta(c, d, e, f, g, a, k, l, n, p, r, w, H) : a.Ta ? a.Ta(c, d, e, f, g, a, k, l, n, p, r, w, H) : a.call(null, c, d, e, f, g, a, k, l, n, p, r, w, H);
  }
  var J = A(Q), T = B(Q);
  if (14 === b) {
    return a.Ua ? a.Ua(c, d, e, f, g, a, k, l, n, p, r, w, H, J) : a.Ua ? a.Ua(c, d, e, f, g, a, k, l, n, p, r, w, H, J) : a.call(null, c, d, e, f, g, a, k, l, n, p, r, w, H, J);
  }
  var Q = A(T), da = B(T);
  if (15 === b) {
    return a.Va ? a.Va(c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q) : a.Va ? a.Va(c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q) : a.call(null, c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q);
  }
  var T = A(da), ma = B(da);
  if (16 === b) {
    return a.Wa ? a.Wa(c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q, T) : a.Wa ? a.Wa(c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q, T) : a.call(null, c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q, T);
  }
  var da = A(ma), Da = B(ma);
  if (17 === b) {
    return a.Xa ? a.Xa(c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q, T, da) : a.Xa ? a.Xa(c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q, T, da) : a.call(null, c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q, T, da);
  }
  var ma = A(Da), Ub = B(Da);
  if (18 === b) {
    return a.Ya ? a.Ya(c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q, T, da, ma) : a.Ya ? a.Ya(c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q, T, da, ma) : a.call(null, c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q, T, da, ma);
  }
  Da = A(Ub);
  Ub = B(Ub);
  if (19 === b) {
    return a.Za ? a.Za(c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q, T, da, ma, Da) : a.Za ? a.Za(c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q, T, da, ma, Da) : a.call(null, c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q, T, da, ma, Da);
  }
  var nd = A(Ub);
  B(Ub);
  if (20 === b) {
    return a.$a ? a.$a(c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q, T, da, ma, Da, nd) : a.$a ? a.$a(c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q, T, da, ma, Da, nd) : a.call(null, c, d, e, f, g, a, k, l, n, p, r, w, H, J, Q, T, da, ma, Da, nd);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var W = function() {
  function a(a, b, c, d, e) {
    b = xc.i(b, c, d, e);
    c = a.l;
    return a.g ? (d = tc(b, c + 1), d <= c ? zc(a, d, b) : a.g(b)) : a.apply(a, sc(b));
  }
  function b(a, b, c, d) {
    b = xc.c(b, c, d);
    c = a.l;
    return a.g ? (d = tc(b, c + 1), d <= c ? zc(a, d, b) : a.g(b)) : a.apply(a, sc(b));
  }
  function c(a, b, c) {
    b = xc.a(b, c);
    c = a.l;
    if (a.g) {
      var d = tc(b, c + 1);
      return d <= c ? zc(a, d, b) : a.g(b);
    }
    return a.apply(a, sc(b));
  }
  function d(a, b) {
    var c = a.l;
    if (a.g) {
      var d = tc(b, c + 1);
      return d <= c ? zc(a, d, b) : a.g(b);
    }
    return a.apply(a, sc(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, H) {
      var J = null;
      5 < arguments.length && (J = M(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, J);
    }
    function b(a, c, d, e, f, g) {
      c = N(c, N(d, N(e, N(f, vc(g)))));
      d = a.l;
      return a.g ? (e = tc(c, d + 1), e <= d ? zc(a, e, c) : a.g(c)) : a.apply(a, sc(c));
    }
    a.l = 5;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var e = G(a);
      a = L(a);
      var f = G(a);
      a = L(a);
      var g = G(a);
      a = I(a);
      return b(c, d, e, f, g, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, n, p, r) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, p);
      default:
        return f.e(e, k, l, n, p, M(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.l = 5;
  e.g = f.g;
  e.a = d;
  e.c = c;
  e.i = b;
  e.o = a;
  e.e = f.e;
  return e;
}(), Ac = function() {
  function a(a, b) {
    return!D.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return Fa(W.i(D, a, c, d));
    }
    a.l = 2;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = I(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.g = c.g;
  b.b = function() {
    return!1;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function Bc(a, b) {
  for (;;) {
    if (null == F(b)) {
      return!0;
    }
    if (s(a.b ? a.b(G(b)) : a.call(null, G(b)))) {
      var c = a, d = L(b);
      a = c;
      b = d;
    } else {
      return u ? !1 : null;
    }
  }
}
function Cc(a, b) {
  for (;;) {
    if (F(b)) {
      var c = a.b ? a.b(G(b)) : a.call(null, G(b));
      if (s(c)) {
        return c;
      }
      var c = a, d = L(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function Dc(a, b) {
  return Fa(Cc(a, b));
}
function Ec(a) {
  return a;
}
var Fc = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = M(Array.prototype.slice.call(arguments, 0), 0));
        return p.call(this, b);
      }
      function p(e) {
        return W.o(a, b, c, d, e);
      }
      e.l = 0;
      e.g = function(a) {
        a = F(a);
        return p(a);
      };
      e.e = p;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = M(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return W.i(a, b, c, d);
      }
      d.l = 0;
      d.g = function(a) {
        a = F(a);
        return e(a);
      };
      d.e = e;
      return d;
    }();
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = M(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return W.c(a, b, c);
      }
      c.l = 0;
      c.g = function(a) {
        a = F(a);
        return d(a);
      };
      c.e = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, r) {
      var w = null;
      4 < arguments.length && (w = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = M(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c);
        }
        function g(b) {
          return W.o(a, c, d, e, wc.a(f, b));
        }
        b.l = 0;
        b.g = function(a) {
          a = F(a);
          return g(a);
        };
        b.e = g;
        return b;
      }();
    }
    a.l = 4;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var e = G(a);
      a = L(a);
      var f = G(a);
      a = I(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, k, l, n) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.e(d, g, k, l, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.g = e.g;
  d.b = function(a) {
    return a;
  };
  d.a = c;
  d.c = b;
  d.i = a;
  d.e = e.e;
  return d;
}(), Gc = function() {
  function a(a, b, c, e) {
    return new V(null, function() {
      var n = F(b), p = F(c), r = F(e);
      return n && p && r ? N(a.c ? a.c(G(n), G(p), G(r)) : a.call(null, G(n), G(p), G(r)), d.i(a, I(n), I(p), I(r))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new V(null, function() {
      var e = F(b), n = F(c);
      return e && n ? N(a.a ? a.a(G(e), G(n)) : a.call(null, G(e), G(n)), d.c(a, I(e), I(n))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new V(null, function() {
      var c = F(b);
      if (c) {
        if (Sb(c)) {
          for (var e = qb(c), n = O(e), p = new nc(Array(n), 0), r = 0;;) {
            if (r < n) {
              var w = a.b ? a.b(z.a(e, r)) : a.call(null, z.a(e, r));
              p.add(w);
              r += 1;
            } else {
              break;
            }
          }
          return rc(p.$(), d.a(a, rb(c)));
        }
        return N(a.b ? a.b(G(c)) : a.call(null, G(c)), d.a(a, I(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, r) {
      var w = null;
      4 < arguments.length && (w = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, e, f, g) {
      return d.a(function(b) {
        return W.a(a, b);
      }, function H(a) {
        return new V(null, function() {
          var b = d.a(F, a);
          return Bc(Ec, b) ? N(d.a(G, b), H(d.a(I, b))) : null;
        }, null, null);
      }(Jb.e(g, f, M([e, c], 0))));
    }
    a.l = 4;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var e = G(a);
      a = L(a);
      var f = G(a);
      a = I(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.e(d, g, k, l, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.g = e.g;
  d.a = c;
  d.c = b;
  d.i = a;
  d.e = e.e;
  return d;
}(), Ic = function Hc(b, c) {
  return new V(null, function() {
    if (0 < b) {
      var d = F(c);
      return d ? N(G(d), Hc(b - 1, I(d))) : null;
    }
    return null;
  }, null, null);
};
function Jc(a) {
  return new V(null, function() {
    var b;
    a: {
      b = 1;
      for (var c = a;;) {
        if (c = F(c), 0 < b && c) {
          b -= 1, c = I(c);
        } else {
          b = c;
          break a;
        }
      }
      b = void 0;
    }
    return b;
  }, null, null);
}
var Kc = function() {
  function a(a, b) {
    return Ic(a, c.b(b));
  }
  function b(a) {
    return new V(null, function() {
      return N(a, c.b(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Lc = function() {
  function a(a, b) {
    return Ic(a, c.b(b));
  }
  function b(a) {
    return new V(null, function() {
      return N(a.q ? a.q() : a.call(null), c.b(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Mc = function() {
  function a(a, c) {
    return new V(null, function() {
      var f = F(a), g = F(c);
      return f && g ? N(G(f), N(G(g), b.a(I(f), I(g)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new V(null, function() {
        var c = Gc.a(F, Jb.e(e, d, M([a], 0)));
        return Bc(Ec, c) ? wc.a(Gc.a(G, c), W.a(b, Gc.a(I, c))) : null;
      }, null, null);
    }
    a.l = 2;
    a.g = function(a) {
      var b = G(a);
      a = L(a);
      var d = G(a);
      a = I(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b;
}(), Oc = function Nc(b, c) {
  return new V(null, function() {
    var d = F(c);
    if (d) {
      if (Sb(d)) {
        for (var e = qb(d), f = O(e), g = new nc(Array(f), 0), k = 0;;) {
          if (k < f) {
            if (s(b.b ? b.b(z.a(e, k)) : b.call(null, z.a(e, k)))) {
              var l = z.a(e, k);
              g.add(l);
            }
            k += 1;
          } else {
            break;
          }
        }
        return rc(g.$(), Nc(b, rb(d)));
      }
      e = G(d);
      d = I(d);
      return s(b.b ? b.b(e) : b.call(null, e)) ? N(e, Nc(b, d)) : Nc(b, d);
    }
    return null;
  }, null, null);
};
function Pc(a, b) {
  this.n = a;
  this.d = b;
}
function Qc(a) {
  return new Pc(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Rc(a) {
  a = a.f;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Sc(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Qc(a);
    d.d[0] = c;
    c = d;
    b -= 5;
  }
}
var Uc = function Tc(b, c, d, e) {
  var f = new Pc(d.n, y(d.d)), g = b.f - 1 >>> c & 31;
  5 === c ? f.d[g] = e : (d = d.d[g], b = null != d ? Tc(b, c - 5, d, e) : Sc(null, c - 5, e), f.d[g] = b);
  return f;
};
function Vc(a, b) {
  throw Error([x("No item "), x(a), x(" in vector of length "), x(b)].join(""));
}
function Wc(a, b) {
  if (0 <= b && b < a.f) {
    if (b >= Rc(a)) {
      return a.B;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.d[b >>> d & 31], d = e
      } else {
        return c.d;
      }
    }
  } else {
    return Vc(b, a.f);
  }
}
var Yc = function Xc(b, c, d, e, f) {
  var g = new Pc(d.n, y(d.d));
  if (0 === c) {
    g.d[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Xc(b, c - 5, d.d[k], e, f);
    g.d[k] = b;
  }
  return g;
};
function X(a, b, c, d, e, f) {
  this.m = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.B = e;
  this.k = f;
  this.p = 8196;
  this.h = 167668511;
}
h = X.prototype;
h.Da = function() {
  return new Zc(this.f, this.shift, $c.b ? $c.b(this.root) : $c.call(null, this.root), ad.b ? ad.b(this.B) : ad.call(null, this.B));
};
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Fb(this);
};
h.H = function(a, b) {
  return z.c(this, b, null);
};
h.I = function(a, b, c) {
  return z.c(this, b, c);
};
h.va = function(a, b, c) {
  if ("number" === typeof b) {
    return Wa(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.V(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
h.b = function(a) {
  return this.M(null, a);
};
h.a = function(a, b) {
  return this.V(null, a, b);
};
h.C = function(a, b) {
  if (32 > this.f - Rc(this)) {
    for (var c = this.B.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.B[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new X(this.m, this.f + 1, this.shift, this.root, d, null);
  }
  c = (d = this.f >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Qc(null), d.d[0] = this.root, e = Sc(null, this.shift, new Pc(null, this.B)), d.d[1] = e) : d = Uc(this, this.shift, this.root, new Pc(null, this.B));
  return new X(this.m, this.f + 1, c, d, [b], null);
};
h.jb = function() {
  return z.a(this, 0);
};
h.kb = function() {
  return z.a(this, 1);
};
h.toString = function() {
  return ub(this);
};
h.N = function(a, b) {
  return Bb.a(this, b);
};
h.O = function(a, b, c) {
  return Bb.c(this, b, c);
};
h.D = function() {
  return 0 === this.f ? null : 32 > this.f ? M.b(this.B) : u ? Y.c ? Y.c(this, 0, 0) : Y.call(null, this, 0, 0) : null;
};
h.G = function() {
  return this.f;
};
h.cb = function(a, b, c) {
  if (0 <= b && b < this.f) {
    return Rc(this) <= b ? (a = y(this.B), a[b & 31] = c, new X(this.m, this.f, this.shift, this.root, a, null)) : new X(this.m, this.f, this.shift, Yc(this, this.shift, this.root, b, c), this.B, null);
  }
  if (b === this.f) {
    return La(this, c);
  }
  if (u) {
    throw Error([x("Index "), x(b), x(" out of bounds  [0,"), x(this.f), x("]")].join(""));
  }
  return null;
};
h.u = function(a, b) {
  return Gb(this, b);
};
h.L = function(a, b) {
  return new X(b, this.f, this.shift, this.root, this.B, this.k);
};
h.J = function() {
  return this.m;
};
h.M = function(a, b) {
  return Wc(this, b)[b & 31];
};
h.V = function(a, b, c) {
  return 0 <= b && b < this.f ? z.a(this, b) : c;
};
var Z = new Pc(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), bd = new X(null, 0, 5, Z, [], 0);
function cd(a, b, c, d, e, f) {
  this.w = a;
  this.U = b;
  this.j = c;
  this.s = d;
  this.m = e;
  this.k = f;
  this.h = 32243948;
  this.p = 1536;
}
h = cd.prototype;
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Fb(this);
};
h.ea = function() {
  if (this.s + 1 < this.U.length) {
    var a = Y.i ? Y.i(this.w, this.U, this.j, this.s + 1) : Y.call(null, this.w, this.U, this.j, this.s + 1);
    return null == a ? null : a;
  }
  return sb(this);
};
h.C = function(a, b) {
  return N(b, this);
};
h.toString = function() {
  return ub(this);
};
h.N = function(a, b) {
  return Bb.a(dd.c ? dd.c(this.w, this.j + this.s, O(this.w)) : dd.call(null, this.w, this.j + this.s, O(this.w)), b);
};
h.O = function(a, b, c) {
  return Bb.c(dd.c ? dd.c(this.w, this.j + this.s, O(this.w)) : dd.call(null, this.w, this.j + this.s, O(this.w)), b, c);
};
h.D = function() {
  return this;
};
h.Q = function() {
  return this.U[this.s];
};
h.S = function() {
  if (this.s + 1 < this.U.length) {
    var a = Y.i ? Y.i(this.w, this.U, this.j, this.s + 1) : Y.call(null, this.w, this.U, this.j, this.s + 1);
    return null == a ? K : a;
  }
  return rb(this);
};
h.Na = function() {
  var a = this.U.length, a = this.j + a < Ka(this.w) ? Y.c ? Y.c(this.w, this.j + a, 0) : Y.call(null, this.w, this.j + a, 0) : null;
  return null == a ? null : a;
};
h.u = function(a, b) {
  return Gb(this, b);
};
h.L = function(a, b) {
  return Y.o ? Y.o(this.w, this.U, this.j, this.s, b) : Y.call(null, this.w, this.U, this.j, this.s, b);
};
h.Oa = function() {
  return pc.a(this.U, this.s);
};
h.Pa = function() {
  var a = this.U.length, a = this.j + a < Ka(this.w) ? Y.c ? Y.c(this.w, this.j + a, 0) : Y.call(null, this.w, this.j + a, 0) : null;
  return null == a ? K : a;
};
var Y = function() {
  function a(a, b, c, d, l) {
    return new cd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new cd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new cd(a, Wc(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, g, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, k);
      case 5:
        return a.call(this, d, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.i = b;
  d.o = a;
  return d;
}();
function ed(a, b, c, d, e) {
  this.m = a;
  this.ba = b;
  this.start = c;
  this.end = d;
  this.k = e;
  this.h = 166617887;
  this.p = 8192;
}
h = ed.prototype;
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Fb(this);
};
h.H = function(a, b) {
  return z.c(this, b, null);
};
h.I = function(a, b, c) {
  return z.c(this, b, c);
};
h.va = function(a, b, c) {
  if ("number" === typeof b) {
    return Wa(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.V(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
h.b = function(a) {
  return this.M(null, a);
};
h.a = function(a, b) {
  return this.V(null, a, b);
};
h.C = function(a, b) {
  return fd.o ? fd.o(this.m, Wa(this.ba, this.end, b), this.start, this.end + 1, null) : fd.call(null, this.m, Wa(this.ba, this.end, b), this.start, this.end + 1, null);
};
h.toString = function() {
  return ub(this);
};
h.N = function(a, b) {
  return Bb.a(this, b);
};
h.O = function(a, b, c) {
  return Bb.c(this, b, c);
};
h.D = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : N(z.a(a.ba, d), new V(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
h.G = function() {
  return this.end - this.start;
};
h.cb = function(a, b, c) {
  var d = this, e = d.start + b;
  return fd.o ? fd.o(d.m, Mb.c(d.ba, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : fd.call(null, d.m, Mb.c(d.ba, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
h.u = function(a, b) {
  return Gb(this, b);
};
h.L = function(a, b) {
  return fd.o ? fd.o(b, this.ba, this.start, this.end, this.k) : fd.call(null, b, this.ba, this.start, this.end, this.k);
};
h.J = function() {
  return this.m;
};
h.M = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Vc(b, this.end - this.start) : z.a(this.ba, this.start + b);
};
h.V = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.c(this.ba, this.start + b, c);
};
function fd(a, b, c, d, e) {
  for (;;) {
    if (b instanceof ed) {
      c = b.start + c, d = b.start + d, b = b.ba;
    } else {
      var f = O(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new ed(a, b, c, d, e);
    }
  }
}
var dd = function() {
  function a(a, b, c) {
    return fd(null, a, b, c, null);
  }
  function b(a, b) {
    return c.c(a, b, O(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function $c(a) {
  return new Pc({}, y(a.d));
}
function ad(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Vb(a, 0, b, 0, a.length);
  return b;
}
var hd = function gd(b, c, d, e) {
  d = b.root.n === d.n ? d : new Pc(b.root.n, y(d.d));
  var f = b.f - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.d[f];
    b = null != g ? gd(b, c - 5, g, e) : Sc(b.root.n, c - 5, e);
  }
  d.d[f] = b;
  return d;
};
function Zc(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.B = d;
  this.h = 275;
  this.p = 88;
}
h = Zc.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
h.b = function(a) {
  return this.H(null, a);
};
h.a = function(a, b) {
  return this.I(null, a, b);
};
h.H = function(a, b) {
  return z.c(this, b, null);
};
h.I = function(a, b, c) {
  return z.c(this, b, c);
};
h.M = function(a, b) {
  if (this.root.n) {
    return Wc(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.V = function(a, b, c) {
  return 0 <= b && b < this.f ? z.a(this, b) : c;
};
h.G = function() {
  if (this.root.n) {
    return this.f;
  }
  throw Error("count after persistent!");
};
h.lb = function(a, b, c) {
  var d = this;
  if (d.root.n) {
    if (0 <= b && b < d.f) {
      return Rc(this) <= b ? d.B[b & 31] = c : (a = function f(a, k) {
        var l = d.root.n === k.n ? k : new Pc(d.root.n, y(k.d));
        if (0 === a) {
          l.d[b & 31] = c;
        } else {
          var n = b >>> a & 31, p = f(a - 5, l.d[n]);
          l.d[n] = p;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.f) {
      return lb(this, c);
    }
    if (u) {
      throw Error([x("Index "), x(b), x(" out of bounds for TransientVector of length"), x(d.f)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
h.xa = function(a, b, c) {
  return ob(this, b, c);
};
h.Ea = function(a, b) {
  if (this.root.n) {
    if (32 > this.f - Rc(this)) {
      this.B[this.f & 31] = b;
    } else {
      var c = new Pc(this.root.n, this.B), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.B = d;
      if (this.f >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Sc(this.root.n, this.shift, c);
        this.root = new Pc(this.root.n, d);
        this.shift = e;
      } else {
        this.root = hd(this, this.shift, this.root, c);
      }
    }
    this.f += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.Fa = function() {
  if (this.root.n) {
    this.root.n = null;
    var a = this.f - Rc(this), b = Array(a);
    Vb(this.B, 0, b, 0, a);
    return new X(null, this.f, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function id() {
  this.p = 0;
  this.h = 2097152;
}
id.prototype.u = function() {
  return!1;
};
var jd = new id;
function kd(a, b) {
  return Xb((null == b ? 0 : b ? b.h & 1024 || b.Rb || (b.h ? 0 : t(Ra, b)) : t(Ra, b)) ? O(a) === O(b) ? Bc(Ec, Gc.a(function(a) {
    return D.a(R.c(b, G(a), jd), G(L(a)));
  }, a)) : null : null);
}
function ld(a, b) {
  var c = a.d;
  if (b instanceof U) {
    a: {
      for (var d = c.length, e = b.ia, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof U && e === g.ia) {
          c = f;
          break a;
        }
        if (u) {
          f += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if (ca(b) || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (u) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof yb) {
        a: {
          d = c.length;
          e = b.ka;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof yb && e === g.ka) {
              c = f;
              break a;
            }
            if (u) {
              f += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (u) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (u) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (D.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (u) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function md(a, b, c) {
  this.d = a;
  this.j = b;
  this.ta = c;
  this.p = 0;
  this.h = 32374990;
}
h = md.prototype;
h.A = function() {
  return Fb(this);
};
h.ea = function() {
  return this.j < this.d.length - 2 ? new md(this.d, this.j + 2, this.ta) : null;
};
h.C = function(a, b) {
  return N(b, this);
};
h.toString = function() {
  return ub(this);
};
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.c(b, c, this);
};
h.D = function() {
  return this;
};
h.G = function() {
  return(this.d.length - this.j) / 2;
};
h.Q = function() {
  return new X(null, 2, 5, Z, [this.d[this.j], this.d[this.j + 1]], null);
};
h.S = function() {
  return this.j < this.d.length - 2 ? new md(this.d, this.j + 2, this.ta) : K;
};
h.u = function(a, b) {
  return Gb(this, b);
};
h.L = function(a, b) {
  return new md(this.d, this.j, b);
};
h.J = function() {
  return this.ta;
};
function q(a, b, c, d) {
  this.m = a;
  this.f = b;
  this.d = c;
  this.k = d;
  this.p = 8196;
  this.h = 16123663;
}
h = q.prototype;
h.Da = function() {
  return new od({}, this.d.length, y(this.d));
};
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = dc(this);
};
h.H = function(a, b) {
  return Pa.c(this, b, null);
};
h.I = function(a, b, c) {
  a = ld(this, b);
  return-1 === a ? c : this.d[a + 1];
};
h.va = function(a, b, c) {
  a = ld(this, b);
  if (-1 === a) {
    if (this.f < pd) {
      a = this.d;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new q(this.m, this.f + 1, e, null);
    }
    a = $a;
    d = Qa;
    e = qd;
    null != e ? e && (e.p & 4 || e.Pb) ? (e = Zb.c(lb, kb(e), this), e = mb(e)) : e = Zb.c(La, e, this) : e = Zb.c(Jb, K, this);
    return a(d(e, b, c), this.m);
  }
  return c === this.d[a + 1] ? this : u ? (b = y(this.d), b[a + 1] = c, new q(this.m, this.f, b, null)) : null;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
h.b = function(a) {
  return this.H(null, a);
};
h.a = function(a, b) {
  return this.I(null, a, b);
};
h.C = function(a, b) {
  return Rb(b) ? Qa(this, z.a(b, 0), z.a(b, 1)) : Zb.c(La, this, b);
};
h.toString = function() {
  return ub(this);
};
h.D = function() {
  return 0 <= this.d.length - 2 ? new md(this.d, 0, null) : null;
};
h.G = function() {
  return this.f;
};
h.u = function(a, b) {
  return kd(this, b);
};
h.L = function(a, b) {
  return new q(b, this.f, this.d, this.k);
};
h.J = function() {
  return this.m;
};
var pd = 8;
function od(a, b, c) {
  this.pa = a;
  this.fa = b;
  this.d = c;
  this.p = 56;
  this.h = 258;
}
h = od.prototype;
h.xa = function(a, b, c) {
  if (s(this.pa)) {
    a = ld(this, b);
    if (-1 === a) {
      return this.fa + 2 <= 2 * pd ? (this.fa += 2, this.d.push(b), this.d.push(c), this) : yc.c(rd.a ? rd.a(this.fa, this.d) : rd.call(null, this.fa, this.d), b, c);
    }
    c !== this.d[a + 1] && (this.d[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.Ea = function(a, b) {
  if (s(this.pa)) {
    if (b ? b.h & 2048 || b.yb || (b.h ? 0 : t(Sa, b)) : t(Sa, b)) {
      return nb(this, ec.b ? ec.b(b) : ec.call(null, b), fc.b ? fc.b(b) : fc.call(null, b));
    }
    for (var c = F(b), d = this;;) {
      var e = G(c);
      if (s(e)) {
        c = L(c), d = nb(d, ec.b ? ec.b(e) : ec.call(null, e), fc.b ? fc.b(e) : fc.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.Fa = function() {
  if (s(this.pa)) {
    return this.pa = !1, new q(null, $b((this.fa - this.fa % 2) / 2), this.d, null);
  }
  throw Error("persistent! called twice");
};
h.H = function(a, b) {
  return Pa.c(this, b, null);
};
h.I = function(a, b, c) {
  if (s(this.pa)) {
    return a = ld(this, b), -1 === a ? c : this.d[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.G = function() {
  if (s(this.pa)) {
    return $b((this.fa - this.fa % 2) / 2);
  }
  throw Error("count after persistent!");
};
function rd(a, b) {
  for (var c = kb(qd), d = 0;;) {
    if (d < a) {
      c = yc.c(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function sd() {
  this.ca = !1;
}
function td(a, b) {
  return a === b ? !0 : a === b || a instanceof U && b instanceof U && a.ia === b.ia ? !0 : u ? D.a(a, b) : null;
}
var ud = function() {
  function a(a, b, c, g, k) {
    a = y(a);
    a[b] = c;
    a[g] = k;
    return a;
  }
  function b(a, b, c) {
    a = y(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, g, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.o = a;
  return c;
}(), vd = function() {
  function a(a, b, c, g, k, l) {
    a = a.qa(b);
    a.d[c] = g;
    a.d[k] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.qa(b);
    a.d[c] = g;
    return a;
  }
  var c = null, c = function(c, e, f, g, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.da = a;
  return c;
}();
function wd(a, b, c) {
  this.n = a;
  this.t = b;
  this.d = c;
}
h = wd.prototype;
h.Y = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = cc(this.t & g - 1);
  if (0 === (this.t & g)) {
    var l = cc(this.t);
    if (2 * l < this.d.length) {
      a = this.qa(a);
      b = a.d;
      f.ca = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.t |= g;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = xd.Y(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.t >>> d & 1) && (k[d] = null != this.d[e] ? xd.Y(a, b + 5, E(this.d[e]), this.d[e], this.d[e + 1], f) : this.d[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new yd(a, l + 1, k);
    }
    return u ? (b = Array(2 * (l + 4)), Vb(this.d, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Vb(this.d, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.ca = !0, a = this.qa(a), a.d = b, a.t |= g, a) : null;
  }
  l = this.d[2 * k];
  g = this.d[2 * k + 1];
  return null == l ? (l = g.Y(a, b + 5, c, d, e, f), l === g ? this : vd.i(this, a, 2 * k + 1, l)) : td(d, l) ? e === g ? this : vd.i(this, a, 2 * k + 1, e) : u ? (f.ca = !0, vd.da(this, a, 2 * k, null, 2 * k + 1, zd.oa ? zd.oa(a, b + 5, l, g, c, d, e) : zd.call(null, a, b + 5, l, g, c, d, e))) : null;
};
h.za = function() {
  return Ad.b ? Ad.b(this.d) : Ad.call(null, this.d);
};
h.qa = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = cc(this.t), c = Array(0 > b ? 4 : 2 * (b + 1));
  Vb(this.d, 0, c, 0, 2 * b);
  return new wd(a, this.t, c);
};
h.X = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = cc(this.t & f - 1);
  if (0 === (this.t & f)) {
    var k = cc(this.t);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = xd.X(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.t >>> c & 1) && (g[c] = null != this.d[d] ? xd.X(a + 5, E(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new yd(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    Vb(this.d, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Vb(this.d, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.ca = !0;
    return new wd(null, this.t | f, a);
  }
  k = this.d[2 * g];
  f = this.d[2 * g + 1];
  return null == k ? (k = f.X(a + 5, b, c, d, e), k === f ? this : new wd(null, this.t, ud.c(this.d, 2 * g + 1, k))) : td(c, k) ? d === f ? this : new wd(null, this.t, ud.c(this.d, 2 * g + 1, d)) : u ? (e.ca = !0, new wd(null, this.t, ud.o(this.d, 2 * g, null, 2 * g + 1, zd.da ? zd.da(a + 5, k, f, b, c, d) : zd.call(null, a + 5, k, f, b, c, d)))) : null;
};
h.ma = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.t & e)) {
    return d;
  }
  var f = cc(this.t & e - 1), e = this.d[2 * f], f = this.d[2 * f + 1];
  return null == e ? f.ma(a + 5, b, c, d) : td(c, e) ? f : u ? d : null;
};
var xd = new wd(null, 0, []);
function yd(a, b, c) {
  this.n = a;
  this.f = b;
  this.d = c;
}
h = yd.prototype;
h.Y = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.d[g];
  if (null == k) {
    return a = vd.i(this, a, g, xd.Y(a, b + 5, c, d, e, f)), a.f += 1, a;
  }
  b = k.Y(a, b + 5, c, d, e, f);
  return b === k ? this : vd.i(this, a, g, b);
};
h.za = function() {
  return Bd.b ? Bd.b(this.d) : Bd.call(null, this.d);
};
h.qa = function(a) {
  return a === this.n ? this : new yd(a, this.f, y(this.d));
};
h.X = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.d[f];
  if (null == g) {
    return new yd(null, this.f + 1, ud.c(this.d, f, xd.X(a + 5, b, c, d, e)));
  }
  a = g.X(a + 5, b, c, d, e);
  return a === g ? this : new yd(null, this.f, ud.c(this.d, f, a));
};
h.ma = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.ma(a + 5, b, c, d) : d;
};
function Cd(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (td(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Dd(a, b, c, d) {
  this.n = a;
  this.ha = b;
  this.f = c;
  this.d = d;
}
h = Dd.prototype;
h.Y = function(a, b, c, d, e, f) {
  if (c === this.ha) {
    b = Cd(this.d, this.f, d);
    if (-1 === b) {
      if (this.d.length > 2 * this.f) {
        return a = vd.da(this, a, 2 * this.f, d, 2 * this.f + 1, e), f.ca = !0, a.f += 1, a;
      }
      c = this.d.length;
      b = Array(c + 2);
      Vb(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ca = !0;
      f = this.f + 1;
      a === this.n ? (this.d = b, this.f = f, a = this) : a = new Dd(this.n, this.ha, f, b);
      return a;
    }
    return this.d[b + 1] === e ? this : vd.i(this, a, b + 1, e);
  }
  return(new wd(a, 1 << (this.ha >>> b & 31), [null, this, null, null])).Y(a, b, c, d, e, f);
};
h.za = function() {
  return Ad.b ? Ad.b(this.d) : Ad.call(null, this.d);
};
h.qa = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = Array(2 * (this.f + 1));
  Vb(this.d, 0, b, 0, 2 * this.f);
  return new Dd(a, this.ha, this.f, b);
};
h.X = function(a, b, c, d, e) {
  return b === this.ha ? (a = Cd(this.d, this.f, c), -1 === a ? (a = 2 * this.f, b = Array(a + 2), Vb(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ca = !0, new Dd(null, this.ha, this.f + 1, b)) : D.a(this.d[a], d) ? this : new Dd(null, this.ha, this.f, ud.c(this.d, a + 1, d))) : (new wd(null, 1 << (this.ha >>> a & 31), [null, this])).X(a, b, c, d, e);
};
h.ma = function(a, b, c, d) {
  a = Cd(this.d, this.f, c);
  return 0 > a ? d : td(c, this.d[a]) ? this.d[a + 1] : u ? d : null;
};
var zd = function() {
  function a(a, b, c, g, k, l, n) {
    var p = E(c);
    if (p === k) {
      return new Dd(null, p, 2, [c, g, l, n]);
    }
    var r = new sd;
    return xd.Y(a, b, p, c, g, r).Y(a, b, k, l, n, r);
  }
  function b(a, b, c, g, k, l) {
    var n = E(b);
    if (n === g) {
      return new Dd(null, n, 2, [b, c, k, l]);
    }
    var p = new sd;
    return xd.X(a, n, b, c, p).X(a, g, k, l, p);
  }
  var c = null, c = function(c, e, f, g, k, l, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, k, l);
      case 7:
        return a.call(this, c, e, f, g, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.da = b;
  c.oa = a;
  return c;
}();
function Ed(a, b, c, d, e) {
  this.m = a;
  this.Z = b;
  this.j = c;
  this.r = d;
  this.k = e;
  this.p = 0;
  this.h = 32374860;
}
h = Ed.prototype;
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Fb(this);
};
h.C = function(a, b) {
  return N(b, this);
};
h.toString = function() {
  return ub(this);
};
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.c(b, c, this);
};
h.D = function() {
  return this;
};
h.Q = function() {
  return null == this.r ? new X(null, 2, 5, Z, [this.Z[this.j], this.Z[this.j + 1]], null) : G(this.r);
};
h.S = function() {
  return null == this.r ? Ad.c ? Ad.c(this.Z, this.j + 2, null) : Ad.call(null, this.Z, this.j + 2, null) : Ad.c ? Ad.c(this.Z, this.j, L(this.r)) : Ad.call(null, this.Z, this.j, L(this.r));
};
h.u = function(a, b) {
  return Gb(this, b);
};
h.L = function(a, b) {
  return new Ed(b, this.Z, this.j, this.r, this.k);
};
h.J = function() {
  return this.m;
};
var Ad = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Ed(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (s(g) && (g = g.za(), s(g))) {
            return new Ed(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Ed(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.c(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function Fd(a, b, c, d, e) {
  this.m = a;
  this.Z = b;
  this.j = c;
  this.r = d;
  this.k = e;
  this.p = 0;
  this.h = 32374860;
}
h = Fd.prototype;
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Fb(this);
};
h.C = function(a, b) {
  return N(b, this);
};
h.toString = function() {
  return ub(this);
};
h.N = function(a, b) {
  return S.a(b, this);
};
h.O = function(a, b, c) {
  return S.c(b, c, this);
};
h.D = function() {
  return this;
};
h.Q = function() {
  return G(this.r);
};
h.S = function() {
  return Bd.i ? Bd.i(null, this.Z, this.j, L(this.r)) : Bd.call(null, null, this.Z, this.j, L(this.r));
};
h.u = function(a, b) {
  return Gb(this, b);
};
h.L = function(a, b) {
  return new Fd(b, this.Z, this.j, this.r, this.k);
};
h.J = function() {
  return this.m;
};
var Bd = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var k = b[c];
          if (s(k) && (k = k.za(), s(k))) {
            return new Fd(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Fd(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.i(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.i = a;
  return c;
}();
function Gd(a, b, c, d, e, f) {
  this.m = a;
  this.f = b;
  this.root = c;
  this.R = d;
  this.T = e;
  this.k = f;
  this.p = 8196;
  this.h = 16123663;
}
h = Gd.prototype;
h.Da = function() {
  return new Hd({}, this.root, this.f, this.R, this.T);
};
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = dc(this);
};
h.H = function(a, b) {
  return Pa.c(this, b, null);
};
h.I = function(a, b, c) {
  return null == b ? this.R ? this.T : c : null == this.root ? c : u ? this.root.ma(0, E(b), b, c) : null;
};
h.va = function(a, b, c) {
  if (null == b) {
    return this.R && c === this.T ? this : new Gd(this.m, this.R ? this.f : this.f + 1, this.root, !0, c, null);
  }
  a = new sd;
  b = (null == this.root ? xd : this.root).X(0, E(b), b, c, a);
  return b === this.root ? this : new Gd(this.m, a.ca ? this.f + 1 : this.f, b, this.R, this.T, null);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
h.b = function(a) {
  return this.H(null, a);
};
h.a = function(a, b) {
  return this.I(null, a, b);
};
h.C = function(a, b) {
  return Rb(b) ? Qa(this, z.a(b, 0), z.a(b, 1)) : Zb.c(La, this, b);
};
h.toString = function() {
  return ub(this);
};
h.D = function() {
  if (0 < this.f) {
    var a = null != this.root ? this.root.za() : null;
    return this.R ? N(new X(null, 2, 5, Z, [null, this.T], null), a) : a;
  }
  return null;
};
h.G = function() {
  return this.f;
};
h.u = function(a, b) {
  return kd(this, b);
};
h.L = function(a, b) {
  return new Gd(b, this.f, this.root, this.R, this.T, this.k);
};
h.J = function() {
  return this.m;
};
var qd = new Gd(null, 0, null, !1, null, 0);
function Lb(a, b) {
  for (var c = a.length, d = 0, e = kb(qd);;) {
    if (d < c) {
      var f = d + 1, e = e.xa(null, a[d], b[d]), d = f
    } else {
      return mb(e);
    }
  }
}
function Hd(a, b, c, d, e) {
  this.n = a;
  this.root = b;
  this.count = c;
  this.R = d;
  this.T = e;
  this.p = 56;
  this.h = 258;
}
h = Hd.prototype;
h.xa = function(a, b, c) {
  return Id(this, b, c);
};
h.Ea = function(a, b) {
  var c;
  a: {
    if (this.n) {
      if (b ? b.h & 2048 || b.yb || (b.h ? 0 : t(Sa, b)) : t(Sa, b)) {
        c = Id(this, ec.b ? ec.b(b) : ec.call(null, b), fc.b ? fc.b(b) : fc.call(null, b));
        break a;
      }
      c = F(b);
      for (var d = this;;) {
        var e = G(c);
        if (s(e)) {
          c = L(c), d = Id(d, ec.b ? ec.b(e) : ec.call(null, e), fc.b ? fc.b(e) : fc.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
h.Fa = function() {
  var a;
  if (this.n) {
    this.n = null, a = new Gd(null, this.count, this.root, this.R, this.T, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.H = function(a, b) {
  return null == b ? this.R ? this.T : null : null == this.root ? null : this.root.ma(0, E(b), b);
};
h.I = function(a, b, c) {
  return null == b ? this.R ? this.T : c : null == this.root ? c : this.root.ma(0, E(b), b, c);
};
h.G = function() {
  if (this.n) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Id(a, b, c) {
  if (a.n) {
    if (null == b) {
      a.T !== c && (a.T = c), a.R || (a.count += 1, a.R = !0);
    } else {
      var d = new sd;
      b = (null == a.root ? xd : a.root).Y(a.n, 0, E(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ca && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var Jd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = F(a);
    for (var b = kb(qd);;) {
      if (a) {
        var e = L(L(a)), b = yc.c(b, G(a), G(L(a)));
        a = e;
      } else {
        return mb(b);
      }
    }
  }
  a.l = 0;
  a.g = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function ec(a) {
  return Ta(a);
}
function fc(a) {
  return Ua(a);
}
function Kd(a) {
  for (var b = bd;;) {
    if (L(a)) {
      b = Jb.a(b, G(a)), a = L(a);
    } else {
      return F(b);
    }
  }
}
function kc(a) {
  if (a && (a.p & 4096 || a.Ab)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([x("Doesn't support name: "), x(a)].join(""));
}
var Ld = function() {
  function a(a, b) {
    for (;;) {
      if (F(b) && 0 < a) {
        var c = a - 1, g = L(b);
        a = c;
        b = g;
      } else {
        return null;
      }
    }
  }
  function b(a) {
    for (;;) {
      if (F(a)) {
        a = L(a);
      } else {
        return null;
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Md = function() {
  function a(a, b) {
    Ld.a(a, b);
    return b;
  }
  function b(a) {
    Ld.b(a);
    return a;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Nd(a, b, c, d, e, f, g) {
  var k = xa;
  try {
    xa = null == xa ? null : xa - 1;
    if (null != xa && 0 > xa) {
      return C(a, "#");
    }
    C(a, c);
    F(g) && (b.c ? b.c(G(g), a, f) : b.call(null, G(g), a, f));
    for (var l = L(g), n = Ea.b(f);l && (null == n || 0 !== n);) {
      C(a, d);
      b.c ? b.c(G(l), a, f) : b.call(null, G(l), a, f);
      var p = L(l);
      c = n - 1;
      l = p;
      n = c;
    }
    s(Ea.b(f)) && (C(a, d), b.c ? b.c("...", a, f) : b.call(null, "...", a, f));
    return C(a, e);
  } finally {
    xa = k;
  }
}
var Od = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = F(b), f = null, g = 0, k = 0;;) {
      if (k < g) {
        var l = f.M(null, k);
        C(a, l);
        k += 1;
      } else {
        if (e = F(e)) {
          f = e, Sb(f) ? (e = qb(f), g = rb(f), f = e, l = O(e), e = g, g = l) : (l = G(f), C(a, l), e = L(f), f = null, g = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.l = 1;
  a.g = function(a) {
    var d = G(a);
    a = I(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), Pd = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Qd(a) {
  return[x('"'), x(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Pd[a];
  })), x('"')].join("");
}
var $ = function Rd(b, c, d) {
  if (null == b) {
    return C(c, "nil");
  }
  if (void 0 === b) {
    return C(c, "#\x3cundefined\x3e");
  }
  if (u) {
    s(function() {
      var c = R.a(d, Ba);
      return s(c) ? (c = b ? b.h & 131072 || b.zb ? !0 : b.h ? !1 : t(Ya, b) : t(Ya, b)) ? Ob(b) : c : c;
    }()) && (C(c, "^"), Rd(Ob(b), c, d), C(c, " "));
    if (null == b) {
      return C(c, "nil");
    }
    if (b.Ib) {
      return b.Wb(c);
    }
    if (b && (b.h & 2147483648 || b.K)) {
      return b.v(null, c, d);
    }
    if (Ga(b) === Boolean || "number" === typeof b) {
      return C(c, "" + x(b));
    }
    if (null != b && b.constructor === Object) {
      return C(c, "#js "), Sd.i ? Sd.i(Gc.a(function(c) {
        return new X(null, 2, 5, Z, [lc.b(c), b[c]], null);
      }, Tb(b)), Rd, c, d) : Sd.call(null, Gc.a(function(c) {
        return new X(null, 2, 5, Z, [lc.b(c), b[c]], null);
      }, Tb(b)), Rd, c, d);
    }
    if (b instanceof Array) {
      return Nd(c, Rd, "#js [", " ", "]", d, b);
    }
    if (ca(b)) {
      return s(Aa.b(d)) ? C(c, Qd(b)) : C(c, b);
    }
    if (Nb(b)) {
      return Od.e(c, M(["#\x3c", "" + x(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + x(b);;) {
          if (O(d) < c) {
            d = [x("0"), x(d)].join("");
          } else {
            return d;
          }
        }
      };
      return Od.e(c, M(['#inst "', "" + x(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? Od.e(c, M(['#"', b.source, '"'], 0)) : (b ? b.h & 2147483648 || b.K || (b.h ? 0 : t(hb, b)) : t(hb, b)) ? ib(b, c, d) : u ? Od.e(c, M(["#\x3c", "" + x(b), "\x3e"], 0)) : null;
  }
  return null;
}, Td = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (null == a || Fa(F(a))) {
      b = "";
    } else {
      b = x;
      var e = ya(), f = new wa;
      a: {
        var g = new tb(f);
        $(G(a), g, e);
        a = F(L(a));
        for (var k = null, l = 0, n = 0;;) {
          if (n < l) {
            var p = k.M(null, n);
            C(g, " ");
            $(p, g, e);
            n += 1;
          } else {
            if (a = F(a)) {
              k = a, Sb(k) ? (a = qb(k), l = rb(k), k = a, p = O(a), a = l, l = p) : (p = G(k), C(g, " "), $(p, g, e), a = L(k), k = null, l = 0), n = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + b(f);
    }
    return b;
  }
  a.l = 0;
  a.g = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Sd(a, b, c, d) {
  return Nd(c, function(a, c, d) {
    b.c ? b.c(Ta(a), c, d) : b.call(null, Ta(a), c, d);
    C(c, " ");
    return b.c ? b.c(Ua(a), c, d) : b.call(null, Ua(a), c, d);
  }, "{", ", ", "}", d, F(a));
}
Ab.prototype.K = !0;
Ab.prototype.v = function(a, b, c) {
  return Nd(b, $, "(", " ", ")", c, this);
};
ed.prototype.K = !0;
ed.prototype.v = function(a, b, c) {
  return Nd(b, $, "[", " ", "]", c, this);
};
qc.prototype.K = !0;
qc.prototype.v = function(a, b, c) {
  return Nd(b, $, "(", " ", ")", c, this);
};
q.prototype.K = !0;
q.prototype.v = function(a, b, c) {
  return Sd(this, $, b, c);
};
V.prototype.K = !0;
V.prototype.v = function(a, b, c) {
  return Nd(b, $, "(", " ", ")", c, this);
};
Ed.prototype.K = !0;
Ed.prototype.v = function(a, b, c) {
  return Nd(b, $, "(", " ", ")", c, this);
};
cd.prototype.K = !0;
cd.prototype.v = function(a, b, c) {
  return Nd(b, $, "(", " ", ")", c, this);
};
Gd.prototype.K = !0;
Gd.prototype.v = function(a, b, c) {
  return Sd(this, $, b, c);
};
X.prototype.K = !0;
X.prototype.v = function(a, b, c) {
  return Nd(b, $, "[", " ", "]", c, this);
};
gc.prototype.K = !0;
gc.prototype.v = function(a, b, c) {
  return Nd(b, $, "(", " ", ")", c, this);
};
md.prototype.K = !0;
md.prototype.v = function(a, b, c) {
  return Nd(b, $, "(", " ", ")", c, this);
};
hc.prototype.K = !0;
hc.prototype.v = function(a, b) {
  return C(b, "()");
};
jc.prototype.K = !0;
jc.prototype.v = function(a, b, c) {
  return Nd(b, $, "(", " ", ")", c, this);
};
Fd.prototype.K = !0;
Fd.prototype.v = function(a, b, c) {
  return Nd(b, $, "(", " ", ")", c, this);
};
X.prototype.Ba = !0;
X.prototype.Ca = function(a, b) {
  return Yb.a(this, b);
};
ed.prototype.Ba = !0;
ed.prototype.Ca = function(a, b) {
  return Yb.a(this, b);
};
U.prototype.Ba = !0;
U.prototype.Ca = function(a, b) {
  return vb(this, b);
};
yb.prototype.Ba = !0;
yb.prototype.Ca = function(a, b) {
  return vb(this, b);
};
function Ud(a, b) {
  if (a ? a.Cb : a) {
    return a.Cb(a, b);
  }
  var c;
  c = Ud[m(null == a ? null : a)];
  if (!c && (c = Ud._, !c)) {
    throw v("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var Vd = function() {
  function a(a, b, c, d, e) {
    if (a ? a.Gb : a) {
      return a.Gb(a, b, c, d, e);
    }
    var p;
    p = Vd[m(null == a ? null : a)];
    if (!p && (p = Vd._, !p)) {
      throw v("ISwap.-swap!", a);
    }
    return p.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Fb : a) {
      return a.Fb(a, b, c, d);
    }
    var e;
    e = Vd[m(null == a ? null : a)];
    if (!e && (e = Vd._, !e)) {
      throw v("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Eb : a) {
      return a.Eb(a, b, c);
    }
    var d;
    d = Vd[m(null == a ? null : a)];
    if (!d && (d = Vd._, !d)) {
      throw v("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Db : a) {
      return a.Db(a, b);
    }
    var c;
    c = Vd[m(null == a ? null : a)];
    if (!c && (c = Vd._, !c)) {
      throw v("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, g, k, l, n) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, g);
      case 3:
        return c.call(this, e, g, k);
      case 4:
        return b.call(this, e, g, k, l);
      case 5:
        return a.call(this, e, g, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.c = c;
  e.i = b;
  e.o = a;
  return e;
}();
function Wd(a, b, c, d) {
  this.state = a;
  this.m = b;
  this.Mb = c;
  this.ub = d;
  this.h = 2153938944;
  this.p = 16386;
}
h = Wd.prototype;
h.A = function() {
  return ga(this);
};
h.mb = function(a, b, c) {
  a = F(this.ub);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.M(null, f), k = P.c(g, 0, null), g = P.c(g, 1, null);
      g.i ? g.i(k, this, b, c) : g.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = F(a)) {
        Sb(a) ? (d = qb(a), a = rb(a), k = d, e = O(d), d = k) : (d = G(a), k = P.c(d, 0, null), g = P.c(d, 1, null), g.i ? g.i(k, this, b, c) : g.call(null, k, this, b, c), a = L(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
h.v = function(a, b, c) {
  C(b, "#\x3cAtom: ");
  $(this.state, b, c);
  return C(b, "\x3e");
};
h.J = function() {
  return this.m;
};
h.wb = function() {
  return this.state;
};
h.u = function(a, b) {
  return this === b;
};
var Yd = function() {
  function a(a) {
    return new Wd(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = Wb(c) ? W.a(Jd, c) : c, e = R.a(d, Xd), d = R.a(d, Ba);
      return new Wd(a, d, e, null);
    }
    a.l = 1;
    a.g = function(a) {
      var c = G(a);
      a = I(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.g = c.g;
  b.b = a;
  b.e = c.e;
  return b;
}();
function Zd(a, b) {
  if (a instanceof Wd) {
    var c = a.Mb;
    if (null != c && !s(c.b ? c.b(b) : c.call(null, b))) {
      throw Error([x("Assert failed: "), x("Validator rejected reference state"), x("\n"), x(Td.e(M([ic(new yb(null, "validate", "validate", 1233162959, null), new yb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.ub && jb(a, c, b);
    return b;
  }
  return Ud(a, b);
}
var $d = function() {
  function a(a, b, c, d) {
    return a instanceof Wd ? Zd(a, b.c ? b.c(a.state, c, d) : b.call(null, a.state, c, d)) : Vd.i(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof Wd ? Zd(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c)) : Vd.c(a, b, c);
  }
  function c(a, b) {
    return a instanceof Wd ? Zd(a, b.b ? b.b(a.state) : b.call(null, a.state)) : Vd.a(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, f, r) {
      var w = null;
      4 < arguments.length && (w = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return a instanceof Wd ? Zd(a, W.o(c, a.state, d, e, f)) : Vd.o(a, c, d, e, f);
    }
    a.l = 4;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var e = G(a);
      a = L(a);
      var f = G(a);
      a = I(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.e(d, g, k, l, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.g = e.g;
  d.a = c;
  d.c = b;
  d.i = a;
  d.e = e.e;
  return d;
}(), ac = function() {
  function a(a) {
    return(Math.random.q ? Math.random.q() : Math.random.call(null)) * a;
  }
  function b() {
    return c.b(1);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.b = a;
  return c;
}(), bc = function(a) {
  return Math.floor.b ? Math.floor.b((Math.random.q ? Math.random.q() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.q ? Math.random.q() : Math.random.call(null)) * a);
};
var ae, be, ce, de;
function ee() {
  return aa.navigator ? aa.navigator.userAgent : null;
}
de = ce = be = ae = !1;
var fe;
if (fe = ee()) {
  var ge = aa.navigator;
  ae = 0 == fe.indexOf("Opera");
  be = !ae && -1 != fe.indexOf("MSIE");
  ce = !ae && -1 != fe.indexOf("WebKit");
  de = !ae && !ce && "Gecko" == ge.product;
}
var he = ae, ie = be, je = de, ke = ce;
function le() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var me;
a: {
  var ne = "", oe;
  if (he && aa.opera) {
    var pe = aa.opera.version, ne = "function" == typeof pe ? pe() : pe
  } else {
    if (je ? oe = /rv\:([^\);]+)(\)|;)/ : ie ? oe = /MSIE\s+([^\);]+)(\)|;)/ : ke && (oe = /WebKit\/(\S+)/), oe) {
      var qe = oe.exec(ee()), ne = qe ? qe[1] : ""
    }
  }
  if (ie) {
    var re = le();
    if (re > parseFloat(ne)) {
      me = String(re);
      break a;
    }
  }
  me = ne;
}
var se = {};
function te(a) {
  var b;
  if (!(b = se[a])) {
    b = 0;
    for (var c = String(me).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var p = l.exec(g) || ["", "", ""], r = n.exec(k) || ["", "", ""];
        if (0 == p[0].length && 0 == r[0].length) {
          break;
        }
        b = ((0 == p[1].length ? 0 : parseInt(p[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? -1 : (0 == p[1].length ? 0 : parseInt(p[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == p[2].length) < (0 == r[2].length) ? -1 : (0 == p[2].length) > (0 == r[2].length) ? 1 : 0) || (p[2] < r[2] ? -1 : p[2] > r[2] ? 1 : 0);
      } while (0 == b);
    }
    b = se[a] = 0 <= b;
  }
  return b;
}
var ue = aa.document, ve = ue && ie ? le() || ("CSS1Compat" == ue.compatMode ? parseInt(me, 10) : 5) : void 0;
!je && !ie || ie && ie && 9 <= ve || je && te("1.9.1");
ie && te("9");
function we(a, b, c) {
  function d(c) {
    c && b.appendChild(ca(c) ? a.createTextNode(c) : c);
  }
  for (var e = 1;e < c.length;e++) {
    var f = c[e];
    !ba(f) || fa(f) && 0 < f.nodeType ? d(f) : ra(xe(f) ? sa(f) : f, d);
  }
}
function ye(a, b) {
  we(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments);
}
function xe(a) {
  if (a && "number" == typeof a.length) {
    if (fa(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (ea(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}
;var ze = new U(null, "black", "black"), Ca = new U(null, "dup", "dup"), Ae = new U(null, "direction", "direction"), xb = new U(null, "default", "default"), Be = new U(null, "text", "text"), Ce = new U(null, "snake", "snake"), De = new U(null, "white", "white"), Ee = new U(null, "grid-size", "grid-size"), Fe = new U(null, "context", "context"), Ge = new U(null, "width", "width"), He = new U(null, "red", "red"), Ie = new U(null, "growth", "growth"), Je = new U(null, "alive?", "alive?"), Ke = new U(null, 
"last-update", "last-update"), Le = new U(null, "color", "color"), za = new U(null, "flush-on-newline", "flush-on-newline"), Me = new U(null, "length", "length"), Ne = new U(null, "blue", "blue"), Oe = new U(null, "erase?", "erase?"), Pe = new U(null, "canvas", "canvas"), Qe = new U(null, "border-width", "border-width"), Re = new U(null, "subtext", "subtext"), Se = new U(null, "last-last", "last-last"), Te = new U(null, "green", "green"), Ue = new U(null, "grew?", "grew?"), Ea = new U(null, "print-length", 
"print-length"), Ve = new U(null, "right", "right"), We = new U(null, "message", "message"), Xe = new U(null, "left", "left"), u = new U(null, "else", "else"), Aa = new U(null, "readably", "readably"), Xd = new U(null, "validator", "validator"), Ye = new U(null, "map-size", "map-size"), Ba = new U(null, "meta", "meta"), Ze = new U(null, "none", "none"), $e = new U(null, "delta", "delta"), af = new U(null, "dark", "dark"), bf = new U(null, "time", "time"), cf = new U(null, "wall", "wall"), df = new U(null, 
"down", "down"), ef = new U(null, "body", "body"), ff = new U(null, "up", "up"), gf = new U(null, "height", "height"), hf = new U(null, "pellet", "pellet");
var jf = function() {
  function a(a, b) {
    return W.a(x, Jc(Mc.a(Kc.b(a), b)));
  }
  function b(a) {
    return W.a(x, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function kf() {
  var a;
  a = ca("canvas-container") ? document.getElementById("canvas-container") : "canvas-container";
  var b;
  var c = [x("\x3ccanvas id\x3d'canvas' "), x("width\x3d'"), x(640), x("' "), x("height\x3d'"), x(480), x("' "), x("tabindex\x3d'1'"), x("'\x3e\x3c/canvas\x3e")].join(""), d = document;
  b = d.createElement("div");
  ie ? (b.innerHTML = "\x3cbr\x3e" + c, b.removeChild(b.firstChild)) : b.innerHTML = c;
  if (1 == b.childNodes.length) {
    b = b.removeChild(b.firstChild);
  } else {
    for (c = d.createDocumentFragment();b.firstChild;) {
      c.appendChild(b.firstChild);
    }
    b = c;
  }
  ye(a, b);
  return new q(null, 6, [Pe, b, Fe, b.getContext("2d"), Ee, 8, Qe, 32, Ge, b.width, gf, b.height], null);
}
var lf = function() {
  function a(a, b, c, d) {
    return[x("rgba("), x(jf.a(",", new X(null, 4, 5, Z, [a, b, c, d], null))), x(")")].join("");
  }
  function b(a, b, c) {
    return d.i(a, b, c, 255);
  }
  function c(a) {
    var b = P.c(a, 0, null), c = P.c(a, 1, null), k = P.c(a, 2, null);
    a = P.c(a, 3, null);
    return d.i(b, c, k, s(a) ? a : 255);
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.c = b;
  d.i = a;
  return d;
}(), mf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = s(Cc(function(a) {
      return D.a(af, a);
    }, b)) ? 100 : 255, f = new q(null, 5, [ze, ic(0, 0, 0), De, ic(1, 1, 1), He, ic(1, 0, 0), Te, ic(0, 1, 0), Ne, ic(0, 0, 1)], null);
    return lf.b(Gc.a(function(a) {
      return e * a;
    }, f.b ? f.b(a) : f.call(null, a)));
  }
  a.l = 1;
  a.g = function(a) {
    var d = G(a);
    a = I(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), nf = function() {
  function a(a, b) {
    return Fe.b(a).fillStyle = b;
  }
  var b = null, c = function() {
    function a(b, d, k, l, n) {
      var p = null;
      4 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 4), 0));
      return c.call(this, b, d, k, l, p);
    }
    function c(a, d, e, l, n) {
      return null == n ? b.a(a, lf.c(d, e, l)) : b.a(a, lf.i(d, e, l, G(n)));
    }
    a.l = 4;
    a.g = function(a) {
      var b = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var l = G(a);
      a = L(a);
      var n = G(a);
      a = I(a);
      return c(b, d, l, n, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f, g, k) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, f, g, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 4;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b;
}(), of = function() {
  function a(a, b, c, d, l) {
    return Fe.b(a).fillRect(b, c, d, l);
  }
  function b(a, b, c, k) {
    return d.o(a, b, c, k, k);
  }
  function c(a, b) {
    var c = P.c(b, 0, null), k = P.c(b, 1, null), l = P.c(b, 2, null), n = P.c(b, 3, null);
    return d.o(a, c, k, l, n);
  }
  var d = null, d = function(d, f, g, k, l) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 4:
        return b.call(this, d, f, g, k);
      case 5:
        return a.call(this, d, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.i = b;
  d.o = a;
  return d;
}(), pf = function() {
  function a(a, b, c, g, k) {
    a = Fe.b(a);
    a.font = k;
    return a.fillText(b, c, g);
  }
  function b(a, b, f, g) {
    return c.o(a, b, f, g, "bold 12px sans-serif");
  }
  var c = null, c = function(c, e, f, g, k) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 5:
        return a.call(this, c, e, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.o = a;
  return c;
}();
function qf(a, b, c) {
  return Gc.a(function(c) {
    return b + a * c;
  }, c);
}
function rf(a, b) {
  var c = Wb(a) ? W.a(Jd, a) : a, d = R.a(c, Qe), c = R.a(c, Ee), e = qf(c, d, b), d = P.c(e, 0, null), e = P.c(e, 1, null);
  return of.o(a, d, e, c, c);
}
function sf(a, b) {
  var c = Wb(b) ? W.a(Jd, b) : b, d = R.a(c, Qe), e = R.a(c, Ge), c = R.a(c, gf);
  nf.a(b, mf.e(Ne, M([af], 0)));
  Md.b(Gc.a(Fc.a(of, b), new X(null, 4, 5, Z, [new X(null, 4, 5, Z, [0, 0, e, d], null), new X(null, 4, 5, Z, [0, 0, d, c], null), new X(null, 4, 5, Z, [0, c - d, e, d], null), new X(null, 4, 5, Z, [e - d, 0, d, c], null)], null)));
  nf.a(b, mf(De));
  pf.i(b, [x("Score: "), x(Me.b(Ce.b(a)))].join(""), 0, 10);
  d = Ce.b(a);
  e = ef.b(d);
  Fa(Ue.b(d)) && (nf.a(b, mf(De)), rf(b, Se.b(d)));
  s(Je.b(a)) ? (nf.a(b, mf(Ne)), rf(b, G(e))) : (nf.a(b, mf(He)), Md.b(Gc.a(Fc.a(rf, b), e)));
  d = Wb(b) ? W.a(Jd, b) : b;
  e = R.a(d, Qe);
  d = R.a(d, Ee);
  c = qf(d, e, hf.b(a));
  e = P.c(c, 0, null);
  c = P.c(c, 1, null);
  nf.a(b, mf(Te));
  of.o(b, e, c, d, d);
  var d = We.b(a), e = Be.b(d), c = Re.b(d), f = Le.b(d), g = P.c(f, 0, null), f = P.c(f, 1, null);
  s(d) ? s(Oe.b(d)) ? (e = We.b(a), d = Be.b(e), e = Re.b(e), nf.a(b, mf(De)), pf.o(b, d, 229, 230, "bold 24px sans-serif"), pf.o(b, d, 231, 230, "bold 24px sans-serif"), pf.o(b, d, 230, 229, "bold 24px sans-serif"), pf.o(b, d, 230, 231, "bold 24px sans-serif"), pf.i(b, e, 229, 264), pf.i(b, e, 231, 264), pf.i(b, e, 230, 263), d = pf.i(b, e, 230, 265)) : (nf.a(b, mf.e(g, M([f], 0))), pf.o(b, e, 230, 230, "bold 24px sans-serif"), d = pf.i(b, c, 230, 264)) : d = null;
  return d;
}
;var tf = !ie || ie && 9 <= ve, uf = ie && !te("9");
!ke || te("528");
je && te("1.9b") || ie && te("8") || he && te("9.5") || ke && te("528");
je && !te("8") || ie && te("9");
function vf() {
  0 != wf && ga(this);
}
var wf = 0;
function xf(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
}
xf.prototype.sa = !1;
xf.prototype.defaultPrevented = !1;
xf.prototype.Ja = !0;
xf.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Ja = !1;
};
function yf(a) {
  yf[" "](a);
  return a;
}
yf[" "] = function() {
};
function zf(a, b) {
  a && this.Ga(a, b);
}
oa(zf, xf);
h = zf.prototype;
h.target = null;
h.relatedTarget = null;
h.offsetX = 0;
h.offsetY = 0;
h.clientX = 0;
h.clientY = 0;
h.screenX = 0;
h.screenY = 0;
h.button = 0;
h.keyCode = 0;
h.charCode = 0;
h.ctrlKey = !1;
h.altKey = !1;
h.shiftKey = !1;
h.metaKey = !1;
h.pb = null;
h.Ga = function(a, b) {
  var c = this.type = a.type;
  xf.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (je) {
      var e;
      a: {
        try {
          yf(d.nodeName);
          e = !0;
          break a;
        } catch (f) {
        }
        e = !1;
      }
      e || (d = null);
    }
  } else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  }
  this.relatedTarget = d;
  this.offsetX = ke || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = ke || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.pb = a;
  a.defaultPrevented && this.preventDefault();
  delete this.sa;
};
h.preventDefault = function() {
  zf.Kb.preventDefault.call(this);
  var a = this.pb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, uf) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Af = 0;
function Bf() {
}
h = Bf.prototype;
h.key = 0;
h.na = !1;
h.Aa = !1;
h.Ga = function(a, b, c, d, e, f) {
  if (ea(a)) {
    this.qb = !0;
  } else {
    if (a && a.handleEvent && ea(a.handleEvent)) {
      this.qb = !1;
    } else {
      throw Error("Invalid listener argument");
    }
  }
  this.ja = a;
  this.tb = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.eb = f;
  this.Aa = !1;
  this.key = ++Af;
  this.na = !1;
};
h.handleEvent = function(a) {
  return this.qb ? this.ja.call(this.eb || this.src, a) : this.ja.handleEvent.call(this.ja, a);
};
var Cf = {}, Df = {}, Ef = {}, Ff = {};
function Gf(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      Gf(a, b[f], c, d, e);
    }
    return null;
  }
  a: {
    if (!b) {
      throw Error("Invalid event type");
    }
    d = !!d;
    var g = Df;
    b in g || (g[b] = {W:0, P:0});
    g = g[b];
    d in g || (g[d] = {W:0, P:0}, g.W++);
    var g = g[d], f = ga(a), k;
    g.P++;
    if (g[f]) {
      k = g[f];
      for (var l = 0;l < k.length;l++) {
        if (g = k[l], g.ja == c && g.eb == e) {
          if (g.na) {
            break;
          }
          k[l].Aa = !1;
          a = k[l];
          break a;
        }
      }
    } else {
      k = g[f] = [], g.W++;
    }
    l = Hf();
    g = new Bf;
    g.Ga(c, l, a, b, d, e);
    g.Aa = !1;
    l.src = a;
    l.ja = g;
    k.push(g);
    Ef[f] || (Ef[f] = []);
    Ef[f].push(g);
    a.addEventListener ? a != aa && a.ob || a.addEventListener(b, l, d) : a.attachEvent(b in Ff ? Ff[b] : Ff[b] = "on" + b, l);
    a = g;
  }
  b = a.key;
  Cf[b] = a;
  return b;
}
function Hf() {
  var a = If, b = tf ? function(c) {
    return a.call(b.src, b.ja, c);
  } : function(c) {
    c = a.call(b.src, b.ja, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function Jf(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      Jf(a, b[f], c, d, e);
    }
  } else {
    d = !!d;
    a: {
      f = Df;
      if (b in f && (f = f[b], d in f && (f = f[d], a = ga(a), f[a]))) {
        a = f[a];
        break a;
      }
      a = null;
    }
    if (a) {
      for (f = 0;f < a.length;f++) {
        if (a[f].ja == c && a[f].capture == d && a[f].eb == e) {
          Kf(a[f].key);
          break;
        }
      }
    }
  }
}
function Kf(a) {
  var b = Cf[a];
  if (b && !b.na) {
    var c = b.src, d = b.type, e = b.tb, f = b.capture;
    c.removeEventListener ? c != aa && c.ob || c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Ff ? Ff[d] : Ff[d] = "on" + d, e);
    c = ga(c);
    if (Ef[c]) {
      var e = Ef[c], g = qa(e, b);
      0 <= g && pa.splice.call(e, g, 1);
      0 == e.length && delete Ef[c];
    }
    b.na = !0;
    if (b = Df[d][f][c]) {
      b.rb = !0, Lf(d, f, c, b);
    }
    delete Cf[a];
  }
}
function Lf(a, b, c, d) {
  if (!d.Ia && d.rb) {
    for (var e = 0, f = 0;e < d.length;e++) {
      d[e].na ? d[e].tb.src = null : (e != f && (d[f] = d[e]), f++);
    }
    d.length = f;
    d.rb = !1;
    0 == f && (delete Df[a][b][c], Df[a][b].W--, 0 == Df[a][b].W && (delete Df[a][b], Df[a].W--), 0 == Df[a].W && delete Df[a]);
  }
}
function Mf(a, b, c, d, e) {
  var f = 1;
  b = ga(b);
  if (a[b]) {
    var g = --a.P, k = a[b];
    k.Ia ? k.Ia++ : k.Ia = 1;
    try {
      for (var l = k.length, n = 0;n < l;n++) {
        var p = k[n];
        p && !p.na && (f &= !1 !== Nf(p, e));
      }
    } finally {
      a.P = Math.max(g, a.P), k.Ia--, Lf(c, d, b, k);
    }
  }
  return Boolean(f);
}
function Nf(a, b) {
  a.Aa && Kf(a.key);
  return a.handleEvent(b);
}
function If(a, b) {
  if (a.na) {
    return!0;
  }
  var c = a.type, d = Df;
  if (!(c in d)) {
    return!0;
  }
  var d = d[c], e, f;
  if (!tf) {
    var g;
    if (!(g = b)) {
      a: {
        g = ["window", "event"];
        for (var k = aa;e = g.shift();) {
          if (null != k[e]) {
            k = k[e];
          } else {
            g = null;
            break a;
          }
        }
        g = k;
      }
    }
    e = g;
    g = !0 in d;
    k = !1 in d;
    if (g) {
      if (0 > e.keyCode || void 0 != e.returnValue) {
        return!0;
      }
      a: {
        var l = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (n) {
            l = !0;
          }
        }
        if (l || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
    }
    l = new zf;
    l.Ga(e, this);
    e = !0;
    try {
      if (g) {
        for (var p = [], r = l.currentTarget;r;r = r.parentNode) {
          p.push(r);
        }
        f = d[!0];
        f.P = f.W;
        for (var w = p.length - 1;!l.sa && 0 <= w && f.P;w--) {
          l.currentTarget = p[w], e &= Mf(f, p[w], c, !0, l);
        }
        if (k) {
          for (f = d[!1], f.P = f.W, w = 0;!l.sa && w < p.length && f.P;w++) {
            l.currentTarget = p[w], e &= Mf(f, p[w], c, !1, l);
          }
        }
      } else {
        e = Nf(a, l);
      }
    } finally {
      p && (p.length = 0);
    }
    return e;
  }
  c = new zf(b, this);
  return e = Nf(a, c);
}
;function Of() {
  vf.call(this);
}
oa(Of, vf);
h = Of.prototype;
h.ob = !0;
h.sb = null;
h.addEventListener = function(a, b, c, d) {
  Gf(this, a, b, c, d);
};
h.removeEventListener = function(a, b, c, d) {
  Jf(this, a, b, c, d);
};
h.dispatchEvent = function(a) {
  var b = a.type || a, c = Df;
  if (b in c) {
    if (ca(a)) {
      a = new xf(a, this);
    } else {
      if (a instanceof xf) {
        a.target = a.target || this;
      } else {
        var d = a;
        a = new xf(b, this);
        va(a, d);
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, f;
    if (b) {
      e = [];
      for (f = this;f;f = f.sb) {
        e.push(f);
      }
      f = c[!0];
      f.P = f.W;
      for (var g = e.length - 1;!a.sa && 0 <= g && f.P;g--) {
        a.currentTarget = e[g], d &= Mf(f, e[g], a.type, !0, a) && !1 != a.Ja;
      }
    }
    if (!1 in c) {
      if (f = c[!1], f.P = f.W, b) {
        for (g = 0;!a.sa && g < e.length && f.P;g++) {
          a.currentTarget = e[g], d &= Mf(f, e[g], a.type, !1, a) && !1 != a.Ja;
        }
      } else {
        for (e = this;!a.sa && e && f.P;e = e.sb) {
          a.currentTarget = e, d &= Mf(f, e, a.type, !1, a) && !1 != a.Ja;
        }
      }
    }
    a = Boolean(d);
  } else {
    a = !0;
  }
  return a;
};
function Pf(a, b) {
  vf.call(this);
  this.Ha = a || 1;
  this.gb = b || aa;
  this.La = la(this.Lb, this);
  this.fb = na();
}
oa(Pf, Of);
Pf.prototype.enabled = !1;
Pf.prototype.Ka = null;
Pf.prototype.Lb = function() {
  if (this.enabled) {
    var a = na() - this.fb;
    0 < a && a < 0.8 * this.Ha ? this.Ka = this.gb.setTimeout(this.La, this.Ha - a) : (this.dispatchEvent(Qf), this.enabled && (this.Ka = this.gb.setTimeout(this.La, this.Ha), this.fb = na()));
  }
};
Pf.prototype.start = function() {
  this.enabled = !0;
  this.Ka || (this.Ka = this.gb.setTimeout(this.La, this.Ha), this.fb = na());
};
var Qf = "tick";
var Rf = function() {
  function a(a) {
    var b = (new Date).getTime(), c = b - cf.b(a);
    a = Ke.b(a) + c;
    return new q(null, 3, [cf, b, $e, c, Ke, a], null);
  }
  function b() {
    return c.b(new q(null, 3, [cf, (new Date).getTime(), $e, 0, Ke, 0], null));
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.b = a;
  return c;
}();
function Sf(a) {
  return Mb.c(a, bf, Rf.b(bf.b(a)));
}
function Tf(a) {
  var b = ef.b(Ce.b(a));
  return Cc(function(a) {
    return D.a(G(b), a);
  }, I(b));
}
function Uf(a) {
  return Mb.c(a, Je, Fa(function() {
    var b;
    b = ef.b(Ce.b(a));
    var c = G(b);
    b = P.c(c, 0, null);
    var c = P.c(c, 1, null), d = Ye.b(a), e = Wb(d) ? W.a(Jd, d) : d, d = R.a(e, gf), e = R.a(e, Ge);
    return(b = 0 > b || 0 > c || b >= e || c >= d) ? b : Tf(a);
  }()));
}
function Vf(a, b, c, d) {
  return Dc(function(a) {
    return D.a(d, a);
  }, ef.b(c));
}
function Wf(a, b, c) {
  return G(Oc(Fc.i(Vf, b, c, a), Lc.b(function() {
    return new X(null, 2, 5, Z, [bc(b), bc(c)], null);
  })));
}
var Xf = new q(null, 5, [ff, function(a) {
  var b = P.c(a, 0, null);
  a = P.c(a, 1, null);
  return new X(null, 2, 5, Z, [b, a - 1], null);
}, Ve, function(a) {
  var b = P.c(a, 0, null);
  a = P.c(a, 1, null);
  return new X(null, 2, 5, Z, [b + 1, a], null);
}, df, function(a) {
  var b = P.c(a, 0, null);
  a = P.c(a, 1, null);
  return new X(null, 2, 5, Z, [b, a + 1], null);
}, Xe, function(a) {
  var b = P.c(a, 0, null);
  a = P.c(a, 1, null);
  return new X(null, 2, 5, Z, [b - 1, a], null);
}, Ze, Ec], null);
function Yf(a) {
  a = Mb.c(a, bf, Mb.c(bf.b(a), Ke, 0));
  var b = Ce.b(a), c = ef.b(b), d = Ae.b(a), e = (Xf.b ? Xf.b(d) : Xf.call(null, d)).call(null, G(c));
  a = D.a(d, Ze) ? a : 0 < Ie.b(b) ? Mb.c(a, Ce, Mb.e(b, ef, N(e, c), M([Ie, Ie.b(b) - 1, Me, Me.b(b) + 1, Ue, !0], 0))) : Mb.c(a, Ce, Mb.e(b, ef, N(e, Kd(c)), M([Ue, !1, Se, Ib(c)], 0)));
  a = Uf(a);
  b = We.b(a);
  Le.b(b);
  a = Mb.c(a, We, s(Je.b(a)) ? s(b) ? s(Oe.b(b)) ? null : Mb.c(b, Oe, !0) : null : new q(null, 3, [Be, " GAME OVER", Re, "               R to Restart!", Le, new X(null, 2, 5, Z, [He, af], null)], null));
  b = Ce.b(a);
  c = Ye.b(a);
  d = Wb(c) ? W.a(Jd, c) : c;
  c = R.a(d, gf);
  d = R.a(d, Ge);
  return D.a(G(ef.b(Ce.b(a))), hf.b(a)) ? Mb.e(a, Ce, Mb.c(b, Ie, Ie.b(b) + 5), M([hf, Wf(b, d, c)], 0)) : a;
}
function Zf() {
  var a = new q(null, 5, [Ie, 4, Se, new X(null, 2, 5, Z, [0, 0], null), Ue, !0, Me, 1, ef, new X(null, 1, 5, Z, [new X(null, 2, 5, Z, [36, 26], null)], null)], null);
  return new q(null, 7, [bf, Rf.q(), Ye, new q(null, 2, [Ge, 72, gf, 52], null), Ce, a, hf, Wf(a, 72, 52), Ae, Ze, Je, !0, We, new q(null, 4, [Be, "Move To Start!", Re, "  WASD, Arrows, or Numpad", Le, new X(null, 2, 5, Z, [Ne, af], null), Oe, !1], null)], null);
}
function $f(a, b) {
  var c = Wb(a) ? W.a(Jd, a) : a, d = R.a(c, Ge), e = R.a(c, gf), c = R.a(c, Qe), d = d - 2 * c, e = e - 2 * c;
  Fe.b(a).clearRect(c, c, d, e);
  Zd(b, Zf());
  sf(Xa(b), a);
}
function ag(a, b, c) {
  var d = Lb([65, 98, 68, 100, 37, 38, 102, 39, 40, 104, 83, 87], [Xe, df, Ve, Xe, Xe, ff, Ve, Ve, df, ff, df, ff]), e = c.keyCode;
  D.a(e, 82) && $f(b, a);
  return $d.i(a, Mb, Ae, function() {
    var b = d.b ? d.b(e) : d.call(null, e);
    return s(b) ? b : Ae.b(Xa(a));
  }());
}
function bg() {
  var a = kf(), b = new Pf(4), c = Yd.b(Zf());
  sf(Xa(c), a);
  b.start();
  Gf(b, Qf, function() {
    var b;
    $d.a(c, Sf);
    b = Je.b(Xa(c));
    b = s(b) ? Ac.a(Ze, Ae.b(Xa(c))) && 50 < Ke.b(bf.b(Xa(c))) : b;
    s(b) ? ($d.a(c, Yf), b = sf(Xa(c), a)) : b = null;
    return b;
  });
  return Gf(Pe.b(a), "keydown", function(b) {
    return ag(c, a, b);
  });
}
var cg = ["snake_cljs", "core", "init"], dg = aa;
cg[0] in dg || !dg.execScript || dg.execScript("var " + cg[0]);
for (var eg;cg.length && (eg = cg.shift());) {
  var fg;
  if (fg = !cg.length) {
    fg = void 0 !== bg;
  }
  fg ? dg[eg] = bg : dg = dg[eg] ? dg[eg] : dg[eg] = {};
}
;
})();

//# sourceMappingURL=snake_cljs.js.map