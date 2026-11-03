<script setup>
import {
  AcademicCapIcon,
  ArrowRightIcon,
  ArrowTurnUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CodeBracketIcon,
  PuzzlePieceIcon,
  QuestionMarkCircleIcon,
  SunIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  steps: {
    type: Array,
    default: () => [],
  },
});

// shown while a step's photo is missing; keys match `icon` in const.js
const icons = {
  foundation: AcademicCapIcon,
  curiosity: QuestionMarkCircleIcon,
  direction: ArrowTurnUpRightIcon,
  build: CodeBracketIcon,
  persistence: PuzzlePieceIcon,
  growth: SunIcon,
};

const pad = (n) => String(n).padStart(2, "0");
const total = pad(props.steps.length);
const track = ref(null);
const cards = [];
const images = [];
const active = ref(0);
const missing = ref(props.steps.map(() => false));

function goTo(i) {
  const card = cards[i];
  if (!card || !track.value) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  track.value.scrollTo({
    left: card.offsetLeft - (track.value.clientWidth - card.offsetWidth) / 2,
    behavior: reduce ? "auto" : "smooth",
  });
}

// the active card is whichever one sits closest to the middle of the track
let frame = 0;
function onScroll() {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => {
    const el = track.value;
    if (!el) return;
    const middle = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let best = Infinity;
    cards.forEach((card, i) => {
      const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - middle);
      if (distance < best) {
        best = distance;
        closest = i;
      }
    });
    active.value = closest;
  });
}

onMounted(() => {
  // a photo that failed to load before hydration never fires @error, so check once here
  images.forEach((img, i) => {
    if (img && img.complete && img.naturalWidth === 0) missing.value[i] = true;
  });
  onScroll();
});
onBeforeUnmount(() => cancelAnimationFrame(frame));
</script>
<template>
  <div class="story-carousel">
    <div
      ref="track"
      class="story-track"
      tabindex="0"
      role="region"
      aria-roledescription="carousel"
      aria-label="My story"
      @scroll.passive="onScroll"
    >
      <article
        v-for="(step, i) in steps"
        :key="step.keyword"
        :ref="(el) => { if (el) cards[i] = el; }"
        class="story-card"
        :class="{ 'is-active': i === active }"
        :aria-label="`Step ${i + 1} of ${steps.length}: ${step.title} ${step.accent}`"
        @click="i !== active && goTo(i)"
      >
        <div class="story-photo">
          <img
            v-if="!missing[i]"
            :ref="(el) => { if (el) images[i] = el; }"
            :src="step.image"
            :alt="step.alt"
            width="1080"
            height="1350"
            loading="lazy"
            @error="missing[i] = true"
          />
          <div v-else class="story-placeholder" aria-hidden="true">
            <component :is="icons[step.icon]" />
          </div>
        </div>
        <div class="story-meta">
          <span class="story-count"><span><b>{{ pad(i + 1) }}</b> / {{ total }}</span></span>
          <span>Melad Adera</span>
        </div>
        <div class="story-content">
          <p class="story-keyword">{{ step.keyword }}</p>
          <h3>{{ step.title }} <span>{{ step.accent }}</span></h3>
          <div class="story-body">
            <template v-for="(part, k) in step.body" :key="k">
              <blockquote v-if="part.quote">“{{ part.quote }}”</blockquote>
              <p v-else>{{ part }}</p>
            </template>
          </div>
          <div class="story-foot">
            <span>Software · Engineering · Ideas</span>
            <ArrowRightIcon aria-hidden="true" />
          </div>
        </div>
      </article>
    </div>

    <div class="story-controls">
      <button
        type="button"
        class="story-nav"
        aria-label="Previous step"
        :disabled="active === 0"
        @click="goTo(active - 1)"
      >
        <ChevronLeftIcon />
      </button>
      <div class="story-steps" role="group" aria-label="Steps">
        <button
          v-for="(step, i) in steps"
          :key="step.keyword"
          type="button"
          :aria-label="`Step ${i + 1}: ${step.keyword}`"
          :aria-current="i === active ? 'step' : undefined"
          @click="goTo(i)"
        >
          <b>{{ pad(i + 1) }}</b><span>{{ step.keyword }}</span>
        </button>
      </div>
      <button
        type="button"
        class="story-nav"
        aria-label="Next step"
        :disabled="active === steps.length - 1"
        @click="goTo(active + 1)"
      >
        <ChevronRightIcon />
      </button>
    </div>
  </div>
</template>
