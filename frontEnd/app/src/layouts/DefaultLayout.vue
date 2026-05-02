<template>
  <div class="layout">
    <!-- Entry Overlay -->
    <Transition name="entry-fade">
      <div v-if="showEntry" class="entry-overlay">
        <div class="entry-overlay__logo">[ AE ]</div>
      </div>
    </Transition>

    <NavBar />
    <main class="layout__main">
      <slot />
    </main>
    <FooterBar />
    <CursorDot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from '@/components/ui/NavBar.vue'
import FooterBar from '@/components/ui/FooterBar.vue'
import CursorDot from '@/components/ui/CursorDot.vue'

const showEntry = ref(true)

onMounted(() => {
  setTimeout(() => {
    showEntry.value = false
  }, 1200)
})
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout__main {
  flex: 1;
  padding-top: var(--nav-h);
}

/* Entry Overlay */
.entry-overlay {
  position: fixed;
  inset: 0;
  background: var(--ink);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.entry-overlay__logo {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 800;
  color: var(--accent);
  letter-spacing: -0.05em;
  animation: logoIn var(--t-slow) var(--ease-out) forwards;
}

@keyframes logoIn {
  from { opacity: 0; transform: scale(0.9); filter: blur(10px); }
  to { opacity: 1; transform: scale(1); filter: blur(0); }
}

.entry-fade-leave-active {
  transition: all 0.8s var(--ease-in-out);
}

.entry-fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

/* ═══════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════ */

@media (max-width: 767px) {
  .layout__main {
    padding-top: 56px;
  }

  .entry-overlay__logo {
    font-size: 2rem;
  }
}
</style>
