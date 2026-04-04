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
    title1: "Le calme du lieu.",
    title2: "La simplicité\npour réserver.",
    subtitle:
      "Si Le Pilates est un studio de Pilates Reformer à Cergy-Pontoise,\npensé pour offrir une expérience élégante, apaisante et facile à vivre.",
    ctaPrimary: "Réserver une séance",
    ctaSecondary: "Découvrir le studio",
    scroll: "Scroll",
  },
  intro: {
    overline: "L'esprit Si Le Pilates",
    title: "Un studio pensé comme une parenthèse.",
    body: "Ici, tout a été imaginé pour retrouver un corps plus aligné, une respiration plus fluide et une sensation d'équilibre durable. Le lieu est calme. La pratique est précise. La réservation reste simple.",
    chips: ["Petit groupe", "45 min", "Cergy-Pontoise", "Réservation en ligne"],
  },
  studio: {
    overline: "Le studio",
    title: "Un lieu doux, élégant et lumineux.",
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
    title: "Au cœur de Cergy-Pontoise.",
    body: "Un studio accessible, apaisant et pensé\ncomme une vraie bulle dans le rythme du quotidien.",
    address: { label: "Adresse", line1: "34, rue Pierre Butin", line2: "95300 Pontoise" },
    access: {
      label: "Accès",
      text: "Confirmation envoyée par email\naprès réservation avec toutes les informations utiles.",
    },
    contact: { label: "Contact", email: "contact@silpilate.fr" },
  },
  faq: {
    overline: "FAQ",
    title: "Questions fréquentes",
    items: [
      {
        q: "Le studio est-il accessible aux débutants ?",
        a: "Oui. Les séances sont pensées pour accueillir aussi bien les débutants que les personnes ayant déjà une pratique régulière.",
      },
      {
        q: "Comment réserver une séance ?",
        a: "La réservation se fait en ligne, en choisissant directement le créneau qui vous convient en bas de cette page.",
      },
      {
        q: "Y a-t-il des cours en petit groupe ?",
        a: "Oui. Si Le Pilates privilégie les petits groupes afin de conserver une pratique confortable et un accompagnement attentif.",
      },
      {
        q: "Recevrai-je une confirmation après réservation ?",
        a: "Oui. Une confirmation vous est envoyée immédiatement après la réservation, avec les informations utiles.",
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
    instagram: "@silpilate",
    navTitle: "Navigation",
    contactTitle: "Contact",
    email: "contact@silpilate.fr",
    address: "34, rue Pierre Butin, 95300 Pontoise",
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
    title1: "The calm of the space.",
    title2: "The simplicity of booking.",
    subtitle:
      "Si Le Pilates is a Pilates Reformer studio in Cergy-Pontoise, designed to offer an elegant, soothing and effortless experience.",
    ctaPrimary: "Book a session",
    ctaSecondary: "Discover the studio",
    scroll: "Scroll",
  },
  intro: {
    overline: "The Si Le Pilates spirit",
    title: "A studio designed as a pause.",
    body: "Everything here has been crafted to help you find a more aligned body, easier breathing and a lasting sense of balance. The space is calm. The practice is precise. Booking stays simple.",
    chips: ["Small groups", "45 min", "Cergy-Pontoise", "Online booking"],
  },
  studio: {
    overline: "The studio",
    title: "A gentle, elegant and bright space.",
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
    title: "In the heart of Cergy-Pontoise.",
    body: "An accessible, soothing studio, designed as a true refuge from the daily rhythm.",
    address: { label: "Address", line1: "34, rue Pierre Butin", line2: "95300 Pontoise" },
    access: {
      label: "Access",
      text: "A confirmation email is sent immediately after booking with all the details you need.",
    },
    contact: { label: "Contact", email: "contact@silpilate.fr" },
  },
  faq: {
    overline: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "Is the studio suitable for beginners?",
        a: "Yes. Sessions are designed to welcome both beginners and those who already have a regular practice.",
      },
      {
        q: "How do I book a session?",
        a: "Booking is done online — simply choose a time slot that suits you from the widget at the bottom of this page.",
      },
      {
        q: "Are there small group classes?",
        a: "Yes. Si Le Pilates prioritises small groups to maintain a comfortable practice and attentive guidance.",
      },
      {
        q: "Will I receive a confirmation after booking?",
        a: "Yes. A confirmation is sent immediately after booking, with all the useful information.",
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
    instagram: "@silpilate",
    navTitle: "Navigation",
    contactTitle: "Contact",
    email: "contact@silpilate.fr",
    address: "34, rue Pierre Butin, 95300 Pontoise",
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
