<script>
  // toggle hamburger
  document.querySelector('.hamburger')?.addEventListener('click', () => {
    document.querySelector('.navpanel')?.classList.toggle('open');
  });

  // smooth scroll con offset navbar + chiudi menu dopo il click
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const hash = link.getAttribute('href');
    if (!hash || hash === '#') return;

    const target = document.querySelector(hash);
    if (!target) return;

    e.preventDefault();

    const header = document.querySelector('.nav-wrap');
    const offset = (header?.offsetHeight || 64) + 12; // spazio extra

    const y = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });

    // chiudi il pannello mobile se era aperto
    document.querySelector('.navpanel')?.classList.remove('open');
  });
</script>
