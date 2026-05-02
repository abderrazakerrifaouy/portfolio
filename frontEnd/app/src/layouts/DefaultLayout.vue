<template>
  <div class="layout">
    <NavBar />
    <main class="layout__main">
      <slot />
    </main>
    <FooterBar />
    <CursorDot />
  </div>
</template>

<script setup>
import NavBar from '@/components/ui/NavBar.vue'
import FooterBar from '@/components/ui/FooterBar.vue'
import CursorDot from '@/components/ui/CursorDot.vue'
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
</style>
