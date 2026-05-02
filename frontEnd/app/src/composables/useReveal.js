import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer = null
  let mutationObserver = null
  const observed = new WeakSet()

  const observeRevealElement = (el) => {
    if (!observer || !el || observed.has(el)) return
    observed.add(el)
    observer.observe(el)
  }

  const observeAllRevealElements = (root = document) => {
    root.querySelectorAll('.reveal').forEach((el) => {
      observeRevealElement(el)
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    observeAllRevealElements()

    mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return

          if (node.classList.contains('reveal')) {
            observeRevealElement(node)
          }

          if (node.querySelectorAll) {
            observeAllRevealElements(node)
          }
        })
      })
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
    if (mutationObserver) mutationObserver.disconnect()
  })
}
