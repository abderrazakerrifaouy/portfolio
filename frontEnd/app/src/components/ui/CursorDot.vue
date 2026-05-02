<template>
  <div class="cursor" :style="{ left: x + 'px', top: y + 'px' }" :class="{ active: hovering }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(-100)
const y = ref(-100)
const targetX = ref(-100)
const targetY = ref(-100)
const hovering = ref(false)

const onMove = (e) => {
  targetX.value = e.clientX
  targetY.value = e.clientY
}

const onEnter = (e) => {
  if (e.target.closest('a, button, .interactive')) hovering.value = true
}
const onLeave = () => { hovering.value = false }

let rafId = null

const updateCursor = () => {
  // Simple lerp: current + (target - current) * factor
  x.value += (targetX.value - x.value) * 0.15
  y.value += (targetY.value - y.value) * 0.15
  
  rafId = requestAnimationFrame(updateCursor)
}

onMounted(() => {
  window.addEventListener('mousemove', onMove)
  document.addEventListener('mouseover', onEnter)
  document.addEventListener('mouseout', onLeave)
  updateCursor()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  document.removeEventListener('mouseover', onEnter)
  document.removeEventListener('mouseout', onLeave)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.cursor {
  position: fixed;
  width: 12px;
  height: 12px;
  background: var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  will-change: transform, width, height;
}

.cursor.active {
  width: 60px;
  height: 60px;
  background: white;
  mix-blend-mode: difference;
}

@media (pointer: coarse) {
  .cursor { display: none; }
}
</style>
