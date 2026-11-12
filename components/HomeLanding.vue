<script setup>
import {
  ArrowDownIcon,
  ArrowDownTrayIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
  timeline: {
    type: Array,
    default: () => [],
  },
  stack: {
    type: Array,
    default: () => [],
  },
});
</script>
<template>
  <div class="page home">
    <!-- hero -->
    <section class="page-container home-hero">
      <div class="hero-text">
        <div class="hero-avatar-row">
          <img
            src="/profile-pics/home.jpg"
            width="96"
            height="96"
            alt="Melad Adera working at a laptop"
          />
          <p class="now-building">
            <span>Now building</span>
            <span>Inventory Distribution System</span>
          </p>
        </div>
        <p class="eyebrow">Hi, I'm Melad Adera</p>
        <h1>I build web apps end to end.</h1>
        <p class="lead">
          Full stack developer with 2+ years in React, Next.js and TypeScript on
          the frontend and NestJS and PostgreSQL on the backend.
          <span class="hidden sm:inline"
            >Recent work includes a multi-tenant inventory platform, a sports
            booking system and an online store.</span
          >
        </p>
        <div class="hero-actions">
          <NuxtLink href="/projects" class="btn-primary">
            See my projects <ArrowRightIcon />
          </NuxtLink>
          <a
            href="/resume/Melad_Adera.pdf"
            download="Melad-Adera-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary"
          >
            <ArrowDownTrayIcon /> Download resume
          </a>
        </div>
        <div class="hero-links">
          <a
            href="https://github.com/MeladAdera"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub ↗</a
          >
          <a
            href="https://www.linkedin.com/in/melad-adera-97105a371/"
            target="_blank"
            rel="noopener noreferrer"
            >LinkedIn ↗</a
          >
          <span class="hidden sm:inline">dev.melad.adera@gmail.com</span>
        </div>
        <nav class="hero-jump" aria-label="Jump to">
          <span class="label">Jump to</span>
          <ul>
            <li>
              <a href="#projects">Projects <ArrowDownIcon /></a>
            </li>
            <li>
              <a href="#experience">Experience <ArrowDownIcon /></a>
            </li>
            <li>
              <NuxtLink href="/about">About me <ArrowRightIcon /></NuxtLink>
            </li>
            <li>
              <a href="#contact">Contact <ArrowDownIcon /></a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="hero-photo">
        <img
          src="/profile-pics/home.jpg"
          width="360"
          height="360"
          alt="Melad Adera working at a laptop"
        />
        <p class="now-building">
          <span>Now building</span>
          <span>Inventory Distribution System</span>
        </p>
      </div>
    </section>

    <!-- stack -->
    <section class="home-stack" aria-label="Daily stack">
      <div class="page-container">
        <span class="label">Daily stack</span>
        <ul>
          <li v-for="tech in stack" :key="tech">{{ tech }}</li>
        </ul>
        <NuxtLink href="/about#skills" class="text-link">All skills →</NuxtLink>
      </div>
    </section>

    <!-- projects -->
    <section id="projects" class="page-container home-projects">
      <div class="section-head">
        <h2>Selected projects</h2>
        <NuxtLink href="/projects" class="text-link">All projects →</NuxtLink>
      </div>
      <div class="featured-projects">
        <CardsFeaturedProject
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </section>

    <!-- experience -->
    <section id="experience" class="page-container home-experience">
      <div class="intro">
        <h2>Experience</h2>
        <p>Product and client work since 2025, mostly full stack.</p>
      </div>
      <ol>
        <li v-for="career in timeline" :key="career.company">
          <div>
            <h3>{{ career.role }} · {{ career.company }}</h3>
            <p>{{ career.summary }}</p>
            <NuxtLink
              v-if="career.project"
              :href="`/projects/${career.project}`"
              class="text-link"
              >Case study →</NuxtLink
            >
          </div>
          <span class="duration">{{ career.duration }}</span>
        </li>
      </ol>
    </section>
  </div>
</template>
