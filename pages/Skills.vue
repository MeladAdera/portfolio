<script setup>
const { skillWithLogo } = useConstants();
useHead({
  title: "Web Developer Portfolio | Skills",
  meta: [
    {
      property: "og:title",
      content: "Web Developer Portfolio | Skills",
    },
    {
      property: "og:site_name",
      content: "Web Developer Portfolio | Skills",
    },
   
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <Skills :skill-set="skillWithLogo" />
  </NuxtLayout>
</template>
