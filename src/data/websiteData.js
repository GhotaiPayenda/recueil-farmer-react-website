export const navigation = {
  logo: "Recueil",
  links: [
    { label: "Library", href: "#library" },
    { label: "Benefits", href: "#benefits" },
    { label: "Palette", href: "#library" },
    { label: "Stories", href: "#stories" },
    { label: "How it works", href: "#howitworks" },
    { label: "Pricing", href: "#pricing" },
  ],
  cta: { label: "Subscribe", href: "#pricing" },
};

export const hero = {
  label: "A new fragrance, every month",
  heading: {
    lead: "Find your",
    accent: "scent.",
    tagline: "One bottle at a time.",
  },
  description:
    "A small library, rotated by hand. One bottle a month, chosen for the season — and slowly, for you.",
  primaryCta: { label: "start your subscription", href: "#subscribe" },
  secondaryCta: { label: "how it works", href: "#library" },
  videoSrc: "/videos/hero.mp4",
  videoPoster: "/images/hero-poster.png",
  stats: [
    {
      id: "parfums",
      value: 60,
      label: "Parfums library",
      description: "From a single, curated palette.",
    },
    {
      id: "hours",
      value: 180,
      label: "Hours per batch",
      description: "Slow by necessity, not for show.",
    },
    {
      id: "ingredients",
      value: 42,
      label: "Sourced ingredients",
      description: "Each one chosen, never assumed.",
    },
    {
      id: "growers",
      value: 12,
      label: "Partner growers",
      description: "Visited every season. We know the soil.",
    },
  ],
};

export const statistics = [
  {
    id: "parfums",
    value: "12",
    suffix: "+",
    label: "Parfums library",
    description: "From a single, curated palette.",
    borderSide: "left",
  },
  {
    id: "hours",
    value: "72",
    label: "Hours per batch",
    description: "Slow by necessity, not for show.",
    borderSide: "left",
  },
  {
    id: "ingredients",
    value: "200",
    label: "Sourced ingredients",
    description: "Each one chosen, never assumed.",
    borderSide: "left",
  },
  {
    id: "growers",
    value: "18",
    label: "Partner growers",
    description: "Visited every season. We know the soil.",
    borderSide: "left",
  },
];

export const library = {
  heading: [
    { text: "From", variant: "sans" },
    { text: "this month's", variant: "serif" },
    { text: "library.", variant: "sans" },
  ],
  description:
    "A 60-bottle library, refreshed each season. Members receive a hand-picked 8ml every month — here are three currently in rotation.",
  cards: [
    {
      id: "halo",
      name: "Halo",
      description:
        "A weightless drift of iris, cloud-water, and white cedar — designed for the bright minutes after rain.",
      status: "In rotation",
      month: "May",
      image: "/images/halo.png",
      imageAlt:
        "Halo fragrance bottle wrapped in swirls of glass, lavender and soft light",
      glow: "right",
    },
    {
      id: "ember",
      name: "Ember",
      description:
        "Soft amber, smoked vanilla, and a thread of saffron — the warmth of low sun on linen at twilight.",
      status: "In rotation",
      month: "May",
      image: "/images/ember.png",
      imageAlt:
        "Ember fragrance bottle resting among lilac blossoms in warm light",
      glow: "center",
    },
    {
      id: "tide",
      name: "Tide",
      description:
        "Sea-salt mist, blue cypress and bergamot — a lucid breath taken at the edge of a quiet coast.",
      status: "In rotation",
      month: "May",
      image: "/images/tide.png",
      imageAlt:
        "Tide fragrance bottle in violet light with lavender and drifting mist",
      glow: "left",
    },
  ],
};

export const videoSection = {
  title: "The process, documented.",
  description: "We film every step — from harvest to bottle — so you know exactly what you're wearing.",
  videoSrc: "https://framerusercontent.com/assets/4QvRgOYU85vE3h5JkY2X/process-video.mp4",
  videoPoster: "https://framerusercontent.com/images/process-poster.jpg",
};

