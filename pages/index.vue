<script setup>
const { projects, timeline, featuredStack } = useConstants();
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
    "Personal Portfolio Website. Hi, I am Melad Adera. I'm a Full Stack Developer based in Latakia, Syria. Currently focused on developing website using React, Next.js, Node.js, NestJS and PostgreSQL. Checkout my projects and github repositories",
  keywords:
    "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Melad Adera, ",
  image: "https://www.meladadera.com/profile-pics/home.jpg",
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
</script>
<template>
  <NuxtLayout name="default">
    <HomeLanding
      :projects="projects"
      :timeline="timeline"
      :stack="featuredStack"
    />
  </NuxtLayout>
</template>
