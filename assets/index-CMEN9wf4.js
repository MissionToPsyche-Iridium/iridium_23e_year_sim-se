let ft, qa;
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
  const au = "173", Dm = 0, _h = 1, Im = 2, xd = 1, Nm = 2, oi = 3, yi = 0, nn = 1, kn = 2, _i = 0, Jr = 1, Ma = 2, xh = 3, vh = 4, Um = 5, ur = 100, Om = 101, Fm = 102, Bm = 103, zm = 104, km = 200, Vm = 201, Hm = 202, Gm = 203, Wl = 204, Xl = 205, Wm = 206, Xm = 207, qm = 208, Ym = 209, Km = 210, $m = 211, jm = 212, Zm = 213, Jm = 214, ql = 0, Yl = 1, Kl = 2, ls = 3, $l = 4, jl = 5, Zl = 6, Jl = 7, vd = 0, Qm = 1, eg = 2, zi = 0, tg = 1, ng = 2, ig = 3, rg = 4, sg = 5, og = 6, ag = 7, yh = "attached", lg = "detached", yd = 300, cs = 301, us = 302, Ql = 303, ec = 304, Ba = 306, hs = 1e3, Ni = 1001, Ta = 1002, Zt = 1003, Sd = 1004, Hs = 1005, mn = 1006, ca = 1007, pi = 1008, Si = 1009, Md = 1010, Td = 1011, oo = 1012, lu = 1013, Sr = 1014, Un = 1015, xi = 1016, cu = 1017, uu = 1018, fs = 1020, Ed = 35902, bd = 1021, wd = 1022, bn = 1023, Ad = 1024, Rd = 1025, Qr = 1026, ds = 1027, hu = 1028, fu = 1029, Cd = 1030, du = 1031, pu = 1033, ua = 33776, ha = 33777, fa = 33778, da = 33779, tc = 35840, nc = 35841, ic = 35842, rc = 35843, sc = 36196, oc = 37492, ac = 37496, lc = 37808, cc = 37809, uc = 37810, hc = 37811, fc = 37812, dc = 37813, pc = 37814, mc = 37815, gc = 37816, _c = 37817, xc = 37818, vc = 37819, yc = 37820, Sc = 37821, pa = 36492, Mc = 36494, Tc = 36495, Pd = 36283, Ec = 36284, bc = 36285, wc = 36286, ao = 2300, lo = 2301, $a = 2302, Sh = 2400, Mh = 2401, Th = 2402, cg = 2500, ug = 0, Ld = 1, Ac = 2, hg = 3200, fg = 3201, Dd = 0, dg = 1, Di = "", Ut = "srgb", Qt = "srgb-linear", Ea = "linear", lt = "srgb", Lr = 7680, Eh = 519, pg = 512, mg = 513, gg = 514, Id = 515, _g = 516, xg = 517, vg = 518, yg = 519, Rc = 35044, bh = "300 es", mi = 2e3, ba = 2001;
  class As {
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
  const zt = [
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
  let wh = 1234567;
  const Ks = Math.PI / 180, ps = 180 / Math.PI;
  function An() {
    const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
    return (zt[r & 255] + zt[r >> 8 & 255] + zt[r >> 16 & 255] + zt[r >> 24 & 255] + "-" + zt[e & 255] + zt[e >> 8 & 255] + "-" + zt[e >> 16 & 15 | 64] + zt[e >> 24 & 255] + "-" + zt[t & 63 | 128] + zt[t >> 8 & 255] + "-" + zt[t >> 16 & 255] + zt[t >> 24 & 255] + zt[n & 255] + zt[n >> 8 & 255] + zt[n >> 16 & 255] + zt[n >> 24 & 255]).toLowerCase();
  }
  function He(r, e, t) {
    return Math.max(e, Math.min(t, r));
  }
  function mu(r, e) {
    return (r % e + e) % e;
  }
  function Sg(r, e, t, n, i) {
    return n + (r - e) * (i - n) / (t - e);
  }
  function Mg(r, e, t) {
    return r !== e ? (t - r) / (e - r) : 0;
  }
  function $s(r, e, t) {
    return (1 - t) * r + t * e;
  }
  function Tg(r, e, t, n) {
    return $s(r, e, 1 - Math.exp(-t * n));
  }
  function Eg(r, e = 1) {
    return e - Math.abs(mu(r, e * 2) - e);
  }
  function bg(r, e, t) {
    return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
  }
  function wg(r, e, t) {
    return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
  }
  function Ag(r, e) {
    return r + Math.floor(Math.random() * (e - r + 1));
  }
  function Rg(r, e) {
    return r + Math.random() * (e - r);
  }
  function Cg(r) {
    return r * (0.5 - Math.random());
  }
  function Pg(r) {
    r !== void 0 && (wh = r);
    let e = wh += 1831565813;
    return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
  }
  function Lg(r) {
    return r * Ks;
  }
  function Dg(r) {
    return r * ps;
  }
  function Ig(r) {
    return (r & r - 1) === 0 && r !== 0;
  }
  function Ng(r) {
    return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
  }
  function Ug(r) {
    return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
  }
  function Og(r, e, t, n, i) {
    const s = Math.cos, o = Math.sin, a = s(t / 2), l = o(t / 2), c = s((e + n) / 2), u = o((e + n) / 2), h = s((e - n) / 2), f = o((e - n) / 2), d = s((n - e) / 2), _ = o((n - e) / 2);
    switch (i) {
      case "XYX":
        r.set(a * u, l * h, l * f, a * c);
        break;
      case "YZY":
        r.set(l * f, a * u, l * h, a * c);
        break;
      case "ZXZ":
        r.set(l * h, l * f, a * u, a * c);
        break;
      case "XZX":
        r.set(a * u, l * _, l * d, a * c);
        break;
      case "YXY":
        r.set(l * d, a * u, l * _, a * c);
        break;
      case "ZYZ":
        r.set(l * _, l * d, a * u, a * c);
        break;
      default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
    }
  }
  function In(r, e) {
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
  function st(r, e) {
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
  const Fg = {
    DEG2RAD: Ks,
    RAD2DEG: ps,
    generateUUID: An,
    clamp: He,
    euclideanModulo: mu,
    mapLinear: Sg,
    inverseLerp: Mg,
    lerp: $s,
    damp: Tg,
    pingpong: Eg,
    smoothstep: bg,
    smootherstep: wg,
    randInt: Ag,
    randFloat: Rg,
    randFloatSpread: Cg,
    seededRandom: Pg,
    degToRad: Lg,
    radToDeg: Dg,
    isPowerOfTwo: Ig,
    ceilPowerOfTwo: Ng,
    floorPowerOfTwo: Ug,
    setQuaternionFromProperEuler: Og,
    normalize: st,
    denormalize: In
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
      const n = e.elements, i = t.elements, s = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], u = n[4], h = n[7], f = n[2], d = n[5], _ = n[8], g = i[0], m = i[3], p = i[6], y = i[1], v = i[4], x = i[7], b = i[2], w = i[5], A = i[8];
      return s[0] = o * g + a * y + l * b, s[3] = o * m + a * v + l * w, s[6] = o * p + a * x + l * A, s[1] = c * g + u * y + h * b, s[4] = c * m + u * v + h * w, s[7] = c * p + u * x + h * A, s[2] = f * g + d * y + _ * b, s[5] = f * m + d * v + _ * w, s[8] = f * p + d * x + _ * A, this;
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
      const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = u * o - a * c, f = a * l - u * s, d = c * s - o * l, _ = t * h + n * f + i * d;
      if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const g = 1 / _;
      return e[0] = h * g, e[1] = (i * c - u * n) * g, e[2] = (a * n - i * o) * g, e[3] = f * g, e[4] = (u * t - i * l) * g, e[5] = (i * s - a * t) * g, e[6] = d * g, e[7] = (n * l - c * t) * g, e[8] = (o * t - n * s) * g, this;
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
      return this.premultiply(ja.makeScale(e, t)), this;
    }
    rotate(e) {
      return this.premultiply(ja.makeRotation(-e)), this;
    }
    translate(e, t) {
      return this.premultiply(ja.makeTranslation(e, t)), this;
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
  const ja = new ze();
  function Nd(r) {
    for (let e = r.length - 1; e >= 0; --e) if (r[e] >= 65535) return true;
    return false;
  }
  function co(r) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", r);
  }
  function Bg() {
    const r = co("canvas");
    return r.style.display = "block", r;
  }
  const Ah = {};
  function Yr(r) {
    r in Ah || (Ah[r] = true, console.warn(r));
  }
  function zg(r, e, t) {
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
  function kg(r) {
    const e = r.elements;
    e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
  }
  function Vg(r) {
    const e = r.elements;
    e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
  }
  const Rh = new ze().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), Ch = new ze().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
  function Hg() {
    const r = {
      enabled: true,
      workingColorSpace: Qt,
      spaces: {},
      convert: function(i, s, o) {
        return this.enabled === false || s === o || !s || !o || (this.spaces[s].transfer === lt && (i.r = vi(i.r), i.g = vi(i.g), i.b = vi(i.b)), this.spaces[s].primaries !== this.spaces[o].primaries && (i.applyMatrix3(this.spaces[s].toXYZ), i.applyMatrix3(this.spaces[o].fromXYZ)), this.spaces[o].transfer === lt && (i.r = es(i.r), i.g = es(i.g), i.b = es(i.b))), i;
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
        return i === Di ? Ea : this.spaces[i].transfer;
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
      [Qt]: {
        primaries: e,
        whitePoint: n,
        transfer: Ea,
        toXYZ: Rh,
        fromXYZ: Ch,
        luminanceCoefficients: t,
        workingColorSpaceConfig: {
          unpackColorSpace: Ut
        },
        outputColorSpaceConfig: {
          drawingBufferColorSpace: Ut
        }
      },
      [Ut]: {
        primaries: e,
        whitePoint: n,
        transfer: lt,
        toXYZ: Rh,
        fromXYZ: Ch,
        luminanceCoefficients: t,
        outputColorSpaceConfig: {
          drawingBufferColorSpace: Ut
        }
      }
    }), r;
  }
  const Ye = Hg();
  function vi(r) {
    return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
  }
  function es(r) {
    return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
  }
  let Dr;
  class Gg {
    static getDataURL(e) {
      if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
      let t;
      if (e instanceof HTMLCanvasElement) t = e;
      else {
        Dr === void 0 && (Dr = co("canvas")), Dr.width = e.width, Dr.height = e.height;
        const n = Dr.getContext("2d");
        e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Dr;
      }
      return t.toDataURL("image/png");
    }
    static sRGBToLinear(e) {
      if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
        const t = co("canvas");
        t.width = e.width, t.height = e.height;
        const n = t.getContext("2d");
        n.drawImage(e, 0, 0, e.width, e.height);
        const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
        for (let o = 0; o < s.length; o++) s[o] = vi(s[o] / 255) * 255;
        return n.putImageData(i, 0, 0), t;
      } else if (e.data) {
        const t = e.data.slice(0);
        for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(vi(t[n] / 255) * 255) : t[n] = vi(t[n]);
        return {
          data: t,
          width: e.width,
          height: e.height
        };
      } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
    }
  }
  let Wg = 0;
  class Ud {
    constructor(e = null) {
      this.isSource = true, Object.defineProperty(this, "id", {
        value: Wg++
      }), this.uuid = An(), this.data = e, this.dataReady = true, this.version = 0;
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
          for (let o = 0, a = i.length; o < a; o++) i[o].isDataTexture ? s.push(Za(i[o].image)) : s.push(Za(i[o]));
        } else s = Za(i);
        n.url = s;
      }
      return t || (e.images[this.uuid] = n), n;
    }
  }
  function Za(r) {
    return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Gg.getDataURL(r) : r.data ? {
      data: Array.from(r.data),
      width: r.width,
      height: r.height,
      type: r.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  let Xg = 0;
  class Ct extends As {
    constructor(e = Ct.DEFAULT_IMAGE, t = Ct.DEFAULT_MAPPING, n = Ni, i = Ni, s = mn, o = pi, a = bn, l = Si, c = Ct.DEFAULT_ANISOTROPY, u = Di) {
      super(), this.isTexture = true, Object.defineProperty(this, "id", {
        value: Xg++
      }), this.uuid = An(), this.name = "", this.source = new Ud(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new ee(0, 0), this.repeat = new ee(1, 1), this.center = new ee(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new ze(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
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
      if (this.mapping !== yd) return e;
      if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
        case hs:
          e.x = e.x - Math.floor(e.x);
          break;
        case Ni:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Ta:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
      if (e.y < 0 || e.y > 1) switch (this.wrapT) {
        case hs:
          e.y = e.y - Math.floor(e.y);
          break;
        case Ni:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Ta:
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
  Ct.DEFAULT_IMAGE = null;
  Ct.DEFAULT_MAPPING = yd;
  Ct.DEFAULT_ANISOTROPY = 1;
  class et {
    constructor(e = 0, t = 0, n = 0, i = 1) {
      et.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = i;
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
      const l = e.elements, c = l[0], u = l[4], h = l[8], f = l[1], d = l[5], _ = l[9], g = l[2], m = l[6], p = l[10];
      if (Math.abs(u - f) < 0.01 && Math.abs(h - g) < 0.01 && Math.abs(_ - m) < 0.01) {
        if (Math.abs(u + f) < 0.1 && Math.abs(h + g) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(c + d + p - 3) < 0.1) return this.set(1, 0, 0, 0), this;
        t = Math.PI;
        const v = (c + 1) / 2, x = (d + 1) / 2, b = (p + 1) / 2, w = (u + f) / 4, A = (h + g) / 4, P = (_ + m) / 4;
        return v > x && v > b ? v < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(v), i = w / n, s = A / n) : x > b ? x < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(x), n = w / i, s = P / i) : b < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(b), n = A / s, i = P / s), this.set(n, i, s, t), this;
      }
      let y = Math.sqrt((m - _) * (m - _) + (h - g) * (h - g) + (f - u) * (f - u));
      return Math.abs(y) < 1e-3 && (y = 1), this.x = (m - _) / y, this.y = (h - g) / y, this.z = (f - u) / y, this.w = Math.acos((c + d + p - 1) / 2), this;
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
  class qg extends As {
    constructor(e = 1, t = 1, n = {}) {
      super(), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = 1, this.scissor = new et(0, 0, e, t), this.scissorTest = false, this.viewport = new et(0, 0, e, t);
      const i = {
        width: e,
        height: t,
        depth: 1
      };
      n = Object.assign({
        generateMipmaps: false,
        internalFormat: null,
        minFilter: mn,
        depthBuffer: true,
        stencilBuffer: false,
        resolveDepthBuffer: true,
        resolveStencilBuffer: true,
        depthTexture: null,
        samples: 0,
        count: 1
      }, n);
      const s = new Ct(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
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
      return this.texture.source = new Ud(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  }
  class On extends qg {
    constructor(e = 1, t = 1, n = {}) {
      super(e, t, n), this.isWebGLRenderTarget = true;
    }
  }
  class Od extends Ct {
    constructor(e = null, t = 1, n = 1, i = 1) {
      super(null), this.isDataArrayTexture = true, this.image = {
        data: e,
        width: t,
        height: n,
        depth: i
      }, this.magFilter = Zt, this.minFilter = Zt, this.wrapR = Ni, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
    }
    addLayerUpdate(e) {
      this.layerUpdates.add(e);
    }
    clearLayerUpdates() {
      this.layerUpdates.clear();
    }
  }
  class Yg extends Ct {
    constructor(e = null, t = 1, n = 1, i = 1) {
      super(null), this.isData3DTexture = true, this.image = {
        data: e,
        width: t,
        height: n,
        depth: i
      }, this.magFilter = Zt, this.minFilter = Zt, this.wrapR = Ni, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  }
  class Wi {
    constructor(e = 0, t = 0, n = 0, i = 1) {
      this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = i;
    }
    static slerpFlat(e, t, n, i, s, o, a) {
      let l = n[i + 0], c = n[i + 1], u = n[i + 2], h = n[i + 3];
      const f = s[o + 0], d = s[o + 1], _ = s[o + 2], g = s[o + 3];
      if (a === 0) {
        e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
        return;
      }
      if (a === 1) {
        e[t + 0] = f, e[t + 1] = d, e[t + 2] = _, e[t + 3] = g;
        return;
      }
      if (h !== g || l !== f || c !== d || u !== _) {
        let m = 1 - a;
        const p = l * f + c * d + u * _ + h * g, y = p >= 0 ? 1 : -1, v = 1 - p * p;
        if (v > Number.EPSILON) {
          const b = Math.sqrt(v), w = Math.atan2(b, p * y);
          m = Math.sin(m * w) / b, a = Math.sin(a * w) / b;
        }
        const x = a * y;
        if (l = l * m + f * x, c = c * m + d * x, u = u * m + _ * x, h = h * m + g * x, m === 1 - a) {
          const b = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
          l *= b, c *= b, u *= b, h *= b;
        }
      }
      e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
    }
    static multiplyQuaternionsFlat(e, t, n, i, s, o) {
      const a = n[i], l = n[i + 1], c = n[i + 2], u = n[i + 3], h = s[o], f = s[o + 1], d = s[o + 2], _ = s[o + 3];
      return e[t] = a * _ + u * h + l * d - c * f, e[t + 1] = l * _ + u * f + c * h - a * d, e[t + 2] = c * _ + u * d + a * f - l * h, e[t + 3] = u * _ - a * h - l * f - c * d, e;
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
      const n = e._x, i = e._y, s = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), u = a(i / 2), h = a(s / 2), f = l(n / 2), d = l(i / 2), _ = l(s / 2);
      switch (o) {
        case "XYZ":
          this._x = f * u * h + c * d * _, this._y = c * d * h - f * u * _, this._z = c * u * _ + f * d * h, this._w = c * u * h - f * d * _;
          break;
        case "YXZ":
          this._x = f * u * h + c * d * _, this._y = c * d * h - f * u * _, this._z = c * u * _ - f * d * h, this._w = c * u * h + f * d * _;
          break;
        case "ZXY":
          this._x = f * u * h - c * d * _, this._y = c * d * h + f * u * _, this._z = c * u * _ + f * d * h, this._w = c * u * h - f * d * _;
          break;
        case "ZYX":
          this._x = f * u * h - c * d * _, this._y = c * d * h + f * u * _, this._z = c * u * _ - f * d * h, this._w = c * u * h + f * d * _;
          break;
        case "YZX":
          this._x = f * u * h + c * d * _, this._y = c * d * h + f * u * _, this._z = c * u * _ - f * d * h, this._w = c * u * h - f * d * _;
          break;
        case "XZY":
          this._x = f * u * h - c * d * _, this._y = c * d * h - f * u * _, this._z = c * u * _ + f * d * h, this._w = c * u * h + f * d * _;
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
      const t = e.elements, n = t[0], i = t[4], s = t[8], o = t[1], a = t[5], l = t[9], c = t[2], u = t[6], h = t[10], f = n + a + h;
      if (f > 0) {
        const d = 0.5 / Math.sqrt(f + 1);
        this._w = 0.25 / d, this._x = (u - l) * d, this._y = (s - c) * d, this._z = (o - i) * d;
      } else if (n > a && n > h) {
        const d = 2 * Math.sqrt(1 + n - a - h);
        this._w = (u - l) / d, this._x = 0.25 * d, this._y = (i + o) / d, this._z = (s + c) / d;
      } else if (a > h) {
        const d = 2 * Math.sqrt(1 + a - n - h);
        this._w = (s - c) / d, this._x = (i + o) / d, this._y = 0.25 * d, this._z = (l + u) / d;
      } else {
        const d = 2 * Math.sqrt(1 + h - n - a);
        this._w = (o - i) / d, this._x = (s + c) / d, this._y = (l + u) / d, this._z = 0.25 * d;
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
        const d = 1 - t;
        return this._w = d * o + t * this._w, this._x = d * n + t * this._x, this._y = d * i + t * this._y, this._z = d * s + t * this._z, this.normalize(), this;
      }
      const c = Math.sqrt(l), u = Math.atan2(c, a), h = Math.sin((1 - t) * u) / c, f = Math.sin(t * u) / c;
      return this._w = o * h + this._w * f, this._x = n * h + this._x * f, this._y = i * h + this._y * f, this._z = s * h + this._z * f, this._onChangeCallback(), this;
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
      return this.applyQuaternion(Ph.setFromEuler(e));
    }
    applyAxisAngle(e, t) {
      return this.applyQuaternion(Ph.setFromAxisAngle(e, t));
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
      return Ja.copy(this).projectOnVector(e), this.sub(Ja);
    }
    reflect(e) {
      return this.sub(Ja.copy(e).multiplyScalar(2 * this.dot(e)));
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
  const Ja = new D(), Ph = new Wi();
  class Ei {
    constructor(e = new D(1 / 0, 1 / 0, 1 / 0), t = new D(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = true, this.min = e, this.max = t;
    }
    set(e, t) {
      return this.min.copy(e), this.max.copy(t), this;
    }
    setFromArray(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Pn.fromArray(e, t));
      return this;
    }
    setFromBufferAttribute(e) {
      this.makeEmpty();
      for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Pn.fromBufferAttribute(e, t));
      return this;
    }
    setFromPoints(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this;
    }
    setFromCenterAndSize(e, t) {
      const n = Pn.copy(t).multiplyScalar(0.5);
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
        if (t === true && s !== void 0 && e.isInstancedMesh !== true) for (let o = 0, a = s.count; o < a; o++) e.isMesh === true ? e.getVertexPosition(o, Pn) : Pn.fromBufferAttribute(s, o), Pn.applyMatrix4(e.matrixWorld), this.expandByPoint(Pn);
        else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Po.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Po.copy(n.boundingBox)), Po.applyMatrix4(e.matrixWorld), this.union(Po);
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
      return this.clampPoint(e.center, Pn), Pn.distanceToSquared(e.center) <= e.radius * e.radius;
    }
    intersectsPlane(e) {
      let t, n;
      return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
    }
    intersectsTriangle(e) {
      if (this.isEmpty()) return false;
      this.getCenter(Ds), Lo.subVectors(this.max, Ds), Ir.subVectors(e.a, Ds), Nr.subVectors(e.b, Ds), Ur.subVectors(e.c, Ds), bi.subVectors(Nr, Ir), wi.subVectors(Ur, Nr), ji.subVectors(Ir, Ur);
      let t = [
        0,
        -bi.z,
        bi.y,
        0,
        -wi.z,
        wi.y,
        0,
        -ji.z,
        ji.y,
        bi.z,
        0,
        -bi.x,
        wi.z,
        0,
        -wi.x,
        ji.z,
        0,
        -ji.x,
        -bi.y,
        bi.x,
        0,
        -wi.y,
        wi.x,
        0,
        -ji.y,
        ji.x,
        0
      ];
      return !Qa(t, Ir, Nr, Ur, Lo) || (t = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ], !Qa(t, Ir, Nr, Ur, Lo)) ? false : (Do.crossVectors(bi, wi), t = [
        Do.x,
        Do.y,
        Do.z
      ], Qa(t, Ir, Nr, Ur, Lo));
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
      return this.clampPoint(e, Pn).distanceTo(e);
    }
    getBoundingSphere(e) {
      return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Pn).length() * 0.5), e;
    }
    intersect(e) {
      return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(e) {
      return this.min.min(e.min), this.max.max(e.max), this;
    }
    applyMatrix4(e) {
      return this.isEmpty() ? this : (Qn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Qn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Qn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Qn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Qn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Qn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Qn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Qn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Qn), this);
    }
    translate(e) {
      return this.min.add(e), this.max.add(e), this;
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
  }
  const Qn = [
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D()
  ], Pn = new D(), Po = new Ei(), Ir = new D(), Nr = new D(), Ur = new D(), bi = new D(), wi = new D(), ji = new D(), Ds = new D(), Lo = new D(), Do = new D(), Zi = new D();
  function Qa(r, e, t, n, i) {
    for (let s = 0, o = r.length - 3; s <= o; s += 3) {
      Zi.fromArray(r, s);
      const a = i.x * Math.abs(Zi.x) + i.y * Math.abs(Zi.y) + i.z * Math.abs(Zi.z), l = e.dot(Zi), c = t.dot(Zi), u = n.dot(Zi);
      if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return false;
    }
    return true;
  }
  const Kg = new Ei(), Is = new D(), el = new D();
  class Kn {
    constructor(e = new D(), t = -1) {
      this.isSphere = true, this.center = e, this.radius = t;
    }
    set(e, t) {
      return this.center.copy(e), this.radius = t, this;
    }
    setFromPoints(e, t) {
      const n = this.center;
      t !== void 0 ? n.copy(t) : Kg.setFromPoints(e).getCenter(n);
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
      Is.subVectors(e, this.center);
      const t = Is.lengthSq();
      if (t > this.radius * this.radius) {
        const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
        this.center.addScaledVector(Is, i / n), this.radius += i;
      }
      return this;
    }
    union(e) {
      return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (el.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Is.copy(e.center).add(el)), this.expandByPoint(Is.copy(e.center).sub(el))), this);
    }
    equals(e) {
      return e.center.equals(this.center) && e.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const ei = new D(), tl = new D(), Io = new D(), Ai = new D(), nl = new D(), No = new D(), il = new D();
  class Mo {
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
      return this.origin.copy(this.at(e, ei)), this;
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
      const t = ei.subVectors(e, this.origin).dot(this.direction);
      return t < 0 ? this.origin.distanceToSquared(e) : (ei.copy(this.origin).addScaledVector(this.direction, t), ei.distanceToSquared(e));
    }
    distanceSqToSegment(e, t, n, i) {
      tl.copy(e).add(t).multiplyScalar(0.5), Io.copy(t).sub(e).normalize(), Ai.copy(this.origin).sub(tl);
      const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(Io), a = Ai.dot(this.direction), l = -Ai.dot(Io), c = Ai.lengthSq(), u = Math.abs(1 - o * o);
      let h, f, d, _;
      if (u > 0) if (h = o * l - a, f = o * a - l, _ = s * u, h >= 0) if (f >= -_) if (f <= _) {
        const g = 1 / u;
        h *= g, f *= g, d = h * (h + o * f + 2 * a) + f * (o * h + f + 2 * l) + c;
      } else f = s, h = Math.max(0, -(o * f + a)), d = -h * h + f * (f + 2 * l) + c;
      else f = -s, h = Math.max(0, -(o * f + a)), d = -h * h + f * (f + 2 * l) + c;
      else f <= -_ ? (h = Math.max(0, -(-o * s + a)), f = h > 0 ? -s : Math.min(Math.max(-s, -l), s), d = -h * h + f * (f + 2 * l) + c) : f <= _ ? (h = 0, f = Math.min(Math.max(-s, -l), s), d = f * (f + 2 * l) + c) : (h = Math.max(0, -(o * s + a)), f = h > 0 ? s : Math.min(Math.max(-s, -l), s), d = -h * h + f * (f + 2 * l) + c);
      else f = o > 0 ? -s : s, h = Math.max(0, -(o * f + a)), d = -h * h + f * (f + 2 * l) + c;
      return n && n.copy(this.origin).addScaledVector(this.direction, h), i && i.copy(tl).addScaledVector(Io, f), d;
    }
    intersectSphere(e, t) {
      ei.subVectors(e.center, this.origin);
      const n = ei.dot(this.direction), i = ei.dot(ei) - n * n, s = e.radius * e.radius;
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
      const c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, f = this.origin;
      return c >= 0 ? (n = (e.min.x - f.x) * c, i = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c, i = (e.min.x - f.x) * c), u >= 0 ? (s = (e.min.y - f.y) * u, o = (e.max.y - f.y) * u) : (s = (e.max.y - f.y) * u, o = (e.min.y - f.y) * u), n > o || s > i || ((s > n || isNaN(n)) && (n = s), (o < i || isNaN(i)) && (i = o), h >= 0 ? (a = (e.min.z - f.z) * h, l = (e.max.z - f.z) * h) : (a = (e.max.z - f.z) * h, l = (e.min.z - f.z) * h), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
    }
    intersectsBox(e) {
      return this.intersectBox(e, ei) !== null;
    }
    intersectTriangle(e, t, n, i, s) {
      nl.subVectors(t, e), No.subVectors(n, e), il.crossVectors(nl, No);
      let o = this.direction.dot(il), a;
      if (o > 0) {
        if (i) return null;
        a = 1;
      } else if (o < 0) a = -1, o = -o;
      else return null;
      Ai.subVectors(this.origin, e);
      const l = a * this.direction.dot(No.crossVectors(Ai, No));
      if (l < 0) return null;
      const c = a * this.direction.dot(nl.cross(Ai));
      if (c < 0 || l + c > o) return null;
      const u = -a * Ai.dot(il);
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
    constructor(e, t, n, i, s, o, a, l, c, u, h, f, d, _, g, m) {
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
      ], e !== void 0 && this.set(e, t, n, i, s, o, a, l, c, u, h, f, d, _, g, m);
    }
    set(e, t, n, i, s, o, a, l, c, u, h, f, d, _, g, m) {
      const p = this.elements;
      return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = s, p[5] = o, p[9] = a, p[13] = l, p[2] = c, p[6] = u, p[10] = h, p[14] = f, p[3] = d, p[7] = _, p[11] = g, p[15] = m, this;
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
      const t = this.elements, n = e.elements, i = 1 / Or.setFromMatrixColumn(e, 0).length(), s = 1 / Or.setFromMatrixColumn(e, 1).length(), o = 1 / Or.setFromMatrixColumn(e, 2).length();
      return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
    }
    makeRotationFromEuler(e) {
      const t = this.elements, n = e.x, i = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), u = Math.cos(s), h = Math.sin(s);
      if (e.order === "XYZ") {
        const f = o * u, d = o * h, _ = a * u, g = a * h;
        t[0] = l * u, t[4] = -l * h, t[8] = c, t[1] = d + _ * c, t[5] = f - g * c, t[9] = -a * l, t[2] = g - f * c, t[6] = _ + d * c, t[10] = o * l;
      } else if (e.order === "YXZ") {
        const f = l * u, d = l * h, _ = c * u, g = c * h;
        t[0] = f + g * a, t[4] = _ * a - d, t[8] = o * c, t[1] = o * h, t[5] = o * u, t[9] = -a, t[2] = d * a - _, t[6] = g + f * a, t[10] = o * l;
      } else if (e.order === "ZXY") {
        const f = l * u, d = l * h, _ = c * u, g = c * h;
        t[0] = f - g * a, t[4] = -o * h, t[8] = _ + d * a, t[1] = d + _ * a, t[5] = o * u, t[9] = g - f * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
      } else if (e.order === "ZYX") {
        const f = o * u, d = o * h, _ = a * u, g = a * h;
        t[0] = l * u, t[4] = _ * c - d, t[8] = f * c + g, t[1] = l * h, t[5] = g * c + f, t[9] = d * c - _, t[2] = -c, t[6] = a * l, t[10] = o * l;
      } else if (e.order === "YZX") {
        const f = o * l, d = o * c, _ = a * l, g = a * c;
        t[0] = l * u, t[4] = g - f * h, t[8] = _ * h + d, t[1] = h, t[5] = o * u, t[9] = -a * u, t[2] = -c * u, t[6] = d * h + _, t[10] = f - g * h;
      } else if (e.order === "XZY") {
        const f = o * l, d = o * c, _ = a * l, g = a * c;
        t[0] = l * u, t[4] = -h, t[8] = c * u, t[1] = f * h + g, t[5] = o * u, t[9] = d * h - _, t[2] = _ * h - d, t[6] = a * u, t[10] = g * h + f;
      }
      return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
    }
    makeRotationFromQuaternion(e) {
      return this.compose($g, e, jg);
    }
    lookAt(e, t, n) {
      const i = this.elements;
      return hn.subVectors(e, t), hn.lengthSq() === 0 && (hn.z = 1), hn.normalize(), Ri.crossVectors(n, hn), Ri.lengthSq() === 0 && (Math.abs(n.z) === 1 ? hn.x += 1e-4 : hn.z += 1e-4, hn.normalize(), Ri.crossVectors(n, hn)), Ri.normalize(), Uo.crossVectors(hn, Ri), i[0] = Ri.x, i[4] = Uo.x, i[8] = hn.x, i[1] = Ri.y, i[5] = Uo.y, i[9] = hn.y, i[2] = Ri.z, i[6] = Uo.z, i[10] = hn.z, this;
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements, i = t.elements, s = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], u = n[1], h = n[5], f = n[9], d = n[13], _ = n[2], g = n[6], m = n[10], p = n[14], y = n[3], v = n[7], x = n[11], b = n[15], w = i[0], A = i[4], P = i[8], S = i[12], M = i[1], L = i[5], G = i[9], O = i[13], V = i[2], q = i[6], B = i[10], $ = i[14], H = i[3], oe = i[7], ce = i[11], ge = i[15];
      return s[0] = o * w + a * M + l * V + c * H, s[4] = o * A + a * L + l * q + c * oe, s[8] = o * P + a * G + l * B + c * ce, s[12] = o * S + a * O + l * $ + c * ge, s[1] = u * w + h * M + f * V + d * H, s[5] = u * A + h * L + f * q + d * oe, s[9] = u * P + h * G + f * B + d * ce, s[13] = u * S + h * O + f * $ + d * ge, s[2] = _ * w + g * M + m * V + p * H, s[6] = _ * A + g * L + m * q + p * oe, s[10] = _ * P + g * G + m * B + p * ce, s[14] = _ * S + g * O + m * $ + p * ge, s[3] = y * w + v * M + x * V + b * H, s[7] = y * A + v * L + x * q + b * oe, s[11] = y * P + v * G + x * B + b * ce, s[15] = y * S + v * O + x * $ + b * ge, this;
    }
    multiplyScalar(e) {
      const t = this.elements;
      return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
    }
    determinant() {
      const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], o = e[1], a = e[5], l = e[9], c = e[13], u = e[2], h = e[6], f = e[10], d = e[14], _ = e[3], g = e[7], m = e[11], p = e[15];
      return _ * (+s * l * h - i * c * h - s * a * f + n * c * f + i * a * d - n * l * d) + g * (+t * l * d - t * c * f + s * o * f - i * o * d + i * c * u - s * l * u) + m * (+t * c * h - t * a * d - s * o * h + n * o * d + s * a * u - n * c * u) + p * (-i * a * u - t * l * h + t * a * f + i * o * h - n * o * f + n * l * u);
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
      const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = e[9], f = e[10], d = e[11], _ = e[12], g = e[13], m = e[14], p = e[15], y = h * m * c - g * f * c + g * l * d - a * m * d - h * l * p + a * f * p, v = _ * f * c - u * m * c - _ * l * d + o * m * d + u * l * p - o * f * p, x = u * g * c - _ * h * c + _ * a * d - o * g * d - u * a * p + o * h * p, b = _ * h * l - u * g * l - _ * a * f + o * g * f + u * a * m - o * h * m, w = t * y + n * v + i * x + s * b;
      if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const A = 1 / w;
      return e[0] = y * A, e[1] = (g * f * s - h * m * s - g * i * d + n * m * d + h * i * p - n * f * p) * A, e[2] = (a * m * s - g * l * s + g * i * c - n * m * c - a * i * p + n * l * p) * A, e[3] = (h * l * s - a * f * s - h * i * c + n * f * c + a * i * d - n * l * d) * A, e[4] = v * A, e[5] = (u * m * s - _ * f * s + _ * i * d - t * m * d - u * i * p + t * f * p) * A, e[6] = (_ * l * s - o * m * s - _ * i * c + t * m * c + o * i * p - t * l * p) * A, e[7] = (o * f * s - u * l * s + u * i * c - t * f * c - o * i * d + t * l * d) * A, e[8] = x * A, e[9] = (_ * h * s - u * g * s - _ * n * d + t * g * d + u * n * p - t * h * p) * A, e[10] = (o * g * s - _ * a * s + _ * n * c - t * g * c - o * n * p + t * a * p) * A, e[11] = (u * a * s - o * h * s - u * n * c + t * h * c + o * n * d - t * a * d) * A, e[12] = b * A, e[13] = (u * g * i - _ * h * i + _ * n * f - t * g * f - u * n * m + t * h * m) * A, e[14] = (_ * a * i - o * g * i - _ * n * l + t * g * l + o * n * m - t * a * m) * A, e[15] = (o * h * i - u * a * i + u * n * l - t * h * l - o * n * f + t * a * f) * A, this;
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
      const i = this.elements, s = t._x, o = t._y, a = t._z, l = t._w, c = s + s, u = o + o, h = a + a, f = s * c, d = s * u, _ = s * h, g = o * u, m = o * h, p = a * h, y = l * c, v = l * u, x = l * h, b = n.x, w = n.y, A = n.z;
      return i[0] = (1 - (g + p)) * b, i[1] = (d + x) * b, i[2] = (_ - v) * b, i[3] = 0, i[4] = (d - x) * w, i[5] = (1 - (f + p)) * w, i[6] = (m + y) * w, i[7] = 0, i[8] = (_ + v) * A, i[9] = (m - y) * A, i[10] = (1 - (f + g)) * A, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
    }
    decompose(e, t, n) {
      const i = this.elements;
      let s = Or.set(i[0], i[1], i[2]).length();
      const o = Or.set(i[4], i[5], i[6]).length(), a = Or.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Ln.copy(this);
      const c = 1 / s, u = 1 / o, h = 1 / a;
      return Ln.elements[0] *= c, Ln.elements[1] *= c, Ln.elements[2] *= c, Ln.elements[4] *= u, Ln.elements[5] *= u, Ln.elements[6] *= u, Ln.elements[8] *= h, Ln.elements[9] *= h, Ln.elements[10] *= h, t.setFromRotationMatrix(Ln), n.x = s, n.y = o, n.z = a, this;
    }
    makePerspective(e, t, n, i, s, o, a = mi) {
      const l = this.elements, c = 2 * s / (t - e), u = 2 * s / (n - i), h = (t + e) / (t - e), f = (n + i) / (n - i);
      let d, _;
      if (a === mi) d = -(o + s) / (o - s), _ = -2 * o * s / (o - s);
      else if (a === ba) d = -o / (o - s), _ = -o * s / (o - s);
      else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
      return l[0] = c, l[4] = 0, l[8] = h, l[12] = 0, l[1] = 0, l[5] = u, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = d, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
    }
    makeOrthographic(e, t, n, i, s, o, a = mi) {
      const l = this.elements, c = 1 / (t - e), u = 1 / (n - i), h = 1 / (o - s), f = (t + e) * c, d = (n + i) * u;
      let _, g;
      if (a === mi) _ = (o + s) * h, g = -2 * h;
      else if (a === ba) _ = s * h, g = -1 * h;
      else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
      return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -d, l[2] = 0, l[6] = 0, l[10] = g, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
  const Or = new D(), Ln = new Fe(), $g = new D(0, 0, 0), jg = new D(1, 1, 1), Ri = new D(), Uo = new D(), hn = new D(), Lh = new Fe(), Dh = new Wi();
  class Fn {
    constructor(e = 0, t = 0, n = 0, i = Fn.DEFAULT_ORDER) {
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
      const i = e.elements, s = i[0], o = i[4], a = i[8], l = i[1], c = i[5], u = i[9], h = i[2], f = i[6], d = i[10];
      switch (t) {
        case "XYZ":
          this._y = Math.asin(He(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, d), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(f, c), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-He(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, s), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(He(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s));
          break;
        case "ZYX":
          this._y = Math.asin(-He(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c));
          break;
        case "YZX":
          this._z = Math.asin(He(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(a, d));
          break;
        case "XZY":
          this._z = Math.asin(-He(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-u, d), this._y = 0);
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
      }
      return this._order = t, n === true && this._onChangeCallback(), this;
    }
    setFromQuaternion(e, t, n) {
      return Lh.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Lh, t, n);
    }
    setFromVector3(e, t = this._order) {
      return this.set(e.x, e.y, e.z, t);
    }
    reorder(e) {
      return Dh.setFromEuler(this), this.setFromQuaternion(Dh, e);
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
  Fn.DEFAULT_ORDER = "XYZ";
  class gu {
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
  let Zg = 0;
  const Ih = new D(), Fr = new Wi(), ti = new Fe(), Oo = new D(), Ns = new D(), Jg = new D(), Qg = new Wi(), Nh = new D(1, 0, 0), Uh = new D(0, 1, 0), Oh = new D(0, 0, 1), Fh = {
    type: "added"
  }, e_ = {
    type: "removed"
  }, Br = {
    type: "childadded",
    child: null
  }, rl = {
    type: "childremoved",
    child: null
  };
  class gt extends As {
    constructor() {
      super(), this.isObject3D = true, Object.defineProperty(this, "id", {
        value: Zg++
      }), this.uuid = An(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = gt.DEFAULT_UP.clone();
      const e = new D(), t = new Fn(), n = new Wi(), i = new D(1, 1, 1);
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
      }), this.matrix = new Fe(), this.matrixWorld = new Fe(), this.matrixAutoUpdate = gt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new gu(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
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
      return Fr.setFromAxisAngle(e, t), this.quaternion.multiply(Fr), this;
    }
    rotateOnWorldAxis(e, t) {
      return Fr.setFromAxisAngle(e, t), this.quaternion.premultiply(Fr), this;
    }
    rotateX(e) {
      return this.rotateOnAxis(Nh, e);
    }
    rotateY(e) {
      return this.rotateOnAxis(Uh, e);
    }
    rotateZ(e) {
      return this.rotateOnAxis(Oh, e);
    }
    translateOnAxis(e, t) {
      return Ih.copy(e).applyQuaternion(this.quaternion), this.position.add(Ih.multiplyScalar(t)), this;
    }
    translateX(e) {
      return this.translateOnAxis(Nh, e);
    }
    translateY(e) {
      return this.translateOnAxis(Uh, e);
    }
    translateZ(e) {
      return this.translateOnAxis(Oh, e);
    }
    localToWorld(e) {
      return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(e) {
      return this.updateWorldMatrix(true, false), e.applyMatrix4(ti.copy(this.matrixWorld).invert());
    }
    lookAt(e, t, n) {
      e.isVector3 ? Oo.copy(e) : Oo.set(e, t, n);
      const i = this.parent;
      this.updateWorldMatrix(true, false), Ns.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ti.lookAt(Ns, Oo, this.up) : ti.lookAt(Oo, Ns, this.up), this.quaternion.setFromRotationMatrix(ti), i && (ti.extractRotation(i.matrixWorld), Fr.setFromRotationMatrix(ti), this.quaternion.premultiply(Fr.invert()));
    }
    add(e) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
        return this;
      }
      return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Fh), Br.child = e, this.dispatchEvent(Br), Br.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
    }
    remove(e) {
      if (arguments.length > 1) {
        for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
        return this;
      }
      const t = this.children.indexOf(e);
      return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(e_), rl.child = e, this.dispatchEvent(rl), rl.child = null), this;
    }
    removeFromParent() {
      const e = this.parent;
      return e !== null && e.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(e) {
      return this.updateWorldMatrix(true, false), ti.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), ti.multiply(e.parent.matrixWorld)), e.applyMatrix4(ti), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(Fh), Br.child = e, this.dispatchEvent(Br), Br.child = null, this;
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
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ns, e, Jg), e;
    }
    getWorldScale(e) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ns, Qg, e), e;
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
        const a = o(e.geometries), l = o(e.materials), c = o(e.textures), u = o(e.images), h = o(e.shapes), f = o(e.skeletons), d = o(e.animations), _ = o(e.nodes);
        a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), f.length > 0 && (n.skeletons = f), d.length > 0 && (n.animations = d), _.length > 0 && (n.nodes = _);
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
  gt.DEFAULT_UP = new D(0, 1, 0);
  gt.DEFAULT_MATRIX_AUTO_UPDATE = true;
  gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  const Dn = new D(), ni = new D(), sl = new D(), ii = new D(), zr = new D(), kr = new D(), Bh = new D(), ol = new D(), al = new D(), ll = new D(), cl = new et(), ul = new et(), hl = new et();
  class Nn {
    constructor(e = new D(), t = new D(), n = new D()) {
      this.a = e, this.b = t, this.c = n;
    }
    static getNormal(e, t, n, i) {
      i.subVectors(n, t), Dn.subVectors(e, t), i.cross(Dn);
      const s = i.lengthSq();
      return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
    }
    static getBarycoord(e, t, n, i, s) {
      Dn.subVectors(i, t), ni.subVectors(n, t), sl.subVectors(e, t);
      const o = Dn.dot(Dn), a = Dn.dot(ni), l = Dn.dot(sl), c = ni.dot(ni), u = ni.dot(sl), h = o * c - a * a;
      if (h === 0) return s.set(0, 0, 0), null;
      const f = 1 / h, d = (c * l - a * u) * f, _ = (o * u - a * l) * f;
      return s.set(1 - d - _, _, d);
    }
    static containsPoint(e, t, n, i) {
      return this.getBarycoord(e, t, n, i, ii) === null ? false : ii.x >= 0 && ii.y >= 0 && ii.x + ii.y <= 1;
    }
    static getInterpolation(e, t, n, i, s, o, a, l) {
      return this.getBarycoord(e, t, n, i, ii) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, ii.x), l.addScaledVector(o, ii.y), l.addScaledVector(a, ii.z), l);
    }
    static getInterpolatedAttribute(e, t, n, i, s, o) {
      return cl.setScalar(0), ul.setScalar(0), hl.setScalar(0), cl.fromBufferAttribute(e, t), ul.fromBufferAttribute(e, n), hl.fromBufferAttribute(e, i), o.setScalar(0), o.addScaledVector(cl, s.x), o.addScaledVector(ul, s.y), o.addScaledVector(hl, s.z), o;
    }
    static isFrontFacing(e, t, n, i) {
      return Dn.subVectors(n, t), ni.subVectors(e, t), Dn.cross(ni).dot(i) < 0;
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
      return Dn.subVectors(this.c, this.b), ni.subVectors(this.a, this.b), Dn.cross(ni).length() * 0.5;
    }
    getMidpoint(e) {
      return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(e) {
      return Nn.getNormal(this.a, this.b, this.c, e);
    }
    getPlane(e) {
      return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(e, t) {
      return Nn.getBarycoord(e, this.a, this.b, this.c, t);
    }
    getInterpolation(e, t, n, i, s) {
      return Nn.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
    }
    containsPoint(e) {
      return Nn.containsPoint(e, this.a, this.b, this.c);
    }
    isFrontFacing(e) {
      return Nn.isFrontFacing(this.a, this.b, this.c, e);
    }
    intersectsBox(e) {
      return e.intersectsTriangle(this);
    }
    closestPointToPoint(e, t) {
      const n = this.a, i = this.b, s = this.c;
      let o, a;
      zr.subVectors(i, n), kr.subVectors(s, n), ol.subVectors(e, n);
      const l = zr.dot(ol), c = kr.dot(ol);
      if (l <= 0 && c <= 0) return t.copy(n);
      al.subVectors(e, i);
      const u = zr.dot(al), h = kr.dot(al);
      if (u >= 0 && h <= u) return t.copy(i);
      const f = l * h - u * c;
      if (f <= 0 && l >= 0 && u <= 0) return o = l / (l - u), t.copy(n).addScaledVector(zr, o);
      ll.subVectors(e, s);
      const d = zr.dot(ll), _ = kr.dot(ll);
      if (_ >= 0 && d <= _) return t.copy(s);
      const g = d * c - l * _;
      if (g <= 0 && c >= 0 && _ <= 0) return a = c / (c - _), t.copy(n).addScaledVector(kr, a);
      const m = u * _ - d * h;
      if (m <= 0 && h - u >= 0 && d - _ >= 0) return Bh.subVectors(s, i), a = (h - u) / (h - u + (d - _)), t.copy(i).addScaledVector(Bh, a);
      const p = 1 / (m + g + f);
      return o = g * p, a = f * p, t.copy(n).addScaledVector(zr, o).addScaledVector(kr, a);
    }
    equals(e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
  }
  const Fd = {
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
  }, Ci = {
    h: 0,
    s: 0,
    l: 0
  }, Fo = {
    h: 0,
    s: 0,
    l: 0
  };
  function fl(r, e, t) {
    return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
  }
  class Re {
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
    setHex(e, t = Ut) {
      return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ye.toWorkingColorSpace(this, t), this;
    }
    setRGB(e, t, n, i = Ye.workingColorSpace) {
      return this.r = e, this.g = t, this.b = n, Ye.toWorkingColorSpace(this, i), this;
    }
    setHSL(e, t, n, i = Ye.workingColorSpace) {
      if (e = mu(e, 1), t = He(t, 0, 1), n = He(n, 0, 1), t === 0) this.r = this.g = this.b = n;
      else {
        const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
        this.r = fl(o, s, e + 1 / 3), this.g = fl(o, s, e), this.b = fl(o, s, e - 1 / 3);
      }
      return Ye.toWorkingColorSpace(this, i), this;
    }
    setStyle(e, t = Ut) {
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
    setColorName(e, t = Ut) {
      const n = Fd[e.toLowerCase()];
      return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(e) {
      return this.r = e.r, this.g = e.g, this.b = e.b, this;
    }
    copySRGBToLinear(e) {
      return this.r = vi(e.r), this.g = vi(e.g), this.b = vi(e.b), this;
    }
    copyLinearToSRGB(e) {
      return this.r = es(e.r), this.g = es(e.g), this.b = es(e.b), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(e = Ut) {
      return Ye.fromWorkingColorSpace(kt.copy(this), e), Math.round(He(kt.r * 255, 0, 255)) * 65536 + Math.round(He(kt.g * 255, 0, 255)) * 256 + Math.round(He(kt.b * 255, 0, 255));
    }
    getHexString(e = Ut) {
      return ("000000" + this.getHex(e).toString(16)).slice(-6);
    }
    getHSL(e, t = Ye.workingColorSpace) {
      Ye.fromWorkingColorSpace(kt.copy(this), t);
      const n = kt.r, i = kt.g, s = kt.b, o = Math.max(n, i, s), a = Math.min(n, i, s);
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
    getRGB(e, t = Ye.workingColorSpace) {
      return Ye.fromWorkingColorSpace(kt.copy(this), t), e.r = kt.r, e.g = kt.g, e.b = kt.b, e;
    }
    getStyle(e = Ut) {
      Ye.fromWorkingColorSpace(kt.copy(this), e);
      const t = kt.r, n = kt.g, i = kt.b;
      return e !== Ut ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
    }
    offsetHSL(e, t, n) {
      return this.getHSL(Ci), this.setHSL(Ci.h + e, Ci.s + t, Ci.l + n);
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
      this.getHSL(Ci), e.getHSL(Fo);
      const n = $s(Ci.h, Fo.h, t), i = $s(Ci.s, Fo.s, t), s = $s(Ci.l, Fo.l, t);
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
  const kt = new Re();
  Re.NAMES = Fd;
  let t_ = 0;
  class Wn extends As {
    constructor() {
      super(), this.isMaterial = true, Object.defineProperty(this, "id", {
        value: t_++
      }), this.uuid = An(), this.name = "", this.type = "Material", this.blending = Jr, this.side = yi, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = Wl, this.blendDst = Xl, this.blendEquation = ur, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Re(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ls, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = Eh, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Lr, this.stencilZFail = Lr, this.stencilZPass = Lr, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
      n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Jr && (n.blending = this.blending), this.side !== yi && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== Wl && (n.blendSrc = this.blendSrc), this.blendDst !== Xl && (n.blendDst = this.blendDst), this.blendEquation !== ur && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ls && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Eh && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Lr && (n.stencilFail = this.stencilFail), this.stencilZFail !== Lr && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Lr && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
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
  class Hn extends Wn {
    constructor(e) {
      super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Re(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Fn(), this.combine = vd, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
    }
  }
  const bt = new D(), Bo = new ee();
  let n_ = 0;
  class Jt {
    constructor(e, t, n = false) {
      if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = true, Object.defineProperty(this, "id", {
        value: n_++
      }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Rc, this.updateRanges = [], this.gpuType = Un, this.version = 0;
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
      if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Bo.fromBufferAttribute(this, t), Bo.applyMatrix3(e), this.setXY(t, Bo.x, Bo.y);
      else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) bt.fromBufferAttribute(this, t), bt.applyMatrix3(e), this.setXYZ(t, bt.x, bt.y, bt.z);
      return this;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.count; t < n; t++) bt.fromBufferAttribute(this, t), bt.applyMatrix4(e), this.setXYZ(t, bt.x, bt.y, bt.z);
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++) bt.fromBufferAttribute(this, t), bt.applyNormalMatrix(e), this.setXYZ(t, bt.x, bt.y, bt.z);
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++) bt.fromBufferAttribute(this, t), bt.transformDirection(e), this.setXYZ(t, bt.x, bt.y, bt.z);
      return this;
    }
    set(e, t = 0) {
      return this.array.set(e, t), this;
    }
    getComponent(e, t) {
      let n = this.array[e * this.itemSize + t];
      return this.normalized && (n = In(n, this.array)), n;
    }
    setComponent(e, t, n) {
      return this.normalized && (n = st(n, this.array)), this.array[e * this.itemSize + t] = n, this;
    }
    getX(e) {
      let t = this.array[e * this.itemSize];
      return this.normalized && (t = In(t, this.array)), t;
    }
    setX(e, t) {
      return this.normalized && (t = st(t, this.array)), this.array[e * this.itemSize] = t, this;
    }
    getY(e) {
      let t = this.array[e * this.itemSize + 1];
      return this.normalized && (t = In(t, this.array)), t;
    }
    setY(e, t) {
      return this.normalized && (t = st(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
    }
    getZ(e) {
      let t = this.array[e * this.itemSize + 2];
      return this.normalized && (t = In(t, this.array)), t;
    }
    setZ(e, t) {
      return this.normalized && (t = st(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
    }
    getW(e) {
      let t = this.array[e * this.itemSize + 3];
      return this.normalized && (t = In(t, this.array)), t;
    }
    setW(e, t) {
      return this.normalized && (t = st(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
    }
    setXY(e, t, n) {
      return e *= this.itemSize, this.normalized && (t = st(t, this.array), n = st(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
    }
    setXYZ(e, t, n, i) {
      return e *= this.itemSize, this.normalized && (t = st(t, this.array), n = st(n, this.array), i = st(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
    }
    setXYZW(e, t, n, i, s) {
      return e *= this.itemSize, this.normalized && (t = st(t, this.array), n = st(n, this.array), i = st(i, this.array), s = st(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
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
      return this.name !== "" && (e.name = this.name), this.usage !== Rc && (e.usage = this.usage), e;
    }
  }
  class Bd extends Jt {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n);
    }
  }
  class zd extends Jt {
    constructor(e, t, n) {
      super(new Uint32Array(e), t, n);
    }
  }
  class Ot extends Jt {
    constructor(e, t, n) {
      super(new Float32Array(e), t, n);
    }
  }
  let i_ = 0;
  const Mn = new Fe(), dl = new gt(), Vr = new D(), fn = new Ei(), Us = new Ei(), Dt = new D();
  class cn extends As {
    constructor() {
      super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", {
        value: i_++
      }), this.uuid = An(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
        start: 0,
        count: 1 / 0
      }, this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(e) {
      return Array.isArray(e) ? this.index = new (Nd(e) ? zd : Bd)(e, 1) : this.index = e, this;
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
      return Mn.makeRotationFromQuaternion(e), this.applyMatrix4(Mn), this;
    }
    rotateX(e) {
      return Mn.makeRotationX(e), this.applyMatrix4(Mn), this;
    }
    rotateY(e) {
      return Mn.makeRotationY(e), this.applyMatrix4(Mn), this;
    }
    rotateZ(e) {
      return Mn.makeRotationZ(e), this.applyMatrix4(Mn), this;
    }
    translate(e, t, n) {
      return Mn.makeTranslation(e, t, n), this.applyMatrix4(Mn), this;
    }
    scale(e, t, n) {
      return Mn.makeScale(e, t, n), this.applyMatrix4(Mn), this;
    }
    lookAt(e) {
      return dl.lookAt(e), dl.updateMatrix(), this.applyMatrix4(dl.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(Vr).negate(), this.translate(Vr.x, Vr.y, Vr.z), this;
    }
    setFromPoints(e) {
      const t = this.getAttribute("position");
      if (t === void 0) {
        const n = [];
        for (let i = 0, s = e.length; i < s; i++) {
          const o = e[i];
          n.push(o.x, o.y, o.z || 0);
        }
        this.setAttribute("position", new Ot(n, 3));
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
      this.boundingBox === null && (this.boundingBox = new Ei());
      const e = this.attributes.position, t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new D(-1 / 0, -1 / 0, -1 / 0), new D(1 / 0, 1 / 0, 1 / 0));
        return;
      }
      if (e !== void 0) {
        if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          fn.setFromBufferAttribute(s), this.morphTargetsRelative ? (Dt.addVectors(this.boundingBox.min, fn.min), this.boundingBox.expandByPoint(Dt), Dt.addVectors(this.boundingBox.max, fn.max), this.boundingBox.expandByPoint(Dt)) : (this.boundingBox.expandByPoint(fn.min), this.boundingBox.expandByPoint(fn.max));
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new Kn());
      const e = this.attributes.position, t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new D(), 1 / 0);
        return;
      }
      if (e) {
        const n = this.boundingSphere.center;
        if (fn.setFromBufferAttribute(e), t) for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          Us.setFromBufferAttribute(a), this.morphTargetsRelative ? (Dt.addVectors(fn.min, Us.min), fn.expandByPoint(Dt), Dt.addVectors(fn.max, Us.max), fn.expandByPoint(Dt)) : (fn.expandByPoint(Us.min), fn.expandByPoint(Us.max));
        }
        fn.getCenter(n);
        let i = 0;
        for (let s = 0, o = e.count; s < o; s++) Dt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(Dt));
        if (t) for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++) Dt.fromBufferAttribute(a, c), l && (Vr.fromBufferAttribute(e, c), Dt.add(Vr)), i = Math.max(i, n.distanceToSquared(Dt));
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
      this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Jt(new Float32Array(4 * n.count), 4));
      const o = this.getAttribute("tangent"), a = [], l = [];
      for (let P = 0; P < n.count; P++) a[P] = new D(), l[P] = new D();
      const c = new D(), u = new D(), h = new D(), f = new ee(), d = new ee(), _ = new ee(), g = new D(), m = new D();
      function p(P, S, M) {
        c.fromBufferAttribute(n, P), u.fromBufferAttribute(n, S), h.fromBufferAttribute(n, M), f.fromBufferAttribute(s, P), d.fromBufferAttribute(s, S), _.fromBufferAttribute(s, M), u.sub(c), h.sub(c), d.sub(f), _.sub(f);
        const L = 1 / (d.x * _.y - _.x * d.y);
        isFinite(L) && (g.copy(u).multiplyScalar(_.y).addScaledVector(h, -d.y).multiplyScalar(L), m.copy(h).multiplyScalar(d.x).addScaledVector(u, -_.x).multiplyScalar(L), a[P].add(g), a[S].add(g), a[M].add(g), l[P].add(m), l[S].add(m), l[M].add(m));
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
      const v = new D(), x = new D(), b = new D(), w = new D();
      function A(P) {
        b.fromBufferAttribute(i, P), w.copy(b);
        const S = a[P];
        v.copy(S), v.sub(b.multiplyScalar(b.dot(S))).normalize(), x.crossVectors(w, S);
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
        if (n === void 0) n = new Jt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
        else for (let f = 0, d = n.count; f < d; f++) n.setXYZ(f, 0, 0, 0);
        const i = new D(), s = new D(), o = new D(), a = new D(), l = new D(), c = new D(), u = new D(), h = new D();
        if (e) for (let f = 0, d = e.count; f < d; f += 3) {
          const _ = e.getX(f + 0), g = e.getX(f + 1), m = e.getX(f + 2);
          i.fromBufferAttribute(t, _), s.fromBufferAttribute(t, g), o.fromBufferAttribute(t, m), u.subVectors(o, s), h.subVectors(i, s), u.cross(h), a.fromBufferAttribute(n, _), l.fromBufferAttribute(n, g), c.fromBufferAttribute(n, m), a.add(u), l.add(u), c.add(u), n.setXYZ(_, a.x, a.y, a.z), n.setXYZ(g, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
        }
        else for (let f = 0, d = t.count; f < d; f += 3) i.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), o.fromBufferAttribute(t, f + 2), u.subVectors(o, s), h.subVectors(i, s), u.cross(h), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
        this.normalizeNormals(), n.needsUpdate = true;
      }
    }
    normalizeNormals() {
      const e = this.attributes.normal;
      for (let t = 0, n = e.count; t < n; t++) Dt.fromBufferAttribute(e, t), Dt.normalize(), e.setXYZ(t, Dt.x, Dt.y, Dt.z);
    }
    toNonIndexed() {
      function e(a, l) {
        const c = a.array, u = a.itemSize, h = a.normalized, f = new c.constructor(l.length * u);
        let d = 0, _ = 0;
        for (let g = 0, m = l.length; g < m; g++) {
          a.isInterleavedBufferAttribute ? d = l[g] * a.data.stride + a.offset : d = l[g] * u;
          for (let p = 0; p < u; p++) f[_++] = c[d++];
        }
        return new Jt(f, u, h);
      }
      if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      const t = new cn(), n = this.index.array, i = this.attributes;
      for (const a in i) {
        const l = i[a], c = e(l, n);
        t.setAttribute(a, c);
      }
      const s = this.morphAttributes;
      for (const a in s) {
        const l = [], c = s[a];
        for (let u = 0, h = c.length; u < h; u++) {
          const f = c[u], d = e(f, n);
          l.push(d);
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
        for (let h = 0, f = c.length; h < f; h++) {
          const d = c[h];
          u.push(d.toJSON(e.data));
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
        for (let f = 0, d = h.length; f < d; f++) u.push(h[f].clone(t));
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
  const zh = new Fe(), Ji = new Mo(), zo = new Kn(), kh = new D(), ko = new D(), Vo = new D(), Ho = new D(), pl = new D(), Go = new D(), Vh = new D(), Wo = new D();
  class Rt extends gt {
    constructor(e = new cn(), t = new Hn()) {
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
        Go.set(0, 0, 0);
        for (let l = 0, c = s.length; l < c; l++) {
          const u = a[l], h = s[l];
          u !== 0 && (pl.fromBufferAttribute(h, e), o ? Go.addScaledVector(pl, u) : Go.addScaledVector(pl.sub(t), u));
        }
        t.add(Go);
      }
      return t;
    }
    raycast(e, t) {
      const n = this.geometry, i = this.material, s = this.matrixWorld;
      i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), zo.copy(n.boundingSphere), zo.applyMatrix4(s), Ji.copy(e.ray).recast(e.near), !(zo.containsPoint(Ji.origin) === false && (Ji.intersectSphere(zo, kh) === null || Ji.origin.distanceToSquared(kh) > (e.far - e.near) ** 2)) && (zh.copy(s).invert(), Ji.copy(e.ray).applyMatrix4(zh), !(n.boundingBox !== null && Ji.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t, Ji)));
    }
    _computeIntersections(e, t, n) {
      let i;
      const s = this.geometry, o = this.material, a = s.index, l = s.attributes.position, c = s.attributes.uv, u = s.attributes.uv1, h = s.attributes.normal, f = s.groups, d = s.drawRange;
      if (a !== null) if (Array.isArray(o)) for (let _ = 0, g = f.length; _ < g; _++) {
        const m = f[_], p = o[m.materialIndex], y = Math.max(m.start, d.start), v = Math.min(a.count, Math.min(m.start + m.count, d.start + d.count));
        for (let x = y, b = v; x < b; x += 3) {
          const w = a.getX(x), A = a.getX(x + 1), P = a.getX(x + 2);
          i = Xo(this, p, e, n, c, u, h, w, A, P), i && (i.faceIndex = Math.floor(x / 3), i.face.materialIndex = m.materialIndex, t.push(i));
        }
      }
      else {
        const _ = Math.max(0, d.start), g = Math.min(a.count, d.start + d.count);
        for (let m = _, p = g; m < p; m += 3) {
          const y = a.getX(m), v = a.getX(m + 1), x = a.getX(m + 2);
          i = Xo(this, o, e, n, c, u, h, y, v, x), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
      else if (l !== void 0) if (Array.isArray(o)) for (let _ = 0, g = f.length; _ < g; _++) {
        const m = f[_], p = o[m.materialIndex], y = Math.max(m.start, d.start), v = Math.min(l.count, Math.min(m.start + m.count, d.start + d.count));
        for (let x = y, b = v; x < b; x += 3) {
          const w = x, A = x + 1, P = x + 2;
          i = Xo(this, p, e, n, c, u, h, w, A, P), i && (i.faceIndex = Math.floor(x / 3), i.face.materialIndex = m.materialIndex, t.push(i));
        }
      }
      else {
        const _ = Math.max(0, d.start), g = Math.min(l.count, d.start + d.count);
        for (let m = _, p = g; m < p; m += 3) {
          const y = m, v = m + 1, x = m + 2;
          i = Xo(this, o, e, n, c, u, h, y, v, x), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
    }
  }
  function r_(r, e, t, n, i, s, o, a) {
    let l;
    if (e.side === nn ? l = n.intersectTriangle(o, s, i, true, a) : l = n.intersectTriangle(i, s, o, e.side === yi, a), l === null) return null;
    Wo.copy(a), Wo.applyMatrix4(r.matrixWorld);
    const c = t.ray.origin.distanceTo(Wo);
    return c < t.near || c > t.far ? null : {
      distance: c,
      point: Wo.clone(),
      object: r
    };
  }
  function Xo(r, e, t, n, i, s, o, a, l, c) {
    r.getVertexPosition(a, ko), r.getVertexPosition(l, Vo), r.getVertexPosition(c, Ho);
    const u = r_(r, e, t, n, ko, Vo, Ho, Vh);
    if (u) {
      const h = new D();
      Nn.getBarycoord(Vh, ko, Vo, Ho, h), i && (u.uv = Nn.getInterpolatedAttribute(i, a, l, c, h, new ee())), s && (u.uv1 = Nn.getInterpolatedAttribute(s, a, l, c, h, new ee())), o && (u.normal = Nn.getInterpolatedAttribute(o, a, l, c, h, new D()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
      const f = {
        a,
        b: l,
        c,
        normal: new D(),
        materialIndex: 0
      };
      Nn.getNormal(ko, Vo, Ho, f.normal), u.face = f, u.barycoord = h;
    }
    return u;
  }
  class Er extends cn {
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
      let f = 0, d = 0;
      _("z", "y", "x", -1, -1, n, t, e, o, s, 0), _("z", "y", "x", 1, -1, n, t, -e, o, s, 1), _("x", "z", "y", 1, 1, e, n, t, i, o, 2), _("x", "z", "y", 1, -1, e, n, -t, i, o, 3), _("x", "y", "z", 1, -1, e, t, n, i, s, 4), _("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new Ot(c, 3)), this.setAttribute("normal", new Ot(u, 3)), this.setAttribute("uv", new Ot(h, 2));
      function _(g, m, p, y, v, x, b, w, A, P, S) {
        const M = x / A, L = b / P, G = x / 2, O = b / 2, V = w / 2, q = A + 1, B = P + 1;
        let $ = 0, H = 0;
        const oe = new D();
        for (let ce = 0; ce < B; ce++) {
          const ge = ce * L - O;
          for (let Le = 0; Le < q; Le++) {
            const Ke = Le * M - G;
            oe[g] = Ke * y, oe[m] = ge * v, oe[p] = V, c.push(oe.x, oe.y, oe.z), oe[g] = 0, oe[m] = 0, oe[p] = w > 0 ? 1 : -1, u.push(oe.x, oe.y, oe.z), h.push(Le / A), h.push(1 - ce / P), $ += 1;
          }
        }
        for (let ce = 0; ce < P; ce++) for (let ge = 0; ge < A; ge++) {
          const Le = f + ge + q * ce, Ke = f + ge + q * (ce + 1), X = f + (ge + 1) + q * (ce + 1), ie = f + (ge + 1) + q * ce;
          l.push(Le, Ke, ie), l.push(Ke, X, ie), H += 6;
        }
        a.addGroup(d, H, S), d += H, f += $;
      }
    }
    copy(e) {
      return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
    }
    static fromJSON(e) {
      return new Er(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
    }
  }
  function ms(r) {
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
  function Kt(r) {
    const e = {};
    for (let t = 0; t < r.length; t++) {
      const n = ms(r[t]);
      for (const i in n) e[i] = n[i];
    }
    return e;
  }
  function s_(r) {
    const e = [];
    for (let t = 0; t < r.length; t++) e.push(r[t].clone());
    return e;
  }
  function kd(r) {
    const e = r.getRenderTarget();
    return e === null ? r.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : Ye.workingColorSpace;
  }
  const wa = {
    clone: ms,
    merge: Kt
  };
  var o_ = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, a_ = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
  class Gt extends Wn {
    constructor(e) {
      super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = o_, this.fragmentShader = a_, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = {
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
      return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ms(e.uniforms), this.uniformsGroups = s_(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
  class Vd extends gt {
    constructor() {
      super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Fe(), this.projectionMatrix = new Fe(), this.projectionMatrixInverse = new Fe(), this.coordinateSystem = mi;
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
  const Pi = new D(), Hh = new ee(), Gh = new ee();
  class $t extends Vd {
    constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
      super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(e, t) {
      return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
    }
    setFocalLength(e) {
      const t = 0.5 * this.getFilmHeight() / e;
      this.fov = ps * 2 * Math.atan(t), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const e = Math.tan(Ks * 0.5 * this.fov);
      return 0.5 * this.getFilmHeight() / e;
    }
    getEffectiveFOV() {
      return ps * 2 * Math.atan(Math.tan(Ks * 0.5 * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(e, t, n) {
      Pi.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Pi.x, Pi.y).multiplyScalar(-e / Pi.z), Pi.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Pi.x, Pi.y).multiplyScalar(-e / Pi.z);
    }
    getViewSize(e, t) {
      return this.getViewBounds(e, Hh, Gh), t.subVectors(Gh, Hh);
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
      let t = e * Math.tan(Ks * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
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
  const Hr = -90, Gr = 1;
  class l_ extends gt {
    constructor(e, t, n) {
      super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
      const i = new $t(Hr, Gr, e, t);
      i.layers = this.layers, this.add(i);
      const s = new $t(Hr, Gr, e, t);
      s.layers = this.layers, this.add(s);
      const o = new $t(Hr, Gr, e, t);
      o.layers = this.layers, this.add(o);
      const a = new $t(Hr, Gr, e, t);
      a.layers = this.layers, this.add(a);
      const l = new $t(Hr, Gr, e, t);
      l.layers = this.layers, this.add(l);
      const c = new $t(Hr, Gr, e, t);
      c.layers = this.layers, this.add(c);
    }
    updateCoordinateSystem() {
      const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, o, a, l] = t;
      for (const c of t) this.remove(c);
      if (e === mi) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
      else if (e === ba) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
      else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
      for (const c of t) this.add(c), c.updateMatrixWorld();
    }
    update(e, t) {
      this.parent === null && this.updateMatrixWorld();
      const { renderTarget: n, activeMipmapLevel: i } = this;
      this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
      const [s, o, a, l, c, u] = this.children, h = e.getRenderTarget(), f = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), _ = e.xr.enabled;
      e.xr.enabled = false;
      const g = n.texture.generateMipmaps;
      n.texture.generateMipmaps = false, e.setRenderTarget(n, 0, i), e.render(t, s), e.setRenderTarget(n, 1, i), e.render(t, o), e.setRenderTarget(n, 2, i), e.render(t, a), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = g, e.setRenderTarget(n, 5, i), e.render(t, u), e.setRenderTarget(h, f, d), e.xr.enabled = _, n.texture.needsPMREMUpdate = true;
    }
  }
  class Hd extends Ct {
    constructor(e, t, n, i, s, o, a, l, c, u) {
      e = e !== void 0 ? e : [], t = t !== void 0 ? t : cs, super(e, t, n, i, s, o, a, l, c, u), this.isCubeTexture = true, this.flipY = false;
    }
    get images() {
      return this.image;
    }
    set images(e) {
      this.image = e;
    }
  }
  class c_ extends On {
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
      this.texture = new Hd(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : false, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : mn;
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
      }, i = new Er(5, 5, 5), s = new Gt({
        name: "CubemapFromEquirect",
        uniforms: ms(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: nn,
        blending: _i
      });
      s.uniforms.tEquirect.value = t;
      const o = new Rt(i, s), a = t.minFilter;
      return t.minFilter === pi && (t.minFilter = mn), new l_(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
    }
    clear(e, t, n, i) {
      const s = e.getRenderTarget();
      for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, i);
      e.setRenderTarget(s);
    }
  }
  class mr extends gt {
    constructor() {
      super(), this.isGroup = true, this.type = "Group";
    }
  }
  const u_ = {
    type: "move"
  };
  class ml {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
      return this._hand === null && (this._hand = new mr(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = {
        pinching: false
      }), this._hand;
    }
    getTargetRaySpace() {
      return this._targetRay === null && (this._targetRay = new mr(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new D(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new D()), this._targetRay;
    }
    getGripSpace() {
      return this._grip === null && (this._grip = new mr(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new D(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new D()), this._grip;
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
          const u = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], f = u.position.distanceTo(h.position), d = 0.02, _ = 5e-3;
          c.inputState.pinching && f > d + _ ? (c.inputState.pinching = false, this.dispatchEvent({
            type: "pinchend",
            handedness: e.handedness,
            target: this
          })) : !c.inputState.pinching && f <= d - _ && (c.inputState.pinching = true, this.dispatchEvent({
            type: "pinchstart",
            handedness: e.handedness,
            target: this
          }));
        } else l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, s.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = false, s.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = false));
        a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = true, i.linearVelocity ? (a.hasLinearVelocity = true, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = false, i.angularVelocity ? (a.hasAngularVelocity = true, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = false, this.dispatchEvent(u_)));
      }
      return a !== null && (a.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = o !== null), this;
    }
    _getHandJoint(e, t) {
      if (e.joints[t.jointName] === void 0) {
        const n = new mr();
        n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
      }
      return e.joints[t.jointName];
    }
  }
  class h_ extends gt {
    constructor() {
      super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Fn(), this.environmentIntensity = 1, this.environmentRotation = new Fn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
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
  class f_ {
    constructor(e, t) {
      this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Rc, this.updateRanges = [], this.version = 0, this.uuid = An();
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
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = An()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
      const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
      return n.setUsage(this.usage), n;
    }
    onUpload(e) {
      return this.onUploadCallback = e, this;
    }
    toJSON(e) {
      return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = An()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride
      };
    }
  }
  const Yt = new D();
  class _u {
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
      for (let t = 0, n = this.data.count; t < n; t++) Yt.fromBufferAttribute(this, t), Yt.applyMatrix4(e), this.setXYZ(t, Yt.x, Yt.y, Yt.z);
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++) Yt.fromBufferAttribute(this, t), Yt.applyNormalMatrix(e), this.setXYZ(t, Yt.x, Yt.y, Yt.z);
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++) Yt.fromBufferAttribute(this, t), Yt.transformDirection(e), this.setXYZ(t, Yt.x, Yt.y, Yt.z);
      return this;
    }
    getComponent(e, t) {
      let n = this.array[e * this.data.stride + this.offset + t];
      return this.normalized && (n = In(n, this.array)), n;
    }
    setComponent(e, t, n) {
      return this.normalized && (n = st(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
    }
    setX(e, t) {
      return this.normalized && (t = st(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
    }
    setY(e, t) {
      return this.normalized && (t = st(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
    }
    setZ(e, t) {
      return this.normalized && (t = st(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
    }
    setW(e, t) {
      return this.normalized && (t = st(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
    }
    getX(e) {
      let t = this.data.array[e * this.data.stride + this.offset];
      return this.normalized && (t = In(t, this.array)), t;
    }
    getY(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 1];
      return this.normalized && (t = In(t, this.array)), t;
    }
    getZ(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 2];
      return this.normalized && (t = In(t, this.array)), t;
    }
    getW(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 3];
      return this.normalized && (t = In(t, this.array)), t;
    }
    setXY(e, t, n) {
      return e = e * this.data.stride + this.offset, this.normalized && (t = st(t, this.array), n = st(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
    }
    setXYZ(e, t, n, i) {
      return e = e * this.data.stride + this.offset, this.normalized && (t = st(t, this.array), n = st(n, this.array), i = st(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
    }
    setXYZW(e, t, n, i, s) {
      return e = e * this.data.stride + this.offset, this.normalized && (t = st(t, this.array), n = st(n, this.array), i = st(i, this.array), s = st(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
    }
    clone(e) {
      if (e === void 0) {
        console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
        const t = [];
        for (let n = 0; n < this.count; n++) {
          const i = n * this.data.stride + this.offset;
          for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
        }
        return new Jt(new this.array.constructor(t), this.itemSize, this.normalized);
      } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new _u(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
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
  const Wh = new D(), Xh = new et(), qh = new et(), d_ = new D(), Yh = new Fe(), qo = new D(), gl = new Kn(), Kh = new Fe(), _l = new Mo();
  class p_ extends Rt {
    constructor(e, t) {
      super(e, t), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = yh, this.bindMatrix = new Fe(), this.bindMatrixInverse = new Fe(), this.boundingBox = null, this.boundingSphere = null;
    }
    computeBoundingBox() {
      const e = this.geometry;
      this.boundingBox === null && (this.boundingBox = new Ei()), this.boundingBox.makeEmpty();
      const t = e.getAttribute("position");
      for (let n = 0; n < t.count; n++) this.getVertexPosition(n, qo), this.boundingBox.expandByPoint(qo);
    }
    computeBoundingSphere() {
      const e = this.geometry;
      this.boundingSphere === null && (this.boundingSphere = new Kn()), this.boundingSphere.makeEmpty();
      const t = e.getAttribute("position");
      for (let n = 0; n < t.count; n++) this.getVertexPosition(n, qo), this.boundingSphere.expandByPoint(qo);
    }
    copy(e, t) {
      return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
    }
    raycast(e, t) {
      const n = this.material, i = this.matrixWorld;
      n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), gl.copy(this.boundingSphere), gl.applyMatrix4(i), e.ray.intersectsSphere(gl) !== false && (Kh.copy(i).invert(), _l.copy(e.ray).applyMatrix4(Kh), !(this.boundingBox !== null && _l.intersectsBox(this.boundingBox) === false) && this._computeIntersections(e, t, _l)));
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
      const e = new et(), t = this.geometry.attributes.skinWeight;
      for (let n = 0, i = t.count; n < i; n++) {
        e.fromBufferAttribute(t, n);
        const s = 1 / e.manhattanLength();
        s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
      }
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e), this.bindMode === yh ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === lg ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
    }
    applyBoneTransform(e, t) {
      const n = this.skeleton, i = this.geometry;
      Xh.fromBufferAttribute(i.attributes.skinIndex, e), qh.fromBufferAttribute(i.attributes.skinWeight, e), Wh.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
      for (let s = 0; s < 4; s++) {
        const o = qh.getComponent(s);
        if (o !== 0) {
          const a = Xh.getComponent(s);
          Yh.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(d_.copy(Wh).applyMatrix4(Yh), o);
        }
      }
      return t.applyMatrix4(this.bindMatrixInverse);
    }
  }
  class Gd extends gt {
    constructor() {
      super(), this.isBone = true, this.type = "Bone";
    }
  }
  class Wd extends Ct {
    constructor(e = null, t = 1, n = 1, i, s, o, a, l, c = Zt, u = Zt, h, f) {
      super(null, o, a, l, c, u, i, s, h, f), this.isDataTexture = true, this.image = {
        data: e,
        width: t,
        height: n
      }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  }
  const $h = new Fe(), m_ = new Fe();
  class xu {
    constructor(e = [], t = []) {
      this.uuid = An(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
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
        const a = e[s] ? e[s].matrixWorld : m_;
        $h.multiplyMatrices(a, t[s]), $h.toArray(n, s * 16);
      }
      i !== null && (i.needsUpdate = true);
    }
    clone() {
      return new xu(this.bones, this.boneInverses);
    }
    computeBoneTexture() {
      let e = Math.sqrt(this.bones.length * 4);
      e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
      const t = new Float32Array(e * e * 4);
      t.set(this.boneMatrices);
      const n = new Wd(t, e, e, bn, Un);
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
        o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), o = new Gd()), this.bones.push(o), this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]));
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
  class Cc extends Jt {
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
  const Wr = new Fe(), jh = new Fe(), Yo = [], Zh = new Ei(), g_ = new Fe(), Os = new Rt(), Fs = new Kn();
  class __ extends Rt {
    constructor(e, t, n) {
      super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new Cc(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
      for (let i = 0; i < n; i++) this.setMatrixAt(i, g_);
    }
    computeBoundingBox() {
      const e = this.geometry, t = this.count;
      this.boundingBox === null && (this.boundingBox = new Ei()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
      for (let n = 0; n < t; n++) this.getMatrixAt(n, Wr), Zh.copy(e.boundingBox).applyMatrix4(Wr), this.boundingBox.union(Zh);
    }
    computeBoundingSphere() {
      const e = this.geometry, t = this.count;
      this.boundingSphere === null && (this.boundingSphere = new Kn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
      for (let n = 0; n < t; n++) this.getMatrixAt(n, Wr), Fs.copy(e.boundingSphere).applyMatrix4(Wr), this.boundingSphere.union(Fs);
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
      if (Os.geometry = this.geometry, Os.material = this.material, Os.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Fs.copy(this.boundingSphere), Fs.applyMatrix4(n), e.ray.intersectsSphere(Fs) !== false)) for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, Wr), jh.multiplyMatrices(n, Wr), Os.matrixWorld = jh, Os.raycast(e, Yo);
        for (let o = 0, a = Yo.length; o < a; o++) {
          const l = Yo[o];
          l.instanceId = s, l.object = this, t.push(l);
        }
        Yo.length = 0;
      }
    }
    setColorAt(e, t) {
      this.instanceColor === null && (this.instanceColor = new Cc(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
    }
    setMatrixAt(e, t) {
      t.toArray(this.instanceMatrix.array, e * 16);
    }
    setMorphAt(e, t) {
      const n = t.morphTargetInfluences, i = n.length + 1;
      this.morphTexture === null && (this.morphTexture = new Wd(new Float32Array(i * this.count), i, this.count, hu, Un));
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
  const xl = new D(), x_ = new D(), v_ = new ze();
  class or {
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
      const i = xl.subVectors(n, t).cross(x_.subVectors(e, t)).normalize();
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
      const n = e.delta(xl), i = this.normal.dot(n);
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
      const n = t || v_.getNormalMatrix(e), i = this.coplanarPoint(xl).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
  const Qi = new Kn(), Ko = new D();
  class vu {
    constructor(e = new or(), t = new or(), n = new or(), i = new or(), s = new or(), o = new or()) {
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
    setFromProjectionMatrix(e, t = mi) {
      const n = this.planes, i = e.elements, s = i[0], o = i[1], a = i[2], l = i[3], c = i[4], u = i[5], h = i[6], f = i[7], d = i[8], _ = i[9], g = i[10], m = i[11], p = i[12], y = i[13], v = i[14], x = i[15];
      if (n[0].setComponents(l - s, f - c, m - d, x - p).normalize(), n[1].setComponents(l + s, f + c, m + d, x + p).normalize(), n[2].setComponents(l + o, f + u, m + _, x + y).normalize(), n[3].setComponents(l - o, f - u, m - _, x - y).normalize(), n[4].setComponents(l - a, f - h, m - g, x - v).normalize(), t === mi) n[5].setComponents(l + a, f + h, m + g, x + v).normalize();
      else if (t === ba) n[5].setComponents(a, h, g, v).normalize();
      else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
      return this;
    }
    intersectsObject(e) {
      if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
      else {
        const t = e.geometry;
        t.boundingSphere === null && t.computeBoundingSphere(), Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
      }
      return this.intersectsSphere(Qi);
    }
    intersectsSprite(e) {
      return Qi.center.set(0, 0, 0), Qi.radius = 0.7071067811865476, Qi.applyMatrix4(e.matrixWorld), this.intersectsSphere(Qi);
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
        if (Ko.x = i.normal.x > 0 ? e.max.x : e.min.x, Ko.y = i.normal.y > 0 ? e.max.y : e.min.y, Ko.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Ko) < 0) return false;
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
  class Xd extends Wn {
    constructor(e) {
      super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Re(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
    }
  }
  const Aa = new D(), Ra = new D(), Jh = new Fe(), Bs = new Mo(), $o = new Kn(), vl = new D(), Qh = new D();
  class yu extends gt {
    constructor(e = new cn(), t = new Xd()) {
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
        for (let i = 1, s = t.count; i < s; i++) Aa.fromBufferAttribute(t, i - 1), Ra.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Aa.distanceTo(Ra);
        e.setAttribute("lineDistance", new Ot(n, 1));
      } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
    raycast(e, t) {
      const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
      if (n.boundingSphere === null && n.computeBoundingSphere(), $o.copy(n.boundingSphere), $o.applyMatrix4(i), $o.radius += s, e.ray.intersectsSphere($o) === false) return;
      Jh.copy(i).invert(), Bs.copy(e.ray).applyMatrix4(Jh);
      const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, u = n.index, f = n.attributes.position;
      if (u !== null) {
        const d = Math.max(0, o.start), _ = Math.min(u.count, o.start + o.count);
        for (let g = d, m = _ - 1; g < m; g += c) {
          const p = u.getX(g), y = u.getX(g + 1), v = jo(this, e, Bs, l, p, y, g);
          v && t.push(v);
        }
        if (this.isLineLoop) {
          const g = u.getX(_ - 1), m = u.getX(d), p = jo(this, e, Bs, l, g, m, _ - 1);
          p && t.push(p);
        }
      } else {
        const d = Math.max(0, o.start), _ = Math.min(f.count, o.start + o.count);
        for (let g = d, m = _ - 1; g < m; g += c) {
          const p = jo(this, e, Bs, l, g, g + 1, g);
          p && t.push(p);
        }
        if (this.isLineLoop) {
          const g = jo(this, e, Bs, l, _ - 1, d, _ - 1);
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
  function jo(r, e, t, n, i, s, o) {
    const a = r.geometry.attributes.position;
    if (Aa.fromBufferAttribute(a, i), Ra.fromBufferAttribute(a, s), t.distanceSqToSegment(Aa, Ra, vl, Qh) > n) return;
    vl.applyMatrix4(r.matrixWorld);
    const c = e.ray.origin.distanceTo(vl);
    if (!(c < e.near || c > e.far)) return {
      distance: c,
      point: Qh.clone().applyMatrix4(r.matrixWorld),
      index: o,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: r
    };
  }
  const ef = new D(), tf = new D();
  class y_ extends yu {
    constructor(e, t) {
      super(e, t), this.isLineSegments = true, this.type = "LineSegments";
    }
    computeLineDistances() {
      const e = this.geometry;
      if (e.index === null) {
        const t = e.attributes.position, n = [];
        for (let i = 0, s = t.count; i < s; i += 2) ef.fromBufferAttribute(t, i), tf.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + ef.distanceTo(tf);
        e.setAttribute("lineDistance", new Ot(n, 1));
      } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
  }
  class S_ extends yu {
    constructor(e, t) {
      super(e, t), this.isLineLoop = true, this.type = "LineLoop";
    }
  }
  class Su extends Wn {
    constructor(e) {
      super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Re(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
    }
  }
  const nf = new Fe(), Pc = new Mo(), Zo = new Kn(), Jo = new D();
  class qd extends gt {
    constructor(e = new cn(), t = new Su()) {
      super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
    }
    copy(e, t) {
      return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
    }
    raycast(e, t) {
      const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, o = n.drawRange;
      if (n.boundingSphere === null && n.computeBoundingSphere(), Zo.copy(n.boundingSphere), Zo.applyMatrix4(i), Zo.radius += s, e.ray.intersectsSphere(Zo) === false) return;
      nf.copy(i).invert(), Pc.copy(e.ray).applyMatrix4(nf);
      const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, h = n.attributes.position;
      if (c !== null) {
        const f = Math.max(0, o.start), d = Math.min(c.count, o.start + o.count);
        for (let _ = f, g = d; _ < g; _++) {
          const m = c.getX(_);
          Jo.fromBufferAttribute(h, m), rf(Jo, m, l, i, e, t, this);
        }
      } else {
        const f = Math.max(0, o.start), d = Math.min(h.count, o.start + o.count);
        for (let _ = f, g = d; _ < g; _++) Jo.fromBufferAttribute(h, _), rf(Jo, _, l, i, e, t, this);
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
  function rf(r, e, t, n, i, s, o) {
    const a = Pc.distanceSqToPoint(r);
    if (a < t) {
      const l = new D();
      Pc.closestPointToPoint(r, l), l.applyMatrix4(n);
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
  class M_ extends Ct {
    constructor(e, t, n, i, s, o, a, l, c) {
      super(e, t, n, i, s, o, a, l, c), this.isCanvasTexture = true, this.needsUpdate = true;
    }
  }
  class Yd extends Ct {
    constructor(e, t, n, i, s, o, a, l, c, u = Qr) {
      if (u !== Qr && u !== ds) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      n === void 0 && u === Qr && (n = Sr), n === void 0 && u === ds && (n = fs), super(null, i, s, o, a, l, u, n, c), this.isDepthTexture = true, this.image = {
        width: e,
        height: t
      }, this.magFilter = a !== void 0 ? a : Zt, this.minFilter = l !== void 0 ? l : Zt, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
    }
    copy(e) {
      return super.copy(e), this.compareFunction = e.compareFunction, this;
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
    }
  }
  class $n {
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
      const u = n[i], f = n[i + 1] - u, d = (o - u) / f;
      return (i + d) / (s - 1);
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
      for (let d = 0; d <= e; d++) {
        const _ = d / e;
        i[d] = this.getTangentAt(_, new D());
      }
      s[0] = new D(), o[0] = new D();
      let c = Number.MAX_VALUE;
      const u = Math.abs(i[0].x), h = Math.abs(i[0].y), f = Math.abs(i[0].z);
      u <= c && (c = u, n.set(1, 0, 0)), h <= c && (c = h, n.set(0, 1, 0)), f <= c && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], a), o[0].crossVectors(i[0], s[0]);
      for (let d = 1; d <= e; d++) {
        if (s[d] = s[d - 1].clone(), o[d] = o[d - 1].clone(), a.crossVectors(i[d - 1], i[d]), a.length() > Number.EPSILON) {
          a.normalize();
          const _ = Math.acos(He(i[d - 1].dot(i[d]), -1, 1));
          s[d].applyMatrix4(l.makeRotationAxis(a, _));
        }
        o[d].crossVectors(i[d], s[d]);
      }
      if (t === true) {
        let d = Math.acos(He(s[0].dot(s[e]), -1, 1));
        d /= e, i[0].dot(a.crossVectors(s[0], s[e])) > 0 && (d = -d);
        for (let _ = 1; _ <= e; _++) s[_].applyMatrix4(l.makeRotationAxis(i[_], d * _)), o[_].crossVectors(i[_], s[_]);
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
  class Mu extends $n {
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
        const u = Math.cos(this.aRotation), h = Math.sin(this.aRotation), f = l - this.aX, d = c - this.aY;
        l = f * u - d * h + this.aX, c = f * h + d * u + this.aY;
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
  class T_ extends Mu {
    constructor(e, t, n, i, s, o) {
      super(e, t, n, n, i, s, o), this.isArcCurve = true, this.type = "ArcCurve";
    }
  }
  function Tu() {
    let r = 0, e = 0, t = 0, n = 0;
    function i(s, o, a, l) {
      r = s, e = a, t = -3 * s + 3 * o - 2 * a - l, n = 2 * s - 2 * o + a + l;
    }
    return {
      initCatmullRom: function(s, o, a, l, c) {
        i(o, a, c * (a - s), c * (l - o));
      },
      initNonuniformCatmullRom: function(s, o, a, l, c, u, h) {
        let f = (o - s) / c - (a - s) / (c + u) + (a - o) / u, d = (a - o) / u - (l - o) / (u + h) + (l - a) / h;
        f *= u, d *= u, i(o, a, f, d);
      },
      calc: function(s) {
        const o = s * s, a = o * s;
        return r + e * s + t * o + n * a;
      }
    };
  }
  const Qo = new D(), yl = new Tu(), Sl = new Tu(), Ml = new Tu();
  class E_ extends $n {
    constructor(e = [], t = false, n = "centripetal", i = 0.5) {
      super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
    }
    getPoint(e, t = new D()) {
      const n = t, i = this.points, s = i.length, o = (s - (this.closed ? 0 : 1)) * e;
      let a = Math.floor(o), l = o - a;
      this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s : l === 0 && a === s - 1 && (a = s - 2, l = 1);
      let c, u;
      this.closed || a > 0 ? c = i[(a - 1) % s] : (Qo.subVectors(i[0], i[1]).add(i[0]), c = Qo);
      const h = i[a % s], f = i[(a + 1) % s];
      if (this.closed || a + 2 < s ? u = i[(a + 2) % s] : (Qo.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), u = Qo), this.curveType === "centripetal" || this.curveType === "chordal") {
        const d = this.curveType === "chordal" ? 0.5 : 0.25;
        let _ = Math.pow(c.distanceToSquared(h), d), g = Math.pow(h.distanceToSquared(f), d), m = Math.pow(f.distanceToSquared(u), d);
        g < 1e-4 && (g = 1), _ < 1e-4 && (_ = g), m < 1e-4 && (m = g), yl.initNonuniformCatmullRom(c.x, h.x, f.x, u.x, _, g, m), Sl.initNonuniformCatmullRom(c.y, h.y, f.y, u.y, _, g, m), Ml.initNonuniformCatmullRom(c.z, h.z, f.z, u.z, _, g, m);
      } else this.curveType === "catmullrom" && (yl.initCatmullRom(c.x, h.x, f.x, u.x, this.tension), Sl.initCatmullRom(c.y, h.y, f.y, u.y, this.tension), Ml.initCatmullRom(c.z, h.z, f.z, u.z, this.tension));
      return n.set(yl.calc(l), Sl.calc(l), Ml.calc(l)), n;
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
  function sf(r, e, t, n, i) {
    const s = (n - e) * 0.5, o = (i - t) * 0.5, a = r * r, l = r * a;
    return (2 * t - 2 * n + s + o) * l + (-3 * t + 3 * n - 2 * s - o) * a + s * r + t;
  }
  function b_(r, e) {
    const t = 1 - r;
    return t * t * e;
  }
  function w_(r, e) {
    return 2 * (1 - r) * r * e;
  }
  function A_(r, e) {
    return r * r * e;
  }
  function js(r, e, t, n) {
    return b_(r, e) + w_(r, t) + A_(r, n);
  }
  function R_(r, e) {
    const t = 1 - r;
    return t * t * t * e;
  }
  function C_(r, e) {
    const t = 1 - r;
    return 3 * t * t * r * e;
  }
  function P_(r, e) {
    return 3 * (1 - r) * r * r * e;
  }
  function L_(r, e) {
    return r * r * r * e;
  }
  function Zs(r, e, t, n, i) {
    return R_(r, e) + C_(r, t) + P_(r, n) + L_(r, i);
  }
  class Kd extends $n {
    constructor(e = new ee(), t = new ee(), n = new ee(), i = new ee()) {
      super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
    }
    getPoint(e, t = new ee()) {
      const n = t, i = this.v0, s = this.v1, o = this.v2, a = this.v3;
      return n.set(Zs(e, i.x, s.x, o.x, a.x), Zs(e, i.y, s.y, o.y, a.y)), n;
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
  class D_ extends $n {
    constructor(e = new D(), t = new D(), n = new D(), i = new D()) {
      super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
    }
    getPoint(e, t = new D()) {
      const n = t, i = this.v0, s = this.v1, o = this.v2, a = this.v3;
      return n.set(Zs(e, i.x, s.x, o.x, a.x), Zs(e, i.y, s.y, o.y, a.y), Zs(e, i.z, s.z, o.z, a.z)), n;
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
  class $d extends $n {
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
  class I_ extends $n {
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
  class jd extends $n {
    constructor(e = new ee(), t = new ee(), n = new ee()) {
      super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
    }
    getPoint(e, t = new ee()) {
      const n = t, i = this.v0, s = this.v1, o = this.v2;
      return n.set(js(e, i.x, s.x, o.x), js(e, i.y, s.y, o.y)), n;
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
  class N_ extends $n {
    constructor(e = new D(), t = new D(), n = new D()) {
      super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
    }
    getPoint(e, t = new D()) {
      const n = t, i = this.v0, s = this.v1, o = this.v2;
      return n.set(js(e, i.x, s.x, o.x), js(e, i.y, s.y, o.y), js(e, i.z, s.z, o.z)), n;
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
  class Zd extends $n {
    constructor(e = []) {
      super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = e;
    }
    getPoint(e, t = new ee()) {
      const n = t, i = this.points, s = (i.length - 1) * e, o = Math.floor(s), a = s - o, l = i[o === 0 ? o : o - 1], c = i[o], u = i[o > i.length - 2 ? i.length - 1 : o + 1], h = i[o > i.length - 3 ? i.length - 1 : o + 2];
      return n.set(sf(a, l.x, c.x, u.x, h.x), sf(a, l.y, c.y, u.y, h.y)), n;
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
  var Lc = Object.freeze({
    __proto__: null,
    ArcCurve: T_,
    CatmullRomCurve3: E_,
    CubicBezierCurve: Kd,
    CubicBezierCurve3: D_,
    EllipseCurve: Mu,
    LineCurve: $d,
    LineCurve3: I_,
    QuadraticBezierCurve: jd,
    QuadraticBezierCurve3: N_,
    SplineCurve: Zd
  });
  class U_ extends $n {
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
        this.curves.push(new Lc[n](t, e));
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
        this.curves.push(new Lc[i.type]().fromJSON(i));
      }
      return this;
    }
  }
  class Dc extends U_ {
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
      const n = new $d(this.currentPoint.clone(), new ee(e, t));
      return this.curves.push(n), this.currentPoint.set(e, t), this;
    }
    quadraticCurveTo(e, t, n, i) {
      const s = new jd(this.currentPoint.clone(), new ee(e, t), new ee(n, i));
      return this.curves.push(s), this.currentPoint.set(n, i), this;
    }
    bezierCurveTo(e, t, n, i, s, o) {
      const a = new Kd(this.currentPoint.clone(), new ee(e, t), new ee(n, i), new ee(s, o));
      return this.curves.push(a), this.currentPoint.set(s, o), this;
    }
    splineThru(e) {
      const t = [
        this.currentPoint.clone()
      ].concat(e), n = new Zd(t);
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
      const c = new Mu(e, t, n, i, s, o, a, l);
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
  class ma extends Dc {
    constructor(e) {
      super(e), this.uuid = An(), this.type = "Shape", this.holes = [];
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
        this.holes.push(new Dc().fromJSON(i));
      }
      return this;
    }
  }
  const O_ = {
    triangulate: function(r, e, t = 2) {
      const n = e && e.length, i = n ? e[0] * t : r.length;
      let s = Jd(r, 0, i, t, true);
      const o = [];
      if (!s || s.next === s.prev) return o;
      let a, l, c, u, h, f, d;
      if (n && (s = V_(r, e, s, t)), r.length > 80 * t) {
        a = c = r[0], l = u = r[1];
        for (let _ = t; _ < i; _ += t) h = r[_], f = r[_ + 1], h < a && (a = h), f < l && (l = f), h > c && (c = h), f > u && (u = f);
        d = Math.max(c - a, u - l), d = d !== 0 ? 32767 / d : 0;
      }
      return uo(s, o, t, a, l, d, 0), o;
    }
  };
  function Jd(r, e, t, n, i) {
    let s, o;
    if (i === J_(r, e, t, n) > 0) for (s = e; s < t; s += n) o = of(s, r[s], r[s + 1], o);
    else for (s = t - n; s >= e; s -= n) o = of(s, r[s], r[s + 1], o);
    return o && za(o, o.next) && (fo(o), o = o.next), o;
  }
  function Mr(r, e) {
    if (!r) return r;
    e || (e = r);
    let t = r, n;
    do
      if (n = false, !t.steiner && (za(t, t.next) || xt(t.prev, t, t.next) === 0)) {
        if (fo(t), t = e = t.prev, t === t.next) break;
        n = true;
      } else t = t.next;
    while (n || t !== e);
    return e;
  }
  function uo(r, e, t, n, i, s, o) {
    if (!r) return;
    !o && s && q_(r, n, i, s);
    let a = r, l, c;
    for (; r.prev !== r.next; ) {
      if (l = r.prev, c = r.next, s ? B_(r, n, i, s) : F_(r)) {
        e.push(l.i / t | 0), e.push(r.i / t | 0), e.push(c.i / t | 0), fo(r), r = c.next, a = c.next;
        continue;
      }
      if (r = c, r === a) {
        o ? o === 1 ? (r = z_(Mr(r), e, t), uo(r, e, t, n, i, s, 2)) : o === 2 && k_(r, e, t, n, i, s) : uo(Mr(r), e, t, n, i, s, 1);
        break;
      }
    }
  }
  function F_(r) {
    const e = r.prev, t = r, n = r.next;
    if (xt(e, t, n) >= 0) return false;
    const i = e.x, s = t.x, o = n.x, a = e.y, l = t.y, c = n.y, u = i < s ? i < o ? i : o : s < o ? s : o, h = a < l ? a < c ? a : c : l < c ? l : c, f = i > s ? i > o ? i : o : s > o ? s : o, d = a > l ? a > c ? a : c : l > c ? l : c;
    let _ = n.next;
    for (; _ !== e; ) {
      if (_.x >= u && _.x <= f && _.y >= h && _.y <= d && Kr(i, a, s, l, o, c, _.x, _.y) && xt(_.prev, _, _.next) >= 0) return false;
      _ = _.next;
    }
    return true;
  }
  function B_(r, e, t, n) {
    const i = r.prev, s = r, o = r.next;
    if (xt(i, s, o) >= 0) return false;
    const a = i.x, l = s.x, c = o.x, u = i.y, h = s.y, f = o.y, d = a < l ? a < c ? a : c : l < c ? l : c, _ = u < h ? u < f ? u : f : h < f ? h : f, g = a > l ? a > c ? a : c : l > c ? l : c, m = u > h ? u > f ? u : f : h > f ? h : f, p = Ic(d, _, e, t, n), y = Ic(g, m, e, t, n);
    let v = r.prevZ, x = r.nextZ;
    for (; v && v.z >= p && x && x.z <= y; ) {
      if (v.x >= d && v.x <= g && v.y >= _ && v.y <= m && v !== i && v !== o && Kr(a, u, l, h, c, f, v.x, v.y) && xt(v.prev, v, v.next) >= 0 || (v = v.prevZ, x.x >= d && x.x <= g && x.y >= _ && x.y <= m && x !== i && x !== o && Kr(a, u, l, h, c, f, x.x, x.y) && xt(x.prev, x, x.next) >= 0)) return false;
      x = x.nextZ;
    }
    for (; v && v.z >= p; ) {
      if (v.x >= d && v.x <= g && v.y >= _ && v.y <= m && v !== i && v !== o && Kr(a, u, l, h, c, f, v.x, v.y) && xt(v.prev, v, v.next) >= 0) return false;
      v = v.prevZ;
    }
    for (; x && x.z <= y; ) {
      if (x.x >= d && x.x <= g && x.y >= _ && x.y <= m && x !== i && x !== o && Kr(a, u, l, h, c, f, x.x, x.y) && xt(x.prev, x, x.next) >= 0) return false;
      x = x.nextZ;
    }
    return true;
  }
  function z_(r, e, t) {
    let n = r;
    do {
      const i = n.prev, s = n.next.next;
      !za(i, s) && Qd(i, n, n.next, s) && ho(i, s) && ho(s, i) && (e.push(i.i / t | 0), e.push(n.i / t | 0), e.push(s.i / t | 0), fo(n), fo(n.next), n = r = s), n = n.next;
    } while (n !== r);
    return Mr(n);
  }
  function k_(r, e, t, n, i, s) {
    let o = r;
    do {
      let a = o.next.next;
      for (; a !== o.prev; ) {
        if (o.i !== a.i && $_(o, a)) {
          let l = ep(o, a);
          o = Mr(o, o.next), l = Mr(l, l.next), uo(o, e, t, n, i, s, 0), uo(l, e, t, n, i, s, 0);
          return;
        }
        a = a.next;
      }
      o = o.next;
    } while (o !== r);
  }
  function V_(r, e, t, n) {
    const i = [];
    let s, o, a, l, c;
    for (s = 0, o = e.length; s < o; s++) a = e[s] * n, l = s < o - 1 ? e[s + 1] * n : r.length, c = Jd(r, a, l, n, false), c === c.next && (c.steiner = true), i.push(K_(c));
    for (i.sort(H_), s = 0; s < i.length; s++) t = G_(i[s], t);
    return t;
  }
  function H_(r, e) {
    return r.x - e.x;
  }
  function G_(r, e) {
    const t = W_(r, e);
    if (!t) return e;
    const n = ep(t, r);
    return Mr(n, n.next), Mr(t, t.next);
  }
  function W_(r, e) {
    let t = e, n = -1 / 0, i;
    const s = r.x, o = r.y;
    do {
      if (o <= t.y && o >= t.next.y && t.next.y !== t.y) {
        const f = t.x + (o - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
        if (f <= s && f > n && (n = f, i = t.x < t.next.x ? t : t.next, f === s)) return i;
      }
      t = t.next;
    } while (t !== e);
    if (!i) return null;
    const a = i, l = i.x, c = i.y;
    let u = 1 / 0, h;
    t = i;
    do
      s >= t.x && t.x >= l && s !== t.x && Kr(o < c ? s : n, o, l, c, o < c ? n : s, o, t.x, t.y) && (h = Math.abs(o - t.y) / (s - t.x), ho(t, r) && (h < u || h === u && (t.x > i.x || t.x === i.x && X_(i, t))) && (i = t, u = h)), t = t.next;
    while (t !== a);
    return i;
  }
  function X_(r, e) {
    return xt(r.prev, r, e.prev) < 0 && xt(e.next, r, r.next) < 0;
  }
  function q_(r, e, t, n) {
    let i = r;
    do
      i.z === 0 && (i.z = Ic(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
    while (i !== r);
    i.prevZ.nextZ = null, i.prevZ = null, Y_(i);
  }
  function Y_(r) {
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
  function Ic(r, e, t, n, i) {
    return r = (r - t) * i | 0, e = (e - n) * i | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1;
  }
  function K_(r) {
    let e = r, t = r;
    do
      (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
    while (e !== r);
    return t;
  }
  function Kr(r, e, t, n, i, s, o, a) {
    return (i - o) * (e - a) >= (r - o) * (s - a) && (r - o) * (n - a) >= (t - o) * (e - a) && (t - o) * (s - a) >= (i - o) * (n - a);
  }
  function $_(r, e) {
    return r.next.i !== e.i && r.prev.i !== e.i && !j_(r, e) && (ho(r, e) && ho(e, r) && Z_(r, e) && (xt(r.prev, r, e.prev) || xt(r, e.prev, e)) || za(r, e) && xt(r.prev, r, r.next) > 0 && xt(e.prev, e, e.next) > 0);
  }
  function xt(r, e, t) {
    return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
  }
  function za(r, e) {
    return r.x === e.x && r.y === e.y;
  }
  function Qd(r, e, t, n) {
    const i = ta(xt(r, e, t)), s = ta(xt(r, e, n)), o = ta(xt(t, n, r)), a = ta(xt(t, n, e));
    return !!(i !== s && o !== a || i === 0 && ea(r, t, e) || s === 0 && ea(r, n, e) || o === 0 && ea(t, r, n) || a === 0 && ea(t, e, n));
  }
  function ea(r, e, t) {
    return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y);
  }
  function ta(r) {
    return r > 0 ? 1 : r < 0 ? -1 : 0;
  }
  function j_(r, e) {
    let t = r;
    do {
      if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && Qd(t, t.next, r, e)) return true;
      t = t.next;
    } while (t !== r);
    return false;
  }
  function ho(r, e) {
    return xt(r.prev, r, r.next) < 0 ? xt(r, e, r.next) >= 0 && xt(r, r.prev, e) >= 0 : xt(r, e, r.prev) < 0 || xt(r, r.next, e) < 0;
  }
  function Z_(r, e) {
    let t = r, n = false;
    const i = (r.x + e.x) / 2, s = (r.y + e.y) / 2;
    do
      t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
    while (t !== r);
    return n;
  }
  function ep(r, e) {
    const t = new Nc(r.i, r.x, r.y), n = new Nc(e.i, e.x, e.y), i = r.next, s = e.prev;
    return r.next = e, e.prev = r, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
  }
  function of(r, e, t, n) {
    const i = new Nc(r, e, t);
    return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
  }
  function fo(r) {
    r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
  }
  function Nc(r, e, t) {
    this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
  function J_(r, e, t, n) {
    let i = 0;
    for (let s = e, o = t - n; s < t; s += n) i += (r[o] - r[s]) * (r[s + 1] + r[o + 1]), o = s;
    return i;
  }
  class ts {
    static area(e) {
      const t = e.length;
      let n = 0;
      for (let i = t - 1, s = 0; s < t; i = s++) n += e[i].x * e[s].y - e[s].x * e[i].y;
      return n * 0.5;
    }
    static isClockWise(e) {
      return ts.area(e) < 0;
    }
    static triangulateShape(e, t) {
      const n = [], i = [], s = [];
      af(e), lf(n, e);
      let o = e.length;
      t.forEach(af);
      for (let l = 0; l < t.length; l++) i.push(o), o += t[l].length, lf(n, t[l]);
      const a = O_.triangulate(n, i);
      for (let l = 0; l < a.length; l += 3) s.push(a.slice(l, l + 3));
      return s;
    }
  }
  function af(r) {
    const e = r.length;
    e > 2 && r[e - 1].equals(r[0]) && r.pop();
  }
  function lf(r, e) {
    for (let t = 0; t < e.length; t++) r.push(e[t].x), r.push(e[t].y);
  }
  class Eu extends cn {
    constructor(e = new ma([
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
      this.setAttribute("position", new Ot(i, 3)), this.setAttribute("uv", new Ot(s, 2)), this.computeVertexNormals();
      function o(a) {
        const l = [], c = t.curveSegments !== void 0 ? t.curveSegments : 12, u = t.steps !== void 0 ? t.steps : 1, h = t.depth !== void 0 ? t.depth : 1;
        let f = t.bevelEnabled !== void 0 ? t.bevelEnabled : true, d = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, _ = t.bevelSize !== void 0 ? t.bevelSize : d - 0.1, g = t.bevelOffset !== void 0 ? t.bevelOffset : 0, m = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
        const p = t.extrudePath, y = t.UVGenerator !== void 0 ? t.UVGenerator : Q_;
        let v, x = false, b, w, A, P;
        p && (v = p.getSpacedPoints(u), x = true, f = false, b = p.computeFrenetFrames(u, false), w = new D(), A = new D(), P = new D()), f || (m = 0, d = 0, _ = 0, g = 0);
        const S = a.extractPoints(c);
        let M = S.shape;
        const L = S.holes;
        if (!ts.isClockWise(M)) {
          M = M.reverse();
          for (let Q = 0, J = L.length; Q < J; Q++) {
            const C = L[Q];
            ts.isClockWise(C) && (L[Q] = C.reverse());
          }
        }
        const O = ts.triangulateShape(M, L), V = M;
        for (let Q = 0, J = L.length; Q < J; Q++) {
          const C = L[Q];
          M = M.concat(C);
        }
        function q(Q, J, C) {
          return J || console.error("THREE.ExtrudeGeometry: vec does not exist"), Q.clone().addScaledVector(J, C);
        }
        const B = M.length, $ = O.length;
        function H(Q, J, C) {
          let be, te, xe;
          const se = Q.x - J.x, Ie = Q.y - J.y, de = C.x - Q.x, R = C.y - Q.y, T = se * se + Ie * Ie, F = se * R - Ie * de;
          if (Math.abs(F) > Number.EPSILON) {
            const Y = Math.sqrt(T), Z = Math.sqrt(de * de + R * R), K = J.x - Ie / Y, Ee = J.y + se / Y, ue = C.x - R / Z, _e = C.y + de / Z, We = ((ue - K) * R - (_e - Ee) * de) / (se * R - Ie * de);
            be = K + se * We - Q.x, te = Ee + Ie * We - Q.y;
            const re = be * be + te * te;
            if (re <= 2) return new ee(be, te);
            xe = Math.sqrt(re / 2);
          } else {
            let Y = false;
            se > Number.EPSILON ? de > Number.EPSILON && (Y = true) : se < -Number.EPSILON ? de < -Number.EPSILON && (Y = true) : Math.sign(Ie) === Math.sign(R) && (Y = true), Y ? (be = -Ie, te = se, xe = Math.sqrt(T)) : (be = se, te = Ie, xe = Math.sqrt(T / 2));
          }
          return new ee(be / xe, te / xe);
        }
        const oe = [];
        for (let Q = 0, J = V.length, C = J - 1, be = Q + 1; Q < J; Q++, C++, be++) C === J && (C = 0), be === J && (be = 0), oe[Q] = H(V[Q], V[C], V[be]);
        const ce = [];
        let ge, Le = oe.concat();
        for (let Q = 0, J = L.length; Q < J; Q++) {
          const C = L[Q];
          ge = [];
          for (let be = 0, te = C.length, xe = te - 1, se = be + 1; be < te; be++, xe++, se++) xe === te && (xe = 0), se === te && (se = 0), ge[be] = H(C[be], C[xe], C[se]);
          ce.push(ge), Le = Le.concat(ge);
        }
        for (let Q = 0; Q < m; Q++) {
          const J = Q / m, C = d * Math.cos(J * Math.PI / 2), be = _ * Math.sin(J * Math.PI / 2) + g;
          for (let te = 0, xe = V.length; te < xe; te++) {
            const se = q(V[te], oe[te], be);
            ae(se.x, se.y, -C);
          }
          for (let te = 0, xe = L.length; te < xe; te++) {
            const se = L[te];
            ge = ce[te];
            for (let Ie = 0, de = se.length; Ie < de; Ie++) {
              const R = q(se[Ie], ge[Ie], be);
              ae(R.x, R.y, -C);
            }
          }
        }
        const Ke = _ + g;
        for (let Q = 0; Q < B; Q++) {
          const J = f ? q(M[Q], Le[Q], Ke) : M[Q];
          x ? (A.copy(b.normals[0]).multiplyScalar(J.x), w.copy(b.binormals[0]).multiplyScalar(J.y), P.copy(v[0]).add(A).add(w), ae(P.x, P.y, P.z)) : ae(J.x, J.y, 0);
        }
        for (let Q = 1; Q <= u; Q++) for (let J = 0; J < B; J++) {
          const C = f ? q(M[J], Le[J], Ke) : M[J];
          x ? (A.copy(b.normals[Q]).multiplyScalar(C.x), w.copy(b.binormals[Q]).multiplyScalar(C.y), P.copy(v[Q]).add(A).add(w), ae(P.x, P.y, P.z)) : ae(C.x, C.y, h / u * Q);
        }
        for (let Q = m - 1; Q >= 0; Q--) {
          const J = Q / m, C = d * Math.cos(J * Math.PI / 2), be = _ * Math.sin(J * Math.PI / 2) + g;
          for (let te = 0, xe = V.length; te < xe; te++) {
            const se = q(V[te], oe[te], be);
            ae(se.x, se.y, h + C);
          }
          for (let te = 0, xe = L.length; te < xe; te++) {
            const se = L[te];
            ge = ce[te];
            for (let Ie = 0, de = se.length; Ie < de; Ie++) {
              const R = q(se[Ie], ge[Ie], be);
              x ? ae(R.x, R.y + v[u - 1].y, v[u - 1].x + C) : ae(R.x, R.y, h + C);
            }
          }
        }
        X(), ie();
        function X() {
          const Q = i.length / 3;
          if (f) {
            let J = 0, C = B * J;
            for (let be = 0; be < $; be++) {
              const te = O[be];
              Ae(te[2] + C, te[1] + C, te[0] + C);
            }
            J = u + m * 2, C = B * J;
            for (let be = 0; be < $; be++) {
              const te = O[be];
              Ae(te[0] + C, te[1] + C, te[2] + C);
            }
          } else {
            for (let J = 0; J < $; J++) {
              const C = O[J];
              Ae(C[2], C[1], C[0]);
            }
            for (let J = 0; J < $; J++) {
              const C = O[J];
              Ae(C[0] + B * u, C[1] + B * u, C[2] + B * u);
            }
          }
          n.addGroup(Q, i.length / 3 - Q, 0);
        }
        function ie() {
          const Q = i.length / 3;
          let J = 0;
          Te(V, J), J += V.length;
          for (let C = 0, be = L.length; C < be; C++) {
            const te = L[C];
            Te(te, J), J += te.length;
          }
          n.addGroup(Q, i.length / 3 - Q, 1);
        }
        function Te(Q, J) {
          let C = Q.length;
          for (; --C >= 0; ) {
            const be = C;
            let te = C - 1;
            te < 0 && (te = Q.length - 1);
            for (let xe = 0, se = u + m * 2; xe < se; xe++) {
              const Ie = B * xe, de = B * (xe + 1), R = J + be + Ie, T = J + te + Ie, F = J + te + de, Y = J + be + de;
              $e(R, T, F, Y);
            }
          }
        }
        function ae(Q, J, C) {
          l.push(Q), l.push(J), l.push(C);
        }
        function Ae(Q, J, C) {
          we(Q), we(J), we(C);
          const be = i.length / 3, te = y.generateTopUV(n, i, be - 3, be - 2, be - 1);
          Qe(te[0]), Qe(te[1]), Qe(te[2]);
        }
        function $e(Q, J, C, be) {
          we(Q), we(J), we(be), we(J), we(C), we(be);
          const te = i.length / 3, xe = y.generateSideWallUV(n, i, te - 6, te - 3, te - 2, te - 1);
          Qe(xe[0]), Qe(xe[1]), Qe(xe[3]), Qe(xe[1]), Qe(xe[2]), Qe(xe[3]);
        }
        function we(Q) {
          i.push(l[Q * 3 + 0]), i.push(l[Q * 3 + 1]), i.push(l[Q * 3 + 2]);
        }
        function Qe(Q) {
          s.push(Q.x), s.push(Q.y);
        }
      }
    }
    copy(e) {
      return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
    }
    toJSON() {
      const e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
      return e0(t, n, e);
    }
    static fromJSON(e, t) {
      const n = [];
      for (let s = 0, o = e.shapes.length; s < o; s++) {
        const a = t[e.shapes[s]];
        n.push(a);
      }
      const i = e.options.extrudePath;
      return i !== void 0 && (e.options.extrudePath = new Lc[i.type]().fromJSON(i)), new Eu(n, e.options);
    }
  }
  const Q_ = {
    generateTopUV: function(r, e, t, n, i) {
      const s = e[t * 3], o = e[t * 3 + 1], a = e[n * 3], l = e[n * 3 + 1], c = e[i * 3], u = e[i * 3 + 1];
      return [
        new ee(s, o),
        new ee(a, l),
        new ee(c, u)
      ];
    },
    generateSideWallUV: function(r, e, t, n, i, s) {
      const o = e[t * 3], a = e[t * 3 + 1], l = e[t * 3 + 2], c = e[n * 3], u = e[n * 3 + 1], h = e[n * 3 + 2], f = e[i * 3], d = e[i * 3 + 1], _ = e[i * 3 + 2], g = e[s * 3], m = e[s * 3 + 1], p = e[s * 3 + 2];
      return Math.abs(a - u) < Math.abs(o - c) ? [
        new ee(o, 1 - l),
        new ee(c, 1 - h),
        new ee(f, 1 - _),
        new ee(g, 1 - p)
      ] : [
        new ee(a, 1 - l),
        new ee(u, 1 - h),
        new ee(d, 1 - _),
        new ee(m, 1 - p)
      ];
    }
  };
  function e0(r, e, t) {
    if (t.shapes = [], Array.isArray(r)) for (let n = 0, i = r.length; n < i; n++) {
      const s = r[n];
      t.shapes.push(s.uuid);
    }
    else t.shapes.push(r.uuid);
    return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
  }
  class To extends cn {
    constructor(e = 1, t = 1, n = 1, i = 1) {
      super(), this.type = "PlaneGeometry", this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i
      };
      const s = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(i), c = a + 1, u = l + 1, h = e / a, f = t / l, d = [], _ = [], g = [], m = [];
      for (let p = 0; p < u; p++) {
        const y = p * f - o;
        for (let v = 0; v < c; v++) {
          const x = v * h - s;
          _.push(x, -y, 0), g.push(0, 0, 1), m.push(v / a), m.push(1 - p / l);
        }
      }
      for (let p = 0; p < l; p++) for (let y = 0; y < a; y++) {
        const v = y + c * p, x = y + c * (p + 1), b = y + 1 + c * (p + 1), w = y + 1 + c * p;
        d.push(v, x, w), d.push(x, b, w);
      }
      this.setIndex(d), this.setAttribute("position", new Ot(_, 3)), this.setAttribute("normal", new Ot(g, 3)), this.setAttribute("uv", new Ot(m, 2));
    }
    copy(e) {
      return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
    }
    static fromJSON(e) {
      return new To(e.width, e.height, e.widthSegments, e.heightSegments);
    }
  }
  class bu extends cn {
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
      const u = [], h = new D(), f = new D(), d = [], _ = [], g = [], m = [];
      for (let p = 0; p <= n; p++) {
        const y = [], v = p / n;
        let x = 0;
        p === 0 && o === 0 ? x = 0.5 / t : p === n && l === Math.PI && (x = -0.5 / t);
        for (let b = 0; b <= t; b++) {
          const w = b / t;
          h.x = -e * Math.cos(i + w * s) * Math.sin(o + v * a), h.y = e * Math.cos(o + v * a), h.z = e * Math.sin(i + w * s) * Math.sin(o + v * a), _.push(h.x, h.y, h.z), f.copy(h).normalize(), g.push(f.x, f.y, f.z), m.push(w + x, 1 - v), y.push(c++);
        }
        u.push(y);
      }
      for (let p = 0; p < n; p++) for (let y = 0; y < t; y++) {
        const v = u[p][y + 1], x = u[p][y], b = u[p + 1][y], w = u[p + 1][y + 1];
        (p !== 0 || o > 0) && d.push(v, x, w), (p !== n - 1 || l < Math.PI) && d.push(x, b, w);
      }
      this.setIndex(d), this.setAttribute("position", new Ot(_, 3)), this.setAttribute("normal", new Ot(g, 3)), this.setAttribute("uv", new Ot(m, 2));
    }
    copy(e) {
      return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
    }
    static fromJSON(e) {
      return new bu(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
    }
  }
  class Eo extends Wn {
    constructor(e) {
      super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = {
        STANDARD: ""
      }, this.color = new Re(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Re(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Dd, this.normalScale = new ee(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Fn(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.defines = {
        STANDARD: ""
      }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
    }
  }
  class jn extends Eo {
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
      ], this.iridescenceThicknessMap = null, this.sheenColor = new Re(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Re(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Re(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
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
  class t0 extends Wn {
    constructor(e) {
      super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = hg, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
    }
  }
  class n0 extends Wn {
    constructor(e) {
      super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
    }
  }
  function na(r, e, t) {
    return !r || !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
  }
  function i0(r) {
    return ArrayBuffer.isView(r) && !(r instanceof DataView);
  }
  function r0(r) {
    function e(i, s) {
      return r[i] - r[s];
    }
    const t = r.length, n = new Array(t);
    for (let i = 0; i !== t; ++i) n[i] = i;
    return n.sort(e), n;
  }
  function cf(r, e, t) {
    const n = r.length, i = new r.constructor(n);
    for (let s = 0, o = 0; o !== n; ++s) {
      const a = t[s] * e;
      for (let l = 0; l !== e; ++l) i[o++] = r[a + l];
    }
    return i;
  }
  function tp(r, e, t, n) {
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
  class bo {
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
  class s0 extends bo {
    constructor(e, t, n, i) {
      super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
        endingStart: Sh,
        endingEnd: Sh
      };
    }
    intervalChanged_(e, t, n) {
      const i = this.parameterPositions;
      let s = e - 2, o = e + 1, a = i[s], l = i[o];
      if (a === void 0) switch (this.getSettings_().endingStart) {
        case Mh:
          s = e, a = 2 * t - n;
          break;
        case Th:
          s = i.length - 2, a = t + i[s] - i[s + 1];
          break;
        default:
          s = e, a = n;
      }
      if (l === void 0) switch (this.getSettings_().endingEnd) {
        case Mh:
          o = e, l = 2 * n - t;
          break;
        case Th:
          o = 1, l = n + i[1] - i[0];
          break;
        default:
          o = e - 1, l = t;
      }
      const c = (n - t) * 0.5, u = this.valueSize;
      this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = s * u, this._offsetNext = o * u;
    }
    interpolate_(e, t, n, i) {
      const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = this._offsetPrev, h = this._offsetNext, f = this._weightPrev, d = this._weightNext, _ = (n - t) / (i - t), g = _ * _, m = g * _, p = -f * m + 2 * f * g - f * _, y = (1 + f) * m + (-1.5 - 2 * f) * g + (-0.5 + f) * _ + 1, v = (-1 - d) * m + (1.5 + d) * g + 0.5 * _, x = d * m - d * g;
      for (let b = 0; b !== a; ++b) s[b] = p * o[u + b] + y * o[c + b] + v * o[l + b] + x * o[h + b];
      return s;
    }
  }
  class o0 extends bo {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e, t, n, i) {
      const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = (n - t) / (i - t), h = 1 - u;
      for (let f = 0; f !== a; ++f) s[f] = o[c + f] * h + o[l + f] * u;
      return s;
    }
  }
  class a0 extends bo {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e) {
      return this.copySampleValue_(e - 1);
    }
  }
  class Zn {
    constructor(e, t, n, i) {
      if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
      this.name = e, this.times = na(t, this.TimeBufferType), this.values = na(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
    }
    static toJSON(e) {
      const t = e.constructor;
      let n;
      if (t.toJSON !== this.toJSON) n = t.toJSON(e);
      else {
        n = {
          name: e.name,
          times: na(e.times, Array),
          values: na(e.values, Array)
        };
        const i = e.getInterpolation();
        i !== e.DefaultInterpolation && (n.interpolation = i);
      }
      return n.type = e.ValueTypeName, n;
    }
    InterpolantFactoryMethodDiscrete(e) {
      return new a0(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodLinear(e) {
      return new o0(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodSmooth(e) {
      return new s0(this.times, this.values, this.getValueSize(), e);
    }
    setInterpolation(e) {
      let t;
      switch (e) {
        case ao:
          t = this.InterpolantFactoryMethodDiscrete;
          break;
        case lo:
          t = this.InterpolantFactoryMethodLinear;
          break;
        case $a:
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
          return ao;
        case this.InterpolantFactoryMethodLinear:
          return lo;
        case this.InterpolantFactoryMethodSmooth:
          return $a;
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
      if (i !== void 0 && i0(i)) for (let a = 0, l = i.length; a !== l; ++a) {
        const c = i[a];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), e = false;
          break;
        }
      }
      return e;
    }
    optimize() {
      const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === $a, s = e.length - 1;
      let o = 1;
      for (let a = 1; a < s; ++a) {
        let l = false;
        const c = e[a], u = e[a + 1];
        if (c !== u && (a !== 1 || c !== e[0])) if (i) l = true;
        else {
          const h = a * n, f = h - n, d = h + n;
          for (let _ = 0; _ !== n; ++_) {
            const g = t[h + _];
            if (g !== t[f + _] || g !== t[d + _]) {
              l = true;
              break;
            }
          }
        }
        if (l) {
          if (a !== o) {
            e[o] = e[a];
            const h = a * n, f = o * n;
            for (let d = 0; d !== n; ++d) t[f + d] = t[h + d];
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
  Zn.prototype.TimeBufferType = Float32Array;
  Zn.prototype.ValueBufferType = Float32Array;
  Zn.prototype.DefaultInterpolation = lo;
  class Rs extends Zn {
    constructor(e, t, n) {
      super(e, t, n);
    }
  }
  Rs.prototype.ValueTypeName = "bool";
  Rs.prototype.ValueBufferType = Array;
  Rs.prototype.DefaultInterpolation = ao;
  Rs.prototype.InterpolantFactoryMethodLinear = void 0;
  Rs.prototype.InterpolantFactoryMethodSmooth = void 0;
  class np extends Zn {
  }
  np.prototype.ValueTypeName = "color";
  class gs extends Zn {
  }
  gs.prototype.ValueTypeName = "number";
  class l0 extends bo {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e, t, n, i) {
      const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (n - t) / (i - t);
      let c = e * a;
      for (let u = c + a; c !== u; c += 4) Wi.slerpFlat(s, 0, o, c - a, o, c, l);
      return s;
    }
  }
  class _s extends Zn {
    InterpolantFactoryMethodLinear(e) {
      return new l0(this.times, this.values, this.getValueSize(), e);
    }
  }
  _s.prototype.ValueTypeName = "quaternion";
  _s.prototype.InterpolantFactoryMethodSmooth = void 0;
  class Cs extends Zn {
    constructor(e, t, n) {
      super(e, t, n);
    }
  }
  Cs.prototype.ValueTypeName = "string";
  Cs.prototype.ValueBufferType = Array;
  Cs.prototype.DefaultInterpolation = ao;
  Cs.prototype.InterpolantFactoryMethodLinear = void 0;
  Cs.prototype.InterpolantFactoryMethodSmooth = void 0;
  class xs extends Zn {
  }
  xs.prototype.ValueTypeName = "vector";
  class c0 {
    constructor(e = "", t = -1, n = [], i = cg) {
      this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = An(), this.duration < 0 && this.resetDuration();
    }
    static parse(e) {
      const t = [], n = e.tracks, i = 1 / (e.fps || 1);
      for (let o = 0, a = n.length; o !== a; ++o) t.push(h0(n[o]).scale(i));
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
      for (let s = 0, o = n.length; s !== o; ++s) t.push(Zn.toJSON(n[s]));
      return i;
    }
    static CreateFromMorphTargetSequence(e, t, n, i) {
      const s = t.length, o = [];
      for (let a = 0; a < s; a++) {
        let l = [], c = [];
        l.push((a + s - 1) % s, a, (a + 1) % s), c.push(0, 1, 0);
        const u = r0(l);
        l = cf(l, 1, u), c = cf(c, 1, u), !i && l[0] === 0 && (l.push(s), c.push(c[0])), o.push(new gs(".morphTargetInfluences[" + t[a].name + "]", l, c).scale(1 / n));
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
          let f = i[h];
          f || (i[h] = f = []), f.push(c);
        }
      }
      const o = [];
      for (const a in i) o.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
      return o;
    }
    static parseAnimation(e, t) {
      if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
      const n = function(h, f, d, _, g) {
        if (d.length !== 0) {
          const m = [], p = [];
          tp(d, m, p, _), m.length !== 0 && g.push(new h(f, m, p));
        }
      }, i = [], s = e.name || "default", o = e.fps || 30, a = e.blendMode;
      let l = e.length || -1;
      const c = e.hierarchy || [];
      for (let h = 0; h < c.length; h++) {
        const f = c[h].keys;
        if (!(!f || f.length === 0)) if (f[0].morphTargets) {
          const d = {};
          let _;
          for (_ = 0; _ < f.length; _++) if (f[_].morphTargets) for (let g = 0; g < f[_].morphTargets.length; g++) d[f[_].morphTargets[g]] = -1;
          for (const g in d) {
            const m = [], p = [];
            for (let y = 0; y !== f[_].morphTargets.length; ++y) {
              const v = f[_];
              m.push(v.time), p.push(v.morphTarget === g ? 1 : 0);
            }
            i.push(new gs(".morphTargetInfluence[" + g + "]", m, p));
          }
          l = d.length * o;
        } else {
          const d = ".bones[" + t[h].name + "]";
          n(xs, d + ".position", f, "pos", i), n(_s, d + ".quaternion", f, "rot", i), n(xs, d + ".scale", f, "scl", i);
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
  function u0(r) {
    switch (r.toLowerCase()) {
      case "scalar":
      case "double":
      case "float":
      case "number":
      case "integer":
        return gs;
      case "vector":
      case "vector2":
      case "vector3":
      case "vector4":
        return xs;
      case "color":
        return np;
      case "quaternion":
        return _s;
      case "bool":
      case "boolean":
        return Rs;
      case "string":
        return Cs;
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
  }
  function h0(r) {
    if (r.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const e = u0(r.type);
    if (r.times === void 0) {
      const t = [], n = [];
      tp(r.keys, t, n, "value"), r.times = t, r.values = n;
    }
    return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
  }
  const Ui = {
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
  class f0 {
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
        for (let h = 0, f = c.length; h < f; h += 2) {
          const d = c[h], _ = c[h + 1];
          if (d.global && (d.lastIndex = 0), d.test(u)) return _;
        }
        return null;
      };
    }
  }
  const d0 = new f0();
  class br {
    constructor(e) {
      this.manager = e !== void 0 ? e : d0, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
  br.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  const ri = {};
  class p0 extends Error {
    constructor(e, t) {
      super(e), this.response = t;
    }
  }
  class wu extends br {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
      const s = Ui.get(e);
      if (s !== void 0) return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
      if (ri[e] !== void 0) {
        ri[e].push({
          onLoad: t,
          onProgress: n,
          onError: i
        });
        return;
      }
      ri[e] = [], ri[e].push({
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
          const u = ri[e], h = c.body.getReader(), f = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), d = f ? parseInt(f) : 0, _ = d !== 0;
          let g = 0;
          const m = new ReadableStream({
            start(p) {
              y();
              function y() {
                h.read().then(({ done: v, value: x }) => {
                  if (v) p.close();
                  else {
                    g += x.byteLength;
                    const b = new ProgressEvent("progress", {
                      lengthComputable: _,
                      loaded: g,
                      total: d
                    });
                    for (let w = 0, A = u.length; w < A; w++) {
                      const P = u[w];
                      P.onProgress && P.onProgress(b);
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
        } else throw new p0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
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
              const h = /charset="?([^;"\s]*)"?/i.exec(a), f = h && h[1] ? h[1].toLowerCase() : void 0, d = new TextDecoder(f);
              return c.arrayBuffer().then((_) => d.decode(_));
            }
        }
      }).then((c) => {
        Ui.add(e, c);
        const u = ri[e];
        delete ri[e];
        for (let h = 0, f = u.length; h < f; h++) {
          const d = u[h];
          d.onLoad && d.onLoad(c);
        }
      }).catch((c) => {
        const u = ri[e];
        if (u === void 0) throw this.manager.itemError(e), c;
        delete ri[e];
        for (let h = 0, f = u.length; h < f; h++) {
          const d = u[h];
          d.onError && d.onError(c);
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
  class m0 extends br {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
      const s = this, o = Ui.get(e);
      if (o !== void 0) return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
      const a = co("img");
      function l() {
        u(), Ui.add(e, this), t && t(this), s.manager.itemEnd(e);
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
  class g0 extends br {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      const s = new Ct(), o = new m0(this.manager);
      return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
        s.image = a, s.needsUpdate = true, t !== void 0 && t(s);
      }, n, i), s;
    }
  }
  class ka extends gt {
    constructor(e, t = 1) {
      super(), this.isLight = true, this.type = "Light", this.color = new Re(e), this.intensity = t;
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
  const Tl = new Fe(), uf = new D(), hf = new D();
  class Au {
    constructor(e) {
      this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ee(512, 512), this.map = null, this.mapPass = null, this.matrix = new Fe(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new vu(), this._frameExtents = new ee(1, 1), this._viewportCount = 1, this._viewports = [
        new et(0, 0, 1, 1)
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
      uf.setFromMatrixPosition(e.matrixWorld), t.position.copy(uf), hf.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(hf), t.updateMatrixWorld(), Tl.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Tl), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(Tl);
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
  class _0 extends Au {
    constructor() {
      super(new $t(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1;
    }
    updateMatrices(e) {
      const t = this.camera, n = ps * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
      (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
    }
    copy(e) {
      return super.copy(e), this.focus = e.focus, this;
    }
  }
  class x0 extends ka {
    constructor(e, t, n = 0, i = Math.PI / 3, s = 0, o = 2) {
      super(e, t), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(gt.DEFAULT_UP), this.updateMatrix(), this.target = new gt(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = o, this.map = null, this.shadow = new _0();
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
  const ff = new Fe(), zs = new D(), El = new D();
  class v0 extends Au {
    constructor() {
      super(new $t(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new ee(4, 2), this._viewportCount = 6, this._viewports = [
        new et(2, 1, 1, 1),
        new et(0, 1, 1, 1),
        new et(3, 1, 1, 1),
        new et(1, 1, 1, 1),
        new et(3, 0, 1, 1),
        new et(1, 0, 1, 1)
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
      s !== n.far && (n.far = s, n.updateProjectionMatrix()), zs.setFromMatrixPosition(e.matrixWorld), n.position.copy(zs), El.copy(n.position), El.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(El), n.updateMatrixWorld(), i.makeTranslation(-zs.x, -zs.y, -zs.z), ff.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ff);
    }
  }
  class Ru extends ka {
    constructor(e, t, n = 0, i = 2) {
      super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new v0();
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
  class Va extends Vd {
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
  class y0 extends Au {
    constructor() {
      super(new Va(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
    }
  }
  class Ca extends ka {
    constructor(e, t) {
      super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(gt.DEFAULT_UP), this.updateMatrix(), this.target = new gt(), this.shadow = new y0();
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e) {
      return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
    }
  }
  class ip extends ka {
    constructor(e, t) {
      super(e, t), this.isAmbientLight = true, this.type = "AmbientLight";
    }
  }
  class Js {
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
  class S0 extends br {
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
      const s = this, o = Ui.get(e);
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
        return Ui.add(e, c), t && t(c), s.manager.itemEnd(e), c;
      }).catch(function(c) {
        i && i(c), Ui.remove(e), s.manager.itemError(e), s.manager.itemEnd(e);
      });
      Ui.add(e, l), s.manager.itemStart(e);
    }
  }
  class M0 extends $t {
    constructor(e = []) {
      super(), this.isArrayCamera = true, this.cameras = e, this.index = 0;
    }
  }
  class T0 {
    constructor(e = true) {
      this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
    }
    start() {
      this.startTime = df(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
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
        const t = df();
        e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
      }
      return e;
    }
  }
  function df() {
    return performance.now();
  }
  const Cu = "\\[\\]\\.:\\/", E0 = new RegExp("[" + Cu + "]", "g"), Pu = "[^" + Cu + "]", b0 = "[^" + Cu.replace("\\.", "") + "]", w0 = /((?:WC+[\/:])*)/.source.replace("WC", Pu), A0 = /(WCOD+)?/.source.replace("WCOD", b0), R0 = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Pu), C0 = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Pu), P0 = new RegExp("^" + w0 + A0 + R0 + C0 + "$"), L0 = [
    "material",
    "materials",
    "bones",
    "map"
  ];
  class D0 {
    constructor(e, t, n) {
      const i = n || ot.parseTrackName(t);
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
  class ot {
    constructor(e, t, n) {
      this.path = t, this.parsedPath = n || ot.parseTrackName(t), this.node = ot.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(e, t, n) {
      return e && e.isAnimationObjectGroup ? new ot.Composite(e, t, n) : new ot(e, t, n);
    }
    static sanitizeNodeName(e) {
      return e.replace(/\s/g, "_").replace(E0, "");
    }
    static parseTrackName(e) {
      const t = P0.exec(e);
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
        L0.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
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
      if (e || (e = ot.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
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
  ot.Composite = D0;
  ot.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
  };
  ot.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
  };
  ot.prototype.GetterByBindingType = [
    ot.prototype._getValue_direct,
    ot.prototype._getValue_array,
    ot.prototype._getValue_arrayElement,
    ot.prototype._getValue_toArray
  ];
  ot.prototype.SetterByBindingTypeAndVersioning = [
    [
      ot.prototype._setValue_direct,
      ot.prototype._setValue_direct_setNeedsUpdate,
      ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate
    ],
    [
      ot.prototype._setValue_array,
      ot.prototype._setValue_array_setNeedsUpdate,
      ot.prototype._setValue_array_setMatrixWorldNeedsUpdate
    ],
    [
      ot.prototype._setValue_arrayElement,
      ot.prototype._setValue_arrayElement_setNeedsUpdate,
      ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
    ],
    [
      ot.prototype._setValue_fromArray,
      ot.prototype._setValue_fromArray_setNeedsUpdate,
      ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
    ]
  ];
  const pf = new Fe();
  class wr {
    constructor(e, t, n = 0, i = 1 / 0) {
      this.ray = new Mo(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new gu(), this.params = {
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
      return pf.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(pf), this;
    }
    intersectObject(e, t = true, n = []) {
      return Uc(e, this, n, t), n.sort(mf), n;
    }
    intersectObjects(e, t = true, n = []) {
      for (let i = 0, s = e.length; i < s; i++) Uc(e[i], this, n, t);
      return n.sort(mf), n;
    }
  }
  function mf(r, e) {
    return r.distance - e.distance;
  }
  function Uc(r, e, t, n) {
    let i = true;
    if (r.layers.test(e.layers) && r.raycast(e, t) === false && (i = false), i === true && n === true) {
      const s = r.children;
      for (let o = 0, a = s.length; o < a; o++) Uc(s[o], e, t, true);
    }
  }
  class I0 {
    constructor() {
      this.type = "ShapePath", this.color = new Re(), this.subPaths = [], this.currentPath = null;
    }
    moveTo(e, t) {
      return this.currentPath = new Dc(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
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
          const b = p[v], w = new ma();
          w.curves = b.curves, y.push(w);
        }
        return y;
      }
      function n(p, y) {
        const v = y.length;
        let x = false;
        for (let b = v - 1, w = 0; w < v; b = w++) {
          let A = y[b], P = y[w], S = P.x - A.x, M = P.y - A.y;
          if (Math.abs(M) > Number.EPSILON) {
            if (M < 0 && (A = y[w], S = -S, P = y[b], M = -M), p.y < A.y || p.y > P.y) continue;
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
      const i = ts.isClockWise, s = this.subPaths;
      if (s.length === 0) return [];
      let o, a, l;
      const c = [];
      if (s.length === 1) return a = s[0], l = new ma(), l.curves = a.curves, c.push(l), c;
      let u = !i(s[0].getPoints());
      u = e ? !u : u;
      const h = [], f = [];
      let d = [], _ = 0, g;
      f[_] = void 0, d[_] = [];
      for (let p = 0, y = s.length; p < y; p++) a = s[p], g = a.getPoints(), o = i(g), o = e ? !o : o, o ? (!u && f[_] && _++, f[_] = {
        s: new ma(),
        p: g
      }, f[_].s.curves = a.curves, u && _++, d[_] = []) : d[_].push({
        h: a,
        p: g[0]
      });
      if (!f[0]) return t(s);
      if (f.length > 1) {
        let p = false, y = 0;
        for (let v = 0, x = f.length; v < x; v++) h[v] = [];
        for (let v = 0, x = f.length; v < x; v++) {
          const b = d[v];
          for (let w = 0; w < b.length; w++) {
            const A = b[w];
            let P = true;
            for (let S = 0; S < f.length; S++) n(A.p, f[S].p) && (v !== S && y++, P ? (P = false, h[S].push(A)) : p = true);
            P && h[v].push(A);
          }
        }
        y > 0 && p === false && (d = h);
      }
      let m;
      for (let p = 0, y = f.length; p < y; p++) {
        l = f[p].s, c.push(l), m = d[p];
        for (let v = 0, x = m.length; v < x; v++) l.holes.push(m[v].h);
      }
      return c;
    }
  }
  function gf(r, e, t, n) {
    const i = N0(n);
    switch (t) {
      case bd:
        return r * e;
      case Ad:
        return r * e;
      case Rd:
        return r * e * 2;
      case hu:
        return r * e / i.components * i.byteLength;
      case fu:
        return r * e / i.components * i.byteLength;
      case Cd:
        return r * e * 2 / i.components * i.byteLength;
      case du:
        return r * e * 2 / i.components * i.byteLength;
      case wd:
        return r * e * 3 / i.components * i.byteLength;
      case bn:
        return r * e * 4 / i.components * i.byteLength;
      case pu:
        return r * e * 4 / i.components * i.byteLength;
      case ua:
      case ha:
        return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
      case fa:
      case da:
        return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
      case nc:
      case rc:
        return Math.max(r, 16) * Math.max(e, 8) / 4;
      case tc:
      case ic:
        return Math.max(r, 8) * Math.max(e, 8) / 2;
      case sc:
      case oc:
        return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
      case ac:
        return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
      case lc:
        return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
      case cc:
        return Math.floor((r + 4) / 5) * Math.floor((e + 3) / 4) * 16;
      case uc:
        return Math.floor((r + 4) / 5) * Math.floor((e + 4) / 5) * 16;
      case hc:
        return Math.floor((r + 5) / 6) * Math.floor((e + 4) / 5) * 16;
      case fc:
        return Math.floor((r + 5) / 6) * Math.floor((e + 5) / 6) * 16;
      case dc:
        return Math.floor((r + 7) / 8) * Math.floor((e + 4) / 5) * 16;
      case pc:
        return Math.floor((r + 7) / 8) * Math.floor((e + 5) / 6) * 16;
      case mc:
        return Math.floor((r + 7) / 8) * Math.floor((e + 7) / 8) * 16;
      case gc:
        return Math.floor((r + 9) / 10) * Math.floor((e + 4) / 5) * 16;
      case _c:
        return Math.floor((r + 9) / 10) * Math.floor((e + 5) / 6) * 16;
      case xc:
        return Math.floor((r + 9) / 10) * Math.floor((e + 7) / 8) * 16;
      case vc:
        return Math.floor((r + 9) / 10) * Math.floor((e + 9) / 10) * 16;
      case yc:
        return Math.floor((r + 11) / 12) * Math.floor((e + 9) / 10) * 16;
      case Sc:
        return Math.floor((r + 11) / 12) * Math.floor((e + 11) / 12) * 16;
      case pa:
      case Mc:
      case Tc:
        return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
      case Pd:
      case Ec:
        return Math.ceil(r / 4) * Math.ceil(e / 4) * 8;
      case bc:
      case wc:
        return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
    }
    throw new Error(`Unable to determine texture byte length for ${t} format.`);
  }
  function N0(r) {
    switch (r) {
      case Si:
      case Md:
        return {
          byteLength: 1,
          components: 1
        };
      case oo:
      case Td:
      case xi:
        return {
          byteLength: 2,
          components: 1
        };
      case cu:
      case uu:
        return {
          byteLength: 2,
          components: 4
        };
      case Sr:
      case lu:
      case Un:
        return {
          byteLength: 4,
          components: 1
        };
      case Ed:
        return {
          byteLength: 4,
          components: 3
        };
    }
    throw new Error(`Unknown texture type ${r}.`);
  }
  typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
      revision: au
    }
  }));
  typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = au);
  function rp() {
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
  function U0(r) {
    const e = /* @__PURE__ */ new WeakMap();
    function t(a, l) {
      const c = a.array, u = a.usage, h = c.byteLength, f = r.createBuffer();
      r.bindBuffer(l, f), r.bufferData(l, c, u), a.onUploadCallback();
      let d;
      if (c instanceof Float32Array) d = r.FLOAT;
      else if (c instanceof Uint16Array) a.isFloat16BufferAttribute ? d = r.HALF_FLOAT : d = r.UNSIGNED_SHORT;
      else if (c instanceof Int16Array) d = r.SHORT;
      else if (c instanceof Uint32Array) d = r.UNSIGNED_INT;
      else if (c instanceof Int32Array) d = r.INT;
      else if (c instanceof Int8Array) d = r.BYTE;
      else if (c instanceof Uint8Array) d = r.UNSIGNED_BYTE;
      else if (c instanceof Uint8ClampedArray) d = r.UNSIGNED_BYTE;
      else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
      return {
        buffer: f,
        type: d,
        bytesPerElement: c.BYTES_PER_ELEMENT,
        version: a.version,
        size: h
      };
    }
    function n(a, l, c) {
      const u = l.array, h = l.updateRanges;
      if (r.bindBuffer(c, a), h.length === 0) r.bufferSubData(c, 0, u);
      else {
        h.sort((d, _) => d.start - _.start);
        let f = 0;
        for (let d = 1; d < h.length; d++) {
          const _ = h[f], g = h[d];
          g.start <= _.start + _.count + 1 ? _.count = Math.max(_.count, g.start + g.count - _.start) : (++f, h[f] = g);
        }
        h.length = f + 1;
        for (let d = 0, _ = h.length; d < _; d++) {
          const g = h[d];
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
  var O0 = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, F0 = `#ifdef USE_ALPHAHASH
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
#endif`, B0 = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, z0 = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, k0 = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, V0 = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, H0 = `#ifdef USE_AOMAP
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
#endif`, G0 = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, W0 = `#ifdef USE_BATCHING
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
#endif`, X0 = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, q0 = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Y0 = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, K0 = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, $0 = `#ifdef USE_IRIDESCENCE
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
#endif`, j0 = `#ifdef USE_BUMPMAP
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
#endif`, Z0 = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, J0 = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Q0 = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, ex = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, tx = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, nx = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, ix = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, rx = `#if defined( USE_COLOR_ALPHA )
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
#endif`, sx = `#define PI 3.141592653589793
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
} // validated`, ox = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, ax = `vec3 transformedNormal = objectNormal;
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
#endif`, lx = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, cx = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, ux = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, hx = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, fx = "gl_FragColor = linearToOutputTexel( gl_FragColor );", dx = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, px = `#ifdef USE_ENVMAP
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
#endif`, mx = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, gx = `#ifdef USE_ENVMAP
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
#endif`, _x = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, xx = `#ifdef USE_ENVMAP
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
#endif`, vx = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, yx = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Sx = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Mx = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Tx = `#ifdef USE_GRADIENTMAP
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
}`, Ex = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, bx = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, wx = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Ax = `uniform bool receiveShadow;
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
#endif`, Rx = `#ifdef USE_ENVMAP
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
#endif`, Cx = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Px = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Lx = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Dx = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Ix = `PhysicalMaterial material;
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
#endif`, Nx = `struct PhysicalMaterial {
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
}`, Ux = `
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
#endif`, Ox = `#if defined( RE_IndirectDiffuse )
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
#endif`, Fx = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Bx = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, zx = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, kx = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Vx = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Hx = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Gx = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Wx = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Xx = `#if defined( USE_POINTS_UV )
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
#endif`, qx = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Yx = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Kx = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, $x = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, jx = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Zx = `#ifdef USE_MORPHTARGETS
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
#endif`, Jx = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Qx = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, ev = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, tv = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, nv = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, iv = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, rv = `#ifdef USE_NORMALMAP
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
#endif`, sv = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, ov = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, av = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, lv = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, cv = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, uv = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, hv = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, fv = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, dv = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, pv = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, mv = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, gv = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, _v = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, xv = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, vv = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, yv = `float getShadowMask() {
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
}`, Sv = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Mv = `#ifdef USE_SKINNING
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
#endif`, Tv = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Ev = `#ifdef USE_SKINNING
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
#endif`, bv = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, wv = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Av = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Rv = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Cv = `#ifdef USE_TRANSMISSION
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
#endif`, Pv = `#ifdef USE_TRANSMISSION
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
#endif`, Lv = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Dv = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Iv = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Nv = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
  const Uv = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Ov = `uniform sampler2D t2D;
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
}`, Fv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Bv = `#ifdef ENVMAP_TYPE_CUBE
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
}`, zv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, kv = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Vv = `#include <common>
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
}`, Hv = `#if DEPTH_PACKING == 3200
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
}`, Gv = `#define DISTANCE
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
}`, Wv = `#define DISTANCE
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
}`, Xv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, qv = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Yv = `uniform float scale;
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
}`, Kv = `uniform vec3 diffuse;
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
}`, $v = `#include <common>
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
}`, jv = `uniform vec3 diffuse;
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
}`, Zv = `#define LAMBERT
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
}`, Jv = `#define LAMBERT
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
}`, Qv = `#define MATCAP
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
}`, ey = `#define MATCAP
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
}`, ty = `#define NORMAL
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
}`, ny = `#define NORMAL
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
}`, iy = `#define PHONG
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
}`, ry = `#define PHONG
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
}`, sy = `#define STANDARD
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
}`, oy = `#define STANDARD
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
}`, ay = `#define TOON
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
}`, ly = `#define TOON
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
}`, cy = `uniform float size;
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
}`, uy = `uniform vec3 diffuse;
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
}`, hy = `#include <common>
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
}`, fy = `uniform vec3 color;
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
}`, dy = `uniform float rotation;
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
}`, py = `uniform vec3 diffuse;
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
    alphahash_fragment: O0,
    alphahash_pars_fragment: F0,
    alphamap_fragment: B0,
    alphamap_pars_fragment: z0,
    alphatest_fragment: k0,
    alphatest_pars_fragment: V0,
    aomap_fragment: H0,
    aomap_pars_fragment: G0,
    batching_pars_vertex: W0,
    batching_vertex: X0,
    begin_vertex: q0,
    beginnormal_vertex: Y0,
    bsdfs: K0,
    iridescence_fragment: $0,
    bumpmap_pars_fragment: j0,
    clipping_planes_fragment: Z0,
    clipping_planes_pars_fragment: J0,
    clipping_planes_pars_vertex: Q0,
    clipping_planes_vertex: ex,
    color_fragment: tx,
    color_pars_fragment: nx,
    color_pars_vertex: ix,
    color_vertex: rx,
    common: sx,
    cube_uv_reflection_fragment: ox,
    defaultnormal_vertex: ax,
    displacementmap_pars_vertex: lx,
    displacementmap_vertex: cx,
    emissivemap_fragment: ux,
    emissivemap_pars_fragment: hx,
    colorspace_fragment: fx,
    colorspace_pars_fragment: dx,
    envmap_fragment: px,
    envmap_common_pars_fragment: mx,
    envmap_pars_fragment: gx,
    envmap_pars_vertex: _x,
    envmap_physical_pars_fragment: Rx,
    envmap_vertex: xx,
    fog_vertex: vx,
    fog_pars_vertex: yx,
    fog_fragment: Sx,
    fog_pars_fragment: Mx,
    gradientmap_pars_fragment: Tx,
    lightmap_pars_fragment: Ex,
    lights_lambert_fragment: bx,
    lights_lambert_pars_fragment: wx,
    lights_pars_begin: Ax,
    lights_toon_fragment: Cx,
    lights_toon_pars_fragment: Px,
    lights_phong_fragment: Lx,
    lights_phong_pars_fragment: Dx,
    lights_physical_fragment: Ix,
    lights_physical_pars_fragment: Nx,
    lights_fragment_begin: Ux,
    lights_fragment_maps: Ox,
    lights_fragment_end: Fx,
    logdepthbuf_fragment: Bx,
    logdepthbuf_pars_fragment: zx,
    logdepthbuf_pars_vertex: kx,
    logdepthbuf_vertex: Vx,
    map_fragment: Hx,
    map_pars_fragment: Gx,
    map_particle_fragment: Wx,
    map_particle_pars_fragment: Xx,
    metalnessmap_fragment: qx,
    metalnessmap_pars_fragment: Yx,
    morphinstance_vertex: Kx,
    morphcolor_vertex: $x,
    morphnormal_vertex: jx,
    morphtarget_pars_vertex: Zx,
    morphtarget_vertex: Jx,
    normal_fragment_begin: Qx,
    normal_fragment_maps: ev,
    normal_pars_fragment: tv,
    normal_pars_vertex: nv,
    normal_vertex: iv,
    normalmap_pars_fragment: rv,
    clearcoat_normal_fragment_begin: sv,
    clearcoat_normal_fragment_maps: ov,
    clearcoat_pars_fragment: av,
    iridescence_pars_fragment: lv,
    opaque_fragment: cv,
    packing: uv,
    premultiplied_alpha_fragment: hv,
    project_vertex: fv,
    dithering_fragment: dv,
    dithering_pars_fragment: pv,
    roughnessmap_fragment: mv,
    roughnessmap_pars_fragment: gv,
    shadowmap_pars_fragment: _v,
    shadowmap_pars_vertex: xv,
    shadowmap_vertex: vv,
    shadowmask_pars_fragment: yv,
    skinbase_vertex: Sv,
    skinning_pars_vertex: Mv,
    skinning_vertex: Tv,
    skinnormal_vertex: Ev,
    specularmap_fragment: bv,
    specularmap_pars_fragment: wv,
    tonemapping_fragment: Av,
    tonemapping_pars_fragment: Rv,
    transmission_fragment: Cv,
    transmission_pars_fragment: Pv,
    uv_pars_fragment: Lv,
    uv_pars_vertex: Dv,
    uv_vertex: Iv,
    worldpos_vertex: Nv,
    background_vert: Uv,
    background_frag: Ov,
    backgroundCube_vert: Fv,
    backgroundCube_frag: Bv,
    cube_vert: zv,
    cube_frag: kv,
    depth_vert: Vv,
    depth_frag: Hv,
    distanceRGBA_vert: Gv,
    distanceRGBA_frag: Wv,
    equirect_vert: Xv,
    equirect_frag: qv,
    linedashed_vert: Yv,
    linedashed_frag: Kv,
    meshbasic_vert: $v,
    meshbasic_frag: jv,
    meshlambert_vert: Zv,
    meshlambert_frag: Jv,
    meshmatcap_vert: Qv,
    meshmatcap_frag: ey,
    meshnormal_vert: ty,
    meshnormal_frag: ny,
    meshphong_vert: iy,
    meshphong_frag: ry,
    meshphysical_vert: sy,
    meshphysical_frag: oy,
    meshtoon_vert: ay,
    meshtoon_frag: ly,
    points_vert: cy,
    points_frag: uy,
    shadow_vert: hy,
    shadow_frag: fy,
    sprite_vert: dy,
    sprite_frag: py
  }, le = {
    common: {
      diffuse: {
        value: new Re(16777215)
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
        value: new Re(16777215)
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
        value: new Re(16777215)
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
        value: new Re(16777215)
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
  }, zn = {
    basic: {
      uniforms: Kt([
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
      uniforms: Kt([
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
            value: new Re(0)
          }
        }
      ]),
      vertexShader: Ve.meshlambert_vert,
      fragmentShader: Ve.meshlambert_frag
    },
    phong: {
      uniforms: Kt([
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
            value: new Re(0)
          },
          specular: {
            value: new Re(1118481)
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
      uniforms: Kt([
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
            value: new Re(0)
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
      uniforms: Kt([
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
            value: new Re(0)
          }
        }
      ]),
      vertexShader: Ve.meshtoon_vert,
      fragmentShader: Ve.meshtoon_frag
    },
    matcap: {
      uniforms: Kt([
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
      uniforms: Kt([
        le.points,
        le.fog
      ]),
      vertexShader: Ve.points_vert,
      fragmentShader: Ve.points_frag
    },
    dashed: {
      uniforms: Kt([
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
      uniforms: Kt([
        le.common,
        le.displacementmap
      ]),
      vertexShader: Ve.depth_vert,
      fragmentShader: Ve.depth_frag
    },
    normal: {
      uniforms: Kt([
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
      uniforms: Kt([
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
      uniforms: Kt([
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
      uniforms: Kt([
        le.lights,
        le.fog,
        {
          color: {
            value: new Re(0)
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
  zn.physical = {
    uniforms: Kt([
      zn.standard.uniforms,
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
          value: new Re(0)
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
          value: new Re(0)
        },
        specularColor: {
          value: new Re(1, 1, 1)
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
  const ia = {
    r: 0,
    b: 0,
    g: 0
  }, er = new Fn(), my = new Fe();
  function gy(r, e, t, n, i, s, o) {
    const a = new Re(0);
    let l = s === true ? 0 : 1, c, u, h = null, f = 0, d = null;
    function _(v) {
      let x = v.isScene === true ? v.background : null;
      return x && x.isTexture && (x = (v.backgroundBlurriness > 0 ? t : e).get(x)), x;
    }
    function g(v) {
      let x = false;
      const b = _(v);
      b === null ? p(a, l) : b && b.isColor && (p(b, 1), x = true);
      const w = r.xr.getEnvironmentBlendMode();
      w === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : w === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (r.autoClear || x) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil));
    }
    function m(v, x) {
      const b = _(x);
      b && (b.isCubeTexture || b.mapping === Ba) ? (u === void 0 && (u = new Rt(new Er(1, 1, 1), new Gt({
        name: "BackgroundCubeMaterial",
        uniforms: ms(zn.backgroundCube.uniforms),
        vertexShader: zn.backgroundCube.vertexShader,
        fragmentShader: zn.backgroundCube.fragmentShader,
        side: nn,
        depthTest: false,
        depthWrite: false,
        fog: false
      })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(w, A, P) {
        this.matrixWorld.copyPosition(P.matrixWorld);
      }, Object.defineProperty(u.material, "envMap", {
        get: function() {
          return this.uniforms.envMap.value;
        }
      }), i.update(u)), er.copy(x.backgroundRotation), er.x *= -1, er.y *= -1, er.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === false && (er.y *= -1, er.z *= -1), u.material.uniforms.envMap.value = b, u.material.uniforms.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === false ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = x.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(my.makeRotationFromEuler(er)), u.material.toneMapped = Ye.getTransfer(b.colorSpace) !== lt, (h !== b || f !== b.version || d !== r.toneMapping) && (u.material.needsUpdate = true, h = b, f = b.version, d = r.toneMapping), u.layers.enableAll(), v.unshift(u, u.geometry, u.material, 0, 0, null)) : b && b.isTexture && (c === void 0 && (c = new Rt(new To(2, 2), new Gt({
        name: "BackgroundMaterial",
        uniforms: ms(zn.background.uniforms),
        vertexShader: zn.background.vertexShader,
        fragmentShader: zn.background.fragmentShader,
        side: yi,
        depthTest: false,
        depthWrite: false,
        fog: false
      })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
        get: function() {
          return this.uniforms.t2D.value;
        }
      }), i.update(c)), c.material.uniforms.t2D.value = b, c.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, c.material.toneMapped = Ye.getTransfer(b.colorSpace) !== lt, b.matrixAutoUpdate === true && b.updateMatrix(), c.material.uniforms.uvTransform.value.copy(b.matrix), (h !== b || f !== b.version || d !== r.toneMapping) && (c.material.needsUpdate = true, h = b, f = b.version, d = r.toneMapping), c.layers.enableAll(), v.unshift(c, c.geometry, c.material, 0, 0, null));
    }
    function p(v, x) {
      v.getRGB(ia, kd(r)), n.buffers.color.setClear(ia.r, ia.g, ia.b, x, o);
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
  function _y(r, e) {
    const t = r.getParameter(r.MAX_VERTEX_ATTRIBS), n = {}, i = f(null);
    let s = i, o = false;
    function a(M, L, G, O, V) {
      let q = false;
      const B = h(O, G, L);
      s !== B && (s = B, c(s.object)), q = d(M, O, G, V), q && _(M, O, G, V), V !== null && e.update(V, r.ELEMENT_ARRAY_BUFFER), (q || o) && (o = false, x(M, L, G, O), V !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.get(V).buffer));
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
      return B === void 0 && (B = f(l()), q[O] = B), B;
    }
    function f(M) {
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
    function d(M, L, G, O) {
      const V = s.attributes, q = L.attributes;
      let B = 0;
      const $ = G.getAttributes();
      for (const H in $) if ($[H].location >= 0) {
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
      const $ = G.getAttributes();
      for (const H in $) if ($[H].location >= 0) {
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
      for (const $ in q) {
        const H = q[$];
        if (H.location >= 0) {
          let oe = V[$];
          if (oe === void 0 && ($ === "instanceMatrix" && M.instanceMatrix && (oe = M.instanceMatrix), $ === "instanceColor" && M.instanceColor && (oe = M.instanceColor)), oe !== void 0) {
            const ce = oe.normalized, ge = oe.itemSize, Le = e.get(oe);
            if (Le === void 0) continue;
            const Ke = Le.buffer, X = Le.type, ie = Le.bytesPerElement, Te = X === r.INT || X === r.UNSIGNED_INT || oe.gpuType === lu;
            if (oe.isInterleavedBufferAttribute) {
              const ae = oe.data, Ae = ae.stride, $e = oe.offset;
              if (ae.isInstancedInterleavedBuffer) {
                for (let we = 0; we < H.locationSize; we++) p(H.location + we, ae.meshPerAttribute);
                M.isInstancedMesh !== true && O._maxInstanceCount === void 0 && (O._maxInstanceCount = ae.meshPerAttribute * ae.count);
              } else for (let we = 0; we < H.locationSize; we++) m(H.location + we);
              r.bindBuffer(r.ARRAY_BUFFER, Ke);
              for (let we = 0; we < H.locationSize; we++) v(H.location + we, ge / H.locationSize, X, ce, Ae * ie, ($e + ge / H.locationSize * we) * ie, Te);
            } else {
              if (oe.isInstancedBufferAttribute) {
                for (let ae = 0; ae < H.locationSize; ae++) p(H.location + ae, oe.meshPerAttribute);
                M.isInstancedMesh !== true && O._maxInstanceCount === void 0 && (O._maxInstanceCount = oe.meshPerAttribute * oe.count);
              } else for (let ae = 0; ae < H.locationSize; ae++) m(H.location + ae);
              r.bindBuffer(r.ARRAY_BUFFER, Ke);
              for (let ae = 0; ae < H.locationSize; ae++) v(H.location + ae, ge / H.locationSize, X, ce, ge * ie, ge / H.locationSize * ae * ie, Te);
            }
          } else if (B !== void 0) {
            const ce = B[$];
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
    function b() {
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
    function w(M) {
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
      dispose: b,
      releaseStatesOfGeometry: w,
      releaseStatesOfProgram: A,
      initAttributes: g,
      enableAttribute: m,
      disableUnusedAttributes: y
    };
  }
  function xy(r, e, t) {
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
      let d = 0;
      for (let _ = 0; _ < h; _++) d += u[_];
      t.update(d, n, 1);
    }
    function l(c, u, h, f) {
      if (h === 0) return;
      const d = e.get("WEBGL_multi_draw");
      if (d === null) for (let _ = 0; _ < c.length; _++) o(c[_], u[_], f[_]);
      else {
        d.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, f, 0, h);
        let _ = 0;
        for (let g = 0; g < h; g++) _ += u[g] * f[g];
        t.update(_, n, 1);
      }
    }
    this.setMode = i, this.render = s, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l;
  }
  function vy(r, e, t, n) {
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
      return !(A !== bn && n.convert(A) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT));
    }
    function a(A) {
      const P = A === xi && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
      return !(A !== Si && n.convert(A) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE) && A !== Un && !P);
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
    const h = t.logarithmicDepthBuffer === true, f = t.reverseDepthBuffer === true && e.has("EXT_clip_control"), d = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), _ = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = r.getParameter(r.MAX_TEXTURE_SIZE), m = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), p = r.getParameter(r.MAX_VERTEX_ATTRIBS), y = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), v = r.getParameter(r.MAX_VARYING_VECTORS), x = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), b = _ > 0, w = r.getParameter(r.MAX_SAMPLES);
    return {
      isWebGL2: true,
      getMaxAnisotropy: s,
      getMaxPrecision: l,
      textureFormatReadable: o,
      textureTypeReadable: a,
      precision: c,
      logarithmicDepthBuffer: h,
      reverseDepthBuffer: f,
      maxTextures: d,
      maxVertexTextures: _,
      maxTextureSize: g,
      maxCubemapSize: m,
      maxAttributes: p,
      maxVertexUniforms: y,
      maxVaryings: v,
      maxFragmentUniforms: x,
      vertexTextures: b,
      maxSamples: w
    };
  }
  function yy(r) {
    const e = this;
    let t = null, n = 0, i = false, s = false;
    const o = new or(), a = new ze(), l = {
      value: null,
      needsUpdate: false
    };
    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, f) {
      const d = h.length !== 0 || f || n !== 0 || i;
      return i = f, n = h.length, d;
    }, this.beginShadows = function() {
      s = true, u(null);
    }, this.endShadows = function() {
      s = false;
    }, this.setGlobalState = function(h, f) {
      t = u(h, f, 0);
    }, this.setState = function(h, f, d) {
      const _ = h.clippingPlanes, g = h.clipIntersection, m = h.clipShadows, p = r.get(h);
      if (!i || _ === null || _.length === 0 || s && !m) s ? u(null) : c();
      else {
        const y = s ? 0 : n, v = y * 4;
        let x = p.clippingState || null;
        l.value = x, x = u(_, f, v, d);
        for (let b = 0; b !== v; ++b) x[b] = t[b];
        p.clippingState = x, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += y;
      }
    };
    function c() {
      l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
    }
    function u(h, f, d, _) {
      const g = h !== null ? h.length : 0;
      let m = null;
      if (g !== 0) {
        if (m = l.value, _ !== true || m === null) {
          const p = d + g * 4, y = f.matrixWorldInverse;
          a.getNormalMatrix(y), (m === null || m.length < p) && (m = new Float32Array(p));
          for (let v = 0, x = d; v !== g; ++v, x += 4) o.copy(h[v]).applyMatrix4(y, a), o.normal.toArray(m, x), m[x + 3] = o.constant;
        }
        l.value = m, l.needsUpdate = true;
      }
      return e.numPlanes = g, e.numIntersection = 0, m;
    }
  }
  function Sy(r) {
    let e = /* @__PURE__ */ new WeakMap();
    function t(o, a) {
      return a === Ql ? o.mapping = cs : a === ec && (o.mapping = us), o;
    }
    function n(o) {
      if (o && o.isTexture) {
        const a = o.mapping;
        if (a === Ql || a === ec) if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new c_(l.height);
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
  const $r = 4, _f = [
    0.125,
    0.215,
    0.35,
    0.446,
    0.526,
    0.582
  ], hr = 20, bl = new Va(), xf = new Re();
  let wl = null, Al = 0, Rl = 0, Cl = false;
  const ar = (1 + Math.sqrt(5)) / 2, Xr = 1 / ar, vf = [
    new D(-ar, Xr, 0),
    new D(ar, Xr, 0),
    new D(-Xr, 0, ar),
    new D(Xr, 0, ar),
    new D(0, ar, -Xr),
    new D(0, ar, Xr),
    new D(-1, 1, -1),
    new D(1, 1, -1),
    new D(-1, 1, 1),
    new D(1, 1, 1)
  ];
  class yf {
    constructor(e) {
      this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
    }
    fromScene(e, t = 0, n = 0.1, i = 100) {
      wl = this._renderer.getRenderTarget(), Al = this._renderer.getActiveCubeFace(), Rl = this._renderer.getActiveMipmapLevel(), Cl = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(256);
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
      this._cubemapMaterial === null && (this._cubemapMaterial = Tf(), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      this._equirectMaterial === null && (this._equirectMaterial = Mf(), this._compileMaterial(this._equirectMaterial));
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
      this._renderer.setRenderTarget(wl, Al, Rl), this._renderer.xr.enabled = Cl, e.scissorTest = false, ra(e, 0, 0, e.width, e.height);
    }
    _fromTexture(e, t) {
      e.mapping === cs || e.mapping === us ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), wl = this._renderer.getRenderTarget(), Al = this._renderer.getActiveCubeFace(), Rl = this._renderer.getActiveMipmapLevel(), Cl = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
      const n = t || this._allocateTargets();
      return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
    }
    _allocateTargets() {
      const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
        magFilter: mn,
        minFilter: mn,
        generateMipmaps: false,
        type: xi,
        format: bn,
        colorSpace: Qt,
        depthBuffer: false
      }, i = Sf(e, t, n);
      if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
        this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Sf(e, t, n);
        const { _lodMax: s } = this;
        ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = My(s)), this._blurMaterial = Ty(s, e, t);
      }
      return i;
    }
    _compileMaterial(e) {
      const t = new Rt(this._lodPlanes[0], e);
      this._renderer.compile(t, bl);
    }
    _sceneToCubeUV(e, t, n, i) {
      const a = new $t(90, 1, t, n), l = [
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
      ], u = this._renderer, h = u.autoClear, f = u.toneMapping;
      u.getClearColor(xf), u.toneMapping = zi, u.autoClear = false;
      const d = new Hn({
        name: "PMREM.Background",
        side: nn,
        depthWrite: false,
        depthTest: false
      }), _ = new Rt(new Er(), d);
      let g = false;
      const m = e.background;
      m ? m.isColor && (d.color.copy(m), e.background = null, g = true) : (d.color.copy(xf), g = true);
      for (let p = 0; p < 6; p++) {
        const y = p % 3;
        y === 0 ? (a.up.set(0, l[p], 0), a.lookAt(c[p], 0, 0)) : y === 1 ? (a.up.set(0, 0, l[p]), a.lookAt(0, c[p], 0)) : (a.up.set(0, l[p], 0), a.lookAt(0, 0, c[p]));
        const v = this._cubeSize;
        ra(i, y * v, p > 2 ? v : 0, v, v), u.setRenderTarget(i), g && u.render(_, a), u.render(e, a);
      }
      _.geometry.dispose(), _.material.dispose(), u.toneMapping = f, u.autoClear = h, e.background = m;
    }
    _textureToCubeUV(e, t) {
      const n = this._renderer, i = e.mapping === cs || e.mapping === us;
      i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Tf()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Mf());
      const s = i ? this._cubemapMaterial : this._equirectMaterial, o = new Rt(this._lodPlanes[0], s), a = s.uniforms;
      a.envMap.value = e;
      const l = this._cubeSize;
      ra(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, bl);
    }
    _applyPMREM(e) {
      const t = this._renderer, n = t.autoClear;
      t.autoClear = false;
      const i = this._lodPlanes.length;
      for (let s = 1; s < i; s++) {
        const o = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), a = vf[(i - s - 1) % vf.length];
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
      const u = 3, h = new Rt(this._lodPlanes[i], c), f = c.uniforms, d = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * hr - 1), g = s / _, m = isFinite(s) ? 1 + Math.floor(u * g) : hr;
      m > hr && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);
      const p = [];
      let y = 0;
      for (let A = 0; A < hr; ++A) {
        const P = A / g, S = Math.exp(-P * P / 2);
        p.push(S), A === 0 ? y += S : A < m && (y += 2 * S);
      }
      for (let A = 0; A < p.length; A++) p[A] = p[A] / y;
      f.envMap.value = e.texture, f.samples.value = m, f.weights.value = p, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a);
      const { _lodMax: v } = this;
      f.dTheta.value = _, f.mipInt.value = v - n;
      const x = this._sizeLods[i], b = 3 * x * (i > v - $r ? i - v + $r : 0), w = 4 * (this._cubeSize - x);
      ra(t, b, w, 3 * x, 2 * x), l.setRenderTarget(t), l.render(h, bl);
    }
  }
  function My(r) {
    const e = [], t = [], n = [];
    let i = r;
    const s = r - $r + 1 + _f.length;
    for (let o = 0; o < s; o++) {
      const a = Math.pow(2, i);
      t.push(a);
      let l = 1 / a;
      o > r - $r ? l = _f[o - r + $r - 1] : o === 0 && (l = 0), n.push(l);
      const c = 1 / (a - 2), u = -c, h = 1 + c, f = [
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
      ], d = 6, _ = 6, g = 3, m = 2, p = 1, y = new Float32Array(g * _ * d), v = new Float32Array(m * _ * d), x = new Float32Array(p * _ * d);
      for (let w = 0; w < d; w++) {
        const A = w % 3 * 2 / 3 - 1, P = w > 2 ? 0 : -1, S = [
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
        y.set(S, g * _ * w), v.set(f, m * _ * w);
        const M = [
          w,
          w,
          w,
          w,
          w,
          w
        ];
        x.set(M, p * _ * w);
      }
      const b = new cn();
      b.setAttribute("position", new Jt(y, g)), b.setAttribute("uv", new Jt(v, m)), b.setAttribute("faceIndex", new Jt(x, p)), e.push(b), i > $r && i--;
    }
    return {
      lodPlanes: e,
      sizeLods: t,
      sigmas: n
    };
  }
  function Sf(r, e, t) {
    const n = new On(r, e, t);
    return n.texture.mapping = Ba, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
  }
  function ra(r, e, t, n, i) {
    r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
  }
  function Ty(r, e, t) {
    const n = new Float32Array(hr), i = new D(0, 1, 0);
    return new Gt({
      name: "SphericalGaussianBlur",
      defines: {
        n: hr,
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
      vertexShader: Lu(),
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
      blending: _i,
      depthTest: false,
      depthWrite: false
    });
  }
  function Mf() {
    return new Gt({
      name: "EquirectangularToCubeUV",
      uniforms: {
        envMap: {
          value: null
        }
      },
      vertexShader: Lu(),
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
      blending: _i,
      depthTest: false,
      depthWrite: false
    });
  }
  function Tf() {
    return new Gt({
      name: "CubemapToCubeUV",
      uniforms: {
        envMap: {
          value: null
        },
        flipEnvMap: {
          value: -1
        }
      },
      vertexShader: Lu(),
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
      blending: _i,
      depthTest: false,
      depthWrite: false
    });
  }
  function Lu() {
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
  function Ey(r) {
    let e = /* @__PURE__ */ new WeakMap(), t = null;
    function n(a) {
      if (a && a.isTexture) {
        const l = a.mapping, c = l === Ql || l === ec, u = l === cs || l === us;
        if (c || u) {
          let h = e.get(a);
          const f = h !== void 0 ? h.texture.pmremVersion : 0;
          if (a.isRenderTargetTexture && a.pmremVersion !== f) return t === null && (t = new yf(r)), h = c ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h), h.texture.pmremVersion = a.pmremVersion, e.set(a, h), h.texture;
          if (h !== void 0) return h.texture;
          {
            const d = a.image;
            return c && d && d.height > 0 || u && d && i(d) ? (t === null && (t = new yf(r)), h = c ? t.fromEquirectangular(a) : t.fromCubemap(a), h.texture.pmremVersion = a.pmremVersion, e.set(a, h), a.addEventListener("dispose", s), h.texture) : null;
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
  function by(r) {
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
        return i === null && Yr("THREE.WebGLRenderer: " + n + " extension not supported."), i;
      }
    };
  }
  function wy(r, e, t, n) {
    const i = {}, s = /* @__PURE__ */ new WeakMap();
    function o(h) {
      const f = h.target;
      f.index !== null && e.remove(f.index);
      for (const _ in f.attributes) e.remove(f.attributes[_]);
      f.removeEventListener("dispose", o), delete i[f.id];
      const d = s.get(f);
      d && (e.remove(d), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === true && delete f._maxInstanceCount, t.memory.geometries--;
    }
    function a(h, f) {
      return i[f.id] === true || (f.addEventListener("dispose", o), i[f.id] = true, t.memory.geometries++), f;
    }
    function l(h) {
      const f = h.attributes;
      for (const d in f) e.update(f[d], r.ARRAY_BUFFER);
    }
    function c(h) {
      const f = [], d = h.index, _ = h.attributes.position;
      let g = 0;
      if (d !== null) {
        const y = d.array;
        g = d.version;
        for (let v = 0, x = y.length; v < x; v += 3) {
          const b = y[v + 0], w = y[v + 1], A = y[v + 2];
          f.push(b, w, w, A, A, b);
        }
      } else if (_ !== void 0) {
        const y = _.array;
        g = _.version;
        for (let v = 0, x = y.length / 3 - 1; v < x; v += 3) {
          const b = v + 0, w = v + 1, A = v + 2;
          f.push(b, w, w, A, A, b);
        }
      } else return;
      const m = new (Nd(f) ? zd : Bd)(f, 1);
      m.version = g;
      const p = s.get(h);
      p && e.remove(p), s.set(h, m);
    }
    function u(h) {
      const f = s.get(h);
      if (f) {
        const d = h.index;
        d !== null && f.version < d.version && c(h);
      } else c(h);
      return s.get(h);
    }
    return {
      get: a,
      update: l,
      getWireframeAttribute: u
    };
  }
  function Ay(r, e, t) {
    let n;
    function i(f) {
      n = f;
    }
    let s, o;
    function a(f) {
      s = f.type, o = f.bytesPerElement;
    }
    function l(f, d) {
      r.drawElements(n, d, s, f * o), t.update(d, n, 1);
    }
    function c(f, d, _) {
      _ !== 0 && (r.drawElementsInstanced(n, d, s, f * o, _), t.update(d, n, _));
    }
    function u(f, d, _) {
      if (_ === 0) return;
      e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, d, 0, s, f, 0, _);
      let m = 0;
      for (let p = 0; p < _; p++) m += d[p];
      t.update(m, n, 1);
    }
    function h(f, d, _, g) {
      if (_ === 0) return;
      const m = e.get("WEBGL_multi_draw");
      if (m === null) for (let p = 0; p < f.length; p++) c(f[p] / o, d[p], g[p]);
      else {
        m.multiDrawElementsInstancedWEBGL(n, d, 0, s, f, 0, g, 0, _);
        let p = 0;
        for (let y = 0; y < _; y++) p += d[y] * g[y];
        t.update(p, n, 1);
      }
    }
    this.setMode = i, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = h;
  }
  function Ry(r) {
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
  function Cy(r, e, t) {
    const n = /* @__PURE__ */ new WeakMap(), i = new et();
    function s(o, a, l) {
      const c = o.morphTargetInfluences, u = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, h = u !== void 0 ? u.length : 0;
      let f = n.get(a);
      if (f === void 0 || f.count !== h) {
        let S = function() {
          A.dispose(), n.delete(a), a.removeEventListener("dispose", S);
        };
        f !== void 0 && f.texture.dispose();
        const d = a.morphAttributes.position !== void 0, _ = a.morphAttributes.normal !== void 0, g = a.morphAttributes.color !== void 0, m = a.morphAttributes.position || [], p = a.morphAttributes.normal || [], y = a.morphAttributes.color || [];
        let v = 0;
        d === true && (v = 1), _ === true && (v = 2), g === true && (v = 3);
        let x = a.attributes.position.count * v, b = 1;
        x > e.maxTextureSize && (b = Math.ceil(x / e.maxTextureSize), x = e.maxTextureSize);
        const w = new Float32Array(x * b * 4 * h), A = new Od(w, x, b, h);
        A.type = Un, A.needsUpdate = true;
        const P = v * 4;
        for (let M = 0; M < h; M++) {
          const L = m[M], G = p[M], O = y[M], V = x * b * 4 * M;
          for (let q = 0; q < L.count; q++) {
            const B = q * P;
            d === true && (i.fromBufferAttribute(L, q), w[V + B + 0] = i.x, w[V + B + 1] = i.y, w[V + B + 2] = i.z, w[V + B + 3] = 0), _ === true && (i.fromBufferAttribute(G, q), w[V + B + 4] = i.x, w[V + B + 5] = i.y, w[V + B + 6] = i.z, w[V + B + 7] = 0), g === true && (i.fromBufferAttribute(O, q), w[V + B + 8] = i.x, w[V + B + 9] = i.y, w[V + B + 10] = i.z, w[V + B + 11] = O.itemSize === 4 ? i.w : 1);
          }
        }
        f = {
          count: h,
          texture: A,
          size: new ee(x, b)
        }, n.set(a, f), a.addEventListener("dispose", S);
      }
      if (o.isInstancedMesh === true && o.morphTexture !== null) l.getUniforms().setValue(r, "morphTexture", o.morphTexture, t);
      else {
        let d = 0;
        for (let g = 0; g < c.length; g++) d += c[g];
        const _ = a.morphTargetsRelative ? 1 : 1 - d;
        l.getUniforms().setValue(r, "morphTargetBaseInfluence", _), l.getUniforms().setValue(r, "morphTargetInfluences", c);
      }
      l.getUniforms().setValue(r, "morphTargetsTexture", f.texture, t), l.getUniforms().setValue(r, "morphTargetsTextureSize", f.size);
    }
    return {
      update: s
    };
  }
  function Py(r, e, t, n) {
    let i = /* @__PURE__ */ new WeakMap();
    function s(l) {
      const c = n.render.frame, u = l.geometry, h = e.get(l, u);
      if (i.get(h) !== c && (e.update(h), i.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === false && l.addEventListener("dispose", a), i.get(l) !== c && (t.update(l.instanceMatrix, r.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, r.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
        const f = l.skeleton;
        i.get(f) !== c && (f.update(), i.set(f, c));
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
  const sp = new Ct(), Ef = new Yd(1, 1), op = new Od(), ap = new Yg(), lp = new Hd(), bf = [], wf = [], Af = new Float32Array(16), Rf = new Float32Array(9), Cf = new Float32Array(4);
  function Ps(r, e, t) {
    const n = r[0];
    if (n <= 0 || n > 0) return r;
    const i = e * t;
    let s = bf[i];
    if (s === void 0 && (s = new Float32Array(i), bf[i] = s), e !== 0) {
      n.toArray(s, 0);
      for (let o = 1, a = 0; o !== e; ++o) a += t, r[o].toArray(s, a);
    }
    return s;
  }
  function Pt(r, e) {
    if (r.length !== e.length) return false;
    for (let t = 0, n = r.length; t < n; t++) if (r[t] !== e[t]) return false;
    return true;
  }
  function Lt(r, e) {
    for (let t = 0, n = e.length; t < n; t++) r[t] = e[t];
  }
  function Ha(r, e) {
    let t = wf[e];
    t === void 0 && (t = new Int32Array(e), wf[e] = t);
    for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
    return t;
  }
  function Ly(r, e) {
    const t = this.cache;
    t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
  }
  function Dy(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else {
      if (Pt(t, e)) return;
      r.uniform2fv(this.addr, e), Lt(t, e);
    }
  }
  function Iy(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
    else {
      if (Pt(t, e)) return;
      r.uniform3fv(this.addr, e), Lt(t, e);
    }
  }
  function Ny(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else {
      if (Pt(t, e)) return;
      r.uniform4fv(this.addr, e), Lt(t, e);
    }
  }
  function Uy(r, e) {
    const t = this.cache, n = e.elements;
    if (n === void 0) {
      if (Pt(t, e)) return;
      r.uniformMatrix2fv(this.addr, false, e), Lt(t, e);
    } else {
      if (Pt(t, n)) return;
      Cf.set(n), r.uniformMatrix2fv(this.addr, false, Cf), Lt(t, n);
    }
  }
  function Oy(r, e) {
    const t = this.cache, n = e.elements;
    if (n === void 0) {
      if (Pt(t, e)) return;
      r.uniformMatrix3fv(this.addr, false, e), Lt(t, e);
    } else {
      if (Pt(t, n)) return;
      Rf.set(n), r.uniformMatrix3fv(this.addr, false, Rf), Lt(t, n);
    }
  }
  function Fy(r, e) {
    const t = this.cache, n = e.elements;
    if (n === void 0) {
      if (Pt(t, e)) return;
      r.uniformMatrix4fv(this.addr, false, e), Lt(t, e);
    } else {
      if (Pt(t, n)) return;
      Af.set(n), r.uniformMatrix4fv(this.addr, false, Af), Lt(t, n);
    }
  }
  function By(r, e) {
    const t = this.cache;
    t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
  }
  function zy(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else {
      if (Pt(t, e)) return;
      r.uniform2iv(this.addr, e), Lt(t, e);
    }
  }
  function ky(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else {
      if (Pt(t, e)) return;
      r.uniform3iv(this.addr, e), Lt(t, e);
    }
  }
  function Vy(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else {
      if (Pt(t, e)) return;
      r.uniform4iv(this.addr, e), Lt(t, e);
    }
  }
  function Hy(r, e) {
    const t = this.cache;
    t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
  }
  function Gy(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else {
      if (Pt(t, e)) return;
      r.uniform2uiv(this.addr, e), Lt(t, e);
    }
  }
  function Wy(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else {
      if (Pt(t, e)) return;
      r.uniform3uiv(this.addr, e), Lt(t, e);
    }
  }
  function Xy(r, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else {
      if (Pt(t, e)) return;
      r.uniform4uiv(this.addr, e), Lt(t, e);
    }
  }
  function qy(r, e, t) {
    const n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i);
    let s;
    this.type === r.SAMPLER_2D_SHADOW ? (Ef.compareFunction = Id, s = Ef) : s = sp, t.setTexture2D(e || s, i);
  }
  function Yy(r, e, t) {
    const n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || ap, i);
  }
  function Ky(r, e, t) {
    const n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || lp, i);
  }
  function $y(r, e, t) {
    const n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || op, i);
  }
  function jy(r) {
    switch (r) {
      case 5126:
        return Ly;
      case 35664:
        return Dy;
      case 35665:
        return Iy;
      case 35666:
        return Ny;
      case 35674:
        return Uy;
      case 35675:
        return Oy;
      case 35676:
        return Fy;
      case 5124:
      case 35670:
        return By;
      case 35667:
      case 35671:
        return zy;
      case 35668:
      case 35672:
        return ky;
      case 35669:
      case 35673:
        return Vy;
      case 5125:
        return Hy;
      case 36294:
        return Gy;
      case 36295:
        return Wy;
      case 36296:
        return Xy;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return qy;
      case 35679:
      case 36299:
      case 36307:
        return Yy;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return Ky;
      case 36289:
      case 36303:
      case 36311:
      case 36292:
        return $y;
    }
  }
  function Zy(r, e) {
    r.uniform1fv(this.addr, e);
  }
  function Jy(r, e) {
    const t = Ps(e, this.size, 2);
    r.uniform2fv(this.addr, t);
  }
  function Qy(r, e) {
    const t = Ps(e, this.size, 3);
    r.uniform3fv(this.addr, t);
  }
  function eS(r, e) {
    const t = Ps(e, this.size, 4);
    r.uniform4fv(this.addr, t);
  }
  function tS(r, e) {
    const t = Ps(e, this.size, 4);
    r.uniformMatrix2fv(this.addr, false, t);
  }
  function nS(r, e) {
    const t = Ps(e, this.size, 9);
    r.uniformMatrix3fv(this.addr, false, t);
  }
  function iS(r, e) {
    const t = Ps(e, this.size, 16);
    r.uniformMatrix4fv(this.addr, false, t);
  }
  function rS(r, e) {
    r.uniform1iv(this.addr, e);
  }
  function sS(r, e) {
    r.uniform2iv(this.addr, e);
  }
  function oS(r, e) {
    r.uniform3iv(this.addr, e);
  }
  function aS(r, e) {
    r.uniform4iv(this.addr, e);
  }
  function lS(r, e) {
    r.uniform1uiv(this.addr, e);
  }
  function cS(r, e) {
    r.uniform2uiv(this.addr, e);
  }
  function uS(r, e) {
    r.uniform3uiv(this.addr, e);
  }
  function hS(r, e) {
    r.uniform4uiv(this.addr, e);
  }
  function fS(r, e, t) {
    const n = this.cache, i = e.length, s = Ha(t, i);
    Pt(n, s) || (r.uniform1iv(this.addr, s), Lt(n, s));
    for (let o = 0; o !== i; ++o) t.setTexture2D(e[o] || sp, s[o]);
  }
  function dS(r, e, t) {
    const n = this.cache, i = e.length, s = Ha(t, i);
    Pt(n, s) || (r.uniform1iv(this.addr, s), Lt(n, s));
    for (let o = 0; o !== i; ++o) t.setTexture3D(e[o] || ap, s[o]);
  }
  function pS(r, e, t) {
    const n = this.cache, i = e.length, s = Ha(t, i);
    Pt(n, s) || (r.uniform1iv(this.addr, s), Lt(n, s));
    for (let o = 0; o !== i; ++o) t.setTextureCube(e[o] || lp, s[o]);
  }
  function mS(r, e, t) {
    const n = this.cache, i = e.length, s = Ha(t, i);
    Pt(n, s) || (r.uniform1iv(this.addr, s), Lt(n, s));
    for (let o = 0; o !== i; ++o) t.setTexture2DArray(e[o] || op, s[o]);
  }
  function gS(r) {
    switch (r) {
      case 5126:
        return Zy;
      case 35664:
        return Jy;
      case 35665:
        return Qy;
      case 35666:
        return eS;
      case 35674:
        return tS;
      case 35675:
        return nS;
      case 35676:
        return iS;
      case 5124:
      case 35670:
        return rS;
      case 35667:
      case 35671:
        return sS;
      case 35668:
      case 35672:
        return oS;
      case 35669:
      case 35673:
        return aS;
      case 5125:
        return lS;
      case 36294:
        return cS;
      case 36295:
        return uS;
      case 36296:
        return hS;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return fS;
      case 35679:
      case 36299:
      case 36307:
        return dS;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return pS;
      case 36289:
      case 36303:
      case 36311:
      case 36292:
        return mS;
    }
  }
  class _S {
    constructor(e, t, n) {
      this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = jy(t.type);
    }
  }
  class xS {
    constructor(e, t, n) {
      this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = gS(t.type);
    }
  }
  class vS {
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
  const Pl = /(\w+)(\])?(\[|\.)?/g;
  function Pf(r, e) {
    r.seq.push(e), r.map[e.id] = e;
  }
  function yS(r, e, t) {
    const n = r.name, i = n.length;
    for (Pl.lastIndex = 0; ; ) {
      const s = Pl.exec(n), o = Pl.lastIndex;
      let a = s[1];
      const l = s[2] === "]", c = s[3];
      if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === i) {
        Pf(t, c === void 0 ? new _S(a, r, e) : new xS(a, r, e));
        break;
      } else {
        let h = t.map[a];
        h === void 0 && (h = new vS(a), Pf(t, h)), t = h;
      }
    }
  }
  class ga {
    constructor(e, t) {
      this.seq = [], this.map = {};
      const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
      for (let i = 0; i < n; ++i) {
        const s = e.getActiveUniform(t, i), o = e.getUniformLocation(t, s.name);
        yS(s, o, this);
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
  function Lf(r, e, t) {
    const n = r.createShader(e);
    return r.shaderSource(n, t), r.compileShader(n), n;
  }
  const SS = 37297;
  let MS = 0;
  function TS(r, e) {
    const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
    for (let o = i; o < s; o++) {
      const a = o + 1;
      n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
    }
    return n.join(`
`);
  }
  const Df = new ze();
  function ES(r) {
    Ye._getMatrix(Df, Ye.workingColorSpace, r);
    const e = `mat3( ${Df.elements.map((t) => t.toFixed(4))} )`;
    switch (Ye.getTransfer(r)) {
      case Ea:
        return [
          e,
          "LinearTransferOETF"
        ];
      case lt:
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
  function If(r, e, t) {
    const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim();
    if (n && i === "") return "";
    const s = /ERROR: 0:(\d+)/.exec(i);
    if (s) {
      const o = parseInt(s[1]);
      return t.toUpperCase() + `

` + i + `

` + TS(r.getShaderSource(e), o);
    } else return i;
  }
  function bS(r, e) {
    const t = ES(e);
    return [
      `vec4 ${r}( vec4 value ) {`,
      `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
      "}"
    ].join(`
`);
  }
  function wS(r, e) {
    let t;
    switch (e) {
      case tg:
        t = "Linear";
        break;
      case ng:
        t = "Reinhard";
        break;
      case ig:
        t = "Cineon";
        break;
      case rg:
        t = "ACESFilmic";
        break;
      case og:
        t = "AgX";
        break;
      case ag:
        t = "Neutral";
        break;
      case sg:
        t = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
    }
    return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
  }
  const sa = new D();
  function AS() {
    Ye.getLuminanceCoefficients(sa);
    const r = sa.x.toFixed(4), e = sa.y.toFixed(4), t = sa.z.toFixed(4);
    return [
      "float luminance( const in vec3 rgb ) {",
      `	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,
      "	return dot( weights, rgb );",
      "}"
    ].join(`
`);
  }
  function RS(r) {
    return [
      r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
      r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
    ].filter(Gs).join(`
`);
  }
  function CS(r) {
    const e = [];
    for (const t in r) {
      const n = r[t];
      n !== false && e.push("#define " + t + " " + n);
    }
    return e.join(`
`);
  }
  function PS(r, e) {
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
  function Gs(r) {
    return r !== "";
  }
  function Nf(r, e) {
    const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
    return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }
  function Uf(r, e) {
    return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
  }
  const LS = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function Oc(r) {
    return r.replace(LS, IS);
  }
  const DS = /* @__PURE__ */ new Map();
  function IS(r, e) {
    let t = Ve[e];
    if (t === void 0) {
      const n = DS.get(e);
      if (n !== void 0) t = Ve[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
      else throw new Error("Can not resolve #include <" + e + ">");
    }
    return Oc(t);
  }
  const NS = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function Of(r) {
    return r.replace(NS, US);
  }
  function US(r, e, t, n) {
    let i = "";
    for (let s = parseInt(e); s < parseInt(t); s++) i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
    return i;
  }
  function Ff(r) {
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
  function OS(r) {
    let e = "SHADOWMAP_TYPE_BASIC";
    return r.shadowMapType === xd ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === Nm ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === oi && (e = "SHADOWMAP_TYPE_VSM"), e;
  }
  function FS(r) {
    let e = "ENVMAP_TYPE_CUBE";
    if (r.envMap) switch (r.envMapMode) {
      case cs:
      case us:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Ba:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
    return e;
  }
  function BS(r) {
    let e = "ENVMAP_MODE_REFLECTION";
    if (r.envMap) switch (r.envMapMode) {
      case us:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
    return e;
  }
  function zS(r) {
    let e = "ENVMAP_BLENDING_NONE";
    if (r.envMap) switch (r.combine) {
      case vd:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Qm:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case eg:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
    return e;
  }
  function kS(r) {
    const e = r.envMapCubeUVHeight;
    if (e === null) return null;
    const t = Math.log2(e) - 2, n = 1 / e;
    return {
      texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
      texelHeight: n,
      maxMip: t
    };
  }
  function VS(r, e, t, n) {
    const i = r.getContext(), s = t.defines;
    let o = t.vertexShader, a = t.fragmentShader;
    const l = OS(t), c = FS(t), u = BS(t), h = zS(t), f = kS(t), d = RS(t), _ = CS(s), g = i.createProgram();
    let m, p, y = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
    t.isRawShaderMaterial ? (m = [
      "#define SHADER_TYPE " + t.shaderType,
      "#define SHADER_NAME " + t.shaderName,
      _
    ].filter(Gs).join(`
`), m.length > 0 && (m += `
`), p = [
      "#define SHADER_TYPE " + t.shaderType,
      "#define SHADER_NAME " + t.shaderName,
      _
    ].filter(Gs).join(`
`), p.length > 0 && (p += `
`)) : (m = [
      Ff(t),
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
    ].filter(Gs).join(`
`), p = [
      Ff(t),
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
      f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
      f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
      f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
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
      t.toneMapping !== zi ? "#define TONE_MAPPING" : "",
      t.toneMapping !== zi ? Ve.tonemapping_pars_fragment : "",
      t.toneMapping !== zi ? wS("toneMapping", t.toneMapping) : "",
      t.dithering ? "#define DITHERING" : "",
      t.opaque ? "#define OPAQUE" : "",
      Ve.colorspace_pars_fragment,
      bS("linearToOutputTexel", t.outputColorSpace),
      AS(),
      t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
      `
`
    ].filter(Gs).join(`
`)), o = Oc(o), o = Nf(o, t), o = Uf(o, t), a = Oc(a), a = Nf(a, t), a = Uf(a, t), o = Of(o), a = Of(a), t.isRawShaderMaterial !== true && (y = `#version 300 es
`, m = [
      d,
      "#define attribute in",
      "#define varying out",
      "#define texture2D texture"
    ].join(`
`) + `
` + m, p = [
      "#define varying in",
      t.glslVersion === bh ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
      t.glslVersion === bh ? "" : "#define gl_FragColor pc_fragColor",
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
    const v = y + m + o, x = y + p + a, b = Lf(i, i.VERTEX_SHADER, v), w = Lf(i, i.FRAGMENT_SHADER, x);
    i.attachShader(g, b), i.attachShader(g, w), t.index0AttributeName !== void 0 ? i.bindAttribLocation(g, 0, t.index0AttributeName) : t.morphTargets === true && i.bindAttribLocation(g, 0, "position"), i.linkProgram(g);
    function A(L) {
      if (r.debug.checkShaderErrors) {
        const G = i.getProgramInfoLog(g).trim(), O = i.getShaderInfoLog(b).trim(), V = i.getShaderInfoLog(w).trim();
        let q = true, B = true;
        if (i.getProgramParameter(g, i.LINK_STATUS) === false) if (q = false, typeof r.debug.onShaderError == "function") r.debug.onShaderError(i, g, b, w);
        else {
          const $ = If(i, b, "vertex"), H = If(i, w, "fragment");
          console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(g, i.VALIDATE_STATUS) + `

Material Name: ` + L.name + `
Material Type: ` + L.type + `

Program Info Log: ` + G + `
` + $ + `
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
      i.deleteShader(b), i.deleteShader(w), P = new ga(i, g), S = PS(i, g);
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
      return M === false && (M = i.getProgramParameter(g, SS)), M;
    }, this.destroy = function() {
      n.releaseStatesOfProgram(this), i.deleteProgram(g), this.program = void 0;
    }, this.type = t.shaderType, this.name = t.shaderName, this.id = MS++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = b, this.fragmentShader = w, this;
  }
  let HS = 0;
  class GS {
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
      return n === void 0 && (n = new WS(e), t.set(e, n)), n;
    }
  }
  class WS {
    constructor(e) {
      this.id = HS++, this.code = e, this.usedTimes = 0;
    }
  }
  function XS(r, e, t, n, i, s, o) {
    const a = new gu(), l = new GS(), c = /* @__PURE__ */ new Set(), u = [], h = i.logarithmicDepthBuffer, f = i.vertexTextures;
    let d = i.precision;
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
      const V = G.fog, q = O.geometry, B = S.isMeshStandardMaterial ? G.environment : null, $ = (S.isMeshStandardMaterial ? t : e).get(S.envMap || B), H = $ && $.mapping === Ba ? $.image.height : null, oe = _[S.type];
      S.precision !== null && (d = i.getMaxPrecision(S.precision), d !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", d, "instead."));
      const ce = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color, ge = ce !== void 0 ? ce.length : 0;
      let Le = 0;
      q.morphAttributes.position !== void 0 && (Le = 1), q.morphAttributes.normal !== void 0 && (Le = 2), q.morphAttributes.color !== void 0 && (Le = 3);
      let Ke, X, ie, Te;
      if (oe) {
        const rt = zn[oe];
        Ke = rt.vertexShader, X = rt.fragmentShader;
      } else Ke = S.vertexShader, X = S.fragmentShader, l.update(S), ie = l.getVertexShaderID(S), Te = l.getFragmentShaderID(S);
      const ae = r.getRenderTarget(), Ae = r.state.buffers.depth.getReversed(), $e = O.isInstancedMesh === true, we = O.isBatchedMesh === true, Qe = !!S.map, Q = !!S.matcap, J = !!$, C = !!S.aoMap, be = !!S.lightMap, te = !!S.bumpMap, xe = !!S.normalMap, se = !!S.displacementMap, Ie = !!S.emissiveMap, de = !!S.metalnessMap, R = !!S.roughnessMap, T = S.anisotropy > 0, F = S.clearcoat > 0, Y = S.dispersion > 0, Z = S.iridescence > 0, K = S.sheen > 0, Ee = S.transmission > 0, ue = T && !!S.anisotropyMap, _e = F && !!S.clearcoatMap, We = F && !!S.clearcoatNormalMap, re = F && !!S.clearcoatRoughnessMap, ye = Z && !!S.iridescenceMap, De = Z && !!S.iridescenceThicknessMap, Ne = K && !!S.sheenColorMap, Se = K && !!S.sheenRoughnessMap, qe = !!S.specularMap, ke = !!S.specularColorMap, ht = !!S.specularIntensityMap, I = Ee && !!S.transmissionMap, he = Ee && !!S.thicknessMap, W = !!S.gradientMap, j = !!S.alphaMap, me = S.alphaTest > 0, pe = !!S.alphaHash, Be = !!S.extensions;
      let yt = zi;
      S.toneMapped && (ae === null || ae.isXRRenderTarget === true) && (yt = r.toneMapping);
      const Bt = {
        shaderID: oe,
        shaderType: S.type,
        shaderName: S.name,
        vertexShader: Ke,
        fragmentShader: X,
        defines: S.defines,
        customVertexShaderID: ie,
        customFragmentShaderID: Te,
        isRawShaderMaterial: S.isRawShaderMaterial === true,
        glslVersion: S.glslVersion,
        precision: d,
        batching: we,
        batchingColor: we && O._colorsTexture !== null,
        instancing: $e,
        instancingColor: $e && O.instanceColor !== null,
        instancingMorph: $e && O.morphTexture !== null,
        supportsVertexTextures: f,
        outputColorSpace: ae === null ? r.outputColorSpace : ae.isXRRenderTarget === true ? ae.texture.colorSpace : Qt,
        alphaToCoverage: !!S.alphaToCoverage,
        map: Qe,
        matcap: Q,
        envMap: J,
        envMapMode: J && $.mapping,
        envMapCubeUVHeight: H,
        aoMap: C,
        lightMap: be,
        bumpMap: te,
        normalMap: xe,
        displacementMap: f && se,
        emissiveMap: Ie,
        normalMapObjectSpace: xe && S.normalMapType === dg,
        normalMapTangentSpace: xe && S.normalMapType === Dd,
        metalnessMap: de,
        roughnessMap: R,
        anisotropy: T,
        anisotropyMap: ue,
        clearcoat: F,
        clearcoatMap: _e,
        clearcoatNormalMap: We,
        clearcoatRoughnessMap: re,
        dispersion: Y,
        iridescence: Z,
        iridescenceMap: ye,
        iridescenceThicknessMap: De,
        sheen: K,
        sheenColorMap: Ne,
        sheenRoughnessMap: Se,
        specularMap: qe,
        specularColorMap: ke,
        specularIntensityMap: ht,
        transmission: Ee,
        transmissionMap: I,
        thicknessMap: he,
        gradientMap: W,
        opaque: S.transparent === false && S.blending === Jr && S.alphaToCoverage === false,
        alphaMap: j,
        alphaTest: me,
        alphaHash: pe,
        combine: S.combine,
        mapUv: Qe && g(S.map.channel),
        aoMapUv: C && g(S.aoMap.channel),
        lightMapUv: be && g(S.lightMap.channel),
        bumpMapUv: te && g(S.bumpMap.channel),
        normalMapUv: xe && g(S.normalMap.channel),
        displacementMapUv: se && g(S.displacementMap.channel),
        emissiveMapUv: Ie && g(S.emissiveMap.channel),
        metalnessMapUv: de && g(S.metalnessMap.channel),
        roughnessMapUv: R && g(S.roughnessMap.channel),
        anisotropyMapUv: ue && g(S.anisotropyMap.channel),
        clearcoatMapUv: _e && g(S.clearcoatMap.channel),
        clearcoatNormalMapUv: We && g(S.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: re && g(S.clearcoatRoughnessMap.channel),
        iridescenceMapUv: ye && g(S.iridescenceMap.channel),
        iridescenceThicknessMapUv: De && g(S.iridescenceThicknessMap.channel),
        sheenColorMapUv: Ne && g(S.sheenColorMap.channel),
        sheenRoughnessMapUv: Se && g(S.sheenRoughnessMap.channel),
        specularMapUv: qe && g(S.specularMap.channel),
        specularColorMapUv: ke && g(S.specularColorMap.channel),
        specularIntensityMapUv: ht && g(S.specularIntensityMap.channel),
        transmissionMapUv: I && g(S.transmissionMap.channel),
        thicknessMapUv: he && g(S.thicknessMap.channel),
        alphaMapUv: j && g(S.alphaMap.channel),
        vertexTangents: !!q.attributes.tangent && (xe || T),
        vertexColors: S.vertexColors,
        vertexAlphas: S.vertexColors === true && !!q.attributes.color && q.attributes.color.itemSize === 4,
        pointsUvs: O.isPoints === true && !!q.attributes.uv && (Qe || j),
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
        toneMapping: yt,
        decodeVideoTexture: Qe && S.map.isVideoTexture === true && Ye.getTransfer(S.map.colorSpace) === lt,
        decodeVideoTextureEmissive: Ie && S.emissiveMap.isVideoTexture === true && Ye.getTransfer(S.emissiveMap.colorSpace) === lt,
        premultipliedAlpha: S.premultipliedAlpha,
        doubleSided: S.side === kn,
        flipSided: S.side === nn,
        useDepthPacking: S.depthPacking >= 0,
        depthPacking: S.depthPacking || 0,
        index0AttributeName: S.index0AttributeName,
        extensionClipCullDistance: Be && S.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"),
        extensionMultiDraw: (Be && S.extensions.multiDraw === true || we) && n.has("WEBGL_multi_draw"),
        rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
        customProgramCacheKey: S.customProgramCacheKey()
      };
      return Bt.vertexUv1s = c.has(1), Bt.vertexUv2s = c.has(2), Bt.vertexUv3s = c.has(3), c.clear(), Bt;
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
        const G = zn[M];
        L = wa.clone(G.uniforms);
      } else L = S.uniforms;
      return L;
    }
    function b(S, M) {
      let L;
      for (let G = 0, O = u.length; G < O; G++) {
        const V = u[G];
        if (V.cacheKey === M) {
          L = V, ++L.usedTimes;
          break;
        }
      }
      return L === void 0 && (L = new VS(r, M, S, s), u.push(L)), L;
    }
    function w(S) {
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
      acquireProgram: b,
      releaseProgram: w,
      releaseShaderCache: A,
      programs: u,
      dispose: P
    };
  }
  function qS() {
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
  function YS(r, e) {
    return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
  }
  function Bf(r, e) {
    return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
  }
  function zf() {
    const r = [];
    let e = 0;
    const t = [], n = [], i = [];
    function s() {
      e = 0, t.length = 0, n.length = 0, i.length = 0;
    }
    function o(h, f, d, _, g, m) {
      let p = r[e];
      return p === void 0 ? (p = {
        id: h.id,
        object: h,
        geometry: f,
        material: d,
        groupOrder: _,
        renderOrder: h.renderOrder,
        z: g,
        group: m
      }, r[e] = p) : (p.id = h.id, p.object = h, p.geometry = f, p.material = d, p.groupOrder = _, p.renderOrder = h.renderOrder, p.z = g, p.group = m), e++, p;
    }
    function a(h, f, d, _, g, m) {
      const p = o(h, f, d, _, g, m);
      d.transmission > 0 ? n.push(p) : d.transparent === true ? i.push(p) : t.push(p);
    }
    function l(h, f, d, _, g, m) {
      const p = o(h, f, d, _, g, m);
      d.transmission > 0 ? n.unshift(p) : d.transparent === true ? i.unshift(p) : t.unshift(p);
    }
    function c(h, f) {
      t.length > 1 && t.sort(h || YS), n.length > 1 && n.sort(f || Bf), i.length > 1 && i.sort(f || Bf);
    }
    function u() {
      for (let h = e, f = r.length; h < f; h++) {
        const d = r[h];
        if (d.id === null) break;
        d.id = null, d.object = null, d.geometry = null, d.material = null, d.group = null;
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
  function KS() {
    let r = /* @__PURE__ */ new WeakMap();
    function e(n, i) {
      const s = r.get(n);
      let o;
      return s === void 0 ? (o = new zf(), r.set(n, [
        o
      ])) : i >= s.length ? (o = new zf(), s.push(o)) : o = s[i], o;
    }
    function t() {
      r = /* @__PURE__ */ new WeakMap();
    }
    return {
      get: e,
      dispose: t
    };
  }
  function $S() {
    const r = {};
    return {
      get: function(e) {
        if (r[e.id] !== void 0) return r[e.id];
        let t;
        switch (e.type) {
          case "DirectionalLight":
            t = {
              direction: new D(),
              color: new Re()
            };
            break;
          case "SpotLight":
            t = {
              position: new D(),
              direction: new D(),
              color: new Re(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0
            };
            break;
          case "PointLight":
            t = {
              position: new D(),
              color: new Re(),
              distance: 0,
              decay: 0
            };
            break;
          case "HemisphereLight":
            t = {
              direction: new D(),
              skyColor: new Re(),
              groundColor: new Re()
            };
            break;
          case "RectAreaLight":
            t = {
              color: new Re(),
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
  function jS() {
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
  let ZS = 0;
  function JS(r, e) {
    return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
  }
  function QS(r) {
    const e = new $S(), t = jS(), n = {
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
      let u = 0, h = 0, f = 0;
      for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
      let d = 0, _ = 0, g = 0, m = 0, p = 0, y = 0, v = 0, x = 0, b = 0, w = 0, A = 0;
      c.sort(JS);
      for (let S = 0, M = c.length; S < M; S++) {
        const L = c[S], G = L.color, O = L.intensity, V = L.distance, q = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
        if (L.isAmbientLight) u += G.r * O, h += G.g * O, f += G.b * O;
        else if (L.isLightProbe) {
          for (let B = 0; B < 9; B++) n.probe[B].addScaledVector(L.sh.coefficients[B], O);
          A++;
        } else if (L.isDirectionalLight) {
          const B = e.get(L);
          if (B.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow) {
            const $ = L.shadow, H = t.get(L);
            H.shadowIntensity = $.intensity, H.shadowBias = $.bias, H.shadowNormalBias = $.normalBias, H.shadowRadius = $.radius, H.shadowMapSize = $.mapSize, n.directionalShadow[d] = H, n.directionalShadowMap[d] = q, n.directionalShadowMatrix[d] = L.shadow.matrix, y++;
          }
          n.directional[d] = B, d++;
        } else if (L.isSpotLight) {
          const B = e.get(L);
          B.position.setFromMatrixPosition(L.matrixWorld), B.color.copy(G).multiplyScalar(O), B.distance = V, B.coneCos = Math.cos(L.angle), B.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), B.decay = L.decay, n.spot[g] = B;
          const $ = L.shadow;
          if (L.map && (n.spotLightMap[b] = L.map, b++, $.updateMatrices(L), L.castShadow && w++), n.spotLightMatrix[g] = $.matrix, L.castShadow) {
            const H = t.get(L);
            H.shadowIntensity = $.intensity, H.shadowBias = $.bias, H.shadowNormalBias = $.normalBias, H.shadowRadius = $.radius, H.shadowMapSize = $.mapSize, n.spotShadow[g] = H, n.spotShadowMap[g] = q, x++;
          }
          g++;
        } else if (L.isRectAreaLight) {
          const B = e.get(L);
          B.color.copy(G).multiplyScalar(O), B.halfWidth.set(L.width * 0.5, 0, 0), B.halfHeight.set(0, L.height * 0.5, 0), n.rectArea[m] = B, m++;
        } else if (L.isPointLight) {
          const B = e.get(L);
          if (B.color.copy(L.color).multiplyScalar(L.intensity), B.distance = L.distance, B.decay = L.decay, L.castShadow) {
            const $ = L.shadow, H = t.get(L);
            H.shadowIntensity = $.intensity, H.shadowBias = $.bias, H.shadowNormalBias = $.normalBias, H.shadowRadius = $.radius, H.shadowMapSize = $.mapSize, H.shadowCameraNear = $.camera.near, H.shadowCameraFar = $.camera.far, n.pointShadow[_] = H, n.pointShadowMap[_] = q, n.pointShadowMatrix[_] = L.shadow.matrix, v++;
          }
          n.point[_] = B, _++;
        } else if (L.isHemisphereLight) {
          const B = e.get(L);
          B.skyColor.copy(L.color).multiplyScalar(O), B.groundColor.copy(L.groundColor).multiplyScalar(O), n.hemi[p] = B, p++;
        }
      }
      m > 0 && (r.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = le.LTC_FLOAT_1, n.rectAreaLTC2 = le.LTC_FLOAT_2) : (n.rectAreaLTC1 = le.LTC_HALF_1, n.rectAreaLTC2 = le.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = h, n.ambient[2] = f;
      const P = n.hash;
      (P.directionalLength !== d || P.pointLength !== _ || P.spotLength !== g || P.rectAreaLength !== m || P.hemiLength !== p || P.numDirectionalShadows !== y || P.numPointShadows !== v || P.numSpotShadows !== x || P.numSpotMaps !== b || P.numLightProbes !== A) && (n.directional.length = d, n.spot.length = g, n.rectArea.length = m, n.point.length = _, n.hemi.length = p, n.directionalShadow.length = y, n.directionalShadowMap.length = y, n.pointShadow.length = v, n.pointShadowMap.length = v, n.spotShadow.length = x, n.spotShadowMap.length = x, n.directionalShadowMatrix.length = y, n.pointShadowMatrix.length = v, n.spotLightMatrix.length = x + b - w, n.spotLightMap.length = b, n.numSpotLightShadowsWithMaps = w, n.numLightProbes = A, P.directionalLength = d, P.pointLength = _, P.spotLength = g, P.rectAreaLength = m, P.hemiLength = p, P.numDirectionalShadows = y, P.numPointShadows = v, P.numSpotShadows = x, P.numSpotMaps = b, P.numLightProbes = A, n.version = ZS++);
    }
    function l(c, u) {
      let h = 0, f = 0, d = 0, _ = 0, g = 0;
      const m = u.matrixWorldInverse;
      for (let p = 0, y = c.length; p < y; p++) {
        const v = c[p];
        if (v.isDirectionalLight) {
          const x = n.directional[h];
          x.direction.setFromMatrixPosition(v.matrixWorld), i.setFromMatrixPosition(v.target.matrixWorld), x.direction.sub(i), x.direction.transformDirection(m), h++;
        } else if (v.isSpotLight) {
          const x = n.spot[d];
          x.position.setFromMatrixPosition(v.matrixWorld), x.position.applyMatrix4(m), x.direction.setFromMatrixPosition(v.matrixWorld), i.setFromMatrixPosition(v.target.matrixWorld), x.direction.sub(i), x.direction.transformDirection(m), d++;
        } else if (v.isRectAreaLight) {
          const x = n.rectArea[_];
          x.position.setFromMatrixPosition(v.matrixWorld), x.position.applyMatrix4(m), o.identity(), s.copy(v.matrixWorld), s.premultiply(m), o.extractRotation(s), x.halfWidth.set(v.width * 0.5, 0, 0), x.halfHeight.set(0, v.height * 0.5, 0), x.halfWidth.applyMatrix4(o), x.halfHeight.applyMatrix4(o), _++;
        } else if (v.isPointLight) {
          const x = n.point[f];
          x.position.setFromMatrixPosition(v.matrixWorld), x.position.applyMatrix4(m), f++;
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
  function kf(r) {
    const e = new QS(r), t = [], n = [];
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
  function eM(r) {
    let e = /* @__PURE__ */ new WeakMap();
    function t(i, s = 0) {
      const o = e.get(i);
      let a;
      return o === void 0 ? (a = new kf(r), e.set(i, [
        a
      ])) : s >= o.length ? (a = new kf(r), o.push(a)) : a = o[s], a;
    }
    function n() {
      e = /* @__PURE__ */ new WeakMap();
    }
    return {
      get: t,
      dispose: n
    };
  }
  const tM = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, nM = `uniform sampler2D shadow_pass;
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
  function iM(r, e, t) {
    let n = new vu();
    const i = new ee(), s = new ee(), o = new et(), a = new t0({
      depthPacking: fg
    }), l = new n0(), c = {}, u = t.maxTextureSize, h = {
      [yi]: nn,
      [nn]: yi,
      [kn]: kn
    }, f = new Gt({
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
      vertexShader: tM,
      fragmentShader: nM
    }), d = f.clone();
    d.defines.HORIZONTAL_PASS = 1;
    const _ = new cn();
    _.setAttribute("position", new Jt(new Float32Array([
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
    const g = new Rt(_, f), m = this;
    this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = xd;
    let p = this.type;
    this.render = function(w, A, P) {
      if (m.enabled === false || m.autoUpdate === false && m.needsUpdate === false || w.length === 0) return;
      const S = r.getRenderTarget(), M = r.getActiveCubeFace(), L = r.getActiveMipmapLevel(), G = r.state;
      G.setBlending(_i), G.buffers.color.setClear(1, 1, 1, 1), G.buffers.depth.setTest(true), G.setScissorTest(false);
      const O = p !== oi && this.type === oi, V = p === oi && this.type !== oi;
      for (let q = 0, B = w.length; q < B; q++) {
        const $ = w[q], H = $.shadow;
        if (H === void 0) {
          console.warn("THREE.WebGLShadowMap:", $, "has no shadow.");
          continue;
        }
        if (H.autoUpdate === false && H.needsUpdate === false) continue;
        i.copy(H.mapSize);
        const oe = H.getFrameExtents();
        if (i.multiply(oe), s.copy(H.mapSize), (i.x > u || i.y > u) && (i.x > u && (s.x = Math.floor(u / oe.x), i.x = s.x * oe.x, H.mapSize.x = s.x), i.y > u && (s.y = Math.floor(u / oe.y), i.y = s.y * oe.y, H.mapSize.y = s.y)), H.map === null || O === true || V === true) {
          const ge = this.type !== oi ? {
            minFilter: Zt,
            magFilter: Zt
          } : {};
          H.map !== null && H.map.dispose(), H.map = new On(i.x, i.y, ge), H.map.texture.name = $.name + ".shadowMap", H.camera.updateProjectionMatrix();
        }
        r.setRenderTarget(H.map), r.clear();
        const ce = H.getViewportCount();
        for (let ge = 0; ge < ce; ge++) {
          const Le = H.getViewport(ge);
          o.set(s.x * Le.x, s.y * Le.y, s.x * Le.z, s.y * Le.w), G.viewport(o), H.updateMatrices($, ge), n = H.getFrustum(), x(A, P, H.camera, $, this.type);
        }
        H.isPointLightShadow !== true && this.type === oi && y(H, P), H.needsUpdate = false;
      }
      p = this.type, m.needsUpdate = false, r.setRenderTarget(S, M, L);
    };
    function y(w, A) {
      const P = e.update(g);
      f.defines.VSM_SAMPLES !== w.blurSamples && (f.defines.VSM_SAMPLES = w.blurSamples, d.defines.VSM_SAMPLES = w.blurSamples, f.needsUpdate = true, d.needsUpdate = true), w.mapPass === null && (w.mapPass = new On(i.x, i.y)), f.uniforms.shadow_pass.value = w.map.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, r.setRenderTarget(w.mapPass), r.clear(), r.renderBufferDirect(A, null, P, f, g, null), d.uniforms.shadow_pass.value = w.mapPass.texture, d.uniforms.resolution.value = w.mapSize, d.uniforms.radius.value = w.radius, r.setRenderTarget(w.map), r.clear(), r.renderBufferDirect(A, null, P, d, g, null);
    }
    function v(w, A, P, S) {
      let M = null;
      const L = P.isPointLight === true ? w.customDistanceMaterial : w.customDepthMaterial;
      if (L !== void 0) M = L;
      else if (M = P.isPointLight === true ? l : a, r.localClippingEnabled && A.clipShadows === true && Array.isArray(A.clippingPlanes) && A.clippingPlanes.length !== 0 || A.displacementMap && A.displacementScale !== 0 || A.alphaMap && A.alphaTest > 0 || A.map && A.alphaTest > 0) {
        const G = M.uuid, O = A.uuid;
        let V = c[G];
        V === void 0 && (V = {}, c[G] = V);
        let q = V[O];
        q === void 0 && (q = M.clone(), V[O] = q, A.addEventListener("dispose", b)), M = q;
      }
      if (M.visible = A.visible, M.wireframe = A.wireframe, S === oi ? M.side = A.shadowSide !== null ? A.shadowSide : A.side : M.side = A.shadowSide !== null ? A.shadowSide : h[A.side], M.alphaMap = A.alphaMap, M.alphaTest = A.alphaTest, M.map = A.map, M.clipShadows = A.clipShadows, M.clippingPlanes = A.clippingPlanes, M.clipIntersection = A.clipIntersection, M.displacementMap = A.displacementMap, M.displacementScale = A.displacementScale, M.displacementBias = A.displacementBias, M.wireframeLinewidth = A.wireframeLinewidth, M.linewidth = A.linewidth, P.isPointLight === true && M.isMeshDistanceMaterial === true) {
        const G = r.properties.get(M);
        G.light = P;
      }
      return M;
    }
    function x(w, A, P, S, M) {
      if (w.visible === false) return;
      if (w.layers.test(A.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && M === oi) && (!w.frustumCulled || n.intersectsObject(w))) {
        w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse, w.matrixWorld);
        const O = e.update(w), V = w.material;
        if (Array.isArray(V)) {
          const q = O.groups;
          for (let B = 0, $ = q.length; B < $; B++) {
            const H = q[B], oe = V[H.materialIndex];
            if (oe && oe.visible) {
              const ce = v(w, oe, S, M);
              w.onBeforeShadow(r, w, A, P, O, ce, H), r.renderBufferDirect(P, null, O, ce, w, H), w.onAfterShadow(r, w, A, P, O, ce, H);
            }
          }
        } else if (V.visible) {
          const q = v(w, V, S, M);
          w.onBeforeShadow(r, w, A, P, O, q, null), r.renderBufferDirect(P, null, O, q, w, null), w.onAfterShadow(r, w, A, P, O, q, null);
        }
      }
      const G = w.children;
      for (let O = 0, V = G.length; O < V; O++) x(G[O], A, P, S, M);
    }
    function b(w) {
      w.target.removeEventListener("dispose", b);
      for (const P in c) {
        const S = c[P], M = w.target.uuid;
        M in S && (S[M].dispose(), delete S[M]);
      }
    }
  }
  const rM = {
    [ql]: Yl,
    [Kl]: Zl,
    [$l]: Jl,
    [ls]: jl,
    [Yl]: ql,
    [Zl]: Kl,
    [Jl]: $l,
    [jl]: ls
  };
  function sM(r, e) {
    function t() {
      let I = false;
      const he = new et();
      let W = null;
      const j = new et(0, 0, 0, 0);
      return {
        setMask: function(me) {
          W !== me && !I && (r.colorMask(me, me, me, me), W = me);
        },
        setLocked: function(me) {
          I = me;
        },
        setClear: function(me, pe, Be, yt, Bt) {
          Bt === true && (me *= yt, pe *= yt, Be *= yt), he.set(me, pe, Be, yt), j.equals(he) === false && (r.clearColor(me, pe, Be, yt), j.copy(he));
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
            const yt = me;
            me = null, this.setClear(yt);
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
          if (he && (pe = rM[pe]), j !== pe) {
            switch (pe) {
              case ql:
                r.depthFunc(r.NEVER);
                break;
              case Yl:
                r.depthFunc(r.ALWAYS);
                break;
              case Kl:
                r.depthFunc(r.LESS);
                break;
              case ls:
                r.depthFunc(r.LEQUAL);
                break;
              case $l:
                r.depthFunc(r.EQUAL);
                break;
              case jl:
                r.depthFunc(r.GEQUAL);
                break;
              case Zl:
                r.depthFunc(r.GREATER);
                break;
              case Jl:
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
      let I = false, he = null, W = null, j = null, me = null, pe = null, Be = null, yt = null, Bt = null;
      return {
        setTest: function(rt) {
          I || (rt ? ae(r.STENCIL_TEST) : Ae(r.STENCIL_TEST));
        },
        setMask: function(rt) {
          he !== rt && !I && (r.stencilMask(rt), he = rt);
        },
        setFunc: function(rt, Rn, Jn) {
          (W !== rt || j !== Rn || me !== Jn) && (r.stencilFunc(rt, Rn, Jn), W = rt, j = Rn, me = Jn);
        },
        setOp: function(rt, Rn, Jn) {
          (pe !== rt || Be !== Rn || yt !== Jn) && (r.stencilOp(rt, Rn, Jn), pe = rt, Be = Rn, yt = Jn);
        },
        setLocked: function(rt) {
          I = rt;
        },
        setClear: function(rt) {
          Bt !== rt && (r.clearStencil(rt), Bt = rt);
        },
        reset: function() {
          I = false, he = null, W = null, j = null, me = null, pe = null, Be = null, yt = null, Bt = null;
        }
      };
    }
    const s = new t(), o = new n(), a = new i(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
    let u = {}, h = {}, f = /* @__PURE__ */ new WeakMap(), d = [], _ = null, g = false, m = null, p = null, y = null, v = null, x = null, b = null, w = null, A = new Re(0, 0, 0), P = 0, S = false, M = null, L = null, G = null, O = null, V = null;
    const q = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let B = false, $ = 0;
    const H = r.getParameter(r.VERSION);
    H.indexOf("WebGL") !== -1 ? ($ = parseFloat(/^WebGL (\d)/.exec(H)[1]), B = $ >= 1) : H.indexOf("OpenGL ES") !== -1 && ($ = parseFloat(/^OpenGL ES (\d)/.exec(H)[1]), B = $ >= 2);
    let oe = null, ce = {};
    const ge = r.getParameter(r.SCISSOR_BOX), Le = r.getParameter(r.VIEWPORT), Ke = new et().fromArray(ge), X = new et().fromArray(Le);
    function ie(I, he, W, j) {
      const me = new Uint8Array(4), pe = r.createTexture();
      r.bindTexture(I, pe), r.texParameteri(I, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(I, r.TEXTURE_MAG_FILTER, r.NEAREST);
      for (let Be = 0; Be < W; Be++) I === r.TEXTURE_3D || I === r.TEXTURE_2D_ARRAY ? r.texImage3D(he, 0, r.RGBA, 1, 1, j, 0, r.RGBA, r.UNSIGNED_BYTE, me) : r.texImage2D(he + Be, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, me);
      return pe;
    }
    const Te = {};
    Te[r.TEXTURE_2D] = ie(r.TEXTURE_2D, r.TEXTURE_2D, 1), Te[r.TEXTURE_CUBE_MAP] = ie(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Te[r.TEXTURE_2D_ARRAY] = ie(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), Te[r.TEXTURE_3D] = ie(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), ae(r.DEPTH_TEST), o.setFunc(ls), te(false), xe(_h), ae(r.CULL_FACE), C(_i);
    function ae(I) {
      u[I] !== true && (r.enable(I), u[I] = true);
    }
    function Ae(I) {
      u[I] !== false && (r.disable(I), u[I] = false);
    }
    function $e(I, he) {
      return h[I] !== he ? (r.bindFramebuffer(I, he), h[I] = he, I === r.DRAW_FRAMEBUFFER && (h[r.FRAMEBUFFER] = he), I === r.FRAMEBUFFER && (h[r.DRAW_FRAMEBUFFER] = he), true) : false;
    }
    function we(I, he) {
      let W = d, j = false;
      if (I) {
        W = f.get(he), W === void 0 && (W = [], f.set(he, W));
        const me = I.textures;
        if (W.length !== me.length || W[0] !== r.COLOR_ATTACHMENT0) {
          for (let pe = 0, Be = me.length; pe < Be; pe++) W[pe] = r.COLOR_ATTACHMENT0 + pe;
          W.length = me.length, j = true;
        }
      } else W[0] !== r.BACK && (W[0] = r.BACK, j = true);
      j && r.drawBuffers(W);
    }
    function Qe(I) {
      return _ !== I ? (r.useProgram(I), _ = I, true) : false;
    }
    const Q = {
      [ur]: r.FUNC_ADD,
      [Om]: r.FUNC_SUBTRACT,
      [Fm]: r.FUNC_REVERSE_SUBTRACT
    };
    Q[Bm] = r.MIN, Q[zm] = r.MAX;
    const J = {
      [km]: r.ZERO,
      [Vm]: r.ONE,
      [Hm]: r.SRC_COLOR,
      [Wl]: r.SRC_ALPHA,
      [Km]: r.SRC_ALPHA_SATURATE,
      [qm]: r.DST_COLOR,
      [Wm]: r.DST_ALPHA,
      [Gm]: r.ONE_MINUS_SRC_COLOR,
      [Xl]: r.ONE_MINUS_SRC_ALPHA,
      [Ym]: r.ONE_MINUS_DST_COLOR,
      [Xm]: r.ONE_MINUS_DST_ALPHA,
      [$m]: r.CONSTANT_COLOR,
      [jm]: r.ONE_MINUS_CONSTANT_COLOR,
      [Zm]: r.CONSTANT_ALPHA,
      [Jm]: r.ONE_MINUS_CONSTANT_ALPHA
    };
    function C(I, he, W, j, me, pe, Be, yt, Bt, rt) {
      if (I === _i) {
        g === true && (Ae(r.BLEND), g = false);
        return;
      }
      if (g === false && (ae(r.BLEND), g = true), I !== Um) {
        if (I !== m || rt !== S) {
          if ((p !== ur || x !== ur) && (r.blendEquation(r.FUNC_ADD), p = ur, x = ur), rt) switch (I) {
            case Jr:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case Ma:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case xh:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case vh:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
          else switch (I) {
            case Jr:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case Ma:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case xh:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case vh:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
          y = null, v = null, b = null, w = null, A.set(0, 0, 0), P = 0, m = I, S = rt;
        }
        return;
      }
      me = me || he, pe = pe || W, Be = Be || j, (he !== p || me !== x) && (r.blendEquationSeparate(Q[he], Q[me]), p = he, x = me), (W !== y || j !== v || pe !== b || Be !== w) && (r.blendFuncSeparate(J[W], J[j], J[pe], J[Be]), y = W, v = j, b = pe, w = Be), (yt.equals(A) === false || Bt !== P) && (r.blendColor(yt.r, yt.g, yt.b, Bt), A.copy(yt), P = Bt), m = I, S = false;
    }
    function be(I, he) {
      I.side === kn ? Ae(r.CULL_FACE) : ae(r.CULL_FACE);
      let W = I.side === nn;
      he && (W = !W), te(W), I.blending === Jr && I.transparent === false ? C(_i) : C(I.blending, I.blendEquation, I.blendSrc, I.blendDst, I.blendEquationAlpha, I.blendSrcAlpha, I.blendDstAlpha, I.blendColor, I.blendAlpha, I.premultipliedAlpha), o.setFunc(I.depthFunc), o.setTest(I.depthTest), o.setMask(I.depthWrite), s.setMask(I.colorWrite);
      const j = I.stencilWrite;
      a.setTest(j), j && (a.setMask(I.stencilWriteMask), a.setFunc(I.stencilFunc, I.stencilRef, I.stencilFuncMask), a.setOp(I.stencilFail, I.stencilZFail, I.stencilZPass)), Ie(I.polygonOffset, I.polygonOffsetFactor, I.polygonOffsetUnits), I.alphaToCoverage === true ? ae(r.SAMPLE_ALPHA_TO_COVERAGE) : Ae(r.SAMPLE_ALPHA_TO_COVERAGE);
    }
    function te(I) {
      M !== I && (I ? r.frontFace(r.CW) : r.frontFace(r.CCW), M = I);
    }
    function xe(I) {
      I !== Dm ? (ae(r.CULL_FACE), I !== L && (I === _h ? r.cullFace(r.BACK) : I === Im ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : Ae(r.CULL_FACE), L = I;
    }
    function se(I) {
      I !== G && (B && r.lineWidth(I), G = I);
    }
    function Ie(I, he, W) {
      I ? (ae(r.POLYGON_OFFSET_FILL), (O !== he || V !== W) && (r.polygonOffset(he, W), O = he, V = W)) : Ae(r.POLYGON_OFFSET_FILL);
    }
    function de(I) {
      I ? ae(r.SCISSOR_TEST) : Ae(r.SCISSOR_TEST);
    }
    function R(I) {
      I === void 0 && (I = r.TEXTURE0 + q - 1), oe !== I && (r.activeTexture(I), oe = I);
    }
    function T(I, he, W) {
      W === void 0 && (oe === null ? W = r.TEXTURE0 + q - 1 : W = oe);
      let j = ce[W];
      j === void 0 && (j = {
        type: void 0,
        texture: void 0
      }, ce[W] = j), (j.type !== I || j.texture !== he) && (oe !== W && (r.activeTexture(W), oe = W), r.bindTexture(I, he || Te[I]), j.type = I, j.texture = he);
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
    function K() {
      try {
        r.texSubImage2D.apply(r, arguments);
      } catch (I) {
        console.error("THREE.WebGLState:", I);
      }
    }
    function Ee() {
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
    function qe(I, he) {
      let W = c.get(he);
      W === void 0 && (W = /* @__PURE__ */ new WeakMap(), c.set(he, W));
      let j = W.get(I);
      j === void 0 && (j = r.getUniformBlockIndex(he, I.name), W.set(I, j));
    }
    function ke(I, he) {
      const j = c.get(he).get(I);
      l.get(he) !== j && (r.uniformBlockBinding(he, j, I.__bindingPointIndex), l.set(he, j));
    }
    function ht() {
      r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(true, true, true, true), r.clearColor(0, 0, 0, 0), r.depthMask(true), r.depthFunc(r.LESS), o.setReversed(false), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), u = {}, oe = null, ce = {}, h = {}, f = /* @__PURE__ */ new WeakMap(), d = [], _ = null, g = false, m = null, p = null, y = null, v = null, x = null, b = null, w = null, A = new Re(0, 0, 0), P = 0, S = false, M = null, L = null, G = null, O = null, V = null, Ke.set(0, 0, r.canvas.width, r.canvas.height), X.set(0, 0, r.canvas.width, r.canvas.height), s.reset(), o.reset(), a.reset();
    }
    return {
      buffers: {
        color: s,
        depth: o,
        stencil: a
      },
      enable: ae,
      disable: Ae,
      bindFramebuffer: $e,
      drawBuffers: we,
      useProgram: Qe,
      setBlending: C,
      setMaterial: be,
      setFlipSided: te,
      setCullFace: xe,
      setLineWidth: se,
      setPolygonOffset: Ie,
      setScissorTest: de,
      activeTexture: R,
      bindTexture: T,
      unbindTexture: F,
      compressedTexImage2D: Y,
      compressedTexImage3D: Z,
      texImage2D: ye,
      texImage3D: De,
      updateUBOMapping: qe,
      uniformBlockBinding: ke,
      texStorage2D: We,
      texStorage3D: re,
      texSubImage2D: K,
      texSubImage3D: Ee,
      compressedTexSubImage2D: ue,
      compressedTexSubImage3D: _e,
      scissor: Ne,
      viewport: Se,
      reset: ht
    };
  }
  function oM(r, e, t, n, i, s, o) {
    const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new ee(), u = /* @__PURE__ */ new WeakMap();
    let h;
    const f = /* @__PURE__ */ new WeakMap();
    let d = false;
    try {
      d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
    } catch {
    }
    function _(R, T) {
      return d ? new OffscreenCanvas(R, T) : co("canvas");
    }
    function g(R, T, F) {
      let Y = 1;
      const Z = de(R);
      if ((Z.width > F || Z.height > F) && (Y = F / Math.max(Z.width, Z.height)), Y < 1) if (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && R instanceof ImageBitmap || typeof VideoFrame < "u" && R instanceof VideoFrame) {
        const K = Math.floor(Y * Z.width), Ee = Math.floor(Y * Z.height);
        h === void 0 && (h = _(K, Ee));
        const ue = T ? _(K, Ee) : h;
        return ue.width = K, ue.height = Ee, ue.getContext("2d").drawImage(R, 0, 0, K, Ee), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + K + "x" + Ee + ")."), ue;
      } else return "data" in R && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), R;
      return R;
    }
    function m(R) {
      return R.generateMipmaps;
    }
    function p(R) {
      r.generateMipmap(R);
    }
    function y(R) {
      return R.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : R.isWebGL3DRenderTarget ? r.TEXTURE_3D : R.isWebGLArrayRenderTarget || R.isCompressedArrayTexture ? r.TEXTURE_2D_ARRAY : r.TEXTURE_2D;
    }
    function v(R, T, F, Y, Z = false) {
      if (R !== null) {
        if (r[R] !== void 0) return r[R];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + R + "'");
      }
      let K = T;
      if (T === r.RED && (F === r.FLOAT && (K = r.R32F), F === r.HALF_FLOAT && (K = r.R16F), F === r.UNSIGNED_BYTE && (K = r.R8)), T === r.RED_INTEGER && (F === r.UNSIGNED_BYTE && (K = r.R8UI), F === r.UNSIGNED_SHORT && (K = r.R16UI), F === r.UNSIGNED_INT && (K = r.R32UI), F === r.BYTE && (K = r.R8I), F === r.SHORT && (K = r.R16I), F === r.INT && (K = r.R32I)), T === r.RG && (F === r.FLOAT && (K = r.RG32F), F === r.HALF_FLOAT && (K = r.RG16F), F === r.UNSIGNED_BYTE && (K = r.RG8)), T === r.RG_INTEGER && (F === r.UNSIGNED_BYTE && (K = r.RG8UI), F === r.UNSIGNED_SHORT && (K = r.RG16UI), F === r.UNSIGNED_INT && (K = r.RG32UI), F === r.BYTE && (K = r.RG8I), F === r.SHORT && (K = r.RG16I), F === r.INT && (K = r.RG32I)), T === r.RGB_INTEGER && (F === r.UNSIGNED_BYTE && (K = r.RGB8UI), F === r.UNSIGNED_SHORT && (K = r.RGB16UI), F === r.UNSIGNED_INT && (K = r.RGB32UI), F === r.BYTE && (K = r.RGB8I), F === r.SHORT && (K = r.RGB16I), F === r.INT && (K = r.RGB32I)), T === r.RGBA_INTEGER && (F === r.UNSIGNED_BYTE && (K = r.RGBA8UI), F === r.UNSIGNED_SHORT && (K = r.RGBA16UI), F === r.UNSIGNED_INT && (K = r.RGBA32UI), F === r.BYTE && (K = r.RGBA8I), F === r.SHORT && (K = r.RGBA16I), F === r.INT && (K = r.RGBA32I)), T === r.RGB && F === r.UNSIGNED_INT_5_9_9_9_REV && (K = r.RGB9_E5), T === r.RGBA) {
        const Ee = Z ? Ea : Ye.getTransfer(Y);
        F === r.FLOAT && (K = r.RGBA32F), F === r.HALF_FLOAT && (K = r.RGBA16F), F === r.UNSIGNED_BYTE && (K = Ee === lt ? r.SRGB8_ALPHA8 : r.RGBA8), F === r.UNSIGNED_SHORT_4_4_4_4 && (K = r.RGBA4), F === r.UNSIGNED_SHORT_5_5_5_1 && (K = r.RGB5_A1);
      }
      return (K === r.R16F || K === r.R32F || K === r.RG16F || K === r.RG32F || K === r.RGBA16F || K === r.RGBA32F) && e.get("EXT_color_buffer_float"), K;
    }
    function x(R, T) {
      let F;
      return R ? T === null || T === Sr || T === fs ? F = r.DEPTH24_STENCIL8 : T === Un ? F = r.DEPTH32F_STENCIL8 : T === oo && (F = r.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : T === null || T === Sr || T === fs ? F = r.DEPTH_COMPONENT24 : T === Un ? F = r.DEPTH_COMPONENT32F : T === oo && (F = r.DEPTH_COMPONENT16), F;
    }
    function b(R, T) {
      return m(R) === true || R.isFramebufferTexture && R.minFilter !== Zt && R.minFilter !== mn ? Math.log2(Math.max(T.width, T.height)) + 1 : R.mipmaps !== void 0 && R.mipmaps.length > 0 ? R.mipmaps.length : R.isCompressedTexture && Array.isArray(R.image) ? T.mipmaps.length : 1;
    }
    function w(R) {
      const T = R.target;
      T.removeEventListener("dispose", w), P(T), T.isVideoTexture && u.delete(T);
    }
    function A(R) {
      const T = R.target;
      T.removeEventListener("dispose", A), M(T);
    }
    function P(R) {
      const T = n.get(R);
      if (T.__webglInit === void 0) return;
      const F = R.source, Y = f.get(F);
      if (Y) {
        const Z = Y[T.__cacheKey];
        Z.usedTimes--, Z.usedTimes === 0 && S(R), Object.keys(Y).length === 0 && f.delete(F);
      }
      n.remove(R);
    }
    function S(R) {
      const T = n.get(R);
      r.deleteTexture(T.__webglTexture);
      const F = R.source, Y = f.get(F);
      delete Y[T.__cacheKey], o.memory.textures--;
    }
    function M(R) {
      const T = n.get(R);
      if (R.depthTexture && (R.depthTexture.dispose(), n.remove(R.depthTexture)), R.isWebGLCubeRenderTarget) for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(T.__webglFramebuffer[Y])) for (let Z = 0; Z < T.__webglFramebuffer[Y].length; Z++) r.deleteFramebuffer(T.__webglFramebuffer[Y][Z]);
        else r.deleteFramebuffer(T.__webglFramebuffer[Y]);
        T.__webglDepthbuffer && r.deleteRenderbuffer(T.__webglDepthbuffer[Y]);
      }
      else {
        if (Array.isArray(T.__webglFramebuffer)) for (let Y = 0; Y < T.__webglFramebuffer.length; Y++) r.deleteFramebuffer(T.__webglFramebuffer[Y]);
        else r.deleteFramebuffer(T.__webglFramebuffer);
        if (T.__webglDepthbuffer && r.deleteRenderbuffer(T.__webglDepthbuffer), T.__webglMultisampledFramebuffer && r.deleteFramebuffer(T.__webglMultisampledFramebuffer), T.__webglColorRenderbuffer) for (let Y = 0; Y < T.__webglColorRenderbuffer.length; Y++) T.__webglColorRenderbuffer[Y] && r.deleteRenderbuffer(T.__webglColorRenderbuffer[Y]);
        T.__webglDepthRenderbuffer && r.deleteRenderbuffer(T.__webglDepthRenderbuffer);
      }
      const F = R.textures;
      for (let Y = 0, Z = F.length; Y < Z; Y++) {
        const K = n.get(F[Y]);
        K.__webglTexture && (r.deleteTexture(K.__webglTexture), o.memory.textures--), n.remove(F[Y]);
      }
      n.remove(R);
    }
    let L = 0;
    function G() {
      L = 0;
    }
    function O() {
      const R = L;
      return R >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + R + " texture units while this GPU supports only " + i.maxTextures), L += 1, R;
    }
    function V(R) {
      const T = [];
      return T.push(R.wrapS), T.push(R.wrapT), T.push(R.wrapR || 0), T.push(R.magFilter), T.push(R.minFilter), T.push(R.anisotropy), T.push(R.internalFormat), T.push(R.format), T.push(R.type), T.push(R.generateMipmaps), T.push(R.premultiplyAlpha), T.push(R.flipY), T.push(R.unpackAlignment), T.push(R.colorSpace), T.join();
    }
    function q(R, T) {
      const F = n.get(R);
      if (R.isVideoTexture && se(R), R.isRenderTargetTexture === false && R.version > 0 && F.__version !== R.version) {
        const Y = R.image;
        if (Y === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
        else if (Y.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        else {
          X(F, R, T);
          return;
        }
      }
      t.bindTexture(r.TEXTURE_2D, F.__webglTexture, r.TEXTURE0 + T);
    }
    function B(R, T) {
      const F = n.get(R);
      if (R.version > 0 && F.__version !== R.version) {
        X(F, R, T);
        return;
      }
      t.bindTexture(r.TEXTURE_2D_ARRAY, F.__webglTexture, r.TEXTURE0 + T);
    }
    function $(R, T) {
      const F = n.get(R);
      if (R.version > 0 && F.__version !== R.version) {
        X(F, R, T);
        return;
      }
      t.bindTexture(r.TEXTURE_3D, F.__webglTexture, r.TEXTURE0 + T);
    }
    function H(R, T) {
      const F = n.get(R);
      if (R.version > 0 && F.__version !== R.version) {
        ie(F, R, T);
        return;
      }
      t.bindTexture(r.TEXTURE_CUBE_MAP, F.__webglTexture, r.TEXTURE0 + T);
    }
    const oe = {
      [hs]: r.REPEAT,
      [Ni]: r.CLAMP_TO_EDGE,
      [Ta]: r.MIRRORED_REPEAT
    }, ce = {
      [Zt]: r.NEAREST,
      [Sd]: r.NEAREST_MIPMAP_NEAREST,
      [Hs]: r.NEAREST_MIPMAP_LINEAR,
      [mn]: r.LINEAR,
      [ca]: r.LINEAR_MIPMAP_NEAREST,
      [pi]: r.LINEAR_MIPMAP_LINEAR
    }, ge = {
      [pg]: r.NEVER,
      [yg]: r.ALWAYS,
      [mg]: r.LESS,
      [Id]: r.LEQUAL,
      [gg]: r.EQUAL,
      [vg]: r.GEQUAL,
      [_g]: r.GREATER,
      [xg]: r.NOTEQUAL
    };
    function Le(R, T) {
      if (T.type === Un && e.has("OES_texture_float_linear") === false && (T.magFilter === mn || T.magFilter === ca || T.magFilter === Hs || T.magFilter === pi || T.minFilter === mn || T.minFilter === ca || T.minFilter === Hs || T.minFilter === pi) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), r.texParameteri(R, r.TEXTURE_WRAP_S, oe[T.wrapS]), r.texParameteri(R, r.TEXTURE_WRAP_T, oe[T.wrapT]), (R === r.TEXTURE_3D || R === r.TEXTURE_2D_ARRAY) && r.texParameteri(R, r.TEXTURE_WRAP_R, oe[T.wrapR]), r.texParameteri(R, r.TEXTURE_MAG_FILTER, ce[T.magFilter]), r.texParameteri(R, r.TEXTURE_MIN_FILTER, ce[T.minFilter]), T.compareFunction && (r.texParameteri(R, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(R, r.TEXTURE_COMPARE_FUNC, ge[T.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
        if (T.magFilter === Zt || T.minFilter !== Hs && T.minFilter !== pi || T.type === Un && e.has("OES_texture_float_linear") === false) return;
        if (T.anisotropy > 1 || n.get(T).__currentAnisotropy) {
          const F = e.get("EXT_texture_filter_anisotropic");
          r.texParameterf(R, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(T.anisotropy, i.getMaxAnisotropy())), n.get(T).__currentAnisotropy = T.anisotropy;
        }
      }
    }
    function Ke(R, T) {
      let F = false;
      R.__webglInit === void 0 && (R.__webglInit = true, T.addEventListener("dispose", w));
      const Y = T.source;
      let Z = f.get(Y);
      Z === void 0 && (Z = {}, f.set(Y, Z));
      const K = V(T);
      if (K !== R.__cacheKey) {
        Z[K] === void 0 && (Z[K] = {
          texture: r.createTexture(),
          usedTimes: 0
        }, o.memory.textures++, F = true), Z[K].usedTimes++;
        const Ee = Z[R.__cacheKey];
        Ee !== void 0 && (Z[R.__cacheKey].usedTimes--, Ee.usedTimes === 0 && S(T)), R.__cacheKey = K, R.__webglTexture = Z[K].texture;
      }
      return F;
    }
    function X(R, T, F) {
      let Y = r.TEXTURE_2D;
      (T.isDataArrayTexture || T.isCompressedArrayTexture) && (Y = r.TEXTURE_2D_ARRAY), T.isData3DTexture && (Y = r.TEXTURE_3D);
      const Z = Ke(R, T), K = T.source;
      t.bindTexture(Y, R.__webglTexture, r.TEXTURE0 + F);
      const Ee = n.get(K);
      if (K.version !== Ee.__version || Z === true) {
        t.activeTexture(r.TEXTURE0 + F);
        const ue = Ye.getPrimaries(Ye.workingColorSpace), _e = T.colorSpace === Di ? null : Ye.getPrimaries(T.colorSpace), We = T.colorSpace === Di || ue === _e ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
        r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, T.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, T.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, T.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, We);
        let re = g(T.image, false, i.maxTextureSize);
        re = Ie(T, re);
        const ye = s.convert(T.format, T.colorSpace), De = s.convert(T.type);
        let Ne = v(T.internalFormat, ye, De, T.colorSpace, T.isVideoTexture);
        Le(Y, T);
        let Se;
        const qe = T.mipmaps, ke = T.isVideoTexture !== true, ht = Ee.__version === void 0 || Z === true, I = K.dataReady, he = b(T, re);
        if (T.isDepthTexture) Ne = x(T.format === ds, T.type), ht && (ke ? t.texStorage2D(r.TEXTURE_2D, 1, Ne, re.width, re.height) : t.texImage2D(r.TEXTURE_2D, 0, Ne, re.width, re.height, 0, ye, De, null));
        else if (T.isDataTexture) if (qe.length > 0) {
          ke && ht && t.texStorage2D(r.TEXTURE_2D, he, Ne, qe[0].width, qe[0].height);
          for (let W = 0, j = qe.length; W < j; W++) Se = qe[W], ke ? I && t.texSubImage2D(r.TEXTURE_2D, W, 0, 0, Se.width, Se.height, ye, De, Se.data) : t.texImage2D(r.TEXTURE_2D, W, Ne, Se.width, Se.height, 0, ye, De, Se.data);
          T.generateMipmaps = false;
        } else ke ? (ht && t.texStorage2D(r.TEXTURE_2D, he, Ne, re.width, re.height), I && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, re.width, re.height, ye, De, re.data)) : t.texImage2D(r.TEXTURE_2D, 0, Ne, re.width, re.height, 0, ye, De, re.data);
        else if (T.isCompressedTexture) if (T.isCompressedArrayTexture) {
          ke && ht && t.texStorage3D(r.TEXTURE_2D_ARRAY, he, Ne, qe[0].width, qe[0].height, re.depth);
          for (let W = 0, j = qe.length; W < j; W++) if (Se = qe[W], T.format !== bn) if (ye !== null) if (ke) {
            if (I) if (T.layerUpdates.size > 0) {
              const me = gf(Se.width, Se.height, T.format, T.type);
              for (const pe of T.layerUpdates) {
                const Be = Se.data.subarray(pe * me / Se.data.BYTES_PER_ELEMENT, (pe + 1) * me / Se.data.BYTES_PER_ELEMENT);
                t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, W, 0, 0, pe, Se.width, Se.height, 1, ye, Be);
              }
              T.clearLayerUpdates();
            } else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, W, 0, 0, 0, Se.width, Se.height, re.depth, ye, Se.data);
          } else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, W, Ne, Se.width, Se.height, re.depth, 0, Se.data, 0, 0);
          else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
          else ke ? I && t.texSubImage3D(r.TEXTURE_2D_ARRAY, W, 0, 0, 0, Se.width, Se.height, re.depth, ye, De, Se.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, W, Ne, Se.width, Se.height, re.depth, 0, ye, De, Se.data);
        } else {
          ke && ht && t.texStorage2D(r.TEXTURE_2D, he, Ne, qe[0].width, qe[0].height);
          for (let W = 0, j = qe.length; W < j; W++) Se = qe[W], T.format !== bn ? ye !== null ? ke ? I && t.compressedTexSubImage2D(r.TEXTURE_2D, W, 0, 0, Se.width, Se.height, ye, Se.data) : t.compressedTexImage2D(r.TEXTURE_2D, W, Ne, Se.width, Se.height, 0, Se.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ke ? I && t.texSubImage2D(r.TEXTURE_2D, W, 0, 0, Se.width, Se.height, ye, De, Se.data) : t.texImage2D(r.TEXTURE_2D, W, Ne, Se.width, Se.height, 0, ye, De, Se.data);
        }
        else if (T.isDataArrayTexture) if (ke) {
          if (ht && t.texStorage3D(r.TEXTURE_2D_ARRAY, he, Ne, re.width, re.height, re.depth), I) if (T.layerUpdates.size > 0) {
            const W = gf(re.width, re.height, T.format, T.type);
            for (const j of T.layerUpdates) {
              const me = re.data.subarray(j * W / re.data.BYTES_PER_ELEMENT, (j + 1) * W / re.data.BYTES_PER_ELEMENT);
              t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, j, re.width, re.height, 1, ye, De, me);
            }
            T.clearLayerUpdates();
          } else t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, re.width, re.height, re.depth, ye, De, re.data);
        } else t.texImage3D(r.TEXTURE_2D_ARRAY, 0, Ne, re.width, re.height, re.depth, 0, ye, De, re.data);
        else if (T.isData3DTexture) ke ? (ht && t.texStorage3D(r.TEXTURE_3D, he, Ne, re.width, re.height, re.depth), I && t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, re.width, re.height, re.depth, ye, De, re.data)) : t.texImage3D(r.TEXTURE_3D, 0, Ne, re.width, re.height, re.depth, 0, ye, De, re.data);
        else if (T.isFramebufferTexture) {
          if (ht) if (ke) t.texStorage2D(r.TEXTURE_2D, he, Ne, re.width, re.height);
          else {
            let W = re.width, j = re.height;
            for (let me = 0; me < he; me++) t.texImage2D(r.TEXTURE_2D, me, Ne, W, j, 0, ye, De, null), W >>= 1, j >>= 1;
          }
        } else if (qe.length > 0) {
          if (ke && ht) {
            const W = de(qe[0]);
            t.texStorage2D(r.TEXTURE_2D, he, Ne, W.width, W.height);
          }
          for (let W = 0, j = qe.length; W < j; W++) Se = qe[W], ke ? I && t.texSubImage2D(r.TEXTURE_2D, W, 0, 0, ye, De, Se) : t.texImage2D(r.TEXTURE_2D, W, Ne, ye, De, Se);
          T.generateMipmaps = false;
        } else if (ke) {
          if (ht) {
            const W = de(re);
            t.texStorage2D(r.TEXTURE_2D, he, Ne, W.width, W.height);
          }
          I && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, ye, De, re);
        } else t.texImage2D(r.TEXTURE_2D, 0, Ne, ye, De, re);
        m(T) && p(Y), Ee.__version = K.version, T.onUpdate && T.onUpdate(T);
      }
      R.__version = T.version;
    }
    function ie(R, T, F) {
      if (T.image.length !== 6) return;
      const Y = Ke(R, T), Z = T.source;
      t.bindTexture(r.TEXTURE_CUBE_MAP, R.__webglTexture, r.TEXTURE0 + F);
      const K = n.get(Z);
      if (Z.version !== K.__version || Y === true) {
        t.activeTexture(r.TEXTURE0 + F);
        const Ee = Ye.getPrimaries(Ye.workingColorSpace), ue = T.colorSpace === Di ? null : Ye.getPrimaries(T.colorSpace), _e = T.colorSpace === Di || Ee === ue ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
        r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, T.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, T.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, T.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, _e);
        const We = T.isCompressedTexture || T.image[0].isCompressedTexture, re = T.image[0] && T.image[0].isDataTexture, ye = [];
        for (let j = 0; j < 6; j++) !We && !re ? ye[j] = g(T.image[j], true, i.maxCubemapSize) : ye[j] = re ? T.image[j].image : T.image[j], ye[j] = Ie(T, ye[j]);
        const De = ye[0], Ne = s.convert(T.format, T.colorSpace), Se = s.convert(T.type), qe = v(T.internalFormat, Ne, Se, T.colorSpace), ke = T.isVideoTexture !== true, ht = K.__version === void 0 || Y === true, I = Z.dataReady;
        let he = b(T, De);
        Le(r.TEXTURE_CUBE_MAP, T);
        let W;
        if (We) {
          ke && ht && t.texStorage2D(r.TEXTURE_CUBE_MAP, he, qe, De.width, De.height);
          for (let j = 0; j < 6; j++) {
            W = ye[j].mipmaps;
            for (let me = 0; me < W.length; me++) {
              const pe = W[me];
              T.format !== bn ? Ne !== null ? ke ? I && t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, me, 0, 0, pe.width, pe.height, Ne, pe.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, me, qe, pe.width, pe.height, 0, pe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : ke ? I && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, me, 0, 0, pe.width, pe.height, Ne, Se, pe.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, me, qe, pe.width, pe.height, 0, Ne, Se, pe.data);
            }
          }
        } else {
          if (W = T.mipmaps, ke && ht) {
            W.length > 0 && he++;
            const j = de(ye[0]);
            t.texStorage2D(r.TEXTURE_CUBE_MAP, he, qe, j.width, j.height);
          }
          for (let j = 0; j < 6; j++) if (re) {
            ke ? I && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, ye[j].width, ye[j].height, Ne, Se, ye[j].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, qe, ye[j].width, ye[j].height, 0, Ne, Se, ye[j].data);
            for (let me = 0; me < W.length; me++) {
              const Be = W[me].image[j].image;
              ke ? I && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, me + 1, 0, 0, Be.width, Be.height, Ne, Se, Be.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, me + 1, qe, Be.width, Be.height, 0, Ne, Se, Be.data);
            }
          } else {
            ke ? I && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, Ne, Se, ye[j]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, qe, Ne, Se, ye[j]);
            for (let me = 0; me < W.length; me++) {
              const pe = W[me];
              ke ? I && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, me + 1, 0, 0, Ne, Se, pe.image[j]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + j, me + 1, qe, Ne, Se, pe.image[j]);
            }
          }
        }
        m(T) && p(r.TEXTURE_CUBE_MAP), K.__version = Z.version, T.onUpdate && T.onUpdate(T);
      }
      R.__version = T.version;
    }
    function Te(R, T, F, Y, Z, K) {
      const Ee = s.convert(F.format, F.colorSpace), ue = s.convert(F.type), _e = v(F.internalFormat, Ee, ue, F.colorSpace), We = n.get(T), re = n.get(F);
      if (re.__renderTarget = T, !We.__hasExternalTextures) {
        const ye = Math.max(1, T.width >> K), De = Math.max(1, T.height >> K);
        Z === r.TEXTURE_3D || Z === r.TEXTURE_2D_ARRAY ? t.texImage3D(Z, K, _e, ye, De, T.depth, 0, Ee, ue, null) : t.texImage2D(Z, K, _e, ye, De, 0, Ee, ue, null);
      }
      t.bindFramebuffer(r.FRAMEBUFFER, R), xe(T) ? a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, Y, Z, re.__webglTexture, 0, te(T)) : (Z === r.TEXTURE_2D || Z >= r.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, Y, Z, re.__webglTexture, K), t.bindFramebuffer(r.FRAMEBUFFER, null);
    }
    function ae(R, T, F) {
      if (r.bindRenderbuffer(r.RENDERBUFFER, R), T.depthBuffer) {
        const Y = T.depthTexture, Z = Y && Y.isDepthTexture ? Y.type : null, K = x(T.stencilBuffer, Z), Ee = T.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, ue = te(T);
        xe(T) ? a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, ue, K, T.width, T.height) : F ? r.renderbufferStorageMultisample(r.RENDERBUFFER, ue, K, T.width, T.height) : r.renderbufferStorage(r.RENDERBUFFER, K, T.width, T.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, Ee, r.RENDERBUFFER, R);
      } else {
        const Y = T.textures;
        for (let Z = 0; Z < Y.length; Z++) {
          const K = Y[Z], Ee = s.convert(K.format, K.colorSpace), ue = s.convert(K.type), _e = v(K.internalFormat, Ee, ue, K.colorSpace), We = te(T);
          F && xe(T) === false ? r.renderbufferStorageMultisample(r.RENDERBUFFER, We, _e, T.width, T.height) : xe(T) ? a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, We, _e, T.width, T.height) : r.renderbufferStorage(r.RENDERBUFFER, _e, T.width, T.height);
        }
      }
      r.bindRenderbuffer(r.RENDERBUFFER, null);
    }
    function Ae(R, T) {
      if (T && T.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
      if (t.bindFramebuffer(r.FRAMEBUFFER, R), !(T.depthTexture && T.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
      const Y = n.get(T.depthTexture);
      Y.__renderTarget = T, (!Y.__webglTexture || T.depthTexture.image.width !== T.width || T.depthTexture.image.height !== T.height) && (T.depthTexture.image.width = T.width, T.depthTexture.image.height = T.height, T.depthTexture.needsUpdate = true), q(T.depthTexture, 0);
      const Z = Y.__webglTexture, K = te(T);
      if (T.depthTexture.format === Qr) xe(T) ? a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Z, 0, K) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Z, 0);
      else if (T.depthTexture.format === ds) xe(T) ? a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Z, 0, K) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Z, 0);
      else throw new Error("Unknown depthTexture format");
    }
    function $e(R) {
      const T = n.get(R), F = R.isWebGLCubeRenderTarget === true;
      if (T.__boundDepthTexture !== R.depthTexture) {
        const Y = R.depthTexture;
        if (T.__depthDisposeCallback && T.__depthDisposeCallback(), Y) {
          const Z = () => {
            delete T.__boundDepthTexture, delete T.__depthDisposeCallback, Y.removeEventListener("dispose", Z);
          };
          Y.addEventListener("dispose", Z), T.__depthDisposeCallback = Z;
        }
        T.__boundDepthTexture = Y;
      }
      if (R.depthTexture && !T.__autoAllocateDepthBuffer) {
        if (F) throw new Error("target.depthTexture not supported in Cube render targets");
        Ae(T.__webglFramebuffer, R);
      } else if (F) {
        T.__webglDepthbuffer = [];
        for (let Y = 0; Y < 6; Y++) if (t.bindFramebuffer(r.FRAMEBUFFER, T.__webglFramebuffer[Y]), T.__webglDepthbuffer[Y] === void 0) T.__webglDepthbuffer[Y] = r.createRenderbuffer(), ae(T.__webglDepthbuffer[Y], R, false);
        else {
          const Z = R.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, K = T.__webglDepthbuffer[Y];
          r.bindRenderbuffer(r.RENDERBUFFER, K), r.framebufferRenderbuffer(r.FRAMEBUFFER, Z, r.RENDERBUFFER, K);
        }
      } else if (t.bindFramebuffer(r.FRAMEBUFFER, T.__webglFramebuffer), T.__webglDepthbuffer === void 0) T.__webglDepthbuffer = r.createRenderbuffer(), ae(T.__webglDepthbuffer, R, false);
      else {
        const Y = R.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, Z = T.__webglDepthbuffer;
        r.bindRenderbuffer(r.RENDERBUFFER, Z), r.framebufferRenderbuffer(r.FRAMEBUFFER, Y, r.RENDERBUFFER, Z);
      }
      t.bindFramebuffer(r.FRAMEBUFFER, null);
    }
    function we(R, T, F) {
      const Y = n.get(R);
      T !== void 0 && Te(Y.__webglFramebuffer, R, R.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), F !== void 0 && $e(R);
    }
    function Qe(R) {
      const T = R.texture, F = n.get(R), Y = n.get(T);
      R.addEventListener("dispose", A);
      const Z = R.textures, K = R.isWebGLCubeRenderTarget === true, Ee = Z.length > 1;
      if (Ee || (Y.__webglTexture === void 0 && (Y.__webglTexture = r.createTexture()), Y.__version = T.version, o.memory.textures++), K) {
        F.__webglFramebuffer = [];
        for (let ue = 0; ue < 6; ue++) if (T.mipmaps && T.mipmaps.length > 0) {
          F.__webglFramebuffer[ue] = [];
          for (let _e = 0; _e < T.mipmaps.length; _e++) F.__webglFramebuffer[ue][_e] = r.createFramebuffer();
        } else F.__webglFramebuffer[ue] = r.createFramebuffer();
      } else {
        if (T.mipmaps && T.mipmaps.length > 0) {
          F.__webglFramebuffer = [];
          for (let ue = 0; ue < T.mipmaps.length; ue++) F.__webglFramebuffer[ue] = r.createFramebuffer();
        } else F.__webglFramebuffer = r.createFramebuffer();
        if (Ee) for (let ue = 0, _e = Z.length; ue < _e; ue++) {
          const We = n.get(Z[ue]);
          We.__webglTexture === void 0 && (We.__webglTexture = r.createTexture(), o.memory.textures++);
        }
        if (R.samples > 0 && xe(R) === false) {
          F.__webglMultisampledFramebuffer = r.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
          for (let ue = 0; ue < Z.length; ue++) {
            const _e = Z[ue];
            F.__webglColorRenderbuffer[ue] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, F.__webglColorRenderbuffer[ue]);
            const We = s.convert(_e.format, _e.colorSpace), re = s.convert(_e.type), ye = v(_e.internalFormat, We, re, _e.colorSpace, R.isXRRenderTarget === true), De = te(R);
            r.renderbufferStorageMultisample(r.RENDERBUFFER, De, ye, R.width, R.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ue, r.RENDERBUFFER, F.__webglColorRenderbuffer[ue]);
          }
          r.bindRenderbuffer(r.RENDERBUFFER, null), R.depthBuffer && (F.__webglDepthRenderbuffer = r.createRenderbuffer(), ae(F.__webglDepthRenderbuffer, R, true)), t.bindFramebuffer(r.FRAMEBUFFER, null);
        }
      }
      if (K) {
        t.bindTexture(r.TEXTURE_CUBE_MAP, Y.__webglTexture), Le(r.TEXTURE_CUBE_MAP, T);
        for (let ue = 0; ue < 6; ue++) if (T.mipmaps && T.mipmaps.length > 0) for (let _e = 0; _e < T.mipmaps.length; _e++) Te(F.__webglFramebuffer[ue][_e], R, T, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + ue, _e);
        else Te(F.__webglFramebuffer[ue], R, T, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + ue, 0);
        m(T) && p(r.TEXTURE_CUBE_MAP), t.unbindTexture();
      } else if (Ee) {
        for (let ue = 0, _e = Z.length; ue < _e; ue++) {
          const We = Z[ue], re = n.get(We);
          t.bindTexture(r.TEXTURE_2D, re.__webglTexture), Le(r.TEXTURE_2D, We), Te(F.__webglFramebuffer, R, We, r.COLOR_ATTACHMENT0 + ue, r.TEXTURE_2D, 0), m(We) && p(r.TEXTURE_2D);
        }
        t.unbindTexture();
      } else {
        let ue = r.TEXTURE_2D;
        if ((R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (ue = R.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY), t.bindTexture(ue, Y.__webglTexture), Le(ue, T), T.mipmaps && T.mipmaps.length > 0) for (let _e = 0; _e < T.mipmaps.length; _e++) Te(F.__webglFramebuffer[_e], R, T, r.COLOR_ATTACHMENT0, ue, _e);
        else Te(F.__webglFramebuffer, R, T, r.COLOR_ATTACHMENT0, ue, 0);
        m(T) && p(ue), t.unbindTexture();
      }
      R.depthBuffer && $e(R);
    }
    function Q(R) {
      const T = R.textures;
      for (let F = 0, Y = T.length; F < Y; F++) {
        const Z = T[F];
        if (m(Z)) {
          const K = y(R), Ee = n.get(Z).__webglTexture;
          t.bindTexture(K, Ee), p(K), t.unbindTexture();
        }
      }
    }
    const J = [], C = [];
    function be(R) {
      if (R.samples > 0) {
        if (xe(R) === false) {
          const T = R.textures, F = R.width, Y = R.height;
          let Z = r.COLOR_BUFFER_BIT;
          const K = R.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, Ee = n.get(R), ue = T.length > 1;
          if (ue) for (let _e = 0; _e < T.length; _e++) t.bindFramebuffer(r.FRAMEBUFFER, Ee.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + _e, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, Ee.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + _e, r.TEXTURE_2D, null, 0);
          t.bindFramebuffer(r.READ_FRAMEBUFFER, Ee.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Ee.__webglFramebuffer);
          for (let _e = 0; _e < T.length; _e++) {
            if (R.resolveDepthBuffer && (R.depthBuffer && (Z |= r.DEPTH_BUFFER_BIT), R.stencilBuffer && R.resolveStencilBuffer && (Z |= r.STENCIL_BUFFER_BIT)), ue) {
              r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, Ee.__webglColorRenderbuffer[_e]);
              const We = n.get(T[_e]).__webglTexture;
              r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, We, 0);
            }
            r.blitFramebuffer(0, 0, F, Y, 0, 0, F, Y, Z, r.NEAREST), l === true && (J.length = 0, C.length = 0, J.push(r.COLOR_ATTACHMENT0 + _e), R.depthBuffer && R.resolveDepthBuffer === false && (J.push(K), C.push(K), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, C)), r.invalidateFramebuffer(r.READ_FRAMEBUFFER, J));
          }
          if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), ue) for (let _e = 0; _e < T.length; _e++) {
            t.bindFramebuffer(r.FRAMEBUFFER, Ee.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + _e, r.RENDERBUFFER, Ee.__webglColorRenderbuffer[_e]);
            const We = n.get(T[_e]).__webglTexture;
            t.bindFramebuffer(r.FRAMEBUFFER, Ee.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + _e, r.TEXTURE_2D, We, 0);
          }
          t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Ee.__webglMultisampledFramebuffer);
        } else if (R.depthBuffer && R.resolveDepthBuffer === false && l) {
          const T = R.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT;
          r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [
            T
          ]);
        }
      }
    }
    function te(R) {
      return Math.min(i.maxSamples, R.samples);
    }
    function xe(R) {
      const T = n.get(R);
      return R.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && T.__useRenderToTexture !== false;
    }
    function se(R) {
      const T = o.render.frame;
      u.get(R) !== T && (u.set(R, T), R.update());
    }
    function Ie(R, T) {
      const F = R.colorSpace, Y = R.format, Z = R.type;
      return R.isCompressedTexture === true || R.isVideoTexture === true || F !== Qt && F !== Di && (Ye.getTransfer(F) === lt ? (Y !== bn || Z !== Si) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), T;
    }
    function de(R) {
      return typeof HTMLImageElement < "u" && R instanceof HTMLImageElement ? (c.width = R.naturalWidth || R.width, c.height = R.naturalHeight || R.height) : typeof VideoFrame < "u" && R instanceof VideoFrame ? (c.width = R.displayWidth, c.height = R.displayHeight) : (c.width = R.width, c.height = R.height), c;
    }
    this.allocateTextureUnit = O, this.resetTextureUnits = G, this.setTexture2D = q, this.setTexture2DArray = B, this.setTexture3D = $, this.setTextureCube = H, this.rebindTextures = we, this.setupRenderTarget = Qe, this.updateRenderTargetMipmap = Q, this.updateMultisampleRenderTarget = be, this.setupDepthRenderbuffer = $e, this.setupFrameBufferTexture = Te, this.useMultisampledRTT = xe;
  }
  function aM(r, e) {
    function t(n, i = Di) {
      let s;
      const o = Ye.getTransfer(i);
      if (n === Si) return r.UNSIGNED_BYTE;
      if (n === cu) return r.UNSIGNED_SHORT_4_4_4_4;
      if (n === uu) return r.UNSIGNED_SHORT_5_5_5_1;
      if (n === Ed) return r.UNSIGNED_INT_5_9_9_9_REV;
      if (n === Md) return r.BYTE;
      if (n === Td) return r.SHORT;
      if (n === oo) return r.UNSIGNED_SHORT;
      if (n === lu) return r.INT;
      if (n === Sr) return r.UNSIGNED_INT;
      if (n === Un) return r.FLOAT;
      if (n === xi) return r.HALF_FLOAT;
      if (n === bd) return r.ALPHA;
      if (n === wd) return r.RGB;
      if (n === bn) return r.RGBA;
      if (n === Ad) return r.LUMINANCE;
      if (n === Rd) return r.LUMINANCE_ALPHA;
      if (n === Qr) return r.DEPTH_COMPONENT;
      if (n === ds) return r.DEPTH_STENCIL;
      if (n === hu) return r.RED;
      if (n === fu) return r.RED_INTEGER;
      if (n === Cd) return r.RG;
      if (n === du) return r.RG_INTEGER;
      if (n === pu) return r.RGBA_INTEGER;
      if (n === ua || n === ha || n === fa || n === da) if (o === lt) if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
        if (n === ua) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        if (n === ha) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        if (n === fa) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        if (n === da) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      } else return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === ua) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === ha) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === fa) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === da) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
      if (n === tc || n === nc || n === ic || n === rc) if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === tc) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === nc) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === ic) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === rc) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
      if (n === sc || n === oc || n === ac) if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === sc || n === oc) return o === lt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === ac) return o === lt ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
      if (n === lc || n === cc || n === uc || n === hc || n === fc || n === dc || n === pc || n === mc || n === gc || n === _c || n === xc || n === vc || n === yc || n === Sc) if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === lc) return o === lt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === cc) return o === lt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === uc) return o === lt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === hc) return o === lt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === fc) return o === lt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === dc) return o === lt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === pc) return o === lt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === mc) return o === lt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === gc) return o === lt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === _c) return o === lt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === xc) return o === lt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === vc) return o === lt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === yc) return o === lt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Sc) return o === lt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
      if (n === pa || n === Mc || n === Tc) if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === pa) return o === lt ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Mc) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Tc) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
      if (n === Pd || n === Ec || n === bc || n === wc) if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === pa) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === Ec) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === bc) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === wc) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
      return n === fs ? r.UNSIGNED_INT_24_8 : r[n] !== void 0 ? r[n] : null;
    }
    return {
      convert: t
    };
  }
  const lM = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, cM = `
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
  class uM {
    constructor() {
      this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
    }
    init(e, t, n) {
      if (this.texture === null) {
        const i = new Ct(), s = e.properties.get(i);
        s.__webglTexture = t.texture, (t.depthNear !== n.depthNear || t.depthFar !== n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
      }
    }
    getMesh(e) {
      if (this.texture !== null && this.mesh === null) {
        const t = e.cameras[0].viewport, n = new Gt({
          vertexShader: lM,
          fragmentShader: cM,
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
        this.mesh = new Rt(new To(20, 20), n);
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
  class hM extends As {
    constructor(e, t) {
      super();
      const n = this;
      let i = null, s = 1, o = null, a = "local-floor", l = 1, c = null, u = null, h = null, f = null, d = null, _ = null;
      const g = new uM(), m = t.getContextAttributes();
      let p = null, y = null;
      const v = [], x = [], b = new ee();
      let w = null;
      const A = new $t();
      A.viewport = new et();
      const P = new $t();
      P.viewport = new et();
      const S = [
        A,
        P
      ], M = new M0();
      let L = null, G = null;
      this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(X) {
        let ie = v[X];
        return ie === void 0 && (ie = new ml(), v[X] = ie), ie.getTargetRaySpace();
      }, this.getControllerGrip = function(X) {
        let ie = v[X];
        return ie === void 0 && (ie = new ml(), v[X] = ie), ie.getGripSpace();
      }, this.getHand = function(X) {
        let ie = v[X];
        return ie === void 0 && (ie = new ml(), v[X] = ie), ie.getHandSpace();
      };
      function O(X) {
        const ie = x.indexOf(X.inputSource);
        if (ie === -1) return;
        const Te = v[ie];
        Te !== void 0 && (Te.update(X.inputSource, X.frame, c || o), Te.dispatchEvent({
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
        L = null, G = null, g.reset(), e.setRenderTarget(p), d = null, f = null, h = null, i = null, y = null, Ke.stop(), n.isPresenting = false, e.setPixelRatio(w), e.setSize(b.width, b.height, false), n.dispatchEvent({
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
        return f !== null ? f : d;
      }, this.getBinding = function() {
        return h;
      }, this.getFrame = function() {
        return _;
      }, this.getSession = function() {
        return i;
      }, this.setSession = async function(X) {
        if (i = X, i !== null) {
          if (p = e.getRenderTarget(), i.addEventListener("select", O), i.addEventListener("selectstart", O), i.addEventListener("selectend", O), i.addEventListener("squeeze", O), i.addEventListener("squeezestart", O), i.addEventListener("squeezeend", O), i.addEventListener("end", V), i.addEventListener("inputsourceschange", q), m.xrCompatible !== true && await t.makeXRCompatible(), w = e.getPixelRatio(), e.getSize(b), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
            let Te = null, ae = null, Ae = null;
            m.depth && (Ae = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Te = m.stencil ? ds : Qr, ae = m.stencil ? fs : Sr);
            const $e = {
              colorFormat: t.RGBA8,
              depthFormat: Ae,
              scaleFactor: s
            };
            h = new XRWebGLBinding(i, t), f = h.createProjectionLayer($e), i.updateRenderState({
              layers: [
                f
              ]
            }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, false), y = new On(f.textureWidth, f.textureHeight, {
              format: bn,
              type: Si,
              depthTexture: new Yd(f.textureWidth, f.textureHeight, ae, void 0, void 0, void 0, void 0, void 0, void 0, Te),
              stencilBuffer: m.stencil,
              colorSpace: e.outputColorSpace,
              samples: m.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === false
            });
          } else {
            const Te = {
              antialias: m.antialias,
              alpha: true,
              depth: m.depth,
              stencil: m.stencil,
              framebufferScaleFactor: s
            };
            d = new XRWebGLLayer(i, t, Te), i.updateRenderState({
              baseLayer: d
            }), e.setPixelRatio(1), e.setSize(d.framebufferWidth, d.framebufferHeight, false), y = new On(d.framebufferWidth, d.framebufferHeight, {
              format: bn,
              type: Si,
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
          const Te = X.removed[ie], ae = x.indexOf(Te);
          ae >= 0 && (x[ae] = null, v[ae].disconnect(Te));
        }
        for (let ie = 0; ie < X.added.length; ie++) {
          const Te = X.added[ie];
          let ae = x.indexOf(Te);
          if (ae === -1) {
            for (let $e = 0; $e < v.length; $e++) if ($e >= x.length) {
              x.push(Te), ae = $e;
              break;
            } else if (x[$e] === null) {
              x[$e] = Te, ae = $e;
              break;
            }
            if (ae === -1) break;
          }
          const Ae = v[ae];
          Ae && Ae.connect(Te);
        }
      }
      const B = new D(), $ = new D();
      function H(X, ie, Te) {
        B.setFromMatrixPosition(ie.matrixWorld), $.setFromMatrixPosition(Te.matrixWorld);
        const ae = B.distanceTo($), Ae = ie.projectionMatrix.elements, $e = Te.projectionMatrix.elements, we = Ae[14] / (Ae[10] - 1), Qe = Ae[14] / (Ae[10] + 1), Q = (Ae[9] + 1) / Ae[5], J = (Ae[9] - 1) / Ae[5], C = (Ae[8] - 1) / Ae[0], be = ($e[8] + 1) / $e[0], te = we * C, xe = we * be, se = ae / (-C + be), Ie = se * -C;
        if (ie.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(Ie), X.translateZ(se), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert(), Ae[10] === -1) X.projectionMatrix.copy(ie.projectionMatrix), X.projectionMatrixInverse.copy(ie.projectionMatrixInverse);
        else {
          const de = we + se, R = Qe + se, T = te - Ie, F = xe + (ae - Ie), Y = Q * Qe / R * de, Z = J * Qe / R * de;
          X.projectionMatrix.makePerspective(T, F, Y, Z, de, R), X.projectionMatrixInverse.copy(X.projectionMatrix).invert();
        }
      }
      function oe(X, ie) {
        ie === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(ie.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert();
      }
      this.updateCamera = function(X) {
        if (i === null) return;
        let ie = X.near, Te = X.far;
        g.texture !== null && (g.depthNear > 0 && (ie = g.depthNear), g.depthFar > 0 && (Te = g.depthFar)), M.near = P.near = A.near = ie, M.far = P.far = A.far = Te, (L !== M.near || G !== M.far) && (i.updateRenderState({
          depthNear: M.near,
          depthFar: M.far
        }), L = M.near, G = M.far), A.layers.mask = X.layers.mask | 2, P.layers.mask = X.layers.mask | 4, M.layers.mask = A.layers.mask | P.layers.mask;
        const ae = X.parent, Ae = M.cameras;
        oe(M, ae);
        for (let $e = 0; $e < Ae.length; $e++) oe(Ae[$e], ae);
        Ae.length === 2 ? H(M, A, P) : M.projectionMatrix.copy(A.projectionMatrix), ce(X, M, ae);
      };
      function ce(X, ie, Te) {
        Te === null ? X.matrix.copy(ie.matrixWorld) : (X.matrix.copy(Te.matrixWorld), X.matrix.invert(), X.matrix.multiply(ie.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(true), X.projectionMatrix.copy(ie.projectionMatrix), X.projectionMatrixInverse.copy(ie.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = ps * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1);
      }
      this.getCamera = function() {
        return M;
      }, this.getFoveation = function() {
        if (!(f === null && d === null)) return l;
      }, this.setFoveation = function(X) {
        l = X, f !== null && (f.fixedFoveation = X), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = X);
      }, this.hasDepthSensing = function() {
        return g.texture !== null;
      }, this.getDepthSensingMesh = function() {
        return g.getMesh(M);
      };
      let ge = null;
      function Le(X, ie) {
        if (u = ie.getViewerPose(c || o), _ = ie, u !== null) {
          const Te = u.views;
          d !== null && (e.setRenderTargetFramebuffer(y, d.framebuffer), e.setRenderTarget(y));
          let ae = false;
          Te.length !== M.cameras.length && (M.cameras.length = 0, ae = true);
          for (let we = 0; we < Te.length; we++) {
            const Qe = Te[we];
            let Q = null;
            if (d !== null) Q = d.getViewport(Qe);
            else {
              const C = h.getViewSubImage(f, Qe);
              Q = C.viewport, we === 0 && (e.setRenderTargetTextures(y, C.colorTexture, f.ignoreDepthValues ? void 0 : C.depthStencilTexture), e.setRenderTarget(y));
            }
            let J = S[we];
            J === void 0 && (J = new $t(), J.layers.enable(we), J.viewport = new et(), S[we] = J), J.matrix.fromArray(Qe.transform.matrix), J.matrix.decompose(J.position, J.quaternion, J.scale), J.projectionMatrix.fromArray(Qe.projectionMatrix), J.projectionMatrixInverse.copy(J.projectionMatrix).invert(), J.viewport.set(Q.x, Q.y, Q.width, Q.height), we === 0 && (M.matrix.copy(J.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), ae === true && M.cameras.push(J);
          }
          const Ae = i.enabledFeatures;
          if (Ae && Ae.includes("depth-sensing") && i.depthUsage == "gpu-optimized" && h) {
            const we = h.getDepthInformation(Te[0]);
            we && we.isValid && we.texture && g.init(e, we, i.renderState);
          }
        }
        for (let Te = 0; Te < v.length; Te++) {
          const ae = x[Te], Ae = v[Te];
          ae !== null && Ae !== void 0 && Ae.update(ae, ie, c || o);
        }
        ge && ge(X, ie), ie.detectedPlanes && n.dispatchEvent({
          type: "planesdetected",
          data: ie
        }), _ = null;
      }
      const Ke = new rp();
      Ke.setAnimationLoop(Le), this.setAnimationLoop = function(X) {
        ge = X;
      }, this.dispose = function() {
      };
    }
  }
  const tr = new Fn(), fM = new Fe();
  function dM(r, e) {
    function t(m, p) {
      m.matrixAutoUpdate === true && m.updateMatrix(), p.value.copy(m.matrix);
    }
    function n(m, p) {
      p.color.getRGB(m.fogColor.value, kd(r)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density);
    }
    function i(m, p, y, v, x) {
      p.isMeshBasicMaterial || p.isMeshLambertMaterial ? s(m, p) : p.isMeshToonMaterial ? (s(m, p), h(m, p)) : p.isMeshPhongMaterial ? (s(m, p), u(m, p)) : p.isMeshStandardMaterial ? (s(m, p), f(m, p), p.isMeshPhysicalMaterial && d(m, p, x)) : p.isMeshMatcapMaterial ? (s(m, p), _(m, p)) : p.isMeshDepthMaterial ? s(m, p) : p.isMeshDistanceMaterial ? (s(m, p), g(m, p)) : p.isMeshNormalMaterial ? s(m, p) : p.isLineBasicMaterial ? (o(m, p), p.isLineDashedMaterial && a(m, p)) : p.isPointsMaterial ? l(m, p, y, v) : p.isSpriteMaterial ? c(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = false);
    }
    function s(m, p) {
      m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, t(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === nn && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, t(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === nn && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, t(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, t(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
      const y = e.get(p), v = y.envMap, x = y.envMapRotation;
      v && (m.envMap.value = v, tr.copy(x), tr.x *= -1, tr.y *= -1, tr.z *= -1, v.isCubeTexture && v.isRenderTargetTexture === false && (tr.y *= -1, tr.z *= -1), m.envMapRotation.value.setFromMatrix4(fM.makeRotationFromEuler(tr)), m.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === false ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap && (m.lightMap.value = p.lightMap, m.lightMapIntensity.value = p.lightMapIntensity, t(p.lightMap, m.lightMapTransform)), p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, m.aoMapTransform));
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
    function f(m, p) {
      m.metalness.value = p.metalness, p.metalnessMap && (m.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, m.metalnessMapTransform)), m.roughness.value = p.roughness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, m.roughnessMapTransform)), p.envMap && (m.envMapIntensity.value = p.envMapIntensity);
    }
    function d(m, p, y) {
      m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === nn && m.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (m.dispersion.value = p.dispersion), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = y.texture, m.transmissionSamplerSize.value.set(y.width, y.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, m.specularIntensityMapTransform));
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
  function pM(r, e, t, n) {
    let i = {}, s = {}, o = [];
    const a = r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);
    function l(y, v) {
      const x = v.program;
      n.uniformBlockBinding(y, x);
    }
    function c(y, v) {
      let x = i[y.id];
      x === void 0 && (_(y), x = u(y), i[y.id] = x, y.addEventListener("dispose", m));
      const b = v.program;
      n.updateUBOMapping(y, b);
      const w = e.render.frame;
      s[y.id] !== w && (f(y), s[y.id] = w);
    }
    function u(y) {
      const v = h();
      y.__bindingPointIndex = v;
      const x = r.createBuffer(), b = y.__size, w = y.usage;
      return r.bindBuffer(r.UNIFORM_BUFFER, x), r.bufferData(r.UNIFORM_BUFFER, b, w), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, v, x), x;
    }
    function h() {
      for (let y = 0; y < a; y++) if (o.indexOf(y) === -1) return o.push(y), y;
      return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
    }
    function f(y) {
      const v = i[y.id], x = y.uniforms, b = y.__cache;
      r.bindBuffer(r.UNIFORM_BUFFER, v);
      for (let w = 0, A = x.length; w < A; w++) {
        const P = Array.isArray(x[w]) ? x[w] : [
          x[w]
        ];
        for (let S = 0, M = P.length; S < M; S++) {
          const L = P[S];
          if (d(L, w, S, b) === true) {
            const G = L.__offset, O = Array.isArray(L.value) ? L.value : [
              L.value
            ];
            let V = 0;
            for (let q = 0; q < O.length; q++) {
              const B = O[q], $ = g(B);
              typeof B == "number" || typeof B == "boolean" ? (L.__data[0] = B, r.bufferSubData(r.UNIFORM_BUFFER, G + V, L.__data)) : B.isMatrix3 ? (L.__data[0] = B.elements[0], L.__data[1] = B.elements[1], L.__data[2] = B.elements[2], L.__data[3] = 0, L.__data[4] = B.elements[3], L.__data[5] = B.elements[4], L.__data[6] = B.elements[5], L.__data[7] = 0, L.__data[8] = B.elements[6], L.__data[9] = B.elements[7], L.__data[10] = B.elements[8], L.__data[11] = 0) : (B.toArray(L.__data, V), V += $.storage / Float32Array.BYTES_PER_ELEMENT);
            }
            r.bufferSubData(r.UNIFORM_BUFFER, G, L.__data);
          }
        }
      }
      r.bindBuffer(r.UNIFORM_BUFFER, null);
    }
    function d(y, v, x, b) {
      const w = y.value, A = v + "_" + x;
      if (b[A] === void 0) return typeof w == "number" || typeof w == "boolean" ? b[A] = w : b[A] = w.clone(), true;
      {
        const P = b[A];
        if (typeof w == "number" || typeof w == "boolean") {
          if (P !== w) return b[A] = w, true;
        } else if (P.equals(w) === false) return P.copy(w), true;
      }
      return false;
    }
    function _(y) {
      const v = y.uniforms;
      let x = 0;
      const b = 16;
      for (let A = 0, P = v.length; A < P; A++) {
        const S = Array.isArray(v[A]) ? v[A] : [
          v[A]
        ];
        for (let M = 0, L = S.length; M < L; M++) {
          const G = S[M], O = Array.isArray(G.value) ? G.value : [
            G.value
          ];
          for (let V = 0, q = O.length; V < q; V++) {
            const B = O[V], $ = g(B), H = x % b, oe = H % $.boundary, ce = H + oe;
            x += oe, ce !== 0 && b - ce < $.storage && (x += b - ce), G.__data = new Float32Array($.storage / Float32Array.BYTES_PER_ELEMENT), G.__offset = x, x += $.storage;
          }
        }
      }
      const w = x % b;
      return w > 0 && (x += b - w), y.__size = x, y.__cache = {}, this;
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
  class mM {
    constructor(e = {}) {
      const { canvas: t = Bg(), context: n = null, depth: i = true, stencil: s = false, alpha: o = false, antialias: a = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: u = "default", failIfMajorPerformanceCaveat: h = false, reverseDepthBuffer: f = false } = e;
      this.isWebGLRenderer = true;
      let d;
      if (n !== null) {
        if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
        d = n.getContextAttributes().alpha;
      } else d = o;
      const _ = new Uint32Array(4), g = new Int32Array(4);
      let m = null, p = null;
      const y = [], v = [];
      this.domElement = t, this.debug = {
        checkShaderErrors: true,
        onShaderError: null
      }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = Ut, this.toneMapping = zi, this.toneMappingExposure = 1;
      const x = this;
      let b = false, w = 0, A = 0, P = null, S = -1, M = null;
      const L = new et(), G = new et();
      let O = null;
      const V = new Re(0);
      let q = 0, B = t.width, $ = t.height, H = 1, oe = null, ce = null;
      const ge = new et(0, 0, B, $), Le = new et(0, 0, B, $);
      let Ke = false;
      const X = new vu();
      let ie = false, Te = false;
      this.transmissionResolutionScale = 1;
      const ae = new Fe(), Ae = new Fe(), $e = new D(), we = new et(), Qe = {
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
      let C = n;
      function be(E, N) {
        return t.getContext(E, N);
      }
      try {
        const E = {
          alpha: true,
          depth: i,
          stencil: s,
          antialias: a,
          premultipliedAlpha: l,
          preserveDrawingBuffer: c,
          powerPreference: u,
          failIfMajorPerformanceCaveat: h
        };
        if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${au}`), t.addEventListener("webglcontextlost", j, false), t.addEventListener("webglcontextrestored", me, false), t.addEventListener("webglcontextcreationerror", pe, false), C === null) {
          const N = "webgl2";
          if (C = be(N, E), C === null) throw be(N) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
      } catch (E) {
        throw console.error("THREE.WebGLRenderer: " + E.message), E;
      }
      let te, xe, se, Ie, de, R, T, F, Y, Z, K, Ee, ue, _e, We, re, ye, De, Ne, Se, qe, ke, ht, I;
      function he() {
        te = new by(C), te.init(), ke = new aM(C, te), xe = new vy(C, te, e, ke), se = new sM(C, te), xe.reverseDepthBuffer && f && se.buffers.depth.setReversed(true), Ie = new Ry(C), de = new qS(), R = new oM(C, te, se, de, xe, ke, Ie), T = new Sy(x), F = new Ey(x), Y = new U0(C), ht = new _y(C, Y), Z = new wy(C, Y, Ie, ht), K = new Py(C, Z, Y, Ie), Ne = new Cy(C, xe, R), re = new yy(de), Ee = new XS(x, T, F, te, xe, ht, re), ue = new dM(x, de), _e = new KS(), We = new eM(te), De = new gy(x, T, F, se, K, d, l), ye = new iM(x, K, xe), I = new pM(C, Ie, xe, se), Se = new xy(C, te, Ie), qe = new Ay(C, te, Ie), Ie.programs = Ee.programs, x.capabilities = xe, x.extensions = te, x.properties = de, x.renderLists = _e, x.shadowMap = ye, x.state = se, x.info = Ie;
      }
      he();
      const W = new hM(x, C);
      this.xr = W, this.getContext = function() {
        return C;
      }, this.getContextAttributes = function() {
        return C.getContextAttributes();
      }, this.forceContextLoss = function() {
        const E = te.get("WEBGL_lose_context");
        E && E.loseContext();
      }, this.forceContextRestore = function() {
        const E = te.get("WEBGL_lose_context");
        E && E.restoreContext();
      }, this.getPixelRatio = function() {
        return H;
      }, this.setPixelRatio = function(E) {
        E !== void 0 && (H = E, this.setSize(B, $, false));
      }, this.getSize = function(E) {
        return E.set(B, $);
      }, this.setSize = function(E, N, z = true) {
        if (W.isPresenting) {
          console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
          return;
        }
        B = E, $ = N, t.width = Math.floor(E * H), t.height = Math.floor(N * H), z === true && (t.style.width = E + "px", t.style.height = N + "px"), this.setViewport(0, 0, E, N);
      }, this.getDrawingBufferSize = function(E) {
        return E.set(B * H, $ * H).floor();
      }, this.setDrawingBufferSize = function(E, N, z) {
        B = E, $ = N, H = z, t.width = Math.floor(E * z), t.height = Math.floor(N * z), this.setViewport(0, 0, E, N);
      }, this.getCurrentViewport = function(E) {
        return E.copy(L);
      }, this.getViewport = function(E) {
        return E.copy(ge);
      }, this.setViewport = function(E, N, z, k) {
        E.isVector4 ? ge.set(E.x, E.y, E.z, E.w) : ge.set(E, N, z, k), se.viewport(L.copy(ge).multiplyScalar(H).round());
      }, this.getScissor = function(E) {
        return E.copy(Le);
      }, this.setScissor = function(E, N, z, k) {
        E.isVector4 ? Le.set(E.x, E.y, E.z, E.w) : Le.set(E, N, z, k), se.scissor(G.copy(Le).multiplyScalar(H).round());
      }, this.getScissorTest = function() {
        return Ke;
      }, this.setScissorTest = function(E) {
        se.setScissorTest(Ke = E);
      }, this.setOpaqueSort = function(E) {
        oe = E;
      }, this.setTransparentSort = function(E) {
        ce = E;
      }, this.getClearColor = function(E) {
        return E.copy(De.getClearColor());
      }, this.setClearColor = function() {
        De.setClearColor.apply(De, arguments);
      }, this.getClearAlpha = function() {
        return De.getClearAlpha();
      }, this.setClearAlpha = function() {
        De.setClearAlpha.apply(De, arguments);
      }, this.clear = function(E = true, N = true, z = true) {
        let k = 0;
        if (E) {
          let U = false;
          if (P !== null) {
            const ne = P.texture.format;
            U = ne === pu || ne === du || ne === fu;
          }
          if (U) {
            const ne = P.texture.type, fe = ne === Si || ne === Sr || ne === oo || ne === fs || ne === cu || ne === uu, ve = De.getClearColor(), Me = De.getClearAlpha(), Ue = ve.r, Oe = ve.g, Ce = ve.b;
            fe ? (_[0] = Ue, _[1] = Oe, _[2] = Ce, _[3] = Me, C.clearBufferuiv(C.COLOR, 0, _)) : (g[0] = Ue, g[1] = Oe, g[2] = Ce, g[3] = Me, C.clearBufferiv(C.COLOR, 0, g));
          } else k |= C.COLOR_BUFFER_BIT;
        }
        N && (k |= C.DEPTH_BUFFER_BIT), z && (k |= C.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), C.clear(k);
      }, this.clearColor = function() {
        this.clear(true, false, false);
      }, this.clearDepth = function() {
        this.clear(false, true, false);
      }, this.clearStencil = function() {
        this.clear(false, false, true);
      }, this.dispose = function() {
        t.removeEventListener("webglcontextlost", j, false), t.removeEventListener("webglcontextrestored", me, false), t.removeEventListener("webglcontextcreationerror", pe, false), De.dispose(), _e.dispose(), We.dispose(), de.dispose(), T.dispose(), F.dispose(), K.dispose(), ht.dispose(), I.dispose(), Ee.dispose(), W.dispose(), W.removeEventListener("sessionstart", uh), W.removeEventListener("sessionend", hh), Ki.stop();
      };
      function j(E) {
        E.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), b = true;
      }
      function me() {
        console.log("THREE.WebGLRenderer: Context Restored."), b = false;
        const E = Ie.autoReset, N = ye.enabled, z = ye.autoUpdate, k = ye.needsUpdate, U = ye.type;
        he(), Ie.autoReset = E, ye.enabled = N, ye.autoUpdate = z, ye.needsUpdate = k, ye.type = U;
      }
      function pe(E) {
        console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", E.statusMessage);
      }
      function Be(E) {
        const N = E.target;
        N.removeEventListener("dispose", Be), yt(N);
      }
      function yt(E) {
        Bt(E), de.remove(E);
      }
      function Bt(E) {
        const N = de.get(E).programs;
        N !== void 0 && (N.forEach(function(z) {
          Ee.releaseProgram(z);
        }), E.isShaderMaterial && Ee.releaseShaderCache(E));
      }
      this.renderBufferDirect = function(E, N, z, k, U, ne) {
        N === null && (N = Qe);
        const fe = U.isMesh && U.matrixWorld.determinant() < 0, ve = wm(E, N, z, k, U);
        se.setMaterial(k, fe);
        let Me = z.index, Ue = 1;
        if (k.wireframe === true) {
          if (Me = Z.getWireframeAttribute(z), Me === void 0) return;
          Ue = 2;
        }
        const Oe = z.drawRange, Ce = z.attributes.position;
        let je = Oe.start * Ue, tt = (Oe.start + Oe.count) * Ue;
        ne !== null && (je = Math.max(je, ne.start * Ue), tt = Math.min(tt, (ne.start + ne.count) * Ue)), Me !== null ? (je = Math.max(je, 0), tt = Math.min(tt, Me.count)) : Ce != null && (je = Math.max(je, 0), tt = Math.min(tt, Ce.count));
        const Et = tt - je;
        if (Et < 0 || Et === 1 / 0) return;
        ht.setup(U, k, ve, z, Me);
        let St, Je = Se;
        if (Me !== null && (St = Y.get(Me), Je = qe, Je.setIndex(St)), U.isMesh) k.wireframe === true ? (se.setLineWidth(k.wireframeLinewidth * J()), Je.setMode(C.LINES)) : Je.setMode(C.TRIANGLES);
        else if (U.isLine) {
          let Pe = k.linewidth;
          Pe === void 0 && (Pe = 1), se.setLineWidth(Pe * J()), U.isLineSegments ? Je.setMode(C.LINES) : U.isLineLoop ? Je.setMode(C.LINE_LOOP) : Je.setMode(C.LINE_STRIP);
        } else U.isPoints ? Je.setMode(C.POINTS) : U.isSprite && Je.setMode(C.TRIANGLES);
        if (U.isBatchedMesh) if (U._multiDrawInstances !== null) Je.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
        else if (te.get("WEBGL_multi_draw")) Je.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
        else {
          const Pe = U._multiDrawStarts, Nt = U._multiDrawCounts, nt = U._multiDrawCount, Cn = Me ? Y.get(Me).bytesPerElement : 1, Pr = de.get(k).currentProgram.getUniforms();
          for (let un = 0; un < nt; un++) Pr.setValue(C, "_gl_DrawID", un), Je.render(Pe[un] / Cn, Nt[un]);
        }
        else if (U.isInstancedMesh) Je.renderInstances(je, Et, U.count);
        else if (z.isInstancedBufferGeometry) {
          const Pe = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0, Nt = Math.min(z.instanceCount, Pe);
          Je.renderInstances(je, Et, Nt);
        } else Je.render(je, Et);
      };
      function rt(E, N, z) {
        E.transparent === true && E.side === kn && E.forceSinglePass === false ? (E.side = nn, E.needsUpdate = true, Co(E, N, z), E.side = yi, E.needsUpdate = true, Co(E, N, z), E.side = kn) : Co(E, N, z);
      }
      this.compile = function(E, N, z = null) {
        z === null && (z = E), p = We.get(z), p.init(N), v.push(p), z.traverseVisible(function(U) {
          U.isLight && U.layers.test(N.layers) && (p.pushLight(U), U.castShadow && p.pushShadow(U));
        }), E !== z && E.traverseVisible(function(U) {
          U.isLight && U.layers.test(N.layers) && (p.pushLight(U), U.castShadow && p.pushShadow(U));
        }), p.setupLights();
        const k = /* @__PURE__ */ new Set();
        return E.traverse(function(U) {
          if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite)) return;
          const ne = U.material;
          if (ne) if (Array.isArray(ne)) for (let fe = 0; fe < ne.length; fe++) {
            const ve = ne[fe];
            rt(ve, z, U), k.add(ve);
          }
          else rt(ne, z, U), k.add(ne);
        }), v.pop(), p = null, k;
      }, this.compileAsync = function(E, N, z = null) {
        const k = this.compile(E, N, z);
        return new Promise((U) => {
          function ne() {
            if (k.forEach(function(fe) {
              de.get(fe).currentProgram.isReady() && k.delete(fe);
            }), k.size === 0) {
              U(E);
              return;
            }
            setTimeout(ne, 10);
          }
          te.get("KHR_parallel_shader_compile") !== null ? ne() : setTimeout(ne, 10);
        });
      };
      let Rn = null;
      function Jn(E) {
        Rn && Rn(E);
      }
      function uh() {
        Ki.stop();
      }
      function hh() {
        Ki.start();
      }
      const Ki = new rp();
      Ki.setAnimationLoop(Jn), typeof self < "u" && Ki.setContext(self), this.setAnimationLoop = function(E) {
        Rn = E, W.setAnimationLoop(E), E === null ? Ki.stop() : Ki.start();
      }, W.addEventListener("sessionstart", uh), W.addEventListener("sessionend", hh), this.render = function(E, N) {
        if (N !== void 0 && N.isCamera !== true) {
          console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
          return;
        }
        if (b === true) return;
        if (E.matrixWorldAutoUpdate === true && E.updateMatrixWorld(), N.parent === null && N.matrixWorldAutoUpdate === true && N.updateMatrixWorld(), W.enabled === true && W.isPresenting === true && (W.cameraAutoUpdate === true && W.updateCamera(N), N = W.getCamera()), E.isScene === true && E.onBeforeRender(x, E, N, P), p = We.get(E, v.length), p.init(N), v.push(p), Ae.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), X.setFromProjectionMatrix(Ae), Te = this.localClippingEnabled, ie = re.init(this.clippingPlanes, Te), m = _e.get(E, y.length), m.init(), y.push(m), W.enabled === true && W.isPresenting === true) {
          const ne = x.xr.getDepthSensingMesh();
          ne !== null && Ya(ne, N, -1 / 0, x.sortObjects);
        }
        Ya(E, N, 0, x.sortObjects), m.finish(), x.sortObjects === true && m.sort(oe, ce), Q = W.enabled === false || W.isPresenting === false || W.hasDepthSensing() === false, Q && De.addToRenderList(m, E), this.info.render.frame++, ie === true && re.beginShadows();
        const z = p.state.shadowsArray;
        ye.render(z, E, N), ie === true && re.endShadows(), this.info.autoReset === true && this.info.reset();
        const k = m.opaque, U = m.transmissive;
        if (p.setupLights(), N.isArrayCamera) {
          const ne = N.cameras;
          if (U.length > 0) for (let fe = 0, ve = ne.length; fe < ve; fe++) {
            const Me = ne[fe];
            dh(k, U, E, Me);
          }
          Q && De.render(E);
          for (let fe = 0, ve = ne.length; fe < ve; fe++) {
            const Me = ne[fe];
            fh(m, E, Me, Me.viewport);
          }
        } else U.length > 0 && dh(k, U, E, N), Q && De.render(E), fh(m, E, N);
        P !== null && A === 0 && (R.updateMultisampleRenderTarget(P), R.updateRenderTargetMipmap(P)), E.isScene === true && E.onAfterRender(x, E, N), ht.resetDefaultState(), S = -1, M = null, v.pop(), v.length > 0 ? (p = v[v.length - 1], ie === true && re.setGlobalState(x.clippingPlanes, p.state.camera)) : p = null, y.pop(), y.length > 0 ? m = y[y.length - 1] : m = null;
      };
      function Ya(E, N, z, k) {
        if (E.visible === false) return;
        if (E.layers.test(N.layers)) {
          if (E.isGroup) z = E.renderOrder;
          else if (E.isLOD) E.autoUpdate === true && E.update(N);
          else if (E.isLight) p.pushLight(E), E.castShadow && p.pushShadow(E);
          else if (E.isSprite) {
            if (!E.frustumCulled || X.intersectsSprite(E)) {
              k && we.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ae);
              const fe = K.update(E), ve = E.material;
              ve.visible && m.push(E, fe, ve, z, we.z, null);
            }
          } else if ((E.isMesh || E.isLine || E.isPoints) && (!E.frustumCulled || X.intersectsObject(E))) {
            const fe = K.update(E), ve = E.material;
            if (k && (E.boundingSphere !== void 0 ? (E.boundingSphere === null && E.computeBoundingSphere(), we.copy(E.boundingSphere.center)) : (fe.boundingSphere === null && fe.computeBoundingSphere(), we.copy(fe.boundingSphere.center)), we.applyMatrix4(E.matrixWorld).applyMatrix4(Ae)), Array.isArray(ve)) {
              const Me = fe.groups;
              for (let Ue = 0, Oe = Me.length; Ue < Oe; Ue++) {
                const Ce = Me[Ue], je = ve[Ce.materialIndex];
                je && je.visible && m.push(E, fe, je, z, we.z, Ce);
              }
            } else ve.visible && m.push(E, fe, ve, z, we.z, null);
          }
        }
        const ne = E.children;
        for (let fe = 0, ve = ne.length; fe < ve; fe++) Ya(ne[fe], N, z, k);
      }
      function fh(E, N, z, k) {
        const U = E.opaque, ne = E.transmissive, fe = E.transparent;
        p.setupLightsView(z), ie === true && re.setGlobalState(x.clippingPlanes, z), k && se.viewport(L.copy(k)), U.length > 0 && Ro(U, N, z), ne.length > 0 && Ro(ne, N, z), fe.length > 0 && Ro(fe, N, z), se.buffers.depth.setTest(true), se.buffers.depth.setMask(true), se.buffers.color.setMask(true), se.setPolygonOffset(false);
      }
      function dh(E, N, z, k) {
        if ((z.isScene === true ? z.overrideMaterial : null) !== null) return;
        p.state.transmissionRenderTarget[k.id] === void 0 && (p.state.transmissionRenderTarget[k.id] = new On(1, 1, {
          generateMipmaps: true,
          type: te.has("EXT_color_buffer_half_float") || te.has("EXT_color_buffer_float") ? xi : Si,
          minFilter: pi,
          samples: 4,
          stencilBuffer: s,
          resolveDepthBuffer: false,
          resolveStencilBuffer: false,
          colorSpace: Ye.workingColorSpace
        }));
        const ne = p.state.transmissionRenderTarget[k.id], fe = k.viewport || L;
        ne.setSize(fe.z * x.transmissionResolutionScale, fe.w * x.transmissionResolutionScale);
        const ve = x.getRenderTarget();
        x.setRenderTarget(ne), x.getClearColor(V), q = x.getClearAlpha(), q < 1 && x.setClearColor(16777215, 0.5), x.clear(), Q && De.render(z);
        const Me = x.toneMapping;
        x.toneMapping = zi;
        const Ue = k.viewport;
        if (k.viewport !== void 0 && (k.viewport = void 0), p.setupLightsView(k), ie === true && re.setGlobalState(x.clippingPlanes, k), Ro(E, z, k), R.updateMultisampleRenderTarget(ne), R.updateRenderTargetMipmap(ne), te.has("WEBGL_multisampled_render_to_texture") === false) {
          let Oe = false;
          for (let Ce = 0, je = N.length; Ce < je; Ce++) {
            const tt = N[Ce], Et = tt.object, St = tt.geometry, Je = tt.material, Pe = tt.group;
            if (Je.side === kn && Et.layers.test(k.layers)) {
              const Nt = Je.side;
              Je.side = nn, Je.needsUpdate = true, ph(Et, z, k, St, Je, Pe), Je.side = Nt, Je.needsUpdate = true, Oe = true;
            }
          }
          Oe === true && (R.updateMultisampleRenderTarget(ne), R.updateRenderTargetMipmap(ne));
        }
        x.setRenderTarget(ve), x.setClearColor(V, q), Ue !== void 0 && (k.viewport = Ue), x.toneMapping = Me;
      }
      function Ro(E, N, z) {
        const k = N.isScene === true ? N.overrideMaterial : null;
        for (let U = 0, ne = E.length; U < ne; U++) {
          const fe = E[U], ve = fe.object, Me = fe.geometry, Ue = k === null ? fe.material : k, Oe = fe.group;
          ve.layers.test(z.layers) && ph(ve, N, z, Me, Ue, Oe);
        }
      }
      function ph(E, N, z, k, U, ne) {
        E.onBeforeRender(x, N, z, k, U, ne), E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, E.matrixWorld), E.normalMatrix.getNormalMatrix(E.modelViewMatrix), U.onBeforeRender(x, N, z, k, E, ne), U.transparent === true && U.side === kn && U.forceSinglePass === false ? (U.side = nn, U.needsUpdate = true, x.renderBufferDirect(z, N, k, U, E, ne), U.side = yi, U.needsUpdate = true, x.renderBufferDirect(z, N, k, U, E, ne), U.side = kn) : x.renderBufferDirect(z, N, k, U, E, ne), E.onAfterRender(x, N, z, k, U, ne);
      }
      function Co(E, N, z) {
        N.isScene !== true && (N = Qe);
        const k = de.get(E), U = p.state.lights, ne = p.state.shadowsArray, fe = U.state.version, ve = Ee.getParameters(E, U.state, ne, N, z), Me = Ee.getProgramCacheKey(ve);
        let Ue = k.programs;
        k.environment = E.isMeshStandardMaterial ? N.environment : null, k.fog = N.fog, k.envMap = (E.isMeshStandardMaterial ? F : T).get(E.envMap || k.environment), k.envMapRotation = k.environment !== null && E.envMap === null ? N.environmentRotation : E.envMapRotation, Ue === void 0 && (E.addEventListener("dispose", Be), Ue = /* @__PURE__ */ new Map(), k.programs = Ue);
        let Oe = Ue.get(Me);
        if (Oe !== void 0) {
          if (k.currentProgram === Oe && k.lightsStateVersion === fe) return gh(E, ve), Oe;
        } else ve.uniforms = Ee.getUniforms(E), E.onBeforeCompile(ve, x), Oe = Ee.acquireProgram(ve, Me), Ue.set(Me, Oe), k.uniforms = ve.uniforms;
        const Ce = k.uniforms;
        return (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === true) && (Ce.clippingPlanes = re.uniform), gh(E, ve), k.needsLights = Rm(E), k.lightsStateVersion = fe, k.needsLights && (Ce.ambientLightColor.value = U.state.ambient, Ce.lightProbe.value = U.state.probe, Ce.directionalLights.value = U.state.directional, Ce.directionalLightShadows.value = U.state.directionalShadow, Ce.spotLights.value = U.state.spot, Ce.spotLightShadows.value = U.state.spotShadow, Ce.rectAreaLights.value = U.state.rectArea, Ce.ltc_1.value = U.state.rectAreaLTC1, Ce.ltc_2.value = U.state.rectAreaLTC2, Ce.pointLights.value = U.state.point, Ce.pointLightShadows.value = U.state.pointShadow, Ce.hemisphereLights.value = U.state.hemi, Ce.directionalShadowMap.value = U.state.directionalShadowMap, Ce.directionalShadowMatrix.value = U.state.directionalShadowMatrix, Ce.spotShadowMap.value = U.state.spotShadowMap, Ce.spotLightMatrix.value = U.state.spotLightMatrix, Ce.spotLightMap.value = U.state.spotLightMap, Ce.pointShadowMap.value = U.state.pointShadowMap, Ce.pointShadowMatrix.value = U.state.pointShadowMatrix), k.currentProgram = Oe, k.uniformsList = null, Oe;
      }
      function mh(E) {
        if (E.uniformsList === null) {
          const N = E.currentProgram.getUniforms();
          E.uniformsList = ga.seqWithValue(N.seq, E.uniforms);
        }
        return E.uniformsList;
      }
      function gh(E, N) {
        const z = de.get(E);
        z.outputColorSpace = N.outputColorSpace, z.batching = N.batching, z.batchingColor = N.batchingColor, z.instancing = N.instancing, z.instancingColor = N.instancingColor, z.instancingMorph = N.instancingMorph, z.skinning = N.skinning, z.morphTargets = N.morphTargets, z.morphNormals = N.morphNormals, z.morphColors = N.morphColors, z.morphTargetsCount = N.morphTargetsCount, z.numClippingPlanes = N.numClippingPlanes, z.numIntersection = N.numClipIntersection, z.vertexAlphas = N.vertexAlphas, z.vertexTangents = N.vertexTangents, z.toneMapping = N.toneMapping;
      }
      function wm(E, N, z, k, U) {
        N.isScene !== true && (N = Qe), R.resetTextureUnits();
        const ne = N.fog, fe = k.isMeshStandardMaterial ? N.environment : null, ve = P === null ? x.outputColorSpace : P.isXRRenderTarget === true ? P.texture.colorSpace : Qt, Me = (k.isMeshStandardMaterial ? F : T).get(k.envMap || fe), Ue = k.vertexColors === true && !!z.attributes.color && z.attributes.color.itemSize === 4, Oe = !!z.attributes.tangent && (!!k.normalMap || k.anisotropy > 0), Ce = !!z.morphAttributes.position, je = !!z.morphAttributes.normal, tt = !!z.morphAttributes.color;
        let Et = zi;
        k.toneMapped && (P === null || P.isXRRenderTarget === true) && (Et = x.toneMapping);
        const St = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, Je = St !== void 0 ? St.length : 0, Pe = de.get(k), Nt = p.state.lights;
        if (ie === true && (Te === true || E !== M)) {
          const qt = E === M && k.id === S;
          re.setState(k, E, qt);
        }
        let nt = false;
        k.version === Pe.__version ? (Pe.needsLights && Pe.lightsStateVersion !== Nt.state.version || Pe.outputColorSpace !== ve || U.isBatchedMesh && Pe.batching === false || !U.isBatchedMesh && Pe.batching === true || U.isBatchedMesh && Pe.batchingColor === true && U.colorTexture === null || U.isBatchedMesh && Pe.batchingColor === false && U.colorTexture !== null || U.isInstancedMesh && Pe.instancing === false || !U.isInstancedMesh && Pe.instancing === true || U.isSkinnedMesh && Pe.skinning === false || !U.isSkinnedMesh && Pe.skinning === true || U.isInstancedMesh && Pe.instancingColor === true && U.instanceColor === null || U.isInstancedMesh && Pe.instancingColor === false && U.instanceColor !== null || U.isInstancedMesh && Pe.instancingMorph === true && U.morphTexture === null || U.isInstancedMesh && Pe.instancingMorph === false && U.morphTexture !== null || Pe.envMap !== Me || k.fog === true && Pe.fog !== ne || Pe.numClippingPlanes !== void 0 && (Pe.numClippingPlanes !== re.numPlanes || Pe.numIntersection !== re.numIntersection) || Pe.vertexAlphas !== Ue || Pe.vertexTangents !== Oe || Pe.morphTargets !== Ce || Pe.morphNormals !== je || Pe.morphColors !== tt || Pe.toneMapping !== Et || Pe.morphTargetsCount !== Je) && (nt = true) : (nt = true, Pe.__version = k.version);
        let Cn = Pe.currentProgram;
        nt === true && (Cn = Co(k, N, U));
        let Pr = false, un = false, Ls = false;
        const dt = Cn.getUniforms(), yn = Pe.uniforms;
        if (se.useProgram(Cn.program) && (Pr = true, un = true, Ls = true), k.id !== S && (S = k.id, un = true), Pr || M !== E) {
          se.buffers.depth.getReversed() ? (ae.copy(E.projectionMatrix), kg(ae), Vg(ae), dt.setValue(C, "projectionMatrix", ae)) : dt.setValue(C, "projectionMatrix", E.projectionMatrix), dt.setValue(C, "viewMatrix", E.matrixWorldInverse);
          const en = dt.map.cameraPosition;
          en !== void 0 && en.setValue(C, $e.setFromMatrixPosition(E.matrixWorld)), xe.logarithmicDepthBuffer && dt.setValue(C, "logDepthBufFC", 2 / (Math.log(E.far + 1) / Math.LN2)), (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial) && dt.setValue(C, "isOrthographic", E.isOrthographicCamera === true), M !== E && (M = E, un = true, Ls = true);
        }
        if (U.isSkinnedMesh) {
          dt.setOptional(C, U, "bindMatrix"), dt.setOptional(C, U, "bindMatrixInverse");
          const qt = U.skeleton;
          qt && (qt.boneTexture === null && qt.computeBoneTexture(), dt.setValue(C, "boneTexture", qt.boneTexture, R));
        }
        U.isBatchedMesh && (dt.setOptional(C, U, "batchingTexture"), dt.setValue(C, "batchingTexture", U._matricesTexture, R), dt.setOptional(C, U, "batchingIdTexture"), dt.setValue(C, "batchingIdTexture", U._indirectTexture, R), dt.setOptional(C, U, "batchingColorTexture"), U._colorsTexture !== null && dt.setValue(C, "batchingColorTexture", U._colorsTexture, R));
        const Sn = z.morphAttributes;
        if ((Sn.position !== void 0 || Sn.normal !== void 0 || Sn.color !== void 0) && Ne.update(U, z, Cn), (un || Pe.receiveShadow !== U.receiveShadow) && (Pe.receiveShadow = U.receiveShadow, dt.setValue(C, "receiveShadow", U.receiveShadow)), k.isMeshGouraudMaterial && k.envMap !== null && (yn.envMap.value = Me, yn.flipEnvMap.value = Me.isCubeTexture && Me.isRenderTargetTexture === false ? -1 : 1), k.isMeshStandardMaterial && k.envMap === null && N.environment !== null && (yn.envMapIntensity.value = N.environmentIntensity), un && (dt.setValue(C, "toneMappingExposure", x.toneMappingExposure), Pe.needsLights && Am(yn, Ls), ne && k.fog === true && ue.refreshFogUniforms(yn, ne), ue.refreshMaterialUniforms(yn, k, H, $, p.state.transmissionRenderTarget[E.id]), ga.upload(C, mh(Pe), yn, R)), k.isShaderMaterial && k.uniformsNeedUpdate === true && (ga.upload(C, mh(Pe), yn, R), k.uniformsNeedUpdate = false), k.isSpriteMaterial && dt.setValue(C, "center", U.center), dt.setValue(C, "modelViewMatrix", U.modelViewMatrix), dt.setValue(C, "normalMatrix", U.normalMatrix), dt.setValue(C, "modelMatrix", U.matrixWorld), k.isShaderMaterial || k.isRawShaderMaterial) {
          const qt = k.uniformsGroups;
          for (let en = 0, Ka = qt.length; en < Ka; en++) {
            const $i = qt[en];
            I.update($i, Cn), I.bind($i, Cn);
          }
        }
        return Cn;
      }
      function Am(E, N) {
        E.ambientLightColor.needsUpdate = N, E.lightProbe.needsUpdate = N, E.directionalLights.needsUpdate = N, E.directionalLightShadows.needsUpdate = N, E.pointLights.needsUpdate = N, E.pointLightShadows.needsUpdate = N, E.spotLights.needsUpdate = N, E.spotLightShadows.needsUpdate = N, E.rectAreaLights.needsUpdate = N, E.hemisphereLights.needsUpdate = N;
      }
      function Rm(E) {
        return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === true;
      }
      this.getActiveCubeFace = function() {
        return w;
      }, this.getActiveMipmapLevel = function() {
        return A;
      }, this.getRenderTarget = function() {
        return P;
      }, this.setRenderTargetTextures = function(E, N, z) {
        de.get(E.texture).__webglTexture = N, de.get(E.depthTexture).__webglTexture = z;
        const k = de.get(E);
        k.__hasExternalTextures = true, k.__autoAllocateDepthBuffer = z === void 0, k.__autoAllocateDepthBuffer || te.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), k.__useRenderToTexture = false);
      }, this.setRenderTargetFramebuffer = function(E, N) {
        const z = de.get(E);
        z.__webglFramebuffer = N, z.__useDefaultFramebuffer = N === void 0;
      };
      const Cm = C.createFramebuffer();
      this.setRenderTarget = function(E, N = 0, z = 0) {
        P = E, w = N, A = z;
        let k = true, U = null, ne = false, fe = false;
        if (E) {
          const Me = de.get(E);
          if (Me.__useDefaultFramebuffer !== void 0) se.bindFramebuffer(C.FRAMEBUFFER, null), k = false;
          else if (Me.__webglFramebuffer === void 0) R.setupRenderTarget(E);
          else if (Me.__hasExternalTextures) R.rebindTextures(E, de.get(E.texture).__webglTexture, de.get(E.depthTexture).__webglTexture);
          else if (E.depthBuffer) {
            const Ce = E.depthTexture;
            if (Me.__boundDepthTexture !== Ce) {
              if (Ce !== null && de.has(Ce) && (E.width !== Ce.image.width || E.height !== Ce.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
              R.setupDepthRenderbuffer(E);
            }
          }
          const Ue = E.texture;
          (Ue.isData3DTexture || Ue.isDataArrayTexture || Ue.isCompressedArrayTexture) && (fe = true);
          const Oe = de.get(E).__webglFramebuffer;
          E.isWebGLCubeRenderTarget ? (Array.isArray(Oe[N]) ? U = Oe[N][z] : U = Oe[N], ne = true) : E.samples > 0 && R.useMultisampledRTT(E) === false ? U = de.get(E).__webglMultisampledFramebuffer : Array.isArray(Oe) ? U = Oe[z] : U = Oe, L.copy(E.viewport), G.copy(E.scissor), O = E.scissorTest;
        } else L.copy(ge).multiplyScalar(H).floor(), G.copy(Le).multiplyScalar(H).floor(), O = Ke;
        if (z !== 0 && (U = Cm), se.bindFramebuffer(C.FRAMEBUFFER, U) && k && se.drawBuffers(E, U), se.viewport(L), se.scissor(G), se.setScissorTest(O), ne) {
          const Me = de.get(E.texture);
          C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_CUBE_MAP_POSITIVE_X + N, Me.__webglTexture, z);
        } else if (fe) {
          const Me = de.get(E.texture), Ue = N;
          C.framebufferTextureLayer(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, Me.__webglTexture, z, Ue);
        } else if (E !== null && z !== 0) {
          const Me = de.get(E.texture);
          C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, Me.__webglTexture, z);
        }
        S = -1;
      }, this.readRenderTargetPixels = function(E, N, z, k, U, ne, fe) {
        if (!(E && E.isWebGLRenderTarget)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
          return;
        }
        let ve = de.get(E).__webglFramebuffer;
        if (E.isWebGLCubeRenderTarget && fe !== void 0 && (ve = ve[fe]), ve) {
          se.bindFramebuffer(C.FRAMEBUFFER, ve);
          try {
            const Me = E.texture, Ue = Me.format, Oe = Me.type;
            if (!xe.textureFormatReadable(Ue)) {
              console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
              return;
            }
            if (!xe.textureTypeReadable(Oe)) {
              console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
              return;
            }
            N >= 0 && N <= E.width - k && z >= 0 && z <= E.height - U && C.readPixels(N, z, k, U, ke.convert(Ue), ke.convert(Oe), ne);
          } finally {
            const Me = P !== null ? de.get(P).__webglFramebuffer : null;
            se.bindFramebuffer(C.FRAMEBUFFER, Me);
          }
        }
      }, this.readRenderTargetPixelsAsync = async function(E, N, z, k, U, ne, fe) {
        if (!(E && E.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let ve = de.get(E).__webglFramebuffer;
        if (E.isWebGLCubeRenderTarget && fe !== void 0 && (ve = ve[fe]), ve) {
          const Me = E.texture, Ue = Me.format, Oe = Me.type;
          if (!xe.textureFormatReadable(Ue)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!xe.textureTypeReadable(Oe)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          if (N >= 0 && N <= E.width - k && z >= 0 && z <= E.height - U) {
            se.bindFramebuffer(C.FRAMEBUFFER, ve);
            const Ce = C.createBuffer();
            C.bindBuffer(C.PIXEL_PACK_BUFFER, Ce), C.bufferData(C.PIXEL_PACK_BUFFER, ne.byteLength, C.STREAM_READ), C.readPixels(N, z, k, U, ke.convert(Ue), ke.convert(Oe), 0);
            const je = P !== null ? de.get(P).__webglFramebuffer : null;
            se.bindFramebuffer(C.FRAMEBUFFER, je);
            const tt = C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return C.flush(), await zg(C, tt, 4), C.bindBuffer(C.PIXEL_PACK_BUFFER, Ce), C.getBufferSubData(C.PIXEL_PACK_BUFFER, 0, ne), C.deleteBuffer(Ce), C.deleteSync(tt), ne;
          } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
        }
      }, this.copyFramebufferToTexture = function(E, N = null, z = 0) {
        E.isTexture !== true && (Yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."), N = arguments[0] || null, E = arguments[1]);
        const k = Math.pow(2, -z), U = Math.floor(E.image.width * k), ne = Math.floor(E.image.height * k), fe = N !== null ? N.x : 0, ve = N !== null ? N.y : 0;
        R.setTexture2D(E, 0), C.copyTexSubImage2D(C.TEXTURE_2D, z, 0, 0, fe, ve, U, ne), se.unbindTexture();
      };
      const Pm = C.createFramebuffer(), Lm = C.createFramebuffer();
      this.copyTextureToTexture = function(E, N, z = null, k = null, U = 0, ne = null) {
        E.isTexture !== true && (Yr("WebGLRenderer: copyTextureToTexture function signature has changed."), k = arguments[0] || null, E = arguments[1], N = arguments[2], ne = arguments[3] || 0, z = null), ne === null && (U !== 0 ? (Yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), ne = U, U = 0) : ne = 0);
        let fe, ve, Me, Ue, Oe, Ce, je, tt, Et;
        const St = E.isCompressedTexture ? E.mipmaps[ne] : E.image;
        if (z !== null) fe = z.max.x - z.min.x, ve = z.max.y - z.min.y, Me = z.isBox3 ? z.max.z - z.min.z : 1, Ue = z.min.x, Oe = z.min.y, Ce = z.isBox3 ? z.min.z : 0;
        else {
          const Sn = Math.pow(2, -U);
          fe = Math.floor(St.width * Sn), ve = Math.floor(St.height * Sn), E.isDataArrayTexture ? Me = St.depth : E.isData3DTexture ? Me = Math.floor(St.depth * Sn) : Me = 1, Ue = 0, Oe = 0, Ce = 0;
        }
        k !== null ? (je = k.x, tt = k.y, Et = k.z) : (je = 0, tt = 0, Et = 0);
        const Je = ke.convert(N.format), Pe = ke.convert(N.type);
        let Nt;
        N.isData3DTexture ? (R.setTexture3D(N, 0), Nt = C.TEXTURE_3D) : N.isDataArrayTexture || N.isCompressedArrayTexture ? (R.setTexture2DArray(N, 0), Nt = C.TEXTURE_2D_ARRAY) : (R.setTexture2D(N, 0), Nt = C.TEXTURE_2D), C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, N.flipY), C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha), C.pixelStorei(C.UNPACK_ALIGNMENT, N.unpackAlignment);
        const nt = C.getParameter(C.UNPACK_ROW_LENGTH), Cn = C.getParameter(C.UNPACK_IMAGE_HEIGHT), Pr = C.getParameter(C.UNPACK_SKIP_PIXELS), un = C.getParameter(C.UNPACK_SKIP_ROWS), Ls = C.getParameter(C.UNPACK_SKIP_IMAGES);
        C.pixelStorei(C.UNPACK_ROW_LENGTH, St.width), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, St.height), C.pixelStorei(C.UNPACK_SKIP_PIXELS, Ue), C.pixelStorei(C.UNPACK_SKIP_ROWS, Oe), C.pixelStorei(C.UNPACK_SKIP_IMAGES, Ce);
        const dt = E.isDataArrayTexture || E.isData3DTexture, yn = N.isDataArrayTexture || N.isData3DTexture;
        if (E.isDepthTexture) {
          const Sn = de.get(E), qt = de.get(N), en = de.get(Sn.__renderTarget), Ka = de.get(qt.__renderTarget);
          se.bindFramebuffer(C.READ_FRAMEBUFFER, en.__webglFramebuffer), se.bindFramebuffer(C.DRAW_FRAMEBUFFER, Ka.__webglFramebuffer);
          for (let $i = 0; $i < Me; $i++) dt && (C.framebufferTextureLayer(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, de.get(E).__webglTexture, U, Ce + $i), C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, de.get(N).__webglTexture, ne, Et + $i)), C.blitFramebuffer(Ue, Oe, fe, ve, je, tt, fe, ve, C.DEPTH_BUFFER_BIT, C.NEAREST);
          se.bindFramebuffer(C.READ_FRAMEBUFFER, null), se.bindFramebuffer(C.DRAW_FRAMEBUFFER, null);
        } else if (U !== 0 || E.isRenderTargetTexture || de.has(E)) {
          const Sn = de.get(E), qt = de.get(N);
          se.bindFramebuffer(C.READ_FRAMEBUFFER, Pm), se.bindFramebuffer(C.DRAW_FRAMEBUFFER, Lm);
          for (let en = 0; en < Me; en++) dt ? C.framebufferTextureLayer(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, Sn.__webglTexture, U, Ce + en) : C.framebufferTexture2D(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, Sn.__webglTexture, U), yn ? C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, qt.__webglTexture, ne, Et + en) : C.framebufferTexture2D(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, qt.__webglTexture, ne), U !== 0 ? C.blitFramebuffer(Ue, Oe, fe, ve, je, tt, fe, ve, C.COLOR_BUFFER_BIT, C.NEAREST) : yn ? C.copyTexSubImage3D(Nt, ne, je, tt, Et + en, Ue, Oe, fe, ve) : C.copyTexSubImage2D(Nt, ne, je, tt, Ue, Oe, fe, ve);
          se.bindFramebuffer(C.READ_FRAMEBUFFER, null), se.bindFramebuffer(C.DRAW_FRAMEBUFFER, null);
        } else yn ? E.isDataTexture || E.isData3DTexture ? C.texSubImage3D(Nt, ne, je, tt, Et, fe, ve, Me, Je, Pe, St.data) : N.isCompressedArrayTexture ? C.compressedTexSubImage3D(Nt, ne, je, tt, Et, fe, ve, Me, Je, St.data) : C.texSubImage3D(Nt, ne, je, tt, Et, fe, ve, Me, Je, Pe, St) : E.isDataTexture ? C.texSubImage2D(C.TEXTURE_2D, ne, je, tt, fe, ve, Je, Pe, St.data) : E.isCompressedTexture ? C.compressedTexSubImage2D(C.TEXTURE_2D, ne, je, tt, St.width, St.height, Je, St.data) : C.texSubImage2D(C.TEXTURE_2D, ne, je, tt, fe, ve, Je, Pe, St);
        C.pixelStorei(C.UNPACK_ROW_LENGTH, nt), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, Cn), C.pixelStorei(C.UNPACK_SKIP_PIXELS, Pr), C.pixelStorei(C.UNPACK_SKIP_ROWS, un), C.pixelStorei(C.UNPACK_SKIP_IMAGES, Ls), ne === 0 && N.generateMipmaps && C.generateMipmap(Nt), se.unbindTexture();
      }, this.copyTextureToTexture3D = function(E, N, z = null, k = null, U = 0) {
        return E.isTexture !== true && (Yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."), z = arguments[0] || null, k = arguments[1] || null, E = arguments[2], N = arguments[3], U = arguments[4] || 0), Yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(E, N, z, k, U);
      }, this.initRenderTarget = function(E) {
        de.get(E).__webglFramebuffer === void 0 && R.setupRenderTarget(E);
      }, this.initTexture = function(E) {
        E.isCubeTexture ? R.setTextureCube(E, 0) : E.isData3DTexture ? R.setTexture3D(E, 0) : E.isDataArrayTexture || E.isCompressedArrayTexture ? R.setTexture2DArray(E, 0) : R.setTexture2D(E, 0), se.unbindTexture();
      }, this.resetState = function() {
        w = 0, A = 0, P = null, se.reset(), ht.reset();
      }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
      }));
    }
    get coordinateSystem() {
      return mi;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(e) {
      this._outputColorSpace = e;
      const t = this.getContext();
      t.drawingBufferColorspace = Ye._getDrawingBufferColorSpace(e), t.unpackColorSpace = Ye._getUnpackColorSpace();
    }
  }
  function Vf(r, e) {
    if (e === ug) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
    if (e === Ac || e === Ld) {
      let t = r.getIndex();
      if (t === null) {
        const o = [], a = r.getAttribute("position");
        if (a !== void 0) {
          for (let l = 0; l < a.count; l++) o.push(l);
          r.setIndex(o), t = r.getIndex();
        } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
      }
      const n = t.count - 2, i = [];
      if (e === Ac) for (let o = 1; o <= n; o++) i.push(t.getX(0)), i.push(t.getX(o)), i.push(t.getX(o + 1));
      else for (let o = 0; o < n; o++) o % 2 === 0 ? (i.push(t.getX(o)), i.push(t.getX(o + 1)), i.push(t.getX(o + 2))) : (i.push(t.getX(o + 2)), i.push(t.getX(o + 1)), i.push(t.getX(o)));
      i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
      const s = r.clone();
      return s.setIndex(i), s.clearGroups(), s;
    } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
  }
  class gM extends br {
    constructor(e) {
      super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
        return new SM(t);
      }), this.register(function(t) {
        return new MM(t);
      }), this.register(function(t) {
        return new LM(t);
      }), this.register(function(t) {
        return new DM(t);
      }), this.register(function(t) {
        return new IM(t);
      }), this.register(function(t) {
        return new EM(t);
      }), this.register(function(t) {
        return new bM(t);
      }), this.register(function(t) {
        return new wM(t);
      }), this.register(function(t) {
        return new AM(t);
      }), this.register(function(t) {
        return new yM(t);
      }), this.register(function(t) {
        return new RM(t);
      }), this.register(function(t) {
        return new TM(t);
      }), this.register(function(t) {
        return new PM(t);
      }), this.register(function(t) {
        return new CM(t);
      }), this.register(function(t) {
        return new xM(t);
      }), this.register(function(t) {
        return new NM(t);
      }), this.register(function(t) {
        return new UM(t);
      });
    }
    load(e, t, n, i) {
      const s = this;
      let o;
      if (this.resourcePath !== "") o = this.resourcePath;
      else if (this.path !== "") {
        const c = Js.extractUrlBase(e);
        o = Js.resolveURL(c, this.path);
      } else o = Js.extractUrlBase(e);
      this.manager.itemStart(e);
      const a = function(c) {
        i ? i(c) : console.error(c), s.manager.itemError(e), s.manager.itemEnd(e);
      }, l = new wu(this.manager);
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
      else if (e instanceof ArrayBuffer) if (l.decode(new Uint8Array(e, 0, 4)) === cp) {
        try {
          o[Ge.KHR_BINARY_GLTF] = new OM(e);
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
      const c = new $M(s, {
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
        const h = s.extensionsUsed[u], f = s.extensionsRequired || [];
        switch (h) {
          case Ge.KHR_MATERIALS_UNLIT:
            o[h] = new vM();
            break;
          case Ge.KHR_DRACO_MESH_COMPRESSION:
            o[h] = new FM(s, this.dracoLoader);
            break;
          case Ge.KHR_TEXTURE_TRANSFORM:
            o[h] = new BM();
            break;
          case Ge.KHR_MESH_QUANTIZATION:
            o[h] = new zM();
            break;
          default:
            f.indexOf(h) >= 0 && a[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
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
  function _M() {
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
  class xM {
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
      const u = new Re(16777215);
      l.color !== void 0 && u.setRGB(l.color[0], l.color[1], l.color[2], Qt);
      const h = l.range !== void 0 ? l.range : 0;
      switch (l.type) {
        case "directional":
          c = new Ca(u), c.target.position.set(0, 0, -1), c.add(c.target);
          break;
        case "point":
          c = new Ru(u), c.distance = h;
          break;
        case "spot":
          c = new x0(u), c.distance = h, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
          break;
        default:
          throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
      }
      return c.position.set(0, 0, 0), ui(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
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
  class vM {
    constructor() {
      this.name = Ge.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return Hn;
    }
    extendParams(e, t, n) {
      const i = [];
      e.color = new Re(1, 1, 1), e.opacity = 1;
      const s = t.pbrMetallicRoughness;
      if (s) {
        if (Array.isArray(s.baseColorFactor)) {
          const o = s.baseColorFactor;
          e.color.setRGB(o[0], o[1], o[2], Qt), e.opacity = o[3];
        }
        s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, Ut));
      }
      return Promise.all(i);
    }
  }
  class yM {
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
  class SM {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : jn;
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
  class MM {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_DISPERSION;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : jn;
    }
    extendMaterialParams(e, t) {
      const i = this.parser.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = i.extensions[this.name];
      return t.dispersion = s.dispersion !== void 0 ? s.dispersion : 0, Promise.resolve();
    }
  }
  class TM {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_IRIDESCENCE;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : jn;
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
  class EM {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : jn;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [];
      t.sheenColor = new Re(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
      const o = i.extensions[this.name];
      if (o.sheenColorFactor !== void 0) {
        const a = o.sheenColorFactor;
        t.sheenColor.setRGB(a[0], a[1], a[2], Qt);
      }
      return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, Ut)), o.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(s);
    }
  }
  class bM {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : jn;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [], o = i.extensions[this.name];
      return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(s);
    }
  }
  class wM {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : jn;
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
      return t.attenuationColor = new Re().setRGB(a[0], a[1], a[2], Qt), Promise.all(s);
    }
  }
  class AM {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_IOR;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : jn;
    }
    extendMaterialParams(e, t) {
      const i = this.parser.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = i.extensions[this.name];
      return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
    }
  }
  class RM {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : jn;
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
      return t.specularColor = new Re().setRGB(a[0], a[1], a[2], Qt), o.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, Ut)), Promise.all(s);
    }
  }
  class CM {
    constructor(e) {
      this.parser = e, this.name = Ge.EXT_MATERIALS_BUMP;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : jn;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [], o = i.extensions[this.name];
      return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && s.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(s);
    }
  }
  class PM {
    constructor(e) {
      this.parser = e, this.name = Ge.KHR_MATERIALS_ANISOTROPY;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : jn;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [], o = i.extensions[this.name];
      return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(s);
    }
  }
  class LM {
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
  class DM {
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
  class IM {
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
  class NM {
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
          const l = i.byteOffset || 0, c = i.byteLength || 0, u = i.count, h = i.byteStride, f = new Uint8Array(a, l, c);
          return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(u, h, f, i.mode, i.filter).then(function(d) {
            return d.buffer;
          }) : o.ready.then(function() {
            const d = new ArrayBuffer(u * h);
            return o.decodeGltfBuffer(new Uint8Array(d), u, h, f, i.mode, i.filter), d;
          });
        });
      } else return null;
    }
  }
  class UM {
    constructor(e) {
      this.name = Ge.EXT_MESH_GPU_INSTANCING, this.parser = e;
    }
    createNodeMesh(e) {
      const t = this.parser.json, n = t.nodes[e];
      if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
      const i = t.meshes[n.mesh];
      for (const c of i.primitives) if (c.mode !== En.TRIANGLES && c.mode !== En.TRIANGLE_STRIP && c.mode !== En.TRIANGLE_FAN && c.mode !== void 0) return null;
      const o = n.extensions[this.name].attributes, a = [], l = {};
      for (const c in o) a.push(this.parser.getDependency("accessor", o[c]).then((u) => (l[c] = u, l[c])));
      return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
        const u = c.pop(), h = u.isGroup ? u.children : [
          u
        ], f = c[0].count, d = [];
        for (const _ of h) {
          const g = new Fe(), m = new D(), p = new Wi(), y = new D(1, 1, 1), v = new __(_.geometry, _.material, f);
          for (let x = 0; x < f; x++) l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, x), l.ROTATION && p.fromBufferAttribute(l.ROTATION, x), l.SCALE && y.fromBufferAttribute(l.SCALE, x), v.setMatrixAt(x, g.compose(m, p, y));
          for (const x in l) if (x === "_COLOR_0") {
            const b = l[x];
            v.instanceColor = new Cc(b.array, b.itemSize, b.normalized);
          } else x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && _.geometry.setAttribute(x, l[x]);
          gt.prototype.copy.call(v, _), this.parser.assignFinalMaterial(v), d.push(v);
        }
        return u.isGroup ? (u.clear(), u.add(...d), u) : d[0];
      }));
    }
  }
  const cp = "glTF", ks = 12, Hf = {
    JSON: 1313821514,
    BIN: 5130562
  };
  class OM {
    constructor(e) {
      this.name = Ge.KHR_BINARY_GLTF, this.content = null, this.body = null;
      const t = new DataView(e, 0, ks), n = new TextDecoder();
      if (this.header = {
        magic: n.decode(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, true),
        length: t.getUint32(8, true)
      }, this.header.magic !== cp) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
      const i = this.header.length - ks, s = new DataView(e, ks);
      let o = 0;
      for (; o < i; ) {
        const a = s.getUint32(o, true);
        o += 4;
        const l = s.getUint32(o, true);
        if (o += 4, l === Hf.JSON) {
          const c = new Uint8Array(e, ks + o, a);
          this.content = n.decode(c);
        } else if (l === Hf.BIN) {
          const c = ks + o;
          this.body = e.slice(c, c + a);
        }
        o += a;
      }
      if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
  }
  class FM {
    constructor(e, t) {
      if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
      this.name = Ge.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
    }
    decodePrimitive(e, t) {
      const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
      for (const u in o) {
        const h = Fc[u] || u.toLowerCase();
        a[h] = o[u];
      }
      for (const u in e.attributes) {
        const h = Fc[u] || u.toLowerCase();
        if (o[u] !== void 0) {
          const f = n.accessors[e.attributes[u]], d = ns[f.componentType];
          c[h] = d.name, l[h] = f.normalized === true;
        }
      }
      return t.getDependency("bufferView", s).then(function(u) {
        return new Promise(function(h, f) {
          i.decodeDracoFile(u, function(d) {
            for (const _ in d.attributes) {
              const g = d.attributes[_], m = l[_];
              m !== void 0 && (g.normalized = m);
            }
            h(d);
          }, a, c, Qt, f);
        });
      });
    }
  }
  class BM {
    constructor() {
      this.name = Ge.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(e, t) {
      return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
    }
  }
  class zM {
    constructor() {
      this.name = Ge.KHR_MESH_QUANTIZATION;
    }
  }
  class up extends bo {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    copySampleValue_(e) {
      const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
      for (let o = 0; o !== i; o++) t[o] = n[s + o];
      return t;
    }
    interpolate_(e, t, n, i) {
      const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, u = i - t, h = (n - t) / u, f = h * h, d = f * h, _ = e * c, g = _ - c, m = -2 * d + 3 * f, p = d - f, y = 1 - m, v = p - f + h;
      for (let x = 0; x !== a; x++) {
        const b = o[g + x + a], w = o[g + x + l] * u, A = o[_ + x + a], P = o[_ + x] * u;
        s[x] = y * b + v * w + m * A + p * P;
      }
      return s;
    }
  }
  const kM = new Wi();
  class VM extends up {
    interpolate_(e, t, n, i) {
      const s = super.interpolate_(e, t, n, i);
      return kM.fromArray(s).normalize().toArray(s), s;
    }
  }
  const En = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6
  }, ns = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
  }, Gf = {
    9728: Zt,
    9729: mn,
    9984: Sd,
    9985: ca,
    9986: Hs,
    9987: pi
  }, Wf = {
    33071: Ni,
    33648: Ta,
    10497: hs
  }, Ll = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
  }, Fc = {
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
  }, Li = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
  }, HM = {
    CUBICSPLINE: void 0,
    LINEAR: lo,
    STEP: ao
  }, Dl = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
  };
  function GM(r) {
    return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new Eo({
      color: 16777215,
      emissive: 0,
      metalness: 1,
      roughness: 1,
      transparent: false,
      depthTest: true,
      side: yi
    })), r.DefaultMaterial;
  }
  function nr(r, e, t) {
    for (const n in t.extensions) r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
  }
  function ui(r, e) {
    e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
  }
  function WM(r, e, t) {
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
        const f = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : r.attributes.position;
        o.push(f);
      }
      if (i) {
        const f = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : r.attributes.normal;
        a.push(f);
      }
      if (s) {
        const f = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : r.attributes.color;
        l.push(f);
      }
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(a),
      Promise.all(l)
    ]).then(function(c) {
      const u = c[0], h = c[1], f = c[2];
      return n && (r.morphAttributes.position = u), i && (r.morphAttributes.normal = h), s && (r.morphAttributes.color = f), r.morphTargetsRelative = true, r;
    });
  }
  function XM(r, e) {
    if (r.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++) r.morphTargetInfluences[t] = e.weights[t];
    if (e.extras && Array.isArray(e.extras.targetNames)) {
      const t = e.extras.targetNames;
      if (r.morphTargetInfluences.length === t.length) {
        r.morphTargetDictionary = {};
        for (let n = 0, i = t.length; n < i; n++) r.morphTargetDictionary[t[n]] = n;
      } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
  }
  function qM(r) {
    let e;
    const t = r.extensions && r.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];
    if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Il(t.attributes) : e = r.indices + ":" + Il(r.attributes) + ":" + r.mode, r.targets !== void 0) for (let n = 0, i = r.targets.length; n < i; n++) e += ":" + Il(r.targets[n]);
    return e;
  }
  function Il(r) {
    let e = "";
    const t = Object.keys(r).sort();
    for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + r[t[n]] + ";";
    return e;
  }
  function Bc(r) {
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
  function YM(r) {
    return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : r.search(/\.ktx2($|\?)/i) > 0 || r.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
  }
  const KM = new Fe();
  class $M {
    constructor(e = {}, t = {}) {
      this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new _M(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
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
      typeof createImageBitmap > "u" || n && i < 17 || s && o < 98 ? this.textureLoader = new g0(this.options.manager) : this.textureLoader = new S0(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new wu(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
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
        return nr(s, a, i), ui(a, i), Promise.all(n._invokeAll(function(l) {
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
        n.load(Js.resolveURL(t.uri, i.path), s, void 0, function() {
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
        const o = Ll[i.type], a = ns[i.componentType], l = i.normalized === true, c = new a(i.count * o);
        return Promise.resolve(new Jt(c, o, l));
      }
      const s = [];
      return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(o) {
        const a = o[0], l = Ll[i.type], c = ns[i.componentType], u = c.BYTES_PER_ELEMENT, h = u * l, f = i.byteOffset || 0, d = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, _ = i.normalized === true;
        let g, m;
        if (d && d !== h) {
          const p = Math.floor(f / d), y = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
          let v = t.cache.get(y);
          v || (g = new c(a, p * d, i.count * d / u), v = new f_(g, d / u), t.cache.add(y, v)), m = new _u(v, l, f % d / u, _);
        } else a === null ? g = new c(i.count * l) : g = new c(a, f, i.count * l), m = new Jt(g, l, _);
        if (i.sparse !== void 0) {
          const p = Ll.SCALAR, y = ns[i.sparse.indices.componentType], v = i.sparse.indices.byteOffset || 0, x = i.sparse.values.byteOffset || 0, b = new y(o[1], v, i.sparse.count * p), w = new c(o[2], x, i.sparse.count * l);
          a !== null && (m = new Jt(m.array.slice(), m.itemSize, m.normalized)), m.normalized = false;
          for (let A = 0, P = b.length; A < P; A++) {
            const S = b[A];
            if (m.setX(S, w[A * l]), l >= 2 && m.setY(S, w[A * l + 1]), l >= 3 && m.setZ(S, w[A * l + 2]), l >= 4 && m.setW(S, w[A * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
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
        const f = (s.samplers || {})[o.sampler] || {};
        return u.magFilter = Gf[f.magFilter] || mn, u.minFilter = Gf[f.minFilter] || pi, u.wrapS = Wf[f.wrapS] || hs, u.wrapT = Wf[f.wrapT] || hs, u.generateMipmaps = !u.isCompressedTexture && u.minFilter !== Zt && u.minFilter !== mn, i.associations.set(u, {
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
        const f = new Blob([
          h
        ], {
          type: o.mimeType
        });
        return l = a.createObjectURL(f), l;
      });
      else if (o.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
      const u = Promise.resolve(l).then(function(h) {
        return new Promise(function(f, d) {
          let _ = f;
          t.isImageBitmapLoader === true && (_ = function(g) {
            const m = new Ct(g);
            m.needsUpdate = true, f(m);
          }), t.load(Js.resolveURL(h, s.path), _, void 0, d);
        });
      }).then(function(h) {
        return c === true && a.revokeObjectURL(l), ui(h, o), h.userData.mimeType = o.mimeType || YM(o.uri), h;
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
        l || (l = new Su(), Wn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = false, this.cache.add(a, l)), n = l;
      } else if (e.isLine) {
        const a = "LineBasicMaterial:" + n.uuid;
        let l = this.cache.get(a);
        l || (l = new Xd(), Wn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l;
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
      return Eo;
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
        if (a.color = new Re(1, 1, 1), a.opacity = 1, Array.isArray(h.baseColorFactor)) {
          const f = h.baseColorFactor;
          a.color.setRGB(f[0], f[1], f[2], Qt), a.opacity = f[3];
        }
        h.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", h.baseColorTexture, Ut)), a.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, a.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", h.metallicRoughnessTexture))), o = this._invokeOne(function(f) {
          return f.getMaterialType && f.getMaterialType(e);
        }), c.push(Promise.all(this._invokeAll(function(f) {
          return f.extendMaterialParams && f.extendMaterialParams(e, a);
        })));
      }
      s.doubleSided === true && (a.side = kn);
      const u = s.alphaMode || Dl.OPAQUE;
      if (u === Dl.BLEND ? (a.transparent = true, a.depthWrite = false) : (a.transparent = false, u === Dl.MASK && (a.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && o !== Hn && (c.push(t.assignTexture(a, "normalMap", s.normalTexture)), a.normalScale = new ee(1, 1), s.normalTexture.scale !== void 0)) {
        const h = s.normalTexture.scale;
        a.normalScale.set(h, h);
      }
      if (s.occlusionTexture !== void 0 && o !== Hn && (c.push(t.assignTexture(a, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && o !== Hn) {
        const h = s.emissiveFactor;
        a.emissive = new Re().setRGB(h[0], h[1], h[2], Qt);
      }
      return s.emissiveTexture !== void 0 && o !== Hn && c.push(t.assignTexture(a, "emissiveMap", s.emissiveTexture, Ut)), Promise.all(c).then(function() {
        const h = new o(a);
        return s.name && (h.name = s.name), ui(h, s), t.associations.set(h, {
          materials: e
        }), s.extensions && nr(i, h, s), h;
      });
    }
    createUniqueName(e) {
      const t = ot.sanitizeNodeName(e || "");
      return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
    }
    loadGeometries(e) {
      const t = this, n = this.extensions, i = this.primitiveCache;
      function s(a) {
        return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
          return Xf(l, a, t);
        });
      }
      const o = [];
      for (let a = 0, l = e.length; a < l; a++) {
        const c = e[a], u = qM(c), h = i[u];
        if (h) o.push(h.promise);
        else {
          let f;
          c.extensions && c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION] ? f = s(c) : f = Xf(new cn(), c, t), i[u] = {
            primitive: c,
            promise: f
          }, o.push(f);
        }
      }
      return Promise.all(o);
    }
    loadMesh(e) {
      const t = this, n = this.json, i = this.extensions, s = n.meshes[e], o = s.primitives, a = [];
      for (let l = 0, c = o.length; l < c; l++) {
        const u = o[l].material === void 0 ? GM(this.cache) : this.getDependency("material", o[l].material);
        a.push(u);
      }
      return a.push(t.loadGeometries(o)), Promise.all(a).then(function(l) {
        const c = l.slice(0, l.length - 1), u = l[l.length - 1], h = [];
        for (let d = 0, _ = u.length; d < _; d++) {
          const g = u[d], m = o[d];
          let p;
          const y = c[d];
          if (m.mode === En.TRIANGLES || m.mode === En.TRIANGLE_STRIP || m.mode === En.TRIANGLE_FAN || m.mode === void 0) p = s.isSkinnedMesh === true ? new p_(g, y) : new Rt(g, y), p.isSkinnedMesh === true && p.normalizeSkinWeights(), m.mode === En.TRIANGLE_STRIP ? p.geometry = Vf(p.geometry, Ld) : m.mode === En.TRIANGLE_FAN && (p.geometry = Vf(p.geometry, Ac));
          else if (m.mode === En.LINES) p = new y_(g, y);
          else if (m.mode === En.LINE_STRIP) p = new yu(g, y);
          else if (m.mode === En.LINE_LOOP) p = new S_(g, y);
          else if (m.mode === En.POINTS) p = new qd(g, y);
          else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
          Object.keys(p.geometry.morphAttributes).length > 0 && XM(p, s), p.name = t.createUniqueName(s.name || "mesh_" + e), ui(p, s), m.extensions && nr(i, p, m), t.assignFinalMaterial(p), h.push(p);
        }
        for (let d = 0, _ = h.length; d < _; d++) t.associations.set(h[d], {
          meshes: e,
          primitives: d
        });
        if (h.length === 1) return s.extensions && nr(i, h[0], s), h[0];
        const f = new mr();
        s.extensions && nr(i, f, s), t.associations.set(f, {
          meshes: e
        });
        for (let d = 0, _ = h.length; d < _; d++) f.add(h[d]);
        return f;
      });
    }
    loadCamera(e) {
      let t;
      const n = this.json.cameras[e], i = n[n.type];
      if (!i) {
        console.warn("THREE.GLTFLoader: Missing camera parameters.");
        return;
      }
      return n.type === "perspective" ? t = new $t(Fg.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Va(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), ui(t, n), Promise.resolve(t);
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
            const f = new Fe();
            s !== null && f.fromArray(s.array, c * 16), l.push(f);
          } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
        }
        return new xu(a, l);
      });
    }
    loadAnimation(e) {
      const t = this.json, n = this, i = t.animations[e], s = i.name ? i.name : "animation_" + e, o = [], a = [], l = [], c = [], u = [];
      for (let h = 0, f = i.channels.length; h < f; h++) {
        const d = i.channels[h], _ = i.samplers[d.sampler], g = d.target, m = g.node, p = i.parameters !== void 0 ? i.parameters[_.input] : _.input, y = i.parameters !== void 0 ? i.parameters[_.output] : _.output;
        g.node !== void 0 && (o.push(this.getDependency("node", m)), a.push(this.getDependency("accessor", p)), l.push(this.getDependency("accessor", y)), c.push(_), u.push(g));
      }
      return Promise.all([
        Promise.all(o),
        Promise.all(a),
        Promise.all(l),
        Promise.all(c),
        Promise.all(u)
      ]).then(function(h) {
        const f = h[0], d = h[1], _ = h[2], g = h[3], m = h[4], p = [];
        for (let y = 0, v = f.length; y < v; y++) {
          const x = f[y], b = d[y], w = _[y], A = g[y], P = m[y];
          if (x === void 0) continue;
          x.updateMatrix && x.updateMatrix();
          const S = n._createAnimationTracks(x, b, w, A, P);
          if (S) for (let M = 0; M < S.length; M++) p.push(S[M]);
        }
        return new c0(s, void 0, p);
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
        const u = c[0], h = c[1], f = c[2];
        f !== null && u.traverse(function(d) {
          d.isSkinnedMesh && d.bind(f, KM);
        });
        for (let d = 0, _ = h.length; d < _; d++) u.add(h[d]);
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
        if (s.isBone === true ? u = new Gd() : c.length > 1 ? u = new mr() : c.length === 1 ? u = c[0] : u = new gt(), u !== c[0]) for (let h = 0, f = c.length; h < f; h++) u.add(c[h]);
        if (s.name && (u.userData.name = s.name, u.name = o), ui(u, s), s.extensions && nr(n, u, s), s.matrix !== void 0) {
          const h = new Fe();
          h.fromArray(s.matrix), u.applyMatrix4(h);
        } else s.translation !== void 0 && u.position.fromArray(s.translation), s.rotation !== void 0 && u.quaternion.fromArray(s.rotation), s.scale !== void 0 && u.scale.fromArray(s.scale);
        return i.associations.has(u) || i.associations.set(u, {}), i.associations.get(u).nodes = e, u;
      }), this.nodeCache[e];
    }
    loadScene(e) {
      const t = this.extensions, n = this.json.scenes[e], i = this, s = new mr();
      n.name && (s.name = i.createUniqueName(n.name)), ui(s, n), n.extensions && nr(t, s, n);
      const o = n.nodes || [], a = [];
      for (let l = 0, c = o.length; l < c; l++) a.push(i.getDependency("node", o[l]));
      return Promise.all(a).then(function(l) {
        for (let u = 0, h = l.length; u < h; u++) s.add(l[u]);
        const c = (u) => {
          const h = /* @__PURE__ */ new Map();
          for (const [f, d] of i.associations) (f instanceof Wn || f instanceof Ct) && h.set(f, d);
          return u.traverse((f) => {
            const d = i.associations.get(f);
            d != null && h.set(f, d);
          }), h;
        };
        return i.associations = c(s), s;
      });
    }
    _createAnimationTracks(e, t, n, i, s) {
      const o = [], a = e.name ? e.name : e.uuid, l = [];
      Li[s.path] === Li.weights ? e.traverse(function(f) {
        f.morphTargetInfluences && l.push(f.name ? f.name : f.uuid);
      }) : l.push(a);
      let c;
      switch (Li[s.path]) {
        case Li.weights:
          c = gs;
          break;
        case Li.rotation:
          c = _s;
          break;
        case Li.position:
        case Li.scale:
          c = xs;
          break;
        default:
          switch (n.itemSize) {
            case 1:
              c = gs;
              break;
            case 2:
            case 3:
            default:
              c = xs;
              break;
          }
          break;
      }
      const u = i.interpolation !== void 0 ? HM[i.interpolation] : lo, h = this._getArrayFromAccessor(n);
      for (let f = 0, d = l.length; f < d; f++) {
        const _ = new c(l[f] + "." + Li[s.path], t.array, h, u);
        i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(_), o.push(_);
      }
      return o;
    }
    _getArrayFromAccessor(e) {
      let t = e.array;
      if (e.normalized) {
        const n = Bc(t.constructor), i = new Float32Array(t.length);
        for (let s = 0, o = t.length; s < o; s++) i[s] = t[s] * n;
        t = i;
      }
      return t;
    }
    _createCubicSplineTrackInterpolant(e) {
      e.createInterpolant = function(n) {
        const i = this instanceof _s ? VM : up;
        return new i(this.times, this.values, this.getValueSize() / 3, n);
      }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
    }
  }
  function jM(r, e, t) {
    const n = e.attributes, i = new Ei();
    if (n.POSITION !== void 0) {
      const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
      if (l !== void 0 && c !== void 0) {
        if (i.set(new D(l[0], l[1], l[2]), new D(c[0], c[1], c[2])), a.normalized) {
          const u = Bc(ns[a.componentType]);
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
          const f = t.json.accessors[h.POSITION], d = f.min, _ = f.max;
          if (d !== void 0 && _ !== void 0) {
            if (l.setX(Math.max(Math.abs(d[0]), Math.abs(_[0]))), l.setY(Math.max(Math.abs(d[1]), Math.abs(_[1]))), l.setZ(Math.max(Math.abs(d[2]), Math.abs(_[2]))), f.normalized) {
              const g = Bc(ns[f.componentType]);
              l.multiplyScalar(g);
            }
            a.max(l);
          } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        }
      }
      i.expandByVector(a);
    }
    r.boundingBox = i;
    const o = new Kn();
    i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = o;
  }
  function Xf(r, e, t) {
    const n = e.attributes, i = [];
    function s(o, a) {
      return t.getDependency("accessor", o).then(function(l) {
        r.setAttribute(a, l);
      });
    }
    for (const o in n) {
      const a = Fc[o] || o.toLowerCase();
      a in r.attributes || i.push(s(n[o], a));
    }
    if (e.indices !== void 0 && !r.index) {
      const o = t.getDependency("accessor", e.indices).then(function(a) {
        r.setIndex(a);
      });
      i.push(o);
    }
    return Ye.workingColorSpace !== Qt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`), ui(r, e), jM(r, e, t), Promise.all(i).then(function() {
      return e.targets !== void 0 ? WM(r, e.targets, t) : r;
    });
  }
  class hp extends br {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      const s = this, o = new wu(this.manager);
      o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
        const l = s.parse(JSON.parse(a));
        t && t(l);
      }, n, i);
    }
    parse(e) {
      return new ZM(e);
    }
  }
  class ZM {
    constructor(e) {
      this.isFont = true, this.type = "Font", this.data = e;
    }
    generateShapes(e, t = 100) {
      const n = [], i = JM(e, t, this.data);
      for (let s = 0, o = i.length; s < o; s++) n.push(...i[s].toShapes());
      return n;
    }
  }
  function JM(r, e, t) {
    const n = Array.from(r), i = e / t.resolution, s = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * i, o = [];
    let a = 0, l = 0;
    for (let c = 0; c < n.length; c++) {
      const u = n[c];
      if (u === `
`) a = 0, l -= s;
      else {
        const h = QM(u, i, a, l, t);
        a += h.offsetX, o.push(h.path);
      }
    }
    return o;
  }
  function QM(r, e, t, n, i) {
    const s = i.glyphs[r] || i.glyphs["?"];
    if (!s) {
      console.error('THREE.Font: character "' + r + '" does not exists in font family ' + i.familyName + ".");
      return;
    }
    const o = new I0();
    let a, l, c, u, h, f, d, _;
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
          c = g[m++] * e + t, u = g[m++] * e + n, h = g[m++] * e + t, f = g[m++] * e + n, o.quadraticCurveTo(h, f, c, u);
          break;
        case "b":
          c = g[m++] * e + t, u = g[m++] * e + n, h = g[m++] * e + t, f = g[m++] * e + n, d = g[m++] * e + t, _ = g[m++] * e + n, o.bezierCurveTo(h, f, d, _, c, u);
          break;
      }
    }
    return {
      offsetX: s.ha * e,
      path: o
    };
  }
  class fp extends Eu {
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
  function hi(r) {
    if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r;
  }
  function dp(r, e) {
    r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e;
  }
  var _n = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  }, vs = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  }, Du, Ft, mt, Xn = 1e8, Wt = 1 / Xn, zc = Math.PI * 2, eT = zc / 4, tT = 0, pp = Math.sqrt, nT = Math.cos, iT = Math.sin, It = function(e) {
    return typeof e == "string";
  }, Mt = function(e) {
    return typeof e == "function";
  }, Mi = function(e) {
    return typeof e == "number";
  }, Iu = function(e) {
    return typeof e > "u";
  }, Yn = function(e) {
    return typeof e == "object";
  }, rn = function(e) {
    return e !== false;
  }, Nu = function() {
    return typeof window < "u";
  }, oa = function(e) {
    return Mt(e) || It(e);
  }, mp = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
  }, Xt = Array.isArray, kc = /(?:-?\.?\d|\.)+/gi, gp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, jr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Nl = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _p = /[+-]=-?[.\d]+/, xp = /[^,'"\[\]\s]+/gi, rT = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _t, Bn, Vc, Uu, xn = {}, Pa = {}, vp, yp = function(e) {
    return (Pa = ys(e, xn)) && ln;
  }, Ou = function(e, t) {
    return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
  }, po = function(e, t) {
    return !t && console.warn(e);
  }, Sp = function(e, t) {
    return e && (xn[e] = t) && Pa && (Pa[e] = t) || xn;
  }, mo = function() {
    return 0;
  }, sT = {
    suppressEvents: true,
    isStart: true,
    kill: false
  }, _a = {
    suppressEvents: true,
    kill: false
  }, oT = {
    suppressEvents: true
  }, Fu = {}, ki = [], Hc = {}, Mp, dn = {}, Ul = {}, qf = 30, xa = [], Bu = "", zu = function(e) {
    var t = e[0], n, i;
    if (Yn(t) || Mt(t) || (e = [
      e
    ]), !(n = (t._gsap || {}).harness)) {
      for (i = xa.length; i-- && !xa[i].targetTest(t); ) ;
      n = xa[i];
    }
    for (i = e.length; i--; ) e[i] && (e[i]._gsap || (e[i]._gsap = new qp(e[i], n))) || e.splice(i, 1);
    return e;
  }, _r = function(e) {
    return e._gsap || zu(wn(e))[0]._gsap;
  }, Tp = function(e, t, n) {
    return (n = e[t]) && Mt(n) ? e[t]() : Iu(n) && e.getAttribute && e.getAttribute(t) || n;
  }, sn = function(e, t) {
    return (e = e.split(",")).forEach(t) || e;
  }, Tt = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  }, At = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  }, is = function(e, t) {
    var n = t.charAt(0), i = parseFloat(t.substr(2));
    return e = parseFloat(e), n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i;
  }, aT = function(e, t) {
    for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; ) ;
    return i < n;
  }, La = function() {
    var e = ki.length, t = ki.slice(0), n, i;
    for (Hc = {}, ki.length = 0, n = 0; n < e; n++) i = t[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], true)._lazy = 0);
  }, Ep = function(e, t, n, i) {
    ki.length && !Ft && La(), e.render(t, n, Ft && t < 0 && (e._initted || e._startAt)), ki.length && !Ft && La();
  }, bp = function(e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(xp).length < 2 ? t : It(e) ? e.trim() : e;
  }, wp = function(e) {
    return e;
  }, vn = function(e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  }, lT = function(e) {
    return function(t, n) {
      for (var i in n) i in t || i === "duration" && e || i === "ease" || (t[i] = n[i]);
    };
  }, ys = function(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }, Yf = function r(e, t) {
    for (var n in t) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = Yn(t[n]) ? r(e[n] || (e[n] = {}), t[n]) : t[n]);
    return e;
  }, Da = function(e, t) {
    var n = {}, i;
    for (i in e) i in t || (n[i] = e[i]);
    return n;
  }, Qs = function(e) {
    var t = e.parent || _t, n = e.keyframes ? lT(Xt(e.keyframes)) : vn;
    if (rn(e.inherit)) for (; t; ) n(e, t.vars.defaults), t = t.parent || t._dp;
    return e;
  }, cT = function(e, t) {
    for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n]; ) ;
    return n < 0;
  }, Ap = function(e, t, n, i, s) {
    var o = e[i], a;
    if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev;
    return o ? (t._next = o._next, o._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = o, t.parent = t._dp = e, t;
  }, Ga = function(e, t, n, i) {
    n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
    var s = t._prev, o = t._next;
    s ? s._next = o : e[n] === t && (e[n] = o), o ? o._prev = s : e[i] === t && (e[i] = s), t._next = t._prev = t.parent = null;
  }, Hi = function(e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
  }, xr = function(e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0)) for (var n = e; n; ) n._dirty = 1, n = n.parent;
    return e;
  }, uT = function(e) {
    for (var t = e.parent; t && t.parent; ) t._dirty = 1, t.totalDuration(), t = t.parent;
    return e;
  }, Gc = function(e, t, n, i) {
    return e._startAt && (Ft ? e._startAt.revert(_a) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, true, i));
  }, hT = function r(e) {
    return !e || e._ts && r(e.parent);
  }, Kf = function(e) {
    return e._repeat ? Ss(e._tTime, e = e.duration() + e._rDelay) * e : 0;
  }, Ss = function(e, t) {
    var n = Math.floor(e = At(e / t));
    return e && n === e ? n - 1 : n;
  }, Ia = function(e, t) {
    return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
  }, Wa = function(e) {
    return e._end = At(e._start + (e._tDur / Math.abs(e._ts || e._rts || Wt) || 0));
  }, Xa = function(e, t) {
    var n = e._dp;
    return n && n.smoothChildTiming && e._ts && (e._start = At(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Wa(e), n._dirty || xr(n, e)), e;
  }, Rp = function(e, t) {
    var n;
    if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = Ia(e.rawTime(), t), (!t._dur || wo(0, t.totalDuration(), n) - t._tTime > Wt) && t.render(n, true)), xr(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
      if (e._dur < e.duration()) for (n = e; n._dp; ) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
      e._zTime = -1e-8;
    }
  }, Vn = function(e, t, n, i) {
    return t.parent && Hi(t), t._start = At((Mi(n) ? n : n || e !== _t ? Tn(e, n, t) : e._time) + t._delay), t._end = At(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Ap(e, t, "_first", "_last", e._sort ? "_start" : 0), Wc(t) || (e._recent = t), i || Rp(e, t), e._ts < 0 && Xa(e, e._tTime), e;
  }, Cp = function(e, t) {
    return (xn.ScrollTrigger || Ou("scrollTrigger", t)) && xn.ScrollTrigger.create(t, e);
  }, Pp = function(e, t, n, i, s) {
    if (Vu(e, t, s), !e._initted) return 1;
    if (!n && e._pt && !Ft && (e._dur && e.vars.lazy !== false || !e._dur && e.vars.lazy) && Mp !== pn.frame) return ki.push(e), e._lazy = [
      s,
      i
    ], 1;
  }, fT = function r(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
  }, Wc = function(e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  }, dT = function(e, t, n, i) {
    var s = e.ratio, o = t < 0 || !t && (!e._start && fT(e) && !(!e._initted && Wc(e)) || (e._ts < 0 || e._dp._ts < 0) && !Wc(e)) ? 0 : 1, a = e._rDelay, l = 0, c, u, h;
    if (a && e._repeat && (l = wo(0, e._tDur, t), u = Ss(l, a), e._yoyo && u & 1 && (o = 1 - o), u !== Ss(e._tTime, a) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || Ft || i || e._zTime === Wt || !t && e._zTime) {
      if (!e._initted && Pp(e, t, i, n, l)) return;
      for (h = e._zTime, e._zTime = t || (n ? Wt : 0), n || (n = t && !h), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, c = e._pt; c; ) c.r(o, c.d), c = c._next;
      t < 0 && Gc(e, t, n, true), e._onUpdate && !n && gn(e, "onUpdate"), l && e._repeat && !n && e.parent && gn(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && Hi(e, 1), !n && !Ft && (gn(e, o ? "onComplete" : "onReverseComplete", true), e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  }, pT = function(e, t, n) {
    var i;
    if (n > t) for (i = e._first; i && i._start <= n; ) {
      if (i.data === "isPause" && i._start > t) return i;
      i = i._next;
    }
    else for (i = e._last; i && i._start >= n; ) {
      if (i.data === "isPause" && i._start < t) return i;
      i = i._prev;
    }
  }, Ms = function(e, t, n, i) {
    var s = e._repeat, o = At(t) || 0, a = e._tTime / e._tDur;
    return a && !i && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : At(o * (s + 1) + e._rDelay * s) : o, a > 0 && !i && Xa(e, e._tTime = e._tDur * a), e.parent && Wa(e), n || xr(e.parent, e), e;
  }, $f = function(e) {
    return e instanceof jt ? xr(e) : Ms(e, e._dur);
  }, mT = {
    _start: 0,
    endTime: mo,
    totalDuration: mo
  }, Tn = function r(e, t, n) {
    var i = e.labels, s = e._recent || mT, o = e.duration() >= Xn ? s.endTime(false) : e._dur, a, l, c;
    return It(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), c = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (a < 0 ? s : n).totalDuration() / 100 : 1)) : a < 0 ? (t in i || (i[t] = o), i[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), c && n && (l = l / 100 * (Xt(n) ? n[0] : n).totalDuration()), a > 1 ? r(e, t.substr(0, a - 1), n) + l : o + l)) : t == null ? o : +t;
  }, eo = function(e, t, n) {
    var i = Mi(t[1]), s = (i ? 2 : 1) + (e < 2 ? 0 : 1), o = t[s], a, l;
    if (i && (o.duration = t[1]), o.parent = n, e) {
      for (a = o, l = n; l && !("immediateRender" in a); ) a = l.vars.defaults || {}, l = rn(l.vars.inherit) && l.parent;
      o.immediateRender = rn(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[s - 1];
    }
    return new wt(t[0], o, t[s + 1]);
  }, Xi = function(e, t) {
    return e || e === 0 ? t(e) : t;
  }, wo = function(e, t, n) {
    return n < e ? e : n > t ? t : n;
  }, Ht = function(e, t) {
    return !It(e) || !(t = rT.exec(e)) ? "" : t[1];
  }, gT = function(e, t, n) {
    return Xi(n, function(i) {
      return wo(e, t, i);
    });
  }, Xc = [].slice, Lp = function(e, t) {
    return e && Yn(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Yn(e[0])) && !e.nodeType && e !== Bn;
  }, _T = function(e, t, n) {
    return n === void 0 && (n = []), e.forEach(function(i) {
      var s;
      return It(i) && !t || Lp(i, 1) ? (s = n).push.apply(s, wn(i)) : n.push(i);
    }) || n;
  }, wn = function(e, t, n) {
    return mt && !t && mt.selector ? mt.selector(e) : It(e) && !n && (Vc || !Ts()) ? Xc.call((t || Uu).querySelectorAll(e), 0) : Xt(e) ? _T(e, n) : Lp(e) ? Xc.call(e, 0) : e ? [
      e
    ] : [];
  }, qc = function(e) {
    return e = wn(e)[0] || po("Invalid scope") || {}, function(t) {
      var n = e.current || e.nativeElement || e;
      return wn(t, n.querySelectorAll ? n : n === e ? po("Invalid scope") || Uu.createElement("div") : e);
    };
  }, Dp = function(e) {
    return e.sort(function() {
      return 0.5 - Math.random();
    });
  }, Ip = function(e) {
    if (Mt(e)) return e;
    var t = Yn(e) ? e : {
      each: e
    }, n = vr(t.ease), i = t.from || 0, s = parseFloat(t.base) || 0, o = {}, a = i > 0 && i < 1, l = isNaN(i) || a, c = t.axis, u = i, h = i;
    return It(i) ? u = h = {
      center: 0.5,
      edges: 0.5,
      end: 1
    }[i] || 0 : !a && l && (u = i[0], h = i[1]), function(f, d, _) {
      var g = (_ || t).length, m = o[g], p, y, v, x, b, w, A, P, S;
      if (!m) {
        if (S = t.grid === "auto" ? 0 : (t.grid || [
          1,
          Xn
        ])[1], !S) {
          for (A = -1e8; A < (A = _[S++].getBoundingClientRect().left) && S < g; ) ;
          S < g && S--;
        }
        for (m = o[g] = [], p = l ? Math.min(S, g) * u - 0.5 : i % S, y = S === Xn ? 0 : l ? g * h / S - 0.5 : i / S | 0, A = 0, P = Xn, w = 0; w < g; w++) v = w % S - p, x = y - (w / S | 0), m[w] = b = c ? Math.abs(c === "y" ? x : v) : pp(v * v + x * x), b > A && (A = b), b < P && (P = b);
        i === "random" && Dp(m), m.max = A - P, m.min = P, m.v = g = (parseFloat(t.amount) || parseFloat(t.each) * (S > g ? g - 1 : c ? c === "y" ? g / S : S : Math.max(S, g / S)) || 0) * (i === "edges" ? -1 : 1), m.b = g < 0 ? s - g : s, m.u = Ht(t.amount || t.each) || 0, n = n && g < 0 ? Gp(n) : n;
      }
      return g = (m[f] - m.min) / m.max || 0, At(m.b + (n ? n(g) : g) * m.v) + m.u;
    };
  }, Yc = function(e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(n) {
      var i = At(Math.round(parseFloat(n) / e) * e * t);
      return (i - i % 1) / t + (Mi(n) ? 0 : Ht(n));
    };
  }, Np = function(e, t) {
    var n = Xt(e), i, s;
    return !n && Yn(e) && (i = n = e.radius || Xn, e.values ? (e = wn(e.values), (s = !Mi(e[0])) && (i *= i)) : e = Yc(e.increment)), Xi(t, n ? Mt(e) ? function(o) {
      return s = e(o), Math.abs(s - o) <= i ? s : o;
    } : function(o) {
      for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), c = Xn, u = 0, h = e.length, f, d; h--; ) s ? (f = e[h].x - a, d = e[h].y - l, f = f * f + d * d) : f = Math.abs(e[h] - a), f < c && (c = f, u = h);
      return u = !i || c <= i ? e[u] : o, s || u === o || Mi(o) ? u : u + Ht(o);
    } : Yc(e));
  }, Up = function(e, t, n, i) {
    return Xi(Xt(e) ? !t : n === true ? !!(n = 0) : !i, function() {
      return Xt(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) * n * i) / i;
    });
  }, xT = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(i) {
      return t.reduce(function(s, o) {
        return o(s);
      }, i);
    };
  }, vT = function(e, t) {
    return function(n) {
      return e(parseFloat(n)) + (t || Ht(n));
    };
  }, yT = function(e, t, n) {
    return Fp(e, t, 0, 1, n);
  }, Op = function(e, t, n) {
    return Xi(n, function(i) {
      return e[~~t(i)];
    });
  }, ST = function r(e, t, n) {
    var i = t - e;
    return Xt(e) ? Op(e, r(0, e.length), t) : Xi(n, function(s) {
      return (i + (s - e) % i) % i + e;
    });
  }, MT = function r(e, t, n) {
    var i = t - e, s = i * 2;
    return Xt(e) ? Op(e, r(0, e.length - 1), t) : Xi(n, function(o) {
      return o = (s + (o - e) % s) % s || 0, e + (o > i ? s - o : o);
    });
  }, go = function(e) {
    for (var t = 0, n = "", i, s, o, a; ~(i = e.indexOf("random(", t)); ) o = e.indexOf(")", i), a = e.charAt(i + 7) === "[", s = e.substr(i + 7, o - i - 7).match(a ? xp : kc), n += e.substr(t, i - t) + Up(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), t = o + 1;
    return n + e.substr(t, e.length - t);
  }, Fp = function(e, t, n, i, s) {
    var o = t - e, a = i - n;
    return Xi(s, function(l) {
      return n + ((l - e) / o * a || 0);
    });
  }, TT = function r(e, t, n, i) {
    var s = isNaN(e + t) ? 0 : function(d) {
      return (1 - d) * e + d * t;
    };
    if (!s) {
      var o = It(e), a = {}, l, c, u, h, f;
      if (n === true && (i = 1) && (n = null), o) e = {
        p: e
      }, t = {
        p: t
      };
      else if (Xt(e) && !Xt(t)) {
        for (u = [], h = e.length, f = h - 2, c = 1; c < h; c++) u.push(r(e[c - 1], e[c]));
        h--, s = function(_) {
          _ *= h;
          var g = Math.min(f, ~~_);
          return u[g](_ - g);
        }, n = t;
      } else i || (e = ys(Xt(e) ? [] : {}, e));
      if (!u) {
        for (l in t) ku.call(a, e, l, "get", t[l]);
        s = function(_) {
          return Wu(_, a) || (o ? e.p : e);
        };
      }
    }
    return Xi(n, s);
  }, jf = function(e, t, n) {
    var i = e.labels, s = Xn, o, a, l;
    for (o in i) a = i[o] - t, a < 0 == !!n && a && s > (a = Math.abs(a)) && (l = o, s = a);
    return l;
  }, gn = function(e, t, n) {
    var i = e.vars, s = i[t], o = mt, a = e._ctx, l, c, u;
    if (s) return l = i[t + "Params"], c = i.callbackScope || e, n && ki.length && La(), a && (mt = a), u = l ? s.apply(c, l) : s.call(c), mt = o, u;
  }, Ws = function(e) {
    return Hi(e), e.scrollTrigger && e.scrollTrigger.kill(!!Ft), e.progress() < 1 && gn(e, "onInterrupt"), e;
  }, Zr, Bp = [], zp = function(e) {
    if (e) if (e = !e.name && e.default || e, Nu() || e.headless) {
      var t = e.name, n = Mt(e), i = t && !n && e.init ? function() {
        this._props = [];
      } : e, s = {
        init: mo,
        render: Wu,
        add: ku,
        kill: zT,
        modifier: BT,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: Gu,
        aliases: {},
        register: 0
      };
      if (Ts(), e !== i) {
        if (dn[t]) return;
        vn(i, vn(Da(e, s), o)), ys(i.prototype, ys(s, Da(e, o))), dn[i.prop = t] = i, e.targetTest && (xa.push(i), Fu[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      Sp(t, i), e.register && e.register(ln, i, on);
    } else Bp.push(e);
  }, ct = 255, Xs = {
    aqua: [
      0,
      ct,
      ct
    ],
    lime: [
      0,
      ct,
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
      ct
    ],
    navy: [
      0,
      0,
      128
    ],
    white: [
      ct,
      ct,
      ct
    ],
    olive: [
      128,
      128,
      0
    ],
    yellow: [
      ct,
      ct,
      0
    ],
    orange: [
      ct,
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
      ct,
      0,
      0
    ],
    pink: [
      ct,
      192,
      203
    ],
    cyan: [
      0,
      ct,
      ct
    ],
    transparent: [
      ct,
      ct,
      ct,
      0
    ]
  }, Ol = function(e, t, n) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < 0.5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * ct + 0.5 | 0;
  }, kp = function(e, t, n) {
    var i = e ? Mi(e) ? [
      e >> 16,
      e >> 8 & ct,
      e & ct
    ] : 0 : Xs.black, s, o, a, l, c, u, h, f, d, _;
    if (!i) {
      if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Xs[e]) i = Xs[e];
      else if (e.charAt(0) === "#") {
        if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [
          i >> 16,
          i >> 8 & ct,
          i & ct,
          parseInt(e.substr(7), 16) / 255
        ];
        e = parseInt(e.substr(1), 16), i = [
          e >> 16,
          e >> 8 & ct,
          e & ct
        ];
      } else if (e.substr(0, 3) === "hsl") {
        if (i = _ = e.match(kc), !t) l = +i[0] % 360 / 360, c = +i[1] / 100, u = +i[2] / 100, o = u <= 0.5 ? u * (c + 1) : u + c - u * c, s = u * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = Ol(l + 1 / 3, s, o), i[1] = Ol(l, s, o), i[2] = Ol(l - 1 / 3, s, o);
        else if (~e.indexOf("=")) return i = e.match(gp), n && i.length < 4 && (i[3] = 1), i;
      } else i = e.match(kc) || Xs.transparent;
      i = i.map(Number);
    }
    return t && !_ && (s = i[0] / ct, o = i[1] / ct, a = i[2] / ct, h = Math.max(s, o, a), f = Math.min(s, o, a), u = (h + f) / 2, h === f ? l = c = 0 : (d = h - f, c = u > 0.5 ? d / (2 - h - f) : d / (h + f), l = h === s ? (o - a) / d + (o < a ? 6 : 0) : h === o ? (a - s) / d + 2 : (s - o) / d + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(c * 100 + 0.5), i[2] = ~~(u * 100 + 0.5)), n && i.length < 4 && (i[3] = 1), i;
  }, Vp = function(e) {
    var t = [], n = [], i = -1;
    return e.split(Vi).forEach(function(s) {
      var o = s.match(jr) || [];
      t.push.apply(t, o), n.push(i += o.length + 1);
    }), t.c = n, t;
  }, Zf = function(e, t, n) {
    var i = "", s = (e + i).match(Vi), o = t ? "hsla(" : "rgba(", a = 0, l, c, u, h;
    if (!s) return e;
    if (s = s.map(function(f) {
      return (f = kp(f, t, 1)) && o + (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
    }), n && (u = Vp(e), l = n.c, l.join(i) !== u.c.join(i))) for (c = e.replace(Vi, "1").split(jr), h = c.length - 1; a < h; a++) i += c[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (u.length ? u : s.length ? s : n).shift());
    if (!c) for (c = e.split(Vi), h = c.length - 1; a < h; a++) i += c[a] + s[a];
    return i + c[h];
  }, Vi = function() {
    var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in Xs) r += "|" + e + "\\b";
    return new RegExp(r + ")", "gi");
  }(), ET = /hsl[a]?\(/, Hp = function(e) {
    var t = e.join(" "), n;
    if (Vi.lastIndex = 0, Vi.test(t)) return n = ET.test(t), e[1] = Zf(e[1], n), e[0] = Zf(e[0], n, Vp(e[1])), true;
  }, _o, pn = function() {
    var r = Date.now, e = 500, t = 33, n = r(), i = n, s = 1e3 / 240, o = s, a = [], l, c, u, h, f, d, _ = function g(m) {
      var p = r() - i, y = m === true, v, x, b, w;
      if ((p > e || p < 0) && (n += p - t), i += p, b = i - n, v = b - o, (v > 0 || y) && (w = ++h.frame, f = b - h.time * 1e3, h.time = b = b / 1e3, o += v + (v >= s ? 4 : s - v), x = 1), y || (l = c(g)), x) for (d = 0; d < a.length; d++) a[d](b, f, w, m);
    };
    return h = {
      time: 0,
      frame: 0,
      tick: function() {
        _(true);
      },
      deltaRatio: function(m) {
        return f / (1e3 / (m || 60));
      },
      wake: function() {
        vp && (!Vc && Nu() && (Bn = Vc = window, Uu = Bn.document || {}, xn.gsap = ln, (Bn.gsapVersions || (Bn.gsapVersions = [])).push(ln.version), yp(Pa || Bn.GreenSockGlobals || !Bn.gsap && Bn || {}), Bp.forEach(zp)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && h.sleep(), c = u || function(m) {
          return setTimeout(m, o - h.time * 1e3 + 1 | 0);
        }, _o = 1, _(2));
      },
      sleep: function() {
        (u ? cancelAnimationFrame : clearTimeout)(l), _o = 0, c = mo;
      },
      lagSmoothing: function(m, p) {
        e = m || 1 / 0, t = Math.min(p || 33, e);
      },
      fps: function(m) {
        s = 1e3 / (m || 240), o = h.time * 1e3 + s;
      },
      add: function(m, p, y) {
        var v = p ? function(x, b, w, A) {
          m(x, b, w, A), h.remove(v);
        } : m;
        return h.remove(m), a[y ? "unshift" : "push"](v), Ts(), v;
      },
      remove: function(m, p) {
        ~(p = a.indexOf(m)) && a.splice(p, 1) && d >= p && d--;
      },
      _listeners: a
    }, h;
  }(), Ts = function() {
    return !_o && pn.wake();
  }, Xe = {}, bT = /^[\d.\-M][\d.\-,\s]/, wT = /["']/g, AT = function(e) {
    for (var t = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], s = 1, o = n.length, a, l, c; s < o; s++) l = n[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, a), t[i] = isNaN(c) ? c.replace(wT, "").trim() : +c, i = l.substr(a + 1).trim();
    return t;
  }, RT = function(e) {
    var t = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", t);
    return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n);
  }, CT = function(e) {
    var t = (e + "").split("("), n = Xe[t[0]];
    return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [
      AT(t[1])
    ] : RT(e).split(",").map(bp)) : Xe._CE && bT.test(e) ? Xe._CE("", e) : n;
  }, Gp = function(e) {
    return function(t) {
      return 1 - e(1 - t);
    };
  }, Wp = function r(e, t) {
    for (var n = e._first, i; n; ) n instanceof jt ? r(n, t) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== t && (n.timeline ? r(n.timeline, t) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = t)), n = n._next;
  }, vr = function(e, t) {
    return e && (Mt(e) ? e : Xe[e] || CT(e)) || t;
  }, Ar = function(e, t, n, i) {
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
    return sn(e, function(a) {
      Xe[a] = xn[a] = s, Xe[o = a.toLowerCase()] = n;
      for (var l in s) Xe[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Xe[a + "." + l] = s[l];
    }), s;
  }, Xp = function(e) {
    return function(t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  }, Fl = function r(e, t, n) {
    var i = t >= 1 ? t : 1, s = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = s / zc * (Math.asin(1 / i) || 0), a = function(u) {
      return u === 1 ? 1 : i * Math.pow(2, -10 * u) * iT((u - o) * s) + 1;
    }, l = e === "out" ? a : e === "in" ? function(c) {
      return 1 - a(1 - c);
    } : Xp(a);
    return s = zc / s, l.config = function(c, u) {
      return r(e, c, u);
    }, l;
  }, Bl = function r(e, t) {
    t === void 0 && (t = 1.70158);
    var n = function(o) {
      return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
    }, i = e === "out" ? n : e === "in" ? function(s) {
      return 1 - n(1 - s);
    } : Xp(n);
    return i.config = function(s) {
      return r(e, s);
    }, i;
  };
  sn("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, e) {
    var t = e < 5 ? e + 1 : e;
    Ar(r + ",Power" + (t - 1), e ? function(n) {
      return Math.pow(n, t);
    } : function(n) {
      return n;
    }, function(n) {
      return 1 - Math.pow(1 - n, t);
    }, function(n) {
      return n < 0.5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2;
    });
  });
  Xe.Linear.easeNone = Xe.none = Xe.Linear.easeIn;
  Ar("Elastic", Fl("in"), Fl("out"), Fl());
  (function(r, e) {
    var t = 1 / e, n = 2 * t, i = 2.5 * t, s = function(a) {
      return a < t ? r * a * a : a < n ? r * Math.pow(a - 1.5 / e, 2) + 0.75 : a < i ? r * (a -= 2.25 / e) * a + 0.9375 : r * Math.pow(a - 2.625 / e, 2) + 0.984375;
    };
    Ar("Bounce", function(o) {
      return 1 - s(1 - o);
    }, s);
  })(7.5625, 2.75);
  Ar("Expo", function(r) {
    return Math.pow(2, 10 * (r - 1)) * r + r * r * r * r * r * r * (1 - r);
  });
  Ar("Circ", function(r) {
    return -(pp(1 - r * r) - 1);
  });
  Ar("Sine", function(r) {
    return r === 1 ? 1 : -nT(r * eT) + 1;
  });
  Ar("Back", Bl("in"), Bl("out"), Bl());
  Xe.SteppedEase = Xe.steps = xn.SteppedEase = {
    config: function(e, t) {
      e === void 0 && (e = 1);
      var n = 1 / e, i = e + (t ? 0 : 1), s = t ? 1 : 0, o = 1 - Wt;
      return function(a) {
        return ((i * wo(0, o, a) | 0) + s) * n;
      };
    }
  };
  vs.ease = Xe["quad.out"];
  sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
    return Bu += r + "," + r + "Params,";
  });
  var qp = function(e, t) {
    this.id = tT++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Tp, this.set = t ? t.getSetter : Gu;
  }, xo = function() {
    function r(t) {
      this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ms(this, +t.duration, 1, 1), this.data = t.data, mt && (this._ctx = mt, mt.data.push(this)), _o || pn.wake();
    }
    var e = r.prototype;
    return e.delay = function(n) {
      return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay;
    }, e.duration = function(n) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur;
    }, e.totalDuration = function(n) {
      return arguments.length ? (this._dirty = 0, Ms(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, e.totalTime = function(n, i) {
      if (Ts(), !arguments.length) return this._tTime;
      var s = this._dp;
      if (s && s.smoothChildTiming && this._ts) {
        for (Xa(this, n), !s._dp || s.parent || Rp(s, this); s && s.parent; ) s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, true), s = s.parent;
        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && Vn(this._dp, this, this._start - this._delay);
      }
      return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === Wt || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), Ep(this, n, i)), this;
    }, e.time = function(n, i) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + Kf(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time;
    }, e.totalProgress = function(n, i) {
      return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
    }, e.progress = function(n, i) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + Kf(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    }, e.iteration = function(n, i) {
      var s = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (n - 1) * s, i) : this._repeat ? Ss(this._tTime, s) + 1 : 1;
    }, e.timeScale = function(n, i) {
      if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
      if (this._rts === n) return this;
      var s = this.parent && this._ts ? Ia(this.parent._time, this) : this._tTime;
      return this._rts = +n || 0, this._ts = this._ps || n === -1e-8 ? 0 : this._rts, this.totalTime(wo(-Math.abs(this._delay), this._tDur, s), i !== false), Wa(this), uT(this);
    }, e.paused = function(n) {
      return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ts(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Wt && (this._tTime -= Wt)))), this) : this._ps;
    }, e.startTime = function(n) {
      if (arguments.length) {
        this._start = n;
        var i = this.parent || this._dp;
        return i && (i._sort || !this.parent) && Vn(i, this, n - this._delay), this;
      }
      return this._start;
    }, e.endTime = function(n) {
      return this._start + (rn(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    }, e.rawTime = function(n) {
      var i = this.parent || this._dp;
      return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ia(i.rawTime(n), this) : this._tTime : this._tTime;
    }, e.revert = function(n) {
      n === void 0 && (n = oT);
      var i = Ft;
      return Ft = n, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents)), this.data !== "nested" && n.kill !== false && this.kill(), Ft = i, this;
    }, e.globalTime = function(n) {
      for (var i = this, s = arguments.length ? n : i.rawTime(); i; ) s = i._start + s / (Math.abs(i._ts) || 1), i = i._dp;
      return !this.parent && this._sat ? this._sat.globalTime(n) : s;
    }, e.repeat = function(n) {
      return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, $f(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
    }, e.repeatDelay = function(n) {
      if (arguments.length) {
        var i = this._time;
        return this._rDelay = n, $f(this), i ? this.time(i) : this;
      }
      return this._rDelay;
    }, e.yoyo = function(n) {
      return arguments.length ? (this._yoyo = n, this) : this._yoyo;
    }, e.seek = function(n, i) {
      return this.totalTime(Tn(this, n), rn(i));
    }, e.restart = function(n, i) {
      return this.play().totalTime(n ? -this._delay : 0, rn(i)), this._dur || (this._zTime = -1e-8), this;
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
      return !!(!n || this._ts && this._initted && n.isActive() && (s = n.rawTime(true)) >= i && s < this.endTime(true) - Wt);
    }, e.eventCallback = function(n, i, s) {
      var o = this.vars;
      return arguments.length > 1 ? (i ? (o[n] = i, s && (o[n + "Params"] = s), n === "onUpdate" && (this._onUpdate = i)) : delete o[n], this) : o[n];
    }, e.then = function(n) {
      var i = this;
      return new Promise(function(s) {
        var o = Mt(n) ? n : wp, a = function() {
          var c = i.then;
          i.then = null, Mt(o) && (o = o(i)) && (o.then || o === i) && (i.then = c), s(o), i.then = c;
        };
        i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a;
      });
    }, e.kill = function() {
      Ws(this);
    }, r;
  }();
  vn(xo.prototype, {
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
  var jt = function(r) {
    dp(e, r);
    function e(n, i) {
      var s;
      return n === void 0 && (n = {}), s = r.call(this, n) || this, s.labels = {}, s.smoothChildTiming = !!n.smoothChildTiming, s.autoRemoveChildren = !!n.autoRemoveChildren, s._sort = rn(n.sortChildren), _t && Vn(n.parent || _t, hi(s), i), n.reversed && s.reverse(), n.paused && s.paused(true), n.scrollTrigger && Cp(hi(s), n.scrollTrigger), s;
    }
    var t = e.prototype;
    return t.to = function(i, s, o) {
      return eo(0, arguments, this), this;
    }, t.from = function(i, s, o) {
      return eo(1, arguments, this), this;
    }, t.fromTo = function(i, s, o, a) {
      return eo(2, arguments, this), this;
    }, t.set = function(i, s, o) {
      return s.duration = 0, s.parent = this, Qs(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new wt(i, s, Tn(this, o), 1), this;
    }, t.call = function(i, s, o) {
      return Vn(this, wt.delayedCall(0, i, s), o);
    }, t.staggerTo = function(i, s, o, a, l, c, u) {
      return o.duration = s, o.stagger = o.stagger || a, o.onComplete = c, o.onCompleteParams = u, o.parent = this, new wt(i, o, Tn(this, l)), this;
    }, t.staggerFrom = function(i, s, o, a, l, c, u) {
      return o.runBackwards = 1, Qs(o).immediateRender = rn(o.immediateRender), this.staggerTo(i, s, o, a, l, c, u);
    }, t.staggerFromTo = function(i, s, o, a, l, c, u, h) {
      return a.startAt = o, Qs(a).immediateRender = rn(a.immediateRender), this.staggerTo(i, s, a, l, c, u, h);
    }, t.render = function(i, s, o) {
      var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, u = i <= 0 ? 0 : At(i), h = this._zTime < 0 != i < 0 && (this._initted || !c), f, d, _, g, m, p, y, v, x, b, w, A;
      if (this !== _t && u > l && i >= 0 && (u = l), u !== this._tTime || o || h) {
        if (a !== this._time && c && (u += this._time - a, i += this._time - a), f = u, x = this._start, v = this._ts, p = !v, h && (c || (a = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
          if (w = this._yoyo, m = c + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(m * 100 + i, s, o);
          if (f = At(u % m), u === l ? (g = this._repeat, f = c) : (b = At(u / m), g = ~~b, g && g === b && (f = c, g--), f > c && (f = c)), b = Ss(this._tTime, m), !a && this._tTime && b !== g && this._tTime - b * m - this._dur <= 0 && (b = g), w && g & 1 && (f = c - f, A = 1), g !== b && !this._lock) {
            var P = w && b & 1, S = P === (w && g & 1);
            if (g < b && (P = !P), a = P ? 0 : u % c ? c : u, this._lock = 1, this.render(a || (A ? 0 : At(g * m)), s, !c)._lock = 0, this._tTime = u, !s && this.parent && gn(this, "onRepeat"), this.vars.repeatRefresh && !A && (this.invalidate()._lock = 1), a && a !== this._time || p !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (c = this._dur, l = this._tDur, S && (this._lock = 2, a = P ? c : -1e-4, this.render(a, true), this.vars.repeatRefresh && !A && this.invalidate()), this._lock = 0, !this._ts && !p) return this;
            Wp(this, A);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (y = pT(this, At(a), At(f)), y && (u -= f - (f = y._start))), this._tTime = u, this._time = f, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && f && !s && !g && (gn(this, "onStart"), this._tTime !== u)) return this;
        if (f >= a && i >= 0) for (d = this._first; d; ) {
          if (_ = d._next, (d._act || f >= d._start) && d._ts && y !== d) {
            if (d.parent !== this) return this.render(i, s, o);
            if (d.render(d._ts > 0 ? (f - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (f - d._start) * d._ts, s, o), f !== this._time || !this._ts && !p) {
              y = 0, _ && (u += this._zTime = -1e-8);
              break;
            }
          }
          d = _;
        }
        else {
          d = this._last;
          for (var M = i < 0 ? i : f; d; ) {
            if (_ = d._prev, (d._act || M <= d._end) && d._ts && y !== d) {
              if (d.parent !== this) return this.render(i, s, o);
              if (d.render(d._ts > 0 ? (M - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (M - d._start) * d._ts, s, o || Ft && (d._initted || d._startAt)), f !== this._time || !this._ts && !p) {
                y = 0, _ && (u += this._zTime = M ? -1e-8 : Wt);
                break;
              }
            }
            d = _;
          }
        }
        if (y && !s && (this.pause(), y.render(f >= a ? 0 : -1e-8)._zTime = f >= a ? 1 : -1, this._ts)) return this._start = x, Wa(this), this.render(i, s, o);
        this._onUpdate && !s && gn(this, "onUpdate", true), (u === l && this._tTime >= this.totalDuration() || !u && a) && (x === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (u === l && this._ts > 0 || !u && this._ts < 0) && Hi(this, 1), !s && !(i < 0 && !a) && (u || a || !l) && (gn(this, u === l && i >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(u < l && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }, t.add = function(i, s) {
      var o = this;
      if (Mi(s) || (s = Tn(this, s, i)), !(i instanceof xo)) {
        if (Xt(i)) return i.forEach(function(a) {
          return o.add(a, s);
        }), this;
        if (It(i)) return this.addLabel(i, s);
        if (Mt(i)) i = wt.delayedCall(0, i);
        else return this;
      }
      return this !== i ? Vn(this, i, s) : this;
    }, t.getChildren = function(i, s, o, a) {
      i === void 0 && (i = true), s === void 0 && (s = true), o === void 0 && (o = true), a === void 0 && (a = -1e8);
      for (var l = [], c = this._first; c; ) c._start >= a && (c instanceof wt ? s && l.push(c) : (o && l.push(c), i && l.push.apply(l, c.getChildren(true, s, o)))), c = c._next;
      return l;
    }, t.getById = function(i) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; ) if (s[o].vars.id === i) return s[o];
    }, t.remove = function(i) {
      return It(i) ? this.removeLabel(i) : Mt(i) ? this.killTweensOf(i) : (i.parent === this && Ga(this, i), i === this._recent && (this._recent = this._last), xr(this));
    }, t.totalTime = function(i, s) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = At(pn.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), r.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime;
    }, t.addLabel = function(i, s) {
      return this.labels[i] = Tn(this, s), this;
    }, t.removeLabel = function(i) {
      return delete this.labels[i], this;
    }, t.addPause = function(i, s, o) {
      var a = wt.delayedCall(0, s || mo, o);
      return a.data = "isPause", this._hasPause = 1, Vn(this, a, Tn(this, i));
    }, t.removePause = function(i) {
      var s = this._first;
      for (i = Tn(this, i); s; ) s._start === i && s.data === "isPause" && Hi(s), s = s._next;
    }, t.killTweensOf = function(i, s, o) {
      for (var a = this.getTweensOf(i, o), l = a.length; l--; ) Oi !== a[l] && a[l].kill(i, s);
      return this;
    }, t.getTweensOf = function(i, s) {
      for (var o = [], a = wn(i), l = this._first, c = Mi(s), u; l; ) l instanceof wt ? aT(l._targets, a) && (c ? (!Oi || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (u = l.getTweensOf(a, s)).length && o.push.apply(o, u), l = l._next;
      return o;
    }, t.tweenTo = function(i, s) {
      s = s || {};
      var o = this, a = Tn(o, i), l = s, c = l.startAt, u = l.onStart, h = l.onStartParams, f = l.immediateRender, d, _ = wt.to(o, vn({
        ease: s.ease || "none",
        lazy: false,
        immediateRender: false,
        time: a,
        overwrite: "auto",
        duration: s.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale()) || Wt,
        onStart: function() {
          if (o.pause(), !d) {
            var m = s.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale());
            _._dur !== m && Ms(_, m, 0, 1).render(_._time, true, true), d = 1;
          }
          u && u.apply(_, h || []);
        }
      }, s));
      return f ? _.render(0) : _;
    }, t.tweenFromTo = function(i, s, o) {
      return this.tweenTo(s, vn({
        startAt: {
          time: Tn(this, i)
        }
      }, o));
    }, t.recent = function() {
      return this._recent;
    }, t.nextLabel = function(i) {
      return i === void 0 && (i = this._time), jf(this, Tn(this, i));
    }, t.previousLabel = function(i) {
      return i === void 0 && (i = this._time), jf(this, Tn(this, i), 1);
    }, t.currentLabel = function(i) {
      return arguments.length ? this.seek(i, true) : this.previousLabel(this._time + Wt);
    }, t.shiftChildren = function(i, s, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, l = this.labels, c; a; ) a._start >= o && (a._start += i, a._end += i), a = a._next;
      if (s) for (c in l) l[c] >= o && (l[c] += i);
      return xr(this);
    }, t.invalidate = function(i) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(i), s = s._next;
      return r.prototype.invalidate.call(this, i);
    }, t.clear = function(i) {
      i === void 0 && (i = true);
      for (var s = this._first, o; s; ) o = s._next, this.remove(s), s = o;
      return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), xr(this);
    }, t.totalDuration = function(i) {
      var s = 0, o = this, a = o._last, l = Xn, c, u, h;
      if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
      if (o._dirty) {
        for (h = o.parent; a; ) c = a._prev, a._dirty && a.totalDuration(), u = a._start, u > l && o._sort && a._ts && !o._lock ? (o._lock = 1, Vn(o, a, u - a._delay, 1)._lock = 0) : l = u, u < 0 && a._ts && (s -= u, (!h && !o._dp || h && h.smoothChildTiming) && (o._start += u / o._ts, o._time -= u, o._tTime -= u), o.shiftChildren(-u, false, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = c;
        Ms(o, o === _t && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
      }
      return o._tDur;
    }, e.updateRoot = function(i) {
      if (_t._ts && (Ep(_t, Ia(i, _t)), Mp = pn.frame), pn.frame >= qf) {
        qf += _n.autoSleep || 120;
        var s = _t._first;
        if ((!s || !s._ts) && _n.autoSleep && pn._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || pn.sleep();
        }
      }
    }, e;
  }(xo);
  vn(jt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var PT = function(e, t, n, i, s, o, a) {
    var l = new on(this._pt, e, t, 0, 1, Jp, null, s), c = 0, u = 0, h, f, d, _, g, m, p, y;
    for (l.b = n, l.e = i, n += "", i += "", (p = ~i.indexOf("random(")) && (i = go(i)), o && (y = [
      n,
      i
    ], o(y, e, t), n = y[0], i = y[1]), f = n.match(Nl) || []; h = Nl.exec(i); ) _ = h[0], g = i.substring(c, h.index), d ? d = (d + 1) % 5 : g.substr(-5) === "rgba(" && (d = 1), _ !== f[u++] && (m = parseFloat(f[u - 1]) || 0, l._pt = {
      _next: l._pt,
      p: g || u === 1 ? g : ",",
      s: m,
      c: _.charAt(1) === "=" ? is(m, _) - m : parseFloat(_) - m,
      m: d && d < 4 ? Math.round : 0
    }, c = Nl.lastIndex);
    return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = a, (_p.test(i) || p) && (l.e = 0), this._pt = l, l;
  }, ku = function(e, t, n, i, s, o, a, l, c, u) {
    Mt(i) && (i = i(s || 0, e, o));
    var h = e[t], f = n !== "get" ? n : Mt(h) ? c ? e[t.indexOf("set") || !Mt(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : h, d = Mt(h) ? c ? UT : jp : Hu, _;
    if (It(i) && (~i.indexOf("random(") && (i = go(i)), i.charAt(1) === "=" && (_ = is(f, i) + (Ht(f) || 0), (_ || _ === 0) && (i = _))), !u || f !== i || Kc) return !isNaN(f * i) && i !== "" ? (_ = new on(this._pt, e, t, +f || 0, i - (f || 0), typeof h == "boolean" ? FT : Zp, 0, d), c && (_.fp = c), a && _.modifier(a, this, e), this._pt = _) : (!h && !(t in e) && Ou(t, i), PT.call(this, e, t, f, i, d, l || _n.stringFilter, c));
  }, LT = function(e, t, n, i, s) {
    if (Mt(e) && (e = to(e, s, t, n, i)), !Yn(e) || e.style && e.nodeType || Xt(e) || mp(e)) return It(e) ? to(e, s, t, n, i) : e;
    var o = {}, a;
    for (a in e) o[a] = to(e[a], s, t, n, i);
    return o;
  }, Yp = function(e, t, n, i, s, o) {
    var a, l, c, u;
    if (dn[e] && (a = new dn[e]()).init(s, a.rawVars ? t[e] : LT(t[e], i, s, o, n), n, i, o) !== false && (n._pt = l = new on(n._pt, s, e, 0, 1, a.render, a, 0, a.priority), n !== Zr)) for (c = n._ptLookup[n._targets.indexOf(s)], u = a._props.length; u--; ) c[a._props[u]] = l;
    return a;
  }, Oi, Kc, Vu = function r(e, t, n) {
    var i = e.vars, s = i.ease, o = i.startAt, a = i.immediateRender, l = i.lazy, c = i.onUpdate, u = i.runBackwards, h = i.yoyoEase, f = i.keyframes, d = i.autoRevert, _ = e._dur, g = e._startAt, m = e._targets, p = e.parent, y = p && p.data === "nested" ? p.vars.targets : m, v = e._overwrite === "auto" && !Du, x = e.timeline, b, w, A, P, S, M, L, G, O, V, q, B, $;
    if (x && (!f || !s) && (s = "none"), e._ease = vr(s, vs.ease), e._yEase = h ? Gp(vr(h === true ? s : h, vs.ease)) : 0, h && e._yoyo && !e._repeat && (h = e._yEase, e._yEase = e._ease, e._ease = h), e._from = !x && !!i.runBackwards, !x || f && !i.stagger) {
      if (G = m[0] ? _r(m[0]).harness : 0, B = G && i[G.prop], b = Da(i, Fu), g && (g._zTime < 0 && g.progress(1), t < 0 && u && a && !d ? g.render(-1, true) : g.revert(u && _ ? _a : sT), g._lazy = 0), o) {
        if (Hi(e._startAt = wt.set(m, vn({
          data: "isStart",
          overwrite: false,
          parent: p,
          immediateRender: true,
          lazy: !g && rn(l),
          startAt: null,
          delay: 0,
          onUpdate: c && function() {
            return gn(e, "onUpdate");
          },
          stagger: 0
        }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Ft || !a && !d) && e._startAt.revert(_a), a && _ && t <= 0 && n <= 0) {
          t && (e._zTime = t);
          return;
        }
      } else if (u && _ && !g) {
        if (t && (a = false), A = vn({
          overwrite: false,
          data: "isFromStart",
          lazy: a && !g && rn(l),
          immediateRender: a,
          stagger: 0,
          parent: p
        }, b), B && (A[G.prop] = B), Hi(e._startAt = wt.set(m, A)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Ft ? e._startAt.revert(_a) : e._startAt.render(-1, true)), e._zTime = t, !a) r(e._startAt, Wt, Wt);
        else if (!t) return;
      }
      for (e._pt = e._ptCache = 0, l = _ && rn(l) || l && !_, w = 0; w < m.length; w++) {
        if (S = m[w], L = S._gsap || zu(m)[w]._gsap, e._ptLookup[w] = V = {}, Hc[L.id] && ki.length && La(), q = y === m ? w : y.indexOf(S), G && (O = new G()).init(S, B || b, e, q, y) !== false && (e._pt = P = new on(e._pt, S, O.name, 0, 1, O.render, O, 0, O.priority), O._props.forEach(function(H) {
          V[H] = P;
        }), O.priority && (M = 1)), !G || B) for (A in b) dn[A] && (O = Yp(A, b, e, q, S, y)) ? O.priority && (M = 1) : V[A] = P = ku.call(e, S, A, "get", b[A], q, y, 0, i.stringFilter);
        e._op && e._op[w] && e.kill(S, e._op[w]), v && e._pt && (Oi = e, _t.killTweensOf(S, V, e.globalTime(t)), $ = !e.parent, Oi = 0), e._pt && l && (Hc[L.id] = 1);
      }
      M && Qp(e), e._onInit && e._onInit(e);
    }
    e._onUpdate = c, e._initted = (!e._op || e._pt) && !$, f && t <= 0 && x.render(Xn, true, true);
  }, DT = function(e, t, n, i, s, o, a, l) {
    var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], u, h, f, d;
    if (!c) for (c = e._ptCache[t] = [], f = e._ptLookup, d = e._targets.length; d--; ) {
      if (u = f[d][t], u && u.d && u.d._pt) for (u = u.d._pt; u && u.p !== t && u.fp !== t; ) u = u._next;
      if (!u) return Kc = 1, e.vars[t] = "+=0", Vu(e, a), Kc = 0, l ? po(t + " not eligible for reset") : 1;
      c.push(u);
    }
    for (d = c.length; d--; ) h = c[d], u = h._pt || h, u.s = (i || i === 0) && !s ? i : u.s + (i || 0) + o * u.c, u.c = n - u.s, h.e && (h.e = Tt(n) + Ht(h.e)), h.b && (h.b = u.s + Ht(h.b));
  }, IT = function(e, t) {
    var n = e[0] ? _r(e[0]).harness : 0, i = n && n.aliases, s, o, a, l;
    if (!i) return t;
    s = ys({}, t);
    for (o in i) if (o in s) for (l = i[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
    return s;
  }, NT = function(e, t, n, i) {
    var s = t.ease || i || "power1.inOut", o, a;
    if (Xt(t)) a = n[e] || (n[e] = []), t.forEach(function(l, c) {
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
  }, to = function(e, t, n, i, s) {
    return Mt(e) ? e.call(t, n, i, s) : It(e) && ~e.indexOf("random(") ? go(e) : e;
  }, Kp = Bu + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", $p = {};
  sn(Kp + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
    return $p[r] = 1;
  });
  var wt = function(r) {
    dp(e, r);
    function e(n, i, s, o) {
      var a;
      typeof i == "number" && (s.duration = i, i = s, s = null), a = r.call(this, o ? i : Qs(i)) || this;
      var l = a.vars, c = l.duration, u = l.delay, h = l.immediateRender, f = l.stagger, d = l.overwrite, _ = l.keyframes, g = l.defaults, m = l.scrollTrigger, p = l.yoyoEase, y = i.parent || _t, v = (Xt(n) || mp(n) ? Mi(n[0]) : "length" in i) ? [
        n
      ] : wn(n), x, b, w, A, P, S, M, L;
      if (a._targets = v.length ? zu(v) : po("GSAP target " + n + " not found. https://gsap.com", !_n.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, _ || f || oa(c) || oa(u)) {
        if (i = a.vars, x = a.timeline = new jt({
          data: "nested",
          defaults: g || {},
          targets: y && y.data === "nested" ? y.vars.targets : v
        }), x.kill(), x.parent = x._dp = hi(a), x._start = 0, f || oa(c) || oa(u)) {
          if (A = v.length, M = f && Ip(f), Yn(f)) for (P in f) ~Kp.indexOf(P) && (L || (L = {}), L[P] = f[P]);
          for (b = 0; b < A; b++) w = Da(i, $p), w.stagger = 0, p && (w.yoyoEase = p), L && ys(w, L), S = v[b], w.duration = +to(c, hi(a), b, S, v), w.delay = (+to(u, hi(a), b, S, v) || 0) - a._delay, !f && A === 1 && w.delay && (a._delay = u = w.delay, a._start += u, w.delay = 0), x.to(S, w, M ? M(b, S, v) : 0), x._ease = Xe.none;
          x.duration() ? c = u = 0 : a.timeline = 0;
        } else if (_) {
          Qs(vn(x.vars.defaults, {
            ease: "none"
          })), x._ease = vr(_.ease || i.ease || "none");
          var G = 0, O, V, q;
          if (Xt(_)) _.forEach(function(B) {
            return x.to(v, B, ">");
          }), x.duration();
          else {
            w = {};
            for (P in _) P === "ease" || P === "easeEach" || NT(P, _[P], w, _.easeEach);
            for (P in w) for (O = w[P].sort(function(B, $) {
              return B.t - $.t;
            }), G = 0, b = 0; b < O.length; b++) V = O[b], q = {
              ease: V.e,
              duration: (V.t - (b ? O[b - 1].t : 0)) / 100 * c
            }, q[P] = V.v, x.to(v, q, G), G += q.duration;
            x.duration() < c && x.to({}, {
              duration: c - x.duration()
            });
          }
        }
        c || a.duration(c = x.duration());
      } else a.timeline = 0;
      return d === true && !Du && (Oi = hi(a), _t.killTweensOf(v), Oi = 0), Vn(y, hi(a), s), i.reversed && a.reverse(), i.paused && a.paused(true), (h || !c && !_ && a._start === At(y._time) && rn(h) && hT(hi(a)) && y.data !== "nested") && (a._tTime = -1e-8, a.render(Math.max(0, -u) || 0)), m && Cp(hi(a), m), a;
    }
    var t = e.prototype;
    return t.render = function(i, s, o) {
      var a = this._time, l = this._tDur, c = this._dur, u = i < 0, h = i > l - Wt && !u ? l : i < Wt ? 0 : i, f, d, _, g, m, p, y, v, x;
      if (!c) dT(this, i, s, o);
      else if (h !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u || this._lazy) {
        if (f = h, v = this.timeline, this._repeat) {
          if (g = c + this._rDelay, this._repeat < -1 && u) return this.totalTime(g * 100 + i, s, o);
          if (f = At(h % g), h === l ? (_ = this._repeat, f = c) : (m = At(h / g), _ = ~~m, _ && _ === m ? (f = c, _--) : f > c && (f = c)), p = this._yoyo && _ & 1, p && (x = this._yEase, f = c - f), m = Ss(this._tTime, g), f === a && !o && this._initted && _ === m) return this._tTime = h, this;
          _ !== m && (v && this._yEase && Wp(v, p), this.vars.repeatRefresh && !p && !this._lock && f !== g && this._initted && (this._lock = o = 1, this.render(At(g * _), true).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (Pp(this, u ? i : f, o, s, h)) return this._tTime = 0, this;
          if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== m)) return this;
          if (c !== this._dur) return this.render(i, s, o);
        }
        if (this._tTime = h, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (x || this._ease)(f / c), this._from && (this.ratio = y = 1 - y), f && !a && !s && !_ && (gn(this, "onStart"), this._tTime !== h)) return this;
        for (d = this._pt; d; ) d.r(y, d.d), d = d._next;
        v && v.render(i < 0 ? i : v._dur * v._ease(f / this._dur), s, o) || this._startAt && (this._zTime = i), this._onUpdate && !s && (u && Gc(this, i, s, o), gn(this, "onUpdate")), this._repeat && _ !== m && this.vars.onRepeat && !s && this.parent && gn(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (u && !this._onUpdate && Gc(this, i, true, true), (i || !c) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Hi(this, 1), !s && !(u && !a) && (h || a || p) && (gn(this, h === l ? "onComplete" : "onReverseComplete", true), this._prom && !(h < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }, t.targets = function() {
      return this._targets;
    }, t.invalidate = function(i) {
      return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), r.prototype.invalidate.call(this, i);
    }, t.resetTo = function(i, s, o, a, l) {
      _o || pn.wake(), this._ts || this.play();
      var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
      return this._initted || Vu(this, c), u = this._ease(c / this._dur), DT(this, i, s, o, a, u, c, l) ? this.resetTo(i, s, o, a, 1) : (Xa(this, 0), this.parent || Ap(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
    }, t.kill = function(i, s) {
      if (s === void 0 && (s = "all"), !i && (!s || s === "all")) return this._lazy = this._pt = 0, this.parent ? Ws(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Ft), this;
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return this.timeline.killTweensOf(i, s, Oi && Oi.vars.overwrite !== true)._first || Ws(this), this.parent && o !== this.timeline.totalDuration() && Ms(this, this._dur * this.timeline._tDur / o, 0, 1), this;
      }
      var a = this._targets, l = i ? wn(i) : a, c = this._ptLookup, u = this._pt, h, f, d, _, g, m, p;
      if ((!s || s === "all") && cT(a, l)) return s === "all" && (this._pt = 0), Ws(this);
      for (h = this._op = this._op || [], s !== "all" && (It(s) && (g = {}, sn(s, function(y) {
        return g[y] = 1;
      }), s = g), s = IT(a, s)), p = a.length; p--; ) if (~l.indexOf(a[p])) {
        f = c[p], s === "all" ? (h[p] = s, _ = f, d = {}) : (d = h[p] = h[p] || {}, _ = s);
        for (g in _) m = f && f[g], m && ((!("kill" in m.d) || m.d.kill(g) === true) && Ga(this, m, "_pt"), delete f[g]), d !== "all" && (d[g] = 1);
      }
      return this._initted && !this._pt && u && Ws(this), this;
    }, e.to = function(i, s) {
      return new e(i, s, arguments[2]);
    }, e.from = function(i, s) {
      return eo(1, arguments);
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
      return eo(2, arguments);
    }, e.set = function(i, s) {
      return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(i, s);
    }, e.killTweensOf = function(i, s, o) {
      return _t.killTweensOf(i, s, o);
    }, e;
  }(xo);
  vn(wt.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  sn("staggerTo,staggerFrom,staggerFromTo", function(r) {
    wt[r] = function() {
      var e = new jt(), t = Xc.call(arguments, 0);
      return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
    };
  });
  var Hu = function(e, t, n) {
    return e[t] = n;
  }, jp = function(e, t, n) {
    return e[t](n);
  }, UT = function(e, t, n, i) {
    return e[t](i.fp, n);
  }, OT = function(e, t, n) {
    return e.setAttribute(t, n);
  }, Gu = function(e, t) {
    return Mt(e[t]) ? jp : Iu(e[t]) && e.setAttribute ? OT : Hu;
  }, Zp = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  }, FT = function(e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  }, Jp = function(e, t) {
    var n = t._pt, i = "";
    if (!e && t.b) i = t.b;
    else if (e === 1 && t.e) i = t.e;
    else {
      for (; n; ) i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + i, n = n._next;
      i += t.c;
    }
    t.set(t.t, t.p, i, t);
  }, Wu = function(e, t) {
    for (var n = t._pt; n; ) n.r(e, n.d), n = n._next;
  }, BT = function(e, t, n, i) {
    for (var s = this._pt, o; s; ) o = s._next, s.p === i && s.modifier(e, t, n), s = o;
  }, zT = function(e) {
    for (var t = this._pt, n, i; t; ) i = t._next, t.p === e && !t.op || t.op === e ? Ga(this, t, "_pt") : t.dep || (n = 1), t = i;
    return !n;
  }, kT = function(e, t, n, i) {
    i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
  }, Qp = function(e) {
    for (var t = e._pt, n, i, s, o; t; ) {
      for (n = t._next, i = s; i && i.pr > t.pr; ) i = i._next;
      (t._prev = i ? i._prev : o) ? t._prev._next = t : s = t, (t._next = i) ? i._prev = t : o = t, t = n;
    }
    e._pt = s;
  }, on = function() {
    function r(t, n, i, s, o, a, l, c, u) {
      this.t = n, this.s = s, this.c = o, this.p = i, this.r = a || Zp, this.d = l || this, this.set = c || Hu, this.pr = u || 0, this._next = t, t && (t._prev = this);
    }
    var e = r.prototype;
    return e.modifier = function(n, i, s) {
      this.mSet = this.mSet || this.set, this.set = kT, this.m = n, this.mt = s, this.tween = i;
    }, r;
  }();
  sn(Bu + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r) {
    return Fu[r] = 1;
  });
  xn.TweenMax = xn.TweenLite = wt;
  xn.TimelineLite = xn.TimelineMax = jt;
  _t = new jt({
    sortChildren: false,
    defaults: vs,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _n.stringFilter = Hp;
  var yr = [], va = {}, VT = [], Jf = 0, HT = 0, zl = function(e) {
    return (va[e] || VT).map(function(t) {
      return t();
    });
  }, $c = function() {
    var e = Date.now(), t = [];
    e - Jf > 2 && (zl("matchMediaInit"), yr.forEach(function(n) {
      var i = n.queries, s = n.conditions, o, a, l, c;
      for (a in i) o = Bn.matchMedia(i[a]).matches, o && (l = 1), o !== s[a] && (s[a] = o, c = 1);
      c && (n.revert(), l && t.push(n));
    }), zl("matchMediaRevert"), t.forEach(function(n) {
      return n.onMatch(n, function(i) {
        return n.add(null, i);
      });
    }), Jf = e, zl("matchMedia"));
  }, em = function() {
    function r(t, n) {
      this.selector = n && qc(n), this.data = [], this._r = [], this.isReverted = false, this.id = HT++, t && this.add(t);
    }
    var e = r.prototype;
    return e.add = function(n, i, s) {
      Mt(n) && (s = i, i = n, n = Mt);
      var o = this, a = function() {
        var c = mt, u = o.selector, h;
        return c && c !== o && c.data.push(o), s && (o.selector = qc(s)), mt = o, h = i.apply(o, arguments), Mt(h) && o._r.push(h), mt = c, o.selector = u, o.isReverted = false, h;
      };
      return o.last = a, n === Mt ? a(o, function(l) {
        return o.add(null, l);
      }) : n ? o[n] = a : a;
    }, e.ignore = function(n) {
      var i = mt;
      mt = null, n(this), mt = i;
    }, e.getTweens = function() {
      var n = [];
      return this.data.forEach(function(i) {
        return i instanceof r ? n.push.apply(n, i.getTweens()) : i instanceof wt && !(i.parent && i.parent.data === "nested") && n.push(i);
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
        }), l = s.data.length; l--; ) c = s.data[l], c instanceof jt ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof wt) && c.revert && c.revert(n);
        s._r.forEach(function(u) {
          return u(n, s);
        }), s.isReverted = true;
      }() : this.data.forEach(function(a) {
        return a.kill && a.kill();
      }), this.clear(), i) for (var o = yr.length; o--; ) yr[o].id === this.id && yr.splice(o, 1);
    }, e.revert = function(n) {
      this.kill(n || {});
    }, r;
  }(), GT = function() {
    function r(t) {
      this.contexts = [], this.scope = t, mt && mt.data.push(this);
    }
    var e = r.prototype;
    return e.add = function(n, i, s) {
      Yn(n) || (n = {
        matches: n
      });
      var o = new em(0, s || this.scope), a = o.conditions = {}, l, c, u;
      mt && !o.selector && (o.selector = mt.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = n;
      for (c in n) c === "all" ? u = 1 : (l = Bn.matchMedia(n[c]), l && (yr.indexOf(o) < 0 && yr.push(o), (a[c] = l.matches) && (u = 1), l.addListener ? l.addListener($c) : l.addEventListener("change", $c)));
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
  }(), Na = {
    registerPlugin: function() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      t.forEach(function(i) {
        return zp(i);
      });
    },
    timeline: function(e) {
      return new jt(e);
    },
    getTweensOf: function(e, t) {
      return _t.getTweensOf(e, t);
    },
    getProperty: function(e, t, n, i) {
      It(e) && (e = wn(e)[0]);
      var s = _r(e || {}).get, o = n ? wp : bp;
      return n === "native" && (n = ""), e && (t ? o((dn[t] && dn[t].get || s)(e, t, n, i)) : function(a, l, c) {
        return o((dn[a] && dn[a].get || s)(e, a, l, c));
      });
    },
    quickSetter: function(e, t, n) {
      if (e = wn(e), e.length > 1) {
        var i = e.map(function(u) {
          return ln.quickSetter(u, t, n);
        }), s = i.length;
        return function(u) {
          for (var h = s; h--; ) i[h](u);
        };
      }
      e = e[0] || {};
      var o = dn[t], a = _r(e), l = a.harness && (a.harness.aliases || {})[t] || t, c = o ? function(u) {
        var h = new o();
        Zr._pt = 0, h.init(e, n ? u + n : u, Zr, 0, [
          e
        ]), h.render(1, h), Zr._pt && Wu(1, Zr);
      } : a.set(e, l);
      return o ? c : function(u) {
        return c(e, l, n ? u + n : u, a, 1);
      };
    },
    quickTo: function(e, t, n) {
      var i, s = ln.to(e, vn((i = {}, i[t] = "+=0.1", i.paused = true, i.stagger = 0, i), n || {})), o = function(l, c, u) {
        return s.resetTo(t, l, c, u);
      };
      return o.tween = s, o;
    },
    isTweening: function(e) {
      return _t.getTweensOf(e, true).length > 0;
    },
    defaults: function(e) {
      return e && e.ease && (e.ease = vr(e.ease, vs.ease)), Yf(vs, e || {});
    },
    config: function(e) {
      return Yf(_n, e || {});
    },
    registerEffect: function(e) {
      var t = e.name, n = e.effect, i = e.plugins, s = e.defaults, o = e.extendTimeline;
      (i || "").split(",").forEach(function(a) {
        return a && !dn[a] && !xn[a] && po(t + " effect requires " + a + " plugin.");
      }), Ul[t] = function(a, l, c) {
        return n(wn(a), vn(l || {}, s), c);
      }, o && (jt.prototype[t] = function(a, l, c) {
        return this.add(Ul[t](a, Yn(l) ? l : (c = l) && {}, this), c);
      });
    },
    registerEase: function(e, t) {
      Xe[e] = vr(t);
    },
    parseEase: function(e, t) {
      return arguments.length ? vr(e, t) : Xe;
    },
    getById: function(e) {
      return _t.getById(e);
    },
    exportRoot: function(e, t) {
      e === void 0 && (e = {});
      var n = new jt(e), i, s;
      for (n.smoothChildTiming = rn(e.smoothChildTiming), _t.remove(n), n._dp = 0, n._time = n._tTime = _t._time, i = _t._first; i; ) s = i._next, (t || !(!i._dur && i instanceof wt && i.vars.onComplete === i._targets[0])) && Vn(n, i, i._start - i._delay), i = s;
      return Vn(_t, n, 0), n;
    },
    context: function(e, t) {
      return e ? new em(e, t) : mt;
    },
    matchMedia: function(e) {
      return new GT(e);
    },
    matchMediaRefresh: function() {
      return yr.forEach(function(e) {
        var t = e.conditions, n, i;
        for (i in t) t[i] && (t[i] = false, n = 1);
        n && e.revert();
      }) || $c();
    },
    addEventListener: function(e, t) {
      var n = va[e] || (va[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function(e, t) {
      var n = va[e], i = n && n.indexOf(t);
      i >= 0 && n.splice(i, 1);
    },
    utils: {
      wrap: ST,
      wrapYoyo: MT,
      distribute: Ip,
      random: Up,
      snap: Np,
      normalize: yT,
      getUnit: Ht,
      clamp: gT,
      splitColor: kp,
      toArray: wn,
      selector: qc,
      mapRange: Fp,
      pipe: xT,
      unitize: vT,
      interpolate: TT,
      shuffle: Dp
    },
    install: yp,
    effects: Ul,
    ticker: pn,
    updateRoot: jt.updateRoot,
    plugins: dn,
    globalTimeline: _t,
    core: {
      PropTween: on,
      globals: Sp,
      Tween: wt,
      Timeline: jt,
      Animation: xo,
      getCache: _r,
      _removeLinkedListItem: Ga,
      reverting: function() {
        return Ft;
      },
      context: function(e) {
        return e && mt && (mt.data.push(e), e._ctx = mt), mt;
      },
      suppressOverwrites: function(e) {
        return Du = e;
      }
    }
  };
  sn("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
    return Na[r] = wt[r];
  });
  pn.add(jt.updateRoot);
  Zr = Na.to({}, {
    duration: 0
  });
  var WT = function(e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; ) n = n._next;
    return n;
  }, XT = function(e, t) {
    var n = e._targets, i, s, o;
    for (i in t) for (s = n.length; s--; ) o = e._ptLookup[s][i], o && (o = o.d) && (o._pt && (o = WT(o, i)), o && o.modifier && o.modifier(t[i], e, n[s], i));
  }, kl = function(e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function(i, s, o) {
        o._onInit = function(a) {
          var l, c;
          if (It(s) && (l = {}, sn(s, function(u) {
            return l[u] = 1;
          }), s = l), t) {
            l = {};
            for (c in s) l[c] = t(s[c]);
            s = l;
          }
          XT(a, s);
        };
      }
    };
  }, ln = Na.registerPlugin({
    name: "attr",
    init: function(e, t, n, i, s) {
      var o, a, l;
      this.tween = n;
      for (o in t) l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[o], i, s, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
    },
    render: function(e, t) {
      for (var n = t._pt; n; ) Ft ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next;
    }
  }, {
    name: "endArray",
    init: function(e, t) {
      for (var n = t.length; n--; ) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
    }
  }, kl("roundProps", Yc), kl("modifiers"), kl("snap", Np)) || Na;
  wt.version = jt.version = ln.version = "3.12.7";
  vp = 1;
  Nu() && Ts();
  Xe.Power0;
  Xe.Power1;
  Xe.Power2;
  Xe.Power3;
  Xe.Power4;
  Xe.Linear;
  Xe.Quad;
  Xe.Cubic;
  Xe.Quart;
  Xe.Quint;
  Xe.Strong;
  Xe.Elastic;
  Xe.Back;
  Xe.SteppedEase;
  Xe.Bounce;
  Xe.Sine;
  Xe.Expo;
  Xe.Circ;
  var Qf, Fi, rs, Xu, gr, ed, qu, qT = function() {
    return typeof window < "u";
  }, Ti = {}, lr = 180 / Math.PI, ss = Math.PI / 180, qr = Math.atan2, td = 1e8, Yu = /([A-Z])/g, YT = /(left|right|width|margin|padding|x)/i, KT = /[\s,\(]\S/, Gn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  }, jc = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  }, $T = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  }, jT = function(e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
  }, ZT = function(e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  }, tm = function(e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  }, nm = function(e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  }, JT = function(e, t, n) {
    return e.style[t] = n;
  }, QT = function(e, t, n) {
    return e.style.setProperty(t, n);
  }, eE = function(e, t, n) {
    return e._gsap[t] = n;
  }, tE = function(e, t, n) {
    return e._gsap.scaleX = e._gsap.scaleY = n;
  }, nE = function(e, t, n, i, s) {
    var o = e._gsap;
    o.scaleX = o.scaleY = n, o.renderTransform(s, o);
  }, iE = function(e, t, n, i, s) {
    var o = e._gsap;
    o[t] = n, o.renderTransform(s, o);
  }, vt = "transform", an = vt + "Origin", rE = function r(e, t) {
    var n = this, i = this.target, s = i.style, o = i._gsap;
    if (e in Ti && s) {
      if (this.tfm = this.tfm || {}, e !== "transform") e = Gn[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return n.tfm[a] = fi(i, a);
      }) : this.tfm[e] = o.x ? o[e] : fi(i, e), e === an && (this.tfm.zOrigin = o.zOrigin);
      else return Gn.transform.split(",").forEach(function(a) {
        return r.call(n, a, t);
      });
      if (this.props.indexOf(vt) >= 0) return;
      o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(an, t, "")), e = vt;
    }
    (s || t) && this.props.push(e, t, s[e]);
  }, im = function(e) {
    e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
  }, sE = function() {
    var e = this.props, t = this.target, n = t.style, i = t._gsap, s, o;
    for (s = 0; s < e.length; s += 3) e[s + 1] ? e[s + 1] === 2 ? t[e[s]](e[s + 2]) : t[e[s]] = e[s + 2] : e[s + 2] ? n[e[s]] = e[s + 2] : n.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(Yu, "-$1").toLowerCase());
    if (this.tfm) {
      for (o in this.tfm) i[o] = this.tfm[o];
      i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), s = qu(), (!s || !s.isStart) && !n[vt] && (im(n), i.zOrigin && n[an] && (n[an] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
    }
  }, rm = function(e, t) {
    var n = {
      target: e,
      props: [],
      revert: sE,
      save: rE
    };
    return e._gsap || ln.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
      return n.save(i);
    }), n;
  }, sm, Zc = function(e, t) {
    var n = Fi.createElementNS ? Fi.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Fi.createElement(e);
    return n && n.style ? n : Fi.createElement(e);
  }, qn = function r(e, t, n) {
    var i = getComputedStyle(e);
    return i[t] || i.getPropertyValue(t.replace(Yu, "-$1").toLowerCase()) || i.getPropertyValue(t) || !n && r(e, Es(t) || t, 1) || "";
  }, nd = "O,Moz,ms,Ms,Webkit".split(","), Es = function(e, t, n) {
    var i = t || gr, s = i.style, o = 5;
    if (e in s && !n) return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(nd[o] + e in s); ) ;
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? nd[o] : "") + e;
  }, Jc = function() {
    qT() && window.document && (Qf = window, Fi = Qf.document, rs = Fi.documentElement, gr = Zc("div") || {
      style: {}
    }, Zc("div"), vt = Es(vt), an = vt + "Origin", gr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", sm = !!Es("perspective"), qu = ln.core.reverting, Xu = 1);
  }, id = function(e) {
    var t = e.ownerSVGElement, n = Zc("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(true), s;
    i.style.display = "block", n.appendChild(i), rs.appendChild(n);
    try {
      s = i.getBBox();
    } catch {
    }
    return n.removeChild(i), rs.removeChild(n), s;
  }, rd = function(e, t) {
    for (var n = t.length; n--; ) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  }, om = function(e) {
    var t, n;
    try {
      t = e.getBBox();
    } catch {
      t = id(e), n = 1;
    }
    return t && (t.width || t.height) || n || (t = id(e)), t && !t.width && !t.x && !t.y ? {
      x: +rd(e, [
        "x",
        "cx",
        "x1"
      ]) || 0,
      y: +rd(e, [
        "y",
        "cy",
        "y1"
      ]) || 0,
      width: 0,
      height: 0
    } : t;
  }, am = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && om(e));
  }, Tr = function(e, t) {
    if (t) {
      var n = e.style, i;
      t in Ti && t !== an && (t = vt), n.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(i === "--" ? t : t.replace(Yu, "-$1").toLowerCase())) : n.removeAttribute(t);
    }
  }, Bi = function(e, t, n, i, s, o) {
    var a = new on(e._pt, t, n, 0, 1, o ? nm : tm);
    return e._pt = a, a.b = i, a.e = s, e._props.push(n), a;
  }, sd = {
    deg: 1,
    rad: 1,
    turn: 1
  }, oE = {
    grid: 1,
    flex: 1
  }, Gi = function r(e, t, n, i) {
    var s = parseFloat(n) || 0, o = (n + "").trim().substr((s + "").length) || "px", a = gr.style, l = YT.test(t), c = e.tagName.toLowerCase() === "svg", u = (c ? "client" : "offset") + (l ? "Width" : "Height"), h = 100, f = i === "px", d = i === "%", _, g, m, p;
    if (i === o || !s || sd[i] || sd[o]) return s;
    if (o !== "px" && !f && (s = r(e, t, n, "px")), p = e.getCTM && am(e), (d || o === "%") && (Ti[t] || ~t.indexOf("adius"))) return _ = p ? e.getBBox()[l ? "width" : "height"] : e[u], Tt(d ? s / _ * h : s / 100 * _);
    if (a[l ? "width" : "height"] = h + (f ? o : i), g = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !c ? e : e.parentNode, p && (g = (e.ownerSVGElement || {}).parentNode), (!g || g === Fi || !g.appendChild) && (g = Fi.body), m = g._gsap, m && d && m.width && l && m.time === pn.time && !m.uncache) return Tt(s / m.width * h);
    if (d && (t === "height" || t === "width")) {
      var y = e.style[t];
      e.style[t] = h + i, _ = e[u], y ? e.style[t] = y : Tr(e, t);
    } else (d || o === "%") && !oE[qn(g, "display")] && (a.position = qn(e, "position")), g === e && (a.position = "static"), g.appendChild(gr), _ = gr[u], g.removeChild(gr), a.position = "absolute";
    return l && d && (m = _r(g), m.time = pn.time, m.width = g[u]), Tt(f ? _ * s / h : _ && s ? h / _ * s : 0);
  }, fi = function(e, t, n, i) {
    var s;
    return Xu || Jc(), t in Gn && t !== "transform" && (t = Gn[t], ~t.indexOf(",") && (t = t.split(",")[0])), Ti[t] && t !== "transform" ? (s = yo(e, i), s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : Oa(qn(e, an)) + " " + s.zOrigin + "px") : (s = e.style[t], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = Ua[t] && Ua[t](e, t, n) || qn(e, t) || Tp(e, t) || (t === "opacity" ? 1 : 0))), n && !~(s + "").trim().indexOf(" ") ? Gi(e, t, s, n) + n : s;
  }, aE = function(e, t, n, i) {
    if (!n || n === "none") {
      var s = Es(t, e, 1), o = s && qn(e, s, 1);
      o && o !== n ? (t = s, n = o) : t === "borderColor" && (n = qn(e, "borderTopColor"));
    }
    var a = new on(this._pt, e.style, t, 0, 1, Jp), l = 0, c = 0, u, h, f, d, _, g, m, p, y, v, x, b;
    if (a.b = n, a.e = i, n += "", i += "", i === "auto" && (g = e.style[t], e.style[t] = i, i = qn(e, t) || i, g ? e.style[t] = g : Tr(e, t)), u = [
      n,
      i
    ], Hp(u), n = u[0], i = u[1], f = n.match(jr) || [], b = i.match(jr) || [], b.length) {
      for (; h = jr.exec(i); ) m = h[0], y = i.substring(l, h.index), _ ? _ = (_ + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (_ = 1), m !== (g = f[c++] || "") && (d = parseFloat(g) || 0, x = g.substr((d + "").length), m.charAt(1) === "=" && (m = is(d, m) + x), p = parseFloat(m), v = m.substr((p + "").length), l = jr.lastIndex - v.length, v || (v = v || _n.units[t] || x, l === i.length && (i += v, a.e += v)), x !== v && (d = Gi(e, t, g, v) || 0), a._pt = {
        _next: a._pt,
        p: y || c === 1 ? y : ",",
        s: d,
        c: p - d,
        m: _ && _ < 4 || t === "zIndex" ? Math.round : 0
      });
      a.c = l < i.length ? i.substring(l, i.length) : "";
    } else a.r = t === "display" && i === "none" ? nm : tm;
    return _p.test(i) && (a.e = 0), this._pt = a, a;
  }, od = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  }, lE = function(e) {
    var t = e.split(" "), n = t[0], i = t[1] || "50%";
    return (n === "top" || n === "bottom" || i === "left" || i === "right") && (e = n, n = i, i = e), t[0] = od[n] || n, t[1] = od[i] || i, t.join(" ");
  }, cE = function(e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t, i = n.style, s = t.u, o = n._gsap, a, l, c;
      if (s === "all" || s === true) i.cssText = "", l = 1;
      else for (s = s.split(","), c = s.length; --c > -1; ) a = s[c], Ti[a] && (l = 1, a = a === "transformOrigin" ? an : vt), Tr(n, a);
      l && (Tr(n, vt), o && (o.svg && n.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", yo(n, 1), o.uncache = 1, im(i)));
    }
  }, Ua = {
    clearProps: function(e, t, n, i, s) {
      if (s.data !== "isFromStart") {
        var o = e._pt = new on(e._pt, t, n, 0, 0, cE);
        return o.u = i, o.pr = -10, o.tween = s, e._props.push(n), 1;
      }
    }
  }, vo = [
    1,
    0,
    0,
    1,
    0,
    0
  ], lm = {}, cm = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  }, ad = function(e) {
    var t = qn(e, vt);
    return cm(t) ? vo : t.substr(7).match(gp).map(Tt);
  }, Ku = function(e, t) {
    var n = e._gsap || _r(e), i = e.style, s = ad(e), o, a, l, c;
    return n.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, s = [
      l.a,
      l.b,
      l.c,
      l.d,
      l.e,
      l.f
    ], s.join(",") === "1,0,0,1,0,0" ? vo : s) : (s === vo && !e.offsetParent && e !== rs && !n.svg && (l = i.display, i.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1, a = e.nextElementSibling, rs.appendChild(e)), s = ad(e), l ? i.display = l : Tr(e, "display"), c && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : rs.removeChild(e))), t && s.length > 6 ? [
      s[0],
      s[1],
      s[4],
      s[5],
      s[12],
      s[13]
    ] : s);
  }, Qc = function(e, t, n, i, s, o) {
    var a = e._gsap, l = s || Ku(e, true), c = a.xOrigin || 0, u = a.yOrigin || 0, h = a.xOffset || 0, f = a.yOffset || 0, d = l[0], _ = l[1], g = l[2], m = l[3], p = l[4], y = l[5], v = t.split(" "), x = parseFloat(v[0]) || 0, b = parseFloat(v[1]) || 0, w, A, P, S;
    n ? l !== vo && (A = d * m - _ * g) && (P = x * (m / A) + b * (-g / A) + (g * y - m * p) / A, S = x * (-_ / A) + b * (d / A) - (d * y - _ * p) / A, x = P, b = S) : (w = om(e), x = w.x + (~v[0].indexOf("%") ? x / 100 * w.width : x), b = w.y + (~(v[1] || v[0]).indexOf("%") ? b / 100 * w.height : b)), i || i !== false && a.smooth ? (p = x - c, y = b - u, a.xOffset = h + (p * d + y * g) - p, a.yOffset = f + (p * _ + y * m) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = x, a.yOrigin = b, a.smooth = !!i, a.origin = t, a.originIsAbsolute = !!n, e.style[an] = "0px 0px", o && (Bi(o, a, "xOrigin", c, x), Bi(o, a, "yOrigin", u, b), Bi(o, a, "xOffset", h, a.xOffset), Bi(o, a, "yOffset", f, a.yOffset)), e.setAttribute("data-svg-origin", x + " " + b);
  }, yo = function(e, t) {
    var n = e._gsap || new qp(e);
    if ("x" in n && !t && !n.uncache) return n;
    var i = e.style, s = n.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), c = qn(e, an) || "0", u, h, f, d, _, g, m, p, y, v, x, b, w, A, P, S, M, L, G, O, V, q, B, $, H, oe, ce, ge, Le, Ke, X, ie;
    return u = h = f = g = m = p = y = v = x = 0, d = _ = 1, n.svg = !!(e.getCTM && am(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[vt] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[vt] !== "none" ? l[vt] : "")), i.scale = i.rotate = i.translate = "none"), A = Ku(e, n.svg), n.svg && (n.uncache ? (H = e.getBBox(), c = n.xOrigin - H.x + "px " + (n.yOrigin - H.y) + "px", $ = "") : $ = !t && e.getAttribute("data-svg-origin"), Qc(e, $ || c, !!$ || n.originIsAbsolute, n.smooth !== false, A)), b = n.xOrigin || 0, w = n.yOrigin || 0, A !== vo && (L = A[0], G = A[1], O = A[2], V = A[3], u = q = A[4], h = B = A[5], A.length === 6 ? (d = Math.sqrt(L * L + G * G), _ = Math.sqrt(V * V + O * O), g = L || G ? qr(G, L) * lr : 0, y = O || V ? qr(O, V) * lr + g : 0, y && (_ *= Math.abs(Math.cos(y * ss))), n.svg && (u -= b - (b * L + w * O), h -= w - (b * G + w * V))) : (ie = A[6], Ke = A[7], ce = A[8], ge = A[9], Le = A[10], X = A[11], u = A[12], h = A[13], f = A[14], P = qr(ie, Le), m = P * lr, P && (S = Math.cos(-P), M = Math.sin(-P), $ = q * S + ce * M, H = B * S + ge * M, oe = ie * S + Le * M, ce = q * -M + ce * S, ge = B * -M + ge * S, Le = ie * -M + Le * S, X = Ke * -M + X * S, q = $, B = H, ie = oe), P = qr(-O, Le), p = P * lr, P && (S = Math.cos(-P), M = Math.sin(-P), $ = L * S - ce * M, H = G * S - ge * M, oe = O * S - Le * M, X = V * M + X * S, L = $, G = H, O = oe), P = qr(G, L), g = P * lr, P && (S = Math.cos(P), M = Math.sin(P), $ = L * S + G * M, H = q * S + B * M, G = G * S - L * M, B = B * S - q * M, L = $, q = H), m && Math.abs(m) + Math.abs(g) > 359.9 && (m = g = 0, p = 180 - p), d = Tt(Math.sqrt(L * L + G * G + O * O)), _ = Tt(Math.sqrt(B * B + ie * ie)), P = qr(q, B), y = Math.abs(P) > 2e-4 ? P * lr : 0, x = X ? 1 / (X < 0 ? -X : X) : 0), n.svg && ($ = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !cm(qn(e, vt)), $ && e.setAttribute("transform", $))), Math.abs(y) > 90 && Math.abs(y) < 270 && (s ? (d *= -1, y += g <= 0 ? 180 : -180, g += g <= 0 ? 180 : -180) : (_ *= -1, y += y <= 0 ? 180 : -180)), t = t || n.uncache, n.x = u - ((n.xPercent = u && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + o, n.y = h - ((n.yPercent = h && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + o, n.z = f + o, n.scaleX = Tt(d), n.scaleY = Tt(_), n.rotation = Tt(g) + a, n.rotationX = Tt(m) + a, n.rotationY = Tt(p) + a, n.skewX = y + a, n.skewY = v + a, n.transformPerspective = x + o, (n.zOrigin = parseFloat(c.split(" ")[2]) || !t && n.zOrigin || 0) && (i[an] = Oa(c)), n.xOffset = n.yOffset = 0, n.force3D = _n.force3D, n.renderTransform = n.svg ? hE : sm ? um : uE, n.uncache = 0, n;
  }, Oa = function(e) {
    return (e = e.split(" "))[0] + " " + e[1];
  }, Vl = function(e, t, n) {
    var i = Ht(t);
    return Tt(parseFloat(t) + parseFloat(Gi(e, "x", n + "px", i))) + i;
  }, uE = function(e, t) {
    t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, um(e, t);
  }, ir = "0deg", Vs = "0px", rr = ") ", um = function(e, t) {
    var n = t || this, i = n.xPercent, s = n.yPercent, o = n.x, a = n.y, l = n.z, c = n.rotation, u = n.rotationY, h = n.rotationX, f = n.skewX, d = n.skewY, _ = n.scaleX, g = n.scaleY, m = n.transformPerspective, p = n.force3D, y = n.target, v = n.zOrigin, x = "", b = p === "auto" && e && e !== 1 || p === true;
    if (v && (h !== ir || u !== ir)) {
      var w = parseFloat(u) * ss, A = Math.sin(w), P = Math.cos(w), S;
      w = parseFloat(h) * ss, S = Math.cos(w), o = Vl(y, o, A * S * -v), a = Vl(y, a, -Math.sin(w) * -v), l = Vl(y, l, P * S * -v + v);
    }
    m !== Vs && (x += "perspective(" + m + rr), (i || s) && (x += "translate(" + i + "%, " + s + "%) "), (b || o !== Vs || a !== Vs || l !== Vs) && (x += l !== Vs || b ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + rr), c !== ir && (x += "rotate(" + c + rr), u !== ir && (x += "rotateY(" + u + rr), h !== ir && (x += "rotateX(" + h + rr), (f !== ir || d !== ir) && (x += "skew(" + f + ", " + d + rr), (_ !== 1 || g !== 1) && (x += "scale(" + _ + ", " + g + rr), y.style[vt] = x || "translate(0, 0)";
  }, hE = function(e, t) {
    var n = t || this, i = n.xPercent, s = n.yPercent, o = n.x, a = n.y, l = n.rotation, c = n.skewX, u = n.skewY, h = n.scaleX, f = n.scaleY, d = n.target, _ = n.xOrigin, g = n.yOrigin, m = n.xOffset, p = n.yOffset, y = n.forceCSS, v = parseFloat(o), x = parseFloat(a), b, w, A, P, S;
    l = parseFloat(l), c = parseFloat(c), u = parseFloat(u), u && (u = parseFloat(u), c += u, l += u), l || c ? (l *= ss, c *= ss, b = Math.cos(l) * h, w = Math.sin(l) * h, A = Math.sin(l - c) * -f, P = Math.cos(l - c) * f, c && (u *= ss, S = Math.tan(c - u), S = Math.sqrt(1 + S * S), A *= S, P *= S, u && (S = Math.tan(u), S = Math.sqrt(1 + S * S), b *= S, w *= S)), b = Tt(b), w = Tt(w), A = Tt(A), P = Tt(P)) : (b = h, P = f, w = A = 0), (v && !~(o + "").indexOf("px") || x && !~(a + "").indexOf("px")) && (v = Gi(d, "x", o, "px"), x = Gi(d, "y", a, "px")), (_ || g || m || p) && (v = Tt(v + _ - (_ * b + g * A) + m), x = Tt(x + g - (_ * w + g * P) + p)), (i || s) && (S = d.getBBox(), v = Tt(v + i / 100 * S.width), x = Tt(x + s / 100 * S.height)), S = "matrix(" + b + "," + w + "," + A + "," + P + "," + v + "," + x + ")", d.setAttribute("transform", S), y && (d.style[vt] = S);
  }, fE = function(e, t, n, i, s) {
    var o = 360, a = It(s), l = parseFloat(s) * (a && ~s.indexOf("rad") ? lr : 1), c = l - i, u = i + c + "deg", h, f;
    return a && (h = s.split("_")[1], h === "short" && (c %= o, c !== c % (o / 2) && (c += c < 0 ? o : -360)), h === "cw" && c < 0 ? c = (c + o * td) % o - ~~(c / o) * o : h === "ccw" && c > 0 && (c = (c - o * td) % o - ~~(c / o) * o)), e._pt = f = new on(e._pt, t, n, i, c, $T), f.e = u, f.u = "deg", e._props.push(n), f;
  }, ld = function(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }, dE = function(e, t, n) {
    var i = ld({}, n._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = n.style, a, l, c, u, h, f, d, _;
    i.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), o[vt] = t, a = yo(n, 1), Tr(n, vt), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[vt], o[vt] = t, a = yo(n, 1), o[vt] = c);
    for (l in Ti) c = i[l], u = a[l], c !== u && s.indexOf(l) < 0 && (d = Ht(c), _ = Ht(u), h = d !== _ ? Gi(n, l, c, _) : parseFloat(c), f = parseFloat(u), e._pt = new on(e._pt, a, l, h, f - h, jc), e._pt.u = _ || 0, e._props.push(l));
    ld(a, i);
  };
  sn("padding,margin,Width,Radius", function(r, e) {
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
    Ua[e > 1 ? "border" + r : r] = function(a, l, c, u, h) {
      var f, d;
      if (arguments.length < 4) return f = o.map(function(_) {
        return fi(a, _, c);
      }), d = f.join(" "), d.split(f[0]).length === 5 ? f[0] : d;
      f = (u + "").split(" "), d = {}, o.forEach(function(_, g) {
        return d[_] = f[g] = f[g] || f[(g - 1) / 2 | 0];
      }), a.init(l, d, h);
    };
  });
  var hm = {
    name: "css",
    register: Jc,
    targetTest: function(e) {
      return e.style && e.nodeType;
    },
    init: function(e, t, n, i, s) {
      var o = this._props, a = e.style, l = n.vars.startAt, c, u, h, f, d, _, g, m, p, y, v, x, b, w, A, P;
      Xu || Jc(), this.styles = this.styles || rm(e), P = this.styles.props, this.tween = n;
      for (g in t) if (g !== "autoRound" && (u = t[g], !(dn[g] && Yp(g, t, n, i, e, s)))) {
        if (d = typeof u, _ = Ua[g], d === "function" && (u = u.call(n, i, e, s), d = typeof u), d === "string" && ~u.indexOf("random(") && (u = go(u)), _) _(this, e, g, u, n) && (A = 1);
        else if (g.substr(0, 2) === "--") c = (getComputedStyle(e).getPropertyValue(g) + "").trim(), u += "", Vi.lastIndex = 0, Vi.test(c) || (m = Ht(c), p = Ht(u)), p ? m !== p && (c = Gi(e, g, c, p) + p) : m && (u += m), this.add(a, "setProperty", c, u, i, s, 0, 0, g), o.push(g), P.push(g, 0, a[g]);
        else if (d !== "undefined") {
          if (l && g in l ? (c = typeof l[g] == "function" ? l[g].call(n, i, e, s) : l[g], It(c) && ~c.indexOf("random(") && (c = go(c)), Ht(c + "") || c === "auto" || (c += _n.units[g] || Ht(fi(e, g)) || ""), (c + "").charAt(1) === "=" && (c = fi(e, g))) : c = fi(e, g), f = parseFloat(c), y = d === "string" && u.charAt(1) === "=" && u.substr(0, 2), y && (u = u.substr(2)), h = parseFloat(u), g in Gn && (g === "autoAlpha" && (f === 1 && fi(e, "visibility") === "hidden" && h && (f = 0), P.push("visibility", 0, a.visibility), Bi(this, a, "visibility", f ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), g !== "scale" && g !== "transform" && (g = Gn[g], ~g.indexOf(",") && (g = g.split(",")[0]))), v = g in Ti, v) {
            if (this.styles.save(g), x || (b = e._gsap, b.renderTransform && !t.parseTransform || yo(e, t.parseTransform), w = t.smoothOrigin !== false && b.smooth, x = this._pt = new on(this._pt, a, vt, 0, 1, b.renderTransform, b, 0, -1), x.dep = 1), g === "scale") this._pt = new on(this._pt, b, "scaleY", b.scaleY, (y ? is(b.scaleY, y + h) : h) - b.scaleY || 0, jc), this._pt.u = 0, o.push("scaleY", g), g += "X";
            else if (g === "transformOrigin") {
              P.push(an, 0, a[an]), u = lE(u), b.svg ? Qc(e, u, 0, w, 0, this) : (p = parseFloat(u.split(" ")[2]) || 0, p !== b.zOrigin && Bi(this, b, "zOrigin", b.zOrigin, p), Bi(this, a, g, Oa(c), Oa(u)));
              continue;
            } else if (g === "svgOrigin") {
              Qc(e, u, 1, w, 0, this);
              continue;
            } else if (g in lm) {
              fE(this, b, g, f, y ? is(f, y + u) : u);
              continue;
            } else if (g === "smoothOrigin") {
              Bi(this, b, "smooth", b.smooth, u);
              continue;
            } else if (g === "force3D") {
              b[g] = u;
              continue;
            } else if (g === "transform") {
              dE(this, u, e);
              continue;
            }
          } else g in a || (g = Es(g) || g);
          if (v || (h || h === 0) && (f || f === 0) && !KT.test(u) && g in a) m = (c + "").substr((f + "").length), h || (h = 0), p = Ht(u) || (g in _n.units ? _n.units[g] : m), m !== p && (f = Gi(e, g, c, p)), this._pt = new on(this._pt, v ? b : a, g, f, (y ? is(f, y + h) : h) - f, !v && (p === "px" || g === "zIndex") && t.autoRound !== false ? ZT : jc), this._pt.u = p || 0, m !== p && p !== "%" && (this._pt.b = c, this._pt.r = jT);
          else if (g in a) aE.call(this, e, g, c, y ? y + u : u);
          else if (g in e) this.add(e, g, c || e[g], y ? y + u : u, i, s);
          else if (g !== "parseTransform") {
            Ou(g, u);
            continue;
          }
          v || (g in a ? P.push(g, 0, a[g]) : typeof e[g] == "function" ? P.push(g, 2, e[g]()) : P.push(g, 1, c || e[g])), o.push(g);
        }
      }
      A && Qp(this);
    },
    render: function(e, t) {
      if (t.tween._time || !qu()) for (var n = t._pt; n; ) n.r(e, n.d), n = n._next;
      else t.styles.revert();
    },
    get: fi,
    aliases: Gn,
    getSetter: function(e, t, n) {
      var i = Gn[t];
      return i && i.indexOf(",") < 0 && (t = i), t in Ti && t !== an && (e._gsap.x || fi(e, "x")) ? n && ed === n ? t === "scale" ? tE : eE : (ed = n || {}) && (t === "scale" ? nE : iE) : e.style && !Iu(e.style[t]) ? JT : ~t.indexOf("-") ? QT : Gu(e, t);
    },
    core: {
      _removeProperty: Tr,
      _getMatrix: Ku
    }
  };
  ln.utils.checkPrefix = Es;
  ln.core.getStyleSaver = rm;
  (function(r, e, t, n) {
    var i = sn(r + "," + e + "," + t, function(s) {
      Ti[s] = 1;
    });
    sn(e, function(s) {
      _n.units[s] = "deg", lm[s] = 1;
    }), Gn[i[13]] = r + "," + e, sn(n, function(s) {
      var o = s.split(":");
      Gn[o[1]] = i[o[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
    _n.units[r] = "px";
  });
  ln.registerPlugin(hm);
  ft = ln.registerPlugin(hm) || ln;
  ft.core.Tween;
  function ut(r) {
    return `/iridium_23e_year_sim-se/${r}`;
  }
  const Hl = /* @__PURE__ */ new Map(), qs = [], bs = new wr(), ya = new ee();
  let si = null;
  const Gl = new ee(), qi = [];
  async function Fa(r) {
    return await (await fetch(r)).text();
  }
  async function eu(r, e, t, n = 1.5, i, s = 0.02, o = "#F99F00", a = 0.05, l = 0.03) {
    return new Promise((c, u) => {
      new hp().load(ut("res/font/Genos_Bold.json"), async (f) => {
        try {
          const d = new fp(r, {
            font: f,
            size: n,
            depth: a,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: l,
            bevelSize: s,
            bevelOffset: 0,
            bevelSegments: 5
          }), _ = await Fa(ut("res/shaders/textVertexShader.glsl")), g = await Fa(ut("res/shaders/textFragmentShader.glsl")), m = new Gt({
            uniforms: {
              textColor: {
                value: new Re(o)
              },
              opacity: {
                value: 1
              }
            },
            vertexShader: _,
            fragmentShader: g,
            transparent: true
          }), p = new Rt(d, m);
          p.position.set(e.x, e.y, e.z), p.rotation.set(t.x, t.y, t.z), i.add(p), c(p);
        } catch (d) {
          u(d);
        }
      }, void 0, u);
    });
  }
  function Rr(r, e, t, n, i, s, o, a) {
    if (Hl.has(r)) {
      const c = Hl.get(r);
      return c.position.set(t.x, t.y, t.z), c.scale.set(n, n, n), c.rotation.set(i.x, i.y, i.z), o.add(c), cd(c, s), a && a(c), c;
    }
    new gM().load(e, (c) => {
      const u = c.scene;
      u.position.set(t.x, t.y, t.z), u.scale.set(n, n, n), u.rotation.set(i.x, i.y, i.z), u.traverse((h) => {
        h.isMesh && h.geometry.computeBoundingSphere();
      }), Hl.set(r, u), o.add(u), cd(u, s), a && a(u);
    }, void 0, (c) => {
      console.error(`Error loading model ${r}:`, c);
    });
  }
  function cd(r, e) {
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
  function pE(r, e, t) {
    const n = t.domElement.getBoundingClientRect();
    ya.x = (r.clientX - n.left) / n.width * 2 - 1, ya.y = -((r.clientY - n.top) / n.height) * 2 + 1, bs.setFromCamera(ya, e);
    const i = [
      ...qs,
      ...qi
    ], s = bs.intersectObjects(i);
    if (s.length > 0) {
      const o = s[0].object;
      si !== o && (si && qs.includes(si) && ft.to(si.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.3
      }), si = o, document.body.style.cursor = "pointer", qs.includes(o) && ft.to(o.scale, {
        x: 1.1,
        y: 1.1,
        z: 1.1,
        duration: 0.3
      }));
    } else si && qs.includes(si) && ft.to(si.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 0.3
    }), si = null, document.body.style.cursor = "default";
  }
  function mE(r, e) {
    bs.setFromCamera(ya, e);
    const t = bs.intersectObjects(qs);
    if (t.length > 0) {
      const n = t[0].object;
      n.userData.onClick && n.userData.onClick();
    }
  }
  function gE(r, e, t) {
    window.addEventListener("mousemove", (n) => pE(n, r, t)), window.addEventListener("click", (n) => mE(n, r));
  }
  function tu(r, e) {
    r.traverse((t) => {
      t.isMesh && (t.userData.onClick = e, qi.push(t));
    });
  }
  function _E(r, e) {
    window.addEventListener("click", (t) => {
      const n = e.domElement.getBoundingClientRect();
      Gl.x = (t.clientX - n.left) / n.width * 2 - 1, Gl.y = -((t.clientY - n.top) / n.height) * 2 + 1, bs.setFromCamera(Gl, r);
      const i = bs.intersectObjects(qi, true);
      if (i.length > 0) {
        const s = i[0].object;
        s.userData.onClick && s.userData.onClick();
      }
    });
  }
  async function Yi(r, e, t, n = 0.7, i, s, o = "center") {
    return new Promise((a, l) => {
      new hp().load(ut("res/font/GenosThin_Regular.json"), async (u) => {
        try {
          const h = new fp(r, {
            font: u,
            size: n,
            depth: 0.05,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
          });
          h.computeBoundingBox(), h.center();
          const f = await Fa(ut("res/shaders/textVertexShader.glsl")), d = await Fa(ut("res/shaders/textFragmentShader.glsl")), _ = new Gt({
            uniforms: {
              textColor: {
                value: new Re(249 / 255, 159 / 255, 0 / 255)
              }
            },
            vertexShader: f,
            fragmentShader: d
          }), g = new Rt(h, _);
          g.rotation.set(t.x, t.y, t.z);
          const m = h.boundingBox.getSize(new D()), p = 0.3, y = new Er(m.x + p, m.y + p, 0.2), v = new Eo({
            color: 0,
            transparent: true,
            opacity: 0.05,
            emissive: new Re(0),
            emissiveIntensity: 1
          }), x = new Rt(y, v);
          if (x.rotation.set(t.x, t.y, t.z), x.name = `button-${r.replace(/\s+/g, "-")}`, o === "right") {
            const b = m.x + p, w = -b;
            g.position.set(e.x + w + m.x / 2, e.y, e.z + 0.1), x.position.set(e.x + w + b / 2, e.y, e.z);
          } else g.position.set(e.x, e.y, e.z + 0.1), x.position.set(e.x, e.y, e.z);
          s && tu(x, s), i.add(g), i.add(x), a({
            textMesh: g,
            buttonMesh: x
          });
        } catch (h) {
          l(h);
        }
      }, void 0, l);
    });
  }
  function $u(r, e = {}) {
    if (!r || !r.material || !("emissive" in r.material)) return;
    const { color: t = "#ff9900", intensity: n = 1.5 } = e;
    r.material.emissive = new Re(t), r.material.emissiveIntensity = n, r.material.needsUpdate = true;
  }
  let ud = "refs-viewport", fm = "refs-wrapper", dm = "refs-iframe", hd = "";
  function sr(r) {
    pm();
    const e = document.getElementById(fm), t = document.getElementById(dm);
    !e || !t || hd !== r && (e.style.transition = "transform 1s ease-in-out", e.style.transform = "rotateY(180deg)", setTimeout(() => {
      t.onload = () => {
        e.style.transform = "rotateY(0deg)", hd = r;
      }, t.src = r;
    }, 500));
  }
  function pm() {
    if (document.getElementById(ud)) return;
    const r = document.createElement("div");
    r.id = ud, r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100vw", r.style.height = "100vh", r.style.display = "flex", r.style.alignItems = "center", r.style.justifyContent = "flex-end", r.style.pointerEvents = "none", r.style.zIndex = "100";
    const e = document.createElement("div");
    e.id = fm, e.style.transform = "rotateY(0deg)", e.style.transition = "transform 1.2s cubic-bezier(0.4, 0.0, 0.2, 1)", e.style.transformStyle = "preserve-3d", e.style.backfaceVisibility = "hidden", e.style.width = "40vw", e.style.height = "70vh", e.style.marginRight = "10vw", e.style.background = "#000", e.style.border = "1px solid #007BFF80", e.style.boxShadow = `
    0 0 10px rgba(0, 123, 255, 0.4),
    0 0 30px rgba(0, 123, 255, 0.3),
    0 0 60px rgba(0, 123, 255, 0.2)`, e.style.borderRadius = "15px", e.style.overflow = "hidden", e.style.pointerEvents = "auto";
    const t = document.createElement("iframe");
    t.id = dm, t.src = ut("refsViewport/disclaimer.html"), t.style.width = "100%", t.style.height = "100%", t.style.border = "none", t.style.backgroundColor = "#000", e.style.backgroundColor = "#000", e.appendChild(t), r.appendChild(e), document.body.appendChild(r);
  }
  function xE() {
    const r = document.getElementById("refs-viewport");
    if (r) {
      const e = document.getElementById("refs-iframe");
      e && (e.src = "about:blank"), r.remove();
    }
    console.log("refs viewport destroyed");
  }
  let at = null, tn = null, Vt = null;
  function vE() {
    if (at) {
      at.style.display = "flex";
      return;
    }
    console.log("Creating Name viewport"), at = document.createElement("div"), at.id = "name-viewport-container", at.style.position = "fixed", at.style.top = "50%", at.style.left = "50%", at.style.transform = "translate(-50%, -50%)", at.style.width = "80%", at.style.maxWidth = "1200px", at.style.height = "80vh", at.style.backgroundColor = "rgba(0, 0, 0, 0.9)", at.style.border = "0.5px solid #FFFF", at.style.borderRadius = "20px", at.style.boxShadow = "0 0 30px rgba(0, 123, 255, 0.5)", at.style.zIndex = "1000", at.style.display = "flex", at.style.flexDirection = "column", at.style.overflow = "hidden";
    const r = document.createElement("div");
    r.style.display = "flex", r.style.justifyContent = "space-between", r.style.alignItems = "center", r.style.padding = "1px 2px", r.style.backgroundColor = "rbga(0, 0, 0, 0.3)", r.style.color = "white", r.style.borderTopLeftRadius = "20px", r.style.borderTopRightRadius = "20px";
    const e = document.createElement("h2");
    e.style.fontSize = "1.2rem", Vt = document.createElement("button"), Vt.textContent = "\u2715", Vt.style.background = "none", Vt.style.border = "none", Vt.style.color = "white", Vt.style.fontSize = "1.5rem", Vt.style.cursor = "pointer", Vt.style.padding = "0 5px", Vt.style.lineHeight = "1", r.appendChild(Vt), at.appendChild(r), tn = document.createElement("iframe"), tn.src = "/iridium_23e_year_sim-se/psycheName/psycheName.html", tn.style.width = "100%", tn.style.height = "100%", tn.style.border = "none", tn.style.backgroundColor = "#222", tn.onerror = () => {
      console.error("Failed to load iframe content");
    }, tn.onload = () => {
      console.log("Iframe loaded successfully");
    }, tn.onerror = () => {
      console.error("Failed to load iframe content"), tn.style.backgroundColor = "#444";
    }, Vt.addEventListener("mouseover", () => {
      Vt.style.transform = "scale(1.2)";
    }), Vt.addEventListener("mouseout", () => {
      Vt.style.transform = "scale(1)";
    }), at.appendChild(tn), document.body.appendChild(at), ft.from(at, {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      ease: "power2.out"
    }), Vt.addEventListener("click", So), document.addEventListener("keydown", yE);
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
    }), t.addEventListener("click", So), window.addEventListener("click", function(i) {
      i.target === e && So();
    });
  });
  function So() {
    at && ft.to(at, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        tn && (at.removeChild(tn), tn = null), document.body.removeChild(at), at = null, Vt = null;
      }
    });
  }
  function yE(r) {
    r.key === "Escape" && So();
  }
  const SE = "modulepreload", ME = function(r) {
    return "/iridium_23e_year_sim-se/" + r;
  }, fd = {}, nu = function(e, t, n) {
    let i = Promise.resolve();
    if (t && t.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"), a = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
      i = Promise.allSettled(t.map((l) => {
        if (l = ME(l), l in fd) return;
        fd[l] = true;
        const c = l.endsWith(".css"), u = c ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${l}"]${u}`)) return;
        const h = document.createElement("link");
        if (h.rel = c ? "stylesheet" : SE, c || (h.as = "script"), h.crossOrigin = "", h.href = l, a && h.setAttribute("nonce", a), document.head.appendChild(h), c) return new Promise((f, d) => {
          h.addEventListener("load", f), h.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${l}`)));
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
  function ju(r, e = {}) {
    const { backgroundColor: t = "rgba(0, 0, 0, 0.125)", borderColor: n = "#ffffcc", borderWidth: i = "2px", borderRadius: s = "10px", boxShadow: o = "0 0 25px rgba(255, 255, 204, 0.6)", zIndex: a = "900" } = e;
    r.style.position = "fixed", r.style.top = "50%", r.style.left = "50%", r.style.transform = "translate(-50%, -50%)", r.style.backgroundColor = t, r.style.border = `${i} solid ${n}`, r.style.borderRadius = s, r.style.boxShadow = o, r.style.zIndex = a, r.style.display = "flex", r.style.flexDirection = "column", r.style.overflow = "hidden";
  }
  function Zu(r, e = {}) {
    const { backgroundColor: t = "rgba(26, 26, 58, 0.125)", gradientStart: n = "rgba(26, 26, 58, 0.125)", gradientEnd: i = "rgba(58, 58, 106, 0.125)", textColor: s = "white", padding: o = "10px 15px" } = e;
    r.style.display = "flex", r.style.justifyContent = "space-between", r.style.alignItems = "center", r.style.padding = o, r.style.backgroundColor = t, r.style.backgroundImage = `linear-gradient(to right, ${n}, ${i})`, r.style.color = s, r.style.borderTopLeftRadius = "8px", r.style.borderTopRightRadius = "8px";
  }
  function Ju(r, e = {}) {
    const { fontSize: t = "1.2rem", textShadow: n = "0 0 5px rgba(255, 255, 204, 0.7)", letterSpacing: i = "0.5px" } = e;
    r.style.margin = "0", r.style.fontSize = t, r.style.textShadow = n, r.style.letterSpacing = i;
  }
  function Qu(r, e = {}) {
    const { color: t = "white", fontSize: n = "1.5rem" } = e;
    r.style.background = "none", r.style.border = "none", r.style.color = t, r.style.fontSize = n, r.style.cursor = "pointer", r.style.padding = "0 5px", r.style.lineHeight = "1";
  }
  function TE(r, e = {}) {
    const { color: t = "white", fontSize: n = "1.2rem" } = e;
    r.style.background = "none", r.style.border = "none", r.style.color = t, r.style.fontSize = n, r.style.cursor = "pointer", r.style.padding = "0 5px", r.style.lineHeight = "1", r.style.marginRight = "5px";
  }
  function eh(r, e = {}) {
    const { backgroundColor: t = "rgba(0, 0, 0, 0.1)" } = e;
    r.style.width = "100%", r.style.height = "100%", r.style.border = "none", r.style.backgroundColor = t, r.style.overflow = "auto", r.scrolling = "yes";
  }
  function th(r) {
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
  function nh(r) {
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
  function ih(r) {
    const e = document.createElement("div");
    e.style.position = "absolute", e.style.top = "0", e.style.left = "0", e.style.width = "100%", e.style.height = "100%", e.style.pointerEvents = "none", e.style.background = "radial-gradient(circle at 50% 50%, rgba(255, 255, 204, 0.03) 0%, transparent 80%)", e.style.borderRadius = "10px", e.style.zIndex = "1", r.appendChild(e);
  }
  function rh(r, e = 20) {
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
  function sh(r, e, t) {
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
  function oh(r, e = {}) {
    const { color: t = "rgba(255, 255, 204, 0.7)", intensity: n = "30px", duration: i = 2 } = e;
    return ft.to(r, {
      boxShadow: `0 0 ${n} ${t}`,
      repeat: -1,
      yoyo: true,
      duration: i,
      ease: "sine.inOut"
    });
  }
  function mm(r, e) {
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
  qa = function() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", qa);
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
  qa();
  document.addEventListener("DOMContentLoaded", qa);
  setInterval(qa, 1e3);
  let it = null, ai = null, Ii = null, no = null;
  function gm() {
    const r = window.innerWidth, e = window.innerHeight, t = window.devicePixelRatio || 1;
    console.log(`Screen size: ${r}x${e}, Pixel ratio: ${t}`);
    let n, i, s;
    return r === 2388 && e === 1668 || e === 2388 && r === 1668 ? (console.log('iPad Pro 11" detected'), n = "90%", s = "2000px", i = "90vh") : r >= 2e3 ? (n = "85%", s = "2400px", i = "85vh") : r >= 1600 ? (n = "88%", s = "1900px", i = "88vh") : r >= 1200 ? (n = "90%", s = "1500px", i = "90vh") : r >= 992 ? (n = "92%", s = "1150px", i = "92vh") : r >= 768 ? (n = "95%", s = "950px", i = "95vh") : (n = "98%", s = "100%", i = "98vh"), {
      width: n,
      maxWidth: s,
      height: i
    };
  }
  function io() {
    if (!it) return;
    const { width: r, maxWidth: e, height: t } = gm();
    it.style.width = r, it.style.maxWidth = e, it.style.height = t, console.log(`Viewport resized to: width=${r}, maxWidth=${e}, height=${t}`);
  }
  function EE(r) {
    if (it) {
      it.style.display = "flex", io();
      return;
    }
    console.log("Creating games viewport"), it = document.createElement("div"), it.id = "games-viewport-container", ju(it, {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderColor: "rgba(122, 95, 62, 0.3)",
      boxShadow: "0 0 15px rgba(122, 95, 62, 0.3)"
    });
    const { width: e, maxWidth: t, height: n } = gm();
    it.style.width = e, it.style.maxWidth = t, it.style.height = n;
    const i = document.createElement("div");
    Zu(i, {
      backgroundColor: "rgba(10, 10, 20, 0.2)",
      gradientStart: "rgba(10, 10, 20, 0.2)",
      gradientEnd: "rgba(20, 20, 40, 0.2)"
    });
    const s = document.createElement("h2");
    s.textContent = "Psyche Mission Games", Ju(s);
    const o = document.createElement("div");
    o.style.display = "flex", o.style.alignItems = "center";
    const a = document.createElement("button");
    a.textContent = "\u21A9", TE(a), Ii = document.createElement("button"), Ii.textContent = "\u2715", Qu(Ii), o.appendChild(a), o.appendChild(Ii), i.appendChild(s), i.appendChild(o), it.appendChild(i), ai = document.createElement("iframe"), ai.src = ut("/games/games.html"), eh(ai, {
      backgroundColor: "rgba(0, 0, 0, 0.0)"
    }), th(document), ai.onerror = () => {
      console.error("Failed to load games iframe content");
    }, ai.onload = () => {
      console.log("Games iframe loaded successfully"), nh(ai);
    }, it.appendChild(ai), document.body.appendChild(it), ih(it), rh(it), sh(it, i, ai), oh(it), Ii.addEventListener("click", () => {
      bE(r);
    }), a.addEventListener("click", () => {
      ah();
    }), document.addEventListener("keydown", xm), window.addEventListener("resize", io), no = new ResizeObserver((l) => {
      console.log("ResizeObserver detected size change"), io();
    }), no.observe(document.body);
  }
  function _m(r, e) {
    ft.to(e, {
      duration: 1.5,
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center",
      ease: "power2.inOut",
      onComplete: () => {
        ft.to(r.position, {
          duration: 1.5,
          x: gi.x,
          y: gi.y,
          z: gi.z,
          ease: "power2.out",
          onUpdate: () => {
            r.lookAt(gi);
          }
        }), ft.to(r.rotation, {
          duration: 1.5,
          y: os.y,
          ease: "power2.out",
          onComplete: () => {
            console.log("Camera reset to initial position and rotation.");
          }
        }), e.style.display = "none";
      }
    });
  }
  function xm(r) {
    r.key === "Escape" && _m();
  }
  function ah() {
    it && (Ii && Ii.removeEventListener("click", _m), document.removeEventListener("keydown", xm), window.removeEventListener("resize", io), no && (no.disconnect(), no = null), it.style.transition = "opacity 0.5s ease", it.style.opacity = "0", setTimeout(() => {
      document.body.removeChild(it), it = null, ai = null, Ii = null;
    }, 500));
  }
  window.setGamesViewportSize = function(r, e) {
    if (!it) {
      console.warn("Games viewport is not currently active");
      return;
    }
    return console.log(`Manually setting viewport size to ${r}x${e}`), it.style.width = `${r}px`, it.style.maxWidth = `${r}px`, it.style.height = `${e}px`, it.style.transform = "translate(-50%, -50%)", `Viewport size set to ${r}x${e}`;
  };
  window.resetGamesViewportSize = function() {
    if (!it) {
      console.warn("Games viewport is not currently active");
      return;
    }
    return io(), "Viewport size reset to responsive mode";
  };
  function bE(r) {
    ah(), ft.to(r.position, {
      duration: 1.5,
      x: gi.x,
      y: gi.y,
      z: gi.z,
      ease: "power2.out",
      onUpdate: () => {
        r.lookAt(gi);
      }
    }), ft.to(r.rotation, {
      duration: 1.5,
      y: os.y,
      ease: "power2.out",
      onComplete: () => {
        console.log("Camera reset to initial position and rotation.");
      }
    });
  }
  let wE = false, gi = new D(), os = new Fn();
  function AE(r, e, t, n) {
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
        Rr("controller", ut("res/models/arcade_controller.glb"), l, 2, u, {
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
        const { buttonMesh: h } = Yi("TRY SOME PSYCHE INSPIRED GAMES!", a, c, 0.7, r, () => {
          gi.copy(e.position), os.copy(e.rotation);
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
              EE(e);
            }
          }), console.log("Games button clicked.");
        });
        $u(h, {
          color: "#ff9900",
          intensity: 2
        });
        const f = new wr(), d = new ee();
        window.addEventListener("mousemove", (_) => {
          const g = n.domElement.getBoundingClientRect();
          d.x = (_.clientX - g.left) / g.width * 2 - 1, d.y = -((_.clientY - g.top) / g.height) * 2 + 1, f.setFromCamera(d, e);
          const m = f.intersectObjects(qi);
          n.domElement.style.cursor = m.length > 0 ? "pointer" : "default";
        }), wE = true, i();
      } catch (h) {
        s(h);
      }
    });
  }
  let pt = null, li = null, fr = null, cr = null, Ys = null, di = null;
  function RE() {
    if (pt) {
      pt.style.display = "flex";
      return;
    }
    console.log("Creating Year viewport"), pt = document.createElement("div"), pt.id = "year-viewport-container", ju(pt, {
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      borderColor: "rgb(255, 255, 255)",
      boxShadow: "0 0 20px rgba(255, 255, 204, 0.6)"
    }), pt.style.width = "80%", pt.style.maxWidth = "1440px", pt.style.height = "95vh", cr = document.createElement("div"), Zu(cr, {
      backgroundColor: "#f9a000",
      gradientStart: "#f9a000",
      gradientEnd: "#f9a000"
    }), Ys = document.createElement("h2"), Ys.textContent = "Compare Earth and Psyche", Ju(Ys), fr = document.createElement("button"), fr.textContent = "\u2715", Qu(fr), cr.appendChild(Ys), cr.appendChild(fr), pt.appendChild(cr), li = document.createElement("iframe"), li.src = ut("/year/year.html"), eh(li, {
      backgroundColor: "#222"
    }), li.onerror = () => {
      console.error("Failed to load iframe content");
    }, li.onload = () => {
      console.log("Iframe loaded successfully"), nh(li);
    }, pt.appendChild(li), document.body.appendChild(pt), ih(pt), rh(pt, 80), sh(pt, cr, li), di = oh(pt, {
      color: "rgba(255, 255, 255, 0.6)",
      intensity: "25px"
    }), th(document), fr.addEventListener("click", lh), document.addEventListener("keydown", vm);
  }
  function lh() {
    pt && (di && di.kill(), mm(pt, () => {
      pt.style.display = "none", pt.style.opacity = 1, pt.style.transform = "translate(-50%, -50%) scale(1)", document.body.classList.add("overlay-open"), di && (di.restart(), di.pause());
    }).play());
  }
  function vm(r) {
    r.key === "Escape" && lh();
  }
  function CE() {
    pt ? (di && di.kill(), ft.to(pt, {
      y: "100%",
      duration: 0.5,
      ease: "power1.in",
      onComplete: () => {
        fr.removeEventListener("click", lh), document.removeEventListener("keydown", vm), document.body.removeChild(pt), pt = null, li = null, fr = null, cr = null, Ys = null, di = null;
      }
    })) : console.log("No viewport container found to destroy.");
  }
  function PE(r, e, t, n) {
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
        Rr("balance", ut("res/models/balance_scale.glb"), o, 0.9, l, null, r, () => {
          console.log("loaded model");
        });
        const { buttonMesh: h } = Yi("THE COSMIC COMPARISON OF EARTH AND PSYCHE", s, a, 0.7, r, () => {
          RE(), console.log("Cosmic Comparison button clicked.");
        }), f = new wr(), d = new ee();
        window.addEventListener("mousemove", (_) => {
          const g = n.domElement.getBoundingClientRect();
          d.x = (_.clientX - g.left) / g.width * 2 - 1, d.y = -((_.clientY - g.top) / g.height) * 2 + 1, f.setFromCamera(d, e);
          const m = f.intersectObjects(qi);
          n.domElement.style.cursor = m.length > 0 ? "pointer" : "default";
        }), c();
      } catch (h) {
        u(h);
      }
    });
  }
  function LE(r, e) {
    const n = Cr() === 4;
    for (let i = 0; i < e.children.length; i++) {
      const s = e.children[i];
      s.userData && s.userData.section4Element && (s.visible = n);
    }
  }
  function DE() {
  }
  window.setWebsiteViewportSize = function(r, e) {
    {
      console.warn("Website viewport is not currently active");
      return;
    }
  };
  window.resetWebsiteViewportSize = function() {
    {
      console.warn("Website viewport is not currently active");
      return;
    }
  };
  function IE() {
  }
  window.setSurface2ViewportSize = function(r, e) {
    {
      console.warn("Surface2 viewport is not currently active");
      return;
    }
  };
  window.resetSurface2ViewportSize = function() {
    {
      console.warn("Surface2 viewport is not currently active");
      return;
    }
  };
  let Ze = null, ci = null, dr = null, ro = null;
  function ym() {
    const r = window.innerWidth, e = window.innerHeight, t = window.devicePixelRatio || 1;
    console.log(`Screen size: ${r}x${e}, Pixel ratio: ${t}`);
    let n, i, s;
    return r === 2388 && e === 1668 || e === 2388 && r === 1668 ? (console.log('iPad Pro 11" detected'), n = "90%", s = "2000px", i = "90vh") : r >= 2e3 ? (n = "85%", s = "2400px", i = "85vh") : r >= 1600 ? (n = "88%", s = "1900px", i = "88vh") : r >= 1200 ? (n = "90%", s = "1500px", i = "90vh") : r >= 992 ? (n = "92%", s = "1150px", i = "92vh") : r >= 768 ? (n = "95%", s = "950px", i = "95vh") : (n = "98%", s = "100%", i = "98vh"), {
      width: n,
      maxWidth: s,
      height: i
    };
  }
  function so() {
    if (!Ze) return;
    const { width: r, maxWidth: e, height: t } = ym();
    Ze.style.width = r, Ze.style.maxWidth = e, Ze.style.height = t, console.log(`Viewport resized to: width=${r}, maxWidth=${e}, height=${t}`);
  }
  function NE() {
    if (Ze) {
      Ze.style.display = "flex", so();
      return;
    }
    console.log("Creating location2 viewport"), Ze = document.createElement("div"), Ze.id = "location2-viewport-container", ju(Ze, {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderColor: "rgba(122, 95, 62, 0.3)",
      boxShadow: "0 0 15px rgba(122, 95, 62, 0.3)"
    });
    const { width: r, maxWidth: e, height: t } = ym();
    Ze.style.width = r, Ze.style.maxWidth = e, Ze.style.height = t;
    const n = document.createElement("div");
    Zu(n, {
      backgroundColor: "rgba(10, 10, 20, 0.2)",
      gradientStart: "rgba(10, 10, 20, 0.2)",
      gradientEnd: "rgba(20, 20, 40, 0.2)"
    });
    const i = document.createElement("h2");
    i.textContent = "Psyche's Location in Space", Ju(i), dr = document.createElement("button"), dr.textContent = "\u2715", Qu(dr), n.appendChild(i), n.appendChild(dr), Ze.appendChild(n), ci = document.createElement("iframe"), ci.src = ut("/PsycheJR/location2.html"), eh(ci, {
      backgroundColor: "rgba(0, 0, 0, 0.0)"
    }), th(document), ci.onerror = () => {
      console.error("Failed to load location2 iframe content");
    }, ci.onload = () => {
      console.log("Location2 iframe loaded successfully"), nh(ci);
    }, Ze.appendChild(ci), document.body.appendChild(Ze), ih(Ze), rh(Ze), sh(Ze, n, ci), oh(Ze), dr.addEventListener("click", ch), document.addEventListener("keydown", Sm), window.addEventListener("resize", so), ro = new ResizeObserver((s) => {
      console.log("ResizeObserver detected size change"), so();
    }), ro.observe(document.body);
  }
  function ch() {
    Ze && mm(Ze, () => {
      Ze.style.display = "none", Ze.style.opacity = 1, Ze.style.transform = "translate(-50%, -50%) scale(1)", document.body.classList.add("overlay-open");
    });
  }
  function Sm(r) {
    r.key === "Escape" && ch();
  }
  function UE() {
    Ze && (dr.removeEventListener("click", ch), document.removeEventListener("keydown", Sm), window.removeEventListener("resize", so), ro && (ro.disconnect(), ro = null), document.body.removeChild(Ze), Ze = null, ci = null, dr = null);
  }
  window.setLocation2ViewportSize = function(r, e) {
    if (!Ze) {
      console.warn("Location2 viewport is not currently active");
      return;
    }
    return console.log(`Manually setting viewport size to ${r}x${e}`), Ze.style.width = `${r}px`, Ze.style.maxWidth = `${r}px`, Ze.style.height = `${e}px`, Ze.style.transform = "translate(-50%, -50%)", `Viewport size set to ${r}x${e}`;
  };
  window.resetLocation2ViewportSize = function() {
    if (!Ze) {
      console.warn("Location2 viewport is not currently active");
      return;
    }
    return so(), "Viewport size reset to responsive mode";
  };
  let pr, dd, iu, as = 1, ru = false, su = 0;
  const pd = {
    0: xE,
    2: So,
    3: () => {
      nu(async () => {
        const { hideKidsViewport: r } = await import("./kidsViewport-CB8I5ZKr.js");
        return {
          hideKidsViewport: r
        };
      }, []).then(({ hideKidsViewport: r }) => {
        r();
      }).catch((r) => {
        console.error("Failed to load kidsViewport for destruction:", r);
      });
    },
    4: CE,
    5: DE,
    6: ah,
    7: IE,
    8: UE
  };
  let aa = as;
  function OE(r) {
    su = r.touches[0].clientY;
  }
  function FE(r) {
    const e = r.touches[0].clientY, t = su - e;
    su = e, Mm({
      deltaY: t
    }), r.preventDefault();
  }
  function BE(r, e, t) {
    pr = r, dd = t, iu = e, window.addEventListener("wheel", Mm, {
      passive: false
    }), window.addEventListener("touchstart", OE, {
      passive: false
    }), window.addEventListener("touchmove", FE, {
      passive: false
    }), window.addEventListener("resize", () => zE(pr, dd));
  }
  function zE(r, e) {
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
  function Mm(r) {
    if (ru) return;
    const e = r.deltaY > 0 ? 1 : -1;
    let t = as + e;
    console.log("Swipe Direction: ", e), t > 8 ? t = 0 : t < 0 && (t = 8), ru = true, Sa(t);
  }
  function Sa(r, e = null) {
    if (r < 0 || r >= iu.length) return;
    pd[aa] && pd[aa](), aa === 6 && r !== 6 && ft.to(pr.rotation, {
      x: os.x,
      y: os.y,
      z: os.z,
      duration: 1,
      ease: "power2.out"
    }), as = r, aa = r, as = r;
    const t = iu[r].position;
    ft.to(pr.position, {
      x: t.x,
      y: t.y,
      z: t.z,
      duration: 2,
      ease: "power4.inOut",
      onUpdate: () => {
      },
      onComplete: () => {
        r !== 6 && (new D(pr.position.x, pr.position.y, pr.position.z - 1), r === 0 && pm()), ru = false, console.log("Moved to Section:", as);
      }
    });
  }
  function Cr() {
    return as;
  }
  function kE() {
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
  function VE(r, e, t) {
    return new Promise((n) => {
      var _a2;
      const i = (_a2 = t[0]) == null ? void 0 : _a2.position, s = {
        x: i.x - 12,
        y: i.y + 6,
        z: i.z - 13
      }, o = {
        x: i.x - 3,
        y: i.y + 6,
        z: i.z - 13
      }, a = {
        x: 0,
        y: 0.1,
        z: 0
      };
      eu("REFERENCES", s, a, 1, r, 0.02, "#FFA500", 0.07, 0.03), [
        {
          text: "Disclaimer",
          onClick: () => sr(ut("refsViewport/disclaimer.html"))
        },
        {
          text: "Dev & Contributors",
          onClick: () => sr(ut("refsViewport/dev.html"))
        },
        {
          text: "Acknowledgments",
          onClick: () => sr(ut("refsViewport/thanks.html"))
        },
        {
          text: "Licensing",
          onClick: () => sr(ut("refsViewport/license.html"))
        },
        {
          text: "Third Party Assets",
          onClick: () => sr(ut("refsViewport/assets.html"))
        },
        {
          text: "Technical References",
          onClick: () => sr(ut("refsViewport/technical.html"))
        },
        {
          text: "Contact / Support",
          onClick: () => sr(ut("refsViewport/contact.html"))
        }
      ].forEach((c, u) => {
        const h = {
          x: o.x,
          y: o.y - u * 1.2 - 1.25,
          z: o.z
        };
        Yi(c.text, h, a, 0.5, r, c.onClick, "right");
      }), n();
    });
  }
  function HE(r, e, t) {
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
      eu("YEAR ON PSYCHE", i, s, 1.5, r, 0.02, "#FFA500", 0.07, 0.03);
      const h = await eu(`16 PSYCHE IS AN ASTEROID IN OUR SOLAR SYSTEM.
    EXPLORE THIS SITE TO LEARN ABOUT PSYCHE,
     ITS ORIGIN, ORBIT, AND WHAT MAKES IT UNIQUE
`, o, a, 0.4, r, null, "#FFA500");
      h.material.uniforms.opacity.value = 0, ft.to(h.material.uniforms.opacity, {
        value: 1,
        duration: 2.5,
        delay: 4
      }), Rr("asteroid", ut("res/models/psyche_new.glb"), {
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
      }, r, (f) => {
        l();
      }), setTimeout(() => c("Model load timeout"), 1e4);
    }).then(() => {
      console.log("section 1 loaded");
    }).catch((l) => {
      console.error("Error loading Section 1:", l);
    });
  }
  function GE(r, e, t, n) {
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
        const { buttonMesh: c } = Yi("CLICK HERE TO LEARN HOW PSYCHE GOT ITS NAME!", s, o, 0.7, r, () => {
          console.log("Origin button clicked."), vE();
        }), u = new wr(), h = new ee();
        window.addEventListener("mousemove", (f) => {
          const d = n.domElement.getBoundingClientRect();
          h.x = (f.clientX - d.left) / d.width * 2 - 1, h.y = -((f.clientY - d.top) / d.height) * 2 + 1, u.setFromCamera(h, e);
          const _ = u.intersectObjects(qi);
          n.domElement.style.cursor = _.length > 0 ? "pointer" : "default";
        }), a();
      } catch (c) {
        l(c);
      }
    });
  }
  let ou = null, WE = Date.now(), Tm = 0;
  function XE(r, e, t, n) {
    return new Promise((i, s) => {
      var _a2;
      const o = (_a2 = t[3]) == null ? void 0 : _a2.position;
      if (!o) {
        console.error("Section 3 position not found."), s("Section 3 position not found.");
        return;
      }
      const a = new Ca(8019774, 15);
      a.position.set(-150, 150, 13);
      const l = new gt();
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
      }, f = {
        x: 0.2,
        y: 0,
        z: 0
      };
      try {
        Rr("Jr", ut("res/models/Jr.glb"), u, 9, f, null, r, (_) => {
          ou = _, Tm = _.position.y;
        }), Yi("EXPLORE THE PSYCHE Jr KIDS EXPERIENCE", c, h, 0.7, r, () => {
          const _ = ut("/PsycheJR/kids.html");
          window.open(_, "_blank");
        }), i();
      } catch (_) {
        console.error("Error setting up Section 3:", _), s(_);
      }
      const d = new Ca(16777215, 1.5);
      d.position.set(o.x, o.y, o.z), d.target.position.set(u.x, u.y, u.z), r.add(d), r.add(d.target);
    });
  }
  function qE(r, e) {
    const n = Cr() === 3;
    for (let i = 0; i < e.children.length; i++) {
      const s = e.children[i];
      s.userData && s.userData.section3Element && (s.visible = n);
    }
    if (ou && n) {
      const i = (Date.now() - WE) * 1e-3;
      ou.position.y = Tm + Math.sin(i * 2) * 0.2;
    }
  }
  function YE(r, e, t, n) {
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
        Rr("Satellite", ut("res/models/satellite.glb"), o, 0.75, l, {
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
        const { buttonMesh: h } = Yi("EXPLORE THE MISSION WEBSITE", s, a, 0.7, r, () => {
          window.open("https://psyche.asu.edu/", "_blank"), console.log("Psyche Jr button clicked.");
        }), f = new wr(), d = new ee();
        window.addEventListener("mousemove", (_) => {
          const g = n.domElement.getBoundingClientRect();
          d.x = (_.clientX - g.left) / g.width * 2 - 1, d.y = -((_.clientY - g.top) / g.height) * 2 + 1, f.setFromCamera(d, e);
          const m = f.intersectObjects(qi);
          n.domElement.style.cursor = m.length > 0 ? "pointer" : "default";
        }), c();
      } catch (h) {
        console.error("Error loading Section 5:", h), u(h);
      }
    });
  }
  function KE(r, e, t, n) {
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
        Rr("Surface Slice", ut("res/models/PsycheSlice.glb"), l, 1.4, u, null, r, () => {
          console.log("loaded model");
        }), Yi("Explore the Surface of Psyche", a, c, 0.7, r, () => {
          window.open(ut("/PsycheJR/surface2.html")), console.log("Surface button clicked.");
        }).then(({ textMesh: h, buttonMesh: f }) => {
          const d = f.material.emissive.clone(), _ = f.material.emissiveIntensity, g = new wr(), m = new ee();
          window.addEventListener("mousemove", (p) => {
            const y = n.domElement.getBoundingClientRect();
            m.x = (p.clientX - y.left) / y.width * 2 - 1, m.y = -((p.clientY - y.top) / y.height) * 2 + 1, g.setFromCamera(m, e), g.intersectObjects([
              f
            ]).length > 0 ? ($u(f, {
              color: "#ff9900",
              intensity: 2
            }), n.domElement.style.cursor = "pointer") : (f.material.emissive = d, f.material.emissiveIntensity = _, f.material.needsUpdate = true, n.domElement.style.cursor = "default");
          });
        }), i();
      } catch (h) {
        console.error("Error setting up Section 3:", h), s(h);
      }
    });
  }
  function $E(r, e) {
    const n = Cr() === 3;
    for (let i = 0; i < e.children.length; i++) {
      const s = e.children[i];
      s.userData && s.userData.section3Element && (s.visible = n);
    }
  }
  function jE(r, e, t, n) {
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
    }, a = {
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
        Rr("location pin", ut("res/models/navigation_pin.glb"), o, 1, l, {
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
        const { buttonMesh: h } = Yi("EXPLORE PSYCHE'S LOCATION", s, a, 0.7, r, () => {
          NE(), console.log("Location button clicked.");
        });
        $u(h, {
          color: "#ff9900",
          intensity: 2
        });
        const f = new wr(), d = new ee();
        window.addEventListener("mousemove", (_) => {
          const g = n.domElement.getBoundingClientRect();
          d.x = (_.clientX - g.left) / g.width * 2 - 1, d.y = -((_.clientY - g.top) / g.height) * 2 + 1, f.setFromCamera(d, e);
          const m = f.intersectObjects(qi);
          n.domElement.style.cursor = m.length > 0 ? "pointer" : "default";
        }), c();
      } catch (h) {
        u(h);
      }
    });
  }
  const md = [];
  function ZE(r, e) {
    if (md.length === 0) return;
    const n = Cr() === 8;
    md.forEach((i) => {
      i.visible !== n && (i.visible = n);
    });
  }
  let gd = [], la = false;
  function JE(r, e, t, n) {
    return new Promise((i, s) => {
      try {
        const o = new Er(40, 20, 5), a = new Hn({
          color: 31743,
          transparent: false
        }), l = new Rt(o, a);
        l.position.set(200, 300, -110), l.userData.section9Element = true, r.add(l);
        const c = [];
        c.push(l);
        const u = document.createElement("canvas");
        u.width = 256, u.height = 128;
        const h = u.getContext("2d");
        h.fillStyle = "#007bff", h.fillRect(0, 0, u.width, u.height), h.font = "bold 24px Arial", h.fillStyle = "white", h.textAlign = "center", h.textBaseline = "middle", h.fillText("Escape Velocity", u.width / 2, u.height / 2);
        const f = new M_(u), d = new Hn({
          map: f,
          transparent: true
        }), _ = new To(50, 25), g = new Rt(_, d);
        g.position.set(200, 300, -107), g.userData.section9Element = true, r.add(g), c.push(g);
        const m = new Ru(16777215, 2, 200);
        m.position.set(200, 300, -100), m.userData.section9Element = true, r.add(m), c.push(m);
        const p = new ip(16777215, 0.5);
        p.userData.section9Element = true, r.add(p), c.push(p), tu(l, () => {
          nu(async () => {
            const { showEscapeVelocityViewport: v } = await import("./viewportescapevelocity-CmuqUYe2.js");
            return {
              showEscapeVelocityViewport: v
            };
          }, []).then(({ showEscapeVelocityViewport: v }) => {
            v();
          }).catch((v) => {
            console.error("Failed to load Escape Velocity viewport:", v);
          });
        }), tu(g, () => {
          nu(async () => {
            const { showEscapeVelocityViewport: v } = await import("./viewportescapevelocity-CmuqUYe2.js");
            return {
              showEscapeVelocityViewport: v
            };
          }, []).then(({ showEscapeVelocityViewport: v }) => {
            v();
          }).catch((v) => {
            console.error("Failed to load Escape Velocity viewport:", v);
          });
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
  function QE(r, e) {
    if (gd.length === 0) return;
    const n = Cr() === 9;
    gd.forEach((i) => {
      i.visible !== n && (i.visible = n);
    }), n && !la ? setTimeout(() => {
      showEscapeVelocityViewport(), la = true;
    }, 500) : !n && la && (hideEscapeVelocityViewport(), la = false);
  }
  const Em = {
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
  class Ao {
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
  const eb = new Va(-1, 1, 1, -1, 0, 1);
  class tb extends cn {
    constructor() {
      super(), this.setAttribute("position", new Ot([
        -1,
        3,
        0,
        -1,
        -1,
        0,
        3,
        -1,
        0
      ], 3)), this.setAttribute("uv", new Ot([
        0,
        2,
        0,
        0,
        2,
        0
      ], 2));
    }
  }
  const nb = new tb();
  class bm {
    constructor(e) {
      this._mesh = new Rt(nb, e);
    }
    dispose() {
      this._mesh.geometry.dispose();
    }
    render(e) {
      e.render(this._mesh, eb);
    }
    get material() {
      return this._mesh.material;
    }
    set material(e) {
      this._mesh.material = e;
    }
  }
  class ib extends Ao {
    constructor(e, t) {
      super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof Gt ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = wa.clone(e.uniforms), this.material = new Gt({
        name: e.name !== void 0 ? e.name : "unspecified",
        defines: Object.assign({}, e.defines),
        uniforms: this.uniforms,
        vertexShader: e.vertexShader,
        fragmentShader: e.fragmentShader
      })), this.fsQuad = new bm(this.material);
    }
    render(e, t, n) {
      this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
    }
    dispose() {
      this.material.dispose(), this.fsQuad.dispose();
    }
  }
  class _d extends Ao {
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
  class rb extends Ao {
    constructor() {
      super(), this.needsSwap = false;
    }
    render(e) {
      e.state.buffers.stencil.setLocked(false), e.state.buffers.stencil.setTest(false);
    }
  }
  class sb {
    constructor(e, t) {
      if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
        const n = e.getSize(new ee());
        this._width = n.width, this._height = n.height, t = new On(this._width * this._pixelRatio, this._height * this._pixelRatio, {
          type: xi
        }), t.texture.name = "EffectComposer.rt1";
      } else this._width = t.width, this._height = t.height;
      this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = true, this.passes = [], this.copyPass = new ib(Em), this.copyPass.material.blending = _i, this.clock = new T0();
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
          _d !== void 0 && (o instanceof _d ? n = true : o instanceof rb && (n = false));
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
  class ob extends Ao {
    constructor(e, t, n = null, i = null, s = null) {
      super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = s, this.clear = true, this.clearDepth = false, this.needsSwap = false, this._oldClearColor = new Re();
    }
    render(e, t, n) {
      const i = e.autoClear;
      e.autoClear = false;
      let s, o;
      this.overrideMaterial !== null && (o = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())), this.clearAlpha !== null && (s = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == true && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear === true && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(s), this.overrideMaterial !== null && (this.scene.overrideMaterial = o), e.autoClear = i;
    }
  }
  const ab = {
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
        value: new Re(0)
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
  class ws extends Ao {
    constructor(e, t, n, i) {
      super(), this.strength = t !== void 0 ? t : 1, this.radius = n, this.threshold = i, this.resolution = e !== void 0 ? new ee(e.x, e.y) : new ee(256, 256), this.clearColor = new Re(0, 0, 0), this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
      let s = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2);
      this.renderTargetBright = new On(s, o, {
        type: xi
      }), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = false;
      for (let h = 0; h < this.nMips; h++) {
        const f = new On(s, o, {
          type: xi
        });
        f.texture.name = "UnrealBloomPass.h" + h, f.texture.generateMipmaps = false, this.renderTargetsHorizontal.push(f);
        const d = new On(s, o, {
          type: xi
        });
        d.texture.name = "UnrealBloomPass.v" + h, d.texture.generateMipmaps = false, this.renderTargetsVertical.push(d), s = Math.round(s / 2), o = Math.round(o / 2);
      }
      const a = ab;
      this.highPassUniforms = wa.clone(a.uniforms), this.highPassUniforms.luminosityThreshold.value = i, this.highPassUniforms.smoothWidth.value = 0.01, this.materialHighPassFilter = new Gt({
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
      const u = Em;
      this.copyUniforms = wa.clone(u.uniforms), this.blendMaterial = new Gt({
        uniforms: this.copyUniforms,
        vertexShader: u.vertexShader,
        fragmentShader: u.fragmentShader,
        blending: Ma,
        depthTest: false,
        depthWrite: false,
        transparent: true
      }), this.enabled = true, this.needsSwap = false, this._oldClearColor = new Re(), this.oldClearAlpha = 1, this.basic = new Hn(), this.fsQuad = new bm(null);
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
      for (let l = 0; l < this.nMips; l++) this.fsQuad.material = this.separableBlurMaterials[l], this.separableBlurMaterials[l].uniforms.colorTexture.value = a.texture, this.separableBlurMaterials[l].uniforms.direction.value = ws.BlurDirectionX, e.setRenderTarget(this.renderTargetsHorizontal[l]), e.clear(), this.fsQuad.render(e), this.separableBlurMaterials[l].uniforms.colorTexture.value = this.renderTargetsHorizontal[l].texture, this.separableBlurMaterials[l].uniforms.direction.value = ws.BlurDirectionY, e.setRenderTarget(this.renderTargetsVertical[l]), e.clear(), this.fsQuad.render(e), a = this.renderTargetsVertical[l];
      this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, e.setRenderTarget(this.renderTargetsHorizontal[0]), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.blendMaterial, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, s && e.state.buffers.stencil.setTest(true), this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(n), this.fsQuad.render(e)), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e.autoClear = o;
    }
    getSeparableBlurMaterial(e) {
      const t = [];
      for (let n = 0; n < e; n++) t.push(0.39894 * Math.exp(-0.5 * n * n / (e * e)) / e);
      return new Gt({
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
      return new Gt({
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
  ws.BlurDirectionX = new ee(1, 0);
  ws.BlurDirectionY = new ee(0, 1);
  function lb(r, e = {
    density: 1
  }) {
    const t = new cn(), n = [], i = 4e3, s = 6e3, o = Math.floor(5e3 * e.density);
    for (let c = 0; c < o; c++) {
      let u, h, f, d;
      do
        u = (Math.random() - 0.5) * s * 2, h = (Math.random() - 0.5) * s * 2, f = (Math.random() - 0.5) * s * 2, d = Math.sqrt(u * u + h * h + f * f);
      while (d < i);
      n.push(u, h, f);
    }
    t.setAttribute("position", new Ot(n, 3));
    const a = new Su({
      color: 16777164,
      size: 5.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 1,
      blending: Ma
    }), l = new qd(t, a);
    r.add(l);
  }
  function cb(r, e, t, n = 2) {
    const i = new bu(6, 32, 32), s = new Eo({
      emissive: new Re(16777164),
      emissiveIntensity: 3,
      roughness: 0.1
    }), o = new Rt(i, s);
    o.position.set(-400, 250, -500), r.add(o);
    const a = new Ru(16755200, 10, 500);
    a.position.copy(o.position), r.add(a);
    const l = new sb(e);
    l.addPass(new ob(r, t));
    const c = new ws(new ee(window.innerWidth, window.innerHeight), n, 0.4, 1.2);
    return l.addPass(c), l;
  }
  function ub(r) {
    const e = document.createElement("div");
    e.id = "carousel-nav", document.body.appendChild(e);
    let t = 1;
    function n() {
      e.innerHTML = "";
      const l = 3;
      for (let c = -3; c <= l; c++) {
        const u = (t + c + r.length) % r.length, h = Math.abs(c), f = document.createElement("div");
        f.className = "carousel-item", f.textContent = r[u].name, c === 0 ? f.classList.add("active") : (f.style.opacity = `${1 - h * 0.2}`, f.style.transform = `scale(${1 - h * 0.05})`), f.addEventListener("click", () => {
          t = u, Sa(u, r[u].position), n();
        }), e.appendChild(f);
      }
    }
    window.addEventListener("keydown", (l) => {
      if (l.key === "ArrowDown") t = (t + 1) % r.length;
      else if (l.key === "ArrowUp") t = (t - 1 + r.length) % r.length;
      else return;
      Sa(t, r[t].position), n();
    });
    const i = document.createElement("div");
    i.id = "ref-icon-wrapper", i.style.position = "fixed", i.style.bottom = "30px", i.style.left = "30px", i.style.display = "flex", i.style.alignItems = "center", i.style.gap = "10px", i.style.cursor = "pointer", i.style.zIndex = "1000";
    const s = document.createElement("img");
    s.id = "ref-icon", s.src = ut("/res/icons/link-duo.png"), s.alt = "References", s.style.width = "36px", s.style.height = "36px", s.style.transition = "transform 0.2s ease";
    const o = document.createElement("span");
    o.id = "ref-label", o.textContent = "REFERENCES", o.style.fontSize = "0.9rem", o.style.fontWeight = "bold", o.style.fontFamily = "sans-serif", o.style.color = "#fff", o.style.opacity = "0", o.style.transform = "translateX(-10px)", o.style.transition = "opacity 0.3s ease, transform 0.3s ease", o.style.whiteSpace = "nowrap", i.appendChild(s), i.appendChild(o), document.body.appendChild(i), i.addEventListener("mouseenter", () => {
      s.style.transform = "scale(1.05)", o.style.opacity = "1", o.style.transform = "translateX(0)";
    }), i.addEventListener("mouseleave", () => {
      s.style.transform = "scale(1)", o.style.opacity = "0", o.style.transform = "translateX(-10px)";
    }), i.addEventListener("click", () => {
      Sa(0);
    }), n();
    function a() {
      const l = Cr();
      l !== t && (t = l, n()), requestAnimationFrame(a);
    }
    a();
  }
  function hb() {
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
        name: "PSYCHE NAME",
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
    ub(e);
    const t = new h_(), n = new $t(75, window.innerWidth / window.innerHeight, 0.1, 5e3);
    n.position.set(0, 0, 13);
    const i = new mM({
      antialias: true
    });
    i.setSize(window.innerWidth, window.innerHeight), i.setPixelRatio(window.devicePixelRatio), document.getElementById("canvas-container").appendChild(i.domElement);
    const s = new ip(16777215, 0.5);
    t.add(s);
    const o = new Ca(10264748, 3);
    o.position.set(-15, 5, 5), t.add(o), BE(n, e, i);
    const a = navigator.hardwareConcurrency < 4 || window.devicePixelRatio < 1.5, l = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent), c = a ? 0.5 : 1, u = a ? 1 : 2, h = document.getElementById("debug-panel");
    h.style.display = "none";
    function f() {
      const y = Cr();
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
    function d() {
      requestAnimationFrame(d), h.hidden || f(), _ ? _.render() : i.render(t, n), qE(n, t), LE(n, t), ZE(), $E(n, t), QE();
    }
    gE(n, t, i);
    const _ = cb(t, i, n, u), g = [
      VE(t, n, e),
      HE(t, n, e),
      GE(t, n, e, i),
      XE(t, n, e),
      PE(t, n, e, i),
      YE(t, n, e, i),
      AE(t, n, e, i),
      KE(t, n, e, i),
      jE(t, n, e, i),
      JE(t)
    ];
    let m = 0;
    const p = g.length;
    g.forEach((y, v) => {
      y.then(() => {
        console.log(`Section ${v} loaded`), m++;
        const x = m / p * 100;
        r.style.width = `${x}%`, m === p && (console.log("All sections loaded."), lb(t, {
          density: c
        }), _E(n, i), kE(), d(), fb(), document.getElementById("cn-icon-wrapper").style.display = "flex");
      }).catch((x) => {
        console.error(`Error loading section ${v}:`, x);
      });
    });
  }
  function fb() {
    const r = document.getElementById("loading-screen");
    r.style.transition = "opacity 0.5s ease", r.style.opacity = "0", setTimeout(() => r.remove(), 500);
  }
  db();
  hb();
  function db() {
    window.addEventListener("resize", () => {
      console.warn("Resize event fired, but camera or renderer is not defined.");
    });
  }
})();
export {
  __tla,
  ft as g,
  qa as m
};
