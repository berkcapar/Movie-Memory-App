;(this.webpackJsonploginsignup = this.webpackJsonploginsignup || []).push([
  [0],
  {
    16: function (e, t, n) {
      e.exports = n(40)
    },
    21: function (e, t, n) {},
    40: function (e, t, n) {
      "use strict"
      n.r(t)
      var a = n(0),
        r = n.n(a),
        l = n(15),
        u = n.n(l),
        c = (n(21), n(2)),
        o = n.n(c),
        i = n(4),
        s = n(3),
        m = n(5),
        d = n.n(m),
        p = {
          login: (function () {
            var e = Object(i.a)(
              o.a.mark(function e(t) {
                var n
                return o.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), d.a.post("/api/login", t)
                      case 2:
                        return (n = e.sent), e.abrupt("return", n.data)
                      case 4:
                      case "end":
                        return e.stop()
                    }
                }, e)
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })(),
        },
        v = {
          signup: (function () {
            var e = Object(i.a)(
              o.a.mark(function e(t) {
                var n
                return o.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), d.a.post("/api/users", t)
                      case 2:
                        return (n = e.sent), e.abrupt("return", n.data)
                      case 4:
                      case "end":
                        return e.stop()
                    }
                }, e)
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })(),
        },
        g = null,
        b = {
          setToken: function (e) {
            g = "bearer ".concat(e)
          },
          movies: (function () {
            var e = Object(i.a)(
              o.a.mark(function e(t) {
                var n, a
                return o.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = { headers: { Authorization: g } }),
                          (e.next = 3),
                          d.a.post("", t, n)
                        )
                      case 3:
                        return (a = e.sent), e.abrupt("return", a.data)
                      case 5:
                      case "end":
                        return e.stop()
                    }
                }, e)
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })(),
        },
        f = function (e) {
          var t = e.handleSubmit,
            n = e.handleEmailChange,
            a = e.handlePasswordChange,
            l = e.email,
            u = e.password
          return r.a.createElement(
            "div",
            { className: "loginform" },
            r.a.createElement("h2", null, "Let me in!"),
            r.a.createElement(
              "form",
              { onSubmit: t },
              r.a.createElement(
                "div",
                null,
                "Email:",
                r.a.createElement("input", {
                  type: "text",
                  name: "name",
                  value: l,
                  onChange: n,
                })
              ),
              r.a.createElement(
                "div",
                null,
                "Password:",
                r.a.createElement("input", {
                  type: "text",
                  name: "name",
                  value: u,
                  onChange: a,
                })
              ),
              r.a.createElement("button", { type: "submit" }, "Giri\u015f Yap")
            )
          )
        },
        h = function (e) {
          var t = Object(a.useState)(!1),
            n = Object(s.a)(t, 2),
            l = n[0],
            u = n[1],
            c = { display: l ? "none" : "" },
            o = { display: l ? "" : "none" },
            i = function () {
              u(!l)
            }
          return r.a.createElement(
            "div",
            { className: "toggles" },
            r.a.createElement(
              "div",
              { style: c },
              r.a.createElement("button", { onClick: i }, e.buttonLabel)
            ),
            r.a.createElement(
              "div",
              { style: o },
              e.children,
              r.a.createElement("button", { onClick: i }, "cancel")
            )
          )
        },
        E = function (e) {
          var t = e.handleSubmit,
            n = e.handleNewNameChange,
            a = e.handleNewEmailChange,
            l = e.handleNewPasswordChange,
            u = e.newName,
            c = e.newEmail,
            o = e.newPassword
          return r.a.createElement(
            "div",
            { className: "signupform" },
            r.a.createElement("h2", null, "Join Now! "),
            r.a.createElement(
              "form",
              { onSubmit: t },
              r.a.createElement(
                "div",
                null,
                "Name:",
                r.a.createElement("input", {
                  type: "text",
                  value: u,
                  name: "New Name",
                  onChange: n,
                })
              ),
              r.a.createElement(
                "div",
                null,
                "Email:",
                r.a.createElement("input", {
                  type: "text",
                  value: c,
                  name: "New Email",
                  onChange: a,
                })
              ),
              r.a.createElement(
                "div",
                null,
                "Password:",
                r.a.createElement("input", {
                  type: "password",
                  value: o,
                  name: "New Password",
                  onChange: l,
                })
              ),
              r.a.createElement("button", { type: "submit" }, "Join!")
            )
          )
        },
        w = function (e) {
          var t = e.message
          return null === t
            ? null
            : r.a.createElement("div", { className: "error" }, t)
        },
        O = function () {
          var e = Object(a.useState)([]),
            t = Object(s.a)(e, 2),
            n = (t[0], t[1], Object(a.useState)("")),
            l = Object(s.a)(n, 2),
            u = l[0],
            c = l[1],
            m = Object(a.useState)(""),
            d = Object(s.a)(m, 2),
            g = d[0],
            O = d[1],
            j = Object(a.useState)(null),
            S = Object(s.a)(j, 2),
            N = S[0],
            y = S[1],
            C = Object(a.useState)([]),
            k = Object(s.a)(C, 2),
            x = k[0],
            P = k[1],
            J = Object(a.useState)(""),
            L = Object(s.a)(J, 2),
            T = L[0],
            I = L[1],
            U = Object(a.useState)(""),
            A = Object(s.a)(U, 2),
            D = A[0],
            M = A[1],
            W = Object(a.useState)(""),
            z = Object(s.a)(W, 2),
            B = z[0],
            G = z[1],
            Y = Object(a.useState)(null),
            q = Object(s.a)(Y, 2),
            F = q[0],
            H = q[1]
          Object(a.useEffect)(function () {
            var e = window.localStorage.getItem("loggedUser")
            if (e) {
              var t = JSON.parse(e)
              y(t), b.setToken(t.token)
            }
          }, [])
          var K = (function () {
            var e = Object(i.a)(
              o.a.mark(function e(t) {
                var n
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (e.prev = 1),
                            (e.next = 4),
                            p.login({ email: u, password: g })
                          )
                        case 4:
                          ;(n = e.sent),
                            window.localStorage.setItem(
                              "loggedUser",
                              JSON.stringify(n)
                            ),
                            b.setToken(n.token),
                            y(n),
                            c(""),
                            O(""),
                            (e.next = 16)
                          break
                        case 12:
                          ;(e.prev = 12),
                            (e.t0 = e.catch(1)),
                            H("Wrong credentials"),
                            setTimeout(function () {
                              H(null)
                            }, 5e3)
                        case 16:
                        case "end":
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[1, 12]]
                )
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })()
          return N
            ? r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement("p", null, N.name, " logged in"),
                  r.a.createElement(
                    "button",
                    {
                      onClick: function () {
                        y(null), localStorage.removeItem("loggedUser")
                      },
                    },
                    "Log Out!"
                  )
                )
              )
            : r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "h2",
                  { className: "welcometext" },
                  "Welcome to Movie App!"
                ),
                r.a.createElement(w, { message: F }),
                r.a.createElement(
                  h,
                  { buttonLabel: "login" },
                  r.a.createElement(f, {
                    email: u,
                    password: g,
                    handleEmailChange: function (e) {
                      var t = e.target
                      return c(t.value)
                    },
                    handlePasswordChange: function (e) {
                      var t = e.target
                      return O(t.value)
                    },
                    handleSubmit: K,
                  })
                ),
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    h,
                    { buttonLabel: "Join" },
                    r.a.createElement(E, {
                      name: T,
                      email: D,
                      password: B,
                      handleNewNameChange: function (e) {
                        var t = e.target
                        return I(t.value)
                      },
                      handleNewEmailChange: function (e) {
                        var t = e.target
                        return M(t.value)
                      },
                      handleNewPasswordChange: function (e) {
                        var t = e.target
                        return G(t.value)
                      },
                      handleSubmit: function (e) {
                        e.preventDefault()
                        var t = { name: T, email: D, password: B }
                        B.length < 3
                          ? (H("Password should be longer than 3 charecters"),
                            setTimeout(function () {
                              H(null)
                            }, 5e3))
                          : v.signup(t).then(function (e) {
                              P(x.concat(e)), H("Succesfully joined!")
                            })
                      },
                    })
                  )
                )
              )
        }
      u.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(O, null)),
        document.getElementById("root")
      )
    },
  },
  [[16, 1, 2]],
])
//# sourceMappingURL=main.b6ff1bad.chunk.js.map
