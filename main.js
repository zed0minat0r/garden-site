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

  const revealEls = document.querySelectorAll('.reveal, .reveal-up, .reveal-group');
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

/* --- Services horizontal scroll (drag + buttons) ---------- */
function initServicesScroll() {
  const track   = document.getElementById('servicesTrack');
  const btnLeft = document.getElementById('servicesLeft');
  const btnRight= document.getElementById('servicesRight');
  if (!track || !btnLeft || !btnRight) return;

  const SCROLL_BY = 420;

  btnLeft.addEventListener('click', () => {
    track.scrollBy({ left: -SCROLL_BY, behavior: 'smooth' });
  });
  btnRight.addEventListener('click', () => {
    track.scrollBy({ left: SCROLL_BY, behavior: 'smooth' });
  });

  // Drag to scroll (mouse)
  let isDragging = false;
  let startX, scrollLeft;

  track.addEventListener('mousedown', e => {
    isDragging = true;
    track.classList.add('is-dragging');
    startX     = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    e.preventDefault();
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    track.classList.remove('is-dragging');
  });

  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const x    = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.2;
    track.scrollLeft = scrollLeft - walk;
  });

  // Show/hide nav buttons based on scroll position
  function updateButtons() {
    btnLeft.style.opacity  = track.scrollLeft <= 0 ? '0.35' : '1';
    btnLeft.disabled       = track.scrollLeft <= 0;
    const maxScroll        = track.scrollWidth - track.clientWidth;
    btnRight.style.opacity = track.scrollLeft >= maxScroll - 2 ? '0.35' : '1';
    btnRight.disabled      = track.scrollLeft >= maxScroll - 2;
  }

  track.addEventListener('scroll', updateButtons, { passive: true });
  updateButtons();
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
      legacyImg.style.transform = `scale(1.06) translateY(${pct * 80}px)`;
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
    '.contact__map',
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

/* --- Init ------------------------------------------------- */
function init() {
  addRevealClasses();
  initReveal();
  initHero();
  initServicesScroll();
  initParallax();

  updateProgress();
  updateNav();

  window.addEventListener('scroll', onScroll, { passive: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
