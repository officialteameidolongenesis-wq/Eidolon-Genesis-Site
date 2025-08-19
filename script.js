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
  // offset per navbar sticky (adatta se la tua navbar ha altezza diversa)
  const NAV_OFFSET = 72;
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        // chiudi menu mobile se aperto
        if (panel && panel.classList.contains('open')) {
          panel.classList.remove('open');
          if (btn) { btn.setAttribute('aria-expanded', 'false'); btn.classList.remove('open'); }
        }
        // calcolo con offset per non finire sotto la navbar
        const rect = target.getBoundingClientRect();
        const absoluteY = window.pageYOffset + rect.top - NAV_OFFSET;
        window.scrollTo({ top: absoluteY, behavior: 'smooth' });
      }
    });
  });

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
