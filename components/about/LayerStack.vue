<script setup>
defineProps({
  layers: {
    type: Array,
    default: () => [],
  },
  active: {
    type: Number,
    default: 0,
  },
  // phones: a faint background behind the story, with no buttons or labels
  decorative: {
    type: Boolean,
    default: false,
  },
});
defineEmits(["select"]);

const pad = (n) => String(n).padStart(2, "0");
</script>
<template>
  <div v-if="decorative" class="layer-stack is-ambient" aria-hidden="true">
    <div class="stack-plates">
      <div
        v-for="(layer, i) in layers"
        :key="layer.anchor"
        class="layer-plate"
        :class="{ 'is-active': i === active }"
        :style="{ '--i': i }"
      ></div>
    </div>
  </div>

  <!-- desktop: the five plates are the page's navigation; a click scrolls to the chapter -->
  <nav v-else class="layer-stack" aria-label="Layers on this page">
    <div class="stack-plates">
      <button
        v-for="(layer, i) in layers"
        :key="layer.anchor"
        type="button"
        class="layer-plate"
        :class="{ 'is-active': i === active }"
        :style="{ '--i': i }"
        :aria-label="`Layer ${i + 1}: ${layer.name}`"
        :aria-current="i === active ? 'true' : undefined"
        @click="$emit('select', i)"
      >
        <span class="plate-num">{{ pad(i + 1) }}</span>
        <span class="plate-name">{{ layer.name }}</span>
      </button>
    </div>
  </nav>
</template>
