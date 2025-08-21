// script.js — hamburger, smooth-scroll, FAQ (robusto, senza conflitti)
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('hamburger');
  const panel = document.getElementById('navpanel');

  /* ---------- HAMBURGER MENU ---------- */
  if (btn && panel) {
    const toggleMenu = () => {
      const isOpen = panel.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
      btn.classList.toggle('open'); // utile se vuoi animare l'hamburger via CSS
    };

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      } else if (e.key === 'Escape') {
        panel.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    // Chiudi cliccando fuori (solo se è aperto)
    document.addEventListener('click', (e) => {
      if (!panel.contains(e.target) && !btn.contains(e.target) && panel.classList.contains('open')) {
        panel.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.remove('open');
      }
    });
  }

  /* ---------- SMOOTH SCROLL ---------- */
  const headerEl = document.querySelector('.nav-wrap');

  function getNavOffset() {
    if (!headerEl) return 0;
    // height + eventuali bordi (sticky)
    return Math.round(headerEl.getBoundingClientRect().height || 0);
  }

  function scrollToHash(hash) {
    if (!hash || hash === '#') return;
    const id = hash.replace(/^#/, '');
    const target = document.getElementById(id);
    if (!target) return;

    const NAV_OFFSET = getNavOffset();
    const rect = target.getBoundingClientRect();
    const absoluteY = (window.pageYOffset || window.scrollY || 0) + rect.top - NAV_OFFSET;

    // Chiudi menu mobile se aperto
    if (panel && panel.classList.contains('open')) {
      panel.classList.remove('open');
      if (btn) { btn.setAttribute('aria-expanded', 'false'); btn.classList.remove('open'); }
    }

    // Prova scroll “smooth”, con fallback hard
    try {
      window.scrollTo({ top: absoluteY, behavior: 'smooth' });
    } catch (e) {
      window.scrollTo(0, absoluteY);
    }

    // Accessibilità (opzionale, innocuo)
    setTimeout(() => {
      try { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); } catch(_) {}
    }, 500);
  }

  // Clic su link interni (nav + hero)
  document.querySelectorAll('.navlinks a[href^="#"], .hero-actions a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      e.preventDefault();
      scrollToHash(href);
      // Aggiorna la barra degli indirizzi senza saltare
      try { history.pushState(null, '', href); } catch (_) {}
    }, { passive: false });
  });

  // Supporta apertura pagina con hash già presente (es. …/index.html#faq)
  if (location.hash) {
    // attendo un attimo così layout/sticky sono calcolati
    setTimeout(() => scrollToHash(location.hash), 0);
  }

  // Se l’hash cambia (es. da link esterni, back/forward)
  window.addEventListener('hashchange', () => scrollToHash(location.hash));
  /* ---------- FAQ INTERATTIVE ---------- */
  // Usare max-height animata per transizione fluida
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const dt = item.querySelector('dt');
    const dd = item.querySelector('dd');
    if (!dt || !dd) return;

    // inizializza stato
    dd.style.maxHeight = item.classList.contains('active') ? dd.scrollHeight + 'px' : '0px';
    dd.style.overflow = 'hidden';
    dd.style.transition = 'max-height 320ms ease, opacity 240ms ease';
    if (item.classList.contains('active')) dd.style.opacity = '1'; else dd.style.opacity = '0';

    dt.addEventListener('click', () => {
      // se vuoi singola aperta alla volta: chiudi le altre
      faqItems.forEach(i => {
        if (i !== item) {
          i.classList.remove('active');
          const otherDd = i.querySelector('dd');
          if (otherDd) { otherDd.style.maxHeight = '0px'; otherDd.style.opacity = '0'; i.setAttribute('aria-expanded','false'); }
        }
      });

      // toggle l'item cliccato
      const nowOpen = !item.classList.contains('active');
      item.classList.toggle('active');
      item.setAttribute('aria-expanded', String(nowOpen));
      if (nowOpen) {
        dd.style.maxHeight = dd.scrollHeight + 'px';
        dd.style.opacity = '1';
      } else {
        dd.style.maxHeight = '0px';
        dd.style.opacity = '0';
      }
    });
  });
});
