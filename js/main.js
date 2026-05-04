(function () {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("nav-toggle");
  const links = document.querySelectorAll(".nav__link");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function closeMenu() {
    nav?.classList.remove("nav--open");
    toggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  toggle?.addEventListener("click", () => {
    const open = nav?.classList.toggle("nav--open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("menu-open", !!open);
  });

  links.forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!reduceMotion.matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { rootMargin: "0px 0px -48px 0px", threshold: 0.08 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
  } else {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
  }
})();
