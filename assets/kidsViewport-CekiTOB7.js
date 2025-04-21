import { a as f, b as w, c as v, d as g, r as x, e as E, f as C, i as $, g as b, h as S, j as z, k as W, l as p } from "./index-CadPt2VN.js";
let e = null, o = null, a = null, m = null;
function u() {
  const n = window.innerWidth, s = window.innerHeight, l = window.devicePixelRatio || 1;
  console.log(`Screen size: ${n}x${s}, Pixel ratio: ${l}`);
  let t, i, r;
  return n === 2388 && s === 1668 || s === 2388 && n === 1668 ? (console.log('iPad Pro 11" detected'), t = "90%", r = "2000px", i = "90vh") : n >= 2e3 ? (t = "85%", r = "2400px", i = "85vh") : n >= 1600 ? (t = "88%", r = "1900px", i = "88vh") : n >= 1200 ? (t = "90%", r = "1500px", i = "90vh") : n >= 992 ? (t = "92%", r = "1150px", i = "92vh") : n >= 768 ? (t = "95%", r = "950px", i = "95vh") : (t = "98%", r = "100%", i = "98vh"), { width: t, maxWidth: r, height: i };
}
function d() {
  if (!e) return;
  const { width: n, maxWidth: s, height: l } = u();
  if (e.style.width = n, e.style.maxWidth = s, e.style.height = l, console.log(`Viewport resized to: width=${n}, maxWidth=${s}, height=${l}`), o && o.contentDocument) try {
    const t = o.contentDocument || o.contentWindow.document;
    if (t.getElementById("container1")) {
      const r = Math.min(1, window.innerWidth / 1920);
      let c = t.getElementById("responsive-scaling");
      c || (c = t.createElement("style"), c.id = "responsive-scaling", t.head.appendChild(c)), c.textContent = `
                    #container1 {
                        transform: scale(${r});
                        transform-origin: center top;
                        width: calc(100% / ${r});
                        margin-left: auto;
                        margin-right: auto;
                    }
                    
                    #astronautCar {
                        max-width: 100%;
                        height: auto;
                    }
                `, console.log(`Applied responsive scaling: ${r}`);
    }
  } catch (t) {
    console.error("Could not modify iframe content:", t);
  }
}
function k() {
  if (e) {
    e.style.display = "flex", d();
    return;
  }
  console.log("Creating kids viewport"), e = document.createElement("div"), e.id = "kids-viewport-container", f(e);
  const { width: n, maxWidth: s, height: l } = u();
  e.style.width = n, e.style.maxWidth = s, e.style.height = l;
  const t = document.createElement("div");
  w(t);
  const i = document.createElement("h2");
  i.textContent = "Psyche Jr - Kids Space Explorer", v(i), a = document.createElement("button"), a.textContent = "\u2715", g(a), t.appendChild(i), t.appendChild(a), e.appendChild(t), o = document.createElement("iframe"), o.src = x("/PsycheJR/kids.html"), E(o), C(document), o.onerror = () => {
    console.error("Failed to load kids iframe content");
  }, o.onload = () => {
    console.log("Kids iframe loaded successfully"), $(o), d();
    try {
      const r = o.contentDocument || o.contentWindow.document;
      new MutationObserver(() => {
        d();
      }).observe(r.body, { childList: true, subtree: true });
    } catch (r) {
      console.error("Could not set up MutationObserver:", r);
    }
  }, e.appendChild(o), document.body.appendChild(e), b(e), S(e), z(e, t, o), W(e), a.addEventListener("click", () => {
    p(e, y);
  }), document.addEventListener("keydown", h), window.addEventListener("resize", d), m = new ResizeObserver((r) => {
    console.log("ResizeObserver detected size change"), d();
  }), m.observe(document.body);
}
function P() {
  e && p(e, () => {
    e.style.display = "none", e.style.opacity = 1, e.style.transform = "translate(-50%, -50%) scale(1)";
  });
}
function h(n) {
  n.key === "Escape" && p(e, y);
}
function y() {
  e && (a.removeEventListener("click", P), document.removeEventListener("keydown", h), window.removeEventListener("resize", d), m && (m.disconnect(), m = null), document.body.removeChild(e), e = null, o = null, a = null);
}
window.setKidsViewportSize = function(n, s) {
  if (!e) {
    console.warn("Kids viewport is not currently active");
    return;
  }
  if (console.log(`Manually setting viewport size to ${n}x${s}`), e.style.width = `${n}px`, e.style.maxWidth = `${n}px`, e.style.height = `${s}px`, e.style.transform = "translate(-50%, -50%)", o && o.contentDocument) try {
    const t = (o.contentDocument || o.contentWindow.document).getElementById("container1");
    if (t) {
      const i = Math.min(1, n / 1920);
      t.style.transform = `scale(${i})`, t.style.transformOrigin = "center top", t.style.width = `calc(100% / ${i})`, console.log(`Applied manual scaling: ${i}`);
    }
  } catch (l) {
    console.error("Could not modify iframe content:", l);
  }
  return `Viewport size set to ${n}x${s}`;
};
window.resetKidsViewportSize = function() {
  if (!e) {
    console.warn("Kids viewport is not currently active");
    return;
  }
  return d(), "Viewport size reset to responsive mode";
};
export {
  y as destroyKidsViewport,
  P as hideKidsViewport,
  k as showKidsViewport
};
