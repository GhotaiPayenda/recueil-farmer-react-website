export const navigation = {
  logo: "Recueil",
  links: [
    { label: "Library", href: "#" },
    { label: "Benefits", href: "#" },
    { label: "Palette", href: "#" },
    { label: "Stories", href: "#" },
    { label: "How it works", href: "#howitworks" },
    { label: "Pricing", href: "#gift" },
  ],
  cta: { label: "Subscribe", href: "#subscribe" },
};

export const hero = {
  label: "A new fragrance, every month",
  heading: {
    lead: "Find your",
    accent: "scent.",
    tagline: "One bottle at a time.",
  },
  description:
    "A monthly fragrance club from the Lumen atelier. Each delivery brings a hand-picked 8ml bottle to your door — drawn from our library of 60 rare parfums, chosen for the season and for you.",
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
  title: "Three steps to your signature scent.",
  steps: [
    {
      number: "01",
      title: "Discover",
      description: "Take our scent profile quiz. We map your preferences across 200+ fragrance notes.",
      image: "https://framerusercontent.com/images/howitworks-1.jpg",
    },
    {
      number: "02",
      title: "Experience",
      description: "Receive an 8-vial discovery kit. Wear each scent over weeks, not minutes.",
      image: "https://framerusercontent.com/images/howitworks-2.jpg",
    },
    {
      number: "03",
      title: "Commit",
      description: "Choose your signature. We ship full-size refills on your schedule.",
      image: "https://framerusercontent.com/images/howitworks-3.jpg",
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