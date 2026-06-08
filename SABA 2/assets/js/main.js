/* ============================================================
   SABA CORNELL - combined script bundle
   (logos + interaction layer + per-page init)
   ============================================================ */

/* ---------- Employer logos + marquee ---------- */
/* Employer logos */
var logos = [
    "https://static.wixstatic.com/media/354f79_45081a0f57394fbb8c58041bfa3d60d1~mv2.jpg/v1/crop/x_12,y_0,w_182,h_109/fill/w_210,h_124,al_c,q_80,enc_avif,quality_auto/Screenshot%202025-08-17%20at%209_28_edited.jpg",
    "https://static.wixstatic.com/media/354f79_f7102d57ad954fe49b38836055fcfac5~mv2.png/v1/fill/w_210,h_124,al_c,q_85,enc_avif,quality_auto/Screenshot%202025-08-17%20at%209_32_55%E2%80%AFPM.png",
    "https://static.wixstatic.com/media/a01eb8_df4688f50f79484bb0d76258ff2be0ca~mv2.png/v1/fill/w_210,h_124,al_c,q_85,enc_avif,quality_auto/Deloitte.png",
    "https://static.wixstatic.com/media/354f79_6f66f7f99b7146aeac32006069cc6a42~mv2.jpg/v1/fill/w_210,h_124,al_c,q_80,enc_avif,quality_auto/Screenshot%202025-08-20%20at%201_29_edited.jpg",
    "https://static.wixstatic.com/media/354f79_a1b08e96e0ed40a6be93dc5074d90b60~mv2.jpg/v1/fill/w_210,h_124,al_c,q_80,enc_avif,quality_auto/Screenshot%202025-08-17%20at%209_edited_edited.jpg",
    "https://static.wixstatic.com/media/354f79_6077328c1d7b4b69b486da5242f33899~mv2.jpg/v1/fill/w_210,h_124,al_c,q_80,enc_avif,quality_auto/Screenshot%202025-08-17%20at%209_33_edited.jpg",
    "https://static.wixstatic.com/media/354f79_f57787f1a229495eb1e2a1aef4286a2d~mv2.jpg/v1/fill/w_210,h_124,al_c,q_80,enc_avif,quality_auto/Screenshot%202025-08-17%20at%209_55_edited.jpg",
    "https://static.wixstatic.com/media/354f79_1352aea4688c4bb192cf44e82fbf13aa~mv2.jpg/v1/fill/w_210,h_124,al_c,q_80,enc_avif,quality_auto/Guggenheim_edited.jpg",
    "https://static.wixstatic.com/media/354f79_625541ffe8994c9ca3972216f2e71d2b~mv2.png/v1/fill/w_210,h_124,al_c,q_85,enc_avif,quality_auto/Screenshot%202025-08-17%20at%209_30_11%E2%80%AFPM.png",
    "https://static.wixstatic.com/media/354f79_666b38ac176d441faaed60e5467b0223~mv2.png/v1/fill/w_210,h_124,al_c,q_85,enc_avif,quality_auto/Screenshot%202025-08-17%20at%209_35_44%E2%80%AFPM.png",
    "https://static.wixstatic.com/media/a01eb8_dc03aa690aa44394a0f3ebe76e81591e~mv2.png/v1/fill/w_210,h_124,al_c,q_85,enc_avif,quality_auto/RBC.png",
    "https://static.wixstatic.com/media/354f79_8c3456f80e544992a38bfe4d5f70e984~mv2.jpg/v1/fill/w_210,h_124,al_c,q_80,enc_avif,quality_auto/Screenshot%202025-08-17%20at%209_49_edited.jpg",
    "https://static.wixstatic.com/media/354f79_26329bb002724227a8248dc783677faf~mv2.png/v1/fill/w_210,h_124,al_c,q_85,enc_avif,quality_auto/Screenshot%202025-08-17%20at%209_30_edited.png",
    "https://static.wixstatic.com/media/354f79_68a510e510db4cdd9690a7d634dba1d4~mv2.jpg/v1/fill/w_210,h_124,al_c,q_80,enc_avif,quality_auto/Screenshot%202025-08-17%20at%209_42_edited.jpg",
    "https://static.wixstatic.com/media/354f79_424e291fccad4a31bc5a909ebbf8930b~mv2.jpg/v1/fill/w_210,h_124,al_c,q_80,enc_avif,quality_auto/Screenshot%202025-08-17%20at%209_56_edited.jpg",
    "https://static.wixstatic.com/media/354f79_4ace2a1d0839460eadf8fc1dee46dd59~mv2.png/v1/fill/w_210,h_124,al_c,q_85,enc_avif,quality_auto/Screenshot%202025-08-17%20at%209_edited.png",
    "https://static.wixstatic.com/media/354f79_a3becdd3e9bd4a788d9d8d89b1b5f3b0~mv2.jpg/v1/fill/w_210,h_124,al_c,q_80,enc_avif,quality_auto/Screenshot%202025-08-17%20at%209_31_edited.jpg",
    "https://static.wixstatic.com/media/354f79_5973b738cfd049a0987e4c1c3390873f~mv2.jpg/v1/fill/w_210,h_124,al_c,q_80,enc_avif,quality_auto/Screenshot%202025-08-17%20at%2010_35_edited_jp.jpg",
    "https://static.wixstatic.com/media/a01eb8_683490ce99f54f53804c22232d231022~mv2.png/v1/fill/w_210,h_124,al_c,q_85,enc_avif,quality_auto/Toast.png",
    "https://static.wixstatic.com/media/354f79_785ff170671045b9bd4aff379b60fd2e~mv2.jpg/v1/fill/w_210,h_124,al_c,q_80,enc_avif,quality_auto/Screenshot%202025-08-17%20at%209_58_edited.jpg"
  ];
