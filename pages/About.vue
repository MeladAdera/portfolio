<script setup>
import {
  ArrowDownTrayIcon,
  ServerStackIcon,
  WindowIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/vue/24/outline";

// keys used by `skills[].icon` in const.js
const skillIcons = {
  frontend: WindowIcon,
  backend: ServerStackIcon,
  tools: WrenchScrewdriverIcon,
};

const {
  layers,
  intro,
  facts,
  collaboration,
  principles,
  dataPoints,
  education,
  journey,
  values,
  interests,
  skills,
} = useConstants();

const pad = (n) => String(n).padStart(2, "0");
const sections = [];
const setSection = (i) => (el) => {
  if (el) sections[i] = el;
};
const active = ref(0);
// the last layer is a dark band, so the stack and the bar switch to dark plates there
const deep = computed(() => active.value === layers.length - 1);

const story = ref(null);

// the active layer is the last section whose top has passed a line 40% down the
// screen; above the first section it stays on layer 01. The same pass records how far
// through the story the reader is (0 to 1), which tilts the phone background stack.
let frame = 0;
function updateActive() {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => {
    const line = window.innerHeight * 0.4;
    let current = 0;
    sections.forEach((el, i) => {
      if (el.getBoundingClientRect().top <= line) current = i;
    });
    active.value = current;

    const el = story.value;
    if (!el) return;
    const travel = el.offsetHeight - window.innerHeight;
    const progress = travel > 0 ? -el.getBoundingClientRect().top / travel : 0;
    el.style.setProperty(
      "--story-progress",
      Math.min(1, Math.max(0, progress)).toFixed(3),
    );
  });
}
onMounted(() => {
  window.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("resize", updateActive);
  updateActive();
});
onBeforeUnmount(() => {
  cancelAnimationFrame(frame);
  window.removeEventListener("scroll", updateActive);
  window.removeEventListener("resize", updateActive);
});

