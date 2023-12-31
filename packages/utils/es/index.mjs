function e() {
  return (
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop
  );
}
function t(e) {
  for (var t = { left: 0, top: 0 }, n = e; n; )
    (t.left += n.offsetLeft), (t.top += n.offsetTop), (n = n.offsetParent);
  return t;
}
function n(e) {
  return window.scrollTo(0, e), e;
}
const r =
  window.requestAnimationFrame ||
  function (e) {
    window.setTimeout(e, 1e3 / 60);
  };
function o(t, o) {
  if (o < 0) n(t);
  else {
    const a = t - e();
    if (0 !== a) {
      const f = (a / o) * 10;
      r(function () {
        Math.abs(f) > Math.abs(a)
          ? n(e() + a)
          : (n(e() + f),
            (a > 0 && e() >= t) || (0 > a && e() <= t) || scrollTo(t, o - 16));
      });
    }
  }
}
function a(e, t) {
  const n = window.innerHeight;
  (e = "function" == typeof e ? e : function () {}),
    (t = "function" == typeof t ? t : function () {}),
    window.addEventListener("resize", function () {
      const r = window.innerHeight;
      r === n && e(), n > r && t();
    });
}
function f(e) {
  let t;
  if (null == e || "object" != typeof e) return e;
  if (e instanceof Date) return (t = new Date()).setTime(e.getTime()), t;
  if (e instanceof Array) {
    t = [];
    for (let n = 0, r = e.length; r > n; n++) t[n] = f(e[n]);
    return t;
  }
  if (e instanceof Object) {
    for (const o in ((t = {}), e)) e.hasOwnProperty(o) && (t[o] = f(e[o]));
    return t;
  }
  throw Error("Unable to copy values! Its type isn't supported.");
}
function i(e) {
  return (
    !(!e || "object" != typeof e || Array.isArray(e)) && !Object.keys(e).length
  );
}
function u() {
  return (
    "#" + ("00000" + ((16777216 * Math.random()) << 0).toString(16)).slice(-6)
  );
}
function c(e, t) {
  return (
    (e = Math.ceil(e)),
    (t = Math.floor(t)),
    Math.floor(Math.random() * (t - e + 1)) + e
  );
}
function s(e) {
  return /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test(
    e
  );
}
function l(e) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(e);
}
function d(e) {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
    e
  );
}
function p(e) {
  return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(e + "");
}
function h(e) {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
    e
  );
}
function w(e) {
  const t = ["角", "分"],
    n = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"],
    r = [
      ["元", "万", "亿"],
      ["", "拾", "佰", "仟"],
    ],
    o = 0 > e ? "欠" : "";
  e = Math.abs(e);
  for (var a = "", f = 0; 2 > f; f++)
    a += (n[Math.floor(10 * e * Math.pow(10, f)) % 10] + t[f]).replace(
      /零./,
      ""
    );
  (a = a || "整"), (e = Math.floor(e));
  for (let i = 0; 3 > i && e > 0; i++) {
    for (var u = "", c = 0; 4 > c && e > 0; c++)
      (u = n[e % 10] + r[1][c] + u), (e = Math.floor(e / 10));
    a = u.replace(/(零.)*零$/, "").replace(/^$/, "零") + r[0][i] + a;
  }
  return (
    o +
    a
      .replace(/(零.)*零元/, "元")
      .replace(/(零.)+/g, "零")
      .replace(/^整$/, "零元整")
  );
}
function v(e) {
  const t = Date.parse("" + new Date()) - e,
    n = parseInt("" + t / 864e5),
    r = parseInt("" + t / 36e5),
    o = parseInt("" + t / 6e4),
    a = parseInt("" + n / 30),
    f = parseInt("" + a / 12);
  return f
    ? f + "年前"
    : a
    ? a + "个月前"
    : n
    ? n + "天前"
    : r
    ? r + "小时前"
    : o
    ? o + "分钟前"
    : "刚刚";
}
function g(e) {
  let t = new Date(),
    n = new Date(e).getTime() - t.getTime(),
    r = 0,
    o = 0,
    a = 0,
    f = 0;
  return (
    0 > n ||
      ((r = Math.floor(n / 1e3 / 3600 / 24)),
      (o = Math.floor((n / 1e3 / 60 / 60) % 24)),
      (a = Math.floor((n / 1e3 / 60) % 60)),
      (f = Math.floor((n / 1e3) % 60))),
    r + "天 " + o + "小时 " + a + "分钟 " + f + "秒"
  );
}
function m(e) {
  return 0 == e % 4 && (e % 100 != 0 || e % 400 == 0);
}
function M(e, t) {
  t || (t = new Date());
  const n = e.getFullYear(),
    r = e.getMonth() + 1,
    o = e.getDate(),
    a = t.getFullYear(),
    f = t.getMonth() + 1;
  return o === t.getDate() && r === f && n === a;
}
function D(e) {
  const t = (e = new Date(e)).getFullYear(),
    n = e.getMonth() + 1;
  return new Date(t, n, 0).getDate();
}
function b(e, t) {
  if (e && t) {
    let n;
    n = e instanceof Date ? e : new Date(e.replace(/-/g, "/"));
    let r =
        (t instanceof Date ? t : new Date(t.replace(/-/g, "/"))).getTime() -
        n.getTime(),
      o = 0,
      a = 0,
      f = 0,
      i = 0;
    return (
      0 > r ||
        ((o = Math.floor(r / 1e3 / 3600 / 24)),
        (a = Math.floor((r / 1e3 / 60 / 60) % 24)),
        (f = Math.floor((r / 1e3 / 60) % 60)),
        (i = Math.floor((r / 1e3) % 60))),
      { d: o, h: a, m: f, s: i }
    );
  }
}
function y(e) {
  if (-1 === (e = e || window.location.href).indexOf("?")) return {};
  let t = "?" === e[0] ? e.substr(1) : e.substring(e.lastIndexOf("?") + 1);
  if ("" === t) return {};
  t = t.split("&");
  for (var n = {}, r = 0; t.length > r; r++) {
    const o = t[r].split("=");
    n[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "");
  }
  return n;
}
function I(e) {
  if (!e) return "";
  const t = [];
  for (const n in e) {
    const r = e[n];
    if (r instanceof Array)
      for (let o = 0; r.length > o; ++o)
        t.push(
          encodeURIComponent(n + "[" + o + "]") + "=" + encodeURIComponent(r[o])
        );
    else t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  }
  return t.join("&");
}
export {
  f as deepClone,
  w as digitUppercase,
  v as formatPassTime,
  g as formatRemainTime,
  D as getMonthDays,
  t as getOffset,
  e as getScrollTop,
  b as getTimeLeft,
  s as isColor,
  l as isEmail,
  i as isEmptyObject,
  d as isIdCard,
  m as isLeapYear,
  p as isPhoneNum,
  M as isSameDay,
  h as isUrl,
  y as parseQueryString,
  u as randomColor,
  c as randomNum,
  o as setScrollTo,
  n as setScrollTop,
  I as stringfyQueryString,
  a as windowResize,
};
