/* ============================================================
   Colonial Gardens — main.js
   ============================================================ */

'use strict';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* --- Scroll progress bar ---------------------------------- */
const progressBar = document.getElementById('progressBar');
const progressEl  = document.querySelector('.scroll-progress');

function updateProgress() {
  const scrollTop  = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollMax  = document.documentElement.scrollHeight - window.innerHeight;
  const pct        = scrollMax > 0 ? Math.round((scrollTop / scrollMax) * 100) : 0;
  progressBar.style.width = pct + '%';
  progressEl.setAttribute('aria-valuenow', pct);
}

/* --- Nav scroll state ------------------------------------- */
const siteHeader = document.querySelector('.site-header');

function updateNav() {
  const scrolled = window.scrollY > 60;
  siteHeader.classList.toggle('is-scrolled', scrolled);
}

/* --- Mobile nav toggle ------------------------------------ */
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close on link click
navMenu.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.focus();
    document.body.style.overflow = '';
  }
});

/* --- Reveal on scroll ------------------------------------- */
function initReveal() {
  if (prefersReducedMotion) return;

  const revealEls = document.querySelectorAll('.reveal, .reveal-group, .reveal-scale');
  const observer  = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  revealEls.forEach(el => observer.observe(el));
}

/* --- Hero image ken-burns --------------------------------- */
function initHero() {
  if (prefersReducedMotion) return;
  const hero = document.querySelector('.hero');
  if (!hero) return;
  setTimeout(() => hero.classList.add('is-visible'), 80);
}

/* --- Sticky horizontal journey scroll --------------------- */
function initJourneyScroll() {
  if (prefersReducedMotion) return;

  const outer        = document.getElementById('journeyOuter');
  const track        = document.getElementById('journeyTrack');
  const progressFill = document.getElementById('journeyProgressFill');
  const hint         = document.getElementById('journeyHint');
  const dotsEl       = document.getElementById('journeyDots');
  if (!outer || !track) return;

  // On mobile/tablet (≤768px) the journey stacks vertically — skip JS
  if (window.innerWidth <= 768) return;

  const PANEL_COUNT  = 4;
  const dots         = dotsEl ? Array.from(dotsEl.querySelectorAll('.journey__dot')) : [];
  let   rafPending   = false;
  let   hintHidden   = false;

  function update() {
    rafPending = false;

    const outerRect  = outer.getBoundingClientRect();
    const outerTop   = outerRect.top;           // < 0 means we've scrolled into it
    const outerH     = outer.offsetHeight;      // 400vh
    const viewH      = window.innerHeight;

    // How far we've scrolled within the outer container
    // outerTop goes from 0 (just entered) to -(outerH - viewH) (fully exited)
    const scrolled   = -outerTop;
    const scrollable = outerH - viewH;          // range of motion

    // Clamp 0..scrollable
    const clamped    = Math.max(0, Math.min(scrolled, scrollable));

    // progress 0..1
    const progress   = scrollable > 0 ? clamped / scrollable : 0;

    // translateX: move track leftward
    // At progress=0 → 0vw, at progress=1 → -300vw
    const tx = -(progress * (PANEL_COUNT - 1) * 100);
    track.style.transform = `translateX(${tx}vw)`;

    // Progress bar
    if (progressFill) {
      progressFill.style.width = (progress * 100) + '%';
    }

    // Active panel index
    const panelIdx = Math.min(
      PANEL_COUNT - 1,
      Math.floor(progress * PANEL_COUNT + 0.1)
    );

    // Update dots
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === panelIdx));

    // Hide scroll hint once scrolling has begun into journey
    if (!hintHidden && progress > 0.02) {
      hintHidden = true;
      if (hint) hint.classList.add('is-hidden');
    }
  }

  function onScroll() {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(update);
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Run once immediately in case page loads mid-scroll
  update();
}

/* --- Parallax on legacy image ----------------------------- */
function initParallax() {
  if (prefersReducedMotion) return;

  const legacyImg = document.querySelector('.legacy__img');
  if (!legacyImg) return;

  let rafPending = false;

  function handleScroll() {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      const wrap = legacyImg.closest('.legacy__img-wrap');
      if (!wrap) { rafPending = false; return; }
      const rect = wrap.getBoundingClientRect();
      const vh   = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) { rafPending = false; return; }
      const pct  = ((rect.top / vh) - 0.5) * 0.3;
      legacyImg.style.transform = `scale(1.06) translateY(${pct * 40}px)`;
      rafPending = false;
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/* --- Add reveal classes to elements ----------------------- */
function addRevealClasses() {
  // Sections that slide up on scroll
  const toReveal = [
    '.contact__info',
    '.contact__form-wrap',
    '.contact__map-wrap',
  ];
  toReveal.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) el.classList.add('reveal');
  });

  // Trust bar items already staggered in HTML
  const trustBar = document.querySelector('.trust-bar__inner');
  if (trustBar && !trustBar.classList.contains('reveal-group')) {
    trustBar.classList.add('reveal-group');
  }

  // Seasonal grid — staggered
  const seasonalGrid = document.querySelector('.seasonal__grid');
  if (seasonalGrid && !seasonalGrid.classList.contains('reveal-group')) {
    seasonalGrid.classList.add('reveal-group');
  }

  // Testimonials grid — staggered
  const testGrid = document.querySelector('.testimonials__grid');
  if (testGrid && !testGrid.classList.contains('reveal-group')) {
    testGrid.classList.add('reveal-group');
  }

  // Legacy badge — scale entrance
  const badge = document.querySelector('.legacy__badge');
  if (badge && !badge.classList.contains('reveal-scale')) {
    badge.classList.add('reveal-scale');
  }
}

