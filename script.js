/* ════════════════════════════════════════════════════════════════════
   script.js — Rocky Jacinto CS Stduent Portfolio
   Sections:
     1. Mobile Navigation Toggle
     2. Scroll Fade-In Animation
════════════════════════════════════════════════════════════════════ */


/* ── 1. Mobile Navigation Toggle ──────────────────────────────── */
const burger = document.getElementById('burger');
const nav    = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

/* Close nav when a link is clicked (good UX on mobile) */
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});


/* ── 2. Scroll Fade-In Animation ───────────────────────────────── */
const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

fadeElements.forEach(el => observer.observe(el));