function goTo(i) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // "auto" would pick up the page-wide scroll-behavior: smooth, so ask for instant
  sections[i]?.scrollIntoView({ behavior: reduce ? "instant" : "smooth" });
}

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
    <div class="page about-page" :class="{ 'is-deep': deep }">
      <div class="page-container about-layout">
        <!-- left: the story, five chapters in normal reading order -->
        <div ref="story" class="about-story">
          <!-- phones and tablets: a sticky bar for navigation, and the stack as a faint
               sticky background that the story scrolls over -->
          <AboutLayerBar :layers="layers" :active="active" @select="goTo" />
          <div class="stack-mobile">
            <AboutLayerStack :layers="layers" :active="active" decorative />
          </div>

          <!-- 01 Interface -->
          <section
            :id="layers[0].anchor"
            :ref="setSection(0)"
            class="layer-section layer-interface"
            :aria-labelledby="`${layers[0].anchor}-title`"
          >
            <AboutLayerHead
              :layer="layers[0]"
              :index="0"
              :total="layers.length"
              level="h1"
            />
            <p class="story-name">
              {{ intro.name }}<span>{{ intro.role }}</span>
            </p>
            <p v-for="text in intro.paragraphs" :key="text" class="story-text">
              {{ text }}
            </p>
            <a
              href="/resume/Melad_Adera.pdf"
              download="Melad-Adera-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary story-action"
            >
              <ArrowDownTrayIcon /> Download resume
            </a>
          </section>

          <!-- 02 API -->
          <section
            :id="layers[1].anchor"
            :ref="setSection(1)"
            class="layer-section layer-api"
            :aria-labelledby="`${layers[1].anchor}-title`"
          >
            <AboutLayerHead
              :layer="layers[1]"
              :index="1"
              :total="layers.length"
            />
            <dl class="story-facts">
              <div v-for="fact in facts" :key="fact.label">
                <dt>{{ fact.label }}</dt>
                <dd>{{ fact.text }}</dd>
              </div>
            </dl>
            <h3 class="story-subhead">How I communicate</h3>
            <p v-for="text in collaboration" :key="text" class="story-text">
              {{ text }}
            </p>
          </section>

          <!-- 03 Logic -->
          <section
            :id="layers[2].anchor"
            :ref="setSection(2)"
            class="layer-section layer-logic"
            :aria-labelledby="`${layers[2].anchor}-title`"
          >
            <AboutLayerHead
              :layer="layers[2]"
              :index="2"
              :total="layers.length"
            />
            <div
              v-for="(item, i) in principles"
              :key="item.title"
              class="story-point"
            >
              <h3 class="story-subhead">
                <span class="point-num">{{ pad(i + 1) }}</span
                >{{ item.title }}
              </h3>
              <p class="story-text">{{ item.text }}</p>
              <p class="story-example"><b>In practice</b>{{ item.example }}</p>
            </div>
          </section>

          <!-- 04 Data -->
          <section
            :id="layers[3].anchor"
            :ref="setSection(3)"
            class="layer-section layer-data"
            :aria-labelledby="`${layers[3].anchor}-title`"
          >
            <AboutLayerHead
              :layer="layers[3]"
              :index="3"
              :total="layers.length"
            />
            <div
              v-for="(item, i) in dataPoints"
              :key="item.title"
              class="story-point"
            >
              <h3 class="story-subhead">
                <span class="point-num">{{ pad(i + 1) }}</span
                >{{ item.title }}
              </h3>
              <p class="story-text">{{ item.text }}</p>
              <p class="story-example"><b>In practice</b>{{ item.example }}</p>
            </div>
            <div class="story-point">
              <h3 class="story-subhead">Education</h3>
              <p v-for="edu in education" :key="edu.school" class="story-text">
                <strong>{{ edu.school }}</strong
                >, {{ edu.degree }}.
              </p>
            </div>
          </section>

          <!-- 05 Foundation -->
          <section
            :id="layers[4].anchor"
            :ref="setSection(4)"
            class="layer-section layer-foundation"
            :aria-labelledby="`${layers[4].anchor}-title`"
          >
            <AboutLayerHead
              :layer="layers[4]"
              :index="4"
              :total="layers.length"
            />
            <div class="story-point">
              <h3 class="story-subhead">My journey</h3>
              <ol class="journey">
                <li v-for="(step, i) in journey" :key="step.title">
                  <span class="journey-num" aria-hidden="true">{{
                    i + 1
                  }}</span>
                  <div>
                    <h4>{{ step.title }}</h4>
                    <p>{{ step.text }}</p>
                  </div>
                </li>
              </ol>
            </div>
            <div class="story-point">
              <h3 class="story-subhead">My values</h3>
              <p class="story-text">{{ values }}</p>
            </div>
            <div class="story-point">
              <h3 class="story-subhead">Beyond the screen</h3>
              <ul class="story-inline">
                <li v-for="interest in interests" :key="interest">
                  {{ interest }}
                </li>
              </ul>
            </div>
          </section>
        </div>

        <!-- right: the 3D stack stays in view while the story scrolls -->
        <aside class="stack-aside">
          <div class="stack-sticky">
            <AboutLayerStack :layers="layers" :active="active" @select="goTo" />
          </div>
        </aside>
      </div>

      <!-- skills, after the five layers -->
      <section id="skills" class="page-container about-skills">
        <h2>Skills</h2>
        <div class="skill-groups">
          <div v-for="group in skills" :key="group.name" class="skill-group">
            <div class="skill-head">
              <span class="skill-icon" aria-hidden="true">
                <component :is="skillIcons[group.icon]" />
              </span>
              <h3>{{ group.name }}</h3>
            </div>
            <ul class="chips">
              <li v-for="skill in group.items" :key="skill">{{ skill }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- next: email me (the menu's Contact lands here on this page) -->
      <div id="contact" class="page-container about-next">
        <a href="mailto:dev.melad.adera@gmail.com" class="next-link">
          <span class="next-label">Next</span>
          <span class="next-title"
            >Email me<span class="next-arrow" aria-hidden="true">→</span></span
          >
        </a>
      </div>
    </div>
  </NuxtLayout>
</template>
