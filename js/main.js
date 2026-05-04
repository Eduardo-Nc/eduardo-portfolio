(function () {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("nav-toggle");
  const scrim = document.getElementById("nav-scrim");
  const links = document.querySelectorAll(".nav__link");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const mqMobile = window.matchMedia("(max-width: 720px)");

  function syncNavHidden() {
    if (!nav) return;
    if (!mqMobile.matches) {
      nav.removeAttribute("aria-hidden");
      return;
    }
    nav.setAttribute("aria-hidden", nav.classList.contains("nav--open") ? "false" : "true");
  }

  function setMenuOpen(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("nav--open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Cerrar menú de navegación" : "Abrir menú de navegación");
    document.body.classList.toggle("menu-open", open);
    if (scrim) {
      scrim.setAttribute("aria-hidden", open ? "false" : "true");
    }
    syncNavHidden();
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  toggle?.addEventListener("click", () => {
    const open = !nav?.classList.contains("nav--open");
    setMenuOpen(open);
  });

  scrim?.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav?.classList.contains("nav--open")) {
      closeMenu();
      toggle?.focus();
    }
  });

  links.forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  mqMobile.addEventListener("change", () => {
    if (!mqMobile.matches) closeMenu();
    syncNavHidden();
  });
  syncNavHidden();

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
