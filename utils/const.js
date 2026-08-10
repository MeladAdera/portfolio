export function useConstants() {
  const navigation = [
    {
      id: 1,
      name: "About",
      href: "/about",
    },
    {
      id: 2,
      name: "Skills",
      href: "/skills",
    },
    // {
    //   id: 6,
    //   name: "Timeline",
    //   href: "/timeline",
    // },
    {
      id: 3,
      name: "Works",
      href: "/works",
    },
    {
      id: 4,
      name: "Projects",
      href: "/projects",
    },
    {
      id: 5,
      name: "Contact",
      href: "/contact",
    },
  ];

  const skillWithLogo = [
    {
      imgUrl: "/logos/react-original.svg",
      name: "React.js",
      alt: "React logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nextjs-original.svg",
      name: "Next.js",
      alt: "Next.js logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/typescript-original.svg",
      name: "TypeScript",
      alt: "TypeScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/javascript-original.svg",
      name: "JavaScript",
      alt: "JavaScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/vite.svg",
      name: "Vite",
      alt: "Vite logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/tailwindcss-plain.svg",
      name: "Tailwind CSS",
      alt: "Tailwind CSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/shadcn-ui.svg",
      name: "Shadcn/UI",
      alt: "Shadcn UI logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/material-ui.svg",
      name: "Material-UI",
      alt: "Material UI logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/framer-motion.svg",
      name: "Framer Motion",
      alt: "Framer Motion logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/html5-original.svg",
      name: "HTML",
      alt: "HTML logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/css3-plain-wordmark.svg",
      name: "CSS",
      alt: "CSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/zustand.svg",
      name: "Zustand",
      alt: "Zustand",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/react-query.svg",
      name: "React Query",
      alt: "TanStack React Query logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/react-router.svg",
      name: "React Router",
      alt: "React Router logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/react-hook-form.svg",
      name: "React Hook Form",
      alt: "React Hook Form logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/zod.svg",
      name: "Zod",
      alt: "Zod logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/i18next.svg",
      name: "i18n (English / Arabic)",
      alt: "i18next logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nodejs-original.svg",
      name: "Node.js",
      alt: "Node.js logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nestjs.svg",
      name: "NestJS",
      alt: "NestJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/express.svg",
      name: "Express.js",
      alt: "Express logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/rest-api.svg",
      name: "REST APIs",
      alt: "REST APIs",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/postgresql.svg",
      name: "PostgreSQL",
      alt: "PostgreSQL logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/mysql.svg",
      name: "MySQL",
      alt: "MySQL logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/mongodb.svg",
      name: "MongoDB",
      alt: "MongoDB logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/redis.svg",
      name: "Redis",
      alt: "Redis logo",
      width: 150,
      height: 150,
    },
    {
      initial: "J",
      bgColor:
        "bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-100 rounded-lg",
      name: "JWT Authentication",
      alt: "JWT Authentication",
      width: 150,
      height: 150,
    },
    {
      initial: "B",
      bgColor:
        "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-lg",
      name: "bcrypt",
      alt: "bcrypt",
      width: 150,
      height: 150,
    },
    {
      initial: "M",
      bgColor:
        "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-100 rounded-lg",
      name: "Multer",
      alt: "Multer",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/jest.svg",
      name: "Jest",
      alt: "Jest logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/cypress.svg",
      name: "Cypress",
      alt: "Cypress logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/github-original.svg",
      name: "Git & GitHub",
      alt: "Git and GitHub",
      width: 150,
      height: 150,
    },
  ];
  const hobbies = [
    {
      title: "Drink Black tea",
      text: "Best way to start the morning",
      classBg: "bg-tea",
    },
    {
      title: "Journaling",
      text: "To pen down my thoughts, memories and interesting things that occur in life",
      classBg: "bg-journaling",
    },
    // {
    //   title: "Learning new technologies/framework",
    //   text: "To explore and expand my skillsets. \n Recently exploring Kotlin and ThreeJs",
    //   classBg: "bg-programming",
    // },
    // {
    //   title: "Blog Writing",
    //   text: "To pen down my thoughts",
    //   classBg: "bg-blog",
    // },
    {
      title: "Sports/Gym",
      text: "To stay active and healthy",
      classBg: "bg-gym",
    },
    {
      title: "Listening to music",
      text: "Recent favourites: passnger-let her go, İbrahim Tatlıses - Bir Kulunu Çok Sevdim-Yıkılmışım Ben-Acı Gerçekler",
      classBg: "bg-music",
    },
  ];
  const projects = [
    {
      isReverse: false,
      title: "Inventory Distribution System",
      titleColor: "text-white",
      filterColor: "bg-indigo-950 bg-opacity-60",
      imageUrl: "/project-ss/inventory-fe.svg",
      description:
        "Multi-tenant inventory distribution platform linking a central warehouse to multiple retail shops: Next.js and TypeScript on the frontend, NestJS and PostgreSQL on the backend. Warehouse distribution workflows, customer credit with FIFO payment allocation and immutable ledgers, weighted-average inventory costing, analytics dashboards, and an offline-first PWA built on IndexedDB with queued sync and conflict resolution.",
      techStack: [
        "Next.js",
        "TypeScript",
        "TanStack Query",
        "NestJS",
        "PostgreSQL",
        "IndexedDB",
        "Docker",
      ],
      isUrl: true,
      urlLink: "https://inventory-distribution-system-fe-one.vercel.app",
    },
    {
      isReverse: true,
      title: "SportBooker · Syria Sport",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/sportbooker-fe.svg",
      description:
        "Multi-tenant sports booking platform for the Syrian community: live product with React, Vite, and TypeScript on the frontend; NestJS and PostgreSQL on the backend. Players, operators, and admins, tenant subdomains, RBAC, bookings and schedules, English and Arabic i18n.",
      techStack: [
        "React",
        "Vite",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "Zustand",
        "i18n",
      ],
      isUrl: true,
      urlLink: "https://syria-sport.sportbooker.net/",
      githubLink: "https://github.com/MeladAdera/SportBooker-frontend",
      githubLinkBackend: "https://github.com/MeladAdera/SportBooker-backend",
    },
    {
      isReverse: false,
      title: "Shopverse",
      titleColor: "text-white",
      filterColor: "bg-indigo-900 bg-opacity-60",
      imageUrl: "/project-ss/shopverse-fe.svg",
      description:
        "Full-featured e-commerce storefront and admin dashboard: React, TypeScript, and Vite on the frontend; Express and PostgreSQL on the backend. Product catalog with filters, cart and checkout, customer auth and order history, admin CRUD for products and users, and optional demo mode for previews without a live API.",
      techStack: [
        "React",
        "Vite",
        "TypeScript",
        "Express",
        "PostgreSQL",
        "TanStack Query",
      ],
      isUrl: true,
      urlLink: "https://shopverse-front-end.vercel.app/",
      githubLink: "https://github.com/MeladAdera/shopverse--front-end",
      githubLinkBackend: "https://github.com/MeladAdera/shopverse-backend",
    },
  ];
  const workingProjects = [
    {
      image: {
        src: "/career-logos/inventory.svg",
        alt: "Inventory Distribution System",
        width: "100",
        height: "100",
        maxWidth: "max-w-[35%] md:max-w-[30%] 3xl:max-w-[35%]",
      },
      imageShowcase: [
        {
          title: "Inventory Distribution System",
          src: "/project-ss/inventory-fe.svg",
          alt: "Inventory Distribution System frontend preview",
          width: "535",
          height: "261",
        },
      ],
      heading: "Inventory Distribution System",
      description:
        "Full-stack work on a multi-tenant inventory distribution platform connecting a central warehouse with multiple retail shops: Next.js and TypeScript on the frontend, NestJS and PostgreSQL on the API side. Covers warehouse distribution workflows, sales, customer credit, and business analytics for warehouse administrators, shop owners, and employees.",
      teamMembers: [],
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Zustand",
        "NestJS",
        "PostgreSQL",
        "IndexedDB",
        "Docker",
      ],
      highlights:
        "Offline-first PWA with queued sync and conflict resolution, FIFO credit allocation with immutable ledgers, weighted-average inventory costing",
      urls: [
        {
          name: "Live product",
          link: "https://inventory-distribution-system-fe-one.vercel.app",
        },
      ],
    },
    {
      image: {
        src: "/career-logos/sportbooker.svg",
        alt: "SportBooker · Syria Sport",
        width: "100",
        height: "100",
        maxWidth: "max-w-[35%] md:max-w-[30%] 3xl:max-w-[35%]",
      },
      imageShowcase: [
        {
          title: "SportBooker platform",
          src: "/project-ss/sportbooker-fe.svg",
          alt: "SportBooker frontend preview",
          width: "535",
          height: "261",
        },
      ],
      heading: "Syria Sport — SportBooker",
      description:
        "Freelance / contract full-stack work on a multi-tenant sports booking platform for the Syrian community: React and Vite frontend for players, operators, and admins; NestJS and PostgreSQL on the API side; RBAC, tenant subdomains, bookings and schedules, and English/Arabic i18n.",
      teamMembers: [],
      techStack: [
        "React",
        "Vite",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "Zustand",
        "REST APIs",
        "i18n",
      ],
      highlights:
        "End-to-end features across frontend and backend, multi-tenant routing, auth and booking flows",
      urls: [
        {
          name: "Live product",
          link: "https://syria-sport.sportbooker.net/",
        },
        {
          name: "Frontend repository",
          link: "https://github.com/MeladAdera/SportBooker-frontend",
        },
        {
          name: "Backend repository",
          link: "https://github.com/MeladAdera/SportBooker-backend",
        },
      ],
    },
  ];

  const timeline = [
    {
      logo: "/career-logos/inventory.svg",
      logoBorderColor: "#6366f1",
      companyName:
        "Inventory Distribution System — Full Stack Developer",
      duration: "May 2026 – Present",
      jobScope: [
        "Building a multi-tenant inventory distribution platform that connects a central warehouse with multiple retail shops, covering inventory management, distribution, sales, customer credit, and business analytics.",
        "Architected the multi-tenant model for warehouse administrators, shop owners, and employees while keeping inventory, ordering, and reporting centralized across shops.",
        "Engineered end-to-end distribution workflows: order creation, approval, shipment, receipt, inventory synchronization, and stock movement with transactional consistency.",
        "Implemented customer credit management with partial payments, debt tracking, FIFO payment allocation, aging reports, and immutable financial ledgers.",
        "Built an offline-first PWA using IndexedDB, queued synchronization, and conflict resolution so sales and inventory keep working on unreliable networks.",
        "Implemented inventory costing with weighted-average calculations and immutable transaction snapshots, keeping historical sales and profit reports accurate after price changes.",
        "Developed role-based authorization, multilingual support, analytics dashboards, and audit logging, and optimized backend services for security, traceability, and performance.",
      ],
    },
    {
      logo: "/career-logos/sportbooker.svg",
      logoBorderColor: "#0d9488",
      companyName: "SportBooker Platform — Full Stack Developer (Syrian community)",
      duration: "Jan 2026 – Apr 2026",
      jobScope: [
        "Worked on a multi-tenant sports booking platform built with React, Vite, TypeScript, NestJS, and PostgreSQL, serving the Syrian community through Syria Sport on SportBooker.",
        "Built frontend features for players, operators, and admin users with responsive, user-friendly interfaces.",
        "Implemented role-based access control and tenant-based routing using subdomains for different organizations.",
        "Integrated APIs for authentication, bookings, schedules, and user management.",
        "Used Zustand for state management and built reusable components to improve scalability and maintainability.",
        "Contributed to backend APIs with NestJS and PostgreSQL, including migrations, seed data, and authentication flows.",
        "Implemented multilingual support (English and Arabic) and contributed to performance improvements and bug fixes.",
      ],
    },
    {
      logo: "/career-logos/khamsat.svg",
      logoBorderColor: "#047857",
      companyName: "Freelance Full Stack Developer — Khamsat",
      duration: "Jan 2025 – Dec 2025",
      jobScope: [
        "Worked on client web applications and custom software solutions using React, TypeScript, Node.js, and modern JavaScript technologies.",
        "Refactored dirty and AI-generated code into clean, maintainable, and scalable solutions.",
        "Developed responsive UI interfaces with reusable components and organized CSS architecture.",
        "Converted Figma designs into modern, mobile-friendly frontend pages.",
        "Integrated REST APIs for authentication, dashboards, and dynamic user data.",
        "Fixed frontend, backend, and database-related issues to improve application stability and reliability.",
        "Improved application performance by optimizing database queries, reducing unnecessary renders, and cleaning inefficient code.",
      ],
    },
  ];

  const education = [
    {
      school: "Tishreen University",
      degree: "Computer and Control Engineering",
    },
  ];

  return {
    navigation,
    hobbies,
    skillWithLogo,
    projects,
    workingProjects,
    timeline,
    education,
  };
}
