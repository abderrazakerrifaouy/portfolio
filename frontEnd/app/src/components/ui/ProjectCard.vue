<template>
  <a :href="project.url" target="_blank" rel="noopener" class="project-card">
    <div class="project-card__header">
      <span class="project-card__category">{{ project.category }}</span>
      <svg class="project-card__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M1 15L15 1M15 1H6M15 1V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>

    <div class="project-card__body">
      <h3 class="project-card__name">{{ project.name }}</h3>
      <p class="project-card__desc">{{ project.description }}</p>
    </div>

    <div class="project-card__footer">
      <span class="project-card__lang" :style="{ '--lang-color': langColor }">
        <span class="project-card__lang-dot"></span>
        {{ project.language }}
      </span>
      <span class="project-card__commits">{{ project.commits }} commits</span>
    </div>
  </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true }
})

const langColors = {
  'C': '#555555',
  'PHP': '#7a86b8',
  'JavaScript': '#f0db4f',
  'TypeScript': '#3178c6',
  'HTML/CSS': '#e34c26',
  'Kotlin': '#A97BFF',
  'Dart': '#00b4ab',
  'Python': '#3572A5',
  'Markdown': '#083fa1'
}

const langColor = computed(() => langColors[props.project.language] || '#888')
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding: var(--space-md);
  border: 1px solid var(--border);
  background: var(--surface-2);
  position: relative;
  transition: border-color var(--t-normal), background var(--t-normal), transform var(--t-normal) var(--ease);
  cursor: pointer;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--accent-muted), transparent);
  opacity: 0;
  transition: opacity var(--t-normal);
}

.project-card:hover {
  border-color: var(--accent);
  background: var(--surface-3);
  transform: translateY(-4px);
}

.project-card:hover::before { opacity: 1; }

.project-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-card__category {
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-muted);
  padding: 3px 10px;
}

.project-card__arrow {
  color: var(--text-muted);
  transition: color var(--t-fast), transform var(--t-fast);
}

.project-card:hover .project-card__arrow {
  color: var(--accent);
  transform: translate(4px, -4px);
}

.project-card__name {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.project-card__desc {
  color: var(--text-secondary);
  font-size: 13px;
  line-height: 1.6;
  flex: 1;
}

.project-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-sm);
  border-top: 1px solid var(--border);
}

.project-card__lang {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--text-secondary);
}

.project-card__lang-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--lang-color);
}

.project-card__commits {
  font-size: 11px;
  color: var(--text-muted);
  font-family: var(--font-body);
}
</style>
