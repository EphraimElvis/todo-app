(() => {
  "use strict";
  var e = {
      28: (e, t, n) => {
        n.d(t, { Z: () => l });
        var o = n(645),
          i = n.n(o)()(function (e) {
            return e[1];
          });
        i.push([
          e.id,
          "\nbody {\n    background-color: #f5f5f5;\n    color: #4d4d4d;\n}\n\nheader {\n    text-align: center;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\nh1 {\n    font-size: 60px;\n    margin-bottom: 20px;\n}\n\n.completed {\n    text-decoration: line-through;\n}\n\n.fas .fa-trash-alt {\n    color: darkslategray;\n    font-size: 1rem;\n    cursor: pointer;\n}\n\n.view span.toggle {\n    display: block;\n    position: absolute;\n}\n\n.view .toggle {\n    margin: .9rem;\n}\n\n.view {\n    width: 100%;\n    display: inline-flex;\n}\n\n.todo-list li {\n    display: flex;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    border-top: 1px solid #d0c9c9;\n    height: 40px;\n    border-left: none;\n    border-right: none;\n}\n\n.todo-list li:last-child {\n    border-bottom: none;\n}\n\nlabel {\n    display: inline-block;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    color: #424543;\n}\n\nli a {\n    text-decoration: none;\n    color: #4d4d4d;\n}\n\nli a:visited {\n    color: #4d4d4d;\n}\n\n.selected {\n    border: 1px solid rgb(197, 174, 174);\n    padding: 0.4rem 3.3rem;\n    border-radius: 5px;\n} \n\nsection.todoapp{\n    margin: 0 auto;\n    width: 60%;\n}\n\n.new-todo {\n    width: 97%;\n    outline: none;\n    margin: 0;\n    font-size: 1.5em;\n    font-weight: normal;\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    padding: .8rem;\n    border-radius: 0%;\n    border: 1px solid #d0c9c9;;\n}\n\nul.todo-list {\n    margin: 0;\n    padding: 0;\n}\n\n.edit {\n    width: 100%;\n    font-size: 1.2rem;\n    padding: .4rem;\n    outline: none;\n    border-radius: 0%;\n    border-left: .7px solid #b0acac;\n    border-bottom: none;\n    border-top: none;\n    border-right: 0;\n}\n\nlabel {\n    font-size: 1.2rem;\n    padding: .4rem;\n    width: 90%;\n}\n\nsection.main {\n    margin: 0 auto;\n    width: 100%;\n    display: block;\n    border: 1px solid #d3cccc;\n}\n\n/* footer {\n    display: none;\n} */\n\nul.filter li {\n    display: inline-block;\n    width: 20%;\n    text-align: center;\n    border-radius: 6px;\n    cursor: pointer;\n    height: 20px;\n}\n\n.hideList {\n    display: none;\n}\n",
          "",
        ]);
        const l = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = e(t);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
              }).join("");
            }),
            (t.i = function (e, n, o) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var i = {};
              if (o)
                for (var l = 0; l < this.length; l++) {
                  var r = this[l][0];
                  null != r && (i[r] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var s = [].concat(e[d]);
                (o && i[s[0]]) ||
                  (n &&
                    (s[2]
                      ? (s[2] = "".concat(n, " and ").concat(s[2]))
                      : (s[2] = n)),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      379: (e, t, n) => {
        var o,
          i = (function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                e[t] = n;
              }
              return e[t];
            };
          })(),
          l = [];
        function r(e) {
          for (var t = -1, n = 0; n < l.length; n++)
            if (l[n].identifier === e) {
              t = n;
              break;
            }
          return t;
        }
        function d(e, t) {
          for (var n = {}, o = [], i = 0; i < e.length; i++) {
            var d = e[i],
              s = t.base ? d[0] + t.base : d[0],
              a = n[s] || 0,
              c = "".concat(s, " ").concat(a);
            n[s] = a + 1;
            var u = r(c),
              p = { css: d[1], media: d[2], sourceMap: d[3] };
            -1 !== u
              ? (l[u].references++, l[u].updater(p))
              : l.push({ identifier: c, updater: h(p, t), references: 1 }),
              o.push(c);
          }
          return o;
        }
        function s(e) {
          var t = document.createElement("style"),
            o = e.attributes || {};
          if (void 0 === o.nonce) {
            var l = n.nc;
            l && (o.nonce = l);
          }
          if (
            (Object.keys(o).forEach(function (e) {
              t.setAttribute(e, o[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(t);
          else {
            var r = i(e.insert || "head");
            if (!r)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            r.appendChild(t);
          }
          return t;
        }
        var a,
          c =
            ((a = []),
            function (e, t) {
              return (a[e] = t), a.filter(Boolean).join("\n");
            });
        function u(e, t, n, o) {
          var i = n
            ? ""
            : o.media
            ? "@media ".concat(o.media, " {").concat(o.css, "}")
            : o.css;
          if (e.styleSheet) e.styleSheet.cssText = c(t, i);
          else {
            var l = document.createTextNode(i),
              r = e.childNodes;
            r[t] && e.removeChild(r[t]),
              r.length ? e.insertBefore(l, r[t]) : e.appendChild(l);
          }
        }
        function p(e, t, n) {
          var o = n.css,
            i = n.media,
            l = n.sourceMap;
          if (
            (i ? e.setAttribute("media", i) : e.removeAttribute("media"),
            l &&
              "undefined" != typeof btoa &&
              (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(l)))),
                " */"
              )),
            e.styleSheet)
          )
            e.styleSheet.cssText = o;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(o));
          }
        }
        var m = null,
          f = 0;
        function h(e, t) {
          var n, o, i;
          if (t.singleton) {
            var l = f++;
            (n = m || (m = s(t))),
              (o = u.bind(null, n, l, !1)),
              (i = u.bind(null, n, l, !0));
          } else
            (n = s(t)),
              (o = p.bind(null, n, t)),
              (i = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(n);
              });
          return (
            o(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                o((e = t));
              } else i();
            }
          );
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton ||
            "boolean" == typeof t.singleton ||
            (t.singleton =
              (void 0 === o &&
                (o = Boolean(
                  window && document && document.all && !window.atob
                )),
              o));
          var n = d((e = e || []), t);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var o = 0; o < n.length; o++) {
                var i = r(n[o]);
                l[i].references--;
              }
              for (var s = d(e, t), a = 0; a < n.length; a++) {
                var c = r(n[a]);
                0 === l[c].references && (l[c].updater(), l.splice(c, 1));
              }
              n = s;
            }
          };
        };
      },
    },
    t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var i = (t[o] = { id: o, exports: {} });
    return e[o](i, i.exports, n), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = n(379),
        t = n.n(e),
        o = n(28);
      t()(o.Z, { insert: "head", singleton: !1 }), o.Z.locals;
      const i = document.querySelector(".new-todo"),
        l = document.querySelector(".todo-list"),
        r = document.createDocumentFragment(),
        d =
          (document.querySelector("input"),
          document.querySelector(".edit"),
          document.querySelector(".filter")),
        s = document.querySelectorAll(".filter li a"),
        a = document.querySelector(".clear-Completed"),
        c = document.querySelector('a[href="#/completed"]'),
        u = document.querySelector('a[href="#/active"]'),
        p = document.querySelector('a[href="#/"]');
      let m = "#/";
      d.style.display = "none";
      const f = {
        id: -1,
        listId: -1,
        index: -1,
        todoList: [],
        completed: [],
        allTodoList: [],
        ENTER_KEY: "Enter",
        activeBtn: !1,
        completedBtn: !1,
      };
      function h(e) {
        (f.listId += 1),
          (f.id += 1),
          (f.index += 1),
          f.todoList.push({ id: f.listId, name: e }),
          f.allTodoList.push({ id: f.listId, name: e });
        const t = document.createElement("li"),
          n = document.createElement("input"),
          o = document.createElement("span"),
          i = document.createElement("input"),
          d = document.createElement("label"),
          s = document.createElement("div");
        (i.style.display = "none"),
          s.classList.add("view"),
          n.classList.add("toggle"),
          o.classList.add("toggle"),
          (t.dataset.listItemId = f.index),
          (d.textContent = e),
          (i.value = e),
          (d.style.display = "inline-block"),
          n.setAttribute("type", "checkbox"),
          d.addEventListener("dblclick", (e) => {
            i.setAttribute("style", "display: inline-block"),
              i.classList.add("edit"),
              t.classList.add("editing"),
              (d.style.display = "none"),
              (t.style.display = "flex"),
              (s.style.width = "4%");
          }),
          n.addEventListener("change", (o) => {
            let i = Number(t.dataset.listItemId);
            if (n.checked) {
              d.classList.add("completed"),
                t.classList.add("completed"),
                "#/" == m
                  ? f.completed.push({ id: i, task: d.textContent })
                  : ("#/active" != m && "#/completed" != m) ||
                    (f.completed.push({ id: i, task: d.textContent }),
                    (t.style.display = "none"));
              const e = f.todoList.filter((e, t) => {
                if (e.id !== i) return e;
              });
              f.todoList = e;
            } else {
              let e = Number(t.dataset.listItemId);
              d.textContent,
                d.classList.remove("completed"),
                t.classList.remove("completed"),
                d.removeAttribute("class"),
                t.removeAttribute("class");
              const n = f.completed.filter((t, n) => {
                if (t.id !== e) return console.log(t), t;
              });
              f.completed = n;
            }
            "#/" == m
              ? f.todoList.push({ id: i, name: e })
              : ("#/active" != m && "#/completed" != m) ||
                (f.todoList.push({ id: i, name: e }),
                (t.style.display = "none"));
          }),
          i.addEventListener("keydown", (e) => {
            let n = Number(t.dataset.listItemId);
            e.code == f.ENTER_KEY &&
              ((d.textContent = i.value),
              (f.todoList[n].name = i.value),
              t.classList.remove("editing"),
              i.classList.remove("edit"),
              (i.style.display = "none"),
              d.setAttribute("style", "display: inline-block"),
              (s.style.width = "100%"),
              d.removeAttribute("style"),
              s.removeAttribute("style"),
              t.removeAttribute("style"));
          }),
          t.appendChild(s),
          s.appendChild(n),
          s.appendChild(o),
          s.appendChild(d),
          t.appendChild(i),
          r.appendChild(t),
          l.appendChild(r);
      }
      i.addEventListener("keydown", (e) => {
        if (e.code === f.ENTER_KEY)
          if (0 !== i.value.length) {
            if ("#/completed" == m) {
              h(i.value);
              const e = document.querySelectorAll(".todo-list li");
              for (let t = 0; t < e.length; t++)
                "completed" == e[t].classList.value
                  ? (e[t].style.display = "block")
                  : (e[t].style.display = "none");
            } else h(i.value);
            (d.style.display = "block"), (i.value = "");
          } else i.value = "";
      }),
        a.addEventListener("click", (e) => {
          const t = document.querySelectorAll(".completed");
          let n = t.length,
            o = 0;
          for (; o < n; )
            t[o].remove(),
              console.log("Deleted......", o),
              (f.completed = []),
              (o += 1);
        }),
        c.addEventListener("click", (e) => {
          const t = document.querySelectorAll(".todo-list li");
          m = e.target.hash;
          for (let e = 0; e < s.length; e++)
            s[e].hash == m
              ? s[e].classList.add("selected")
              : s[e].classList.remove("selected");
          for (let e = 0; e < t.length; e++)
            console.log(t[e]),
              "completed" == t[e].classList.value
                ? (t[e].style.display = "block")
                : (t[e].style.display = "none");
        }),
        u.addEventListener("click", (e) => {
          const t = document.querySelectorAll(".todo-list li");
          m = e.target.hash;
          for (let e = 0; e < s.length; e++)
            s[e].hash == m
              ? s[e].classList.add("selected")
              : s[e].classList.remove("selected");
          for (let e = 0; e < t.length; e++)
            "completed" !== t[e].classList.value
              ? (t[e].style.display = "block")
              : (t[e].style.display = "none");
        }),
        p.addEventListener("click", (e) => {
          const t = document.querySelectorAll(".todo-list li");
          m = e.target.hash;
          for (let e = 0; e < s.length; e++)
            s[e].hash == m
              ? s[e].classList.add("selected")
              : s[e].classList.remove("selected");
          for (let e = 0; e < t.length; e++) t[e].style.display = "block";
        });
    })();
})();
