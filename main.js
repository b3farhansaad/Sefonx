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

/* ─── CONTACT FORM (Discord Webhook) ───────────────────── */
const DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/1510318451892424844/PgGqcSw5WxhS9ThJV-d2n-x5IhzXw8gM5cNCUNyOzac4s_FBE4z-aQbHS6gSAXST8Wtx';

document.getElementById('contactForm').addEventListener('submit', async e => {
  e.preventDefault();

  const btn = document.getElementById('submitBtn');
  const btnText = btn.querySelector('.btn-text');
  const btnLoading = btn.querySelector('.btn-loading');
  const status = document.getElementById('formStatus');

  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const subject = document.getElementById('contactSubject').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  if (!name || !email || !subject || !message) {
    status.textContent = 'Please fill in all fields';
    status.className = 'form-status error';
    status.classList.remove('hidden');
    return;
  }

  // Show loading state
  btn.disabled = true;
  btnText.classList.add('hidden');
  btnLoading.classList.remove('hidden');
  status.classList.add('hidden');

  const timestamp = new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  const payload = {
    username: 'Sefonx Portfolio',
    avatar_url: 'https://cdn.discordapp.com/attachments/123/456/profile.jpg',
    embeds: [
      {
        title: '📬 New Contact Form Submission',
        color: 0xe53935,
        fields: [
          {
            name: '👤 Name',
            value: name,
            inline: true
          },
          {
            name: '📧 Email',
            value: email,
            inline: true
          },
          {
            name: '📝 Subject',
            value: subject,
            inline: false
          },
          {
            name: '💬 Message',
            value: message,
            inline: false
          }
        ],
        footer: {
          text: 'Portfolio Contact Form'
        },
        timestamp: new Date().toISOString()
      }
    ]
  };

  try {
    const response = await fetch(DISCORD_WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      status.textContent = 'Message sent successfully! I will get back to you soon.';
      status.className = 'form-status success';
      status.classList.remove('hidden');
      e.target.reset();
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    status.textContent = 'Failed to send message. Please try again or contact via email.';
    status.className = 'form-status error';
    status.classList.remove('hidden');
  } finally {
    btn.disabled = false;
    btnText.classList.remove('hidden');
    btnLoading.classList.add('hidden');
  }
});
