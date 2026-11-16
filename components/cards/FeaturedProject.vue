<script setup>
const props = defineProps({
  project: {
    type: Object,
    default() {
      return {};
    },
  },
});
const stack = computed(() => props.project.techStack.slice(0, 4).join(" · "));
</script>
<template>
  <article class="featured-project">
    <div class="cover" :style="`background-color: ${project.cardColor};`">
      <div class="dots" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <p class="status">{{ project.status }}</p>
        <h3>{{ project.title }}</h3>
      </div>
    </div>
    <div class="body">
      <p class="summary">{{ project.summary }}</p>
      <p class="stack">{{ stack }}</p>
      <div class="links">
        <!-- covers the whole card, so a tap anywhere opens the case study -->
        <NuxtLink
          :href="`/projects/${project.slug}`"
          class="text-link case-link"
          :aria-label="`${project.title} case study`"
          >Case study →</NuxtLink
        >
        <a
          v-if="project.demoLink"
          :href="project.demoLink"
          target="_blank"
          rel="noopener noreferrer"
          class="text-link"
          >Live demo ↗</a
        >
        <a
          v-if="project.urlLink"
          :href="project.urlLink"
          target="_blank"
          rel="noopener noreferrer"
          class="text-link"
          >Live site ↗</a
        >
        <a
          v-if="project.githubLink"
          :href="project.githubLink"
          target="_blank"
          rel="noopener noreferrer"
          class="text-link"
          >Code ↗</a
        >
      </div>
    </div>
  </article>
</template>
