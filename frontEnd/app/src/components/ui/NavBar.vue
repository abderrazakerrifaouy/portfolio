<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled, 'nav--open': menuOpen }">
    <div class="container nav__inner">
      <!-- Logo -->
      <RouterLink 
        ref="logoRef"
        to="/" 
        class="nav__logo" 
        @click="menuOpen = false"
        @mousemove="lMove"
        @mouseleave="lLeave"
        :style="{ transform: `translate(${lx}px, ${ly}px)` }"
      >
        <span class="nav__logo-bracket">[</span>
        <span class="nav__logo-name">AE</span>
        <span class="nav__logo-bracket">]</span>
      </RouterLink>


      <nav class="nav__links" aria-label="Main navigation">
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="nav__link"
          :class="{ active: route.path === link.path }"
        >
          <span class="nav__link-num">{{ link.num }}</span>
          {{ link.label }}
        </RouterLink>
      </nav>

      <!-- CTA -->
      <a 
        ref="ctaRef"
        href="mailto:abdrzakrifawi@gmail.com" 
        class="nav__cta"
        @mousemove="cMove"
        @mouseleave="cLeave"
        :style="{ transform: `translate(${cx}px, ${cy}px)` }"
      >
        Hire Me
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </a>

      <!-- Hamburger -->
      <button class="nav__burger" :class="{ active: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div v-if="menuOpen" class="nav__mobile">
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="nav__mobile-link"
          @click="menuOpen = false"
        >
          <span class="nav__link-num">{{ link.num }}</span>
          {{ link.label }}
        </RouterLink>
        <a href="mailto:abdrzakrifawi@gmail.com" class="nav__mobile-cta" @click="menuOpen = false">
          Get In Touch
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useMagnetic } from '@/composables/useMagnetic.js'

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)

const logoRef = ref(null)
const ctaRef = ref(null)

const { x: lx, y: ly, onMouseMove: lMove, onMouseLeave: lLeave } = useMagnetic(logoRef)
const { x: cx, y: cy, onMouseMove: cMove, onMouseLeave: cLeave } = useMagnetic(ctaRef)

const navLinks = [
  { path: '/', label: 'Home', num: '01' },
  { path: '/about', label: 'About', num: '02' },
  { path: '/projects', label: 'Projects', num: '03' },
  { path: '/skills', label: 'Skills', num: '04' },
  { path: '/contact', label: 'Contact', num: '05' }
]

const onScroll = () => {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-h);
  transition: all var(--t-normal) var(--ease-out);
  border-bottom: 1px solid transparent;
  background: transparent;
}

.nav--scrolled {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom-color: var(--border);
  height: calc(var(--nav-h) - 12px);
}

.nav__inner {
  height: 100%;
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

/* Logo */
.nav__logo {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 2px;
  margin-right: auto;
  transition: transform 0.1s var(--ease-out);
}
.nav__logo-bracket {
  color: var(--accent);
  font-weight: 400;
}
.nav__logo-name { color: var(--text-primary); }

/* Nav links */
.nav__links {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.nav__link {
  font-family: var(--font-body);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
  padding-bottom: 2px;
  transition: color var(--t-fast);
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--t-normal) var(--ease);
}

.nav__link:hover,
.nav__link.active {
  color: var(--text-primary);
}

.nav__link:hover::after,
.nav__link.active::after {
  transform: scaleX(1);
}

.nav__link-num {
  color: var(--accent);
  font-size: 10px;
}

/* CTA */
.nav__cta {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  border: 1px solid var(--accent);
  color: var(--accent);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: 
    background var(--t-fast) var(--ease-out), 
    color var(--t-fast) var(--ease-out),
    transform 0.1s var(--ease-out);
  white-space: nowrap;
}

.nav__cta:hover {
  background: var(--accent);
  color: var(--paper);
}

/* Burger */
.nav__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.nav__burger span {
  display: block;
  width: 24px;
  height: 1.5px;
  background: var(--text-primary);
  transition: all var(--t-normal) var(--ease);
  transform-origin: center;
}

.nav__burger.active span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.nav__burger.active span:nth-child(2) {
  opacity: 0;
}
.nav__burger.active span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* Mobile menu */
.nav__mobile {
  position: fixed;
  top: var(--nav-h);
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--ink);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  padding: var(--space-md);
}

.nav__mobile-link {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 12px;
  transition: color var(--t-fast);
}

.nav__mobile-link:hover { color: var(--accent); }

.nav__mobile-cta {
  margin-top: var(--space-sm);
  padding: 14px 36px;
  background: var(--accent);
  color: var(--paper);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s var(--ease), transform 0.3s var(--ease);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

@media (max-width: 768px) {
  .nav__links,
  .nav__cta { display: none; }
  .nav__burger { display: flex; }
}
</style>
