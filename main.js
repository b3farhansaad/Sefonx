/* ─── NAV ACTIVE ON SCROLL ──────────────────────────────── */
const sections = document.querySelectorAll('section[id], div[id="home"]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('section[id]').forEach(s => observer.observe(s));

/* ─── SKILL TABS ─────────────────────────────────────────── */
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.skills-grid').forEach(g => g.classList.add('hidden'));
    btn.classList.add('active');
    const target = document.getElementById('tab-' + btn.dataset.tab);
    if (target) target.classList.remove('hidden');
  });
});

/* ─── TYPEWRITER ─────────────────────────────────────────── */
const phrases = [
  'Building scalable web applications',
  'Crafting modern UI experiences',
  'Writing clean, efficient code',
  'Creating Discord bots & tools',
];
let pIdx = 0, cIdx = 0, deleting = false;
const tw = document.getElementById('typewriter');

function typeLoop() {
  const current = phrases[pIdx];
  if (!deleting) {
    tw.textContent = current.slice(0, ++cIdx);
    if (cIdx === current.length) { deleting = true; setTimeout(typeLoop, 1800); return; }
  } else {
    tw.textContent = current.slice(0, --cIdx);
    if (cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length; }
  }
  setTimeout(typeLoop, deleting ? 50 : 80);
}
typeLoop();

/* ─── SCROLL FADE ─────────────────────────────────────────── */
const fadeEls = document.querySelectorAll('.project-card, .skill-card, .info-table, .contact-item');
fadeEls.forEach(el => el.classList.add('fade-up'));

const fadeObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

fadeEls.forEach(el => fadeObs.observe(el));

/* ─── NAV SHRINK ─────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.padding = window.scrollY > 50 ? '10px 48px' : '16px 48px';
});

/* ─── CONTACT FORM ───────────────────────────────────────── */
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✅ Message Sent!';
  btn.style.background = '#2e7d32';
  setTimeout(() => { btn.textContent = 'Send Message →'; btn.style.background = ''; }, 3000);
  e.target.reset();
});
