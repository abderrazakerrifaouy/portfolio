<template>
  <span class="skill-badge" :class="`skill-badge--${variant}`">{{ label }}</span>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  variant: { type: String, default: 'default' } // default | accent | muted
})
</script>

<style scoped>
.skill-badge {
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  font-size: 11px;
  letter-spacing: 0.06em;
  font-family: var(--font-body);
  white-space: nowrap;
  transition: all var(--t-fast);
  cursor: default;
  border: 1px solid var(--border);
}

.skill-badge:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.skill-badge--default {
  color: var(--text-secondary);
  background: var(--surface-2);
}

.skill-badge--accent {
  color: var(--accent);
  background: var(--accent-muted);
  border-color: rgba(232, 93, 47, 0.3);
}

.skill-badge--muted {
  color: var(--text-muted);
  background: transparent;
}
</style>