/* --- Consultation form handler ---------------------------- */
function initConsultForm() {
  const form = document.getElementById('consultForm');
  if (!form) return;
  const note = document.getElementById('cfNote');

  form.addEventListener('submit', e => {
    const name    = form.querySelector('#cf-name').value.trim();
    const contact = form.querySelector('#cf-phone').value.trim();
    if (!name || !contact) {
      e.preventDefault();
      if (note) note.textContent = 'Please fill in your name and contact info.';
      return;
    }
    // Allow native form POST to Formspree
  });

  // Show success banner if returning from Formspree redirect
  const params = new URLSearchParams(window.location.search);
  if (params.get('submitted') === '1') {
    const banner = document.getElementById('contactSuccess');
    if (banner) {
      banner.hidden = false;
      banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (form) form.hidden = true;
  }
}

/* --- ET open/closed helper -------------------------------- */
function getEtOpenState() {
  const now     = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false, hour: '2-digit', minute: '2-digit' });
  const hour    = parseInt(timeStr.split(':')[0], 10);
  const dayNum  = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' })).getDay(); // 0=Sun
  if (dayNum === 0) { // Sunday
    return hour >= 9 && hour < 17;
  }
  return hour >= 8 && hour < 18; // Mon-Sat
}

/* --- Open status bar -------------------------------------- */
function initOpenBar() {
  const dot  = document.getElementById('openBarDot');
  const text = document.getElementById('openBarText');
  if (!dot || !text) return;

  const open = getEtOpenState();
  const narrow = window.innerWidth <= 480;

  if (open) {
    dot.classList.remove('is-closed');
    text.textContent = narrow
      ? 'Open now'
      : 'Open now \u2014 Mon\u2013Sat 8am\u20136pm \u2022 Sun 9am\u20135pm';
  } else {
    dot.classList.add('is-closed');
    text.textContent = narrow
      ? 'Closed now'
      : 'Closed now \u2014 Mon\u2013Sat 8am\u20136pm \u2022 Sun 9am\u20135pm';
  }
}

/* --- Contact section open badge --------------------------- */
function initContactBadge() {
  const badge   = document.querySelector('.contact__open-badge');
  const dot     = badge ? badge.querySelector('.contact__open-dot') : null;
  const textEl  = badge ? badge.querySelector('span:not(.contact__open-dot)') : null;
  if (!badge || !dot || !textEl) return;

  const open = getEtOpenState();

  if (open) {
    dot.classList.remove('is-closed');
    badge.classList.remove('is-closed');
    textEl.textContent = 'Open now \u2014 Mon\u2013Sat 8am\u20136pm, Sun 9am\u20135pm';
  } else {
    dot.classList.add('is-closed');
    badge.classList.add('is-closed');
    textEl.textContent = 'Closed now \u2014 Mon\u2013Sat 8am\u20136pm, Sun 9am\u20135pm';
  }
}

/* --- 3D tilt on plant-now cards --------------------------- */
function initCardTilt() {
  if (prefersReducedMotion) return;
  const cards = document.querySelectorAll('.plant-now__card');
  if (!cards.length) return;

  const MAX_TILT = 8; // degrees

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) / (rect.width  / 2);
      const dy   = (e.clientY - cy) / (rect.height / 2);
      const rotX = (-dy * MAX_TILT).toFixed(2);
      const rotY = ( dx * MAX_TILT).toFixed(2);
      card.style.setProperty('--tilt-x', rotX + 'deg');
      card.style.setProperty('--tilt-y', rotY + 'deg');
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
      card.style.boxShadow = 'var(--shadow-lg)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
      card.style.boxShadow = '';
    });
  });
}

/* --- Scroll listener (throttled via rAF) ------------------ */
let scrollRafPending = false;

function onScroll() {
  if (scrollRafPending) return;
  scrollRafPending = true;
  requestAnimationFrame(() => {
    updateProgress();
    updateNav();
    scrollRafPending = false;
  });
}

/* --- Refresh open/closed state every 60s (handles stale tabs) */
function startOpenStateRefresh() {
  setInterval(() => {
    initOpenBar();
    initContactBadge();
  }, 60000);
}

/* --- Init ------------------------------------------------- */
function init() {
  addRevealClasses();
  initReveal();
  initHero();
  initJourneyScroll();
  initParallax();
  initConsultForm();
  initOpenBar();
  initContactBadge();
  initCardTilt();
  startOpenStateRefresh();

  updateProgress();
  updateNav();

  window.addEventListener('scroll', onScroll, { passive: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
