// Gestione FAQ interattive
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    // Chiude tutte le altre FAQ
    document.querySelectorAll(".faq-item").forEach((el) => {
      if (el !== item) el.classList.remove("active");
    });
    // Apre/chiude quella cliccata
    item.classList.toggle("active");
  });
});
