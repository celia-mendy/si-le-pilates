export type Lang = "fr" | "en"

const fr = {
  brand: "Si Le Pilates",
  nav: {
    location: "Localisation",
    faq: "FAQ",
    pricing: "Tarifs",
    book: "Réserver",
    palette: "Palette",
    mobileAriaOpen: "Ouvrir le menu",
    mobileAriaClose: "Fermer le menu",
  },
  hero: {
    eyebrow: "Studio de Pilates Reformer",
    title1: "Le Pilates comme une parenthèse",
    title2: "",
    subtitle:
      "Un lieu où le corps se renforce et l'esprit s'apaise.",
    ctaPrimary: "Réserver une séance",
    ctaSecondary: "Découvrir le studio",
    scroll: "Scroll",
  },
  intro: {
    overline: "L'esprit Si Le Pilates",
    title: "Un studio pensé comme un espace suspendu, une bulle où le temps s'efface pour laisser place à l'essentiel.",
    body: "Ici, tout a été imaginé pour retrouver un corps plus aligné, une respiration plus fluide et une sensation d'équilibre durable. Le lieu est calme. La pratique est précise. La réservation reste simple.",
    chips: ["Petit groupe", "50 min", "Pontoise", "Réservation en ligne"],
  },
  studio: {
    overline: "Le studio",
    title: "Un lieu doux et élégant.",
    p1: "Dès l'entrée, Si Le Pilates a été pensé pour que l'on se sente bien. Les matières sont chaleureuses, les tons sont apaisants,\net chaque détail accompagne cette idée d'un mouvement plus conscient.",
    p2: "Les cours se déroulent en petit groupe pour préserver la qualité\nde l'accompagnement et la sensation d'un lieu à taille humaine.",
    imgAlt:
      "Intérieur lumineux du studio Si Le Pilates avec machines Pilates Reformer",
  },
  benefits: {
    overline: "Les bénéfices",
    title: "Renforcer, respirer, retrouver de l'aisance.",
    items: [
      {
        title: "Posture",
        text: "Une pratique qui aide à mieux se tenir, à mieux se placer et à retrouver une sensation de stabilité dans le corps.",
      },
      {
        title: "Tonicité",
        text: "Le corps se renforce en douceur, avec précision, sans brutalité, dans un rythme régulier et soutenable.",
      },
      {
        title: "Équilibre",
        text: "Une séance pour revenir à soi, relâcher certaines tensions et retrouver une respiration plus ample.",
      },
    ],
  },
  experience: {
    overline: "L'expérience",
    title: "Une pratique guidée, dans un cadre serein.",
    subtitle:
      "L'énergie du collectif, avec l'attention et la précision\nqui comptent vraiment.",
    privatisation:
      "Le studio peut être privatisé pour des moments sur mesure. Nous proposons des formats adaptés pour des occasions telles que les enterrements de vie de jeune fille, les séances en duo (couple, mère-fille…), ou encore des sessions dédiées aux entreprises. N'hésitez pas à nous contacter pour imaginer une expérience personnalisée.",
    cta: "Voir les disponibilités",
    formats: [
      {
        title: "Séances privées",
        text: "Un format dédié à celles et ceux qui souhaitent un accompagnement entièrement personnalisé.",
      },
      {
        title: "Cours collectifs",
        text: "Une dynamique douce et motivante, dans un groupe à taille humaine pour pratiquer avec confort.",
      },
    ],
  },
  pricing: {
    overline: "Tarifs",
    title: "Une offre simple pour commencer.",
    subtitle:
      "Une première formule claire, pensée pour découvrir le studio\net installer une pratique régulière.",
    badge: "Offre découverte",
    sessions: "3 séances",
    amount: "90€",
    description:
      "Une manière simple d'entrer dans l'univers\nSi Le Pilates, de découvrir le lieu et de trouver\nvotre rythme.",
    cta: "Réserver maintenant",
  },
  location: {
    overline: "Localisation",
    title: "Au cœur de Pontoise.",
    address: { label: "Adresse", line1: "24, rue Pierre Butin", line2: "95300 Pontoise" },
    contact: { label: "Contact", email: "team@si-lepilates.com" },
  },
  faq: {
    overline: "FAQ",
    title: "Questions fréquentes",
    items: [
      {
        q: "Quelle est la différence entre Pilates Reformer et Fitness Reformer ?",
        a: "Les deux cours se pratiquent sur le même appareil, le Reformer, mais avec des objectifs différents.\n\nPILATES REFORMER : travail en profondeur du gainage, de la posture et de la mobilité, dans une approche douce et contrôlée.\n\nFITNESS REFORMER : séance plus dynamique et cardio, axée sur le renforcement musculaire et la dépense énergétique.",
      },
      {
        q: "Les cours sont-ils accessibles à tous les niveaux ?",
        a: "Les cours sont accessibles à tous, du débutant au pratiquant confirmé. Chaque séance est adaptée au niveau et aux besoins de chacun.",
      },
      {
        q: "Les cours sont-ils mixtes ?",
        a: "Certains créneaux, encadrés par des professeurs masculins, sont ouverts à une pratique mixte.",
      },
      {
        q: "Que faut-il apporter pour une séance ?",
        a: "Nous vous recommandons de venir avec une tenue confortable. Les chaussettes antidérapantes sont conseillées.",
      },
      {
        q: "Y a-t-il des vestiaires sur place ?",
        a: "Un espace d'accueil est à votre disposition pour vous préparer avant la séance.",
      },
      {
        q: "Le planning est-il amené à évoluer ?",
        a: "Oui, le planning est volontairement limité au lancement afin de garantir la qualité de l'accompagnement. De nouveaux créneaux seront progressivement ouverts.",
      },
    ],
  },
  booking: {
    overline: "Réservation",
    title: "Réserver votre séance",
    subtitle:
      "Choisissez votre créneau directement en ligne.\nUne réservation simple, pensée pour revenir facilement chaque\nfois que vous en avez envie.",
  },
  footer: {
    description:
      "Studio de Pilates Reformer à Cergy-Pontoise. Un lieu calme, élégant et simple à réserver pour une pratique qui vous ressemble.",
    instagram: "@silepilatespontoise",
    navTitle: "Navigation",
    contactTitle: "Contact",
    email: "team@si-lepilates.com",
    address: "24, rue Pierre Butin, 95300 Pontoise",
    navItems: [
      { name: "Le studio", href: "#studio" },
      { name: "Tarifs", href: "#tarifs" },
      { name: "Localisation", href: "#localisation" },
      { name: "FAQ", href: "#faq" },
      { name: "Réserver", href: "#booking" },
    ],
    legal: ["Mentions légales", "Confidentialité", "CGV"],
    copyright: "Tous droits réservés.",
  },
}

