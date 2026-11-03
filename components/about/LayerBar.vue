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
});
defineEmits(["select"]);

const pad = (n) => String(n).padStart(2, "0");
</script>
<template>
  <!-- phones and tablets: a slim sticky bar under the menu, one segment per layer -->
  <nav class="layer-bar" aria-label="Layers on this page">
    <span class="bar-current">
      <b>{{ pad(active + 1) }}</b> · {{ layers[active]?.name }}
    </span>
    <ol class="bar-segments">
      <li v-for="(layer, i) in layers" :key="layer.anchor">
        <a
          :href="`#${layer.anchor}`"
          :aria-label="`Layer ${i + 1}: ${layer.name}`"
          :aria-current="i === active ? 'true' : undefined"
          :class="{ 'is-past': i < active }"
          @click.prevent="$emit('select', i)"
          ><span></span
        ></a>
      </li>
    </ol>
  </nav>
</template>
