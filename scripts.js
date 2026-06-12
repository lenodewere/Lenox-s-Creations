document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var header = document.querySelector(".site-header");

  if (!toggle || !header) return;

  toggle.addEventListener("click", function () {
    var isOpen = header.classList.toggle("nav-open");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
});
