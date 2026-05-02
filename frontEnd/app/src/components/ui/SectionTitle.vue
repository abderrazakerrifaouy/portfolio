<template>
  <div class="section-title reveal">
    <span class="section-title__num">{{ num }}</span>
    <div class="section-title__content">
      <h2 class="section-title__text">{{ title }}</h2>
      <p v-if="subtitle" class="section-title__sub">{{ subtitle }}</p>
    </div>
    <div class="section-title__line"></div>
  </div>
</template>

<script setup>
defineProps({
  num: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' }
})
</script>

<style scoped>
.section-title {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.section-title__num {
  font-family: var(--font-body);
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.1em;
  padding-top: 14px;
  white-space: nowrap;
}

.section-title__content {
  flex: 0 0 auto;
}

.section-title__text {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--text-primary);
}

.section-title__sub {
  color: var(--text-secondary);
  font-size: 13px;
  margin-top: 8px;
  max-width: 40ch;
}

.section-title__line {
  flex: 1;
  height: 1px;
  background: var(--border);
  margin-top: 28px;
}

@media (max-width: 768px) {
  .section-title { flex-wrap: wrap; }
  .section-title__line { display: none; }
}
</style>
