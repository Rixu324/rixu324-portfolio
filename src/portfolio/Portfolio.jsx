import React from "react";
import { projects } from "./projects";
import { renderPortfolio } from "./PortfolioView";
import "./portfolio.css";

export default class Portfolio extends React.Component {
  timers = new Set();
  later(callback, delay) { const id = window.setTimeout(() => { this.timers.delete(id); callback(); }, delay); this.timers.add(id); return id; }

  state = { sel: null, mobile: false, narrow: false };
  panelRef = React.createRef();
  backRef = React.createRef();
  E = 'cubic-bezier(0.16,1,0.3,1)';
  T = { TypeScript: 'TS', 'Node.js': 'NJ', Python: 'PY', 'Discord.js': 'DJ', Prisma: 'PR', PostgreSQL: 'PG', React: 'RE', 'Tailwind CSS': 'TW', 'Framer Motion': 'FM', Vercel: 'VC' };
  works = projects;
  // shape data: [type, w, h, color, stroke, depth, rotSpeed deg/s, bornAtCenter]  (sizes in stage units; w 0 = 8px dot, h 0 = hairline)
  SD = (() => { const W = '#EDEBE6', G = '#3DFFA8', O = '#FF6A3D'; return [
    ['circle', 60, 60, W, 0, 0.15, 0, 0], ['half', 34, 17, O, 0, 0.7, 7, 0], ['quarter', 26, 26, W, 0, 0.4, -5, 0], ['square', 30, 30, W, 1, 0.3, 4, 0],
    ['square', 10, 10, G, 0, 0.9, -9, 1], ['bar', 6, 46, W, 0, 0.5, 3, 0], ['bar', 3, 30, G, 0, 0.8, 0, 0], ['bar', 3, 20, W, 0, 0.8, 0, 0],
    ['bar', 3, 38, W, 0, 0.8, 0, 0], ['tri', 22, 22, W, 0, 0.6, -6, 0], ['bar', 70, 0, W, 0, 0.25, 2, 0], ['bar', 40, 0, W, 0, 0.35, -3, 0],
    ['dots', 20, 20, W, 0, 1, 0, 1], ['circle', 38, 38, W, 1, 0.45, 0, 0], ['circle', 5, 5, O, 0, 1.1, 0, 1], ['circle', 0, 0, W, 0, 1.3, 0, 1],
    ['circle', 0, 0, G, 0, 1.2, 0, 1], ['circle', 14, 14, W, 1, 0.9, 0, 1],
    ['tri', 14, 14, W, 0, 0.8, 5, 1], ['tri', 7, 7, W, 0, 1, -8, 1], ['tri', 7, 7, W, 0, 1.1, 8, 1],
    ['bar', 3, 16, W, 0, 0.9, 0, 1], ['bar', 3, 16, W, 0, 1, 0, 1], ['bar', 3, 16, W, 0, 0.7, 0, 1]]; })();
  // hero positions for the 3 extra parts, per layout
  PX = [[[-14,-36,0],[12,28,20],[34,24,-30],[-36,12,30],[6,-28,90],[42,-12,-20]], [[26,22,90],[-30,-34,0],[-6,34,45],[44,22,0],[-44,10,60],[16,-36,90]], [[-22,28,180],[30,-10,0],[-34,-2,60],[8,-34,90],[44,14,20],[-44,34,-45]]];
  // mark parts: shape index -> [kind, x, y, w, h, rot, delay] in mark units (viewBox). head/ear morph into the SVG part; 'gone' parts fly in and shrink away, then the SVG part animates in
  BT = {
    5: ['head', 50, 47.15, 100, 94.3, 0, 0],
    9: ['ear', -23.6, 22.9, 28, 28, -108, 0.08], 18: ['ear', 123.6, 22.9, 28, 28, 108, 0.12],
    7: ['gone', -18, 41, 0, 0, 90, 0.1], 8: ['gone', -18, 52, 0, 0, 90, 0.14], 21: ['gone', -18, 63, 0, 0, 90, 0.18],
    22: ['gone', 118, 41, 0, 0, 90, 0.12], 11: ['gone', 118, 52, 0, 0, 0, 0.16], 23: ['gone', 118, 63, 0, 0, 90, 0.2],
    19: ['gone', 33, 43, 0, 0, 0, 0.2], 20: ['gone', 67, 43, 0, 0, 0, 0.22], 10: ['gone', 50, 57, 0, 0, 0, 0.24], 1: ['gone', 16, -60, 0, 0, -15, 0.05],
  };
  // layouts: [x, y, rot] per shape, origin = composition centre
  P = [
    [[0,0,0],[-20,-2,0],[24,22,0],[16,-18,12],[30,-30,0],[-6,6,0],[38,6,0],[43,11,0],[48,2,0],[-30,24,0],[0,36,0],[-28,-28,45],[-40,-8,0],[22,8,0],[8,-37,0],[-45,30,0],[46,-22,0],[-34,-31,0]],
    [[10,-6,0],[10,-6,180],[-22,-24,90],[-18,14,0],[-18,14,45],[34,10,90],[-42,-4,0],[-37,1,0],[-32,-8,0],[36,-26,180],[0,-39,0],[30,30,-45],[40,-4,0],[-8,16,0],[-44,24,0],[44,34,0],[-6,-45,0],[24,-30,0]],
    [[-14,10,0],[16,-16,-45],[-36,-12,180],[20,14,45],[-40,30,0],[2,-4,45],[34,-36,90],[29,-31,90],[38,-26,90],[40,24,90],[-4,0,-45],[-30,-36,0],[12,34,0],[-28,6,0],[46,2,0],[-46,-24,0],[0,-45,0],[-8,39,0]],
  ];

