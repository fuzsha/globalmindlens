document.addEventListener("DOMContentLoaded", () => {
  // Load Header
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      const headerPlaceholder = document.getElementById("header-placeholder");
      if (!headerPlaceholder) return;
      headerPlaceholder.innerHTML = data;

      // Auto-highlight current page
      const normalize = page => (page === "/" || page === "" ? "index.html" : page);
      const currentPage = normalize(window.location.pathname.split("/").pop());
      document.querySelectorAll(".main-nav a").forEach(link => {
        if (normalize(link.getAttribute("href")) === currentPage) {
          link.classList.add("active");
        }
      });

      // Mobile menu toggle
      const menuToggle = document.getElementById("menuToggle");
      const navLinks = document.getElementById("navLinks");

      if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
          navLinks.classList.toggle("open-menu");
        });

        // Close menu on link click (mobile)
        navLinks.querySelectorAll("a").forEach(a => {
          a.addEventListener("click", () => {
            navLinks.classList.remove("open-menu");
          });
        });
      }
    });

  // Load Footer
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      const footerPlaceholder = document.getElementById("footer-placeholder");
      if (!footerPlaceholder) return;
      footerPlaceholder.innerHTML = data;

      const yearSpan = document.getElementById("year");
      if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
      }
    });
});
