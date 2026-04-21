export type Lang = "fr" | "en"

const fr = {
  brand: "[Si] Le Pilates",
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
    imgAlt2: "Détail floral du studio",
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
    cta: "Réserver",
    popularBadge: "Populaire",
    cards: [
      {
        name: "Séance découverte",
        price: "25 €",
        credits: "1 crédit",
        validity: "Valide 1 mois",
        restrictions: ["Nouveaux membres", "1 achat / membre"],
        description:
          "Idéal pour découvrir l'univers du pilates au sein de notre studio. Venez tester notre méthode, rencontrer nos coachs et ressentir les premiers bienfaits du Pilates sur votre corps et votre esprit.",
        featured: false,
        href: "https://backoffice.bsport.io/customer/payment/pass/730920/?membership=5398&force=true",
      },
      {
        name: "1 Séance",
        price: "38 €",
        credits: "1 crédit",
        validity: "Valide 1 mois",
        restrictions: [] as string[],
        description:
          "Pas d'engagement, juste du plaisir. Une séance de 50 minutes pour se recentrer, renforcer sa sangle abdominale et se libérer des tensions du quotidien. Le format idéal pour les agendas chargés ou les envies spontanées.",
        featured: false,
        href: "https://backoffice.bsport.io/customer/payment/pass/730921/?membership=5398&force=true",
      },
      {
        name: "3 Séances",
        price: "99 €",
        credits: "3 crédits",
        validity: "Valide 2 mois",
        restrictions: [] as string[],
        description:
          "Trois séances pour initier le changement. Le format parfait pour poser les bases de votre pratique, corriger votre posture et commencer à tonifier votre sangle abdominale en profondeur.",
        featured: false,
        href: "https://backoffice.bsport.io/customer/payment/pass/730923/?membership=5398&force=true",
      },
      {
        name: "5 Séances",
        price: "145 €",
        credits: "5 crédits",
        validity: "Valide 3 mois",
        restrictions: [] as string[],
        description:
          "La formule préférée de nos élèves réguliers. Cinq séances pour ancrer vos nouvelles habitudes, gagner en souplesse et ressentir une progression visible sur votre silhouette et votre vitalité au quotidien.",
        featured: true,
        href: "https://backoffice.bsport.io/customer/payment/pass/730924/?membership=5398&force=true",
      },
      {
        name: "10 Séances",
        price: "250 €",
        credits: "10 crédits",
        validity: "Valide 4 mois",
        restrictions: [] as string[],
        description:
          "Le choix de la régularité et du résultat. Dix séances pour sculpter votre corps en profondeur et intégrer durablement le Pilates à votre style de vie. Profitez de notre tarif le plus avantageux à la séance !",
        featured: false,
        href: "https://backoffice.bsport.io/customer/payment/pass/730926/?membership=5398&force=true",
      },
    ],
  },
  location: {
    overline: "Localisation",
    title: "Au cœur de Pontoise.",
    address: { label: "Adresse", line1: "24, rue Pierre Butin", line2: "95300 Pontoise" },
    contact: { label: "Contact", email: "team@si-lepilates.com" },
    transport: {
      label: "Venir en transports",
      text: "La gare de Pontoise est à 5 minutes à pied — un trajet court pour commencer à décompresser avant même d'arriver.",
    },
    parking: {
      label: "Venir en voiture",
      text: "Un parking public se trouve à moins de 5 minutes côté Oise, avec 30 minutes gratuites à l'arrivée. Des places en voirie sont souvent disponibles rue du Vert Buisson et rue Truffaut.",
    },
  },
  faq: {
    overline: "FAQ",
    title: "Questions fréquentes",
    items: [
      {
        q: "Quelle est la différence entre Pilates Reformer et Fitness Reformer ?",
        a: "Les deux cours se pratiquent sur le même appareil — le reformer — mais l'expérience est très différente !\n\n• Pilates Reformer\nCours basé sur la méthode Pilates originale. On travaille en profondeur : alignement, respiration, muscles posturaux. Les mouvements sont lents et précis. Idéal si vous voulez prendre soin de votre corps, corriger votre posture ou récupérer d'une blessure.\n\n• Fitness Reformer\nMême appareil, ambiance différente ! Les exercices sont plus dynamiques et rythmés. L'objectif : tonifier, dépenser de l'énergie et transpirer. Parfait si vous cherchez un vrai workout sur reformer.",
      },
      {
        q: "À qui s'adressent les cours ?",
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
      "Studio de Pilates Reformer à Pontoise.\nUn lieu calme, élégant et simple à réserver pour une pratique qui vous ressemble.",
    instagram: "@silepilatespontoise",
    navTitle: "Navigation",
    contactTitle: "Contact",
    email: "team@si-lepilates.com",
    address: "24, rue Pierre Butin,\n95300 Pontoise",
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
  brand: "[Si] Le Pilates",
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
    imgAlt2: "Floral detail of the studio",
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
    cta: "Book",
    popularBadge: "Popular",
    cards: [
      {
        name: "Discovery session",
        price: "€25",
        credits: "1 credit",
        validity: "Valid 1 month",
        restrictions: ["New members only", "1 purchase / member"],
        description:
          "The perfect way to discover the world of Pilates at our studio. Come test our method, meet our coaches and feel the first benefits of Pilates on your body and mind.",
        featured: false,
        href: "https://backoffice.bsport.io/customer/payment/pass/730920/?membership=5398&force=true",
      },
      {
        name: "1 Session",
        price: "€38",
        credits: "1 credit",
        validity: "Valid 1 month",
        restrictions: [] as string[],
        description:
          "No commitment, just enjoyment. A 50-minute session to recentre, strengthen your core and release the tensions of daily life. The ideal format for busy schedules or spontaneous visits.",
        featured: false,
        href: "https://backoffice.bsport.io/customer/payment/pass/730921/?membership=5398&force=true",
      },
      {
        name: "3 Sessions",
        price: "€99",
        credits: "3 credits",
        validity: "Valid 2 months",
        restrictions: [] as string[],
        description:
          "Three sessions to initiate change. The perfect format to lay the foundations of your practice, correct your posture and start toning your core in depth.",
        featured: false,
        href: "https://backoffice.bsport.io/customer/payment/pass/730923/?membership=5398&force=true",
      },
      {
        name: "5 Sessions",
        price: "€145",
        credits: "5 credits",
        validity: "Valid 3 months",
        restrictions: [] as string[],
        description:
          "Our regular students' favourite package. Five sessions to anchor your new habits, gain flexibility and feel a visible improvement in your silhouette and everyday vitality.",
        featured: true,
        href: "https://backoffice.bsport.io/customer/payment/pass/730924/?membership=5398&force=true",
      },
      {
        name: "10 Sessions",
        price: "€250",
        credits: "10 credits",
        validity: "Valid 4 months",
        restrictions: [] as string[],
        description:
          "The choice of regularity and results. Ten sessions to sculpt your body in depth and durably integrate Pilates into your lifestyle. Enjoy our best per-session rate!",
        featured: false,
        href: "https://backoffice.bsport.io/customer/payment/pass/730926/?membership=5398&force=true",
      },
    ],
  },
  location: {
    overline: "Location",
    title: "In the heart of Pontoise.",
    address: { label: "Address", line1: "24, rue Pierre Butin", line2: "95300 Pontoise" },
    contact: { label: "Contact", email: "team@si-lepilates.com" },
    transport: {
      label: "Getting here by public transport",
      text: "Pontoise train station is a 5-minute walk away — a short journey to start unwinding before you even arrive.",
    },
    parking: {
      label: "Getting here by car",
      text: "A public car park is less than 5 minutes away near the Oise riverbank, with 30 free minutes on arrival. Street parking is often available on rue du Vert Buisson and rue Truffaut.",
    },
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
      "Pilates Reformer studio in Pontoise. A calm, elegant space, easy to book for a practice that suits you.",
    instagram: "@silepilatespontoise",
    navTitle: "Navigation",
    contactTitle: "Contact",
    email: "team@si-lepilates.com",
    address: "24, rue Pierre Butin,\n95300 Pontoise",
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
