/**
 * Portafolio — añade o edita entradas aquí.
 * category: "destacado" | "actual" | "freelance" | "web" | "app"
 */
window.PORTFOLIO_DATA = {
  meta: {
    name: "Luis Eduardo Negrón Chan",
    title: "Desarrollador Full Stack · Mobile-first",
    email: "eduardo-negron@live.com",
    phone: "+52 997 121 0804",
    phoneTel: "+529971210804",
    location: "Mérida, Yucatán, México",
    github: "https://github.com/Eduardo-Nc",
    linkedin: "",
  },
  highlights: [
    "Full Stack con fuerte enfoque en React Native y ecosistema JavaScript/TypeScript.",
    "Actualmente en Rankmi: refactor y evolución de apps nativas y plataforma de mensajería interna.",
    "Freelance con Ativar: nuevos módulos, mantenimiento y productos web y móviles.",
  ],
  projects: [
    {
      category: "destacado",
      name: "MuniGo",
      role: "Proyecto personal (ratos libres)",
      description:
        "Plataforma y apps desde cero: delivery y servicios locales en Yucatán. Desarrollé la experiencia móvil en Android e iOS, integración con backend y sitio público. Incluye pedidos, negocios locales, mapa y flujos de cliente y comercio.",
      stack: ["React Native", "Node.js", "Web"],
      links: [
        { label: "Android", url: "https://play.google.com/store/apps/details?id=com.munigo&hl=es_CR" },
        { label: "iOS", url: "https://apps.apple.com/mx/app/munigo/id6759479106" },
        { label: "Web", url: "https://munigoserver.onrender.com/" },
      ],
    },
    {
      category: "actual",
      name: "Rankmi (app principal)",
      role: "Desarrollador mobile · Rankmi",
      description:
        "Refactorización y mejoras continuas de la aplicación corporativa de gestión de personas: rendimiento, arquitectura y nuevas capacidades en Android e iOS.",
      stack: ["React Native", "iOS", "Android"],
      links: [
        { label: "Android", url: "https://play.google.com/store/apps/details?id=com.rankmi.rkm&hl=es" },
        { label: "iOS", url: "https://apps.apple.com/mx/app/rankmi/id1502945790" },
        { label: "Rankmi", url: "https://www.rankmi.com/es/" },
      ],
    },
    {
      category: "actual",
      name: "ChatMi",
      role: "Desarrollador mobile · Rankmi",
      description:
        "Mensajería interna tipo Slack para colaboradores: chats, archivos, notificaciones y experiencia fluida en dispositivos móviles.",
      stack: ["React Native", "Comunicación en tiempo real"],
      links: [
        { label: "iOS", url: "https://apps.apple.com/mx/app/chatmi/id6639618006" },
        { label: "Android", url: "https://play.google.com/store/apps/details?id=com.rankmi.chat&hl=es" },
      ],
    },
    {
      category: "freelance",
      name: "Ativar Software",
      role: "Freelance — soporte, módulos y mantenimiento",
      description:
        "Apoyo en distintos productos: aplicaciones móviles, sitios web y dashboards. Nuevas funcionalidades, correcciones y evolución de código.",
      stack: ["React Native", "React", "Web"],
      links: [{ label: "Sitio", url: "https://www.ativar.com.mx/es" }],
    },
    {
      category: "web",
      name: "Excellence Group",
      description: "Sitio corporativo.",
      stack: ["Web"],
      links: [{ label: "Visitar", url: "https://www.excellencegroup.mx/" }],
    },
    {
      category: "web",
      name: "Inmobiliaria Koolel Kaab",
      description: "Web inmobiliaria.",
      stack: ["Web"],
      links: [{ label: "Visitar", url: "https://inmobiliaria-koolel-kaab.com.mx/" }],
    },
    {
      category: "web",
      name: "Beyond Life",
      description: "Producto web.",
      stack: ["Web"],
      links: [{ label: "Visitar", url: "https://www.beyondlife.app/" }],
    },
    {
      category: "web",
      name: "Zona Luz",
      description: "Sitio web.",
      stack: ["Web"],
      links: [{ label: "Visitar", url: "https://www.zonaluz.mx/" }],
    },
    {
      category: "web",
      name: "Busco Encuentro — Landing",
      description: "Landing page.",
      stack: ["Web"],
      links: [{ label: "Visitar", url: "https://landingpage.buscoencuentro.mx/" }],
    },
    {
      category: "web",
      name: "Grupo Citra",
      description: "Sitio corporativo.",
      stack: ["Web"],
      links: [{ label: "Visitar", url: "https://www.grupocitra.com.mx/inicio" }],
    },
    {
      category: "web",
      name: "El Pollo Rico",
      description: "Sitio web.",
      stack: ["Web"],
      links: [{ label: "Visitar", url: "https://elpollorico.com.mx/" }],
    },
    {
      category: "app",
      name: "Busco Encuentro",
      description: "Aplicación móvil.",
      stack: ["React Native"],
      links: [
        { label: "Android", url: "https://play.google.com/store/apps/details?id=com.inovaappsbuscoencuentro" },
      ],
    },
    {
      category: "app",
      name: "Farmacias del Ahorro",
      description: "App móvil.",
      stack: ["React Native"],
      links: [
        { label: "Android", url: "https://play.google.com/store/apps/details?id=com.farmaciasahorro&hl=es_MX" },
      ],
    },
    {
      category: "app",
      name: "Telstock — TManager",
      description: "Telemetría y gestión.",
      stack: ["React Native"],
      links: [
        { label: "Android", url: "https://play.google.com/store/apps/details?id=com.telstock.tmanager&hl=es_MX" },
      ],
    },
    {
      category: "app",
      name: "Telstock — ClickIt",
      description: "Aplicación móvil.",
      stack: ["React Native"],
      links: [
        { label: "Android", url: "https://play.google.com/store/apps/details?id=com.telstock.clickit&hl=es_MX" },
      ],
    },
    {
      category: "app",
      name: "Telstock — TM Retails",
      description: "Retail móvil.",
      stack: ["React Native"],
      links: [
        { label: "Android", url: "https://play.google.com/store/apps/details?id=com.telstock.tmretails&hl=es_MX" },
      ],
    },
    {
      category: "app",
      name: "Grupo Excellence móvil",
      description: "App cliente.",
      stack: ["React Native"],
      links: [
        { label: "Android", url: "https://play.google.com/store/apps/details?id=com.groupexcelencemovil3&hl=es_MX" },
      ],
    },
    {
      category: "app",
      name: "Beyond Life",
      description: "App móvil.",
      stack: ["React Native"],
      links: [
        { label: "Android", url: "https://play.google.com/store/apps/details?id=com.beyondlife&hl=es_MX" },
      ],
    },
  ],
};
