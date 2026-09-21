// Array global de tecnologías con iconos
export const technologies = [
  { name: "PHP & Laravel", icon: "https://cdn.simpleicons.org/laravel/F05340" },
  { name: "javascript", icon: "https://cdn.simpleicons.org/javascript/339933" },
  { name: "Astro", icon: "https://cdn.simpleicons.org/astro/white" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Vue.js", icon: "https://cdn.simpleicons.org/vue.js/4FC08D" },
  { name: "Nuxt.js", icon: "https://cdn.simpleicons.org/nuxt/00DC82" },
  { name: "Jira", icon: "https://cdn.simpleicons.org/jira/0052CC" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/00DC82" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/00DC82" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/00DC82" },

  { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
  { name: "Dart", icon: "https://cdn.simpleicons.org/dart/0175C2" },
  { name: "NuxtUI", icon: "https://cdn.simpleicons.org/nuxt/00DC82" },
  { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
  { name: "Svelte", icon: "https://cdn.simpleicons.org/svelte/FF3E00" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
];

// Stack principal (lo que domino día a día)
export const mainTechStack = [
  {
    name: "PHP / Laravel",
    icon: "https://cdn.simpleicons.org/laravel/F05340",
    desc: "APIs REST, autenticación y lógica de negocio",
  },
  {
    name: "Vue / Nuxt",
    icon: "https://cdn.simpleicons.org/nuxt/00DC82",
    desc: "SPA/SSR, componentes reutilizables y estado",
  },
  {
    name: "Git",
    icon: "https://cdn.simpleicons.org/git/F05032",
    desc: "Control de versiones y trabajo en equipo",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    desc: "Modelado de datos y consultas eficientes",
  },
];

// Otras tecnologías: curiosidad y proyectos de aprendizaje
export const otherTechStack = [
  "javascript",
  "TypeScript",
  "Astro",
  "Tailwind",
  "Svelte",
  "Vite",
  "Supabase",
  "MySQL",
  "Python",
  "Flutter",
];

// Metodologías y competencias blandas
export const methodologies = [
  {
    name: "Trabajo en equipo y comunicación",
    icon: "https://api.iconify.design/mdi/account-group.svg?color=64ffda",
  },
  {
    name: "Metodologías ágiles (Scrum / Kanban)",
    icon: "https://api.iconify.design/mdi/view-column-outline.svg?color=64ffda",
  },
  {
    name: "Gestión de tareas con Jira",
    icon: "https://api.iconify.design/mdi/clipboard-text-outline.svg?color=64ffda",
  },
  {
    name: "Desarrollo asistido por IA",
    icon: "https://api.iconify.design/mdi/robot-outline.svg?color=64ffda",
  },
  {
    name: "Resolución de problemas y debugging",
    icon: "https://api.iconify.design/mdi/bug-outline.svg?color=64ffda",
  },
  {
    name: "Aprendizaje continuo y adaptabilidad",
    icon: "https://api.iconify.design/mdi/lightbulb-on-outline.svg?color=64ffda",
  },
];

export const info = {
  name: "Javier Pacheco",
  role: "Junior Full Stack Developer",

  bio: "Hola, soy Javier Pacheco, desarrollador Full Stack Jr y Técnico Superior Universitario (TSU) graduado en el IUJO Barquisimeto. Disfruto convertir ideas en aplicaciones web eficientes y escalables, y aprender algo nuevo en cada proyecto (esta web está desarrollada con Astro). Actualmente busco oportunidades para seguir creciendo profesionalmente.",

  highlights: [
    "Interfaces web responsive, con foco en UI y experiencia de usuario.",
    "Consumo y desarrollo de APIs REST, con manejo y control de errores.",
    "Modelado y consultas en bases de datos relacionales (PostgreSQL, MySQL).",
    "Trabajo en equipo con Git bajo metodologías ágiles (Jira).",
  ],

  contact: {
    emails: ["hola@alexitodev.me", "Javieralexfeik@gmail.com"],
    phones: ["+584245514100", "+584121037372"]
  },

  techStack: [
    "PHP & Laravel",
    "javascript",
    "Astro",
    "Tailwind",
    "Vue.js",
    "Nuxt.js",
    "Jira",
    "PostgreSQL",
    "Supabase",
    "Vite",
    "Python",
    "MySQL",
    "Svelte"
  ],

  socials: [
    {
      name: "GitHub",
      icon: "https://api.iconify.design/mdi/github.svg",
      url: "https://github.com/Alexitooooooooooooooo"
    },
    {
      name: "LinkedIn",
      label: "Javier Pacheco",
      icon: "https://api.iconify.design/mdi/linkedin.svg",
      url: "https://www.linkedin.com/in/javier-pacheco-020186381/"
    },
    {
      name: "Instagram",
      icon: "https://api.iconify.design/mdi/instagram.svg",
      url: "https://www.instagram.com/javieralex__17/"
    },
    {
      name: "Discord",
      label: "javieralex17",
      icon: "https://api.iconify.design/mdi/discord.svg",
      url: "https://discord.com/users/955418833013858334"
    }
  ],

  experience: [
    {
      company: "JuegaEnLinea",
      role: "Full Stack Developer Jr",
      date: "2026 - 12/01 - Actualidad",
      desc: "Full Stack Developer participando activamente en la plataforma general de JuegaEnLinea (JEL), donde como Frontend desarrollé e implementé interfaces de usuario (UI), mejoras visuales y diseño responsive: componentes reutilizables, adaptación a dispositivos móviles, animaciones y optimización de la experiencia de usuario en el sitio público. También trabajo en el software interno de la empresa, consumiendo y desarrollando APIs REST, manejo y control de errores, pruebas de endpoints con Postman, integración con bases de datos y lógica de negocio del backend."
    },
    {
      company: "JuegaEnLinea",
      role: "Full Stack Developer Jr",
      date: "2025 (Septiembre) - 2025 (Diciembre)",
      desc: "Pasante en el equipo de software interno de JuegaEnLinea, donde participe en el desarrollo de software interno desde cero con el objetivo de poner a prueba y desenvolver mis capacidades Full Stack. Participé en la creación y uso de bases de datos, el funcionamiento e integración de llamadas a APIs, la lógica de negocio del backend, corrección de errores y despliegue de funcionalidades, siguiendo metodologías ágiles con Jira."
    }
  ],

  projects: [
    {
      title: "AlexitoCasino",
      desc: "Plataforma de casino con juegos de slots realizados por mí, sesiones robustas y un sistema de historial sobre una API en Laravel con Sanctum y front en Nuxt con PrimeVue.",
      features: [
        "Slots propios y sesiones de juego robustas.",
        "Autenticación con Laravel Sanctum y API dedicada.",
        "Historial de partidas y panel de usuario.",
      ],
      tags: ["Tailwind", "PHP & Laravel", "Nuxt.js", "Vue.js"],
      url: "https://casino.alexitodev.me/"
    },
    {
      title: "Portafolio",
      desc: "Portafolio personal desarrollado con Astro y Tailwind, con layout en contenedores y carrusel de proyectos responsive.",
      features: [
        "Diseño responsive y layout en contenedores.",
        "Secciones modulares y componentes reutilizables.",
        "Build estático y optimizado con Astro.",
      ],
      tags: ["Tailwind", "Astro"],
      url: "https://alexitodev.me/",
      gitHub: "https://github.com/Alexitooooooooooooooo/Portfolio"
    },
    {
      title: "Pokelite",
      desc: "Roguelite táctico de Pokémon con combates en tiempo real (Phaser), sistema de tipos, items equipables, golpes críticos, gimnasios y capturas. Estilo visual retro pixel-art inspirado en GBA/DS.",
      features: [
        "Combates tácticos en tiempo real con Phaser.",
        "Sistema de tipos, items equipables y golpes críticos.",
        "Gimnasios, capturas y progresión roguelite.",
      ],
      tags: ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind"],
    },
    {
      title: "Pokédex Quiz",
      desc: "Minijuego interactivo de adivinanza de Pokémon con modo singleplayer y multiplayer en tiempo real: salas con código de invitación, rondas sincronizadas, ranking en vivo y eliminación de jugadores.",
      features: [
        "Multijugador en tiempo real con salas por código.",
        "Ranking en vivo, vidas y puntuación por velocidad/cercanía.",
        "Autocompletado sobre 1025 Pokémon y reconexión automática.",
      ],
      tags: ["Vue.js", "Tailwind", "Supabase", "Vite", "javascript"],
      url: "https://pokedex.alexitodev.me/"
    },
    {
      title: "Swipe-Flutter",
      desc: "Photo Swipe es una aplicación móvil desarrollada en Flutter que te ayuda a organizar y limpiar tu galería de fotos de manera rápida, divertida e inteligente.",
      features: [
        "Swipe estilo Tinder para ordenar la galería.",
        "App móvil multiplataforma en Flutter.",
        "Organización rápida e inteligente de fotos.",
      ],
      tags: ["Flutter", "Dart", "Tailwind", "Android Studio"],
      gitHub: "https://github.com/Alexitooooooooooooooo/swipe_galley_flutter"
    },
  ]
};