export const infoCards = [
  {
    id: "retention",
    icon: "percent",
    value: "94",
    suffix: "%",
    label: "of members find a signature within their first six months.",
    animationDelay: 0.2,
  },
  {
    id: "timeline",
    icon: "calendar",
    value: "4.2",
    suffix: "months",
    label: "To find her scent",
    subLabel: "Average member: 3–5 months",
    animationDelay: 0.4,
  },
  {
    id: "value",
    icon: "tag",
    value: "-40",
    suffix: "%",
    label: "Member upgrade price",
    subLabel: "Off the public 50ml",
    animationDelay: 0.6,
  },
  {
    id: "bottles",
    icon: "bottle",
    value: "8",
    label: "Bottles in his kit",
    subLabel: "All 8ml, all refillable",
    animationDelay: 0.8,
  },
  {
    id: "purchases",
    icon: "shopping-bag",
    value: "12",
    suffix: "+",
    label: "Full bottles bought",
    subLabel: "Subscription does the work",
    animationDelay: 1.0,
  },
];

export const howItWorks = {
  label: "How it works",
  titlePart1: "Three steps.",
  titlePart2: "One bottle, every month.",
  description:
    "Build a fragrance wardrobe slowly and deliberately. No commitment, no shelf full of regret — just one carefully chosen 8ml bottle delivered each month.",
  steps: [
    {
      number: "I",
      title: "Take the scent profile",
      description:
        "A short, four-minute questionnaire about the moods, materials, and memories you respond to. Our perfumers read every answer.",
    },
    {
      number: "II",
      title: "Receive your monthly bottle",
      description:
        "An 8ml refillable bottle arrives at the start of each month — hand-picked from our library of 60+ rare parfums, with a note from the perfumer.",
    },
    {
      number: "III",
      title: "Keep, swap, or upgrade",
      description:
        "Love it? Upgrade to the full 50ml at a member's price. Don't? Tell us why — we adjust your profile and ship something quieter, warmer, or stranger next month.",
    },
  ],
};

export const pricing = {
  label: "pricing",
  titleLine1: "Three ways",
  titleLine2: "to build a wardrobe.",
  description:
    "Pause, swap, or cancel any month. All plans include the perfumer's note, free shipping, and a 30%-off member upgrade on full bottles.",
  plans: [
    {
      name: "Bi-monthly",
      detail: "1 × 8ml every 2 mo",
      price: "22",
      suffix: "/ month",
      cta: "Start bi-monthly",
      featured: false,
      gradient: "at 97% 0%",
      features: [
        "One 8ml bottle every other month",
        "Hand-picked from our 60-bottle library",
        "Note from the perfumer enclosed",
        "Pause or cancel anytime",
      ],
    },
    {
      name: "Monthly",
      detail: "1 × 8ml every month",
      price: "36",
      suffix: "/ month",
      cta: "Start monthly",
      featured: true,
      gradient: "at 50% 0%",
      features: [
        "A new 8ml hand-picked every month",
        "30% off any full 50ml bottle",
        "Free swap if a scent doesn't fit",
        "Members-only seasonal releases",
      ],
    },
    {
      name: "Duo",
      detail: "2 × 8ml every month",
      price: "62",
      suffix: "/ month",
      cta: "Start duo",
      featured: false,
      gradient: "at 0% 0%",
      features: [
        "Two 8ml bottles each month",
        "Share with a partner or build a wardrobe twice as fast",
        "30% off any full 50ml bottle",
        "Priority access to limited compositions",
      ],
    },
  ],
};

export const imageCards = [
  {
    id: "card1",
    title: "Sourced with intention",
    description: "We work directly with growers in Grasse, Calabria, and Kerala. No middlemen, no mystery.",
    image: "https://framerusercontent.com/images/sourced-intention.jpg",
    imageAlt: "Lavender fields in Grasse",
    reverse: false,
  },
  {
    id: "card2",
    title: "Designed for the ritual",
    description: "Refillable 8ml vials, magnetic caps, and a walnut tray. The kit stays. The scent rotates.",
    image: "https://framerusercontent.com/images/designed-ritual.jpg",
    imageAlt: "Refillable vial kit on walnut tray",
    reverse: true,
  },
  {
    id: "card3",
    title: "A community of noses",
    description: "Members access blind tastings, perfumer Q&As, and early releases. Fragrance is better shared.",
    image: "https://framerusercontent.com/images/community-noses.jpg",
    imageAlt: "Community tasting event",
    reverse: false,
  },
];

