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

  function buildCard(p, options) {
    const spotlight = !!(options && options.spotlight);
    const card = document.createElement("article");
    card.className = "card" + (spotlight ? " card--spotlight" : "");

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

    if (p.footnote) {
      const note = document.createElement("p");
      note.className = "card__footnote";
      note.textContent = p.footnote;
      card.appendChild(note);
    }

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

    return card;
  }

  order.forEach((cat) => {
    const items = data.projects.filter((pr) => pr.category === cat);
    if (!items.length) return;

    const section = document.createElement("div");
    section.className = "project-group";
    section.setAttribute("data-reveal", "");

    const h = document.createElement("h3");
    h.className = "project-group__title";
    h.textContent = labels[cat] || cat;
    section.appendChild(h);

    const introText = data.groupIntros && data.groupIntros[cat];
    if (introText && cat !== "freelance") {
      const intro = document.createElement("p");
      intro.className = "project-group__intro";
      intro.textContent = introText;
      section.appendChild(intro);
    }

    if (cat === "freelance") {
      const intro = document.createElement("p");
      intro.className = "freelance-intro";
      intro.textContent =
        "Colaboraciones recientes fuera de mi rol principal: productos con IA, paneles operativos y CRM, además del apoyo continuo a clientes.";
      section.appendChild(intro);

      const spotlightItems = items.filter((p) => p.spotlight);
      const ongoingItems = items.filter((p) => !p.spotlight);

      if (spotlightItems.length) {
        const spotLabel = document.createElement("p");
        spotLabel.className = "freelance-subhead";
        spotLabel.textContent = "Destacado — últimos meses";
        section.appendChild(spotLabel);

        const gridSpot = document.createElement("div");
        gridSpot.className = "project-cards project-cards--freelance-spotlight";
        spotlightItems.forEach((p) => gridSpot.appendChild(buildCard(p, { spotlight: true })));
        section.appendChild(gridSpot);
      }

      if (ongoingItems.length) {
        const sub = document.createElement("p");
        sub.className = "freelance-subhead freelance-subhead--secondary";
        sub.textContent = "Apoyo continuo";
        section.appendChild(sub);

        const gridRest = document.createElement("div");
        gridRest.className = "project-cards project-cards--freelance-secondary";
        ongoingItems.forEach((p) => gridRest.appendChild(buildCard(p, { spotlight: false })));
        section.appendChild(gridRest);
      }

      container.appendChild(section);
      return;
    }

    const grid = document.createElement("div");
    grid.className = "project-cards";
    items.forEach((p) => grid.appendChild(buildCard(p, { spotlight: false })));
    section.appendChild(grid);
    container.appendChild(section);
  });
})();
