export function useConstants() {
  // Contact isn't listed: the nav renders it as a button that scrolls to the contact band
  const navigation = [
    {
      id: 1,
      name: "Projects",
      href: "/projects",
    },
    {
      id: 2,
      name: "About",
      href: "/about",
    },
  ];

  const skills = [
    {
      name: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Vite",
        "Tailwind CSS",
        "shadcn/ui",
        "Material UI",
        "Framer Motion",
        "Zustand",
        "TanStack Query",
        "React Router",
        "React Hook Form",
        "Zod",
        "i18n",
        "HTML & CSS",
      ],
    },
    {
      name: "Backend & data",
      items: [
        "Node.js",
        "NestJS",
        "Express",
        "REST APIs",
        "JWT auth",
        "bcrypt",
        "Multer",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
      ],
    },
    {
      name: "Testing & tools",
      items: ["Jest", "Cypress", "Git & GitHub", "Docker"],
    },
  ];

  const interests = [
    "Black tea to start the day",
    "Journaling",
    "The gym and sports",
    "Music",
  ];

  // story cards for components/StoryCarousel.vue (not on a page right now).
  // Put each photo in public/story/ under the name in `image`; until that file
  // exists the card shows `icon` instead. Photos are 4:5 (1080 x 1350).
  const story = [
    {
      keyword: "Foundation",
      title: "Where it all",
      accent: "began.",
      image: "/story/01-foundation.jpg",
      alt: "An engineering student's desk at night with textbooks and a circuit board",
      icon: "foundation",
      body: [
        "My story began after three years of studying Computer and Control Engineering at Tishreen University.",
      ],
    },
    {
      keyword: "Curiosity",
      title: "Searching for",
      accent: "meaning.",
      image: "/story/02-curiosity.jpg",
      alt: "A person sitting by a window at night, looking at the city lights",
      icon: "curiosity",
      body: [
        "Throughout those years, I kept asking myself one question:",
        { quote: "How could I create real value from everything I was learning?" },
        "I didn't just want knowledge. I wanted to put it into practice.",
      ],
    },
    {
      keyword: "Direction",
      title: "A turning",
      accent: "point.",
      image: "/story/03-direction.jpg",
      alt: "A compass on a dark desk next to a closed laptop",
      icon: "direction",
      body: [
        "My curiosity, and advice from a friend in the same field, pushed me to take a different path. I wanted to stop wasting my potential and become someone disciplined, curious and committed to learning.",
      ],
    },
    {
      keyword: "First build",
      title: "My first",
      accent: "step.",
      image: "/story/04-first-build.jpg",
      alt: "Hands typing on a laptop with code on the screen",
      icon: "build",
      body: [
        "About two years ago, I took my first step toward becoming a software engineer. I studied technologies and systems, built projects and learned from what I made. I wanted to understand not only how things work, but why.",
      ],
    },
    {
      keyword: "Persistence",
      title: "The",
      accent: "journey.",
      image: "/story/05-persistence.jpg",
      alt: "A desk late at night with sticky notes, crumpled paper and an empty mug",
      icon: "persistence",
      body: [
        "The road wasn't easy. There were problems I didn't know how to solve, and progress was often slower than I expected. But every challenge taught me something, and little by little I built discipline and a deeper curiosity.",
      ],
    },
    {
      keyword: "Growth",
      title: "The",
      accent: "goal.",
      image: "/story/06-growth.jpg",
      alt: "Sunrise light on a tidy desk with a laptop, a plant and books",
      icon: "growth",
      body: [
        "My goal was never just to become a software engineer. I want to understand the systems I build, learn from my mistakes and keep improving. The journey is still going: I'm still learning, and still building.",
      ],
    },
  ];

  // each project gets a card (home and /projects) and a case study at /projects/[slug].
  // the first four techStack items are shown on the card.
  // add `screenshot: "/project-ss/<file>"` to show a screenshot on the case study.
  const projects = [
    {
      slug: "inventory",
      title: "Inventory Distribution System",
      status: "Live · in development",
      cardColor: "#312e81",
      summary:
        "Warehouse-to-shop platform with an offline-first PWA, customer credit ledgers and weighted-average costing.",
      intro:
        "A multi-tenant platform that connects a central warehouse with multiple retail shops, covering distribution, sales, customer credit and analytics in one place.",
      audience: "Warehouse admins, shop owners and their employees",
      overview:
        "The warehouse sends stock to each shop, shop staff sell from it, and owners see inventory, credit and profit across every shop. Ordering and reporting stay central, while each shop only sees its own data.",
      highlights: [
        {
          icon: "offline",
          title: "Keeps working offline",
          text: "An offline-first PWA. Sales and stock changes queue in IndexedDB and sync with conflict resolution when the connection comes back.",
        },
        {
          icon: "ledger",
          title: "Customer credit you can audit",
          text: "Partial payments, debt tracking and aging reports, with FIFO payment allocation on an immutable ledger.",
        },
        {
          icon: "chart",
          title: "Profit reports that stay correct",
          text: "Weighted-average costing with a snapshot on every transaction, so past sales and profit don't shift when prices change.",
        },
      ],
      built: [
        "The multi-tenant model for warehouse admins, shop owners and employees.",
        "The distribution flow end to end: order, approval, shipment, receipt and stock sync, each step in a transaction.",
        "Role-based access, multilingual support, analytics dashboards and audit logging.",
      ],
      techStack: [
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "IndexedDB",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Zustand",
        "Docker",
      ],
      urlLink: "https://inventory-distribution-system-fe-one.vercel.app",
    },
    {
      slug: "sportbooker",
      // non-breaking space so a wrapped title never starts a line with "·"
      title: "SportBooker · Syria Sport",
      status: "Live product",
      cardColor: "#115e59",
      summary:
        "Multi-tenant sports booking for the Syrian community, with tenant subdomains, roles and English and Arabic.",
      intro:
        "A multi-tenant sports booking platform for the Syrian community, live as Syria Sport on SportBooker.",
      audience: "Players, operators and admins",
      overview:
        "Each organization runs on its own subdomain. Players make bookings, operators manage schedules, and admins manage users and roles.",
      highlights: [
        {
          icon: "tenants",
          title: "A subdomain per organization",
          text: "Tenant-based routing on subdomains, with role-based access for players, operators and admins.",
        },
        {
          icon: "language",
          title: "English and Arabic",
          text: "Multilingual support through i18n, so the community can use the app in either language.",
        },
        {
          icon: "stack",
          title: "Frontend and backend",
          text: "React features on the frontend, plus NestJS APIs, PostgreSQL migrations, seed data and auth flows on the backend.",
        },
      ],
      built: [
        "Responsive screens for players, operators and admins.",
        "API integration for authentication, bookings, schedules and user management.",
        "Shared state with Zustand and reusable components.",
        "Performance improvements and bug fixes.",
      ],
      techStack: [
        "React",
        "NestJS",
        "PostgreSQL",
        "TypeScript",
        "Vite",
        "Zustand",
        "REST APIs",
        "i18n",
      ],
      urlLink: "https://syria-sport.sportbooker.net/",
      githubLink: "https://github.com/MeladAdera/SportBooker-frontend",
      githubLinkBackend: "https://github.com/MeladAdera/SportBooker-backend",
    },
    {
      slug: "shopverse",
      title: "Shopverse",
      status: "Live demo",
      cardColor: "#3730a3",
      summary:
        "Storefront and admin dashboard with filters, cart, checkout and order history.",
      intro:
        "An online store with a customer storefront and an admin dashboard, built as a personal project.",
      audience: "Shoppers and store admins",
      overview:
        "Customers browse the catalog with filters, add items to a cart, check out and review past orders. Admins manage products and users from their own dashboard.",
      highlights: [
        {
          icon: "cart",
          title: "The whole shopping flow",
          text: "Product catalog with filters, cart and checkout.",
        },
        {
          icon: "account",
          title: "Customer accounts",
          text: "Sign-in and order history for each customer.",
        },
        {
          icon: "admin",
          title: "Admin dashboard",
          text: "Create, edit and delete products and users.",
        },
      ],
      built: [
        "The React storefront and admin dashboard, with TanStack Query for server data.",
        "The Express API and PostgreSQL database behind it.",
        "A demo mode so the store can be previewed without the API running.",
      ],
      techStack: [
        "React",
        "Express",
        "PostgreSQL",
        "TanStack Query",
        "TypeScript",
        "Vite",
      ],
      urlLink: "https://shopverse-front-end.vercel.app/",
      githubLink: "https://github.com/MeladAdera/shopverse--front-end",
      githubLinkBackend: "https://github.com/MeladAdera/shopverse-backend",
    },
  ];

  // `project` links a role to its case study, which also reads its role and dates from here
  const timeline = [
    {
      role: "Full Stack Developer",
      company: "Inventory Distribution System",
      duration: "May 2026 – Present",
      summary:
        "Multi-tenant warehouse and retail platform that keeps working offline.",
      project: "inventory",
    },
    {
      role: "Full Stack Developer",
      company: "SportBooker",
      duration: "Jan 2026 – Apr 2026",
      summary:
        "Booking flows, roles and tenant routing for players, operators and admins.",
      project: "sportbooker",
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Khamsat",
      duration: "Jan 2025 – Dec 2025",
      summary:
        "Client apps, Figma-to-frontend builds and cleanup of messy codebases.",
      points: [
        "Refactored messy and AI-generated code into maintainable apps.",
        "Turned Figma designs into mobile-friendly pages.",
        "Fixed bugs across frontend, backend and database, and sped up slow queries.",
      ],
    },
  ];

  const education = [
    {
      school: "Tishreen University",
      degree: "Computer and Control Engineering",
    },
  ];

  // short list shown on the home page
  const featuredStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Tailwind CSS",
    "Docker",
  ];

  return {
    navigation,
    skills,
    interests,
    story,
    projects,
    timeline,
    education,
    featuredStack,
  };
}
