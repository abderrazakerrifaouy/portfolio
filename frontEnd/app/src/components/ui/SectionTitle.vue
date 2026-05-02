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

/* ═══════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════ */

/* Mobile (< 768px) */
@media (max-width: 767px) {
  .section-title {
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-bottom: var(--space-md);
  }

  .section-title__num {
    font-size: 10px;
    padding-top: 0;
    padding-right: var(--space-xs);
  }

  .section-title__text {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    line-height: 1.1;
  }

  .section-title__sub {
    font-size: 12px;
    max-width: 100%;
  }

  .section-title__line {
    display: none;
  }
}

/* Tablet (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .section-title {
    gap: var(--space-md);
    margin-bottom: var(--space-lg);
  }

  .section-title__text {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  .section-title__sub {
    font-size: 13px;
  }
}

/* Desktop (>= 1024px) */
@media (min-width: 1024px) {
  .section-title__line {
    display: block;
  }
}
</style>
