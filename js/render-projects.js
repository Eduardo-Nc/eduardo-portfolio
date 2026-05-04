(function () {
  const data = window.PORTFOLIO_DATA;
  if (!data?.projects?.length) return;

  const labels = {
    destacado: "Proyecto propio",
    actual: "Actual · Rankmi",
    freelance: "Freelance",
    web: "Web",
    app: "Apps móviles",
  };

  const container = document.getElementById("projects-grid");
  if (!container) return;

  const order = ["destacado", "actual", "freelance", "web", "app"];

  order.forEach((cat) => {
    const items = data.projects.filter((p) => p.category === cat);
    if (!items.length) return;

    const section = document.createElement("div");
    section.className = "project-group";
    section.setAttribute("data-reveal", "");

    const h = document.createElement("h3");
    h.className = "project-group__title";
    h.textContent = labels[cat] || cat;
    section.appendChild(h);

    const grid = document.createElement("div");
    grid.className = "project-cards";

    items.forEach((p) => {
      const card = document.createElement("article");
      card.className = "card";

      const head = document.createElement("div");
      head.className = "card__head";

      const title = document.createElement("h4");
      title.className = "card__title";
      title.textContent = p.name;
      head.appendChild(title);

      if (p.role) {
        const role = document.createElement("p");
        role.className = "card__role";
        role.textContent = p.role;
        head.appendChild(role);
      }

      card.appendChild(head);

      const desc = document.createElement("p");
      desc.className = "card__desc";
      desc.textContent = p.description;
      card.appendChild(desc);

      if (p.stack?.length) {
        const tags = document.createElement("ul");
        tags.className = "tags";
        p.stack.forEach((t) => {
          const li = document.createElement("li");
          li.className = "tag";
          li.textContent = t;
          tags.appendChild(li);
        });
        card.appendChild(tags);
      }

      if (p.links?.length) {
        const actions = document.createElement("div");
        actions.className = "card__actions";
        p.links.forEach((link) => {
          const a = document.createElement("a");
          a.href = link.url;
          a.className = "btn btn--ghost btn--sm";
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = link.label;
          actions.appendChild(a);
        });
        card.appendChild(actions);
      }

      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });
})();
