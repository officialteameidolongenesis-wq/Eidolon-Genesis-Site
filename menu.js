// menu.js
document.addEventListener('DOMContentLoaded', () => {
  try {
    const btn = document.getElementById('hamburger');
    const panel = document.getElementById('navpanel');

    if (!btn || !panel) return;

    // Toggle menu
    btn.addEventListener('click', (e) => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      panel.classList.toggle('open');
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', (e) => {
      if (!panel.classList.contains('open')) return;
      if (e.target.closest('#navpanel') || e.target.closest('#hamburger')) return;
      panel.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });

    // Smooth scroll for in-page anchors (also closes menu on mobile)
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (ev) => {
        const href = a.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          ev.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (panel.classList.contains('open')) {
            panel.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });

     console.log('menu.js init OK');
  } catch (err) {
    console.error('menu.js error:', err);
  }
});