const en: typeof fr = {
  brand: "Si Le Pilates",
  nav: {
    location: "Location",
    faq: "FAQ",
    pricing: "Pricing",
    book: "Book now",
    palette: "Palette",
    mobileAriaOpen: "Open menu",
    mobileAriaClose: "Close menu",
  },
  hero: {
    eyebrow: "Pilates Reformer Studio",
    title1: "Pilates as a pause",
    title2: "",
    subtitle:
      "A place where the body strengthens and the mind finds calm.",
    ctaPrimary: "Book a session",
    ctaSecondary: "Discover the studio",
    scroll: "Scroll",
  },
  intro: {
    overline: "The Si Le Pilates spirit",
    title: "A studio designed as a suspended space, a bubble where time fades to make room for what matters.",
    body: "Everything here has been crafted to help you find a more aligned body, easier breathing and a lasting sense of balance. The space is calm. The practice is precise. Booking stays simple.",
    chips: ["Small groups", "50 min", "Pontoise", "Online booking"],
  },
  studio: {
    overline: "The studio",
    title: "A soft and elegant space.",
    p1: "From the moment you arrive, Si Le Pilates has been designed to make you feel at ease. The materials are warm, the tones are soothing, and every detail supports the idea of more conscious movement.",
    p2: "Sessions take place in small groups to preserve the quality of guidance and the feeling of a human-scale space.",
    imgAlt:
      "Bright interior of the Si Le Pilates studio with Pilates Reformer machines",
  },
  benefits: {
    overline: "Benefits",
    title: "Strengthen, breathe, find ease.",
    items: [
      {
        title: "Posture",
        text: "A practice that helps you stand taller, move better and rediscover a sense of stability in your body.",
      },
      {
        title: "Strength",
        text: "The body strengthens gently, with precision and no brutality, at a regular and sustainable pace.",
      },
      {
        title: "Balance",
        text: "A session to come back to yourself, release tension and find a deeper, more fluid breath.",
      },
    ],
  },
  experience: {
    overline: "The experience",
    title: "A guided practice, in a serene setting.",
    subtitle:
      "The energy of the group, with the attention and precision that truly matter.",
    privatisation:
      "The studio can be privatised for bespoke moments. We offer tailored formats for occasions such as bachelorette parties, duo sessions (couples, mother-daughter…), or corporate wellness sessions. Feel free to contact us to create a personalised experience.",
    cta: "See availability",
    formats: [
      {
        title: "Private sessions",
        text: "A format for those who want a fully personalised experience and guidance.",
      },
      {
        title: "Group classes",
        text: "A gentle, motivating dynamic in a small, comfortable group setting.",
      },
    ],
  },
  pricing: {
    overline: "Pricing",
    title: "A simple offer to get started.",
    subtitle:
      "A clear introductory package, designed to discover the studio and build a regular practice.",
    badge: "Discovery offer",
    sessions: "3 sessions",
    amount: "€90",
    description:
      "A simple way to enter the Si Le Pilates world, discover the space and find your rhythm.",
    cta: "Book now",
  },
  location: {
    overline: "Location",
    title: "In the heart of Pontoise.",
    address: { label: "Address", line1: "24, rue Pierre Butin", line2: "95300 Pontoise" },
    contact: { label: "Contact", email: "team@si-lepilates.com" },
  },
  faq: {
    overline: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "What is the difference between Pilates Reformer and Fitness Reformer?",
        a: "Both classes are practised on the same machine, the Reformer, but with different goals.\n\nPILATES REFORMER: an in-depth workout focused on core strength, posture, and mobility, in a gentle and controlled approach.\n\nFITNESS REFORMER: a more dynamic, cardio-oriented session focused on muscle strengthening and energy expenditure.",
      },
      {
        q: "Are the classes suitable for all levels?",
        a: "Classes are open to everyone, from complete beginners to experienced practitioners. Each session is adapted to your level and your individual needs.",
      },
      {
        q: "Are the classes mixed gender?",
        a: "Some sessions, led by male instructors, are open to mixed-gender practice.",
      },
      {
        q: "What should I bring to a session?",
        a: "We recommend wearing comfortable workout clothes. Non-slip socks are advised.",
      },
      {
        q: "Are there changing facilities on site?",
        a: "A welcome area is available for you to get ready before your session.",
      },
      {
        q: "Will more time slots be added?",
        a: "Yes — we have intentionally kept the schedule limited at launch to ensure the quality of every session. New slots will be added progressively.",
      },
    ],
  },
  booking: {
    overline: "Booking",
    title: "Book your session",
    subtitle:
      "Choose your time slot directly online. A simple booking experience, designed so you can come back as often as you like.",
  },
  footer: {
    description:
      "Pilates Reformer studio in Cergy-Pontoise. A calm, elegant space, easy to book for a practice that suits you.",
    instagram: "@silepilatespontoise",
    navTitle: "Navigation",
    contactTitle: "Contact",
    email: "team@si-lepilates.com",
    address: "24, rue Pierre Butin, 95300 Pontoise",
    navItems: [
      { name: "The studio", href: "#studio" },
      { name: "Pricing", href: "#tarifs" },
      { name: "Location", href: "#localisation" },
      { name: "FAQ", href: "#faq" },
      { name: "Book", href: "#booking" },
    ],
    legal: ["Legal notice", "Privacy", "Terms"],
    copyright: "All rights reserved.",
  },
}

export const translations = { fr, en }
export type Translations = typeof fr
