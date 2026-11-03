<script setup>
const { projects } = useConstants();
useHead({
  title: "Projects | Melad Adera",
  meta: [
    {
      property: "og:title",
      content: "Projects | Melad Adera",
    },
    {
      property: "og:site",
      content: "https://www.meladadera.com/projects",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <div class="page projects-index">
      <div class="page-container">
        <div class="page-head">
          <p class="eyebrow">Projects</p>
          <h1>Things I've built</h1>
          <p class="lead">
            Products I've worked on and things I've built on my own. Each one
            has a case study with my role, what I built and the stack.
          </p>
        </div>
        <div class="project-grid">
          <CardsFeaturedProject
            v-for="project in projects"
            :key="project.slug"
            :project="project"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
