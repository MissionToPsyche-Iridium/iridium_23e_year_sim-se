let ft, ta;
let __tla = (async () => {
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
    new MutationObserver((i) => {
      for (const s of i) if (s.type === "childList") for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function t(i) {
      const s = {};
      return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
    }
    function n(i) {
      if (i.ep) return;
      i.ep = true;
      const s = t(i);
      fetch(i.href, s);
    }
  })();
  const Nu = "173", cg = 0, Hh = 1, ug = 2, Gf = 1, hg = 2, fi = 3, Ai = 0, ln = 1, $n = 2, Ti = 0, hs = 1, Ka = 2, Gh = 3, Wh = 4, dg = 5, _r = 100, fg = 101, pg = 102, mg = 103, gg = 104, _g = 200, xg = 201, vg = 202, yg = 203, xc = 204, vc = 205, Sg = 206, Mg = 207, Eg = 208, Tg = 209, bg = 210, wg = 211, Ag = 212, Cg = 213, Rg = 214, yc = 0, Sc = 1, Mc = 2, ys = 3, Ec = 4, Tc = 5, bc = 6, wc = 7, Wf = 0, Pg = 1, Lg = 2, $i = 0, Dg = 1, Ig = 2, Ng = 3, Ug = 4, Og = 5, Fg = 6, Bg = 7, Xh = "attached", zg = "detached", Xf = 300, Ss = 301, Ms = 302, Ac = 303, Cc = 304, hl = 306, Es = 1e3, Hi = 1001, ja = 1002, nn = 1003, qf = 1004, po = 1005, Sn = 1006, Fa = 1007, Si = 1008, Ci = 1009, Yf = 1010, $f = 1011, Uo = 1012, Uu = 1013, Dr = 1014, Gn = 1015, bi = 1016, Ou = 1017, Fu = 1018, Ts = 1020, Kf = 35902, jf = 1021, Zf = 1022, Dn = 1023, Jf = 1024, Qf = 1025, ds = 1026, bs = 1027, Bu = 1028, zu = 1029, ep = 1030, ku = 1031, Vu = 1033, Ba = 33776, za = 33777, ka = 33778, Va = 33779, Rc = 35840, Pc = 35841, Lc = 35842, Dc = 35843, Ic = 36196, Nc = 37492, Uc = 37496, Oc = 37808, Fc = 37809, Bc = 37810, zc = 37811, kc = 37812, Vc = 37813, Hc = 37814, Gc = 37815, Wc = 37816, Xc = 37817, qc = 37818, Yc = 37819, $c = 37820, Kc = 37821, Ha = 36492, jc = 36494, Zc = 36495, tp = 36283, Jc = 36284, Qc = 36285, eu = 36286, Oo = 2300, Fo = 2301, Sl = 2302, qh = 2400, Yh = 2401, $h = 2402, kg = 2500, Vg = 0, np = 1, tu = 2, Hg = 3200, Gg = 3201, ip = 0, Wg = 1, ki = "", kt = "srgb", sn = "srgb-linear", Za = "linear", dt = "srgb", Wr = 7680, Kh = 519, Xg = 512, qg = 513, Yg = 514, rp = 515, $g = 516, Kg = 517, jg = 518, Zg = 519, nu = 35044, jh = "300 es", Mi = 2e3, Ja = 2001;
  class zs {
    addEventListener(e, t) {
      this._listeners === void 0 && (this._listeners = {});
      const n = this._listeners;
      n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
    }
    hasEventListener(e, t) {
      const n = this._listeners;
      return n === void 0 ? false : n[e] !== void 0 && n[e].indexOf(t) !== -1;
    }
    removeEventListener(e, t) {
      const n = this._listeners;
      if (n === void 0) return;
      const i = n[e];
      if (i !== void 0) {
        const s = i.indexOf(t);
        s !== -1 && i.splice(s, 1);
      }
    }
    dispatchEvent(e) {
      const t = this._listeners;
      if (t === void 0) return;
      const n = t[e.type];
      if (n !== void 0) {
        e.target = this;
        const i = n.slice(0);
        for (let s = 0, o = i.length; s < o; s++) i[s].call(this, e);
        e.target = null;
      }
    }
  }
  const Wt = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff"
  ];
  let Zh = 1234567;
  const vo = Math.PI / 180, ws = 180 / Math.PI;
  function Nn() {
    const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
    return (Wt[r & 255] + Wt[r >> 8 & 255] + Wt[r >> 16 & 255] + Wt[r >> 24 & 255] + "-" + Wt[e & 255] + Wt[e >> 8 & 255] + "-" + Wt[e >> 16 & 15 | 64] + Wt[e >> 24 & 255] + "-" + Wt[t & 63 | 128] + Wt[t >> 8 & 255] + "-" + Wt[t >> 16 & 255] + Wt[t >> 24 & 255] + Wt[n & 255] + Wt[n >> 8 & 255] + Wt[n >> 16 & 255] + Wt[n >> 24 & 255]).toLowerCase();
  }
  function He(r, e, t) {
    return Math.max(e, Math.min(t, r));
  }
  function Hu(r, e) {
    return (r % e + e) % e;
  }
  function Jg(r, e, t, n, i) {
    return n + (r - e) * (i - n) / (t - e);
  }
  function Qg(r, e, t) {
    return r !== e ? (t - r) / (e - r) : 0;
  }
  function yo(r, e, t) {
    return (1 - t) * r + t * e;
  }
  function e_(r, e, t, n) {
    return yo(r, e, 1 - Math.exp(-t * n));
  }
  function t_(r, e = 1) {
    return e - Math.abs(Hu(r, e * 2) - e);
  }
  function n_(r, e, t) {
    return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
  }
  function i_(r, e, t) {
    return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
  }
  function r_(r, e) {
    return r + Math.floor(Math.random() * (e - r + 1));
  }
  function s_(r, e) {
    return r + Math.random() * (e - r);
  }
  function o_(r) {
    return r * (0.5 - Math.random());
  }
  function a_(r) {
    r !== void 0 && (Zh = r);
    let e = Zh += 1831565813;
    return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
  }
  function l_(r) {
    return r * vo;
  }
  function c_(r) {
    return r * ws;
  }
  function u_(r) {
    return (r & r - 1) === 0 && r !== 0;
  }
  function h_(r) {
    return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
  }
  function d_(r) {
    return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
  }
  function f_(r, e, t, n, i) {
    const s = Math.cos, o = Math.sin, a = s(t / 2), l = o(t / 2), c = s((e + n) / 2), u = o((e + n) / 2), h = s((e - n) / 2), d = o((e - n) / 2), f = s((n - e) / 2), _ = o((n - e) / 2);
    switch (i) {
      case "XYX":
        r.set(a * u, l * h, l * d, a * c);
        break;
      case "YZY":
        r.set(l * d, a * u, l * h, a * c);
        break;
      case "ZXZ":
        r.set(l * h, l * d, a * u, a * c);
        break;
      case "XZX":
        r.set(a * u, l * _, l * f, a * c);
        break;
      case "YXY":
        r.set(l * f, a * u, l * _, a * c);
        break;
      case "ZYZ":
        r.set(l * _, l * f, a * u, a * c);
        break;
      default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
    }
  }
  function Vn(r, e) {
    switch (e.constructor) {
      case Float32Array:
        return r;
      case Uint32Array:
        return r / 4294967295;
      case Uint16Array:
        return r / 65535;
      case Uint8Array:
        return r / 255;
      case Int32Array:
        return Math.max(r / 2147483647, -1);
      case Int16Array:
        return Math.max(r / 32767, -1);
      case Int8Array:
        return Math.max(r / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function lt(r, e) {
    switch (e.constructor) {
      case Float32Array:
        return r;
      case Uint32Array:
        return Math.round(r * 4294967295);
      case Uint16Array:
        return Math.round(r * 65535);
      case Uint8Array:
        return Math.round(r * 255);
      case Int32Array:
        return Math.round(r * 2147483647);
      case Int16Array:
        return Math.round(r * 32767);
      case Int8Array:
        return Math.round(r * 127);
      default:
        throw new Error("Invalid component type.");
    }
  }
  const p_ = {
    DEG2RAD: vo,
    RAD2DEG: ws,
    generateUUID: Nn,
    clamp: He,
    euclideanModulo: Hu,
    mapLinear: Jg,
    inverseLerp: Qg,
    lerp: yo,
    damp: e_,
    pingpong: t_,
    smoothstep: n_,
    smootherstep: i_,
    randInt: r_,
    randFloat: s_,
    randFloatSpread: o_,
    seededRandom: a_,
    degToRad: l_,
    radToDeg: c_,
    isPowerOfTwo: u_,
    ceilPowerOfTwo: h_,
    floorPowerOfTwo: d_,
    setQuaternionFromProperEuler: f_,
    normalize: lt,
    denormalize: Vn
  };
  class ee {
    constructor(e = 0, t = 0) {
      ee.prototype.isVector2 = true, this.x = e, this.y = t;
    }
    get width() {
      return this.x;
    }
    set width(e) {
      this.x = e;
    }
    get height() {
      return this.y;
    }
    set height(e) {
      this.y = e;
    }
    set(e, t) {
      return this.x = e, this.y = t, this;
    }
    setScalar(e) {
      return this.x = e, this.y = e, this;
    }
    setX(e) {
      return this.x = e, this;
    }
    setY(e) {
      return this.y = e, this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(e) {
      return this.x = e.x, this.y = e.y, this;
    }
    add(e) {
      return this.x += e.x, this.y += e.y, this;
    }
    addScalar(e) {
      return this.x += e, this.y += e, this;
    }
    addVectors(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this;
    }
    addScaledVector(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this;
    }
    sub(e) {
      return this.x -= e.x, this.y -= e.y, this;
    }
    subScalar(e) {
      return this.x -= e, this.y -= e, this;
    }
    subVectors(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this;
    }
    multiply(e) {
      return this.x *= e.x, this.y *= e.y, this;
    }
    multiplyScalar(e) {
      return this.x *= e, this.y *= e, this;
    }
    divide(e) {
      return this.x /= e.x, this.y /= e.y, this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
      const t = this.x, n = this.y, i = e.elements;
      return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
    }
    min(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
    }
    max(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
    }
    clamp(e, t) {
      return this.x = He(this.x, e.x, t.x), this.y = He(this.y, e.y, t.y), this;
    }
    clampScalar(e, t) {
      return this.x = He(this.x, e, t), this.y = He(this.y, e, t), this;
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(He(n, e, t));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(e) {
      const t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      const n = this.dot(e) / t;
      return Math.acos(He(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      const t = this.x - e.x, n = this.y - e.y;
      return t * t + n * n;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
    }
    lerpVectors(e, t, n) {
      return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
    }
    equals(e) {
      return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
      return this.x = e[t], this.y = e[t + 1], this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this.x, e[t + 1] = this.y, e;
    }
    fromBufferAttribute(e, t) {
      return this.x = e.getX(t), this.y = e.getY(t), this;
    }
    rotateAround(e, t) {
      const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
      return this.x = s * n - o * i + e.x, this.y = s * i + o * n + e.y, this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  }
  class ze {
    constructor(e, t, n, i, s, o, a, l, c) {
      ze.prototype.isMatrix3 = true, this.elements = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ], e !== void 0 && this.set(e, t, n, i, s, o, a, l, c);
    }
    set(e, t, n, i, s, o, a, l, c) {
      const u = this.elements;
      return u[0] = e, u[1] = i, u[2] = a, u[3] = t, u[4] = s, u[5] = l, u[6] = n, u[7] = o, u[8] = c, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(e) {
      const t = this.elements, n = e.elements;
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
    }
    extractBasis(e, t, n) {
      return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(e) {
      const t = e.elements;
      return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements, i = t.elements, s = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], u = n[4], h = n[7], d = n[2], f = n[5], _ = n[8], g = i[0], m = i[3], p = i[6], y = i[1], v = i[4], x = i[7], w = i[2], b = i[5], A = i[8];
      return s[0] = o * g + a * y + l * w, s[3] = o * m + a * v + l * b, s[6] = o * p + a * x + l * A, s[1] = c * g + u * y + h * w, s[4] = c * m + u * v + h * b, s[7] = c * p + u * x + h * A, s[2] = d * g + f * y + _ * w, s[5] = d * m + f * v + _ * b, s[8] = d * p + f * x + _ * A, this;
    }
    multiplyScalar(e) {
      const t = this.elements;
      return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
    }
    determinant() {
      const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8];
      return t * o * u - t * a * c - n * s * u + n * a * l + i * s * c - i * o * l;
    }
    invert() {
      const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = u * o - a * c, d = a * l - u * s, f = c * s - o * l, _ = t * h + n * d + i * f;
      if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const g = 1 / _;
      return e[0] = h * g, e[1] = (i * c - u * n) * g, e[2] = (a * n - i * o) * g, e[3] = d * g, e[4] = (u * t - i * l) * g, e[5] = (i * s - a * t) * g, e[6] = f * g, e[7] = (n * l - c * t) * g, e[8] = (o * t - n * s) * g, this;
    }
    transpose() {
      let e;
      const t = this.elements;
      return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
    }
    getNormalMatrix(e) {
      return this.setFromMatrix4(e).invert().transpose();
    }
    transposeIntoArray(e) {
      const t = this.elements;
      return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
    }
    setUvTransform(e, t, n, i, s, o, a) {
      const l = Math.cos(s), c = Math.sin(s);
      return this.set(n * l, n * c, -n * (l * o + c * a) + o + e, -i * c, i * l, -i * (-c * o + l * a) + a + t, 0, 0, 1), this;
    }
    scale(e, t) {
      return this.premultiply(Ml.makeScale(e, t)), this;
    }
    rotate(e) {
      return this.premultiply(Ml.makeRotation(-e)), this;
    }
    translate(e, t) {
      return this.premultiply(Ml.makeTranslation(e, t)), this;
    }
    makeTranslation(e, t) {
      return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
    }
    makeRotation(e) {
      const t = Math.cos(e), n = Math.sin(e);
      return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
    }
    makeScale(e, t) {
      return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
    }
    equals(e) {
      const t = this.elements, n = e.elements;
      for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return false;
      return true;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.elements;
      return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  const Ml = new ze();
  function sp(r) {
    for (let e = r.length - 1; e >= 0; --e) if (r[e] >= 65535) return true;
    return false;
  }
  function Bo(r) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", r);
  }
  function m_() {
    const r = Bo("canvas");
    return r.style.display = "block", r;
  }
  const Jh = {};
  function os(r) {
    r in Jh || (Jh[r] = true, console.warn(r));
  }
  function g_(r, e, t) {
    return new Promise(function(n, i) {
      function s() {
        switch (r.clientWaitSync(e, r.SYNC_FLUSH_COMMANDS_BIT, 0)) {
          case r.WAIT_FAILED:
            i();
            break;
          case r.TIMEOUT_EXPIRED:
            setTimeout(s, t);
            break;
          default:
            n();
        }
      }
      setTimeout(s, t);
    });
  }
  function __(r) {
    const e = r.elements;
    e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
  }
  function x_(r) {
    const e = r.elements;
    e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
  }
  const Qh = new ze().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), ed = new ze().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
  function v_() {
    const r = {
      enabled: true,
      workingColorSpace: sn,
      spaces: {},
      convert: function(i, s, o) {
        return this.enabled === false || s === o || !s || !o || (this.spaces[s].transfer === dt && (i.r = wi(i.r), i.g = wi(i.g), i.b = wi(i.b)), this.spaces[s].primaries !== this.spaces[o].primaries && (i.applyMatrix3(this.spaces[s].toXYZ), i.applyMatrix3(this.spaces[o].fromXYZ)), this.spaces[o].transfer === dt && (i.r = fs(i.r), i.g = fs(i.g), i.b = fs(i.b))), i;
      },
      fromWorkingColorSpace: function(i, s) {
        return this.convert(i, this.workingColorSpace, s);
      },
      toWorkingColorSpace: function(i, s) {
        return this.convert(i, s, this.workingColorSpace);
      },
      getPrimaries: function(i) {
        return this.spaces[i].primaries;
      },
      getTransfer: function(i) {
        return i === ki ? Za : this.spaces[i].transfer;
      },
      getLuminanceCoefficients: function(i, s = this.workingColorSpace) {
        return i.fromArray(this.spaces[s].luminanceCoefficients);
      },
      define: function(i) {
        Object.assign(this.spaces, i);
      },
      _getMatrix: function(i, s, o) {
        return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ);
      },
      _getDrawingBufferColorSpace: function(i) {
        return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function(i = this.workingColorSpace) {
        return this.spaces[i].workingColorSpaceConfig.unpackColorSpace;
      }
    }, e = [
      0.64,
      0.33,
      0.3,
      0.6,
      0.15,
      0.06
    ], t = [
      0.2126,
      0.7152,
      0.0722
    ], n = [
      0.3127,
      0.329
    ];
    return r.define({
      [sn]: {
        primaries: e,
        whitePoint: n,
        transfer: Za,
        toXYZ: Qh,
        fromXYZ: ed,
        luminanceCoefficients: t,
        workingColorSpaceConfig: {
          unpackColorSpace: kt
        },
        outputColorSpaceConfig: {
          drawingBufferColorSpace: kt
        }
      },
      [kt]: {
        primaries: e,
        whitePoint: n,
        transfer: dt,
        toXYZ: Qh,
        fromXYZ: ed,
        luminanceCoefficients: t,
        outputColorSpaceConfig: {
          drawingBufferColorSpace: kt
        }
      }
    }), r;
  }
  const $e = v_();
  function wi(r) {
    return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
  }
  function fs(r) {
    return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
  }
  let Xr;
  class y_ {
    static getDataURL(e) {
      if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
      let t;
      if (e instanceof HTMLCanvasElement) t = e;
      else {
        Xr === void 0 && (Xr = Bo("canvas")), Xr.width = e.width, Xr.height = e.height;
        const n = Xr.getContext("2d");
        e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Xr;
      }
      return t.toDataURL("image/png");
    }
    static sRGBToLinear(e) {
      if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
        const t = Bo("canvas");
        t.width = e.width, t.height = e.height;
        const n = t.getContext("2d");
        n.drawImage(e, 0, 0, e.width, e.height);
        const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
        for (let o = 0; o < s.length; o++) s[o] = wi(s[o] / 255) * 255;
        return n.putImageData(i, 0, 0), t;
      } else if (e.data) {
        const t = e.data.slice(0);
        for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(wi(t[n] / 255) * 255) : t[n] = wi(t[n]);
        return {
          data: t,
          width: e.width,
          height: e.height
        };
      } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
    }
  }
  let S_ = 0;
  class op {
    constructor(e = null) {
      this.isSource = true, Object.defineProperty(this, "id", {
        value: S_++
      }), this.uuid = Nn(), this.data = e, this.dataReady = true, this.version = 0;
    }
    set needsUpdate(e) {
      e === true && this.version++;
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string";
      if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
      const n = {
        uuid: this.uuid,
        url: ""
      }, i = this.data;
      if (i !== null) {
        let s;
        if (Array.isArray(i)) {
          s = [];
          for (let o = 0, a = i.length; o < a; o++) i[o].isDataTexture ? s.push(El(i[o].image)) : s.push(El(i[o]));
        } else s = El(i);
        n.url = s;
      }
      return t || (e.images[this.uuid] = n), n;
    }
  }
  function El(r) {
    return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? y_.getDataURL(r) : r.data ? {
      data: Array.from(r.data),
      width: r.width,
      height: r.height,
      type: r.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  let M_ = 0;
  class Nt extends zs {
    constructor(e = Nt.DEFAULT_IMAGE, t = Nt.DEFAULT_MAPPING, n = Hi, i = Hi, s = Sn, o = Si, a = Dn, l = Ci, c = Nt.DEFAULT_ANISOTROPY, u = ki) {
      super(), this.isTexture = true, Object.defineProperty(this, "id", {
        value: M_++
      }), this.uuid = Nn(), this.name = "", this.source = new op(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new ee(0, 0), this.repeat = new ee(1, 1), this.center = new ee(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new ze(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
    }
    get image() {
      return this.source.data;
    }
    set image(e = null) {
      this.source.data = e;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string";
      if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
      const n = {
        metadata: {
          version: 4.6,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(e).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [
          this.repeat.x,
          this.repeat.y
        ],
        offset: [
          this.offset.x,
          this.offset.y
        ],
        center: [
          this.center.x,
          this.center.y
        ],
        rotation: this.rotation,
        wrap: [
          this.wrapS,
          this.wrapT
        ],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };
      return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
    transformUv(e) {
      if (this.mapping !== Xf) return e;
      if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
        case Es:
          e.x = e.x - Math.floor(e.x);
          break;
        case Hi:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case ja:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
      if (e.y < 0 || e.y > 1) switch (this.wrapT) {
        case Es:
          e.y = e.y - Math.floor(e.y);
          break;
        case Hi:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case ja:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
      return this.flipY && (e.y = 1 - e.y), e;
    }
    set needsUpdate(e) {
      e === true && (this.version++, this.source.needsUpdate = true);
    }
    set needsPMREMUpdate(e) {
      e === true && this.pmremVersion++;
    }
  }
  Nt.DEFAULT_IMAGE = null;
  Nt.DEFAULT_MAPPING = Xf;
  Nt.DEFAULT_ANISOTROPY = 1;
  class it {
    constructor(e = 0, t = 0, n = 0, i = 1) {
      it.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = i;
    }
    get width() {
      return this.z;
    }
    set width(e) {
      this.z = e;
    }
    get height() {
      return this.w;
    }
    set height(e) {
      this.w = e;
    }
    set(e, t, n, i) {
      return this.x = e, this.y = t, this.z = n, this.w = i, this;
    }
    setScalar(e) {
      return this.x = e, this.y = e, this.z = e, this.w = e, this;
    }
    setX(e) {
      return this.x = e, this;
    }
    setY(e) {
      return this.y = e, this;
    }
    setZ(e) {
      return this.z = e, this;
    }
    setW(e) {
      return this.w = e, this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        case 3:
          this.w = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(e) {
      return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
    }
    add(e) {
      return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
    }
    addScalar(e) {
      return this.x += e, this.y += e, this.z += e, this.w += e, this;
    }
    addVectors(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
    }
    addScaledVector(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
    }
    sub(e) {
      return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
    }
    subScalar(e) {
      return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
    }
    subVectors(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
    }
    multiply(e) {
      return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
    }
    multiplyScalar(e) {
      return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
    }
    applyMatrix4(e) {
      const t = this.x, n = this.y, i = this.z, s = this.w, o = e.elements;
      return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * s, this;
    }
    divide(e) {
      return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    setAxisAngleFromQuaternion(e) {
      this.w = 2 * Math.acos(e.w);
      const t = Math.sqrt(1 - e.w * e.w);
      return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
    }
    setAxisAngleFromRotationMatrix(e) {
      let t, n, i, s;
      const l = e.elements, c = l[0], u = l[4], h = l[8], d = l[1], f = l[5], _ = l[9], g = l[2], m = l[6], p = l[10];
      if (Math.abs(u - d) < 0.01 && Math.abs(h - g) < 0.01 && Math.abs(_ - m) < 0.01) {
        if (Math.abs(u + d) < 0.1 && Math.abs(h + g) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(c + f + p - 3) < 0.1) return this.set(1, 0, 0, 0), this;
        t = Math.PI;
        const v = (c + 1) / 2, x = (f + 1) / 2, w = (p + 1) / 2, b = (u + d) / 4, A = (h + g) / 4, P = (_ + m) / 4;
        return v > x && v > w ? v < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(v), i = b / n, s = A / n) : x > w ? x < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(x), n = b / i, s = P / i) : w < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(w), n = A / s, i = P / s), this.set(n, i, s, t), this;
      }
      let y = Math.sqrt((m - _) * (m - _) + (h - g) * (h - g) + (d - u) * (d - u));
      return Math.abs(y) < 1e-3 && (y = 1), this.x = (m - _) / y, this.y = (h - g) / y, this.z = (d - u) / y, this.w = Math.acos((c + f + p - 1) / 2), this;
    }
    setFromMatrixPosition(e) {
      const t = e.elements;
      return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
    }
    min(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
    }
    max(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
    }
    clamp(e, t) {
      return this.x = He(this.x, e.x, t.x), this.y = He(this.y, e.y, t.y), this.z = He(this.z, e.z, t.z), this.w = He(this.w, e.w, t.w), this;
    }
    clampScalar(e, t) {
      return this.x = He(this.x, e, t), this.y = He(this.y, e, t), this.z = He(this.z, e, t), this.w = He(this.w, e, t), this;
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(He(n, e, t));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
    }
    lerpVectors(e, t, n) {
      return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
    }
    fromArray(e, t = 0) {
      return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
    }
    fromBufferAttribute(e, t) {
      return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  }
  class E_ extends zs {
    constructor(e = 1, t = 1, n = {}) {
      super(), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = 1, this.scissor = new it(0, 0, e, t), this.scissorTest = false, this.viewport = new it(0, 0, e, t);
      const i = {
        width: e,
        height: t,
        depth: 1
      };
      n = Object.assign({
        generateMipmaps: false,
        internalFormat: null,
        minFilter: Sn,
        depthBuffer: true,
        stencilBuffer: false,
        resolveDepthBuffer: true,
        resolveStencilBuffer: true,
        depthTexture: null,
        samples: 0,
        count: 1
      }, n);
      const s = new Nt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
      s.flipY = false, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
      const o = n.count;
      for (let a = 0; a < o; a++) this.textures[a] = s.clone(), this.textures[a].isRenderTargetTexture = true, this.textures[a].renderTarget = this;
      this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples;
    }
    get texture() {
      return this.textures[0];
    }
    set texture(e) {
      this.textures[0] = e;
    }
    set depthTexture(e) {
      this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
    }
    get depthTexture() {
      return this._depthTexture;
    }
    setSize(e, t, n = 1) {
      if (this.width !== e || this.height !== t || this.depth !== n) {
        this.width = e, this.height = t, this.depth = n;
        for (let i = 0, s = this.textures.length; i < s; i++) this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n;
        this.dispose();
      }
      this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
      for (let n = 0, i = e.textures.length; n < i; n++) this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = true, this.textures[n].renderTarget = this;
      const t = Object.assign({}, e.texture.image);
      return this.texture.source = new op(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  }
  class Wn extends E_ {
    constructor(e = 1, t = 1, n = {}) {
      super(e, t, n), this.isWebGLRenderTarget = true;
    }
  }
  class ap extends Nt {
    constructor(e = null, t = 1, n = 1, i = 1) {
      super(null), this.isDataArrayTexture = true, this.image = {
        data: e,
        width: t,
        height: n,
        depth: i
      }, this.magFilter = nn, this.minFilter = nn, this.wrapR = Hi, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
    }
    addLayerUpdate(e) {
      this.layerUpdates.add(e);
    }
    clearLayerUpdates() {
      this.layerUpdates.clear();
    }
  }
  class T_ extends Nt {
    constructor(e = null, t = 1, n = 1, i = 1) {
      super(null), this.isData3DTexture = true, this.image = {
        data: e,
        width: t,
        height: n,
        depth: i
      }, this.magFilter = nn, this.minFilter = nn, this.wrapR = Hi, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  }
  class Qi {
    constructor(e = 0, t = 0, n = 0, i = 1) {
      this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = i;
    }
    static slerpFlat(e, t, n, i, s, o, a) {
      let l = n[i + 0], c = n[i + 1], u = n[i + 2], h = n[i + 3];
      const d = s[o + 0], f = s[o + 1], _ = s[o + 2], g = s[o + 3];
      if (a === 0) {
        e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
        return;
      }
      if (a === 1) {
        e[t + 0] = d, e[t + 1] = f, e[t + 2] = _, e[t + 3] = g;
        return;
      }
      if (h !== g || l !== d || c !== f || u !== _) {
        let m = 1 - a;
        const p = l * d + c * f + u * _ + h * g, y = p >= 0 ? 1 : -1, v = 1 - p * p;
        if (v > Number.EPSILON) {
          const w = Math.sqrt(v), b = Math.atan2(w, p * y);
          m = Math.sin(m * b) / w, a = Math.sin(a * b) / w;
        }
        const x = a * y;
        if (l = l * m + d * x, c = c * m + f * x, u = u * m + _ * x, h = h * m + g * x, m === 1 - a) {
          const w = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
          l *= w, c *= w, u *= w, h *= w;
        }
      }
      e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
    }
    static multiplyQuaternionsFlat(e, t, n, i, s, o) {
      const a = n[i], l = n[i + 1], c = n[i + 2], u = n[i + 3], h = s[o], d = s[o + 1], f = s[o + 2], _ = s[o + 3];
      return e[t] = a * _ + u * h + l * f - c * d, e[t + 1] = l * _ + u * d + c * h - a * f, e[t + 2] = c * _ + u * f + a * d - l * h, e[t + 3] = u * _ - a * h - l * d - c * f, e;
    }
    get x() {
      return this._x;
    }
    set x(e) {
      this._x = e, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(e) {
      this._y = e, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(e) {
      this._z = e, this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(e) {
      this._w = e, this._onChangeCallback();
    }
    set(e, t, n, i) {
      return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(e) {
      return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
    }
    setFromEuler(e, t = true) {
      const n = e._x, i = e._y, s = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), u = a(i / 2), h = a(s / 2), d = l(n / 2), f = l(i / 2), _ = l(s / 2);
      switch (o) {
        case "XYZ":
          this._x = d * u * h + c * f * _, this._y = c * f * h - d * u * _, this._z = c * u * _ + d * f * h, this._w = c * u * h - d * f * _;
          break;
        case "YXZ":
          this._x = d * u * h + c * f * _, this._y = c * f * h - d * u * _, this._z = c * u * _ - d * f * h, this._w = c * u * h + d * f * _;
          break;
        case "ZXY":
          this._x = d * u * h - c * f * _, this._y = c * f * h + d * u * _, this._z = c * u * _ + d * f * h, this._w = c * u * h - d * f * _;
          break;
        case "ZYX":
          this._x = d * u * h - c * f * _, this._y = c * f * h + d * u * _, this._z = c * u * _ - d * f * h, this._w = c * u * h + d * f * _;
          break;
        case "YZX":
          this._x = d * u * h + c * f * _, this._y = c * f * h + d * u * _, this._z = c * u * _ - d * f * h, this._w = c * u * h - d * f * _;
          break;
        case "XZY":
          this._x = d * u * h - c * f * _, this._y = c * f * h - d * u * _, this._z = c * u * _ + d * f * h, this._w = c * u * h + d * f * _;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
      }
      return t === true && this._onChangeCallback(), this;
    }
    setFromAxisAngle(e, t) {
      const n = t / 2, i = Math.sin(n);
      return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(e) {
      const t = e.elements, n = t[0], i = t[4], s = t[8], o = t[1], a = t[5], l = t[9], c = t[2], u = t[6], h = t[10], d = n + a + h;
      if (d > 0) {
        const f = 0.5 / Math.sqrt(d + 1);
        this._w = 0.25 / f, this._x = (u - l) * f, this._y = (s - c) * f, this._z = (o - i) * f;
      } else if (n > a && n > h) {
        const f = 2 * Math.sqrt(1 + n - a - h);
        this._w = (u - l) / f, this._x = 0.25 * f, this._y = (i + o) / f, this._z = (s + c) / f;
      } else if (a > h) {
        const f = 2 * Math.sqrt(1 + a - n - h);
        this._w = (s - c) / f, this._x = (i + o) / f, this._y = 0.25 * f, this._z = (l + u) / f;
      } else {
        const f = 2 * Math.sqrt(1 + h - n - a);
        this._w = (o - i) / f, this._x = (s + c) / f, this._y = (l + u) / f, this._z = 0.25 * f;
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(e, t) {
      let n = e.dot(t) + 1;
      return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
    }
    angleTo(e) {
      return 2 * Math.acos(Math.abs(He(this.dot(e), -1, 1)));
    }
    rotateTowards(e, t) {
      const n = this.angleTo(e);
      if (n === 0) return this;
      const i = Math.min(1, t / n);
      return this.slerp(e, i), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(e) {
      return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let e = this.length();
      return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
    }
    multiply(e) {
      return this.multiplyQuaternions(this, e);
    }
    premultiply(e) {
      return this.multiplyQuaternions(e, this);
    }
    multiplyQuaternions(e, t) {
      const n = e._x, i = e._y, s = e._z, o = e._w, a = t._x, l = t._y, c = t._z, u = t._w;
      return this._x = n * u + o * a + i * c - s * l, this._y = i * u + o * l + s * a - n * c, this._z = s * u + o * c + n * l - i * a, this._w = o * u - n * a - i * l - s * c, this._onChangeCallback(), this;
    }
    slerp(e, t) {
      if (t === 0) return this;
      if (t === 1) return this.copy(e);
      const n = this._x, i = this._y, s = this._z, o = this._w;
      let a = o * e._w + n * e._x + i * e._y + s * e._z;
      if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = s, this;
      const l = 1 - a * a;
      if (l <= Number.EPSILON) {
        const f = 1 - t;
        return this._w = f * o + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * s + t * this._z, this.normalize(), this;
      }
      const c = Math.sqrt(l), u = Math.atan2(c, a), h = Math.sin((1 - t) * u) / c, d = Math.sin(t * u) / c;
      return this._w = o * h + this._w * d, this._x = n * h + this._x * d, this._y = i * h + this._y * d, this._z = s * h + this._z * d, this._onChangeCallback(), this;
    }
    slerpQuaternions(e, t, n) {
      return this.copy(e).slerp(t, n);
    }
    random() {
      const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), s = Math.sqrt(n);
      return this.set(i * Math.sin(e), i * Math.cos(e), s * Math.sin(t), s * Math.cos(t));
    }
    equals(e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
    }
    fromArray(e, t = 0) {
      return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
    }
    fromBufferAttribute(e, t) {
      return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(e) {
      return this._onChangeCallback = e, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  }
  class D {
    constructor(e = 0, t = 0, n = 0) {
      D.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
    }
    set(e, t, n) {
      return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
    }
    setScalar(e) {
      return this.x = e, this.y = e, this.z = e, this;
    }
    setX(e) {
      return this.x = e, this;
    }
    setY(e) {
      return this.y = e, this;
    }
    setZ(e) {
      return this.z = e, this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(e) {
      return this.x = e.x, this.y = e.y, this.z = e.z, this;
    }
    add(e) {
      return this.x += e.x, this.y += e.y, this.z += e.z, this;
    }
    addScalar(e) {
      return this.x += e, this.y += e, this.z += e, this;
    }
    addVectors(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
    }
    addScaledVector(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
    }
    sub(e) {
      return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
    }
    subScalar(e) {
      return this.x -= e, this.y -= e, this.z -= e, this;
    }
    subVectors(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
    }
    multiply(e) {
      return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
    }
    multiplyScalar(e) {
      return this.x *= e, this.y *= e, this.z *= e, this;
    }
    multiplyVectors(e, t) {
      return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
    }
    applyEuler(e) {
      return this.applyQuaternion(td.setFromEuler(e));
    }
    applyAxisAngle(e, t) {
      return this.applyQuaternion(td.setFromAxisAngle(e, t));
    }
    applyMatrix3(e) {
      const t = this.x, n = this.y, i = this.z, s = e.elements;
      return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
    }
    applyNormalMatrix(e) {
      return this.applyMatrix3(e).normalize();
    }
    applyMatrix4(e) {
      const t = this.x, n = this.y, i = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
      return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * o, this;
    }
    applyQuaternion(e) {
      const t = this.x, n = this.y, i = this.z, s = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * i - a * n), u = 2 * (a * t - s * i), h = 2 * (s * n - o * t);
      return this.x = t + l * c + o * h - a * u, this.y = n + l * u + a * c - s * h, this.z = i + l * h + s * u - o * c, this;
    }
    project(e) {
      return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
    }
    unproject(e) {
      return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
    }
    transformDirection(e) {
      const t = this.x, n = this.y, i = this.z, s = e.elements;
      return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
    }
    divide(e) {
      return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    min(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
    }
    max(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
    }
    clamp(e, t) {
      return this.x = He(this.x, e.x, t.x), this.y = He(this.y, e.y, t.y), this.z = He(this.z, e.z, t.z), this;
    }
    clampScalar(e, t) {
      return this.x = He(this.x, e, t), this.y = He(this.y, e, t), this.z = He(this.z, e, t), this;
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(He(n, e, t));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
    }
    lerpVectors(e, t, n) {
      return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
    }
    cross(e) {
      return this.crossVectors(this, e);
    }
    crossVectors(e, t) {
      const n = e.x, i = e.y, s = e.z, o = t.x, a = t.y, l = t.z;
      return this.x = i * l - s * a, this.y = s * o - n * l, this.z = n * a - i * o, this;
    }
    projectOnVector(e) {
      const t = e.lengthSq();
      if (t === 0) return this.set(0, 0, 0);
      const n = e.dot(this) / t;
      return this.copy(e).multiplyScalar(n);
    }
    projectOnPlane(e) {
      return Tl.copy(this).projectOnVector(e), this.sub(Tl);
    }
    reflect(e) {
      return this.sub(Tl.copy(e).multiplyScalar(2 * this.dot(e)));
    }
    angleTo(e) {
      const t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      const n = this.dot(e) / t;
      return Math.acos(He(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
      return t * t + n * n + i * i;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
    }
    setFromSpherical(e) {
      return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
    }
    setFromSphericalCoords(e, t, n) {
      const i = Math.sin(t) * e;
      return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
    }
    setFromCylindrical(e) {
      return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
    }
    setFromCylindricalCoords(e, t, n) {
      return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
    }
    setFromMatrixPosition(e) {
      const t = e.elements;
      return this.x = t[12], this.y = t[13], this.z = t[14], this;
    }
    setFromMatrixScale(e) {
      const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
      return this.x = t, this.y = n, this.z = i, this;
    }
    setFromMatrixColumn(e, t) {
      return this.fromArray(e.elements, t * 4);
    }
    setFromMatrix3Column(e, t) {
      return this.fromArray(e.elements, t * 3);
    }
    setFromEuler(e) {
      return this.x = e._x, this.y = e._y, this.z = e._z, this;
    }
    setFromColor(e) {
      return this.x = e.r, this.y = e.g, this.z = e.b, this;
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z;
    }
    fromArray(e, t = 0) {
      return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
    }
    fromBufferAttribute(e, t) {
      return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
      const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
      return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  }
  const Tl = new D(), td = new Qi();
  class Li {
    constructor(e = new D(1 / 0, 1 / 0, 1 / 0), t = new D(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = true, this.min = e, this.max = t;
    }
    set(e, t) {
      return this.min.copy(e), this.max.copy(t), this;
    }
    setFromArray(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Fn.fromArray(e, t));
      return this;
    }
    setFromBufferAttribute(e) {
      this.makeEmpty();
      for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Fn.fromBufferAttribute(e, t));
      return this;
    }
    setFromPoints(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this;
    }
    setFromCenterAndSize(e, t) {
      const n = Fn.copy(t).multiplyScalar(0.5);
      return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
    }
    setFromObject(e, t = false) {
      return this.makeEmpty(), this.expandByObject(e, t);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.min.copy(e.min), this.max.copy(e.max), this;
    }
    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
      return this.min.min(e), this.max.max(e), this;
    }
    expandByVector(e) {
      return this.min.sub(e), this.max.add(e), this;
    }
    expandByScalar(e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this;
    }
    expandByObject(e, t = false) {
      e.updateWorldMatrix(false, false);
      const n = e.geometry;
      if (n !== void 0) {
        const s = n.getAttribute("position");
        if (t === true && s !== void 0 && e.isInstancedMesh !== true) for (let o = 0, a = s.count; o < a; o++) e.isMesh === true ? e.getVertexPosition(o, Fn) : Fn.fromBufferAttribute(s, o), Fn.applyMatrix4(e.matrixWorld), this.expandByPoint(Fn);
        else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), sa.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), sa.copy(n.boundingBox)), sa.applyMatrix4(e.matrixWorld), this.union(sa);
      }
      const i = e.children;
      for (let s = 0, o = i.length; s < o; s++) this.expandByObject(i[s], t);
      return this;
    }
    containsPoint(e) {
      return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
    }
    containsBox(e) {
      return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
    }
    getParameter(e, t) {
      return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(e) {
      return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
    }
    intersectsSphere(e) {
      return this.clampPoint(e.center, Fn), Fn.distanceToSquared(e.center) <= e.radius * e.radius;
    }
    intersectsPlane(e) {
      let t, n;
      return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
    }
    intersectsTriangle(e) {
      if (this.isEmpty()) return false;
      this.getCenter(io), oa.subVectors(this.max, io), qr.subVectors(e.a, io), Yr.subVectors(e.b, io), $r.subVectors(e.c, io), Di.subVectors(Yr, qr), Ii.subVectors($r, Yr), ir.subVectors(qr, $r);
      let t = [
        0,
        -Di.z,
        Di.y,
        0,
        -Ii.z,
        Ii.y,
        0,
        -ir.z,
        ir.y,
        Di.z,
        0,
        -Di.x,
        Ii.z,
        0,
        -Ii.x,
        ir.z,
        0,
        -ir.x,
        -Di.y,
        Di.x,
        0,
        -Ii.y,
        Ii.x,
        0,
        -ir.y,
        ir.x,
        0
      ];
      return !bl(t, qr, Yr, $r, oa) || (t = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ], !bl(t, qr, Yr, $r, oa)) ? false : (aa.crossVectors(Di, Ii), t = [
        aa.x,
        aa.y,
        aa.z
      ], bl(t, qr, Yr, $r, oa));
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
      return this.clampPoint(e, Fn).distanceTo(e);
    }
    getBoundingSphere(e) {
      return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Fn).length() * 0.5), e;
    }
    intersect(e) {
      return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(e) {
      return this.min.min(e.min), this.max.max(e.max), this;
    }
    applyMatrix4(e) {
      return this.isEmpty() ? this : (ai[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), ai[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), ai[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), ai[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), ai[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), ai[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), ai[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), ai[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(ai), this);
    }
    translate(e) {
      return this.min.add(e), this.max.add(e), this;
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
  }
  const ai = [
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D()
  ], Fn = new D(), sa = new Li(), qr = new D(), Yr = new D(), $r = new D(), Di = new D(), Ii = new D(), ir = new D(), io = new D(), oa = new D(), aa = new D(), rr = new D();
  function bl(r, e, t, n, i) {
    for (let s = 0, o = r.length - 3; s <= o; s += 3) {
      rr.fromArray(r, s);
      const a = i.x * Math.abs(rr.x) + i.y * Math.abs(rr.y) + i.z * Math.abs(rr.z), l = e.dot(rr), c = t.dot(rr), u = n.dot(rr);
      if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return false;
    }
    return true;
  }
  const b_ = new Li(), ro = new D(), wl = new D();
  class ni {
    constructor(e = new D(), t = -1) {
      this.isSphere = true, this.center = e, this.radius = t;
    }
    set(e, t) {
      return this.center.copy(e), this.radius = t, this;
    }
    setFromPoints(e, t) {
      const n = this.center;
      t !== void 0 ? n.copy(t) : b_.setFromPoints(e).getCenter(n);
      let i = 0;
      for (let s = 0, o = e.length; s < o; s++) i = Math.max(i, n.distanceToSquared(e[s]));
      return this.radius = Math.sqrt(i), this;
    }
    copy(e) {
      return this.center.copy(e.center), this.radius = e.radius, this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(e) {
      return e.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(e) {
      return e.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(e) {
      const t = this.radius + e.radius;
      return e.center.distanceToSquared(this.center) <= t * t;
    }
    intersectsBox(e) {
      return e.intersectsSphere(this);
    }
    intersectsPlane(e) {
      return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(e, t) {
      const n = this.center.distanceToSquared(e);
      return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
    }
    getBoundingBox(e) {
      return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
    }
    applyMatrix4(e) {
      return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
    }
    translate(e) {
      return this.center.add(e), this;
    }
    expandByPoint(e) {
      if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
      ro.subVectors(e, this.center);
      const t = ro.lengthSq();
      if (t > this.radius * this.radius) {
        const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
        this.center.addScaledVector(ro, i / n), this.radius += i;
      }
      return this;
    }
    union(e) {
      return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (wl.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ro.copy(e.center).add(wl)), this.expandByPoint(ro.copy(e.center).sub(wl))), this);
    }
    equals(e) {
      return e.center.equals(this.center) && e.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const li = new D(), Al = new D(), la = new D(), Ni = new D(), Cl = new D(), ca = new D(), Rl = new D();
  class jo {
    constructor(e = new D(), t = new D(0, 0, -1)) {
      this.origin = e, this.direction = t;
    }
    set(e, t) {
      return this.origin.copy(e), this.direction.copy(t), this;
    }
    copy(e) {
      return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
    }
    at(e, t) {
      return t.copy(this.origin).addScaledVector(this.direction, e);
    }
    lookAt(e) {
      return this.direction.copy(e).sub(this.origin).normalize(), this;
    }
    recast(e) {
      return this.origin.copy(this.at(e, li)), this;
    }
    closestPointToPoint(e, t) {
      t.subVectors(e, this.origin);
      const n = t.dot(this.direction);
      return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(e) {
      return Math.sqrt(this.distanceSqToPoint(e));
    }
    distanceSqToPoint(e) {
      const t = li.subVectors(e, this.origin).dot(this.direction);
      return t < 0 ? this.origin.distanceToSquared(e) : (li.copy(this.origin).addScaledVector(this.direction, t), li.distanceToSquared(e));
    }
    distanceSqToSegment(e, t, n, i) {
      Al.copy(e).add(t).multiplyScalar(0.5), la.copy(t).sub(e).normalize(), Ni.copy(this.origin).sub(Al);
      const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(la), a = Ni.dot(this.direction), l = -Ni.dot(la), c = Ni.lengthSq(), u = Math.abs(1 - o * o);
      let h, d, f, _;
      if (u > 0) if (h = o * l - a, d = o * a - l, _ = s * u, h >= 0) if (d >= -_) if (d <= _) {
        const g = 1 / u;
        h *= g, d *= g, f = h * (h + o * d + 2 * a) + d * (o * h + d + 2 * l) + c;
      } else d = s, h = Math.max(0, -(o * d + a)), f = -h * h + d * (d + 2 * l) + c;
      else d = -s, h = Math.max(0, -(o * d + a)), f = -h * h + d * (d + 2 * l) + c;
      else d <= -_ ? (h = Math.max(0, -(-o * s + a)), d = h > 0 ? -s : Math.min(Math.max(-s, -l), s), f = -h * h + d * (d + 2 * l) + c) : d <= _ ? (h = 0, d = Math.min(Math.max(-s, -l), s), f = d * (d + 2 * l) + c) : (h = Math.max(0, -(o * s + a)), d = h > 0 ? s : Math.min(Math.max(-s, -l), s), f = -h * h + d * (d + 2 * l) + c);
      else d = o > 0 ? -s : s, h = Math.max(0, -(o * d + a)), f = -h * h + d * (d + 2 * l) + c;
      return n && n.copy(this.origin).addScaledVector(this.direction, h), i && i.copy(Al).addScaledVector(la, d), f;
    }
    intersectSphere(e, t) {
      li.subVectors(e.center, this.origin);
      const n = li.dot(this.direction), i = li.dot(li) - n * n, s = e.radius * e.radius;
      if (i > s) return null;
      const o = Math.sqrt(s - i), a = n - o, l = n + o;
      return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
    }
    intersectsSphere(e) {
      return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
    distanceToPlane(e) {
      const t = e.normal.dot(this.direction);
      if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
      const n = -(this.origin.dot(e.normal) + e.constant) / t;
      return n >= 0 ? n : null;
    }
    intersectPlane(e, t) {
      const n = this.distanceToPlane(e);
      return n === null ? null : this.at(n, t);
    }
    intersectsPlane(e) {
      const t = e.distanceToPoint(this.origin);
      return t === 0 || e.normal.dot(this.direction) * t < 0;
    }
    intersectBox(e, t) {
      let n, i, s, o, a, l;
      const c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, d = this.origin;
      return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), u >= 0 ? (s = (e.min.y - d.y) * u, o = (e.max.y - d.y) * u) : (s = (e.max.y - d.y) * u, o = (e.min.y - d.y) * u), n > o || s > i || ((s > n || isNaN(n)) && (n = s), (o < i || isNaN(i)) && (i = o), h >= 0 ? (a = (e.min.z - d.z) * h, l = (e.max.z - d.z) * h) : (a = (e.max.z - d.z) * h, l = (e.min.z - d.z) * h), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
    }
    intersectsBox(e) {
      return this.intersectBox(e, li) !== null;
    }
    intersectTriangle(e, t, n, i, s) {
      Cl.subVectors(t, e), ca.subVectors(n, e), Rl.crossVectors(Cl, ca);
      let o = this.direction.dot(Rl), a;
      if (o > 0) {
        if (i) return null;
        a = 1;
      } else if (o < 0) a = -1, o = -o;
      else return null;
      Ni.subVectors(this.origin, e);
      const l = a * this.direction.dot(ca.crossVectors(Ni, ca));
      if (l < 0) return null;
      const c = a * this.direction.dot(Cl.cross(Ni));
      if (c < 0 || l + c > o) return null;
      const u = -a * Ni.dot(Rl);
      return u < 0 ? null : this.at(u / o, s);
    }
    applyMatrix4(e) {
      return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
    }
    equals(e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class Fe {
    constructor(e, t, n, i, s, o, a, l, c, u, h, d, f, _, g, m) {
      Fe.prototype.isMatrix4 = true, this.elements = [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ], e !== void 0 && this.set(e, t, n, i, s, o, a, l, c, u, h, d, f, _, g, m);
    }
    set(e, t, n, i, s, o, a, l, c, u, h, d, f, _, g, m) {
      const p = this.elements;
      return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = s, p[5] = o, p[9] = a, p[13] = l, p[2] = c, p[6] = u, p[10] = h, p[14] = d, p[3] = f, p[7] = _, p[11] = g, p[15] = m, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new Fe().fromArray(this.elements);
    }
    copy(e) {
      const t = this.elements, n = e.elements;
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
    }
    copyPosition(e) {
      const t = this.elements, n = e.elements;
      return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
    }
    setFromMatrix3(e) {
      const t = e.elements;
      return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(e, t, n) {
      return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
    }
    makeBasis(e, t, n) {
      return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(e) {
      const t = this.elements, n = e.elements, i = 1 / Kr.setFromMatrixColumn(e, 0).length(), s = 1 / Kr.setFromMatrixColumn(e, 1).length(), o = 1 / Kr.setFromMatrixColumn(e, 2).length();
      return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
    }
    makeRotationFromEuler(e) {
      const t = this.elements, n = e.x, i = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), u = Math.cos(s), h = Math.sin(s);
      if (e.order === "XYZ") {
        const d = o * u, f = o * h, _ = a * u, g = a * h;
        t[0] = l * u, t[4] = -l * h, t[8] = c, t[1] = f + _ * c, t[5] = d - g * c, t[9] = -a * l, t[2] = g - d * c, t[6] = _ + f * c, t[10] = o * l;
      } else if (e.order === "YXZ") {
        const d = l * u, f = l * h, _ = c * u, g = c * h;
        t[0] = d + g * a, t[4] = _ * a - f, t[8] = o * c, t[1] = o * h, t[5] = o * u, t[9] = -a, t[2] = f * a - _, t[6] = g + d * a, t[10] = o * l;
      } else if (e.order === "ZXY") {
        const d = l * u, f = l * h, _ = c * u, g = c * h;
        t[0] = d - g * a, t[4] = -o * h, t[8] = _ + f * a, t[1] = f + _ * a, t[5] = o * u, t[9] = g - d * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
      } else if (e.order === "ZYX") {
        const d = o * u, f = o * h, _ = a * u, g = a * h;
        t[0] = l * u, t[4] = _ * c - f, t[8] = d * c + g, t[1] = l * h, t[5] = g * c + d, t[9] = f * c - _, t[2] = -c, t[6] = a * l, t[10] = o * l;
      } else if (e.order === "YZX") {
        const d = o * l, f = o * c, _ = a * l, g = a * c;
        t[0] = l * u, t[4] = g - d * h, t[8] = _ * h + f, t[1] = h, t[5] = o * u, t[9] = -a * u, t[2] = -c * u, t[6] = f * h + _, t[10] = d - g * h;
      } else if (e.order === "XZY") {
        const d = o * l, f = o * c, _ = a * l, g = a * c;
        t[0] = l * u, t[4] = -h, t[8] = c * u, t[1] = d * h + g, t[5] = o * u, t[9] = f * h - _, t[2] = _ * h - f, t[6] = a * u, t[10] = g * h + d;
      }
      return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
    }
    makeRotationFromQuaternion(e) {
      return this.compose(w_, e, A_);
    }
    lookAt(e, t, n) {
      const i = this.elements;
      return gn.subVectors(e, t), gn.lengthSq() === 0 && (gn.z = 1), gn.normalize(), Ui.crossVectors(n, gn), Ui.lengthSq() === 0 && (Math.abs(n.z) === 1 ? gn.x += 1e-4 : gn.z += 1e-4, gn.normalize(), Ui.crossVectors(n, gn)), Ui.normalize(), ua.crossVectors(gn, Ui), i[0] = Ui.x, i[4] = ua.x, i[8] = gn.x, i[1] = Ui.y, i[5] = ua.y, i[9] = gn.y, i[2] = Ui.z, i[6] = ua.z, i[10] = gn.z, this;
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements, i = t.elements, s = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], u = n[1], h = n[5], d = n[9], f = n[13], _ = n[2], g = n[6], m = n[10], p = n[14], y = n[3], v = n[7], x = n[11], w = n[15], b = i[0], A = i[4], P = i[8], S = i[12], M = i[1], L = i[5], G = i[9], O = i[13], V = i[2], q = i[6], B = i[10], K = i[14], H = i[3], oe = i[7], ce = i[11], ge = i[15];
      return s[0] = o * b + a * M + l * V + c * H, s[4] = o * A + a * L + l * q + c * oe, s[8] = o * P + a * G + l * B + c * ce, s[12] = o * S + a * O + l * K + c * ge, s[1] = u * b + h * M + d * V + f * H, s[5] = u * A + h * L + d * q + f * oe, s[9] = u * P + h * G + d * B + f * ce, s[13] = u * S + h * O + d * K + f * ge, s[2] = _ * b + g * M + m * V + p * H, s[6] = _ * A + g * L + m * q + p * oe, s[10] = _ * P + g * G + m * B + p * ce, s[14] = _ * S + g * O + m * K + p * ge, s[3] = y * b + v * M + x * V + w * H, s[7] = y * A + v * L + x * q + w * oe, s[11] = y * P + v * G + x * B + w * ce, s[15] = y * S + v * O + x * K + w * ge, this;
    }
    multiplyScalar(e) {
      const t = this.elements;
      return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
    }
    determinant() {
      const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], o = e[1], a = e[5], l = e[9], c = e[13], u = e[2], h = e[6], d = e[10], f = e[14], _ = e[3], g = e[7], m = e[11], p = e[15];
      return _ * (+s * l * h - i * c * h - s * a * d + n * c * d + i * a * f - n * l * f) + g * (+t * l * f - t * c * d + s * o * d - i * o * f + i * c * u - s * l * u) + m * (+t * c * h - t * a * f - s * o * h + n * o * f + s * a * u - n * c * u) + p * (-i * a * u - t * l * h + t * a * d + i * o * h - n * o * d + n * l * u);
    }
    transpose() {
      const e = this.elements;
      let t;
      return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
    }
    setPosition(e, t, n) {
      const i = this.elements;
      return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
    }
    invert() {
      const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = e[9], d = e[10], f = e[11], _ = e[12], g = e[13], m = e[14], p = e[15], y = h * m * c - g * d * c + g * l * f - a * m * f - h * l * p + a * d * p, v = _ * d * c - u * m * c - _ * l * f + o * m * f + u * l * p - o * d * p, x = u * g * c - _ * h * c + _ * a * f - o * g * f - u * a * p + o * h * p, w = _ * h * l - u * g * l - _ * a * d + o * g * d + u * a * m - o * h * m, b = t * y + n * v + i * x + s * w;
      if (b === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const A = 1 / b;
      return e[0] = y * A, e[1] = (g * d * s - h * m * s - g * i * f + n * m * f + h * i * p - n * d * p) * A, e[2] = (a * m * s - g * l * s + g * i * c - n * m * c - a * i * p + n * l * p) * A, e[3] = (h * l * s - a * d * s - h * i * c + n * d * c + a * i * f - n * l * f) * A, e[4] = v * A, e[5] = (u * m * s - _ * d * s + _ * i * f - t * m * f - u * i * p + t * d * p) * A, e[6] = (_ * l * s - o * m * s - _ * i * c + t * m * c + o * i * p - t * l * p) * A, e[7] = (o * d * s - u * l * s + u * i * c - t * d * c - o * i * f + t * l * f) * A, e[8] = x * A, e[9] = (_ * h * s - u * g * s - _ * n * f + t * g * f + u * n * p - t * h * p) * A, e[10] = (o * g * s - _ * a * s + _ * n * c - t * g * c - o * n * p + t * a * p) * A, e[11] = (u * a * s - o * h * s - u * n * c + t * h * c + o * n * f - t * a * f) * A, e[12] = w * A, e[13] = (u * g * i - _ * h * i + _ * n * d - t * g * d - u * n * m + t * h * m) * A, e[14] = (_ * a * i - o * g * i - _ * n * l + t * g * l + o * n * m - t * a * m) * A, e[15] = (o * h * i - u * a * i + u * n * l - t * h * l - o * n * d + t * a * d) * A, this;
    }
    scale(e) {
      const t = this.elements, n = e.x, i = e.y, s = e.z;
      return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
    }
    getMaxScaleOnAxis() {
      const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, n, i));
    }
    makeTranslation(e, t, n) {
      return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
    }
    makeRotationX(e) {
      const t = Math.cos(e), n = Math.sin(e);
      return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(e) {
      const t = Math.cos(e), n = Math.sin(e);
      return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(e) {
      const t = Math.cos(e), n = Math.sin(e);
      return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(e, t) {
      const n = Math.cos(t), i = Math.sin(t), s = 1 - n, o = e.x, a = e.y, l = e.z, c = s * o, u = s * a;
      return this.set(c * o + n, c * a - i * l, c * l + i * a, 0, c * a + i * l, u * a + n, u * l - i * o, 0, c * l - i * a, u * l + i * o, s * l * l + n, 0, 0, 0, 0, 1), this;
    }
    makeScale(e, t, n) {
      return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(e, t, n, i, s, o) {
      return this.set(1, n, s, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(e, t, n) {
      const i = this.elements, s = t._x, o = t._y, a = t._z, l = t._w, c = s + s, u = o + o, h = a + a, d = s * c, f = s * u, _ = s * h, g = o * u, m = o * h, p = a * h, y = l * c, v = l * u, x = l * h, w = n.x, b = n.y, A = n.z;
      return i[0] = (1 - (g + p)) * w, i[1] = (f + x) * w, i[2] = (_ - v) * w, i[3] = 0, i[4] = (f - x) * b, i[5] = (1 - (d + p)) * b, i[6] = (m + y) * b, i[7] = 0, i[8] = (_ + v) * A, i[9] = (m - y) * A, i[10] = (1 - (d + g)) * A, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
    }
    decompose(e, t, n) {
      const i = this.elements;
      let s = Kr.set(i[0], i[1], i[2]).length();
      const o = Kr.set(i[4], i[5], i[6]).length(), a = Kr.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Bn.copy(this);
      const c = 1 / s, u = 1 / o, h = 1 / a;
      return Bn.elements[0] *= c, Bn.elements[1] *= c, Bn.elements[2] *= c, Bn.elements[4] *= u, Bn.elements[5] *= u, Bn.elements[6] *= u, Bn.elements[8] *= h, Bn.elements[9] *= h, Bn.elements[10] *= h, t.setFromRotationMatrix(Bn), n.x = s, n.y = o, n.z = a, this;
    }
    makePerspective(e, t, n, i, s, o, a = Mi) {
      const l = this.elements, c = 2 * s / (t - e), u = 2 * s / (n - i), h = (t + e) / (t - e), d = (n + i) / (n - i);
      let f, _;
      if (a === Mi) f = -(o + s) / (o - s), _ = -2 * o * s / (o - s);
      else if (a === Ja) f = -o / (o - s), _ = -o * s / (o - s);
      else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
      return l[0] = c, l[4] = 0, l[8] = h, l[12] = 0, l[1] = 0, l[5] = u, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = f, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
    }
    makeOrthographic(e, t, n, i, s, o, a = Mi) {
      const l = this.elements, c = 1 / (t - e), u = 1 / (n - i), h = 1 / (o - s), d = (t + e) * c, f = (n + i) * u;
      let _, g;
      if (a === Mi) _ = (o + s) * h, g = -2 * h;
      else if (a === Ja) _ = s * h, g = -1 * h;
      else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
      return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -f, l[2] = 0, l[6] = 0, l[10] = g, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
    }
    equals(e) {
      const t = this.elements, n = e.elements;
      for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return false;
      return true;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.elements;
      return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
    }
  }
  const Kr = new D(), Bn = new Fe(), w_ = new D(0, 0, 0), A_ = new D(1, 1, 1), Ui = new D(), ua = new D(), gn = new D(), nd = new Fe(), id = new Qi();
  class Xn {
    constructor(e = 0, t = 0, n = 0, i = Xn.DEFAULT_ORDER) {
      this.isEuler = true, this._x = e, this._y = t, this._z = n, this._order = i;
    }
    get x() {
      return this._x;
    }
    set x(e) {
      this._x = e, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(e) {
      this._y = e, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(e) {
      this._z = e, this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(e) {
      this._order = e, this._onChangeCallback();
    }
    set(e, t, n, i = this._order) {
      return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(e) {
      return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(e, t = this._order, n = true) {
      const i = e.elements, s = i[0], o = i[4], a = i[8], l = i[1], c = i[5], u = i[9], h = i[2], d = i[6], f = i[10];
      switch (t) {
        case "XYZ":
          this._y = Math.asin(He(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, c), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-He(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, s), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(He(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-h, f), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s));
          break;
        case "ZYX":
          this._y = Math.asin(-He(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c));
          break;
        case "YZX":
          this._z = Math.asin(He(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(a, f));
          break;
        case "XZY":
          this._z = Math.asin(-He(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-u, f), this._y = 0);
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
      }
      return this._order = t, n === true && this._onChangeCallback(), this;
    }
    setFromQuaternion(e, t, n) {
      return nd.makeRotationFromQuaternion(e), this.setFromRotationMatrix(nd, t, n);
    }
    setFromVector3(e, t = this._order) {
      return this.set(e.x, e.y, e.z, t);
    }
    reorder(e) {
      return id.setFromEuler(this), this.setFromQuaternion(id, e);
    }
    equals(e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
    }
    fromArray(e) {
      return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
    }
    _onChange(e) {
      return this._onChangeCallback = e, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  }
  Xn.DEFAULT_ORDER = "XYZ";
  class Gu {
    constructor() {
      this.mask = 1;
    }
    set(e) {
      this.mask = (1 << e | 0) >>> 0;
    }
    enable(e) {
      this.mask |= 1 << e | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(e) {
      this.mask ^= 1 << e | 0;
    }
    disable(e) {
      this.mask &= ~(1 << e | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(e) {
      return (this.mask & e.mask) !== 0;
    }
    isEnabled(e) {
      return (this.mask & (1 << e | 0)) !== 0;
    }
  }
  let C_ = 0;
  const rd = new D(), jr = new Qi(), ci = new Fe(), ha = new D(), so = new D(), R_ = new D(), P_ = new Qi(), sd = new D(1, 0, 0), od = new D(0, 1, 0), ad = new D(0, 0, 1), ld = {
    type: "added"
  }, L_ = {
    type: "removed"
  }, Zr = {
    type: "childadded",
    child: null
  }, Pl = {
    type: "childremoved",
    child: null
  };
  class vt extends zs {
    constructor() {
      super(), this.isObject3D = true, Object.defineProperty(this, "id", {
        value: C_++
      }), this.uuid = Nn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = vt.DEFAULT_UP.clone();
      const e = new D(), t = new Xn(), n = new Qi(), i = new D(1, 1, 1);
      function s() {
        n.setFromEuler(t, false);
      }
      function o() {
        t.setFromQuaternion(n, void 0, false);
      }
      t._onChange(s), n._onChange(o), Object.defineProperties(this, {
        position: {
          configurable: true,
          enumerable: true,
          value: e
        },
        rotation: {
          configurable: true,
          enumerable: true,
          value: t
        },
        quaternion: {
          configurable: true,
          enumerable: true,
          value: n
        },
        scale: {
          configurable: true,
          enumerable: true,
          value: i
        },
        modelViewMatrix: {
          value: new Fe()
        },
        normalMatrix: {
          value: new ze()
        }
      }), this.matrix = new Fe(), this.matrixWorld = new Fe(), this.matrixAutoUpdate = vt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Gu(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
    }
    onBeforeShadow() {
    }
    onAfterShadow() {
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(e) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(e) {
      return this.quaternion.premultiply(e), this;
    }
    setRotationFromAxisAngle(e, t) {
      this.quaternion.setFromAxisAngle(e, t);
    }
    setRotationFromEuler(e) {
      this.quaternion.setFromEuler(e, true);
    }
    setRotationFromMatrix(e) {
      this.quaternion.setFromRotationMatrix(e);
    }
    setRotationFromQuaternion(e) {
      this.quaternion.copy(e);
    }
    rotateOnAxis(e, t) {
      return jr.setFromAxisAngle(e, t), this.quaternion.multiply(jr), this;
    }
    rotateOnWorldAxis(e, t) {
      return jr.setFromAxisAngle(e, t), this.quaternion.premultiply(jr), this;
    }
    rotateX(e) {
      return this.rotateOnAxis(sd, e);
    }
    rotateY(e) {
      return this.rotateOnAxis(od, e);
    }
    rotateZ(e) {
      return this.rotateOnAxis(ad, e);
    }
    translateOnAxis(e, t) {
      return rd.copy(e).applyQuaternion(this.quaternion), this.position.add(rd.multiplyScalar(t)), this;
    }
    translateX(e) {
      return this.translateOnAxis(sd, e);
    }
    translateY(e) {
      return this.translateOnAxis(od, e);
    }
    translateZ(e) {
      return this.translateOnAxis(ad, e);
    }
    localToWorld(e) {
      return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(e) {
      return this.updateWorldMatrix(true, false), e.applyMatrix4(ci.copy(this.matrixWorld).invert());
    }
    lookAt(e, t, n) {
      e.isVector3 ? ha.copy(e) : ha.set(e, t, n);
      const i = this.parent;
      this.updateWorldMatrix(true, false), so.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ci.lookAt(so, ha, this.up) : ci.lookAt(ha, so, this.up), this.quaternion.setFromRotationMatrix(ci), i && (ci.extractRotation(i.matrixWorld), jr.setFromRotationMatrix(ci), this.quaternion.premultiply(jr.invert()));
    }
    add(e) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
        return this;
      }
      return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(ld), Zr.child = e, this.dispatchEvent(Zr), Zr.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
    }
    remove(e) {
      if (arguments.length > 1) {
        for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
        return this;
      }
      const t = this.children.indexOf(e);
      return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(L_), Pl.child = e, this.dispatchEvent(Pl), Pl.child = null), this;
    }
    removeFromParent() {
      const e = this.parent;
      return e !== null && e.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(e) {
      return this.updateWorldMatrix(true, false), ci.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), ci.multiply(e.parent.matrixWorld)), e.applyMatrix4(ci), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(ld), Zr.child = e, this.dispatchEvent(Zr), Zr.child = null, this;
    }
    getObjectById(e) {
      return this.getObjectByProperty("id", e);
    }
    getObjectByName(e) {
      return this.getObjectByProperty("name", e);
    }
    getObjectByProperty(e, t) {
      if (this[e] === t) return this;
      for (let n = 0, i = this.children.length; n < i; n++) {
        const o = this.children[n].getObjectByProperty(e, t);
        if (o !== void 0) return o;
      }
    }
    getObjectsByProperty(e, t, n = []) {
      this[e] === t && n.push(this);
      const i = this.children;
      for (let s = 0, o = i.length; s < o; s++) i[s].getObjectsByProperty(e, t, n);
      return n;
    }
    getWorldPosition(e) {
      return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(e) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(so, e, R_), e;
    }
    getWorldScale(e) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(so, P_, e), e;
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(true, false);
      const t = this.matrixWorld.elements;
      return e.set(t[8], t[9], t[10]).normalize();
    }
    raycast() {
    }
    traverse(e) {
      e(this);
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
    }
    traverseVisible(e) {
      if (this.visible === false) return;
      e(this);
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
    }
    traverseAncestors(e) {
      const t = this.parent;
      t !== null && (e(t), t.traverseAncestors(e));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(e) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, e = true);
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e);
    }
    updateWorldMatrix(e, t) {
      const n = this.parent;
      if (e === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === true) {
        const i = this.children;
        for (let s = 0, o = i.length; s < o; s++) i[s].updateWorldMatrix(false, true);
      }
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string", n = {};
      t && (e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {}
      }, n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON"
      });
      const i = {};
      i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === true && (i.castShadow = true), this.receiveShadow === true && (i.receiveShadow = true), this.visible === false && (i.visible = false), this.frustumCulled === false && (i.frustumCulled = false), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === false && (i.matrixAutoUpdate = false), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((a) => ({
        boxInitialized: a.boxInitialized,
        boxMin: a.box.min.toArray(),
        boxMax: a.box.max.toArray(),
        sphereInitialized: a.sphereInitialized,
        sphereRadius: a.sphere.radius,
        sphereCenter: a.sphere.center.toArray()
      })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = {
        center: i.boundingSphere.center.toArray(),
        radius: i.boundingSphere.radius
      }), this.boundingBox !== null && (i.boundingBox = {
        min: i.boundingBox.min.toArray(),
        max: i.boundingBox.max.toArray()
      }));
      function s(a, l) {
        return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
      }
      if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (i.environment = this.environment.toJSON(e).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = s(e.geometries, this.geometry);
        const a = this.geometry.parameters;
        if (a !== void 0 && a.shapes !== void 0) {
          const l = a.shapes;
          if (Array.isArray(l)) for (let c = 0, u = l.length; c < u; c++) {
            const h = l[c];
            s(e.shapes, h);
          }
          else s(e.shapes, l);
        }
      }
      if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++) a.push(s(e.materials, this.material[l]));
        i.material = a;
      } else i.material = s(e.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let a = 0; a < this.children.length; a++) i.children.push(this.children[a].toJSON(e).object);
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let a = 0; a < this.animations.length; a++) {
          const l = this.animations[a];
          i.animations.push(s(e.animations, l));
        }
      }
      if (t) {
        const a = o(e.geometries), l = o(e.materials), c = o(e.textures), u = o(e.images), h = o(e.shapes), d = o(e.skeletons), f = o(e.animations), _ = o(e.nodes);
        a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f), _.length > 0 && (n.nodes = _);
      }
      return n.object = i, n;
      function o(a) {
        const l = [];
        for (const c in a) {
          const u = a[c];
          delete u.metadata, l.push(u);
        }
        return l;
      }
    }
    clone(e) {
      return new this.constructor().copy(this, e);
    }
    copy(e, t = true) {
      if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
      return this;
    }
  }
  vt.DEFAULT_UP = new D(0, 1, 0);
  vt.DEFAULT_MATRIX_AUTO_UPDATE = true;
  vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  const zn = new D(), ui = new D(), Ll = new D(), hi = new D(), Jr = new D(), Qr = new D(), cd = new D(), Dl = new D(), Il = new D(), Nl = new D(), Ul = new it(), Ol = new it(), Fl = new it();
  class Hn {
    constructor(e = new D(), t = new D(), n = new D()) {
      this.a = e, this.b = t, this.c = n;
    }
    static getNormal(e, t, n, i) {
      i.subVectors(n, t), zn.subVectors(e, t), i.cross(zn);
      const s = i.lengthSq();
      return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
    }
    static getBarycoord(e, t, n, i, s) {
      zn.subVectors(i, t), ui.subVectors(n, t), Ll.subVectors(e, t);
      const o = zn.dot(zn), a = zn.dot(ui), l = zn.dot(Ll), c = ui.dot(ui), u = ui.dot(Ll), h = o * c - a * a;
      if (h === 0) return s.set(0, 0, 0), null;
      const d = 1 / h, f = (c * l - a * u) * d, _ = (o * u - a * l) * d;
      return s.set(1 - f - _, _, f);
    }
    static containsPoint(e, t, n, i) {
      return this.getBarycoord(e, t, n, i, hi) === null ? false : hi.x >= 0 && hi.y >= 0 && hi.x + hi.y <= 1;
    }
    static getInterpolation(e, t, n, i, s, o, a, l) {
      return this.getBarycoord(e, t, n, i, hi) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, hi.x), l.addScaledVector(o, hi.y), l.addScaledVector(a, hi.z), l);
    }
    static getInterpolatedAttribute(e, t, n, i, s, o) {
      return Ul.setScalar(0), Ol.setScalar(0), Fl.setScalar(0), Ul.fromBufferAttribute(e, t), Ol.fromBufferAttribute(e, n), Fl.fromBufferAttribute(e, i), o.setScalar(0), o.addScaledVector(Ul, s.x), o.addScaledVector(Ol, s.y), o.addScaledVector(Fl, s.z), o;
    }
    static isFrontFacing(e, t, n, i) {
      return zn.subVectors(n, t), ui.subVectors(e, t), zn.cross(ui).dot(i) < 0;
    }
    set(e, t, n) {
      return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
    }
    setFromPointsAndIndices(e, t, n, i) {
      return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
    }
    setFromAttributeAndIndices(e, t, n, i) {
      return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
    }
    getArea() {
      return zn.subVectors(this.c, this.b), ui.subVectors(this.a, this.b), zn.cross(ui).length() * 0.5;
    }
    getMidpoint(e) {
      return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(e) {
      return Hn.getNormal(this.a, this.b, this.c, e);
    }
    getPlane(e) {
      return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(e, t) {
      return Hn.getBarycoord(e, this.a, this.b, this.c, t);
    }
    getInterpolation(e, t, n, i, s) {
      return Hn.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
    }
    containsPoint(e) {
      return Hn.containsPoint(e, this.a, this.b, this.c);
    }
    isFrontFacing(e) {
      return Hn.isFrontFacing(this.a, this.b, this.c, e);
    }
    intersectsBox(e) {
      return e.intersectsTriangle(this);
    }
    closestPointToPoint(e, t) {
      const n = this.a, i = this.b, s = this.c;
      let o, a;
      Jr.subVectors(i, n), Qr.subVectors(s, n), Dl.subVectors(e, n);
      const l = Jr.dot(Dl), c = Qr.dot(Dl);
      if (l <= 0 && c <= 0) return t.copy(n);
      Il.subVectors(e, i);
      const u = Jr.dot(Il), h = Qr.dot(Il);
      if (u >= 0 && h <= u) return t.copy(i);
      const d = l * h - u * c;
      if (d <= 0 && l >= 0 && u <= 0) return o = l / (l - u), t.copy(n).addScaledVector(Jr, o);
      Nl.subVectors(e, s);
      const f = Jr.dot(Nl), _ = Qr.dot(Nl);
      if (_ >= 0 && f <= _) return t.copy(s);
      const g = f * c - l * _;
      if (g <= 0 && c >= 0 && _ <= 0) return a = c / (c - _), t.copy(n).addScaledVector(Qr, a);
      const m = u * _ - f * h;
      if (m <= 0 && h - u >= 0 && f - _ >= 0) return cd.subVectors(s, i), a = (h - u) / (h - u + (f - _)), t.copy(i).addScaledVector(cd, a);
      const p = 1 / (m + g + d);
      return o = g * p, a = d * p, t.copy(n).addScaledVector(Jr, o).addScaledVector(Qr, a);
    }
    equals(e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
  }
  const lp = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  }, Oi = {
    h: 0,
    s: 0,
    l: 0
  }, da = {
    h: 0,
    s: 0,
    l: 0
  };
  function Bl(r, e, t) {
    return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
  }
  class Ce {
    constructor(e, t, n) {
      return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
    }
    set(e, t, n) {
      if (t === void 0 && n === void 0) {
        const i = e;
        i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
      } else this.setRGB(e, t, n);
      return this;
    }
    setScalar(e) {
      return this.r = e, this.g = e, this.b = e, this;
    }
    setHex(e, t = kt) {
      return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, $e.toWorkingColorSpace(this, t), this;
    }
    setRGB(e, t, n, i = $e.workingColorSpace) {
      return this.r = e, this.g = t, this.b = n, $e.toWorkingColorSpace(this, i), this;
    }
    setHSL(e, t, n, i = $e.workingColorSpace) {
      if (e = Hu(e, 1), t = He(t, 0, 1), n = He(n, 0, 1), t === 0) this.r = this.g = this.b = n;
      else {
        const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
        this.r = Bl(o, s, e + 1 / 3), this.g = Bl(o, s, e), this.b = Bl(o, s, e - 1 / 3);
      }
      return $e.toWorkingColorSpace(this, i), this;
    }
    setStyle(e, t = kt) {
      function n(s) {
        s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
      }
      let i;
      if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
        let s;
        const o = i[1], a = i[2];
        switch (o) {
          case "rgb":
          case "rgba":
            if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t);
            if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t);
            break;
          case "hsl":
          case "hsla":
            if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t);
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + e);
        }
      } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
        const s = i[1], o = s.length;
        if (o === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t);
        if (o === 6) return this.setHex(parseInt(s, 16), t);
        console.warn("THREE.Color: Invalid hex color " + e);
      } else if (e && e.length > 0) return this.setColorName(e, t);
      return this;
    }
    setColorName(e, t = kt) {
      const n = lp[e.toLowerCase()];
      return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(e) {
      return this.r = e.r, this.g = e.g, this.b = e.b, this;
    }
    copySRGBToLinear(e) {
      return this.r = wi(e.r), this.g = wi(e.g), this.b = wi(e.b), this;
    }
    copyLinearToSRGB(e) {
      return this.r = fs(e.r), this.g = fs(e.g), this.b = fs(e.b), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(e = kt) {
      return $e.fromWorkingColorSpace(Xt.copy(this), e), Math.round(He(Xt.r * 255, 0, 255)) * 65536 + Math.round(He(Xt.g * 255, 0, 255)) * 256 + Math.round(He(Xt.b * 255, 0, 255));
    }
    getHexString(e = kt) {
      return ("000000" + this.getHex(e).toString(16)).slice(-6);
    }
    getHSL(e, t = $e.workingColorSpace) {
      $e.fromWorkingColorSpace(Xt.copy(this), t);
      const n = Xt.r, i = Xt.g, s = Xt.b, o = Math.max(n, i, s), a = Math.min(n, i, s);
      let l, c;
      const u = (a + o) / 2;
      if (a === o) l = 0, c = 0;
      else {
        const h = o - a;
        switch (c = u <= 0.5 ? h / (o + a) : h / (2 - o - a), o) {
          case n:
            l = (i - s) / h + (i < s ? 6 : 0);
            break;
          case i:
            l = (s - n) / h + 2;
            break;
          case s:
            l = (n - i) / h + 4;
            break;
        }
        l /= 6;
      }
      return e.h = l, e.s = c, e.l = u, e;
    }
    getRGB(e, t = $e.workingColorSpace) {
      return $e.fromWorkingColorSpace(Xt.copy(this), t), e.r = Xt.r, e.g = Xt.g, e.b = Xt.b, e;
    }
    getStyle(e = kt) {
      $e.fromWorkingColorSpace(Xt.copy(this), e);
      const t = Xt.r, n = Xt.g, i = Xt.b;
      return e !== kt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
    }
    offsetHSL(e, t, n) {
      return this.getHSL(Oi), this.setHSL(Oi.h + e, Oi.s + t, Oi.l + n);
    }
    add(e) {
      return this.r += e.r, this.g += e.g, this.b += e.b, this;
    }
    addColors(e, t) {
      return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
    }
    addScalar(e) {
      return this.r += e, this.g += e, this.b += e, this;
    }
    sub(e) {
      return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
    }
    multiply(e) {
      return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
    }
    multiplyScalar(e) {
      return this.r *= e, this.g *= e, this.b *= e, this;
    }
    lerp(e, t) {
      return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
    }
    lerpColors(e, t, n) {
      return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
    }
    lerpHSL(e, t) {
      this.getHSL(Oi), e.getHSL(da);
      const n = yo(Oi.h, da.h, t), i = yo(Oi.s, da.s, t), s = yo(Oi.l, da.l, t);
      return this.setHSL(n, i, s), this;
    }
    setFromVector3(e) {
      return this.r = e.x, this.g = e.y, this.b = e.z, this;
    }
    applyMatrix3(e) {
      const t = this.r, n = this.g, i = this.b, s = e.elements;
      return this.r = s[0] * t + s[3] * n + s[6] * i, this.g = s[1] * t + s[4] * n + s[7] * i, this.b = s[2] * t + s[5] * n + s[8] * i, this;
    }
    equals(e) {
      return e.r === this.r && e.g === this.g && e.b === this.b;
    }
    fromArray(e, t = 0) {
      return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
    }
    fromBufferAttribute(e, t) {
      return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  }
  const Xt = new Ce();
  Ce.NAMES = lp;
  let D_ = 0;
  class Jn extends zs {
    constructor() {
      super(), this.isMaterial = true, Object.defineProperty(this, "id", {
        value: D_++
      }), this.uuid = Nn(), this.name = "", this.type = "Material", this.blending = hs, this.side = Ai, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = xc, this.blendDst = vc, this.blendEquation = _r, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ce(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ys, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = Kh, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Wr, this.stencilZFail = Wr, this.stencilZPass = Wr, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(e) {
      this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
    }
    onBeforeRender() {
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(e) {
      if (e !== void 0) for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string";
      t && (e = {
        textures: {},
        images: {}
      });
      const n = {
        metadata: {
          version: 4.6,
          type: "Material",
          generator: "Material.toJSON"
        }
      };
      n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== hs && (n.blending = this.blending), this.side !== Ai && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== xc && (n.blendSrc = this.blendSrc), this.blendDst !== vc && (n.blendDst = this.blendDst), this.blendEquation !== _r && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ys && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Kh && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Wr && (n.stencilFail = this.stencilFail), this.stencilZFail !== Wr && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Wr && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
      function i(s) {
        const o = [];
        for (const a in s) {
          const l = s[a];
          delete l.metadata, o.push(l);
        }
        return o;
      }
      if (t) {
        const s = i(e.textures), o = i(e.images);
        s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
      }
      return n;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
      const t = e.clippingPlanes;
      let n = null;
      if (t !== null) {
        const i = t.length;
        n = new Array(i);
        for (let s = 0; s !== i; ++s) n[s] = t[s].clone();
      }
      return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
    set needsUpdate(e) {
      e === true && this.version++;
    }
    onBuild() {
      console.warn("Material: onBuild() has been removed.");
    }
  }
  class jn extends Jn {
    constructor(e) {
      super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Ce(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Xn(), this.combine = Wf, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
    }
  }
  const Pt = new D(), fa = new ee();
  let I_ = 0;
  class rn {
    constructor(e, t, n = false) {
      if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = true, Object.defineProperty(this, "id", {
        value: I_++
      }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = nu, this.updateRanges = [], this.gpuType = Gn, this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(e) {
      e === true && this.version++;
    }
    setUsage(e) {
      return this.usage = e, this;
    }
    addUpdateRange(e, t) {
      this.updateRanges.push({
        start: e,
        count: t
      });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(e) {
      return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
    }
    copyAt(e, t, n) {
      e *= this.itemSize, n *= t.itemSize;
      for (let i = 0, s = this.itemSize; i < s; i++) this.array[e + i] = t.array[n + i];
      return this;
    }
    copyArray(e) {
      return this.array.set(e), this;
    }
    applyMatrix3(e) {
      if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) fa.fromBufferAttribute(this, t), fa.applyMatrix3(e), this.setXY(t, fa.x, fa.y);
      else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) Pt.fromBufferAttribute(this, t), Pt.applyMatrix3(e), this.setXYZ(t, Pt.x, Pt.y, Pt.z);
      return this;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.count; t < n; t++) Pt.fromBufferAttribute(this, t), Pt.applyMatrix4(e), this.setXYZ(t, Pt.x, Pt.y, Pt.z);
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++) Pt.fromBufferAttribute(this, t), Pt.applyNormalMatrix(e), this.setXYZ(t, Pt.x, Pt.y, Pt.z);
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++) Pt.fromBufferAttribute(this, t), Pt.transformDirection(e), this.setXYZ(t, Pt.x, Pt.y, Pt.z);
      return this;
    }
    set(e, t = 0) {
      return this.array.set(e, t), this;
    }
    getComponent(e, t) {
      let n = this.array[e * this.itemSize + t];
      return this.normalized && (n = Vn(n, this.array)), n;
    }
    setComponent(e, t, n) {
      return this.normalized && (n = lt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
    }
    getX(e) {
      let t = this.array[e * this.itemSize];
      return this.normalized && (t = Vn(t, this.array)), t;
    }
    setX(e, t) {
      return this.normalized && (t = lt(t, this.array)), this.array[e * this.itemSize] = t, this;
    }
    getY(e) {
      let t = this.array[e * this.itemSize + 1];
      return this.normalized && (t = Vn(t, this.array)), t;
    }
    setY(e, t) {
      return this.normalized && (t = lt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
    }
    getZ(e) {
      let t = this.array[e * this.itemSize + 2];
      return this.normalized && (t = Vn(t, this.array)), t;
    }
    setZ(e, t) {
      return this.normalized && (t = lt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
    }
    getW(e) {
      let t = this.array[e * this.itemSize + 3];
      return this.normalized && (t = Vn(t, this.array)), t;
    }
    setW(e, t) {
      return this.normalized && (t = lt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
    }
    setXY(e, t, n) {
      return e *= this.itemSize, this.normalized && (t = lt(t, this.array), n = lt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
    }
    setXYZ(e, t, n, i) {
      return e *= this.itemSize, this.normalized && (t = lt(t, this.array), n = lt(n, this.array), i = lt(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
    }
    setXYZW(e, t, n, i, s) {
      return e *= this.itemSize, this.normalized && (t = lt(t, this.array), n = lt(n, this.array), i = lt(i, this.array), s = lt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
    }
    onUpload(e) {
      return this.onUploadCallback = e, this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const e = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized
      };
      return this.name !== "" && (e.name = this.name), this.usage !== nu && (e.usage = this.usage), e;
    }
  }
  class cp extends rn {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n);
    }
  }
  class up extends rn {
    constructor(e, t, n) {
      super(new Uint32Array(e), t, n);
    }
  }
  class Vt extends rn {
    constructor(e, t, n) {
      super(new Float32Array(e), t, n);
    }
  }
  let N_ = 0;
  const Cn = new Fe(), zl = new vt(), es = new D(), _n = new Li(), oo = new Li(), Ft = new D();
  class pn extends zs {
    constructor() {
      super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", {
        value: N_++
      }), this.uuid = Nn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
        start: 0,
        count: 1 / 0
      }, this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(e) {
      return Array.isArray(e) ? this.index = new (sp(e) ? up : cp)(e, 1) : this.index = e, this;
    }
    setIndirect(e) {
      return this.indirect = e, this;
    }
    getIndirect() {
      return this.indirect;
    }
    getAttribute(e) {
      return this.attributes[e];
    }
    setAttribute(e, t) {
      return this.attributes[e] = t, this;
    }
    deleteAttribute(e) {
      return delete this.attributes[e], this;
    }
    hasAttribute(e) {
      return this.attributes[e] !== void 0;
    }
    addGroup(e, t, n = 0) {
      this.groups.push({
        start: e,
        count: t,
        materialIndex: n
      });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(e, t) {
      this.drawRange.start = e, this.drawRange.count = t;
    }
    applyMatrix4(e) {
      const t = this.attributes.position;
      t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
      const n = this.attributes.normal;
      if (n !== void 0) {
        const s = new ze().getNormalMatrix(e);
        n.applyNormalMatrix(s), n.needsUpdate = true;
      }
      const i = this.attributes.tangent;
      return i !== void 0 && (i.transformDirection(e), i.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
    }
    applyQuaternion(e) {
      return Cn.makeRotationFromQuaternion(e), this.applyMatrix4(Cn), this;
    }
    rotateX(e) {
      return Cn.makeRotationX(e), this.applyMatrix4(Cn), this;
    }
    rotateY(e) {
      return Cn.makeRotationY(e), this.applyMatrix4(Cn), this;
    }
    rotateZ(e) {
      return Cn.makeRotationZ(e), this.applyMatrix4(Cn), this;
    }
    translate(e, t, n) {
      return Cn.makeTranslation(e, t, n), this.applyMatrix4(Cn), this;
    }
    scale(e, t, n) {
      return Cn.makeScale(e, t, n), this.applyMatrix4(Cn), this;
    }
    lookAt(e) {
      return zl.lookAt(e), zl.updateMatrix(), this.applyMatrix4(zl.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(es).negate(), this.translate(es.x, es.y, es.z), this;
    }
    setFromPoints(e) {
      const t = this.getAttribute("position");
      if (t === void 0) {
        const n = [];
        for (let i = 0, s = e.length; i < s; i++) {
          const o = e[i];
          n.push(o.x, o.y, o.z || 0);
        }
        this.setAttribute("position", new Vt(n, 3));
      } else {
        const n = Math.min(e.length, t.count);
        for (let i = 0; i < n; i++) {
          const s = e[i];
          t.setXYZ(i, s.x, s.y, s.z || 0);
        }
        e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
      }
      return this;
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new Li());
      const e = this.attributes.position, t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new D(-1 / 0, -1 / 0, -1 / 0), new D(1 / 0, 1 / 0, 1 / 0));
        return;
      }
      if (e !== void 0) {
        if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          _n.setFromBufferAttribute(s), this.morphTargetsRelative ? (Ft.addVectors(this.boundingBox.min, _n.min), this.boundingBox.expandByPoint(Ft), Ft.addVectors(this.boundingBox.max, _n.max), this.boundingBox.expandByPoint(Ft)) : (this.boundingBox.expandByPoint(_n.min), this.boundingBox.expandByPoint(_n.max));
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new ni());
      const e = this.attributes.position, t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new D(), 1 / 0);
        return;
      }
      if (e) {
        const n = this.boundingSphere.center;
        if (_n.setFromBufferAttribute(e), t) for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          oo.setFromBufferAttribute(a), this.morphTargetsRelative ? (Ft.addVectors(_n.min, oo.min), _n.expandByPoint(Ft), Ft.addVectors(_n.max, oo.max), _n.expandByPoint(Ft)) : (_n.expandByPoint(oo.min), _n.expandByPoint(oo.max));
        }
        _n.getCenter(n);
        let i = 0;
        for (let s = 0, o = e.count; s < o; s++) Ft.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(Ft));
        if (t) for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++) Ft.fromBufferAttribute(a, c), l && (es.fromBufferAttribute(e, c), Ft.add(es)), i = Math.max(i, n.distanceToSquared(Ft));
        }
        this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeTangents() {
      const e = this.index, t = this.attributes;
      if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
        console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        return;
      }
      const n = t.position, i = t.normal, s = t.uv;
      this.hasAttribute("tangent") === false && this.setAttribute("tangent", new rn(new Float32Array(4 * n.count), 4));
      const o = this.getAttribute("tangent"), a = [], l = [];
      for (let P = 0; P < n.count; P++) a[P] = new D(), l[P] = new D();
      const c = new D(), u = new D(), h = new D(), d = new ee(), f = new ee(), _ = new ee(), g = new D(), m = new D();
      function p(P, S, M) {
        c.fromBufferAttribute(n, P), u.fromBufferAttribute(n, S), h.fromBufferAttribute(n, M), d.fromBufferAttribute(s, P), f.fromBufferAttribute(s, S), _.fromBufferAttribute(s, M), u.sub(c), h.sub(c), f.sub(d), _.sub(d);
        const L = 1 / (f.x * _.y - _.x * f.y);
        isFinite(L) && (g.copy(u).multiplyScalar(_.y).addScaledVector(h, -f.y).multiplyScalar(L), m.copy(h).multiplyScalar(f.x).addScaledVector(u, -_.x).multiplyScalar(L), a[P].add(g), a[S].add(g), a[M].add(g), l[P].add(m), l[S].add(m), l[M].add(m));
      }
      let y = this.groups;
      y.length === 0 && (y = [
        {
          start: 0,
          count: e.count
        }
      ]);
      for (let P = 0, S = y.length; P < S; ++P) {
        const M = y[P], L = M.start, G = M.count;
        for (let O = L, V = L + G; O < V; O += 3) p(e.getX(O + 0), e.getX(O + 1), e.getX(O + 2));
      }
      const v = new D(), x = new D(), w = new D(), b = new D();
      function A(P) {
        w.fromBufferAttribute(i, P), b.copy(w);
        const S = a[P];
        v.copy(S), v.sub(w.multiplyScalar(w.dot(S))).normalize(), x.crossVectors(b, S);
        const L = x.dot(l[P]) < 0 ? -1 : 1;
        o.setXYZW(P, v.x, v.y, v.z, L);
      }
      for (let P = 0, S = y.length; P < S; ++P) {
        const M = y[P], L = M.start, G = M.count;
        for (let O = L, V = L + G; O < V; O += 3) A(e.getX(O + 0)), A(e.getX(O + 1)), A(e.getX(O + 2));
      }
    }
    computeVertexNormals() {
      const e = this.index, t = this.getAttribute("position");
      if (t !== void 0) {
        let n = this.getAttribute("normal");
        if (n === void 0) n = new rn(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
        else for (let d = 0, f = n.count; d < f; d++) n.setXYZ(d, 0, 0, 0);
        const i = new D(), s = new D(), o = new D(), a = new D(), l = new D(), c = new D(), u = new D(), h = new D();
        if (e) for (let d = 0, f = e.count; d < f; d += 3) {
          const _ = e.getX(d + 0), g = e.getX(d + 1), m = e.getX(d + 2);
          i.fromBufferAttribute(t, _), s.fromBufferAttribute(t, g), o.fromBufferAttribute(t, m), u.subVectors(o, s), h.subVectors(i, s), u.cross(h), a.fromBufferAttribute(n, _), l.fromBufferAttribute(n, g), c.fromBufferAttribute(n, m), a.add(u), l.add(u), c.add(u), n.setXYZ(_, a.x, a.y, a.z), n.setXYZ(g, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
        }
        else for (let d = 0, f = t.count; d < f; d += 3) i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), u.subVectors(o, s), h.subVectors(i, s), u.cross(h), n.setXYZ(d + 0, u.x, u.y, u.z), n.setXYZ(d + 1, u.x, u.y, u.z), n.setXYZ(d + 2, u.x, u.y, u.z);
        this.normalizeNormals(), n.needsUpdate = true;
      }
    }
    normalizeNormals() {
      const e = this.attributes.normal;
      for (let t = 0, n = e.count; t < n; t++) Ft.fromBufferAttribute(e, t), Ft.normalize(), e.setXYZ(t, Ft.x, Ft.y, Ft.z);
    }
    toNonIndexed() {
      function e(a, l) {
        const c = a.array, u = a.itemSize, h = a.normalized, d = new c.constructor(l.length * u);
        let f = 0, _ = 0;
        for (let g = 0, m = l.length; g < m; g++) {
          a.isInterleavedBufferAttribute ? f = l[g] * a.data.stride + a.offset : f = l[g] * u;
          for (let p = 0; p < u; p++) d[_++] = c[f++];
        }
        return new rn(d, u, h);
      }
      if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      const t = new pn(), n = this.index.array, i = this.attributes;
      for (const a in i) {
        const l = i[a], c = e(l, n);
        t.setAttribute(a, c);
      }
      const s = this.morphAttributes;
      for (const a in s) {
        const l = [], c = s[a];
        for (let u = 0, h = c.length; u < h; u++) {
          const d = c[u], f = e(d, n);
          l.push(f);
        }
        t.morphAttributes[a] = l;
      }
      t.morphTargetsRelative = this.morphTargetsRelative;
      const o = this.groups;
      for (let a = 0, l = o.length; a < l; a++) {
        const c = o[a];
        t.addGroup(c.start, c.count, c.materialIndex);
      }
      return t;
    }
    toJSON() {
      const e = {
        metadata: {
          version: 4.6,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
        const l = this.parameters;
        for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
        return e;
      }
      e.data = {
        attributes: {}
      };
      const t = this.index;
      t !== null && (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array)
      });
      const n = this.attributes;
      for (const l in n) {
        const c = n[l];
        e.data.attributes[l] = c.toJSON(e.data);
      }
      const i = {};
      let s = false;
      for (const l in this.morphAttributes) {
        const c = this.morphAttributes[l], u = [];
        for (let h = 0, d = c.length; h < d; h++) {
          const f = c[h];
          u.push(f.toJSON(e.data));
        }
        u.length > 0 && (i[l] = u, s = true);
      }
      s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
      const o = this.groups;
      o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
      const a = this.boundingSphere;
      return a !== null && (e.data.boundingSphere = {
        center: a.center.toArray(),
        radius: a.radius
      }), e;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      const t = {};
      this.name = e.name;
      const n = e.index;
      n !== null && this.setIndex(n.clone(t));
      const i = e.attributes;
      for (const c in i) {
        const u = i[c];
        this.setAttribute(c, u.clone(t));
      }
      const s = e.morphAttributes;
      for (const c in s) {
        const u = [], h = s[c];
        for (let d = 0, f = h.length; d < f; d++) u.push(h[d].clone(t));
        this.morphAttributes[c] = u;
      }
      this.morphTargetsRelative = e.morphTargetsRelative;
      const o = e.groups;
      for (let c = 0, u = o.length; c < u; c++) {
        const h = o[c];
        this.addGroup(h.start, h.count, h.materialIndex);
      }
      const a = e.boundingBox;
      a !== null && (this.boundingBox = a.clone());
      const l = e.boundingSphere;
      return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  }
  const ud = new Fe(), sr = new jo(), pa = new ni(), hd = new D(), ma = new D(), ga = new D(), _a = new D(), kl = new D(), xa = new D(), dd = new D(), va = new D();
  class Ct extends vt {
    constructor(e = new pn(), t = new jn()) {
      super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
    }
    copy(e, t) {
      return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes, n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let s = 0, o = i.length; s < o; s++) {
            const a = i[s].name || String(s);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
          }
        }
      }
    }
    getVertexPosition(e, t) {
      const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative;
      t.fromBufferAttribute(i, e);
      const a = this.morphTargetInfluences;
      if (s && a) {
        xa.set(0, 0, 0);
        for (let l = 0, c = s.length; l < c; l++) {
          const u = a[l], h = s[l];
          u !== 0 && (kl.fromBufferAttribute(h, e), o ? xa.addScaledVector(kl, u) : xa.addScaledVector(kl.sub(t), u));
        }
        t.add(xa);
      }
      return t;
    }
    raycast(e, t) {
      const n = this.geometry, i = this.material, s = this.matrixWorld;
      i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), pa.copy(n.boundingSphere), pa.applyMatrix4(s), sr.copy(e.ray).recast(e.near), !(pa.containsPoint(sr.origin) === false && (sr.intersectSphere(pa, hd) === null || sr.origin.distanceToSquared(hd) > (e.far - e.near) ** 2)) && (ud.copy(s).invert(), sr.copy(e.ray).applyMatrix4(ud), !(n.boundingBox !== null && sr.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t, sr)));
    }
    _computeIntersections(e, t, n) {
      let i;
      const s = this.geometry, o = this.material, a = s.index, l = s.attributes.position, c = s.attributes.uv, u = s.attributes.uv1, h = s.attributes.normal, d = s.groups, f = s.drawRange;
      if (a !== null) if (Array.isArray(o)) for (let _ = 0, g = d.length; _ < g; _++) {
        const m = d[_], p = o[m.materialIndex], y = Math.max(m.start, f.start), v = Math.min(a.count, Math.min(m.start + m.count, f.start + f.count));
        for (let x = y, w = v; x < w; x += 3) {
          const b = a.getX(x), A = a.getX(x + 1), P = a.getX(x + 2);
          i = ya(this, p, e, n, c, u, h, b, A, P), i && (i.faceIndex = Math.floor(x / 3), i.face.materialIndex = m.materialIndex, t.push(i));
        }
      }
      else {
        const _ = Math.max(0, f.start), g = Math.min(a.count, f.start + f.count);
        for (let m = _, p = g; m < p; m += 3) {
          const y = a.getX(m), v = a.getX(m + 1), x = a.getX(m + 2);
          i = ya(this, o, e, n, c, u, h, y, v, x), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
      else if (l !== void 0) if (Array.isArray(o)) for (let _ = 0, g = d.length; _ < g; _++) {
        const m = d[_], p = o[m.materialIndex], y = Math.max(m.start, f.start), v = Math.min(l.count, Math.min(m.start + m.count, f.start + f.count));
        for (let x = y, w = v; x < w; x += 3) {
          const b = x, A = x + 1, P = x + 2;
          i = ya(this, p, e, n, c, u, h, b, A, P), i && (i.faceIndex = Math.floor(x / 3), i.face.materialIndex = m.materialIndex, t.push(i));
        }
      }
      else {
        const _ = Math.max(0, f.start), g = Math.min(l.count, f.start + f.count);
        for (let m = _, p = g; m < p; m += 3) {
          const y = m, v = m + 1, x = m + 2;
          i = ya(this, o, e, n, c, u, h, y, v, x), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
    }
  }
  function U_(r, e, t, n, i, s, o, a) {
    let l;
    if (e.side === ln ? l = n.intersectTriangle(o, s, i, true, a) : l = n.intersectTriangle(i, s, o, e.side === Ai, a), l === null) return null;
    va.copy(a), va.applyMatrix4(r.matrixWorld);
    const c = t.ray.origin.distanceTo(va);
    return c < t.near || c > t.far ? null : {
      distance: c,
      point: va.clone(),
      object: r
    };
  }
  function ya(r, e, t, n, i, s, o, a, l, c) {
    r.getVertexPosition(a, ma), r.getVertexPosition(l, ga), r.getVertexPosition(c, _a);
    const u = U_(r, e, t, n, ma, ga, _a, dd);
    if (u) {
      const h = new D();
      Hn.getBarycoord(dd, ma, ga, _a, h), i && (u.uv = Hn.getInterpolatedAttribute(i, a, l, c, h, new ee())), s && (u.uv1 = Hn.getInterpolatedAttribute(s, a, l, c, h, new ee())), o && (u.normal = Hn.getInterpolatedAttribute(o, a, l, c, h, new D()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
      const d = {
        a,
        b: l,
        c,
        normal: new D(),
        materialIndex: 0
      };
      Hn.getNormal(ma, ga, _a, d.normal), u.face = d, u.barycoord = h;
    }
    return u;
  }
  class Ur extends pn {
    constructor(e = 1, t = 1, n = 1, i = 1, s = 1, o = 1) {
      super(), this.type = "BoxGeometry", this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: s,
        depthSegments: o
      };
      const a = this;
      i = Math.floor(i), s = Math.floor(s), o = Math.floor(o);
      const l = [], c = [], u = [], h = [];
      let d = 0, f = 0;
      _("z", "y", "x", -1, -1, n, t, e, o, s, 0), _("z", "y", "x", 1, -1, n, t, -e, o, s, 1), _("x", "z", "y", 1, 1, e, n, t, i, o, 2), _("x", "z", "y", 1, -1, e, n, -t, i, o, 3), _("x", "y", "z", 1, -1, e, t, n, i, s, 4), _("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new Vt(c, 3)), this.setAttribute("normal", new Vt(u, 3)), this.setAttribute("uv", new Vt(h, 2));
      function _(g, m, p, y, v, x, w, b, A, P, S) {
        const M = x / A, L = w / P, G = x / 2, O = w / 2, V = b / 2, q = A + 1, B = P + 1;
        let K = 0, H = 0;
        const oe = new D();
        for (let ce = 0; ce < B; ce++) {
          const ge = ce * L - O;
          for (let Le = 0; Le < q; Le++) {
            const Ke = Le * M - G;
            oe[g] = Ke * y, oe[m] = ge * v, oe[p] = V, c.push(oe.x, oe.y, oe.z), oe[g] = 0, oe[m] = 0, oe[p] = b > 0 ? 1 : -1, u.push(oe.x, oe.y, oe.z), h.push(Le / A), h.push(1 - ce / P), K += 1;
          }
        }
        for (let ce = 0; ce < P; ce++) for (let ge = 0; ge < A; ge++) {
          const Le = d + ge + q * ce, Ke = d + ge + q * (ce + 1), X = d + (ge + 1) + q * (ce + 1), ie = d + (ge + 1) + q * ce;
          l.push(Le, Ke, ie), l.push(Ke, X, ie), H += 6;
        }
        a.addGroup(f, H, S), f += H, d += K;
      }
    }
    copy(e) {
      return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
    }
    static fromJSON(e) {
      return new Ur(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
    }
  }
  function As(r) {
    const e = {};
    for (const t in r) {
      e[t] = {};
      for (const n in r[t]) {
        const i = r[t][n];
        i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
      }
    }
    return e;
  }
  function Qt(r) {
    const e = {};
    for (let t = 0; t < r.length; t++) {
      const n = As(r[t]);
      for (const i in n) e[i] = n[i];
    }
    return e;
  }
  function O_(r) {
    const e = [];
    for (let t = 0; t < r.length; t++) e.push(r[t].clone());
    return e;
  }
  function hp(r) {
    const e = r.getRenderTarget();
    return e === null ? r.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : $e.workingColorSpace;
  }
  const Qa = {
    clone: As,
    merge: Qt
  };
  var F_ = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, B_ = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
  class $t extends Jn {
    constructor(e) {
      super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = F_, this.fragmentShader = B_, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = {
        clipCullDistance: false,
        multiDraw: false
      }, this.defaultAttributeValues = {
        color: [
          1,
          1,
          1
        ],
        uv: [
          0,
          0
        ],
        uv1: [
          0,
          0
        ]
      }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = As(e.uniforms), this.uniformsGroups = O_(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
    }
    toJSON(e) {
      const t = super.toJSON(e);
      t.glslVersion = this.glslVersion, t.uniforms = {};
      for (const i in this.uniforms) {
        const o = this.uniforms[i].value;
        o && o.isTexture ? t.uniforms[i] = {
          type: "t",
          value: o.toJSON(e).uuid
        } : o && o.isColor ? t.uniforms[i] = {
          type: "c",
          value: o.getHex()
        } : o && o.isVector2 ? t.uniforms[i] = {
          type: "v2",
          value: o.toArray()
        } : o && o.isVector3 ? t.uniforms[i] = {
          type: "v3",
          value: o.toArray()
        } : o && o.isVector4 ? t.uniforms[i] = {
          type: "v4",
          value: o.toArray()
        } : o && o.isMatrix3 ? t.uniforms[i] = {
          type: "m3",
          value: o.toArray()
        } : o && o.isMatrix4 ? t.uniforms[i] = {
          type: "m4",
          value: o.toArray()
        } : t.uniforms[i] = {
          value: o
        };
      }
      Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
      const n = {};
      for (const i in this.extensions) this.extensions[i] === true && (n[i] = true);
      return Object.keys(n).length > 0 && (t.extensions = n), t;
    }
  }
  class dp extends vt {
    constructor() {
      super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Fe(), this.projectionMatrix = new Fe(), this.projectionMatrixInverse = new Fe(), this.coordinateSystem = Mi;
    }
    copy(e, t) {
      return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
    }
    getWorldDirection(e) {
      return super.getWorldDirection(e).negate();
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(e, t) {
      super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const Fi = new D(), fd = new ee(), pd = new ee();
  class en extends dp {
    constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
      super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(e, t) {
      return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
    }
    setFocalLength(e) {
      const t = 0.5 * this.getFilmHeight() / e;
      this.fov = ws * 2 * Math.atan(t), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const e = Math.tan(vo * 0.5 * this.fov);
      return 0.5 * this.getFilmHeight() / e;
    }
    getEffectiveFOV() {
      return ws * 2 * Math.atan(Math.tan(vo * 0.5 * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(e, t, n) {
      Fi.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Fi.x, Fi.y).multiplyScalar(-e / Fi.z), Fi.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Fi.x, Fi.y).multiplyScalar(-e / Fi.z);
    }
    getViewSize(e, t) {
      return this.getViewBounds(e, fd, pd), t.subVectors(pd, fd);
    }
    setViewOffset(e, t, n, i, s, o) {
      this.aspect = e / t, this.view === null && (this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const e = this.near;
      let t = e * Math.tan(vo * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
      const o = this.view;
      if (this.view !== null && this.view.enabled) {
        const l = o.fullWidth, c = o.fullHeight;
        s += o.offsetX * i / l, t -= o.offsetY * n / c, i *= o.width / l, n *= o.height / c;
      }
      const a = this.filmOffset;
      a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
    }
  }
  const ts = -90, ns = 1;
  class z_ extends vt {
    constructor(e, t, n) {
      super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
      const i = new en(ts, ns, e, t);
      i.layers = this.layers, this.add(i);
      const s = new en(ts, ns, e, t);
      s.layers = this.layers, this.add(s);
      const o = new en(ts, ns, e, t);
      o.layers = this.layers, this.add(o);
      const a = new en(ts, ns, e, t);
      a.layers = this.layers, this.add(a);
      const l = new en(ts, ns, e, t);
      l.layers = this.layers, this.add(l);
      const c = new en(ts, ns, e, t);
      c.layers = this.layers, this.add(c);
    }
    updateCoordinateSystem() {
      const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, o, a, l] = t;
      for (const c of t) this.remove(c);
      if (e === Mi) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
      else if (e === Ja) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
      else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
      for (const c of t) this.add(c), c.updateMatrixWorld();
    }
    update(e, t) {
      this.parent === null && this.updateMatrixWorld();
      const { renderTarget: n, activeMipmapLevel: i } = this;
      this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
      const [s, o, a, l, c, u] = this.children, h = e.getRenderTarget(), d = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), _ = e.xr.enabled;
      e.xr.enabled = false;
      const g = n.texture.generateMipmaps;
      n.texture.generateMipmaps = false, e.setRenderTarget(n, 0, i), e.render(t, s), e.setRenderTarget(n, 1, i), e.render(t, o), e.setRenderTarget(n, 2, i), e.render(t, a), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = g, e.setRenderTarget(n, 5, i), e.render(t, u), e.setRenderTarget(h, d, f), e.xr.enabled = _, n.texture.needsPMREMUpdate = true;
    }
  }
  class fp extends Nt {
    constructor(e, t, n, i, s, o, a, l, c, u) {
      e = e !== void 0 ? e : [], t = t !== void 0 ? t : Ss, super(e, t, n, i, s, o, a, l, c, u), this.isCubeTexture = true, this.flipY = false;
    }
    get images() {
      return this.image;
    }
    set images(e) {
      this.image = e;
    }
  }
  class k_ extends Wn {
    constructor(e = 1, t = {}) {
      super(e, e, t), this.isWebGLCubeRenderTarget = true;
      const n = {
        width: e,
        height: e,
        depth: 1
      }, i = [
        n,
        n,
        n,
        n,
        n,
        n
      ];
      this.texture = new fp(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : false, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Sn;
    }
    fromEquirectangularTexture(e, t) {
      this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
      const n = {
        uniforms: {
          tEquirect: {
            value: null
          }
        },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      }, i = new Ur(5, 5, 5), s = new $t({
        name: "CubemapFromEquirect",
        uniforms: As(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: ln,
        blending: Ti
      });
      s.uniforms.tEquirect.value = t;
      const o = new Ct(i, s), a = t.minFilter;
      return t.minFilter === Si && (t.minFilter = Sn), new z_(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
    }
    clear(e, t, n, i) {
      const s = e.getRenderTarget();
      for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, i);
      e.setRenderTarget(s);
    }
  }
  class Gi extends vt {
    constructor() {
      super(), this.isGroup = true, this.type = "Group";
    }
  }
  const V_ = {
    type: "move"
  };
  class Vl {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
      return this._hand === null && (this._hand = new Gi(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = {
        pinching: false
      }), this._hand;
    }
    getTargetRaySpace() {
      return this._targetRay === null && (this._targetRay = new Gi(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new D(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new D()), this._targetRay;
    }
    getGripSpace() {
      return this._grip === null && (this._grip = new Gi(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new D(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new D()), this._grip;
    }
    dispatchEvent(e) {
      return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
    }
    connect(e) {
      if (e && e.hand) {
        const t = this._hand;
        if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
      }
      return this.dispatchEvent({
        type: "connected",
        data: e
      }), this;
    }
    disconnect(e) {
      return this.dispatchEvent({
        type: "disconnected",
        data: e
      }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
    }
    update(e, t, n) {
      let i = null, s = null, o = null;
      const a = this._targetRay, l = this._grip, c = this._hand;
      if (e && t.session.visibilityState !== "visible-blurred") {
        if (c && e.hand) {
          o = true;
          for (const g of e.hand.values()) {
            const m = t.getJointPose(g, n), p = this._getHandJoint(c, g);
            m !== null && (p.matrix.fromArray(m.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = true, p.jointRadius = m.radius), p.visible = m !== null;
          }
          const u = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], d = u.position.distanceTo(h.position), f = 0.02, _ = 5e-3;
          c.inputState.pinching && d > f + _ ? (c.inputState.pinching = false, this.dispatchEvent({
            type: "pinchend",
            handedness: e.handedness,
            target: this
          })) : !c.inputState.pinching && d <= f - _ && (c.inputState.pinching = true, this.dispatchEvent({
            type: "pinchstart",
            handedness: e.handedness,
            target: this
          }));
        } else l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, s.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = false, s.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = false));
        a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = true, i.linearVelocity ? (a.hasLinearVelocity = true, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = false, i.angularVelocity ? (a.hasAngularVelocity = true, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = false, this.dispatchEvent(V_)));
      }
      return a !== null && (a.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = o !== null), this;
    }
    _getHandJoint(e, t) {
      if (e.joints[t.jointName] === void 0) {
        const n = new Gi();
        n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
      }
      return e.joints[t.jointName];
    }
  }
  class H_ extends vt {
    constructor() {
      super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Xn(), this.environmentIntensity = 1, this.environmentRotation = new Xn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
      }));
    }
    copy(e, t) {
      return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
    }
  }
  class G_ {
    constructor(e, t) {
      this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = nu, this.updateRanges = [], this.version = 0, this.uuid = Nn();
    }
    onUploadCallback() {
    }
    set needsUpdate(e) {
      e === true && this.version++;
    }
    setUsage(e) {
      return this.usage = e, this;
    }
    addUpdateRange(e, t) {
      this.updateRanges.push({
        start: e,
        count: t
      });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(e) {
      return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
    }
    copyAt(e, t, n) {
      e *= this.stride, n *= t.stride;
      for (let i = 0, s = this.stride; i < s; i++) this.array[e + i] = t.array[n + i];
      return this;
    }
    set(e, t = 0) {
      return this.array.set(e, t), this;
    }
    clone(e) {
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Nn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
      const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
      return n.setUsage(this.usage), n;
    }
    onUpload(e) {
      return this.onUploadCallback = e, this;
    }
    toJSON(e) {
      return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Nn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride
      };
    }
  }
  const Jt = new D();
  class Wu {
    constructor(e, t, n, i = false) {
      this.isInterleavedBufferAttribute = true, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
    }
    get count() {
      return this.data.count;
    }
    get array() {
      return this.data.array;
    }
    set needsUpdate(e) {
      this.data.needsUpdate = e;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.data.count; t < n; t++) Jt.fromBufferAttribute(this, t), Jt.applyMatrix4(e), this.setXYZ(t, Jt.x, Jt.y, Jt.z);
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++) Jt.fromBufferAttribute(this, t), Jt.applyNormalMatrix(e), this.setXYZ(t, Jt.x, Jt.y, Jt.z);
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++) Jt.fromBufferAttribute(this, t), Jt.transformDirection(e), this.setXYZ(t, Jt.x, Jt.y, Jt.z);
      return this;
    }
    getComponent(e, t) {
      let n = this.array[e * this.data.stride + this.offset + t];
      return this.normalized && (n = Vn(n, this.array)), n;
    }
    setComponent(e, t, n) {
      return this.normalized && (n = lt(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
    }
    setX(e, t) {
      return this.normalized && (t = lt(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
    }
    setY(e, t) {
      return this.normalized && (t = lt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
    }
    setZ(e, t) {
      return this.normalized && (t = lt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
    }
    setW(e, t) {
      return this.normalized && (t = lt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
    }
    getX(e) {
      let t = this.data.array[e * this.data.stride + this.offset];
      return this.normalized && (t = Vn(t, this.array)), t;
    }
    getY(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 1];
      return this.normalized && (t = Vn(t, this.array)), t;
    }
    getZ(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 2];
      return this.normalized && (t = Vn(t, this.array)), t;
    }
    getW(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 3];
      return this.normalized && (t = Vn(t, this.array)), t;
    }
    setXY(e, t, n) {
      return e = e * this.data.stride + this.offset, this.normalized && (t = lt(t, this.array), n = lt(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
    }
    setXYZ(e, t, n, i) {
      return e = e * this.data.stride + this.offset, this.normalized && (t = lt(t, this.array), n = lt(n, this.array), i = lt(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
    }
    setXYZW(e, t, n, i, s) {
      return e = e * this.data.stride + this.offset, this.normalized && (t = lt(t, this.array), n = lt(n, this.array), i = lt(i, this.array), s = lt(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
    }
    clone(e) {
      if (e === void 0) {
        console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
        const t = [];
        for (let n = 0; n < this.count; n++) {
          const i = n * this.data.stride + this.offset;
          for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
        }
        return new rn(new this.array.constructor(t), this.itemSize, this.normalized);
      } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Wu(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    }
    toJSON(e) {
      if (e === void 0) {
        console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
        const t = [];
        for (let n = 0; n < this.count; n++) {
          const i = n * this.data.stride + this.offset;
          for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
        }
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: t,
          normalized: this.normalized
        };
      } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: true,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
    }
  }
  const md = new D(), gd = new it(), _d = new it(), W_ = new D(), xd = new Fe(), Sa = new D(), Hl = new ni(), vd = new Fe(), Gl = new jo();
  class X_ extends Ct {
    constructor(e, t) {
      super(e, t), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = Xh, this.bindMatrix = new Fe(), this.bindMatrixInverse = new Fe(), this.boundingBox = null, this.boundingSphere = null;
    }
    computeBoundingBox() {
      const e = this.geometry;
      this.boundingBox === null && (this.boundingBox = new Li()), this.boundingBox.makeEmpty();
      const t = e.getAttribute("position");
      for (let n = 0; n < t.count; n++) this.getVertexPosition(n, Sa), this.boundingBox.expandByPoint(Sa);
    }
    computeBoundingSphere() {
      const e = this.geometry;
      this.boundingSphere === null && (this.boundingSphere = new ni()), this.boundingSphere.makeEmpty();
      const t = e.getAttribute("position");
      for (let n = 0; n < t.count; n++) this.getVertexPosition(n, Sa), this.boundingSphere.expandByPoint(Sa);
    }
    copy(e, t) {
      return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
    }
    raycast(e, t) {
      const n = this.material, i = this.matrixWorld;
      n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Hl.copy(this.boundingSphere), Hl.applyMatrix4(i), e.ray.intersectsSphere(Hl) !== false && (vd.copy(i).invert(), Gl.copy(e.ray).applyMatrix4(vd), !(this.boundingBox !== null && Gl.intersectsBox(this.boundingBox) === false) && this._computeIntersections(e, t, Gl)));
    }
    getVertexPosition(e, t) {
      return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
    }
    bind(e, t) {
      this.skeleton = e, t === void 0 && (this.updateMatrixWorld(true), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
    }
    pose() {
      this.skeleton.pose();
    }
    normalizeSkinWeights() {
      const e = new it(), t = this.geometry.attributes.skinWeight;
      for (let n = 0, i = t.count; n < i; n++) {
        e.fromBufferAttribute(t, n);
        const s = 1 / e.manhattanLength();
        s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
      }
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e), this.bindMode === Xh ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === zg ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
    }
    applyBoneTransform(e, t) {
      const n = this.skeleton, i = this.geometry;
      gd.fromBufferAttribute(i.attributes.skinIndex, e), _d.fromBufferAttribute(i.attributes.skinWeight, e), md.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
      for (let s = 0; s < 4; s++) {
        const o = _d.getComponent(s);
        if (o !== 0) {
          const a = gd.getComponent(s);
          xd.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(W_.copy(md).applyMatrix4(xd), o);
        }
      }
      return t.applyMatrix4(this.bindMatrixInverse);
    }
  }
  class pp extends vt {
    constructor() {
      super(), this.isBone = true, this.type = "Bone";
    }
  }
  class mp extends Nt {
    constructor(e = null, t = 1, n = 1, i, s, o, a, l, c = nn, u = nn, h, d) {
      super(null, o, a, l, c, u, i, s, h, d), this.isDataTexture = true, this.image = {
        data: e,
        width: t,
        height: n
      }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  }
  const yd = new Fe(), q_ = new Fe();
  class Xu {
    constructor(e = [], t = []) {
      this.uuid = Nn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
    }
    init() {
      const e = this.bones, t = this.boneInverses;
      if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
      else if (e.length !== t.length) {
        console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
        for (let n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new Fe());
      }
    }
    calculateInverses() {
      this.boneInverses.length = 0;
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const n = new Fe();
        this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
      }
    }
    pose() {
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const n = this.bones[e];
        n && n.matrixWorld.copy(this.boneInverses[e]).invert();
      }
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const n = this.bones[e];
        n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
      }
    }
    update() {
      const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
      for (let s = 0, o = e.length; s < o; s++) {
        const a = e[s] ? e[s].matrixWorld : q_;
        yd.multiplyMatrices(a, t[s]), yd.toArray(n, s * 16);
      }
      i !== null && (i.needsUpdate = true);
    }
    clone() {
      return new Xu(this.bones, this.boneInverses);
    }
    computeBoneTexture() {
      let e = Math.sqrt(this.bones.length * 4);
      e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
      const t = new Float32Array(e * e * 4);
      t.set(this.boneMatrices);
      const n = new mp(t, e, e, Dn, Gn);
      return n.needsUpdate = true, this.boneMatrices = t, this.boneTexture = n, this;
    }
    getBoneByName(e) {
      for (let t = 0, n = this.bones.length; t < n; t++) {
        const i = this.bones[t];
        if (i.name === e) return i;
      }
    }
    dispose() {
      this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
    }
    fromJSON(e, t) {
      this.uuid = e.uuid;
      for (let n = 0, i = e.bones.length; n < i; n++) {
        const s = e.bones[n];
        let o = t[s];
        o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), o = new pp()), this.bones.push(o), this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]));
      }
      return this.init(), this;
    }
    toJSON() {
      const e = {
        metadata: {
          version: 4.6,
          type: "Skeleton",
          generator: "Skeleton.toJSON"
        },
        bones: [],
        boneInverses: []
      };
      e.uuid = this.uuid;
      const t = this.bones, n = this.boneInverses;
      for (let i = 0, s = t.length; i < s; i++) {
        const o = t[i];
        e.bones.push(o.uuid);
        const a = n[i];
        e.boneInverses.push(a.toArray());
      }
      return e;
    }
  }
  class iu extends rn {
    constructor(e, t, n, i = 1) {
      super(e, t, n), this.isInstancedBufferAttribute = true, this.meshPerAttribute = i;
    }
    copy(e) {
      return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
    }
    toJSON() {
      const e = super.toJSON();
      return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = true, e;
    }
  }
  const is = new Fe(), Sd = new Fe(), Ma = [], Md = new Li(), Y_ = new Fe(), ao = new Ct(), lo = new ni();
  class $_ extends Ct {
    constructor(e, t, n) {
      super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new iu(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
      for (let i = 0; i < n; i++) this.setMatrixAt(i, Y_);
    }
    computeBoundingBox() {
      const e = this.geometry, t = this.count;
      this.boundingBox === null && (this.boundingBox = new Li()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
      for (let n = 0; n < t; n++) this.getMatrixAt(n, is), Md.copy(e.boundingBox).applyMatrix4(is), this.boundingBox.union(Md);
    }
    computeBoundingSphere() {
      const e = this.geometry, t = this.count;
      this.boundingSphere === null && (this.boundingSphere = new ni()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
      for (let n = 0; n < t; n++) this.getMatrixAt(n, is), lo.copy(e.boundingSphere).applyMatrix4(is), this.boundingSphere.union(lo);
    }
    copy(e, t) {
      return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
    }
    getColorAt(e, t) {
      t.fromArray(this.instanceColor.array, e * 3);
    }
    getMatrixAt(e, t) {
      t.fromArray(this.instanceMatrix.array, e * 16);
    }
    getMorphAt(e, t) {
      const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, s = n.length + 1, o = e * s + 1;
      for (let a = 0; a < n.length; a++) n[a] = i[o + a];
    }
    raycast(e, t) {
      const n = this.matrixWorld, i = this.count;
      if (ao.geometry = this.geometry, ao.material = this.material, ao.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), lo.copy(this.boundingSphere), lo.applyMatrix4(n), e.ray.intersectsSphere(lo) !== false)) for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, is), Sd.multiplyMatrices(n, is), ao.matrixWorld = Sd, ao.raycast(e, Ma);
        for (let o = 0, a = Ma.length; o < a; o++) {
          const l = Ma[o];
          l.instanceId = s, l.object = this, t.push(l);
        }
        Ma.length = 0;
      }
    }
    setColorAt(e, t) {
      this.instanceColor === null && (this.instanceColor = new iu(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
    }
    setMatrixAt(e, t) {
      t.toArray(this.instanceMatrix.array, e * 16);
    }
    setMorphAt(e, t) {
      const n = t.morphTargetInfluences, i = n.length + 1;
      this.morphTexture === null && (this.morphTexture = new mp(new Float32Array(i * this.count), i, this.count, Bu, Gn));
      const s = this.morphTexture.source.data.data;
      let o = 0;
      for (let c = 0; c < n.length; c++) o += n[c];
      const a = this.geometry.morphTargetsRelative ? 1 : 1 - o, l = i * e;
      s[l] = a, s.set(n, l + 1);
    }
    updateMorphTargets() {
    }
    dispose() {
      return this.dispatchEvent({
        type: "dispose"
      }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
    }
  }
  const Wl = new D(), K_ = new D(), j_ = new ze();
  class fr {
    constructor(e = new D(1, 0, 0), t = 0) {
      this.isPlane = true, this.normal = e, this.constant = t;
    }
    set(e, t) {
      return this.normal.copy(e), this.constant = t, this;
    }
    setComponents(e, t, n, i) {
      return this.normal.set(e, t, n), this.constant = i, this;
    }
    setFromNormalAndCoplanarPoint(e, t) {
      return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
    }
    setFromCoplanarPoints(e, t, n) {
      const i = Wl.subVectors(n, t).cross(K_.subVectors(e, t)).normalize();
      return this.setFromNormalAndCoplanarPoint(i, e), this;
    }
    copy(e) {
      return this.normal.copy(e.normal), this.constant = e.constant, this;
    }
    normalize() {
      const e = 1 / this.normal.length();
      return this.normal.multiplyScalar(e), this.constant *= e, this;
    }
    negate() {
      return this.constant *= -1, this.normal.negate(), this;
    }
    distanceToPoint(e) {
      return this.normal.dot(e) + this.constant;
    }
    distanceToSphere(e) {
      return this.distanceToPoint(e.center) - e.radius;
    }
    projectPoint(e, t) {
      return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
    }
    intersectLine(e, t) {
      const n = e.delta(Wl), i = this.normal.dot(n);
      if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
      const s = -(e.start.dot(this.normal) + this.constant) / i;
      return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
    }
    intersectsLine(e) {
      const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
      return t < 0 && n > 0 || n < 0 && t > 0;
    }
    intersectsBox(e) {
      return e.intersectsPlane(this);
    }
    intersectsSphere(e) {
      return e.intersectsPlane(this);
    }
    coplanarPoint(e) {
      return e.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(e, t) {
      const n = t || j_.getNormalMatrix(e), i = this.coplanarPoint(Wl).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
      return this.constant = -i.dot(s), this;
    }
    translate(e) {
      return this.constant -= e.dot(this.normal), this;
    }
    equals(e) {
      return e.normal.equals(this.normal) && e.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const or = new ni(), Ea = new D();
  class qu {
    constructor(e = new fr(), t = new fr(), n = new fr(), i = new fr(), s = new fr(), o = new fr()) {
      this.planes = [
        e,
        t,
        n,
        i,
        s,
        o
      ];
    }
    set(e, t, n, i, s, o) {
      const a = this.planes;
      return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(s), a[5].copy(o), this;
    }
    copy(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
      return this;
    }
    setFromProjectionMatrix(e, t = Mi) {
      const n = this.planes, i = e.elements, s = i[0], o = i[1], a = i[2], l = i[3], c = i[4], u = i[5], h = i[6], d = i[7], f = i[8], _ = i[9], g = i[10], m = i[11], p = i[12], y = i[13], v = i[14], x = i[15];
      if (n[0].setComponents(l - s, d - c, m - f, x - p).normalize(), n[1].setComponents(l + s, d + c, m + f, x + p).normalize(), n[2].setComponents(l + o, d + u, m + _, x + y).normalize(), n[3].setComponents(l - o, d - u, m - _, x - y).normalize(), n[4].setComponents(l - a, d - h, m - g, x - v).normalize(), t === Mi) n[5].setComponents(l + a, d + h, m + g, x + v).normalize();
      else if (t === Ja) n[5].setComponents(a, h, g, v).normalize();
      else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
      return this;
    }
    intersectsObject(e) {
      if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
      else {
        const t = e.geometry;
        t.boundingSphere === null && t.computeBoundingSphere(), or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
      }
      return this.intersectsSphere(or);
    }
    intersectsSprite(e) {
      return or.center.set(0, 0, 0), or.radius = 0.7071067811865476, or.applyMatrix4(e.matrixWorld), this.intersectsSphere(or);
    }
    intersectsSphere(e) {
      const t = this.planes, n = e.center, i = -e.radius;
      for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < i) return false;
      return true;
    }
    intersectsBox(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) {
        const i = t[n];
        if (Ea.x = i.normal.x > 0 ? e.max.x : e.min.x, Ea.y = i.normal.y > 0 ? e.max.y : e.min.y, Ea.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Ea) < 0) return false;
      }
      return true;
    }
    containsPoint(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return false;
      return true;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class gp extends Jn {
    constructor(e) {
      super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Ce(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
    }
  }
  const el = new D(), tl = new D(), Ed = new Fe(), co = new jo(), Ta = new ni(), Xl = new D(), Td = new D();
  class Yu extends vt {
    constructor(e = new pn(), t = new gp()) {
      super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
    }
    copy(e, t) {
      return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
    }
    computeLineDistances() {
      const e = this.geometry;
      if (e.index === null) {
        const t = e.attributes.position, n = [
          0
        ];
        for (let i = 1, s = t.count; i < s; i++) el.fromBufferAttribute(t, i - 1), tl.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += el.distanceTo(tl);
        e.setAttribute("lineDistance", new Vt(n, 1));
      } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
    raycast(e, t) {
      const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
      if (n.boundingSphere === null && n.computeBoundingSphere(), Ta.copy(n.boundingSphere), Ta.applyMatrix4(i), Ta.radius += s, e.ray.intersectsSphere(Ta) === false) return;
      Ed.copy(i).invert(), co.copy(e.ray).applyMatrix4(Ed);
      const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, u = n.index, d = n.attributes.position;
      if (u !== null) {
        const f = Math.max(0, o.start), _ = Math.min(u.count, o.start + o.count);
        for (let g = f, m = _ - 1; g < m; g += c) {
          const p = u.getX(g), y = u.getX(g + 1), v = ba(this, e, co, l, p, y, g);
          v && t.push(v);
        }
        if (this.isLineLoop) {
          const g = u.getX(_ - 1), m = u.getX(f), p = ba(this, e, co, l, g, m, _ - 1);
          p && t.push(p);
        }
      } else {
        const f = Math.max(0, o.start), _ = Math.min(d.count, o.start + o.count);
        for (let g = f, m = _ - 1; g < m; g += c) {
          const p = ba(this, e, co, l, g, g + 1, g);
          p && t.push(p);
        }
        if (this.isLineLoop) {
          const g = ba(this, e, co, l, _ - 1, f, _ - 1);
          g && t.push(g);
        }
      }
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes, n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let s = 0, o = i.length; s < o; s++) {
            const a = i[s].name || String(s);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
          }
        }
      }
    }
  }
  function ba(r, e, t, n, i, s, o) {
    const a = r.geometry.attributes.position;
    if (el.fromBufferAttribute(a, i), tl.fromBufferAttribute(a, s), t.distanceSqToSegment(el, tl, Xl, Td) > n) return;
    Xl.applyMatrix4(r.matrixWorld);
    const c = e.ray.origin.distanceTo(Xl);
    if (!(c < e.near || c > e.far)) return {
      distance: c,
      point: Td.clone().applyMatrix4(r.matrixWorld),
      index: o,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: r
    };
  }
  const bd = new D(), wd = new D();
  class Z_ extends Yu {
    constructor(e, t) {
      super(e, t), this.isLineSegments = true, this.type = "LineSegments";
    }
    computeLineDistances() {
      const e = this.geometry;
      if (e.index === null) {
        const t = e.attributes.position, n = [];
        for (let i = 0, s = t.count; i < s; i += 2) bd.fromBufferAttribute(t, i), wd.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + bd.distanceTo(wd);
        e.setAttribute("lineDistance", new Vt(n, 1));
      } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
  }
  class J_ extends Yu {
    constructor(e, t) {
      super(e, t), this.isLineLoop = true, this.type = "LineLoop";
    }
  }
  class $u extends Jn {
    constructor(e) {
      super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Ce(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
    }
  }
  const Ad = new Fe(), ru = new jo(), wa = new ni(), Aa = new D();
  class _p extends vt {
    constructor(e = new pn(), t = new $u()) {
      super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
    }
    copy(e, t) {
      return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
    }
    raycast(e, t) {
      const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, o = n.drawRange;
      if (n.boundingSphere === null && n.computeBoundingSphere(), wa.copy(n.boundingSphere), wa.applyMatrix4(i), wa.radius += s, e.ray.intersectsSphere(wa) === false) return;
      Ad.copy(i).invert(), ru.copy(e.ray).applyMatrix4(Ad);
      const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, h = n.attributes.position;
      if (c !== null) {
        const d = Math.max(0, o.start), f = Math.min(c.count, o.start + o.count);
        for (let _ = d, g = f; _ < g; _++) {
          const m = c.getX(_);
          Aa.fromBufferAttribute(h, m), Cd(Aa, m, l, i, e, t, this);
        }
      } else {
        const d = Math.max(0, o.start), f = Math.min(h.count, o.start + o.count);
        for (let _ = d, g = f; _ < g; _++) Aa.fromBufferAttribute(h, _), Cd(Aa, _, l, i, e, t, this);
      }
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes, n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let s = 0, o = i.length; s < o; s++) {
            const a = i[s].name || String(s);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
          }
        }
      }
    }
  }
  function Cd(r, e, t, n, i, s, o) {
    const a = ru.distanceSqToPoint(r);
    if (a < t) {
      const l = new D();
      ru.closestPointToPoint(r, l), l.applyMatrix4(n);
      const c = i.ray.origin.distanceTo(l);
      if (c < i.near || c > i.far) return;
      s.push({
        distance: c,
        distanceToRay: Math.sqrt(a),
        point: l,
        index: e,
        face: null,
        faceIndex: null,
        barycoord: null,
        object: o
      });
    }
  }
  class Q_ extends Nt {
    constructor(e, t, n, i, s, o, a, l, c) {
      super(e, t, n, i, s, o, a, l, c), this.isCanvasTexture = true, this.needsUpdate = true;
    }
  }
  class xp extends Nt {
    constructor(e, t, n, i, s, o, a, l, c, u = ds) {
      if (u !== ds && u !== bs) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      n === void 0 && u === ds && (n = Dr), n === void 0 && u === bs && (n = Ts), super(null, i, s, o, a, l, u, n, c), this.isDepthTexture = true, this.image = {
        width: e,
        height: t
      }, this.magFilter = a !== void 0 ? a : nn, this.minFilter = l !== void 0 ? l : nn, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
    }
    copy(e) {
      return super.copy(e), this.compareFunction = e.compareFunction, this;
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
    }
  }
  class ii {
    constructor() {
      this.type = "Curve", this.arcLengthDivisions = 200;
    }
    getPoint() {
      return console.warn("THREE.Curve: .getPoint() not implemented."), null;
    }
    getPointAt(e, t) {
      const n = this.getUtoTmapping(e);
      return this.getPoint(n, t);
    }
    getPoints(e = 5) {
      const t = [];
      for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
      return t;
    }
    getSpacedPoints(e = 5) {
      const t = [];
      for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
      return t;
    }
    getLength() {
      const e = this.getLengths();
      return e[e.length - 1];
    }
    getLengths(e = this.arcLengthDivisions) {
      if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = false;
      const t = [];
      let n, i = this.getPoint(0), s = 0;
      t.push(0);
      for (let o = 1; o <= e; o++) n = this.getPoint(o / e), s += n.distanceTo(i), t.push(s), i = n;
      return this.cacheArcLengths = t, t;
    }
    updateArcLengths() {
      this.needsUpdate = true, this.getLengths();
    }
    getUtoTmapping(e, t) {
      const n = this.getLengths();
      let i = 0;
      const s = n.length;
      let o;
      t ? o = t : o = e * n[s - 1];
      let a = 0, l = s - 1, c;
      for (; a <= l; ) if (i = Math.floor(a + (l - a) / 2), c = n[i] - o, c < 0) a = i + 1;
      else if (c > 0) l = i - 1;
      else {
        l = i;
        break;
      }
      if (i = l, n[i] === o) return i / (s - 1);
      const u = n[i], d = n[i + 1] - u, f = (o - u) / d;
      return (i + f) / (s - 1);
    }
    getTangent(e, t) {
      let i = e - 1e-4, s = e + 1e-4;
      i < 0 && (i = 0), s > 1 && (s = 1);
      const o = this.getPoint(i), a = this.getPoint(s), l = t || (o.isVector2 ? new ee() : new D());
      return l.copy(a).sub(o).normalize(), l;
    }
    getTangentAt(e, t) {
      const n = this.getUtoTmapping(e);
      return this.getTangent(n, t);
    }
    computeFrenetFrames(e, t) {
      const n = new D(), i = [], s = [], o = [], a = new D(), l = new Fe();
      for (let f = 0; f <= e; f++) {
        const _ = f / e;
        i[f] = this.getTangentAt(_, new D());
      }
      s[0] = new D(), o[0] = new D();
      let c = Number.MAX_VALUE;
      const u = Math.abs(i[0].x), h = Math.abs(i[0].y), d = Math.abs(i[0].z);
      u <= c && (c = u, n.set(1, 0, 0)), h <= c && (c = h, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], a), o[0].crossVectors(i[0], s[0]);
      for (let f = 1; f <= e; f++) {
        if (s[f] = s[f - 1].clone(), o[f] = o[f - 1].clone(), a.crossVectors(i[f - 1], i[f]), a.length() > Number.EPSILON) {
          a.normalize();
          const _ = Math.acos(He(i[f - 1].dot(i[f]), -1, 1));
          s[f].applyMatrix4(l.makeRotationAxis(a, _));
        }
        o[f].crossVectors(i[f], s[f]);
      }
      if (t === true) {
        let f = Math.acos(He(s[0].dot(s[e]), -1, 1));
        f /= e, i[0].dot(a.crossVectors(s[0], s[e])) > 0 && (f = -f);
        for (let _ = 1; _ <= e; _++) s[_].applyMatrix4(l.makeRotationAxis(i[_], f * _)), o[_].crossVectors(i[_], s[_]);
      }
      return {
        tangents: i,
        normals: s,
        binormals: o
      };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.arcLengthDivisions = e.arcLengthDivisions, this;
    }
    toJSON() {
      const e = {
        metadata: {
          version: 4.6,
          type: "Curve",
          generator: "Curve.toJSON"
        }
      };
      return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
    }
    fromJSON(e) {
      return this.arcLengthDivisions = e.arcLengthDivisions, this;
    }
  }
  class Ku extends ii {
    constructor(e = 0, t = 0, n = 1, i = 1, s = 0, o = Math.PI * 2, a = false, l = 0) {
      super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = o, this.aClockwise = a, this.aRotation = l;
    }
    getPoint(e, t = new ee()) {
      const n = t, i = Math.PI * 2;
      let s = this.aEndAngle - this.aStartAngle;
      const o = Math.abs(s) < Number.EPSILON;
      for (; s < 0; ) s += i;
      for (; s > i; ) s -= i;
      s < Number.EPSILON && (o ? s = 0 : s = i), this.aClockwise === true && !o && (s === i ? s = -i : s = s - i);
      const a = this.aStartAngle + e * s;
      let l = this.aX + this.xRadius * Math.cos(a), c = this.aY + this.yRadius * Math.sin(a);
      if (this.aRotation !== 0) {
        const u = Math.cos(this.aRotation), h = Math.sin(this.aRotation), d = l - this.aX, f = c - this.aY;
        l = d * u - f * h + this.aX, c = d * h + f * u + this.aY;
      }
      return n.set(l, c);
    }
    copy(e) {
      return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
    }
    toJSON() {
      const e = super.toJSON();
      return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
    }
    fromJSON(e) {
      return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
    }
  }
  class e0 extends Ku {
    constructor(e, t, n, i, s, o) {
      super(e, t, n, n, i, s, o), this.isArcCurve = true, this.type = "ArcCurve";
    }
  }
  function ju() {
    let r = 0, e = 0, t = 0, n = 0;
    function i(s, o, a, l) {
      r = s, e = a, t = -3 * s + 3 * o - 2 * a - l, n = 2 * s - 2 * o + a + l;
    }
    return {
      initCatmullRom: function(s, o, a, l, c) {
        i(o, a, c * (a - s), c * (l - o));
      },
      initNonuniformCatmullRom: function(s, o, a, l, c, u, h) {
        let d = (o - s) / c - (a - s) / (c + u) + (a - o) / u, f = (a - o) / u - (l - o) / (u + h) + (l - a) / h;
        d *= u, f *= u, i(o, a, d, f);
      },
      calc: function(s) {
        const o = s * s, a = o * s;
        return r + e * s + t * o + n * a;
      }
    };
  }
  const Ca = new D(), ql = new ju(), Yl = new ju(), $l = new ju();
  class t0 extends ii {
    constructor(e = [], t = false, n = "centripetal", i = 0.5) {
      super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
    }
    getPoint(e, t = new D()) {
      const n = t, i = this.points, s = i.length, o = (s - (this.closed ? 0 : 1)) * e;
      let a = Math.floor(o), l = o - a;
      this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s : l === 0 && a === s - 1 && (a = s - 2, l = 1);
      let c, u;
      this.closed || a > 0 ? c = i[(a - 1) % s] : (Ca.subVectors(i[0], i[1]).add(i[0]), c = Ca);
      const h = i[a % s], d = i[(a + 1) % s];
      if (this.closed || a + 2 < s ? u = i[(a + 2) % s] : (Ca.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), u = Ca), this.curveType === "centripetal" || this.curveType === "chordal") {
        const f = this.curveType === "chordal" ? 0.5 : 0.25;
        let _ = Math.pow(c.distanceToSquared(h), f), g = Math.pow(h.distanceToSquared(d), f), m = Math.pow(d.distanceToSquared(u), f);
        g < 1e-4 && (g = 1), _ < 1e-4 && (_ = g), m < 1e-4 && (m = g), ql.initNonuniformCatmullRom(c.x, h.x, d.x, u.x, _, g, m), Yl.initNonuniformCatmullRom(c.y, h.y, d.y, u.y, _, g, m), $l.initNonuniformCatmullRom(c.z, h.z, d.z, u.z, _, g, m);
      } else this.curveType === "catmullrom" && (ql.initCatmullRom(c.x, h.x, d.x, u.x, this.tension), Yl.initCatmullRom(c.y, h.y, d.y, u.y, this.tension), $l.initCatmullRom(c.z, h.z, d.z, u.z, this.tension));
      return n.set(ql.calc(l), Yl.calc(l), $l.calc(l)), n;
    }
    copy(e) {
      super.copy(e), this.points = [];
      for (let t = 0, n = e.points.length; t < n; t++) {
        const i = e.points[t];
        this.points.push(i.clone());
      }
      return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
    }
    toJSON() {
      const e = super.toJSON();
      e.points = [];
      for (let t = 0, n = this.points.length; t < n; t++) {
        const i = this.points[t];
        e.points.push(i.toArray());
      }
      return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
    }
    fromJSON(e) {
      super.fromJSON(e), this.points = [];
      for (let t = 0, n = e.points.length; t < n; t++) {
        const i = e.points[t];
        this.points.push(new D().fromArray(i));
      }
      return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
    }
  }
  function Rd(r, e, t, n, i) {
    const s = (n - e) * 0.5, o = (i - t) * 0.5, a = r * r, l = r * a;
    return (2 * t - 2 * n + s + o) * l + (-3 * t + 3 * n - 2 * s - o) * a + s * r + t;
  }
  function n0(r, e) {
    const t = 1 - r;
    return t * t * e;
  }
  function i0(r, e) {
    return 2 * (1 - r) * r * e;
  }
  function r0(r, e) {
    return r * r * e;
  }
  function So(r, e, t, n) {
    return n0(r, e) + i0(r, t) + r0(r, n);
  }
  function s0(r, e) {
    const t = 1 - r;
    return t * t * t * e;
  }
  function o0(r, e) {
    const t = 1 - r;
    return 3 * t * t * r * e;
  }
  function a0(r, e) {
    return 3 * (1 - r) * r * r * e;
  }
  function l0(r, e) {
    return r * r * r * e;
  }
  function Mo(r, e, t, n, i) {
    return s0(r, e) + o0(r, t) + a0(r, n) + l0(r, i);
  }
  class vp extends ii {
    constructor(e = new ee(), t = new ee(), n = new ee(), i = new ee()) {
      super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
    }
    getPoint(e, t = new ee()) {
      const n = t, i = this.v0, s = this.v1, o = this.v2, a = this.v3;
      return n.set(Mo(e, i.x, s.x, o.x, a.x), Mo(e, i.y, s.y, o.y, a.y)), n;
    }
    copy(e) {
      return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
    }
    toJSON() {
      const e = super.toJSON();
      return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
    }
    fromJSON(e) {
      return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
    }
  }
  class c0 extends ii {
    constructor(e = new D(), t = new D(), n = new D(), i = new D()) {
      super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
    }
    getPoint(e, t = new D()) {
      const n = t, i = this.v0, s = this.v1, o = this.v2, a = this.v3;
      return n.set(Mo(e, i.x, s.x, o.x, a.x), Mo(e, i.y, s.y, o.y, a.y), Mo(e, i.z, s.z, o.z, a.z)), n;
    }
    copy(e) {
      return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
    }
    toJSON() {
      const e = super.toJSON();
      return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
    }
    fromJSON(e) {
      return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
    }
  }
  class yp extends ii {
    constructor(e = new ee(), t = new ee()) {
      super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = e, this.v2 = t;
    }
    getPoint(e, t = new ee()) {
      const n = t;
      return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
    }
    getPointAt(e, t) {
      return this.getPoint(e, t);
    }
    getTangent(e, t = new ee()) {
      return t.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(e, t) {
      return this.getTangent(e, t);
    }
    copy(e) {
      return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
    }
    toJSON() {
      const e = super.toJSON();
      return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
    }
    fromJSON(e) {
      return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
    }
  }
  class u0 extends ii {
    constructor(e = new D(), t = new D()) {
      super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
    }
    getPoint(e, t = new D()) {
      const n = t;
      return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
    }
    getPointAt(e, t) {
      return this.getPoint(e, t);
    }
    getTangent(e, t = new D()) {
      return t.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(e, t) {
      return this.getTangent(e, t);
    }
    copy(e) {
      return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
    }
    toJSON() {
      const e = super.toJSON();
      return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
    }
    fromJSON(e) {
      return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
    }
  }
  class Sp extends ii {
    constructor(e = new ee(), t = new ee(), n = new ee()) {
      super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
    }
    getPoint(e, t = new ee()) {
      const n = t, i = this.v0, s = this.v1, o = this.v2;
      return n.set(So(e, i.x, s.x, o.x), So(e, i.y, s.y, o.y)), n;
    }
    copy(e) {
      return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
    }
    toJSON() {
      const e = super.toJSON();
      return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
    }
    fromJSON(e) {
      return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
    }
  }
  class h0 extends ii {
    constructor(e = new D(), t = new D(), n = new D()) {
      super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
    }
    getPoint(e, t = new D()) {
      const n = t, i = this.v0, s = this.v1, o = this.v2;
      return n.set(So(e, i.x, s.x, o.x), So(e, i.y, s.y, o.y), So(e, i.z, s.z, o.z)), n;
    }
    copy(e) {
      return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
    }
    toJSON() {
      const e = super.toJSON();
      return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
    }
    fromJSON(e) {
      return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
    }
  }
  class Mp extends ii {
    constructor(e = []) {
      super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = e;
    }
    getPoint(e, t = new ee()) {
      const n = t, i = this.points, s = (i.length - 1) * e, o = Math.floor(s), a = s - o, l = i[o === 0 ? o : o - 1], c = i[o], u = i[o > i.length - 2 ? i.length - 1 : o + 1], h = i[o > i.length - 3 ? i.length - 1 : o + 2];
      return n.set(Rd(a, l.x, c.x, u.x, h.x), Rd(a, l.y, c.y, u.y, h.y)), n;
    }
    copy(e) {
      super.copy(e), this.points = [];
      for (let t = 0, n = e.points.length; t < n; t++) {
        const i = e.points[t];
        this.points.push(i.clone());
      }
      return this;
    }
    toJSON() {
      const e = super.toJSON();
      e.points = [];
      for (let t = 0, n = this.points.length; t < n; t++) {
        const i = this.points[t];
        e.points.push(i.toArray());
      }
      return e;
    }
    fromJSON(e) {
      super.fromJSON(e), this.points = [];
      for (let t = 0, n = e.points.length; t < n; t++) {
        const i = e.points[t];
        this.points.push(new ee().fromArray(i));
      }
      return this;
    }
  }
  var su = Object.freeze({
    __proto__: null,
    ArcCurve: e0,
    CatmullRomCurve3: t0,
    CubicBezierCurve: vp,
    CubicBezierCurve3: c0,
    EllipseCurve: Ku,
    LineCurve: yp,
    LineCurve3: u0,
    QuadraticBezierCurve: Sp,
    QuadraticBezierCurve3: h0,
    SplineCurve: Mp
  });
  class d0 extends ii {
    constructor() {
      super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
    }
    add(e) {
      this.curves.push(e);
    }
    closePath() {
      const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
      if (!e.equals(t)) {
        const n = e.isVector2 === true ? "LineCurve" : "LineCurve3";
        this.curves.push(new su[n](t, e));
      }
      return this;
    }
    getPoint(e, t) {
      const n = e * this.getLength(), i = this.getCurveLengths();
      let s = 0;
      for (; s < i.length; ) {
        if (i[s] >= n) {
          const o = i[s] - n, a = this.curves[s], l = a.getLength(), c = l === 0 ? 0 : 1 - o / l;
          return a.getPointAt(c, t);
        }
        s++;
      }
      return null;
    }
    getLength() {
      const e = this.getCurveLengths();
      return e[e.length - 1];
    }
    updateArcLengths() {
      this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
      const e = [];
      let t = 0;
      for (let n = 0, i = this.curves.length; n < i; n++) t += this.curves[n].getLength(), e.push(t);
      return this.cacheLengths = e, e;
    }
    getSpacedPoints(e = 40) {
      const t = [];
      for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
      return this.autoClose && t.push(t[0]), t;
    }
    getPoints(e = 12) {
      const t = [];
      let n;
      for (let i = 0, s = this.curves; i < s.length; i++) {
        const o = s[i], a = o.isEllipseCurve ? e * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? e * o.points.length : e, l = o.getPoints(a);
        for (let c = 0; c < l.length; c++) {
          const u = l[c];
          n && n.equals(u) || (t.push(u), n = u);
        }
      }
      return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
    }
    copy(e) {
      super.copy(e), this.curves = [];
      for (let t = 0, n = e.curves.length; t < n; t++) {
        const i = e.curves[t];
        this.curves.push(i.clone());
      }
      return this.autoClose = e.autoClose, this;
    }
    toJSON() {
      const e = super.toJSON();
      e.autoClose = this.autoClose, e.curves = [];
      for (let t = 0, n = this.curves.length; t < n; t++) {
        const i = this.curves[t];
        e.curves.push(i.toJSON());
      }
      return e;
    }
    fromJSON(e) {
      super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
      for (let t = 0, n = e.curves.length; t < n; t++) {
        const i = e.curves[t];
        this.curves.push(new su[i.type]().fromJSON(i));
      }
      return this;
    }
  }
  class ou extends d0 {
    constructor(e) {
      super(), this.type = "Path", this.currentPoint = new ee(), e && this.setFromPoints(e);
    }
    setFromPoints(e) {
      this.moveTo(e[0].x, e[0].y);
      for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
      return this;
    }
    moveTo(e, t) {
      return this.currentPoint.set(e, t), this;
    }
    lineTo(e, t) {
      const n = new yp(this.currentPoint.clone(), new ee(e, t));
      return this.curves.push(n), this.currentPoint.set(e, t), this;
    }
    quadraticCurveTo(e, t, n, i) {
      const s = new Sp(this.currentPoint.clone(), new ee(e, t), new ee(n, i));
      return this.curves.push(s), this.currentPoint.set(n, i), this;
    }
    bezierCurveTo(e, t, n, i, s, o) {
      const a = new vp(this.currentPoint.clone(), new ee(e, t), new ee(n, i), new ee(s, o));
      return this.curves.push(a), this.currentPoint.set(s, o), this;
    }
    splineThru(e) {
      const t = [
        this.currentPoint.clone()
      ].concat(e), n = new Mp(t);
      return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
    }
    arc(e, t, n, i, s, o) {
      const a = this.currentPoint.x, l = this.currentPoint.y;
      return this.absarc(e + a, t + l, n, i, s, o), this;
    }
    absarc(e, t, n, i, s, o) {
      return this.absellipse(e, t, n, n, i, s, o), this;
    }
    ellipse(e, t, n, i, s, o, a, l) {
      const c = this.currentPoint.x, u = this.currentPoint.y;
      return this.absellipse(e + c, t + u, n, i, s, o, a, l), this;
    }
    absellipse(e, t, n, i, s, o, a, l) {
      const c = new Ku(e, t, n, i, s, o, a, l);
      if (this.curves.length > 0) {
        const h = c.getPoint(0);
        h.equals(this.currentPoint) || this.lineTo(h.x, h.y);
      }
      this.curves.push(c);
      const u = c.getPoint(1);
      return this.currentPoint.copy(u), this;
    }
    copy(e) {
      return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
    }
    toJSON() {
      const e = super.toJSON();
      return e.currentPoint = this.currentPoint.toArray(), e;
    }
    fromJSON(e) {
      return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
    }
  }
  class Ga extends ou {
    constructor(e) {
      super(e), this.uuid = Nn(), this.type = "Shape", this.holes = [];
    }
    getPointsHoles(e) {
      const t = [];
      for (let n = 0, i = this.holes.length; n < i; n++) t[n] = this.holes[n].getPoints(e);
      return t;
    }
    extractPoints(e) {
      return {
        shape: this.getPoints(e),
        holes: this.getPointsHoles(e)
      };
    }
    copy(e) {
      super.copy(e), this.holes = [];
      for (let t = 0, n = e.holes.length; t < n; t++) {
        const i = e.holes[t];
        this.holes.push(i.clone());
      }
      return this;
    }
    toJSON() {
      const e = super.toJSON();
      e.uuid = this.uuid, e.holes = [];
      for (let t = 0, n = this.holes.length; t < n; t++) {
        const i = this.holes[t];
        e.holes.push(i.toJSON());
      }
      return e;
    }
    fromJSON(e) {
      super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
      for (let t = 0, n = e.holes.length; t < n; t++) {
        const i = e.holes[t];
        this.holes.push(new ou().fromJSON(i));
      }
      return this;
    }
  }
  const f0 = {
    triangulate: function(r, e, t = 2) {
      const n = e && e.length, i = n ? e[0] * t : r.length;
      let s = Ep(r, 0, i, t, true);
      const o = [];
      if (!s || s.next === s.prev) return o;
      let a, l, c, u, h, d, f;
      if (n && (s = x0(r, e, s, t)), r.length > 80 * t) {
        a = c = r[0], l = u = r[1];
        for (let _ = t; _ < i; _ += t) h = r[_], d = r[_ + 1], h < a && (a = h), d < l && (l = d), h > c && (c = h), d > u && (u = d);
        f = Math.max(c - a, u - l), f = f !== 0 ? 32767 / f : 0;
      }
      return zo(s, o, t, a, l, f, 0), o;
    }
  };
  function Ep(r, e, t, n, i) {
    let s, o;
    if (i === R0(r, e, t, n) > 0) for (s = e; s < t; s += n) o = Pd(s, r[s], r[s + 1], o);
    else for (s = t - n; s >= e; s -= n) o = Pd(s, r[s], r[s + 1], o);
    return o && dl(o, o.next) && (Vo(o), o = o.next), o;
  }
  function Ir(r, e) {
    if (!r) return r;
    e || (e = r);
    let t = r, n;
    do
      if (n = false, !t.steiner && (dl(t, t.next) || St(t.prev, t, t.next) === 0)) {
        if (Vo(t), t = e = t.prev, t === t.next) break;
        n = true;
      } else t = t.next;
    while (n || t !== e);
    return e;
  }
  function zo(r, e, t, n, i, s, o) {
    if (!r) return;
    !o && s && E0(r, n, i, s);
    let a = r, l, c;
    for (; r.prev !== r.next; ) {
      if (l = r.prev, c = r.next, s ? m0(r, n, i, s) : p0(r)) {
        e.push(l.i / t | 0), e.push(r.i / t | 0), e.push(c.i / t | 0), Vo(r), r = c.next, a = c.next;
        continue;
      }
      if (r = c, r === a) {
        o ? o === 1 ? (r = g0(Ir(r), e, t), zo(r, e, t, n, i, s, 2)) : o === 2 && _0(r, e, t, n, i, s) : zo(Ir(r), e, t, n, i, s, 1);
        break;
      }
    }
  }
  function p0(r) {
    const e = r.prev, t = r, n = r.next;
    if (St(e, t, n) >= 0) return false;
    const i = e.x, s = t.x, o = n.x, a = e.y, l = t.y, c = n.y, u = i < s ? i < o ? i : o : s < o ? s : o, h = a < l ? a < c ? a : c : l < c ? l : c, d = i > s ? i > o ? i : o : s > o ? s : o, f = a > l ? a > c ? a : c : l > c ? l : c;
    let _ = n.next;
    for (; _ !== e; ) {
      if (_.x >= u && _.x <= d && _.y >= h && _.y <= f && as(i, a, s, l, o, c, _.x, _.y) && St(_.prev, _, _.next) >= 0) return false;
      _ = _.next;
    }
    return true;
  }
  function m0(r, e, t, n) {
    const i = r.prev, s = r, o = r.next;
    if (St(i, s, o) >= 0) return false;
    const a = i.x, l = s.x, c = o.x, u = i.y, h = s.y, d = o.y, f = a < l ? a < c ? a : c : l < c ? l : c, _ = u < h ? u < d ? u : d : h < d ? h : d, g = a > l ? a > c ? a : c : l > c ? l : c, m = u > h ? u > d ? u : d : h > d ? h : d, p = au(f, _, e, t, n), y = au(g, m, e, t, n);
    let v = r.prevZ, x = r.nextZ;
    for (; v && v.z >= p && x && x.z <= y; ) {
      if (v.x >= f && v.x <= g && v.y >= _ && v.y <= m && v !== i && v !== o && as(a, u, l, h, c, d, v.x, v.y) && St(v.prev, v, v.next) >= 0 || (v = v.prevZ, x.x >= f && x.x <= g && x.y >= _ && x.y <= m && x !== i && x !== o && as(a, u, l, h, c, d, x.x, x.y) && St(x.prev, x, x.next) >= 0)) return false;
      x = x.nextZ;
    }
    for (; v && v.z >= p; ) {
      if (v.x >= f && v.x <= g && v.y >= _ && v.y <= m && v !== i && v !== o && as(a, u, l, h, c, d, v.x, v.y) && St(v.prev, v, v.next) >= 0) return false;
      v = v.prevZ;
    }
    for (; x && x.z <= y; ) {
      if (x.x >= f && x.x <= g && x.y >= _ && x.y <= m && x !== i && x !== o && as(a, u, l, h, c, d, x.x, x.y) && St(x.prev, x, x.next) >= 0) return false;
      x = x.nextZ;
    }
    return true;
  }
  function g0(r, e, t) {
    let n = r;
    do {
      const i = n.prev, s = n.next.next;
      !dl(i, s) && Tp(i, n, n.next, s) && ko(i, s) && ko(s, i) && (e.push(i.i / t | 0), e.push(n.i / t | 0), e.push(s.i / t | 0), Vo(n), Vo(n.next), n = r = s), n = n.next;
    } while (n !== r);
    return Ir(n);
  }
  function _0(r, e, t, n, i, s) {
    let o = r;
    do {
      let a = o.next.next;
      for (; a !== o.prev; ) {
        if (o.i !== a.i && w0(o, a)) {
          let l = bp(o, a);
          o = Ir(o, o.next), l = Ir(l, l.next), zo(o, e, t, n, i, s, 0), zo(l, e, t, n, i, s, 0);
          return;
        }
        a = a.next;
      }
      o = o.next;
    } while (o !== r);
  }
  function x0(r, e, t, n) {
    const i = [];
    let s, o, a, l, c;
    for (s = 0, o = e.length; s < o; s++) a = e[s] * n, l = s < o - 1 ? e[s + 1] * n : r.length, c = Ep(r, a, l, n, false), c === c.next && (c.steiner = true), i.push(b0(c));
    for (i.sort(v0), s = 0; s < i.length; s++) t = y0(i[s], t);
    return t;
  }
  function v0(r, e) {
    return r.x - e.x;
  }
  function y0(r, e) {
    const t = S0(r, e);
    if (!t) return e;
    const n = bp(t, r);
    return Ir(n, n.next), Ir(t, t.next);
  }
  function S0(r, e) {
    let t = e, n = -1 / 0, i;
    const s = r.x, o = r.y;
    do {
      if (o <= t.y && o >= t.next.y && t.next.y !== t.y) {
        const d = t.x + (o - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
        if (d <= s && d > n && (n = d, i = t.x < t.next.x ? t : t.next, d === s)) return i;
      }
      t = t.next;
    } while (t !== e);
    if (!i) return null;
    const a = i, l = i.x, c = i.y;
    let u = 1 / 0, h;
    t = i;
    do
      s >= t.x && t.x >= l && s !== t.x && as(o < c ? s : n, o, l, c, o < c ? n : s, o, t.x, t.y) && (h = Math.abs(o - t.y) / (s - t.x), ko(t, r) && (h < u || h === u && (t.x > i.x || t.x === i.x && M0(i, t))) && (i = t, u = h)), t = t.next;
    while (t !== a);
    return i;
  }
  function M0(r, e) {
    return St(r.prev, r, e.prev) < 0 && St(e.next, r, r.next) < 0;
  }
  function E0(r, e, t, n) {
    let i = r;
    do
      i.z === 0 && (i.z = au(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
    while (i !== r);
    i.prevZ.nextZ = null, i.prevZ = null, T0(i);
  }
  function T0(r) {
    let e, t, n, i, s, o, a, l, c = 1;
    do {
      for (t = r, r = null, s = null, o = 0; t; ) {
        for (o++, n = t, a = 0, e = 0; e < c && (a++, n = n.nextZ, !!n); e++) ;
        for (l = c; a > 0 || l > 0 && n; ) a !== 0 && (l === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, a--) : (i = n, n = n.nextZ, l--), s ? s.nextZ = i : r = i, i.prevZ = s, s = i;
        t = n;
      }
      s.nextZ = null, c *= 2;
    } while (o > 1);
    return r;
  }
  function au(r, e, t, n, i) {
    return r = (r - t) * i | 0, e = (e - n) * i | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1;
  }
  function b0(r) {
    let e = r, t = r;
    do
      (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
    while (e !== r);
    return t;
  }
  function as(r, e, t, n, i, s, o, a) {
    return (i - o) * (e - a) >= (r - o) * (s - a) && (r - o) * (n - a) >= (t - o) * (e - a) && (t - o) * (s - a) >= (i - o) * (n - a);
  }
  function w0(r, e) {
    return r.next.i !== e.i && r.prev.i !== e.i && !A0(r, e) && (ko(r, e) && ko(e, r) && C0(r, e) && (St(r.prev, r, e.prev) || St(r, e.prev, e)) || dl(r, e) && St(r.prev, r, r.next) > 0 && St(e.prev, e, e.next) > 0);
  }
  function St(r, e, t) {
    return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
  }
  function dl(r, e) {
    return r.x === e.x && r.y === e.y;
  }
  function Tp(r, e, t, n) {
    const i = Pa(St(r, e, t)), s = Pa(St(r, e, n)), o = Pa(St(t, n, r)), a = Pa(St(t, n, e));
    return !!(i !== s && o !== a || i === 0 && Ra(r, t, e) || s === 0 && Ra(r, n, e) || o === 0 && Ra(t, r, n) || a === 0 && Ra(t, e, n));
  }
  function Ra(r, e, t) {
    return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y);
  }
  function Pa(r) {
    return r > 0 ? 1 : r < 0 ? -1 : 0;
  }
  function A0(r, e) {
    let t = r;
    do {
      if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && Tp(t, t.next, r, e)) return true;
      t = t.next;
    } while (t !== r);
    return false;
  }
  function ko(r, e) {
    return St(r.prev, r, r.next) < 0 ? St(r, e, r.next) >= 0 && St(r, r.prev, e) >= 0 : St(r, e, r.prev) < 0 || St(r, r.next, e) < 0;
  }
  function C0(r, e) {
    let t = r, n = false;
    const i = (r.x + e.x) / 2, s = (r.y + e.y) / 2;
    do
      t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
    while (t !== r);
    return n;
  }
  function bp(r, e) {
    const t = new lu(r.i, r.x, r.y), n = new lu(e.i, e.x, e.y), i = r.next, s = e.prev;
    return r.next = e, e.prev = r, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
  }
  function Pd(r, e, t, n) {
    const i = new lu(r, e, t);
    return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
  }
  function Vo(r) {
    r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
  }
  function lu(r, e, t) {
    this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
  function R0(r, e, t, n) {
    let i = 0;
    for (let s = e, o = t - n; s < t; s += n) i += (r[o] - r[s]) * (r[s + 1] + r[o + 1]), o = s;
    return i;
  }
  class ps {
    static area(e) {
      const t = e.length;
      let n = 0;
      for (let i = t - 1, s = 0; s < t; i = s++) n += e[i].x * e[s].y - e[s].x * e[i].y;
      return n * 0.5;
    }
    static isClockWise(e) {
      return ps.area(e) < 0;
    }
    static triangulateShape(e, t) {
      const n = [], i = [], s = [];
      Ld(e), Dd(n, e);
      let o = e.length;
      t.forEach(Ld);
      for (let l = 0; l < t.length; l++) i.push(o), o += t[l].length, Dd(n, t[l]);
      const a = f0.triangulate(n, i);
      for (let l = 0; l < a.length; l += 3) s.push(a.slice(l, l + 3));
      return s;
    }
  }
  function Ld(r) {
    const e = r.length;
    e > 2 && r[e - 1].equals(r[0]) && r.pop();
  }
  function Dd(r, e) {
    for (let t = 0; t < e.length; t++) r.push(e[t].x), r.push(e[t].y);
  }
  class Zu extends pn {
    constructor(e = new Ga([
      new ee(0.5, 0.5),
      new ee(-0.5, 0.5),
      new ee(-0.5, -0.5),
      new ee(0.5, -0.5)
    ]), t = {}) {
      super(), this.type = "ExtrudeGeometry", this.parameters = {
        shapes: e,
        options: t
      }, e = Array.isArray(e) ? e : [
        e
      ];
      const n = this, i = [], s = [];
      for (let a = 0, l = e.length; a < l; a++) {
        const c = e[a];
        o(c);
      }
      this.setAttribute("position", new Vt(i, 3)), this.setAttribute("uv", new Vt(s, 2)), this.computeVertexNormals();
      function o(a) {
        const l = [], c = t.curveSegments !== void 0 ? t.curveSegments : 12, u = t.steps !== void 0 ? t.steps : 1, h = t.depth !== void 0 ? t.depth : 1;
        let d = t.bevelEnabled !== void 0 ? t.bevelEnabled : true, f = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, _ = t.bevelSize !== void 0 ? t.bevelSize : f - 0.1, g = t.bevelOffset !== void 0 ? t.bevelOffset : 0, m = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
        const p = t.extrudePath, y = t.UVGenerator !== void 0 ? t.UVGenerator : P0;
        let v, x = false, w, b, A, P;
        p && (v = p.getSpacedPoints(u), x = true, d = false, w = p.computeFrenetFrames(u, false), b = new D(), A = new D(), P = new D()), d || (m = 0, f = 0, _ = 0, g = 0);
        const S = a.extractPoints(c);
        let M = S.shape;
        const L = S.holes;
        if (!ps.isClockWise(M)) {
          M = M.reverse();
          for (let Q = 0, J = L.length; Q < J; Q++) {
            const R = L[Q];
            ps.isClockWise(R) && (L[Q] = R.reverse());
          }
        }
        const O = ps.triangulateShape(M, L), V = M;
        for (let Q = 0, J = L.length; Q < J; Q++) {
          const R = L[Q];
          M = M.concat(R);
        }
        function q(Q, J, R) {
          return J || console.error("THREE.ExtrudeGeometry: vec does not exist"), Q.clone().addScaledVector(J, R);
        }
        const B = M.length, K = O.length;
        function H(Q, J, R) {
          let be, te, xe;
          const se = Q.x - J.x, Ie = Q.y - J.y, fe = R.x - Q.x, C = R.y - Q.y, E = se * se + Ie * Ie, F = se * C - Ie * fe;
          if (Math.abs(F) > Number.EPSILON) {
            const Y = Math.sqrt(E), Z = Math.sqrt(fe * fe + C * C), $ = J.x - Ie / Y, Te = J.y + se / Y, ue = R.x - C / Z, _e = R.y + fe / Z, We = ((ue - $) * C - (_e - Te) * fe) / (se * C - Ie * fe);
            be = $ + se * We - Q.x, te = Te + Ie * We - Q.y;
            const re = be * be + te * te;
            if (re <= 2) return new ee(be, te);
            xe = Math.sqrt(re / 2);
          } else {
            let Y = false;
            se > Number.EPSILON ? fe > Number.EPSILON && (Y = true) : se < -Number.EPSILON ? fe < -Number.EPSILON && (Y = true) : Math.sign(Ie) === Math.sign(C) && (Y = true), Y ? (be = -Ie, te = se, xe = Math.sqrt(E)) : (be = se, te = Ie, xe = Math.sqrt(E / 2));
          }
          return new ee(be / xe, te / xe);
        }
        const oe = [];
        for (let Q = 0, J = V.length, R = J - 1, be = Q + 1; Q < J; Q++, R++, be++) R === J && (R = 0), be === J && (be = 0), oe[Q] = H(V[Q], V[R], V[be]);
        const ce = [];
        let ge, Le = oe.concat();
        for (let Q = 0, J = L.length; Q < J; Q++) {
          const R = L[Q];
          ge = [];
          for (let be = 0, te = R.length, xe = te - 1, se = be + 1; be < te; be++, xe++, se++) xe === te && (xe = 0), se === te && (se = 0), ge[be] = H(R[be], R[xe], R[se]);
          ce.push(ge), Le = Le.concat(ge);
        }
        for (let Q = 0; Q < m; Q++) {
          const J = Q / m, R = f * Math.cos(J * Math.PI / 2), be = _ * Math.sin(J * Math.PI / 2) + g;
          for (let te = 0, xe = V.length; te < xe; te++) {
            const se = q(V[te], oe[te], be);
            ae(se.x, se.y, -R);
          }
          for (let te = 0, xe = L.length; te < xe; te++) {
            const se = L[te];
            ge = ce[te];
            for (let Ie = 0, fe = se.length; Ie < fe; Ie++) {
              const C = q(se[Ie], ge[Ie], be);
              ae(C.x, C.y, -R);
            }
          }
        }
        const Ke = _ + g;
        for (let Q = 0; Q < B; Q++) {
          const J = d ? q(M[Q], Le[Q], Ke) : M[Q];
          x ? (A.copy(w.normals[0]).multiplyScalar(J.x), b.copy(w.binormals[0]).multiplyScalar(J.y), P.copy(v[0]).add(A).add(b), ae(P.x, P.y, P.z)) : ae(J.x, J.y, 0);
        }
        for (let Q = 1; Q <= u; Q++) for (let J = 0; J < B; J++) {
          const R = d ? q(M[J], Le[J], Ke) : M[J];
          x ? (A.copy(w.normals[Q]).multiplyScalar(R.x), b.copy(w.binormals[Q]).multiplyScalar(R.y), P.copy(v[Q]).add(A).add(b), ae(P.x, P.y, P.z)) : ae(R.x, R.y, h / u * Q);
        }
        for (let Q = m - 1; Q >= 0; Q--) {
          const J = Q / m, R = f * Math.cos(J * Math.PI / 2), be = _ * Math.sin(J * Math.PI / 2) + g;
          for (let te = 0, xe = V.length; te < xe; te++) {
            const se = q(V[te], oe[te], be);
            ae(se.x, se.y, h + R);
          }
          for (let te = 0, xe = L.length; te < xe; te++) {
            const se = L[te];
            ge = ce[te];
            for (let Ie = 0, fe = se.length; Ie < fe; Ie++) {
              const C = q(se[Ie], ge[Ie], be);
              x ? ae(C.x, C.y + v[u - 1].y, v[u - 1].x + R) : ae(C.x, C.y, h + R);
            }
          }
        }
        X(), ie();
        function X() {
          const Q = i.length / 3;
          if (d) {
            let J = 0, R = B * J;
            for (let be = 0; be < K; be++) {
              const te = O[be];
              Ae(te[2] + R, te[1] + R, te[0] + R);
            }
            J = u + m * 2, R = B * J;
            for (let be = 0; be < K; be++) {
              const te = O[be];
              Ae(te[0] + R, te[1] + R, te[2] + R);
            }
          } else {
            for (let J = 0; J < K; J++) {
              const R = O[J];
              Ae(R[2], R[1], R[0]);
            }
            for (let J = 0; J < K; J++) {
              const R = O[J];
              Ae(R[0] + B * u, R[1] + B * u, R[2] + B * u);
            }
          }
          n.addGroup(Q, i.length / 3 - Q, 0);
        }
        function ie() {
          const Q = i.length / 3;
          let J = 0;
          Ee(V, J), J += V.length;
          for (let R = 0, be = L.length; R < be; R++) {
            const te = L[R];
            Ee(te, J), J += te.length;
          }
          n.addGroup(Q, i.length / 3 - Q, 1);
        }
        function Ee(Q, J) {
          let R = Q.length;
          for (; --R >= 0; ) {
            const be = R;
            let te = R - 1;
            te < 0 && (te = Q.length - 1);
            for (let xe = 0, se = u + m * 2; xe < se; xe++) {
              const Ie = B * xe, fe = B * (xe + 1), C = J + be + Ie, E = J + te + Ie, F = J + te + fe, Y = J + be + fe;
              je(C, E, F, Y);
            }
          }
        }
        function ae(Q, J, R) {
          l.push(Q), l.push(J), l.push(R);
        }
        function Ae(Q, J, R) {
          we(Q), we(J), we(R);
          const be = i.length / 3, te = y.generateTopUV(n, i, be - 3, be - 2, be - 1);
          nt(te[0]), nt(te[1]), nt(te[2]);
        }
        function je(Q, J, R, be) {
          we(Q), we(J), we(be), we(J), we(R), we(be);
          const te = i.length / 3, xe = y.generateSideWallUV(n, i, te - 6, te - 3, te - 2, te - 1);
          nt(xe[0]), nt(xe[1]), nt(xe[3]), nt(xe[1]), nt(xe[2]), nt(xe[3]);
        }
        function we(Q) {
          i.push(l[Q * 3 + 0]), i.push(l[Q * 3 + 1]), i.push(l[Q * 3 + 2]);
        }
        function nt(Q) {
          s.push(Q.x), s.push(Q.y);
        }
      }
    }
    copy(e) {
      return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
    }
    toJSON() {
      const e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
      return L0(t, n, e);
    }
    static fromJSON(e, t) {
      const n = [];
      for (let s = 0, o = e.shapes.length; s < o; s++) {
        const a = t[e.shapes[s]];
        n.push(a);
      }
      const i = e.options.extrudePath;
      return i !== void 0 && (e.options.extrudePath = new su[i.type]().fromJSON(i)), new Zu(n, e.options);
    }
  }
  const P0 = {
    generateTopUV: function(r, e, t, n, i) {
      const s = e[t * 3], o = e[t * 3 + 1], a = e[n * 3], l = e[n * 3 + 1], c = e[i * 3], u = e[i * 3 + 1];
      return [
        new ee(s, o),
        new ee(a, l),
        new ee(c, u)
      ];
    },
    generateSideWallUV: function(r, e, t, n, i, s) {
      const o = e[t * 3], a = e[t * 3 + 1], l = e[t * 3 + 2], c = e[n * 3], u = e[n * 3 + 1], h = e[n * 3 + 2], d = e[i * 3], f = e[i * 3 + 1], _ = e[i * 3 + 2], g = e[s * 3], m = e[s * 3 + 1], p = e[s * 3 + 2];
      return Math.abs(a - u) < Math.abs(o - c) ? [
        new ee(o, 1 - l),
        new ee(c, 1 - h),
        new ee(d, 1 - _),
        new ee(g, 1 - p)
      ] : [
        new ee(a, 1 - l),
        new ee(u, 1 - h),
        new ee(f, 1 - _),
        new ee(m, 1 - p)
      ];
    }
  };
  function L0(r, e, t) {
    if (t.shapes = [], Array.isArray(r)) for (let n = 0, i = r.length; n < i; n++) {
      const s = r[n];
      t.shapes.push(s.uuid);
    }
    else t.shapes.push(r.uuid);
    return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
  }
  class Zo extends pn {
    constructor(e = 1, t = 1, n = 1, i = 1) {
      super(), this.type = "PlaneGeometry", this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i
      };
      const s = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(i), c = a + 1, u = l + 1, h = e / a, d = t / l, f = [], _ = [], g = [], m = [];
      for (let p = 0; p < u; p++) {
        const y = p * d - o;
        for (let v = 0; v < c; v++) {
          const x = v * h - s;
          _.push(x, -y, 0), g.push(0, 0, 1), m.push(v / a), m.push(1 - p / l);
        }
      }
      for (let p = 0; p < l; p++) for (let y = 0; y < a; y++) {
        const v = y + c * p, x = y + c * (p + 1), w = y + 1 + c * (p + 1), b = y + 1 + c * p;
        f.push(v, x, b), f.push(x, w, b);
      }
      this.setIndex(f), this.setAttribute("position", new Vt(_, 3)), this.setAttribute("normal", new Vt(g, 3)), this.setAttribute("uv", new Vt(m, 2));
    }
    copy(e) {
      return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
    }
    static fromJSON(e) {
      return new Zo(e.width, e.height, e.widthSegments, e.heightSegments);
    }
  }
  class Ju extends pn {
    constructor(e = 1, t = 32, n = 16, i = 0, s = Math.PI * 2, o = 0, a = Math.PI) {
      super(), this.type = "SphereGeometry", this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: i,
        phiLength: s,
        thetaStart: o,
        thetaLength: a
      }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
      const l = Math.min(o + a, Math.PI);
      let c = 0;
      const u = [], h = new D(), d = new D(), f = [], _ = [], g = [], m = [];
      for (let p = 0; p <= n; p++) {
        const y = [], v = p / n;
        let x = 0;
        p === 0 && o === 0 ? x = 0.5 / t : p === n && l === Math.PI && (x = -0.5 / t);
        for (let w = 0; w <= t; w++) {
          const b = w / t;
          h.x = -e * Math.cos(i + b * s) * Math.sin(o + v * a), h.y = e * Math.cos(o + v * a), h.z = e * Math.sin(i + b * s) * Math.sin(o + v * a), _.push(h.x, h.y, h.z), d.copy(h).normalize(), g.push(d.x, d.y, d.z), m.push(b + x, 1 - v), y.push(c++);
        }
        u.push(y);
      }
      for (let p = 0; p < n; p++) for (let y = 0; y < t; y++) {
        const v = u[p][y + 1], x = u[p][y], w = u[p + 1][y], b = u[p + 1][y + 1];
        (p !== 0 || o > 0) && f.push(v, x, b), (p !== n - 1 || l < Math.PI) && f.push(x, w, b);
      }
      this.setIndex(f), this.setAttribute("position", new Vt(_, 3)), this.setAttribute("normal", new Vt(g, 3)), this.setAttribute("uv", new Vt(m, 2));
    }
    copy(e) {
      return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
    }
    static fromJSON(e) {
      return new Ju(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
    }
  }
  class ks extends Jn {
    constructor(e) {
      super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = {
        STANDARD: ""
      }, this.color = new Ce(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ce(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ip, this.normalScale = new ee(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Xn(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.defines = {
        STANDARD: ""
      }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
    }
  }
  class ri extends ks {
    constructor(e) {
      super(), this.isMeshPhysicalMaterial = true, this.defines = {
        STANDARD: "",
        PHYSICAL: ""
      }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new ee(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
        get: function() {
          return He(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
        },
        set: function(t) {
          this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
        }
      }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [
        100,
        400
      ], this.iridescenceThicknessMap = null, this.sheenColor = new Ce(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Ce(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Ce(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
    }
    get anisotropy() {
      return this._anisotropy;
    }
    set anisotropy(e) {
      this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
    }
    get clearcoat() {
      return this._clearcoat;
    }
    set clearcoat(e) {
      this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
    }
    get iridescence() {
      return this._iridescence;
    }
    set iridescence(e) {
      this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
    }
    get dispersion() {
      return this._dispersion;
    }
    set dispersion(e) {
      this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
    }
    get sheen() {
      return this._sheen;
    }
    set sheen(e) {
      this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
    }
    get transmission() {
      return this._transmission;
    }
    set transmission(e) {
      this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
    }
    copy(e) {
      return super.copy(e), this.defines = {
        STANDARD: "",
        PHYSICAL: ""
      }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [
        ...e.iridescenceThicknessRange
      ], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
    }
  }
  class D0 extends Jn {
    constructor(e) {
      super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Hg, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
    }
  }
  class I0 extends Jn {
    constructor(e) {
      super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
    }
  }
  function La(r, e, t) {
    return !r || !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
  }
  function N0(r) {
    return ArrayBuffer.isView(r) && !(r instanceof DataView);
  }
  function U0(r) {
    function e(i, s) {
      return r[i] - r[s];
    }
    const t = r.length, n = new Array(t);
    for (let i = 0; i !== t; ++i) n[i] = i;
    return n.sort(e), n;
  }
  function Id(r, e, t) {
    const n = r.length, i = new r.constructor(n);
    for (let s = 0, o = 0; o !== n; ++s) {
      const a = t[s] * e;
      for (let l = 0; l !== e; ++l) i[o++] = r[a + l];
    }
    return i;
  }
  function wp(r, e, t, n) {
    let i = 1, s = r[0];
    for (; s !== void 0 && s[n] === void 0; ) s = r[i++];
    if (s === void 0) return;
    let o = s[n];
    if (o !== void 0) if (Array.isArray(o)) do
      o = s[n], o !== void 0 && (e.push(s.time), t.push.apply(t, o)), s = r[i++];
    while (s !== void 0);
    else if (o.toArray !== void 0) do
      o = s[n], o !== void 0 && (e.push(s.time), o.toArray(t, t.length)), s = r[i++];
    while (s !== void 0);
    else do
      o = s[n], o !== void 0 && (e.push(s.time), t.push(o)), s = r[i++];
    while (s !== void 0);
  }
  class Jo {
    constructor(e, t, n, i) {
      this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(e) {
      const t = this.parameterPositions;
      let n = this._cachedIndex, i = t[n], s = t[n - 1];
      n: {
        e: {
          let o;
          t: {
            i: if (!(e < i)) {
              for (let a = n + 2; ; ) {
                if (i === void 0) {
                  if (e < s) break i;
                  return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                }
                if (n === a) break;
                if (s = i, i = t[++n], e < i) break e;
              }
              o = t.length;
              break t;
            }
            if (!(e >= s)) {
              const a = t[1];
              e < a && (n = 2, s = a);
              for (let l = n - 2; ; ) {
                if (s === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
                if (n === l) break;
                if (i = s, s = t[--n - 1], e >= s) break e;
              }
              o = n, n = 0;
              break t;
            }
            break n;
          }
          for (; n < o; ) {
            const a = n + o >>> 1;
            e < t[a] ? o = a : n = a + 1;
          }
          if (i = t[n], s = t[n - 1], s === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
          if (i === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
        }
        this._cachedIndex = n, this.intervalChanged_(n, s, i);
      }
      return this.interpolate_(n, s, e, i);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(e) {
      const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
      for (let o = 0; o !== i; ++o) t[o] = n[s + o];
      return t;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {
    }
  }
  class O0 extends Jo {
    constructor(e, t, n, i) {
      super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
        endingStart: qh,
        endingEnd: qh
      };
    }
    intervalChanged_(e, t, n) {
      const i = this.parameterPositions;
      let s = e - 2, o = e + 1, a = i[s], l = i[o];
      if (a === void 0) switch (this.getSettings_().endingStart) {
        case Yh:
          s = e, a = 2 * t - n;
          break;
        case $h:
          s = i.length - 2, a = t + i[s] - i[s + 1];
          break;
        default:
          s = e, a = n;
      }
      if (l === void 0) switch (this.getSettings_().endingEnd) {
        case Yh:
          o = e, l = 2 * n - t;
          break;
        case $h:
          o = 1, l = n + i[1] - i[0];
          break;
        default:
          o = e - 1, l = t;
      }
      const c = (n - t) * 0.5, u = this.valueSize;
      this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = s * u, this._offsetNext = o * u;
    }
    interpolate_(e, t, n, i) {
      const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = this._offsetPrev, h = this._offsetNext, d = this._weightPrev, f = this._weightNext, _ = (n - t) / (i - t), g = _ * _, m = g * _, p = -d * m + 2 * d * g - d * _, y = (1 + d) * m + (-1.5 - 2 * d) * g + (-0.5 + d) * _ + 1, v = (-1 - f) * m + (1.5 + f) * g + 0.5 * _, x = f * m - f * g;
      for (let w = 0; w !== a; ++w) s[w] = p * o[u + w] + y * o[c + w] + v * o[l + w] + x * o[h + w];
      return s;
    }
  }
  class F0 extends Jo {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e, t, n, i) {
      const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = (n - t) / (i - t), h = 1 - u;
      for (let d = 0; d !== a; ++d) s[d] = o[c + d] * h + o[l + d] * u;
      return s;
    }
  }
  class B0 extends Jo {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e) {
      return this.copySampleValue_(e - 1);
    }
  }
  class si {
    constructor(e, t, n, i) {
      if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
      this.name = e, this.times = La(t, this.TimeBufferType), this.values = La(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
    }
    static toJSON(e) {
      const t = e.constructor;
      let n;
      if (t.toJSON !== this.toJSON) n = t.toJSON(e);
      else {
        n = {
          name: e.name,
          times: La(e.times, Array),
          values: La(e.values, Array)
        };
        const i = e.getInterpolation();
        i !== e.DefaultInterpolation && (n.interpolation = i);
      }
      return n.type = e.ValueTypeName, n;
    }
    InterpolantFactoryMethodDiscrete(e) {
      return new B0(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodLinear(e) {
      return new F0(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodSmooth(e) {
      return new O0(this.times, this.values, this.getValueSize(), e);
    }
    setInterpolation(e) {
      let t;
      switch (e) {
        case Oo:
          t = this.InterpolantFactoryMethodDiscrete;
          break;
        case Fo:
          t = this.InterpolantFactoryMethodLinear;
          break;
        case Sl:
          t = this.InterpolantFactoryMethodSmooth;
          break;
      }
      if (t === void 0) {
        const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
        return console.warn("THREE.KeyframeTrack:", n), this;
      }
      return this.createInterpolant = t, this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return Oo;
        case this.InterpolantFactoryMethodLinear:
          return Fo;
        case this.InterpolantFactoryMethodSmooth:
          return Sl;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(e) {
      if (e !== 0) {
        const t = this.times;
        for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
      }
      return this;
    }
    scale(e) {
      if (e !== 1) {
        const t = this.times;
        for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
      }
      return this;
    }
    trim(e, t) {
      const n = this.times, i = n.length;
      let s = 0, o = i - 1;
      for (; s !== i && n[s] < e; ) ++s;
      for (; o !== -1 && n[o] > t; ) --o;
      if (++o, s !== 0 || o !== i) {
        s >= o && (o = Math.max(o, 1), s = o - 1);
        const a = this.getValueSize();
        this.times = n.slice(s, o), this.values = this.values.slice(s * a, o * a);
      }
      return this;
    }
    validate() {
      let e = true;
      const t = this.getValueSize();
      t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = false);
      const n = this.times, i = this.values, s = n.length;
      s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = false);
      let o = null;
      for (let a = 0; a !== s; a++) {
        const l = n[a];
        if (typeof l == "number" && isNaN(l)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), e = false;
          break;
        }
        if (o !== null && o > l) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, o), e = false;
          break;
        }
        o = l;
      }
      if (i !== void 0 && N0(i)) for (let a = 0, l = i.length; a !== l; ++a) {
        const c = i[a];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), e = false;
          break;
        }
      }
      return e;
    }
    optimize() {
      const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Sl, s = e.length - 1;
      let o = 1;
      for (let a = 1; a < s; ++a) {
        let l = false;
        const c = e[a], u = e[a + 1];
        if (c !== u && (a !== 1 || c !== e[0])) if (i) l = true;
        else {
          const h = a * n, d = h - n, f = h + n;
          for (let _ = 0; _ !== n; ++_) {
            const g = t[h + _];
            if (g !== t[d + _] || g !== t[f + _]) {
              l = true;
              break;
            }
          }
        }
        if (l) {
          if (a !== o) {
            e[o] = e[a];
            const h = a * n, d = o * n;
            for (let f = 0; f !== n; ++f) t[d + f] = t[h + f];
          }
          ++o;
        }
      }
      if (s > 0) {
        e[o] = e[s];
        for (let a = s * n, l = o * n, c = 0; c !== n; ++c) t[l + c] = t[a + c];
        ++o;
      }
      return o !== e.length ? (this.times = e.slice(0, o), this.values = t.slice(0, o * n)) : (this.times = e, this.values = t), this;
    }
    clone() {
      const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
      return i.createInterpolant = this.createInterpolant, i;
    }
  }
  si.prototype.TimeBufferType = Float32Array;
  si.prototype.ValueBufferType = Float32Array;
  si.prototype.DefaultInterpolation = Fo;
  class Vs extends si {
    constructor(e, t, n) {
      super(e, t, n);
    }
  }
  Vs.prototype.ValueTypeName = "bool";
  Vs.prototype.ValueBufferType = Array;
  Vs.prototype.DefaultInterpolation = Oo;
  Vs.prototype.InterpolantFactoryMethodLinear = void 0;
  Vs.prototype.InterpolantFactoryMethodSmooth = void 0;
  class Ap extends si {
  }
  Ap.prototype.ValueTypeName = "color";
  class Cs extends si {
  }
  Cs.prototype.ValueTypeName = "number";
  class z0 extends Jo {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e, t, n, i) {
      const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (n - t) / (i - t);
      let c = e * a;
      for (let u = c + a; c !== u; c += 4) Qi.slerpFlat(s, 0, o, c - a, o, c, l);
      return s;
    }
  }
  class Rs extends si {
    InterpolantFactoryMethodLinear(e) {
      return new z0(this.times, this.values, this.getValueSize(), e);
    }
  }
  Rs.prototype.ValueTypeName = "quaternion";
  Rs.prototype.InterpolantFactoryMethodSmooth = void 0;
  class Hs extends si {
    constructor(e, t, n) {
      super(e, t, n);
    }
  }
  Hs.prototype.ValueTypeName = "string";
  Hs.prototype.ValueBufferType = Array;
  Hs.prototype.DefaultInterpolation = Oo;
  Hs.prototype.InterpolantFactoryMethodLinear = void 0;
  Hs.prototype.InterpolantFactoryMethodSmooth = void 0;
  class Ps extends si {
  }
  Ps.prototype.ValueTypeName = "vector";
  class k0 {
    constructor(e = "", t = -1, n = [], i = kg) {
      this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Nn(), this.duration < 0 && this.resetDuration();
    }
    static parse(e) {
      const t = [], n = e.tracks, i = 1 / (e.fps || 1);
      for (let o = 0, a = n.length; o !== a; ++o) t.push(H0(n[o]).scale(i));
      const s = new this(e.name, e.duration, t, e.blendMode);
      return s.uuid = e.uuid, s;
    }
    static toJSON(e) {
      const t = [], n = e.tracks, i = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode
      };
      for (let s = 0, o = n.length; s !== o; ++s) t.push(si.toJSON(n[s]));
      return i;
    }
    static CreateFromMorphTargetSequence(e, t, n, i) {
      const s = t.length, o = [];
      for (let a = 0; a < s; a++) {
        let l = [], c = [];
        l.push((a + s - 1) % s, a, (a + 1) % s), c.push(0, 1, 0);
        const u = U0(l);
        l = Id(l, 1, u), c = Id(c, 1, u), !i && l[0] === 0 && (l.push(s), c.push(c[0])), o.push(new Cs(".morphTargetInfluences[" + t[a].name + "]", l, c).scale(1 / n));
      }
      return new this(e, -1, o);
    }
    static findByName(e, t) {
      let n = e;
      if (!Array.isArray(e)) {
        const i = e;
        n = i.geometry && i.geometry.animations || i.animations;
      }
      for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
      return null;
    }
    static CreateClipsFromMorphTargetSequences(e, t, n) {
      const i = {}, s = /^([\w-]*?)([\d]+)$/;
      for (let a = 0, l = e.length; a < l; a++) {
        const c = e[a], u = c.name.match(s);
        if (u && u.length > 1) {
          const h = u[1];
          let d = i[h];
          d || (i[h] = d = []), d.push(c);
        }
      }
      const o = [];
      for (const a in i) o.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
      return o;
    }
    static parseAnimation(e, t) {
      if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
      const n = function(h, d, f, _, g) {
        if (f.length !== 0) {
          const m = [], p = [];
          wp(f, m, p, _), m.length !== 0 && g.push(new h(d, m, p));
        }
      }, i = [], s = e.name || "default", o = e.fps || 30, a = e.blendMode;
      let l = e.length || -1;
      const c = e.hierarchy || [];
      for (let h = 0; h < c.length; h++) {
        const d = c[h].keys;
        if (!(!d || d.length === 0)) if (d[0].morphTargets) {
          const f = {};
          let _;
          for (_ = 0; _ < d.length; _++) if (d[_].morphTargets) for (let g = 0; g < d[_].morphTargets.length; g++) f[d[_].morphTargets[g]] = -1;
          for (const g in f) {
            const m = [], p = [];
            for (let y = 0; y !== d[_].morphTargets.length; ++y) {
              const v = d[_];
              m.push(v.time), p.push(v.morphTarget === g ? 1 : 0);
            }
            i.push(new Cs(".morphTargetInfluence[" + g + "]", m, p));
          }
          l = f.length * o;
        } else {
          const f = ".bones[" + t[h].name + "]";
          n(Ps, f + ".position", d, "pos", i), n(Rs, f + ".quaternion", d, "rot", i), n(Ps, f + ".scale", d, "scl", i);
        }
      }
      return i.length === 0 ? null : new this(s, l, i, a);
    }
    resetDuration() {
      const e = this.tracks;
      let t = 0;
      for (let n = 0, i = e.length; n !== i; ++n) {
        const s = this.tracks[n];
        t = Math.max(t, s.times[s.times.length - 1]);
      }
      return this.duration = t, this;
    }
    trim() {
      for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
      return this;
    }
    validate() {
      let e = true;
      for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
      return e;
    }
    optimize() {
      for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
      return this;
    }
    clone() {
      const e = [];
      for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
      return new this.constructor(this.name, this.duration, e, this.blendMode);
    }
    toJSON() {
      return this.constructor.toJSON(this);
    }
  }
  function V0(r) {
    switch (r.toLowerCase()) {
      case "scalar":
      case "double":
      case "float":
      case "number":
      case "integer":
        return Cs;
      case "vector":
      case "vector2":
      case "vector3":
      case "vector4":
        return Ps;
      case "color":
        return Ap;
      case "quaternion":
        return Rs;
      case "bool":
      case "boolean":
        return Vs;
      case "string":
        return Hs;
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
  }
  function H0(r) {
    if (r.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const e = V0(r.type);
    if (r.times === void 0) {
      const t = [], n = [];
      wp(r.keys, t, n, "value"), r.times = t, r.values = n;
    }
    return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
  }
  const Wi = {
    enabled: false,
    files: {},
    add: function(r, e) {
      this.enabled !== false && (this.files[r] = e);
    },
    get: function(r) {
      if (this.enabled !== false) return this.files[r];
    },
    remove: function(r) {
      delete this.files[r];
    },
    clear: function() {
      this.files = {};
    }
  };
  class G0 {
    constructor(e, t, n) {
      const i = this;
      let s = false, o = 0, a = 0, l;
      const c = [];
      this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
        a++, s === false && i.onStart !== void 0 && i.onStart(u, o, a), s = true;
      }, this.itemEnd = function(u) {
        o++, i.onProgress !== void 0 && i.onProgress(u, o, a), o === a && (s = false, i.onLoad !== void 0 && i.onLoad());
      }, this.itemError = function(u) {
        i.onError !== void 0 && i.onError(u);
      }, this.resolveURL = function(u) {
        return l ? l(u) : u;
      }, this.setURLModifier = function(u) {
        return l = u, this;
      }, this.addHandler = function(u, h) {
        return c.push(u, h), this;
      }, this.removeHandler = function(u) {
        const h = c.indexOf(u);
        return h !== -1 && c.splice(h, 2), this;
      }, this.getHandler = function(u) {
        for (let h = 0, d = c.length; h < d; h += 2) {
          const f = c[h], _ = c[h + 1];
          if (f.global && (f.lastIndex = 0), f.test(u)) return _;
        }
        return null;
      };
    }
  }
  const W0 = new G0();
  class Or {
    constructor(e) {
      this.manager = e !== void 0 ? e : W0, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
    }
    load() {
    }
    loadAsync(e, t) {
      const n = this;
      return new Promise(function(i, s) {
        n.load(e, i, t, s);
      });
    }
    parse() {
    }
    setCrossOrigin(e) {
      return this.crossOrigin = e, this;
    }
    setWithCredentials(e) {
      return this.withCredentials = e, this;
    }
    setPath(e) {
      return this.path = e, this;
    }
    setResourcePath(e) {
      return this.resourcePath = e, this;
    }
    setRequestHeader(e) {
      return this.requestHeader = e, this;
    }
  }
  Or.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  const di = {};
  class X0 extends Error {
    constructor(e, t) {
      super(e), this.response = t;
    }
  }
  class Qu extends Or {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
      const s = Wi.get(e);
      if (s !== void 0) return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
      if (di[e] !== void 0) {
        di[e].push({
          onLoad: t,
          onProgress: n,
          onError: i
        });
        return;
      }
      di[e] = [], di[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      const o = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin"
      }), a = this.mimeType, l = this.responseType;
      fetch(o).then((c) => {
        if (c.status === 200 || c.status === 0) {
          if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c;
          const u = di[e], h = c.body.getReader(), d = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), f = d ? parseInt(d) : 0, _ = f !== 0;
          let g = 0;
          const m = new ReadableStream({
            start(p) {
              y();
              function y() {
                h.read().then(({ done: v, value: x }) => {
                  if (v) p.close();
                  else {
                    g += x.byteLength;
                    const w = new ProgressEvent("progress", {
                      lengthComputable: _,
                      loaded: g,
                      total: f
                    });
                    for (let b = 0, A = u.length; b < A; b++) {
                      const P = u[b];
                      P.onProgress && P.onProgress(w);
                    }
                    p.enqueue(x), y();
                  }
                }, (v) => {
                  p.error(v);
                });
              }
            }
          });
          return new Response(m);
        } else throw new X0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
      }).then((c) => {
        switch (l) {
          case "arraybuffer":
            return c.arrayBuffer();
          case "blob":
            return c.blob();
          case "document":
            return c.text().then((u) => new DOMParser().parseFromString(u, a));
          case "json":
            return c.json();
          default:
            if (a === void 0) return c.text();
            {
              const h = /charset="?([^;"\s]*)"?/i.exec(a), d = h && h[1] ? h[1].toLowerCase() : void 0, f = new TextDecoder(d);
              return c.arrayBuffer().then((_) => f.decode(_));
            }
        }
      }).then((c) => {
        Wi.add(e, c);
        const u = di[e];
        delete di[e];
        for (let h = 0, d = u.length; h < d; h++) {
          const f = u[h];
          f.onLoad && f.onLoad(c);
        }
      }).catch((c) => {
        const u = di[e];
        if (u === void 0) throw this.manager.itemError(e), c;
        delete di[e];
        for (let h = 0, d = u.length; h < d; h++) {
          const f = u[h];
          f.onError && f.onError(c);
        }
        this.manager.itemError(e);
      }).finally(() => {
        this.manager.itemEnd(e);
      }), this.manager.itemStart(e);
    }
    setResponseType(e) {
      return this.responseType = e, this;
    }
    setMimeType(e) {
      return this.mimeType = e, this;
    }
  }
  class q0 extends Or {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
      const s = this, o = Wi.get(e);
      if (o !== void 0) return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
      const a = Bo("img");
      function l() {
        u(), Wi.add(e, this), t && t(this), s.manager.itemEnd(e);
      }
      function c(h) {
        u(), i && i(h), s.manager.itemError(e), s.manager.itemEnd(e);
      }
      function u() {
        a.removeEventListener("load", l, false), a.removeEventListener("error", c, false);
      }
      return a.addEventListener("load", l, false), a.addEventListener("error", c, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(e), a.src = e, a;
    }
  }
  class Y0 extends Or {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      const s = new Nt(), o = new q0(this.manager);
      return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
        s.image = a, s.needsUpdate = true, t !== void 0 && t(s);
      }, n, i), s;
    }
  }
  class fl extends vt {
    constructor(e, t = 1) {
      super(), this.isLight = true, this.type = "Light", this.color = new Ce(e), this.intensity = t;
    }
    dispose() {
    }
    copy(e, t) {
      return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
    }
  }
  const Kl = new Fe(), Nd = new D(), Ud = new D();
  class eh {
    constructor(e) {
      this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ee(512, 512), this.map = null, this.mapPass = null, this.matrix = new Fe(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new qu(), this._frameExtents = new ee(1, 1), this._viewportCount = 1, this._viewports = [
        new it(0, 0, 1, 1)
      ];
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(e) {
      const t = this.camera, n = this.matrix;
      Nd.setFromMatrixPosition(e.matrixWorld), t.position.copy(Nd), Ud.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Ud), t.updateMatrixWorld(), Kl.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Kl), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(Kl);
    }
    getViewport(e) {
      return this._viewports[e];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(e) {
      return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const e = {};
      return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(false).object, delete e.camera.matrix, e;
    }
  }
  class $0 extends eh {
    constructor() {
      super(new en(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1;
    }
    updateMatrices(e) {
      const t = this.camera, n = ws * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
      (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
    }
    copy(e) {
      return super.copy(e), this.focus = e.focus, this;
    }
  }
  class K0 extends fl {
    constructor(e, t, n = 0, i = Math.PI / 3, s = 0, o = 2) {
      super(e, t), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(vt.DEFAULT_UP), this.updateMatrix(), this.target = new vt(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = o, this.map = null, this.shadow = new $0();
    }
    get power() {
      return this.intensity * Math.PI;
    }
    set power(e) {
      this.intensity = e / Math.PI;
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e, t) {
      return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
    }
  }
  const Od = new Fe(), uo = new D(), jl = new D();
  class j0 extends eh {
    constructor() {
      super(new en(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new ee(4, 2), this._viewportCount = 6, this._viewports = [
        new it(2, 1, 1, 1),
        new it(0, 1, 1, 1),
        new it(3, 1, 1, 1),
        new it(1, 1, 1, 1),
        new it(3, 0, 1, 1),
        new it(1, 0, 1, 1)
      ], this._cubeDirections = [
        new D(1, 0, 0),
        new D(-1, 0, 0),
        new D(0, 0, 1),
        new D(0, 0, -1),
        new D(0, 1, 0),
        new D(0, -1, 0)
      ], this._cubeUps = [
        new D(0, 1, 0),
        new D(0, 1, 0),
        new D(0, 1, 0),
        new D(0, 1, 0),
        new D(0, 0, 1),
        new D(0, 0, -1)
      ];
    }
    updateMatrices(e, t = 0) {
      const n = this.camera, i = this.matrix, s = e.distance || n.far;
      s !== n.far && (n.far = s, n.updateProjectionMatrix()), uo.setFromMatrixPosition(e.matrixWorld), n.position.copy(uo), jl.copy(n.position), jl.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(jl), n.updateMatrixWorld(), i.makeTranslation(-uo.x, -uo.y, -uo.z), Od.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Od);
    }
  }
  class th extends fl {
    constructor(e, t, n = 0, i = 2) {
      super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new j0();
    }
    get power() {
      return this.intensity * 4 * Math.PI;
    }
    set power(e) {
      this.intensity = e / (4 * Math.PI);
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e, t) {
      return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
    }
  }
  class pl extends dp {
    constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, o = 2e3) {
      super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = o, this.updateProjectionMatrix();
    }
    copy(e, t) {
      return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
    }
    setViewOffset(e, t, n, i, s, o) {
      this.view === null && (this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
      let s = n - e, o = n + e, a = i + t, l = i - t;
      if (this.view !== null && this.view.enabled) {
        const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        s += c * this.view.offsetX, o = s + c * this.view.width, a -= u * this.view.offsetY, l = a - u * this.view.height;
      }
      this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
    }
  }
  class Z0 extends eh {
    constructor() {
      super(new pl(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
    }
  }
  class nh extends fl {
    constructor(e, t) {
      super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(vt.DEFAULT_UP), this.updateMatrix(), this.target = new vt(), this.shadow = new Z0();
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e) {
      return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
    }
  }
  class Cp extends fl {
    constructor(e, t) {
      super(e, t), this.isAmbientLight = true, this.type = "AmbientLight";
    }
  }
  class Eo {
    static decodeText(e) {
      if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u") return new TextDecoder().decode(e);
      let t = "";
      for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
      try {
        return decodeURIComponent(escape(t));
      } catch {
        return t;
      }
    }
    static extractUrlBase(e) {
      const t = e.lastIndexOf("/");
      return t === -1 ? "./" : e.slice(0, t + 1);
    }
    static resolveURL(e, t) {
      return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
    }
  }
  class J0 extends Or {
    constructor(e) {
      super(e), this.isImageBitmapLoader = true, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
        premultiplyAlpha: "none"
      };
    }
    setOptions(e) {
      return this.options = e, this;
    }
    load(e, t, n, i) {
      e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
      const s = this, o = Wi.get(e);
      if (o !== void 0) {
        if (s.manager.itemStart(e), o.then) {
          o.then((c) => {
            t && t(c), s.manager.itemEnd(e);
          }).catch((c) => {
            i && i(c);
          });
          return;
        }
        return setTimeout(function() {
          t && t(o), s.manager.itemEnd(e);
        }, 0), o;
      }
      const a = {};
      a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader;
      const l = fetch(e, a).then(function(c) {
        return c.blob();
      }).then(function(c) {
        return createImageBitmap(c, Object.assign(s.options, {
          colorSpaceConversion: "none"
        }));
      }).then(function(c) {
        return Wi.add(e, c), t && t(c), s.manager.itemEnd(e), c;
      }).catch(function(c) {
        i && i(c), Wi.remove(e), s.manager.itemError(e), s.manager.itemEnd(e);
      });
      Wi.add(e, l), s.manager.itemStart(e);
    }
  }
  class Q0 extends en {
    constructor(e = []) {
      super(), this.isArrayCamera = true, this.cameras = e, this.index = 0;
    }
  }
  class ex {
    constructor(e = true) {
      this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
    }
    start() {
      this.startTime = Fd(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
    }
    stop() {
      this.getElapsedTime(), this.running = false, this.autoStart = false;
    }
    getElapsedTime() {
      return this.getDelta(), this.elapsedTime;
    }
    getDelta() {
      let e = 0;
      if (this.autoStart && !this.running) return this.start(), 0;
      if (this.running) {
        const t = Fd();
        e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
      }
      return e;
    }
  }
  function Fd() {
    return performance.now();
  }
  const ih = "\\[\\]\\.:\\/", tx = new RegExp("[" + ih + "]", "g"), rh = "[^" + ih + "]", nx = "[^" + ih.replace("\\.", "") + "]", ix = /((?:WC+[\/:])*)/.source.replace("WC", rh), rx = /(WCOD+)?/.source.replace("WCOD", nx), sx = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", rh), ox = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", rh), ax = new RegExp("^" + ix + rx + sx + ox + "$"), lx = [
    "material",
    "materials",
    "bones",
    "map"
  ];
  class cx {
    constructor(e, t, n) {
      const i = n || ct.parseTrackName(t);
      this._targetGroup = e, this._bindings = e.subscribe_(t, i);
    }
    getValue(e, t) {
      this.bind();
      const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
      i !== void 0 && i.getValue(e, t);
    }
    setValue(e, t) {
      const n = this._bindings;
      for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i) n[i].setValue(e, t);
    }
    bind() {
      const e = this._bindings;
      for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
    }
    unbind() {
      const e = this._bindings;
      for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
    }
  }
  class ct {
    constructor(e, t, n) {
      this.path = t, this.parsedPath = n || ct.parseTrackName(t), this.node = ct.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(e, t, n) {
      return e && e.isAnimationObjectGroup ? new ct.Composite(e, t, n) : new ct(e, t, n);
    }
    static sanitizeNodeName(e) {
      return e.replace(/\s/g, "_").replace(tx, "");
    }
    static parseTrackName(e) {
      const t = ax.exec(e);
      if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
      const n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6]
      }, i = n.nodeName && n.nodeName.lastIndexOf(".");
      if (i !== void 0 && i !== -1) {
        const s = n.nodeName.substring(i + 1);
        lx.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
      }
      if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
      return n;
    }
    static findNode(e, t) {
      if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
      if (e.skeleton) {
        const n = e.skeleton.getBoneByName(t);
        if (n !== void 0) return n;
      }
      if (e.children) {
        const n = function(s) {
          for (let o = 0; o < s.length; o++) {
            const a = s[o];
            if (a.name === t || a.uuid === t) return a;
            const l = n(a.children);
            if (l) return l;
          }
          return null;
        }, i = n(e.children);
        if (i) return i;
      }
      return null;
    }
    _getValue_unavailable() {
    }
    _setValue_unavailable() {
    }
    _getValue_direct(e, t) {
      e[t] = this.targetObject[this.propertyName];
    }
    _getValue_array(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, s = n.length; i !== s; ++i) e[t++] = n[i];
    }
    _getValue_arrayElement(e, t) {
      e[t] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(e, t) {
      this.resolvedProperty.toArray(e, t);
    }
    _setValue_direct(e, t) {
      this.targetObject[this.propertyName] = e[t];
    }
    _setValue_direct_setNeedsUpdate(e, t) {
      this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = true;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
      this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_array(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
    }
    _setValue_array_setNeedsUpdate(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
      this.targetObject.needsUpdate = true;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_arrayElement(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t];
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = true;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_fromArray(e, t) {
      this.resolvedProperty.fromArray(e, t);
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
      this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = true;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
      this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _getValue_unbound(e, t) {
      this.bind(), this.getValue(e, t);
    }
    _setValue_unbound(e, t) {
      this.bind(), this.setValue(e, t);
    }
    bind() {
      let e = this.node;
      const t = this.parsedPath, n = t.objectName, i = t.propertyName;
      let s = t.propertyIndex;
      if (e || (e = ct.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
        console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
        return;
      }
      if (n) {
        let c = t.objectIndex;
        switch (n) {
          case "materials":
            if (!e.material) {
              console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
              return;
            }
            if (!e.material.materials) {
              console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
              return;
            }
            e = e.material.materials;
            break;
          case "bones":
            if (!e.skeleton) {
              console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
              return;
            }
            e = e.skeleton.bones;
            for (let u = 0; u < e.length; u++) if (e[u].name === c) {
              c = u;
              break;
            }
            break;
          case "map":
            if ("map" in e) {
              e = e.map;
              break;
            }
            if (!e.material) {
              console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
              return;
            }
            if (!e.material.map) {
              console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
              return;
            }
            e = e.material.map;
            break;
          default:
            if (e[n] === void 0) {
              console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
              return;
            }
            e = e[n];
        }
        if (c !== void 0) {
          if (e[c] === void 0) {
            console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
            return;
          }
          e = e[c];
        }
      }
      const o = e[i];
      if (o === void 0) {
        const c = t.nodeName;
        console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
        return;
      }
      let a = this.Versioning.None;
      this.targetObject = e, e.isMaterial === true ? a = this.Versioning.NeedsUpdate : e.isObject3D === true && (a = this.Versioning.MatrixWorldNeedsUpdate);
      let l = this.BindingType.Direct;
      if (s !== void 0) {
        if (i === "morphTargetInfluences") {
          if (!e.geometry) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
            return;
          }
          if (!e.geometry.morphAttributes) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
            return;
          }
          e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
        }
        l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = s;
      } else o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
      this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a];
    }
    unbind() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
  }
  ct.Composite = cx;
  ct.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
  };
  ct.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
  };
  ct.prototype.GetterByBindingType = [
    ct.prototype._getValue_direct,
    ct.prototype._getValue_array,
    ct.prototype._getValue_arrayElement,
    ct.prototype._getValue_toArray
  ];
  ct.prototype.SetterByBindingTypeAndVersioning = [
    [
      ct.prototype._setValue_direct,
      ct.prototype._setValue_direct_setNeedsUpdate,
      ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate
    ],
    [
      ct.prototype._setValue_array,
      ct.prototype._setValue_array_setNeedsUpdate,
      ct.prototype._setValue_array_setMatrixWorldNeedsUpdate
    ],
    [
      ct.prototype._setValue_arrayElement,
      ct.prototype._setValue_arrayElement_setNeedsUpdate,
      ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
    ],
    [
      ct.prototype._setValue_fromArray,
      ct.prototype._setValue_fromArray_setNeedsUpdate,
      ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
    ]
  ];
  const Bd = new Fe();
  class Fr {
    constructor(e, t, n = 0, i = 1 / 0) {
      this.ray = new jo(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new Gu(), this.params = {
        Mesh: {},
        Line: {
          threshold: 1
        },
        LOD: {},
        Points: {
          threshold: 1
        },
        Sprite: {}
      };
    }
    set(e, t) {
      this.ray.set(e, t);
    }
    setFromCamera(e, t) {
      t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
    }
    setFromXRController(e) {
      return Bd.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Bd), this;
    }
    intersectObject(e, t = true, n = []) {
      return cu(e, this, n, t), n.sort(zd), n;
    }
    intersectObjects(e, t = true, n = []) {
      for (let i = 0, s = e.length; i < s; i++) cu(e[i], this, n, t);
      return n.sort(zd), n;
    }
  }
  function zd(r, e) {
    return r.distance - e.distance;
  }
  function cu(r, e, t, n) {
    let i = true;
    if (r.layers.test(e.layers) && r.raycast(e, t) === false && (i = false), i === true && n === true) {
      const s = r.children;
      for (let o = 0, a = s.length; o < a; o++) cu(s[o], e, t, true);
    }
  }
  class ux {
    constructor() {
      this.type = "ShapePath", this.color = new Ce(), this.subPaths = [], this.currentPath = null;
    }
    moveTo(e, t) {
      return this.currentPath = new ou(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
    }
    lineTo(e, t) {
      return this.currentPath.lineTo(e, t), this;
    }
    quadraticCurveTo(e, t, n, i) {
      return this.currentPath.quadraticCurveTo(e, t, n, i), this;
    }
    bezierCurveTo(e, t, n, i, s, o) {
      return this.currentPath.bezierCurveTo(e, t, n, i, s, o), this;
    }
    splineThru(e) {
      return this.currentPath.splineThru(e), this;
    }
    toShapes(e) {
      function t(p) {
        const y = [];
        for (let v = 0, x = p.length; v < x; v++) {
          const w = p[v], b = new Ga();
          b.curves = w.curves, y.push(b);
        }
        return y;
      }
      function n(p, y) {
        const v = y.length;
        let x = false;
        for (let w = v - 1, b = 0; b < v; w = b++) {
          let A = y[w], P = y[b], S = P.x - A.x, M = P.y - A.y;
          if (Math.abs(M) > Number.EPSILON) {
            if (M < 0 && (A = y[b], S = -S, P = y[w], M = -M), p.y < A.y || p.y > P.y) continue;
            if (p.y === A.y) {
              if (p.x === A.x) return true;
            } else {
              const L = M * (p.x - A.x) - S * (p.y - A.y);
              if (L === 0) return true;
              if (L < 0) continue;
              x = !x;
            }
          } else {
            if (p.y !== A.y) continue;
            if (P.x <= p.x && p.x <= A.x || A.x <= p.x && p.x <= P.x) return true;
          }
        }
        return x;
      }
      const i = ps.isClockWise, s = this.subPaths;
      if (s.length === 0) return [];
      let o, a, l;
      const c = [];
      if (s.length === 1) return a = s[0], l = new Ga(), l.curves = a.curves, c.push(l), c;
      let u = !i(s[0].getPoints());
      u = e ? !u : u;
      const h = [], d = [];
      let f = [], _ = 0, g;
      d[_] = void 0, f[_] = [];
      for (let p = 0, y = s.length; p < y; p++) a = s[p], g = a.getPoints(), o = i(g), o = e ? !o : o, o ? (!u && d[_] && _++, d[_] = {
        s: new Ga(),
        p: g
      }, d[_].s.curves = a.curves, u && _++, f[_] = []) : f[_].push({
        h: a,
        p: g[0]
      });
      if (!d[0]) return t(s);
      if (d.length > 1) {
        let p = false, y = 0;
        for (let v = 0, x = d.length; v < x; v++) h[v] = [];
        for (let v = 0, x = d.length; v < x; v++) {
          const w = f[v];
          for (let b = 0; b < w.length; b++) {
            const A = w[b];
            let P = true;
            for (let S = 0; S < d.length; S++) n(A.p, d[S].p) && (v !== S && y++, P ? (P = false, h[S].push(A)) : p = true);
            P && h[v].push(A);
          }
        }
        y > 0 && p === false && (f = h);
      }
      let m;
      for (let p = 0, y = d.length; p < y; p++) {
        l = d[p].s, c.push(l), m = f[p];
        for (let v = 0, x = m.length; v < x; v++) l.holes.push(m[v].h);
      }
      return c;
    }
  }
  function kd(r, e, t, n) {
    const i = hx(n);
    switch (t) {
      case jf:
        return r * e;
      case Jf:
        return r * e;
      case Qf:
        return r * e * 2;
      case Bu:
        return r * e / i.components * i.byteLength;
      case zu:
        return r * e / i.components * i.byteLength;
      case ep:
        return r * e * 2 / i.components * i.byteLength;
      case ku:
        return r * e * 2 / i.components * i.byteLength;
      case Zf:
        return r * e * 3 / i.components * i.byteLength;
      case Dn:
        return r * e * 4 / i.components * i.byteLength;
      case Vu:
        return r * e * 4 / i.components * i.byteLength;
      case Ba:
      case za:
        return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
      case ka:
      case Va:
        return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
      case Pc:
      case Dc:
        return Math.max(r, 16) * Math.max(e, 8) / 4;
      case Rc:
      case Lc:
        return Math.max(r, 8) * Math.max(e, 8) / 2;
      case Ic:
      case Nc:
        return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
      case Uc:
        return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
      case Oc:
        return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
      case Fc:
        return Math.floor((r + 4) / 5) * Math.floor((e + 3) / 4) * 16;
      case Bc:
        return Math.floor((r + 4) / 5) * Math.floor((e + 4) / 5) * 16;
      case zc:
        return Math.floor((r + 5) / 6) * Math.floor((e + 4) / 5) * 16;
      case kc:
        return Math.floor((r + 5) / 6) * Math.floor((e + 5) / 6) * 16;
      case Vc:
        return Math.floor((r + 7) / 8) * Math.floor((e + 4) / 5) * 16;
      case Hc:
        return Math.floor((r + 7) / 8) * Math.floor((e + 5) / 6) * 16;
      case Gc:
        return Math.floor((r + 7) / 8) * Math.floor((e + 7) / 8) * 16;
      case Wc:
        return Math.floor((r + 9) / 10) * Math.floor((e + 4) / 5) * 16;
      case Xc:
        return Math.floor((r + 9) / 10) * Math.floor((e + 5) / 6) * 16;
      case qc:
        return Math.floor((r + 9) / 10) * Math.floor((e + 7) / 8) * 16;
      case Yc:
        return Math.floor((r + 9) / 10) * Math.floor((e + 9) / 10) * 16;
      case $c:
        return Math.floor((r + 11) / 12) * Math.floor((e + 9) / 10) * 16;
      case Kc:
        return Math.floor((r + 11) / 12) * Math.floor((e + 11) / 12) * 16;
      case Ha:
      case jc:
      case Zc:
        return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
      case tp:
      case Jc:
        return Math.ceil(r / 4) * Math.ceil(e / 4) * 8;
      case Qc:
      case eu:
        return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
    }
    throw new Error(`Unable to determine texture byte length for ${t} format.`);
  }
  function hx(r) {
    switch (r) {
      case Ci:
      case Yf:
        return {
          byteLength: 1,
          components: 1
        };
      case Uo:
      case $f:
      case bi:
        return {
          byteLength: 2,
          components: 1
        };
      case Ou:
      case Fu:
        return {
          byteLength: 2,
          components: 4
        };
      case Dr:
      case Uu:
      case Gn:
        return {
          byteLength: 4,
          components: 1
        };
      case Kf:
        return {
          byteLength: 4,
          components: 3
        };
    }
    throw new Error(`Unknown texture type ${r}.`);
  }
  typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
      revision: Nu
    }
  }));
  typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Nu);
  function Rp() {
    let r = null, e = false, t = null, n = null;
    function i(s, o) {
      t(s, o), n = r.requestAnimationFrame(i);
    }
    return {
      start: function() {
        e !== true && t !== null && (n = r.requestAnimationFrame(i), e = true);
      },
      stop: function() {
        r.cancelAnimationFrame(n), e = false;
      },
      setAnimationLoop: function(s) {
        t = s;
      },
      setContext: function(s) {
        r = s;
      }
    };
  }
  function dx(r) {
    const e = /* @__PURE__ */ new WeakMap();
    function t(a, l) {
      const c = a.array, u = a.usage, h = c.byteLength, d = r.createBuffer();
      r.bindBuffer(l, d), r.bufferData(l, c, u), a.onUploadCallback();
      let f;
      if (c instanceof Float32Array) f = r.FLOAT;
      else if (c instanceof Uint16Array) a.isFloat16BufferAttribute ? f = r.HALF_FLOAT : f = r.UNSIGNED_SHORT;
      else if (c instanceof Int16Array) f = r.SHORT;
      else if (c instanceof Uint32Array) f = r.UNSIGNED_INT;
      else if (c instanceof Int32Array) f = r.INT;
      else if (c instanceof Int8Array) f = r.BYTE;
      else if (c instanceof Uint8Array) f = r.UNSIGNED_BYTE;
      else if (c instanceof Uint8ClampedArray) f = r.UNSIGNED_BYTE;
      else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
      return {
        buffer: d,
        type: f,
        bytesPerElement: c.BYTES_PER_ELEMENT,
        version: a.version,
        size: h
      };
    }
    function n(a, l, c) {
      const u = l.array, h = l.updateRanges;
      if (r.bindBuffer(c, a), h.length === 0) r.bufferSubData(c, 0, u);
      else {
        h.sort((f, _) => f.start - _.start);
        let d = 0;
        for (let f = 1; f < h.length; f++) {
          const _ = h[d], g = h[f];
          g.start <= _.start + _.count + 1 ? _.count = Math.max(_.count, g.start + g.count - _.start) : (++d, h[d] = g);
        }
        h.length = d + 1;
        for (let f = 0, _ = h.length; f < _; f++) {
          const g = h[f];
          r.bufferSubData(c, g.start * u.BYTES_PER_ELEMENT, u, g.start, g.count);
        }
        l.clearUpdateRanges();
      }
      l.onUploadCallback();
    }
    function i(a) {
      return a.isInterleavedBufferAttribute && (a = a.data), e.get(a);
    }
    function s(a) {
      a.isInterleavedBufferAttribute && (a = a.data);
      const l = e.get(a);
      l && (r.deleteBuffer(l.buffer), e.delete(a));
    }
    function o(a, l) {
      if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) {
        const u = e.get(a);
        (!u || u.version < a.version) && e.set(a, {
          buffer: a.buffer,
          type: a.type,
          bytesPerElement: a.elementSize,
          version: a.version
        });
        return;
      }
      const c = e.get(a);
      if (c === void 0) e.set(a, t(a, l));
      else if (c.version < a.version) {
        if (c.size !== a.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
        n(c.buffer, a, l), c.version = a.version;
      }
    }
    return {
      get: i,
      remove: s,
      update: o
    };
  }
  var fx = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, px = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, mx = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, gx = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, _x = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, xx = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, vx = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, yx = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Sx = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Mx = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Ex = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Tx = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, bx = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, wx = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Ax = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Cx = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Rx = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Px = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Lx = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Dx = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Ix = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Nx = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Ux = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Ox = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Fx = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Bx = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, zx = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, kx = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Vx = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Hx = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Gx = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Wx = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Xx = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, qx = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Yx = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, $x = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Kx = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, jx = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Zx = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Jx = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Qx = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, ev = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, tv = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, nv = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, iv = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, rv = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, sv = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, ov = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, av = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, lv = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, cv = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, uv = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, hv = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, dv = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, fv = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, pv = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, mv = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, gv = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, _v = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, xv = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, vv = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, yv = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Sv = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Mv = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Ev = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Tv = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, bv = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, wv = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Av = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Cv = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Rv = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Pv = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Lv = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Dv = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Iv = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Nv = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Uv = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Ov = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Fv = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Bv = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, zv = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, kv = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Vv = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Hv = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Gv = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Wv = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Xv = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, qv = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Yv = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, $v = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, Kv = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, jv = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Zv = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Jv = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Qv = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, ey = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, ty = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, ny = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, iy = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, ry = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, sy = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, oy = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, ay = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, ly = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, cy = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, uy = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, hy = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
  const dy = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, fy = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, py = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, my = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, gy = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, _y = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, xy = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, vy = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, yy = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Sy = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, My = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Ey = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ty = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, by = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, wy = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Ay = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Cy = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Ry = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Py = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Ly = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Dy = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Iy = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Ny = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Uy = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Oy = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Fy = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, By = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, zy = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ky = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Vy = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Hy = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Gy = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Wy = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Xy = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ve = {
    alphahash_fragment: fx,
    alphahash_pars_fragment: px,
    alphamap_fragment: mx,
    alphamap_pars_fragment: gx,
    alphatest_fragment: _x,
    alphatest_pars_fragment: xx,
    aomap_fragment: vx,
    aomap_pars_fragment: yx,
    batching_pars_vertex: Sx,
    batching_vertex: Mx,
    begin_vertex: Ex,
    beginnormal_vertex: Tx,
    bsdfs: bx,
    iridescence_fragment: wx,
    bumpmap_pars_fragment: Ax,
    clipping_planes_fragment: Cx,
    clipping_planes_pars_fragment: Rx,
    clipping_planes_pars_vertex: Px,
    clipping_planes_vertex: Lx,
    color_fragment: Dx,
    color_pars_fragment: Ix,
    color_pars_vertex: Nx,
    color_vertex: Ux,
    common: Ox,
    cube_uv_reflection_fragment: Fx,
    defaultnormal_vertex: Bx,
    displacementmap_pars_vertex: zx,
    displacementmap_vertex: kx,
    emissivemap_fragment: Vx,
    emissivemap_pars_fragment: Hx,
    colorspace_fragment: Gx,
    colorspace_pars_fragment: Wx,
    envmap_fragment: Xx,
    envmap_common_pars_fragment: qx,
    envmap_pars_fragment: Yx,
    envmap_pars_vertex: $x,
    envmap_physical_pars_fragment: sv,
    envmap_vertex: Kx,
    fog_vertex: jx,
    fog_pars_vertex: Zx,
    fog_fragment: Jx,
    fog_pars_fragment: Qx,
    gradientmap_pars_fragment: ev,
    lightmap_pars_fragment: tv,
    lights_lambert_fragment: nv,
    lights_lambert_pars_fragment: iv,
    lights_pars_begin: rv,
    lights_toon_fragment: ov,
    lights_toon_pars_fragment: av,
    lights_phong_fragment: lv,
    lights_phong_pars_fragment: cv,
    lights_physical_fragment: uv,
    lights_physical_pars_fragment: hv,
    lights_fragment_begin: dv,
    lights_fragment_maps: fv,
    lights_fragment_end: pv,
    logdepthbuf_fragment: mv,
    logdepthbuf_pars_fragment: gv,
    logdepthbuf_pars_vertex: _v,
    logdepthbuf_vertex: xv,
    map_fragment: vv,
    map_pars_fragment: yv,
    map_particle_fragment: Sv,
    map_particle_pars_fragment: Mv,
    metalnessmap_fragment: Ev,
    metalnessmap_pars_fragment: Tv,
    morphinstance_vertex: bv,
    morphcolor_vertex: wv,
    morphnormal_vertex: Av,
    morphtarget_pars_vertex: Cv,
    morphtarget_vertex: Rv,
    normal_fragment_begin: Pv,
    normal_fragment_maps: Lv,
    normal_pars_fragment: Dv,
    normal_pars_vertex: Iv,
    normal_vertex: Nv,
    normalmap_pars_fragment: Uv,
    clearcoat_normal_fragment_begin: Ov,
    clearcoat_normal_fragment_maps: Fv,
    clearcoat_pars_fragment: Bv,
    iridescence_pars_fragment: zv,
    opaque_fragment: kv,
    packing: Vv,
    premultiplied_alpha_fragment: Hv,
    project_vertex: Gv,
    dithering_fragment: Wv,
    dithering_pars_fragment: Xv,
    roughnessmap_fragment: qv,
    roughnessmap_pars_fragment: Yv,
    shadowmap_pars_fragment: $v,
    shadowmap_pars_vertex: Kv,
    shadowmap_vertex: jv,
    shadowmask_pars_fragment: Zv,
    skinbase_vertex: Jv,
    skinning_pars_vertex: Qv,
    skinning_vertex: ey,
    skinnormal_vertex: ty,
    specularmap_fragment: ny,
    specularmap_pars_fragment: iy,
    tonemapping_fragment: ry,
    tonemapping_pars_fragment: sy,
    transmission_fragment: oy,
    transmission_pars_fragment: ay,
    uv_pars_fragment: ly,
    uv_pars_vertex: cy,
    uv_vertex: uy,
    worldpos_vertex: hy,
    background_vert: dy,
    background_frag: fy,
    backgroundCube_vert: py,
    backgroundCube_frag: my,
    cube_vert: gy,
    cube_frag: _y,
    depth_vert: xy,
    depth_frag: vy,
    distanceRGBA_vert: yy,
    distanceRGBA_frag: Sy,
    equirect_vert: My,
    equirect_frag: Ey,
    linedashed_vert: Ty,
    linedashed_frag: by,
    meshbasic_vert: wy,
    meshbasic_frag: Ay,
    meshlambert_vert: Cy,
    meshlambert_frag: Ry,
    meshmatcap_vert: Py,
    meshmatcap_frag: Ly,
    meshnormal_vert: Dy,
    meshnormal_frag: Iy,
    meshphong_vert: Ny,
    meshphong_frag: Uy,
    meshphysical_vert: Oy,
    meshphysical_frag: Fy,
    meshtoon_vert: By,
    meshtoon_frag: zy,
    points_vert: ky,
    points_frag: Vy,
    shadow_vert: Hy,
    shadow_frag: Gy,
    sprite_vert: Wy,
    sprite_frag: Xy
  }, le = {
    common: {
      diffuse: {
        value: new Ce(16777215)
      },
      opacity: {
        value: 1
      },
      map: {
        value: null
      },
      mapTransform: {
        value: new ze()
      },
      alphaMap: {
        value: null
      },
      alphaMapTransform: {
        value: new ze()
      },
      alphaTest: {
        value: 0
      }
    },
    specularmap: {
      specularMap: {
        value: null
      },
      specularMapTransform: {
        value: new ze()
      }
    },
    envmap: {
      envMap: {
        value: null
      },
      envMapRotation: {
        value: new ze()
      },
      flipEnvMap: {
        value: -1
      },
      reflectivity: {
        value: 1
      },
      ior: {
        value: 1.5
      },
      refractionRatio: {
        value: 0.98
      }
    },
    aomap: {
      aoMap: {
        value: null
      },
      aoMapIntensity: {
        value: 1
      },
      aoMapTransform: {
        value: new ze()
      }
    },
    lightmap: {
      lightMap: {
        value: null
      },
      lightMapIntensity: {
        value: 1
      },
      lightMapTransform: {
        value: new ze()
      }
    },
    bumpmap: {
      bumpMap: {
        value: null
      },
      bumpMapTransform: {
        value: new ze()
      },
      bumpScale: {
        value: 1
      }
    },
    normalmap: {
      normalMap: {
        value: null
      },
      normalMapTransform: {
        value: new ze()
      },
      normalScale: {
        value: new ee(1, 1)
      }
    },
    displacementmap: {
      displacementMap: {
        value: null
      },
      displacementMapTransform: {
        value: new ze()
      },
      displacementScale: {
        value: 1
      },
      displacementBias: {
        value: 0
      }
    },
    emissivemap: {
      emissiveMap: {
        value: null
      },
      emissiveMapTransform: {
        value: new ze()
      }
    },
    metalnessmap: {
      metalnessMap: {
        value: null
      },
      metalnessMapTransform: {
        value: new ze()
      }
    },
    roughnessmap: {
      roughnessMap: {
        value: null
      },
      roughnessMapTransform: {
        value: new ze()
      }
    },
    gradientmap: {
      gradientMap: {
        value: null
      }
    },
    fog: {
      fogDensity: {
        value: 25e-5
      },
      fogNear: {
        value: 1
      },
      fogFar: {
        value: 2e3
      },
      fogColor: {
        value: new Ce(16777215)
      }
    },
    lights: {
      ambientLightColor: {
        value: []
      },
      lightProbe: {
        value: []
      },
      directionalLights: {
        value: [],
        properties: {
          direction: {},
          color: {}
        }
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      directionalShadowMap: {
        value: []
      },
      directionalShadowMatrix: {
        value: []
      },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {}
        }
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      spotLightMap: {
        value: []
      },
      spotShadowMap: {
        value: []
      },
      spotLightMatrix: {
        value: []
      },
      pointLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          decay: {},
          distance: {}
        }
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {}
        }
      },
      pointShadowMap: {
        value: []
      },
      pointShadowMatrix: {
        value: []
      },
      hemisphereLights: {
        value: [],
        properties: {
          direction: {},
          skyColor: {},
          groundColor: {}
        }
      },
      rectAreaLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          width: {},
          height: {}
        }
      },
      ltc_1: {
        value: null
      },
      ltc_2: {
        value: null
      }
    },
    points: {
      diffuse: {
        value: new Ce(16777215)
      },
      opacity: {
        value: 1
      },
      size: {
        value: 1
      },
      scale: {
        value: 1
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      alphaMapTransform: {
        value: new ze()
      },
      alphaTest: {
        value: 0
      },
      uvTransform: {
        value: new ze()
      }
    },
    sprite: {
      diffuse: {
        value: new Ce(16777215)
      },
      opacity: {
        value: 1
      },
      center: {
        value: new ee(0.5, 0.5)
      },
      rotation: {
        value: 0
      },
      map: {
        value: null
      },
      mapTransform: {
        value: new ze()
      },
      alphaMap: {
        value: null
      },
      alphaMapTransform: {
        value: new ze()
      },
      alphaTest: {
        value: 0
      }
    }
  }, Yn = {
    basic: {
      uniforms: Qt([
        le.common,
        le.specularmap,
        le.envmap,
        le.aomap,
        le.lightmap,
        le.fog
      ]),
      vertexShader: Ve.meshbasic_vert,
      fragmentShader: Ve.meshbasic_frag
    },
    lambert: {
      uniforms: Qt([
        le.common,
        le.specularmap,
        le.envmap,
        le.aomap,
        le.lightmap,
        le.emissivemap,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.fog,
        le.lights,
        {
          emissive: {
            value: new Ce(0)
          }
        }
      ]),
      vertexShader: Ve.meshlambert_vert,
      fragmentShader: Ve.meshlambert_frag
    },
    phong: {
      uniforms: Qt([
        le.common,
        le.specularmap,
        le.envmap,
        le.aomap,
        le.lightmap,
        le.emissivemap,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.fog,
        le.lights,
        {
          emissive: {
            value: new Ce(0)
          },
          specular: {
            value: new Ce(1118481)
          },
          shininess: {
            value: 30
          }
        }
      ]),
      vertexShader: Ve.meshphong_vert,
      fragmentShader: Ve.meshphong_frag
    },
    standard: {
      uniforms: Qt([
        le.common,
        le.envmap,
        le.aomap,
        le.lightmap,
        le.emissivemap,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.roughnessmap,
        le.metalnessmap,
        le.fog,
        le.lights,
        {
          emissive: {
            value: new Ce(0)
          },
          roughness: {
            value: 1
          },
          metalness: {
            value: 0
          },
          envMapIntensity: {
            value: 1
          }
        }
      ]),
      vertexShader: Ve.meshphysical_vert,
      fragmentShader: Ve.meshphysical_frag
    },
    toon: {
      uniforms: Qt([
        le.common,
        le.aomap,
        le.lightmap,
        le.emissivemap,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.gradientmap,
        le.fog,
        le.lights,
        {
          emissive: {
            value: new Ce(0)
          }
        }
      ]),
      vertexShader: Ve.meshtoon_vert,
      fragmentShader: Ve.meshtoon_frag
    },
    matcap: {
      uniforms: Qt([
        le.common,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.fog,
        {
          matcap: {
            value: null
          }
        }
      ]),
      vertexShader: Ve.meshmatcap_vert,
      fragmentShader: Ve.meshmatcap_frag
    },
    points: {
      uniforms: Qt([
        le.points,
        le.fog
      ]),
      vertexShader: Ve.points_vert,
      fragmentShader: Ve.points_frag
    },
    dashed: {
      uniforms: Qt([
        le.common,
        le.fog,
        {
          scale: {
            value: 1
          },
          dashSize: {
            value: 1
          },
          totalSize: {
            value: 2
          }
        }
      ]),
      vertexShader: Ve.linedashed_vert,
      fragmentShader: Ve.linedashed_frag
    },
    depth: {
      uniforms: Qt([
        le.common,
        le.displacementmap
      ]),
      vertexShader: Ve.depth_vert,
      fragmentShader: Ve.depth_frag
    },
    normal: {
      uniforms: Qt([
        le.common,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        {
          opacity: {
            value: 1
          }
        }
      ]),
      vertexShader: Ve.meshnormal_vert,
      fragmentShader: Ve.meshnormal_frag
    },
    sprite: {
      uniforms: Qt([
        le.sprite,
        le.fog
      ]),
      vertexShader: Ve.sprite_vert,
      fragmentShader: Ve.sprite_frag
    },
    background: {
      uniforms: {
        uvTransform: {
          value: new ze()
        },
        t2D: {
          value: null
        },
        backgroundIntensity: {
          value: 1
        }
      },
      vertexShader: Ve.background_vert,
      fragmentShader: Ve.background_frag
    },
    backgroundCube: {
      uniforms: {
        envMap: {
          value: null
        },
        flipEnvMap: {
          value: -1
        },
        backgroundBlurriness: {
          value: 0
        },
        backgroundIntensity: {
          value: 1
        },
        backgroundRotation: {
          value: new ze()
        }
      },
      vertexShader: Ve.backgroundCube_vert,
      fragmentShader: Ve.backgroundCube_frag
    },
    cube: {
      uniforms: {
        tCube: {
          value: null
        },
        tFlip: {
          value: -1
        },
        opacity: {
          value: 1
        }
      },
      vertexShader: Ve.cube_vert,
      fragmentShader: Ve.cube_frag
    },
    equirect: {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: Ve.equirect_vert,
      fragmentShader: Ve.equirect_frag
    },
    distanceRGBA: {
      uniforms: Qt([
        le.common,
        le.displacementmap,
        {
          referencePosition: {
            value: new D()
          },
          nearDistance: {
            value: 1
          },
          farDistance: {
            value: 1e3
          }
        }
      ]),
      vertexShader: Ve.distanceRGBA_vert,
      fragmentShader: Ve.distanceRGBA_frag
    },
    shadow: {
      uniforms: Qt([
        le.lights,
        le.fog,
        {
          color: {
            value: new Ce(0)
          },
          opacity: {
            value: 1
          }
        }
      ]),
      vertexShader: Ve.shadow_vert,
      fragmentShader: Ve.shadow_frag
    }
  };
  Yn.physical = {
    uniforms: Qt([
      Yn.standard.uniforms,
      {
        clearcoat: {
          value: 0
        },
        clearcoatMap: {
          value: null
        },
        clearcoatMapTransform: {
          value: new ze()
        },
        clearcoatNormalMap: {
          value: null
        },
        clearcoatNormalMapTransform: {
          value: new ze()
        },
        clearcoatNormalScale: {
          value: new ee(1, 1)
        },
        clearcoatRoughness: {
          value: 0
        },
        clearcoatRoughnessMap: {
          value: null
        },
        clearcoatRoughnessMapTransform: {
          value: new ze()
        },
        dispersion: {
          value: 0
        },
        iridescence: {
          value: 0
        },
        iridescenceMap: {
          value: null
        },
        iridescenceMapTransform: {
          value: new ze()
        },
        iridescenceIOR: {
          value: 1.3
        },
        iridescenceThicknessMinimum: {
          value: 100
        },
        iridescenceThicknessMaximum: {
          value: 400
        },
        iridescenceThicknessMap: {
          value: null
        },
        iridescenceThicknessMapTransform: {
          value: new ze()
        },
        sheen: {
          value: 0
        },
        sheenColor: {
          value: new Ce(0)
        },
        sheenColorMap: {
          value: null
        },
        sheenColorMapTransform: {
          value: new ze()
        },
        sheenRoughness: {
          value: 1
        },
        sheenRoughnessMap: {
          value: null
        },
        sheenRoughnessMapTransform: {
          value: new ze()
        },
        transmission: {
          value: 0
        },
        transmissionMap: {
          value: null
        },
        transmissionMapTransform: {
          value: new ze()
        },
        transmissionSamplerSize: {
          value: new ee()
        },
        transmissionSamplerMap: {
          value: null
        },
        thickness: {
          value: 0
        },
        thicknessMap: {
          value: null
        },
        thicknessMapTransform: {
          value: new ze()
        },
        attenuationDistance: {
          value: 0
        },
        attenuationColor: {
          value: new Ce(0)
        },
        specularColor: {
          value: new Ce(1, 1, 1)
        },
        specularColorMap: {
          value: null
        },
        specularColorMapTransform: {
          value: new ze()
        },
        specularIntensity: {
          value: 1
        },
        specularIntensityMap: {
          value: null
        },
        specularIntensityMapTransform: {
          value: new ze()
        },
        anisotropyVector: {
          value: new ee()
        },
        anisotropyMap: {
          value: null
        },
        anisotropyMapTransform: {
          value: new ze()
        }
      }
    ]),
    vertexShader: Ve.meshphysical_vert,
    fragmentShader: Ve.meshphysical_frag
  };
  const Da = {
    r: 0,
    b: 0,
    g: 0
  }, ar = new Xn(), qy = new Fe();
  function Yy(r, e, t, n, i, s, o) {
    const a = new Ce(0);
    let l = s === true ? 0 : 1, c, u, h = null, d = 0, f = null;
    function _(v) {
      let x = v.isScene === true ? v.background : null;
      return x && x.isTexture && (x = (v.backgroundBlurriness > 0 ? t : e).get(x)), x;
    }
    function g(v) {
      let x = false;
      const w = _(v);
      w === null ? p(a, l) : w && w.isColor && (p(w, 1), x = true);
      const b = r.xr.getEnvironmentBlendMode();
      b === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : b === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (r.autoClear || x) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil));
    }
    function m(v, x) {
      const w = _(x);
      w && (w.isCubeTexture || w.mapping === hl) ? (u === void 0 && (u = new Ct(new Ur(1, 1, 1), new $t({
        name: "BackgroundCubeMaterial",
        uniforms: As(Yn.backgroundCube.uniforms),
        vertexShader: Yn.backgroundCube.vertexShader,
        fragmentShader: Yn.backgroundCube.fragmentShader,
        side: ln,
        depthTest: false,
        depthWrite: false,
        fog: false
      })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(b, A, P) {
        this.matrixWorld.copyPosition(P.matrixWorld);
      }, Object.defineProperty(u.material, "envMap", {
        get: function() {
          return this.uniforms.envMap.value;
        }
      }), i.update(u)), ar.copy(x.backgroundRotation), ar.x *= -1, ar.y *= -1, ar.z *= -1, w.isCubeTexture && w.isRenderTargetTexture === false && (ar.y *= -1, ar.z *= -1), u.material.uniforms.envMap.value = w, u.material.uniforms.flipEnvMap.value = w.isCubeTexture && w.isRenderTargetTexture === false ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = x.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(qy.makeRotationFromEuler(ar)), u.material.toneMapped = $e.getTransfer(w.colorSpace) !== dt, (h !== w || d !== w.version || f !== r.toneMapping) && (u.material.needsUpdate = true, h = w, d = w.version, f = r.toneMapping), u.layers.enableAll(), v.unshift(u, u.geometry, u.material, 0, 0, null)) : w && w.isTexture && (c === void 0 && (c = new Ct(new Zo(2, 2), new $t({
        name: "BackgroundMaterial",
        uniforms: As(Yn.background.uniforms),
        vertexShader: Yn.background.vertexShader,
        fragmentShader: Yn.background.fragmentShader,
        side: Ai,
        depthTest: false,
        depthWrite: false,
        fog: false
      })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
        get: function() {
          return this.uniforms.t2D.value;
        }
      }), i.update(c)), c.material.uniforms.t2D.value = w, c.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, c.material.toneMapped = $e.getTransfer(w.colorSpace) !== dt, w.matrixAutoUpdate === true && w.updateMatrix(), c.material.uniforms.uvTransform.value.copy(w.matrix), (h !== w || d !== w.version || f !== r.toneMapping) && (c.material.needsUpdate = true, h = w, d = w.version, f = r.toneMapping), c.layers.enableAll(), v.unshift(c, c.geometry, c.material, 0, 0, null));
    }
    function p(v, x) {
      v.getRGB(Da, hp(r)), n.buffers.color.setClear(Da.r, Da.g, Da.b, x, o);
    }
    function y() {
      u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
    }
    return {
      getClearColor: function() {
        return a;
      },
      setClearColor: function(v, x = 1) {
        a.set(v), l = x, p(a, l);
      },
      getClearAlpha: function() {
        return l;
      },
      setClearAlpha: function(v) {
        l = v, p(a, l);
      },
      render: g,
      addToRenderList: m,
      dispose: y
    };
  }
  function $y(r, e) {
    const t = r.getParameter(r.MAX_VERTEX_ATTRIBS), n = {}, i = d(null);
    let s = i, o = false;
    function a(M, L, G, O, V) {
      let q = false;
      const B = h(O, G, L);
      s !== B && (s = B, c(s.object)), q = f(M, O, G, V), q && _(M, O, G, V), V !== null && e.update(V, r.ELEMENT_ARRAY_BUFFER), (q || o) && (o = false, x(M, L, G, O), V !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.get(V).buffer));
    }
    function l() {
      return r.createVertexArray();
    }
    function c(M) {
      return r.bindVertexArray(M);
    }
    function u(M) {
      return r.deleteVertexArray(M);
    }
    function h(M, L, G) {
      const O = G.wireframe === true;
      let V = n[M.id];
      V === void 0 && (V = {}, n[M.id] = V);
      let q = V[L.id];
      q === void 0 && (q = {}, V[L.id] = q);
      let B = q[O];
      return B === void 0 && (B = d(l()), q[O] = B), B;
    }
    function d(M) {
      const L = [], G = [], O = [];
      for (let V = 0; V < t; V++) L[V] = 0, G[V] = 0, O[V] = 0;
      return {
        geometry: null,
        program: null,
        wireframe: false,
        newAttributes: L,
        enabledAttributes: G,
        attributeDivisors: O,
        object: M,
        attributes: {},
        index: null
      };
    }
    function f(M, L, G, O) {
      const V = s.attributes, q = L.attributes;
      let B = 0;
      const K = G.getAttributes();
      for (const H in K) if (K[H].location >= 0) {
        const ce = V[H];
        let ge = q[H];
        if (ge === void 0 && (H === "instanceMatrix" && M.instanceMatrix && (ge = M.instanceMatrix), H === "instanceColor" && M.instanceColor && (ge = M.instanceColor)), ce === void 0 || ce.attribute !== ge || ge && ce.data !== ge.data) return true;
        B++;
      }
      return s.attributesNum !== B || s.index !== O;
    }
    function _(M, L, G, O) {
      const V = {}, q = L.attributes;
      let B = 0;
      const K = G.getAttributes();
      for (const H in K) if (K[H].location >= 0) {
        let ce = q[H];
        ce === void 0 && (H === "instanceMatrix" && M.instanceMatrix && (ce = M.instanceMatrix), H === "instanceColor" && M.instanceColor && (ce = M.instanceColor));
        const ge = {};
        ge.attribute = ce, ce && ce.data && (ge.data = ce.data), V[H] = ge, B++;
      }
      s.attributes = V, s.attributesNum = B, s.index = O;
    }
    function g() {
      const M = s.newAttributes;
      for (let L = 0, G = M.length; L < G; L++) M[L] = 0;
    }
    function m(M) {
      p(M, 0);
    }
    function p(M, L) {
      const G = s.newAttributes, O = s.enabledAttributes, V = s.attributeDivisors;
      G[M] = 1, O[M] === 0 && (r.enableVertexAttribArray(M), O[M] = 1), V[M] !== L && (r.vertexAttribDivisor(M, L), V[M] = L);
    }
    function y() {
      const M = s.newAttributes, L = s.enabledAttributes;
      for (let G = 0, O = L.length; G < O; G++) L[G] !== M[G] && (r.disableVertexAttribArray(G), L[G] = 0);
    }
    function v(M, L, G, O, V, q, B) {
      B === true ? r.vertexAttribIPointer(M, L, G, V, q) : r.vertexAttribPointer(M, L, G, O, V, q);
    }
    function x(M, L, G, O) {
      g();
      const V = O.attributes, q = G.getAttributes(), B = L.defaultAttributeValues;
      for (const K in q) {
        const H = q[K];
        if (H.location >= 0) {
          let oe = V[K];
          if (oe === void 0 && (K === "instanceMatrix" && M.instanceMatrix && (oe = M.instanceMatrix), K === "instanceColor" && M.instanceColor && (oe = M.instanceColor)), oe !== void 0) {
            const ce = oe.normalized, ge = oe.itemSize, Le = e.get(oe);
            if (Le === void 0) continue;
            const Ke = Le.buffer, X = Le.type, ie = Le.bytesPerElement, Ee = X === r.INT || X === r.UNSIGNED_INT || oe.gpuType === Uu;
            if (oe.isInterleavedBufferAttribute) {
              const ae = oe.data, Ae = ae.stride, je = oe.offset;
              if (ae.isInstancedInterleavedBuffer) {
                for (let we = 0; we < H.locationSize; we++) p(H.location + we, ae.meshPerAttribute);
                M.isInstancedMesh !== true && O._maxInstanceCount === void 0 && (O._maxInstanceCount = ae.meshPerAttribute * ae.count);
              } else for (let we = 0; we < H.locationSize; we++) m(H.location + we);
              r.bindBuffer(r.ARRAY_BUFFER, Ke);
              for (let we = 0; we < H.locationSize; we++) v(H.location + we, ge / H.locationSize, X, ce, Ae * ie, (je + ge / H.locationSize * we) * ie, Ee);
            } else {
              if (oe.isInstancedBufferAttribute) {
                for (let ae = 0; ae < H.locationSize; ae++) p(H.location + ae, oe.meshPerAttribute);
                M.isInstancedMesh !== true && O._maxInstanceCount === void 0 && (O._maxInstanceCount = oe.meshPerAttribute * oe.count);
              } else for (let ae = 0; ae < H.locationSize; ae++) m(H.location + ae);
              r.bindBuffer(r.ARRAY_BUFFER, Ke);
              for (let ae = 0; ae < H.locationSize; ae++) v(H.location + ae, ge / H.locationSize, X, ce, ge * ie, ge / H.locationSize * ae * ie, Ee);
            }
          } else if (B !== void 0) {
            const ce = B[K];
            if (ce !== void 0) switch (ce.length) {
              case 2:
                r.vertexAttrib2fv(H.location, ce);
                break;
              case 3:
                r.vertexAttrib3fv(H.location, ce);
                break;
              case 4:
                r.vertexAttrib4fv(H.location, ce);
                break;
              default:
                r.vertexAttrib1fv(H.location, ce);
            }
          }
        }
      }
      y();
    }
    function w() {
      P();
      for (const M in n) {
        const L = n[M];
        for (const G in L) {
          const O = L[G];
          for (const V in O) u(O[V].object), delete O[V];
          delete L[G];
        }
        delete n[M];
      }
    }
    function b(M) {
      if (n[M.id] === void 0) return;
      const L = n[M.id];
      for (const G in L) {
        const O = L[G];
        for (const V in O) u(O[V].object), delete O[V];
        delete L[G];
      }
      delete n[M.id];
    }
    function A(M) {
      for (const L in n) {
        const G = n[L];
        if (G[M.id] === void 0) continue;
        const O = G[M.id];
        for (const V in O) u(O[V].object), delete O[V];
        delete G[M.id];
      }
    }
    function P() {
      S(), o = true, s !== i && (s = i, c(s.object));
    }
    function S() {
      i.geometry = null, i.program = null, i.wireframe = false;
    }
    return {
      setup: a,
      reset: P,
      resetDefaultState: S,
      dispose: w,
      releaseStatesOfGeometry: b,
      releaseStatesOfProgram: A,
      initAttributes: g,
      enableAttribute: m,
      disableUnusedAttributes: y
    };
  }
  function Ky(r, e, t) {
    let n;
    function i(c) {
      n = c;
    }
    function s(c, u) {
      r.drawArrays(n, c, u), t.update(u, n, 1);
    }
    function o(c, u, h) {
      h !== 0 && (r.drawArraysInstanced(n, c, u, h), t.update(u, n, h));
    }
    function a(c, u, h) {
      if (h === 0) return;
      e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, u, 0, h);
      let f = 0;
      for (let _ = 0; _ < h; _++) f += u[_];
      t.update(f, n, 1);
    }
    function l(c, u, h, d) {
      if (h === 0) return;
      const f = e.get("WEBGL_multi_draw");
      if (f === null) for (let _ = 0; _ < c.length; _++) o(c[_], u[_], d[_]);
      else {
        f.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, d, 0, h);
        let _ = 0;
        for (let g = 0; g < h; g++) _ += u[g] * d[g];
        t.update(_, n, 1);
      }
    }
    this.setMode = i, this.render = s, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l;
  }
  function jy(r, e, t, n) {
    let i;
    function s() {
      if (i !== void 0) return i;
      if (e.has("EXT_texture_filter_anisotropic") === true) {
        const A = e.get("EXT_texture_filter_anisotropic");
        i = r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else i = 0;
      return i;
    }
    function o(A) {
      return !(A !== Dn && n.convert(A) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT));
    }
    function a(A) {
      const P = A === bi && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
      return !(A !== Ci && n.convert(A) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE) && A !== Gn && !P);
    }
    function l(A) {
      if (A === "highp") {
        if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0) return "highp";
        A = "mediump";
      }
      return A === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
    }
    let c = t.precision !== void 0 ? t.precision : "highp";
    const u = l(c);
    u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
    const h = t.logarithmicDepthBuffer === true, d = t.reverseDepthBuffer === true && e.has("EXT_clip_control"), f = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), _ = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = r.getParameter(r.MAX_TEXTURE_SIZE), m = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), p = r.getParameter(r.MAX_VERTEX_ATTRIBS), y = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), v = r.getParameter(r.MAX_VARYING_VECTORS), x = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), w = _ > 0, b = r.getParameter(r.MAX_SAMPLES);
    return {
      isWebGL2: true,
      getMaxAnisotropy: s,
      getMaxPrecision: l,
      textureFormatReadable: o,
      textureTypeReadable: a,
      precision: c,
      logarithmicDepthBuffer: h,
      reverseDepthBuffer: d,
      maxTextures: f,
      maxVertexTextures: _,
      maxTextureSize: g,
      maxCubemapSize: m,
      maxAttributes: p,
      maxVertexUniforms: y,
      maxVaryings: v,
      maxFragmentUniforms: x,
      vertexTextures: w,
      maxSamples: b
    };
  }
  function Zy(r) {
    const e = this;
    let t = null, n = 0, i = false, s = false;
    const o = new fr(), a = new ze(), l = {
      value: null,
      needsUpdate: false
    };
    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, d) {
      const f = h.length !== 0 || d || n !== 0 || i;
      return i = d, n = h.length, f;
    }, this.beginShadows = function() {
      s = true, u(null);
    }, this.endShadows = function() {
      s = false;
    }, this.setGlobalState = function(h, d) {
      t = u(h, d, 0);
    }, this.setState = function(h, d, f) {
      const _ = h.clippingPlanes, g = h.clipIntersection, m = h.clipShadows, p = r.get(h);
      if (!i || _ === null || _.length === 0 || s && !m) s ? u(null) : c();
      else {
        const y = s ? 0 : n, v = y * 4;
        let x = p.clippingState || null;
        l.value = x, x = u(_, d, v, f);
        for (let w = 0; w !== v; ++w) x[w] = t[w];
        p.clippingState = x, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += y;
      }
    };
    function c() {
      l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
    }
    function u(h, d, f, _) {
      const g = h !== null ? h.length : 0;
      let m = null;
      if (g !== 0) {
        if (m = l.value, _ !== true || m === null) {
          const p = f + g * 4, y = d.matrixWorldInverse;
          a.getNormalMatrix(y), (m === null || m.length < p) && (m = new Float32Array(p));
          for (let v = 0, x = f; v !== g; ++v, x += 4) o.copy(h[v]).applyMatrix4(y, a), o.normal.toArray(m, x), m[x + 3] = o.constant;
        }
        l.value = m, l.needsUpdate = true;
      }
      return e.numPlanes = g, e.numIntersection = 0, m;
    }
  }
  function Jy(r) {
    let e = /* @__PURE__ */ new WeakMap();
    function t(o, a) {
      return a === Ac ? o.mapping = Ss : a === Cc && (o.mapping = Ms), o;
    }
    function n(o) {
      if (o && o.isTexture) {
        const a = o.mapping;
        if (a === Ac || a === Cc) if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new k_(l.height);
            return c.fromEquirectangularTexture(r, o), e.set(o, c), o.addEventListener("dispose", i), t(c.texture, o.mapping);
          } else return null;
        }
      }
      return o;
    }
    function i(o) {
      const a = o.target;
      a.removeEventListener("dispose", i);
      const l = e.get(a);
      l !== void 0 && (e.delete(a), l.dispose());
    }
    function s() {
      e = /* @__PURE__ */ new WeakMap();
    }
    return {
      get: n,
      dispose: s
    };
  }
  const ls = 4, Vd = [
    0.125,
    0.215,
    0.35,
    0.446,
    0.526,
    0.582
  ], xr = 20, Zl = new pl(), Hd = new Ce();
  let Jl = null, Ql = 0, ec = 0, tc = false;
  const pr = (1 + Math.sqrt(5)) / 2, rs = 1 / pr, Gd = [
    new D(-pr, rs, 0),
    new D(pr, rs, 0),
    new D(-rs, 0, pr),
    new D(rs, 0, pr),
    new D(0, pr, -rs),
    new D(0, pr, rs),
    new D(-1, 1, -1),
    new D(1, 1, -1),
    new D(-1, 1, 1),
    new D(1, 1, 1)
  ];
  class Wd {
    constructor(e) {
      this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
    }
    fromScene(e, t = 0, n = 0.1, i = 100) {
      Jl = this._renderer.getRenderTarget(), Ql = this._renderer.getActiveCubeFace(), ec = this._renderer.getActiveMipmapLevel(), tc = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(256);
      const s = this._allocateTargets();
      return s.depthBuffer = true, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
    }
    fromEquirectangular(e, t = null) {
      return this._fromTexture(e, t);
    }
    fromCubemap(e, t = null) {
      return this._fromTexture(e, t);
    }
    compileCubemapShader() {
      this._cubemapMaterial === null && (this._cubemapMaterial = Yd(), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      this._equirectMaterial === null && (this._equirectMaterial = qd(), this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
    }
    _setSize(e) {
      this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
    }
    _dispose() {
      this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
      for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
    }
    _cleanup(e) {
      this._renderer.setRenderTarget(Jl, Ql, ec), this._renderer.xr.enabled = tc, e.scissorTest = false, Ia(e, 0, 0, e.width, e.height);
    }
    _fromTexture(e, t) {
      e.mapping === Ss || e.mapping === Ms ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Jl = this._renderer.getRenderTarget(), Ql = this._renderer.getActiveCubeFace(), ec = this._renderer.getActiveMipmapLevel(), tc = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
      const n = t || this._allocateTargets();
      return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
    }
    _allocateTargets() {
      const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
        magFilter: Sn,
        minFilter: Sn,
        generateMipmaps: false,
        type: bi,
        format: Dn,
        colorSpace: sn,
        depthBuffer: false
      }, i = Xd(e, t, n);
      if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
        this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Xd(e, t, n);
        const { _lodMax: s } = this;
        ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Qy(s)), this._blurMaterial = eS(s, e, t);
      }
      return i;
    }
    _compileMaterial(e) {
      const t = new Ct(this._lodPlanes[0], e);
      this._renderer.compile(t, Zl);
    }
    _sceneToCubeUV(e, t, n, i) {
      const a = new en(90, 1, t, n), l = [
        1,
        -1,
        1,
        1,
        1,
        1
      ], c = [
        1,
        1,
        1,
        -1,
        -1,
        -1
      ], u = this._renderer, h = u.autoClear, d = u.toneMapping;
      u.getClearColor(Hd), u.toneMapping = $i, u.autoClear = false;
      const f = new jn({
        name: "PMREM.Background",
        side: ln,
        depthWrite: false,
        depthTest: false
      }), _ = new Ct(new Ur(), f);
      let g = false;
      const m = e.background;
      m ? m.isColor && (f.color.copy(m), e.background = null, g = true) : (f.color.copy(Hd), g = true);
      for (let p = 0; p < 6; p++) {
        const y = p % 3;
        y === 0 ? (a.up.set(0, l[p], 0), a.lookAt(c[p], 0, 0)) : y === 1 ? (a.up.set(0, 0, l[p]), a.lookAt(0, c[p], 0)) : (a.up.set(0, l[p], 0), a.lookAt(0, 0, c[p]));
        const v = this._cubeSize;
        Ia(i, y * v, p > 2 ? v : 0, v, v), u.setRenderTarget(i), g && u.render(_, a), u.render(e, a);
      }
      _.geometry.dispose(), _.material.dispose(), u.toneMapping = d, u.autoClear = h, e.background = m;
    }
    _textureToCubeUV(e, t) {
      const n = this._renderer, i = e.mapping === Ss || e.mapping === Ms;
      i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Yd()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = qd());
      const s = i ? this._cubemapMaterial : this._equirectMaterial, o = new Ct(this._lodPlanes[0], s), a = s.uniforms;
      a.envMap.value = e;
      const l = this._cubeSize;
      Ia(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, Zl);
    }
    _applyPMREM(e) {
      const t = this._renderer, n = t.autoClear;
      t.autoClear = false;
      const i = this._lodPlanes.length;
      for (let s = 1; s < i; s++) {
        const o = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), a = Gd[(i - s - 1) % Gd.length];
        this._blur(e, s - 1, s, o, a);
      }
      t.autoClear = n;
    }
    _blur(e, t, n, i, s) {
      const o = this._pingPongRenderTarget;
      this._halfBlur(e, o, t, n, i, "latitudinal", s), this._halfBlur(o, e, n, n, i, "longitudinal", s);
    }
    _halfBlur(e, t, n, i, s, o, a) {
      const l = this._renderer, c = this._blurMaterial;
      o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
      const u = 3, h = new Ct(this._lodPlanes[i], c), d = c.uniforms, f = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * xr - 1), g = s / _, m = isFinite(s) ? 1 + Math.floor(u * g) : xr;
      m > xr && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xr}`);
      const p = [];
      let y = 0;
      for (let A = 0; A < xr; ++A) {
        const P = A / g, S = Math.exp(-P * P / 2);
        p.push(S), A === 0 ? y += S : A < m && (y += 2 * S);
      }
      for (let A = 0; A < p.length; A++) p[A] = p[A] / y;
      d.envMap.value = e.texture, d.samples.value = m, d.weights.value = p, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
      const { _lodMax: v } = this;
      d.dTheta.value = _, d.mipInt.value = v - n;
      const x = this._sizeLods[i], w = 3 * x * (i > v - ls ? i - v + ls : 0), b = 4 * (this._cubeSize - x);
      Ia(t, w, b, 3 * x, 2 * x), l.setRenderTarget(t), l.render(h, Zl);
    }
  }
  function Qy(r) {
    const e = [], t = [], n = [];
    let i = r;
    const s = r - ls + 1 + Vd.length;
    for (let o = 0; o < s; o++) {
      const a = Math.pow(2, i);
      t.push(a);
      let l = 1 / a;
      o > r - ls ? l = Vd[o - r + ls - 1] : o === 0 && (l = 0), n.push(l);
      const c = 1 / (a - 2), u = -c, h = 1 + c, d = [
        u,
        u,
        h,
        u,
        h,
        h,
        u,
        u,
        h,
        h,
        u,
        h
      ], f = 6, _ = 6, g = 3, m = 2, p = 1, y = new Float32Array(g * _ * f), v = new Float32Array(m * _ * f), x = new Float32Array(p * _ * f);
      for (let b = 0; b < f; b++) {
        const A = b % 3 * 2 / 3 - 1, P = b > 2 ? 0 : -1, S = [
          A,
          P,
          0,
          A + 2 / 3,
          P,
          0,
          A + 2 / 3,
          P + 1,
          0,
          A,
          P,
          0,
          A + 2 / 3,
          P + 1,
          0,
          A,
          P + 1,
          0
        ];
        y.set(S, g * _ * b), v.set(d, m * _ * b);
        const M = [
          b,
          b,
          b,
          b,
          b,
          b
        ];
        x.set(M, p * _ * b);
      }
      const w = new pn();
      w.setAttribute("position", new rn(y, g)), w.setAttribute("uv", new rn(v, m)), w.setAttribute("faceIndex", new rn(x, p)), e.push(w), i > ls && i--;
    }
    return {
      lodPlanes: e,
      sizeLods: t,
      sigmas: n
    };
  }
  function Xd(r, e, t) {
    const n = new Wn(r, e, t);
    return n.texture.mapping = hl, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
  }
  function Ia(r, e, t, n, i) {
    r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
  }
  function eS(r, e, t) {
    const n = new Float32Array(xr), i = new D(0, 1, 0);
    return new $t({
      name: "SphericalGaussianBlur",
      defines: {
        n: xr,
        CUBEUV_TEXEL_WIDTH: 1 / e,
        CUBEUV_TEXEL_HEIGHT: 1 / t,
        CUBEUV_MAX_MIP: `${r}.0`
      },
      uniforms: {
        envMap: {
          value: null
        },
        samples: {
          value: 1
        },
        weights: {
          value: n
        },
        latitudinal: {
          value: false
        },
        dTheta: {
          value: 0
        },
        mipInt: {
          value: 0
        },
        poleAxis: {
          value: i
        }
      },
      vertexShader: sh(),
      fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
      blending: Ti,
      depthTest: false,
      depthWrite: false
    });
  }
  function qd() {
    return new $t({
      name: "EquirectangularToCubeUV",
      uniforms: {
        envMap: {
          value: null
        }
      },
      vertexShader: sh(),
      fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
      blending: Ti,
      depthTest: false,
      depthWrite: false
    });
  }
  function Yd() {
    return new $t({
      name: "CubemapToCubeUV",
      uniforms: {
        envMap: {
          value: null
        },
        flipEnvMap: {
          value: -1
        }
      },
      vertexShader: sh(),
      fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
      blending: Ti,
      depthTest: false,
      depthWrite: false
    });
  }
  function sh() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
  }
  function tS(r) {
    let e = /* @__PURE__ */ new WeakMap(), t = null;
    function n(a) {
      if (a && a.isTexture) {
        const l = a.mapping, c = l === Ac || l === Cc, u = l === Ss || l === Ms;
        if (c || u) {
          let h = e.get(a);
          const d = h !== void 0 ? h.texture.pmremVersion : 0;
          if (a.isRenderTargetTexture && a.pmremVersion !== d) return t === null && (t = new Wd(r)), h = c ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h), h.texture.pmremVersion = a.pmremVersion, e.set(a, h), h.texture;
          if (h !== void 0) return h.texture;
          {
            const f = a.image;
            return c && f && f.height > 0 || u && f && i(f) ? (t === null && (t = new Wd(r)), h = c ? t.fromEquirectangular(a) : t.fromCubemap(a), h.texture.pmremVersion = a.pmremVersion, e.set(a, h), a.addEventListener("dispose", s), h.texture) : null;
          }
        }
      }
      return a;
    }
    function i(a) {
      let l = 0;
      const c = 6;
      for (let u = 0; u < c; u++) a[u] !== void 0 && l++;
      return l === c;
    }
    function s(a) {
      const l = a.target;
      l.removeEventListener("dispose", s);
      const c = e.get(l);
      c !== void 0 && (e.delete(l), c.dispose());
    }
    function o() {
      e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
    }
    return {
      get: n,
      dispose: o
    };
  }
  function nS(r) {
    const e = {};
    function t(n) {
      if (e[n] !== void 0) return e[n];
      let i;
      switch (n) {
        case "WEBGL_depth_texture":
          i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          i = r.getExtension(n);
      }
      return e[n] = i, i;
    }
    return {
      has: function(n) {
        return t(n) !== null;
      },
      init: function() {
        t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
      },
      get: function(n) {
        const i = t(n);
        return i === null && os("THREE.WebGLRenderer: " + n + " extension not supported."), i;
      }
    };
  }
  function iS(r, e, t, n) {
    const i = {}, s = /* @__PURE__ */ new WeakMap();
    function o(h) {
      const d = h.target;
      d.index !== null && e.remove(d.index);
      for (const _ in d.attributes) e.remove(d.attributes[_]);
      d.removeEventListener("dispose", o), delete i[d.id];
      const f = s.get(d);
      f && (e.remove(f), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === true && delete d._maxInstanceCount, t.memory.geometries--;
    }
    function a(h, d) {
      return i[d.id] === true || (d.addEventListener("dispose", o), i[d.id] = true, t.memory.geometries++), d;
    }
    function l(h) {
      const d = h.attributes;
      for (const f in d) e.update(d[f], r.ARRAY_BUFFER);
    }
    function c(h) {
      const d = [], f = h.index, _ = h.attributes.position;
      let g = 0;
      if (f !== null) {
        const y = f.array;
        g = f.version;
        for (let v = 0, x = y.length; v < x; v += 3) {
          const w = y[v + 0], b = y[v + 1], A = y[v + 2];
          d.push(w, b, b, A, A, w);
        }
      } else if (_ !== void 0) {
        const y = _.array;
        g = _.version;
        for (let v = 0, x = y.length / 3 - 1; v < x; v += 3) {
          const w = v + 0, b = v + 1, A = v + 2;
          d.push(w, b, b, A, A, w);
        }
      } else return;
      const m = new (sp(d) ? up : cp)(d, 1);
      m.version = g;
      const p = s.get(h);
      p && e.remove(p), s.set(h, m);
    }
    function u(h) {
      const d = s.get(h);
      if (d) {
        const f = h.index;
        f !== null && d.version < f.version && c(h);
      } else c(h);
      return s.get(h);
    }
    return {
      get: a,
      update: l,
      getWireframeAttribute: u
    };
  }
  function rS(r, e, t) {
    let n;
    function i(d) {
      n = d;
    }
    let s, o;
    function a(d) {
      s = d.type, o = d.bytesPerElement;
    }
    function l(d, f) {
      r.drawElements(n, f, s, d * o), t.update(f, n, 1);
    }
    function c(d, f, _) {
      _ !== 0 && (r.drawElementsInstanced(n, f, s, d * o, _), t.update(f, n, _));
    }
    function u(d, f, _) {
      if (_ === 0) return;
      e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, f, 0, s, d, 0, _);
      let m = 0;
      for (let p = 0; p < _; p++) m += f[p];
      t.update(m, n, 1);
    }
    function h(d, f, _, g) {
      if (_ === 0) return;
      const m = e.get("WEBGL_multi_draw");
      if (m === null) for (let p = 0; p < d.length; p++) c(d[p] / o, f[p], g[p]);
      else {
        m.multiDrawElementsInstancedWEBGL(n, f, 0, s, d, 0, g, 0, _);
        let p = 0;
        for (let y = 0; y < _; y++) p += f[y] * g[y];
        t.update(p, n, 1);
      }
    }
    this.setMode = i, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = h;
  }
  function sS(r) {
    const e = {
      geometries: 0,
      textures: 0
    }, t = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
    function n(s, o, a) {
      switch (t.calls++, o) {
        case r.TRIANGLES:
          t.triangles += a * (s / 3);
          break;
        case r.LINES:
          t.lines += a * (s / 2);
          break;
        case r.LINE_STRIP:
          t.lines += a * (s - 1);
          break;
        case r.LINE_LOOP:
          t.lines += a * s;
          break;
        case r.POINTS:
          t.points += a * s;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", o);
          break;
      }
    }
    function i() {
      t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
    }
    return {
      memory: e,
      render: t,
      programs: null,
      autoReset: true,
      reset: i,
      update: n
    };
  }
  function oS(r, e, t) {
    const n = /* @__PURE__ */ new WeakMap(), i = new it();
    function s(o, a, l) {
      const c = o.morphTargetInfluences, u = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, h = u !== void 0 ? u.length : 0;
      let d = n.get(a);
      if (d === void 0 || d.count !== h) {
        let S = function() {
          A.dispose(), n.delete(a), a.removeEventListener("dispose", S);
        };
        d !== void 0 && d.texture.dispose();
        const f = a.morphAttributes.position !== void 0, _ = a.morphAttributes.normal !== void 0, g = a.morphAttributes.color !== void 0, m = a.morphAttributes.position || [], p = a.morphAttributes.normal || [], y = a.morphAttributes.color || [];
        let v = 0;
        f === true && (v = 1), _ === true && (v = 2), g === true && (v = 3);
        let x = a.attributes.position.count * v, w = 1;
        x > e.maxTextureSize && (w = Math.ceil(x / e.maxTextureSize), x = e.maxTextureSize);
        const b = new Float32Array(x * w * 4 * h), A = new ap(b, x, w, h);
        A.type = Gn, A.needsUpdate = true;
        const P = v * 4;
        for (let M = 0; M < h; M++) {
          const L = m[M], G = p[M], O = y[M], V = x * w * 4 * M;
          for (let q = 0; q < L.count; q++) {
            const B = q * P;
            f === true && (i.fromBufferAttribute(L, q), b[V + B + 0] = i.x, b[V + B + 1] = i.y, b[V + B + 2] = i.z, b[V + B + 3] = 0), _ === true && (i.fromBufferAttribute(G, q), b[V + B + 4] = i.x, b[V + B + 5] = i.y, b[V + B + 6] = i.z, b[V + B + 7] = 0), g === true && (i.fromBufferAttribute(O, q), b[V + B + 8] = i.x, b[V + B + 9] = i.y, b[V + B + 10] = i.z, b[V + B + 11] = O.itemSize === 4 ? i.w : 1);
          }
        }
        d = {
          count: h,
          texture: A,
          size: new ee(x, w)
        }, n.set(a, d), a.addEventListener("dispose", S);
      }
      if (o.isInstancedMesh === true && o.morphTexture !== null) l.getUniforms().setValue(r, "morphTexture", o.morphTexture, t);
      else {
        let f = 0;
        for (let g = 0; g < c.length; g++) f += c[g];
        const _ = a.morphTargetsRelative ? 1 : 1 - f;
        l.getUniforms().setValue(r, "morphTargetBaseInfluence", _), l.getUniforms().setValue(r, "morphTargetInfluences", c);
      }
      l.getUniforms().setValue(r, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(r, "morphTargetsTextureSize", d.size);
    }
    return {
      update: s
    };
  }
  function aS(r, e, t, n) {
    let i = /* @__PURE__ */ new WeakMap();
    function s(l) {
      const c = n.render.frame, u = l.geometry, h = e.get(l, u);
      if (i.get(h) !== c && (e.update(h), i.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === false && l.addEventListener("dispose", a), i.get(l) !== c && (t.update(l.instanceMatrix, r.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, r.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
        const d = l.skeleton;
        i.get(d) !== c && (d.update(), i.set(d, c));
      }
      return h;
    }
    function o() {
      i = /* @__PURE__ */ new WeakMap();
    }
    function a(l) {
      const c = l.target;
      c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
    }
    return {
      update: s,
      dispose: o
    };
  }
  const Pp = new Nt(), $d = new xp(1, 1), Lp = new ap(), Dp = new T_(), Ip = new fp(), Kd = [], jd = [], Zd = new Float32Array(16), Jd = new Float32Array(9), Qd = new Float32Array(4);
  function Gs(r, e, t) {
    const n = r[0];
    if (n <= 0 || n > 0) return r;
    const i = e * t;
    let s = Kd[i];
    if (s === void 0 && (s = new Float32Array(i), Kd[i] = s), e !== 0) {
      n.toArray(s, 0);
      for (let o = 1, a = 0; o !== e; ++o) a += t, r[o].toArray(s, a);
    }
    return s;
  }
  function Ut(r, e) {
    if (r.length !== e.length) return false;
    for (let t = 0, n = r.length; t < n; t++) if (r[t] !== e[t]) return false;
    return true;
  }
  function Ot(r, e) {
    for (let t = 0, n = e.length; t < n; t++) r[t] = e[t];
  }
  function ml(r, e) {
    let t = jd[e];
    t === void 0 && (t = new Int32Array(e), jd[e] = t);
    for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
    return t;
  }
  function lS(r, e) {
    const t = this.cache;
    t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
  }
  function cS(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else {
      if (Ut(t, e)) return;
      r.uniform2fv(this.addr, e), Ot(t, e);
    }
  }
  function uS(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
    else {
      if (Ut(t, e)) return;
      r.uniform3fv(this.addr, e), Ot(t, e);
    }
  }
  function hS(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else {
      if (Ut(t, e)) return;
      r.uniform4fv(this.addr, e), Ot(t, e);
    }
  }
  function dS(r, e) {
    const t = this.cache, n = e.elements;
    if (n === void 0) {
      if (Ut(t, e)) return;
      r.uniformMatrix2fv(this.addr, false, e), Ot(t, e);
    } else {
      if (Ut(t, n)) return;
      Qd.set(n), r.uniformMatrix2fv(this.addr, false, Qd), Ot(t, n);
    }
  }
  function fS(r, e) {
    const t = this.cache, n = e.elements;
    if (n === void 0) {
      if (Ut(t, e)) return;
      r.uniformMatrix3fv(this.addr, false, e), Ot(t, e);
    } else {
      if (Ut(t, n)) return;
      Jd.set(n), r.uniformMatrix3fv(this.addr, false, Jd), Ot(t, n);
    }
  }
  function pS(r, e) {
    const t = this.cache, n = e.elements;
    if (n === void 0) {
      if (Ut(t, e)) return;
      r.uniformMatrix4fv(this.addr, false, e), Ot(t, e);
    } else {
      if (Ut(t, n)) return;
      Zd.set(n), r.uniformMatrix4fv(this.addr, false, Zd), Ot(t, n);
    }
  }
  function mS(r, e) {
    const t = this.cache;
    t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
  }
  function gS(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else {
      if (Ut(t, e)) return;
      r.uniform2iv(this.addr, e), Ot(t, e);
    }
  }
  function _S(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else {
      if (Ut(t, e)) return;
      r.uniform3iv(this.addr, e), Ot(t, e);
    }
  }
  function xS(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else {
      if (Ut(t, e)) return;
      r.uniform4iv(this.addr, e), Ot(t, e);
    }
  }
  function vS(r, e) {
    const t = this.cache;
    t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
  }
  function yS(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else {
      if (Ut(t, e)) return;
      r.uniform2uiv(this.addr, e), Ot(t, e);
    }
  }
  function SS(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else {
      if (Ut(t, e)) return;
      r.uniform3uiv(this.addr, e), Ot(t, e);
    }
  }
  function MS(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else {
      if (Ut(t, e)) return;
      r.uniform4uiv(this.addr, e), Ot(t, e);
    }
  }
  function ES(r, e, t) {
    const n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i);
    let s;
    this.type === r.SAMPLER_2D_SHADOW ? ($d.compareFunction = rp, s = $d) : s = Pp, t.setTexture2D(e || s, i);
  }
  function TS(r, e, t) {
    const n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Dp, i);
  }
  function bS(r, e, t) {
    const n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Ip, i);
  }
  function wS(r, e, t) {
    const n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Lp, i);
  }
  function AS(r) {
    switch (r) {
      case 5126:
        return lS;
      case 35664:
        return cS;
      case 35665:
        return uS;
      case 35666:
        return hS;
      case 35674:
        return dS;
      case 35675:
        return fS;
      case 35676:
        return pS;
      case 5124:
      case 35670:
        return mS;
      case 35667:
      case 35671:
        return gS;
      case 35668:
      case 35672:
        return _S;
      case 35669:
      case 35673:
        return xS;
      case 5125:
        return vS;
      case 36294:
        return yS;
      case 36295:
        return SS;
      case 36296:
        return MS;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return ES;
      case 35679:
      case 36299:
      case 36307:
        return TS;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return bS;
      case 36289:
      case 36303:
      case 36311:
      case 36292:
        return wS;
    }
  }
  function CS(r, e) {
    r.uniform1fv(this.addr, e);
  }
  function RS(r, e) {
    const t = Gs(e, this.size, 2);
    r.uniform2fv(this.addr, t);
  }
  function PS(r, e) {
    const t = Gs(e, this.size, 3);
    r.uniform3fv(this.addr, t);
  }
  function LS(r, e) {
    const t = Gs(e, this.size, 4);
    r.uniform4fv(this.addr, t);
  }
  function DS(r, e) {
    const t = Gs(e, this.size, 4);
    r.uniformMatrix2fv(this.addr, false, t);
  }
  function IS(r, e) {
    const t = Gs(e, this.size, 9);
    r.uniformMatrix3fv(this.addr, false, t);
  }
  function NS(r, e) {
    const t = Gs(e, this.size, 16);
    r.uniformMatrix4fv(this.addr, false, t);
  }
  function US(r, e) {
    r.uniform1iv(this.addr, e);
  }
  function OS(r, e) {
    r.uniform2iv(this.addr, e);
  }
  function FS(r, e) {
    r.uniform3iv(this.addr, e);
  }
  function BS(r, e) {
    r.uniform4iv(this.addr, e);
  }
  function zS(r, e) {
    r.uniform1uiv(this.addr, e);
  }
  function kS(r, e) {
    r.uniform2uiv(this.addr, e);
  }
  function VS(r, e) {
    r.uniform3uiv(this.addr, e);
  }
  function HS(r, e) {
    r.uniform4uiv(this.addr, e);
  }
  function GS(r, e, t) {
    const n = this.cache, i = e.length, s = ml(t, i);
    Ut(n, s) || (r.uniform1iv(this.addr, s), Ot(n, s));
    for (let o = 0; o !== i; ++o) t.setTexture2D(e[o] || Pp, s[o]);
  }
  function WS(r, e, t) {
    const n = this.cache, i = e.length, s = ml(t, i);
    Ut(n, s) || (r.uniform1iv(this.addr, s), Ot(n, s));
    for (let o = 0; o !== i; ++o) t.setTexture3D(e[o] || Dp, s[o]);
  }
  function XS(r, e, t) {
    const n = this.cache, i = e.length, s = ml(t, i);
    Ut(n, s) || (r.uniform1iv(this.addr, s), Ot(n, s));
    for (let o = 0; o !== i; ++o) t.setTextureCube(e[o] || Ip, s[o]);
  }
  function qS(r, e, t) {
    const n = this.cache, i = e.length, s = ml(t, i);
    Ut(n, s) || (r.uniform1iv(this.addr, s), Ot(n, s));
    for (let o = 0; o !== i; ++o) t.setTexture2DArray(e[o] || Lp, s[o]);
  }
  function YS(r) {
    switch (r) {
      case 5126:
        return CS;
      case 35664:
        return RS;
      case 35665:
        return PS;
      case 35666:
        return LS;
      case 35674:
        return DS;
      case 35675:
        return IS;
      case 35676:
        return NS;
      case 5124:
      case 35670:
        return US;
      case 35667:
      case 35671:
        return OS;
      case 35668:
      case 35672:
        return FS;
      case 35669:
      case 35673:
        return BS;
      case 5125:
        return zS;
      case 36294:
        return kS;
      case 36295:
        return VS;
      case 36296:
        return HS;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return GS;
      case 35679:
      case 36299:
      case 36307:
        return WS;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return XS;
      case 36289:
      case 36303:
      case 36311:
      case 36292:
        return qS;
    }
  }
  class $S {
    constructor(e, t, n) {
      this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = AS(t.type);
    }
  }
  class KS {
    constructor(e, t, n) {
      this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = YS(t.type);
    }
  }
  class jS {
    constructor(e) {
      this.id = e, this.seq = [], this.map = {};
    }
    setValue(e, t, n) {
      const i = this.seq;
      for (let s = 0, o = i.length; s !== o; ++s) {
        const a = i[s];
        a.setValue(e, t[a.id], n);
      }
    }
  }
  const nc = /(\w+)(\])?(\[|\.)?/g;
  function ef(r, e) {
    r.seq.push(e), r.map[e.id] = e;
  }
  function ZS(r, e, t) {
    const n = r.name, i = n.length;
    for (nc.lastIndex = 0; ; ) {
      const s = nc.exec(n), o = nc.lastIndex;
      let a = s[1];
      const l = s[2] === "]", c = s[3];
      if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === i) {
        ef(t, c === void 0 ? new $S(a, r, e) : new KS(a, r, e));
        break;
      } else {
        let h = t.map[a];
        h === void 0 && (h = new jS(a), ef(t, h)), t = h;
      }
    }
  }
  class Wa {
    constructor(e, t) {
      this.seq = [], this.map = {};
      const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
      for (let i = 0; i < n; ++i) {
        const s = e.getActiveUniform(t, i), o = e.getUniformLocation(t, s.name);
        ZS(s, o, this);
      }
    }
    setValue(e, t, n, i) {
      const s = this.map[t];
      s !== void 0 && s.setValue(e, n, i);
    }
    setOptional(e, t, n) {
      const i = t[n];
      i !== void 0 && this.setValue(e, n, i);
    }
    static upload(e, t, n, i) {
      for (let s = 0, o = t.length; s !== o; ++s) {
        const a = t[s], l = n[a.id];
        l.needsUpdate !== false && a.setValue(e, l.value, i);
      }
    }
    static seqWithValue(e, t) {
      const n = [];
      for (let i = 0, s = e.length; i !== s; ++i) {
        const o = e[i];
        o.id in t && n.push(o);
      }
      return n;
    }
  }
  function tf(r, e, t) {
    const n = r.createShader(e);
    return r.shaderSource(n, t), r.compileShader(n), n;
  }
  const JS = 37297;
  let QS = 0;
  function eM(r, e) {
    const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
    for (let o = i; o < s; o++) {
      const a = o + 1;
      n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
    }
    return n.join(`
`);
  }
  const nf = new ze();
  function tM(r) {
    $e._getMatrix(nf, $e.workingColorSpace, r);
    const e = `mat3( ${nf.elements.map((t) => t.toFixed(4))} )`;
    switch ($e.getTransfer(r)) {
      case Za:
        return [
          e,
          "LinearTransferOETF"
        ];
      case dt:
        return [
          e,
          "sRGBTransferOETF"
        ];
      default:
        return console.warn("THREE.WebGLProgram: Unsupported color space: ", r), [
          e,
          "LinearTransferOETF"
        ];
    }
  }
  function rf(r, e, t) {
    const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim();
    if (n && i === "") return "";
    const s = /ERROR: 0:(\d+)/.exec(i);
    if (s) {
      const o = parseInt(s[1]);
      return t.toUpperCase() + `

` + i + `

` + eM(r.getShaderSource(e), o);
    } else return i;
  }
  function nM(r, e) {
    const t = tM(e);
    return [
      `vec4 ${r}( vec4 value ) {`,
      `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
      "}"
    ].join(`
`);
  }
  function iM(r, e) {
    let t;
    switch (e) {
      case Dg:
        t = "Linear";
        break;
      case Ig:
        t = "Reinhard";
        break;
      case Ng:
        t = "Cineon";
        break;
      case Ug:
        t = "ACESFilmic";
        break;
      case Fg:
        t = "AgX";
        break;
      case Bg:
        t = "Neutral";
        break;
      case Og:
        t = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
    }
    return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
  }
  const Na = new D();
  function rM() {
    $e.getLuminanceCoefficients(Na);
    const r = Na.x.toFixed(4), e = Na.y.toFixed(4), t = Na.z.toFixed(4);
    return [
      "float luminance( const in vec3 rgb ) {",
      `	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,
      "	return dot( weights, rgb );",
      "}"
    ].join(`
`);
  }
  function sM(r) {
    return [
      r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
      r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
    ].filter(mo).join(`
`);
  }
  function oM(r) {
    const e = [];
    for (const t in r) {
      const n = r[t];
      n !== false && e.push("#define " + t + " " + n);
    }
    return e.join(`
`);
  }
  function aM(r, e) {
    const t = {}, n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
    for (let i = 0; i < n; i++) {
      const s = r.getActiveAttrib(e, i), o = s.name;
      let a = 1;
      s.type === r.FLOAT_MAT2 && (a = 2), s.type === r.FLOAT_MAT3 && (a = 3), s.type === r.FLOAT_MAT4 && (a = 4), t[o] = {
        type: s.type,
        location: r.getAttribLocation(e, o),
        locationSize: a
      };
    }
    return t;
  }
  function mo(r) {
    return r !== "";
  }
  function sf(r, e) {
    const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
    return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }
  function of(r, e) {
    return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
  }
  const lM = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function uu(r) {
    return r.replace(lM, uM);
  }
  const cM = /* @__PURE__ */ new Map();
  function uM(r, e) {
    let t = Ve[e];
    if (t === void 0) {
      const n = cM.get(e);
      if (n !== void 0) t = Ve[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
      else throw new Error("Can not resolve #include <" + e + ">");
    }
    return uu(t);
  }
  const hM = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function af(r) {
    return r.replace(hM, dM);
  }
  function dM(r, e, t, n) {
    let i = "";
    for (let s = parseInt(e); s < parseInt(t); s++) i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
    return i;
  }
  function lf(r) {
    let e = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;
    return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
  }
  function fM(r) {
    let e = "SHADOWMAP_TYPE_BASIC";
    return r.shadowMapType === Gf ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === hg ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === fi && (e = "SHADOWMAP_TYPE_VSM"), e;
  }
  function pM(r) {
    let e = "ENVMAP_TYPE_CUBE";
    if (r.envMap) switch (r.envMapMode) {
      case Ss:
      case Ms:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case hl:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
    return e;
  }
  function mM(r) {
    let e = "ENVMAP_MODE_REFLECTION";
    if (r.envMap) switch (r.envMapMode) {
      case Ms:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
    return e;
  }
  function gM(r) {
    let e = "ENVMAP_BLENDING_NONE";
    if (r.envMap) switch (r.combine) {
      case Wf:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Pg:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Lg:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
    return e;
  }
  function _M(r) {
    const e = r.envMapCubeUVHeight;
    if (e === null) return null;
    const t = Math.log2(e) - 2, n = 1 / e;
    return {
      texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
      texelHeight: n,
      maxMip: t
    };
  }
  function xM(r, e, t, n) {
    const i = r.getContext(), s = t.defines;
    let o = t.vertexShader, a = t.fragmentShader;
    const l = fM(t), c = pM(t), u = mM(t), h = gM(t), d = _M(t), f = sM(t), _ = oM(s), g = i.createProgram();
    let m, p, y = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
    t.isRawShaderMaterial ? (m = [
      "#define SHADER_TYPE " + t.shaderType,
      "#define SHADER_NAME " + t.shaderName,
      _
    ].filter(mo).join(`
`), m.length > 0 && (m += `
`), p = [
      "#define SHADER_TYPE " + t.shaderType,
      "#define SHADER_NAME " + t.shaderName,
      _
    ].filter(mo).join(`
`), p.length > 0 && (p += `
`)) : (m = [
      lf(t),
      "#define SHADER_TYPE " + t.shaderType,
      "#define SHADER_NAME " + t.shaderName,
      _,
      t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
      t.batching ? "#define USE_BATCHING" : "",
      t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
      t.instancing ? "#define USE_INSTANCING" : "",
      t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
      t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
      t.useFog && t.fog ? "#define USE_FOG" : "",
      t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
      t.map ? "#define USE_MAP" : "",
      t.envMap ? "#define USE_ENVMAP" : "",
      t.envMap ? "#define " + u : "",
      t.lightMap ? "#define USE_LIGHTMAP" : "",
      t.aoMap ? "#define USE_AOMAP" : "",
      t.bumpMap ? "#define USE_BUMPMAP" : "",
      t.normalMap ? "#define USE_NORMALMAP" : "",
      t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
      t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
      t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
      t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
      t.anisotropy ? "#define USE_ANISOTROPY" : "",
      t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
      t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
      t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
      t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
      t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
      t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
      t.specularMap ? "#define USE_SPECULARMAP" : "",
      t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
      t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
      t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
      t.metalnessMap ? "#define USE_METALNESSMAP" : "",
      t.alphaMap ? "#define USE_ALPHAMAP" : "",
      t.alphaHash ? "#define USE_ALPHAHASH" : "",
      t.transmission ? "#define USE_TRANSMISSION" : "",
      t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
      t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
      t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
      t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
      t.mapUv ? "#define MAP_UV " + t.mapUv : "",
      t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
      t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
      t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
      t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
      t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
      t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
      t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
      t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
      t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
      t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
      t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
      t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
      t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
      t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
      t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
      t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
      t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
      t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
      t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
      t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
      t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
      t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
      t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "",
      t.vertexColors ? "#define USE_COLOR" : "",
      t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
      t.vertexUv1s ? "#define USE_UV1" : "",
      t.vertexUv2s ? "#define USE_UV2" : "",
      t.vertexUv3s ? "#define USE_UV3" : "",
      t.pointsUvs ? "#define USE_POINTS_UV" : "",
      t.flatShading ? "#define FLAT_SHADED" : "",
      t.skinning ? "#define USE_SKINNING" : "",
      t.morphTargets ? "#define USE_MORPHTARGETS" : "",
      t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "",
      t.morphColors ? "#define USE_MORPHCOLORS" : "",
      t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
      t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
      t.doubleSided ? "#define DOUBLE_SIDED" : "",
      t.flipSided ? "#define FLIP_SIDED" : "",
      t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
      t.shadowMapEnabled ? "#define " + l : "",
      t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
      t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
      t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
      t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
      "uniform mat4 modelMatrix;",
      "uniform mat4 modelViewMatrix;",
      "uniform mat4 projectionMatrix;",
      "uniform mat4 viewMatrix;",
      "uniform mat3 normalMatrix;",
      "uniform vec3 cameraPosition;",
      "uniform bool isOrthographic;",
      "#ifdef USE_INSTANCING",
      "	attribute mat4 instanceMatrix;",
      "#endif",
      "#ifdef USE_INSTANCING_COLOR",
      "	attribute vec3 instanceColor;",
      "#endif",
      "#ifdef USE_INSTANCING_MORPH",
      "	uniform sampler2D morphTexture;",
      "#endif",
      "attribute vec3 position;",
      "attribute vec3 normal;",
      "attribute vec2 uv;",
      "#ifdef USE_UV1",
      "	attribute vec2 uv1;",
      "#endif",
      "#ifdef USE_UV2",
      "	attribute vec2 uv2;",
      "#endif",
      "#ifdef USE_UV3",
      "	attribute vec2 uv3;",
      "#endif",
      "#ifdef USE_TANGENT",
      "	attribute vec4 tangent;",
      "#endif",
      "#if defined( USE_COLOR_ALPHA )",
      "	attribute vec4 color;",
      "#elif defined( USE_COLOR )",
      "	attribute vec3 color;",
      "#endif",
      "#ifdef USE_SKINNING",
      "	attribute vec4 skinIndex;",
      "	attribute vec4 skinWeight;",
      "#endif",
      `
`
    ].filter(mo).join(`
`), p = [
      lf(t),
      "#define SHADER_TYPE " + t.shaderType,
      "#define SHADER_NAME " + t.shaderName,
      _,
      t.useFog && t.fog ? "#define USE_FOG" : "",
      t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
      t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
      t.map ? "#define USE_MAP" : "",
      t.matcap ? "#define USE_MATCAP" : "",
      t.envMap ? "#define USE_ENVMAP" : "",
      t.envMap ? "#define " + c : "",
      t.envMap ? "#define " + u : "",
      t.envMap ? "#define " + h : "",
      d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
      d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
      d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
      t.lightMap ? "#define USE_LIGHTMAP" : "",
      t.aoMap ? "#define USE_AOMAP" : "",
      t.bumpMap ? "#define USE_BUMPMAP" : "",
      t.normalMap ? "#define USE_NORMALMAP" : "",
      t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
      t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
      t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
      t.anisotropy ? "#define USE_ANISOTROPY" : "",
      t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
      t.clearcoat ? "#define USE_CLEARCOAT" : "",
      t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
      t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
      t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
      t.dispersion ? "#define USE_DISPERSION" : "",
      t.iridescence ? "#define USE_IRIDESCENCE" : "",
      t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
      t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
      t.specularMap ? "#define USE_SPECULARMAP" : "",
      t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
      t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
      t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
      t.metalnessMap ? "#define USE_METALNESSMAP" : "",
      t.alphaMap ? "#define USE_ALPHAMAP" : "",
      t.alphaTest ? "#define USE_ALPHATEST" : "",
      t.alphaHash ? "#define USE_ALPHAHASH" : "",
      t.sheen ? "#define USE_SHEEN" : "",
      t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
      t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
      t.transmission ? "#define USE_TRANSMISSION" : "",
      t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
      t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
      t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "",
      t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
      t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
      t.vertexUv1s ? "#define USE_UV1" : "",
      t.vertexUv2s ? "#define USE_UV2" : "",
      t.vertexUv3s ? "#define USE_UV3" : "",
      t.pointsUvs ? "#define USE_POINTS_UV" : "",
      t.gradientMap ? "#define USE_GRADIENTMAP" : "",
      t.flatShading ? "#define FLAT_SHADED" : "",
      t.doubleSided ? "#define DOUBLE_SIDED" : "",
      t.flipSided ? "#define FLIP_SIDED" : "",
      t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
      t.shadowMapEnabled ? "#define " + l : "",
      t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
      t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
      t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
      t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
      t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
      t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
      "uniform mat4 viewMatrix;",
      "uniform vec3 cameraPosition;",
      "uniform bool isOrthographic;",
      t.toneMapping !== $i ? "#define TONE_MAPPING" : "",
      t.toneMapping !== $i ? Ve.tonemapping_pars_fragment : "",
      t.toneMapping !== $i ? iM("toneMapping", t.toneMapping) : "",
      t.dithering ? "#define DITHERING" : "",
      t.opaque ? "#define OPAQUE" : "",
      Ve.colorspace_pars_fragment,
      nM("linearToOutputTexel", t.outputColorSpace),
      rM(),
      t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
      `
`
    ].filter(mo).join(`
`)), o = uu(o), o = sf(o, t), o = of(o, t), a = uu(a), a = sf(a, t), a = of(a, t), o = af(o), a = af(a), t.isRawShaderMaterial !== true && (y = `#version 300 es
`, m = [
      f,
      "#define attribute in",
      "#define varying out",
      "#define texture2D texture"
    ].join(`
`) + `
` + m, p = [
      "#define varying in",
      t.glslVersion === jh ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
      t.glslVersion === jh ? "" : "#define gl_FragColor pc_fragColor",
      "#define gl_FragDepthEXT gl_FragDepth",
      "#define texture2D texture",
      "#define textureCube texture",
      "#define texture2DProj textureProj",
      "#define texture2DLodEXT textureLod",
      "#define texture2DProjLodEXT textureProjLod",
      "#define textureCubeLodEXT textureLod",
      "#define texture2DGradEXT textureGrad",
      "#define texture2DProjGradEXT textureProjGrad",
      "#define textureCubeGradEXT textureGrad"
    ].join(`
`) + `
` + p);
    const v = y + m + o, x = y + p + a, w = tf(i, i.VERTEX_SHADER, v), b = tf(i, i.FRAGMENT_SHADER, x);
    i.attachShader(g, w), i.attachShader(g, b), t.index0AttributeName !== void 0 ? i.bindAttribLocation(g, 0, t.index0AttributeName) : t.morphTargets === true && i.bindAttribLocation(g, 0, "position"), i.linkProgram(g);
    function A(L) {
      if (r.debug.checkShaderErrors) {
        const G = i.getProgramInfoLog(g).trim(), O = i.getShaderInfoLog(w).trim(), V = i.getShaderInfoLog(b).trim();
        let q = true, B = true;
        if (i.getProgramParameter(g, i.LINK_STATUS) === false) if (q = false, typeof r.debug.onShaderError == "function") r.debug.onShaderError(i, g, w, b);
        else {
          const K = rf(i, w, "vertex"), H = rf(i, b, "fragment");
          console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(g, i.VALIDATE_STATUS) + `

Material Name: ` + L.name + `
Material Type: ` + L.type + `

Program Info Log: ` + G + `
` + K + `
` + H);
        }
        else G !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", G) : (O === "" || V === "") && (B = false);
        B && (L.diagnostics = {
          runnable: q,
          programLog: G,
          vertexShader: {
            log: O,
            prefix: m
          },
          fragmentShader: {
            log: V,
            prefix: p
          }
        });
      }
      i.deleteShader(w), i.deleteShader(b), P = new Wa(i, g), S = aM(i, g);
    }
    let P;
    this.getUniforms = function() {
      return P === void 0 && A(this), P;
    };
    let S;
    this.getAttributes = function() {
      return S === void 0 && A(this), S;
    };
    let M = t.rendererExtensionParallelShaderCompile === false;
    return this.isReady = function() {
      return M === false && (M = i.getProgramParameter(g, JS)), M;
    }, this.destroy = function() {
      n.releaseStatesOfProgram(this), i.deleteProgram(g), this.program = void 0;
    }, this.type = t.shaderType, this.name = t.shaderName, this.id = QS++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = w, this.fragmentShader = b, this;
  }
  let vM = 0;
  class yM {
    constructor() {
      this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
    }
    update(e) {
      const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
      return o.has(i) === false && (o.add(i), i.usedTimes++), o.has(s) === false && (o.add(s), s.usedTimes++), this;
    }
    remove(e) {
      const t = this.materialCache.get(e);
      for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
      return this.materialCache.delete(e), this;
    }
    getVertexShaderID(e) {
      return this._getShaderStage(e.vertexShader).id;
    }
    getFragmentShaderID(e) {
      return this._getShaderStage(e.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(e) {
      const t = this.materialCache;
      let n = t.get(e);
      return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
    }
    _getShaderStage(e) {
      const t = this.shaderCache;
      let n = t.get(e);
      return n === void 0 && (n = new SM(e), t.set(e, n)), n;
    }
  }
  class SM {
    constructor(e) {
      this.id = vM++, this.code = e, this.usedTimes = 0;
    }
  }
  function MM(r, e, t, n, i, s, o) {
    const a = new Gu(), l = new yM(), c = /* @__PURE__ */ new Set(), u = [], h = i.logarithmicDepthBuffer, d = i.vertexTextures;
    let f = i.precision;
    const _ = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite"
    };
    function g(S) {
      return c.add(S), S === 0 ? "uv" : `uv${S}`;
    }
    function m(S, M, L, G, O) {
      const V = G.fog, q = O.geometry, B = S.isMeshStandardMaterial ? G.environment : null, K = (S.isMeshStandardMaterial ? t : e).get(S.envMap || B), H = K && K.mapping === hl ? K.image.height : null, oe = _[S.type];
      S.precision !== null && (f = i.getMaxPrecision(S.precision), f !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", f, "instead."));
      const ce = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color, ge = ce !== void 0 ? ce.length : 0;
      let Le = 0;
      q.morphAttributes.position !== void 0 && (Le = 1), q.morphAttributes.normal !== void 0 && (Le = 2), q.morphAttributes.color !== void 0 && (Le = 3);
      let Ke, X, ie, Ee;
      if (oe) {
        const at = Yn[oe];
        Ke = at.vertexShader, X = at.fragmentShader;
      } else Ke = S.vertexShader, X = S.fragmentShader, l.update(S), ie = l.getVertexShaderID(S), Ee = l.getFragmentShaderID(S);
      const ae = r.getRenderTarget(), Ae = r.state.buffers.depth.getReversed(), je = O.isInstancedMesh === true, we = O.isBatchedMesh === true, nt = !!S.map, Q = !!S.matcap, J = !!K, R = !!S.aoMap, be = !!S.lightMap, te = !!S.bumpMap, xe = !!S.normalMap, se = !!S.displacementMap, Ie = !!S.emissiveMap, fe = !!S.metalnessMap, C = !!S.roughnessMap, E = S.anisotropy > 0, F = S.clearcoat > 0, Y = S.dispersion > 0, Z = S.iridescence > 0, $ = S.sheen > 0, Te = S.transmission > 0, ue = E && !!S.anisotropyMap, _e = F && !!S.clearcoatMap, We = F && !!S.clearcoatNormalMap, re = F && !!S.clearcoatRoughnessMap, ye = Z && !!S.iridescenceMap, De = Z && !!S.iridescenceThicknessMap, Ne = $ && !!S.sheenColorMap, Se = $ && !!S.sheenRoughnessMap, Ye = !!S.specularMap, ke = !!S.specularColorMap, mt = !!S.specularIntensityMap, I = Te && !!S.transmissionMap, he = Te && !!S.thicknessMap, W = !!S.gradientMap, j = !!S.alphaMap, me = S.alphaTest > 0, pe = !!S.alphaHash, Be = !!S.extensions;
      let Et = $i;
      S.toneMapped && (ae === null || ae.isXRRenderTarget === true) && (Et = r.toneMapping);
      const Gt = {
        shaderID: oe,
        shaderType: S.type,
        shaderName: S.name,
        vertexShader: Ke,
        fragmentShader: X,
        defines: S.defines,
        customVertexShaderID: ie,
        customFragmentShaderID: Ee,
        isRawShaderMaterial: S.isRawShaderMaterial === true,
        glslVersion: S.glslVersion,
        precision: f,
        batching: we,
        batchingColor: we && O._colorsTexture !== null,
        instancing: je,
        instancingColor: je && O.instanceColor !== null,
        instancingMorph: je && O.morphTexture !== null,
        supportsVertexTextures: d,
        outputColorSpace: ae === null ? r.outputColorSpace : ae.isXRRenderTarget === true ? ae.texture.colorSpace : sn,
        alphaToCoverage: !!S.alphaToCoverage,
        map: nt,
        matcap: Q,
        envMap: J,
        envMapMode: J && K.mapping,
        envMapCubeUVHeight: H,
        aoMap: R,
        lightMap: be,
        bumpMap: te,
        normalMap: xe,
        displacementMap: d && se,
        emissiveMap: Ie,
        normalMapObjectSpace: xe && S.normalMapType === Wg,
        normalMapTangentSpace: xe && S.normalMapType === ip,
        metalnessMap: fe,
        roughnessMap: C,
        anisotropy: E,
        anisotropyMap: ue,
        clearcoat: F,
        clearcoatMap: _e,
        clearcoatNormalMap: We,
        clearcoatRoughnessMap: re,
        dispersion: Y,
        iridescence: Z,
        iridescenceMap: ye,
        iridescenceThicknessMap: De,
        sheen: $,
        sheenColorMap: Ne,
        sheenRoughnessMap: Se,
        specularMap: Ye,
        specularColorMap: ke,
        specularIntensityMap: mt,
        transmission: Te,
        transmissionMap: I,
        thicknessMap: he,
        gradientMap: W,
        opaque: S.transparent === false && S.blending === hs && S.alphaToCoverage === false,
        alphaMap: j,
        alphaTest: me,
        alphaHash: pe,
        combine: S.combine,
        mapUv: nt && g(S.map.channel),
        aoMapUv: R && g(S.aoMap.channel),
        lightMapUv: be && g(S.lightMap.channel),
        bumpMapUv: te && g(S.bumpMap.channel),
        normalMapUv: xe && g(S.normalMap.channel),
        displacementMapUv: se && g(S.displacementMap.channel),
        emissiveMapUv: Ie && g(S.emissiveMap.channel),
        metalnessMapUv: fe && g(S.metalnessMap.channel),
        roughnessMapUv: C && g(S.roughnessMap.channel),
        anisotropyMapUv: ue && g(S.anisotropyMap.channel),
        clearcoatMapUv: _e && g(S.clearcoatMap.channel),
        clearcoatNormalMapUv: We && g(S.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: re && g(S.clearcoatRoughnessMap.channel),
        iridescenceMapUv: ye && g(S.iridescenceMap.channel),
        iridescenceThicknessMapUv: De && g(S.iridescenceThicknessMap.channel),
        sheenColorMapUv: Ne && g(S.sheenColorMap.channel),
        sheenRoughnessMapUv: Se && g(S.sheenRoughnessMap.channel),
        specularMapUv: Ye && g(S.specularMap.channel),
        specularColorMapUv: ke && g(S.specularColorMap.channel),
        specularIntensityMapUv: mt && g(S.specularIntensityMap.channel),
        transmissionMapUv: I && g(S.transmissionMap.channel),
        thicknessMapUv: he && g(S.thicknessMap.channel),
        alphaMapUv: j && g(S.alphaMap.channel),
        vertexTangents: !!q.attributes.tangent && (xe || E),
        vertexColors: S.vertexColors,
        vertexAlphas: S.vertexColors === true && !!q.attributes.color && q.attributes.color.itemSize === 4,
        pointsUvs: O.isPoints === true && !!q.attributes.uv && (nt || j),
        fog: !!V,
        useFog: S.fog === true,
        fogExp2: !!V && V.isFogExp2,
        flatShading: S.flatShading === true,
        sizeAttenuation: S.sizeAttenuation === true,
        logarithmicDepthBuffer: h,
        reverseDepthBuffer: Ae,
        skinning: O.isSkinnedMesh === true,
        morphTargets: q.morphAttributes.position !== void 0,
        morphNormals: q.morphAttributes.normal !== void 0,
        morphColors: q.morphAttributes.color !== void 0,
        morphTargetsCount: ge,
        morphTextureStride: Le,
        numDirLights: M.directional.length,
        numPointLights: M.point.length,
        numSpotLights: M.spot.length,
        numSpotLightMaps: M.spotLightMap.length,
        numRectAreaLights: M.rectArea.length,
        numHemiLights: M.hemi.length,
        numDirLightShadows: M.directionalShadowMap.length,
        numPointLightShadows: M.pointShadowMap.length,
        numSpotLightShadows: M.spotShadowMap.length,
        numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
        numLightProbes: M.numLightProbes,
        numClippingPlanes: o.numPlanes,
        numClipIntersection: o.numIntersection,
        dithering: S.dithering,
        shadowMapEnabled: r.shadowMap.enabled && L.length > 0,
        shadowMapType: r.shadowMap.type,
        toneMapping: Et,
        decodeVideoTexture: nt && S.map.isVideoTexture === true && $e.getTransfer(S.map.colorSpace) === dt,
        decodeVideoTextureEmissive: Ie && S.emissiveMap.isVideoTexture === true && $e.getTransfer(S.emissiveMap.colorSpace) === dt,
        premultipliedAlpha: S.premultipliedAlpha,
        doubleSided: S.side === $n,
        flipSided: S.side === ln,
        useDepthPacking: S.depthPacking >= 0,
        depthPacking: S.depthPacking || 0,
        index0AttributeName: S.index0AttributeName,
        extensionClipCullDistance: Be && S.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"),
        extensionMultiDraw: (Be && S.extensions.multiDraw === true || we) && n.has("WEBGL_multi_draw"),
        rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
        customProgramCacheKey: S.customProgramCacheKey()
      };
      return Gt.vertexUv1s = c.has(1), Gt.vertexUv2s = c.has(2), Gt.vertexUv3s = c.has(3), c.clear(), Gt;
    }
    function p(S) {
      const M = [];
      if (S.shaderID ? M.push(S.shaderID) : (M.push(S.customVertexShaderID), M.push(S.customFragmentShaderID)), S.defines !== void 0) for (const L in S.defines) M.push(L), M.push(S.defines[L]);
      return S.isRawShaderMaterial === false && (y(M, S), v(M, S), M.push(r.outputColorSpace)), M.push(S.customProgramCacheKey), M.join();
    }
    function y(S, M) {
      S.push(M.precision), S.push(M.outputColorSpace), S.push(M.envMapMode), S.push(M.envMapCubeUVHeight), S.push(M.mapUv), S.push(M.alphaMapUv), S.push(M.lightMapUv), S.push(M.aoMapUv), S.push(M.bumpMapUv), S.push(M.normalMapUv), S.push(M.displacementMapUv), S.push(M.emissiveMapUv), S.push(M.metalnessMapUv), S.push(M.roughnessMapUv), S.push(M.anisotropyMapUv), S.push(M.clearcoatMapUv), S.push(M.clearcoatNormalMapUv), S.push(M.clearcoatRoughnessMapUv), S.push(M.iridescenceMapUv), S.push(M.iridescenceThicknessMapUv), S.push(M.sheenColorMapUv), S.push(M.sheenRoughnessMapUv), S.push(M.specularMapUv), S.push(M.specularColorMapUv), S.push(M.specularIntensityMapUv), S.push(M.transmissionMapUv), S.push(M.thicknessMapUv), S.push(M.combine), S.push(M.fogExp2), S.push(M.sizeAttenuation), S.push(M.morphTargetsCount), S.push(M.morphAttributeCount), S.push(M.numDirLights), S.push(M.numPointLights), S.push(M.numSpotLights), S.push(M.numSpotLightMaps), S.push(M.numHemiLights), S.push(M.numRectAreaLights), S.push(M.numDirLightShadows), S.push(M.numPointLightShadows), S.push(M.numSpotLightShadows), S.push(M.numSpotLightShadowsWithMaps), S.push(M.numLightProbes), S.push(M.shadowMapType), S.push(M.toneMapping), S.push(M.numClippingPlanes), S.push(M.numClipIntersection), S.push(M.depthPacking);
    }
    function v(S, M) {
      a.disableAll(), M.supportsVertexTextures && a.enable(0), M.instancing && a.enable(1), M.instancingColor && a.enable(2), M.instancingMorph && a.enable(3), M.matcap && a.enable(4), M.envMap && a.enable(5), M.normalMapObjectSpace && a.enable(6), M.normalMapTangentSpace && a.enable(7), M.clearcoat && a.enable(8), M.iridescence && a.enable(9), M.alphaTest && a.enable(10), M.vertexColors && a.enable(11), M.vertexAlphas && a.enable(12), M.vertexUv1s && a.enable(13), M.vertexUv2s && a.enable(14), M.vertexUv3s && a.enable(15), M.vertexTangents && a.enable(16), M.anisotropy && a.enable(17), M.alphaHash && a.enable(18), M.batching && a.enable(19), M.dispersion && a.enable(20), M.batchingColor && a.enable(21), S.push(a.mask), a.disableAll(), M.fog && a.enable(0), M.useFog && a.enable(1), M.flatShading && a.enable(2), M.logarithmicDepthBuffer && a.enable(3), M.reverseDepthBuffer && a.enable(4), M.skinning && a.enable(5), M.morphTargets && a.enable(6), M.morphNormals && a.enable(7), M.morphColors && a.enable(8), M.premultipliedAlpha && a.enable(9), M.shadowMapEnabled && a.enable(10), M.doubleSided && a.enable(11), M.flipSided && a.enable(12), M.useDepthPacking && a.enable(13), M.dithering && a.enable(14), M.transmission && a.enable(15), M.sheen && a.enable(16), M.opaque && a.enable(17), M.pointsUvs && a.enable(18), M.decodeVideoTexture && a.enable(19), M.decodeVideoTextureEmissive && a.enable(20), M.alphaToCoverage && a.enable(21), S.push(a.mask);
    }
    function x(S) {
      const M = _[S.type];
      let L;
      if (M) {
        const G = Yn[M];
        L = Qa.clone(G.uniforms);
      } else L = S.uniforms;
      return L;
    }
    function w(S, M) {
      let L;
      for (let G = 0, O = u.length; G < O; G++) {
        const V = u[G];
        if (V.cacheKey === M) {
          L = V, ++L.usedTimes;
          break;
        }
      }
      return L === void 0 && (L = new xM(r, M, S, s), u.push(L)), L;
    }
    function b(S) {
      if (--S.usedTimes === 0) {
        const M = u.indexOf(S);
        u[M] = u[u.length - 1], u.pop(), S.destroy();
      }
    }
    function A(S) {
      l.remove(S);
    }
    function P() {
      l.dispose();
    }
    return {
      getParameters: m,
      getProgramCacheKey: p,
      getUniforms: x,
      acquireProgram: w,
      releaseProgram: b,
      releaseShaderCache: A,
      programs: u,
      dispose: P
    };
  }
  function EM() {
    let r = /* @__PURE__ */ new WeakMap();
    function e(o) {
      return r.has(o);
    }
    function t(o) {
      let a = r.get(o);
      return a === void 0 && (a = {}, r.set(o, a)), a;
    }
    function n(o) {
      r.delete(o);
    }
    function i(o, a, l) {
      r.get(o)[a] = l;
    }
    function s() {
      r = /* @__PURE__ */ new WeakMap();
    }
    return {
      has: e,
      get: t,
      remove: n,
      update: i,
      dispose: s
    };
  }
  function TM(r, e) {
    return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
  }
  function cf(r, e) {
    return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
  }
  function uf() {
    const r = [];
    let e = 0;
    const t = [], n = [], i = [];
    function s() {
      e = 0, t.length = 0, n.length = 0, i.length = 0;
    }
    function o(h, d, f, _, g, m) {
      let p = r[e];
      return p === void 0 ? (p = {
        id: h.id,
        object: h,
        geometry: d,
        material: f,
        groupOrder: _,
        renderOrder: h.renderOrder,
        z: g,
        group: m
      }, r[e] = p) : (p.id = h.id, p.object = h, p.geometry = d, p.material = f, p.groupOrder = _, p.renderOrder = h.renderOrder, p.z = g, p.group = m), e++, p;
    }
    function a(h, d, f, _, g, m) {
      const p = o(h, d, f, _, g, m);
      f.transmission > 0 ? n.push(p) : f.transparent === true ? i.push(p) : t.push(p);
    }
    function l(h, d, f, _, g, m) {
      const p = o(h, d, f, _, g, m);
      f.transmission > 0 ? n.unshift(p) : f.transparent === true ? i.unshift(p) : t.unshift(p);
    }
    function c(h, d) {
      t.length > 1 && t.sort(h || TM), n.length > 1 && n.sort(d || cf), i.length > 1 && i.sort(d || cf);
    }
    function u() {
      for (let h = e, d = r.length; h < d; h++) {
        const f = r[h];
        if (f.id === null) break;
        f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
      }
    }
    return {
      opaque: t,
      transmissive: n,
      transparent: i,
      init: s,
      push: a,
      unshift: l,
      finish: u,
      sort: c
    };
  }
  function bM() {
    let r = /* @__PURE__ */ new WeakMap();
    function e(n, i) {
      const s = r.get(n);
      let o;
      return s === void 0 ? (o = new uf(), r.set(n, [
        o
      ])) : i >= s.length ? (o = new uf(), s.push(o)) : o = s[i], o;
    }
    function t() {
      r = /* @__PURE__ */ new WeakMap();
    }
    return {
      get: e,
      dispose: t
    };
  }
  function wM() {
    const r = {};
    return {
      get: function(e) {
        if (r[e.id] !== void 0) return r[e.id];
        let t;
        switch (e.type) {
          case "DirectionalLight":
            t = {
              direction: new D(),
              color: new Ce()
            };
            break;
          case "SpotLight":
            t = {
              position: new D(),
              direction: new D(),
              color: new Ce(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0
            };
            break;
          case "PointLight":
            t = {
              position: new D(),
              color: new Ce(),
              distance: 0,
              decay: 0
            };
            break;
          case "HemisphereLight":
            t = {
              direction: new D(),
              skyColor: new Ce(),
              groundColor: new Ce()
            };
            break;
          case "RectAreaLight":
            t = {
              color: new Ce(),
              position: new D(),
              halfWidth: new D(),
              halfHeight: new D()
            };
            break;
        }
        return r[e.id] = t, t;
      }
    };
  }
  function AM() {
    const r = {};
    return {
      get: function(e) {
        if (r[e.id] !== void 0) return r[e.id];
        let t;
        switch (e.type) {
          case "DirectionalLight":
            t = {
              shadowIntensity: 1,
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new ee()
            };
            break;
          case "SpotLight":
            t = {
              shadowIntensity: 1,
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new ee()
            };
            break;
          case "PointLight":
            t = {
              shadowIntensity: 1,
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new ee(),
              shadowCameraNear: 1,
              shadowCameraFar: 1e3
            };
            break;
        }
        return r[e.id] = t, t;
      }
    };
  }
  let CM = 0;
  function RM(r, e) {
    return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
  }
  function PM(r) {
    const e = new wM(), t = AM(), n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1
      },
      ambient: [
        0,
        0,
        0
      ],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0
    };
    for (let c = 0; c < 9; c++) n.probe.push(new D());
    const i = new D(), s = new Fe(), o = new Fe();
    function a(c) {
      let u = 0, h = 0, d = 0;
      for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
      let f = 0, _ = 0, g = 0, m = 0, p = 0, y = 0, v = 0, x = 0, w = 0, b = 0, A = 0;
      c.sort(RM);
      for (let S = 0, M = c.length; S < M; S++) {
        const L = c[S], G = L.color, O = L.intensity, V = L.distance, q = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
        if (L.isAmbientLight) u += G.r * O, h += G.g * O, d += G.b * O;
        else if (L.isLightProbe) {
          for (let B = 0; B < 9; B++) n.probe[B].addScaledVector(L.sh.coefficients[B], O);
          A++;
        } else if (L.isDirectionalLight) {
          const B = e.get(L);
          if (B.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow) {
            const K = L.shadow, H = t.get(L);
            H.shadowIntensity = K.intensity, H.shadowBias = K.bias, H.shadowNormalBias = K.normalBias, H.shadowRadius = K.radius, H.shadowMapSize = K.mapSize, n.directionalShadow[f] = H, n.directionalShadowMap[f] = q, n.directionalShadowMatrix[f] = L.shadow.matrix, y++;
          }
          n.directional[f] = B, f++;
        } else if (L.isSpotLight) {
          const B = e.get(L);
          B.position.setFromMatrixPosition(L.matrixWorld), B.color.copy(G).multiplyScalar(O), B.distance = V, B.coneCos = Math.cos(L.angle), B.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), B.decay = L.decay, n.spot[g] = B;
          const K = L.shadow;
          if (L.map && (n.spotLightMap[w] = L.map, w++, K.updateMatrices(L), L.castShadow && b++), n.spotLightMatrix[g] = K.matrix, L.castShadow) {
            const H = t.get(L);
            H.shadowIntensity = K.intensity, H.shadowBias = K.bias, H.shadowNormalBias = K.normalBias, H.shadowRadius = K.radius, H.shadowMapSize = K.mapSize, n.spotShadow[g] = H, n.spotShadowMap[g] = q, x++;
          }
          g++;
        } else if (L.isRectAreaLight) {
          const B = e.get(L);
          B.color.copy(G).multiplyScalar(O), B.halfWidth.set(L.width * 0.5, 0, 0), B.halfHeight.set(0, L.height * 0.5, 0), n.rectArea[m] = B, m++;
        } else if (L.isPointLight) {
          const B = e.get(L);
          if (B.color.copy(L.color).multiplyScalar(L.intensity), B.distance = L.distance, B.decay = L.decay, L.castShadow) {
            const K = L.shadow, H = t.get(L);
            H.shadowIntensity = K.intensity, H.shadowBias = K.bias, H.shadowNormalBias = K.normalBias, H.shadowRadius = K.radius, H.shadowMapSize = K.mapSize, H.shadowCameraNear = K.camera.near, H.shadowCameraFar = K.camera.far, n.pointShadow[_] = H, n.pointShadowMap[_] = q, n.pointShadowMatrix[_] = L.shadow.matrix, v++;
          }
          n.point[_] = B, _++;
        } else if (L.isHemisphereLight) {
          const B = e.get(L);
          B.skyColor.copy(L.color).multiplyScalar(O), B.groundColor.copy(L.groundColor).multiplyScalar(O), n.hemi[p] = B, p++;
        }
      }
      m > 0 && (r.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = le.LTC_FLOAT_1, n.rectAreaLTC2 = le.LTC_FLOAT_2) : (n.rectAreaLTC1 = le.LTC_HALF_1, n.rectAreaLTC2 = le.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = h, n.ambient[2] = d;
      const P = n.hash;
      (P.directionalLength !== f || P.pointLength !== _ || P.spotLength !== g || P.rectAreaLength !== m || P.hemiLength !== p || P.numDirectionalShadows !== y || P.numPointShadows !== v || P.numSpotShadows !== x || P.numSpotMaps !== w || P.numLightProbes !== A) && (n.directional.length = f, n.spot.length = g, n.rectArea.length = m, n.point.length = _, n.hemi.length = p, n.directionalShadow.length = y, n.directionalShadowMap.length = y, n.pointShadow.length = v, n.pointShadowMap.length = v, n.spotShadow.length = x, n.spotShadowMap.length = x, n.directionalShadowMatrix.length = y, n.pointShadowMatrix.length = v, n.spotLightMatrix.length = x + w - b, n.spotLightMap.length = w, n.numSpotLightShadowsWithMaps = b, n.numLightProbes = A, P.directionalLength = f, P.pointLength = _, P.spotLength = g, P.rectAreaLength = m, P.hemiLength = p, P.numDirectionalShadows = y, P.numPointShadows = v, P.numSpotShadows = x, P.numSpotMaps = w, P.numLightProbes = A, n.version = CM++);
    }
    function l(c, u) {
      let h = 0, d = 0, f = 0, _ = 0, g = 0;
      const m = u.matrixWorldInverse;
      for (let p = 0, y = c.length; p < y; p++) {
        const v = c[p];
        if (v.isDirectionalLight) {
          const x = n.directional[h];
          x.direction.setFromMatrixPosition(v.matrixWorld), i.setFromMatrixPosition(v.target.matrixWorld), x.direction.sub(i), x.direction.transformDirection(m), h++;
        } else if (v.isSpotLight) {
          const x = n.spot[f];
          x.position.setFromMatrixPosition(v.matrixWorld), x.position.applyMatrix4(m), x.direction.setFromMatrixPosition(v.matrixWorld), i.setFromMatrixPosition(v.target.matrixWorld), x.direction.sub(i), x.direction.transformDirection(m), f++;
        } else if (v.isRectAreaLight) {
          const x = n.rectArea[_];
          x.position.setFromMatrixPosition(v.matrixWorld), x.position.applyMatrix4(m), o.identity(), s.copy(v.matrixWorld), s.premultiply(m), o.extractRotation(s), x.halfWidth.set(v.width * 0.5, 0, 0), x.halfHeight.set(0, v.height * 0.5, 0), x.halfWidth.applyMatrix4(o), x.halfHeight.applyMatrix4(o), _++;
        } else if (v.isPointLight) {
          const x = n.point[d];
          x.position.setFromMatrixPosition(v.matrixWorld), x.position.applyMatrix4(m), d++;
        } else if (v.isHemisphereLight) {
          const x = n.hemi[g];
          x.direction.setFromMatrixPosition(v.matrixWorld), x.direction.transformDirection(m), g++;
        }
      }
    }
    return {
      setup: a,
      setupView: l,
      state: n
    };
  }
  function hf(r) {
    const e = new PM(r), t = [], n = [];
    function i(u) {
      c.camera = u, t.length = 0, n.length = 0;
    }
    function s(u) {
      t.push(u);
    }
    function o(u) {
      n.push(u);
    }
    function a() {
      e.setup(t);
    }
    function l(u) {
      e.setupView(t, u);
    }
    const c = {
      lightsArray: t,
      shadowsArray: n,
      camera: null,
      lights: e,
      transmissionRenderTarget: {}
    };
    return {
      init: i,
      state: c,
      setupLights: a,
      setupLightsView: l,
      pushLight: s,
      pushShadow: o
    };
  }
  function LM(r) {
    let e = /* @__PURE__ */ new WeakMap();
    function t(i, s = 0) {
      const o = e.get(i);
      let a;
      return o === void 0 ? (a = new hf(r), e.set(i, [
        a
      ])) : s >= o.length ? (a = new hf(r), o.push(a)) : a = o[s], a;
    }
    function n() {
      e = /* @__PURE__ */ new WeakMap();
    }
    return {
      get: t,
      dispose: n
    };
  }
  const DM = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, IM = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
  function NM(r, e, t) {
    let n = new qu();
    const i = new ee(), s = new ee(), o = new it(), a = new D0({
      depthPacking: Gg
    }), l = new I0(), c = {}, u = t.maxTextureSize, h = {
      [Ai]: ln,
      [ln]: Ai,
      [$n]: $n
    }, d = new $t({
      defines: {
        VSM_SAMPLES: 8
      },
      uniforms: {
        shadow_pass: {
          value: null
        },
        resolution: {
          value: new ee()
        },
        radius: {
          value: 4
        }
      },
      vertexShader: DM,
      fragmentShader: IM
    }), f = d.clone();
    f.defines.HORIZONTAL_PASS = 1;
    const _ = new pn();
    _.setAttribute("position", new rn(new Float32Array([
      -1,
      -1,
      0.5,
      3,
      -1,
      0.5,
      -1,
      3,
      0.5
    ]), 3));
    const g = new Ct(_, d), m = this;
    this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Gf;
    let p = this.type;
    this.render = function(b, A, P) {
      if (m.enabled === false || m.autoUpdate === false && m.needsUpdate === false || b.length === 0) return;
      const S = r.getRenderTarget(), M = r.getActiveCubeFace(), L = r.getActiveMipmapLevel(), G = r.state;
      G.setBlending(Ti), G.buffers.color.setClear(1, 1, 1, 1), G.buffers.depth.setTest(true), G.setScissorTest(false);
      const O = p !== fi && this.type === fi, V = p === fi && this.type !== fi;
      for (let q = 0, B = b.length; q < B; q++) {
        const K = b[q], H = K.shadow;
        if (H === void 0) {
          console.warn("THREE.WebGLShadowMap:", K, "has no shadow.");
          continue;
        }
        if (H.autoUpdate === false && H.needsUpdate === false) continue;
        i.copy(H.mapSize);
        const oe = H.getFrameExtents();
        if (i.multiply(oe), s.copy(H.mapSize), (i.x > u || i.y > u) && (i.x > u && (s.x = Math.floor(u / oe.x), i.x = s.x * oe.x, H.mapSize.x = s.x), i.y > u && (s.y = Math.floor(u / oe.y), i.y = s.y * oe.y, H.mapSize.y = s.y)), H.map === null || O === true || V === true) {
          const ge = this.type !== fi ? {
            minFilter: nn,
            magFilter: nn
          } : {};
          H.map !== null && H.map.dispose(), H.map = new Wn(i.x, i.y, ge), H.map.texture.name = K.name + ".shadowMap", H.camera.updateProjectionMatrix();
        }
        r.setRenderTarget(H.map), r.clear();
        const ce = H.getViewportCount();
        for (let ge = 0; ge < ce; ge++) {
          const Le = H.getViewport(ge);
          o.set(s.x * Le.x, s.y * Le.y, s.x * Le.z, s.y * Le.w), G.viewport(o), H.updateMatrices(K, ge), n = H.getFrustum(), x(A, P, H.camera, K, this.type);
        }
        H.isPointLightShadow !== true && this.type === fi && y(H, P), H.needsUpdate = false;
      }
      p = this.type, m.needsUpdate = false, r.setRenderTarget(S, M, L);
    };
    function y(b, A) {
      const P = e.update(g);
      d.defines.VSM_SAMPLES !== b.blurSamples && (d.defines.VSM_SAMPLES = b.blurSamples, f.defines.VSM_SAMPLES = b.blurSamples, d.needsUpdate = true, f.needsUpdate = true), b.mapPass === null && (b.mapPass = new Wn(i.x, i.y)), d.uniforms.shadow_pass.value = b.map.texture, d.uniforms.resolution.value = b.mapSize, d.uniforms.radius.value = b.radius, r.setRenderTarget(b.mapPass), r.clear(), r.renderBufferDirect(A, null, P, d, g, null), f.uniforms.shadow_pass.value = b.mapPass.texture, f.uniforms.resolution.value = b.mapSize, f.uniforms.radius.value = b.radius, r.setRenderTarget(b.map), r.clear(), r.renderBufferDirect(A, null, P, f, g, null);
    }
    function v(b, A, P, S) {
      let M = null;
      const L = P.isPointLight === true ? b.customDistanceMaterial : b.customDepthMaterial;
      if (L !== void 0) M = L;
      else if (M = P.isPointLight === true ? l : a, r.localClippingEnabled && A.clipShadows === true && Array.isArray(A.clippingPlanes) && A.clippingPlanes.length !== 0 || A.displacementMap && A.displacementScale !== 0 || A.alphaMap && A.alphaTest > 0 || A.map && A.alphaTest > 0) {
        const G = M.uuid, O = A.uuid;
        let V = c[G];
        V === void 0 && (V = {}, c[G] = V);
        let q = V[O];
        q === void 0 && (q = M.clone(), V[O] = q, A.addEventListener("dispose", w)), M = q;
      }
      if (M.visible = A.visible, M.wireframe = A.wireframe, S === fi ? M.side = A.shadowSide !== null ? A.shadowSide : A.side : M.side = A.shadowSide !== null ? A.shadowSide : h[A.side], M.alphaMap = A.alphaMap, M.alphaTest = A.alphaTest, M.map = A.map, M.clipShadows = A.clipShadows, M.clippingPlanes = A.clippingPlanes, M.clipIntersection = A.clipIntersection, M.displacementMap = A.displacementMap, M.displacementScale = A.displacementScale, M.displacementBias = A.displacementBias, M.wireframeLinewidth = A.wireframeLinewidth, M.linewidth = A.linewidth, P.isPointLight === true && M.isMeshDistanceMaterial === true) {
        const G = r.properties.get(M);
        G.light = P;
      }
      return M;
    }
    function x(b, A, P, S, M) {
      if (b.visible === false) return;
      if (b.layers.test(A.layers) && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && M === fi) && (!b.frustumCulled || n.intersectsObject(b))) {
        b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse, b.matrixWorld);
        const O = e.update(b), V = b.material;
        if (Array.isArray(V)) {
          const q = O.groups;
          for (let B = 0, K = q.length; B < K; B++) {
            const H = q[B], oe = V[H.materialIndex];
            if (oe && oe.visible) {
              const ce = v(b, oe, S, M);
              b.onBeforeShadow(r, b, A, P, O, ce, H), r.renderBufferDirect(P, null, O, ce, b, H), b.onAfterShadow(r, b, A, P, O, ce, H);
            }
          }
        } else if (V.visible) {
          const q = v(b, V, S, M);
          b.onBeforeShadow(r, b, A, P, O, q, null), r.renderBufferDirect(P, null, O, q, b, null), b.onAfterShadow(r, b, A, P, O, q, null);
        }
      }
      const G = b.children;
      for (let O = 0, V = G.length; O < V; O++) x(G[O], A, P, S, M);
    }
    function w(b) {
      b.target.removeEventListener("dispose", w);
      for (const P in c) {
        const S = c[P], M = b.target.uuid;
        M in S && (S[M].dispose(), delete S[M]);
      }
    }
  }
  const UM = {
    [yc]: Sc,
    [Mc]: bc,
    [Ec]: wc,
    [ys]: Tc,
    [Sc]: yc,
    [bc]: Mc,
    [wc]: Ec,
    [Tc]: ys
  };
  function OM(r, e) {
    function t() {
      let I = false;
      const he = new it();
      let W = null;
      const j = new it(0, 0, 0, 0);
      return {
        setMask: function(me) {
          W !== me && !I && (r.colorMask(me, me, me, me), W = me);
        },
        setLocked: function(me) {
          I = me;
        },
        setClear: function(me, pe, Be, Et, Gt) {
          Gt === true && (me *= Et, pe *= Et, Be *= Et), he.set(me, pe, Be, Et), j.equals(he) === false && (r.clearColor(me, pe, Be, Et), j.copy(he));
        },
        reset: function() {
          I = false, W = null, j.set(-1, 0, 0, 0);
        }
      };
    }
    function n() {
      let I = false, he = false, W = null, j = null, me = null;
      return {
        setReversed: function(pe) {
          if (he !== pe) {
            const Be = e.get("EXT_clip_control");
            he ? Be.clipControlEXT(Be.LOWER_LEFT_EXT, Be.ZERO_TO_ONE_EXT) : Be.clipControlEXT(Be.LOWER_LEFT_EXT, Be.NEGATIVE_ONE_TO_ONE_EXT);
            const Et = me;
            me = null, this.setClear(Et);
          }
          he = pe;
        },
        getReversed: function() {
          return he;
        },
        setTest: function(pe) {
          pe ? ae(r.DEPTH_TEST) : Ae(r.DEPTH_TEST);
        },
        setMask: function(pe) {
          W !== pe && !I && (r.depthMask(pe), W = pe);
        },
        setFunc: function(pe) {
          if (he && (pe = UM[pe]), j !== pe) {
            switch (pe) {
              case yc:
                r.depthFunc(r.NEVER);
                break;
              case Sc:
                r.depthFunc(r.ALWAYS);
                break;
              case Mc:
                r.depthFunc(r.LESS);
                break;
              case ys:
                r.depthFunc(r.LEQUAL);
                break;
              case Ec:
                r.depthFunc(r.EQUAL);
                break;
              case Tc:
                r.depthFunc(r.GEQUAL);
                break;
              case bc:
                r.depthFunc(r.GREATER);
                break;
              case wc:
                r.depthFunc(r.NOTEQUAL);
                break;
              default:
                r.depthFunc(r.LEQUAL);
            }
            j = pe;
          }
        },
        setLocked: function(pe) {
          I = pe;
        },
        setClear: function(pe) {
          me !== pe && (he && (pe = 1 - pe), r.clearDepth(pe), me = pe);
        },
        reset: function() {
          I = false, W = null, j = null, me = null, he = false;
        }
      };
    }
    function i() {
      let I = false, he = null, W = null, j = null, me = null, pe = null, Be = null, Et = null, Gt = null;
      return {
        setTest: function(at) {
          I || (at ? ae(r.STENCIL_TEST) : Ae(r.STENCIL_TEST));
        },
        setMask: function(at) {
          he !== at && !I && (r.stencilMask(at), he = at);
        },
        setFunc: function(at, Un, oi) {
          (W !== at || j !== Un || me !== oi) && (r.stencilFunc(at, Un, oi), W = at, j = Un, me = oi);
        },
        setOp: function(at, Un, oi) {
          (pe !== at || Be !== Un || Et !== oi) && (r.stencilOp(at, Un, oi), pe = at, Be = Un, Et = oi);
        },
        setLocked: function(at) {
          I = at;
        },
        setClear: function(at) {
          Gt !== at && (r.clearStencil(at), Gt = at);
        },
        reset: function() {
          I = false, he = null, W = null, j = null, me = null, pe = null, Be = null, Et = null, Gt = null;
        }
      };
    }
    const s = new t(), o = new n(), a = new i(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
    let u = {}, h = {}, d = /* @__PURE__ */ new WeakMap(), f = [], _ = null, g = false, m = null, p = null, y = null, v = null, x = null, w = null, b = null, A = new Ce(0, 0, 0), P = 0, S = false, M = null, L = null, G = null, O = null, V = null;
    const q = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let B = false, K = 0;
    const H = r.getParameter(r.VERSION);
    H.indexOf("WebGL") !== -1 ? (K = parseFloat(/^WebGL (\d)/.exec(H)[1]), B = K >= 1) : H.indexOf("OpenGL ES") !== -1 && (K = parseFloat(/^OpenGL ES (\d)/.exec(H)[1]), B = K >= 2);
    let oe = null, ce = {};
    const ge = r.getParameter(r.SCISSOR_BOX), Le = r.getParameter(r.VIEWPORT), Ke = new it().fromArray(ge), X = new it().fromArray(Le);
    function ie(I, he, W, j) {
      const me = new Uint8Array(4), pe = r.createTexture();
      r.bindTexture(I, pe), r.texParameteri(I, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(I, r.TEXTURE_MAG_FILTER, r.NEAREST);
      for (let Be = 0; Be < W; Be++) I === r.TEXTURE_3D || I === r.TEXTURE_2D_ARRAY ? r.texImage3D(he, 0, r.RGBA, 1, 1, j, 0, r.RGBA, r.UNSIGNED_BYTE, me) : r.texImage2D(he + Be, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, me);
      return pe;
    }
    const Ee = {};
    Ee[r.TEXTURE_2D] = ie(r.TEXTURE_2D, r.TEXTURE_2D, 1), Ee[r.TEXTURE_CUBE_MAP] = ie(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Ee[r.TEXTURE_2D_ARRAY] = ie(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), Ee[r.TEXTURE_3D] = ie(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), ae(r.DEPTH_TEST), o.setFunc(ys), te(false), xe(Hh), ae(r.CULL_FACE), R(Ti);
    function ae(I) {
      u[I] !== true && (r.enable(I), u[I] = true);
    }
    function Ae(I) {
      u[I] !== false && (r.disable(I), u[I] = false);
    }
    function je(I, he) {
      return h[I] !== he ? (r.bindFramebuffer(I, he), h[I] = he, I === r.DRAW_FRAMEBUFFER && (h[r.FRAMEBUFFER] = he), I === r.FRAMEBUFFER && (h[r.DRAW_FRAMEBUFFER] = he), true) : false;
    }
    function we(I, he) {
      let W = f, j = false;
      if (I) {
        W = d.get(he), W === void 0 && (W = [], d.set(he, W));
        const me = I.textures;
        if (W.length !== me.length || W[0] !== r.COLOR_ATTACHMENT0) {
          for (let pe = 0, Be = me.length; pe < Be; pe++) W[pe] = r.COLOR_ATTACHMENT0 + pe;
          W.length = me.length, j = true;
        }
      } else W[0] !== r.BACK && (W[0] = r.BACK, j = true);
      j && r.drawBuffers(W);
    }
    function nt(I) {
      return _ !== I ? (r.useProgram(I), _ = I, true) : false;
    }
    const Q = {
      [_r]: r.FUNC_ADD,
      [fg]: r.FUNC_SUBTRACT,
      [pg]: r.FUNC_REVERSE_SUBTRACT
    };
    Q[mg] = r.MIN, Q[gg] = r.MAX;
    const J = {
      [_g]: r.ZERO,
      [xg]: r.ONE,
      [vg]: r.SRC_COLOR,
      [xc]: r.SRC_ALPHA,
      [bg]: r.SRC_ALPHA_SATURATE,
      [Eg]: r.DST_COLOR,
      [Sg]: r.DST_ALPHA,
      [yg]: r.ONE_MINUS_SRC_COLOR,
      [vc]: r.ONE_MINUS_SRC_ALPHA,
      [Tg]: r.ONE_MINUS_DST_COLOR,
      [Mg]: r.ONE_MINUS_DST_ALPHA,
      [wg]: r.CONSTANT_COLOR,
      [Ag]: r.ONE_MINUS_CONSTANT_COLOR,
      [Cg]: r.CONSTANT_ALPHA,
      [Rg]: r.ONE_MINUS_CONSTANT_ALPHA
    };
    function R(I, he, W, j, me, pe, Be, Et, Gt, at) {
      if (I === Ti) {
        g === true && (Ae(r.BLEND), g = false);
        return;
      }
      if (g === false && (ae(r.BLEND), g = true), I !== dg) {
        if (I !== m || at !== S) {
          if ((p !== _r || x !== _r) && (r.blendEquation(r.FUNC_ADD), p = _r, x = _r), at) switch (I) {
            case hs:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case Ka:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case Gh:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case Wh:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
          else switch (I) {
            case hs:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case Ka:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case Gh:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case Wh:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
          y = null, v = null, w = null, b = null, A.set(0, 0, 0), P = 0, m = I, S = at;
        }
        return;
      }
      me = me || he, pe = pe || W, Be = Be || j, (he !== p || me !== x) && (r.blendEquationSeparate(Q[he], Q[me]), p = he, x = me), (W !== y || j !== v || pe !== w || Be !== b) && (r.blendFuncSeparate(J[W], J[j], J[pe], J[Be]), y = W, v = j, w = pe, b = Be), (Et.equals(A) === false || Gt !== P) && (r.blendColor(Et.r, Et.g, Et.b, Gt), A.copy(Et), P = Gt), m = I, S = false;
    }
    function be(I, he) {
      I.side === $n ? Ae(r.CULL_FACE) : ae(r.CULL_FACE);
      let W = I.side === ln;
      he && (W = !W), te(W), I.blending === hs && I.transparent === false ? R(Ti) : R(I.blending, I.blendEquation, I.blendSrc, I.blendDst, I.blendEquationAlpha, I.blendSrcAlpha, I.blendDstAlpha, I.blendColor, I.blendAlpha, I.premultipliedAlpha), o.setFunc(I.depthFunc), o.setTest(I.depthTest), o.setMask(I.depthWrite), s.setMask(I.colorWrite);
      const j = I.stencilWrite;
      a.setTest(j), j && (a.setMask(I.stencilWriteMask), a.setFunc(I.stencilFunc, I.stencilRef, I.stencilFuncMask), a.setOp(I.stencilFail, I.stencilZFail, I.stencilZPass)), Ie(I.polygonOffset, I.polygonOffsetFactor, I.polygonOffsetUnits), I.alphaToCoverage === true ? ae(r.SAMPLE_ALPHA_TO_COVERAGE) : Ae(r.SAMPLE_ALPHA_TO_COVERAGE);
    }
    function te(I) {
      M !== I && (I ? r.frontFace(r.CW) : r.frontFace(r.CCW), M = I);
    }
    function xe(I) {
      I !== cg ? (ae(r.CULL_FACE), I !== L && (I === Hh ? r.cullFace(r.BACK) : I === ug ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : Ae(r.CULL_FACE), L = I;
    }
    function se(I) {
      I !== G && (B && r.lineWidth(I), G = I);
    }
    function Ie(I, he, W) {
      I ? (ae(r.POLYGON_OFFSET_FILL), (O !== he || V !== W) && (r.polygonOffset(he, W), O = he, V = W)) : Ae(r.POLYGON_OFFSET_FILL);
    }
    function fe(I) {
      I ? ae(r.SCISSOR_TEST) : Ae(r.SCISSOR_TEST);
    }
    function C(I) {
      I === void 0 && (I = r.TEXTURE0 + q - 1), oe !== I && (r.activeTexture(I), oe = I);
    }
    function E(I, he, W) {
      W === void 0 && (oe === null ? W = r.TEXTURE0 + q - 1 : W = oe);
      let j = ce[W];
      j === void 0 && (j = {
        type: void 0,
        texture: void 0
      }, ce[W] = j), (j.type !== I || j.texture !== he) && (oe !== W && (r.activeTexture(W), oe = W), r.bindTexture(I, he || Ee[I]), j.type = I, j.texture = he);
    }
    function F() {
      const I = ce[oe];
      I !== void 0 && I.type !== void 0 && (r.bindTexture(I.type, null), I.type = void 0, I.texture = void 0);
    }
    function Y() {
      try {
        r.compressedTexImage2D.apply(r, arguments);
      } catch (I) {
        console.error("THREE.WebGLState:", I);
      }
    }
    function Z() {
      try {
        r.compressedTexImage3D.apply(r, arguments);
      } catch (I) {
        console.error("THREE.WebGLState:", I);
      }
    }
    function $() {
      try {
        r.texSubImage2D.apply(r, arguments);
      } catch (I) {
        console.error("THREE.WebGLState:", I);
      }
    }
    function Te() {
      try {
        r.texSubImage3D.apply(r, arguments);
      } catch (I) {
        console.error("THREE.WebGLState:", I);
      }
    }
    function ue() {
      try {
        r.compressedTexSubImage2D.apply(r, arguments);
      } catch (I) {
        console.error("THREE.WebGLState:", I);
      }
    }
    function _e() {
      try {
        r.compressedTexSubImage3D.apply(r, arguments);
      } catch (I) {
        console.error("THREE.WebGLState:", I);
      }
    }
    function We() {
      try {
        r.texStorage2D.apply(r, arguments);
      } catch (I) {
        console.error("THREE.WebGLState:", I);
      }
    }
    function re() {
      try {
        r.texStorage3D.apply(r, arguments);
      } catch (I) {
        console.error("THREE.WebGLState:", I);
      }
    }
    function ye() {
      try {
        r.texImage2D.apply(r, arguments);
      } catch (I) {
        console.error("THREE.WebGLState:", I);
      }
    }
    function De() {
      try {
        r.texImage3D.apply(r, arguments);
      } catch (I) {
        console.error("THREE.WebGLState:", I);
      }
    }
    function Ne(I) {
      Ke.equals(I) === false && (r.scissor(I.x, I.y, I.z, I.w), Ke.copy(I));
    }
    function Se(I) {
      X.equals(I) === false && (r.viewport(I.x, I.y, I.z, I.w), X.copy(I));
    }
    function Ye(I, he) {
      let W = c.get(he);
      W === void 0 && (W = /* @__PURE__ */ new WeakMap(), c.set(he, W));
      let j = W.get(I);
      j === void 0 && (j = r.getUniformBlockIndex(he, I.name), W.set(I, j));
    }
    function ke(I, he) {
      const j = c.get(he).get(I);
      l.get(he) !== j && (r.uniformBlockBinding(he, j, I.__bindingPointIndex), l.set(he, j));
    }
    function mt() {
      r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(true, true, true, true), r.clearColor(0, 0, 0, 0), r.depthMask(true), r.depthFunc(r.LESS), o.setReversed(false), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), u = {}, oe = null, ce = {}, h = {}, d = /* @__PURE__ */ new WeakMap(), f = [], _ = null, g = false, m = null, p = null, y = null, v = null, x = null, w = null, b = null, A = new Ce(0, 0, 0), P = 0, S = false, M = null, L = null, G = null, O = null, V = null, Ke.set(0, 0, r.canvas.width, r.canvas.height), X.set(0, 0, r.canvas.width, r.canvas.height), s.reset(), o.reset(), a.reset();
    }
    return {
      buffers: {
        color: s,
        depth: o,
        stencil: a
      },
      enable: ae,
      disable: Ae,
      bindFramebuffer: je,
      drawBuffers: we,
      useProgram: nt,
      setBlending: R,
      setMaterial: be,
      setFlipSided: te,
      setCullFace: xe,
      setLineWidth: se,
      setPolygonOffset: Ie,
      setScissorTest: fe,
      activeTexture: C,
      bindTexture: E,
      unbindTexture: F,
      compressedTexImage2D: Y,
      compressedTexImage3D: Z,
      texImage2D: ye,
      texImage3D: De,
      updateUBOMapping: Ye,
      uniformBlockBinding: ke,
      texStorage2D: We,
      texStorage3D: re,
      texSubImage2D: $,
      texSubImage3D: Te,
      compressedTexSubImage2D: ue,
      compressedTexSubImage3D: _e,
      scissor: Ne,
      viewport: Se,
      reset: mt
    };
  }
  function FM(r, e, t, n, i, s, o) {
    const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new ee(), u = /* @__PURE__ */ new WeakMap();
    let h;
    const d = /* @__PURE__ */ new WeakMap();
    let f = false;
    try {
      f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
    } catch {
    }
    function _(C, E) {
      return f ? new OffscreenCanvas(C, E) : Bo("canvas");
    }
    function g(C, E, F) {
      let Y = 1;
      const Z = fe(C);
      if ((Z.width > F || Z.height > F) && (Y = F / Math.max(Z.width, Z.height)), Y < 1) if (typeof HTMLImageElement < "u" && C instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && C instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && C instanceof ImageBitmap || typeof VideoFrame < "u" && C instanceof VideoFrame) {
        const $ = Math.floor(Y * Z.width), Te = Math.floor(Y * Z.height);
        h === void 0 && (h = _($, Te));
        const ue = E ? _($, Te) : h;
        return ue.width = $, ue.height = Te, ue.getContext("2d").drawImage(C, 0, 0, $, Te), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + $ + "x" + Te + ")."), ue;
      } else return "data" in C && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), C;
      return C;
    }
    function m(C) {
      return C.generateMipmaps;
    }
    function p(C) {
      r.generateMipmap(C);
    }
    function y(C) {
      return C.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : C.isWebGL3DRenderTarget ? r.TEXTURE_3D : C.isWebGLArrayRenderTarget || C.isCompressedArrayTexture ? r.TEXTURE_2D_ARRAY : r.TEXTURE_2D;
    }
    function v(C, E, F, Y, Z = false) {
      if (C !== null) {
        if (r[C] !== void 0) return r[C];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + C + "'");
      }
      let $ = E;
      if (E === r.RED && (F === r.FLOAT && ($ = r.R32F), F === r.HALF_FLOAT && ($ = r.R16F), F === r.UNSIGNED_BYTE && ($ = r.R8)), E === r.RED_INTEGER && (F === r.UNSIGNED_BYTE && ($ = r.R8UI), F === r.UNSIGNED_SHORT && ($ = r.R16UI), F === r.UNSIGNED_INT && ($ = r.R32UI), F === r.BYTE && ($ = r.R8I), F === r.SHORT && ($ = r.R16I), F === r.INT && ($ = r.R32I)), E === r.RG && (F === r.FLOAT && ($ = r.RG32F), F === r.HALF_FLOAT && ($ = r.RG16F), F === r.UNSIGNED_BYTE && ($ = r.RG8)), E === r.RG_INTEGER && (F === r.UNSIGNED_BYTE && ($ = r.RG8UI), F === r.UNSIGNED_SHORT && ($ = r.RG16UI), F === r.UNSIGNED_INT && ($ = r.RG32UI), F === r.BYTE && ($ = r.RG8I), F === r.SHORT && ($ = r.RG16I), F === r.INT && ($ = r.RG32I)), E === r.RGB_INTEGER && (F === r.UNSIGNED_BYTE && ($ = r.RGB8UI), F === r.UNSIGNED_SHORT && ($ = r.RGB16UI), F === r.UNSIGNED_INT && ($ = r.RGB32UI), F === r.BYTE && ($ = r.RGB8I), F === r.SHORT && ($ = r.RGB16I), F === r.INT && ($ = r.RGB32I)), E === r.RGBA_INTEGER && (F === r.UNSIGNED_BYTE && ($ = r.RGBA8UI), F === r.UNSIGNED_SHORT && ($ = r.RGBA16UI), F === r.UNSIGNED_INT && ($ = r.RGBA32UI), F === r.BYTE && ($ = r.RGBA8I), F === r.SHORT && ($ = r.RGBA16I), F === r.INT && ($ = r.RGBA32I)), E === r.RGB && F === r.UNSIGNED_INT_5_9_9_9_REV && ($ = r.RGB9_E5), E === r.RGBA) {
        const Te = Z ? Za : $e.getTransfer(Y);
        F === r.FLOAT && ($ = r.RGBA32F), F === r.HALF_FLOAT && ($ = r.RGBA16F), F === r.UNSIGNED_BYTE && ($ = Te === dt ? r.SRGB8_ALPHA8 : r.RGBA8), F === r.UNSIGNED_SHORT_4_4_4_4 && ($ = r.RGBA4), F === r.UNSIGNED_SHORT_5_5_5_1 && ($ = r.RGB5_A1);
      }
      return ($ === r.R16F || $ === r.R32F || $ === r.RG16F || $ === r.RG32F || $ === r.RGBA16F || $ === r.RGBA32F) && e.get("EXT_color_buffer_float"), $;
    }
    function x(C, E) {
      let F;
      return C ? E === null || E === Dr || E === Ts ? F = r.DEPTH24_STENCIL8 : E === Gn ? F = r.DEPTH32F_STENCIL8 : E === Uo && (F = r.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : E === null || E === Dr || E === Ts ? F = r.DEPTH_COMPONENT24 : E === Gn ? F = r.DEPTH_COMPONENT32F : E === Uo && (F = r.DEPTH_COMPONENT16), F;
    }
    function w(C, E) {
      return m(C) === true || C.isFramebufferTexture && C.minFilter !== nn && C.minFilter !== Sn ? Math.log2(Math.max(E.width, E.height)) + 1 : C.mipmaps !== void 0 && C.mipmaps.length > 0 ? C.mipmaps.length : C.isCompressedTexture && Array.isArray(C.image) ? E.mipmaps.length : 1;
    }
    function b(C) {
      const E = C.target;
      E.removeEventListener("dispose", b), P(E), E.isVideoTexture && u.delete(E);
    }
    function A(C) {
      const E = C.target;
      E.removeEventListener("dispose", A), M(E);
    }
    function P(C) {
      const E = n.get(C);
      if (E.__webglInit === void 0) return;
      const F = C.source, Y = d.get(F);
      if (Y) {
        const Z = Y[E.__cacheKey];
        Z.usedTimes--, Z.usedTimes === 0 && S(C), Object.keys(Y).length === 0 && d.delete(F);
      }
      n.remove(C);
    }
    function S(C) {
      const E = n.get(C);
      r.deleteTexture(E.__webglTexture);
      const F = C.source, Y = d.get(F);
      delete Y[E.__cacheKey], o.memory.textures--;
    }
    function M(C) {
      const E = n.get(C);
      if (C.depthTexture && (C.depthTexture.dispose(), n.remove(C.depthTexture)), C.isWebGLCubeRenderTarget) for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(E.__webglFramebuffer[Y])) for (let Z = 0; Z < E.__webglFramebuffer[Y].length; Z++) r.deleteFramebuffer(E.__webglFramebuffer[Y][Z]);
        else r.deleteFramebuffer(E.__webglFramebuffer[Y]);
        E.__webglDepthbuffer && r.deleteRenderbuffer(E.__webglDepthbuffer[Y]);
      }
      else {
        if (Array.isArray(E.__webglFramebuffer)) for (let Y = 0; Y < E.__webglFramebuffer.length; Y++) r.deleteFramebuffer(E.__webglFramebuffer[Y]);
        else r.deleteFramebuffer(E.__webglFramebuffer);
        if (E.__webglDepthbuffer && r.deleteRenderbuffer(E.__webglDepthbuffer), E.__webglMultisampledFramebuffer && r.deleteFramebuffer(E.__webglMultisampledFramebuffer), E.__webglColorRenderbuffer) for (let Y = 0; Y < E.__webglColorRenderbuffer.length; Y++) E.__webglColorRenderbuffer[Y] && r.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);
        E.__webglDepthRenderbuffer && r.deleteRenderbuffer(E.__webglDepthRenderbuffer);
      }
      const F = C.textures;
      for (let Y = 0, Z = F.length; Y < Z; Y++) {
        const $ = n.get(F[Y]);
        $.__webglTexture && (r.deleteTexture($.__webglTexture), o.memory.textures--), n.remove(F[Y]);
      }
      n.remove(C);
    }
    let L = 0;
    function G() {
      L = 0;
    }
    function O() {
      const C = L;
      return C >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + C + " texture units while this GPU supports only " + i.maxTextures), L += 1, C;
    }
    function V(C) {
      const E = [];
      return E.push(C.wrapS), E.push(C.wrapT), E.push(C.wrapR || 0), E.push(C.magFilter), E.push(C.minFilter), E.push(C.anisotropy), E.push(C.internalFormat), E.push(C.format), E.push(C.type), E.push(C.generateMipmaps), E.push(C.premultiplyAlpha), E.push(C.flipY), E.push(C.unpackAlignment), E.push(C.colorSpace), E.join();
    }
    function q(C, E) {
      const F = n.get(C);
      if (C.isVideoTexture && se(C), C.isRenderTargetTexture === false && C.version > 0 && F.__version !== C.version) {
        const Y = C.image;
        if (Y === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
        else if (Y.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        else {
          X(F, C, E);
          return;
        }
      }
      t.bindTexture(r.TEXTURE_2D, F.__webglTexture, r.TEXTURE0 + E);
    }
    function B(C, E) {
      const F = n.get(C);
      if (C.version > 0 && F.__version !== C.version) {
        X(F, C, E);
        return;
      }
      t.bindTexture(r.TEXTURE_2D_ARRAY, F.__webglTexture, r.TEXTURE0 + E);
    }
    function K(C, E) {
      const F = n.get(C);
      if (C.version > 0 && F.__version !== C.version) {
        X(F, C, E);
        return;
      }
      t.bindTexture(r.TEXTURE_3D, F.__webglTexture, r.TEXTURE0 + E);
    }
    function H(C, E) {
      const F = n.get(C);
      if (C.version > 0 && F.__version !== C.version) {
        ie(F, C, E);
        return;
      }
      t.bindTexture(r.TEXTURE_CUBE_MAP, F.__webglTexture, r.TEXTURE0 + E);
    }
    const oe = {
      [Es]: r.REPEAT,
      [Hi]: r.CLAMP_TO_EDGE,
      [ja]: r.MIRRORED_REPEAT
    }, ce = {
      [nn]: r.NEAREST,
      [qf]: r.NEAREST_MIPMAP_NEAREST,
      [po]: r.NEAREST_MIPMAP_LINEAR,
      [Sn]: r.LINEAR,
      [Fa]: r.LINEAR_MIPMAP_NEAREST,
      [Si]: r.LINEAR_MIPMAP_LINEAR
    }, ge = {
      [Xg]: r.NEVER,
      [Zg]: r.ALWAYS,
      [qg]: r.LESS,
      [rp]: r.LEQUAL,
      [Yg]: r.EQUAL,
      [jg]: r.GEQUAL,
      [$g]: r.GREATER,
      [Kg]: r.NOTEQUAL
    };
    function Le(C, E) {
      if (E.type === Gn && e.has("OES_texture_float_linear") === false && (E.magFilter === Sn || E.magFilter === Fa || E.magFilter === po || E.magFilter === Si || E.minFilter === Sn || E.minFilter === Fa || E.minFilter === po || E.minFilter === Si) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), r.texParameteri(C, r.TEXTURE_WRAP_S, oe[E.wrapS]), r.texParameteri(C, r.TEXTURE_WRAP_T, oe[E.wrapT]), (C === r.TEXTURE_3D || C === r.TEXTURE_2D_ARRAY) && r.texParameteri(C, r.TEXTURE_WRAP_R, oe[E.wrapR]), r.texParameteri(C, r.TEXTURE_MAG_FILTER, ce[E.magFilter]), r.texParameteri(C, r.TEXTURE_MIN_FILTER, ce[E.minFilter]), E.compareFunction && (r.texParameteri(C, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(C, r.TEXTURE_COMPARE_FUNC, ge[E.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
        if (E.magFilter === nn || E.minFilter !== po && E.minFilter !== Si || E.type === Gn && e.has("OES_texture_float_linear") === false) return;
        if (E.anisotropy > 1 || n.get(E).__currentAnisotropy) {
          const F = e.get("EXT_texture_filter_anisotropic");
          r.texParameterf(C, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(E.anisotropy, i.getMaxAnisotropy())), n.get(E).__currentAnisotropy = E.anisotropy;
        }
      }
    }
    function Ke(C, E) {
      let F = false;
      C.__webglInit === void 0 && (C.__webglInit = true, E.addEventListener("dispose", b));
      const Y = E.source;
      let Z = d.get(Y);
      Z === void 0 && (Z = {}, d.set(Y, Z));
      const $ = V(E);
      if ($ !== C.__cacheKey) {
        Z[$] === void 0 && (Z[$] = {
          texture: r.createTexture(),
          usedTimes: 0
        }, o.memory.textures++, F = true), Z[$].usedTimes++;
        const Te = Z[C.__cacheKey];
        Te !== void 0 && (Z[C.__cacheKey].usedTimes--, Te.usedTimes === 0 && S(E)), C.__cacheKey = $, C.__webglTexture = Z[$].texture;
      }
      return F;
    }
    function X(C, E, F) {
      let Y = r.TEXTURE_2D;
      (E.isDataArrayTexture || E.isCompressedArrayTexture) && (Y = r.TEXTURE_2D_ARRAY), E.isData3DTexture && (Y = r.TEXTURE_3D);
      const Z = Ke(C, E), $ = E.source;
      t.bindTexture(Y, C.__webglTexture, r.TEXTURE0 + F);
      const Te = n.get($);
      if ($.version !== Te.__version || Z === true) {
        t.activeTexture(r.TEXTURE0 + F);
        const ue = $e.getPrimaries($e.workingColorSpace), _e = E.colorSpace === ki ? null : $e.getPrimaries(E.colorSpace), We = E.colorSpace === ki || ue === _e ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
        r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, E.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, E.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, E.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, We);
        let re = g(E.image, false, i.maxTextureSize);
        re = Ie(E, re);
        const ye = s.convert(E.format, E.colorSpace), De = s.convert(E.type);
        let Ne = v(E.internalFormat, ye, De, E.colorSpace, E.isVideoTexture);
        Le(Y, E);
        let Se;
        const Ye = E.mipmaps, ke = E.isVideoTexture !== true, mt = Te.__version === void 0 || Z === true, I = $.dataReady, he = w(E, re);
        if (E.isDepthTexture) Ne = x(E.format === bs, E.type), mt && (ke ? t.texStorage2D(r.TEXTURE_2D, 1, Ne, re.width, re.height) : t.texImage2D(r.TEXTURE_2D, 0, Ne, re.width, re.height, 0, ye, De, null));
        else if (E.isDataTexture) if (Ye.length > 0) {
          ke && mt && t.texStorage2D(r.TEXTURE_2D, he, Ne, Ye[0].width, Ye[0].height);
          for (let W = 0, j = Ye.length; W < j; W++) Se = Ye[W], ke ? I && t.texSubImage2D(r.TEXTURE_2D, W, 0, 0, Se.width, Se.height, ye, De, Se.data) : t.texImage2D(r.TEXTURE_2D, W, Ne, Se.width, Se.height, 0, ye, De, Se.data);
          E.generateMipmaps = false;
        } else ke ? (mt && t.texStorage2D(r.TEXTURE_2D, he, Ne, re.width, re.height), I && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, re.width, re.height, ye, De, re.data)) : t.texImage2D(r.TEXTURE_2D, 0, Ne, re.width, re.height, 0, ye, De, re.data);
        else if (E.isCompressedTexture) if (E.isCompressedArrayTexture) {
          ke && mt && t.texStorage3D(r.TEXTURE_2D_ARRAY, he, Ne, Ye[0].width, Ye[0].height, re.depth);
          for (let W = 0, j = Ye.length; W < j; W++) if (Se = Ye[W], E.format !== Dn) if (ye !== null) if (ke) {
            if (I) if (E.layerUpdates.size > 0) {
              const me = kd(Se.width, Se.height, E.format, E.type);
              for (const pe of E.layerUpdates) {
                const Be = Se.data.subarray(pe * me / Se.data.BYTES_PER_ELEMENT, (pe + 1) * me / Se.data.BYTES_PER_ELEMENT);
                t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, W, 0, 0, pe, Se.width, Se.height, 1, ye, Be);
              }
              E.clearLayerUpdates();
            } else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, W, 0, 0, 0, Se.width, Se.height, re.depth, ye, Se.data);
          } else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, W, Ne, Se.width, Se.height, re.depth, 0, Se.data, 0, 0);
          else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
          else ke ? I && t.texSubImage3D(r.TEXTURE_2D_ARRAY, W, 0, 0, 0, Se.width, Se.height, re.depth, ye, De, Se.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, W, Ne, Se.width, Se.height, re.depth, 0, ye, De, Se.data);
        } else {
          ke && mt && t.texStorage2D(r.TEXTURE_2D, he, Ne, Ye[0].width, Ye[0].height);
          for (let W = 0, j = Ye.length; W < j; W++) Se = Ye[W], E.format !== Dn ? ye !== null ? ke ? I && t.compressedTexSubImage2D(r.TEXTURE_2D, W, 0, 0, Se.width, Se.height, ye, Se.data) : t.compressedTexImage2D(r.TEXTURE_2D, W, Ne, Se.width, Se.height, 0, Se.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ke ? I && t.texSubImage2D(r.TEXTURE_2D, W, 0, 0, Se.width, Se.height, ye, De, Se.data) : t.texImage2D(r.TEXTURE_2D, W, Ne, Se.width, Se.height, 0, ye, De, Se.data);
        }
        else if (E.isDataArrayTexture) if (ke) {
          if (mt && t.texStorage3D(r.TEXTURE_2D_ARRAY, he, Ne, re.width, re.height, re.depth), I) if (E.layerUpdates.size > 0) {
            const W = kd(re.width, re.height, E.format, E.type);
            for (const j of E.layerUpdates) {
              const me = re.data.subarray(j * W / re.data.BYTES_PER_ELEMENT, (j + 1) * W / re.data.BYTES_PER_ELEMENT);
              t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, j, re.width, re.height, 1, ye, De, me);
            }
            E.clearLayerUpdates();
          } else t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, re.width, re.height, re.depth, ye, De, re.data);
        } else t.texImage3D(r.TEXTURE_2D_ARRAY, 0, Ne, re.width, re.height, re.depth, 0, ye, De, re.data);
        else if (E.isData3DTexture) ke ? (mt && t.texStorage3D(r.TEXTURE_3D, he, Ne, re.width, re.height, re.depth), I && t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, re.width, re.height, re.depth, ye, De, re.data)) : t.texImage3D(r.TEXTURE_3D, 0, Ne, re.width, re.height, re.depth, 0, ye, De, re.data);
        else if (E.isFramebufferTexture) {
          if (mt) if (ke) t.texStorage2D(r.TEXTURE_2D, he, Ne, re.width, re.height);
          else {
            let W = re.width, j = re.height;
            for (let me = 0; me < he; me++) t.texImage2D(r.TEXTURE_2D, me, Ne, W, j, 0, ye, De, null), W >>= 1, j >>= 1;
          }
        } else if (Ye.length > 0) {
          if (ke && mt) {
            const W = fe(Ye[0]);
            t.texStorage2D(r.TEXTURE_2D, he, Ne, W.width, W.height);
          }
          for (let W = 0, j = Ye.length; W < j; W++) Se = Ye[W], ke ? I && t.texSubImage2D(r.TEXTURE_2D, W, 0, 0, ye, De, Se) : t.texImage2D(r.TEXTURE_2D, W, Ne, ye, De, Se);
          E.generateMipmaps = false;
        } else if (ke) {
          if (mt) {
            const W = fe(re);
            t.texStorage2D(r.TEXTURE_2D, he, Ne, W.width, W.height);
          }
          I && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, ye, De, re);
        } else t.texImage2D(r.TEXTURE_2D, 0, Ne, ye, De, re);
        m(E) && p(Y), Te.__version = $.version, E.onUpdate && E.onUpdate(E);
      }
      C.__version = E.version;
    }
    function ie(C, E, F) {
      if (E.image.length !== 6) return;
      const Y = Ke(C, E), Z = E.source;
      t.bindTexture(r.TEXTURE_CUBE_MAP, C.__webglTexture, r.TEXTURE0 + F);
      const $ = n.get(Z);
      if (Z.version !== $.__version || Y === true) {
        t.activeTexture(r.TEXTURE0 + F);
        const Te = $e.getPrimaries($e.workingColorSpace), ue = E.colorSpace === ki ? null : $e.getPrimaries(E.colorSpace), _e = E.colorSpace === ki || Te === ue ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
        r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, E.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, E.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, E.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, _e);
        const We = E.isCompressedTexture || E.image[0].isCompressedTexture, re = E.image[0] && E.image[0].isDataTexture, ye = [];
        for (let j = 0; j < 6; j++) !We && !re ? ye[j] = g(E.image[j], true, i.maxCubemapSize) : ye[j] = re ? E.image[j].image : E.image[j], ye[j] = Ie(E, ye[j]);
        const De = ye[0], Ne = s.convert(E.format, E.colorSpace), Se = s.convert(E.type), Ye = v(E.internalFormat, Ne, Se, E.colorSpace), ke = E.isVideoTexture !== true, mt = $.__version === void 0 || Y === true, I = Z.dataReady;
        let he = w(E, De);
        Le(r.TEXTURE_CUBE_MAP, E);
        let W;
        if (We) {
          ke && mt && t.texStorage2D(r.TEXTURE_CUBE_MAP, he, Ye, De.width, De.height);
          for (let j = 0; j < 6; j++) {
            W = ye[j].mipmaps;
            for (let me = 0; me < W.length; me++) {
              const pe = W[me];
              E.format !== Dn ? Ne !== null ? ke ? I && t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, me, 0, 0, pe.width, pe.height, Ne, pe.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, me, Ye, pe.width, pe.height, 0, pe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : ke ? I && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, me, 0, 0, pe.width, pe.height, Ne, Se, pe.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, me, Ye, pe.width, pe.height, 0, Ne, Se, pe.data);
            }
          }
        } else {
          if (W = E.mipmaps, ke && mt) {
            W.length > 0 && he++;
            const j = fe(ye[0]);
            t.texStorage2D(r.TEXTURE_CUBE_MAP, he, Ye, j.width, j.height);
          }
          for (let j = 0; j < 6; j++) if (re) {
            ke ? I && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, ye[j].width, ye[j].height, Ne, Se, ye[j].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, Ye, ye[j].width, ye[j].height, 0, Ne, Se, ye[j].data);
            for (let me = 0; me < W.length; me++) {
              const Be = W[me].image[j].image;
              ke ? I && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, me + 1, 0, 0, Be.width, Be.height, Ne, Se, Be.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, me + 1, Ye, Be.width, Be.height, 0, Ne, Se, Be.data);
            }
          } else {
            ke ? I && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, Ne, Se, ye[j]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, Ye, Ne, Se, ye[j]);
            for (let me = 0; me < W.length; me++) {
              const pe = W[me];
              ke ? I && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, me + 1, 0, 0, Ne, Se, pe.image[j]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, me + 1, Ye, Ne, Se, pe.image[j]);
            }
          }
        }
        m(E) && p(r.TEXTURE_CUBE_MAP), $.__version = Z.version, E.onUpdate && E.onUpdate(E);
      }
      C.__version = E.version;
    }
    function Ee(C, E, F, Y, Z, $) {
      const Te = s.convert(F.format, F.colorSpace), ue = s.convert(F.type), _e = v(F.internalFormat, Te, ue, F.colorSpace), We = n.get(E), re = n.get(F);
      if (re.__renderTarget = E, !We.__hasExternalTextures) {
        const ye = Math.max(1, E.width >> $), De = Math.max(1, E.height >> $);
        Z === r.TEXTURE_3D || Z === r.TEXTURE_2D_ARRAY ? t.texImage3D(Z, $, _e, ye, De, E.depth, 0, Te, ue, null) : t.texImage2D(Z, $, _e, ye, De, 0, Te, ue, null);
      }
      t.bindFramebuffer(r.FRAMEBUFFER, C), xe(E) ? a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, Y, Z, re.__webglTexture, 0, te(E)) : (Z === r.TEXTURE_2D || Z >= r.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, Y, Z, re.__webglTexture, $), t.bindFramebuffer(r.FRAMEBUFFER, null);
    }
    function ae(C, E, F) {
      if (r.bindRenderbuffer(r.RENDERBUFFER, C), E.depthBuffer) {
        const Y = E.depthTexture, Z = Y && Y.isDepthTexture ? Y.type : null, $ = x(E.stencilBuffer, Z), Te = E.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, ue = te(E);
        xe(E) ? a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, ue, $, E.width, E.height) : F ? r.renderbufferStorageMultisample(r.RENDERBUFFER, ue, $, E.width, E.height) : r.renderbufferStorage(r.RENDERBUFFER, $, E.width, E.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, Te, r.RENDERBUFFER, C);
      } else {
        const Y = E.textures;
        for (let Z = 0; Z < Y.length; Z++) {
          const $ = Y[Z], Te = s.convert($.format, $.colorSpace), ue = s.convert($.type), _e = v($.internalFormat, Te, ue, $.colorSpace), We = te(E);
          F && xe(E) === false ? r.renderbufferStorageMultisample(r.RENDERBUFFER, We, _e, E.width, E.height) : xe(E) ? a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, We, _e, E.width, E.height) : r.renderbufferStorage(r.RENDERBUFFER, _e, E.width, E.height);
        }
      }
      r.bindRenderbuffer(r.RENDERBUFFER, null);
    }
    function Ae(C, E) {
      if (E && E.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
      if (t.bindFramebuffer(r.FRAMEBUFFER, C), !(E.depthTexture && E.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
      const Y = n.get(E.depthTexture);
      Y.__renderTarget = E, (!Y.__webglTexture || E.depthTexture.image.width !== E.width || E.depthTexture.image.height !== E.height) && (E.depthTexture.image.width = E.width, E.depthTexture.image.height = E.height, E.depthTexture.needsUpdate = true), q(E.depthTexture, 0);
      const Z = Y.__webglTexture, $ = te(E);
      if (E.depthTexture.format === ds) xe(E) ? a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Z, 0, $) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Z, 0);
      else if (E.depthTexture.format === bs) xe(E) ? a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Z, 0, $) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Z, 0);
      else throw new Error("Unknown depthTexture format");
    }
    function je(C) {
      const E = n.get(C), F = C.isWebGLCubeRenderTarget === true;
      if (E.__boundDepthTexture !== C.depthTexture) {
        const Y = C.depthTexture;
        if (E.__depthDisposeCallback && E.__depthDisposeCallback(), Y) {
          const Z = () => {
            delete E.__boundDepthTexture, delete E.__depthDisposeCallback, Y.removeEventListener("dispose", Z);
          };
          Y.addEventListener("dispose", Z), E.__depthDisposeCallback = Z;
        }
        E.__boundDepthTexture = Y;
      }
      if (C.depthTexture && !E.__autoAllocateDepthBuffer) {
        if (F) throw new Error("target.depthTexture not supported in Cube render targets");
        Ae(E.__webglFramebuffer, C);
      } else if (F) {
        E.__webglDepthbuffer = [];
        for (let Y = 0; Y < 6; Y++) if (t.bindFramebuffer(r.FRAMEBUFFER, E.__webglFramebuffer[Y]), E.__webglDepthbuffer[Y] === void 0) E.__webglDepthbuffer[Y] = r.createRenderbuffer(), ae(E.__webglDepthbuffer[Y], C, false);
        else {
          const Z = C.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, $ = E.__webglDepthbuffer[Y];
          r.bindRenderbuffer(r.RENDERBUFFER, $), r.framebufferRenderbuffer(r.FRAMEBUFFER, Z, r.RENDERBUFFER, $);
        }
      } else if (t.bindFramebuffer(r.FRAMEBUFFER, E.__webglFramebuffer), E.__webglDepthbuffer === void 0) E.__webglDepthbuffer = r.createRenderbuffer(), ae(E.__webglDepthbuffer, C, false);
      else {
        const Y = C.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, Z = E.__webglDepthbuffer;
        r.bindRenderbuffer(r.RENDERBUFFER, Z), r.framebufferRenderbuffer(r.FRAMEBUFFER, Y, r.RENDERBUFFER, Z);
      }
      t.bindFramebuffer(r.FRAMEBUFFER, null);
    }
    function we(C, E, F) {
      const Y = n.get(C);
      E !== void 0 && Ee(Y.__webglFramebuffer, C, C.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), F !== void 0 && je(C);
    }
    function nt(C) {
      const E = C.texture, F = n.get(C), Y = n.get(E);
      C.addEventListener("dispose", A);
      const Z = C.textures, $ = C.isWebGLCubeRenderTarget === true, Te = Z.length > 1;
      if (Te || (Y.__webglTexture === void 0 && (Y.__webglTexture = r.createTexture()), Y.__version = E.version, o.memory.textures++), $) {
        F.__webglFramebuffer = [];
        for (let ue = 0; ue < 6; ue++) if (E.mipmaps && E.mipmaps.length > 0) {
          F.__webglFramebuffer[ue] = [];
          for (let _e = 0; _e < E.mipmaps.length; _e++) F.__webglFramebuffer[ue][_e] = r.createFramebuffer();
        } else F.__webglFramebuffer[ue] = r.createFramebuffer();
      } else {
        if (E.mipmaps && E.mipmaps.length > 0) {
          F.__webglFramebuffer = [];
          for (let ue = 0; ue < E.mipmaps.length; ue++) F.__webglFramebuffer[ue] = r.createFramebuffer();
        } else F.__webglFramebuffer = r.createFramebuffer();
        if (Te) for (let ue = 0, _e = Z.length; ue < _e; ue++) {
          const We = n.get(Z[ue]);
          We.__webglTexture === void 0 && (We.__webglTexture = r.createTexture(), o.memory.textures++);
        }
        if (C.samples > 0 && xe(C) === false) {
          F.__webglMultisampledFramebuffer = r.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
          for (let ue = 0; ue < Z.length; ue++) {
            const _e = Z[ue];
            F.__webglColorRenderbuffer[ue] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, F.__webglColorRenderbuffer[ue]);
            const We = s.convert(_e.format, _e.colorSpace), re = s.convert(_e.type), ye = v(_e.internalFormat, We, re, _e.colorSpace, C.isXRRenderTarget === true), De = te(C);
            r.renderbufferStorageMultisample(r.RENDERBUFFER, De, ye, C.width, C.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ue, r.RENDERBUFFER, F.__webglColorRenderbuffer[ue]);
          }
          r.bindRenderbuffer(r.RENDERBUFFER, null), C.depthBuffer && (F.__webglDepthRenderbuffer = r.createRenderbuffer(), ae(F.__webglDepthRenderbuffer, C, true)), t.bindFramebuffer(r.FRAMEBUFFER, null);
        }
      }
      if ($) {
        t.bindTexture(r.TEXTURE_CUBE_MAP, Y.__webglTexture), Le(r.TEXTURE_CUBE_MAP, E);
        for (let ue = 0; ue < 6; ue++) if (E.mipmaps && E.mipmaps.length > 0) for (let _e = 0; _e < E.mipmaps.length; _e++) Ee(F.__webglFramebuffer[ue][_e], C, E, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + ue, _e);
        else Ee(F.__webglFramebuffer[ue], C, E, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + ue, 0);
        m(E) && p(r.TEXTURE_CUBE_MAP), t.unbindTexture();
      } else if (Te) {
        for (let ue = 0, _e = Z.length; ue < _e; ue++) {
          const We = Z[ue], re = n.get(We);
          t.bindTexture(r.TEXTURE_2D, re.__webglTexture), Le(r.TEXTURE_2D, We), Ee(F.__webglFramebuffer, C, We, r.COLOR_ATTACHMENT0 + ue, r.TEXTURE_2D, 0), m(We) && p(r.TEXTURE_2D);
        }
        t.unbindTexture();
      } else {
        let ue = r.TEXTURE_2D;
        if ((C.isWebGL3DRenderTarget || C.isWebGLArrayRenderTarget) && (ue = C.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY), t.bindTexture(ue, Y.__webglTexture), Le(ue, E), E.mipmaps && E.mipmaps.length > 0) for (let _e = 0; _e < E.mipmaps.length; _e++) Ee(F.__webglFramebuffer[_e], C, E, r.COLOR_ATTACHMENT0, ue, _e);
        else Ee(F.__webglFramebuffer, C, E, r.COLOR_ATTACHMENT0, ue, 0);
        m(E) && p(ue), t.unbindTexture();
      }
      C.depthBuffer && je(C);
    }
    function Q(C) {
      const E = C.textures;
      for (let F = 0, Y = E.length; F < Y; F++) {
        const Z = E[F];
        if (m(Z)) {
          const $ = y(C), Te = n.get(Z).__webglTexture;
          t.bindTexture($, Te), p($), t.unbindTexture();
        }
      }
    }
    const J = [], R = [];
    function be(C) {
      if (C.samples > 0) {
        if (xe(C) === false) {
          const E = C.textures, F = C.width, Y = C.height;
          let Z = r.COLOR_BUFFER_BIT;
          const $ = C.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, Te = n.get(C), ue = E.length > 1;
          if (ue) for (let _e = 0; _e < E.length; _e++) t.bindFramebuffer(r.FRAMEBUFFER, Te.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + _e, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, Te.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + _e, r.TEXTURE_2D, null, 0);
          t.bindFramebuffer(r.READ_FRAMEBUFFER, Te.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Te.__webglFramebuffer);
          for (let _e = 0; _e < E.length; _e++) {
            if (C.resolveDepthBuffer && (C.depthBuffer && (Z |= r.DEPTH_BUFFER_BIT), C.stencilBuffer && C.resolveStencilBuffer && (Z |= r.STENCIL_BUFFER_BIT)), ue) {
              r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, Te.__webglColorRenderbuffer[_e]);
              const We = n.get(E[_e]).__webglTexture;
              r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, We, 0);
            }
            r.blitFramebuffer(0, 0, F, Y, 0, 0, F, Y, Z, r.NEAREST), l === true && (J.length = 0, R.length = 0, J.push(r.COLOR_ATTACHMENT0 + _e), C.depthBuffer && C.resolveDepthBuffer === false && (J.push($), R.push($), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, R)), r.invalidateFramebuffer(r.READ_FRAMEBUFFER, J));
          }
          if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), ue) for (let _e = 0; _e < E.length; _e++) {
            t.bindFramebuffer(r.FRAMEBUFFER, Te.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + _e, r.RENDERBUFFER, Te.__webglColorRenderbuffer[_e]);
            const We = n.get(E[_e]).__webglTexture;
            t.bindFramebuffer(r.FRAMEBUFFER, Te.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + _e, r.TEXTURE_2D, We, 0);
          }
          t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Te.__webglMultisampledFramebuffer);
        } else if (C.depthBuffer && C.resolveDepthBuffer === false && l) {
          const E = C.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT;
          r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [
            E
          ]);
        }
      }
    }
    function te(C) {
      return Math.min(i.maxSamples, C.samples);
    }
    function xe(C) {
      const E = n.get(C);
      return C.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && E.__useRenderToTexture !== false;
    }
    function se(C) {
      const E = o.render.frame;
      u.get(C) !== E && (u.set(C, E), C.update());
    }
    function Ie(C, E) {
      const F = C.colorSpace, Y = C.format, Z = C.type;
      return C.isCompressedTexture === true || C.isVideoTexture === true || F !== sn && F !== ki && ($e.getTransfer(F) === dt ? (Y !== Dn || Z !== Ci) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), E;
    }
    function fe(C) {
      return typeof HTMLImageElement < "u" && C instanceof HTMLImageElement ? (c.width = C.naturalWidth || C.width, c.height = C.naturalHeight || C.height) : typeof VideoFrame < "u" && C instanceof VideoFrame ? (c.width = C.displayWidth, c.height = C.displayHeight) : (c.width = C.width, c.height = C.height), c;
    }
    this.allocateTextureUnit = O, this.resetTextureUnits = G, this.setTexture2D = q, this.setTexture2DArray = B, this.setTexture3D = K, this.setTextureCube = H, this.rebindTextures = we, this.setupRenderTarget = nt, this.updateRenderTargetMipmap = Q, this.updateMultisampleRenderTarget = be, this.setupDepthRenderbuffer = je, this.setupFrameBufferTexture = Ee, this.useMultisampledRTT = xe;
  }
  function BM(r, e) {
    function t(n, i = ki) {
      let s;
      const o = $e.getTransfer(i);
      if (n === Ci) return r.UNSIGNED_BYTE;
      if (n === Ou) return r.UNSIGNED_SHORT_4_4_4_4;
      if (n === Fu) return r.UNSIGNED_SHORT_5_5_5_1;
      if (n === Kf) return r.UNSIGNED_INT_5_9_9_9_REV;
      if (n === Yf) return r.BYTE;
      if (n === $f) return r.SHORT;
      if (n === Uo) return r.UNSIGNED_SHORT;
      if (n === Uu) return r.INT;
      if (n === Dr) return r.UNSIGNED_INT;
      if (n === Gn) return r.FLOAT;
      if (n === bi) return r.HALF_FLOAT;
      if (n === jf) return r.ALPHA;
      if (n === Zf) return r.RGB;
      if (n === Dn) return r.RGBA;
      if (n === Jf) return r.LUMINANCE;
      if (n === Qf) return r.LUMINANCE_ALPHA;
      if (n === ds) return r.DEPTH_COMPONENT;
      if (n === bs) return r.DEPTH_STENCIL;
      if (n === Bu) return r.RED;
      if (n === zu) return r.RED_INTEGER;
      if (n === ep) return r.RG;
      if (n === ku) return r.RG_INTEGER;
      if (n === Vu) return r.RGBA_INTEGER;
      if (n === Ba || n === za || n === ka || n === Va) if (o === dt) if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
        if (n === Ba) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        if (n === za) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        if (n === ka) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        if (n === Va) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      } else return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === Ba) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === za) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === ka) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === Va) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
      if (n === Rc || n === Pc || n === Lc || n === Dc) if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === Rc) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Pc) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Lc) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Dc) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
      if (n === Ic || n === Nc || n === Uc) if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === Ic || n === Nc) return o === dt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === Uc) return o === dt ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
      if (n === Oc || n === Fc || n === Bc || n === zc || n === kc || n === Vc || n === Hc || n === Gc || n === Wc || n === Xc || n === qc || n === Yc || n === $c || n === Kc) if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === Oc) return o === dt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Fc) return o === dt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Bc) return o === dt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === zc) return o === dt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === kc) return o === dt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Vc) return o === dt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Hc) return o === dt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Gc) return o === dt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Wc) return o === dt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Xc) return o === dt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === qc) return o === dt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Yc) return o === dt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === $c) return o === dt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Kc) return o === dt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
      if (n === Ha || n === jc || n === Zc) if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === Ha) return o === dt ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === jc) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Zc) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
      if (n === tp || n === Jc || n === Qc || n === eu) if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === Ha) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === Jc) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Qc) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === eu) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
      return n === Ts ? r.UNSIGNED_INT_24_8 : r[n] !== void 0 ? r[n] : null;
    }
    return {
      convert: t
    };
  }
  const zM = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, kM = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
  class VM {
    constructor() {
      this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
    }
    init(e, t, n) {
      if (this.texture === null) {
        const i = new Nt(), s = e.properties.get(i);
        s.__webglTexture = t.texture, (t.depthNear !== n.depthNear || t.depthFar !== n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
      }
    }
    getMesh(e) {
      if (this.texture !== null && this.mesh === null) {
        const t = e.cameras[0].viewport, n = new $t({
          vertexShader: zM,
          fragmentShader: kM,
          uniforms: {
            depthColor: {
              value: this.texture
            },
            depthWidth: {
              value: t.z
            },
            depthHeight: {
              value: t.w
            }
          }
        });
        this.mesh = new Ct(new Zo(20, 20), n);
      }
      return this.mesh;
    }
    reset() {
      this.texture = null, this.mesh = null;
    }
    getDepthTexture() {
      return this.texture;
    }
  }
  class HM extends zs {
    constructor(e, t) {
      super();
      const n = this;
      let i = null, s = 1, o = null, a = "local-floor", l = 1, c = null, u = null, h = null, d = null, f = null, _ = null;
      const g = new VM(), m = t.getContextAttributes();
      let p = null, y = null;
      const v = [], x = [], w = new ee();
      let b = null;
      const A = new en();
      A.viewport = new it();
      const P = new en();
      P.viewport = new it();
      const S = [
        A,
        P
      ], M = new Q0();
      let L = null, G = null;
      this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(X) {
        let ie = v[X];
        return ie === void 0 && (ie = new Vl(), v[X] = ie), ie.getTargetRaySpace();
      }, this.getControllerGrip = function(X) {
        let ie = v[X];
        return ie === void 0 && (ie = new Vl(), v[X] = ie), ie.getGripSpace();
      }, this.getHand = function(X) {
        let ie = v[X];
        return ie === void 0 && (ie = new Vl(), v[X] = ie), ie.getHandSpace();
      };
      function O(X) {
        const ie = x.indexOf(X.inputSource);
        if (ie === -1) return;
        const Ee = v[ie];
        Ee !== void 0 && (Ee.update(X.inputSource, X.frame, c || o), Ee.dispatchEvent({
          type: X.type,
          data: X.inputSource
        }));
      }
      function V() {
        i.removeEventListener("select", O), i.removeEventListener("selectstart", O), i.removeEventListener("selectend", O), i.removeEventListener("squeeze", O), i.removeEventListener("squeezestart", O), i.removeEventListener("squeezeend", O), i.removeEventListener("end", V), i.removeEventListener("inputsourceschange", q);
        for (let X = 0; X < v.length; X++) {
          const ie = x[X];
          ie !== null && (x[X] = null, v[X].disconnect(ie));
        }
        L = null, G = null, g.reset(), e.setRenderTarget(p), f = null, d = null, h = null, i = null, y = null, Ke.stop(), n.isPresenting = false, e.setPixelRatio(b), e.setSize(w.width, w.height, false), n.dispatchEvent({
          type: "sessionend"
        });
      }
      this.setFramebufferScaleFactor = function(X) {
        s = X, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
      }, this.setReferenceSpaceType = function(X) {
        a = X, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
      }, this.getReferenceSpace = function() {
        return c || o;
      }, this.setReferenceSpace = function(X) {
        c = X;
      }, this.getBaseLayer = function() {
        return d !== null ? d : f;
      }, this.getBinding = function() {
        return h;
      }, this.getFrame = function() {
        return _;
      }, this.getSession = function() {
        return i;
      }, this.setSession = async function(X) {
        if (i = X, i !== null) {
          if (p = e.getRenderTarget(), i.addEventListener("select", O), i.addEventListener("selectstart", O), i.addEventListener("selectend", O), i.addEventListener("squeeze", O), i.addEventListener("squeezestart", O), i.addEventListener("squeezeend", O), i.addEventListener("end", V), i.addEventListener("inputsourceschange", q), m.xrCompatible !== true && await t.makeXRCompatible(), b = e.getPixelRatio(), e.getSize(w), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
            let Ee = null, ae = null, Ae = null;
            m.depth && (Ae = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Ee = m.stencil ? bs : ds, ae = m.stencil ? Ts : Dr);
            const je = {
              colorFormat: t.RGBA8,
              depthFormat: Ae,
              scaleFactor: s
            };
            h = new XRWebGLBinding(i, t), d = h.createProjectionLayer(je), i.updateRenderState({
              layers: [
                d
              ]
            }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, false), y = new Wn(d.textureWidth, d.textureHeight, {
              format: Dn,
              type: Ci,
              depthTexture: new xp(d.textureWidth, d.textureHeight, ae, void 0, void 0, void 0, void 0, void 0, void 0, Ee),
              stencilBuffer: m.stencil,
              colorSpace: e.outputColorSpace,
              samples: m.antialias ? 4 : 0,
              resolveDepthBuffer: d.ignoreDepthValues === false
            });
          } else {
            const Ee = {
              antialias: m.antialias,
              alpha: true,
              depth: m.depth,
              stencil: m.stencil,
              framebufferScaleFactor: s
            };
            f = new XRWebGLLayer(i, t, Ee), i.updateRenderState({
              baseLayer: f
            }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, false), y = new Wn(f.framebufferWidth, f.framebufferHeight, {
              format: Dn,
              type: Ci,
              colorSpace: e.outputColorSpace,
              stencilBuffer: m.stencil
            });
          }
          y.isXRRenderTarget = true, this.setFoveation(l), c = null, o = await i.requestReferenceSpace(a), Ke.setContext(i), Ke.start(), n.isPresenting = true, n.dispatchEvent({
            type: "sessionstart"
          });
        }
      }, this.getEnvironmentBlendMode = function() {
        if (i !== null) return i.environmentBlendMode;
      }, this.getDepthTexture = function() {
        return g.getDepthTexture();
      };
      function q(X) {
        for (let ie = 0; ie < X.removed.length; ie++) {
          const Ee = X.removed[ie], ae = x.indexOf(Ee);
          ae >= 0 && (x[ae] = null, v[ae].disconnect(Ee));
        }
        for (let ie = 0; ie < X.added.length; ie++) {
          const Ee = X.added[ie];
          let ae = x.indexOf(Ee);
          if (ae === -1) {
            for (let je = 0; je < v.length; je++) if (je >= x.length) {
              x.push(Ee), ae = je;
              break;
            } else if (x[je] === null) {
              x[je] = Ee, ae = je;
              break;
            }
            if (ae === -1) break;
          }
          const Ae = v[ae];
          Ae && Ae.connect(Ee);
        }
      }
      const B = new D(), K = new D();
      function H(X, ie, Ee) {
        B.setFromMatrixPosition(ie.matrixWorld), K.setFromMatrixPosition(Ee.matrixWorld);
        const ae = B.distanceTo(K), Ae = ie.projectionMatrix.elements, je = Ee.projectionMatrix.elements, we = Ae[14] / (Ae[10] - 1), nt = Ae[14] / (Ae[10] + 1), Q = (Ae[9] + 1) / Ae[5], J = (Ae[9] - 1) / Ae[5], R = (Ae[8] - 1) / Ae[0], be = (je[8] + 1) / je[0], te = we * R, xe = we * be, se = ae / (-R + be), Ie = se * -R;
        if (ie.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(Ie), X.translateZ(se), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert(), Ae[10] === -1) X.projectionMatrix.copy(ie.projectionMatrix), X.projectionMatrixInverse.copy(ie.projectionMatrixInverse);
        else {
          const fe = we + se, C = nt + se, E = te - Ie, F = xe + (ae - Ie), Y = Q * nt / C * fe, Z = J * nt / C * fe;
          X.projectionMatrix.makePerspective(E, F, Y, Z, fe, C), X.projectionMatrixInverse.copy(X.projectionMatrix).invert();
        }
      }
      function oe(X, ie) {
        ie === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(ie.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert();
      }
      this.updateCamera = function(X) {
        if (i === null) return;
        let ie = X.near, Ee = X.far;
        g.texture !== null && (g.depthNear > 0 && (ie = g.depthNear), g.depthFar > 0 && (Ee = g.depthFar)), M.near = P.near = A.near = ie, M.far = P.far = A.far = Ee, (L !== M.near || G !== M.far) && (i.updateRenderState({
          depthNear: M.near,
          depthFar: M.far
        }), L = M.near, G = M.far), A.layers.mask = X.layers.mask | 2, P.layers.mask = X.layers.mask | 4, M.layers.mask = A.layers.mask | P.layers.mask;
        const ae = X.parent, Ae = M.cameras;
        oe(M, ae);
        for (let je = 0; je < Ae.length; je++) oe(Ae[je], ae);
        Ae.length === 2 ? H(M, A, P) : M.projectionMatrix.copy(A.projectionMatrix), ce(X, M, ae);
      };
      function ce(X, ie, Ee) {
        Ee === null ? X.matrix.copy(ie.matrixWorld) : (X.matrix.copy(Ee.matrixWorld), X.matrix.invert(), X.matrix.multiply(ie.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(true), X.projectionMatrix.copy(ie.projectionMatrix), X.projectionMatrixInverse.copy(ie.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = ws * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1);
      }
      this.getCamera = function() {
        return M;
      }, this.getFoveation = function() {
        if (!(d === null && f === null)) return l;
      }, this.setFoveation = function(X) {
        l = X, d !== null && (d.fixedFoveation = X), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = X);
      }, this.hasDepthSensing = function() {
        return g.texture !== null;
      }, this.getDepthSensingMesh = function() {
        return g.getMesh(M);
      };
      let ge = null;
      function Le(X, ie) {
        if (u = ie.getViewerPose(c || o), _ = ie, u !== null) {
          const Ee = u.views;
          f !== null && (e.setRenderTargetFramebuffer(y, f.framebuffer), e.setRenderTarget(y));
          let ae = false;
          Ee.length !== M.cameras.length && (M.cameras.length = 0, ae = true);
          for (let we = 0; we < Ee.length; we++) {
            const nt = Ee[we];
            let Q = null;
            if (f !== null) Q = f.getViewport(nt);
            else {
              const R = h.getViewSubImage(d, nt);
              Q = R.viewport, we === 0 && (e.setRenderTargetTextures(y, R.colorTexture, d.ignoreDepthValues ? void 0 : R.depthStencilTexture), e.setRenderTarget(y));
            }
            let J = S[we];
            J === void 0 && (J = new en(), J.layers.enable(we), J.viewport = new it(), S[we] = J), J.matrix.fromArray(nt.transform.matrix), J.matrix.decompose(J.position, J.quaternion, J.scale), J.projectionMatrix.fromArray(nt.projectionMatrix), J.projectionMatrixInverse.copy(J.projectionMatrix).invert(), J.viewport.set(Q.x, Q.y, Q.width, Q.height), we === 0 && (M.matrix.copy(J.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), ae === true && M.cameras.push(J);
          }
          const Ae = i.enabledFeatures;
          if (Ae && Ae.includes("depth-sensing") && i.depthUsage == "gpu-optimized" && h) {
            const we = h.getDepthInformation(Ee[0]);
            we && we.isValid && we.texture && g.init(e, we, i.renderState);
          }
        }
        for (let Ee = 0; Ee < v.length; Ee++) {
          const ae = x[Ee], Ae = v[Ee];
          ae !== null && Ae !== void 0 && Ae.update(ae, ie, c || o);
        }
        ge && ge(X, ie), ie.detectedPlanes && n.dispatchEvent({
          type: "planesdetected",
          data: ie
        }), _ = null;
      }
      const Ke = new Rp();
      Ke.setAnimationLoop(Le), this.setAnimationLoop = function(X) {
        ge = X;
      }, this.dispose = function() {
      };
    }
  }
  const lr = new Xn(), GM = new Fe();
  function WM(r, e) {
    function t(m, p) {
      m.matrixAutoUpdate === true && m.updateMatrix(), p.value.copy(m.matrix);
    }
    function n(m, p) {
      p.color.getRGB(m.fogColor.value, hp(r)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density);
    }
    function i(m, p, y, v, x) {
      p.isMeshBasicMaterial || p.isMeshLambertMaterial ? s(m, p) : p.isMeshToonMaterial ? (s(m, p), h(m, p)) : p.isMeshPhongMaterial ? (s(m, p), u(m, p)) : p.isMeshStandardMaterial ? (s(m, p), d(m, p), p.isMeshPhysicalMaterial && f(m, p, x)) : p.isMeshMatcapMaterial ? (s(m, p), _(m, p)) : p.isMeshDepthMaterial ? s(m, p) : p.isMeshDistanceMaterial ? (s(m, p), g(m, p)) : p.isMeshNormalMaterial ? s(m, p) : p.isLineBasicMaterial ? (o(m, p), p.isLineDashedMaterial && a(m, p)) : p.isPointsMaterial ? l(m, p, y, v) : p.isSpriteMaterial ? c(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = false);
    }
    function s(m, p) {
      m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, t(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === ln && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, t(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === ln && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, t(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, t(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
      const y = e.get(p), v = y.envMap, x = y.envMapRotation;
      v && (m.envMap.value = v, lr.copy(x), lr.x *= -1, lr.y *= -1, lr.z *= -1, v.isCubeTexture && v.isRenderTargetTexture === false && (lr.y *= -1, lr.z *= -1), m.envMapRotation.value.setFromMatrix4(GM.makeRotationFromEuler(lr)), m.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === false ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap && (m.lightMap.value = p.lightMap, m.lightMapIntensity.value = p.lightMapIntensity, t(p.lightMap, m.lightMapTransform)), p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, m.aoMapTransform));
    }
    function o(m, p) {
      m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, p.map && (m.map.value = p.map, t(p.map, m.mapTransform));
    }
    function a(m, p) {
      m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale;
    }
    function l(m, p, y, v) {
      m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * y, m.scale.value = v * 0.5, p.map && (m.map.value = p.map, t(p.map, m.uvTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    }
    function c(m, p) {
      m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.rotation.value = p.rotation, p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    }
    function u(m, p) {
      m.specular.value.copy(p.specular), m.shininess.value = Math.max(p.shininess, 1e-4);
    }
    function h(m, p) {
      p.gradientMap && (m.gradientMap.value = p.gradientMap);
    }
    function d(m, p) {
      m.metalness.value = p.metalness, p.metalnessMap && (m.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, m.metalnessMapTransform)), m.roughness.value = p.roughness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, m.roughnessMapTransform)), p.envMap && (m.envMapIntensity.value = p.envMapIntensity);
    }
    function f(m, p, y) {
      m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === ln && m.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (m.dispersion.value = p.dispersion), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = y.texture, m.transmissionSamplerSize.value.set(y.width, y.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, m.specularIntensityMapTransform));
    }
    function _(m, p) {
      p.matcap && (m.matcap.value = p.matcap);
    }
    function g(m, p) {
      const y = e.get(p).light;
      m.referencePosition.value.setFromMatrixPosition(y.matrixWorld), m.nearDistance.value = y.shadow.camera.near, m.farDistance.value = y.shadow.camera.far;
    }
    return {
      refreshFogUniforms: n,
      refreshMaterialUniforms: i
    };
  }
  function XM(r, e, t, n) {
    let i = {}, s = {}, o = [];
    const a = r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);
    function l(y, v) {
      const x = v.program;
      n.uniformBlockBinding(y, x);
    }
    function c(y, v) {
      let x = i[y.id];
      x === void 0 && (_(y), x = u(y), i[y.id] = x, y.addEventListener("dispose", m));
      const w = v.program;
      n.updateUBOMapping(y, w);
      const b = e.render.frame;
      s[y.id] !== b && (d(y), s[y.id] = b);
    }
    function u(y) {
      const v = h();
      y.__bindingPointIndex = v;
      const x = r.createBuffer(), w = y.__size, b = y.usage;
      return r.bindBuffer(r.UNIFORM_BUFFER, x), r.bufferData(r.UNIFORM_BUFFER, w, b), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, v, x), x;
    }
    function h() {
      for (let y = 0; y < a; y++) if (o.indexOf(y) === -1) return o.push(y), y;
      return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
    }
    function d(y) {
      const v = i[y.id], x = y.uniforms, w = y.__cache;
      r.bindBuffer(r.UNIFORM_BUFFER, v);
      for (let b = 0, A = x.length; b < A; b++) {
        const P = Array.isArray(x[b]) ? x[b] : [
          x[b]
        ];
        for (let S = 0, M = P.length; S < M; S++) {
          const L = P[S];
          if (f(L, b, S, w) === true) {
            const G = L.__offset, O = Array.isArray(L.value) ? L.value : [
              L.value
            ];
            let V = 0;
            for (let q = 0; q < O.length; q++) {
              const B = O[q], K = g(B);
              typeof B == "number" || typeof B == "boolean" ? (L.__data[0] = B, r.bufferSubData(r.UNIFORM_BUFFER, G + V, L.__data)) : B.isMatrix3 ? (L.__data[0] = B.elements[0], L.__data[1] = B.elements[1], L.__data[2] = B.elements[2], L.__data[3] = 0, L.__data[4] = B.elements[3], L.__data[5] = B.elements[4], L.__data[6] = B.elements[5], L.__data[7] = 0, L.__data[8] = B.elements[6], L.__data[9] = B.elements[7], L.__data[10] = B.elements[8], L.__data[11] = 0) : (B.toArray(L.__data, V), V += K.storage / Float32Array.BYTES_PER_ELEMENT);
            }
            r.bufferSubData(r.UNIFORM_BUFFER, G, L.__data);
          }
        }
      }
      r.bindBuffer(r.UNIFORM_BUFFER, null);
    }
    function f(y, v, x, w) {
      const b = y.value, A = v + "_" + x;
      if (w[A] === void 0) return typeof b == "number" || typeof b == "boolean" ? w[A] = b : w[A] = b.clone(), true;
      {
        const P = w[A];
        if (typeof b == "number" || typeof b == "boolean") {
          if (P !== b) return w[A] = b, true;
        } else if (P.equals(b) === false) return P.copy(b), true;
      }
      return false;
    }
    function _(y) {
      const v = y.uniforms;
      let x = 0;
      const w = 16;
      for (let A = 0, P = v.length; A < P; A++) {
        const S = Array.isArray(v[A]) ? v[A] : [
          v[A]
        ];
        for (let M = 0, L = S.length; M < L; M++) {
          const G = S[M], O = Array.isArray(G.value) ? G.value : [
            G.value
          ];
          for (let V = 0, q = O.length; V < q; V++) {
            const B = O[V], K = g(B), H = x % w, oe = H % K.boundary, ce = H + oe;
            x += oe, ce !== 0 && w - ce < K.storage && (x += w - ce), G.__data = new Float32Array(K.storage / Float32Array.BYTES_PER_ELEMENT), G.__offset = x, x += K.storage;
          }
        }
      }
      const b = x % w;
      return b > 0 && (x += w - b), y.__size = x, y.__cache = {}, this;
    }
    function g(y) {
      const v = {
        boundary: 0,
        storage: 0
      };
      return typeof y == "number" || typeof y == "boolean" ? (v.boundary = 4, v.storage = 4) : y.isVector2 ? (v.boundary = 8, v.storage = 8) : y.isVector3 || y.isColor ? (v.boundary = 16, v.storage = 12) : y.isVector4 ? (v.boundary = 16, v.storage = 16) : y.isMatrix3 ? (v.boundary = 48, v.storage = 48) : y.isMatrix4 ? (v.boundary = 64, v.storage = 64) : y.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", y), v;
    }
    function m(y) {
      const v = y.target;
      v.removeEventListener("dispose", m);
      const x = o.indexOf(v.__bindingPointIndex);
      o.splice(x, 1), r.deleteBuffer(i[v.id]), delete i[v.id], delete s[v.id];
    }
    function p() {
      for (const y in i) r.deleteBuffer(i[y]);
      o = [], i = {}, s = {};
    }
    return {
      bind: l,
      update: c,
      dispose: p
    };
  }
  class qM {
    constructor(e = {}) {
      const { canvas: t = m_(), context: n = null, depth: i = true, stencil: s = false, alpha: o = false, antialias: a = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: u = "default", failIfMajorPerformanceCaveat: h = false, reverseDepthBuffer: d = false } = e;
      this.isWebGLRenderer = true;
      let f;
      if (n !== null) {
        if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
        f = n.getContextAttributes().alpha;
      } else f = o;
      const _ = new Uint32Array(4), g = new Int32Array(4);
      let m = null, p = null;
      const y = [], v = [];
      this.domElement = t, this.debug = {
        checkShaderErrors: true,
        onShaderError: null
      }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = kt, this.toneMapping = $i, this.toneMappingExposure = 1;
      const x = this;
      let w = false, b = 0, A = 0, P = null, S = -1, M = null;
      const L = new it(), G = new it();
      let O = null;
      const V = new Ce(0);
      let q = 0, B = t.width, K = t.height, H = 1, oe = null, ce = null;
      const ge = new it(0, 0, B, K), Le = new it(0, 0, B, K);
      let Ke = false;
      const X = new qu();
      let ie = false, Ee = false;
      this.transmissionResolutionScale = 1;
      const ae = new Fe(), Ae = new Fe(), je = new D(), we = new it(), nt = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: true
      };
      let Q = false;
      function J() {
        return P === null ? H : 1;
      }
      let R = n;
      function be(T, N) {
        return t.getContext(T, N);
      }
      try {
        const T = {
          alpha: true,
          depth: i,
          stencil: s,
          antialias: a,
          premultipliedAlpha: l,
          preserveDrawingBuffer: c,
          powerPreference: u,
          failIfMajorPerformanceCaveat: h
        };
        if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Nu}`), t.addEventListener("webglcontextlost", j, false), t.addEventListener("webglcontextrestored", me, false), t.addEventListener("webglcontextcreationerror", pe, false), R === null) {
          const N = "webgl2";
          if (R = be(N, T), R === null) throw be(N) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
      } catch (T) {
        throw console.error("THREE.WebGLRenderer: " + T.message), T;
      }
      let te, xe, se, Ie, fe, C, E, F, Y, Z, $, Te, ue, _e, We, re, ye, De, Ne, Se, Ye, ke, mt, I;
      function he() {
        te = new nS(R), te.init(), ke = new BM(R, te), xe = new jy(R, te, e, ke), se = new OM(R, te), xe.reverseDepthBuffer && d && se.buffers.depth.setReversed(true), Ie = new sS(R), fe = new EM(), C = new FM(R, te, se, fe, xe, ke, Ie), E = new Jy(x), F = new tS(x), Y = new dx(R), mt = new $y(R, Y), Z = new iS(R, Y, Ie, mt), $ = new aS(R, Z, Y, Ie), Ne = new oS(R, xe, C), re = new Zy(fe), Te = new MM(x, E, F, te, xe, mt, re), ue = new WM(x, fe), _e = new bM(), We = new LM(te), De = new Yy(x, E, F, se, $, f, l), ye = new NM(x, $, xe), I = new XM(R, Ie, xe, se), Se = new Ky(R, te, Ie), Ye = new rS(R, te, Ie), Ie.programs = Te.programs, x.capabilities = xe, x.extensions = te, x.properties = fe, x.renderLists = _e, x.shadowMap = ye, x.state = se, x.info = Ie;
      }
      he();
      const W = new HM(x, R);
      this.xr = W, this.getContext = function() {
        return R;
      }, this.getContextAttributes = function() {
        return R.getContextAttributes();
      }, this.forceContextLoss = function() {
        const T = te.get("WEBGL_lose_context");
        T && T.loseContext();
      }, this.forceContextRestore = function() {
        const T = te.get("WEBGL_lose_context");
        T && T.restoreContext();
      }, this.getPixelRatio = function() {
        return H;
      }, this.setPixelRatio = function(T) {
        T !== void 0 && (H = T, this.setSize(B, K, false));
      }, this.getSize = function(T) {
        return T.set(B, K);
      }, this.setSize = function(T, N, z = true) {
        if (W.isPresenting) {
          console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
          return;
        }
        B = T, K = N, t.width = Math.floor(T * H), t.height = Math.floor(N * H), z === true && (t.style.width = T + "px", t.style.height = N + "px"), this.setViewport(0, 0, T, N);
      }, this.getDrawingBufferSize = function(T) {
        return T.set(B * H, K * H).floor();
      }, this.setDrawingBufferSize = function(T, N, z) {
        B = T, K = N, H = z, t.width = Math.floor(T * z), t.height = Math.floor(N * z), this.setViewport(0, 0, T, N);
      }, this.getCurrentViewport = function(T) {
        return T.copy(L);
      }, this.getViewport = function(T) {
        return T.copy(ge);
      }, this.setViewport = function(T, N, z, k) {
        T.isVector4 ? ge.set(T.x, T.y, T.z, T.w) : ge.set(T, N, z, k), se.viewport(L.copy(ge).multiplyScalar(H).round());
      }, this.getScissor = function(T) {
        return T.copy(Le);
      }, this.setScissor = function(T, N, z, k) {
        T.isVector4 ? Le.set(T.x, T.y, T.z, T.w) : Le.set(T, N, z, k), se.scissor(G.copy(Le).multiplyScalar(H).round());
      }, this.getScissorTest = function() {
        return Ke;
      }, this.setScissorTest = function(T) {
        se.setScissorTest(Ke = T);
      }, this.setOpaqueSort = function(T) {
        oe = T;
      }, this.setTransparentSort = function(T) {
        ce = T;
      }, this.getClearColor = function(T) {
        return T.copy(De.getClearColor());
      }, this.setClearColor = function() {
        De.setClearColor.apply(De, arguments);
      }, this.getClearAlpha = function() {
        return De.getClearAlpha();
      }, this.setClearAlpha = function() {
        De.setClearAlpha.apply(De, arguments);
      }, this.clear = function(T = true, N = true, z = true) {
        let k = 0;
        if (T) {
          let U = false;
          if (P !== null) {
            const ne = P.texture.format;
            U = ne === Vu || ne === ku || ne === zu;
          }
          if (U) {
            const ne = P.texture.type, de = ne === Ci || ne === Dr || ne === Uo || ne === Ts || ne === Ou || ne === Fu, ve = De.getClearColor(), Me = De.getClearAlpha(), Ue = ve.r, Oe = ve.g, Re = ve.b;
            de ? (_[0] = Ue, _[1] = Oe, _[2] = Re, _[3] = Me, R.clearBufferuiv(R.COLOR, 0, _)) : (g[0] = Ue, g[1] = Oe, g[2] = Re, g[3] = Me, R.clearBufferiv(R.COLOR, 0, g));
          } else k |= R.COLOR_BUFFER_BIT;
        }
        N && (k |= R.DEPTH_BUFFER_BIT), z && (k |= R.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), R.clear(k);
      }, this.clearColor = function() {
        this.clear(true, false, false);
      }, this.clearDepth = function() {
        this.clear(false, true, false);
      }, this.clearStencil = function() {
        this.clear(false, false, true);
      }, this.dispose = function() {
        t.removeEventListener("webglcontextlost", j, false), t.removeEventListener("webglcontextrestored", me, false), t.removeEventListener("webglcontextcreationerror", pe, false), De.dispose(), _e.dispose(), We.dispose(), fe.dispose(), E.dispose(), F.dispose(), $.dispose(), mt.dispose(), I.dispose(), Te.dispose(), W.dispose(), W.removeEventListener("sessionstart", Uh), W.removeEventListener("sessionend", Oh), tr.stop();
      };
      function j(T) {
        T.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), w = true;
      }
      function me() {
        console.log("THREE.WebGLRenderer: Context Restored."), w = false;
        const T = Ie.autoReset, N = ye.enabled, z = ye.autoUpdate, k = ye.needsUpdate, U = ye.type;
        he(), Ie.autoReset = T, ye.enabled = N, ye.autoUpdate = z, ye.needsUpdate = k, ye.type = U;
      }
      function pe(T) {
        console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", T.statusMessage);
      }
      function Be(T) {
        const N = T.target;
        N.removeEventListener("dispose", Be), Et(N);
      }
      function Et(T) {
        Gt(T), fe.remove(T);
      }
      function Gt(T) {
        const N = fe.get(T).programs;
        N !== void 0 && (N.forEach(function(z) {
          Te.releaseProgram(z);
        }), T.isShaderMaterial && Te.releaseShaderCache(T));
      }
      this.renderBufferDirect = function(T, N, z, k, U, ne) {
        N === null && (N = nt);
        const de = U.isMesh && U.matrixWorld.determinant() < 0, ve = ig(T, N, z, k, U);
        se.setMaterial(k, de);
        let Me = z.index, Ue = 1;
        if (k.wireframe === true) {
          if (Me = Z.getWireframeAttribute(z), Me === void 0) return;
          Ue = 2;
        }
        const Oe = z.drawRange, Re = z.attributes.position;
        let Ze = Oe.start * Ue, rt = (Oe.start + Oe.count) * Ue;
        ne !== null && (Ze = Math.max(Ze, ne.start * Ue), rt = Math.min(rt, (ne.start + ne.count) * Ue)), Me !== null ? (Ze = Math.max(Ze, 0), rt = Math.min(rt, Me.count)) : Re != null && (Ze = Math.max(Ze, 0), rt = Math.min(rt, Re.count));
        const Rt = rt - Ze;
        if (Rt < 0 || Rt === 1 / 0) return;
        mt.setup(U, k, ve, z, Me);
        let Tt, tt = Se;
        if (Me !== null && (Tt = Y.get(Me), tt = Ye, tt.setIndex(Tt)), U.isMesh) k.wireframe === true ? (se.setLineWidth(k.wireframeLinewidth * J()), tt.setMode(R.LINES)) : tt.setMode(R.TRIANGLES);
        else if (U.isLine) {
          let Pe = k.linewidth;
          Pe === void 0 && (Pe = 1), se.setLineWidth(Pe * J()), U.isLineSegments ? tt.setMode(R.LINES) : U.isLineLoop ? tt.setMode(R.LINE_LOOP) : tt.setMode(R.LINE_STRIP);
        } else U.isPoints ? tt.setMode(R.POINTS) : U.isSprite && tt.setMode(R.TRIANGLES);
        if (U.isBatchedMesh) if (U._multiDrawInstances !== null) tt.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
        else if (te.get("WEBGL_multi_draw")) tt.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
        else {
          const Pe = U._multiDrawStarts, zt = U._multiDrawCounts, st = U._multiDrawCount, On = Me ? Y.get(Me).bytesPerElement : 1, Gr = fe.get(k).currentProgram.getUniforms();
          for (let mn = 0; mn < st; mn++) Gr.setValue(R, "_gl_DrawID", mn), tt.render(Pe[mn] / On, zt[mn]);
        }
        else if (U.isInstancedMesh) tt.renderInstances(Ze, Rt, U.count);
        else if (z.isInstancedBufferGeometry) {
          const Pe = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0, zt = Math.min(z.instanceCount, Pe);
          tt.renderInstances(Ze, Rt, zt);
        } else tt.render(Ze, Rt);
      };
      function at(T, N, z) {
        T.transparent === true && T.side === $n && T.forceSinglePass === false ? (T.side = ln, T.needsUpdate = true, ra(T, N, z), T.side = Ai, T.needsUpdate = true, ra(T, N, z), T.side = $n) : ra(T, N, z);
      }
      this.compile = function(T, N, z = null) {
        z === null && (z = T), p = We.get(z), p.init(N), v.push(p), z.traverseVisible(function(U) {
          U.isLight && U.layers.test(N.layers) && (p.pushLight(U), U.castShadow && p.pushShadow(U));
        }), T !== z && T.traverseVisible(function(U) {
          U.isLight && U.layers.test(N.layers) && (p.pushLight(U), U.castShadow && p.pushShadow(U));
        }), p.setupLights();
        const k = /* @__PURE__ */ new Set();
        return T.traverse(function(U) {
          if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite)) return;
          const ne = U.material;
          if (ne) if (Array.isArray(ne)) for (let de = 0; de < ne.length; de++) {
            const ve = ne[de];
            at(ve, z, U), k.add(ve);
          }
          else at(ne, z, U), k.add(ne);
        }), v.pop(), p = null, k;
      }, this.compileAsync = function(T, N, z = null) {
        const k = this.compile(T, N, z);
        return new Promise((U) => {
          function ne() {
            if (k.forEach(function(de) {
              fe.get(de).currentProgram.isReady() && k.delete(de);
            }), k.size === 0) {
              U(T);
              return;
            }
            setTimeout(ne, 10);
          }
          te.get("KHR_parallel_shader_compile") !== null ? ne() : setTimeout(ne, 10);
        });
      };
      let Un = null;
      function oi(T) {
        Un && Un(T);
      }
      function Uh() {
        tr.stop();
      }
      function Oh() {
        tr.start();
      }
      const tr = new Rp();
      tr.setAnimationLoop(oi), typeof self < "u" && tr.setContext(self), this.setAnimationLoop = function(T) {
        Un = T, W.setAnimationLoop(T), T === null ? tr.stop() : tr.start();
      }, W.addEventListener("sessionstart", Uh), W.addEventListener("sessionend", Oh), this.render = function(T, N) {
        if (N !== void 0 && N.isCamera !== true) {
          console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
          return;
        }
        if (w === true) return;
        if (T.matrixWorldAutoUpdate === true && T.updateMatrixWorld(), N.parent === null && N.matrixWorldAutoUpdate === true && N.updateMatrixWorld(), W.enabled === true && W.isPresenting === true && (W.cameraAutoUpdate === true && W.updateCamera(N), N = W.getCamera()), T.isScene === true && T.onBeforeRender(x, T, N, P), p = We.get(T, v.length), p.init(N), v.push(p), Ae.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), X.setFromProjectionMatrix(Ae), Ee = this.localClippingEnabled, ie = re.init(this.clippingPlanes, Ee), m = _e.get(T, y.length), m.init(), y.push(m), W.enabled === true && W.isPresenting === true) {
          const ne = x.xr.getDepthSensingMesh();
          ne !== null && vl(ne, N, -1 / 0, x.sortObjects);
        }
        vl(T, N, 0, x.sortObjects), m.finish(), x.sortObjects === true && m.sort(oe, ce), Q = W.enabled === false || W.isPresenting === false || W.hasDepthSensing() === false, Q && De.addToRenderList(m, T), this.info.render.frame++, ie === true && re.beginShadows();
        const z = p.state.shadowsArray;
        ye.render(z, T, N), ie === true && re.endShadows(), this.info.autoReset === true && this.info.reset();
        const k = m.opaque, U = m.transmissive;
        if (p.setupLights(), N.isArrayCamera) {
          const ne = N.cameras;
          if (U.length > 0) for (let de = 0, ve = ne.length; de < ve; de++) {
            const Me = ne[de];
            Bh(k, U, T, Me);
          }
          Q && De.render(T);
          for (let de = 0, ve = ne.length; de < ve; de++) {
            const Me = ne[de];
            Fh(m, T, Me, Me.viewport);
          }
        } else U.length > 0 && Bh(k, U, T, N), Q && De.render(T), Fh(m, T, N);
        P !== null && A === 0 && (C.updateMultisampleRenderTarget(P), C.updateRenderTargetMipmap(P)), T.isScene === true && T.onAfterRender(x, T, N), mt.resetDefaultState(), S = -1, M = null, v.pop(), v.length > 0 ? (p = v[v.length - 1], ie === true && re.setGlobalState(x.clippingPlanes, p.state.camera)) : p = null, y.pop(), y.length > 0 ? m = y[y.length - 1] : m = null;
      };
      function vl(T, N, z, k) {
        if (T.visible === false) return;
        if (T.layers.test(N.layers)) {
          if (T.isGroup) z = T.renderOrder;
          else if (T.isLOD) T.autoUpdate === true && T.update(N);
          else if (T.isLight) p.pushLight(T), T.castShadow && p.pushShadow(T);
          else if (T.isSprite) {
            if (!T.frustumCulled || X.intersectsSprite(T)) {
              k && we.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ae);
              const de = $.update(T), ve = T.material;
              ve.visible && m.push(T, de, ve, z, we.z, null);
            }
          } else if ((T.isMesh || T.isLine || T.isPoints) && (!T.frustumCulled || X.intersectsObject(T))) {
            const de = $.update(T), ve = T.material;
            if (k && (T.boundingSphere !== void 0 ? (T.boundingSphere === null && T.computeBoundingSphere(), we.copy(T.boundingSphere.center)) : (de.boundingSphere === null && de.computeBoundingSphere(), we.copy(de.boundingSphere.center)), we.applyMatrix4(T.matrixWorld).applyMatrix4(Ae)), Array.isArray(ve)) {
              const Me = de.groups;
              for (let Ue = 0, Oe = Me.length; Ue < Oe; Ue++) {
                const Re = Me[Ue], Ze = ve[Re.materialIndex];
                Ze && Ze.visible && m.push(T, de, Ze, z, we.z, Re);
              }
            } else ve.visible && m.push(T, de, ve, z, we.z, null);
          }
        }
        const ne = T.children;
        for (let de = 0, ve = ne.length; de < ve; de++) vl(ne[de], N, z, k);
      }
      function Fh(T, N, z, k) {
        const U = T.opaque, ne = T.transmissive, de = T.transparent;
        p.setupLightsView(z), ie === true && re.setGlobalState(x.clippingPlanes, z), k && se.viewport(L.copy(k)), U.length > 0 && ia(U, N, z), ne.length > 0 && ia(ne, N, z), de.length > 0 && ia(de, N, z), se.buffers.depth.setTest(true), se.buffers.depth.setMask(true), se.buffers.color.setMask(true), se.setPolygonOffset(false);
      }
      function Bh(T, N, z, k) {
        if ((z.isScene === true ? z.overrideMaterial : null) !== null) return;
        p.state.transmissionRenderTarget[k.id] === void 0 && (p.state.transmissionRenderTarget[k.id] = new Wn(1, 1, {
          generateMipmaps: true,
          type: te.has("EXT_color_buffer_half_float") || te.has("EXT_color_buffer_float") ? bi : Ci,
          minFilter: Si,
          samples: 4,
          stencilBuffer: s,
          resolveDepthBuffer: false,
          resolveStencilBuffer: false,
          colorSpace: $e.workingColorSpace
        }));
        const ne = p.state.transmissionRenderTarget[k.id], de = k.viewport || L;
        ne.setSize(de.z * x.transmissionResolutionScale, de.w * x.transmissionResolutionScale);
        const ve = x.getRenderTarget();
        x.setRenderTarget(ne), x.getClearColor(V), q = x.getClearAlpha(), q < 1 && x.setClearColor(16777215, 0.5), x.clear(), Q && De.render(z);
        const Me = x.toneMapping;
        x.toneMapping = $i;
        const Ue = k.viewport;
        if (k.viewport !== void 0 && (k.viewport = void 0), p.setupLightsView(k), ie === true && re.setGlobalState(x.clippingPlanes, k), ia(T, z, k), C.updateMultisampleRenderTarget(ne), C.updateRenderTargetMipmap(ne), te.has("WEBGL_multisampled_render_to_texture") === false) {
          let Oe = false;
          for (let Re = 0, Ze = N.length; Re < Ze; Re++) {
            const rt = N[Re], Rt = rt.object, Tt = rt.geometry, tt = rt.material, Pe = rt.group;
            if (tt.side === $n && Rt.layers.test(k.layers)) {
              const zt = tt.side;
              tt.side = ln, tt.needsUpdate = true, zh(Rt, z, k, Tt, tt, Pe), tt.side = zt, tt.needsUpdate = true, Oe = true;
            }
          }
          Oe === true && (C.updateMultisampleRenderTarget(ne), C.updateRenderTargetMipmap(ne));
        }
        x.setRenderTarget(ve), x.setClearColor(V, q), Ue !== void 0 && (k.viewport = Ue), x.toneMapping = Me;
      }
      function ia(T, N, z) {
        const k = N.isScene === true ? N.overrideMaterial : null;
        for (let U = 0, ne = T.length; U < ne; U++) {
          const de = T[U], ve = de.object, Me = de.geometry, Ue = k === null ? de.material : k, Oe = de.group;
          ve.layers.test(z.layers) && zh(ve, N, z, Me, Ue, Oe);
        }
      }
      function zh(T, N, z, k, U, ne) {
        T.onBeforeRender(x, N, z, k, U, ne), T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, T.matrixWorld), T.normalMatrix.getNormalMatrix(T.modelViewMatrix), U.onBeforeRender(x, N, z, k, T, ne), U.transparent === true && U.side === $n && U.forceSinglePass === false ? (U.side = ln, U.needsUpdate = true, x.renderBufferDirect(z, N, k, U, T, ne), U.side = Ai, U.needsUpdate = true, x.renderBufferDirect(z, N, k, U, T, ne), U.side = $n) : x.renderBufferDirect(z, N, k, U, T, ne), T.onAfterRender(x, N, z, k, U, ne);
      }
      function ra(T, N, z) {
        N.isScene !== true && (N = nt);
        const k = fe.get(T), U = p.state.lights, ne = p.state.shadowsArray, de = U.state.version, ve = Te.getParameters(T, U.state, ne, N, z), Me = Te.getProgramCacheKey(ve);
        let Ue = k.programs;
        k.environment = T.isMeshStandardMaterial ? N.environment : null, k.fog = N.fog, k.envMap = (T.isMeshStandardMaterial ? F : E).get(T.envMap || k.environment), k.envMapRotation = k.environment !== null && T.envMap === null ? N.environmentRotation : T.envMapRotation, Ue === void 0 && (T.addEventListener("dispose", Be), Ue = /* @__PURE__ */ new Map(), k.programs = Ue);
        let Oe = Ue.get(Me);
        if (Oe !== void 0) {
          if (k.currentProgram === Oe && k.lightsStateVersion === de) return Vh(T, ve), Oe;
        } else ve.uniforms = Te.getUniforms(T), T.onBeforeCompile(ve, x), Oe = Te.acquireProgram(ve, Me), Ue.set(Me, Oe), k.uniforms = ve.uniforms;
        const Re = k.uniforms;
        return (!T.isShaderMaterial && !T.isRawShaderMaterial || T.clipping === true) && (Re.clippingPlanes = re.uniform), Vh(T, ve), k.needsLights = sg(T), k.lightsStateVersion = de, k.needsLights && (Re.ambientLightColor.value = U.state.ambient, Re.lightProbe.value = U.state.probe, Re.directionalLights.value = U.state.directional, Re.directionalLightShadows.value = U.state.directionalShadow, Re.spotLights.value = U.state.spot, Re.spotLightShadows.value = U.state.spotShadow, Re.rectAreaLights.value = U.state.rectArea, Re.ltc_1.value = U.state.rectAreaLTC1, Re.ltc_2.value = U.state.rectAreaLTC2, Re.pointLights.value = U.state.point, Re.pointLightShadows.value = U.state.pointShadow, Re.hemisphereLights.value = U.state.hemi, Re.directionalShadowMap.value = U.state.directionalShadowMap, Re.directionalShadowMatrix.value = U.state.directionalShadowMatrix, Re.spotShadowMap.value = U.state.spotShadowMap, Re.spotLightMatrix.value = U.state.spotLightMatrix, Re.spotLightMap.value = U.state.spotLightMap, Re.pointShadowMap.value = U.state.pointShadowMap, Re.pointShadowMatrix.value = U.state.pointShadowMatrix), k.currentProgram = Oe, k.uniformsList = null, Oe;
      }
      function kh(T) {
        if (T.uniformsList === null) {
          const N = T.currentProgram.getUniforms();
          T.uniformsList = Wa.seqWithValue(N.seq, T.uniforms);
        }
        return T.uniformsList;
      }
      function Vh(T, N) {
        const z = fe.get(T);
        z.outputColorSpace = N.outputColorSpace, z.batching = N.batching, z.batchingColor = N.batchingColor, z.instancing = N.instancing, z.instancingColor = N.instancingColor, z.instancingMorph = N.instancingMorph, z.skinning = N.skinning, z.morphTargets = N.morphTargets, z.morphNormals = N.morphNormals, z.morphColors = N.morphColors, z.morphTargetsCount = N.morphTargetsCount, z.numClippingPlanes = N.numClippingPlanes, z.numIntersection = N.numClipIntersection, z.vertexAlphas = N.vertexAlphas, z.vertexTangents = N.vertexTangents, z.toneMapping = N.toneMapping;
      }
      function ig(T, N, z, k, U) {
        N.isScene !== true && (N = nt), C.resetTextureUnits();
        const ne = N.fog, de = k.isMeshStandardMaterial ? N.environment : null, ve = P === null ? x.outputColorSpace : P.isXRRenderTarget === true ? P.texture.colorSpace : sn, Me = (k.isMeshStandardMaterial ? F : E).get(k.envMap || de), Ue = k.vertexColors === true && !!z.attributes.color && z.attributes.color.itemSize === 4, Oe = !!z.attributes.tangent && (!!k.normalMap || k.anisotropy > 0), Re = !!z.morphAttributes.position, Ze = !!z.morphAttributes.normal, rt = !!z.morphAttributes.color;
        let Rt = $i;
        k.toneMapped && (P === null || P.isXRRenderTarget === true) && (Rt = x.toneMapping);
        const Tt = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, tt = Tt !== void 0 ? Tt.length : 0, Pe = fe.get(k), zt = p.state.lights;
        if (ie === true && (Ee === true || T !== M)) {
          const Zt = T === M && k.id === S;
          re.setState(k, T, Zt);
        }
        let st = false;
        k.version === Pe.__version ? (Pe.needsLights && Pe.lightsStateVersion !== zt.state.version || Pe.outputColorSpace !== ve || U.isBatchedMesh && Pe.batching === false || !U.isBatchedMesh && Pe.batching === true || U.isBatchedMesh && Pe.batchingColor === true && U.colorTexture === null || U.isBatchedMesh && Pe.batchingColor === false && U.colorTexture !== null || U.isInstancedMesh && Pe.instancing === false || !U.isInstancedMesh && Pe.instancing === true || U.isSkinnedMesh && Pe.skinning === false || !U.isSkinnedMesh && Pe.skinning === true || U.isInstancedMesh && Pe.instancingColor === true && U.instanceColor === null || U.isInstancedMesh && Pe.instancingColor === false && U.instanceColor !== null || U.isInstancedMesh && Pe.instancingMorph === true && U.morphTexture === null || U.isInstancedMesh && Pe.instancingMorph === false && U.morphTexture !== null || Pe.envMap !== Me || k.fog === true && Pe.fog !== ne || Pe.numClippingPlanes !== void 0 && (Pe.numClippingPlanes !== re.numPlanes || Pe.numIntersection !== re.numIntersection) || Pe.vertexAlphas !== Ue || Pe.vertexTangents !== Oe || Pe.morphTargets !== Re || Pe.morphNormals !== Ze || Pe.morphColors !== rt || Pe.toneMapping !== Rt || Pe.morphTargetsCount !== tt) && (st = true) : (st = true, Pe.__version = k.version);
        let On = Pe.currentProgram;
        st === true && (On = ra(k, N, U));
        let Gr = false, mn = false, no = false;
        const gt = On.getUniforms(), wn = Pe.uniforms;
        if (se.useProgram(On.program) && (Gr = true, mn = true, no = true), k.id !== S && (S = k.id, mn = true), Gr || M !== T) {
          se.buffers.depth.getReversed() ? (ae.copy(T.projectionMatrix), __(ae), x_(ae), gt.setValue(R, "projectionMatrix", ae)) : gt.setValue(R, "projectionMatrix", T.projectionMatrix), gt.setValue(R, "viewMatrix", T.matrixWorldInverse);
          const on = gt.map.cameraPosition;
          on !== void 0 && on.setValue(R, je.setFromMatrixPosition(T.matrixWorld)), xe.logarithmicDepthBuffer && gt.setValue(R, "logDepthBufFC", 2 / (Math.log(T.far + 1) / Math.LN2)), (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial) && gt.setValue(R, "isOrthographic", T.isOrthographicCamera === true), M !== T && (M = T, mn = true, no = true);
        }
        if (U.isSkinnedMesh) {
          gt.setOptional(R, U, "bindMatrix"), gt.setOptional(R, U, "bindMatrixInverse");
          const Zt = U.skeleton;
          Zt && (Zt.boneTexture === null && Zt.computeBoneTexture(), gt.setValue(R, "boneTexture", Zt.boneTexture, C));
        }
        U.isBatchedMesh && (gt.setOptional(R, U, "batchingTexture"), gt.setValue(R, "batchingTexture", U._matricesTexture, C), gt.setOptional(R, U, "batchingIdTexture"), gt.setValue(R, "batchingIdTexture", U._indirectTexture, C), gt.setOptional(R, U, "batchingColorTexture"), U._colorsTexture !== null && gt.setValue(R, "batchingColorTexture", U._colorsTexture, C));
        const An = z.morphAttributes;
        if ((An.position !== void 0 || An.normal !== void 0 || An.color !== void 0) && Ne.update(U, z, On), (mn || Pe.receiveShadow !== U.receiveShadow) && (Pe.receiveShadow = U.receiveShadow, gt.setValue(R, "receiveShadow", U.receiveShadow)), k.isMeshGouraudMaterial && k.envMap !== null && (wn.envMap.value = Me, wn.flipEnvMap.value = Me.isCubeTexture && Me.isRenderTargetTexture === false ? -1 : 1), k.isMeshStandardMaterial && k.envMap === null && N.environment !== null && (wn.envMapIntensity.value = N.environmentIntensity), mn && (gt.setValue(R, "toneMappingExposure", x.toneMappingExposure), Pe.needsLights && rg(wn, no), ne && k.fog === true && ue.refreshFogUniforms(wn, ne), ue.refreshMaterialUniforms(wn, k, H, K, p.state.transmissionRenderTarget[T.id]), Wa.upload(R, kh(Pe), wn, C)), k.isShaderMaterial && k.uniformsNeedUpdate === true && (Wa.upload(R, kh(Pe), wn, C), k.uniformsNeedUpdate = false), k.isSpriteMaterial && gt.setValue(R, "center", U.center), gt.setValue(R, "modelViewMatrix", U.modelViewMatrix), gt.setValue(R, "normalMatrix", U.normalMatrix), gt.setValue(R, "modelMatrix", U.matrixWorld), k.isShaderMaterial || k.isRawShaderMaterial) {
          const Zt = k.uniformsGroups;
          for (let on = 0, yl = Zt.length; on < yl; on++) {
            const nr = Zt[on];
            I.update(nr, On), I.bind(nr, On);
          }
        }
        return On;
      }
      function rg(T, N) {
        T.ambientLightColor.needsUpdate = N, T.lightProbe.needsUpdate = N, T.directionalLights.needsUpdate = N, T.directionalLightShadows.needsUpdate = N, T.pointLights.needsUpdate = N, T.pointLightShadows.needsUpdate = N, T.spotLights.needsUpdate = N, T.spotLightShadows.needsUpdate = N, T.rectAreaLights.needsUpdate = N, T.hemisphereLights.needsUpdate = N;
      }
      function sg(T) {
        return T.isMeshLambertMaterial || T.isMeshToonMaterial || T.isMeshPhongMaterial || T.isMeshStandardMaterial || T.isShadowMaterial || T.isShaderMaterial && T.lights === true;
      }
      this.getActiveCubeFace = function() {
        return b;
      }, this.getActiveMipmapLevel = function() {
        return A;
      }, this.getRenderTarget = function() {
        return P;
      }, this.setRenderTargetTextures = function(T, N, z) {
        fe.get(T.texture).__webglTexture = N, fe.get(T.depthTexture).__webglTexture = z;
        const k = fe.get(T);
        k.__hasExternalTextures = true, k.__autoAllocateDepthBuffer = z === void 0, k.__autoAllocateDepthBuffer || te.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), k.__useRenderToTexture = false);
      }, this.setRenderTargetFramebuffer = function(T, N) {
        const z = fe.get(T);
        z.__webglFramebuffer = N, z.__useDefaultFramebuffer = N === void 0;
      };
      const og = R.createFramebuffer();
      this.setRenderTarget = function(T, N = 0, z = 0) {
        P = T, b = N, A = z;
        let k = true, U = null, ne = false, de = false;
        if (T) {
          const Me = fe.get(T);
          if (Me.__useDefaultFramebuffer !== void 0) se.bindFramebuffer(R.FRAMEBUFFER, null), k = false;
          else if (Me.__webglFramebuffer === void 0) C.setupRenderTarget(T);
          else if (Me.__hasExternalTextures) C.rebindTextures(T, fe.get(T.texture).__webglTexture, fe.get(T.depthTexture).__webglTexture);
          else if (T.depthBuffer) {
            const Re = T.depthTexture;
            if (Me.__boundDepthTexture !== Re) {
              if (Re !== null && fe.has(Re) && (T.width !== Re.image.width || T.height !== Re.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
              C.setupDepthRenderbuffer(T);
            }
          }
          const Ue = T.texture;
          (Ue.isData3DTexture || Ue.isDataArrayTexture || Ue.isCompressedArrayTexture) && (de = true);
          const Oe = fe.get(T).__webglFramebuffer;
          T.isWebGLCubeRenderTarget ? (Array.isArray(Oe[N]) ? U = Oe[N][z] : U = Oe[N], ne = true) : T.samples > 0 && C.useMultisampledRTT(T) === false ? U = fe.get(T).__webglMultisampledFramebuffer : Array.isArray(Oe) ? U = Oe[z] : U = Oe, L.copy(T.viewport), G.copy(T.scissor), O = T.scissorTest;
        } else L.copy(ge).multiplyScalar(H).floor(), G.copy(Le).multiplyScalar(H).floor(), O = Ke;
        if (z !== 0 && (U = og), se.bindFramebuffer(R.FRAMEBUFFER, U) && k && se.drawBuffers(T, U), se.viewport(L), se.scissor(G), se.setScissorTest(O), ne) {
          const Me = fe.get(T.texture);
          R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + N, Me.__webglTexture, z);
        } else if (de) {
          const Me = fe.get(T.texture), Ue = N;
          R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, Me.__webglTexture, z, Ue);
        } else if (T !== null && z !== 0) {
          const Me = fe.get(T.texture);
          R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, Me.__webglTexture, z);
        }
        S = -1;
      }, this.readRenderTargetPixels = function(T, N, z, k, U, ne, de) {
        if (!(T && T.isWebGLRenderTarget)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
          return;
        }
        let ve = fe.get(T).__webglFramebuffer;
        if (T.isWebGLCubeRenderTarget && de !== void 0 && (ve = ve[de]), ve) {
          se.bindFramebuffer(R.FRAMEBUFFER, ve);
          try {
            const Me = T.texture, Ue = Me.format, Oe = Me.type;
            if (!xe.textureFormatReadable(Ue)) {
              console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
              return;
            }
            if (!xe.textureTypeReadable(Oe)) {
              console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
              return;
            }
            N >= 0 && N <= T.width - k && z >= 0 && z <= T.height - U && R.readPixels(N, z, k, U, ke.convert(Ue), ke.convert(Oe), ne);
          } finally {
            const Me = P !== null ? fe.get(P).__webglFramebuffer : null;
            se.bindFramebuffer(R.FRAMEBUFFER, Me);
          }
        }
      }, this.readRenderTargetPixelsAsync = async function(T, N, z, k, U, ne, de) {
        if (!(T && T.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let ve = fe.get(T).__webglFramebuffer;
        if (T.isWebGLCubeRenderTarget && de !== void 0 && (ve = ve[de]), ve) {
          const Me = T.texture, Ue = Me.format, Oe = Me.type;
          if (!xe.textureFormatReadable(Ue)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!xe.textureTypeReadable(Oe)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          if (N >= 0 && N <= T.width - k && z >= 0 && z <= T.height - U) {
            se.bindFramebuffer(R.FRAMEBUFFER, ve);
            const Re = R.createBuffer();
            R.bindBuffer(R.PIXEL_PACK_BUFFER, Re), R.bufferData(R.PIXEL_PACK_BUFFER, ne.byteLength, R.STREAM_READ), R.readPixels(N, z, k, U, ke.convert(Ue), ke.convert(Oe), 0);
            const Ze = P !== null ? fe.get(P).__webglFramebuffer : null;
            se.bindFramebuffer(R.FRAMEBUFFER, Ze);
            const rt = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return R.flush(), await g_(R, rt, 4), R.bindBuffer(R.PIXEL_PACK_BUFFER, Re), R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, ne), R.deleteBuffer(Re), R.deleteSync(rt), ne;
          } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
        }
      }, this.copyFramebufferToTexture = function(T, N = null, z = 0) {
        T.isTexture !== true && (os("WebGLRenderer: copyFramebufferToTexture function signature has changed."), N = arguments[0] || null, T = arguments[1]);
        const k = Math.pow(2, -z), U = Math.floor(T.image.width * k), ne = Math.floor(T.image.height * k), de = N !== null ? N.x : 0, ve = N !== null ? N.y : 0;
        C.setTexture2D(T, 0), R.copyTexSubImage2D(R.TEXTURE_2D, z, 0, 0, de, ve, U, ne), se.unbindTexture();
      };
      const ag = R.createFramebuffer(), lg = R.createFramebuffer();
      this.copyTextureToTexture = function(T, N, z = null, k = null, U = 0, ne = null) {
        T.isTexture !== true && (os("WebGLRenderer: copyTextureToTexture function signature has changed."), k = arguments[0] || null, T = arguments[1], N = arguments[2], ne = arguments[3] || 0, z = null), ne === null && (U !== 0 ? (os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), ne = U, U = 0) : ne = 0);
        let de, ve, Me, Ue, Oe, Re, Ze, rt, Rt;
        const Tt = T.isCompressedTexture ? T.mipmaps[ne] : T.image;
        if (z !== null) de = z.max.x - z.min.x, ve = z.max.y - z.min.y, Me = z.isBox3 ? z.max.z - z.min.z : 1, Ue = z.min.x, Oe = z.min.y, Re = z.isBox3 ? z.min.z : 0;
        else {
          const An = Math.pow(2, -U);
          de = Math.floor(Tt.width * An), ve = Math.floor(Tt.height * An), T.isDataArrayTexture ? Me = Tt.depth : T.isData3DTexture ? Me = Math.floor(Tt.depth * An) : Me = 1, Ue = 0, Oe = 0, Re = 0;
        }
        k !== null ? (Ze = k.x, rt = k.y, Rt = k.z) : (Ze = 0, rt = 0, Rt = 0);
        const tt = ke.convert(N.format), Pe = ke.convert(N.type);
        let zt;
        N.isData3DTexture ? (C.setTexture3D(N, 0), zt = R.TEXTURE_3D) : N.isDataArrayTexture || N.isCompressedArrayTexture ? (C.setTexture2DArray(N, 0), zt = R.TEXTURE_2D_ARRAY) : (C.setTexture2D(N, 0), zt = R.TEXTURE_2D), R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, N.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, N.unpackAlignment);
        const st = R.getParameter(R.UNPACK_ROW_LENGTH), On = R.getParameter(R.UNPACK_IMAGE_HEIGHT), Gr = R.getParameter(R.UNPACK_SKIP_PIXELS), mn = R.getParameter(R.UNPACK_SKIP_ROWS), no = R.getParameter(R.UNPACK_SKIP_IMAGES);
        R.pixelStorei(R.UNPACK_ROW_LENGTH, Tt.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, Tt.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Ue), R.pixelStorei(R.UNPACK_SKIP_ROWS, Oe), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Re);
        const gt = T.isDataArrayTexture || T.isData3DTexture, wn = N.isDataArrayTexture || N.isData3DTexture;
        if (T.isDepthTexture) {
          const An = fe.get(T), Zt = fe.get(N), on = fe.get(An.__renderTarget), yl = fe.get(Zt.__renderTarget);
          se.bindFramebuffer(R.READ_FRAMEBUFFER, on.__webglFramebuffer), se.bindFramebuffer(R.DRAW_FRAMEBUFFER, yl.__webglFramebuffer);
          for (let nr = 0; nr < Me; nr++) gt && (R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, fe.get(T).__webglTexture, U, Re + nr), R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, fe.get(N).__webglTexture, ne, Rt + nr)), R.blitFramebuffer(Ue, Oe, de, ve, Ze, rt, de, ve, R.DEPTH_BUFFER_BIT, R.NEAREST);
          se.bindFramebuffer(R.READ_FRAMEBUFFER, null), se.bindFramebuffer(R.DRAW_FRAMEBUFFER, null);
        } else if (U !== 0 || T.isRenderTargetTexture || fe.has(T)) {
          const An = fe.get(T), Zt = fe.get(N);
          se.bindFramebuffer(R.READ_FRAMEBUFFER, ag), se.bindFramebuffer(R.DRAW_FRAMEBUFFER, lg);
          for (let on = 0; on < Me; on++) gt ? R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, An.__webglTexture, U, Re + on) : R.framebufferTexture2D(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, An.__webglTexture, U), wn ? R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, Zt.__webglTexture, ne, Rt + on) : R.framebufferTexture2D(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, Zt.__webglTexture, ne), U !== 0 ? R.blitFramebuffer(Ue, Oe, de, ve, Ze, rt, de, ve, R.COLOR_BUFFER_BIT, R.NEAREST) : wn ? R.copyTexSubImage3D(zt, ne, Ze, rt, Rt + on, Ue, Oe, de, ve) : R.copyTexSubImage2D(zt, ne, Ze, rt, Ue, Oe, de, ve);
          se.bindFramebuffer(R.READ_FRAMEBUFFER, null), se.bindFramebuffer(R.DRAW_FRAMEBUFFER, null);
        } else wn ? T.isDataTexture || T.isData3DTexture ? R.texSubImage3D(zt, ne, Ze, rt, Rt, de, ve, Me, tt, Pe, Tt.data) : N.isCompressedArrayTexture ? R.compressedTexSubImage3D(zt, ne, Ze, rt, Rt, de, ve, Me, tt, Tt.data) : R.texSubImage3D(zt, ne, Ze, rt, Rt, de, ve, Me, tt, Pe, Tt) : T.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, ne, Ze, rt, de, ve, tt, Pe, Tt.data) : T.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, ne, Ze, rt, Tt.width, Tt.height, tt, Tt.data) : R.texSubImage2D(R.TEXTURE_2D, ne, Ze, rt, de, ve, tt, Pe, Tt);
        R.pixelStorei(R.UNPACK_ROW_LENGTH, st), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, On), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Gr), R.pixelStorei(R.UNPACK_SKIP_ROWS, mn), R.pixelStorei(R.UNPACK_SKIP_IMAGES, no), ne === 0 && N.generateMipmaps && R.generateMipmap(zt), se.unbindTexture();
      }, this.copyTextureToTexture3D = function(T, N, z = null, k = null, U = 0) {
        return T.isTexture !== true && (os("WebGLRenderer: copyTextureToTexture3D function signature has changed."), z = arguments[0] || null, k = arguments[1] || null, T = arguments[2], N = arguments[3], U = arguments[4] || 0), os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(T, N, z, k, U);
      }, this.initRenderTarget = function(T) {
        fe.get(T).__webglFramebuffer === void 0 && C.setupRenderTarget(T);
      }, this.initTexture = function(T) {
        T.isCubeTexture ? C.setTextureCube(T, 0) : T.isData3DTexture ? C.setTexture3D(T, 0) : T.isDataArrayTexture || T.isCompressedArrayTexture ? C.setTexture2DArray(T, 0) : C.setTexture2D(T, 0), se.unbindTexture();
      }, this.resetState = function() {
        b = 0, A = 0, P = null, se.reset(), mt.reset();
      }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
      }));
    }
    get coordinateSystem() {
      return Mi;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(e) {
      this._outputColorSpace = e;
      const t = this.getContext();
      t.drawingBufferColorspace = $e._getDrawingBufferColorSpace(e), t.unpackColorSpace = $e._getUnpackColorSpace();
    }
  }
  function df(r, e) {
    if (e === Vg) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
    if (e === tu || e === np) {
      let t = r.getIndex();
      if (t === null) {
        const o = [], a = r.getAttribute("position");
        if (a !== void 0) {
          for (let l = 0; l < a.count; l++) o.push(l);
          r.setIndex(o), t = r.getIndex();
        } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
      }
      const n = t.count - 2, i = [];
      if (e === tu) for (let o = 1; o <= n; o++) i.push(t.getX(0)), i.push(t.getX(o)), i.push(t.getX(o + 1));
      else for (let o = 0; o < n; o++) o % 2 === 0 ? (i.push(t.getX(o)), i.push(t.getX(o + 1)), i.push(t.getX(o + 2))) : (i.push(t.getX(o + 2)), i.push(t.getX(o + 1)), i.push(t.getX(o)));
      i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
      const s = r.clone();
      return s.setIndex(i), s.clearGroups(), s;
    } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
  }
  class YM extends Or {
    constructor(e) {
      super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
        return new JM(t);
      }), this.register(function(t) {
        return new QM(t);
      }), this.register(function(t) {
        return new lE(t);
      }), this.register(function(t) {
        return new cE(t);
      }), this.register(function(t) {
        return new uE(t);
      }), this.register(function(t) {
        return new tE(t);
      }), this.register(function(t) {
        return new nE(t);
      }), this.register(function(t) {
        return new iE(t);
      }), this.register(function(t) {
        return new rE(t);
      }), this.register(function(t) {
        return new ZM(t);
      }), this.register(function(t) {
        return new sE(t);
      }), this.register(function(t) {
        return new eE(t);
      }), this.register(function(t) {
        return new aE(t);
      }), this.register(function(t) {
        return new oE(t);
      }), this.register(function(t) {
        return new KM(t);
      }), this.register(function(t) {
        return new hE(t);
      }), this.register(function(t) {
        return new dE(t);
      });
    }
    load(e, t, n, i) {
      const s = this;
      let o;
      if (this.resourcePath !== "") o = this.resourcePath;
      else if (this.path !== "") {
        const c = Eo.extractUrlBase(e);
        o = Eo.resolveURL(c, this.path);
      } else o = Eo.extractUrlBase(e);
      this.manager.itemStart(e);
      const a = function(c) {
        i ? i(c) : console.error(c), s.manager.itemError(e), s.manager.itemEnd(e);
      }, l = new Qu(this.manager);
      l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
        try {
          s.parse(c, o, function(u) {
            t(u), s.manager.itemEnd(e);
          }, a);
        } catch (u) {
          a(u);
        }
      }, n, a);
    }
    setDRACOLoader(e) {
      return this.dracoLoader = e, this;
    }
    setKTX2Loader(e) {
      return this.ktx2Loader = e, this;
    }
    setMeshoptDecoder(e) {
      return this.meshoptDecoder = e, this;
    }
    register(e) {
      return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
    }
    unregister(e) {
      return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
    }
    parse(e, t, n, i) {
      let s;
      const o = {}, a = {}, l = new TextDecoder();
      if (typeof e == "string") s = JSON.parse(e);
      else if (e instanceof ArrayBuffer) if (l.decode(new Uint8Array(e, 0, 4)) === Np) {
        try {
          o[Ge.KHR_BINARY_GLTF] = new fE(e);
        } catch (h) {
          i && i(h);
          return;
        }
        s = JSON.parse(o[Ge.KHR_BINARY_GLTF].content);
      } else s = JSON.parse(l.decode(e));
      else s = e;
      if (s.asset === void 0 || s.asset.version[0] < 2) {
        i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
        return;
      }
      const c = new wE(s, {
        path: t || this.resourcePath || "",
        crossOrigin: this.crossOrigin,
        requestHeader: this.requestHeader,
        manager: this.manager,
        ktx2Loader: this.ktx2Loader,
        meshoptDecoder: this.meshoptDecoder
      });
      c.fileLoader.setRequestHeader(this.requestHeader);
      for (let u = 0; u < this.pluginCallbacks.length; u++) {
        const h = this.pluginCallbacks[u](c);
        h.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[h.name] = h, o[h.name] = true;
      }
      if (s.extensionsUsed) for (let u = 0; u < s.extensionsUsed.length; ++u) {
        const h = s.extensionsUsed[u], d = s.extensionsRequired || [];
        switch (h) {
          case Ge.KHR_MATERIALS_UNLIT:
            o[h] = new jM();
            break;
          case Ge.KHR_DRACO_MESH_COMPRESSION:
            o[h] = new pE(s, this.dracoLoader);
            break;
          case Ge.KHR_TEXTURE_TRANSFORM:
            o[h] = new mE();
            break;
          case Ge.KHR_MESH_QUANTIZATION:
            o[h] = new gE();
            break;
          default:
            d.indexOf(h) >= 0 && a[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
        }
      }
      c.setExtensions(o), c.setPlugins(a), c.parse(n, i);
    }
    parseAsync(e, t) {
      const n = this;
      return new Promise(function(i, s) {
        n.parse(e, t, i, s);
      });
    }
  }
  function $M() {
    let r = {};
    return {
      get: function(e) {
        return r[e];
      },
      add: function(e, t) {
        r[e] = t;
      },
      remove: function(e) {
        delete r[e];
      },
      removeAll: function() {
        r = {};
      }
    };
  }
  const Ge = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_MATERIALS_BUMP: "EXT_materials_bump",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_TEXTURE_AVIF: "EXT_texture_avif",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
  };
  class KM {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_LIGHTS_PUNCTUAL, this.cache = {
        refs: {},
        uses: {}
      };
    }
    _markDefs() {
      const e = this.parser, t = this.parser.json.nodes || [];
      for (let n = 0, i = t.length; n < i; n++) {
        const s = t[n];
        s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light);
      }
    }
    _loadLight(e) {
      const t = this.parser, n = "light:" + e;
      let i = t.cache.get(n);
      if (i) return i;
      const s = t.json, l = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
      let c;
      const u = new Ce(16777215);
      l.color !== void 0 && u.setRGB(l.color[0], l.color[1], l.color[2], sn);
      const h = l.range !== void 0 ? l.range : 0;
      switch (l.type) {
        case "directional":
          c = new nh(u), c.target.position.set(0, 0, -1), c.add(c.target);
          break;
        case "point":
          c = new th(u), c.distance = h;
          break;
        case "spot":
          c = new K0(u), c.distance = h, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
          break;
        default:
          throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
      }
      return c.position.set(0, 0, 0), _i(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
    }
    getDependency(e, t) {
      if (e === "light") return this._loadLight(t);
    }
    createNodeAttachment(e) {
      const t = this, n = this.parser, s = n.json.nodes[e], a = (s.extensions && s.extensions[this.name] || {}).light;
      return a === void 0 ? null : this._loadLight(a).then(function(l) {
        return n._getNodeRef(t.cache, a, l);
      });
    }
  }
  class jM {
    constructor() {
      this.name = Ge.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return jn;
    }
    extendParams(e, t, n) {
      const i = [];
      e.color = new Ce(1, 1, 1), e.opacity = 1;
      const s = t.pbrMetallicRoughness;
      if (s) {
        if (Array.isArray(s.baseColorFactor)) {
          const o = s.baseColorFactor;
          e.color.setRGB(o[0], o[1], o[2], sn), e.opacity = o[3];
        }
        s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, kt));
      }
      return Promise.all(i);
    }
  }
  class ZM {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_EMISSIVE_STRENGTH;
    }
    extendMaterialParams(e, t) {
      const i = this.parser.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = i.extensions[this.name].emissiveStrength;
      return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
    }
  }
  class JM {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : ri;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [], o = i.extensions[this.name];
      if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
        const a = o.clearcoatNormalTexture.scale;
        t.clearcoatNormalScale = new ee(a, a);
      }
      return Promise.all(s);
    }
  }
  class QM {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_DISPERSION;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : ri;
    }
    extendMaterialParams(e, t) {
      const i = this.parser.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = i.extensions[this.name];
      return t.dispersion = s.dispersion !== void 0 ? s.dispersion : 0, Promise.resolve();
    }
  }
  class eE {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_IRIDESCENCE;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : ri;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [], o = i.extensions[this.name];
      return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [
        100,
        400
      ]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(s);
    }
  }
  class tE {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : ri;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [];
      t.sheenColor = new Ce(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
      const o = i.extensions[this.name];
      if (o.sheenColorFactor !== void 0) {
        const a = o.sheenColorFactor;
        t.sheenColor.setRGB(a[0], a[1], a[2], sn);
      }
      return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, kt)), o.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(s);
    }
  }
  class nE {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : ri;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [], o = i.extensions[this.name];
      return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(s);
    }
  }
  class iE {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : ri;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [], o = i.extensions[this.name];
      t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
      const a = o.attenuationColor || [
        1,
        1,
        1
      ];
      return t.attenuationColor = new Ce().setRGB(a[0], a[1], a[2], sn), Promise.all(s);
    }
  }
  class rE {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_IOR;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : ri;
    }
    extendMaterialParams(e, t) {
      const i = this.parser.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = i.extensions[this.name];
      return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
    }
  }
  class sE {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : ri;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [], o = i.extensions[this.name];
      t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
      const a = o.specularColorFactor || [
        1,
        1,
        1
      ];
      return t.specularColor = new Ce().setRGB(a[0], a[1], a[2], sn), o.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, kt)), Promise.all(s);
    }
  }
  class oE {
    constructor(e) {
      this.parser = e, this.name = Ge.EXT_MATERIALS_BUMP;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : ri;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [], o = i.extensions[this.name];
      return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && s.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(s);
    }
  }
  class aE {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_ANISOTROPY;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : ri;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [], o = i.extensions[this.name];
      return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(s);
    }
  }
  class lE {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_TEXTURE_BASISU;
    }
    loadTexture(e) {
      const t = this.parser, n = t.json, i = n.textures[e];
      if (!i.extensions || !i.extensions[this.name]) return null;
      const s = i.extensions[this.name], o = t.options.ktx2Loader;
      if (!o) {
        if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
        return null;
      }
      return t.loadTextureImage(e, s.source, o);
    }
  }
  class cE {
    constructor(e) {
      this.parser = e, this.name = Ge.EXT_TEXTURE_WEBP, this.isSupported = null;
    }
    loadTexture(e) {
      const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
      if (!s.extensions || !s.extensions[t]) return null;
      const o = s.extensions[t], a = i.images[o.source];
      let l = n.textureLoader;
      if (a.uri) {
        const c = n.options.manager.getHandler(a.uri);
        c !== null && (l = c);
      }
      return this.detectSupport().then(function(c) {
        if (c) return n.loadTextureImage(e, o.source, l);
        if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
        return n.loadTexture(e);
      });
    }
    detectSupport() {
      return this.isSupported || (this.isSupported = new Promise(function(e) {
        const t = new Image();
        t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
          e(t.height === 1);
        };
      })), this.isSupported;
    }
  }
  class uE {
    constructor(e) {
      this.parser = e, this.name = Ge.EXT_TEXTURE_AVIF, this.isSupported = null;
    }
    loadTexture(e) {
      const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
      if (!s.extensions || !s.extensions[t]) return null;
      const o = s.extensions[t], a = i.images[o.source];
      let l = n.textureLoader;
      if (a.uri) {
        const c = n.options.manager.getHandler(a.uri);
        c !== null && (l = c);
      }
      return this.detectSupport().then(function(c) {
        if (c) return n.loadTextureImage(e, o.source, l);
        if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
        return n.loadTexture(e);
      });
    }
    detectSupport() {
      return this.isSupported || (this.isSupported = new Promise(function(e) {
        const t = new Image();
        t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
          e(t.height === 1);
        };
      })), this.isSupported;
    }
  }
  class hE {
    constructor(e) {
      this.name = Ge.EXT_MESHOPT_COMPRESSION, this.parser = e;
    }
    loadBufferView(e) {
      const t = this.parser.json, n = t.bufferViews[e];
      if (n.extensions && n.extensions[this.name]) {
        const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), o = this.parser.options.meshoptDecoder;
        if (!o || !o.supported) {
          if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
          return null;
        }
        return s.then(function(a) {
          const l = i.byteOffset || 0, c = i.byteLength || 0, u = i.count, h = i.byteStride, d = new Uint8Array(a, l, c);
          return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(u, h, d, i.mode, i.filter).then(function(f) {
            return f.buffer;
          }) : o.ready.then(function() {
            const f = new ArrayBuffer(u * h);
            return o.decodeGltfBuffer(new Uint8Array(f), u, h, d, i.mode, i.filter), f;
          });
        });
      } else return null;
    }
  }
  class dE {
    constructor(e) {
      this.name = Ge.EXT_MESH_GPU_INSTANCING, this.parser = e;
    }
    createNodeMesh(e) {
      const t = this.parser.json, n = t.nodes[e];
      if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
      const i = t.meshes[n.mesh];
      for (const c of i.primitives) if (c.mode !== Ln.TRIANGLES && c.mode !== Ln.TRIANGLE_STRIP && c.mode !== Ln.TRIANGLE_FAN && c.mode !== void 0) return null;
      const o = n.extensions[this.name].attributes, a = [], l = {};
      for (const c in o) a.push(this.parser.getDependency("accessor", o[c]).then((u) => (l[c] = u, l[c])));
      return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
        const u = c.pop(), h = u.isGroup ? u.children : [
          u
        ], d = c[0].count, f = [];
        for (const _ of h) {
          const g = new Fe(), m = new D(), p = new Qi(), y = new D(1, 1, 1), v = new $_(_.geometry, _.material, d);
          for (let x = 0; x < d; x++) l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, x), l.ROTATION && p.fromBufferAttribute(l.ROTATION, x), l.SCALE && y.fromBufferAttribute(l.SCALE, x), v.setMatrixAt(x, g.compose(m, p, y));
          for (const x in l) if (x === "_COLOR_0") {
            const w = l[x];
            v.instanceColor = new iu(w.array, w.itemSize, w.normalized);
          } else x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && _.geometry.setAttribute(x, l[x]);
          vt.prototype.copy.call(v, _), this.parser.assignFinalMaterial(v), f.push(v);
        }
        return u.isGroup ? (u.clear(), u.add(...f), u) : f[0];
      }));
    }
  }
  const Np = "glTF", ho = 12, ff = {
    JSON: 1313821514,
    BIN: 5130562
  };
  class fE {
    constructor(e) {
      this.name = Ge.KHR_BINARY_GLTF, this.content = null, this.body = null;
      const t = new DataView(e, 0, ho), n = new TextDecoder();
      if (this.header = {
        magic: n.decode(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, true),
        length: t.getUint32(8, true)
      }, this.header.magic !== Np) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
      const i = this.header.length - ho, s = new DataView(e, ho);
      let o = 0;
      for (; o < i; ) {
        const a = s.getUint32(o, true);
        o += 4;
        const l = s.getUint32(o, true);
        if (o += 4, l === ff.JSON) {
          const c = new Uint8Array(e, ho + o, a);
          this.content = n.decode(c);
        } else if (l === ff.BIN) {
          const c = ho + o;
          this.body = e.slice(c, c + a);
        }
        o += a;
      }
      if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
  }
  class pE {
    constructor(e, t) {
      if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
      this.name = Ge.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
    }
    decodePrimitive(e, t) {
      const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
      for (const u in o) {
        const h = hu[u] || u.toLowerCase();
        a[h] = o[u];
      }
      for (const u in e.attributes) {
        const h = hu[u] || u.toLowerCase();
        if (o[u] !== void 0) {
          const d = n.accessors[e.attributes[u]], f = ms[d.componentType];
          c[h] = f.name, l[h] = d.normalized === true;
        }
      }
      return t.getDependency("bufferView", s).then(function(u) {
        return new Promise(function(h, d) {
          i.decodeDracoFile(u, function(f) {
            for (const _ in f.attributes) {
              const g = f.attributes[_], m = l[_];
              m !== void 0 && (g.normalized = m);
            }
            h(f);
          }, a, c, sn, d);
        });
      });
    }
  }
  class mE {
    constructor() {
      this.name = Ge.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(e, t) {
      return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
    }
  }
  class gE {
    constructor() {
      this.name = Ge.KHR_MESH_QUANTIZATION;
    }
  }
  class Up extends Jo {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    copySampleValue_(e) {
      const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
      for (let o = 0; o !== i; o++) t[o] = n[s + o];
      return t;
    }
    interpolate_(e, t, n, i) {
      const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, u = i - t, h = (n - t) / u, d = h * h, f = d * h, _ = e * c, g = _ - c, m = -2 * f + 3 * d, p = f - d, y = 1 - m, v = p - d + h;
      for (let x = 0; x !== a; x++) {
        const w = o[g + x + a], b = o[g + x + l] * u, A = o[_ + x + a], P = o[_ + x] * u;
        s[x] = y * w + v * b + m * A + p * P;
      }
      return s;
    }
  }
  const _E = new Qi();
  class xE extends Up {
    interpolate_(e, t, n, i) {
      const s = super.interpolate_(e, t, n, i);
      return _E.fromArray(s).normalize().toArray(s), s;
    }
  }
  const Ln = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6
  }, ms = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
  }, pf = {
    9728: nn,
    9729: Sn,
    9984: qf,
    9985: Fa,
    9986: po,
    9987: Si
  }, mf = {
    33071: Hi,
    33648: ja,
    10497: Es
  }, ic = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
  }, hu = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
  }, Bi = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
  }, vE = {
    CUBICSPLINE: void 0,
    LINEAR: Fo,
    STEP: Oo
  }, rc = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
  };
  function yE(r) {
    return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new ks({
      color: 16777215,
      emissive: 0,
      metalness: 1,
      roughness: 1,
      transparent: false,
      depthTest: true,
      side: Ai
    })), r.DefaultMaterial;
  }
  function cr(r, e, t) {
    for (const n in t.extensions) r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
  }
  function _i(r, e) {
    e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
  }
  function SE(r, e, t) {
    let n = false, i = false, s = false;
    for (let c = 0, u = e.length; c < u; c++) {
      const h = e[c];
      if (h.POSITION !== void 0 && (n = true), h.NORMAL !== void 0 && (i = true), h.COLOR_0 !== void 0 && (s = true), n && i && s) break;
    }
    if (!n && !i && !s) return Promise.resolve(r);
    const o = [], a = [], l = [];
    for (let c = 0, u = e.length; c < u; c++) {
      const h = e[c];
      if (n) {
        const d = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : r.attributes.position;
        o.push(d);
      }
      if (i) {
        const d = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : r.attributes.normal;
        a.push(d);
      }
      if (s) {
        const d = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : r.attributes.color;
        l.push(d);
      }
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(a),
      Promise.all(l)
    ]).then(function(c) {
      const u = c[0], h = c[1], d = c[2];
      return n && (r.morphAttributes.position = u), i && (r.morphAttributes.normal = h), s && (r.morphAttributes.color = d), r.morphTargetsRelative = true, r;
    });
  }
  function ME(r, e) {
    if (r.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++) r.morphTargetInfluences[t] = e.weights[t];
    if (e.extras && Array.isArray(e.extras.targetNames)) {
      const t = e.extras.targetNames;
      if (r.morphTargetInfluences.length === t.length) {
        r.morphTargetDictionary = {};
        for (let n = 0, i = t.length; n < i; n++) r.morphTargetDictionary[t[n]] = n;
      } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
  }
  function EE(r) {
    let e;
    const t = r.extensions && r.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];
    if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + sc(t.attributes) : e = r.indices + ":" + sc(r.attributes) + ":" + r.mode, r.targets !== void 0) for (let n = 0, i = r.targets.length; n < i; n++) e += ":" + sc(r.targets[n]);
    return e;
  }
  function sc(r) {
    let e = "";
    const t = Object.keys(r).sort();
    for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + r[t[n]] + ";";
    return e;
  }
  function du(r) {
    switch (r) {
      case Int8Array:
        return 1 / 127;
      case Uint8Array:
        return 1 / 255;
      case Int16Array:
        return 1 / 32767;
      case Uint16Array:
        return 1 / 65535;
      default:
        throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
    }
  }
  function TE(r) {
    return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : r.search(/\.ktx2($|\?)/i) > 0 || r.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
  }
  const bE = new Fe();
  class wE {
    constructor(e = {}, t = {}) {
      this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new $M(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
        refs: {},
        uses: {}
      }, this.cameraCache = {
        refs: {},
        uses: {}
      }, this.lightCache = {
        refs: {},
        uses: {}
      }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
      let n = false, i = -1, s = false, o = -1;
      if (typeof navigator < "u") {
        const a = navigator.userAgent;
        n = /^((?!chrome|android).)*safari/i.test(a) === true;
        const l = a.match(/Version\/(\d+)/);
        i = n && l ? parseInt(l[1], 10) : -1, s = a.indexOf("Firefox") > -1, o = s ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
      }
      typeof createImageBitmap > "u" || n && i < 17 || s && o < 98 ? this.textureLoader = new Y0(this.options.manager) : this.textureLoader = new J0(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Qu(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
    }
    setExtensions(e) {
      this.extensions = e;
    }
    setPlugins(e) {
      this.plugins = e;
    }
    parse(e, t) {
      const n = this, i = this.json, s = this.extensions;
      this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
        return o._markDefs && o._markDefs();
      }), Promise.all(this._invokeAll(function(o) {
        return o.beforeRoot && o.beforeRoot();
      })).then(function() {
        return Promise.all([
          n.getDependencies("scene"),
          n.getDependencies("animation"),
          n.getDependencies("camera")
        ]);
      }).then(function(o) {
        const a = {
          scene: o[0][i.scene || 0],
          scenes: o[0],
          animations: o[1],
          cameras: o[2],
          asset: i.asset,
          parser: n,
          userData: {}
        };
        return cr(s, a, i), _i(a, i), Promise.all(n._invokeAll(function(l) {
          return l.afterRoot && l.afterRoot(a);
        })).then(function() {
          for (const l of a.scenes) l.updateMatrixWorld();
          e(a);
        });
      }).catch(t);
    }
    _markDefs() {
      const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
      for (let i = 0, s = t.length; i < s; i++) {
        const o = t[i].joints;
        for (let a = 0, l = o.length; a < l; a++) e[o[a]].isBone = true;
      }
      for (let i = 0, s = e.length; i < s; i++) {
        const o = e[i];
        o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = true)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
      }
    }
    _addNodeRef(e, t) {
      t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
    }
    _getNodeRef(e, t, n) {
      if (e.refs[t] <= 1) return n;
      const i = n.clone(), s = (o, a) => {
        const l = this.associations.get(o);
        l != null && this.associations.set(a, l);
        for (const [c, u] of o.children.entries()) s(u, a.children[c]);
      };
      return s(n, i), i.name += "_instance_" + e.uses[t]++, i;
    }
    _invokeOne(e) {
      const t = Object.values(this.plugins);
      t.push(this);
      for (let n = 0; n < t.length; n++) {
        const i = e(t[n]);
        if (i) return i;
      }
      return null;
    }
    _invokeAll(e) {
      const t = Object.values(this.plugins);
      t.unshift(this);
      const n = [];
      for (let i = 0; i < t.length; i++) {
        const s = e(t[i]);
        s && n.push(s);
      }
      return n;
    }
    getDependency(e, t) {
      const n = e + ":" + t;
      let i = this.cache.get(n);
      if (!i) {
        switch (e) {
          case "scene":
            i = this.loadScene(t);
            break;
          case "node":
            i = this._invokeOne(function(s) {
              return s.loadNode && s.loadNode(t);
            });
            break;
          case "mesh":
            i = this._invokeOne(function(s) {
              return s.loadMesh && s.loadMesh(t);
            });
            break;
          case "accessor":
            i = this.loadAccessor(t);
            break;
          case "bufferView":
            i = this._invokeOne(function(s) {
              return s.loadBufferView && s.loadBufferView(t);
            });
            break;
          case "buffer":
            i = this.loadBuffer(t);
            break;
          case "material":
            i = this._invokeOne(function(s) {
              return s.loadMaterial && s.loadMaterial(t);
            });
            break;
          case "texture":
            i = this._invokeOne(function(s) {
              return s.loadTexture && s.loadTexture(t);
            });
            break;
          case "skin":
            i = this.loadSkin(t);
            break;
          case "animation":
            i = this._invokeOne(function(s) {
              return s.loadAnimation && s.loadAnimation(t);
            });
            break;
          case "camera":
            i = this.loadCamera(t);
            break;
          default:
            if (i = this._invokeOne(function(s) {
              return s != this && s.getDependency && s.getDependency(e, t);
            }), !i) throw new Error("Unknown type: " + e);
            break;
        }
        this.cache.add(n, i);
      }
      return i;
    }
    getDependencies(e) {
      let t = this.cache.get(e);
      if (!t) {
        const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
        t = Promise.all(i.map(function(s, o) {
          return n.getDependency(e, o);
        })), this.cache.add(e, t);
      }
      return t;
    }
    loadBuffer(e) {
      const t = this.json.buffers[e], n = this.fileLoader;
      if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
      if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);
      const i = this.options;
      return new Promise(function(s, o) {
        n.load(Eo.resolveURL(t.uri, i.path), s, void 0, function() {
          o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
        });
      });
    }
    loadBufferView(e) {
      const t = this.json.bufferViews[e];
      return this.getDependency("buffer", t.buffer).then(function(n) {
        const i = t.byteLength || 0, s = t.byteOffset || 0;
        return n.slice(s, s + i);
      });
    }
    loadAccessor(e) {
      const t = this, n = this.json, i = this.json.accessors[e];
      if (i.bufferView === void 0 && i.sparse === void 0) {
        const o = ic[i.type], a = ms[i.componentType], l = i.normalized === true, c = new a(i.count * o);
        return Promise.resolve(new rn(c, o, l));
      }
      const s = [];
      return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(o) {
        const a = o[0], l = ic[i.type], c = ms[i.componentType], u = c.BYTES_PER_ELEMENT, h = u * l, d = i.byteOffset || 0, f = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, _ = i.normalized === true;
        let g, m;
        if (f && f !== h) {
          const p = Math.floor(d / f), y = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
          let v = t.cache.get(y);
          v || (g = new c(a, p * f, i.count * f / u), v = new G_(g, f / u), t.cache.add(y, v)), m = new Wu(v, l, d % f / u, _);
        } else a === null ? g = new c(i.count * l) : g = new c(a, d, i.count * l), m = new rn(g, l, _);
        if (i.sparse !== void 0) {
          const p = ic.SCALAR, y = ms[i.sparse.indices.componentType], v = i.sparse.indices.byteOffset || 0, x = i.sparse.values.byteOffset || 0, w = new y(o[1], v, i.sparse.count * p), b = new c(o[2], x, i.sparse.count * l);
          a !== null && (m = new rn(m.array.slice(), m.itemSize, m.normalized)), m.normalized = false;
          for (let A = 0, P = w.length; A < P; A++) {
            const S = w[A];
            if (m.setX(S, b[A * l]), l >= 2 && m.setY(S, b[A * l + 1]), l >= 3 && m.setZ(S, b[A * l + 2]), l >= 4 && m.setW(S, b[A * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
          }
          m.normalized = _;
        }
        return m;
      });
    }
    loadTexture(e) {
      const t = this.json, n = this.options, s = t.textures[e].source, o = t.images[s];
      let a = this.textureLoader;
      if (o.uri) {
        const l = n.manager.getHandler(o.uri);
        l !== null && (a = l);
      }
      return this.loadTextureImage(e, s, a);
    }
    loadTextureImage(e, t, n) {
      const i = this, s = this.json, o = s.textures[e], a = s.images[t], l = (a.uri || a.bufferView) + ":" + o.sampler;
      if (this.textureCache[l]) return this.textureCache[l];
      const c = this.loadImageSource(t, n).then(function(u) {
        u.flipY = false, u.name = o.name || a.name || "", u.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === false && (u.name = a.uri);
        const d = (s.samplers || {})[o.sampler] || {};
        return u.magFilter = pf[d.magFilter] || Sn, u.minFilter = pf[d.minFilter] || Si, u.wrapS = mf[d.wrapS] || Es, u.wrapT = mf[d.wrapT] || Es, u.generateMipmaps = !u.isCompressedTexture && u.minFilter !== nn && u.minFilter !== Sn, i.associations.set(u, {
          textures: e
        }), u;
      }).catch(function() {
        return null;
      });
      return this.textureCache[l] = c, c;
    }
    loadImageSource(e, t) {
      const n = this, i = this.json, s = this.options;
      if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((h) => h.clone());
      const o = i.images[e], a = self.URL || self.webkitURL;
      let l = o.uri || "", c = false;
      if (o.bufferView !== void 0) l = n.getDependency("bufferView", o.bufferView).then(function(h) {
        c = true;
        const d = new Blob([
          h
        ], {
          type: o.mimeType
        });
        return l = a.createObjectURL(d), l;
      });
      else if (o.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
      const u = Promise.resolve(l).then(function(h) {
        return new Promise(function(d, f) {
          let _ = d;
          t.isImageBitmapLoader === true && (_ = function(g) {
            const m = new Nt(g);
            m.needsUpdate = true, d(m);
          }), t.load(Eo.resolveURL(h, s.path), _, void 0, f);
        });
      }).then(function(h) {
        return c === true && a.revokeObjectURL(l), _i(h, o), h.userData.mimeType = o.mimeType || TE(o.uri), h;
      }).catch(function(h) {
        throw console.error("THREE.GLTFLoader: Couldn't load texture", l), h;
      });
      return this.sourceCache[e] = u, u;
    }
    assignTexture(e, t, n, i) {
      const s = this;
      return this.getDependency("texture", n.index).then(function(o) {
        if (!o) return null;
        if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), s.extensions[Ge.KHR_TEXTURE_TRANSFORM]) {
          const a = n.extensions !== void 0 ? n.extensions[Ge.KHR_TEXTURE_TRANSFORM] : void 0;
          if (a) {
            const l = s.associations.get(o);
            o = s.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), s.associations.set(o, l);
          }
        }
        return i !== void 0 && (o.colorSpace = i), e[t] = o, o;
      });
    }
    assignFinalMaterial(e) {
      const t = e.geometry;
      let n = e.material;
      const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
      if (e.isPoints) {
        const a = "PointsMaterial:" + n.uuid;
        let l = this.cache.get(a);
        l || (l = new $u(), Jn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = false, this.cache.add(a, l)), n = l;
      } else if (e.isLine) {
        const a = "LineBasicMaterial:" + n.uuid;
        let l = this.cache.get(a);
        l || (l = new gp(), Jn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l;
      }
      if (i || s || o) {
        let a = "ClonedMaterial:" + n.uuid + ":";
        i && (a += "derivative-tangents:"), s && (a += "vertex-colors:"), o && (a += "flat-shading:");
        let l = this.cache.get(a);
        l || (l = n.clone(), s && (l.vertexColors = true), o && (l.flatShading = true), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(n))), n = l;
      }
      e.material = n;
    }
    getMaterialType() {
      return ks;
    }
    loadMaterial(e) {
      const t = this, n = this.json, i = this.extensions, s = n.materials[e];
      let o;
      const a = {}, l = s.extensions || {}, c = [];
      if (l[Ge.KHR_MATERIALS_UNLIT]) {
        const h = i[Ge.KHR_MATERIALS_UNLIT];
        o = h.getMaterialType(), c.push(h.extendParams(a, s, t));
      } else {
        const h = s.pbrMetallicRoughness || {};
        if (a.color = new Ce(1, 1, 1), a.opacity = 1, Array.isArray(h.baseColorFactor)) {
          const d = h.baseColorFactor;
          a.color.setRGB(d[0], d[1], d[2], sn), a.opacity = d[3];
        }
        h.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", h.baseColorTexture, kt)), a.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, a.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", h.metallicRoughnessTexture))), o = this._invokeOne(function(d) {
          return d.getMaterialType && d.getMaterialType(e);
        }), c.push(Promise.all(this._invokeAll(function(d) {
          return d.extendMaterialParams && d.extendMaterialParams(e, a);
        })));
      }
      s.doubleSided === true && (a.side = $n);
      const u = s.alphaMode || rc.OPAQUE;
      if (u === rc.BLEND ? (a.transparent = true, a.depthWrite = false) : (a.transparent = false, u === rc.MASK && (a.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && o !== jn && (c.push(t.assignTexture(a, "normalMap", s.normalTexture)), a.normalScale = new ee(1, 1), s.normalTexture.scale !== void 0)) {
        const h = s.normalTexture.scale;
        a.normalScale.set(h, h);
      }
      if (s.occlusionTexture !== void 0 && o !== jn && (c.push(t.assignTexture(a, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && o !== jn) {
        const h = s.emissiveFactor;
        a.emissive = new Ce().setRGB(h[0], h[1], h[2], sn);
      }
      return s.emissiveTexture !== void 0 && o !== jn && c.push(t.assignTexture(a, "emissiveMap", s.emissiveTexture, kt)), Promise.all(c).then(function() {
        const h = new o(a);
        return s.name && (h.name = s.name), _i(h, s), t.associations.set(h, {
          materials: e
        }), s.extensions && cr(i, h, s), h;
      });
    }
    createUniqueName(e) {
      const t = ct.sanitizeNodeName(e || "");
      return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
    }
    loadGeometries(e) {
      const t = this, n = this.extensions, i = this.primitiveCache;
      function s(a) {
        return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
          return gf(l, a, t);
        });
      }
      const o = [];
      for (let a = 0, l = e.length; a < l; a++) {
        const c = e[a], u = EE(c), h = i[u];
        if (h) o.push(h.promise);
        else {
          let d;
          c.extensions && c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION] ? d = s(c) : d = gf(new pn(), c, t), i[u] = {
            primitive: c,
            promise: d
          }, o.push(d);
        }
      }
      return Promise.all(o);
    }
    loadMesh(e) {
      const t = this, n = this.json, i = this.extensions, s = n.meshes[e], o = s.primitives, a = [];
      for (let l = 0, c = o.length; l < c; l++) {
        const u = o[l].material === void 0 ? yE(this.cache) : this.getDependency("material", o[l].material);
        a.push(u);
      }
      return a.push(t.loadGeometries(o)), Promise.all(a).then(function(l) {
        const c = l.slice(0, l.length - 1), u = l[l.length - 1], h = [];
        for (let f = 0, _ = u.length; f < _; f++) {
          const g = u[f], m = o[f];
          let p;
          const y = c[f];
          if (m.mode === Ln.TRIANGLES || m.mode === Ln.TRIANGLE_STRIP || m.mode === Ln.TRIANGLE_FAN || m.mode === void 0) p = s.isSkinnedMesh === true ? new X_(g, y) : new Ct(g, y), p.isSkinnedMesh === true && p.normalizeSkinWeights(), m.mode === Ln.TRIANGLE_STRIP ? p.geometry = df(p.geometry, np) : m.mode === Ln.TRIANGLE_FAN && (p.geometry = df(p.geometry, tu));
          else if (m.mode === Ln.LINES) p = new Z_(g, y);
          else if (m.mode === Ln.LINE_STRIP) p = new Yu(g, y);
          else if (m.mode === Ln.LINE_LOOP) p = new J_(g, y);
          else if (m.mode === Ln.POINTS) p = new _p(g, y);
          else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
          Object.keys(p.geometry.morphAttributes).length > 0 && ME(p, s), p.name = t.createUniqueName(s.name || "mesh_" + e), _i(p, s), m.extensions && cr(i, p, m), t.assignFinalMaterial(p), h.push(p);
        }
        for (let f = 0, _ = h.length; f < _; f++) t.associations.set(h[f], {
          meshes: e,
          primitives: f
        });
        if (h.length === 1) return s.extensions && cr(i, h[0], s), h[0];
        const d = new Gi();
        s.extensions && cr(i, d, s), t.associations.set(d, {
          meshes: e
        });
        for (let f = 0, _ = h.length; f < _; f++) d.add(h[f]);
        return d;
      });
    }
    loadCamera(e) {
      let t;
      const n = this.json.cameras[e], i = n[n.type];
      if (!i) {
        console.warn("THREE.GLTFLoader: Missing camera parameters.");
        return;
      }
      return n.type === "perspective" ? t = new en(p_.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new pl(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), _i(t, n), Promise.resolve(t);
    }
    loadSkin(e) {
      const t = this.json.skins[e], n = [];
      for (let i = 0, s = t.joints.length; i < s; i++) n.push(this._loadNodeShallow(t.joints[i]));
      return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
        const s = i.pop(), o = i, a = [], l = [];
        for (let c = 0, u = o.length; c < u; c++) {
          const h = o[c];
          if (h) {
            a.push(h);
            const d = new Fe();
            s !== null && d.fromArray(s.array, c * 16), l.push(d);
          } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
        }
        return new Xu(a, l);
      });
    }
    loadAnimation(e) {
      const t = this.json, n = this, i = t.animations[e], s = i.name ? i.name : "animation_" + e, o = [], a = [], l = [], c = [], u = [];
      for (let h = 0, d = i.channels.length; h < d; h++) {
        const f = i.channels[h], _ = i.samplers[f.sampler], g = f.target, m = g.node, p = i.parameters !== void 0 ? i.parameters[_.input] : _.input, y = i.parameters !== void 0 ? i.parameters[_.output] : _.output;
        g.node !== void 0 && (o.push(this.getDependency("node", m)), a.push(this.getDependency("accessor", p)), l.push(this.getDependency("accessor", y)), c.push(_), u.push(g));
      }
      return Promise.all([
        Promise.all(o),
        Promise.all(a),
        Promise.all(l),
        Promise.all(c),
        Promise.all(u)
      ]).then(function(h) {
        const d = h[0], f = h[1], _ = h[2], g = h[3], m = h[4], p = [];
        for (let y = 0, v = d.length; y < v; y++) {
          const x = d[y], w = f[y], b = _[y], A = g[y], P = m[y];
          if (x === void 0) continue;
          x.updateMatrix && x.updateMatrix();
          const S = n._createAnimationTracks(x, w, b, A, P);
          if (S) for (let M = 0; M < S.length; M++) p.push(S[M]);
        }
        return new k0(s, void 0, p);
      });
    }
    createNodeMesh(e) {
      const t = this.json, n = this, i = t.nodes[e];
      return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
        const o = n._getNodeRef(n.meshCache, i.mesh, s);
        return i.weights !== void 0 && o.traverse(function(a) {
          if (a.isMesh) for (let l = 0, c = i.weights.length; l < c; l++) a.morphTargetInfluences[l] = i.weights[l];
        }), o;
      });
    }
    loadNode(e) {
      const t = this.json, n = this, i = t.nodes[e], s = n._loadNodeShallow(e), o = [], a = i.children || [];
      for (let c = 0, u = a.length; c < u; c++) o.push(n.getDependency("node", a[c]));
      const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
      return Promise.all([
        s,
        Promise.all(o),
        l
      ]).then(function(c) {
        const u = c[0], h = c[1], d = c[2];
        d !== null && u.traverse(function(f) {
          f.isSkinnedMesh && f.bind(d, bE);
        });
        for (let f = 0, _ = h.length; f < _; f++) u.add(h[f]);
        return u;
      });
    }
    _loadNodeShallow(e) {
      const t = this.json, n = this.extensions, i = this;
      if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
      const s = t.nodes[e], o = s.name ? i.createUniqueName(s.name) : "", a = [], l = i._invokeOne(function(c) {
        return c.createNodeMesh && c.createNodeMesh(e);
      });
      return l && a.push(l), s.camera !== void 0 && a.push(i.getDependency("camera", s.camera).then(function(c) {
        return i._getNodeRef(i.cameraCache, s.camera, c);
      })), i._invokeAll(function(c) {
        return c.createNodeAttachment && c.createNodeAttachment(e);
      }).forEach(function(c) {
        a.push(c);
      }), this.nodeCache[e] = Promise.all(a).then(function(c) {
        let u;
        if (s.isBone === true ? u = new pp() : c.length > 1 ? u = new Gi() : c.length === 1 ? u = c[0] : u = new vt(), u !== c[0]) for (let h = 0, d = c.length; h < d; h++) u.add(c[h]);
        if (s.name && (u.userData.name = s.name, u.name = o), _i(u, s), s.extensions && cr(n, u, s), s.matrix !== void 0) {
          const h = new Fe();
          h.fromArray(s.matrix), u.applyMatrix4(h);
        } else s.translation !== void 0 && u.position.fromArray(s.translation), s.rotation !== void 0 && u.quaternion.fromArray(s.rotation), s.scale !== void 0 && u.scale.fromArray(s.scale);
        return i.associations.has(u) || i.associations.set(u, {}), i.associations.get(u).nodes = e, u;
      }), this.nodeCache[e];
    }
    loadScene(e) {
      const t = this.extensions, n = this.json.scenes[e], i = this, s = new Gi();
      n.name && (s.name = i.createUniqueName(n.name)), _i(s, n), n.extensions && cr(t, s, n);
      const o = n.nodes || [], a = [];
      for (let l = 0, c = o.length; l < c; l++) a.push(i.getDependency("node", o[l]));
      return Promise.all(a).then(function(l) {
        for (let u = 0, h = l.length; u < h; u++) s.add(l[u]);
        const c = (u) => {
          const h = /* @__PURE__ */ new Map();
          for (const [d, f] of i.associations) (d instanceof Jn || d instanceof Nt) && h.set(d, f);
          return u.traverse((d) => {
            const f = i.associations.get(d);
            f != null && h.set(d, f);
          }), h;
        };
        return i.associations = c(s), s;
      });
    }
    _createAnimationTracks(e, t, n, i, s) {
      const o = [], a = e.name ? e.name : e.uuid, l = [];
      Bi[s.path] === Bi.weights ? e.traverse(function(d) {
        d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
      }) : l.push(a);
      let c;
      switch (Bi[s.path]) {
        case Bi.weights:
          c = Cs;
          break;
        case Bi.rotation:
          c = Rs;
          break;
        case Bi.position:
        case Bi.scale:
          c = Ps;
          break;
        default:
          switch (n.itemSize) {
            case 1:
              c = Cs;
              break;
            case 2:
            case 3:
            default:
              c = Ps;
              break;
          }
          break;
      }
      const u = i.interpolation !== void 0 ? vE[i.interpolation] : Fo, h = this._getArrayFromAccessor(n);
      for (let d = 0, f = l.length; d < f; d++) {
        const _ = new c(l[d] + "." + Bi[s.path], t.array, h, u);
        i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(_), o.push(_);
      }
      return o;
    }
    _getArrayFromAccessor(e) {
      let t = e.array;
      if (e.normalized) {
        const n = du(t.constructor), i = new Float32Array(t.length);
        for (let s = 0, o = t.length; s < o; s++) i[s] = t[s] * n;
        t = i;
      }
      return t;
    }
    _createCubicSplineTrackInterpolant(e) {
      e.createInterpolant = function(n) {
        const i = this instanceof Rs ? xE : Up;
        return new i(this.times, this.values, this.getValueSize() / 3, n);
      }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
    }
  }
  function AE(r, e, t) {
    const n = e.attributes, i = new Li();
    if (n.POSITION !== void 0) {
      const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
      if (l !== void 0 && c !== void 0) {
        if (i.set(new D(l[0], l[1], l[2]), new D(c[0], c[1], c[2])), a.normalized) {
          const u = du(ms[a.componentType]);
          i.min.multiplyScalar(u), i.max.multiplyScalar(u);
        }
      } else {
        console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        return;
      }
    } else return;
    const s = e.targets;
    if (s !== void 0) {
      const a = new D(), l = new D();
      for (let c = 0, u = s.length; c < u; c++) {
        const h = s[c];
        if (h.POSITION !== void 0) {
          const d = t.json.accessors[h.POSITION], f = d.min, _ = d.max;
          if (f !== void 0 && _ !== void 0) {
            if (l.setX(Math.max(Math.abs(f[0]), Math.abs(_[0]))), l.setY(Math.max(Math.abs(f[1]), Math.abs(_[1]))), l.setZ(Math.max(Math.abs(f[2]), Math.abs(_[2]))), d.normalized) {
              const g = du(ms[d.componentType]);
              l.multiplyScalar(g);
            }
            a.max(l);
          } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        }
      }
      i.expandByVector(a);
    }
    r.boundingBox = i;
    const o = new ni();
    i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = o;
  }
  function gf(r, e, t) {
    const n = e.attributes, i = [];
    function s(o, a) {
      return t.getDependency("accessor", o).then(function(l) {
        r.setAttribute(a, l);
      });
    }
    for (const o in n) {
      const a = hu[o] || o.toLowerCase();
      a in r.attributes || i.push(s(n[o], a));
    }
    if (e.indices !== void 0 && !r.index) {
      const o = t.getDependency("accessor", e.indices).then(function(a) {
        r.setIndex(a);
      });
      i.push(o);
    }
    return $e.workingColorSpace !== sn && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`), _i(r, e), AE(r, e, t), Promise.all(i).then(function() {
      return e.targets !== void 0 ? SE(r, e.targets, t) : r;
    });
  }
  class oh extends Or {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      const s = this, o = new Qu(this.manager);
      o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
        const l = s.parse(JSON.parse(a));
        t && t(l);
      }, n, i);
    }
    parse(e) {
      return new CE(e);
    }
  }
  class CE {
    constructor(e) {
      this.isFont = true, this.type = "Font", this.data = e;
    }
    generateShapes(e, t = 100) {
      const n = [], i = RE(e, t, this.data);
      for (let s = 0, o = i.length; s < o; s++) n.push(...i[s].toShapes());
      return n;
    }
  }
  function RE(r, e, t) {
    const n = Array.from(r), i = e / t.resolution, s = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * i, o = [];
    let a = 0, l = 0;
    for (let c = 0; c < n.length; c++) {
      const u = n[c];
      if (u === `
`) a = 0, l -= s;
      else {
        const h = PE(u, i, a, l, t);
        a += h.offsetX, o.push(h.path);
      }
    }
    return o;
  }
  function PE(r, e, t, n, i) {
    const s = i.glyphs[r] || i.glyphs["?"];
    if (!s) {
      console.error('THREE.Font: character "' + r + '" does not exists in font family ' + i.familyName + ".");
      return;
    }
    const o = new ux();
    let a, l, c, u, h, d, f, _;
    if (s.o) {
      const g = s._cachedOutline || (s._cachedOutline = s.o.split(" "));
      for (let m = 0, p = g.length; m < p; ) switch (g[m++]) {
        case "m":
          a = g[m++] * e + t, l = g[m++] * e + n, o.moveTo(a, l);
          break;
        case "l":
          a = g[m++] * e + t, l = g[m++] * e + n, o.lineTo(a, l);
          break;
        case "q":
          c = g[m++] * e + t, u = g[m++] * e + n, h = g[m++] * e + t, d = g[m++] * e + n, o.quadraticCurveTo(h, d, c, u);
          break;
        case "b":
          c = g[m++] * e + t, u = g[m++] * e + n, h = g[m++] * e + t, d = g[m++] * e + n, f = g[m++] * e + t, _ = g[m++] * e + n, o.bezierCurveTo(h, d, f, _, c, u);
          break;
      }
    }
    return {
      offsetX: s.ha * e,
      path: o
    };
  }
  class ah extends Zu {
    constructor(e, t = {}) {
      const n = t.font;
      if (n === void 0) super();
      else {
        const i = n.generateShapes(e, t.size);
        t.depth === void 0 && (t.depth = 50), t.bevelThickness === void 0 && (t.bevelThickness = 10), t.bevelSize === void 0 && (t.bevelSize = 8), t.bevelEnabled === void 0 && (t.bevelEnabled = false), super(i, t);
      }
      this.type = "TextGeometry";
    }
  }
  function xi(r) {
    if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r;
  }
  function Op(r, e) {
    r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e;
  }
  var En = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  }, Ls = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  }, lh, Ht, xt, Qn = 1e8, Kt = 1 / Qn, fu = Math.PI * 2, LE = fu / 4, DE = 0, Fp = Math.sqrt, IE = Math.cos, NE = Math.sin, Bt = function(e) {
    return typeof e == "string";
  }, bt = function(e) {
    return typeof e == "function";
  }, Ri = function(e) {
    return typeof e == "number";
  }, ch = function(e) {
    return typeof e > "u";
  }, ti = function(e) {
    return typeof e == "object";
  }, cn = function(e) {
    return e !== false;
  }, uh = function() {
    return typeof window < "u";
  }, Ua = function(e) {
    return bt(e) || Bt(e);
  }, Bp = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
  }, jt = Array.isArray, pu = /(?:-?\.?\d|\.)+/gi, zp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, cs = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, oc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, kp = /[+-]=-?[.\d]+/, Vp = /[^,'"\[\]\s]+/gi, UE = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, yt, qn, mu, hh, Tn = {}, nl = {}, Hp, Gp = function(e) {
    return (nl = Ds(e, Tn)) && fn;
  }, dh = function(e, t) {
    return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
  }, Ho = function(e, t) {
    return !t && console.warn(e);
  }, Wp = function(e, t) {
    return e && (Tn[e] = t) && nl && (nl[e] = t) || Tn;
  }, Go = function() {
    return 0;
  }, OE = {
    suppressEvents: true,
    isStart: true,
    kill: false
  }, Xa = {
    suppressEvents: true,
    kill: false
  }, FE = {
    suppressEvents: true
  }, fh = {}, Ki = [], gu = {}, Xp, vn = {}, ac = {}, _f = 30, qa = [], ph = "", mh = function(e) {
    var t = e[0], n, i;
    if (ti(t) || bt(t) || (e = [
      e
    ]), !(n = (t._gsap || {}).harness)) {
      for (i = qa.length; i-- && !qa[i].targetTest(t); ) ;
      n = qa[i];
    }
    for (i = e.length; i--; ) e[i] && (e[i]._gsap || (e[i]._gsap = new mm(e[i], n))) || e.splice(i, 1);
    return e;
  }, Cr = function(e) {
    return e._gsap || mh(In(e))[0]._gsap;
  }, qp = function(e, t, n) {
    return (n = e[t]) && bt(n) ? e[t]() : ch(n) && e.getAttribute && e.getAttribute(t) || n;
  }, un = function(e, t) {
    return (e = e.split(",")).forEach(t) || e;
  }, At = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  }, Dt = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  }, gs = function(e, t) {
    var n = t.charAt(0), i = parseFloat(t.substr(2));
    return e = parseFloat(e), n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i;
  }, BE = function(e, t) {
    for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; ) ;
    return i < n;
  }, il = function() {
    var e = Ki.length, t = Ki.slice(0), n, i;
    for (gu = {}, Ki.length = 0, n = 0; n < e; n++) i = t[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], true)._lazy = 0);
  }, Yp = function(e, t, n, i) {
    Ki.length && !Ht && il(), e.render(t, n, Ht && t < 0 && (e._initted || e._startAt)), Ki.length && !Ht && il();
  }, $p = function(e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Vp).length < 2 ? t : Bt(e) ? e.trim() : e;
  }, Kp = function(e) {
    return e;
  }, bn = function(e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  }, zE = function(e) {
    return function(t, n) {
      for (var i in n) i in t || i === "duration" && e || i === "ease" || (t[i] = n[i]);
    };
  }, Ds = function(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }, xf = function r(e, t) {
    for (var n in t) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = ti(t[n]) ? r(e[n] || (e[n] = {}), t[n]) : t[n]);
    return e;
  }, rl = function(e, t) {
    var n = {}, i;
    for (i in e) i in t || (n[i] = e[i]);
    return n;
  }, To = function(e) {
    var t = e.parent || yt, n = e.keyframes ? zE(jt(e.keyframes)) : bn;
    if (cn(e.inherit)) for (; t; ) n(e, t.vars.defaults), t = t.parent || t._dp;
    return e;
  }, kE = function(e, t) {
    for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n]; ) ;
    return n < 0;
  }, jp = function(e, t, n, i, s) {
    var o = e[i], a;
    if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev;
    return o ? (t._next = o._next, o._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = o, t.parent = t._dp = e, t;
  }, gl = function(e, t, n, i) {
    n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
    var s = t._prev, o = t._next;
    s ? s._next = o : e[n] === t && (e[n] = o), o ? o._prev = s : e[i] === t && (e[i] = s), t._next = t._prev = t.parent = null;
  }, Zi = function(e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
  }, Rr = function(e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0)) for (var n = e; n; ) n._dirty = 1, n = n.parent;
    return e;
  }, VE = function(e) {
    for (var t = e.parent; t && t.parent; ) t._dirty = 1, t.totalDuration(), t = t.parent;
    return e;
  }, _u = function(e, t, n, i) {
    return e._startAt && (Ht ? e._startAt.revert(Xa) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, true, i));
  }, HE = function r(e) {
    return !e || e._ts && r(e.parent);
  }, vf = function(e) {
    return e._repeat ? Is(e._tTime, e = e.duration() + e._rDelay) * e : 0;
  }, Is = function(e, t) {
    var n = Math.floor(e = Dt(e / t));
    return e && n === e ? n - 1 : n;
  }, sl = function(e, t) {
    return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
  }, _l = function(e) {
    return e._end = Dt(e._start + (e._tDur / Math.abs(e._ts || e._rts || Kt) || 0));
  }, xl = function(e, t) {
    var n = e._dp;
    return n && n.smoothChildTiming && e._ts && (e._start = Dt(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), _l(e), n._dirty || Rr(n, e)), e;
  }, Zp = function(e, t) {
    var n;
    if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = sl(e.rawTime(), t), (!t._dur || Qo(0, t.totalDuration(), n) - t._tTime > Kt) && t.render(n, true)), Rr(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
      if (e._dur < e.duration()) for (n = e; n._dp; ) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
      e._zTime = -1e-8;
    }
  }, Kn = function(e, t, n, i) {
    return t.parent && Zi(t), t._start = Dt((Ri(n) ? n : n || e !== yt ? Pn(e, n, t) : e._time) + t._delay), t._end = Dt(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), jp(e, t, "_first", "_last", e._sort ? "_start" : 0), xu(t) || (e._recent = t), i || Zp(e, t), e._ts < 0 && xl(e, e._tTime), e;
  }, Jp = function(e, t) {
    return (Tn.ScrollTrigger || dh("scrollTrigger", t)) && Tn.ScrollTrigger.create(t, e);
  }, Qp = function(e, t, n, i, s) {
    if (_h(e, t, s), !e._initted) return 1;
    if (!n && e._pt && !Ht && (e._dur && e.vars.lazy !== false || !e._dur && e.vars.lazy) && Xp !== yn.frame) return Ki.push(e), e._lazy = [
      s,
      i
    ], 1;
  }, GE = function r(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
  }, xu = function(e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  }, WE = function(e, t, n, i) {
    var s = e.ratio, o = t < 0 || !t && (!e._start && GE(e) && !(!e._initted && xu(e)) || (e._ts < 0 || e._dp._ts < 0) && !xu(e)) ? 0 : 1, a = e._rDelay, l = 0, c, u, h;
    if (a && e._repeat && (l = Qo(0, e._tDur, t), u = Is(l, a), e._yoyo && u & 1 && (o = 1 - o), u !== Is(e._tTime, a) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || Ht || i || e._zTime === Kt || !t && e._zTime) {
      if (!e._initted && Qp(e, t, i, n, l)) return;
      for (h = e._zTime, e._zTime = t || (n ? Kt : 0), n || (n = t && !h), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, c = e._pt; c; ) c.r(o, c.d), c = c._next;
      t < 0 && _u(e, t, n, true), e._onUpdate && !n && Mn(e, "onUpdate"), l && e._repeat && !n && e.parent && Mn(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && Zi(e, 1), !n && !Ht && (Mn(e, o ? "onComplete" : "onReverseComplete", true), e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  }, XE = function(e, t, n) {
    var i;
    if (n > t) for (i = e._first; i && i._start <= n; ) {
      if (i.data === "isPause" && i._start > t) return i;
      i = i._next;
    }
    else for (i = e._last; i && i._start >= n; ) {
      if (i.data === "isPause" && i._start < t) return i;
      i = i._prev;
    }
  }, Ns = function(e, t, n, i) {
    var s = e._repeat, o = Dt(t) || 0, a = e._tTime / e._tDur;
    return a && !i && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : Dt(o * (s + 1) + e._rDelay * s) : o, a > 0 && !i && xl(e, e._tTime = e._tDur * a), e.parent && _l(e), n || Rr(e.parent, e), e;
  }, yf = function(e) {
    return e instanceof tn ? Rr(e) : Ns(e, e._dur);
  }, qE = {
    _start: 0,
    endTime: Go,
    totalDuration: Go
  }, Pn = function r(e, t, n) {
    var i = e.labels, s = e._recent || qE, o = e.duration() >= Qn ? s.endTime(false) : e._dur, a, l, c;
    return Bt(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), c = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (a < 0 ? s : n).totalDuration() / 100 : 1)) : a < 0 ? (t in i || (i[t] = o), i[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), c && n && (l = l / 100 * (jt(n) ? n[0] : n).totalDuration()), a > 1 ? r(e, t.substr(0, a - 1), n) + l : o + l)) : t == null ? o : +t;
  }, bo = function(e, t, n) {
    var i = Ri(t[1]), s = (i ? 2 : 1) + (e < 2 ? 0 : 1), o = t[s], a, l;
    if (i && (o.duration = t[1]), o.parent = n, e) {
      for (a = o, l = n; l && !("immediateRender" in a); ) a = l.vars.defaults || {}, l = cn(l.vars.inherit) && l.parent;
      o.immediateRender = cn(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[s - 1];
    }
    return new Lt(t[0], o, t[s + 1]);
  }, er = function(e, t) {
    return e || e === 0 ? t(e) : t;
  }, Qo = function(e, t, n) {
    return n < e ? e : n > t ? t : n;
  }, Yt = function(e, t) {
    return !Bt(e) || !(t = UE.exec(e)) ? "" : t[1];
  }, YE = function(e, t, n) {
    return er(n, function(i) {
      return Qo(e, t, i);
    });
  }, vu = [].slice, em = function(e, t) {
    return e && ti(e) && "length" in e && (!t && !e.length || e.length - 1 in e && ti(e[0])) && !e.nodeType && e !== qn;
  }, $E = function(e, t, n) {
    return n === void 0 && (n = []), e.forEach(function(i) {
      var s;
      return Bt(i) && !t || em(i, 1) ? (s = n).push.apply(s, In(i)) : n.push(i);
    }) || n;
  }, In = function(e, t, n) {
    return xt && !t && xt.selector ? xt.selector(e) : Bt(e) && !n && (mu || !Us()) ? vu.call((t || hh).querySelectorAll(e), 0) : jt(e) ? $E(e, n) : em(e) ? vu.call(e, 0) : e ? [
      e
    ] : [];
  }, yu = function(e) {
    return e = In(e)[0] || Ho("Invalid scope") || {}, function(t) {
      var n = e.current || e.nativeElement || e;
      return In(t, n.querySelectorAll ? n : n === e ? Ho("Invalid scope") || hh.createElement("div") : e);
    };
  }, tm = function(e) {
    return e.sort(function() {
      return 0.5 - Math.random();
    });
  }, nm = function(e) {
    if (bt(e)) return e;
    var t = ti(e) ? e : {
      each: e
    }, n = Pr(t.ease), i = t.from || 0, s = parseFloat(t.base) || 0, o = {}, a = i > 0 && i < 1, l = isNaN(i) || a, c = t.axis, u = i, h = i;
    return Bt(i) ? u = h = {
      center: 0.5,
      edges: 0.5,
      end: 1
    }[i] || 0 : !a && l && (u = i[0], h = i[1]), function(d, f, _) {
      var g = (_ || t).length, m = o[g], p, y, v, x, w, b, A, P, S;
      if (!m) {
        if (S = t.grid === "auto" ? 0 : (t.grid || [
          1,
          Qn
        ])[1], !S) {
          for (A = -1e8; A < (A = _[S++].getBoundingClientRect().left) && S < g; ) ;
          S < g && S--;
        }
        for (m = o[g] = [], p = l ? Math.min(S, g) * u - 0.5 : i % S, y = S === Qn ? 0 : l ? g * h / S - 0.5 : i / S | 0, A = 0, P = Qn, b = 0; b < g; b++) v = b % S - p, x = y - (b / S | 0), m[b] = w = c ? Math.abs(c === "y" ? x : v) : Fp(v * v + x * x), w > A && (A = w), w < P && (P = w);
        i === "random" && tm(m), m.max = A - P, m.min = P, m.v = g = (parseFloat(t.amount) || parseFloat(t.each) * (S > g ? g - 1 : c ? c === "y" ? g / S : S : Math.max(S, g / S)) || 0) * (i === "edges" ? -1 : 1), m.b = g < 0 ? s - g : s, m.u = Yt(t.amount || t.each) || 0, n = n && g < 0 ? dm(n) : n;
      }
      return g = (m[d] - m.min) / m.max || 0, Dt(m.b + (n ? n(g) : g) * m.v) + m.u;
    };
  }, Su = function(e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(n) {
      var i = Dt(Math.round(parseFloat(n) / e) * e * t);
      return (i - i % 1) / t + (Ri(n) ? 0 : Yt(n));
    };
  }, im = function(e, t) {
    var n = jt(e), i, s;
    return !n && ti(e) && (i = n = e.radius || Qn, e.values ? (e = In(e.values), (s = !Ri(e[0])) && (i *= i)) : e = Su(e.increment)), er(t, n ? bt(e) ? function(o) {
      return s = e(o), Math.abs(s - o) <= i ? s : o;
    } : function(o) {
      for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), c = Qn, u = 0, h = e.length, d, f; h--; ) s ? (d = e[h].x - a, f = e[h].y - l, d = d * d + f * f) : d = Math.abs(e[h] - a), d < c && (c = d, u = h);
      return u = !i || c <= i ? e[u] : o, s || u === o || Ri(o) ? u : u + Yt(o);
    } : Su(e));
  }, rm = function(e, t, n, i) {
    return er(jt(e) ? !t : n === true ? !!(n = 0) : !i, function() {
      return jt(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) * n * i) / i;
    });
  }, KE = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(i) {
      return t.reduce(function(s, o) {
        return o(s);
      }, i);
    };
  }, jE = function(e, t) {
    return function(n) {
      return e(parseFloat(n)) + (t || Yt(n));
    };
  }, ZE = function(e, t, n) {
    return om(e, t, 0, 1, n);
  }, sm = function(e, t, n) {
    return er(n, function(i) {
      return e[~~t(i)];
    });
  }, JE = function r(e, t, n) {
    var i = t - e;
    return jt(e) ? sm(e, r(0, e.length), t) : er(n, function(s) {
      return (i + (s - e) % i) % i + e;
    });
  }, QE = function r(e, t, n) {
    var i = t - e, s = i * 2;
    return jt(e) ? sm(e, r(0, e.length - 1), t) : er(n, function(o) {
      return o = (s + (o - e) % s) % s || 0, e + (o > i ? s - o : o);
    });
  }, Wo = function(e) {
    for (var t = 0, n = "", i, s, o, a; ~(i = e.indexOf("random(", t)); ) o = e.indexOf(")", i), a = e.charAt(i + 7) === "[", s = e.substr(i + 7, o - i - 7).match(a ? Vp : pu), n += e.substr(t, i - t) + rm(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), t = o + 1;
    return n + e.substr(t, e.length - t);
  }, om = function(e, t, n, i, s) {
    var o = t - e, a = i - n;
    return er(s, function(l) {
      return n + ((l - e) / o * a || 0);
    });
  }, eT = function r(e, t, n, i) {
    var s = isNaN(e + t) ? 0 : function(f) {
      return (1 - f) * e + f * t;
    };
    if (!s) {
      var o = Bt(e), a = {}, l, c, u, h, d;
      if (n === true && (i = 1) && (n = null), o) e = {
        p: e
      }, t = {
        p: t
      };
      else if (jt(e) && !jt(t)) {
        for (u = [], h = e.length, d = h - 2, c = 1; c < h; c++) u.push(r(e[c - 1], e[c]));
        h--, s = function(_) {
          _ *= h;
          var g = Math.min(d, ~~_);
          return u[g](_ - g);
        }, n = t;
      } else i || (e = Ds(jt(e) ? [] : {}, e));
      if (!u) {
        for (l in t) gh.call(a, e, l, "get", t[l]);
        s = function(_) {
          return yh(_, a) || (o ? e.p : e);
        };
      }
    }
    return er(n, s);
  }, Sf = function(e, t, n) {
    var i = e.labels, s = Qn, o, a, l;
    for (o in i) a = i[o] - t, a < 0 == !!n && a && s > (a = Math.abs(a)) && (l = o, s = a);
    return l;
  }, Mn = function(e, t, n) {
    var i = e.vars, s = i[t], o = xt, a = e._ctx, l, c, u;
    if (s) return l = i[t + "Params"], c = i.callbackScope || e, n && Ki.length && il(), a && (xt = a), u = l ? s.apply(c, l) : s.call(c), xt = o, u;
  }, go = function(e) {
    return Zi(e), e.scrollTrigger && e.scrollTrigger.kill(!!Ht), e.progress() < 1 && Mn(e, "onInterrupt"), e;
  }, us, am = [], lm = function(e) {
    if (e) if (e = !e.name && e.default || e, uh() || e.headless) {
      var t = e.name, n = bt(e), i = t && !n && e.init ? function() {
        this._props = [];
      } : e, s = {
        init: Go,
        render: yh,
        add: gh,
        kill: gT,
        modifier: mT,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: vh,
        aliases: {},
        register: 0
      };
      if (Us(), e !== i) {
        if (vn[t]) return;
        bn(i, bn(rl(e, s), o)), Ds(i.prototype, Ds(s, rl(e, o))), vn[i.prop = t] = i, e.targetTest && (qa.push(i), fh[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      Wp(t, i), e.register && e.register(fn, i, hn);
    } else am.push(e);
  }, pt = 255, _o = {
    aqua: [
      0,
      pt,
      pt
    ],
    lime: [
      0,
      pt,
      0
    ],
    silver: [
      192,
      192,
      192
    ],
    black: [
      0,
      0,
      0
    ],
    maroon: [
      128,
      0,
      0
    ],
    teal: [
      0,
      128,
      128
    ],
    blue: [
      0,
      0,
      pt
    ],
    navy: [
      0,
      0,
      128
    ],
    white: [
      pt,
      pt,
      pt
    ],
    olive: [
      128,
      128,
      0
    ],
    yellow: [
      pt,
      pt,
      0
    ],
    orange: [
      pt,
      165,
      0
    ],
    gray: [
      128,
      128,
      128
    ],
    purple: [
      128,
      0,
      128
    ],
    green: [
      0,
      128,
      0
    ],
    red: [
      pt,
      0,
      0
    ],
    pink: [
      pt,
      192,
      203
    ],
    cyan: [
      0,
      pt,
      pt
    ],
    transparent: [
      pt,
      pt,
      pt,
      0
    ]
  }, lc = function(e, t, n) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < 0.5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * pt + 0.5 | 0;
  }, cm = function(e, t, n) {
    var i = e ? Ri(e) ? [
      e >> 16,
      e >> 8 & pt,
      e & pt
    ] : 0 : _o.black, s, o, a, l, c, u, h, d, f, _;
    if (!i) {
      if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), _o[e]) i = _o[e];
      else if (e.charAt(0) === "#") {
        if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [
          i >> 16,
          i >> 8 & pt,
          i & pt,
          parseInt(e.substr(7), 16) / 255
        ];
        e = parseInt(e.substr(1), 16), i = [
          e >> 16,
          e >> 8 & pt,
          e & pt
        ];
      } else if (e.substr(0, 3) === "hsl") {
        if (i = _ = e.match(pu), !t) l = +i[0] % 360 / 360, c = +i[1] / 100, u = +i[2] / 100, o = u <= 0.5 ? u * (c + 1) : u + c - u * c, s = u * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = lc(l + 1 / 3, s, o), i[1] = lc(l, s, o), i[2] = lc(l - 1 / 3, s, o);
        else if (~e.indexOf("=")) return i = e.match(zp), n && i.length < 4 && (i[3] = 1), i;
      } else i = e.match(pu) || _o.transparent;
      i = i.map(Number);
    }
    return t && !_ && (s = i[0] / pt, o = i[1] / pt, a = i[2] / pt, h = Math.max(s, o, a), d = Math.min(s, o, a), u = (h + d) / 2, h === d ? l = c = 0 : (f = h - d, c = u > 0.5 ? f / (2 - h - d) : f / (h + d), l = h === s ? (o - a) / f + (o < a ? 6 : 0) : h === o ? (a - s) / f + 2 : (s - o) / f + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(c * 100 + 0.5), i[2] = ~~(u * 100 + 0.5)), n && i.length < 4 && (i[3] = 1), i;
  }, um = function(e) {
    var t = [], n = [], i = -1;
    return e.split(ji).forEach(function(s) {
      var o = s.match(cs) || [];
      t.push.apply(t, o), n.push(i += o.length + 1);
    }), t.c = n, t;
  }, Mf = function(e, t, n) {
    var i = "", s = (e + i).match(ji), o = t ? "hsla(" : "rgba(", a = 0, l, c, u, h;
    if (!s) return e;
    if (s = s.map(function(d) {
      return (d = cm(d, t, 1)) && o + (t ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
    }), n && (u = um(e), l = n.c, l.join(i) !== u.c.join(i))) for (c = e.replace(ji, "1").split(cs), h = c.length - 1; a < h; a++) i += c[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (u.length ? u : s.length ? s : n).shift());
    if (!c) for (c = e.split(ji), h = c.length - 1; a < h; a++) i += c[a] + s[a];
    return i + c[h];
  }, ji = function() {
    var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in _o) r += "|" + e + "\\b";
    return new RegExp(r + ")", "gi");
  }(), tT = /hsl[a]?\(/, hm = function(e) {
    var t = e.join(" "), n;
    if (ji.lastIndex = 0, ji.test(t)) return n = tT.test(t), e[1] = Mf(e[1], n), e[0] = Mf(e[0], n, um(e[1])), true;
  }, Xo, yn = function() {
    var r = Date.now, e = 500, t = 33, n = r(), i = n, s = 1e3 / 240, o = s, a = [], l, c, u, h, d, f, _ = function g(m) {
      var p = r() - i, y = m === true, v, x, w, b;
      if ((p > e || p < 0) && (n += p - t), i += p, w = i - n, v = w - o, (v > 0 || y) && (b = ++h.frame, d = w - h.time * 1e3, h.time = w = w / 1e3, o += v + (v >= s ? 4 : s - v), x = 1), y || (l = c(g)), x) for (f = 0; f < a.length; f++) a[f](w, d, b, m);
    };
    return h = {
      time: 0,
      frame: 0,
      tick: function() {
        _(true);
      },
      deltaRatio: function(m) {
        return d / (1e3 / (m || 60));
      },
      wake: function() {
        Hp && (!mu && uh() && (qn = mu = window, hh = qn.document || {}, Tn.gsap = fn, (qn.gsapVersions || (qn.gsapVersions = [])).push(fn.version), Gp(nl || qn.GreenSockGlobals || !qn.gsap && qn || {}), am.forEach(lm)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && h.sleep(), c = u || function(m) {
          return setTimeout(m, o - h.time * 1e3 + 1 | 0);
        }, Xo = 1, _(2));
      },
      sleep: function() {
        (u ? cancelAnimationFrame : clearTimeout)(l), Xo = 0, c = Go;
      },
      lagSmoothing: function(m, p) {
        e = m || 1 / 0, t = Math.min(p || 33, e);
      },
      fps: function(m) {
        s = 1e3 / (m || 240), o = h.time * 1e3 + s;
      },
      add: function(m, p, y) {
        var v = p ? function(x, w, b, A) {
          m(x, w, b, A), h.remove(v);
        } : m;
        return h.remove(m), a[y ? "unshift" : "push"](v), Us(), v;
      },
      remove: function(m, p) {
        ~(p = a.indexOf(m)) && a.splice(p, 1) && f >= p && f--;
      },
      _listeners: a
    }, h;
  }(), Us = function() {
    return !Xo && yn.wake();
  }, qe = {}, nT = /^[\d.\-M][\d.\-,\s]/, iT = /["']/g, rT = function(e) {
    for (var t = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], s = 1, o = n.length, a, l, c; s < o; s++) l = n[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, a), t[i] = isNaN(c) ? c.replace(iT, "").trim() : +c, i = l.substr(a + 1).trim();
    return t;
  }, sT = function(e) {
    var t = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", t);
    return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n);
  }, oT = function(e) {
    var t = (e + "").split("("), n = qe[t[0]];
    return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [
      rT(t[1])
    ] : sT(e).split(",").map($p)) : qe._CE && nT.test(e) ? qe._CE("", e) : n;
  }, dm = function(e) {
    return function(t) {
      return 1 - e(1 - t);
    };
  }, fm = function r(e, t) {
    for (var n = e._first, i; n; ) n instanceof tn ? r(n, t) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== t && (n.timeline ? r(n.timeline, t) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = t)), n = n._next;
  }, Pr = function(e, t) {
    return e && (bt(e) ? e : qe[e] || oT(e)) || t;
  }, Br = function(e, t, n, i) {
    n === void 0 && (n = function(l) {
      return 1 - t(1 - l);
    }), i === void 0 && (i = function(l) {
      return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
    });
    var s = {
      easeIn: t,
      easeOut: n,
      easeInOut: i
    }, o;
    return un(e, function(a) {
      qe[a] = Tn[a] = s, qe[o = a.toLowerCase()] = n;
      for (var l in s) qe[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = qe[a + "." + l] = s[l];
    }), s;
  }, pm = function(e) {
    return function(t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  }, cc = function r(e, t, n) {
    var i = t >= 1 ? t : 1, s = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = s / fu * (Math.asin(1 / i) || 0), a = function(u) {
      return u === 1 ? 1 : i * Math.pow(2, -10 * u) * NE((u - o) * s) + 1;
    }, l = e === "out" ? a : e === "in" ? function(c) {
      return 1 - a(1 - c);
    } : pm(a);
    return s = fu / s, l.config = function(c, u) {
      return r(e, c, u);
    }, l;
  }, uc = function r(e, t) {
    t === void 0 && (t = 1.70158);
    var n = function(o) {
      return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
    }, i = e === "out" ? n : e === "in" ? function(s) {
      return 1 - n(1 - s);
    } : pm(n);
    return i.config = function(s) {
      return r(e, s);
    }, i;
  };
  un("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, e) {
    var t = e < 5 ? e + 1 : e;
    Br(r + ",Power" + (t - 1), e ? function(n) {
      return Math.pow(n, t);
    } : function(n) {
      return n;
    }, function(n) {
      return 1 - Math.pow(1 - n, t);
    }, function(n) {
      return n < 0.5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2;
    });
  });
  qe.Linear.easeNone = qe.none = qe.Linear.easeIn;
  Br("Elastic", cc("in"), cc("out"), cc());
  (function(r, e) {
    var t = 1 / e, n = 2 * t, i = 2.5 * t, s = function(a) {
      return a < t ? r * a * a : a < n ? r * Math.pow(a - 1.5 / e, 2) + 0.75 : a < i ? r * (a -= 2.25 / e) * a + 0.9375 : r * Math.pow(a - 2.625 / e, 2) + 0.984375;
    };
    Br("Bounce", function(o) {
      return 1 - s(1 - o);
    }, s);
  })(7.5625, 2.75);
  Br("Expo", function(r) {
    return Math.pow(2, 10 * (r - 1)) * r + r * r * r * r * r * r * (1 - r);
  });
  Br("Circ", function(r) {
    return -(Fp(1 - r * r) - 1);
  });
  Br("Sine", function(r) {
    return r === 1 ? 1 : -IE(r * LE) + 1;
  });
  Br("Back", uc("in"), uc("out"), uc());
  qe.SteppedEase = qe.steps = Tn.SteppedEase = {
    config: function(e, t) {
      e === void 0 && (e = 1);
      var n = 1 / e, i = e + (t ? 0 : 1), s = t ? 1 : 0, o = 1 - Kt;
      return function(a) {
        return ((i * Qo(0, o, a) | 0) + s) * n;
      };
    }
  };
  Ls.ease = qe["quad.out"];
  un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
    return ph += r + "," + r + "Params,";
  });
  var mm = function(e, t) {
    this.id = DE++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : qp, this.set = t ? t.getSetter : vh;
  }, qo = function() {
    function r(t) {
      this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ns(this, +t.duration, 1, 1), this.data = t.data, xt && (this._ctx = xt, xt.data.push(this)), Xo || yn.wake();
    }
    var e = r.prototype;
    return e.delay = function(n) {
      return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay;
    }, e.duration = function(n) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur;
    }, e.totalDuration = function(n) {
      return arguments.length ? (this._dirty = 0, Ns(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, e.totalTime = function(n, i) {
      if (Us(), !arguments.length) return this._tTime;
      var s = this._dp;
      if (s && s.smoothChildTiming && this._ts) {
        for (xl(this, n), !s._dp || s.parent || Zp(s, this); s && s.parent; ) s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, true), s = s.parent;
        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && Kn(this._dp, this, this._start - this._delay);
      }
      return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === Kt || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), Yp(this, n, i)), this;
    }, e.time = function(n, i) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + vf(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time;
    }, e.totalProgress = function(n, i) {
      return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
    }, e.progress = function(n, i) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + vf(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    }, e.iteration = function(n, i) {
      var s = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (n - 1) * s, i) : this._repeat ? Is(this._tTime, s) + 1 : 1;
    }, e.timeScale = function(n, i) {
      if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
      if (this._rts === n) return this;
      var s = this.parent && this._ts ? sl(this.parent._time, this) : this._tTime;
      return this._rts = +n || 0, this._ts = this._ps || n === -1e-8 ? 0 : this._rts, this.totalTime(Qo(-Math.abs(this._delay), this._tDur, s), i !== false), _l(this), VE(this);
    }, e.paused = function(n) {
      return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Us(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Kt && (this._tTime -= Kt)))), this) : this._ps;
    }, e.startTime = function(n) {
      if (arguments.length) {
        this._start = n;
        var i = this.parent || this._dp;
        return i && (i._sort || !this.parent) && Kn(i, this, n - this._delay), this;
      }
      return this._start;
    }, e.endTime = function(n) {
      return this._start + (cn(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    }, e.rawTime = function(n) {
      var i = this.parent || this._dp;
      return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? sl(i.rawTime(n), this) : this._tTime : this._tTime;
    }, e.revert = function(n) {
      n === void 0 && (n = FE);
      var i = Ht;
      return Ht = n, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents)), this.data !== "nested" && n.kill !== false && this.kill(), Ht = i, this;
    }, e.globalTime = function(n) {
      for (var i = this, s = arguments.length ? n : i.rawTime(); i; ) s = i._start + s / (Math.abs(i._ts) || 1), i = i._dp;
      return !this.parent && this._sat ? this._sat.globalTime(n) : s;
    }, e.repeat = function(n) {
      return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, yf(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
    }, e.repeatDelay = function(n) {
      if (arguments.length) {
        var i = this._time;
        return this._rDelay = n, yf(this), i ? this.time(i) : this;
      }
      return this._rDelay;
    }, e.yoyo = function(n) {
      return arguments.length ? (this._yoyo = n, this) : this._yoyo;
    }, e.seek = function(n, i) {
      return this.totalTime(Pn(this, n), cn(i));
    }, e.restart = function(n, i) {
      return this.play().totalTime(n ? -this._delay : 0, cn(i)), this._dur || (this._zTime = -1e-8), this;
    }, e.play = function(n, i) {
      return n != null && this.seek(n, i), this.reversed(false).paused(false);
    }, e.reverse = function(n, i) {
      return n != null && this.seek(n || this.totalDuration(), i), this.reversed(true).paused(false);
    }, e.pause = function(n, i) {
      return n != null && this.seek(n, i), this.paused(true);
    }, e.resume = function() {
      return this.paused(false);
    }, e.reversed = function(n) {
      return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -1e-8 : 0)), this) : this._rts < 0;
    }, e.invalidate = function() {
      return this._initted = this._act = 0, this._zTime = -1e-8, this;
    }, e.isActive = function() {
      var n = this.parent || this._dp, i = this._start, s;
      return !!(!n || this._ts && this._initted && n.isActive() && (s = n.rawTime(true)) >= i && s < this.endTime(true) - Kt);
    }, e.eventCallback = function(n, i, s) {
      var o = this.vars;
      return arguments.length > 1 ? (i ? (o[n] = i, s && (o[n + "Params"] = s), n === "onUpdate" && (this._onUpdate = i)) : delete o[n], this) : o[n];
    }, e.then = function(n) {
      var i = this;
      return new Promise(function(s) {
        var o = bt(n) ? n : Kp, a = function() {
          var c = i.then;
          i.then = null, bt(o) && (o = o(i)) && (o.then || o === i) && (i.then = c), s(o), i.then = c;
        };
        i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a;
      });
    }, e.kill = function() {
      go(this);
    }, r;
  }();
  bn(qo.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var tn = function(r) {
    Op(e, r);
    function e(n, i) {
      var s;
      return n === void 0 && (n = {}), s = r.call(this, n) || this, s.labels = {}, s.smoothChildTiming = !!n.smoothChildTiming, s.autoRemoveChildren = !!n.autoRemoveChildren, s._sort = cn(n.sortChildren), yt && Kn(n.parent || yt, xi(s), i), n.reversed && s.reverse(), n.paused && s.paused(true), n.scrollTrigger && Jp(xi(s), n.scrollTrigger), s;
    }
    var t = e.prototype;
    return t.to = function(i, s, o) {
      return bo(0, arguments, this), this;
    }, t.from = function(i, s, o) {
      return bo(1, arguments, this), this;
    }, t.fromTo = function(i, s, o, a) {
      return bo(2, arguments, this), this;
    }, t.set = function(i, s, o) {
      return s.duration = 0, s.parent = this, To(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new Lt(i, s, Pn(this, o), 1), this;
    }, t.call = function(i, s, o) {
      return Kn(this, Lt.delayedCall(0, i, s), o);
    }, t.staggerTo = function(i, s, o, a, l, c, u) {
      return o.duration = s, o.stagger = o.stagger || a, o.onComplete = c, o.onCompleteParams = u, o.parent = this, new Lt(i, o, Pn(this, l)), this;
    }, t.staggerFrom = function(i, s, o, a, l, c, u) {
      return o.runBackwards = 1, To(o).immediateRender = cn(o.immediateRender), this.staggerTo(i, s, o, a, l, c, u);
    }, t.staggerFromTo = function(i, s, o, a, l, c, u, h) {
      return a.startAt = o, To(a).immediateRender = cn(a.immediateRender), this.staggerTo(i, s, a, l, c, u, h);
    }, t.render = function(i, s, o) {
      var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, u = i <= 0 ? 0 : Dt(i), h = this._zTime < 0 != i < 0 && (this._initted || !c), d, f, _, g, m, p, y, v, x, w, b, A;
      if (this !== yt && u > l && i >= 0 && (u = l), u !== this._tTime || o || h) {
        if (a !== this._time && c && (u += this._time - a, i += this._time - a), d = u, x = this._start, v = this._ts, p = !v, h && (c || (a = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
          if (b = this._yoyo, m = c + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(m * 100 + i, s, o);
          if (d = Dt(u % m), u === l ? (g = this._repeat, d = c) : (w = Dt(u / m), g = ~~w, g && g === w && (d = c, g--), d > c && (d = c)), w = Is(this._tTime, m), !a && this._tTime && w !== g && this._tTime - w * m - this._dur <= 0 && (w = g), b && g & 1 && (d = c - d, A = 1), g !== w && !this._lock) {
            var P = b && w & 1, S = P === (b && g & 1);
            if (g < w && (P = !P), a = P ? 0 : u % c ? c : u, this._lock = 1, this.render(a || (A ? 0 : Dt(g * m)), s, !c)._lock = 0, this._tTime = u, !s && this.parent && Mn(this, "onRepeat"), this.vars.repeatRefresh && !A && (this.invalidate()._lock = 1), a && a !== this._time || p !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (c = this._dur, l = this._tDur, S && (this._lock = 2, a = P ? c : -1e-4, this.render(a, true), this.vars.repeatRefresh && !A && this.invalidate()), this._lock = 0, !this._ts && !p) return this;
            fm(this, A);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (y = XE(this, Dt(a), Dt(d)), y && (u -= d - (d = y._start))), this._tTime = u, this._time = d, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && d && !s && !g && (Mn(this, "onStart"), this._tTime !== u)) return this;
        if (d >= a && i >= 0) for (f = this._first; f; ) {
          if (_ = f._next, (f._act || d >= f._start) && f._ts && y !== f) {
            if (f.parent !== this) return this.render(i, s, o);
            if (f.render(f._ts > 0 ? (d - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (d - f._start) * f._ts, s, o), d !== this._time || !this._ts && !p) {
              y = 0, _ && (u += this._zTime = -1e-8);
              break;
            }
          }
          f = _;
        }
        else {
          f = this._last;
          for (var M = i < 0 ? i : d; f; ) {
            if (_ = f._prev, (f._act || M <= f._end) && f._ts && y !== f) {
              if (f.parent !== this) return this.render(i, s, o);
              if (f.render(f._ts > 0 ? (M - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (M - f._start) * f._ts, s, o || Ht && (f._initted || f._startAt)), d !== this._time || !this._ts && !p) {
                y = 0, _ && (u += this._zTime = M ? -1e-8 : Kt);
                break;
              }
            }
            f = _;
          }
        }
        if (y && !s && (this.pause(), y.render(d >= a ? 0 : -1e-8)._zTime = d >= a ? 1 : -1, this._ts)) return this._start = x, _l(this), this.render(i, s, o);
        this._onUpdate && !s && Mn(this, "onUpdate", true), (u === l && this._tTime >= this.totalDuration() || !u && a) && (x === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (u === l && this._ts > 0 || !u && this._ts < 0) && Zi(this, 1), !s && !(i < 0 && !a) && (u || a || !l) && (Mn(this, u === l && i >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(u < l && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }, t.add = function(i, s) {
      var o = this;
      if (Ri(s) || (s = Pn(this, s, i)), !(i instanceof qo)) {
        if (jt(i)) return i.forEach(function(a) {
          return o.add(a, s);
        }), this;
        if (Bt(i)) return this.addLabel(i, s);
        if (bt(i)) i = Lt.delayedCall(0, i);
        else return this;
      }
      return this !== i ? Kn(this, i, s) : this;
    }, t.getChildren = function(i, s, o, a) {
      i === void 0 && (i = true), s === void 0 && (s = true), o === void 0 && (o = true), a === void 0 && (a = -1e8);
      for (var l = [], c = this._first; c; ) c._start >= a && (c instanceof Lt ? s && l.push(c) : (o && l.push(c), i && l.push.apply(l, c.getChildren(true, s, o)))), c = c._next;
      return l;
    }, t.getById = function(i) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; ) if (s[o].vars.id === i) return s[o];
    }, t.remove = function(i) {
      return Bt(i) ? this.removeLabel(i) : bt(i) ? this.killTweensOf(i) : (i.parent === this && gl(this, i), i === this._recent && (this._recent = this._last), Rr(this));
    }, t.totalTime = function(i, s) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Dt(yn.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), r.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime;
    }, t.addLabel = function(i, s) {
      return this.labels[i] = Pn(this, s), this;
    }, t.removeLabel = function(i) {
      return delete this.labels[i], this;
    }, t.addPause = function(i, s, o) {
      var a = Lt.delayedCall(0, s || Go, o);
      return a.data = "isPause", this._hasPause = 1, Kn(this, a, Pn(this, i));
    }, t.removePause = function(i) {
      var s = this._first;
      for (i = Pn(this, i); s; ) s._start === i && s.data === "isPause" && Zi(s), s = s._next;
    }, t.killTweensOf = function(i, s, o) {
      for (var a = this.getTweensOf(i, o), l = a.length; l--; ) Xi !== a[l] && a[l].kill(i, s);
      return this;
    }, t.getTweensOf = function(i, s) {
      for (var o = [], a = In(i), l = this._first, c = Ri(s), u; l; ) l instanceof Lt ? BE(l._targets, a) && (c ? (!Xi || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (u = l.getTweensOf(a, s)).length && o.push.apply(o, u), l = l._next;
      return o;
    }, t.tweenTo = function(i, s) {
      s = s || {};
      var o = this, a = Pn(o, i), l = s, c = l.startAt, u = l.onStart, h = l.onStartParams, d = l.immediateRender, f, _ = Lt.to(o, bn({
        ease: s.ease || "none",
        lazy: false,
        immediateRender: false,
        time: a,
        overwrite: "auto",
        duration: s.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale()) || Kt,
        onStart: function() {
          if (o.pause(), !f) {
            var m = s.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale());
            _._dur !== m && Ns(_, m, 0, 1).render(_._time, true, true), f = 1;
          }
          u && u.apply(_, h || []);
        }
      }, s));
      return d ? _.render(0) : _;
    }, t.tweenFromTo = function(i, s, o) {
      return this.tweenTo(s, bn({
        startAt: {
          time: Pn(this, i)
        }
      }, o));
    }, t.recent = function() {
      return this._recent;
    }, t.nextLabel = function(i) {
      return i === void 0 && (i = this._time), Sf(this, Pn(this, i));
    }, t.previousLabel = function(i) {
      return i === void 0 && (i = this._time), Sf(this, Pn(this, i), 1);
    }, t.currentLabel = function(i) {
      return arguments.length ? this.seek(i, true) : this.previousLabel(this._time + Kt);
    }, t.shiftChildren = function(i, s, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, l = this.labels, c; a; ) a._start >= o && (a._start += i, a._end += i), a = a._next;
      if (s) for (c in l) l[c] >= o && (l[c] += i);
      return Rr(this);
    }, t.invalidate = function(i) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(i), s = s._next;
      return r.prototype.invalidate.call(this, i);
    }, t.clear = function(i) {
      i === void 0 && (i = true);
      for (var s = this._first, o; s; ) o = s._next, this.remove(s), s = o;
      return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Rr(this);
    }, t.totalDuration = function(i) {
      var s = 0, o = this, a = o._last, l = Qn, c, u, h;
      if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
      if (o._dirty) {
        for (h = o.parent; a; ) c = a._prev, a._dirty && a.totalDuration(), u = a._start, u > l && o._sort && a._ts && !o._lock ? (o._lock = 1, Kn(o, a, u - a._delay, 1)._lock = 0) : l = u, u < 0 && a._ts && (s -= u, (!h && !o._dp || h && h.smoothChildTiming) && (o._start += u / o._ts, o._time -= u, o._tTime -= u), o.shiftChildren(-u, false, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = c;
        Ns(o, o === yt && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
      }
      return o._tDur;
    }, e.updateRoot = function(i) {
      if (yt._ts && (Yp(yt, sl(i, yt)), Xp = yn.frame), yn.frame >= _f) {
        _f += En.autoSleep || 120;
        var s = yt._first;
        if ((!s || !s._ts) && En.autoSleep && yn._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || yn.sleep();
        }
      }
    }, e;
  }(qo);
  bn(tn.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var aT = function(e, t, n, i, s, o, a) {
    var l = new hn(this._pt, e, t, 0, 1, Sm, null, s), c = 0, u = 0, h, d, f, _, g, m, p, y;
    for (l.b = n, l.e = i, n += "", i += "", (p = ~i.indexOf("random(")) && (i = Wo(i)), o && (y = [
      n,
      i
    ], o(y, e, t), n = y[0], i = y[1]), d = n.match(oc) || []; h = oc.exec(i); ) _ = h[0], g = i.substring(c, h.index), f ? f = (f + 1) % 5 : g.substr(-5) === "rgba(" && (f = 1), _ !== d[u++] && (m = parseFloat(d[u - 1]) || 0, l._pt = {
      _next: l._pt,
      p: g || u === 1 ? g : ",",
      s: m,
      c: _.charAt(1) === "=" ? gs(m, _) - m : parseFloat(_) - m,
      m: f && f < 4 ? Math.round : 0
    }, c = oc.lastIndex);
    return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = a, (kp.test(i) || p) && (l.e = 0), this._pt = l, l;
  }, gh = function(e, t, n, i, s, o, a, l, c, u) {
    bt(i) && (i = i(s || 0, e, o));
    var h = e[t], d = n !== "get" ? n : bt(h) ? c ? e[t.indexOf("set") || !bt(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : h, f = bt(h) ? c ? dT : vm : xh, _;
    if (Bt(i) && (~i.indexOf("random(") && (i = Wo(i)), i.charAt(1) === "=" && (_ = gs(d, i) + (Yt(d) || 0), (_ || _ === 0) && (i = _))), !u || d !== i || Mu) return !isNaN(d * i) && i !== "" ? (_ = new hn(this._pt, e, t, +d || 0, i - (d || 0), typeof h == "boolean" ? pT : ym, 0, f), c && (_.fp = c), a && _.modifier(a, this, e), this._pt = _) : (!h && !(t in e) && dh(t, i), aT.call(this, e, t, d, i, f, l || En.stringFilter, c));
  }, lT = function(e, t, n, i, s) {
    if (bt(e) && (e = wo(e, s, t, n, i)), !ti(e) || e.style && e.nodeType || jt(e) || Bp(e)) return Bt(e) ? wo(e, s, t, n, i) : e;
    var o = {}, a;
    for (a in e) o[a] = wo(e[a], s, t, n, i);
    return o;
  }, gm = function(e, t, n, i, s, o) {
    var a, l, c, u;
    if (vn[e] && (a = new vn[e]()).init(s, a.rawVars ? t[e] : lT(t[e], i, s, o, n), n, i, o) !== false && (n._pt = l = new hn(n._pt, s, e, 0, 1, a.render, a, 0, a.priority), n !== us)) for (c = n._ptLookup[n._targets.indexOf(s)], u = a._props.length; u--; ) c[a._props[u]] = l;
    return a;
  }, Xi, Mu, _h = function r(e, t, n) {
    var i = e.vars, s = i.ease, o = i.startAt, a = i.immediateRender, l = i.lazy, c = i.onUpdate, u = i.runBackwards, h = i.yoyoEase, d = i.keyframes, f = i.autoRevert, _ = e._dur, g = e._startAt, m = e._targets, p = e.parent, y = p && p.data === "nested" ? p.vars.targets : m, v = e._overwrite === "auto" && !lh, x = e.timeline, w, b, A, P, S, M, L, G, O, V, q, B, K;
    if (x && (!d || !s) && (s = "none"), e._ease = Pr(s, Ls.ease), e._yEase = h ? dm(Pr(h === true ? s : h, Ls.ease)) : 0, h && e._yoyo && !e._repeat && (h = e._yEase, e._yEase = e._ease, e._ease = h), e._from = !x && !!i.runBackwards, !x || d && !i.stagger) {
      if (G = m[0] ? Cr(m[0]).harness : 0, B = G && i[G.prop], w = rl(i, fh), g && (g._zTime < 0 && g.progress(1), t < 0 && u && a && !f ? g.render(-1, true) : g.revert(u && _ ? Xa : OE), g._lazy = 0), o) {
        if (Zi(e._startAt = Lt.set(m, bn({
          data: "isStart",
          overwrite: false,
          parent: p,
          immediateRender: true,
          lazy: !g && cn(l),
          startAt: null,
          delay: 0,
          onUpdate: c && function() {
            return Mn(e, "onUpdate");
          },
          stagger: 0
        }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Ht || !a && !f) && e._startAt.revert(Xa), a && _ && t <= 0 && n <= 0) {
          t && (e._zTime = t);
          return;
        }
      } else if (u && _ && !g) {
        if (t && (a = false), A = bn({
          overwrite: false,
          data: "isFromStart",
          lazy: a && !g && cn(l),
          immediateRender: a,
          stagger: 0,
          parent: p
        }, w), B && (A[G.prop] = B), Zi(e._startAt = Lt.set(m, A)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Ht ? e._startAt.revert(Xa) : e._startAt.render(-1, true)), e._zTime = t, !a) r(e._startAt, Kt, Kt);
        else if (!t) return;
      }
      for (e._pt = e._ptCache = 0, l = _ && cn(l) || l && !_, b = 0; b < m.length; b++) {
        if (S = m[b], L = S._gsap || mh(m)[b]._gsap, e._ptLookup[b] = V = {}, gu[L.id] && Ki.length && il(), q = y === m ? b : y.indexOf(S), G && (O = new G()).init(S, B || w, e, q, y) !== false && (e._pt = P = new hn(e._pt, S, O.name, 0, 1, O.render, O, 0, O.priority), O._props.forEach(function(H) {
          V[H] = P;
        }), O.priority && (M = 1)), !G || B) for (A in w) vn[A] && (O = gm(A, w, e, q, S, y)) ? O.priority && (M = 1) : V[A] = P = gh.call(e, S, A, "get", w[A], q, y, 0, i.stringFilter);
        e._op && e._op[b] && e.kill(S, e._op[b]), v && e._pt && (Xi = e, yt.killTweensOf(S, V, e.globalTime(t)), K = !e.parent, Xi = 0), e._pt && l && (gu[L.id] = 1);
      }
      M && Mm(e), e._onInit && e._onInit(e);
    }
    e._onUpdate = c, e._initted = (!e._op || e._pt) && !K, d && t <= 0 && x.render(Qn, true, true);
  }, cT = function(e, t, n, i, s, o, a, l) {
    var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], u, h, d, f;
    if (!c) for (c = e._ptCache[t] = [], d = e._ptLookup, f = e._targets.length; f--; ) {
      if (u = d[f][t], u && u.d && u.d._pt) for (u = u.d._pt; u && u.p !== t && u.fp !== t; ) u = u._next;
      if (!u) return Mu = 1, e.vars[t] = "+=0", _h(e, a), Mu = 0, l ? Ho(t + " not eligible for reset") : 1;
      c.push(u);
    }
    for (f = c.length; f--; ) h = c[f], u = h._pt || h, u.s = (i || i === 0) && !s ? i : u.s + (i || 0) + o * u.c, u.c = n - u.s, h.e && (h.e = At(n) + Yt(h.e)), h.b && (h.b = u.s + Yt(h.b));
  }, uT = function(e, t) {
    var n = e[0] ? Cr(e[0]).harness : 0, i = n && n.aliases, s, o, a, l;
    if (!i) return t;
    s = Ds({}, t);
    for (o in i) if (o in s) for (l = i[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
    return s;
  }, hT = function(e, t, n, i) {
    var s = t.ease || i || "power1.inOut", o, a;
    if (jt(t)) a = n[e] || (n[e] = []), t.forEach(function(l, c) {
      return a.push({
        t: c / (t.length - 1) * 100,
        v: l,
        e: s
      });
    });
    else for (o in t) a = n[o] || (n[o] = []), o === "ease" || a.push({
      t: parseFloat(e),
      v: t[o],
      e: s
    });
  }, wo = function(e, t, n, i, s) {
    return bt(e) ? e.call(t, n, i, s) : Bt(e) && ~e.indexOf("random(") ? Wo(e) : e;
  }, _m = ph + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", xm = {};
  un(_m + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
    return xm[r] = 1;
  });
  var Lt = function(r) {
    Op(e, r);
    function e(n, i, s, o) {
      var a;
      typeof i == "number" && (s.duration = i, i = s, s = null), a = r.call(this, o ? i : To(i)) || this;
      var l = a.vars, c = l.duration, u = l.delay, h = l.immediateRender, d = l.stagger, f = l.overwrite, _ = l.keyframes, g = l.defaults, m = l.scrollTrigger, p = l.yoyoEase, y = i.parent || yt, v = (jt(n) || Bp(n) ? Ri(n[0]) : "length" in i) ? [
        n
      ] : In(n), x, w, b, A, P, S, M, L;
      if (a._targets = v.length ? mh(v) : Ho("GSAP target " + n + " not found. https://gsap.com", !En.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = f, _ || d || Ua(c) || Ua(u)) {
        if (i = a.vars, x = a.timeline = new tn({
          data: "nested",
          defaults: g || {},
          targets: y && y.data === "nested" ? y.vars.targets : v
        }), x.kill(), x.parent = x._dp = xi(a), x._start = 0, d || Ua(c) || Ua(u)) {
          if (A = v.length, M = d && nm(d), ti(d)) for (P in d) ~_m.indexOf(P) && (L || (L = {}), L[P] = d[P]);
          for (w = 0; w < A; w++) b = rl(i, xm), b.stagger = 0, p && (b.yoyoEase = p), L && Ds(b, L), S = v[w], b.duration = +wo(c, xi(a), w, S, v), b.delay = (+wo(u, xi(a), w, S, v) || 0) - a._delay, !d && A === 1 && b.delay && (a._delay = u = b.delay, a._start += u, b.delay = 0), x.to(S, b, M ? M(w, S, v) : 0), x._ease = qe.none;
          x.duration() ? c = u = 0 : a.timeline = 0;
        } else if (_) {
          To(bn(x.vars.defaults, {
            ease: "none"
          })), x._ease = Pr(_.ease || i.ease || "none");
          var G = 0, O, V, q;
          if (jt(_)) _.forEach(function(B) {
            return x.to(v, B, ">");
          }), x.duration();
          else {
            b = {};
            for (P in _) P === "ease" || P === "easeEach" || hT(P, _[P], b, _.easeEach);
            for (P in b) for (O = b[P].sort(function(B, K) {
              return B.t - K.t;
            }), G = 0, w = 0; w < O.length; w++) V = O[w], q = {
              ease: V.e,
              duration: (V.t - (w ? O[w - 1].t : 0)) / 100 * c
            }, q[P] = V.v, x.to(v, q, G), G += q.duration;
            x.duration() < c && x.to({}, {
              duration: c - x.duration()
            });
          }
        }
        c || a.duration(c = x.duration());
      } else a.timeline = 0;
      return f === true && !lh && (Xi = xi(a), yt.killTweensOf(v), Xi = 0), Kn(y, xi(a), s), i.reversed && a.reverse(), i.paused && a.paused(true), (h || !c && !_ && a._start === Dt(y._time) && cn(h) && HE(xi(a)) && y.data !== "nested") && (a._tTime = -1e-8, a.render(Math.max(0, -u) || 0)), m && Jp(xi(a), m), a;
    }
    var t = e.prototype;
    return t.render = function(i, s, o) {
      var a = this._time, l = this._tDur, c = this._dur, u = i < 0, h = i > l - Kt && !u ? l : i < Kt ? 0 : i, d, f, _, g, m, p, y, v, x;
      if (!c) WE(this, i, s, o);
      else if (h !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u || this._lazy) {
        if (d = h, v = this.timeline, this._repeat) {
          if (g = c + this._rDelay, this._repeat < -1 && u) return this.totalTime(g * 100 + i, s, o);
          if (d = Dt(h % g), h === l ? (_ = this._repeat, d = c) : (m = Dt(h / g), _ = ~~m, _ && _ === m ? (d = c, _--) : d > c && (d = c)), p = this._yoyo && _ & 1, p && (x = this._yEase, d = c - d), m = Is(this._tTime, g), d === a && !o && this._initted && _ === m) return this._tTime = h, this;
          _ !== m && (v && this._yEase && fm(v, p), this.vars.repeatRefresh && !p && !this._lock && d !== g && this._initted && (this._lock = o = 1, this.render(Dt(g * _), true).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (Qp(this, u ? i : d, o, s, h)) return this._tTime = 0, this;
          if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== m)) return this;
          if (c !== this._dur) return this.render(i, s, o);
        }
        if (this._tTime = h, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (x || this._ease)(d / c), this._from && (this.ratio = y = 1 - y), d && !a && !s && !_ && (Mn(this, "onStart"), this._tTime !== h)) return this;
        for (f = this._pt; f; ) f.r(y, f.d), f = f._next;
        v && v.render(i < 0 ? i : v._dur * v._ease(d / this._dur), s, o) || this._startAt && (this._zTime = i), this._onUpdate && !s && (u && _u(this, i, s, o), Mn(this, "onUpdate")), this._repeat && _ !== m && this.vars.onRepeat && !s && this.parent && Mn(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (u && !this._onUpdate && _u(this, i, true, true), (i || !c) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Zi(this, 1), !s && !(u && !a) && (h || a || p) && (Mn(this, h === l ? "onComplete" : "onReverseComplete", true), this._prom && !(h < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }, t.targets = function() {
      return this._targets;
    }, t.invalidate = function(i) {
      return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), r.prototype.invalidate.call(this, i);
    }, t.resetTo = function(i, s, o, a, l) {
      Xo || yn.wake(), this._ts || this.play();
      var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
      return this._initted || _h(this, c), u = this._ease(c / this._dur), cT(this, i, s, o, a, u, c, l) ? this.resetTo(i, s, o, a, 1) : (xl(this, 0), this.parent || jp(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
    }, t.kill = function(i, s) {
      if (s === void 0 && (s = "all"), !i && (!s || s === "all")) return this._lazy = this._pt = 0, this.parent ? go(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Ht), this;
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return this.timeline.killTweensOf(i, s, Xi && Xi.vars.overwrite !== true)._first || go(this), this.parent && o !== this.timeline.totalDuration() && Ns(this, this._dur * this.timeline._tDur / o, 0, 1), this;
      }
      var a = this._targets, l = i ? In(i) : a, c = this._ptLookup, u = this._pt, h, d, f, _, g, m, p;
      if ((!s || s === "all") && kE(a, l)) return s === "all" && (this._pt = 0), go(this);
      for (h = this._op = this._op || [], s !== "all" && (Bt(s) && (g = {}, un(s, function(y) {
        return g[y] = 1;
      }), s = g), s = uT(a, s)), p = a.length; p--; ) if (~l.indexOf(a[p])) {
        d = c[p], s === "all" ? (h[p] = s, _ = d, f = {}) : (f = h[p] = h[p] || {}, _ = s);
        for (g in _) m = d && d[g], m && ((!("kill" in m.d) || m.d.kill(g) === true) && gl(this, m, "_pt"), delete d[g]), f !== "all" && (f[g] = 1);
      }
      return this._initted && !this._pt && u && go(this), this;
    }, e.to = function(i, s) {
      return new e(i, s, arguments[2]);
    }, e.from = function(i, s) {
      return bo(1, arguments);
    }, e.delayedCall = function(i, s, o, a) {
      return new e(s, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay: i,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a
      });
    }, e.fromTo = function(i, s, o) {
      return bo(2, arguments);
    }, e.set = function(i, s) {
      return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(i, s);
    }, e.killTweensOf = function(i, s, o) {
      return yt.killTweensOf(i, s, o);
    }, e;
  }(qo);
  bn(Lt.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  un("staggerTo,staggerFrom,staggerFromTo", function(r) {
    Lt[r] = function() {
      var e = new tn(), t = vu.call(arguments, 0);
      return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
    };
  });
  var xh = function(e, t, n) {
    return e[t] = n;
  }, vm = function(e, t, n) {
    return e[t](n);
  }, dT = function(e, t, n, i) {
    return e[t](i.fp, n);
  }, fT = function(e, t, n) {
    return e.setAttribute(t, n);
  }, vh = function(e, t) {
    return bt(e[t]) ? vm : ch(e[t]) && e.setAttribute ? fT : xh;
  }, ym = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  }, pT = function(e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  }, Sm = function(e, t) {
    var n = t._pt, i = "";
    if (!e && t.b) i = t.b;
    else if (e === 1 && t.e) i = t.e;
    else {
      for (; n; ) i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + i, n = n._next;
      i += t.c;
    }
    t.set(t.t, t.p, i, t);
  }, yh = function(e, t) {
    for (var n = t._pt; n; ) n.r(e, n.d), n = n._next;
  }, mT = function(e, t, n, i) {
    for (var s = this._pt, o; s; ) o = s._next, s.p === i && s.modifier(e, t, n), s = o;
  }, gT = function(e) {
    for (var t = this._pt, n, i; t; ) i = t._next, t.p === e && !t.op || t.op === e ? gl(this, t, "_pt") : t.dep || (n = 1), t = i;
    return !n;
  }, _T = function(e, t, n, i) {
    i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
  }, Mm = function(e) {
    for (var t = e._pt, n, i, s, o; t; ) {
      for (n = t._next, i = s; i && i.pr > t.pr; ) i = i._next;
      (t._prev = i ? i._prev : o) ? t._prev._next = t : s = t, (t._next = i) ? i._prev = t : o = t, t = n;
    }
    e._pt = s;
  }, hn = function() {
    function r(t, n, i, s, o, a, l, c, u) {
      this.t = n, this.s = s, this.c = o, this.p = i, this.r = a || ym, this.d = l || this, this.set = c || xh, this.pr = u || 0, this._next = t, t && (t._prev = this);
    }
    var e = r.prototype;
    return e.modifier = function(n, i, s) {
      this.mSet = this.mSet || this.set, this.set = _T, this.m = n, this.mt = s, this.tween = i;
    }, r;
  }();
  un(ph + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r) {
    return fh[r] = 1;
  });
  Tn.TweenMax = Tn.TweenLite = Lt;
  Tn.TimelineLite = Tn.TimelineMax = tn;
  yt = new tn({
    sortChildren: false,
    defaults: Ls,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  En.stringFilter = hm;
  var Lr = [], Ya = {}, xT = [], Ef = 0, vT = 0, hc = function(e) {
    return (Ya[e] || xT).map(function(t) {
      return t();
    });
  }, Eu = function() {
    var e = Date.now(), t = [];
    e - Ef > 2 && (hc("matchMediaInit"), Lr.forEach(function(n) {
      var i = n.queries, s = n.conditions, o, a, l, c;
      for (a in i) o = qn.matchMedia(i[a]).matches, o && (l = 1), o !== s[a] && (s[a] = o, c = 1);
      c && (n.revert(), l && t.push(n));
    }), hc("matchMediaRevert"), t.forEach(function(n) {
      return n.onMatch(n, function(i) {
        return n.add(null, i);
      });
    }), Ef = e, hc("matchMedia"));
  }, Em = function() {
    function r(t, n) {
      this.selector = n && yu(n), this.data = [], this._r = [], this.isReverted = false, this.id = vT++, t && this.add(t);
    }
    var e = r.prototype;
    return e.add = function(n, i, s) {
      bt(n) && (s = i, i = n, n = bt);
      var o = this, a = function() {
        var c = xt, u = o.selector, h;
        return c && c !== o && c.data.push(o), s && (o.selector = yu(s)), xt = o, h = i.apply(o, arguments), bt(h) && o._r.push(h), xt = c, o.selector = u, o.isReverted = false, h;
      };
      return o.last = a, n === bt ? a(o, function(l) {
        return o.add(null, l);
      }) : n ? o[n] = a : a;
    }, e.ignore = function(n) {
      var i = xt;
      xt = null, n(this), xt = i;
    }, e.getTweens = function() {
      var n = [];
      return this.data.forEach(function(i) {
        return i instanceof r ? n.push.apply(n, i.getTweens()) : i instanceof Lt && !(i.parent && i.parent.data === "nested") && n.push(i);
      }), n;
    }, e.clear = function() {
      this._r.length = this.data.length = 0;
    }, e.kill = function(n, i) {
      var s = this;
      if (n ? function() {
        for (var a = s.getTweens(), l = s.data.length, c; l--; ) c = s.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(true, true, false).forEach(function(u) {
          return a.splice(a.indexOf(u), 1);
        }));
        for (a.map(function(u) {
          return {
            g: u._dur || u._delay || u._sat && !u._sat.vars.immediateRender ? u.globalTime(0) : -1 / 0,
            t: u
          };
        }).sort(function(u, h) {
          return h.g - u.g || -1 / 0;
        }).forEach(function(u) {
          return u.t.revert(n);
        }), l = s.data.length; l--; ) c = s.data[l], c instanceof tn ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof Lt) && c.revert && c.revert(n);
        s._r.forEach(function(u) {
          return u(n, s);
        }), s.isReverted = true;
      }() : this.data.forEach(function(a) {
        return a.kill && a.kill();
      }), this.clear(), i) for (var o = Lr.length; o--; ) Lr[o].id === this.id && Lr.splice(o, 1);
    }, e.revert = function(n) {
      this.kill(n || {});
    }, r;
  }(), yT = function() {
    function r(t) {
      this.contexts = [], this.scope = t, xt && xt.data.push(this);
    }
    var e = r.prototype;
    return e.add = function(n, i, s) {
      ti(n) || (n = {
        matches: n
      });
      var o = new Em(0, s || this.scope), a = o.conditions = {}, l, c, u;
      xt && !o.selector && (o.selector = xt.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = n;
      for (c in n) c === "all" ? u = 1 : (l = qn.matchMedia(n[c]), l && (Lr.indexOf(o) < 0 && Lr.push(o), (a[c] = l.matches) && (u = 1), l.addListener ? l.addListener(Eu) : l.addEventListener("change", Eu)));
      return u && i(o, function(h) {
        return o.add(null, h);
      }), this;
    }, e.revert = function(n) {
      this.kill(n || {});
    }, e.kill = function(n) {
      this.contexts.forEach(function(i) {
        return i.kill(n, true);
      });
    }, r;
  }(), ol = {
    registerPlugin: function() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      t.forEach(function(i) {
        return lm(i);
      });
    },
    timeline: function(e) {
      return new tn(e);
    },
    getTweensOf: function(e, t) {
      return yt.getTweensOf(e, t);
    },
    getProperty: function(e, t, n, i) {
      Bt(e) && (e = In(e)[0]);
      var s = Cr(e || {}).get, o = n ? Kp : $p;
      return n === "native" && (n = ""), e && (t ? o((vn[t] && vn[t].get || s)(e, t, n, i)) : function(a, l, c) {
        return o((vn[a] && vn[a].get || s)(e, a, l, c));
      });
    },
    quickSetter: function(e, t, n) {
      if (e = In(e), e.length > 1) {
        var i = e.map(function(u) {
          return fn.quickSetter(u, t, n);
        }), s = i.length;
        return function(u) {
          for (var h = s; h--; ) i[h](u);
        };
      }
      e = e[0] || {};
      var o = vn[t], a = Cr(e), l = a.harness && (a.harness.aliases || {})[t] || t, c = o ? function(u) {
        var h = new o();
        us._pt = 0, h.init(e, n ? u + n : u, us, 0, [
          e
        ]), h.render(1, h), us._pt && yh(1, us);
      } : a.set(e, l);
      return o ? c : function(u) {
        return c(e, l, n ? u + n : u, a, 1);
      };
    },
    quickTo: function(e, t, n) {
      var i, s = fn.to(e, bn((i = {}, i[t] = "+=0.1", i.paused = true, i.stagger = 0, i), n || {})), o = function(l, c, u) {
        return s.resetTo(t, l, c, u);
      };
      return o.tween = s, o;
    },
    isTweening: function(e) {
      return yt.getTweensOf(e, true).length > 0;
    },
    defaults: function(e) {
      return e && e.ease && (e.ease = Pr(e.ease, Ls.ease)), xf(Ls, e || {});
    },
    config: function(e) {
      return xf(En, e || {});
    },
    registerEffect: function(e) {
      var t = e.name, n = e.effect, i = e.plugins, s = e.defaults, o = e.extendTimeline;
      (i || "").split(",").forEach(function(a) {
        return a && !vn[a] && !Tn[a] && Ho(t + " effect requires " + a + " plugin.");
      }), ac[t] = function(a, l, c) {
        return n(In(a), bn(l || {}, s), c);
      }, o && (tn.prototype[t] = function(a, l, c) {
        return this.add(ac[t](a, ti(l) ? l : (c = l) && {}, this), c);
      });
    },
    registerEase: function(e, t) {
      qe[e] = Pr(t);
    },
    parseEase: function(e, t) {
      return arguments.length ? Pr(e, t) : qe;
    },
    getById: function(e) {
      return yt.getById(e);
    },
    exportRoot: function(e, t) {
      e === void 0 && (e = {});
      var n = new tn(e), i, s;
      for (n.smoothChildTiming = cn(e.smoothChildTiming), yt.remove(n), n._dp = 0, n._time = n._tTime = yt._time, i = yt._first; i; ) s = i._next, (t || !(!i._dur && i instanceof Lt && i.vars.onComplete === i._targets[0])) && Kn(n, i, i._start - i._delay), i = s;
      return Kn(yt, n, 0), n;
    },
    context: function(e, t) {
      return e ? new Em(e, t) : xt;
    },
    matchMedia: function(e) {
      return new yT(e);
    },
    matchMediaRefresh: function() {
      return Lr.forEach(function(e) {
        var t = e.conditions, n, i;
        for (i in t) t[i] && (t[i] = false, n = 1);
        n && e.revert();
      }) || Eu();
    },
    addEventListener: function(e, t) {
      var n = Ya[e] || (Ya[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function(e, t) {
      var n = Ya[e], i = n && n.indexOf(t);
      i >= 0 && n.splice(i, 1);
    },
    utils: {
      wrap: JE,
      wrapYoyo: QE,
      distribute: nm,
      random: rm,
      snap: im,
      normalize: ZE,
      getUnit: Yt,
      clamp: YE,
      splitColor: cm,
      toArray: In,
      selector: yu,
      mapRange: om,
      pipe: KE,
      unitize: jE,
      interpolate: eT,
      shuffle: tm
    },
    install: Gp,
    effects: ac,
    ticker: yn,
    updateRoot: tn.updateRoot,
    plugins: vn,
    globalTimeline: yt,
    core: {
      PropTween: hn,
      globals: Wp,
      Tween: Lt,
      Timeline: tn,
      Animation: qo,
      getCache: Cr,
      _removeLinkedListItem: gl,
      reverting: function() {
        return Ht;
      },
      context: function(e) {
        return e && xt && (xt.data.push(e), e._ctx = xt), xt;
      },
      suppressOverwrites: function(e) {
        return lh = e;
      }
    }
  };
  un("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
    return ol[r] = Lt[r];
  });
  yn.add(tn.updateRoot);
  us = ol.to({}, {
    duration: 0
  });
  var ST = function(e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; ) n = n._next;
    return n;
  }, MT = function(e, t) {
    var n = e._targets, i, s, o;
    for (i in t) for (s = n.length; s--; ) o = e._ptLookup[s][i], o && (o = o.d) && (o._pt && (o = ST(o, i)), o && o.modifier && o.modifier(t[i], e, n[s], i));
  }, dc = function(e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function(i, s, o) {
        o._onInit = function(a) {
          var l, c;
          if (Bt(s) && (l = {}, un(s, function(u) {
            return l[u] = 1;
          }), s = l), t) {
            l = {};
            for (c in s) l[c] = t(s[c]);
            s = l;
          }
          MT(a, s);
        };
      }
    };
  }, fn = ol.registerPlugin({
    name: "attr",
    init: function(e, t, n, i, s) {
      var o, a, l;
      this.tween = n;
      for (o in t) l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[o], i, s, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
    },
    render: function(e, t) {
      for (var n = t._pt; n; ) Ht ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next;
    }
  }, {
    name: "endArray",
    init: function(e, t) {
      for (var n = t.length; n--; ) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
    }
  }, dc("roundProps", Su), dc("modifiers"), dc("snap", im)) || ol;
  Lt.version = tn.version = fn.version = "3.12.7";
  Hp = 1;
  uh() && Us();
  qe.Power0;
  qe.Power1;
  qe.Power2;
  qe.Power3;
  qe.Power4;
  qe.Linear;
  qe.Quad;
  qe.Cubic;
  qe.Quart;
  qe.Quint;
  qe.Strong;
  qe.Elastic;
  qe.Back;
  qe.SteppedEase;
  qe.Bounce;
  qe.Sine;
  qe.Expo;
  qe.Circ;
  var Tf, qi, _s, Sh, Ar, bf, Mh, ET = function() {
    return typeof window < "u";
  }, Pi = {}, mr = 180 / Math.PI, xs = Math.PI / 180, ss = Math.atan2, wf = 1e8, Eh = /([A-Z])/g, TT = /(left|right|width|margin|padding|x)/i, bT = /[\s,\(]\S/, Zn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  }, Tu = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  }, wT = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  }, AT = function(e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
  }, CT = function(e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  }, Tm = function(e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  }, bm = function(e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  }, RT = function(e, t, n) {
    return e.style[t] = n;
  }, PT = function(e, t, n) {
    return e.style.setProperty(t, n);
  }, LT = function(e, t, n) {
    return e._gsap[t] = n;
  }, DT = function(e, t, n) {
    return e._gsap.scaleX = e._gsap.scaleY = n;
  }, IT = function(e, t, n, i, s) {
    var o = e._gsap;
    o.scaleX = o.scaleY = n, o.renderTransform(s, o);
  }, NT = function(e, t, n, i, s) {
    var o = e._gsap;
    o[t] = n, o.renderTransform(s, o);
  }, Mt = "transform", dn = Mt + "Origin", UT = function r(e, t) {
    var n = this, i = this.target, s = i.style, o = i._gsap;
    if (e in Pi && s) {
      if (this.tfm = this.tfm || {}, e !== "transform") e = Zn[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return n.tfm[a] = vi(i, a);
      }) : this.tfm[e] = o.x ? o[e] : vi(i, e), e === dn && (this.tfm.zOrigin = o.zOrigin);
      else return Zn.transform.split(",").forEach(function(a) {
        return r.call(n, a, t);
      });
      if (this.props.indexOf(Mt) >= 0) return;
      o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(dn, t, "")), e = Mt;
    }
    (s || t) && this.props.push(e, t, s[e]);
  }, wm = function(e) {
    e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
  }, OT = function() {
    var e = this.props, t = this.target, n = t.style, i = t._gsap, s, o;
    for (s = 0; s < e.length; s += 3) e[s + 1] ? e[s + 1] === 2 ? t[e[s]](e[s + 2]) : t[e[s]] = e[s + 2] : e[s + 2] ? n[e[s]] = e[s + 2] : n.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(Eh, "-$1").toLowerCase());
    if (this.tfm) {
      for (o in this.tfm) i[o] = this.tfm[o];
      i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), s = Mh(), (!s || !s.isStart) && !n[Mt] && (wm(n), i.zOrigin && n[dn] && (n[dn] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
    }
  }, Am = function(e, t) {
    var n = {
      target: e,
      props: [],
      revert: OT,
      save: UT
    };
    return e._gsap || fn.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
      return n.save(i);
    }), n;
  }, Cm, bu = function(e, t) {
    var n = qi.createElementNS ? qi.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : qi.createElement(e);
    return n && n.style ? n : qi.createElement(e);
  }, ei = function r(e, t, n) {
    var i = getComputedStyle(e);
    return i[t] || i.getPropertyValue(t.replace(Eh, "-$1").toLowerCase()) || i.getPropertyValue(t) || !n && r(e, Os(t) || t, 1) || "";
  }, Af = "O,Moz,ms,Ms,Webkit".split(","), Os = function(e, t, n) {
    var i = t || Ar, s = i.style, o = 5;
    if (e in s && !n) return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Af[o] + e in s); ) ;
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Af[o] : "") + e;
  }, wu = function() {
    ET() && window.document && (Tf = window, qi = Tf.document, _s = qi.documentElement, Ar = bu("div") || {
      style: {}
    }, bu("div"), Mt = Os(Mt), dn = Mt + "Origin", Ar.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Cm = !!Os("perspective"), Mh = fn.core.reverting, Sh = 1);
  }, Cf = function(e) {
    var t = e.ownerSVGElement, n = bu("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(true), s;
    i.style.display = "block", n.appendChild(i), _s.appendChild(n);
    try {
      s = i.getBBox();
    } catch {
    }
    return n.removeChild(i), _s.removeChild(n), s;
  }, Rf = function(e, t) {
    for (var n = t.length; n--; ) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  }, Rm = function(e) {
    var t, n;
    try {
      t = e.getBBox();
    } catch {
      t = Cf(e), n = 1;
    }
    return t && (t.width || t.height) || n || (t = Cf(e)), t && !t.width && !t.x && !t.y ? {
      x: +Rf(e, [
        "x",
        "cx",
        "x1"
      ]) || 0,
      y: +Rf(e, [
        "y",
        "cy",
        "y1"
      ]) || 0,
      width: 0,
      height: 0
    } : t;
  }, Pm = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Rm(e));
  }, Nr = function(e, t) {
    if (t) {
      var n = e.style, i;
      t in Pi && t !== dn && (t = Mt), n.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(i === "--" ? t : t.replace(Eh, "-$1").toLowerCase())) : n.removeAttribute(t);
    }
  }, Yi = function(e, t, n, i, s, o) {
    var a = new hn(e._pt, t, n, 0, 1, o ? bm : Tm);
    return e._pt = a, a.b = i, a.e = s, e._props.push(n), a;
  }, Pf = {
    deg: 1,
    rad: 1,
    turn: 1
  }, FT = {
    grid: 1,
    flex: 1
  }, Ji = function r(e, t, n, i) {
    var s = parseFloat(n) || 0, o = (n + "").trim().substr((s + "").length) || "px", a = Ar.style, l = TT.test(t), c = e.tagName.toLowerCase() === "svg", u = (c ? "client" : "offset") + (l ? "Width" : "Height"), h = 100, d = i === "px", f = i === "%", _, g, m, p;
    if (i === o || !s || Pf[i] || Pf[o]) return s;
    if (o !== "px" && !d && (s = r(e, t, n, "px")), p = e.getCTM && Pm(e), (f || o === "%") && (Pi[t] || ~t.indexOf("adius"))) return _ = p ? e.getBBox()[l ? "width" : "height"] : e[u], At(f ? s / _ * h : s / 100 * _);
    if (a[l ? "width" : "height"] = h + (d ? o : i), g = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !c ? e : e.parentNode, p && (g = (e.ownerSVGElement || {}).parentNode), (!g || g === qi || !g.appendChild) && (g = qi.body), m = g._gsap, m && f && m.width && l && m.time === yn.time && !m.uncache) return At(s / m.width * h);
    if (f && (t === "height" || t === "width")) {
      var y = e.style[t];
      e.style[t] = h + i, _ = e[u], y ? e.style[t] = y : Nr(e, t);
    } else (f || o === "%") && !FT[ei(g, "display")] && (a.position = ei(e, "position")), g === e && (a.position = "static"), g.appendChild(Ar), _ = Ar[u], g.removeChild(Ar), a.position = "absolute";
    return l && f && (m = Cr(g), m.time = yn.time, m.width = g[u]), At(d ? _ * s / h : _ && s ? h / _ * s : 0);
  }, vi = function(e, t, n, i) {
    var s;
    return Sh || wu(), t in Zn && t !== "transform" && (t = Zn[t], ~t.indexOf(",") && (t = t.split(",")[0])), Pi[t] && t !== "transform" ? (s = $o(e, i), s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : ll(ei(e, dn)) + " " + s.zOrigin + "px") : (s = e.style[t], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = al[t] && al[t](e, t, n) || ei(e, t) || qp(e, t) || (t === "opacity" ? 1 : 0))), n && !~(s + "").trim().indexOf(" ") ? Ji(e, t, s, n) + n : s;
  }, BT = function(e, t, n, i) {
    if (!n || n === "none") {
      var s = Os(t, e, 1), o = s && ei(e, s, 1);
      o && o !== n ? (t = s, n = o) : t === "borderColor" && (n = ei(e, "borderTopColor"));
    }
    var a = new hn(this._pt, e.style, t, 0, 1, Sm), l = 0, c = 0, u, h, d, f, _, g, m, p, y, v, x, w;
    if (a.b = n, a.e = i, n += "", i += "", i === "auto" && (g = e.style[t], e.style[t] = i, i = ei(e, t) || i, g ? e.style[t] = g : Nr(e, t)), u = [
      n,
      i
    ], hm(u), n = u[0], i = u[1], d = n.match(cs) || [], w = i.match(cs) || [], w.length) {
      for (; h = cs.exec(i); ) m = h[0], y = i.substring(l, h.index), _ ? _ = (_ + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (_ = 1), m !== (g = d[c++] || "") && (f = parseFloat(g) || 0, x = g.substr((f + "").length), m.charAt(1) === "=" && (m = gs(f, m) + x), p = parseFloat(m), v = m.substr((p + "").length), l = cs.lastIndex - v.length, v || (v = v || En.units[t] || x, l === i.length && (i += v, a.e += v)), x !== v && (f = Ji(e, t, g, v) || 0), a._pt = {
        _next: a._pt,
        p: y || c === 1 ? y : ",",
        s: f,
        c: p - f,
        m: _ && _ < 4 || t === "zIndex" ? Math.round : 0
      });
      a.c = l < i.length ? i.substring(l, i.length) : "";
    } else a.r = t === "display" && i === "none" ? bm : Tm;
    return kp.test(i) && (a.e = 0), this._pt = a, a;
  }, Lf = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  }, zT = function(e) {
    var t = e.split(" "), n = t[0], i = t[1] || "50%";
    return (n === "top" || n === "bottom" || i === "left" || i === "right") && (e = n, n = i, i = e), t[0] = Lf[n] || n, t[1] = Lf[i] || i, t.join(" ");
  }, kT = function(e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t, i = n.style, s = t.u, o = n._gsap, a, l, c;
      if (s === "all" || s === true) i.cssText = "", l = 1;
      else for (s = s.split(","), c = s.length; --c > -1; ) a = s[c], Pi[a] && (l = 1, a = a === "transformOrigin" ? dn : Mt), Nr(n, a);
      l && (Nr(n, Mt), o && (o.svg && n.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", $o(n, 1), o.uncache = 1, wm(i)));
    }
  }, al = {
    clearProps: function(e, t, n, i, s) {
      if (s.data !== "isFromStart") {
        var o = e._pt = new hn(e._pt, t, n, 0, 0, kT);
        return o.u = i, o.pr = -10, o.tween = s, e._props.push(n), 1;
      }
    }
  }, Yo = [
    1,
    0,
    0,
    1,
    0,
    0
  ], Lm = {}, Dm = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  }, Df = function(e) {
    var t = ei(e, Mt);
    return Dm(t) ? Yo : t.substr(7).match(zp).map(At);
  }, Th = function(e, t) {
    var n = e._gsap || Cr(e), i = e.style, s = Df(e), o, a, l, c;
    return n.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, s = [
      l.a,
      l.b,
      l.c,
      l.d,
      l.e,
      l.f
    ], s.join(",") === "1,0,0,1,0,0" ? Yo : s) : (s === Yo && !e.offsetParent && e !== _s && !n.svg && (l = i.display, i.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1, a = e.nextElementSibling, _s.appendChild(e)), s = Df(e), l ? i.display = l : Nr(e, "display"), c && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : _s.removeChild(e))), t && s.length > 6 ? [
      s[0],
      s[1],
      s[4],
      s[5],
      s[12],
      s[13]
    ] : s);
  }, Au = function(e, t, n, i, s, o) {
    var a = e._gsap, l = s || Th(e, true), c = a.xOrigin || 0, u = a.yOrigin || 0, h = a.xOffset || 0, d = a.yOffset || 0, f = l[0], _ = l[1], g = l[2], m = l[3], p = l[4], y = l[5], v = t.split(" "), x = parseFloat(v[0]) || 0, w = parseFloat(v[1]) || 0, b, A, P, S;
    n ? l !== Yo && (A = f * m - _ * g) && (P = x * (m / A) + w * (-g / A) + (g * y - m * p) / A, S = x * (-_ / A) + w * (f / A) - (f * y - _ * p) / A, x = P, w = S) : (b = Rm(e), x = b.x + (~v[0].indexOf("%") ? x / 100 * b.width : x), w = b.y + (~(v[1] || v[0]).indexOf("%") ? w / 100 * b.height : w)), i || i !== false && a.smooth ? (p = x - c, y = w - u, a.xOffset = h + (p * f + y * g) - p, a.yOffset = d + (p * _ + y * m) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = x, a.yOrigin = w, a.smooth = !!i, a.origin = t, a.originIsAbsolute = !!n, e.style[dn] = "0px 0px", o && (Yi(o, a, "xOrigin", c, x), Yi(o, a, "yOrigin", u, w), Yi(o, a, "xOffset", h, a.xOffset), Yi(o, a, "yOffset", d, a.yOffset)), e.setAttribute("data-svg-origin", x + " " + w);
  }, $o = function(e, t) {
    var n = e._gsap || new mm(e);
    if ("x" in n && !t && !n.uncache) return n;
    var i = e.style, s = n.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), c = ei(e, dn) || "0", u, h, d, f, _, g, m, p, y, v, x, w, b, A, P, S, M, L, G, O, V, q, B, K, H, oe, ce, ge, Le, Ke, X, ie;
    return u = h = d = g = m = p = y = v = x = 0, f = _ = 1, n.svg = !!(e.getCTM && Pm(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[Mt] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Mt] !== "none" ? l[Mt] : "")), i.scale = i.rotate = i.translate = "none"), A = Th(e, n.svg), n.svg && (n.uncache ? (H = e.getBBox(), c = n.xOrigin - H.x + "px " + (n.yOrigin - H.y) + "px", K = "") : K = !t && e.getAttribute("data-svg-origin"), Au(e, K || c, !!K || n.originIsAbsolute, n.smooth !== false, A)), w = n.xOrigin || 0, b = n.yOrigin || 0, A !== Yo && (L = A[0], G = A[1], O = A[2], V = A[3], u = q = A[4], h = B = A[5], A.length === 6 ? (f = Math.sqrt(L * L + G * G), _ = Math.sqrt(V * V + O * O), g = L || G ? ss(G, L) * mr : 0, y = O || V ? ss(O, V) * mr + g : 0, y && (_ *= Math.abs(Math.cos(y * xs))), n.svg && (u -= w - (w * L + b * O), h -= b - (w * G + b * V))) : (ie = A[6], Ke = A[7], ce = A[8], ge = A[9], Le = A[10], X = A[11], u = A[12], h = A[13], d = A[14], P = ss(ie, Le), m = P * mr, P && (S = Math.cos(-P), M = Math.sin(-P), K = q * S + ce * M, H = B * S + ge * M, oe = ie * S + Le * M, ce = q * -M + ce * S, ge = B * -M + ge * S, Le = ie * -M + Le * S, X = Ke * -M + X * S, q = K, B = H, ie = oe), P = ss(-O, Le), p = P * mr, P && (S = Math.cos(-P), M = Math.sin(-P), K = L * S - ce * M, H = G * S - ge * M, oe = O * S - Le * M, X = V * M + X * S, L = K, G = H, O = oe), P = ss(G, L), g = P * mr, P && (S = Math.cos(P), M = Math.sin(P), K = L * S + G * M, H = q * S + B * M, G = G * S - L * M, B = B * S - q * M, L = K, q = H), m && Math.abs(m) + Math.abs(g) > 359.9 && (m = g = 0, p = 180 - p), f = At(Math.sqrt(L * L + G * G + O * O)), _ = At(Math.sqrt(B * B + ie * ie)), P = ss(q, B), y = Math.abs(P) > 2e-4 ? P * mr : 0, x = X ? 1 / (X < 0 ? -X : X) : 0), n.svg && (K = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !Dm(ei(e, Mt)), K && e.setAttribute("transform", K))), Math.abs(y) > 90 && Math.abs(y) < 270 && (s ? (f *= -1, y += g <= 0 ? 180 : -180, g += g <= 0 ? 180 : -180) : (_ *= -1, y += y <= 0 ? 180 : -180)), t = t || n.uncache, n.x = u - ((n.xPercent = u && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + o, n.y = h - ((n.yPercent = h && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + o, n.z = d + o, n.scaleX = At(f), n.scaleY = At(_), n.rotation = At(g) + a, n.rotationX = At(m) + a, n.rotationY = At(p) + a, n.skewX = y + a, n.skewY = v + a, n.transformPerspective = x + o, (n.zOrigin = parseFloat(c.split(" ")[2]) || !t && n.zOrigin || 0) && (i[dn] = ll(c)), n.xOffset = n.yOffset = 0, n.force3D = En.force3D, n.renderTransform = n.svg ? HT : Cm ? Im : VT, n.uncache = 0, n;
  }, ll = function(e) {
    return (e = e.split(" "))[0] + " " + e[1];
  }, fc = function(e, t, n) {
    var i = Yt(t);
    return At(parseFloat(t) + parseFloat(Ji(e, "x", n + "px", i))) + i;
  }, VT = function(e, t) {
    t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Im(e, t);
  }, ur = "0deg", fo = "0px", hr = ") ", Im = function(e, t) {
    var n = t || this, i = n.xPercent, s = n.yPercent, o = n.x, a = n.y, l = n.z, c = n.rotation, u = n.rotationY, h = n.rotationX, d = n.skewX, f = n.skewY, _ = n.scaleX, g = n.scaleY, m = n.transformPerspective, p = n.force3D, y = n.target, v = n.zOrigin, x = "", w = p === "auto" && e && e !== 1 || p === true;
    if (v && (h !== ur || u !== ur)) {
      var b = parseFloat(u) * xs, A = Math.sin(b), P = Math.cos(b), S;
      b = parseFloat(h) * xs, S = Math.cos(b), o = fc(y, o, A * S * -v), a = fc(y, a, -Math.sin(b) * -v), l = fc(y, l, P * S * -v + v);
    }
    m !== fo && (x += "perspective(" + m + hr), (i || s) && (x += "translate(" + i + "%, " + s + "%) "), (w || o !== fo || a !== fo || l !== fo) && (x += l !== fo || w ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + hr), c !== ur && (x += "rotate(" + c + hr), u !== ur && (x += "rotateY(" + u + hr), h !== ur && (x += "rotateX(" + h + hr), (d !== ur || f !== ur) && (x += "skew(" + d + ", " + f + hr), (_ !== 1 || g !== 1) && (x += "scale(" + _ + ", " + g + hr), y.style[Mt] = x || "translate(0, 0)";
  }, HT = function(e, t) {
    var n = t || this, i = n.xPercent, s = n.yPercent, o = n.x, a = n.y, l = n.rotation, c = n.skewX, u = n.skewY, h = n.scaleX, d = n.scaleY, f = n.target, _ = n.xOrigin, g = n.yOrigin, m = n.xOffset, p = n.yOffset, y = n.forceCSS, v = parseFloat(o), x = parseFloat(a), w, b, A, P, S;
    l = parseFloat(l), c = parseFloat(c), u = parseFloat(u), u && (u = parseFloat(u), c += u, l += u), l || c ? (l *= xs, c *= xs, w = Math.cos(l) * h, b = Math.sin(l) * h, A = Math.sin(l - c) * -d, P = Math.cos(l - c) * d, c && (u *= xs, S = Math.tan(c - u), S = Math.sqrt(1 + S * S), A *= S, P *= S, u && (S = Math.tan(u), S = Math.sqrt(1 + S * S), w *= S, b *= S)), w = At(w), b = At(b), A = At(A), P = At(P)) : (w = h, P = d, b = A = 0), (v && !~(o + "").indexOf("px") || x && !~(a + "").indexOf("px")) && (v = Ji(f, "x", o, "px"), x = Ji(f, "y", a, "px")), (_ || g || m || p) && (v = At(v + _ - (_ * w + g * A) + m), x = At(x + g - (_ * b + g * P) + p)), (i || s) && (S = f.getBBox(), v = At(v + i / 100 * S.width), x = At(x + s / 100 * S.height)), S = "matrix(" + w + "," + b + "," + A + "," + P + "," + v + "," + x + ")", f.setAttribute("transform", S), y && (f.style[Mt] = S);
  }, GT = function(e, t, n, i, s) {
    var o = 360, a = Bt(s), l = parseFloat(s) * (a && ~s.indexOf("rad") ? mr : 1), c = l - i, u = i + c + "deg", h, d;
    return a && (h = s.split("_")[1], h === "short" && (c %= o, c !== c % (o / 2) && (c += c < 0 ? o : -360)), h === "cw" && c < 0 ? c = (c + o * wf) % o - ~~(c / o) * o : h === "ccw" && c > 0 && (c = (c - o * wf) % o - ~~(c / o) * o)), e._pt = d = new hn(e._pt, t, n, i, c, wT), d.e = u, d.u = "deg", e._props.push(n), d;
  }, If = function(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }, WT = function(e, t, n) {
    var i = If({}, n._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = n.style, a, l, c, u, h, d, f, _;
    i.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), o[Mt] = t, a = $o(n, 1), Nr(n, Mt), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[Mt], o[Mt] = t, a = $o(n, 1), o[Mt] = c);
    for (l in Pi) c = i[l], u = a[l], c !== u && s.indexOf(l) < 0 && (f = Yt(c), _ = Yt(u), h = f !== _ ? Ji(n, l, c, _) : parseFloat(c), d = parseFloat(u), e._pt = new hn(e._pt, a, l, h, d - h, Tu), e._pt.u = _ || 0, e._props.push(l));
    If(a, i);
  };
  un("padding,margin,Width,Radius", function(r, e) {
    var t = "Top", n = "Right", i = "Bottom", s = "Left", o = (e < 3 ? [
      t,
      n,
      i,
      s
    ] : [
      t + s,
      t + n,
      i + n,
      i + s
    ]).map(function(a) {
      return e < 2 ? r + a : "border" + a + r;
    });
    al[e > 1 ? "border" + r : r] = function(a, l, c, u, h) {
      var d, f;
      if (arguments.length < 4) return d = o.map(function(_) {
        return vi(a, _, c);
      }), f = d.join(" "), f.split(d[0]).length === 5 ? d[0] : f;
      d = (u + "").split(" "), f = {}, o.forEach(function(_, g) {
        return f[_] = d[g] = d[g] || d[(g - 1) / 2 | 0];
      }), a.init(l, f, h);
    };
  });
  var Nm = {
    name: "css",
    register: wu,
    targetTest: function(e) {
      return e.style && e.nodeType;
    },
    init: function(e, t, n, i, s) {
      var o = this._props, a = e.style, l = n.vars.startAt, c, u, h, d, f, _, g, m, p, y, v, x, w, b, A, P;
      Sh || wu(), this.styles = this.styles || Am(e), P = this.styles.props, this.tween = n;
      for (g in t) if (g !== "autoRound" && (u = t[g], !(vn[g] && gm(g, t, n, i, e, s)))) {
        if (f = typeof u, _ = al[g], f === "function" && (u = u.call(n, i, e, s), f = typeof u), f === "string" && ~u.indexOf("random(") && (u = Wo(u)), _) _(this, e, g, u, n) && (A = 1);
        else if (g.substr(0, 2) === "--") c = (getComputedStyle(e).getPropertyValue(g) + "").trim(), u += "", ji.lastIndex = 0, ji.test(c) || (m = Yt(c), p = Yt(u)), p ? m !== p && (c = Ji(e, g, c, p) + p) : m && (u += m), this.add(a, "setProperty", c, u, i, s, 0, 0, g), o.push(g), P.push(g, 0, a[g]);
        else if (f !== "undefined") {
          if (l && g in l ? (c = typeof l[g] == "function" ? l[g].call(n, i, e, s) : l[g], Bt(c) && ~c.indexOf("random(") && (c = Wo(c)), Yt(c + "") || c === "auto" || (c += En.units[g] || Yt(vi(e, g)) || ""), (c + "").charAt(1) === "=" && (c = vi(e, g))) : c = vi(e, g), d = parseFloat(c), y = f === "string" && u.charAt(1) === "=" && u.substr(0, 2), y && (u = u.substr(2)), h = parseFloat(u), g in Zn && (g === "autoAlpha" && (d === 1 && vi(e, "visibility") === "hidden" && h && (d = 0), P.push("visibility", 0, a.visibility), Yi(this, a, "visibility", d ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), g !== "scale" && g !== "transform" && (g = Zn[g], ~g.indexOf(",") && (g = g.split(",")[0]))), v = g in Pi, v) {
            if (this.styles.save(g), x || (w = e._gsap, w.renderTransform && !t.parseTransform || $o(e, t.parseTransform), b = t.smoothOrigin !== false && w.smooth, x = this._pt = new hn(this._pt, a, Mt, 0, 1, w.renderTransform, w, 0, -1), x.dep = 1), g === "scale") this._pt = new hn(this._pt, w, "scaleY", w.scaleY, (y ? gs(w.scaleY, y + h) : h) - w.scaleY || 0, Tu), this._pt.u = 0, o.push("scaleY", g), g += "X";
            else if (g === "transformOrigin") {
              P.push(dn, 0, a[dn]), u = zT(u), w.svg ? Au(e, u, 0, b, 0, this) : (p = parseFloat(u.split(" ")[2]) || 0, p !== w.zOrigin && Yi(this, w, "zOrigin", w.zOrigin, p), Yi(this, a, g, ll(c), ll(u)));
              continue;
            } else if (g === "svgOrigin") {
              Au(e, u, 1, b, 0, this);
              continue;
            } else if (g in Lm) {
              GT(this, w, g, d, y ? gs(d, y + u) : u);
              continue;
            } else if (g === "smoothOrigin") {
              Yi(this, w, "smooth", w.smooth, u);
              continue;
            } else if (g === "force3D") {
              w[g] = u;
              continue;
            } else if (g === "transform") {
              WT(this, u, e);
              continue;
            }
          } else g in a || (g = Os(g) || g);
          if (v || (h || h === 0) && (d || d === 0) && !bT.test(u) && g in a) m = (c + "").substr((d + "").length), h || (h = 0), p = Yt(u) || (g in En.units ? En.units[g] : m), m !== p && (d = Ji(e, g, c, p)), this._pt = new hn(this._pt, v ? w : a, g, d, (y ? gs(d, y + h) : h) - d, !v && (p === "px" || g === "zIndex") && t.autoRound !== false ? CT : Tu), this._pt.u = p || 0, m !== p && p !== "%" && (this._pt.b = c, this._pt.r = AT);
          else if (g in a) BT.call(this, e, g, c, y ? y + u : u);
          else if (g in e) this.add(e, g, c || e[g], y ? y + u : u, i, s);
          else if (g !== "parseTransform") {
            dh(g, u);
            continue;
          }
          v || (g in a ? P.push(g, 0, a[g]) : typeof e[g] == "function" ? P.push(g, 2, e[g]()) : P.push(g, 1, c || e[g])), o.push(g);
        }
      }
      A && Mm(this);
    },
    render: function(e, t) {
      if (t.tween._time || !Mh()) for (var n = t._pt; n; ) n.r(e, n.d), n = n._next;
      else t.styles.revert();
    },
    get: vi,
    aliases: Zn,
    getSetter: function(e, t, n) {
      var i = Zn[t];
      return i && i.indexOf(",") < 0 && (t = i), t in Pi && t !== dn && (e._gsap.x || vi(e, "x")) ? n && bf === n ? t === "scale" ? DT : LT : (bf = n || {}) && (t === "scale" ? IT : NT) : e.style && !ch(e.style[t]) ? RT : ~t.indexOf("-") ? PT : vh(e, t);
    },
    core: {
      _removeProperty: Nr,
      _getMatrix: Th
    }
  };
  fn.utils.checkPrefix = Os;
  fn.core.getStyleSaver = Am;
  (function(r, e, t, n) {
    var i = un(r + "," + e + "," + t, function(s) {
      Pi[s] = 1;
    });
    un(e, function(s) {
      En.units[s] = "deg", Lm[s] = 1;
    }), Zn[i[13]] = r + "," + e, un(n, function(s) {
      var o = s.split(":");
      Zn[o[1]] = i[o[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
    En.units[r] = "px";
  });
  fn.registerPlugin(Nm);
  ft = fn.registerPlugin(Nm) || fn;
  ft.core.Tween;
  const pc = /* @__PURE__ */ new Map(), bh = [], Fs = new Fr(), $a = new ee();
  let zi = null;
  const mc = new ee(), zr = [];
  async function cl(r) {
    return await (await fetch(r)).text();
  }
  async function Cu(r, e, t, n = 1.5, i, s = 0.02, o = "#F99F00", a = 0.05, l = 0.03) {
    return new Promise((c, u) => {
      new oh().load("./../../res/font/Genos_Bold.json", async (d) => {
        try {
          const f = new ah(r, {
            font: d,
            size: n,
            depth: a,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: l,
            bevelSize: s,
            bevelOffset: 0,
            bevelSegments: 5
          }), _ = await cl("./../../res/shaders/textVertexShader.glsl"), g = await cl("./../../res/shaders/textFragmentShader.glsl"), m = new $t({
            uniforms: {
              textColor: {
                value: new Ce(o)
              },
              opacity: {
                value: 1
              }
            },
            vertexShader: _,
            fragmentShader: g,
            transparent: true
          }), p = new Ct(f, m);
          p.position.set(e.x, e.y, e.z), p.rotation.set(t.x, t.y, t.z), i.add(p), c(p);
        } catch (f) {
          u(f);
        }
      }, void 0, u);
    });
  }
  function kr(r, e, t, n, i, s, o, a) {
    if (pc.has(r)) {
      const c = pc.get(r);
      return c.position.set(t.x, t.y, t.z), c.scale.set(n, n, n), c.rotation.set(i.x, i.y, i.z), o.add(c), Nf(c, s), a && a(c), c;
    }
    new YM().load(e, (c) => {
      const u = c.scene;
      u.position.set(t.x, t.y, t.z), u.scale.set(n, n, n), u.rotation.set(i.x, i.y, i.z), u.traverse((h) => {
        h.isMesh && h.geometry.computeBoundingSphere();
      }), pc.set(r, u), o.add(u), Nf(u, s), a && a(u);
    }, void 0, (c) => {
      console.error(`Error loading model ${r}:`, c);
    });
  }
  function Nf(r, e) {
    (e == null ? void 0 : e.position) && ft.to(r.position, {
      x: e.position.x,
      y: e.position.y,
      z: e.position.z,
      duration: e.position.duration || 3,
      ease: e.position.ease || "power2.out"
    }), (e == null ? void 0 : e.rotation) && ft.to(r.rotation, {
      x: r.rotation.x + (e.rotation.x || 0),
      y: r.rotation.y + (e.rotation.y || 0),
      z: r.rotation.z + (e.rotation.z || 0),
      duration: e.rotation.duration || 45,
      ease: e.rotation.ease || "linear",
      repeat: e.rotation.repeat ?? -1
    });
  }
  function XT(r, e, t, n) {
    const i = new Gi();
    i.position.set(e.x, e.y, e.z), i.rotation.set(t.x, t.y, t.z);
    const s = 1.2, o = 0;
    r.forEach((a, l) => {
      const c = {
        x: 0,
        y: o - l * s,
        z: 0
      }, u = qT(a.text, c, n, a.onClick);
      i.add(u);
    }), n.add(i);
  }
  function qT(r, e, t, n, i = 0.5) {
    const s = new oh(), o = new Ct();
    return s.load("./../../res/font/GenosThin_Regular.json", (a) => {
      const l = new ah(r, {
        font: a,
        size: i,
        depth: 0.05,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5
      }), c = new ks({
        color: 16753920,
        transparent: true,
        opacity: 1,
        emissive: 0,
        metalness: 0,
        roughness: 1
      });
      o.geometry = l, o.material = c, o.position.set(e.x + 1, e.y - 1.25, e.z), o.userData.onClick = n, o.userData.originalColor = c.color.getHex(), bh.push(o), ft.to(c, {
        opacity: 1,
        duration: 2,
        delay: Math.abs(e.y) * 0.15,
        ease: "power2.out"
      });
    }), o;
  }
  function YT(r, e, t) {
    const n = t.domElement.getBoundingClientRect();
    $a.x = (r.clientX - n.left) / n.width * 2 - 1, $a.y = -((r.clientY - n.top) / n.height) * 2 + 1, Fs.setFromCamera($a, e);
    const i = Fs.intersectObjects(bh);
    if (i.length > 0) {
      const s = i[0].object;
      zi !== s && (zi && ft.to(zi.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.3
      }), zi = s, document.body.style.cursor = "pointer", ft.to(zi.scale, {
        x: 1.1,
        y: 1.1,
        z: 1.1,
        duration: 0.3
      }));
    } else zi && (ft.to(zi.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 0.3
    }), zi = null), document.body.style.cursor = "default";
  }
  function $T(r, e) {
    Fs.setFromCamera($a, e);
    const t = Fs.intersectObjects(bh);
    if (t.length > 0) {
      const n = t[0].object;
      n.userData.onClick && n.userData.onClick();
    }
  }
  function KT(r, e, t) {
    window.addEventListener("mousemove", (n) => YT(n, r, t)), window.addEventListener("click", (n) => $T(n, r));
  }
  function Ru(r, e) {
    r.traverse((t) => {
      t.isMesh && (t.userData.onClick = e, zr.push(t));
    });
  }
  function jT(r, e) {
    window.addEventListener("click", (t) => {
      const n = e.domElement.getBoundingClientRect();
      mc.x = (t.clientX - n.left) / n.width * 2 - 1, mc.y = -((t.clientY - n.top) / n.height) * 2 + 1, Fs.setFromCamera(mc, r);
      const i = Fs.intersectObjects(zr, true);
      if (i.length > 0) {
        const s = i[0].object;
        s.userData.onClick && s.userData.onClick();
      }
    });
  }
  async function Vr(r, e, t, n = 0.7, i, s) {
    return new Promise((o, a) => {
      new oh().load("./../../res/font/GenosThin_Regular.json", async (c) => {
        try {
          const u = new ah(r, {
            font: c,
            size: n,
            depth: 0.05,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
          });
          u.computeBoundingBox(), u.center();
          const h = await cl("/res/shaders/textVertexShader.glsl"), d = await cl("/res/shaders/textFragmentShader.glsl"), f = new $t({
            uniforms: {
              textColor: {
                value: new Ce(249 / 255, 159 / 255, 0 / 255)
              }
            },
            vertexShader: h,
            fragmentShader: d
          }), _ = new Ct(u, f);
          _.position.set(e.x, e.y, e.z + 0.02), _.rotation.set(t.x, t.y, t.z), i.add(_);
          const g = u.boundingBox.getSize(new D()), m = 0.3, p = new Ur(g.x + m, g.y + m, 0.2), y = new ks({
            color: 0,
            transparent: true,
            opacity: 0.05,
            emissive: new Ce(0),
            emissiveIntensity: 1
          }), v = new Ct(p, y);
          v.position.set(e.x, e.y, e.z), v.rotation.set(t.x, t.y, t.z), v.name = `button-${r.replace(/\s+/g, "-")}`, s && Ru(v, s), i.add(v), o({
            textMesh: _,
            buttonMesh: v
          });
        } catch (u) {
          a(u);
        }
      }, void 0, a);
    });
  }
  function wh(r, e = {}) {
    if (!r || !r.material || !("emissive" in r.material)) return;
    const { color: t = "#ff9900", intensity: n = 1.5 } = e;
    r.material.emissive = new Ce(t), r.material.emissiveIntensity = n, r.material.needsUpdate = true;
  }
  const Um = {
    name: "CopyShader",
    uniforms: {
      tDiffuse: {
        value: null
      },
      opacity: {
        value: 1
      }
    },
    vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`
  };
  class ea {
    constructor() {
      this.isPass = true, this.enabled = true, this.needsSwap = true, this.clear = false, this.renderToScreen = false;
    }
    setSize() {
    }
    render() {
      console.error("THREE.Pass: .render() must be implemented in derived pass.");
    }
    dispose() {
    }
  }
  const ZT = new pl(-1, 1, 1, -1, 0, 1);
  class JT extends pn {
    constructor() {
      super(), this.setAttribute("position", new Vt([
        -1,
        3,
        0,
        -1,
        -1,
        0,
        3,
        -1,
        0
      ], 3)), this.setAttribute("uv", new Vt([
        0,
        2,
        0,
        0,
        2,
        0
      ], 2));
    }
  }
  const QT = new JT();
  class Om {
    constructor(e) {
      this._mesh = new Ct(QT, e);
    }
    dispose() {
      this._mesh.geometry.dispose();
    }
    render(e) {
      e.render(this._mesh, ZT);
    }
    get material() {
      return this._mesh.material;
    }
    set material(e) {
      this._mesh.material = e;
    }
  }
  class eb extends ea {
    constructor(e, t) {
      super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof $t ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = Qa.clone(e.uniforms), this.material = new $t({
        name: e.name !== void 0 ? e.name : "unspecified",
        defines: Object.assign({}, e.defines),
        uniforms: this.uniforms,
        vertexShader: e.vertexShader,
        fragmentShader: e.fragmentShader
      })), this.fsQuad = new Om(this.material);
    }
    render(e, t, n) {
      this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
    }
    dispose() {
      this.material.dispose(), this.fsQuad.dispose();
    }
  }
  class Uf extends ea {
    constructor(e, t) {
      super(), this.scene = e, this.camera = t, this.clear = true, this.needsSwap = false, this.inverse = false;
    }
    render(e, t, n) {
      const i = e.getContext(), s = e.state;
      s.buffers.color.setMask(false), s.buffers.depth.setMask(false), s.buffers.color.setLocked(true), s.buffers.depth.setLocked(true);
      let o, a;
      this.inverse ? (o = 0, a = 1) : (o = 1, a = 0), s.buffers.stencil.setTest(true), s.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE), s.buffers.stencil.setFunc(i.ALWAYS, o, 4294967295), s.buffers.stencil.setClear(a), s.buffers.stencil.setLocked(true), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), s.buffers.color.setLocked(false), s.buffers.depth.setLocked(false), s.buffers.color.setMask(true), s.buffers.depth.setMask(true), s.buffers.stencil.setLocked(false), s.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295), s.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP), s.buffers.stencil.setLocked(true);
    }
  }
  class tb extends ea {
    constructor() {
      super(), this.needsSwap = false;
    }
    render(e) {
      e.state.buffers.stencil.setLocked(false), e.state.buffers.stencil.setTest(false);
    }
  }
  class nb {
    constructor(e, t) {
      if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
        const n = e.getSize(new ee());
        this._width = n.width, this._height = n.height, t = new Wn(this._width * this._pixelRatio, this._height * this._pixelRatio, {
          type: bi
        }), t.texture.name = "EffectComposer.rt1";
      } else this._width = t.width, this._height = t.height;
      this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = true, this.passes = [], this.copyPass = new eb(Um), this.copyPass.material.blending = Ti, this.clock = new ex();
    }
    swapBuffers() {
      const e = this.readBuffer;
      this.readBuffer = this.writeBuffer, this.writeBuffer = e;
    }
    addPass(e) {
      this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    insertPass(e, t) {
      this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    removePass(e) {
      const t = this.passes.indexOf(e);
      t !== -1 && this.passes.splice(t, 1);
    }
    isLastEnabledPass(e) {
      for (let t = e + 1; t < this.passes.length; t++) if (this.passes[t].enabled) return false;
      return true;
    }
    render(e) {
      e === void 0 && (e = this.clock.getDelta());
      const t = this.renderer.getRenderTarget();
      let n = false;
      for (let i = 0, s = this.passes.length; i < s; i++) {
        const o = this.passes[i];
        if (o.enabled !== false) {
          if (o.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i), o.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), o.needsSwap) {
            if (n) {
              const a = this.renderer.getContext(), l = this.renderer.state.buffers.stencil;
              l.setFunc(a.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), l.setFunc(a.EQUAL, 1, 4294967295);
            }
            this.swapBuffers();
          }
          Uf !== void 0 && (o instanceof Uf ? n = true : o instanceof tb && (n = false));
        }
      }
      this.renderer.setRenderTarget(t);
    }
    reset(e) {
      if (e === void 0) {
        const t = this.renderer.getSize(new ee());
        this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
      }
      this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
    }
    setSize(e, t) {
      this._width = e, this._height = t;
      const n = this._width * this._pixelRatio, i = this._height * this._pixelRatio;
      this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);
      for (let s = 0; s < this.passes.length; s++) this.passes[s].setSize(n, i);
    }
    setPixelRatio(e) {
      this._pixelRatio = e, this.setSize(this._width, this._height);
    }
    dispose() {
      this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
    }
  }
  class ib extends ea {
    constructor(e, t, n = null, i = null, s = null) {
      super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = s, this.clear = true, this.clearDepth = false, this.needsSwap = false, this._oldClearColor = new Ce();
    }
    render(e, t, n) {
      const i = e.autoClear;
      e.autoClear = false;
      let s, o;
      this.overrideMaterial !== null && (o = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())), this.clearAlpha !== null && (s = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == true && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear === true && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(s), this.overrideMaterial !== null && (this.scene.overrideMaterial = o), e.autoClear = i;
    }
  }
  const rb = {
    uniforms: {
      tDiffuse: {
        value: null
      },
      luminosityThreshold: {
        value: 1
      },
      smoothWidth: {
        value: 1
      },
      defaultColor: {
        value: new Ce(0)
      },
      defaultOpacity: {
        value: 0
      }
    },
    vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`
  };
  class Bs extends ea {
    constructor(e, t, n, i) {
      super(), this.strength = t !== void 0 ? t : 1, this.radius = n, this.threshold = i, this.resolution = e !== void 0 ? new ee(e.x, e.y) : new ee(256, 256), this.clearColor = new Ce(0, 0, 0), this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
      let s = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2);
      this.renderTargetBright = new Wn(s, o, {
        type: bi
      }), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = false;
      for (let h = 0; h < this.nMips; h++) {
        const d = new Wn(s, o, {
          type: bi
        });
        d.texture.name = "UnrealBloomPass.h" + h, d.texture.generateMipmaps = false, this.renderTargetsHorizontal.push(d);
        const f = new Wn(s, o, {
          type: bi
        });
        f.texture.name = "UnrealBloomPass.v" + h, f.texture.generateMipmaps = false, this.renderTargetsVertical.push(f), s = Math.round(s / 2), o = Math.round(o / 2);
      }
      const a = rb;
      this.highPassUniforms = Qa.clone(a.uniforms), this.highPassUniforms.luminosityThreshold.value = i, this.highPassUniforms.smoothWidth.value = 0.01, this.materialHighPassFilter = new $t({
        uniforms: this.highPassUniforms,
        vertexShader: a.vertexShader,
        fragmentShader: a.fragmentShader
      }), this.separableBlurMaterials = [];
      const l = [
        3,
        5,
        7,
        9,
        11
      ];
      s = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2);
      for (let h = 0; h < this.nMips; h++) this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[h])), this.separableBlurMaterials[h].uniforms.invSize.value = new ee(1 / s, 1 / o), s = Math.round(s / 2), o = Math.round(o / 2);
      this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value = 0.1;
      const c = [
        1,
        0.8,
        0.6,
        0.4,
        0.2
      ];
      this.compositeMaterial.uniforms.bloomFactors.value = c, this.bloomTintColors = [
        new D(1, 1, 1),
        new D(1, 1, 1),
        new D(1, 1, 1),
        new D(1, 1, 1),
        new D(1, 1, 1)
      ], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors;
      const u = Um;
      this.copyUniforms = Qa.clone(u.uniforms), this.blendMaterial = new $t({
        uniforms: this.copyUniforms,
        vertexShader: u.vertexShader,
        fragmentShader: u.fragmentShader,
        blending: Ka,
        depthTest: false,
        depthWrite: false,
        transparent: true
      }), this.enabled = true, this.needsSwap = false, this._oldClearColor = new Ce(), this.oldClearAlpha = 1, this.basic = new jn(), this.fsQuad = new Om(null);
    }
    dispose() {
      for (let e = 0; e < this.renderTargetsHorizontal.length; e++) this.renderTargetsHorizontal[e].dispose();
      for (let e = 0; e < this.renderTargetsVertical.length; e++) this.renderTargetsVertical[e].dispose();
      this.renderTargetBright.dispose();
      for (let e = 0; e < this.separableBlurMaterials.length; e++) this.separableBlurMaterials[e].dispose();
      this.compositeMaterial.dispose(), this.blendMaterial.dispose(), this.basic.dispose(), this.fsQuad.dispose();
    }
    setSize(e, t) {
      let n = Math.round(e / 2), i = Math.round(t / 2);
      this.renderTargetBright.setSize(n, i);
      for (let s = 0; s < this.nMips; s++) this.renderTargetsHorizontal[s].setSize(n, i), this.renderTargetsVertical[s].setSize(n, i), this.separableBlurMaterials[s].uniforms.invSize.value = new ee(1 / n, 1 / i), n = Math.round(n / 2), i = Math.round(i / 2);
    }
    render(e, t, n, i, s) {
      e.getClearColor(this._oldClearColor), this.oldClearAlpha = e.getClearAlpha();
      const o = e.autoClear;
      e.autoClear = false, e.setClearColor(this.clearColor, 0), s && e.state.buffers.stencil.setTest(false), this.renderToScreen && (this.fsQuad.material = this.basic, this.basic.map = n.texture, e.setRenderTarget(null), e.clear(), this.fsQuad.render(e)), this.highPassUniforms.tDiffuse.value = n.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this.fsQuad.material = this.materialHighPassFilter, e.setRenderTarget(this.renderTargetBright), e.clear(), this.fsQuad.render(e);
      let a = this.renderTargetBright;
      for (let l = 0; l < this.nMips; l++) this.fsQuad.material = this.separableBlurMaterials[l], this.separableBlurMaterials[l].uniforms.colorTexture.value = a.texture, this.separableBlurMaterials[l].uniforms.direction.value = Bs.BlurDirectionX, e.setRenderTarget(this.renderTargetsHorizontal[l]), e.clear(), this.fsQuad.render(e), this.separableBlurMaterials[l].uniforms.colorTexture.value = this.renderTargetsHorizontal[l].texture, this.separableBlurMaterials[l].uniforms.direction.value = Bs.BlurDirectionY, e.setRenderTarget(this.renderTargetsVertical[l]), e.clear(), this.fsQuad.render(e), a = this.renderTargetsVertical[l];
      this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, e.setRenderTarget(this.renderTargetsHorizontal[0]), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.blendMaterial, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, s && e.state.buffers.stencil.setTest(true), this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(n), this.fsQuad.render(e)), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e.autoClear = o;
    }
    getSeparableBlurMaterial(e) {
      const t = [];
      for (let n = 0; n < e; n++) t.push(0.39894 * Math.exp(-0.5 * n * n / (e * e)) / e);
      return new $t({
        defines: {
          KERNEL_RADIUS: e
        },
        uniforms: {
          colorTexture: {
            value: null
          },
          invSize: {
            value: new ee(0.5, 0.5)
          },
          direction: {
            value: new ee(0.5, 0.5)
          },
          gaussianCoefficients: {
            value: t
          }
        },
        vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
        fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`
      });
    }
    getCompositeMaterial(e) {
      return new $t({
        defines: {
          NUM_MIPS: e
        },
        uniforms: {
          blurTexture1: {
            value: null
          },
          blurTexture2: {
            value: null
          },
          blurTexture3: {
            value: null
          },
          blurTexture4: {
            value: null
          },
          blurTexture5: {
            value: null
          },
          bloomStrength: {
            value: 1
          },
          bloomFactors: {
            value: null
          },
          bloomTintColors: {
            value: null
          },
          bloomRadius: {
            value: 0
          }
        },
        vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
        fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`
      });
    }
  }
  Bs.BlurDirectionX = new ee(1, 0);
  Bs.BlurDirectionY = new ee(0, 1);
  function sb(r, e = {
    density: 1
  }) {
    const t = new pn(), n = [], i = 4e3, s = 6e3, o = Math.floor(5e3 * e.density);
    for (let c = 0; c < o; c++) {
      let u, h, d, f;
      do
        u = (Math.random() - 0.5) * s * 2, h = (Math.random() - 0.5) * s * 2, d = (Math.random() - 0.5) * s * 2, f = Math.sqrt(u * u + h * h + d * d);
      while (f < i);
      n.push(u, h, d);
    }
    t.setAttribute("position", new Vt(n, 3));
    const a = new $u({
      color: 16777164,
      size: 5.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 1,
      blending: Ka
    }), l = new _p(t, a);
    r.add(l);
  }
  function ob(r, e, t, n = 2) {
    const i = new Ju(6, 32, 32), s = new ks({
      emissive: new Ce(16777164),
      emissiveIntensity: 3,
      roughness: 0.1
    }), o = new Ct(i, s);
    o.position.set(-400, 250, -500), r.add(o);
    const a = new th(16755200, 10, 500);
    a.position.copy(o.position), r.add(a);
    const l = new nb(e);
    l.addPass(new ib(r, t));
    const c = new Bs(new ee(window.innerWidth, window.innerHeight), n, 0.4, 1.2);
    return l.addPass(c), l;
  }
  let Of = "refs-viewport", Fm = "refs-wrapper", Bm = "refs-iframe", Ff = "";
  function dr(r) {
    zm();
    const e = document.getElementById(Fm), t = document.getElementById(Bm);
    !e || !t || Ff !== r && (e.style.transform = "rotateY(180deg)", setTimeout(() => {
      t.src = r, Ff = r;
    }, 500), setTimeout(() => {
      e.style.transform = "rotateY(360deg)", setTimeout(() => {
        e.style.transition = "none", e.style.transform = "rotateY(0deg)", requestAnimationFrame(() => {
          e.style.transition = "transform 1s ease-in-out";
        });
      }, 1e3);
    }, 1e3));
  }
  function zm() {
    if (document.getElementById(Of)) return;
    const r = document.createElement("div");
    r.id = Of, r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100vw", r.style.height = "100vh", r.style.display = "flex", r.style.alignItems = "center", r.style.justifyContent = "flex-end", r.style.pointerEvents = "none", r.style.zIndex = "100";
    const e = document.createElement("div");
    e.id = Fm, e.style.transform = "rotateY(0deg)", e.style.transition = "transform 1s ease-in-out", e.style.transformStyle = "preserve-3d", e.style.backfaceVisibility = "hidden", e.style.width = "40vw", e.style.height = "70vh", e.style.marginRight = "10vw", e.style.background = "#000", e.style.border = "1px solid #007BFF80", e.style.boxShadow = `
    0 0 10px rgba(0, 123, 255, 0.4),
    0 0 30px rgba(0, 123, 255, 0.3),
    0 0 60px rgba(0, 123, 255, 0.2)`, e.style.borderRadius = "15px", e.style.overflow = "hidden", e.style.pointerEvents = "auto";
    const t = document.createElement("iframe");
    t.id = Bm, t.src = "/refsViewport/disclaimer.html", t.style.width = "100%", t.style.height = "100%", t.style.border = "none", t.style.backgroundColor = "#000", e.style.backgroundColor = "#000", e.appendChild(t), r.appendChild(e), document.body.appendChild(r);
  }
  function ab() {
    const r = document.getElementById("refs-viewport");
    if (r) {
      const e = document.getElementById("refs-iframe");
      e && (e.src = "about:blank"), r.remove();
    }
    console.log("refs viewport destroyed");
  }
  let ut = null, an = null, qt = null;
  function lb() {
    if (ut) {
      ut.style.display = "flex";
      return;
    }
    console.log("Creating Name viewport"), ut = document.createElement("div"), ut.id = "name-viewport-container", ut.style.position = "fixed", ut.style.top = "50%", ut.style.left = "50%", ut.style.transform = "translate(-50%, -50%)", ut.style.width = "80%", ut.style.maxWidth = "1200px", ut.style.height = "80vh", ut.style.backgroundColor = "rgba(0, 0, 0, 0.9)", ut.style.border = "0.5px solid #FFFF", ut.style.borderRadius = "20px", ut.style.boxShadow = "0 0 30px rgba(0, 123, 255, 0.5)", ut.style.zIndex = "1000", ut.style.display = "flex", ut.style.flexDirection = "column", ut.style.overflow = "hidden";
    const r = document.createElement("div");
    r.style.display = "flex", r.style.justifyContent = "space-between", r.style.alignItems = "center", r.style.padding = "1px 2px", r.style.backgroundColor = "rbga(0, 0, 0, 0.3)", r.style.color = "white", r.style.borderTopLeftRadius = "20px", r.style.borderTopRightRadius = "20px";
    const e = document.createElement("h2");
    e.style.fontSize = "1.2rem", qt = document.createElement("button"), qt.textContent = "\u2715", qt.style.background = "none", qt.style.border = "none", qt.style.color = "white", qt.style.fontSize = "1.5rem", qt.style.cursor = "pointer", qt.style.padding = "0 5px", qt.style.lineHeight = "1", r.appendChild(qt), ut.appendChild(r), an = document.createElement("iframe"), an.src = "/psycheName/psycheName.html", an.style.width = "100%", an.style.height = "100%", an.style.border = "none", an.style.backgroundColor = "#222", an.onerror = () => {
      console.error("Failed to load iframe content");
    }, an.onload = () => {
      console.log("Iframe loaded successfully");
    }, an.onerror = () => {
      console.error("Failed to load iframe content"), an.style.backgroundColor = "#444";
    }, qt.addEventListener("mouseover", () => {
      qt.style.transform = "scale(1.2)";
    }), qt.addEventListener("mouseout", () => {
      qt.style.transform = "scale(1)";
    }), ut.appendChild(an), document.body.appendChild(ut), ft.from(ut, {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      ease: "power2.out"
    }), qt.addEventListener("click", Ko), document.addEventListener("keydown", cb);
  }
  document.addEventListener("DOMContentLoaded", function() {
    let r = document.getElementById("content"), e = document.getElementById("viewportContainer"), t = document.getElementById("closeButton");
    if (!e || !r || !t) {
      console.error("Missing elements: viewportContainer, content, or closeButton.");
      return;
    }
    const n = {
      introLink: "<h2>Introduction</h2><p>Psyche is a metal-rich asteroid orbiting the Sun between Mars and Jupiter. It was named after the Greek goddess Psyche.</p>",
      historyLink: "<h2>Historical Background</h2><p>Psyche was discovered in 1852 by Italian astronomer Annibale de Gasparis and is one of the largest asteroids in our solar system.</p>",
      missionLink: "<h2>NASA's Psyche Mission</h2><p>The Psyche spacecraft, designed by NASA, aims to study the asteroid to understand more about planetary cores and the history of the solar system.</p>",
      funFactsLink: "<h2>Fun Facts</h2></h2></h2><ul><li>Psyche is primarily composed of nickel and iron, much like Earth's core.</li><li>It is about 226 kilometers (140 miles) in diameter.</li><li>Its name means 'soul' in Greek mythology.</li></ul>"
    };
    document.querySelectorAll("ul li a").forEach((i) => {
      i.addEventListener("click", function() {
        let s = this.id;
        r.innerHTML = n[s] || "No content available.", e.style.display = "block", ft.from(e, {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          ease: "power2.out"
        });
      });
    }), t.addEventListener("click", Ko), window.addEventListener("click", function(i) {
      i.target === e && Ko();
    });
  });
  function Ko() {
    ut && ft.to(ut, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        an && (ut.removeChild(an), an = null), document.body.removeChild(ut), ut = null, qt = null;
      }
    });
  }
  function cb(r) {
    r.key === "Escape" && Ko();
  }
  function Ws(r, e = {}) {
    const { backgroundColor: t = "rgba(0, 0, 0, 0.125)", borderColor: n = "#ffffcc", borderWidth: i = "2px", borderRadius: s = "10px", boxShadow: o = "0 0 25px rgba(255, 255, 204, 0.6)", zIndex: a = "900" } = e;
    r.style.position = "fixed", r.style.top = "50%", r.style.left = "50%", r.style.transform = "translate(-50%, -50%)", r.style.backgroundColor = t, r.style.border = `${i} solid ${n}`, r.style.borderRadius = s, r.style.boxShadow = o, r.style.zIndex = a, r.style.display = "flex", r.style.flexDirection = "column", r.style.overflow = "hidden";
  }
  function Xs(r, e = {}) {
    const { backgroundColor: t = "rgba(26, 26, 58, 0.125)", gradientStart: n = "rgba(26, 26, 58, 0.125)", gradientEnd: i = "rgba(58, 58, 106, 0.125)", textColor: s = "white", padding: o = "10px 15px" } = e;
    r.style.display = "flex", r.style.justifyContent = "space-between", r.style.alignItems = "center", r.style.padding = o, r.style.backgroundColor = t, r.style.backgroundImage = `linear-gradient(to right, ${n}, ${i})`, r.style.color = s, r.style.borderTopLeftRadius = "8px", r.style.borderTopRightRadius = "8px";
  }
  function qs(r, e = {}) {
    const { fontSize: t = "1.2rem", textShadow: n = "0 0 5px rgba(255, 255, 204, 0.7)", letterSpacing: i = "0.5px" } = e;
    r.style.margin = "0", r.style.fontSize = t, r.style.textShadow = n, r.style.letterSpacing = i;
  }
  function Ys(r, e = {}) {
    const { color: t = "white", fontSize: n = "1.5rem" } = e;
    r.style.background = "none", r.style.border = "none", r.style.color = t, r.style.fontSize = n, r.style.cursor = "pointer", r.style.padding = "0 5px", r.style.lineHeight = "1";
  }
  function km(r, e = {}) {
    const { color: t = "white", fontSize: n = "1.2rem" } = e;
    r.style.background = "none", r.style.border = "none", r.style.color = t, r.style.fontSize = n, r.style.cursor = "pointer", r.style.padding = "0 5px", r.style.lineHeight = "1", r.style.marginRight = "5px";
  }
  function $s(r, e = {}) {
    const { backgroundColor: t = "rgba(0, 0, 0, 0.1)" } = e;
    r.style.width = "100%", r.style.height = "100%", r.style.border = "none", r.style.backgroundColor = t, r.style.overflow = "auto", r.scrolling = "yes";
  }
  function Ks(r) {
    const e = r.createElement("style");
    e.textContent = `
        /* Hide scrollbars for WebKit browsers */
        iframe::-webkit-scrollbar,
        *::-webkit-scrollbar {
            width: 0 !important;
            height: 0 !important;
            display: none !important;
        }
        
        /* Hide scrollbars for Firefox */
        iframe,
        * {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
        }
        
        /* Allow scrolling but hide scrollbars */
        iframe {
            overflow: auto !important;
        }
    `, r.head.appendChild(e);
  }
  function js(r) {
    try {
      const e = r.contentDocument || r.contentWindow.document, t = e.createElement("style");
      t.textContent = `
            /* Hide all scrollbars in the iframe content */
            ::-webkit-scrollbar { 
                width: 0 !important; 
                height: 0 !important; 
                display: none !important; 
            }
            * { 
                scrollbar-width: none !important; 
                -ms-overflow-style: none !important;
            }
            html, body {
                overflow: auto !important;
                scrollbar-width: none !important;
                -ms-overflow-style: none !important;
            }
            
            /* Ensure content is scrollable */
            body {
                overflow-y: auto !important;
                overflow-x: auto !important;
            }
        `, e.head.appendChild(t);
    } catch (e) {
      console.error("Could not modify iframe content due to cross-origin restrictions:", e);
    }
  }
  function Zs(r) {
    const e = document.createElement("div");
    e.style.position = "absolute", e.style.top = "0", e.style.left = "0", e.style.width = "100%", e.style.height = "100%", e.style.pointerEvents = "none", e.style.background = "radial-gradient(circle at 50% 50%, rgba(255, 255, 204, 0.03) 0%, transparent 80%)", e.style.borderRadius = "10px", e.style.zIndex = "1", r.appendChild(e);
  }
  function Js(r, e = 20) {
    const t = document.createElement("div");
    t.style.position = "absolute", t.style.top = "0", t.style.left = "0", t.style.width = "100%", t.style.height = "100%", t.style.overflow = "hidden", t.style.pointerEvents = "none", t.style.zIndex = "0", t.style.borderRadius = "10px", r.appendChild(t);
    for (let n = 0; n < e; n++) {
      const i = document.createElement("div"), s = Math.random() * 2 + 1, o = Math.random() * 100, a = Math.random() * 100, l = Math.random() * 0.5 + 0.1, c = Math.random() * 3 + 2, u = Math.random() * 2;
      i.style.position = "absolute", i.style.width = `${s}px`, i.style.height = `${s}px`, i.style.borderRadius = "50%", i.style.backgroundColor = "#ffffcc", i.style.left = `${o}%`, i.style.top = `${a}%`, i.style.opacity = `${l}`, t.appendChild(i), ft.to(i, {
        opacity: 0.1,
        duration: c,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: u
      });
    }
    return t;
  }
  function Qs(r, e, t) {
    const n = ft.timeline();
    return n.from(r, {
      opacity: 0,
      scale: 0.7,
      duration: 0.6,
      ease: "power2.out"
    }), n.from(e, {
      y: -50,
      opacity: 0,
      duration: 0.4,
      ease: "back.out(1.7)"
    }, "-=0.3"), n.from(t, {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.2"), n;
  }
  function eo(r, e = {}) {
    const { color: t = "rgba(255, 255, 204, 0.7)", intensity: n = "30px", duration: i = 2 } = e;
    return ft.to(r, {
      boxShadow: `0 0 ${n} ${t}`,
      repeat: -1,
      yoyo: true,
      duration: i,
      ease: "sine.inOut"
    });
  }
  function Hr(r, e) {
    const t = ft.timeline({
      onComplete: e
    });
    return t.to(r, {
      boxShadow: "0 0 40px rgba(255, 255, 204, 0.9)",
      duration: 0.3,
      ease: "power1.in"
    }), t.to(r, {
      opacity: 0,
      scale: 0.7,
      duration: 0.5,
      ease: "power2.in"
    }, "-=0.1"), t;
  }
  ta = function() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", ta);
      return;
    }
    const r = document.querySelectorAll("button"), e = Array.from(r).filter((t) => {
      const n = t.textContent === "\u21A9" || t.innerHTML === "\u21A9", i = t.closest("#website-viewport-container") !== null;
      return n && !i;
    });
    console.log("Found return buttons:", e.length), e.forEach((t) => {
      const n = t.cloneNode(true);
      t.parentNode.replaceChild(n, t), n.addEventListener("click", function(i) {
        i.preventDefault(), i.stopPropagation();
        let s = n.closest('[id$="-viewport-container"]');
        if (!s) {
          console.error("No viewport found for return button");
          return;
        }
        console.log("Found viewport for return button:", s.id);
        const o = s.querySelector("iframe");
        if (!o) {
          console.error("No iframe found in viewport");
          return;
        }
        const a = s.querySelector("h2");
        a && (a.textContent = "Psyche Mission Games"), o.src = "./games/games.html", console.log("Loading games HTML in viewport:", s.id);
      });
    });
  };
  ta();
  document.addEventListener("DOMContentLoaded", ta);
  setInterval(ta, 1e3);
  let ub = false, Ei = new D(), Ah = new Xn();
  function hb(r, e, t, n) {
    return new Promise((i, s) => {
      var _a2;
      const o = (_a2 = t[6]) == null ? void 0 : _a2.position;
      if (!o) return console.error("Section 6 position not found."), s("Section 6 position not found.");
      const a = {
        x: o.x,
        y: o.y + 2,
        z: o.z - 12
      }, l = {
        x: o.x,
        y: o.y - 3,
        z: o.z - 12
      }, c = {
        x: 0.2,
        y: 0,
        z: 0
      }, u = {
        x: 0.2,
        y: 0.5,
        z: 0
      };
      try {
        kr("controller", "./../../res/models/arcade_controller.glb", l, 2, u, {
          rotation: {
            x: 0,
            y: -40,
            z: 0,
            duration: 200,
            ease: "linear",
            repeat: -1
          }
        }, r, () => {
          console.log("loaded model");
        });
        const { buttonMesh: h } = Vr("TRY SOME PSYCHE INSPIRED GAMES!", a, c, 0.7, r, () => {
          Ei.copy(e.position), Ah.copy(e.rotation);
          const _ = new D(o.x, o.y, o.z);
          ft.to(e.position, {
            duration: 0.5,
            x: _.x,
            y: _.y,
            z: _.z,
            ease: "power2.out",
            onUpdate: () => {
              e.lookAt(_);
            }
          }), ft.to(e.rotation, {
            duration: 1.5,
            y: e.rotation.y - Math.PI / 2,
            ease: "power2.out",
            onComplete: () => {
              db(e);
            }
          }), console.log("Games button clicked.");
        });
        wh(h, {
          color: "#ff9900",
          intensity: 2
        });
        const d = new Fr(), f = new ee();
        window.addEventListener("mousemove", (_) => {
          const g = n.domElement.getBoundingClientRect();
          f.x = (_.clientX - g.left) / g.width * 2 - 1, f.y = -((_.clientY - g.top) / g.height) * 2 + 1, d.setFromCamera(f, e);
          const m = d.intersectObjects(zr);
          n.domElement.style.cursor = m.length > 0 ? "pointer" : "default";
        }), ub = true, i();
      } catch (h) {
        s(h);
      }
    });
  }
  let ot = null, pi = null, Vi = null, Ao = null;
  function Vm() {
    const r = window.innerWidth, e = window.innerHeight, t = window.devicePixelRatio || 1;
    console.log(`Screen size: ${r}x${e}, Pixel ratio: ${t}`);
    let n, i, s;
    return r === 2388 && e === 1668 || e === 2388 && r === 1668 ? (console.log('iPad Pro 11" detected'), n = "90%", s = "2000px", i = "90vh") : r >= 2e3 ? (n = "85%", s = "2400px", i = "85vh") : r >= 1600 ? (n = "88%", s = "1900px", i = "88vh") : r >= 1200 ? (n = "90%", s = "1500px", i = "90vh") : r >= 992 ? (n = "92%", s = "1150px", i = "92vh") : r >= 768 ? (n = "95%", s = "950px", i = "95vh") : (n = "98%", s = "100%", i = "98vh"), {
      width: n,
      maxWidth: s,
      height: i
    };
  }
  function Co() {
    if (!ot) return;
    const { width: r, maxWidth: e, height: t } = Vm();
    ot.style.width = r, ot.style.maxWidth = e, ot.style.height = t, console.log(`Viewport resized to: width=${r}, maxWidth=${e}, height=${t}`);
  }
  function db(r) {
    if (ot) {
      ot.style.display = "flex", Co();
      return;
    }
    console.log("Creating games viewport"), ot = document.createElement("div"), ot.id = "games-viewport-container", Ws(ot, {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderColor: "rgba(122, 95, 62, 0.3)",
      boxShadow: "0 0 15px rgba(122, 95, 62, 0.3)"
    });
    const { width: e, maxWidth: t, height: n } = Vm();
    ot.style.width = e, ot.style.maxWidth = t, ot.style.height = n;
    const i = document.createElement("div");
    Xs(i, {
      backgroundColor: "rgba(10, 10, 20, 0.2)",
      gradientStart: "rgba(10, 10, 20, 0.2)",
      gradientEnd: "rgba(20, 20, 40, 0.2)"
    });
    const s = document.createElement("h2");
    s.textContent = "Psyche Mission Games", qs(s);
    const o = document.createElement("div");
    o.style.display = "flex", o.style.alignItems = "center";
    const a = document.createElement("button");
    a.textContent = "\u21A9", km(a), Vi = document.createElement("button"), Vi.textContent = "\u2715", Ys(Vi), o.appendChild(a), o.appendChild(Vi), i.appendChild(s), i.appendChild(o), ot.appendChild(i), pi = document.createElement("iframe"), pi.src = "/games/games.html", $s(pi, {
      backgroundColor: "rgba(0, 0, 0, 0.0)"
    }), Ks(document), pi.onerror = () => {
      console.error("Failed to load games iframe content");
    }, pi.onload = () => {
      console.log("Games iframe loaded successfully"), js(pi);
    }, ot.appendChild(pi), document.body.appendChild(ot), Zs(ot), Js(ot), Qs(ot, i, pi), eo(ot), Vi.addEventListener("click", () => {
      fb(r);
    }), a.addEventListener("click", () => {
      Ch();
    }), document.addEventListener("keydown", Gm), window.addEventListener("resize", Co), Ao = new ResizeObserver((l) => {
      console.log("ResizeObserver detected size change"), Co();
    }), Ao.observe(document.body);
  }
  function Hm(r, e) {
    ft.to(e, {
      duration: 1.5,
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center",
      ease: "power2.inOut",
      onComplete: () => {
        ft.to(r.position, {
          duration: 1.5,
          x: Ei.x,
          y: Ei.y,
          z: Ei.z,
          ease: "power2.out",
          onUpdate: () => {
            r.lookAt(Ei);
          }
        }), ft.to(r.rotation, {
          duration: 1.5,
          y: Ah.y,
          ease: "power2.out",
          onComplete: () => {
            console.log("Camera reset to initial position and rotation.");
          }
        }), e.style.display = "none";
      }
    });
  }
  function Gm(r) {
    r.key === "Escape" && Hm();
  }
  function Ch() {
    ot && (Vi && Vi.removeEventListener("click", Hm), document.removeEventListener("keydown", Gm), window.removeEventListener("resize", Co), Ao && (Ao.disconnect(), Ao = null), ot.style.transition = "opacity 0.5s ease", ot.style.opacity = "0", setTimeout(() => {
      document.body.removeChild(ot), ot = null, pi = null, Vi = null;
    }, 500));
  }
  window.setGamesViewportSize = function(r, e) {
    if (!ot) {
      console.warn("Games viewport is not currently active");
      return;
    }
    return console.log(`Manually setting viewport size to ${r}x${e}`), ot.style.width = `${r}px`, ot.style.maxWidth = `${r}px`, ot.style.height = `${e}px`, ot.style.transform = "translate(-50%, -50%)", `Viewport size set to ${r}x${e}`;
  };
  window.resetGamesViewportSize = function() {
    if (!ot) {
      console.warn("Games viewport is not currently active");
      return;
    }
    return Co(), "Viewport size reset to responsive mode";
  };
  function fb(r) {
    Ch(), ft.to(r.position, {
      duration: 1.5,
      x: Ei.x,
      y: Ei.y,
      z: Ei.z,
      ease: "power2.out",
      onUpdate: () => {
        r.lookAt(Ei);
      }
    }), ft.to(r.rotation, {
      duration: 1.5,
      y: Ah.y,
      ease: "power2.out",
      onComplete: () => {
        console.log("Camera reset to initial position and rotation.");
      }
    });
  }
  let Xe = null, It = null, vr = null, Ro = null;
  function Wm() {
    const r = window.innerWidth, e = window.innerHeight, t = window.devicePixelRatio || 1;
    console.log(`Screen size: ${r}x${e}, Pixel ratio: ${t}`);
    let n, i, s;
    return r === 2388 && e === 1668 || e === 2388 && r === 1668 ? (console.log('iPad Pro 11" detected'), n = "90%", s = "2000px", i = "90vh") : r >= 2e3 ? (n = "85%", s = "2400px", i = "85vh") : r >= 1600 ? (n = "88%", s = "1900px", i = "88vh") : r >= 1200 ? (n = "90%", s = "1500px", i = "90vh") : r >= 992 ? (n = "92%", s = "1150px", i = "92vh") : r >= 768 ? (n = "95%", s = "950px", i = "95vh") : (n = "98%", s = "100%", i = "98vh"), {
      width: n,
      maxWidth: s,
      height: i
    };
  }
  function yr() {
    if (!Xe) return;
    const { width: r, maxWidth: e, height: t } = Wm();
    if (Xe.style.width = r, Xe.style.maxWidth = e, Xe.style.height = t, console.log(`Viewport resized to: width=${r}, maxWidth=${e}, height=${t}`), It && It.contentDocument) try {
      const n = It.contentDocument || It.contentWindow.document;
      if (n.getElementById("container1")) {
        const s = Math.min(1, window.innerWidth / 1920);
        let o = n.getElementById("responsive-scaling");
        o || (o = n.createElement("style"), o.id = "responsive-scaling", n.head.appendChild(o)), o.textContent = `
                    #container1 {
                        transform: scale(${s});
                        transform-origin: center top;
                        width: calc(100% / ${s});
                        margin-left: auto;
                        margin-right: auto;
                    }
                    
                    #astronautCar {
                        max-width: 100%;
                        height: auto;
                    }
                `, console.log(`Applied responsive scaling: ${s}`);
      }
    } catch (n) {
      console.error("Could not modify iframe content:", n);
    }
  }
  function Xm() {
    if (Xe) {
      Xe.style.display = "flex", yr();
      return;
    }
    console.log("Creating kids viewport"), Xe = document.createElement("div"), Xe.id = "kids-viewport-container", Ws(Xe);
    const { width: r, maxWidth: e, height: t } = Wm();
    Xe.style.width = r, Xe.style.maxWidth = e, Xe.style.height = t;
    const n = document.createElement("div");
    Xs(n);
    const i = document.createElement("h2");
    i.textContent = "Psyche Jr - Kids Space Explorer", qs(i), vr = document.createElement("button"), vr.textContent = "\u2715", Ys(vr), n.appendChild(i), n.appendChild(vr), Xe.appendChild(n), It = document.createElement("iframe"), It.src = "/PsycheJR/kids.html", $s(It), Ks(document), It.onerror = () => {
      console.error("Failed to load kids iframe content");
    }, It.onload = () => {
      console.log("Kids iframe loaded successfully"), js(It), yr();
      try {
        const s = It.contentDocument || It.contentWindow.document;
        new MutationObserver(() => {
          yr();
        }).observe(s.body, {
          childList: true,
          subtree: true
        });
      } catch (s) {
        console.error("Could not set up MutationObserver:", s);
      }
    }, Xe.appendChild(It), document.body.appendChild(Xe), Zs(Xe), Js(Xe), Qs(Xe, n, It), eo(Xe), vr.addEventListener("click", () => {
      Hr(Xe, Ph);
    }), document.addEventListener("keydown", qm), window.addEventListener("resize", yr), Ro = new ResizeObserver((s) => {
      console.log("ResizeObserver detected size change"), yr();
    }), Ro.observe(document.body);
  }
  function Rh() {
    Xe && Hr(Xe, () => {
      Xe.style.display = "none", Xe.style.opacity = 1, Xe.style.transform = "translate(-50%, -50%) scale(1)";
    });
  }
  function qm(r) {
    r.key === "Escape" && Hr(Xe, Ph);
  }
  function Ph() {
    Xe && (vr.removeEventListener("click", Rh), document.removeEventListener("keydown", qm), window.removeEventListener("resize", yr), Ro && (Ro.disconnect(), Ro = null), document.body.removeChild(Xe), Xe = null, It = null, vr = null);
  }
  window.setKidsViewportSize = function(r, e) {
    if (!Xe) {
      console.warn("Kids viewport is not currently active");
      return;
    }
    if (console.log(`Manually setting viewport size to ${r}x${e}`), Xe.style.width = `${r}px`, Xe.style.maxWidth = `${r}px`, Xe.style.height = `${e}px`, Xe.style.transform = "translate(-50%, -50%)", It && It.contentDocument) try {
      const n = (It.contentDocument || It.contentWindow.document).getElementById("container1");
      if (n) {
        const i = Math.min(1, r / 1920);
        n.style.transform = `scale(${i})`, n.style.transformOrigin = "center top", n.style.width = `calc(100% / ${i})`, console.log(`Applied manual scaling: ${i}`);
      }
    } catch (t) {
      console.error("Could not modify iframe content:", t);
    }
    return `Viewport size set to ${r}x${e}`;
  };
  window.resetKidsViewportSize = function() {
    if (!Xe) {
      console.warn("Kids viewport is not currently active");
      return;
    }
    return yr(), "Viewport size reset to responsive mode";
  };
  const pb = Object.freeze(Object.defineProperty({
    __proto__: null,
    destroyKidsViewport: Ph,
    hideKidsViewport: Rh,
    showKidsViewport: Xm
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  let _t = null, mi = null, Sr = null, gr = null, xo = null, yi = null;
  function mb() {
    if (_t) {
      _t.style.display = "flex";
      return;
    }
    console.log("Creating Year viewport"), _t = document.createElement("div"), _t.id = "year-viewport-container", Ws(_t, {
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      borderColor: "rgb(255, 255, 255)",
      boxShadow: "0 0 20px rgba(255, 255, 204, 0.6)"
    }), _t.style.width = "80%", _t.style.maxWidth = "1440px", _t.style.height = "95vh", gr = document.createElement("div"), Xs(gr, {
      backgroundColor: "#f9a000",
      gradientStart: "#f9a000",
      gradientEnd: "#f9a000"
    }), xo = document.createElement("h2"), xo.textContent = "Compare Earth and Psyche", qs(xo), Sr = document.createElement("button"), Sr.textContent = "\u2715", Ys(Sr), gr.appendChild(xo), gr.appendChild(Sr), _t.appendChild(gr), mi = document.createElement("iframe"), mi.src = "/year/year.html", $s(mi, {
      backgroundColor: "#222"
    }), mi.onerror = () => {
      console.error("Failed to load iframe content");
    }, mi.onload = () => {
      console.log("Iframe loaded successfully"), js(mi);
    }, _t.appendChild(mi), document.body.appendChild(_t), Zs(_t), Js(_t, 80), Qs(_t, gr, mi), yi = eo(_t, {
      color: "rgba(255, 255, 255, 0.6)",
      intensity: "25px"
    }), Ks(document), Sr.addEventListener("click", Lh), document.addEventListener("keydown", Ym);
  }
  function Lh() {
    _t && (yi && yi.kill(), Hr(_t, () => {
      _t.style.display = "none", _t.style.opacity = 1, _t.style.transform = "translate(-50%, -50%) scale(1)", document.body.classList.add("overlay-open"), yi && (yi.restart(), yi.pause());
    }).play());
  }
  function Ym(r) {
    r.key === "Escape" && Lh();
  }
  function gb() {
    _t ? (yi && yi.kill(), ft.to(_t, {
      y: "100%",
      duration: 0.5,
      ease: "power1.in",
      onComplete: () => {
        Sr.removeEventListener("click", Lh), document.removeEventListener("keydown", Ym), document.body.removeChild(_t), _t = null, mi = null, Sr = null, gr = null, xo = null, yi = null;
      }
    })) : console.log("No viewport container found to destroy.");
  }
  function _b(r, e, t, n) {
    var _a2;
    const i = (_a2 = t[4]) == null ? void 0 : _a2.position;
    if (!i) return console.error("Section 4 position not found."), Promise.reject("Section 4 position not found.");
    const s = {
      x: i.x,
      y: i.y + 2,
      z: i.z - 12
    }, o = {
      x: i.x,
      y: i.y - 6,
      z: i.z - 12
    }, a = {
      x: 0.2,
      y: 0,
      z: 0
    }, l = {
      x: 0.2,
      y: 0,
      z: 0
    };
    return new Promise((c, u) => {
      try {
        kr("balance", "./../../res/models/balance_scale.glb", o, 0.9, l, null, r, () => {
          console.log("loaded model");
        });
        const { buttonMesh: h } = Vr("THE COSMIC COMPARISON OF EARTH AND PSYCHE", s, a, 0.7, r, () => {
          mb(), console.log("Cosmic Comparison button clicked.");
        }), d = new Fr(), f = new ee();
        window.addEventListener("mousemove", (_) => {
          const g = n.domElement.getBoundingClientRect();
          f.x = (_.clientX - g.left) / g.width * 2 - 1, f.y = -((_.clientY - g.top) / g.height) * 2 + 1, d.setFromCamera(f, e);
          const m = d.intersectObjects(zr);
          n.domElement.style.cursor = m.length > 0 ? "pointer" : "default";
        }), c();
      } catch (h) {
        u(h);
      }
    });
  }
  function xb(r, e) {
    const n = to() === 4;
    for (let i = 0; i < e.children.length; i++) {
      const s = e.children[i];
      s.userData && s.userData.section4Element && (s.visible = n);
    }
  }
  let Je = null, kn = null, Mr = null, Po = null;
  function $m() {
    const r = window.innerWidth, e = window.innerHeight, t = window.devicePixelRatio || 1;
    console.log(`Screen size: ${r}x${e}, Pixel ratio: ${t}`);
    let n, i, s;
    return r === 2388 && e === 1668 || e === 2388 && r === 1668 ? (console.log('iPad Pro 11" detected'), n = "90%", s = "2000px", i = "90vh") : r >= 2e3 ? (n = "85%", s = "2400px", i = "85vh") : r >= 1600 ? (n = "88%", s = "1900px", i = "88vh") : r >= 1200 ? (n = "90%", s = "1500px", i = "90vh") : r >= 992 ? (n = "92%", s = "1150px", i = "92vh") : r >= 768 ? (n = "95%", s = "950px", i = "95vh") : (n = "98%", s = "100%", i = "98vh"), {
      width: n,
      maxWidth: s,
      height: i
    };
  }
  function Lo() {
    if (!Je) return;
    const { width: r, maxWidth: e, height: t } = $m();
    Je.style.width = r, Je.style.maxWidth = e, Je.style.height = t, console.log(`Viewport resized to: width=${r}, maxWidth=${e}, height=${t}`);
  }
  function vb() {
    if (Je) {
      Je.style.display = "flex", Lo();
      return;
    }
    console.log("Creating website viewport"), Je = document.createElement("div"), Je.id = "website-viewport-container", Ws(Je, {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderColor: "rgba(122, 95, 62, 0.3)",
      boxShadow: "0 0 15px rgba(122, 95, 62, 0.3)"
    });
    const { width: r, maxWidth: e, height: t } = $m();
    Je.style.width = r, Je.style.maxWidth = e, Je.style.height = t;
    const n = document.createElement("div");
    Xs(n, {
      backgroundColor: "rgba(10, 10, 20, 0.2)",
      gradientStart: "rgba(10, 10, 20, 0.2)",
      gradientEnd: "rgba(20, 20, 40, 0.2)"
    });
    const i = document.createElement("h2");
    i.textContent = "Psyche Mission Website", qs(i);
    const s = document.createElement("div");
    s.style.display = "flex", s.style.alignItems = "center", s.style.gap = "10px";
    const o = document.createElement("button");
    o.textContent = "\u21A9", km(o), Mr = document.createElement("button"), Mr.textContent = "\u2715", Ys(Mr), s.appendChild(o), s.appendChild(Mr), n.appendChild(i), n.appendChild(s), Je.appendChild(n), kn = document.createElement("iframe"), kn.src = "/website/index.html", $s(kn, {
      backgroundColor: "rgba(0, 0, 0, 0.0)"
    }), Ks(document), kn.onerror = () => {
      console.error("Failed to load website iframe content");
    }, kn.onload = () => {
      console.log("Website iframe loaded successfully"), js(kn);
    }, Je.appendChild(kn), document.body.appendChild(Je), Zs(Je), Js(Je), Qs(Je, n, kn), eo(Je), Mr.addEventListener("click", Dh), o.addEventListener("click", () => {
      kn && (kn.src = "/website/index.html", console.log("Navigating to website index page"));
    }), document.addEventListener("keydown", Km), window.addEventListener("resize", Lo), Po = new ResizeObserver((a) => {
      console.log("ResizeObserver detected size change"), Lo();
    }), Po.observe(document.body);
  }
  function Dh() {
    Je && Hr(Je, () => {
      Je.style.display = "none", Je.style.opacity = 1, Je.style.transform = "translate(-50%, -50%) scale(1)", document.body.classList.add("overlay-open");
    });
  }
  function Km(r) {
    r.key === "Escape" && Dh();
  }
  function yb() {
    Je && (Mr.removeEventListener("click", Dh), document.removeEventListener("keydown", Km), window.removeEventListener("resize", Lo), Po && (Po.disconnect(), Po = null), document.body.removeChild(Je), Je = null, kn = null, Mr = null);
  }
  window.setWebsiteViewportSize = function(r, e) {
    if (!Je) {
      console.warn("Website viewport is not currently active");
      return;
    }
    return console.log(`Manually setting viewport size to ${r}x${e}`), Je.style.width = `${r}px`, Je.style.maxWidth = `${r}px`, Je.style.height = `${e}px`, Je.style.transform = "translate(-50%, -50%)", `Viewport size set to ${r}x${e}`;
  };
  window.resetWebsiteViewportSize = function() {
    if (!Je) {
      console.warn("Website viewport is not currently active");
      return;
    }
    return Lo(), "Viewport size reset to responsive mode";
  };
  let Qe = null, wt = null, Er = null, Do = null;
  function jm() {
    const r = window.innerWidth, e = window.innerHeight, t = window.devicePixelRatio || 1;
    console.log(`Screen size: ${r}x${e}, Pixel ratio: ${t}`);
    let n, i, s;
    return r === 2388 && e === 1668 || e === 2388 && r === 1668 ? (console.log('iPad Pro 11" detected'), n = "90%", s = "2000px", i = "90vh") : r >= 2e3 ? (n = "85%", s = "2400px", i = "85vh") : r >= 1600 ? (n = "88%", s = "1900px", i = "88vh") : r >= 1200 ? (n = "90%", s = "1500px", i = "90vh") : r >= 992 ? (n = "92%", s = "1150px", i = "92vh") : r >= 768 ? (n = "95%", s = "950px", i = "95vh") : (n = "98%", s = "100%", i = "98vh"), {
      width: n,
      maxWidth: s,
      height: i
    };
  }
  function Tr() {
    if (!Qe) return;
    const { width: r, maxWidth: e, height: t } = jm();
    if (Qe.style.width = r, Qe.style.maxWidth = e, Qe.style.height = t, console.log(`Viewport resized to: width=${r}, maxWidth=${e}, height=${t}`), wt && wt.contentDocument) try {
      const n = wt.contentDocument || wt.contentWindow.document;
      if (n.getElementById("psyche-container")) {
        const s = parseInt(r) || window.innerWidth * (parseInt(r) / 100), o = Math.min(1, s / 1920);
        let a = n.getElementById("responsive-scaling");
        a || (a = n.createElement("style"), a.id = "responsive-scaling", n.head.appendChild(a)), a.textContent = `
                    /* Responsive scaling for surface2 content */
                    #psyche-container {
                        width: 100% !important;
                        height: ${Math.max(300, 50 * o)}vh !important;
                        max-width: 100% !important;
                    }
                    
                    #header-h1 {
                        font-size: ${Math.max(40, 90 * o)}px !important;
                    }
                    
                    #materials, #features, #dimensions, #comparable, #explore {
                        width: 90% !important;
                    }
                    
                    #inner-materials h1, #inner-features h1, #inner-dimensions h1, 
                    #inner-comparable h1, #inner-explore h1 {
                        font-size: ${Math.max(30, 60 * o)}px !important;
                    }
                    
                    #inner-materials p, #inner-features p, #inner-dimensions p, 
                    #inner-comparable p, #inner-explore p {
                        font-size: ${Math.max(18, 40 * o)}px !important;
                    }
                    
                    #comparable h3 {
                        font-size: ${Math.max(25, 50 * o)}px !important;
                    }
                    
                    #comparable h4 {
                        font-size: ${Math.max(20, 40 * o)}px !important;
                    }
                    
                    /* Ensure content is scrollable */
                    body {
                        overflow-y: auto !important;
                    }
                `, console.log(`Applied responsive scaling: ${o}`), wt.contentWindow.updatePsycheModelSize && setTimeout(() => {
          wt.contentWindow.updatePsycheModelSize(), console.log("Triggered 3D model resize");
        }, 100);
      }
    } catch (n) {
      console.error("Could not modify iframe content:", n);
    }
  }
  function Sb() {
    if (Qe) {
      Qe.style.display = "flex", Tr();
      return;
    }
    console.log("Creating surface2 viewport"), Qe = document.createElement("div"), Qe.id = "surface2-viewport-container", Ws(Qe, {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderColor: "rgba(122, 95, 62, 0.3)",
      boxShadow: "0 0 15px rgba(122, 95, 62, 0.3)"
    });
    const { width: r, maxWidth: e, height: t } = jm();
    Qe.style.width = r, Qe.style.maxWidth = e, Qe.style.height = t;
    const n = document.createElement("div");
    Xs(n, {
      backgroundColor: "rgba(10, 10, 20, 0.2)",
      gradientStart: "rgba(10, 10, 20, 0.2)",
      gradientEnd: "rgba(20, 20, 40, 0.2)"
    });
    const i = document.createElement("h2");
    i.textContent = "The Surface of Psyche", qs(i), Er = document.createElement("button"), Er.textContent = "\u2715", Ys(Er), n.appendChild(i), n.appendChild(Er), Qe.appendChild(n), wt = document.createElement("iframe"), wt.src = "/PsycheJR/surface2.html", $s(wt, {
      backgroundColor: "rgba(0, 0, 0, 0.0)"
    }), Ks(document), wt.onerror = () => {
      console.error("Failed to load surface2 iframe content");
    }, wt.onload = () => {
      console.log("Surface2 iframe loaded successfully"), js(wt), Tr();
      try {
        const s = wt.contentDocument || wt.contentWindow.document, o = new MutationObserver(() => {
          Tr();
        });
        o.observe(s.body, {
          childList: true,
          subtree: true
        });
        const a = s.getElementById("psyche-container");
        if (a) {
          o.observe(a, {
            childList: true,
            subtree: true,
            attributes: true
          });
          const l = new Event("resize");
          window.dispatchEvent(l);
        }
      } catch (s) {
        console.error("Could not set up MutationObserver:", s);
      }
    }, Qe.appendChild(wt), document.body.appendChild(Qe), Zs(Qe), Js(Qe), Qs(Qe, n, wt), eo(Qe), Er.addEventListener("click", Ih), document.addEventListener("keydown", Zm), window.addEventListener("resize", Tr), Do = new ResizeObserver((s) => {
      console.log("ResizeObserver detected size change"), Tr();
    }), Do.observe(document.body);
  }
  function Ih() {
    Qe && Hr(Qe, () => {
      Qe.style.display = "none", Qe.style.opacity = 1, Qe.style.transform = "translate(-50%, -50%) scale(1)", document.body.classList.add("overlay-open");
    });
  }
  function Zm(r) {
    r.key === "Escape" && Ih();
  }
  function Mb() {
    Qe && (Er.removeEventListener("click", Ih), document.removeEventListener("keydown", Zm), window.removeEventListener("resize", Tr), Do && (Do.disconnect(), Do = null), document.body.removeChild(Qe), Qe = null, wt = null, Er = null);
  }
  window.setSurface2ViewportSize = function(r, e) {
    if (!Qe) {
      console.warn("Surface2 viewport is not currently active");
      return;
    }
    if (console.log(`Manually setting viewport size to ${r}x${e}`), Qe.style.width = `${r}px`, Qe.style.maxWidth = `${r}px`, Qe.style.height = `${e}px`, Qe.style.transform = "translate(-50%, -50%)", wt && wt.contentDocument) try {
      const t = wt.contentDocument || wt.contentWindow.document;
      if (t.getElementById("psyche-container")) {
        const i = Math.min(1, r / 1920);
        let s = t.getElementById("responsive-scaling");
        s || (s = t.createElement("style"), s.id = "responsive-scaling", t.head.appendChild(s)), s.textContent = `
                    /* Responsive scaling for surface2 content */
                    #psyche-container {
                        width: 100% !important;
                        height: ${Math.max(300, 50 * i)}vh !important;
                        max-width: 100% !important;
                    }
                    
                    #header-h1 {
                        font-size: ${Math.max(40, 90 * i)}px !important;
                    }
                    
                    #materials, #features, #dimensions, #comparable, #explore {
                        width: 90% !important;
                    }
                    
                    #inner-materials h1, #inner-features h1, #inner-dimensions h1, 
                    #inner-comparable h1, #inner-explore h1 {
                        font-size: ${Math.max(30, 60 * i)}px !important;
                    }
                    
                    #inner-materials p, #inner-features p, #inner-dimensions p, 
                    #inner-comparable p, #inner-explore p {
                        font-size: ${Math.max(18, 40 * i)}px !important;
                    }
                    
                    #comparable h3 {
                        font-size: ${Math.max(25, 50 * i)}px !important;
                    }
                    
                    #comparable h4 {
                        font-size: ${Math.max(20, 40 * i)}px !important;
                    }
                `, console.log(`Applied manual scaling: ${i}`);
        const o = new Event("resize");
        window.dispatchEvent(o);
      }
    } catch (t) {
      console.error("Could not modify iframe content:", t);
    }
    return `Viewport size set to ${r}x${e}`;
  };
  window.resetSurface2ViewportSize = function() {
    if (!Qe) {
      console.warn("Surface2 viewport is not currently active");
      return;
    }
    return Tr(), "Viewport size reset to responsive mode";
  };
  let et = null, gi = null, br = null, Io = null;
  function Jm() {
    const r = window.innerWidth, e = window.innerHeight, t = window.devicePixelRatio || 1;
    console.log(`Screen size: ${r}x${e}, Pixel ratio: ${t}`);
    let n, i, s;
    return r === 2388 && e === 1668 || e === 2388 && r === 1668 ? (console.log('iPad Pro 11" detected'), n = "90%", s = "2000px", i = "90vh") : r >= 2e3 ? (n = "85%", s = "2400px", i = "85vh") : r >= 1600 ? (n = "88%", s = "1900px", i = "88vh") : r >= 1200 ? (n = "90%", s = "1500px", i = "90vh") : r >= 992 ? (n = "92%", s = "1150px", i = "92vh") : r >= 768 ? (n = "95%", s = "950px", i = "95vh") : (n = "98%", s = "100%", i = "98vh"), {
      width: n,
      maxWidth: s,
      height: i
    };
  }
  function No() {
    if (!et) return;
    const { width: r, maxWidth: e, height: t } = Jm();
    et.style.width = r, et.style.maxWidth = e, et.style.height = t, console.log(`Viewport resized to: width=${r}, maxWidth=${e}, height=${t}`);
  }
  function Eb() {
    if (et) {
      et.style.display = "flex", No();
      return;
    }
    console.log("Creating location2 viewport"), et = document.createElement("div"), et.id = "location2-viewport-container", Ws(et, {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderColor: "rgba(122, 95, 62, 0.3)",
      boxShadow: "0 0 15px rgba(122, 95, 62, 0.3)"
    });
    const { width: r, maxWidth: e, height: t } = Jm();
    et.style.width = r, et.style.maxWidth = e, et.style.height = t;
    const n = document.createElement("div");
    Xs(n, {
      backgroundColor: "rgba(10, 10, 20, 0.2)",
      gradientStart: "rgba(10, 10, 20, 0.2)",
      gradientEnd: "rgba(20, 20, 40, 0.2)"
    });
    const i = document.createElement("h2");
    i.textContent = "Psyche's Location in Space", qs(i), br = document.createElement("button"), br.textContent = "\u2715", Ys(br), n.appendChild(i), n.appendChild(br), et.appendChild(n), gi = document.createElement("iframe"), gi.src = "/PsycheJR/location2.html", $s(gi, {
      backgroundColor: "rgba(0, 0, 0, 0.0)"
    }), Ks(document), gi.onerror = () => {
      console.error("Failed to load location2 iframe content");
    }, gi.onload = () => {
      console.log("Location2 iframe loaded successfully"), js(gi);
    }, et.appendChild(gi), document.body.appendChild(et), Zs(et), Js(et), Qs(et, n, gi), eo(et), br.addEventListener("click", Nh), document.addEventListener("keydown", Qm), window.addEventListener("resize", No), Io = new ResizeObserver((s) => {
      console.log("ResizeObserver detected size change"), No();
    }), Io.observe(document.body);
  }
  function Nh() {
    et && Hr(et, () => {
      et.style.display = "none", et.style.opacity = 1, et.style.transform = "translate(-50%, -50%) scale(1)", document.body.classList.add("overlay-open");
    });
  }
  function Qm(r) {
    r.key === "Escape" && Nh();
  }
  function Tb() {
    et && (br.removeEventListener("click", Nh), document.removeEventListener("keydown", Qm), window.removeEventListener("resize", No), Io && (Io.disconnect(), Io = null), document.body.removeChild(et), et = null, gi = null, br = null);
  }
  window.setLocation2ViewportSize = function(r, e) {
    if (!et) {
      console.warn("Location2 viewport is not currently active");
      return;
    }
    return console.log(`Manually setting viewport size to ${r}x${e}`), et.style.width = `${r}px`, et.style.maxWidth = `${r}px`, et.style.height = `${e}px`, et.style.transform = "translate(-50%, -50%)", `Viewport size set to ${r}x${e}`;
  };
  window.resetLocation2ViewportSize = function() {
    if (!et) {
      console.warn("Location2 viewport is not currently active");
      return;
    }
    return No(), "Viewport size reset to responsive mode";
  };
  let wr, Bf, Pu, vs = 1, Lu = false, Du = 0;
  const zf = {
    0: ab,
    2: Ko,
    3: Rh,
    4: gb,
    5: yb,
    6: Ch,
    7: Mb,
    8: Tb
  };
  let gc = vs;
  function bb(r) {
    Du = r.touches[0].clientY;
  }
  function wb(r) {
    const e = r.touches[0].clientY, t = Du - e;
    Du = e, eg({
      deltaY: t
    }), r.preventDefault();
  }
  function Ab(r, e, t) {
    wr = r, Bf = t, Pu = e, window.addEventListener("wheel", eg, {
      passive: false
    }), window.addEventListener("touchstart", bb, {
      passive: false
    }), window.addEventListener("touchmove", wb, {
      passive: false
    }), window.addEventListener("resize", () => Cb(wr, Bf));
  }
  function Cb(r, e) {
    if (!r || !e) {
      console.error("onResize called without a valid camera or renderer.");
      return;
    }
    const t = Math.max(window.innerWidth, 768), n = t / window.innerHeight;
    if (r.aspect = n, r.updateProjectionMatrix(), e.setSize(t, window.innerHeight), e.setPixelRatio(Math.min(window.devicePixelRatio, 2)), t < 1300) {
      const i = (1300 - t) * 0.048;
      r.fov = Math.min(75 + i, 100);
    } else r.fov = 75;
    r.updateProjectionMatrix();
  }
  function eg(r) {
    if (Lu) return;
    const e = r.deltaY > 0 ? 1 : -1;
    let t = vs + e;
    console.log("Swipe Direction: ", e), t > 8 ? t = 1 : t < 1 && (t = 8), Lu = true, Iu(t);
  }
  function Iu(r, e = null) {
    if (r < 0 || r >= Pu.length) return;
    zf[gc] && zf[gc](), vs = r, gc = r, vs = r;
    const t = Pu[r].position;
    ft.to(wr.position, {
      x: t.x,
      y: t.y,
      z: t.z,
      duration: 2,
      ease: "power4.inOut",
      onUpdate: () => {
      },
      onComplete: () => {
        r !== 6 && (new D(wr.position.x, wr.position.y, wr.position.z - 1), r === 0 && zm()), Lu = false, console.log("Moved to Section:", vs);
        const i = new D();
        wr.getWorldDirection(i), console.log("Camera is now looking in direction:", i);
      }
    });
  }
  function to() {
    return vs;
  }
  const Rb = "modulepreload", Pb = function(r) {
    return "/iridium_23e_year_sim-se/" + r;
  }, kf = {}, _c = function(e, t, n) {
    let i = Promise.resolve();
    if (t && t.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"), a = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
      i = Promise.allSettled(t.map((l) => {
        if (l = Pb(l), l in kf) return;
        kf[l] = true;
        const c = l.endsWith(".css"), u = c ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${l}"]${u}`)) return;
        const h = document.createElement("link");
        if (h.rel = c ? "stylesheet" : Rb, c || (h.as = "script"), h.crossOrigin = "", h.href = l, a && h.setAttribute("nonce", a), document.head.appendChild(h), c) return new Promise((d, f) => {
          h.addEventListener("load", d), h.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${l}`)));
        });
      }));
    }
    function s(o) {
      const a = new Event("vite:preloadError", {
        cancelable: true
      });
      if (a.payload = o, window.dispatchEvent(a), !a.defaultPrevented) throw o;
    }
    return i.then((o) => {
      for (const a of o || []) a.status === "rejected" && s(a.reason);
      return e().catch(s);
    });
  };
  function Lb() {
    const r = document.getElementById("mouse-scroll-indicator");
    r.style.display = "block";
    const e = document.querySelector(".mouse-scroll-indicator");
    if (!e) return;
    const t = window.innerWidth, n = window.innerHeight, i = Math.min(t, n) / 300;
    document.documentElement.style.setProperty("--dynamic-scale", i);
    const s = document.createElement("div");
    s.id = "scroll-text", s.textContent = "SCROLL UP OR DOWN TO EXPLORE", document.body.appendChild(s), setTimeout(() => {
      e.classList.add("moved"), s.classList.add("fade-out");
    }, 3e3), setTimeout(() => {
      s.remove();
    }, 4500);
  }
  function Db(r) {
    const e = document.getElementById("cn-icon-wrapper"), t = document.getElementById("cn-wrapper"), n = document.getElementById("cn-overlay"), i = document.createElement("ul");
    i.style.listStyle = "none", i.style.padding = "0";
    let s = false, o = false, a = null, l = null;
    i.innerHTML = "", r.forEach((f, _) => {
      const g = document.createElement("li"), m = document.createElement("div");
      m.textContent = f.name;
      const p = document.createElement("span");
      if (p.textContent = "\u25BA", p.style.cursor = "pointer", p.style.marginLeft = "15px", g.style.cursor = "pointer", g.style.padding = "10px", g.style.color = "black", g.style.borderBottom = "1px solid rgba(255,255,255,0.3)", g.textContent = f.name, g.addEventListener("click", () => {
        Iu(_, f.position), u();
      }), f.subsections && f.subsections.length > 0) {
        g.appendChild(p);
        const y = document.createElement("ul");
        y.style.listStyle = "none", y.style.marginLeft = "5px", y.style.display = "none", f.subsections.forEach((v) => {
          const x = document.createElement("li");
          x.textContent = v.name, x.style.cursor = "pointer", x.addEventListener("click", (w) => {
            w.stopPropagation(), Iu(_, v.position), u();
          }), y.appendChild(x);
        }), p.addEventListener("click", (v) => {
          v.stopPropagation(), y.style.display === "none" ? (y.style.display = "block", p.classList.toggle("arrow-rotated")) : (y.style.display = "none", p.classList.toggle("arrow-rotated"));
        }), g.appendChild(y);
      }
      if (i.appendChild(g), f.name === "Games Section") {
        const y = document.createElement("ul");
        y.className = "submenu", y.style.listStyle = "none", y.style.padding = "0", y.style.marginLeft = "20px", y.style.display = "block", y.style.backgroundColor = "rgba(0, 0, 0, 0.8)", y.style.borderRadius = "5px", y.style.overflow = "hidden", [
          {
            name: "PsycheJR",
            path: "../PsycheJR/kids.html"
          },
          {
            name: "Escape Velocity",
            path: "../escapeVelocity/escape-velocity.html"
          },
          {
            name: "SpacePic",
            path: "../spacepic/photo.html"
          }
        ].forEach((w) => {
          const b = document.createElement("li");
          b.textContent = w.name, b.style.cursor = "pointer", b.style.padding = "8px 15px", b.style.color = "#00aaff", b.style.borderBottom = "1px solid rgba(255,255,255,0.1)", b.style.fontSize = "0.9em", b.addEventListener("mouseover", () => {
            b.style.backgroundColor = "rgba(0, 170, 255, 0.2)", b.style.opacity = "1", b.style.color = "black";
          }), b.addEventListener("mouseout", () => {
            b.style.backgroundColor = "transparent", b.style.opacity = "1", b.style.color = "#00aaff";
          }), b.addEventListener("click", (A) => {
            A.stopPropagation(), w.name === "PsycheJR" ? _c(() => Promise.resolve().then(() => pb), void 0).then((P) => {
              P.showKidsViewport();
            }) : w.name === "Escape Velocity" ? _c(() => Promise.resolve().then(() => Gb), void 0).then((P) => {
              P.showEscapeVelocityViewport();
            }) : w.name === "SpacePic" && _c(() => import("./viewportspacepic-CCNBDOiV.js"), []).then((P) => {
              P.showSpacePicViewport();
            }), document.body.classList.remove("overlay-open");
          }), y.appendChild(b);
        }), g.appendChild(y), g.addEventListener("click", (w) => {
          const b = y.style.display;
          document.querySelectorAll(".submenu").forEach((A) => {
            A.style.display = "none";
          }), y.style.display = b === "none" ? "block" : "none", w.stopPropagation();
        });
        const x = document.createElement("span");
        x.textContent = " \u25BC", x.style.fontSize = "0.8em", x.style.marginLeft = "5px", g.appendChild(x);
      }
    }), t.appendChild(i);
    function c() {
      clearTimeout(a), clearTimeout(l), s = true, o = true, t.classList.remove("closing"), t.classList.add("opened-nav"), n.classList.add("active"), e.classList.add("active"), e.style.transition = "transform 0.5s ease-in-out", e.style.transform = "rotate(360deg)";
    }
    function u() {
      s && (s = false, o = false, t.classList.add("closing"), a = setTimeout(() => {
        t.classList.remove("opened-nav"), t.classList.remove("closing");
      }, 300), n.classList.remove("active"), e.classList.remove("active"), e.style.transition = "transform 0.5s ease-in-out", e.style.transform = "rotate(0deg)");
    }
    function h() {
      s ? u() : c();
    }
    function d() {
      o || (l = setTimeout(() => {
        u();
      }, 250));
    }
    e.addEventListener("mouseenter", () => {
      o || c();
    }), t.addEventListener("mouseenter", () => {
      o || c();
    }), e.addEventListener("mouseleave", d), t.addEventListener("mouseleave", d), e.addEventListener("click", h), n.addEventListener("click", u), document.addEventListener("click", (f) => {
      !t.contains(f.target) && !e.contains(f.target) && u();
    });
  }
  function Ib(r, e, t) {
    return new Promise((n) => {
      var _a2;
      const i = (_a2 = t[0]) == null ? void 0 : _a2.position, s = {
        x: i.x - 12,
        y: i.y + 6,
        z: i.z - 13
      };
      console.log("TMP", s);
      const o = {
        x: 0,
        y: 0.1,
        z: 0
      };
      Cu("REFERENCES", s, o, 1, r, 0.02, "#FFA500", 0.07, 0.03), XT([
        {
          text: "Disclaimer",
          onClick: () => dr("/refsViewport/disclaimer.html")
        },
        {
          text: "Dev & Contributors",
          onClick: () => dr("/refsViewport/dev.html")
        },
        {
          text: "Acknowledgments",
          onClick: () => dr("/refsViewport/thanks.html")
        },
        {
          text: "Licensing",
          onClick: () => dr("/refsViewport/license.html")
        },
        {
          text: "Third-Party Assets",
          onClick: () => dr("/refsViewport/assets.html")
        },
        {
          text: "Technical References",
          onClick: () => dr("/refsViewport/technical.html")
        },
        {
          text: "Contact / Support",
          onClick: () => dr("/refsViewport/contact.html")
        }
      ], s, o, r), n();
    });
  }
  function Nb(r, e, t) {
    var _a2;
    const n = (_a2 = t[1]) == null ? void 0 : _a2.position;
    if (!n) return console.error("Section 1 position not found."), Promise.reject("Section 1 position not found.");
    const i = {
      x: n.x - 12,
      y: n.y + 3,
      z: n.z - 13
    }, s = {
      x: 0,
      y: Math.PI / 12,
      z: 0
    }, o = {
      x: n.x - 11,
      y: n.y - 2,
      z: n.z - 13
    }, a = {
      x: 0,
      y: Math.PI / 12,
      z: 0
    };
    return new Promise(async (l, c) => {
      Cu("YEAR ON PSYCHE", i, s, 1.5, r, 0.02, "#FFA500", 0.07, 0.03);
      const h = await Cu(`16 PSYCHE IS AN ASTEROID IN OUR SOLAR SYSTEM
    EXPLORE THIS SITE TO LEARN ABOUT PSYCHE,,
     ITS ORIGIN, ORBIT, AND WHAT MAKES IT UNIQUE
`, o, a, 0.4, r, null, "#FFA500");
      h.material.uniforms.opacity.value = 0, ft.to(h.material.uniforms.opacity, {
        value: 1,
        duration: 2.5,
        delay: 4
      }), kr("asteroid", "/res/models/psyche_new.glb", {
        x: 80,
        y: 60,
        z: 20
      }, 6, {
        x: 0,
        y: 0,
        z: 0
      }, {
        position: {
          x: 20,
          y: 16,
          z: -45,
          duration: 3,
          ease: "power2.out"
        },
        rotation: {
          y: -6.28319,
          z: 6.28319,
          duration: 45,
          ease: "linear",
          repeat: -1
        }
      }, r, (d) => {
        l();
      }), setTimeout(() => c("Model load timeout"), 1e4);
    }).then(() => {
      console.log("section 1 loaded");
    }).catch((l) => {
      console.error("Error loading Section 1:", l);
    });
  }
  function Ub(r, e, t, n) {
    var _a2;
    const i = (_a2 = t[2]) == null ? void 0 : _a2.position;
    if (!i) return console.error("Section 2 position not found."), Promise.reject("Section 2 position not found.");
    const s = {
      x: i.x,
      y: i.y + 6,
      z: i.z - 12
    }, o = {
      x: 0.2,
      y: 0,
      z: 0
    };
    return new Promise((a, l) => {
      try {
        const { buttonMesh: c } = Vr("CLICK HERE TO LEARN HOW PSYCHE GOT ITS NAME!", s, o, 0.7, r, () => {
          console.log("Origin button clicked."), lb();
        }), u = new Fr(), h = new ee();
        window.addEventListener("mousemove", (d) => {
          const f = n.domElement.getBoundingClientRect();
          h.x = (d.clientX - f.left) / f.width * 2 - 1, h.y = -((d.clientY - f.top) / f.height) * 2 + 1, u.setFromCamera(h, e);
          const _ = u.intersectObjects(zr);
          n.domElement.style.cursor = _.length > 0 ? "pointer" : "default";
        }), a();
      } catch (c) {
        l(c);
      }
    });
  }
  function Ob(r, e, t, n) {
    return new Promise((i, s) => {
      var _a2;
      const o = (_a2 = t[3]) == null ? void 0 : _a2.position;
      if (!o) {
        console.error("Section 3 position not found."), s("Section 3 position not found.");
        return;
      }
      const a = new nh(8019774, 15);
      a.position.set(-150, 150, 13);
      const l = new vt();
      l.position.set(-150, 145, -20), a.target = l, r.add(a);
      const c = {
        x: o.x,
        y: o.y + 2,
        z: o.z - 12
      }, u = {
        x: o.x,
        y: o.y - 5,
        z: o.z - 15
      }, h = {
        x: 0.2,
        y: 0,
        z: 0
      }, d = {
        x: 0.2,
        y: 0,
        z: 0
      };
      try {
        kr("Jr", "./../../res/models/Jr.glb", u, 9, d, null, r, () => {
          console.log("loaded model");
        }), Vr("EXPLORE THE PSYCHE Jr KIDS EXPERIENCE", c, h, 0.7, r, () => {
          Xm(), console.log("Psyche Jr button clicked.");
        }).then(({ textMesh: f, buttonMesh: _ }) => {
        }), i();
      } catch (f) {
        console.error("Error setting up Section 3:", f), s(f);
      }
    });
  }
  function Fb(r, e) {
    const n = to() === 3;
    for (let i = 0; i < e.children.length; i++) {
      const s = e.children[i];
      s.userData && s.userData.section3Element && (s.visible = n);
    }
  }
  function Bb(r, e, t, n) {
    var _a2;
    const i = (_a2 = t[5]) == null ? void 0 : _a2.position;
    if (!i) return console.error("Section 5 position not found."), Promise.reject("Section 5 position not found.");
    const s = {
      x: i.x,
      y: i.y + 2,
      z: i.z - 12
    }, o = {
      x: i.x,
      y: i.y - 3,
      z: i.z - 25
    }, a = {
      x: 0.2,
      y: 0,
      z: 0
    }, l = {
      x: 0,
      y: 90,
      z: 0
    };
    return new Promise((c, u) => {
      try {
        kr("Satellite", "./../../res/models/satellite.glb", o, 0.75, l, {
          rotation: {
            x: 20,
            y: 0,
            z: 10,
            duration: 205,
            ease: "linear",
            repeat: -1
          }
        }, r, () => {
          console.log("loaded model");
        });
        const { buttonMesh: h } = Vr("EXPLORE THE MISSION WEBSITE", s, a, 0.7, r, () => {
          vb(), console.log("Psyche Jr button clicked.");
        }), d = new Fr(), f = new ee();
        window.addEventListener("mousemove", (_) => {
          const g = n.domElement.getBoundingClientRect();
          f.x = (_.clientX - g.left) / g.width * 2 - 1, f.y = -((_.clientY - g.top) / g.height) * 2 + 1, d.setFromCamera(f, e);
          const m = d.intersectObjects(zr);
          n.domElement.style.cursor = m.length > 0 ? "pointer" : "default";
        }), c();
      } catch (h) {
        console.error("Error loading Section 5:", h), u(h);
      }
    });
  }
  function zb(r, e, t, n) {
    return new Promise((i, s) => {
      var _a2;
      const o = (_a2 = t[7]) == null ? void 0 : _a2.position;
      if (!o) {
        console.error("Error: Section 7 position not found."), s("Section 7 position not found.");
        return;
      }
      const a = {
        x: o.x,
        y: o.y + 2,
        z: o.z - 12
      }, l = {
        x: o.x,
        y: o.y - 5,
        z: o.z - 15
      }, c = {
        x: 0.2,
        y: 0,
        z: 0
      }, u = {
        x: 0,
        y: 5,
        z: 0
      };
      try {
        kr("Jr", "./../../res/models/PsycheSlice.glb", l, 1.4, u, null, r, () => {
          console.log("loaded model");
        }), Vr("Explore the Surface of Psyche", a, c, 0.7, r, () => {
          Sb(), console.log("Surface button clicked.");
        }).then(({ textMesh: h, buttonMesh: d }) => {
          const f = d.material.emissive.clone(), _ = d.material.emissiveIntensity, g = new Fr(), m = new ee();
          window.addEventListener("mousemove", (p) => {
            const y = n.domElement.getBoundingClientRect();
            m.x = (p.clientX - y.left) / y.width * 2 - 1, m.y = -((p.clientY - y.top) / y.height) * 2 + 1, g.setFromCamera(m, e), g.intersectObjects([
              d
            ]).length > 0 ? (wh(d, {
              color: "#ff9900",
              intensity: 2
            }), n.domElement.style.cursor = "pointer") : (d.material.emissive = f, d.material.emissiveIntensity = _, d.material.needsUpdate = true, n.domElement.style.cursor = "default");
          });
        }), i();
      } catch (h) {
        console.error("Error setting up Section 3:", h), s(h);
      }
    });
  }
  function kb(r, e) {
    const n = to() === 3;
    for (let i = 0; i < e.children.length; i++) {
      const s = e.children[i];
      s.userData && s.userData.section3Element && (s.visible = n);
    }
  }
  function Vb(r, e, t, n) {
    var _a2;
    const i = (_a2 = t[8]) == null ? void 0 : _a2.position;
    if (!i) return console.error("Section 8 position not found."), Promise.reject("Section 8 position not found.");
    const s = {
      x: i.x,
      y: i.y + 2,
      z: i.z - 12
    }, o = {
      x: i.x,
      y: i.y - 3,
      z: i.z - 12
    };
    console.log("map pin location: ", o);
    const a = {
      x: 0.2,
      y: 0,
      z: 0
    }, l = {
      x: -0.02,
      y: 0.5,
      z: 0
    };
    return new Promise((c, u) => {
      try {
        kr("controller", "/res/models/navigation_pin.glb", o, 1, l, {
          rotation: {
            x: 0,
            y: -40,
            z: 0,
            duration: 45,
            ease: "linear",
            repeat: -1
          }
        }, r, () => {
          console.log("loaded model");
        });
        const { buttonMesh: h } = Vr("EXPLORE PSYCHE'S LOCATION", s, a, 0.7, r, () => {
          Eb(), console.log("Location button clicked.");
        });
        wh(h, {
          color: "#ff9900",
          intensity: 2
        });
        const d = new Fr(), f = new ee();
        window.addEventListener("mousemove", (_) => {
          const g = n.domElement.getBoundingClientRect();
          f.x = (_.clientX - g.left) / g.width * 2 - 1, f.y = -((_.clientY - g.top) / g.height) * 2 + 1, d.setFromCamera(f, e);
          const m = d.intersectObjects(zr);
          n.domElement.style.cursor = m.length > 0 ? "pointer" : "default";
        }), c();
      } catch (h) {
        u(h);
      }
    });
  }
  const Vf = [];
  function Hb(r, e) {
    if (Vf.length === 0) return;
    const n = to() === 8;
    Vf.forEach((i) => {
      i.visible !== n && (i.visible = n);
    });
  }
  let ht = null, Rn = null, xn = null;
  function ul() {
    if (ht) {
      ht.style.display = "flex";
      return;
    }
    console.log("Creating escape velocity viewport"), ht = document.createElement("div"), ht.id = "escape-velocity-viewport-container", ht.style.position = "fixed", ht.style.top = "50%", ht.style.left = "50%", ht.style.transform = "translate(-50%, -50%)", ht.style.width = "80%", ht.style.maxWidth = "1440px", ht.style.height = "80vh", ht.style.backgroundColor = "rgba(0, 0, 0, 0.9)", ht.style.border = "2px solid #007bff", ht.style.borderRadius = "10px", ht.style.boxShadow = "0 0 20px rgba(0, 123, 255, 0.5)", ht.style.zIndex = "900", ht.style.display = "flex", ht.style.flexDirection = "column", ht.style.overflow = "hidden";
    const r = document.createElement("div");
    r.style.display = "flex", r.style.justifyContent = "space-between", r.style.alignItems = "center", r.style.padding = "10px 15px", r.style.backgroundColor = "#007bff", r.style.color = "white", r.style.borderTopLeftRadius = "8px", r.style.borderTopRightRadius = "8px";
    const e = document.createElement("h2");
    e.textContent = "Escape Velocity Game", e.style.margin = "0", e.style.fontSize = "1.2rem";
    const t = document.createElement("div");
    t.style.display = "flex", t.style.alignItems = "center", t.style.gap = "10px";
    const n = document.createElement("button");
    n.textContent = "\u21A9", n.style.background = "none", n.style.border = "none", n.style.color = "white", n.style.fontSize = "1.2rem", n.style.cursor = "pointer", n.style.padding = "0 5px", n.style.lineHeight = "1", n.style.marginRight = "5px", xn = document.createElement("button"), xn.textContent = "\u2715", xn.style.background = "none", xn.style.border = "none", xn.style.color = "white", xn.style.fontSize = "1.5rem", xn.style.cursor = "pointer", xn.style.padding = "0 5px", xn.style.lineHeight = "1", t.appendChild(n), t.appendChild(xn), r.appendChild(e), r.appendChild(t), ht.appendChild(r), Rn = document.createElement("iframe"), Rn.src = "/games/escape-velocity.html", Rn.style.width = "100%", Rn.style.height = "100%", Rn.style.border = "none", Rn.style.backgroundColor = "#222", Rn.onerror = () => {
      console.error("Failed to load iframe content");
    }, Rn.onload = () => {
      console.log("Iframe loaded successfully");
    }, ht.appendChild(Rn), document.body.appendChild(ht);
    const i = ft.timeline();
    i.from(ht, {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      ease: "power2.out"
    }), i.from(r, {
      y: -50,
      duration: 0.3,
      ease: "back.out(1.7)"
    }, "-=0.2"), i.from(Rn, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power2.out"
    }, "-=0.1"), xn.addEventListener("click", na), n.addEventListener("click", function(s) {
      s.preventDefault(), s.stopPropagation(), e.textContent = "Psyche Mission Games", Rn.src = "./games/games.html", console.log("Loading games HTML in escape velocity viewport");
    }), document.addEventListener("keydown", tg), setTimeout(ta, 100);
  }
  function na() {
    ht && ft.to(ht, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        ng(), document.body.classList.add("overlay-open");
      }
    });
  }
  function tg(r) {
    r.key === "Escape" && na();
  }
  function ng() {
    ht && (xn.removeEventListener("click", na), document.removeEventListener("keydown", tg), document.body.removeChild(ht), ht = null, Rn = null, xn = null);
  }
  const Gb = Object.freeze(Object.defineProperty({
    __proto__: null,
    destroyEscapeVelocityViewport: ng,
    hideEscapeVelocityViewport: na,
    showEscapeVelocityViewport: ul
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  let Hf = [], Oa = false;
  function Wb(r, e, t, n) {
    return new Promise((i, s) => {
      try {
        const o = new Ur(40, 20, 5), a = new jn({
          color: 31743,
          transparent: false
        }), l = new Ct(o, a);
        l.position.set(200, 300, -110), l.userData.section9Element = true, r.add(l);
        const c = [];
        c.push(l);
        const u = document.createElement("canvas");
        u.width = 256, u.height = 128;
        const h = u.getContext("2d");
        h.fillStyle = "#007bff", h.fillRect(0, 0, u.width, u.height), h.font = "bold 24px Arial", h.fillStyle = "white", h.textAlign = "center", h.textBaseline = "middle", h.fillText("Escape Velocity", u.width / 2, u.height / 2);
        const d = new Q_(u), f = new jn({
          map: d,
          transparent: true
        }), _ = new Zo(50, 25), g = new Ct(_, f);
        g.position.set(200, 300, -107), g.userData.section9Element = true, r.add(g), c.push(g);
        const m = new th(16777215, 2, 200);
        m.position.set(200, 300, -100), m.userData.section9Element = true, r.add(m), c.push(m);
        const p = new Cp(16777215, 0.5);
        p.userData.section9Element = true, r.add(p), c.push(p), Ru(l, () => {
          ul();
        }), Ru(g, () => {
          ul();
        });
        let y = false;
        l.userData.onPointerOver = () => {
          y || (ft.to(l.material.color, {
            r: 0,
            g: 0.337,
            b: 0.702,
            duration: 0.3
          }), y = true);
        }, l.userData.onPointerOut = () => {
          y && (ft.to(l.material.color, {
            r: 0,
            g: 0.482,
            b: 1,
            duration: 0.3
          }), y = false);
        }, c.forEach((v) => {
          v.visible = false;
        }), i();
      } catch (o) {
        s(o);
      }
    });
  }
  function Xb(r, e) {
    if (Hf.length === 0) return;
    const n = to() === 9;
    Hf.forEach((i) => {
      i.visible !== n && (i.visible = n);
    }), n && !Oa ? setTimeout(() => {
      ul(), Oa = true;
    }, 500) : !n && Oa && (na(), Oa = false);
  }
  function qb() {
    document.getElementById("loading-screen");
    const r = document.getElementById("progress-bar"), e = [
      {
        name: "REFERENCES",
        position: {
          x: -150,
          y: -150,
          z: 13
        }
      },
      {
        name: "WELCOME",
        position: {
          x: 0,
          y: 0,
          z: 13
        }
      },
      {
        name: "16 PSYCHE",
        position: {
          x: 20,
          y: 30,
          z: 10
        }
      },
      {
        name: "PSYCHE Jr",
        position: {
          x: -150,
          y: 150,
          z: 13
        }
      },
      {
        name: "COSMIC COMPARISON",
        position: {
          x: 0,
          y: 300,
          z: 13
        }
      },
      {
        name: "MISSION",
        position: {
          x: 150,
          y: 150,
          z: 13
        }
      },
      {
        name: "GAMES",
        position: {
          x: 300,
          y: 0,
          z: 13
        },
        subsections: [
          {
            name: "Temperature Control",
            position: {
              x: 300,
              y: 0,
              z: 13
            }
          },
          {
            name: "Balance Game",
            position: {
              x: 300,
              y: 0,
              z: 13
            }
          },
          {
            name: "Escape Velocity",
            position: {
              x: 300,
              y: 0,
              z: 13
            }
          },
          {
            name: "SpacePic",
            position: {
              x: 300,
              y: 0,
              z: 13
            }
          }
        ]
      },
      {
        name: "SURFACE OF PSYCHE",
        position: {
          x: 150,
          y: -150,
          z: 13
        }
      },
      {
        name: "LOCATION OF PYSCHE",
        position: {
          x: 0,
          y: -300,
          z: 13
        }
      }
    ];
    Db(e);
    const t = new H_(), n = new en(75, window.innerWidth / window.innerHeight, 0.1, 5e3);
    n.position.set(0, 0, 13);
    const i = new qM({
      antialias: true
    });
    i.setSize(window.innerWidth, window.innerHeight), i.setPixelRatio(window.devicePixelRatio), document.getElementById("canvas-container").appendChild(i.domElement);
    const s = new Cp(16777215, 0.5);
    t.add(s);
    const o = new nh(10264748, 3);
    o.position.set(-15, 5, 5), t.add(o), Ab(n, e, i);
    const a = navigator.hardwareConcurrency < 4 || window.devicePixelRatio < 1.5, l = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent), c = a ? 0.5 : 1, u = a ? 1 : 2, h = document.getElementById("debug-panel");
    function d() {
      const y = to();
      h.innerHTML = `
      <strong>DEBUG PANEL:</strong><br>
      <strong>Current Section:</strong>
      ${y}<br>
      <strong>Camera Position:</strong><br>
      X: ${n.position.x.toFixed(2)}<br>
      Y: ${n.position.y.toFixed(2)}<br>
      Z: ${n.position.z.toFixed(2)}<br>
      Is Mobile: ${l}<br>
      Concurrency: ${navigator.hardwareConcurrency}<br>
      PixelRatio: ${window.devicePixelRatio}
    `;
    }
    function f() {
      requestAnimationFrame(f), d(), _ ? _.render() : i.render(t, n), Fb(n, t), xb(n, t), Hb(), kb(n, t), Xb();
    }
    KT(n, t, i);
    const _ = ob(t, i, n, u), g = [
      Ib(t, n, e),
      Nb(t, n, e),
      Ub(t, n, e, i),
      Ob(t, n, e),
      _b(t, n, e, i),
      Bb(t, n, e, i),
      hb(t, n, e, i),
      zb(t, n, e, i),
      Vb(t, n, e, i),
      Wb(t)
    ];
    let m = 0;
    const p = g.length;
    g.forEach((y) => {
      y.then(() => {
        m++;
        const v = m / p * 100;
        r.style.width = `${v}%`, m === p && (console.log("All sections loaded."), sb(t, {
          density: c
        }), jT(n, i), Lb(), f(), Yb(), document.getElementById("cn-icon-wrapper").style.display = "flex");
      }).catch((v) => {
        console.error("Error loading a section:", v);
      });
    });
  }
  function Yb() {
    const r = document.getElementById("loading-screen");
    r.style.transition = "opacity 0.5s ease", r.style.opacity = "0", setTimeout(() => r.remove(), 500);
  }
  $b();
  qb();
  function $b() {
    window.addEventListener("resize", () => {
      console.warn("Resize event fired, but camera or renderer is not defined.");
    });
  }
})();
export {
  __tla,
  ft as g,
  ta as m
};
