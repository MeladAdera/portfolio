<script setup>
import {
  ChartBarIcon,
  GlobeAltIcon,
  LanguageIcon,
  ReceiptPercentIcon,
  ServerStackIcon,
  ShoppingCartIcon,
  SignalSlashIcon,
  Squares2X2Icon,
  UserCircleIcon,
} from "@heroicons/vue/24/outline";

// keys used by `highlights[].icon` in const.js
const icons = {
  offline: SignalSlashIcon,
  ledger: ReceiptPercentIcon,
  chart: ChartBarIcon,
  tenants: GlobeAltIcon,
  language: LanguageIcon,
  stack: ServerStackIcon,
  cart: ShoppingCartIcon,
  account: UserCircleIcon,
  admin: Squares2X2Icon,
};

const route = useRoute();
const { projects, timeline } = useConstants();

const index = projects.findIndex((p) => p.slug === route.params.slug);
if (index === -1) {
  throw createError({
    statusCode: 404,
    statusMessage: "Project not found",
    fatal: true,
  });
}
const project = projects[index];
const nextProject = projects[(index + 1) % projects.length];
// role and dates come from the matching job, if there is one
const job = timeline.find((t) => t.project === project.slug);

useHead({
  title: `${project.title} | Melad Adera`,
  meta: [
    { name: "description", content: project.intro },
    { property: "og:title", content: `${project.title} | Melad Adera` },
    { property: "og:description", content: project.intro },
    {
      property: "og:site",
      content: `https://www.meladadera.com/projects/${project.slug}`,
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <article class="page case-study">
      <div class="page-container case-hero">
        <NuxtLink href="/projects" class="text-link back-link"
          >← All projects</NuxtLink
        >
        <p class="eyebrow">Case study</p>
        <h1>{{ project.title }}</h1>
        <p class="lead">{{ project.intro }}</p>
        <div class="case-actions">
          <a
            v-if="project.demoLink"
            :href="project.demoLink"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
            >Try the live demo ↗</a
          >
          <a
            v-if="project.urlLink"
            :href="project.urlLink"
            target="_blank"
            rel="noopener noreferrer"
            :class="project.demoLink ? 'btn-secondary' : 'btn-primary'"
            >Visit live site ↗</a
          >
          <a
            v-if="project.githubLink"
            :href="project.githubLink"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary"
            >{{ project.githubLinkBackend ? "Frontend code" : "Code" }} ↗</a
          >
          <a
            v-if="project.githubLinkBackend"
            :href="project.githubLinkBackend"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary"
            >Backend code ↗</a
          >
        </div>
      </div>

      <div v-if="project.screenshot" class="page-container">
        <div
          class="case-cover"
          :style="`background-color: ${project.cardColor};`"
        >
          <div class="dots" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img
            :src="project.screenshot"
            :alt="`${project.title} screenshot`"
            width="1440"
            height="900"
          />
        </div>
      </div>

      <div class="page-container case-body">
        <aside class="case-facts" aria-label="Project facts">
          <dl>
            <div>
              <dt>Role</dt>
              <dd>{{ job ? job.role : "Personal project" }}</dd>
            </div>
            <div v-if="job">
              <dt>Dates</dt>
              <dd class="tabular-nums">{{ job.duration }}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{{ project.status }}</dd>
            </div>
            <div>
              <dt>Built for</dt>
              <dd class="plain">{{ project.audience }}</dd>
            </div>
          </dl>
          <div class="facts-stack">
            <p class="facts-label">Stack</p>
            <ul class="chips">
              <li v-for="tech in project.techStack" :key="tech">{{ tech }}</li>
            </ul>
          </div>
        </aside>

        <div class="case-content">
          <section>
            <h2>Overview</h2>
            <p class="overview">{{ project.overview }}</p>
          </section>

          <section>
            <h2>Highlights</h2>
            <ul class="highlights">
              <li v-for="item in project.highlights" :key="item.title">
                <span class="icon" aria-hidden="true">
                  <component :is="icons[item.icon]" />
                </span>
                <div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.text }}</p>
                </div>
              </li>
            </ul>
          </section>

          <section v-if="project.built?.length">
            <h2>What I built</h2>
            <ul class="built">
              <li v-for="item in project.built" :key="item">{{ item }}</li>
            </ul>
          </section>
        </div>
      </div>

      <div class="page-container next-project">
        <NuxtLink :href="`/projects/${nextProject.slug}`">
          <span
            class="swatch"
            aria-hidden="true"
            :style="`background-color: ${nextProject.cardColor};`"
          ></span>
          <span class="next-text">
            <span class="next-label">Next project</span>
            <span class="next-title">{{ nextProject.title }}</span>
          </span>
          <span class="next-cta" aria-hidden="true">Read case study →</span>
          <span class="next-arrow" aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </article>
  </NuxtLayout>
</template>
