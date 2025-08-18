// faq.js
document.addEventListener('DOMContentLoaded', () => {
  try {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems || faqItems.length === 0) return;

    faqItems.forEach(item => {
      // Supporta sia "dt" sia eventuali bottoni con classe .faq-question
      const dt = item.querySelector('dt') || item.querySelector('.faq-question');
      if (!dt) return;

      dt.addEventListener('click', () => {
        // chiude le altre
        faqItems.forEach(i => {
          if (i !== item) i.classList.remove('active');
        });
        // toggle quella cliccata
        item.classList.toggle('active');
      });
    });

    // console.log('faq.js init OK');
  } catch (err) {
    console.error('faq.js error:', err);
  }
});
