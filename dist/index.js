function Wn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yt = { exports: {} }, rt = {};
var Qt;
function Fn() {
  if (Qt) return rt;
  Qt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(o, i, a) {
    var g = null;
    if (a !== void 0 && (g = "" + a), i.key !== void 0 && (g = "" + i.key), "key" in i) {
      a = {};
      for (var p in i)
        p !== "key" && (a[p] = i[p]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: o,
      key: g,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return rt.Fragment = t, rt.jsx = n, rt.jsxs = n, rt;
}
var ot = {}, mt = { exports: {} }, Y = {};
var Jt;
function qn() {
  if (Jt) return Y;
  Jt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), g = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), d = Symbol.for("react.activity"), c = Symbol.iterator;
  function v(s) {
    return s === null || typeof s != "object" ? null : (s = c && s[c] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var C = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, S = Object.assign, T = {};
  function A(s, h, E) {
    this.props = s, this.context = h, this.refs = T, this.updater = E || C;
  }
  A.prototype.isReactComponent = {}, A.prototype.setState = function(s, h) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, h, "setState");
  }, A.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function k() {
  }
  k.prototype = A.prototype;
  function L(s, h, E) {
    this.props = s, this.context = h, this.refs = T, this.updater = E || C;
  }
  var H = L.prototype = new k();
  H.constructor = L, S(H, A.prototype), H.isPureReactComponent = !0;
  var z = Array.isArray;
  function $() {
  }
  var O = { H: null, A: null, T: null, S: null }, U = Object.prototype.hasOwnProperty;
  function W(s, h, E) {
    var R = E.ref;
    return {
      $$typeof: e,
      type: s,
      key: h,
      ref: R !== void 0 ? R : null,
      props: E
    };
  }
  function V(s, h) {
    return W(s.type, h, s.props);
  }
  function X(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }
  function B(s) {
    var h = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(E) {
      return h[E];
    });
  }
  var ne = /\/+/g;
  function te(s, h) {
    return typeof s == "object" && s !== null && s.key != null ? B("" + s.key) : h.toString(36);
  }
  function ue(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then($, $) : (s.status = "pending", s.then(
          function(h) {
            s.status === "pending" && (s.status = "fulfilled", s.value = h);
          },
          function(h) {
            s.status === "pending" && (s.status = "rejected", s.reason = h);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function re(s, h, E, R, j) {
    var P = typeof s;
    (P === "undefined" || P === "boolean") && (s = null);
    var x = !1;
    if (s === null) x = !0;
    else
      switch (P) {
        case "bigint":
        case "string":
        case "number":
          x = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case e:
            case t:
              x = !0;
              break;
            case y:
              return x = s._init, re(
                x(s._payload),
                h,
                E,
                R,
                j
              );
          }
      }
    if (x)
      return j = j(s), x = R === "" ? "." + te(s, 0) : R, z(j) ? (E = "", x != null && (E = x.replace(ne, "$&/") + "/"), re(j, h, E, "", function(F) {
        return F;
      })) : j != null && (X(j) && (j = V(
        j,
        E + (j.key == null || s && s.key === j.key ? "" : ("" + j.key).replace(
          ne,
          "$&/"
        ) + "/") + x
      )), h.push(j)), 1;
    x = 0;
    var Q = R === "" ? "." : R + ":";
    if (z(s))
      for (var G = 0; G < s.length; G++)
        R = s[G], P = Q + te(R, G), x += re(
          R,
          h,
          E,
          P,
          j
        );
    else if (G = v(s), typeof G == "function")
      for (s = G.call(s), G = 0; !(R = s.next()).done; )
        R = R.value, P = Q + te(R, G++), x += re(
          R,
          h,
          E,
          P,
          j
        );
    else if (P === "object") {
      if (typeof s.then == "function")
        return re(
          ue(s),
          h,
          E,
          R,
          j
        );
      throw h = String(s), Error(
        "Objects are not valid as a React child (found: " + (h === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : h) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return x;
  }
  function J(s, h, E) {
    if (s == null) return s;
    var R = [], j = 0;
    return re(s, R, "", "", function(P) {
      return h.call(E, P, j++);
    }), R;
  }
  function he(s) {
    if (s._status === -1) {
      var h = s._result;
      h = h(), h.then(
        function(E) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = E);
        },
        function(E) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = E);
        }
      ), s._status === -1 && (s._status = 0, s._result = h);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var oe = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var h = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(h)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  }, ve = {
    map: J,
    forEach: function(s, h, E) {
      J(
        s,
        function() {
          h.apply(this, arguments);
        },
        E
      );
    },
    count: function(s) {
      var h = 0;
      return J(s, function() {
        h++;
      }), h;
    },
    toArray: function(s) {
      return J(s, function(h) {
        return h;
      }) || [];
    },
    only: function(s) {
      if (!X(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  };
  return Y.Activity = d, Y.Children = ve, Y.Component = A, Y.Fragment = n, Y.Profiler = i, Y.PureComponent = L, Y.StrictMode = o, Y.Suspense = l, Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O, Y.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return O.H.useMemoCache(s);
    }
  }, Y.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, Y.cacheSignal = function() {
    return null;
  }, Y.cloneElement = function(s, h, E) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var R = S({}, s.props), j = s.key;
    if (h != null)
      for (P in h.key !== void 0 && (j = "" + h.key), h)
        !U.call(h, P) || P === "key" || P === "__self" || P === "__source" || P === "ref" && h.ref === void 0 || (R[P] = h[P]);
    var P = arguments.length - 2;
    if (P === 1) R.children = E;
    else if (1 < P) {
      for (var x = Array(P), Q = 0; Q < P; Q++)
        x[Q] = arguments[Q + 2];
      R.children = x;
    }
    return W(s.type, j, R);
  }, Y.createContext = function(s) {
    return s = {
      $$typeof: g,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: a,
      _context: s
    }, s;
  }, Y.createElement = function(s, h, E) {
    var R, j = {}, P = null;
    if (h != null)
      for (R in h.key !== void 0 && (P = "" + h.key), h)
        U.call(h, R) && R !== "key" && R !== "__self" && R !== "__source" && (j[R] = h[R]);
    var x = arguments.length - 2;
    if (x === 1) j.children = E;
    else if (1 < x) {
      for (var Q = Array(x), G = 0; G < x; G++)
        Q[G] = arguments[G + 2];
      j.children = Q;
    }
    if (s && s.defaultProps)
      for (R in x = s.defaultProps, x)
        j[R] === void 0 && (j[R] = x[R]);
    return W(s, P, j);
  }, Y.createRef = function() {
    return { current: null };
  }, Y.forwardRef = function(s) {
    return { $$typeof: p, render: s };
  }, Y.isValidElement = X, Y.lazy = function(s) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: s },
      _init: he
    };
  }, Y.memo = function(s, h) {
    return {
      $$typeof: u,
      type: s,
      compare: h === void 0 ? null : h
    };
  }, Y.startTransition = function(s) {
    var h = O.T, E = {};
    O.T = E;
    try {
      var R = s(), j = O.S;
      j !== null && j(E, R), typeof R == "object" && R !== null && typeof R.then == "function" && R.then($, oe);
    } catch (P) {
      oe(P);
    } finally {
      h !== null && E.types !== null && (h.types = E.types), O.T = h;
    }
  }, Y.unstable_useCacheRefresh = function() {
    return O.H.useCacheRefresh();
  }, Y.use = function(s) {
    return O.H.use(s);
  }, Y.useActionState = function(s, h, E) {
    return O.H.useActionState(s, h, E);
  }, Y.useCallback = function(s, h) {
    return O.H.useCallback(s, h);
  }, Y.useContext = function(s) {
    return O.H.useContext(s);
  }, Y.useDebugValue = function() {
  }, Y.useDeferredValue = function(s, h) {
    return O.H.useDeferredValue(s, h);
  }, Y.useEffect = function(s, h) {
    return O.H.useEffect(s, h);
  }, Y.useEffectEvent = function(s) {
    return O.H.useEffectEvent(s);
  }, Y.useId = function() {
    return O.H.useId();
  }, Y.useImperativeHandle = function(s, h, E) {
    return O.H.useImperativeHandle(s, h, E);
  }, Y.useInsertionEffect = function(s, h) {
    return O.H.useInsertionEffect(s, h);
  }, Y.useLayoutEffect = function(s, h) {
    return O.H.useLayoutEffect(s, h);
  }, Y.useMemo = function(s, h) {
    return O.H.useMemo(s, h);
  }, Y.useOptimistic = function(s, h) {
    return O.H.useOptimistic(s, h);
  }, Y.useReducer = function(s, h, E) {
    return O.H.useReducer(s, h, E);
  }, Y.useRef = function(s) {
    return O.H.useRef(s);
  }, Y.useState = function(s) {
    return O.H.useState(s);
  }, Y.useSyncExternalStore = function(s, h, E) {
    return O.H.useSyncExternalStore(
      s,
      h,
      E
    );
  }, Y.useTransition = function() {
    return O.H.useTransition();
  }, Y.version = "19.2.0", Y;
}
var st = { exports: {} };
st.exports;
var Zt;
function Xn() {
  return Zt || (Zt = 1, (function(e, t) {
    process.env.NODE_ENV !== "production" && (function() {
      function n(r, f) {
        Object.defineProperty(a.prototype, r, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              f[0],
              f[1]
            );
          }
        });
      }
      function o(r) {
        return r === null || typeof r != "object" ? null : (r = ye && r[ye] || r["@@iterator"], typeof r == "function" ? r : null);
      }
      function i(r, f) {
        r = (r = r.constructor) && (r.displayName || r.name) || "ReactClass";
        var b = r + "." + f;
        Oe[b] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          f,
          r
        ), Oe[b] = !0);
      }
      function a(r, f, b) {
        this.props = r, this.context = f, this.refs = _e, this.updater = b || me;
      }
      function g() {
      }
      function p(r, f, b) {
        this.props = r, this.context = f, this.refs = _e, this.updater = b || me;
      }
      function l() {
      }
      function u(r) {
        return "" + r;
      }
      function y(r) {
        try {
          u(r);
          var f = !1;
        } catch {
          f = !0;
        }
        if (f) {
          f = console;
          var b = f.error, w = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
          return b.call(
            f,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            w
          ), u(r);
        }
      }
      function d(r) {
        if (r == null) return null;
        if (typeof r == "function")
          return r.$$typeof === Ke ? null : r.displayName || r.name || null;
        if (typeof r == "string") return r;
        switch (r) {
          case s:
            return "Fragment";
          case E:
            return "Profiler";
          case h:
            return "StrictMode";
          case x:
            return "Suspense";
          case Q:
            return "SuspenseList";
          case Ae:
            return "Activity";
        }
        if (typeof r == "object")
          switch (typeof r.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), r.$$typeof) {
            case ve:
              return "Portal";
            case j:
              return r.displayName || "Context";
            case R:
              return (r._context.displayName || "Context") + ".Consumer";
            case P:
              var f = r.render;
              return r = r.displayName, r || (r = f.displayName || f.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
            case G:
              return f = r.displayName || null, f !== null ? f : d(r.type) || "Memo";
            case F:
              f = r._payload, r = r._init;
              try {
                return d(r(f));
              } catch {
              }
          }
        return null;
      }
      function c(r) {
        if (r === s) return "<>";
        if (typeof r == "object" && r !== null && r.$$typeof === F)
          return "<...>";
        try {
          var f = d(r);
          return f ? "<" + f + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function v() {
        var r = I.A;
        return r === null ? null : r.getOwner();
      }
      function C() {
        return Error("react-stack-top-frame");
      }
      function S(r) {
        if (Ce.call(r, "key")) {
          var f = Object.getOwnPropertyDescriptor(r, "key").get;
          if (f && f.isReactWarning) return !1;
        }
        return r.key !== void 0;
      }
      function T(r, f) {
        function b() {
          Ve || (Ve = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            f
          ));
        }
        b.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: b,
          configurable: !0
        });
      }
      function A() {
        var r = d(this.type);
        return vt[r] || (vt[r] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), r = this.props.ref, r !== void 0 ? r : null;
      }
      function k(r, f, b, w, _, N) {
        var D = b.ref;
        return r = {
          $$typeof: oe,
          type: r,
          key: f,
          props: b,
          _owner: w
        }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(r, "ref", {
          enumerable: !1,
          get: A
        }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(r, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(r, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: _
        }), Object.defineProperty(r, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: N
        }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
      }
      function L(r, f) {
        return f = k(
          r.type,
          f,
          r.props,
          r._owner,
          r._debugStack,
          r._debugTask
        ), r._store && (f._store.validated = r._store.validated), f;
      }
      function H(r) {
        z(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === F && (r._payload.status === "fulfilled" ? z(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
      }
      function z(r) {
        return typeof r == "object" && r !== null && r.$$typeof === oe;
      }
      function $(r) {
        var f = { "=": "=0", ":": "=2" };
        return "$" + r.replace(/[=:]/g, function(b) {
          return f[b];
        });
      }
      function O(r, f) {
        return typeof r == "object" && r !== null && r.key != null ? (y(r.key), $("" + r.key)) : f.toString(36);
      }
      function U(r) {
        switch (r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw r.reason;
          default:
            switch (typeof r.status == "string" ? r.then(l, l) : (r.status = "pending", r.then(
              function(f) {
                r.status === "pending" && (r.status = "fulfilled", r.value = f);
              },
              function(f) {
                r.status === "pending" && (r.status = "rejected", r.reason = f);
              }
            )), r.status) {
              case "fulfilled":
                return r.value;
              case "rejected":
                throw r.reason;
            }
        }
        throw r;
      }
      function W(r, f, b, w, _) {
        var N = typeof r;
        (N === "undefined" || N === "boolean") && (r = null);
        var D = !1;
        if (r === null) D = !0;
        else
          switch (N) {
            case "bigint":
            case "string":
            case "number":
              D = !0;
              break;
            case "object":
              switch (r.$$typeof) {
                case oe:
                case ve:
                  D = !0;
                  break;
                case F:
                  return D = r._init, W(
                    D(r._payload),
                    f,
                    b,
                    w,
                    _
                  );
              }
          }
        if (D) {
          D = r, _ = _(D);
          var q = w === "" ? "." + O(D, 0) : w;
          return Ge(_) ? (b = "", q != null && (b = q.replace(ke, "$&/") + "/"), W(_, f, b, "", function(ee) {
            return ee;
          })) : _ != null && (z(_) && (_.key != null && (D && D.key === _.key || y(_.key)), b = L(
            _,
            b + (_.key == null || D && D.key === _.key ? "" : ("" + _.key).replace(
              ke,
              "$&/"
            ) + "/") + q
          ), w !== "" && D != null && z(D) && D.key == null && D._store && !D._store.validated && (b._store.validated = 2), _ = b), f.push(_)), 1;
        }
        if (D = 0, q = w === "" ? "." : w + ":", Ge(r))
          for (var M = 0; M < r.length; M++)
            w = r[M], N = q + O(w, M), D += W(
              w,
              f,
              b,
              N,
              _
            );
        else if (M = o(r), typeof M == "function")
          for (M === r.entries && (De || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), De = !0), r = M.call(r), M = 0; !(w = r.next()).done; )
            w = w.value, N = q + O(w, M++), D += W(
              w,
              f,
              b,
              N,
              _
            );
        else if (N === "object") {
          if (typeof r.then == "function")
            return W(
              U(r),
              f,
              b,
              w,
              _
            );
          throw f = String(r), Error(
            "Objects are not valid as a React child (found: " + (f === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : f) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return D;
      }
      function V(r, f, b) {
        if (r == null) return r;
        var w = [], _ = 0;
        return W(r, w, "", "", function(N) {
          return f.call(b, N, _++);
        }), w;
      }
      function X(r) {
        if (r._status === -1) {
          var f = r._ioInfo;
          f != null && (f.start = f.end = performance.now()), f = r._result;
          var b = f();
          if (b.then(
            function(_) {
              if (r._status === 0 || r._status === -1) {
                r._status = 1, r._result = _;
                var N = r._ioInfo;
                N != null && (N.end = performance.now()), b.status === void 0 && (b.status = "fulfilled", b.value = _);
              }
            },
            function(_) {
              if (r._status === 0 || r._status === -1) {
                r._status = 2, r._result = _;
                var N = r._ioInfo;
                N != null && (N.end = performance.now()), b.status === void 0 && (b.status = "rejected", b.reason = _);
              }
            }
          ), f = r._ioInfo, f != null) {
            f.value = b;
            var w = b.displayName;
            typeof w == "string" && (f.name = w);
          }
          r._status === -1 && (r._status = 0, r._result = b);
        }
        if (r._status === 1)
          return f = r._result, f === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            f
          ), "default" in f || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            f
          ), f.default;
        throw r._result;
      }
      function B() {
        var r = I.H;
        return r === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), r;
      }
      function ne() {
        I.asyncTransitions--;
      }
      function te(r) {
        if (ze === null)
          try {
            var f = ("require" + Math.random()).slice(0, 7);
            ze = (e && e[f]).call(
              e,
              "timers"
            ).setImmediate;
          } catch {
            ze = function(w) {
              Ee === !1 && (Ee = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var _ = new MessageChannel();
              _.port1.onmessage = w, _.port2.postMessage(void 0);
            };
          }
        return ze(r);
      }
      function ue(r) {
        return 1 < r.length && typeof AggregateError == "function" ? new AggregateError(r) : r[0];
      }
      function re(r, f) {
        f !== Be - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Be = f;
      }
      function J(r, f, b) {
        var w = I.actQueue;
        if (w !== null)
          if (w.length !== 0)
            try {
              he(w), te(function() {
                return J(r, f, b);
              });
              return;
            } catch (_) {
              I.thrownErrors.push(_);
            }
          else I.actQueue = null;
        0 < I.thrownErrors.length ? (w = ue(I.thrownErrors), I.thrownErrors.length = 0, b(w)) : f(r);
      }
      function he(r) {
        if (!Ue) {
          Ue = !0;
          var f = 0;
          try {
            for (; f < r.length; f++) {
              var b = r[f];
              do {
                I.didUsePromise = !1;
                var w = b(!1);
                if (w !== null) {
                  if (I.didUsePromise) {
                    r[f] = b, r.splice(0, f);
                    return;
                  }
                  b = w;
                } else break;
              } while (!0);
            }
            r.length = 0;
          } catch (_) {
            r.splice(0, f + 1), I.thrownErrors.push(_);
          } finally {
            Ue = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var oe = Symbol.for("react.transitional.element"), ve = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), j = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), Ae = Symbol.for("react.activity"), ye = Symbol.iterator, Oe = {}, me = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(r) {
          i(r, "forceUpdate");
        },
        enqueueReplaceState: function(r) {
          i(r, "replaceState");
        },
        enqueueSetState: function(r) {
          i(r, "setState");
        }
      }, Te = Object.assign, _e = {};
      Object.freeze(_e), a.prototype.isReactComponent = {}, a.prototype.setState = function(r, f) {
        if (typeof r != "object" && typeof r != "function" && r != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, r, f, "setState");
      }, a.prototype.forceUpdate = function(r) {
        this.updater.enqueueForceUpdate(this, r, "forceUpdate");
      };
      var ge = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (He in ge)
        ge.hasOwnProperty(He) && n(He, ge[He]);
      g.prototype = a.prototype, ge = p.prototype = new g(), ge.constructor = p, Te(ge, a.prototype), ge.isPureReactComponent = !0;
      var Ge = Array.isArray, Ke = Symbol.for("react.client.reference"), I = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Ce = Object.prototype.hasOwnProperty, Ye = console.createTask ? console.createTask : function() {
        return null;
      };
      ge = {
        react_stack_bottom_frame: function(r) {
          return r();
        }
      };
      var Ve, Qe, vt = {}, It = ge.react_stack_bottom_frame.bind(
        ge,
        C
      )(), Ne = Ye(c(C)), De = !1, ke = /\/+/g, Je = typeof reportError == "function" ? reportError : function(r) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var f = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
            error: r
          });
          if (!window.dispatchEvent(f)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", r);
          return;
        }
        console.error(r);
      }, Ee = !1, ze = null, Be = 0, $e = !1, Ue = !1, Ze = typeof queueMicrotask == "function" ? function(r) {
        queueMicrotask(function() {
          return queueMicrotask(r);
        });
      } : te;
      ge = Object.freeze({
        __proto__: null,
        c: function(r) {
          return B().useMemoCache(r);
        }
      });
      var He = {
        map: V,
        forEach: function(r, f, b) {
          V(
            r,
            function() {
              f.apply(this, arguments);
            },
            b
          );
        },
        count: function(r) {
          var f = 0;
          return V(r, function() {
            f++;
          }), f;
        },
        toArray: function(r) {
          return V(r, function(f) {
            return f;
          }) || [];
        },
        only: function(r) {
          if (!z(r))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return r;
        }
      };
      t.Activity = Ae, t.Children = He, t.Component = a, t.Fragment = s, t.Profiler = E, t.PureComponent = p, t.StrictMode = h, t.Suspense = x, t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, t.__COMPILER_RUNTIME = ge, t.act = function(r) {
        var f = I.actQueue, b = Be;
        Be++;
        var w = I.actQueue = f !== null ? f : [], _ = !1;
        try {
          var N = r();
        } catch (M) {
          I.thrownErrors.push(M);
        }
        if (0 < I.thrownErrors.length)
          throw re(f, b), r = ue(I.thrownErrors), I.thrownErrors.length = 0, r;
        if (N !== null && typeof N == "object" && typeof N.then == "function") {
          var D = N;
          return Ze(function() {
            _ || $e || ($e = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(M, ee) {
              _ = !0, D.then(
                function(ce) {
                  if (re(f, b), b === 0) {
                    try {
                      he(w), te(function() {
                        return J(
                          ce,
                          M,
                          ee
                        );
                      });
                    } catch (se) {
                      I.thrownErrors.push(se);
                    }
                    if (0 < I.thrownErrors.length) {
                      var Me = ue(
                        I.thrownErrors
                      );
                      I.thrownErrors.length = 0, ee(Me);
                    }
                  } else M(ce);
                },
                function(ce) {
                  re(f, b), 0 < I.thrownErrors.length && (ce = ue(
                    I.thrownErrors
                  ), I.thrownErrors.length = 0), ee(ce);
                }
              );
            }
          };
        }
        var q = N;
        if (re(f, b), b === 0 && (he(w), w.length !== 0 && Ze(function() {
          _ || $e || ($e = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), I.actQueue = null), 0 < I.thrownErrors.length)
          throw r = ue(I.thrownErrors), I.thrownErrors.length = 0, r;
        return {
          then: function(M, ee) {
            _ = !0, b === 0 ? (I.actQueue = w, te(function() {
              return J(
                q,
                M,
                ee
              );
            })) : M(q);
          }
        };
      }, t.cache = function(r) {
        return function() {
          return r.apply(null, arguments);
        };
      }, t.cacheSignal = function() {
        return null;
      }, t.captureOwnerStack = function() {
        var r = I.getCurrentStack;
        return r === null ? null : r();
      }, t.cloneElement = function(r, f, b) {
        if (r == null)
          throw Error(
            "The argument must be a React element, but you passed " + r + "."
          );
        var w = Te({}, r.props), _ = r.key, N = r._owner;
        if (f != null) {
          var D;
          e: {
            if (Ce.call(f, "ref") && (D = Object.getOwnPropertyDescriptor(
              f,
              "ref"
            ).get) && D.isReactWarning) {
              D = !1;
              break e;
            }
            D = f.ref !== void 0;
          }
          D && (N = v()), S(f) && (y(f.key), _ = "" + f.key);
          for (q in f)
            !Ce.call(f, q) || q === "key" || q === "__self" || q === "__source" || q === "ref" && f.ref === void 0 || (w[q] = f[q]);
        }
        var q = arguments.length - 2;
        if (q === 1) w.children = b;
        else if (1 < q) {
          D = Array(q);
          for (var M = 0; M < q; M++)
            D[M] = arguments[M + 2];
          w.children = D;
        }
        for (w = k(
          r.type,
          _,
          w,
          N,
          r._debugStack,
          r._debugTask
        ), _ = 2; _ < arguments.length; _++)
          H(arguments[_]);
        return w;
      }, t.createContext = function(r) {
        return r = {
          $$typeof: j,
          _currentValue: r,
          _currentValue2: r,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, r.Provider = r, r.Consumer = {
          $$typeof: R,
          _context: r
        }, r._currentRenderer = null, r._currentRenderer2 = null, r;
      }, t.createElement = function(r, f, b) {
        for (var w = 2; w < arguments.length; w++)
          H(arguments[w]);
        w = {};
        var _ = null;
        if (f != null)
          for (M in Qe || !("__self" in f) || "key" in f || (Qe = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), S(f) && (y(f.key), _ = "" + f.key), f)
            Ce.call(f, M) && M !== "key" && M !== "__self" && M !== "__source" && (w[M] = f[M]);
        var N = arguments.length - 2;
        if (N === 1) w.children = b;
        else if (1 < N) {
          for (var D = Array(N), q = 0; q < N; q++)
            D[q] = arguments[q + 2];
          Object.freeze && Object.freeze(D), w.children = D;
        }
        if (r && r.defaultProps)
          for (M in N = r.defaultProps, N)
            w[M] === void 0 && (w[M] = N[M]);
        _ && T(
          w,
          typeof r == "function" ? r.displayName || r.name || "Unknown" : r
        );
        var M = 1e4 > I.recentlyCreatedOwnerStacks++;
        return k(
          r,
          _,
          w,
          v(),
          M ? Error("react-stack-top-frame") : It,
          M ? Ye(c(r)) : Ne
        );
      }, t.createRef = function() {
        var r = { current: null };
        return Object.seal(r), r;
      }, t.forwardRef = function(r) {
        r != null && r.$$typeof === G ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof r != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          r === null ? "null" : typeof r
        ) : r.length !== 0 && r.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          r.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), r != null && r.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var f = { $$typeof: P, render: r }, b;
        return Object.defineProperty(f, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return b;
          },
          set: function(w) {
            b = w, r.name || r.displayName || (Object.defineProperty(r, "name", { value: w }), r.displayName = w);
          }
        }), f;
      }, t.isValidElement = z, t.lazy = function(r) {
        r = { _status: -1, _result: r };
        var f = {
          $$typeof: F,
          _payload: r,
          _init: X
        }, b = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return r._ioInfo = b, f._debugInfo = [{ awaited: b }], f;
      }, t.memo = function(r, f) {
        r == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          r === null ? "null" : typeof r
        ), f = {
          $$typeof: G,
          type: r,
          compare: f === void 0 ? null : f
        };
        var b;
        return Object.defineProperty(f, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return b;
          },
          set: function(w) {
            b = w, r.name || r.displayName || (Object.defineProperty(r, "name", { value: w }), r.displayName = w);
          }
        }), f;
      }, t.startTransition = function(r) {
        var f = I.T, b = {};
        b._updatedFibers = /* @__PURE__ */ new Set(), I.T = b;
        try {
          var w = r(), _ = I.S;
          _ !== null && _(b, w), typeof w == "object" && w !== null && typeof w.then == "function" && (I.asyncTransitions++, w.then(ne, ne), w.then(l, Je));
        } catch (N) {
          Je(N);
        } finally {
          f === null && b._updatedFibers && (r = b._updatedFibers.size, b._updatedFibers.clear(), 10 < r && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), f !== null && b.types !== null && (f.types !== null && f.types !== b.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = b.types), I.T = f;
        }
      }, t.unstable_useCacheRefresh = function() {
        return B().useCacheRefresh();
      }, t.use = function(r) {
        return B().use(r);
      }, t.useActionState = function(r, f, b) {
        return B().useActionState(
          r,
          f,
          b
        );
      }, t.useCallback = function(r, f) {
        return B().useCallback(r, f);
      }, t.useContext = function(r) {
        var f = B();
        return r.$$typeof === R && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), f.useContext(r);
      }, t.useDebugValue = function(r, f) {
        return B().useDebugValue(r, f);
      }, t.useDeferredValue = function(r, f) {
        return B().useDeferredValue(r, f);
      }, t.useEffect = function(r, f) {
        return r == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), B().useEffect(r, f);
      }, t.useEffectEvent = function(r) {
        return B().useEffectEvent(r);
      }, t.useId = function() {
        return B().useId();
      }, t.useImperativeHandle = function(r, f, b) {
        return B().useImperativeHandle(r, f, b);
      }, t.useInsertionEffect = function(r, f) {
        return r == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), B().useInsertionEffect(r, f);
      }, t.useLayoutEffect = function(r, f) {
        return r == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), B().useLayoutEffect(r, f);
      }, t.useMemo = function(r, f) {
        return B().useMemo(r, f);
      }, t.useOptimistic = function(r, f) {
        return B().useOptimistic(r, f);
      }, t.useReducer = function(r, f, b) {
        return B().useReducer(r, f, b);
      }, t.useRef = function(r) {
        return B().useRef(r);
      }, t.useState = function(r) {
        return B().useState(r);
      }, t.useSyncExternalStore = function(r, f, b) {
        return B().useSyncExternalStore(
          r,
          f,
          b
        );
      }, t.useTransition = function() {
        return B().useTransition();
      }, t.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(st, st.exports)), st.exports;
}
var en;
function xt() {
  return en || (en = 1, process.env.NODE_ENV === "production" ? mt.exports = qn() : mt.exports = Xn()), mt.exports;
}
var tn;
function Gn() {
  return tn || (tn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === X ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case T:
          return "Fragment";
        case k:
          return "Profiler";
        case A:
          return "StrictMode";
        case $:
          return "Suspense";
        case O:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case S:
            return "Portal";
          case H:
            return s.displayName || "Context";
          case L:
            return (s._context.displayName || "Context") + ".Consumer";
          case z:
            var h = s.render;
            return s = s.displayName, s || (s = h.displayName || h.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case U:
            return h = s.displayName || null, h !== null ? h : e(s.type) || "Memo";
          case W:
            h = s._payload, s = s._init;
            try {
              return e(s(h));
            } catch {
            }
        }
      return null;
    }
    function t(s) {
      return "" + s;
    }
    function n(s) {
      try {
        t(s);
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var E = h.error, R = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return E.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), t(s);
      }
    }
    function o(s) {
      if (s === T) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === W)
        return "<...>";
      try {
        var h = e(s);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var s = B.A;
      return s === null ? null : s.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function g(s) {
      if (ne.call(s, "key")) {
        var h = Object.getOwnPropertyDescriptor(s, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function p(s, h) {
      function E() {
        re || (re = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: E,
        configurable: !0
      });
    }
    function l() {
      var s = e(this.type);
      return J[s] || (J[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function u(s, h, E, R, j, P) {
      var x = E.ref;
      return s = {
        $$typeof: C,
        type: s,
        key: h,
        props: E,
        _owner: R
      }, (x !== void 0 ? x : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(s, "ref", { enumerable: !1, value: null }), s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(s, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(s, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function y(s, h, E, R, j, P) {
      var x = h.children;
      if (x !== void 0)
        if (R)
          if (te(x)) {
            for (R = 0; R < x.length; R++)
              d(x[R]);
            Object.freeze && Object.freeze(x);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(x);
      if (ne.call(h, "key")) {
        x = e(s);
        var Q = Object.keys(h).filter(function(F) {
          return F !== "key";
        });
        R = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", ve[x + R] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          x,
          Q,
          x
        ), ve[x + R] = !0);
      }
      if (x = null, E !== void 0 && (n(E), x = "" + E), g(h) && (n(h.key), x = "" + h.key), "key" in h) {
        E = {};
        for (var G in h)
          G !== "key" && (E[G] = h[G]);
      } else E = h;
      return x && p(
        E,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), u(
        s,
        x,
        E,
        i(),
        j,
        P
      );
    }
    function d(s) {
      c(s) ? s._store && (s._store.validated = 1) : typeof s == "object" && s !== null && s.$$typeof === W && (s._payload.status === "fulfilled" ? c(s._payload.value) && s._payload.value._store && (s._payload.value._store.validated = 1) : s._store && (s._store.validated = 1));
    }
    function c(s) {
      return typeof s == "object" && s !== null && s.$$typeof === C;
    }
    var v = xt(), C = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), H = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), X = Symbol.for("react.client.reference"), B = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = Object.prototype.hasOwnProperty, te = Array.isArray, ue = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(s) {
        return s();
      }
    };
    var re, J = {}, he = v.react_stack_bottom_frame.bind(
      v,
      a
    )(), oe = ue(o(a)), ve = {};
    ot.Fragment = T, ot.jsx = function(s, h, E) {
      var R = 1e4 > B.recentlyCreatedOwnerStacks++;
      return y(
        s,
        h,
        E,
        !1,
        R ? Error("react-stack-top-frame") : he,
        R ? ue(o(s)) : oe
      );
    }, ot.jsxs = function(s, h, E) {
      var R = 1e4 > B.recentlyCreatedOwnerStacks++;
      return y(
        s,
        h,
        E,
        !0,
        R ? Error("react-stack-top-frame") : he,
        R ? ue(o(s)) : oe
      );
    };
  })()), ot;
}
var nn;
function Kn() {
  return nn || (nn = 1, process.env.NODE_ENV === "production" ? yt.exports = Fn() : yt.exports = Gn()), yt.exports;
}
var le = Kn(), m = xt();
const Z = /* @__PURE__ */ Wn(m);
var bt = { exports: {} }, de = {};
var rn;
function Vn() {
  if (rn) return de;
  rn = 1;
  var e = xt();
  function t(l) {
    var u = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      u += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        u += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + l + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function n() {
  }
  var o = {
    d: {
      f: n,
      r: function() {
        throw Error(t(522));
      },
      D: n,
      C: n,
      L: n,
      m: n,
      X: n,
      S: n,
      M: n
    },
    p: 0,
    findDOMNode: null
  }, i = Symbol.for("react.portal");
  function a(l, u, y) {
    var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: i,
      key: d == null ? null : "" + d,
      children: l,
      containerInfo: u,
      implementation: y
    };
  }
  var g = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(l, u) {
    if (l === "font") return "";
    if (typeof u == "string")
      return u === "use-credentials" ? u : "";
  }
  return de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, de.createPortal = function(l, u) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!u || u.nodeType !== 1 && u.nodeType !== 9 && u.nodeType !== 11)
      throw Error(t(299));
    return a(l, u, null, y);
  }, de.flushSync = function(l) {
    var u = g.T, y = o.p;
    try {
      if (g.T = null, o.p = 2, l) return l();
    } finally {
      g.T = u, o.p = y, o.d.f();
    }
  }, de.preconnect = function(l, u) {
    typeof l == "string" && (u ? (u = u.crossOrigin, u = typeof u == "string" ? u === "use-credentials" ? u : "" : void 0) : u = null, o.d.C(l, u));
  }, de.prefetchDNS = function(l) {
    typeof l == "string" && o.d.D(l);
  }, de.preinit = function(l, u) {
    if (typeof l == "string" && u && typeof u.as == "string") {
      var y = u.as, d = p(y, u.crossOrigin), c = typeof u.integrity == "string" ? u.integrity : void 0, v = typeof u.fetchPriority == "string" ? u.fetchPriority : void 0;
      y === "style" ? o.d.S(
        l,
        typeof u.precedence == "string" ? u.precedence : void 0,
        {
          crossOrigin: d,
          integrity: c,
          fetchPriority: v
        }
      ) : y === "script" && o.d.X(l, {
        crossOrigin: d,
        integrity: c,
        fetchPriority: v,
        nonce: typeof u.nonce == "string" ? u.nonce : void 0
      });
    }
  }, de.preinitModule = function(l, u) {
    if (typeof l == "string")
      if (typeof u == "object" && u !== null) {
        if (u.as == null || u.as === "script") {
          var y = p(
            u.as,
            u.crossOrigin
          );
          o.d.M(l, {
            crossOrigin: y,
            integrity: typeof u.integrity == "string" ? u.integrity : void 0,
            nonce: typeof u.nonce == "string" ? u.nonce : void 0
          });
        }
      } else u == null && o.d.M(l);
  }, de.preload = function(l, u) {
    if (typeof l == "string" && typeof u == "object" && u !== null && typeof u.as == "string") {
      var y = u.as, d = p(y, u.crossOrigin);
      o.d.L(l, y, {
        crossOrigin: d,
        integrity: typeof u.integrity == "string" ? u.integrity : void 0,
        nonce: typeof u.nonce == "string" ? u.nonce : void 0,
        type: typeof u.type == "string" ? u.type : void 0,
        fetchPriority: typeof u.fetchPriority == "string" ? u.fetchPriority : void 0,
        referrerPolicy: typeof u.referrerPolicy == "string" ? u.referrerPolicy : void 0,
        imageSrcSet: typeof u.imageSrcSet == "string" ? u.imageSrcSet : void 0,
        imageSizes: typeof u.imageSizes == "string" ? u.imageSizes : void 0,
        media: typeof u.media == "string" ? u.media : void 0
      });
    }
  }, de.preloadModule = function(l, u) {
    if (typeof l == "string")
      if (u) {
        var y = p(u.as, u.crossOrigin);
        o.d.m(l, {
          as: typeof u.as == "string" && u.as !== "script" ? u.as : void 0,
          crossOrigin: y,
          integrity: typeof u.integrity == "string" ? u.integrity : void 0
        });
      } else o.d.m(l);
  }, de.requestFormReset = function(l) {
    o.d.r(l);
  }, de.unstable_batchedUpdates = function(l, u) {
    return l(u);
  }, de.useFormState = function(l, u, y) {
    return g.H.useFormState(l, u, y);
  }, de.useFormStatus = function() {
    return g.H.useHostTransitionStatus();
  }, de.version = "19.2.0", de;
}
var fe = {};
var on;
function Qn() {
  return on || (on = 1, process.env.NODE_ENV !== "production" && (function() {
    function e() {
    }
    function t(d) {
      return "" + d;
    }
    function n(d, c, v) {
      var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        t(C);
        var S = !1;
      } catch {
        S = !0;
      }
      return S && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && C[Symbol.toStringTag] || C.constructor.name || "Object"
      ), t(C)), {
        $$typeof: u,
        key: C == null ? null : "" + C,
        children: d,
        containerInfo: c,
        implementation: v
      };
    }
    function o(d, c) {
      if (d === "font") return "";
      if (typeof c == "string")
        return c === "use-credentials" ? c : "";
    }
    function i(d) {
      return d === null ? "`null`" : d === void 0 ? "`undefined`" : d === "" ? "an empty string" : 'something with type "' + typeof d + '"';
    }
    function a(d) {
      return d === null ? "`null`" : d === void 0 ? "`undefined`" : d === "" ? "an empty string" : typeof d == "string" ? JSON.stringify(d) : typeof d == "number" ? "`" + d + "`" : 'something with type "' + typeof d + '"';
    }
    function g() {
      var d = y.H;
      return d === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), d;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var p = xt(), l = {
      d: {
        f: e,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: e,
        C: e,
        L: e,
        m: e,
        X: e,
        S: e,
        M: e
      },
      p: 0,
      findDOMNode: null
    }, u = Symbol.for("react.portal"), y = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, fe.createPortal = function(d, c) {
      var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!c || c.nodeType !== 1 && c.nodeType !== 9 && c.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return n(d, c, null, v);
    }, fe.flushSync = function(d) {
      var c = y.T, v = l.p;
      try {
        if (y.T = null, l.p = 2, d)
          return d();
      } finally {
        y.T = c, l.p = v, l.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, fe.preconnect = function(d, c) {
      typeof d == "string" && d ? c != null && typeof c != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        a(c)
      ) : c != null && typeof c.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        i(c.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        i(d)
      ), typeof d == "string" && (c ? (c = c.crossOrigin, c = typeof c == "string" ? c === "use-credentials" ? c : "" : void 0) : c = null, l.d.C(d, c));
    }, fe.prefetchDNS = function(d) {
      if (typeof d != "string" || !d)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          i(d)
        );
      else if (1 < arguments.length) {
        var c = arguments[1];
        typeof c == "object" && c.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          a(c)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          a(c)
        );
      }
      typeof d == "string" && l.d.D(d);
    }, fe.preinit = function(d, c) {
      if (typeof d == "string" && d ? c == null || typeof c != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        a(c)
      ) : c.as !== "style" && c.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        a(c.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        i(d)
      ), typeof d == "string" && c && typeof c.as == "string") {
        var v = c.as, C = o(v, c.crossOrigin), S = typeof c.integrity == "string" ? c.integrity : void 0, T = typeof c.fetchPriority == "string" ? c.fetchPriority : void 0;
        v === "style" ? l.d.S(
          d,
          typeof c.precedence == "string" ? c.precedence : void 0,
          {
            crossOrigin: C,
            integrity: S,
            fetchPriority: T
          }
        ) : v === "script" && l.d.X(d, {
          crossOrigin: C,
          integrity: S,
          fetchPriority: T,
          nonce: typeof c.nonce == "string" ? c.nonce : void 0
        });
      }
    }, fe.preinitModule = function(d, c) {
      var v = "";
      if (typeof d == "string" && d || (v += " The `href` argument encountered was " + i(d) + "."), c !== void 0 && typeof c != "object" ? v += " The `options` argument encountered was " + i(c) + "." : c && "as" in c && c.as !== "script" && (v += " The `as` option encountered was " + a(c.as) + "."), v)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          v
        );
      else
        switch (v = c && typeof c.as == "string" ? c.as : "script", v) {
          case "script":
            break;
          default:
            v = a(v), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              v,
              d
            );
        }
      typeof d == "string" && (typeof c == "object" && c !== null ? (c.as == null || c.as === "script") && (v = o(
        c.as,
        c.crossOrigin
      ), l.d.M(d, {
        crossOrigin: v,
        integrity: typeof c.integrity == "string" ? c.integrity : void 0,
        nonce: typeof c.nonce == "string" ? c.nonce : void 0
      })) : c == null && l.d.M(d));
    }, fe.preload = function(d, c) {
      var v = "";
      if (typeof d == "string" && d || (v += " The `href` argument encountered was " + i(d) + "."), c == null || typeof c != "object" ? v += " The `options` argument encountered was " + i(c) + "." : typeof c.as == "string" && c.as || (v += " The `as` option encountered was " + i(c.as) + "."), v && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        v
      ), typeof d == "string" && typeof c == "object" && c !== null && typeof c.as == "string") {
        v = c.as;
        var C = o(
          v,
          c.crossOrigin
        );
        l.d.L(d, v, {
          crossOrigin: C,
          integrity: typeof c.integrity == "string" ? c.integrity : void 0,
          nonce: typeof c.nonce == "string" ? c.nonce : void 0,
          type: typeof c.type == "string" ? c.type : void 0,
          fetchPriority: typeof c.fetchPriority == "string" ? c.fetchPriority : void 0,
          referrerPolicy: typeof c.referrerPolicy == "string" ? c.referrerPolicy : void 0,
          imageSrcSet: typeof c.imageSrcSet == "string" ? c.imageSrcSet : void 0,
          imageSizes: typeof c.imageSizes == "string" ? c.imageSizes : void 0,
          media: typeof c.media == "string" ? c.media : void 0
        });
      }
    }, fe.preloadModule = function(d, c) {
      var v = "";
      typeof d == "string" && d || (v += " The `href` argument encountered was " + i(d) + "."), c !== void 0 && typeof c != "object" ? v += " The `options` argument encountered was " + i(c) + "." : c && "as" in c && typeof c.as != "string" && (v += " The `as` option encountered was " + i(c.as) + "."), v && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        v
      ), typeof d == "string" && (c ? (v = o(
        c.as,
        c.crossOrigin
      ), l.d.m(d, {
        as: typeof c.as == "string" && c.as !== "script" ? c.as : void 0,
        crossOrigin: v,
        integrity: typeof c.integrity == "string" ? c.integrity : void 0
      })) : l.d.m(d));
    }, fe.requestFormReset = function(d) {
      l.d.r(d);
    }, fe.unstable_batchedUpdates = function(d, c) {
      return d(c);
    }, fe.useFormState = function(d, c, v) {
      return g().useFormState(d, c, v);
    }, fe.useFormStatus = function() {
      return g().useHostTransitionStatus();
    }, fe.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), fe;
}
var sn;
function Jn() {
  if (sn) return bt.exports;
  sn = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (e(), bt.exports = Vn()) : bt.exports = Qn(), bt.exports;
}
var it = Jn();
function Zn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return m.useMemo(
    () => (o) => {
      t.forEach((i) => i(o));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const At = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Fe(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Wt(e) {
  return "nodeType" in e;
}
function pe(e) {
  var t, n;
  return e ? Fe(e) ? e : Wt(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Ft(e) {
  const {
    Document: t
  } = pe(e);
  return e instanceof t;
}
function ft(e) {
  return Fe(e) ? !1 : e instanceof pe(e).HTMLElement;
}
function bn(e) {
  return e instanceof pe(e).SVGElement;
}
function qe(e) {
  return e ? Fe(e) ? e.document : Wt(e) ? Ft(e) ? e : ft(e) || bn(e) ? e.ownerDocument : document : document : document;
}
const we = At ? m.useLayoutEffect : m.useEffect;
function Nt(e) {
  const t = m.useRef(e);
  return we(() => {
    t.current = e;
  }), m.useCallback(function() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return t.current == null ? void 0 : t.current(...o);
  }, []);
}
function er() {
  const e = m.useRef(null), t = m.useCallback((o, i) => {
    e.current = setInterval(o, i);
  }, []), n = m.useCallback(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function lt(e, t) {
  t === void 0 && (t = [e]);
  const n = m.useRef(e);
  return we(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function gt(e, t) {
  const n = m.useRef();
  return m.useMemo(
    () => {
      const o = e(n.current);
      return n.current = o, o;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function _t(e) {
  const t = Nt(e), n = m.useRef(null), o = m.useCallback(
    (i) => {
      i !== n.current && t?.(i, n.current), n.current = i;
    },
    //eslint-disable-next-line
    []
  );
  return [n, o];
}
function St(e) {
  const t = m.useRef();
  return m.useEffect(() => {
    t.current = e;
  }, [e]), t.current;
}
let Lt = {};
function pt(e, t) {
  return m.useMemo(() => {
    if (t)
      return t;
    const n = Lt[e] == null ? 0 : Lt[e] + 1;
    return Lt[e] = n, e + "-" + n;
  }, [e, t]);
}
function En(e) {
  return function(t) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      o[i - 1] = arguments[i];
    return o.reduce((a, g) => {
      const p = Object.entries(g);
      for (const [l, u] of p) {
        const y = a[l];
        y != null && (a[l] = y + e * u);
      }
      return a;
    }, {
      ...t
    });
  };
}
const We = /* @__PURE__ */ En(1), Ot = /* @__PURE__ */ En(-1);
function tr(e) {
  return "clientX" in e && "clientY" in e;
}
function kt(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = pe(e.target);
  return t && e instanceof t;
}
function nr(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = pe(e.target);
  return t && e instanceof t;
}
function Tt(e) {
  if (nr(e)) {
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
  return tr(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Le = /* @__PURE__ */ Object.freeze({
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
        return [Le.Translate.toString(e), Le.Scale.toString(e)].join(" ");
    }
  },
  Transition: {
    toString(e) {
      let {
        property: t,
        duration: n,
        easing: o
      } = e;
      return t + " " + n + "ms " + o;
    }
  }
}), an = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function rr(e) {
  return e.matches(an) ? e : e.querySelector(an);
}
const or = {
  display: "none"
};
function sr(e) {
  let {
    id: t,
    value: n
  } = e;
  return Z.createElement("div", {
    id: t,
    style: or
  }, n);
}
function ir(e) {
  let {
    id: t,
    announcement: n,
    ariaLiveType: o = "assertive"
  } = e;
  const i = {
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
  return Z.createElement("div", {
    id: t,
    style: i,
    role: "status",
    "aria-live": o,
    "aria-atomic": !0
  }, n);
}
function ar() {
  const [e, t] = m.useState("");
  return {
    announce: m.useCallback((o) => {
      o != null && t(o);
    }, []),
    announcement: e
  };
}
const wn = /* @__PURE__ */ m.createContext(null);
function ur(e) {
  const t = m.useContext(wn);
  m.useEffect(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function cr() {
  const [e] = m.useState(() => /* @__PURE__ */ new Set()), t = m.useCallback((o) => (e.add(o), () => e.delete(o)), [e]);
  return [m.useCallback((o) => {
    let {
      type: i,
      event: a
    } = o;
    e.forEach((g) => {
      var p;
      return (p = g[i]) == null ? void 0 : p.call(g, a);
    });
  }, [e]), t];
}
const lr = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, dr = {
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
function fr(e) {
  let {
    announcements: t = dr,
    container: n,
    hiddenTextDescribedById: o,
    screenReaderInstructions: i = lr
  } = e;
  const {
    announce: a,
    announcement: g
  } = ar(), p = pt("DndLiveRegion"), [l, u] = m.useState(!1);
  if (m.useEffect(() => {
    u(!0);
  }, []), ur(m.useMemo(() => ({
    onDragStart(d) {
      let {
        active: c
      } = d;
      a(t.onDragStart({
        active: c
      }));
    },
    onDragMove(d) {
      let {
        active: c,
        over: v
      } = d;
      t.onDragMove && a(t.onDragMove({
        active: c,
        over: v
      }));
    },
    onDragOver(d) {
      let {
        active: c,
        over: v
      } = d;
      a(t.onDragOver({
        active: c,
        over: v
      }));
    },
    onDragEnd(d) {
      let {
        active: c,
        over: v
      } = d;
      a(t.onDragEnd({
        active: c,
        over: v
      }));
    },
    onDragCancel(d) {
      let {
        active: c,
        over: v
      } = d;
      a(t.onDragCancel({
        active: c,
        over: v
      }));
    }
  }), [a, t])), !l)
    return null;
  const y = Z.createElement(Z.Fragment, null, Z.createElement(sr, {
    id: o,
    value: i.draggable
  }), Z.createElement(ir, {
    id: p,
    announcement: g
  }));
  return n ? it.createPortal(y, n) : y;
}
var ie;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(ie || (ie = {}));
function Ct() {
}
const Re = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function gr(e, t) {
  const n = Tt(e);
  if (!n)
    return "0 0";
  const o = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return o.x + "% " + o.y + "%";
}
function pr(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: o
    }
  } = t;
  return o - n;
}
function hr(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
function vr(e, t) {
  const n = Math.max(t.top, e.top), o = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), g = i - o, p = a - n;
  if (o < i && n < a) {
    const l = t.width * t.height, u = e.width * e.height, y = g * p, d = y / (l + u - y);
    return Number(d.toFixed(4));
  }
  return 0;
}
const yr = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: o
  } = e;
  const i = [];
  for (const a of o) {
    const {
      id: g
    } = a, p = n.get(g);
    if (p) {
      const l = vr(p, t);
      l > 0 && i.push({
        id: g,
        data: {
          droppableContainer: a,
          value: l
        }
      });
    }
  }
  return i.sort(pr);
};
function mr(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Rn(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : Re;
}
function br(e) {
  return function(n) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      i[a - 1] = arguments[a];
    return i.reduce((g, p) => ({
      ...g,
      top: g.top + e * p.y,
      bottom: g.bottom + e * p.y,
      left: g.left + e * p.x,
      right: g.right + e * p.x
    }), {
      ...n
    });
  };
}
const Er = /* @__PURE__ */ br(1);
function _n(e) {
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
function wr(e, t, n) {
  const o = _n(t);
  if (!o)
    return e;
  const {
    scaleX: i,
    scaleY: a,
    x: g,
    y: p
  } = o, l = e.left - g - (1 - i) * parseFloat(n), u = e.top - p - (1 - a) * parseFloat(n.slice(n.indexOf(" ") + 1)), y = i ? e.width / i : e.width, d = a ? e.height / a : e.height;
  return {
    width: y,
    height: d,
    top: u,
    right: l + y,
    bottom: u + d,
    left: l
  };
}
const Rr = {
  ignoreTransform: !1
};
function Xe(e, t) {
  t === void 0 && (t = Rr);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: u,
      transformOrigin: y
    } = pe(e).getComputedStyle(e);
    u && (n = wr(n, u, y));
  }
  const {
    top: o,
    left: i,
    width: a,
    height: g,
    bottom: p,
    right: l
  } = n;
  return {
    top: o,
    left: i,
    width: a,
    height: g,
    bottom: p,
    right: l
  };
}
function un(e) {
  return Xe(e, {
    ignoreTransform: !0
  });
}
function _r(e) {
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
function Sr(e, t) {
  return t === void 0 && (t = pe(e).getComputedStyle(e)), t.position === "fixed";
}
function Or(e, t) {
  t === void 0 && (t = pe(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const a = t[i];
    return typeof a == "string" ? n.test(a) : !1;
  });
}
function qt(e, t) {
  const n = [];
  function o(i) {
    if (t != null && n.length >= t || !i)
      return n;
    if (Ft(i) && i.scrollingElement != null && !n.includes(i.scrollingElement))
      return n.push(i.scrollingElement), n;
    if (!ft(i) || bn(i) || n.includes(i))
      return n;
    const a = pe(e).getComputedStyle(i);
    return i !== e && Or(i, a) && n.push(i), Sr(i, a) ? n : o(i.parentNode);
  }
  return e ? o(e) : n;
}
function Sn(e) {
  const [t] = qt(e, 1);
  return t ?? null;
}
function Yt(e) {
  return !At || !e ? null : Fe(e) ? e : Wt(e) ? Ft(e) || e === qe(e).scrollingElement ? window : ft(e) ? e : null : null;
}
function On(e) {
  return Fe(e) ? e.scrollX : e.scrollLeft;
}
function Tn(e) {
  return Fe(e) ? e.scrollY : e.scrollTop;
}
function Ht(e) {
  return {
    x: On(e),
    y: Tn(e)
  };
}
var ae;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(ae || (ae = {}));
function Cn(e) {
  return !At || !e ? !1 : e === document.scrollingElement;
}
function Dn(e) {
  const t = {
    x: 0,
    y: 0
  }, n = Cn(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, o = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, i = e.scrollTop <= t.y, a = e.scrollLeft <= t.x, g = e.scrollTop >= o.y, p = e.scrollLeft >= o.x;
  return {
    isTop: i,
    isLeft: a,
    isBottom: g,
    isRight: p,
    maxScroll: o,
    minScroll: t
  };
}
const Tr = {
  x: 0.2,
  y: 0.2
};
function Cr(e, t, n, o, i) {
  let {
    top: a,
    left: g,
    right: p,
    bottom: l
  } = n;
  o === void 0 && (o = 10), i === void 0 && (i = Tr);
  const {
    isTop: u,
    isBottom: y,
    isLeft: d,
    isRight: c
  } = Dn(e), v = {
    x: 0,
    y: 0
  }, C = {
    x: 0,
    y: 0
  }, S = {
    height: t.height * i.y,
    width: t.width * i.x
  };
  return !u && a <= t.top + S.height ? (v.y = ae.Backward, C.y = o * Math.abs((t.top + S.height - a) / S.height)) : !y && l >= t.bottom - S.height && (v.y = ae.Forward, C.y = o * Math.abs((t.bottom - S.height - l) / S.height)), !c && p >= t.right - S.width ? (v.x = ae.Forward, C.x = o * Math.abs((t.right - S.width - p) / S.width)) : !d && g <= t.left + S.width && (v.x = ae.Backward, C.x = o * Math.abs((t.left + S.width - g) / S.width)), {
    direction: v,
    speed: C
  };
}
function Dr(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: a,
      innerHeight: g
    } = window;
    return {
      top: 0,
      left: 0,
      right: a,
      bottom: g,
      width: a,
      height: g
    };
  }
  const {
    top: t,
    left: n,
    right: o,
    bottom: i
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: o,
    bottom: i,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function xn(e) {
  return e.reduce((t, n) => We(t, Ht(n)), Re);
}
function xr(e) {
  return e.reduce((t, n) => t + On(n), 0);
}
function Ar(e) {
  return e.reduce((t, n) => t + Tn(n), 0);
}
function An(e, t) {
  if (t === void 0 && (t = Xe), !e)
    return;
  const {
    top: n,
    left: o,
    bottom: i,
    right: a
  } = t(e);
  Sn(e) && (i <= 0 || a <= 0 || n >= window.innerHeight || o >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Nr = [["x", ["left", "right"], xr], ["y", ["top", "bottom"], Ar]];
class Xt {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const o = qt(n), i = xn(o);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [a, g, p] of Nr)
      for (const l of g)
        Object.defineProperty(this, l, {
          get: () => {
            const u = p(o), y = i[a] - u;
            return this.rect[l] + y;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class at {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((n) => {
        var o;
        return (o = this.target) == null ? void 0 : o.removeEventListener(...n);
      });
    }, this.target = t;
  }
  add(t, n, o) {
    var i;
    (i = this.target) == null || i.addEventListener(t, n, o), this.listeners.push([t, n, o]);
  }
}
function kr(e) {
  const {
    EventTarget: t
  } = pe(e);
  return e instanceof t ? e : qe(e);
}
function zt(e, t) {
  const n = Math.abs(e.x), o = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + o ** 2) > t : "x" in t && "y" in t ? n > t.x && o > t.y : "x" in t ? n > t.x : "y" in t ? o > t.y : !1;
}
var be;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(be || (be = {}));
function cn(e) {
  e.preventDefault();
}
function Mr(e) {
  e.stopPropagation();
}
var K;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(K || (K = {}));
const Nn = {
  start: [K.Space, K.Enter],
  cancel: [K.Esc],
  end: [K.Space, K.Enter, K.Tab]
}, Pr = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case K.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case K.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case K.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case K.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class kn {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new at(qe(n)), this.windowListeners = new at(pe(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(be.Resize, this.handleCancel), this.windowListeners.add(be.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(be.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, o = t.node.current;
    o && An(o), n(Re);
  }
  handleKeyDown(t) {
    if (kt(t)) {
      const {
        active: n,
        context: o,
        options: i
      } = this.props, {
        keyboardCodes: a = Nn,
        coordinateGetter: g = Pr,
        scrollBehavior: p = "smooth"
      } = i, {
        code: l
      } = t;
      if (a.end.includes(l)) {
        this.handleEnd(t);
        return;
      }
      if (a.cancel.includes(l)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: u
      } = o.current, y = u ? {
        x: u.left,
        y: u.top
      } : Re;
      this.referenceCoordinates || (this.referenceCoordinates = y);
      const d = g(t, {
        active: n,
        context: o.current,
        currentCoordinates: y
      });
      if (d) {
        const c = Ot(d, y), v = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: C
        } = o.current;
        for (const S of C) {
          const T = t.code, {
            isTop: A,
            isRight: k,
            isLeft: L,
            isBottom: H,
            maxScroll: z,
            minScroll: $
          } = Dn(S), O = Dr(S), U = {
            x: Math.min(T === K.Right ? O.right - O.width / 2 : O.right, Math.max(T === K.Right ? O.left : O.left + O.width / 2, d.x)),
            y: Math.min(T === K.Down ? O.bottom - O.height / 2 : O.bottom, Math.max(T === K.Down ? O.top : O.top + O.height / 2, d.y))
          }, W = T === K.Right && !k || T === K.Left && !L, V = T === K.Down && !H || T === K.Up && !A;
          if (W && U.x !== d.x) {
            const X = S.scrollLeft + c.x, B = T === K.Right && X <= z.x || T === K.Left && X >= $.x;
            if (B && !c.y) {
              S.scrollTo({
                left: X,
                behavior: p
              });
              return;
            }
            B ? v.x = S.scrollLeft - X : v.x = T === K.Right ? S.scrollLeft - z.x : S.scrollLeft - $.x, v.x && S.scrollBy({
              left: -v.x,
              behavior: p
            });
            break;
          } else if (V && U.y !== d.y) {
            const X = S.scrollTop + c.y, B = T === K.Down && X <= z.y || T === K.Up && X >= $.y;
            if (B && !c.x) {
              S.scrollTo({
                top: X,
                behavior: p
              });
              return;
            }
            B ? v.y = S.scrollTop - X : v.y = T === K.Down ? S.scrollTop - z.y : S.scrollTop - $.y, v.y && S.scrollBy({
              top: -v.y,
              behavior: p
            });
            break;
          }
        }
        this.handleMove(t, We(Ot(d, this.referenceCoordinates), v));
      }
    }
  }
  handleMove(t, n) {
    const {
      onMove: o
    } = this.props;
    t.preventDefault(), o(n);
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
kn.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: o = Nn,
      onActivation: i
    } = t, {
      active: a
    } = n;
    const {
      code: g
    } = e.nativeEvent;
    if (o.start.includes(g)) {
      const p = a.activatorNode.current;
      return p && e.target !== p ? !1 : (e.preventDefault(), i?.({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function ln(e) {
  return !!(e && "distance" in e);
}
function dn(e) {
  return !!(e && "delay" in e);
}
class Gt {
  constructor(t, n, o) {
    var i;
    o === void 0 && (o = kr(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: a
    } = t, {
      target: g
    } = a;
    this.props = t, this.events = n, this.document = qe(g), this.documentListeners = new at(this.document), this.listeners = new at(o), this.windowListeners = new at(pe(g)), this.initialCoordinates = (i = Tt(a)) != null ? i : Re, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: n,
          bypassActivationConstraint: o
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(be.Resize, this.handleCancel), this.windowListeners.add(be.DragStart, cn), this.windowListeners.add(be.VisibilityChange, this.handleCancel), this.windowListeners.add(be.ContextMenu, cn), this.documentListeners.add(be.Keydown, this.handleKeydown), n) {
      if (o != null && o({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (dn(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (ln(n)) {
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
      active: o,
      onPending: i
    } = this.props;
    i(o, t, this.initialCoordinates, n);
  }
  handleStart() {
    const {
      initialCoordinates: t
    } = this, {
      onStart: n
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add(be.Click, Mr, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(be.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: o,
      initialCoordinates: i,
      props: a
    } = this, {
      onMove: g,
      options: {
        activationConstraint: p
      }
    } = a;
    if (!i)
      return;
    const l = (n = Tt(t)) != null ? n : Re, u = Ot(i, l);
    if (!o && p) {
      if (ln(p)) {
        if (p.tolerance != null && zt(u, p.tolerance))
          return this.handleCancel();
        if (zt(u, p.distance))
          return this.handleStart();
      }
      if (dn(p) && zt(u, p.tolerance))
        return this.handleCancel();
      this.handlePending(p, u);
      return;
    }
    t.cancelable && t.preventDefault(), g(l);
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
    t.code === K.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Ir = {
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
class Mn extends Gt {
  constructor(t) {
    const {
      event: n
    } = t, o = qe(n.target);
    super(t, Ir, o);
  }
}
Mn.activators = [{
  eventName: "onPointerDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: o
    } = t;
    return !n.isPrimary || n.button !== 0 ? !1 : (o?.({
      event: n
    }), !0);
  }
}];
const jr = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Bt;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Bt || (Bt = {}));
class Lr extends Gt {
  constructor(t) {
    super(t, jr, qe(t.event.target));
  }
}
Lr.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: o
    } = t;
    return n.button === Bt.RightClick ? !1 : (o?.({
      event: n
    }), !0);
  }
}];
const Ut = {
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
class Yr extends Gt {
  constructor(t) {
    super(t, Ut);
  }
  static setup() {
    return window.addEventListener(Ut.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Ut.move.name, t);
    };
    function t() {
    }
  }
}
Yr.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: o
    } = t;
    const {
      touches: i
    } = n;
    return i.length > 1 ? !1 : (o?.({
      event: n
    }), !0);
  }
}];
var ut;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(ut || (ut = {}));
var Dt;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Dt || (Dt = {}));
function zr(e) {
  let {
    acceleration: t,
    activator: n = ut.Pointer,
    canScroll: o,
    draggingRect: i,
    enabled: a,
    interval: g = 5,
    order: p = Dt.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: u,
    scrollableAncestorRects: y,
    delta: d,
    threshold: c
  } = e;
  const v = Hr({
    delta: d,
    disabled: !a
  }), [C, S] = er(), T = m.useRef({
    x: 0,
    y: 0
  }), A = m.useRef({
    x: 0,
    y: 0
  }), k = m.useMemo(() => {
    switch (n) {
      case ut.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case ut.DraggableRect:
        return i;
    }
  }, [n, i, l]), L = m.useRef(null), H = m.useCallback(() => {
    const $ = L.current;
    if (!$)
      return;
    const O = T.current.x * A.current.x, U = T.current.y * A.current.y;
    $.scrollBy(O, U);
  }, []), z = m.useMemo(() => p === Dt.TreeOrder ? [...u].reverse() : u, [p, u]);
  m.useEffect(
    () => {
      if (!a || !u.length || !k) {
        S();
        return;
      }
      for (const $ of z) {
        if (o?.($) === !1)
          continue;
        const O = u.indexOf($), U = y[O];
        if (!U)
          continue;
        const {
          direction: W,
          speed: V
        } = Cr($, U, k, t, c);
        for (const X of ["x", "y"])
          v[X][W[X]] || (V[X] = 0, W[X] = 0);
        if (V.x > 0 || V.y > 0) {
          S(), L.current = $, C(H, g), T.current = V, A.current = W;
          return;
        }
      }
      T.current = {
        x: 0,
        y: 0
      }, A.current = {
        x: 0,
        y: 0
      }, S();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      H,
      o,
      S,
      a,
      g,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(k),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v),
      C,
      u,
      z,
      y,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(c)
    ]
  );
}
const Ur = {
  x: {
    [ae.Backward]: !1,
    [ae.Forward]: !1
  },
  y: {
    [ae.Backward]: !1,
    [ae.Forward]: !1
  }
};
function Hr(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const o = St(t);
  return gt((i) => {
    if (n || !o || !i)
      return Ur;
    const a = {
      x: Math.sign(t.x - o.x),
      y: Math.sign(t.y - o.y)
    };
    return {
      x: {
        [ae.Backward]: i.x[ae.Backward] || a.x === -1,
        [ae.Forward]: i.x[ae.Forward] || a.x === 1
      },
      y: {
        [ae.Backward]: i.y[ae.Backward] || a.y === -1,
        [ae.Forward]: i.y[ae.Forward] || a.y === 1
      }
    };
  }, [n, t, o]);
}
function Br(e, t) {
  const n = t != null ? e.get(t) : void 0, o = n ? n.node.current : null;
  return gt((i) => {
    var a;
    return t == null ? null : (a = o ?? i) != null ? a : null;
  }, [o, t]);
}
function $r(e, t) {
  return m.useMemo(() => e.reduce((n, o) => {
    const {
      sensor: i
    } = o, a = i.activators.map((g) => ({
      eventName: g.eventName,
      handler: t(g.handler, o)
    }));
    return [...n, ...a];
  }, []), [e, t]);
}
var dt;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(dt || (dt = {}));
var $t;
(function(e) {
  e.Optimized = "optimized";
})($t || ($t = {}));
const fn = /* @__PURE__ */ new Map();
function Wr(e, t) {
  let {
    dragging: n,
    dependencies: o,
    config: i
  } = t;
  const [a, g] = m.useState(null), {
    frequency: p,
    measure: l,
    strategy: u
  } = i, y = m.useRef(e), d = T(), c = lt(d), v = m.useCallback(function(A) {
    A === void 0 && (A = []), !c.current && g((k) => k === null ? A : k.concat(A.filter((L) => !k.includes(L))));
  }, [c]), C = m.useRef(null), S = gt((A) => {
    if (d && !n)
      return fn;
    if (!A || A === fn || y.current !== e || a != null) {
      const k = /* @__PURE__ */ new Map();
      for (let L of e) {
        if (!L)
          continue;
        if (a && a.length > 0 && !a.includes(L.id) && L.rect.current) {
          k.set(L.id, L.rect.current);
          continue;
        }
        const H = L.node.current, z = H ? new Xt(l(H), H) : null;
        L.rect.current = z, z && k.set(L.id, z);
      }
      return k;
    }
    return A;
  }, [e, a, n, d, l]);
  return m.useEffect(() => {
    y.current = e;
  }, [e]), m.useEffect(
    () => {
      d || v();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, d]
  ), m.useEffect(
    () => {
      a && a.length > 0 && g(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(a)]
  ), m.useEffect(
    () => {
      d || typeof p != "number" || C.current !== null || (C.current = setTimeout(() => {
        v(), C.current = null;
      }, p));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [p, d, v, ...o]
  ), {
    droppableRects: S,
    measureDroppableContainers: v,
    measuringScheduled: a != null
  };
  function T() {
    switch (u) {
      case dt.Always:
        return !1;
      case dt.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Kt(e, t) {
  return gt((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Fr(e, t) {
  return Kt(e, t);
}
function qr(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const o = Nt(t), i = m.useMemo(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: a
    } = window;
    return new a(o);
  }, [o, n]);
  return m.useEffect(() => () => i?.disconnect(), [i]), i;
}
function Mt(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const o = Nt(t), i = m.useMemo(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: a
      } = window;
      return new a(o);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return m.useEffect(() => () => i?.disconnect(), [i]), i;
}
function Xr(e) {
  return new Xt(Xe(e), e);
}
function gn(e, t, n) {
  t === void 0 && (t = Xr);
  const [o, i] = m.useState(null);
  function a() {
    i((l) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var u;
        return (u = l ?? n) != null ? u : null;
      }
      const y = t(e);
      return JSON.stringify(l) === JSON.stringify(y) ? l : y;
    });
  }
  const g = qr({
    callback(l) {
      if (e)
        for (const u of l) {
          const {
            type: y,
            target: d
          } = u;
          if (y === "childList" && d instanceof HTMLElement && d.contains(e)) {
            a();
            break;
          }
        }
    }
  }), p = Mt({
    callback: a
  });
  return we(() => {
    a(), e ? (p?.observe(e), g?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (p?.disconnect(), g?.disconnect());
  }, [e]), o;
}
function Gr(e) {
  const t = Kt(e);
  return Rn(e, t);
}
const pn = [];
function Kr(e) {
  const t = m.useRef(e), n = gt((o) => e ? o && o !== pn && e && t.current && e.parentNode === t.current.parentNode ? o : qt(e) : pn, [e]);
  return m.useEffect(() => {
    t.current = e;
  }, [e]), n;
}
function Vr(e) {
  const [t, n] = m.useState(null), o = m.useRef(e), i = m.useCallback((a) => {
    const g = Yt(a.target);
    g && n((p) => p ? (p.set(g, Ht(g)), new Map(p)) : null);
  }, []);
  return m.useEffect(() => {
    const a = o.current;
    if (e !== a) {
      g(a);
      const p = e.map((l) => {
        const u = Yt(l);
        return u ? (u.addEventListener("scroll", i, {
          passive: !0
        }), [u, Ht(u)]) : null;
      }).filter((l) => l != null);
      n(p.length ? new Map(p) : null), o.current = e;
    }
    return () => {
      g(e), g(a);
    };
    function g(p) {
      p.forEach((l) => {
        const u = Yt(l);
        u?.removeEventListener("scroll", i);
      });
    }
  }, [i, e]), m.useMemo(() => e.length ? t ? Array.from(t.values()).reduce((a, g) => We(a, g), Re) : xn(e) : Re, [e, t]);
}
function hn(e, t) {
  t === void 0 && (t = []);
  const n = m.useRef(null);
  return m.useEffect(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), m.useEffect(() => {
    const o = e !== Re;
    o && !n.current && (n.current = e), !o && n.current && (n.current = null);
  }, [e]), n.current ? Ot(e, n.current) : Re;
}
function Qr(e) {
  m.useEffect(
    () => {
      if (!At)
        return;
      const t = e.map((n) => {
        let {
          sensor: o
        } = n;
        return o.setup == null ? void 0 : o.setup();
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
function Jr(e, t) {
  return m.useMemo(() => e.reduce((n, o) => {
    let {
      eventName: i,
      handler: a
    } = o;
    return n[i] = (g) => {
      a(g, t);
    }, n;
  }, {}), [e, t]);
}
function Pn(e) {
  return m.useMemo(() => e ? _r(e) : null, [e]);
}
const vn = [];
function Zr(e, t) {
  t === void 0 && (t = Xe);
  const [n] = e, o = Pn(n ? pe(n) : null), [i, a] = m.useState(vn);
  function g() {
    a(() => e.length ? e.map((l) => Cn(l) ? o : new Xt(t(l), l)) : vn);
  }
  const p = Mt({
    callback: g
  });
  return we(() => {
    p?.disconnect(), g(), e.forEach((l) => p?.observe(l));
  }, [e]), i;
}
function In(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return ft(t) ? t : e;
}
function eo(e) {
  let {
    measure: t
  } = e;
  const [n, o] = m.useState(null), i = m.useCallback((u) => {
    for (const {
      target: y
    } of u)
      if (ft(y)) {
        o((d) => {
          const c = t(y);
          return d ? {
            ...d,
            width: c.width,
            height: c.height
          } : c;
        });
        break;
      }
  }, [t]), a = Mt({
    callback: i
  }), g = m.useCallback((u) => {
    const y = In(u);
    a?.disconnect(), y && a?.observe(y), o(y ? t(y) : null);
  }, [t, a]), [p, l] = _t(g);
  return m.useMemo(() => ({
    nodeRef: p,
    rect: n,
    setRef: l
  }), [n, p, l]);
}
const to = [{
  sensor: Mn,
  options: {}
}, {
  sensor: kn,
  options: {}
}], no = {
  current: {}
}, Rt = {
  draggable: {
    measure: un
  },
  droppable: {
    measure: un,
    strategy: dt.WhileDragging,
    frequency: $t.Optimized
  },
  dragOverlay: {
    measure: Xe
  }
};
class ct extends Map {
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
    var n, o;
    return (n = (o = this.get(t)) == null ? void 0 : o.node.current) != null ? n : void 0;
  }
}
const ro = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new ct(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Ct
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Rt,
  measureDroppableContainers: Ct,
  windowRect: null,
  measuringScheduled: !1
}, jn = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Ct,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Ct
}, ht = /* @__PURE__ */ m.createContext(jn), Ln = /* @__PURE__ */ m.createContext(ro);
function oo() {
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
      containers: new ct()
    }
  };
}
function so(e, t) {
  switch (t.type) {
    case ie.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case ie.DragMove:
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
    case ie.DragEnd:
    case ie.DragCancel:
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
    case ie.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: o
      } = n, i = new ct(e.droppable.containers);
      return i.set(o, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    case ie.SetDroppableDisabled: {
      const {
        id: n,
        key: o,
        disabled: i
      } = t, a = e.droppable.containers.get(n);
      if (!a || o !== a.key)
        return e;
      const g = new ct(e.droppable.containers);
      return g.set(n, {
        ...a,
        disabled: i
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: g
        }
      };
    }
    case ie.UnregisterDroppable: {
      const {
        id: n,
        key: o
      } = t, i = e.droppable.containers.get(n);
      if (!i || o !== i.key)
        return e;
      const a = new ct(e.droppable.containers);
      return a.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: a
        }
      };
    }
    default:
      return e;
  }
}
function io(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: o,
    draggableNodes: i
  } = m.useContext(ht), a = St(o), g = St(n?.id);
  return m.useEffect(() => {
    if (!t && !o && a && g != null) {
      if (!kt(a) || document.activeElement === a.target)
        return;
      const p = i.get(g);
      if (!p)
        return;
      const {
        activatorNode: l,
        node: u
      } = p;
      if (!l.current && !u.current)
        return;
      requestAnimationFrame(() => {
        for (const y of [l.current, u.current]) {
          if (!y)
            continue;
          const d = rr(y);
          if (d) {
            d.focus();
            break;
          }
        }
      });
    }
  }, [o, t, i, g, a]), null;
}
function Yn(e, t) {
  let {
    transform: n,
    ...o
  } = t;
  return e != null && e.length ? e.reduce((i, a) => a({
    transform: i,
    ...o
  }), n) : n;
}
function ao(e) {
  return m.useMemo(
    () => ({
      draggable: {
        ...Rt.draggable,
        ...e?.draggable
      },
      droppable: {
        ...Rt.droppable,
        ...e?.droppable
      },
      dragOverlay: {
        ...Rt.dragOverlay,
        ...e?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e?.draggable, e?.droppable, e?.dragOverlay]
  );
}
function uo(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: o,
    config: i = !0
  } = e;
  const a = m.useRef(!1), {
    x: g,
    y: p
  } = typeof i == "boolean" ? {
    x: i,
    y: i
  } : i;
  we(() => {
    if (!g && !p || !t) {
      a.current = !1;
      return;
    }
    if (a.current || !o)
      return;
    const u = t?.node.current;
    if (!u || u.isConnected === !1)
      return;
    const y = n(u), d = Rn(y, o);
    if (g || (d.x = 0), p || (d.y = 0), a.current = !0, Math.abs(d.x) > 0 || Math.abs(d.y) > 0) {
      const c = Sn(u);
      c && c.scrollBy({
        top: d.y,
        left: d.x
      });
    }
  }, [t, g, p, o, n]);
}
const Pt = /* @__PURE__ */ m.createContext({
  ...Re,
  scaleX: 1,
  scaleY: 1
});
var je;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(je || (je = {}));
const co = /* @__PURE__ */ m.memo(function(t) {
  var n, o, i, a;
  let {
    id: g,
    accessibility: p,
    autoScroll: l = !0,
    children: u,
    sensors: y = to,
    collisionDetection: d = yr,
    measuring: c,
    modifiers: v,
    ...C
  } = t;
  const S = m.useReducer(so, void 0, oo), [T, A] = S, [k, L] = cr(), [H, z] = m.useState(je.Uninitialized), $ = H === je.Initialized, {
    draggable: {
      active: O,
      nodes: U,
      translate: W
    },
    droppable: {
      containers: V
    }
  } = T, X = O != null ? U.get(O) : null, B = m.useRef({
    initial: null,
    translated: null
  }), ne = m.useMemo(() => {
    var _;
    return O != null ? {
      id: O,
      // It's possible for the active node to unmount while dragging
      data: (_ = X?.data) != null ? _ : no,
      rect: B
    } : null;
  }, [O, X]), te = m.useRef(null), [ue, re] = m.useState(null), [J, he] = m.useState(null), oe = lt(C, Object.values(C)), ve = pt("DndDescribedBy", g), s = m.useMemo(() => V.getEnabled(), [V]), h = ao(c), {
    droppableRects: E,
    measureDroppableContainers: R,
    measuringScheduled: j
  } = Wr(s, {
    dragging: $,
    dependencies: [W.x, W.y],
    config: h.droppable
  }), P = Br(U, O), x = m.useMemo(() => J ? Tt(J) : null, [J]), Q = w(), G = Fr(P, h.draggable.measure);
  uo({
    activeNode: O != null ? U.get(O) : null,
    config: Q.layoutShiftCompensation,
    initialRect: G,
    measure: h.draggable.measure
  });
  const F = gn(P, h.draggable.measure, G), Ae = gn(P ? P.parentElement : null), ye = m.useRef({
    activatorEvent: null,
    active: null,
    activeNode: P,
    collisionRect: null,
    collisions: null,
    droppableRects: E,
    draggableNodes: U,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: V,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Oe = V.getNodeFor((n = ye.current.over) == null ? void 0 : n.id), me = eo({
    measure: h.dragOverlay.measure
  }), Te = (o = me.nodeRef.current) != null ? o : P, _e = $ ? (i = me.rect) != null ? i : F : null, ge = !!(me.nodeRef.current && me.rect), Ge = Gr(ge ? null : F), Ke = Pn(Te ? pe(Te) : null), I = Kr($ ? Oe ?? P : null), Ce = Zr(I), Ye = Yn(v, {
    transform: {
      x: W.x - Ge.x,
      y: W.y - Ge.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: J,
    active: ne,
    activeNodeRect: F,
    containerNodeRect: Ae,
    draggingNodeRect: _e,
    over: ye.current.over,
    overlayNodeRect: me.rect,
    scrollableAncestors: I,
    scrollableAncestorRects: Ce,
    windowRect: Ke
  }), Ve = x ? We(x, W) : null, Qe = Vr(I), vt = hn(Qe), It = hn(Qe, [F]), Ne = We(Ye, vt), De = _e ? Er(_e, Ye) : null, ke = ne && De ? d({
    active: ne,
    collisionRect: De,
    droppableRects: E,
    droppableContainers: s,
    pointerCoordinates: Ve
  }) : null, Je = hr(ke, "id"), [Ee, ze] = m.useState(null), Be = ge ? Ye : We(Ye, It), $e = mr(Be, (a = Ee?.rect) != null ? a : null, F), Ue = m.useRef(null), Ze = m.useCallback(
    (_, N) => {
      let {
        sensor: D,
        options: q
      } = N;
      if (te.current == null)
        return;
      const M = U.get(te.current);
      if (!M)
        return;
      const ee = _.nativeEvent, ce = new D({
        active: te.current,
        activeNode: M,
        event: ee,
        options: q,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ye,
        onAbort(se) {
          if (!U.get(se))
            return;
          const {
            onDragAbort: Se
          } = oe.current, xe = {
            id: se
          };
          Se?.(xe), k({
            type: "onDragAbort",
            event: xe
          });
        },
        onPending(se, Pe, Se, xe) {
          if (!U.get(se))
            return;
          const {
            onDragPending: tt
          } = oe.current, Ie = {
            id: se,
            constraint: Pe,
            initialCoordinates: Se,
            offset: xe
          };
          tt?.(Ie), k({
            type: "onDragPending",
            event: Ie
          });
        },
        onStart(se) {
          const Pe = te.current;
          if (Pe == null)
            return;
          const Se = U.get(Pe);
          if (!Se)
            return;
          const {
            onDragStart: xe
          } = oe.current, et = {
            activatorEvent: ee,
            active: {
              id: Pe,
              data: Se.data,
              rect: B
            }
          };
          it.unstable_batchedUpdates(() => {
            xe?.(et), z(je.Initializing), A({
              type: ie.DragStart,
              initialCoordinates: se,
              active: Pe
            }), k({
              type: "onDragStart",
              event: et
            }), re(Ue.current), he(ee);
          });
        },
        onMove(se) {
          A({
            type: ie.DragMove,
            coordinates: se
          });
        },
        onEnd: Me(ie.DragEnd),
        onCancel: Me(ie.DragCancel)
      });
      Ue.current = ce;
      function Me(se) {
        return async function() {
          const {
            active: Se,
            collisions: xe,
            over: et,
            scrollAdjustedTranslate: tt
          } = ye.current;
          let Ie = null;
          if (Se && tt) {
            const {
              cancelDrop: nt
            } = oe.current;
            Ie = {
              activatorEvent: ee,
              active: Se,
              collisions: xe,
              delta: tt,
              over: et
            }, se === ie.DragEnd && typeof nt == "function" && await Promise.resolve(nt(Ie)) && (se = ie.DragCancel);
          }
          te.current = null, it.unstable_batchedUpdates(() => {
            A({
              type: se
            }), z(je.Uninitialized), ze(null), re(null), he(null), Ue.current = null;
            const nt = se === ie.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Ie) {
              const jt = oe.current[nt];
              jt?.(Ie), k({
                type: nt,
                event: Ie
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [U]
  ), He = m.useCallback((_, N) => (D, q) => {
    const M = D.nativeEvent, ee = U.get(q);
    if (
      // Another sensor is already instantiating
      te.current !== null || // No active draggable
      !ee || // Event has already been captured
      M.dndKit || M.defaultPrevented
    )
      return;
    const ce = {
      active: ee
    };
    _(D, N.options, ce) === !0 && (M.dndKit = {
      capturedBy: N.sensor
    }, te.current = q, Ze(D, N));
  }, [U, Ze]), r = $r(y, He);
  Qr(y), we(() => {
    F && H === je.Initializing && z(je.Initialized);
  }, [F, H]), m.useEffect(
    () => {
      const {
        onDragMove: _
      } = oe.current, {
        active: N,
        activatorEvent: D,
        collisions: q,
        over: M
      } = ye.current;
      if (!N || !D)
        return;
      const ee = {
        active: N,
        activatorEvent: D,
        collisions: q,
        delta: {
          x: Ne.x,
          y: Ne.y
        },
        over: M
      };
      it.unstable_batchedUpdates(() => {
        _?.(ee), k({
          type: "onDragMove",
          event: ee
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Ne.x, Ne.y]
  ), m.useEffect(
    () => {
      const {
        active: _,
        activatorEvent: N,
        collisions: D,
        droppableContainers: q,
        scrollAdjustedTranslate: M
      } = ye.current;
      if (!_ || te.current == null || !N || !M)
        return;
      const {
        onDragOver: ee
      } = oe.current, ce = q.get(Je), Me = ce && ce.rect.current ? {
        id: ce.id,
        rect: ce.rect.current,
        data: ce.data,
        disabled: ce.disabled
      } : null, se = {
        active: _,
        activatorEvent: N,
        collisions: D,
        delta: {
          x: M.x,
          y: M.y
        },
        over: Me
      };
      it.unstable_batchedUpdates(() => {
        ze(Me), ee?.(se), k({
          type: "onDragOver",
          event: se
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Je]
  ), we(() => {
    ye.current = {
      activatorEvent: J,
      active: ne,
      activeNode: P,
      collisionRect: De,
      collisions: ke,
      droppableRects: E,
      draggableNodes: U,
      draggingNode: Te,
      draggingNodeRect: _e,
      droppableContainers: V,
      over: Ee,
      scrollableAncestors: I,
      scrollAdjustedTranslate: Ne
    }, B.current = {
      initial: _e,
      translated: De
    };
  }, [ne, P, ke, De, U, Te, _e, E, V, Ee, I, Ne]), zr({
    ...Q,
    delta: W,
    draggingRect: De,
    pointerCoordinates: Ve,
    scrollableAncestors: I,
    scrollableAncestorRects: Ce
  });
  const f = m.useMemo(() => ({
    active: ne,
    activeNode: P,
    activeNodeRect: F,
    activatorEvent: J,
    collisions: ke,
    containerNodeRect: Ae,
    dragOverlay: me,
    draggableNodes: U,
    droppableContainers: V,
    droppableRects: E,
    over: Ee,
    measureDroppableContainers: R,
    scrollableAncestors: I,
    scrollableAncestorRects: Ce,
    measuringConfiguration: h,
    measuringScheduled: j,
    windowRect: Ke
  }), [ne, P, F, J, ke, Ae, me, U, V, E, Ee, R, I, Ce, h, j, Ke]), b = m.useMemo(() => ({
    activatorEvent: J,
    activators: r,
    active: ne,
    activeNodeRect: F,
    ariaDescribedById: {
      draggable: ve
    },
    dispatch: A,
    draggableNodes: U,
    over: Ee,
    measureDroppableContainers: R
  }), [J, r, ne, F, A, ve, U, Ee, R]);
  return Z.createElement(wn.Provider, {
    value: L
  }, Z.createElement(ht.Provider, {
    value: b
  }, Z.createElement(Ln.Provider, {
    value: f
  }, Z.createElement(Pt.Provider, {
    value: $e
  }, u)), Z.createElement(io, {
    disabled: p?.restoreFocus === !1
  })), Z.createElement(fr, {
    ...p,
    hiddenTextDescribedById: ve
  }));
  function w() {
    const _ = ue?.autoScrollEnabled === !1, N = typeof l == "object" ? l.enabled === !1 : l === !1, D = $ && !_ && !N;
    return typeof l == "object" ? {
      ...l,
      enabled: D
    } : {
      enabled: D
    };
  }
}), lo = /* @__PURE__ */ m.createContext(null), yn = "button", fo = "Draggable";
function go(e) {
  let {
    id: t,
    data: n,
    disabled: o = !1,
    attributes: i
  } = e;
  const a = pt(fo), {
    activators: g,
    activatorEvent: p,
    active: l,
    activeNodeRect: u,
    ariaDescribedById: y,
    draggableNodes: d,
    over: c
  } = m.useContext(ht), {
    role: v = yn,
    roleDescription: C = "draggable",
    tabIndex: S = 0
  } = i ?? {}, T = l?.id === t, A = m.useContext(T ? Pt : lo), [k, L] = _t(), [H, z] = _t(), $ = Jr(g, t), O = lt(n);
  we(
    () => (d.set(t, {
      id: t,
      key: a,
      node: k,
      activatorNode: H,
      data: O
    }), () => {
      const W = d.get(t);
      W && W.key === a && d.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d, t]
  );
  const U = m.useMemo(() => ({
    role: v,
    tabIndex: S,
    "aria-disabled": o,
    "aria-pressed": T && v === yn ? !0 : void 0,
    "aria-roledescription": C,
    "aria-describedby": y.draggable
  }), [o, v, S, T, C, y.draggable]);
  return {
    active: l,
    activatorEvent: p,
    activeNodeRect: u,
    attributes: U,
    isDragging: T,
    listeners: o ? void 0 : $,
    node: k,
    over: c,
    setNodeRef: L,
    setActivatorNodeRef: z,
    transform: A
  };
}
function zn() {
  return m.useContext(Ln);
}
const po = "Droppable", ho = {
  timeout: 25
};
function vo(e) {
  let {
    data: t,
    disabled: n = !1,
    id: o,
    resizeObserverConfig: i
  } = e;
  const a = pt(po), {
    active: g,
    dispatch: p,
    over: l,
    measureDroppableContainers: u
  } = m.useContext(ht), y = m.useRef({
    disabled: n
  }), d = m.useRef(!1), c = m.useRef(null), v = m.useRef(null), {
    disabled: C,
    updateMeasurementsFor: S,
    timeout: T
  } = {
    ...ho,
    ...i
  }, A = lt(S ?? o), k = m.useCallback(
    () => {
      if (!d.current) {
        d.current = !0;
        return;
      }
      v.current != null && clearTimeout(v.current), v.current = setTimeout(() => {
        u(Array.isArray(A.current) ? A.current : [A.current]), v.current = null;
      }, T);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [T]
  ), L = Mt({
    callback: k,
    disabled: C || !g
  }), H = m.useCallback((U, W) => {
    L && (W && (L.unobserve(W), d.current = !1), U && L.observe(U));
  }, [L]), [z, $] = _t(H), O = lt(t);
  return m.useEffect(() => {
    !L || !z.current || (L.disconnect(), d.current = !1, L.observe(z.current));
  }, [z, L]), m.useEffect(
    () => (p({
      type: ie.RegisterDroppable,
      element: {
        id: o,
        key: a,
        disabled: n,
        node: z,
        rect: c,
        data: O
      }
    }), () => p({
      type: ie.UnregisterDroppable,
      key: a,
      id: o
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o]
  ), m.useEffect(() => {
    n !== y.current.disabled && (p({
      type: ie.SetDroppableDisabled,
      id: o,
      key: a,
      disabled: n
    }), y.current.disabled = n);
  }, [o, a, n, p]), {
    active: g,
    rect: c,
    isOver: l?.id === o,
    node: z,
    over: l,
    setNodeRef: $
  };
}
function yo(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [o, i] = m.useState(null), [a, g] = m.useState(null), p = St(n);
  return !n && !o && p && i(p), we(() => {
    if (!a)
      return;
    const l = o?.key, u = o?.props.id;
    if (l == null || u == null) {
      i(null);
      return;
    }
    Promise.resolve(t(u, a)).then(() => {
      i(null);
    });
  }, [t, o, a]), Z.createElement(Z.Fragment, null, n, o ? m.cloneElement(o, {
    ref: g
  }) : null);
}
const mo = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function bo(e) {
  let {
    children: t
  } = e;
  return Z.createElement(ht.Provider, {
    value: jn
  }, Z.createElement(Pt.Provider, {
    value: mo
  }, t));
}
const Eo = {
  position: "fixed",
  touchAction: "none"
}, wo = (e) => kt(e) ? "transform 250ms ease" : void 0, Ro = /* @__PURE__ */ m.forwardRef((e, t) => {
  let {
    as: n,
    activatorEvent: o,
    adjustScale: i,
    children: a,
    className: g,
    rect: p,
    style: l,
    transform: u,
    transition: y = wo
  } = e;
  if (!p)
    return null;
  const d = i ? u : {
    ...u,
    scaleX: 1,
    scaleY: 1
  }, c = {
    ...Eo,
    width: p.width,
    height: p.height,
    top: p.top,
    left: p.left,
    transform: Le.Transform.toString(d),
    transformOrigin: i && o ? gr(o, p) : void 0,
    transition: typeof y == "function" ? y(o) : y,
    ...l
  };
  return Z.createElement(n, {
    className: g,
    style: c,
    ref: t
  }, a);
}), _o = (e) => (t) => {
  let {
    active: n,
    dragOverlay: o
  } = t;
  const i = {}, {
    styles: a,
    className: g
  } = e;
  if (a != null && a.active)
    for (const [p, l] of Object.entries(a.active))
      l !== void 0 && (i[p] = n.node.style.getPropertyValue(p), n.node.style.setProperty(p, l));
  if (a != null && a.dragOverlay)
    for (const [p, l] of Object.entries(a.dragOverlay))
      l !== void 0 && o.node.style.setProperty(p, l);
  return g != null && g.active && n.node.classList.add(g.active), g != null && g.dragOverlay && o.node.classList.add(g.dragOverlay), function() {
    for (const [l, u] of Object.entries(i))
      n.node.style.setProperty(l, u);
    g != null && g.active && n.node.classList.remove(g.active);
  };
}, So = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: Le.Transform.toString(t)
  }, {
    transform: Le.Transform.toString(n)
  }];
}, Oo = {
  duration: 250,
  easing: "ease",
  keyframes: So,
  sideEffects: /* @__PURE__ */ _o({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function To(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: o,
    measuringConfiguration: i
  } = e;
  return Nt((a, g) => {
    if (t === null)
      return;
    const p = n.get(a);
    if (!p)
      return;
    const l = p.node.current;
    if (!l)
      return;
    const u = In(g);
    if (!u)
      return;
    const {
      transform: y
    } = pe(g).getComputedStyle(g), d = _n(y);
    if (!d)
      return;
    const c = typeof t == "function" ? t : Co(t);
    return An(l, i.draggable.measure), c({
      active: {
        id: a,
        data: p.data,
        node: l,
        rect: i.draggable.measure(l)
      },
      draggableNodes: n,
      dragOverlay: {
        node: g,
        rect: i.dragOverlay.measure(u)
      },
      droppableContainers: o,
      measuringConfiguration: i,
      transform: d
    });
  });
}
function Co(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: o,
    keyframes: i
  } = {
    ...Oo,
    ...e
  };
  return (a) => {
    let {
      active: g,
      dragOverlay: p,
      transform: l,
      ...u
    } = a;
    if (!t)
      return;
    const y = {
      x: p.rect.left - g.rect.left,
      y: p.rect.top - g.rect.top
    }, d = {
      scaleX: l.scaleX !== 1 ? g.rect.width * l.scaleX / p.rect.width : 1,
      scaleY: l.scaleY !== 1 ? g.rect.height * l.scaleY / p.rect.height : 1
    }, c = {
      x: l.x - y.x,
      y: l.y - y.y,
      ...d
    }, v = i({
      ...u,
      active: g,
      dragOverlay: p,
      transform: {
        initial: l,
        final: c
      }
    }), [C] = v, S = v[v.length - 1];
    if (JSON.stringify(C) === JSON.stringify(S))
      return;
    const T = o?.({
      active: g,
      dragOverlay: p,
      ...u
    }), A = p.node.animate(v, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((k) => {
      A.onfinish = () => {
        T?.(), k();
      };
    });
  };
}
let mn = 0;
function Do(e) {
  return m.useMemo(() => {
    if (e != null)
      return mn++, mn;
  }, [e]);
}
const xo = /* @__PURE__ */ Z.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: o,
    style: i,
    transition: a,
    modifiers: g,
    wrapperElement: p = "div",
    className: l,
    zIndex: u = 999
  } = e;
  const {
    activatorEvent: y,
    active: d,
    activeNodeRect: c,
    containerNodeRect: v,
    draggableNodes: C,
    droppableContainers: S,
    dragOverlay: T,
    over: A,
    measuringConfiguration: k,
    scrollableAncestors: L,
    scrollableAncestorRects: H,
    windowRect: z
  } = zn(), $ = m.useContext(Pt), O = Do(d?.id), U = Yn(g, {
    activatorEvent: y,
    active: d,
    activeNodeRect: c,
    containerNodeRect: v,
    draggingNodeRect: T.rect,
    over: A,
    overlayNodeRect: T.rect,
    scrollableAncestors: L,
    scrollableAncestorRects: H,
    transform: $,
    windowRect: z
  }), W = Kt(c), V = To({
    config: o,
    draggableNodes: C,
    droppableContainers: S,
    measuringConfiguration: k
  }), X = W ? T.setRef : void 0;
  return Z.createElement(bo, null, Z.createElement(yo, {
    animation: V
  }, d && O ? Z.createElement(Ro, {
    key: O,
    id: d.id,
    ref: X,
    as: p,
    activatorEvent: y,
    adjustScale: t,
    className: l,
    transition: a,
    rect: W,
    style: {
      zIndex: u,
      ...i
    },
    transform: U
  }, n) : null));
});
function Vt(e, t, n) {
  const o = e.slice();
  return o.splice(n < 0 ? o.length + n : n, 0, o.splice(t, 1)[0]), o;
}
function Ao(e, t) {
  return e.reduce((n, o, i) => {
    const a = t.get(o);
    return a && (n[i] = a), n;
  }, Array(e.length));
}
function Et(e) {
  return e !== null && e >= 0;
}
function No(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function ko(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const wt = {
  scaleX: 1,
  scaleY: 1
}, Mo = (e) => {
  var t;
  let {
    rects: n,
    activeNodeRect: o,
    activeIndex: i,
    overIndex: a,
    index: g
  } = e;
  const p = (t = n[i]) != null ? t : o;
  if (!p)
    return null;
  const l = Po(n, g, i);
  if (g === i) {
    const u = n[a];
    return u ? {
      x: i < a ? u.left + u.width - (p.left + p.width) : u.left - p.left,
      y: 0,
      ...wt
    } : null;
  }
  return g > i && g <= a ? {
    x: -p.width - l,
    y: 0,
    ...wt
  } : g < i && g >= a ? {
    x: p.width + l,
    y: 0,
    ...wt
  } : {
    x: 0,
    y: 0,
    ...wt
  };
};
function Po(e, t, n) {
  const o = e[t], i = e[t - 1], a = e[t + 1];
  return !o || !i && !a ? 0 : n < t ? i ? o.left - (i.left + i.width) : a.left - (o.left + o.width) : a ? a.left - (o.left + o.width) : o.left - (i.left + i.width);
}
const Un = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: o,
    index: i
  } = e;
  const a = Vt(t, o, n), g = t[i], p = a[i];
  return !p || !g ? null : {
    x: p.left - g.left,
    y: p.top - g.top,
    scaleX: p.width / g.width,
    scaleY: p.height / g.height
  };
}, Hn = "Sortable", Bn = /* @__PURE__ */ Z.createContext({
  activeIndex: -1,
  containerId: Hn,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Un,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Io(e) {
  let {
    children: t,
    id: n,
    items: o,
    strategy: i = Un,
    disabled: a = !1
  } = e;
  const {
    active: g,
    dragOverlay: p,
    droppableRects: l,
    over: u,
    measureDroppableContainers: y
  } = zn(), d = pt(Hn, n), c = p.rect !== null, v = m.useMemo(() => o.map(($) => typeof $ == "object" && "id" in $ ? $.id : $), [o]), C = g != null, S = g ? v.indexOf(g.id) : -1, T = u ? v.indexOf(u.id) : -1, A = m.useRef(v), k = !No(v, A.current), L = T !== -1 && S === -1 || k, H = ko(a);
  we(() => {
    k && C && y(v);
  }, [k, v, C, y]), m.useEffect(() => {
    A.current = v;
  }, [v]);
  const z = m.useMemo(
    () => ({
      activeIndex: S,
      containerId: d,
      disabled: H,
      disableTransforms: L,
      items: v,
      overIndex: T,
      useDragOverlay: c,
      sortedRects: Ao(v, l),
      strategy: i
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [S, d, H.draggable, H.droppable, L, v, T, l, c, i]
  );
  return Z.createElement(Bn.Provider, {
    value: z
  }, t);
}
const jo = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: o,
    overIndex: i
  } = e;
  return Vt(n, o, i).indexOf(t);
}, Lo = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: o,
    index: i,
    items: a,
    newIndex: g,
    previousItems: p,
    previousContainerId: l,
    transition: u
  } = e;
  return !u || !o || p !== a && i === g ? !1 : n ? !0 : g !== i && t === l;
}, Yo = {
  duration: 200,
  easing: "ease"
}, $n = "transform", zo = /* @__PURE__ */ Le.Transition.toString({
  property: $n,
  duration: 0,
  easing: "linear"
}), Uo = {
  roleDescription: "sortable"
};
function Ho(e) {
  let {
    disabled: t,
    index: n,
    node: o,
    rect: i
  } = e;
  const [a, g] = m.useState(null), p = m.useRef(n);
  return we(() => {
    if (!t && n !== p.current && o.current) {
      const l = i.current;
      if (l) {
        const u = Xe(o.current, {
          ignoreTransform: !0
        }), y = {
          x: l.left - u.left,
          y: l.top - u.top,
          scaleX: l.width / u.width,
          scaleY: l.height / u.height
        };
        (y.x || y.y) && g(y);
      }
    }
    n !== p.current && (p.current = n);
  }, [t, n, o, i]), m.useEffect(() => {
    a && g(null);
  }, [a]), a;
}
function Bo(e) {
  let {
    animateLayoutChanges: t = Lo,
    attributes: n,
    disabled: o,
    data: i,
    getNewIndex: a = jo,
    id: g,
    strategy: p,
    resizeObserverConfig: l,
    transition: u = Yo
  } = e;
  const {
    items: y,
    containerId: d,
    activeIndex: c,
    disabled: v,
    disableTransforms: C,
    sortedRects: S,
    overIndex: T,
    useDragOverlay: A,
    strategy: k
  } = m.useContext(Bn), L = $o(o, v), H = y.indexOf(g), z = m.useMemo(() => ({
    sortable: {
      containerId: d,
      index: H,
      items: y
    },
    ...i
  }), [d, i, H, y]), $ = m.useMemo(() => y.slice(y.indexOf(g)), [y, g]), {
    rect: O,
    node: U,
    isOver: W,
    setNodeRef: V
  } = vo({
    id: g,
    data: z,
    disabled: L.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: $,
      ...l
    }
  }), {
    active: X,
    activatorEvent: B,
    activeNodeRect: ne,
    attributes: te,
    setNodeRef: ue,
    listeners: re,
    isDragging: J,
    over: he,
    setActivatorNodeRef: oe,
    transform: ve
  } = go({
    id: g,
    data: z,
    attributes: {
      ...Uo,
      ...n
    },
    disabled: L.draggable
  }), s = Zn(V, ue), h = !!X, E = h && !C && Et(c) && Et(T), R = !A && J, j = R && E ? ve : null, x = E ? j ?? (p ?? k)({
    rects: S,
    activeNodeRect: ne,
    activeIndex: c,
    overIndex: T,
    index: H
  }) : null, Q = Et(c) && Et(T) ? a({
    id: g,
    items: y,
    activeIndex: c,
    overIndex: T
  }) : H, G = X?.id, F = m.useRef({
    activeId: G,
    items: y,
    newIndex: Q,
    containerId: d
  }), Ae = y !== F.current.items, ye = t({
    active: X,
    containerId: d,
    isDragging: J,
    isSorting: h,
    id: g,
    index: H,
    items: y,
    newIndex: F.current.newIndex,
    previousItems: F.current.items,
    previousContainerId: F.current.containerId,
    transition: u,
    wasDragging: F.current.activeId != null
  }), Oe = Ho({
    disabled: !ye,
    index: H,
    node: U,
    rect: O
  });
  return m.useEffect(() => {
    h && F.current.newIndex !== Q && (F.current.newIndex = Q), d !== F.current.containerId && (F.current.containerId = d), y !== F.current.items && (F.current.items = y);
  }, [h, Q, d, y]), m.useEffect(() => {
    if (G === F.current.activeId)
      return;
    if (G != null && F.current.activeId == null) {
      F.current.activeId = G;
      return;
    }
    const Te = setTimeout(() => {
      F.current.activeId = G;
    }, 50);
    return () => clearTimeout(Te);
  }, [G]), {
    active: X,
    activeIndex: c,
    attributes: te,
    data: z,
    rect: O,
    index: H,
    newIndex: Q,
    items: y,
    isOver: W,
    isSorting: h,
    isDragging: J,
    listeners: re,
    node: U,
    overIndex: T,
    over: he,
    setNodeRef: s,
    setActivatorNodeRef: oe,
    setDroppableNodeRef: V,
    setDraggableNodeRef: ue,
    transform: Oe ?? x,
    transition: me()
  };
  function me() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Oe || // Or to prevent items jumping to back to their "new" position when items change
      Ae && F.current.newIndex === H
    )
      return zo;
    if (!(R && !kt(B) || !u) && (h || ye))
      return Le.Transition.toString({
        ...u,
        property: $n
      });
  }
}
function $o(e, t) {
  var n, o;
  return typeof e == "boolean" ? {
    draggable: e,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (n = e?.draggable) != null ? n : t.draggable,
    droppable: (o = e?.droppable) != null ? o : t.droppable
  };
}
K.Down, K.Right, K.Up, K.Left;
const Wo = ({ word: e }) => /* @__PURE__ */ le.jsx("div", { className: "px-4 py-3 rounded-lg border-2 font-medium text-lg bg-blue-100 border-blue-300 text-blue-800 shadow-xl rotate-2 scale-105", children: e.text }), Fo = ({ word: e }) => {
  const {
    attributes: t,
    listeners: n,
    setNodeRef: o,
    transform: i,
    transition: a,
    isDragging: g
  } = Bo({ id: e.id }), p = {
    transform: Le.Transform.toString(i),
    transition: a || "transform 200ms ease"
  };
  return /* @__PURE__ */ le.jsx(
    "div",
    {
      ref: o,
      style: p,
      ...t,
      ...n,
      className: `
        px-4 py-3 rounded-lg border-2 font-medium text-lg cursor-grab
        transition-all duration-200
        bg-blue-50 border-blue-200 text-blue-800
        hover:bg-blue-100 hover:border-blue-300
        ${g ? "cursor-grabbing shadow-xl z-50 rotate-2 scale-105" : "shadow-sm hover:shadow-md"}
        select-none
        touch-none
        shrink-0
      `,
      children: e.text
    }
  );
}, qo = ({ initialWords: e, correctSentence: t, onComplete: n }) => {
  const [o, i] = m.useState(e), [a, g] = m.useState(null), p = (v) => {
    g(v.active.id);
  }, l = (v) => {
    const { active: C, over: S } = v;
    if (g(null), !S) return;
    const T = o.findIndex((k) => k.id === C.id), A = o.findIndex((k) => k.id === S.id);
    T !== -1 && A !== -1 && T !== A && i((k) => Vt(k, T, A));
  }, u = () => {
    const C = o.map((S) => S.text).join(" ") === t;
    n?.(C), alert(C ? "Правильно! 🎉" : "Попробуйте еще раз!");
  }, y = () => {
    i([...e].sort(() => Math.random() - 0.5));
  }, d = () => {
    i([...e].sort((v, C) => v.correctOrder - C.correctOrder));
  }, c = a ? o.find((v) => v.id === a) : null;
  return /* @__PURE__ */ le.jsxs("div", { className: "max-w-4xl mx-auto p-6 space-y-8", children: [
    /* @__PURE__ */ le.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ le.jsx("h2", { className: "text-2xl font-bold text-center text-gray-800", children: "Составьте предложение в правильном порядке" }),
      /* @__PURE__ */ le.jsxs(co, { onDragStart: p, onDragEnd: l, children: [
        /* @__PURE__ */ le.jsx("div", { className: "p-8 bg-linear-to-br from-gray-50 to-blue-50 rounded-2xl border-2 border-gray-200 shadow-sm", children: /* @__PURE__ */ le.jsx(
          Io,
          {
            items: o.map((v) => v.id),
            strategy: Mo,
            children: /* @__PURE__ */ le.jsx("div", { className: "flex flex-wrap gap-4 justify-center items-center min-h-[100px]", children: o.map((v) => /* @__PURE__ */ le.jsx(Fo, { word: v }, v.id)) })
          }
        ) }),
        /* @__PURE__ */ le.jsx(xo, { children: c ? /* @__PURE__ */ le.jsx(Wo, { word: c }) : null })
      ] })
    ] }),
    /* @__PURE__ */ le.jsxs("div", { className: "flex gap-4 justify-center flex-wrap", children: [
      /* @__PURE__ */ le.jsx(
        "button",
        {
          onClick: u,
          className: "px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors shadow-sm",
          children: "Проверить"
        }
      ),
      /* @__PURE__ */ le.jsx(
        "button",
        {
          onClick: y,
          className: "px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors shadow-sm",
          children: "Сбросить"
        }
      ),
      /* @__PURE__ */ le.jsx(
        "button",
        {
          onClick: d,
          className: "px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-sm",
          children: "Показать ответ"
        }
      )
    ] }),
    /* @__PURE__ */ le.jsx("div", { className: "text-center text-gray-600 text-sm", children: "💡 Перетаскивайте слова чтобы составить предложение в правильном порядке" })
  ] });
};
export {
  qo as SentenceBuilder
};
