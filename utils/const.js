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
      imgUrl: "/logos/mongodb.svg",
      name: "MongoDB",
      alt: "MongoDB logo",
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
      text: "Recent favourites: MWAM, HONNE, Forester, Milet and Yoasobi",
      classBg: "bg-music",
    },
  ];
  const projects = [
    {
      isReverse: true,
      title: "SportBooker · Quick Kick",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/sportbooker-fe.svg",
      description:
        "Multi-tenant sports booking platform (Dubai / Quick Kick): live product with React, Vite, and TypeScript on the frontend; NestJS and PostgreSQL on the backend. Players, operators, and admins, tenant subdomains, RBAC, bookings and schedules, English and Arabic i18n.",
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
      urlLink: "https://quick-kick.sportbooker.net/",
      githubLink: "https://github.com/Yazan-Ali-01/SportBooker-FE",
      githubLinkBackend: "https://github.com/Yazan-Ali-01/SportBooker-BE",
    },
  ];
  const workingProjects = [
    {
      image: {
        src: "/career-logos/sportbooker.svg",
        alt: "SportBooker · Quick Kick",
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
      heading: "Quick Kick (Dubai) — SportBooker",
      description:
        "Freelance / contract full-stack work on a multi-tenant sports booking platform for Quick Kick in Dubai: React and Vite frontend for players, operators, and admins; NestJS and PostgreSQL on the API side; RBAC, tenant subdomains, bookings and schedules, and English/Arabic i18n.",
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
          link: "https://quick-kick.sportbooker.net/",
        },
        {
          name: "Frontend repository",
          link: "https://github.com/Yazan-Ali-01/SportBooker-FE",
        },
        {
          name: "Backend repository",
          link: "https://github.com/Yazan-Ali-01/SportBooker-BE",
        },
      ],
    },
    {
      image: {
        src: "/career-logos/freelance.svg",
        alt: "Freelance full-stack",
        width: "100",
        height: "100",
        maxWidth: "max-w-[35%] md:max-w-[30%] 3xl:max-w-[35%]",
      },
      imageShowcase: [],
      heading: "Independent freelance — full-stack",
      description:
        "I work directly with clients and teams on web products end to end: responsive frontends (React, Next.js, Vite, TypeScript), REST APIs and services (Node.js, NestJS, Express), PostgreSQL and MongoDB, auth (JWT, RBAC), and clear communication with maintainable, iterative delivery.",
      teamMembers: [],
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "NestJS",
        "Express",
        "PostgreSQL",
        "MongoDB",
      ],
      highlights:
        "E-commerce, marketplaces, job boards, task tools, APIs, and product iterations for startups and small businesses",
      urls: [
        {
          name: "GitHub",
          link: "https://github.com/MeladAdera",
        },
        {
          name: "Contact",
          link: "/contact",
        },
      ],
    },
  ];
 
  const timeline = [
    {
      logo: "/career-logos/sportbooker.svg",
      logoBorderColor: "#0d9488",
      companyName: "SportBooker Platform — Full Stack Developer (Quick Kick, Dubai)",
      duration: "2025 – Present",
      jobScope: [
        "Worked on a multi-tenant sports booking platform built with React, Vite, TypeScript, NestJS, and PostgreSQL, in use in Dubai through Quick Kick Sportbooker.",
        "Built frontend features for players, operators, and admin users with responsive, user-friendly interfaces.",
        "Implemented role-based access control and tenant-based routing using subdomains for different organizations.",
        "Integrated APIs for authentication, bookings, schedules, and user management.",
        "Used Zustand for state management and built reusable components to improve scalability and maintainability.",
        "Contributed to backend APIs with NestJS and PostgreSQL, including migrations, seed data, and authentication flows.",
        "Implemented multilingual support (English and Arabic) and contributed to performance improvements and bug fixes.",
      ],
    },
  ];

  return {
    navigation,
    hobbies,
    skillWithLogo,
    projects,
    workingProjects,
    timeline,
  };
}
