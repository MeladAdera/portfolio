<script setup>
defineProps({
  layer: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  // the first chapter uses the page's h1
  level: {
    type: String,
    default: "h2",
  },
});

const pad = (n) => String(n).padStart(2, "0");
</script>
<template>
  <div class="layer-head">
    <p class="layer-label">
      <span
        >Layer {{ pad(index + 1) }} / {{ pad(total) }} ·
        <b>{{ layer.name }}</b></span
      >
    </p>
    <component :is="level" :id="`${layer.anchor}-title`">{{
      layer.title
    }}</component>
    <p v-if="layer.summary" class="layer-summary">{{ layer.summary }}</p>
  </div>
</template>
