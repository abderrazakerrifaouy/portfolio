<template>
  <div class="cursor" :style="{ left: x + 'px', top: y + 'px' }" :class="{ active: hovering }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(-100)
const y = ref(-100)
const hovering = ref(false)

const onMove = (e) => {
  x.value = e.clientX
  y.value = e.clientY
}

const onEnter = (e) => {
  if (e.target.closest('a, button')) hovering.value = true
}
const onLeave = () => { hovering.value = false }

onMounted(() => {
  window.addEventListener('mousemove', onMove)
  document.addEventListener('mouseover', onEnter)
  document.addEventListener('mouseout', onLeave)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  document.removeEventListener('mouseover', onEnter)
  document.removeEventListener('mouseout', onLeave)
})
</script>

<style scoped>
.cursor {
  position: fixed;
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: width 0.2s var(--ease), height 0.2s var(--ease), background 0.2s;
  mix-blend-mode: difference;
}

.cursor.active {
  width: 32px;
  height: 32px;
  background: rgba(232, 93, 47, 0.3);
}

@media (pointer: coarse) {
  .cursor { display: none; }
}
</style>
