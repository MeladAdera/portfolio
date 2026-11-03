<template>
  <nav id="nav-bar" aria-label="Main">
    <div class="nav-inner">
      <NuxtLink href="/" class="home-button" aria-label="Melad Adera, home">
        <img :src="logo" width="36" height="36" alt="" />
        <span>MA.</span>
      </NuxtLink>
      <div class="nav-links">
        <NuxtLink
          v-for="item in navigation"
          :key="item.id"
          :href="item.href"
          :class="{ 'is-active': isActive(item.href) }"
          :aria-current="isActive(item.href) ? 'page' : undefined"
          >{{ item.name }}</NuxtLink
        >
        <a href="#contact" class="nav-contact" @click.prevent="scrollToContact"
          >Contact</a
        >
        <button
          type="button"
          class="theme-toggle"
          aria-label="Dark theme"
          :aria-pressed="enabled"
          @click="toggleTheme()"
        >
          <SunIcon v-if="!enabled" />
          <MoonIcon v-else />
        </button>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
const logoLightTheme = "/brand/nav-ma-default.svg";
const logoDarkTheme = "/brand/nav-ma-alt.svg";

useHead({
  script: [
    {
      children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }`,
    },
  ],
});

const { enabled, toggleTheme } = useTheme();
const { navigation } = useConstants();
const route = useRoute();
const logo = computed(() => (enabled.value ? logoDarkTheme : logoLightTheme));

// page files are capitalised (About.vue), and case studies live under /projects/
const isActive = (href) => {
  const path = route.path.toLowerCase();
  return path === href || path.startsWith(href + "/");
};

// the contact band is in the default layout, so it's on every page
const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};
</script>
