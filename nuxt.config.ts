import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Melad Adera | Full Stack Developer",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "Portfolio of Melad Adera, full stack developer. React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL. Freelance and product work including SportBooker.",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "Melad Adera" },
        {
          name: "keywords",
          content:
            "Melad Adera, Full Stack Developer, Web Developer, React, Next.js, TypeScript, NestJS, PostgreSQL, Dubai, Freelance",
        },
        {
          property: "og:site_name",
          content: "Melad Adera | Portfolio",
        },
        {
          property: "og:site",
          content: "https://www.meladadera.com/",
        },
        {
          property: "og:title",
          content: "Melad Adera | Full Stack Developer",
        },
        {
          property: "og:description",
          content:
            "Portfolio of Melad Adera, full stack developer. React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL.",
        },
        {
          property: "og:image",
          content: "https://www.meladadera.com/profile-pics/profile.jpeg",
        },
      ],
      link: [{ rel: "icon", href: "/brand/favicon-ma.svg", type: "image/svg+xml" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
  runtimeConfig: {
    public: {
      NUXT_GTM_ID: process.env.NUXT_GTM_ID,
    },
  },
});
