<script setup>
const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Web Developer Portfolio | Melad Adera",
  author: {
    "@type": "Person",
    "@id": "#meladadera",
  },
  url: "https://www.meladadera.com/",
  description:
    "Personal Portfolio Website. Hi, I am Melad Adera. I'm a Full Stack Developer based in Dubai, UAE. Currently focused on developing website using React, Next.js, Node.js, NestJS and PostgreSQL. Checkout my projects and github repositories",
  keywords:
    "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Melad Adera, ",
  image: "https://www.meladadera.com/profile-pics/profile.jpeg",
};
const personJson = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": "#meladadera",
  name: "Melad Adera",
  email: "dev.melad.adera@gmail.com",
  url: "https://www.meladadera.com/",
};
useHead({
  script: [
    {
      children: JSON.stringify(jsonLd),
      type: "application/ld+json",
    },
    {
      children: JSON.stringify(personJson),
      type: "application/ld+json",
    },
  ],
});
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="main">
    <Header />
  </NuxtLayout>
</template>
