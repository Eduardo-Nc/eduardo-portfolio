/**
 * Portafolio — añade o edita entradas aquí.
 * category: "destacado" | "actual" | "freelance" | "web" | "app"
 * freelance: usa spotlight: true para tarjetas anchas (trabajo reciente); omitir o false para apoyo continuo.
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
    "Freelance: Beter (IA y gemelo profesional), dashboards WispKonet y TopInvestment, y apoyo continuo a Ativar.",
  ],
  /** Texto opcional bajo el título de cada grupo de proyectos (clave = category) */
  groupIntros: {
    actual:
      "Rankmi es una plataforma de gestión de personas y RR. HH. cuyo lema es «Personas + IA». En el equipo se nos ha fomentado integrar la inteligencia artificial en el día a día —por ejemplo con asistentes como Cursor— para optimizar tiempos de desarrollo, pruebas e investigación, sin sustituir el criterio del equipo.",
  },
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
      spotlight: true,
      name: "Beter (Beyond the Reset)",
      role: "Freelance — plataforma legal · mejoras recientes",
      description:
        "Evolución de la plataforma y las apps móviles: fortalecí el módulo de IA, incorporé el módulo de Gemelo profesional (el abogado sube su información y moldea su gemelo; con IA, ante solicitudes de clientes el gemelo atiende u orienta cuando el profesional no está en línea) y apliqué mejoras visuales y de rendimiento en conjunto.",
      stack: ["IA", "React Native", "Web", "Legal tech"],
      links: [
        { label: "Web", url: "https://beyondthereset.com/" },
        { label: "iOS", url: "https://apps.apple.com/us/app/beter/id1612101602" },
        { label: "Android", url: "https://play.google.com/store/apps/details?id=com.avalerroux.app" },
      ],
    },
    {
      category: "freelance",
      spotlight: true,
      name: "WispKonet — dashboard ISP",
      role: "Freelance · panel interno",
      description:
        "Dashboard para operación de un proveedor de internet: visibilidad de clientes, servicios y tareas del día a día desde un solo panel.",
      stack: ["Dashboard", "Web", "ISP"],
      links: [{ label: "Demo / panel", url: "https://wispkonet-ff90730841dc.herokuapp.com/" }],
    },
    {
      category: "freelance",
      spotlight: true,
      name: "TopInvestment — CRM inmobiliario",
      role: "Freelance · lotes y propiedades en Yucatán",
      description:
        "CRM orientado a la venta de lotes y propiedades en Yucatán: seguimiento de leads, inventario y flujo comercial. Desarrollé también apps Android e iOS asociadas al producto.",
      stack: ["CRM", "Web", "React Native"],
      links: [{ label: "Demo CRM", url: "https://topinvestments-3907f58ff983.herokuapp.com/" }],
      footnote:
        "Las aplicaciones móviles existen en entornos de prueba; aún no están publicadas en Google Play ni App Store.",
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
