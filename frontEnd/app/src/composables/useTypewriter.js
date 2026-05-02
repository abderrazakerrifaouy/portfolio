import { ref, onMounted, onUnmounted } from 'vue'

export function useTypewriter(words, speed = 100, pause = 2000) {
  const display = ref('')
  const wordIndex = ref(0)
  const charIndex = ref(0)
  const isDeleting = ref(false)
  let timer = null

  const type = () => {
    const current = words[wordIndex.value]

    if (!isDeleting.value) {
      display.value = current.substring(0, charIndex.value + 1)
      charIndex.value++
      if (charIndex.value === current.length) {
        isDeleting.value = true
        timer = setTimeout(type, pause)
        return
      }
    } else {
      display.value = current.substring(0, charIndex.value - 1)
      charIndex.value--
      if (charIndex.value === 0) {
        isDeleting.value = false
        wordIndex.value = (wordIndex.value + 1) % words.length
      }
    }
    timer = setTimeout(type, isDeleting.value ? speed / 2 : speed)
  }

  onMounted(() => { timer = setTimeout(type, 500) })
  onUnmounted(() => clearTimeout(timer))

  return { display }
}
