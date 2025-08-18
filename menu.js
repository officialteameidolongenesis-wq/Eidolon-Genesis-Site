document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navpanel = document.getElementById("navpanel");

  if (hamburger && navpanel) {
    hamburger.addEventListener("click", () => {
      navpanel.classList.toggle("open");
      hamburger.setAttribute(
        "aria-expanded",
        navpanel.classList.contains("open")
      );
    });
  }
});