export const memberSection = {
  label: "Member stories",
  title: "Real routines, real results.",
  members: [
    {
      id: "member1",
      name: "Marcus Chen",
      role: "Product Designer · Member since Month 3",
      quote: "I've worn the same department-store cologne for a decade. The discovery kit showed me what I was missing — and the subscription means I never run out.",
      image: "https://framerusercontent.com/images/member-marcus.jpg",
      stats: {
        bottles: 8,
        label: "Bottles in his kit",
        subLabel: "All 8ml, all refillable",
      },
      stats2: {
        value: 14,
        label: "Full bottles bought",
        subLabel: "Subscription does the work",
      },
    },
    {
      id: "member2",
      name: "Sarah Kowalski",
      role: "Architect · Member since Month 11",
      quote: "The ritual of trying a new vial each week became the only part of my Sunday routine I actually look forward to. My wardrobe now has a scent for every season.",
      image: "https://framerusercontent.com/images/member-sarah.jpg",
      stats: {
        bottles: 12,
        label: "Bottles in her kit",
        subLabel: "All 8ml, all refillable",
      },
      stats2: {
        value: 22,
        label: "Full bottles bought",
        subLabel: "Subscription does the work",
      },
    },
  ],
};

export const stories = {
  label: "STORIES",
  titlePart1: "Notes from ",
  titlePart2: "those subscribed.",
  description:
    "Lumen members are writers, pilots, ceramicists. A small selection of how the monthly bottle has fit into their lives.",
  items: [
    {
      id: "story1",
      tag: "Member · month 04",
      title: "Found her signature",
      subtitle: "by month four",
      description:
        "Naoko joined Lumen looking for something quiet to write in. By her fourth bottle — Halo — she'd stopped wearing anything else.",
      image: "https://framerusercontent.com/images/kM33NON21DUDnJfRtOykw68ljc.png",
      imageAlt: "Naoko",
      name: "Naoko",
      memberInfo: "Member since 2024 · Stockholm",
      plan: "8ML · MONTHLY",
    },
    {
      id: "story2",
      tag: "Member · month 11",
      title: "A wardrobe",
      subtitle: "of eleven scents",
      description:
        "Adrien lands at odd hours and wanted variety, not commitment. Eleven months in, he keeps a small rotation of bottles in his travel kit.",
      image: "https://framerusercontent.com/images/64OB4OpkmqR054Hja2tYVy6YwWU.png",
      imageAlt: "Adrien",
      name: "Adrien",
      memberInfo: "Member since 2025 · Geneva",
      plan: "8ML · MONTHLY",
      stats: [
        { label: "Bottles in his kit", value: "11", subLabel: "All 8ml, all refillable" },
        { label: "Full bottles bought", value: "22", subLabel: "Subscription does the work" },
      ],
    },
  ],
};

export const footer = {
  logo: "Recueil",
  description: "Premium fragrance subscription. Curated scents, refillable vessels, delivered on your rhythm.",
  columns: [
    {
      title: "Product",
      links: [
        { label: "How it works", href: "#" },
        { label: "Scent library", href: "#" },
        { label: "The kit", href: "#" },
        { label: "Gifting", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Journal", href: "#" },
        { label: "About us", href: "#" },
        { label: "Sourcing", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "#" },
        { label: "Shipping", href: "#" },
        { label: "Returns", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Accessibility", href: "#" },
      ],
    },
  ],
  social: [
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "Twitter", href: "#", icon: "twitter" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Email", href: "#", icon: "email" },
  ],
  copyright: "© 2026 Recueil. All rights reserved.",
};