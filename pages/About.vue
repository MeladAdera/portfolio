<script setup>
import { ArrowDownTrayIcon } from "@heroicons/vue/24/outline";

const { timeline, skills, education, interests } = useConstants();

const principles = [
  {
    title: "I own the whole feature",
    text: "On SportBooker and the inventory platform I've written the migration, the API and the screen for the same feature, so nothing gets lost between layers.",
  },
  {
    title: "I plan for bad networks",
    text: "Shops can't stop selling when the connection drops, so the inventory app queues changes offline and syncs them when it's back.",
  },
  {
    title: "I leave code cleaner",
    text: "Much of my freelance work was turning messy and AI-generated code into something the next developer can maintain.",
  },
];

useHead({
  title: "About | Melad Adera",
  meta: [
    {
      property: "og:title",
      content: "About | Melad Adera",
    },
    {
      property: "og:site",
      content: "https://www.meladadera.com/about",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <div class="page about-page">
      <!-- story -->
      <section class="page-container about-hero">
        <div class="about-text">
          <p class="eyebrow">About me</p>
          <h1>I like owning a feature from the database to the screen.</h1>
          <p class="lead">
            I'm Melad, a full stack developer. I studied Computer and Control
            Engineering at Tishreen University and started freelancing on
            Khamsat in January 2025, building client apps and cleaning up
            codebases.
          </p>
          <p class="lead">
            Since 2026 I've worked on products: first SportBooker, a booking
            platform for the Syrian community, and now an inventory system that
            links a warehouse with its shops.
          </p>
          <div class="about-actions">
            <a
              href="/resume/Melad_Adera.pdf"
              download="Melad-Adera-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
            >
              <ArrowDownTrayIcon /> Download resume
            </a>
            <div class="social-links">
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
            </div>
          </div>
        </div>
        <img
          src="/profile-pics/about.jpg"
          width="800"
          height="800"
          alt="Melad Adera at a desk, with code on a monitor in the background"
        />
      </section>

      <!-- how I work -->
      <section class="how-i-work" aria-labelledby="how-i-work-title">
        <div class="page-container">
          <h2 id="how-i-work-title">How I work</h2>
          <ol>
            <li v-for="(item, i) in principles" :key="item.title">
              <span class="num" aria-hidden="true">0{{ i + 1 }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </li>
          </ol>
        </div>
      </section>

      <!-- experience -->
      <section id="experience" class="page-container about-experience">
        <div class="intro">
          <h2>Experience</h2>
          <p>Product and client work since 2025, mostly full stack.</p>
        </div>
        <ol>
          <li v-for="career in timeline" :key="career.company">
            <span class="duration">{{ career.duration }}</span>
            <div class="entry">
              <h3>{{ career.role }} · {{ career.company }}</h3>
              <ul v-if="career.points">
                <li v-for="point in career.points" :key="point">{{ point }}</li>
              </ul>
              <p v-else>{{ career.summary }}</p>
              <NuxtLink
                v-if="career.project"
                :href="`/projects/${career.project}`"
                class="text-link"
                >Read the case study →</NuxtLink
              >
            </div>
          </li>
        </ol>
      </section>

      <!-- skills -->
      <section id="skills" class="page-container about-skills">
        <h2>Skills</h2>
        <div class="skill-groups">
          <div v-for="group in skills" :key="group.name" class="skill-group">
            <h3>{{ group.name }}</h3>
            <ul class="chips">
              <li v-for="skill in group.items" :key="skill">{{ skill }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- education and interests -->
      <div class="page-container about-extras">
        <section>
          <h2>Education</h2>
          <div v-for="edu in education" :key="edu.school" class="school">
            <p>{{ edu.school }}</p>
            <p>{{ edu.degree }}</p>
          </div>
        </section>
        <section>
          <h2>Outside work</h2>
          <ul class="chips interests">
            <li v-for="interest in interests" :key="interest">
              {{ interest }}
            </li>
          </ul>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>
