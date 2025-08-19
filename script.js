<script>
document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq-item");

  faqs.forEach(item => {
    item.addEventListener("click", () => {
      // se vuoi che solo UNA FAQ si apra alla volta
      faqs.forEach(i => {
        if (i !== item) i.classList.remove("active");
      });

      // toggle della faq cliccata
      item.classList.toggle("active");
    });
  });
});
</script>