  componentDidMount() {
    document.querySelector('[data-loader]').style.display = 'none';
    document.querySelectorAll('[data-rvi]').forEach(el => el.removeAttribute('data-rvi'));
    const q = new URLSearchParams(location.search);
    this.rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.mq = matchMedia('(hover: none), (max-width: 700px)');
    this.mqN = matchMedia('(max-width: 700px)');
    this.onMq = () => this.setState({ mobile: this.mq.matches, narrow: this.mqN.matches });
    this.mq.addEventListener('change', this.onMq); this.mqN.addEventListener('change', this.onMq); this.onMq();
    this.io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { this.show(e.target); this.io.unobserve(e.target); } }), { threshold: 0.15 });
    this.scan();
    const off = document.querySelector('[data-stack]');
    if (this.rm) document.querySelectorAll('[data-fs]').forEach(e => { e.style.opacity = 1; });
    this.offIo = new IntersectionObserver(es => { this.inFoot = es[0].isIntersecting; if (!this.inFoot) this.setAir(true); else if (this.stacked || this.rm) this.setAir(false); else this.drop(); }, { threshold: 0.4 });
    if (off) this.offIo.observe(off);
    this.onKey = e => { if (this.state.sel === null) return; if (e.key === 'Tab') { const items = [...this.panelRef.current.querySelectorAll('a[href], button')]; const first = items[0], last = items[items.length - 1]; if (e.shiftKey && (document.activeElement === first || document.activeElement === this.panelRef.current)) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); } } else if (e.key === 'Escape') this.close(); else if (e.key === 'ArrowLeft') this.nav(-1); else if (e.key === 'ArrowRight') this.nav(1); };
    addEventListener('keydown', this.onKey);
    this.initPointer(); this.initShapes();
    let seen = false; try { seen = !!sessionStorage.getItem('rixu_booted'); } catch { /* Storage can be unavailable in private browsing. */ }
    const play = this.props.replayLoader || q.has('replay') || (!seen && !q.has('noload') && !q.has('modal'));
    if (play && !this.rm) this.boot(); else this.heroIn();
    try { sessionStorage.setItem('rixu_booted', '1'); } catch { /* The intro remains usable without session storage. */ }
    if (q.has('modal')) this.setState({ sel: Math.min(this.works.length - 1, Math.max(0, parseInt(q.get('modal'), 10) - 1 || 0)) });
    const anchor = location.hash === '#projects' ? 'works' : location.hash.slice(1);
    if (['works', 'about', 'contact'].includes(anchor)) {
      this.later(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'instant' }), 0);
    }
  }
  componentWillUnmount() {
    document.getElementById('top')?.removeEventListener('click', this.onHeroClick);
    this.timers.forEach(clearTimeout); this.timers.clear();
    document.querySelectorAll('[data-loader], [data-loader] *, [data-hs]').forEach(el => el.getAnimations().forEach(a => a.cancel()));
    cancelAnimationFrame(this.raf); clearTimeout(this.botT); clearTimeout(this.moreT); clearTimeout(this.dropT); clearTimeout(this.heroT); clearTimeout(this.lampT); this.io.disconnect(); this.offIo.disconnect();
    this.mq.removeEventListener('change', this.onMq); this.mqN.removeEventListener('change', this.onMq); removeEventListener('keydown', this.onKey);
    removeEventListener('mousemove', this.onMove); removeEventListener('resize', this.onResize); removeEventListener('deviceorientation', this.onGyro);
    if (this.S) this.S.forEach(s => s.el.remove());
    document.documentElement.classList.remove('cc'); document.body.style.overflow = '';
  }
  componentDidUpdate(_previousProps, ps) {
    this.scan();
    if (ps.sel !== null && this.state.sel === null && this.gAct && this.gAct.isConnected) { const g = this.gAct; this.later(() => this.gSet(g, 0), 450); }
    if (ps.sel !== null && this.state.sel !== null && ps.sel !== this.state.sel) {
      const c = this.panelRef.current && this.panelRef.current.querySelector('[data-mc]');
      if (c) c.animate([{ opacity: 0, transform: this.rm ? 'none' : 'translateX(' + (this.navDir || 1) * 24 + 'px)' }, { opacity: 1, transform: 'none' }], { duration: 350, easing: this.E });
    }
    if (ps.sel === null && this.state.sel !== null) {
      this.returnFocus = document.activeElement;
      this.panelRef.current?.focus({ preventScroll: true });
      document.body.style.overflow = 'hidden';
      const p = this.panelRef.current, b = this.backRef.current, f = this.from; this.from = null;
      if (!p) return;
      b.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, easing: 'ease-out' });
      if (f && !this.rm) {
        p.animate([{ transform: this.flip(p, f), opacity: 0.5 }, { transform: 'none', opacity: 1 }], { duration: 550, easing: this.E });
        const c = p.querySelector('[data-mc]'); if (c) c.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 350, delay: 200, fill: 'backwards', easing: 'ease-out' });
      } else p.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300 });
    }
    if (ps.sel !== null && this.state.sel === null) document.body.style.overflow = '';
  }
  flip(p, f) { const r = p.getBoundingClientRect(); return 'translate(' + (f.left - r.left) + 'px,' + (f.top - r.top) + 'px) scale(' + f.width / r.width + ',' + f.height / r.height + ')'; }

  scan() {
    document.querySelectorAll('[data-rv]:not([data-rvi])').forEach(el => {
      el.setAttribute('data-rvi', '1');
      const k = el.dataset.rv, d = +(el.dataset.d || 0), tr = p => p + ' .7s ' + this.E + ' ' + d + 'ms';
      if (k === 'up') { el.style.opacity = 0; if (!this.rm) el.style.transform = 'translateY(28px)'; el.style.transition = tr('opacity') + ',' + tr('transform'); }
      if (k === 'mask') { const c = el.firstElementChild; if (this.rm) c.style.opacity = 0; else c.style.transform = 'translateY(108%)'; c.style.transition = tr('opacity') + ',' + tr('transform'); }
      if (k === 'slide') { el.style.opacity = 0; if (!this.rm) el.style.transform = 'translate(' + el.dataset.from.split(',').join('px,') + 'px)'; el.style.transition = tr('opacity') + ',' + tr('transform'); }
      if (k === 'chars') el.querySelectorAll('[data-c]').forEach(c => { c.style.opacity = 1; c.style.transform = 'none'; });
    if (k === 'pop') { const c = el.firstElementChild; if (this.rm) c.style.opacity = 0; else c.style.clipPath = 'circle(0% at 50% 50%)'; c.style.transition = tr('opacity') + ',clip-path .9s ' + this.E + ' ' + d + 'ms'; }
    if (k === 'clip') { const c = el.firstElementChild; if (this.rm) c.style.opacity = 0; else c.style.clipPath = 'inset(100% 0 0 0)'; c.style.transition = tr('opacity') + ',clip-path .9s ' + this.E + ' ' + d + 'ms'; }
      if (k === 'line') { if (this.rm) el.style.opacity = 0; else { el.style.transform = 'scaleX(0)'; el.style.transformOrigin = '0 50%'; } el.style.transition = tr('opacity') + ',' + tr('transform'); }
      if (k === 'chars') el.querySelectorAll('[data-c]').forEach((c, j) => { c.style.opacity = 0; if (!this.rm) c.style.transform = 'translateY(105%) rotate(10deg)'; const t = (this.rm ? 0 : j * 40) + 'ms'; c.style.transition = 'opacity .5s ease ' + t + ',transform .7s ' + this.E + ' ' + t; });
      if (k === 'scan') el.style.opacity = 0;
      this.io.observe(el);
    });
  }
  show(el) {
    const k = el.dataset.rv, d = +(el.dataset.d || 0);
    if (k === 'up' || k === 'slide' || k === 'line') { el.style.opacity = 1; el.style.transform = 'none'; }
    if (k === 'chars') el.querySelectorAll('[data-c]').forEach(c => { c.style.opacity = 1; c.style.transform = 'none'; });
    if (k === 'pop') { const c = el.firstElementChild; c.style.opacity = 1; if (!this.rm) { c.style.clipPath = 'circle(76% at 50% 50%)'; this.later(() => { c.style.clipPath = ''; }, (+el.dataset.d || 0) + 1000); } }
    if (k === 'clip') { const c = el.firstElementChild; c.style.opacity = 1; c.style.clipPath = 'inset(0 0 0 0)'; }
    if (k === 'mask') { const c = el.firstElementChild; c.style.opacity = 1; c.style.transform = 'none'; const t = el.querySelector('[data-tint]'); if (t) { t.style.transition = 'color .5s ease ' + (d + 200) + 'ms'; t.style.color = '#3DFFA8'; } }
    if (k === 'scan' && !this.rm) el.animate([{ transform: 'translateX(-100%)', opacity: 1 }, { transform: 'translateX(100%)', opacity: 1 }], { duration: 900, easing: 'cubic-bezier(.4,0,.2,1)' });
  }
  ic(e, on) {
    const ul = e.currentTarget.querySelector('[data-ul]'); if (ul) ul.style.transform = on ? 'scaleX(1)' : 'scaleX(0)';
    const el = e.currentTarget.querySelector('[data-ic]'); if (!el) return;
    const k = el.dataset.ic;
    if (k === 'circle') { el.style.background = on ? '#EDEBE6' : 'transparent'; if (!this.rm) el.style.transform = on ? 'rotate(180deg) scale(1.08)' : 'none'; }
    else if (!this.rm) el.style.transform = on ? 'rotate(' + (k === 'tri' ? 90 : k === 'half' ? 180 : 45) + 'deg)' : 'none';
    else el.style.opacity = on ? 0.6 : 1;
  }
  aboutPx() {
    const has = this.mx > -9000, nx = has ? (this.mx / innerWidth - 0.5) * 2 : this.gx, ny = has ? (this.my / innerHeight - 0.5) * 2 : this.gy;
    document.querySelectorAll('[data-px]').forEach(el => {
      const d = +el.dataset.px, p = el._p || (el._p = [0, 0]);
      p[0] += (-nx * d * 16 - p[0]) * 0.08; p[1] += (-ny * d * 16 - p[1]) * 0.08;
      el.style.transform = 'translate(' + p[0].toFixed(2) + 'px,' + p[1].toFixed(2) + 'px)';
    });
  }
  setAir(on) {
    if (this.air === on) return; this.air = on;
    const q = s => document.querySelector(s), dot = q('[data-lampdot]'), fl = q('[data-flamp]');
    if (dot) {
      dot.style.background = on ? '#FF3B47' : '#2A2A2E'; dot.style.animation = on ? 'lampPulse 2.4s ease-in-out infinite' : 'none';
      q('[data-lampon]').style.display = on ? '' : 'none'; q('[data-lampoff]').style.display = on ? 'none' : '';
    }
    if (!fl) return;
    clearTimeout(this.lampT);
    const lab = o => { q('[data-fon]').style.display = o ? '' : 'none'; q('[data-foff]').style.display = o ? 'none' : ''; };
    fl.style.background = on ? '#3DFFA8' : '#6A6A6A';
    if (on) lab(true);
    else { fl.animate([{ background: '#3DFFA8' }, { background: '#FF3B47', offset: 0.5 }, { background: '#6A6A6A' }], { duration: 600, easing: 'linear' }); this.lampT = this.later(() => lab(false), 300); }
  }
  drop() {
    const st = document.querySelector('[data-stack]'); if (!st || this.dropping) return;
    this.dropping = true;
    const els = [...st.querySelectorAll('[data-fs]')], n = els.length, H = st.getBoundingClientRect().bottom + 240;
    els.forEach((el, i) => {
      const last = i === n - 1, r = (i % 2 ? 1 : -1) * (30 + i * 14);
      el.getAnimations().forEach(a => a.cancel()); el.style.opacity = 1;
      el.animate([
        { transform: 'translateY(' + -H + 'px) rotate(' + r + 'deg)', easing: 'cubic-bezier(.5,0,.9,.6)' },
        { transform: 'none', offset: 0.6, easing: 'ease-out' },
        { transform: 'translateY(' + (last ? -10 : -22) + 'px) rotate(' + r * 0.05 + 'deg)', offset: 0.78, easing: 'ease-in' },
        { transform: 'none' }], { duration: 900, delay: i * 150 + (last ? 350 : 0), fill: 'backwards' });
    });
    this.dropT = this.later(() => {
      els.slice(0, n - 1).forEach(el => el.animate([{ transform: 'none' }, { transform: 'translateY(3px)' }, { transform: 'none' }], { duration: 260, easing: 'ease-out' }));
      this.stacked = true; this.dropping = false; if (this.inFoot) this.setAir(false);
    }, (n - 1) * 150 + 350 + 540);
  }
  toTop = e => {
    e.preventDefault();
    if (!this.rm) {
      const els = [...document.querySelectorAll('[data-fs]')], n = els.length;
      clearTimeout(this.dropT); this.stacked = false; this.dropping = false;
      els.forEach((el, i) => { const sg = i % 2 ? 1 : -1; el.animate([{ transform: 'none' }, { transform: 'translate(' + sg * (30 + i * 16) + 'px,' + -innerHeight * 1.2 + 'px) rotate(' + sg * 220 + 'deg)' }], { duration: 700, delay: (n - 1 - i) * 50, easing: 'cubic-bezier(.5,0,.75,0)', fill: 'forwards' }); });
      this.resetHero();
    }
    this.later(() => scrollTo({ top: 0, behavior: this.rm ? 'auto' : 'smooth' }), this.rm ? 0 : 380);
  };
  resetHero() {
    if (!this.S) return;
    this.started = false; this.locked = false;
    this.S.forEach(s => { s.on = false; s.vx = s.vy = s.vr = 0; }); this.seed();
    const w = () => { if (scrollY < this.vh * 0.25) this.startShapes(); else this.heroT = this.later(w, 100); };
    clearTimeout(this.heroT); this.heroT = this.later(w, 500);
  }
  cta(e, on) {
    const el = e.currentTarget, w = el.querySelector('[data-wipe]');
    if (w) w.style.clipPath = on ? 'circle(150% at 0% 100%)' : 'circle(0% at 0% 100%)';
    el.style.color = on ? '#EDEBE6' : '#0B0B0D';
  }
  boot() {
    const L = document.querySelector('[data-loader]'); if (!L) return this.heroIn();
    L.style.display = 'flex';
    L.querySelectorAll('[data-ll]').forEach((el, i) => el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 60, delay: 80 + i * 170, fill: 'both' }));
    L.querySelector('[data-llamp]').animate([{ color: '#2A2A2E' }, { color: '#FF3B47' }], { duration: 140, delay: 800, fill: 'both' });
    L.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 350, delay: 1150, fill: 'forwards', easing: 'ease-out' }).onfinish = () => { L.style.display = 'none'; };
    document.querySelectorAll('[data-hs]').forEach(el => { el.style.opacity = 0; });
    this.later(() => this.heroIn(), 1150);
  }
  heroIn() {
    document.querySelectorAll('[data-hs]').forEach((el, i) => { el.style.opacity = ''; el.animate([{ opacity: 0, transform: this.rm ? 'none' : 'translateY(16px)' }, { opacity: 1, transform: 'none' }], { duration: 700, delay: 900 + i * 90, easing: this.E, fill: 'backwards' }); });
    this.startShapes();
  }
  initPointer() {
    this.mx = -9999; this.my = 0; this.cx = 0; this.cy = 0; this.gx = 0; this.gy = 0;
    const cur = document.querySelector('[data-cur]'), lab = document.querySelector('[data-curl]');
    this.cur = null;
    
    let mag = null;
    this.onMove = e => {
      if (this.mx < -9000) { this.cx = e.clientX; this.cy = e.clientY; }
      this.mx = e.clientX; this.my = e.clientY;
      if (!this.cur || !e.target.closest) return;
      cur.style.display = 'flex';
      if (this.rm) cur.style.transform = 'translate(' + this.mx + 'px,' + this.my + 'px) translate(-50%,-50%)';
      const t = e.target.closest('[data-cursor]'), big = !!t;
      cur.style.width = cur.style.height = big ? '72px' : '10px';
      if (big) lab.textContent = t.dataset.cursor; lab.style.opacity = big ? 1 : 0;
      const m = this.rm ? null : e.target.closest('[data-magnet]');
      if (mag && mag !== m) mag.style.transform = '';
      mag = m;
      if (m) { const r = m.getBoundingClientRect(); m.style.transform = 'translate(' + (e.clientX - r.left - r.width / 2) * 0.3 + 'px,' + (e.clientY - r.top - r.height / 2) * 0.3 + 'px)'; }
    };
    addEventListener('mousemove', this.onMove);
    this.onGyro = e => { if (e.gamma == null) return; this.gx = Math.max(-1, Math.min(1, e.gamma / 30)); this.gy = Math.max(-1, Math.min(1, (e.beta - 45) / 30)); };
    addEventListener('deviceorientation', this.onGyro);
  }

  initShapes() {
    const st = document.querySelector('[data-stage]'), hero = document.getElementById('top'); if (!st) return;
    this.land = document.querySelector('[data-land]'); this.pat = 0; this.started = false;
    if (this.rm) { st.style.position = 'absolute'; st.style.opacity = 0; if (this.land) this.land.style.opacity = 1; }
    this.P.forEach((L, k) => { if (L.length < this.SD.length) L.push(...this.PX[k % this.PX.length]); });
    this.S = this.SD.map((d, i) => {
      const el = document.createElement('div');
      el.style.cssText = 'position:absolute;left:0;top:0;box-sizing:border-box;mix-blend-mode:difference;will-change:transform';
      st.appendChild(el);
      return { d, i, el, x: 0, y: 0, r: 0, vx: 0, vy: 0, vr: 0, ra: 0, on: false, at: 0, ph: Math.random() * 6.283, w: 6.283 / (30 + Math.random() * 30), sg: i % 2 ? 1 : -1, ja: (Math.random() - 0.5) * 1.2 };
    });
    this.onResize = () => { this.layout(); if (this.rm) this.place(); };
    addEventListener('resize', this.onResize); this.layout();
    this.seed();
    this.onHeroClick = e => { if (e.target.closest('a,button')) return; this.pat = (this.pat + 1) % this.P.length; if (this.rm) this.place(); };
    if (hero) hero.addEventListener('click', this.onHeroClick);
    let last = performance.now();
    const loop = t => {
      this.raf = requestAnimationFrame(loop);
      const dt = Math.min(0.033, (t - last) / 1000); last = t;
      if (document.hidden) return;
      if (!this.rm) {
        // Process the first offscreen frame as well, including anchor jumps.
        if (scrollY < this.vh * 2 || !this.heroOffscreen) this.frame(t, dt);
        this.heroOffscreen = scrollY >= this.vh * 2;
        this.aboutPx(); this.galleryTick();
      }
      if (this.cur && !this.rm) { this.cx += (this.mx - this.cx) * 0.22; this.cy += (this.my - this.cy) * 0.22; this.cur.style.transform = 'translate(' + this.cx + 'px,' + this.cy + 'px) translate(-50%,-50%)'; }
    };
    this.raf = requestAnimationFrame(loop);
  }
  seed() {
    this.S.forEach(s => {
      const a = s.ph, R = Math.max(this.vw, this.vh) * 1.1;
      if (s.d[7]) { s.x = this.ox; s.y = this.oy; s.el.style.scale = '0'; } else { s.x = this.ox + Math.cos(a) * R; s.y = this.oy + Math.sin(a) * R; }
      s.r = this.P[0][s.i][2] + (Math.random() - 0.5) * 240;
    });
    const tv = this.S[1]; tv.x = this.vw + 40 * this.u; tv.y = this.oy - 30 * this.u; tv.r = -70;
  }
  layout() {
    const w = this.vw = innerWidth, h = this.vh = innerHeight, mob = this.mq.matches;
    const u = this.u = mob ? w * 0.0104 : Math.min(h, w * 0.62) * 0.0092;
    this.ys = mob ? Math.max(1, Math.min(1.5, h / w * 0.68)) : 1;
    this.ox = mob ? w * 0.5 : w * 0.64; this.oy = mob ? h * 0.36 : h * 0.5;
    this.S.forEach(s => {
      const [t, sw, sh, c, stroke] = s.d, e = s.el.style, W = sw ? sw * u : 8, H = sw ? (sh ? sh * u : 1.5) : 8;
      e.width = W + 'px'; e.height = H + 'px';
      e.borderRadius = t === 'circle' ? '50%' : t === 'half' ? H + 'px ' + H + 'px 0 0' : t === 'quarter' ? '100% 0 0 0' : '0';
      if (stroke) e.border = Math.max(1.5, u * 0.22) + 'px solid ' + c;
      else if (t === 'dots') { const g = W / 5; e.backgroundImage = 'radial-gradient(circle,' + c + ' 0 ' + Math.max(2, g * 0.17) + 'px,transparent ' + (Math.max(2, g * 0.17) + 0.6) + 'px)'; e.backgroundSize = g + 'px ' + g + 'px'; }
      else e.background = c;
      if (t === 'tri') e.clipPath = 'polygon(0 0,100% 100%,0 100%)';
    });
  }
  base(s, t) {
    const p = this.P[this.pat][s.i], u = this.u, mx = this.mx, has = mx > -9000;
    const nx = has ? (mx / this.vw - 0.5) * 2 : this.gx, ny = has ? (this.my / this.vh - 0.5) * 2 : this.gy;
    let x = this.ox + p[0] * u + Math.cos(t * 0.001 * s.w + s.ph) * 1.6 * u - nx * s.d[5] * 5 * u;
    let y = this.oy + p[1] * u * this.ys + Math.sin(t * 0.001 * s.w * 1.3 + s.ph) * 1.6 * u - ny * s.d[5] * 5 * u;
    let r = p[2] + s.ra;
    if (has) { const dx = x - mx, dy = y - this.my, dist = Math.hypot(dx, dy) || 1, R = 15 * u; if (dist < R) { const f = 1 - dist / R; x += dx / dist * f * 7 * u; y += dy / dist * f * 7 * u; r += f * 28 * s.sg; } }
    return [x, y, r];
  }
  place() { this.S.forEach(s => { const p = this.P[this.pat][s.i]; s.el.style.scale = ''; s.el.style.transform = 'translate3d(' + (this.ox + p[0] * this.u) + 'px,' + (this.oy + p[1] * this.u * this.ys) + 'px,0) translate(-50%,-50%) rotate(' + p[2] + 'deg)'; }); }
  startShapes() {
    if (!this.S || this.started) return; this.started = true;
    if (this.rm) { this.place(); const st = this.S[0].el.parentNode; st.style.opacity = 1; st.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 700 }); return; }
    const now = performance.now(); let k = 0;
    this.S.forEach(s => { s.at = now + (s.i === 1 ? 1250 : (k++) * 60); });
  }
  frame(t, dt) {
    if (!this.S) return;
    const p = Math.max(0, Math.min(1, scrollY / (this.vh * 0.9))), u = this.u;
    if (p >= 1 && this.gone && !this.land) return;
    const A = p > 0 && this.land ? this.land.getBoundingClientRect() : null; let relayout = false;
    this.S.forEach(s => {
      if (this.started && !s.on && t >= s.at) { s.on = true; if (s.d[7]) { s.el.style.scale = ''; s.el.animate([{ scale: 0 }, { scale: 1 }], { duration: 600, easing: this.E }); } }
      s.ra += s.d[6] * dt;
      let [bx, by, br] = this.base(s, t), sc = '';
      const T = this.BT[s.i]; let e = 0;
      if (T && A) {
        const k = A.width / 166, dl = T[6] * 0.6, q = Math.max(0, Math.min(1, (p - dl) / (1 - dl))), st = s.el.style;
        e = q * q * (3 - 2 * q);
        s.x = bx + (A.left + (33 + T[1]) * k - bx) * e; s.y = by + (A.top + (27 + T[2]) * k - by) * e;
        s.r = br + (T[5] + Math.round((br - T[5]) / 360) * 360 - br) * e; s.vx = s.vy = s.vr = 0;
        if (!s.on) { s.on = true; st.scale = ''; }
        if (s.i === 1) this.locked = true;
        if (T[0] === 'gone') sc = ' scale(' + (1 - e) + ')';
        else {
          const W0 = s.d[1] * u, H0 = s.d[2] * u; s.sz = 1;
          st.width = W0 + (T[3] * k - W0) * e + 'px'; st.height = H0 + (T[4] * k - H0) * e + 'px';
          if (T[0] === 'head') st.borderRadius = 15.5 * k * e + 'px'; else st.clipPath = 'polygon(' + 50 * e + '% 0,100% 100%,0 100%)';
        }
      } else if (s.on) {
        if (p > 0) { const q = this.P[0][s.i], an = Math.atan2(q[1] || 0.3, q[0] || 0.3) + s.ja; bx += Math.cos(an) * p * 150 * u; by += Math.sin(an) * p * 150 * u - p * this.vh * 0.3; br += p * 160 * s.sg; }
        const k = s.i === 1 && !this.locked ? 260 : 120, c = s.i === 1 && !this.locked ? 24 : 14;
        s.vx += (k * (bx - s.x) - c * s.vx) * dt; s.vy += (k * (by - s.y) - c * s.vy) * dt; s.vr += (k * (br - s.r) - c * s.vr) * dt;
        s.x += s.vx * dt; s.y += s.vy * dt; s.r += s.vr * dt;
        if (s.i === 1 && !this.locked && Math.hypot(bx - s.x, by - s.y) < 2 && Math.hypot(s.vx, s.vy) < 60) {
          this.locked = true; s.el.animate([{ scale: 1 }, { scale: 1.12 }, { scale: 1 }], { duration: 240, easing: 'ease-out' });
          [0, 3, 5, 13].forEach(j => { this.S[j].vx -= 90; this.S[j].vy += 30; });
        }
      }
      if (T) {
        const nb = !!A && T[0] === 'gone' && s.i !== 1 && e > 0.4, hv = !!A && !!this.botOn;
        if (s.nb !== nb) { s.nb = nb; s.el.style.mixBlendMode = nb ? 'normal' : 'difference'; }
        if (s.hv !== hv) { s.hv = hv; s.el.style.visibility = hv ? 'hidden' : ''; }
        if (!A && s.sz) { s.sz = 0; relayout = true; }
      } else { const o = p > 0 ? Math.max(0, 1 - p * 2.2) : 1; if (s.op !== o) { s.op = o; s.el.style.opacity = o; } }
      s.el.style.transform = 'translate3d(' + s.x + 'px,' + s.y + 'px,0) translate(-50%,-50%) rotate(' + s.r + 'deg)' + sc;
    });
    if (relayout) this.layout();
    const on = !!A && p >= 1; if (on !== !!this.botOn) this.botSet(on);
    this.botTick(t);
  }
  botSet(on) {
    this.botOn = on; const svg = this.land; if (!svg) return;
    svg.getAnimations({ subtree: true }).forEach(a => a.cancel()); clearTimeout(this.botT); this.botReady = false;
    svg.style.opacity = on ? 1 : 0; if (!on) return;
    const q = n => [...svg.querySelectorAll('[data-bp="' + n + '"]')], an = (el, kf, o) => el && el.animate(kf, { fill: 'backwards', easing: this.E, ...o });
    const POP = [{ transform: 'scale(0)' }, { transform: 'scale(1.3)', offset: 0.55 }, { transform: 'scale(.92)', offset: 0.8 }, { transform: 'none' }];
    an(q('screen')[0], [{ opacity: 0, transform: 'scale(.6)' }, { opacity: 1, transform: 'none' }], { duration: 250, delay: 80 });
    q('ear').forEach((el, i) => an(el, [{ transform: 'translate(' + (i ? 34 : -34) + 'px,10px) rotate(' + (i ? 100 : -100) + 'deg)' }, { transform: 'none' }], { duration: 650, delay: 200 + i * 50 }));
    q('w').forEach(el => an(el, [{ transform: 'rotate(' + -el.dataset.a + 'deg) scaleX(0)' }, { transform: 'none' }], { duration: 500, delay: 520 + el.dataset.i * 40 }));
    an(q('crt')[0], [{ opacity: 1, transform: 'scale(0,.03)' }, { opacity: 1, transform: 'scale(1,.03)', offset: 0.4 }, { opacity: 1, transform: 'scale(1,1)', offset: 0.7 }, { opacity: 0, transform: 'scale(1,1)' }], { duration: 300, delay: 950, easing: 'linear', fill: 'none' });
    q('eye').forEach(el => an(el, POP, { duration: 450, delay: 1250, easing: 'ease-out' }));
    an(q('mouth')[0], POP, { duration: 450, delay: 1350, easing: 'ease-out' });
    an(q('beret')[0], [{ opacity: 0, transform: 'translateY(-70px) rotate(30deg)', easing: 'cubic-bezier(.5,0,.9,.6)' }, { opacity: 1, transform: 'none', offset: 0.55, easing: 'ease-out' }, { opacity: 1, transform: 'translateY(-7px) rotate(-5deg)', offset: 0.75, easing: 'ease-in' }, { opacity: 1, transform: 'none' }], { duration: 750, delay: 1550, easing: 'linear' });
    this.botT = this.later(() => { this.botReady = true; this.blinkAt = performance.now() + 2500; }, 2350);
  }
  botTick(t) {
    if (!this.botOn || !this.botReady) return;
    const svg = this.land, r = svg.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
    const P = this.bp || (this.bp = { eye: [...svg.querySelectorAll('[data-bp="eye"]')], w: [...svg.querySelectorAll('[data-bp="w"]')] });
    if (t > this.blinkAt) { this.blinkAt = t + 6000 + Math.random() * 4000; P.eye.forEach(el => el.animate([{ transform: 'none' }, { transform: 'scaleY(.1)' }, { transform: 'none' }], { duration: 150 })); }
    const dx = this.mx - (r.left + r.width / 2), dy = this.my - (r.top + r.height / 2), d = Math.hypot(dx, dy) || 1;
    const near = this.mx > -9000 ? Math.max(0, 1 - d / 280) : 0, m = near > 0 ? 2.5 * 166 / r.width : 0;
    this.ex = (this.ex || 0) + (dx / d * m - (this.ex || 0)) * 0.15; this.ey = (this.ey || 0) + (dy / d * m - (this.ey || 0)) * 0.15;
    P.eye.forEach(el => { el.style.translate = this.ex.toFixed(2) + 'px ' + this.ey.toFixed(2) + 'px'; });
    P.w.forEach((el, i) => { el.style.rotate = (Math.sin(t * 0.011 + i * 1.7) * 4 * Math.min(1, near * 2)).toFixed(2) + 'deg'; });
  }
  botHover = () => {
    if (!this.botReady || !this.land) return; const b = this.land.querySelector('[data-bp="beret"]');
    if (b) b.animate([{ transform: 'none' }, { transform: 'translateY(-12px) rotate(-6deg)', offset: 0.4 }, { transform: 'none' }], { duration: 500, easing: this.E });
  };

  nav(d) { const n = this.works.length; this.navDir = d; this.setState({ sel: (this.state.sel + d + n) % n }); }
  gSet(el, on) {
    const it = el.closest('[data-gi]'), g = el.closest('[data-gallery]'); if (!it || !g) return;
    el.style.clipPath = on ? el.dataset.full : el.dataset.idle;
    it.style.zIndex = on ? 20 : it.dataset.z;
    it.querySelectorAll('[data-ring]').forEach(r => { r.style.visibility = on ? 'hidden' : ''; });
    g.querySelectorAll('[data-gi]').forEach(o => { o.style.opacity = on && o !== it ? 0.3 : 1; });
    this.gAct = on ? el : null;
  }
  gOn = e => { if (!this.mq.matches) this.gSet(e.currentTarget, 1); };
  gOff = e => { if (!this.mq.matches && this.state.sel === null) this.gSet(e.currentTarget, 0); };
  gGo = e => {
    const el = e.currentTarget;
    this.returnFocus = el;
    this.from = el.getBoundingClientRect(); this.setState({ sel: +el.dataset.w });
  };
  galleryTick() {
    const g = this.gw && this.gw.isConnected ? this.gw : (this.gw = document.querySelector('[data-gallery]')); if (!g) return;
    const r = g.getBoundingClientRect(); if (r.bottom < -300 || r.top > innerHeight + 300) return;
    const sp = r.top + r.height / 2 - innerHeight / 2, has = this.mx > -9000, nx = has ? (this.mx / innerWidth - 0.5) * 2 : 0, ny = has ? (this.my / innerHeight - 0.5) * 2 : 0;
    g.querySelectorAll('[data-depth]').forEach(el => {
      const d = +el.dataset.depth, p = el._p || (el._p = [0, 0]);
      p[0] += (-nx * d * 18 - p[0]) * 0.08; p[1] += (-ny * d * 18 - p[1]) * 0.08;
      el.style.transform = 'translate3d(' + p[0].toFixed(2) + 'px,' + (p[1] + sp * d * 0.06).toFixed(2) + 'px,0)';
    });
  }
  close = () => {
    const p = this.panelRef.current, b = this.backRef.current, c0 = document.querySelector('[data-w="' + this.state.sel + '"]'), c = c0 && c0.offsetParent ? c0 : null;
    if (!p || this.closing) return; this.closing = true;
    const done = () => { this.closing = false; this.setState({ sel: null }, () => this.returnFocus?.focus({ preventScroll: true })); };
    b.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 380, fill: 'forwards' });
    const kf = c && !this.rm ? [{ transform: 'none', opacity: 1 }, { transform: this.flip(p, c.getBoundingClientRect()), opacity: 0 }] : [{ opacity: 1 }, { opacity: 0 }];
    p.animate(kf, { duration: 380, easing: this.E, fill: 'forwards' }).onfinish = done;
  };

  renderVals() {
    const i = this.state.sel, w = i !== null ? this.works[i] : null, n = this.works.length, pad = x => String(x).padStart(2, '0');
    return {
      isOpen: !!w, showNav: true,
      sel: w ? { ...w, num: pad(i + 1), total: pad(n), hasImg: !!w.img, imgBg: w.img ? 'url("' + w.img + '")' : 'none', isService: !w.img && w.cat === 'Service', isPB: w.title === 'PaletteBot for Twitch', isBot: !w.img && w.cat === 'BOT' && w.title !== 'PaletteBot for Twitch', isWeb: !w.img && w.cat === 'Web', isEvent: !w.img && w.cat === 'Event',
        tech: w.tech.map(t => ({ name: t, abbr: this.T[t] || t.slice(0, 2).toUpperCase() })), hasTech: w.tech.length > 0, primary: w.links.slice(0, 1), secondary: w.links.slice(1) } : {},
      gDesk: !this.state.narrow, gMob: this.state.narrow, gOn: this.gOn, gOff: this.gOff, gGo: this.gGo,
      botHover: this.botHover, prev: () => this.nav(-1), next: () => this.nav(1),
      narrow: this.state.narrow, wide: !this.state.narrow, icOn: e => this.ic(e, 1), icOff: e => this.ic(e, 0),
      ctaOn: e => this.cta(e, 1), ctaOff: e => this.cta(e, 0), toTop: this.toTop,
      close: this.close,
      panelRef: this.panelRef, backRef: this.backRef,
    };
  }
  render() { return renderPortfolio(this.renderVals()); }
}
