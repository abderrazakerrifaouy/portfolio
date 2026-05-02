import { ref, onMounted, onUnmounted } from 'vue'

export function useMagnetic(elRef, strength = 0.35) {
  const x = ref(0)
  const y = ref(0)

  const onMouseMove = (e) => {
    if (!elRef.value) return
    
    const rect = elRef.value.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY
    
    x.value = deltaX * strength
    y.value = deltaY * strength
  }

  const onMouseLeave = () => {
    x.value = 0
    y.value = 0
  }

  return { x, y, onMouseMove, onMouseLeave }
}