function buildMarquee() {
  var lt1 = document.getElementById('lt1');
  var lt2 = document.getElementById('lt2');
  if (!lt1 || !lt2) return;
  lt1.innerHTML = ''; lt2.innerHTML = '';
  function cell(src){ var d=document.createElement("div"); d.className="logo-cell"; var im=new Image(); im.loading="lazy"; im.alt="Employer logo"; im.src=src; d.appendChild(im); return d; }
  function fill(track, arr){ arr.concat(arr).forEach(function(s){ track.appendChild(cell(s)); }); }
  var half = Math.ceil(logos.length/2);
  fill(lt1, logos.slice(0, half));
  fill(lt2, logos.slice(half));
}

/* ---------- Interaction layer ---------- */
/* ============================================================
   SABA CORNELL — interaction layer
   ============================================================ */
(function () {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- Custom cursor ---------- */
  if (fine && !reduce) {
    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cursor-dot"; ring.className = "cursor-ring";
    document.body.append(dot, ring);
    let rx = 0, ry = 0, x = 0, y = 0;
    addEventListener("mousemove", (e) => {
      x = e.clientX; y = e.clientY;
      dot.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
    }, { passive: true });
    (function loop() {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    const hot = "a,button,.person,.tl-card,.logo-cell,.btn,.ss-dots button";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hot)) ring.classList.add("is-hover");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hot)) ring.classList.remove("is-hover");
    });
  }

  /* ---------- Scroll progress bar ---------- */
  const bar = $(".progress");
  const onScrollBar = () => {
    if (!bar) return;
    const h = document.documentElement;
    const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    bar.style.width = (p * 100).toFixed(2) + "%";
  };

  /* ---------- Header scrolled state ---------- */
  const header = $(".header");
  const onScrollHeader = () => header && header.classList.toggle("scrolled", scrollY > 40);

  /* ---------- Mobile nav ---------- */
  const burger = $(".burger"), nav = $(".nav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      burger.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    $$(".nav a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open"); burger.classList.remove("open"); document.body.style.overflow = "";
    }));
  }

  /* ---------- Mouse spotlight (hero / dark sections) ---------- */
  $$("[data-spot]").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
      el.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
    }, { passive: true });
  });

  /* ---------- Reveal on scroll ---------- */
  const revEls = $$("[data-reveal]");
  if (revEls.length) {
    if (reduce) revEls.forEach(e => e.classList.add("in"));
    else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const d = en.target.dataset.delay;
            if (d) en.target.style.transitionDelay = d + "ms";
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
      revEls.forEach(e => io.observe(e));
    }
  }

  /* ---------- Hero entrance ---------- */
  const hero = $(".hero");
  if (hero) requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add("ready")));

  /* ---------- Parallax ---------- */
  const plx = $$("[data-parallax]");
  const onScrollPlx = () => {
    if (reduce) return;
    const vh = innerHeight;
    plx.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.15;
      const r = el.getBoundingClientRect();
      const off = (r.top + r.height / 2 - vh / 2) * -speed;
      el.style.transform = `translate3d(0,${off.toFixed(1)}px,0)`;
    });
  };

  /* ---------- Combined scroll handler ---------- */
  let ticking = false;
  const onScroll = () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      onScrollBar(); onScrollHeader(); onScrollPlx(); onTimeline();
      ticking = false;
    });
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll, { passive: true });

  /* ---------- Community slideshow (3.25s per slide) ---------- */
  const ss = $(".slideshow");
  if (ss) {
    const slides = $$(".slide", ss);
    const dots = $$(".ss-dots button", ss);
    const counter = $(".ss-count .cur", ss);
    const progress = $(".ss-bar", ss);
    const DUR = 3250;
    let i = 0, timer = null, t0 = 0, raf = null;

    function paint() {
      slides.forEach((s, k) => s.classList.toggle("active", k === i));
      dots.forEach((d, k) => d.classList.toggle("on", k === i));
      if (counter) counter.textContent = String(i + 1).padStart(2, "0");
    }
    function tickBar(ts) {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / DUR, 1);
      if (progress) progress.style.width = (p * 100) + "%";
      if (p < 1) raf = requestAnimationFrame(tickBar);
    }
    function go(n, manual) {
      i = (n + slides.length) % slides.length;
      paint();
      if (!reduce) { t0 = 0; cancelAnimationFrame(raf); raf = requestAnimationFrame(tickBar); }
      if (manual) restart();
    }
    function next() { go(i + 1); }
    function start() { if (!reduce) timer = setInterval(next, DUR); }
    function stop() { clearInterval(timer); cancelAnimationFrame(raf); }
    function restart() { stop(); start(); }

    dots.forEach((d, k) => d.addEventListener("click", () => go(k, true)));
    ss.addEventListener("mouseenter", () => { clearInterval(timer); });
    ss.addEventListener("mouseleave", () => { restart(); });
    paint(); start();
    if (!reduce) raf = requestAnimationFrame(tickBar);
  }

  /* ---------- People card 3D tilt + spotlight ---------- */
  if (fine && !reduce) {
    $$(".person").forEach((card) => {
      const ph = $(".ph", card);
      if (!ph) return;
      card.addEventListener("mousemove", (e) => {
        const r = ph.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        ph.style.setProperty("--px", (px * 100) + "%");
        ph.style.setProperty("--py", (py * 100) + "%");
        const rotY = (px - 0.5) * 11, rotX = (0.5 - py) * 11;
        ph.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      });
      card.addEventListener("mouseleave", () => { ph.style.transform = ""; });
    });
  }

  /* ---------- Timeline card glow ---------- */
  if (fine && !reduce) {
    $$(".tl-card").forEach((c) => {
      c.addEventListener("mousemove", (e) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--px", ((e.clientX - r.left) / r.width * 100) + "%");
        c.style.setProperty("--py", ((e.clientY - r.top) / r.height * 100) + "%");
      }, { passive: true });
    });
  }

  /* ---------- Timeline scroll progress + node activation ---------- */
  const spineFill = $(".timeline .spine .fill");
  const items = $$(".tl-item");
  function onTimeline() {
    if (!spineFill || !items.length) return;
    const spine = $(".timeline .spine");
    const sr = spine.getBoundingClientRect();
    const mid = innerHeight * 0.55;
    let fillPx = mid - sr.top;
    fillPx = Math.max(0, Math.min(fillPx, sr.height));
    spineFill.style.height = fillPx + "px";
    const fillBottom = sr.top + fillPx;
    items.forEach((it) => {
      const node = $(".tl-node", it);
      const nr = node.getBoundingClientRect();
      it.classList.toggle("active", nr.top <= fillBottom + 4);
    });
  }

  /* ---------- Count-up stats ---------- */
  const nums = $$("[data-count]");
  if (nums.length) {
    if (reduce) nums.forEach(n => n.textContent = n.dataset.count + (n.dataset.suffix || ""));
    else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target, target = parseFloat(el.dataset.count), suf = el.dataset.suffix || "";
          const dur = 1500, t0 = performance.now();
          (function step(t) {
            const p = Math.min((t - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased) + suf;
            if (p < 1) requestAnimationFrame(step);
          })(t0);
          io.unobserve(el);
        });
      }, { threshold: 0.6 });
      nums.forEach(n => io.observe(n));
    }
  }

  /* ---------- Magnetic buttons (subtle) ---------- */
  if (fine && !reduce) {
    $$(".btn").forEach((b) => {
      b.addEventListener("mousemove", (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px,${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
      });
      b.addEventListener("mouseleave", () => { b.style.transform = ""; });
    });
  }

  // initial paint
  onScroll();
})();

/* ---- Per-page initialization (multi-file build) ---- */
(function () {
  // Build the employer marquee if this page contains it.
  if (typeof buildMarquee === 'function') {
    if (document.readyState !== 'loading') buildMarquee();
    else document.addEventListener('DOMContentLoaded', buildMarquee);
  }

  // Mark the current nav link as active based on the file name.
  var path = location.pathname.split('/').pop() || 'index.html';
  if (path === '' ) path = 'index.html';
  document.querySelectorAll('.nav a, .fl').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    if (href === path || (path === 'index.html' && href === 'index.html')) {
      a.setAttribute('aria-current', 'page');
    }
  });
})();
