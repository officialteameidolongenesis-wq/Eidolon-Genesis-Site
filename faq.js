// faq.js
document.addEventListener('DOMContentLoaded', () => {
  try {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems || faqItems.length === 0) return;

    faqItems.forEach(item => {
      const trigger = item.querySelector('dt, .faq-question');
      if (!trigger) return;

      trigger.style.cursor = 'pointer'; // indica che è cliccabile

      trigger.addEventListener('click', () => {
        // Chiudi tutte le altre
        faqItems.forEach(i => {
          if (i !== item) i.classList.remove('active');
        });
        // Apri/chiudi questa
        item.classList.toggle('active');
      });
    });
  } catch (err) {
    console.error('faq.js error:', err);
