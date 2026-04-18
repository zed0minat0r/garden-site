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

  const revealEls = document.querySelectorAll('.reveal, .reveal-up, .reveal-group, .reveal-scale');
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
  const dotsEl  = document.getElementById('servicesDots');
  if (!track || !btnLeft || !btnRight) return;

  const SCROLL_BY = 420;
  const cards     = track.querySelectorAll('.service-card');
  const dots      = dotsEl ? dotsEl.querySelectorAll('.services__dot') : [];

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

  // Update dots based on active card in view
  function updateDots() {
    if (!dots.length || !cards.length) return;
    const trackRect = track.getBoundingClientRect();
    let activeIdx = 0;
    let bestOverlap = -1;
    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const overlap = Math.min(rect.right, trackRect.right) - Math.max(rect.left, trackRect.left);
      if (overlap > bestOverlap) { bestOverlap = overlap; activeIdx = i; }
    });
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === activeIdx));
  }

  // Show/hide nav buttons based on scroll position
  function updateButtons() {
    btnLeft.style.opacity  = track.scrollLeft <= 0 ? '0.35' : '1';
    btnLeft.disabled       = track.scrollLeft <= 0;
    const maxScroll        = track.scrollWidth - track.clientWidth;
    btnRight.style.opacity = track.scrollLeft >= maxScroll - 2 ? '0.35' : '1';
    btnRight.disabled      = track.scrollLeft >= maxScroll - 2;
    updateDots();
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
    e.preventDefault();
    const name    = form.querySelector('#cf-name').value.trim();
    const contact = form.querySelector('#cf-phone').value.trim();
    if (!name || !contact) {
      if (note) note.textContent = 'Please fill in your name and contact info.';
      return;
    }
    // Confirm to user — no backend, form is a local business UX pattern
    if (note) note.textContent = 'Thanks, ' + name + '. We will reach out soon!';
    form.querySelectorAll('input, select').forEach(el => el.value = '');
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

/* --- Init ------------------------------------------------- */
function init() {
  addRevealClasses();
  initReveal();
  initHero();
  initServicesScroll();
  initParallax();
  initConsultForm();

  updateProgress();
  updateNav();

  window.addEventListener('scroll', onScroll, { passive: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
