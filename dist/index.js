import L, { useLayoutEffect as Ln, useEffect as M, useRef as P, useMemo as _, useCallback as K, useState as X, memo as zn, useReducer as Fn, createContext as He, useContext as Re, forwardRef as Yn, cloneElement as $n } from "react";
import { unstable_batchedUpdates as tt, createPortal as Bn } from "react-dom";
var nt = { exports: {} }, $e = {};
var Bt;
function Xn() {
  if (Bt) return $e;
  Bt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, o, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      i = {};
      for (var a in o)
        a !== "key" && (i[a] = o[a]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return $e.Fragment = t, $e.jsx = n, $e.jsxs = n, $e;
}
var Be = {};
var Xt;
function Wn() {
  return Xt || (Xt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === N ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case p:
          return "Fragment";
        case m:
          return "Profiler";
        case y:
          return "StrictMode";
        case C:
          return "Suspense";
        case R:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case v:
            return "Portal";
          case D:
            return c.displayName || "Context";
          case x:
            return (c._context.displayName || "Context") + ".Consumer";
          case E:
            var b = c.render;
            return c = c.displayName, c || (c = b.displayName || b.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case S:
            return b = c.displayName || null, b !== null ? b : e(c.type) || "Memo";
          case I:
            b = c._payload, c = c._init;
            try {
              return e(c(b));
            } catch {
            }
        }
      return null;
    }
    function t(c) {
      return "" + c;
    }
    function n(c) {
      try {
        t(c);
        var b = !1;
      } catch {
        b = !0;
      }
      if (b) {
        b = console;
        var T = b.error, k = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return T.call(
          b,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), t(c);
      }
    }
    function r(c) {
      if (c === p) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === I)
        return "<...>";
      try {
        var b = e(c);
        return b ? "<" + b + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var c = H.A;
      return c === null ? null : c.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(c) {
      if (G.call(c, "key")) {
        var b = Object.getOwnPropertyDescriptor(c, "key").get;
        if (b && b.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function a(c, b) {
      function T() {
        De || (De = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          b
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: T,
        configurable: !0
      });
    }
    function l() {
      var c = e(this.type);
      return W[c] || (W[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function u(c, b, T, k, le, U) {
      var j = T.ref;
      return c = {
        $$typeof: w,
        type: c,
        key: b,
        props: T,
        _owner: k
      }, (j !== void 0 ? j : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(c, "ref", { enumerable: !1, value: null }), c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(c, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(c, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function d(c, b, T, k, le, U) {
      var j = b.children;
      if (j !== void 0)
        if (k)
          if (ne(j)) {
            for (k = 0; k < j.length; k++)
              f(j[k]);
            Object.freeze && Object.freeze(j);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(j);
      if (G.call(b, "key")) {
        j = e(c);
        var q = Object.keys(b).filter(function(A) {
          return A !== "key";
        });
        k = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", ve[j + k] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          j,
          q,
          j
        ), ve[j + k] = !0);
      }
      if (j = null, T !== void 0 && (n(T), j = "" + T), s(b) && (n(b.key), j = "" + b.key), "key" in b) {
        T = {};
        for (var Q in b)
          Q !== "key" && (T[Q] = b[Q]);
      } else T = b;
      return j && a(
        T,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), u(
        c,
        j,
        T,
        o(),
        le,
        U
      );
    }
    function f(c) {
      h(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === I && (c._payload.status === "fulfilled" ? h(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function h(c) {
      return typeof c == "object" && c !== null && c.$$typeof === w;
    }
    var g = L, w = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), D = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), N = Symbol.for("react.client.reference"), H = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.prototype.hasOwnProperty, ne = Array.isArray, fe = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var De, W = {}, Ee = g.react_stack_bottom_frame.bind(
      g,
      i
    )(), re = fe(r(i)), ve = {};
    Be.Fragment = p, Be.jsx = function(c, b, T) {
      var k = 1e4 > H.recentlyCreatedOwnerStacks++;
      return d(
        c,
        b,
        T,
        !1,
        k ? Error("react-stack-top-frame") : Ee,
        k ? fe(r(c)) : re
      );
    }, Be.jsxs = function(c, b, T) {
      var k = 1e4 > H.recentlyCreatedOwnerStacks++;
      return d(
        c,
        b,
        T,
        !0,
        k ? Error("react-stack-top-frame") : Ee,
        k ? fe(r(c)) : re
      );
    };
  })()), Be;
}
var Wt;
function Un() {
  return Wt || (Wt = 1, process.env.NODE_ENV === "production" ? nt.exports = Xn() : nt.exports = Wn()), nt.exports;
}
var B = Un();
function Vn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return _(
    () => (r) => {
      t.forEach((o) => o(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const ft = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Me(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Tt(e) {
  return "nodeType" in e;
}
function J(e) {
  var t, n;
  return e ? Me(e) ? e : Tt(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Ot(e) {
  const {
    Document: t
  } = J(e);
  return e instanceof t;
}
function qe(e) {
  return Me(e) ? !1 : e instanceof J(e).HTMLElement;
}
function rn(e) {
  return e instanceof J(e).SVGElement;
}
function Pe(e) {
  return e ? Me(e) ? e.document : Tt(e) ? Ot(e) ? e : qe(e) || rn(e) ? e.ownerDocument : document : document : document;
}
const se = ft ? Ln : M;
function gt(e) {
  const t = P(e);
  return se(() => {
    t.current = e;
  }), K(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Kn() {
  const e = P(null), t = K((r, o) => {
    e.current = setInterval(r, o);
  }, []), n = K(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Ve(e, t) {
  t === void 0 && (t = [e]);
  const n = P(e);
  return se(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function Je(e, t) {
  const n = P();
  return _(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function st(e) {
  const t = gt(e), n = P(null), r = K(
    (o) => {
      o !== n.current && t?.(o, n.current), n.current = o;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function at(e) {
  const t = P();
  return M(() => {
    t.current = e;
  }, [e]), t.current;
}
let wt = {};
function Ge(e, t) {
  return _(() => {
    if (t)
      return t;
    const n = wt[e] == null ? 0 : wt[e] + 1;
    return wt[e] = n, e + "-" + n;
  }, [e, t]);
}
function on(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return r.reduce((i, s) => {
      const a = Object.entries(s);
      for (const [l, u] of a) {
        const d = i[l];
        d != null && (i[l] = d + e * u);
      }
      return i;
    }, {
      ...t
    });
  };
}
const ke = /* @__PURE__ */ on(1), lt = /* @__PURE__ */ on(-1);
function Hn(e) {
  return "clientX" in e && "clientY" in e;
}
function ht(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = J(e.target);
  return t && e instanceof t;
}
function qn(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = J(e.target);
  return t && e instanceof t;
}
function ct(e) {
  if (qn(e)) {
    if (e.touches && e.touches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.touches[0];
      return {
        x: t,
        y: n
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.changedTouches[0];
      return {
        x: t,
        y: n
      };
    }
  }
  return Hn(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Se = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(e) {
      if (!e)
        return;
      const {
        x: t,
        y: n
      } = e;
      return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(e) {
      if (!e)
        return;
      const {
        scaleX: t,
        scaleY: n
      } = e;
      return "scaleX(" + t + ") scaleY(" + n + ")";
    }
  },
  Transform: {
    toString(e) {
      if (e)
        return [Se.Translate.toString(e), Se.Scale.toString(e)].join(" ");
    }
  },
  Transition: {
    toString(e) {
      let {
        property: t,
        duration: n,
        easing: r
      } = e;
      return t + " " + n + "ms " + r;
    }
  }
}), Ut = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Jn(e) {
  return e.matches(Ut) ? e : e.querySelector(Ut);
}
const Gn = {
  display: "none"
};
function Qn(e) {
  let {
    id: t,
    value: n
  } = e;
  return L.createElement("div", {
    id: t,
    style: Gn
  }, n);
}
function Zn(e) {
  let {
    id: t,
    announcement: n,
    ariaLiveType: r = "assertive"
  } = e;
  const o = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return L.createElement("div", {
    id: t,
    style: o,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function er() {
  const [e, t] = X("");
  return {
    announce: K((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const sn = /* @__PURE__ */ He(null);
function tr(e) {
  const t = Re(sn);
  M(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function nr() {
  const [e] = X(() => /* @__PURE__ */ new Set()), t = K((r) => (e.add(r), () => e.delete(r)), [e]);
  return [K((r) => {
    let {
      type: o,
      event: i
    } = r;
    e.forEach((s) => {
      var a;
      return (a = s[o]) == null ? void 0 : a.call(s, i);
    });
  }, [e]), t];
}
const rr = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, or = {
  onDragStart(e) {
    let {
      active: t
    } = e;
    return "Picked up draggable item " + t.id + ".";
  },
  onDragOver(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
  },
  onDragEnd(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped.";
  },
  onDragCancel(e) {
    let {
      active: t
    } = e;
    return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
  }
};
function ir(e) {
  let {
    announcements: t = or,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = rr
  } = e;
  const {
    announce: i,
    announcement: s
  } = er(), a = Ge("DndLiveRegion"), [l, u] = X(!1);
  if (M(() => {
    u(!0);
  }, []), tr(_(() => ({
    onDragStart(f) {
      let {
        active: h
      } = f;
      i(t.onDragStart({
        active: h
      }));
    },
    onDragMove(f) {
      let {
        active: h,
        over: g
      } = f;
      t.onDragMove && i(t.onDragMove({
        active: h,
        over: g
      }));
    },
    onDragOver(f) {
      let {
        active: h,
        over: g
      } = f;
      i(t.onDragOver({
        active: h,
        over: g
      }));
    },
    onDragEnd(f) {
      let {
        active: h,
        over: g
      } = f;
      i(t.onDragEnd({
        active: h,
        over: g
      }));
    },
    onDragCancel(f) {
      let {
        active: h,
        over: g
      } = f;
      i(t.onDragCancel({
        active: h,
        over: g
      }));
    }
  }), [i, t])), !l)
    return null;
  const d = L.createElement(L.Fragment, null, L.createElement(Qn, {
    id: r,
    value: o.draggable
  }), L.createElement(Zn, {
    id: a,
    announcement: s
  }));
  return n ? Bn(d, n) : d;
}
var F;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(F || (F = {}));
function ut() {
}
const ae = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function sr(e, t) {
  const n = ct(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function ar(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return r - n;
}
function lr(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
function cr(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), s = o - r, a = i - n;
  if (r < o && n < i) {
    const l = t.width * t.height, u = e.width * e.height, d = s * a, f = d / (l + u - d);
    return Number(f.toFixed(4));
  }
  return 0;
}
const ur = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = [];
  for (const i of r) {
    const {
      id: s
    } = i, a = n.get(s);
    if (a) {
      const l = cr(a, t);
      l > 0 && o.push({
        id: s,
        data: {
          droppableContainer: i,
          value: l
        }
      });
    }
  }
  return o.sort(ar);
};
function dr(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function an(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : ae;
}
function fr(e) {
  return function(n) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      o[i - 1] = arguments[i];
    return o.reduce((s, a) => ({
      ...s,
      top: s.top + e * a.y,
      bottom: s.bottom + e * a.y,
      left: s.left + e * a.x,
      right: s.right + e * a.x
    }), {
      ...n
    });
  };
}
const gr = /* @__PURE__ */ fr(1);
function ln(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
function hr(e, t, n) {
  const r = ln(t);
  if (!r)
    return e;
  const {
    scaleX: o,
    scaleY: i,
    x: s,
    y: a
  } = r, l = e.left - s - (1 - o) * parseFloat(n), u = e.top - a - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), d = o ? e.width / o : e.width, f = i ? e.height / i : e.height;
  return {
    width: d,
    height: f,
    top: u,
    right: l + d,
    bottom: u + f,
    left: l
  };
}
const vr = {
  ignoreTransform: !1
};
function _e(e, t) {
  t === void 0 && (t = vr);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: u,
      transformOrigin: d
    } = J(e).getComputedStyle(e);
    u && (n = hr(n, u, d));
  }
  const {
    top: r,
    left: o,
    width: i,
    height: s,
    bottom: a,
    right: l
  } = n;
  return {
    top: r,
    left: o,
    width: i,
    height: s,
    bottom: a,
    right: l
  };
}
function Vt(e) {
  return _e(e, {
    ignoreTransform: !0
  });
}
function pr(e) {
  const t = e.innerWidth, n = e.innerHeight;
  return {
    top: 0,
    left: 0,
    right: t,
    bottom: n,
    width: t,
    height: n
  };
}
function br(e, t) {
  return t === void 0 && (t = J(e).getComputedStyle(e)), t.position === "fixed";
}
function mr(e, t) {
  t === void 0 && (t = J(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const i = t[o];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function At(e, t) {
  const n = [];
  function r(o) {
    if (t != null && n.length >= t || !o)
      return n;
    if (Ot(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!qe(o) || rn(o) || n.includes(o))
      return n;
    const i = J(e).getComputedStyle(o);
    return o !== e && mr(o, i) && n.push(o), br(o, i) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function cn(e) {
  const [t] = At(e, 1);
  return t ?? null;
}
function xt(e) {
  return !ft || !e ? null : Me(e) ? e : Tt(e) ? Ot(e) || e === Pe(e).scrollingElement ? window : qe(e) ? e : null : null;
}
function un(e) {
  return Me(e) ? e.scrollX : e.scrollLeft;
}
function dn(e) {
  return Me(e) ? e.scrollY : e.scrollTop;
}
function Dt(e) {
  return {
    x: un(e),
    y: dn(e)
  };
}
var Y;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Y || (Y = {}));
function fn(e) {
  return !ft || !e ? !1 : e === document.scrollingElement;
}
function gn(e) {
  const t = {
    x: 0,
    y: 0
  }, n = fn(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, o = e.scrollTop <= t.y, i = e.scrollLeft <= t.x, s = e.scrollTop >= r.y, a = e.scrollLeft >= r.x;
  return {
    isTop: o,
    isLeft: i,
    isBottom: s,
    isRight: a,
    maxScroll: r,
    minScroll: t
  };
}
const yr = {
  x: 0.2,
  y: 0.2
};
function wr(e, t, n, r, o) {
  let {
    top: i,
    left: s,
    right: a,
    bottom: l
  } = n;
  r === void 0 && (r = 10), o === void 0 && (o = yr);
  const {
    isTop: u,
    isBottom: d,
    isLeft: f,
    isRight: h
  } = gn(e), g = {
    x: 0,
    y: 0
  }, w = {
    x: 0,
    y: 0
  }, v = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !u && i <= t.top + v.height ? (g.y = Y.Backward, w.y = r * Math.abs((t.top + v.height - i) / v.height)) : !d && l >= t.bottom - v.height && (g.y = Y.Forward, w.y = r * Math.abs((t.bottom - v.height - l) / v.height)), !h && a >= t.right - v.width ? (g.x = Y.Forward, w.x = r * Math.abs((t.right - v.width - a) / v.width)) : !f && s <= t.left + v.width && (g.x = Y.Backward, w.x = r * Math.abs((t.left + v.width - s) / v.width)), {
    direction: g,
    speed: w
  };
}
function xr(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: i,
      innerHeight: s
    } = window;
    return {
      top: 0,
      left: 0,
      right: i,
      bottom: s,
      width: i,
      height: s
    };
  }
  const {
    top: t,
    left: n,
    right: r,
    bottom: o
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: o,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function hn(e) {
  return e.reduce((t, n) => ke(t, Dt(n)), ae);
}
function Rr(e) {
  return e.reduce((t, n) => t + un(n), 0);
}
function Sr(e) {
  return e.reduce((t, n) => t + dn(n), 0);
}
function vn(e, t) {
  if (t === void 0 && (t = _e), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: o,
    right: i
  } = t(e);
  cn(e) && (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Dr = [["x", ["left", "right"], Rr], ["y", ["top", "bottom"], Sr]];
class Nt {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = At(n), o = hn(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, s, a] of Dr)
      for (const l of s)
        Object.defineProperty(this, l, {
          get: () => {
            const u = a(r), d = o[i] - u;
            return this.rect[l] + d;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Xe {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((n) => {
        var r;
        return (r = this.target) == null ? void 0 : r.removeEventListener(...n);
      });
    }, this.target = t;
  }
  add(t, n, r) {
    var o;
    (o = this.target) == null || o.addEventListener(t, n, r), this.listeners.push([t, n, r]);
  }
}
function Er(e) {
  const {
    EventTarget: t
  } = J(e);
  return e instanceof t ? e : Pe(e);
}
function Rt(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var ie;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(ie || (ie = {}));
function Kt(e) {
  e.preventDefault();
}
function Cr(e) {
  e.stopPropagation();
}
var O;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(O || (O = {}));
const pn = {
  start: [O.Space, O.Enter],
  cancel: [O.Esc],
  end: [O.Space, O.Enter, O.Tab]
}, Tr = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case O.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case O.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case O.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case O.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class bn {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new Xe(Pe(n)), this.windowListeners = new Xe(J(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(ie.Resize, this.handleCancel), this.windowListeners.add(ie.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(ie.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && vn(r), n(ae);
  }
  handleKeyDown(t) {
    if (ht(t)) {
      const {
        active: n,
        context: r,
        options: o
      } = this.props, {
        keyboardCodes: i = pn,
        coordinateGetter: s = Tr,
        scrollBehavior: a = "smooth"
      } = o, {
        code: l
      } = t;
      if (i.end.includes(l)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(l)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: u
      } = r.current, d = u ? {
        x: u.left,
        y: u.top
      } : ae;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const f = s(t, {
        active: n,
        context: r.current,
        currentCoordinates: d
      });
      if (f) {
        const h = lt(f, d), g = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: w
        } = r.current;
        for (const v of w) {
          const p = t.code, {
            isTop: y,
            isRight: m,
            isLeft: x,
            isBottom: D,
            maxScroll: E,
            minScroll: C
          } = gn(v), R = xr(v), S = {
            x: Math.min(p === O.Right ? R.right - R.width / 2 : R.right, Math.max(p === O.Right ? R.left : R.left + R.width / 2, f.x)),
            y: Math.min(p === O.Down ? R.bottom - R.height / 2 : R.bottom, Math.max(p === O.Down ? R.top : R.top + R.height / 2, f.y))
          }, I = p === O.Right && !m || p === O.Left && !x, z = p === O.Down && !D || p === O.Up && !y;
          if (I && S.x !== f.x) {
            const N = v.scrollLeft + h.x, H = p === O.Right && N <= E.x || p === O.Left && N >= C.x;
            if (H && !h.y) {
              v.scrollTo({
                left: N,
                behavior: a
              });
              return;
            }
            H ? g.x = v.scrollLeft - N : g.x = p === O.Right ? v.scrollLeft - E.x : v.scrollLeft - C.x, g.x && v.scrollBy({
              left: -g.x,
              behavior: a
            });
            break;
          } else if (z && S.y !== f.y) {
            const N = v.scrollTop + h.y, H = p === O.Down && N <= E.y || p === O.Up && N >= C.y;
            if (H && !h.x) {
              v.scrollTo({
                top: N,
                behavior: a
              });
              return;
            }
            H ? g.y = v.scrollTop - N : g.y = p === O.Down ? v.scrollTop - E.y : v.scrollTop - C.y, g.y && v.scrollBy({
              top: -g.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(t, ke(lt(f, this.referenceCoordinates), g));
      }
    }
  }
  handleMove(t, n) {
    const {
      onMove: r
    } = this.props;
    t.preventDefault(), r(n);
  }
  handleEnd(t) {
    const {
      onEnd: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  handleCancel(t) {
    const {
      onCancel: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
bn.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = pn,
      onActivation: o
    } = t, {
      active: i
    } = n;
    const {
      code: s
    } = e.nativeEvent;
    if (r.start.includes(s)) {
      const a = i.activatorNode.current;
      return a && e.target !== a ? !1 : (e.preventDefault(), o?.({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function Ht(e) {
  return !!(e && "distance" in e);
}
function qt(e) {
  return !!(e && "delay" in e);
}
class It {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = Er(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: s
    } = i;
    this.props = t, this.events = n, this.document = Pe(s), this.documentListeners = new Xe(this.document), this.listeners = new Xe(r), this.windowListeners = new Xe(J(s)), this.initialCoordinates = (o = ct(i)) != null ? o : ae, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: n,
          bypassActivationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(ie.Resize, this.handleCancel), this.windowListeners.add(ie.DragStart, Kt), this.windowListeners.add(ie.VisibilityChange, this.handleCancel), this.windowListeners.add(ie.ContextMenu, Kt), this.documentListeners.add(ie.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (qt(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (Ht(n)) {
        this.handlePending(n);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handlePending(t, n) {
    const {
      active: r,
      onPending: o
    } = this.props;
    o(r, t, this.initialCoordinates, n);
  }
  handleStart() {
    const {
      initialCoordinates: t
    } = this, {
      onStart: n
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add(ie.Click, Cr, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(ie.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: o,
      props: i
    } = this, {
      onMove: s,
      options: {
        activationConstraint: a
      }
    } = i;
    if (!o)
      return;
    const l = (n = ct(t)) != null ? n : ae, u = lt(o, l);
    if (!r && a) {
      if (Ht(a)) {
        if (a.tolerance != null && Rt(u, a.tolerance))
          return this.handleCancel();
        if (Rt(u, a.distance))
          return this.handleStart();
      }
      if (qt(a) && Rt(u, a.tolerance))
        return this.handleCancel();
      this.handlePending(a, u);
      return;
    }
    t.cancelable && t.preventDefault(), s(l);
  }
  handleEnd() {
    const {
      onAbort: t,
      onEnd: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleCancel() {
    const {
      onAbort: t,
      onCancel: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleKeydown(t) {
    t.code === O.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Or = {
  cancel: {
    name: "pointercancel"
  },
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class mn extends It {
  constructor(t) {
    const {
      event: n
    } = t, r = Pe(n.target);
    super(t, Or, r);
  }
}
mn.activators = [{
  eventName: "onPointerDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return !n.isPrimary || n.button !== 0 ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const Ar = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Et;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Et || (Et = {}));
class Nr extends It {
  constructor(t) {
    super(t, Ar, Pe(t.event.target));
  }
}
Nr.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === Et.RightClick ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const St = {
  cancel: {
    name: "touchcancel"
  },
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class Ir extends It {
  constructor(t) {
    super(t, St);
  }
  static setup() {
    return window.addEventListener(St.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(St.move.name, t);
    };
    function t() {
    }
  }
}
Ir.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    const {
      touches: o
    } = n;
    return o.length > 1 ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
var We;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(We || (We = {}));
var dt;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(dt || (dt = {}));
function kr(e) {
  let {
    acceleration: t,
    activator: n = We.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: i,
    interval: s = 5,
    order: a = dt.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: u,
    scrollableAncestorRects: d,
    delta: f,
    threshold: h
  } = e;
  const g = Pr({
    delta: f,
    disabled: !i
  }), [w, v] = Kn(), p = P({
    x: 0,
    y: 0
  }), y = P({
    x: 0,
    y: 0
  }), m = _(() => {
    switch (n) {
      case We.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case We.DraggableRect:
        return o;
    }
  }, [n, o, l]), x = P(null), D = K(() => {
    const C = x.current;
    if (!C)
      return;
    const R = p.current.x * y.current.x, S = p.current.y * y.current.y;
    C.scrollBy(R, S);
  }, []), E = _(() => a === dt.TreeOrder ? [...u].reverse() : u, [a, u]);
  M(
    () => {
      if (!i || !u.length || !m) {
        v();
        return;
      }
      for (const C of E) {
        if (r?.(C) === !1)
          continue;
        const R = u.indexOf(C), S = d[R];
        if (!S)
          continue;
        const {
          direction: I,
          speed: z
        } = wr(C, S, m, t, h);
        for (const N of ["x", "y"])
          g[N][I[N]] || (z[N] = 0, I[N] = 0);
        if (z.x > 0 || z.y > 0) {
          v(), x.current = C, w(D, s), p.current = z, y.current = I;
          return;
        }
      }
      p.current = {
        x: 0,
        y: 0
      }, y.current = {
        x: 0,
        y: 0
      }, v();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      D,
      r,
      v,
      i,
      s,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(g),
      w,
      u,
      E,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const Mr = {
  x: {
    [Y.Backward]: !1,
    [Y.Forward]: !1
  },
  y: {
    [Y.Backward]: !1,
    [Y.Forward]: !1
  }
};
function Pr(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = at(t);
  return Je((o) => {
    if (n || !r || !o)
      return Mr;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [Y.Backward]: o.x[Y.Backward] || i.x === -1,
        [Y.Forward]: o.x[Y.Forward] || i.x === 1
      },
      y: {
        [Y.Backward]: o.y[Y.Backward] || i.y === -1,
        [Y.Forward]: o.y[Y.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function _r(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return Je((o) => {
    var i;
    return t == null ? null : (i = r ?? o) != null ? i : null;
  }, [r, t]);
}
function jr(e, t) {
  return _(() => e.reduce((n, r) => {
    const {
      sensor: o
    } = r, i = o.activators.map((s) => ({
      eventName: s.eventName,
      handler: t(s.handler, r)
    }));
    return [...n, ...i];
  }, []), [e, t]);
}
var Ke;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Ke || (Ke = {}));
var Ct;
(function(e) {
  e.Optimized = "optimized";
})(Ct || (Ct = {}));
const Jt = /* @__PURE__ */ new Map();
function Lr(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: o
  } = t;
  const [i, s] = X(null), {
    frequency: a,
    measure: l,
    strategy: u
  } = o, d = P(e), f = p(), h = Ve(f), g = K(function(y) {
    y === void 0 && (y = []), !h.current && s((m) => m === null ? y : m.concat(y.filter((x) => !m.includes(x))));
  }, [h]), w = P(null), v = Je((y) => {
    if (f && !n)
      return Jt;
    if (!y || y === Jt || d.current !== e || i != null) {
      const m = /* @__PURE__ */ new Map();
      for (let x of e) {
        if (!x)
          continue;
        if (i && i.length > 0 && !i.includes(x.id) && x.rect.current) {
          m.set(x.id, x.rect.current);
          continue;
        }
        const D = x.node.current, E = D ? new Nt(l(D), D) : null;
        x.rect.current = E, E && m.set(x.id, E);
      }
      return m;
    }
    return y;
  }, [e, i, n, f, l]);
  return M(() => {
    d.current = e;
  }, [e]), M(
    () => {
      f || g();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, f]
  ), M(
    () => {
      i && i.length > 0 && s(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), M(
    () => {
      f || typeof a != "number" || w.current !== null || (w.current = setTimeout(() => {
        g(), w.current = null;
      }, a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a, f, g, ...r]
  ), {
    droppableRects: v,
    measureDroppableContainers: g,
    measuringScheduled: i != null
  };
  function p() {
    switch (u) {
      case Ke.Always:
        return !1;
      case Ke.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function kt(e, t) {
  return Je((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function zr(e, t) {
  return kt(e, t);
}
function Fr(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = gt(t), o = _(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return M(() => () => o?.disconnect(), [o]), o;
}
function vt(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = gt(t), o = _(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: i
      } = window;
      return new i(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return M(() => () => o?.disconnect(), [o]), o;
}
function Yr(e) {
  return new Nt(_e(e), e);
}
function Gt(e, t, n) {
  t === void 0 && (t = Yr);
  const [r, o] = X(null);
  function i() {
    o((l) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var u;
        return (u = l ?? n) != null ? u : null;
      }
      const d = t(e);
      return JSON.stringify(l) === JSON.stringify(d) ? l : d;
    });
  }
  const s = Fr({
    callback(l) {
      if (e)
        for (const u of l) {
          const {
            type: d,
            target: f
          } = u;
          if (d === "childList" && f instanceof HTMLElement && f.contains(e)) {
            i();
            break;
          }
        }
    }
  }), a = vt({
    callback: i
  });
  return se(() => {
    i(), e ? (a?.observe(e), s?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a?.disconnect(), s?.disconnect());
  }, [e]), r;
}
function $r(e) {
  const t = kt(e);
  return an(e, t);
}
const Qt = [];
function Br(e) {
  const t = P(e), n = Je((r) => e ? r && r !== Qt && e && t.current && e.parentNode === t.current.parentNode ? r : At(e) : Qt, [e]);
  return M(() => {
    t.current = e;
  }, [e]), n;
}
function Xr(e) {
  const [t, n] = X(null), r = P(e), o = K((i) => {
    const s = xt(i.target);
    s && n((a) => a ? (a.set(s, Dt(s)), new Map(a)) : null);
  }, []);
  return M(() => {
    const i = r.current;
    if (e !== i) {
      s(i);
      const a = e.map((l) => {
        const u = xt(l);
        return u ? (u.addEventListener("scroll", o, {
          passive: !0
        }), [u, Dt(u)]) : null;
      }).filter((l) => l != null);
      n(a.length ? new Map(a) : null), r.current = e;
    }
    return () => {
      s(e), s(i);
    };
    function s(a) {
      a.forEach((l) => {
        const u = xt(l);
        u?.removeEventListener("scroll", o);
      });
    }
  }, [o, e]), _(() => e.length ? t ? Array.from(t.values()).reduce((i, s) => ke(i, s), ae) : hn(e) : ae, [e, t]);
}
function Zt(e, t) {
  t === void 0 && (t = []);
  const n = P(null);
  return M(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), M(() => {
    const r = e !== ae;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? lt(e, n.current) : ae;
}
function Wr(e) {
  M(
    () => {
      if (!ft)
        return;
      const t = e.map((n) => {
        let {
          sensor: r
        } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t)
          n?.();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((t) => {
      let {
        sensor: n
      } = t;
      return n;
    })
  );
}
function Ur(e, t) {
  return _(() => e.reduce((n, r) => {
    let {
      eventName: o,
      handler: i
    } = r;
    return n[o] = (s) => {
      i(s, t);
    }, n;
  }, {}), [e, t]);
}
function yn(e) {
  return _(() => e ? pr(e) : null, [e]);
}
const en = [];
function Vr(e, t) {
  t === void 0 && (t = _e);
  const [n] = e, r = yn(n ? J(n) : null), [o, i] = X(en);
  function s() {
    i(() => e.length ? e.map((l) => fn(l) ? r : new Nt(t(l), l)) : en);
  }
  const a = vt({
    callback: s
  });
  return se(() => {
    a?.disconnect(), s(), e.forEach((l) => a?.observe(l));
  }, [e]), o;
}
function wn(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return qe(t) ? t : e;
}
function Kr(e) {
  let {
    measure: t
  } = e;
  const [n, r] = X(null), o = K((u) => {
    for (const {
      target: d
    } of u)
      if (qe(d)) {
        r((f) => {
          const h = t(d);
          return f ? {
            ...f,
            width: h.width,
            height: h.height
          } : h;
        });
        break;
      }
  }, [t]), i = vt({
    callback: o
  }), s = K((u) => {
    const d = wn(u);
    i?.disconnect(), d && i?.observe(d), r(d ? t(d) : null);
  }, [t, i]), [a, l] = st(s);
  return _(() => ({
    nodeRef: a,
    rect: n,
    setRef: l
  }), [n, a, l]);
}
const Hr = [{
  sensor: mn,
  options: {}
}, {
  sensor: bn,
  options: {}
}], qr = {
  current: {}
}, it = {
  draggable: {
    measure: Vt
  },
  droppable: {
    measure: Vt,
    strategy: Ke.WhileDragging,
    frequency: Ct.Optimized
  },
  dragOverlay: {
    measure: _e
  }
};
class Ue extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let {
        disabled: n
      } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null ? n : void 0;
  }
}
const Jr = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Ue(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: ut
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: it,
  measureDroppableContainers: ut,
  windowRect: null,
  measuringScheduled: !1
}, xn = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: ut,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: ut
}, Qe = /* @__PURE__ */ He(xn), Rn = /* @__PURE__ */ He(Jr);
function Gr() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new Ue()
    }
  };
}
function Qr(e, t) {
  switch (t.type) {
    case F.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case F.DragMove:
      return e.draggable.active == null ? e : {
        ...e,
        draggable: {
          ...e.draggable,
          translate: {
            x: t.coordinates.x - e.draggable.initialCoordinates.x,
            y: t.coordinates.y - e.draggable.initialCoordinates.y
          }
        }
      };
    case F.DragEnd:
    case F.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case F.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, o = new Ue(e.droppable.containers);
      return o.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
        }
      };
    }
    case F.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: o
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const s = new Ue(e.droppable.containers);
      return s.set(n, {
        ...i,
        disabled: o
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: s
        }
      };
    }
    case F.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, o = e.droppable.containers.get(n);
      if (!o || r !== o.key)
        return e;
      const i = new Ue(e.droppable.containers);
      return i.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    default:
      return e;
  }
}
function Zr(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: o
  } = Re(Qe), i = at(r), s = at(n?.id);
  return M(() => {
    if (!t && !r && i && s != null) {
      if (!ht(i) || document.activeElement === i.target)
        return;
      const a = o.get(s);
      if (!a)
        return;
      const {
        activatorNode: l,
        node: u
      } = a;
      if (!l.current && !u.current)
        return;
      requestAnimationFrame(() => {
        for (const d of [l.current, u.current]) {
          if (!d)
            continue;
          const f = Jn(d);
          if (f) {
            f.focus();
            break;
          }
        }
      });
    }
  }, [r, t, o, s, i]), null;
}
function Sn(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((o, i) => i({
    transform: o,
    ...r
  }), n) : n;
}
function eo(e) {
  return _(
    () => ({
      draggable: {
        ...it.draggable,
        ...e?.draggable
      },
      droppable: {
        ...it.droppable,
        ...e?.droppable
      },
      dragOverlay: {
        ...it.dragOverlay,
        ...e?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e?.draggable, e?.droppable, e?.dragOverlay]
  );
}
function to(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: o = !0
  } = e;
  const i = P(!1), {
    x: s,
    y: a
  } = typeof o == "boolean" ? {
    x: o,
    y: o
  } : o;
  se(() => {
    if (!s && !a || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const u = t?.node.current;
    if (!u || u.isConnected === !1)
      return;
    const d = n(u), f = an(d, r);
    if (s || (f.x = 0), a || (f.y = 0), i.current = !0, Math.abs(f.x) > 0 || Math.abs(f.y) > 0) {
      const h = cn(u);
      h && h.scrollBy({
        top: f.y,
        left: f.x
      });
    }
  }, [t, s, a, r, n]);
}
const pt = /* @__PURE__ */ He({
  ...ae,
  scaleX: 1,
  scaleY: 1
});
var xe;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(xe || (xe = {}));
const no = /* @__PURE__ */ zn(function(t) {
  var n, r, o, i;
  let {
    id: s,
    accessibility: a,
    autoScroll: l = !0,
    children: u,
    sensors: d = Hr,
    collisionDetection: f = ur,
    measuring: h,
    modifiers: g,
    ...w
  } = t;
  const v = Fn(Qr, void 0, Gr), [p, y] = v, [m, x] = nr(), [D, E] = X(xe.Uninitialized), C = D === xe.Initialized, {
    draggable: {
      active: R,
      nodes: S,
      translate: I
    },
    droppable: {
      containers: z
    }
  } = p, N = R != null ? S.get(R) : null, H = P({
    initial: null,
    translated: null
  }), G = _(() => {
    var V;
    return R != null ? {
      id: R,
      // It's possible for the active node to unmount while dragging
      data: (V = N?.data) != null ? V : qr,
      rect: H
    } : null;
  }, [R, N]), ne = P(null), [fe, De] = X(null), [W, Ee] = X(null), re = Ve(w, Object.values(w)), ve = Ge("DndDescribedBy", s), c = _(() => z.getEnabled(), [z]), b = eo(h), {
    droppableRects: T,
    measureDroppableContainers: k,
    measuringScheduled: le
  } = Lr(c, {
    dragging: C,
    dependencies: [I.x, I.y],
    config: b.droppable
  }), U = _r(S, R), j = _(() => W ? ct(W) : null, [W]), q = jn(), Q = zr(U, b.draggable.measure);
  to({
    activeNode: R != null ? S.get(R) : null,
    config: q.layoutShiftCompensation,
    initialRect: Q,
    measure: b.draggable.measure
  });
  const A = Gt(U, b.draggable.measure, Q), je = Gt(U ? U.parentElement : null), ce = P({
    activatorEvent: null,
    active: null,
    activeNode: U,
    collisionRect: null,
    collisions: null,
    droppableRects: T,
    draggableNodes: S,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: z,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Ce = z.getNodeFor((n = ce.current.over) == null ? void 0 : n.id), ge = Kr({
    measure: b.dragOverlay.measure
  }), Te = (r = ge.nodeRef.current) != null ? r : U, Oe = C ? (o = ge.rect) != null ? o : A : null, Pt = !!(ge.nodeRef.current && ge.rect), _t = $r(Pt ? null : A), bt = yn(Te ? J(Te) : null), pe = Br(C ? Ce ?? U : null), Ze = Vr(pe), et = Sn(g, {
    transform: {
      x: I.x - _t.x,
      y: I.y - _t.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: W,
    active: G,
    activeNodeRect: A,
    containerNodeRect: je,
    draggingNodeRect: Oe,
    over: ce.current.over,
    overlayNodeRect: ge.rect,
    scrollableAncestors: pe,
    scrollableAncestorRects: Ze,
    windowRect: bt
  }), jt = j ? ke(j, I) : null, Lt = Xr(pe), An = Zt(Lt), Nn = Zt(Lt, [A]), Ae = ke(et, An), Ne = Oe ? gr(Oe, et) : null, Le = G && Ne ? f({
    active: G,
    collisionRect: Ne,
    droppableRects: T,
    droppableContainers: c,
    pointerCoordinates: jt
  }) : null, zt = lr(Le, "id"), [be, Ft] = X(null), In = Pt ? et : ke(et, Nn), kn = dr(In, (i = be?.rect) != null ? i : null, A), mt = P(null), Yt = K(
    (V, Z) => {
      let {
        sensor: ee,
        options: me
      } = Z;
      if (ne.current == null)
        return;
      const oe = S.get(ne.current);
      if (!oe)
        return;
      const te = V.nativeEvent, ue = new ee({
        active: ne.current,
        activeNode: oe,
        event: te,
        options: me,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ce,
        onAbort($) {
          if (!S.get($))
            return;
          const {
            onDragAbort: de
          } = re.current, he = {
            id: $
          };
          de?.(he), m({
            type: "onDragAbort",
            event: he
          });
        },
        onPending($, ye, de, he) {
          if (!S.get($))
            return;
          const {
            onDragPending: Fe
          } = re.current, we = {
            id: $,
            constraint: ye,
            initialCoordinates: de,
            offset: he
          };
          Fe?.(we), m({
            type: "onDragPending",
            event: we
          });
        },
        onStart($) {
          const ye = ne.current;
          if (ye == null)
            return;
          const de = S.get(ye);
          if (!de)
            return;
          const {
            onDragStart: he
          } = re.current, ze = {
            activatorEvent: te,
            active: {
              id: ye,
              data: de.data,
              rect: H
            }
          };
          tt(() => {
            he?.(ze), E(xe.Initializing), y({
              type: F.DragStart,
              initialCoordinates: $,
              active: ye
            }), m({
              type: "onDragStart",
              event: ze
            }), De(mt.current), Ee(te);
          });
        },
        onMove($) {
          y({
            type: F.DragMove,
            coordinates: $
          });
        },
        onEnd: Ie(F.DragEnd),
        onCancel: Ie(F.DragCancel)
      });
      mt.current = ue;
      function Ie($) {
        return async function() {
          const {
            active: de,
            collisions: he,
            over: ze,
            scrollAdjustedTranslate: Fe
          } = ce.current;
          let we = null;
          if (de && Fe) {
            const {
              cancelDrop: Ye
            } = re.current;
            we = {
              activatorEvent: te,
              active: de,
              collisions: he,
              delta: Fe,
              over: ze
            }, $ === F.DragEnd && typeof Ye == "function" && await Promise.resolve(Ye(we)) && ($ = F.DragCancel);
          }
          ne.current = null, tt(() => {
            y({
              type: $
            }), E(xe.Uninitialized), Ft(null), De(null), Ee(null), mt.current = null;
            const Ye = $ === F.DragEnd ? "onDragEnd" : "onDragCancel";
            if (we) {
              const yt = re.current[Ye];
              yt?.(we), m({
                type: Ye,
                event: we
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [S]
  ), Mn = K((V, Z) => (ee, me) => {
    const oe = ee.nativeEvent, te = S.get(me);
    if (
      // Another sensor is already instantiating
      ne.current !== null || // No active draggable
      !te || // Event has already been captured
      oe.dndKit || oe.defaultPrevented
    )
      return;
    const ue = {
      active: te
    };
    V(ee, Z.options, ue) === !0 && (oe.dndKit = {
      capturedBy: Z.sensor
    }, ne.current = me, Yt(ee, Z));
  }, [S, Yt]), $t = jr(d, Mn);
  Wr(d), se(() => {
    A && D === xe.Initializing && E(xe.Initialized);
  }, [A, D]), M(
    () => {
      const {
        onDragMove: V
      } = re.current, {
        active: Z,
        activatorEvent: ee,
        collisions: me,
        over: oe
      } = ce.current;
      if (!Z || !ee)
        return;
      const te = {
        active: Z,
        activatorEvent: ee,
        collisions: me,
        delta: {
          x: Ae.x,
          y: Ae.y
        },
        over: oe
      };
      tt(() => {
        V?.(te), m({
          type: "onDragMove",
          event: te
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Ae.x, Ae.y]
  ), M(
    () => {
      const {
        active: V,
        activatorEvent: Z,
        collisions: ee,
        droppableContainers: me,
        scrollAdjustedTranslate: oe
      } = ce.current;
      if (!V || ne.current == null || !Z || !oe)
        return;
      const {
        onDragOver: te
      } = re.current, ue = me.get(zt), Ie = ue && ue.rect.current ? {
        id: ue.id,
        rect: ue.rect.current,
        data: ue.data,
        disabled: ue.disabled
      } : null, $ = {
        active: V,
        activatorEvent: Z,
        collisions: ee,
        delta: {
          x: oe.x,
          y: oe.y
        },
        over: Ie
      };
      tt(() => {
        Ft(Ie), te?.($), m({
          type: "onDragOver",
          event: $
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [zt]
  ), se(() => {
    ce.current = {
      activatorEvent: W,
      active: G,
      activeNode: U,
      collisionRect: Ne,
      collisions: Le,
      droppableRects: T,
      draggableNodes: S,
      draggingNode: Te,
      draggingNodeRect: Oe,
      droppableContainers: z,
      over: be,
      scrollableAncestors: pe,
      scrollAdjustedTranslate: Ae
    }, H.current = {
      initial: Oe,
      translated: Ne
    };
  }, [G, U, Le, Ne, S, Te, Oe, T, z, be, pe, Ae]), kr({
    ...q,
    delta: I,
    draggingRect: Ne,
    pointerCoordinates: jt,
    scrollableAncestors: pe,
    scrollableAncestorRects: Ze
  });
  const Pn = _(() => ({
    active: G,
    activeNode: U,
    activeNodeRect: A,
    activatorEvent: W,
    collisions: Le,
    containerNodeRect: je,
    dragOverlay: ge,
    draggableNodes: S,
    droppableContainers: z,
    droppableRects: T,
    over: be,
    measureDroppableContainers: k,
    scrollableAncestors: pe,
    scrollableAncestorRects: Ze,
    measuringConfiguration: b,
    measuringScheduled: le,
    windowRect: bt
  }), [G, U, A, W, Le, je, ge, S, z, T, be, k, pe, Ze, b, le, bt]), _n = _(() => ({
    activatorEvent: W,
    activators: $t,
    active: G,
    activeNodeRect: A,
    ariaDescribedById: {
      draggable: ve
    },
    dispatch: y,
    draggableNodes: S,
    over: be,
    measureDroppableContainers: k
  }), [W, $t, G, A, y, ve, S, be, k]);
  return L.createElement(sn.Provider, {
    value: x
  }, L.createElement(Qe.Provider, {
    value: _n
  }, L.createElement(Rn.Provider, {
    value: Pn
  }, L.createElement(pt.Provider, {
    value: kn
  }, u)), L.createElement(Zr, {
    disabled: a?.restoreFocus === !1
  })), L.createElement(ir, {
    ...a,
    hiddenTextDescribedById: ve
  }));
  function jn() {
    const V = fe?.autoScrollEnabled === !1, Z = typeof l == "object" ? l.enabled === !1 : l === !1, ee = C && !V && !Z;
    return typeof l == "object" ? {
      ...l,
      enabled: ee
    } : {
      enabled: ee
    };
  }
}), ro = /* @__PURE__ */ He(null), tn = "button", oo = "Draggable";
function io(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: o
  } = e;
  const i = Ge(oo), {
    activators: s,
    activatorEvent: a,
    active: l,
    activeNodeRect: u,
    ariaDescribedById: d,
    draggableNodes: f,
    over: h
  } = Re(Qe), {
    role: g = tn,
    roleDescription: w = "draggable",
    tabIndex: v = 0
  } = o ?? {}, p = l?.id === t, y = Re(p ? pt : ro), [m, x] = st(), [D, E] = st(), C = Ur(s, t), R = Ve(n);
  se(
    () => (f.set(t, {
      id: t,
      key: i,
      node: m,
      activatorNode: D,
      data: R
    }), () => {
      const I = f.get(t);
      I && I.key === i && f.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f, t]
  );
  const S = _(() => ({
    role: g,
    tabIndex: v,
    "aria-disabled": r,
    "aria-pressed": p && g === tn ? !0 : void 0,
    "aria-roledescription": w,
    "aria-describedby": d.draggable
  }), [r, g, v, p, w, d.draggable]);
  return {
    active: l,
    activatorEvent: a,
    activeNodeRect: u,
    attributes: S,
    isDragging: p,
    listeners: r ? void 0 : C,
    node: m,
    over: h,
    setNodeRef: x,
    setActivatorNodeRef: E,
    transform: y
  };
}
function Dn() {
  return Re(Rn);
}
const so = "Droppable", ao = {
  timeout: 25
};
function lo(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: o
  } = e;
  const i = Ge(so), {
    active: s,
    dispatch: a,
    over: l,
    measureDroppableContainers: u
  } = Re(Qe), d = P({
    disabled: n
  }), f = P(!1), h = P(null), g = P(null), {
    disabled: w,
    updateMeasurementsFor: v,
    timeout: p
  } = {
    ...ao,
    ...o
  }, y = Ve(v ?? r), m = K(
    () => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      g.current != null && clearTimeout(g.current), g.current = setTimeout(() => {
        u(Array.isArray(y.current) ? y.current : [y.current]), g.current = null;
      }, p);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [p]
  ), x = vt({
    callback: m,
    disabled: w || !s
  }), D = K((S, I) => {
    x && (I && (x.unobserve(I), f.current = !1), S && x.observe(S));
  }, [x]), [E, C] = st(D), R = Ve(t);
  return M(() => {
    !x || !E.current || (x.disconnect(), f.current = !1, x.observe(E.current));
  }, [E, x]), M(
    () => (a({
      type: F.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: E,
        rect: h,
        data: R
      }
    }), () => a({
      type: F.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), M(() => {
    n !== d.current.disabled && (a({
      type: F.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), d.current.disabled = n);
  }, [r, i, n, a]), {
    active: s,
    rect: h,
    isOver: l?.id === r,
    node: E,
    over: l,
    setNodeRef: C
  };
}
function co(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, o] = X(null), [i, s] = X(null), a = at(n);
  return !n && !r && a && o(a), se(() => {
    if (!i)
      return;
    const l = r?.key, u = r?.props.id;
    if (l == null || u == null) {
      o(null);
      return;
    }
    Promise.resolve(t(u, i)).then(() => {
      o(null);
    });
  }, [t, r, i]), L.createElement(L.Fragment, null, n, r ? $n(r, {
    ref: s
  }) : null);
}
const uo = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function fo(e) {
  let {
    children: t
  } = e;
  return L.createElement(Qe.Provider, {
    value: xn
  }, L.createElement(pt.Provider, {
    value: uo
  }, t));
}
const go = {
  position: "fixed",
  touchAction: "none"
}, ho = (e) => ht(e) ? "transform 250ms ease" : void 0, vo = /* @__PURE__ */ Yn((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: o,
    children: i,
    className: s,
    rect: a,
    style: l,
    transform: u,
    transition: d = ho
  } = e;
  if (!a)
    return null;
  const f = o ? u : {
    ...u,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...go,
    width: a.width,
    height: a.height,
    top: a.top,
    left: a.left,
    transform: Se.Transform.toString(f),
    transformOrigin: o && r ? sr(r, a) : void 0,
    transition: typeof d == "function" ? d(r) : d,
    ...l
  };
  return L.createElement(n, {
    className: s,
    style: h,
    ref: t
  }, i);
}), po = (e) => (t) => {
  let {
    active: n,
    dragOverlay: r
  } = t;
  const o = {}, {
    styles: i,
    className: s
  } = e;
  if (i != null && i.active)
    for (const [a, l] of Object.entries(i.active))
      l !== void 0 && (o[a] = n.node.style.getPropertyValue(a), n.node.style.setProperty(a, l));
  if (i != null && i.dragOverlay)
    for (const [a, l] of Object.entries(i.dragOverlay))
      l !== void 0 && r.node.style.setProperty(a, l);
  return s != null && s.active && n.node.classList.add(s.active), s != null && s.dragOverlay && r.node.classList.add(s.dragOverlay), function() {
    for (const [l, u] of Object.entries(o))
      n.node.style.setProperty(l, u);
    s != null && s.active && n.node.classList.remove(s.active);
  };
}, bo = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: Se.Transform.toString(t)
  }, {
    transform: Se.Transform.toString(n)
  }];
}, mo = {
  duration: 250,
  easing: "ease",
  keyframes: bo,
  sideEffects: /* @__PURE__ */ po({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function yo(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: o
  } = e;
  return gt((i, s) => {
    if (t === null)
      return;
    const a = n.get(i);
    if (!a)
      return;
    const l = a.node.current;
    if (!l)
      return;
    const u = wn(s);
    if (!u)
      return;
    const {
      transform: d
    } = J(s).getComputedStyle(s), f = ln(d);
    if (!f)
      return;
    const h = typeof t == "function" ? t : wo(t);
    return vn(l, o.draggable.measure), h({
      active: {
        id: i,
        data: a.data,
        node: l,
        rect: o.draggable.measure(l)
      },
      draggableNodes: n,
      dragOverlay: {
        node: s,
        rect: o.dragOverlay.measure(u)
      },
      droppableContainers: r,
      measuringConfiguration: o,
      transform: f
    });
  });
}
function wo(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: o
  } = {
    ...mo,
    ...e
  };
  return (i) => {
    let {
      active: s,
      dragOverlay: a,
      transform: l,
      ...u
    } = i;
    if (!t)
      return;
    const d = {
      x: a.rect.left - s.rect.left,
      y: a.rect.top - s.rect.top
    }, f = {
      scaleX: l.scaleX !== 1 ? s.rect.width * l.scaleX / a.rect.width : 1,
      scaleY: l.scaleY !== 1 ? s.rect.height * l.scaleY / a.rect.height : 1
    }, h = {
      x: l.x - d.x,
      y: l.y - d.y,
      ...f
    }, g = o({
      ...u,
      active: s,
      dragOverlay: a,
      transform: {
        initial: l,
        final: h
      }
    }), [w] = g, v = g[g.length - 1];
    if (JSON.stringify(w) === JSON.stringify(v))
      return;
    const p = r?.({
      active: s,
      dragOverlay: a,
      ...u
    }), y = a.node.animate(g, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((m) => {
      y.onfinish = () => {
        p?.(), m();
      };
    });
  };
}
let nn = 0;
function xo(e) {
  return _(() => {
    if (e != null)
      return nn++, nn;
  }, [e]);
}
const Ro = /* @__PURE__ */ L.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: o,
    transition: i,
    modifiers: s,
    wrapperElement: a = "div",
    className: l,
    zIndex: u = 999
  } = e;
  const {
    activatorEvent: d,
    active: f,
    activeNodeRect: h,
    containerNodeRect: g,
    draggableNodes: w,
    droppableContainers: v,
    dragOverlay: p,
    over: y,
    measuringConfiguration: m,
    scrollableAncestors: x,
    scrollableAncestorRects: D,
    windowRect: E
  } = Dn(), C = Re(pt), R = xo(f?.id), S = Sn(s, {
    activatorEvent: d,
    active: f,
    activeNodeRect: h,
    containerNodeRect: g,
    draggingNodeRect: p.rect,
    over: y,
    overlayNodeRect: p.rect,
    scrollableAncestors: x,
    scrollableAncestorRects: D,
    transform: C,
    windowRect: E
  }), I = kt(h), z = yo({
    config: r,
    draggableNodes: w,
    droppableContainers: v,
    measuringConfiguration: m
  }), N = I ? p.setRef : void 0;
  return L.createElement(fo, null, L.createElement(co, {
    animation: z
  }, f && R ? L.createElement(vo, {
    key: R,
    id: f.id,
    ref: N,
    as: a,
    activatorEvent: d,
    adjustScale: t,
    className: l,
    transition: i,
    rect: I,
    style: {
      zIndex: u,
      ...o
    },
    transform: S
  }, n) : null));
});
function Mt(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function So(e, t) {
  return e.reduce((n, r, o) => {
    const i = t.get(r);
    return i && (n[o] = i), n;
  }, Array(e.length));
}
function rt(e) {
  return e !== null && e >= 0;
}
function Do(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Eo(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const ot = {
  scaleX: 1,
  scaleY: 1
}, Co = (e) => {
  var t;
  let {
    rects: n,
    activeNodeRect: r,
    activeIndex: o,
    overIndex: i,
    index: s
  } = e;
  const a = (t = n[o]) != null ? t : r;
  if (!a)
    return null;
  const l = To(n, s, o);
  if (s === o) {
    const u = n[i];
    return u ? {
      x: o < i ? u.left + u.width - (a.left + a.width) : u.left - a.left,
      y: 0,
      ...ot
    } : null;
  }
  return s > o && s <= i ? {
    x: -a.width - l,
    y: 0,
    ...ot
  } : s < o && s >= i ? {
    x: a.width + l,
    y: 0,
    ...ot
  } : {
    x: 0,
    y: 0,
    ...ot
  };
};
function To(e, t, n) {
  const r = e[t], o = e[t - 1], i = e[t + 1];
  return !r || !o && !i ? 0 : n < t ? o ? r.left - (o.left + o.width) : i.left - (r.left + r.width) : i ? i.left - (r.left + r.width) : r.left - (o.left + o.width);
}
const En = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: o
  } = e;
  const i = Mt(t, r, n), s = t[o], a = i[o];
  return !a || !s ? null : {
    x: a.left - s.left,
    y: a.top - s.top,
    scaleX: a.width / s.width,
    scaleY: a.height / s.height
  };
}, Cn = "Sortable", Tn = /* @__PURE__ */ L.createContext({
  activeIndex: -1,
  containerId: Cn,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: En,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Oo(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: o = En,
    disabled: i = !1
  } = e;
  const {
    active: s,
    dragOverlay: a,
    droppableRects: l,
    over: u,
    measureDroppableContainers: d
  } = Dn(), f = Ge(Cn, n), h = a.rect !== null, g = _(() => r.map((C) => typeof C == "object" && "id" in C ? C.id : C), [r]), w = s != null, v = s ? g.indexOf(s.id) : -1, p = u ? g.indexOf(u.id) : -1, y = P(g), m = !Do(g, y.current), x = p !== -1 && v === -1 || m, D = Eo(i);
  se(() => {
    m && w && d(g);
  }, [m, g, w, d]), M(() => {
    y.current = g;
  }, [g]);
  const E = _(
    () => ({
      activeIndex: v,
      containerId: f,
      disabled: D,
      disableTransforms: x,
      items: g,
      overIndex: p,
      useDragOverlay: h,
      sortedRects: So(g, l),
      strategy: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v, f, D.draggable, D.droppable, x, g, p, l, h, o]
  );
  return L.createElement(Tn.Provider, {
    value: E
  }, t);
}
const Ao = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: o
  } = e;
  return Mt(n, r, o).indexOf(t);
}, No = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: o,
    items: i,
    newIndex: s,
    previousItems: a,
    previousContainerId: l,
    transition: u
  } = e;
  return !u || !r || a !== i && o === s ? !1 : n ? !0 : s !== o && t === l;
}, Io = {
  duration: 200,
  easing: "ease"
}, On = "transform", ko = /* @__PURE__ */ Se.Transition.toString({
  property: On,
  duration: 0,
  easing: "linear"
}), Mo = {
  roleDescription: "sortable"
};
function Po(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: o
  } = e;
  const [i, s] = X(null), a = P(n);
  return se(() => {
    if (!t && n !== a.current && r.current) {
      const l = o.current;
      if (l) {
        const u = _e(r.current, {
          ignoreTransform: !0
        }), d = {
          x: l.left - u.left,
          y: l.top - u.top,
          scaleX: l.width / u.width,
          scaleY: l.height / u.height
        };
        (d.x || d.y) && s(d);
      }
    }
    n !== a.current && (a.current = n);
  }, [t, n, r, o]), M(() => {
    i && s(null);
  }, [i]), i;
}
function _o(e) {
  let {
    animateLayoutChanges: t = No,
    attributes: n,
    disabled: r,
    data: o,
    getNewIndex: i = Ao,
    id: s,
    strategy: a,
    resizeObserverConfig: l,
    transition: u = Io
  } = e;
  const {
    items: d,
    containerId: f,
    activeIndex: h,
    disabled: g,
    disableTransforms: w,
    sortedRects: v,
    overIndex: p,
    useDragOverlay: y,
    strategy: m
  } = Re(Tn), x = jo(r, g), D = d.indexOf(s), E = _(() => ({
    sortable: {
      containerId: f,
      index: D,
      items: d
    },
    ...o
  }), [f, o, D, d]), C = _(() => d.slice(d.indexOf(s)), [d, s]), {
    rect: R,
    node: S,
    isOver: I,
    setNodeRef: z
  } = lo({
    id: s,
    data: E,
    disabled: x.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: C,
      ...l
    }
  }), {
    active: N,
    activatorEvent: H,
    activeNodeRect: G,
    attributes: ne,
    setNodeRef: fe,
    listeners: De,
    isDragging: W,
    over: Ee,
    setActivatorNodeRef: re,
    transform: ve
  } = io({
    id: s,
    data: E,
    attributes: {
      ...Mo,
      ...n
    },
    disabled: x.draggable
  }), c = Vn(z, fe), b = !!N, T = b && !w && rt(h) && rt(p), k = !y && W, le = k && T ? ve : null, j = T ? le ?? (a ?? m)({
    rects: v,
    activeNodeRect: G,
    activeIndex: h,
    overIndex: p,
    index: D
  }) : null, q = rt(h) && rt(p) ? i({
    id: s,
    items: d,
    activeIndex: h,
    overIndex: p
  }) : D, Q = N?.id, A = P({
    activeId: Q,
    items: d,
    newIndex: q,
    containerId: f
  }), je = d !== A.current.items, ce = t({
    active: N,
    containerId: f,
    isDragging: W,
    isSorting: b,
    id: s,
    index: D,
    items: d,
    newIndex: A.current.newIndex,
    previousItems: A.current.items,
    previousContainerId: A.current.containerId,
    transition: u,
    wasDragging: A.current.activeId != null
  }), Ce = Po({
    disabled: !ce,
    index: D,
    node: S,
    rect: R
  });
  return M(() => {
    b && A.current.newIndex !== q && (A.current.newIndex = q), f !== A.current.containerId && (A.current.containerId = f), d !== A.current.items && (A.current.items = d);
  }, [b, q, f, d]), M(() => {
    if (Q === A.current.activeId)
      return;
    if (Q != null && A.current.activeId == null) {
      A.current.activeId = Q;
      return;
    }
    const Te = setTimeout(() => {
      A.current.activeId = Q;
    }, 50);
    return () => clearTimeout(Te);
  }, [Q]), {
    active: N,
    activeIndex: h,
    attributes: ne,
    data: E,
    rect: R,
    index: D,
    newIndex: q,
    items: d,
    isOver: I,
    isSorting: b,
    isDragging: W,
    listeners: De,
    node: S,
    overIndex: p,
    over: Ee,
    setNodeRef: c,
    setActivatorNodeRef: re,
    setDroppableNodeRef: z,
    setDraggableNodeRef: fe,
    transform: Ce ?? j,
    transition: ge()
  };
  function ge() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Ce || // Or to prevent items jumping to back to their "new" position when items change
      je && A.current.newIndex === D
    )
      return ko;
    if (!(k && !ht(H) || !u) && (b || ce))
      return Se.Transition.toString({
        ...u,
        property: On
      });
  }
}
function jo(e, t) {
  var n, r;
  return typeof e == "boolean" ? {
    draggable: e,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (n = e?.draggable) != null ? n : t.draggable,
    droppable: (r = e?.droppable) != null ? r : t.droppable
  };
}
O.Down, O.Right, O.Up, O.Left;
const Lo = ({ word: e }) => /* @__PURE__ */ B.jsx("div", { className: "px-4 py-3 rounded-lg border-2 font-medium text-lg bg-blue-100 border-blue-300 text-blue-800 shadow-xl rotate-2 scale-105", children: e.text }), zo = ({ word: e }) => {
  const {
    attributes: t,
    listeners: n,
    setNodeRef: r,
    transform: o,
    transition: i,
    isDragging: s
  } = _o({ id: e.id }), a = {
    transform: Se.Transform.toString(o),
    transition: i || "transform 200ms ease"
  };
  return /* @__PURE__ */ B.jsx(
    "div",
    {
      ref: r,
      style: a,
      ...t,
      ...n,
      className: `
        px-4 py-3 rounded-lg border-2 font-medium text-lg cursor-grab
        transition-all duration-200
        bg-blue-50 border-blue-200 text-blue-800
        hover:bg-blue-100 hover:border-blue-300
        ${s ? "cursor-grabbing shadow-xl z-50 rotate-2 scale-105" : "shadow-sm hover:shadow-md"}
        select-none
        touch-none
        shrink-0
      `,
      children: e.text
    }
  );
}, $o = ({
  initialWords: e,
  correctSentence: t,
  onComplete: n
}) => {
  const [r, o] = X(e), [i, s] = X(null), a = (g) => {
    s(g.active.id);
  }, l = (g) => {
    const { active: w, over: v } = g;
    if (s(null), !v) return;
    const p = r.findIndex((m) => m.id === w.id), y = r.findIndex((m) => m.id === v.id);
    p !== -1 && y !== -1 && p !== y && o((m) => Mt(m, p, y));
  }, u = () => {
    const w = r.map((v) => v.text).join(" ") === t;
    n?.(w), alert(w ? "Правильно! 🎉" : "Попробуйте еще раз!");
  }, d = () => {
    o([...e].sort(() => Math.random() - 0.5));
  }, f = () => {
    o([...e].sort((g, w) => g.correctOrder - w.correctOrder));
  }, h = i ? r.find((g) => g.id === i) : null;
  return /* @__PURE__ */ B.jsxs("div", { className: "max-w-4xl mx-auto p-6 space-y-8", children: [
    /* @__PURE__ */ B.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ B.jsx("h2", { className: "text-2xl font-bold text-center text-gray-800", children: "Составьте предложение в правильном порядке" }),
      /* @__PURE__ */ B.jsxs(no, { onDragStart: a, onDragEnd: l, children: [
        /* @__PURE__ */ B.jsx("div", { className: "p-8 bg-linear-to-br from-gray-50 to-blue-50 rounded-2xl border-2 border-gray-200 shadow-sm", children: /* @__PURE__ */ B.jsx(
          Oo,
          {
            items: r.map((g) => g.id),
            strategy: Co,
            children: /* @__PURE__ */ B.jsx("div", { className: "flex flex-wrap gap-4 justify-center items-center min-h-[100px]", children: r.map((g) => /* @__PURE__ */ B.jsx(zo, { word: g }, g.id)) })
          }
        ) }),
        /* @__PURE__ */ B.jsx(Ro, { children: h ? /* @__PURE__ */ B.jsx(Lo, { word: h }) : null })
      ] })
    ] }),
    /* @__PURE__ */ B.jsxs("div", { className: "flex gap-4 justify-center flex-wrap", children: [
      /* @__PURE__ */ B.jsx(
        "button",
        {
          onClick: u,
          className: "px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors shadow-sm",
          children: "Проверить"
        }
      ),
      /* @__PURE__ */ B.jsx(
        "button",
        {
          onClick: d,
          className: "px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors shadow-sm",
          children: "Сбросить"
        }
      ),
      /* @__PURE__ */ B.jsx(
        "button",
        {
          onClick: f,
          className: "px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-sm",
          children: "Показать ответ"
        }
      )
    ] }),
    /* @__PURE__ */ B.jsx("div", { className: "text-center text-gray-600 text-sm", children: "💡 Перетаскивайте слова чтобы составить предложение в правильном порядке" })
  ] });
};
export {
  $o as SentenceBuilder
};
