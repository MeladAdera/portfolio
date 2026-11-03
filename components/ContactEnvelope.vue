<script setup>
// the sealing plays once, the first time the envelope comes into view
const scene = ref(null);
const sealed = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      sealed.value = true;
      observer.disconnect();
    },
    { threshold: 0.35 },
  );
  observer.observe(scene.value);
});
onBeforeUnmount(() => observer?.disconnect());
</script>
<template>
  <div
    ref="scene"
    class="envelope-scene"
    :class="{ 'is-sealed': sealed }"
    role="img"
    aria-label="A letter slides into an envelope addressed to Melad, the flap closes and a teal seal is pressed on it."
  >
    <div class="envelope-stage">
      <div class="envelope-body">
        <div class="envelope-shadow"></div>
        <div class="envelope-back"></div>
        <div class="envelope-letter">
          <span class="letter-badge">MA</span>
          <span class="letter-hello">Hello,</span>
          <i class="letter-line"></i>
          <i class="letter-line short"></i>
        </div>
        <div class="envelope-pocket"></div>
        <span class="envelope-address">dev.melad.adera@gmail.com</span>
        <div class="envelope-flap"></div>
        <div class="envelope-seal"></div>
      </div>
    </div>
  </div>
</template>
