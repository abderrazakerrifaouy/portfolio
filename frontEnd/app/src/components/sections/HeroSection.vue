<template>
  <section class="hero">
    <!-- Background grid -->
    <div class="hero__grid" aria-hidden="true">
      <div v-for="i in 12" :key="i" class="hero__grid-line"></div>
    </div>

    <div class="container hero__inner">
      <!-- Left column -->
      <div class="hero__content">
        <div class="hero__badge reveal">
          <span class="hero__badge-dot"></span>
          Available for Projects
        </div>

        <h1 class="hero__name reveal reveal-delay-1">
          <span class="hero__name-first">Abderrazake</span>
          <br>
          <span class="hero__name-last">
            Errifaouy
            <span class="hero__name-accent">.</span>
          </span>
        </h1>

        <div class="hero__role reveal reveal-delay-2">
          <span class="hero__role-prefix">I build</span>
          <span class="hero__role-typed">{{ typed }}<span class="cursor-blink">|</span></span>
        </div>

        <p class="hero__bio reveal reveal-delay-3">
          Full Stack Web Developer in training at YouCode Morocco,
          with <strong>2+ years</strong> of mobile development experience.
          Crafting clean, scalable solutions from frontend to backend.
        </p>

        <div class="hero__actions reveal reveal-delay-4">
          <RouterLink to="/projects" class="btn-primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </RouterLink>
          <RouterLink to="/contact" class="btn-outline">Get In Touch</RouterLink>
        </div>

        <div class="hero__stats reveal" style="animation-delay: 0.5s">
          <div class="hero__stat">
            <span class="hero__stat-num">51</span>
            <span class="hero__stat-label">GitHub Repos</span>
          </div>
          <div class="hero__stat-sep"></div>
          <div class="hero__stat">
            <span class="hero__stat-num">2+</span>
            <span class="hero__stat-label">Years Mobile Dev</span>
          </div>
          <div class="hero__stat-sep"></div>
          <div class="hero__stat">
            <span class="hero__stat-num">15+</span>
            <span class="hero__stat-label">Tech Skills</span>
          </div>
        </div>
      </div>

      <!-- Right column – Visual card -->
      <div class="hero__visual reveal" style="animation-delay: 0.2s">
        <div class="hero__card">
          <div class="hero__card-header">
            <div class="hero__card-dots">
              <span style="background:#ff5f56"></span>
              <span style="background:#ffbd2e"></span>
              <span style="background:#27c93f"></span>
            </div>
            <span class="hero__card-file">profile.json</span>
          </div>
          <div class="hero__card-body">
            <pre class="hero__code"><span class="c-brace">{</span>
  <span class="c-key">"name"</span>: <span class="c-str">"Abderrazake Errifaouy"</span>,
  <span class="c-key">"role"</span>: <span class="c-str">"Full Stack Developer"</span>,
  <span class="c-key">"location"</span>: <span class="c-str">"Morocco 🇲🇦"</span>,
  <span class="c-key">"stack"</span>: [
    <span class="c-str">"Vue.js"</span>, <span class="c-str">"Laravel"</span>,
    <span class="c-str">"Kotlin"</span>, <span class="c-str">"Flutter"</span>
  ],
  <span class="c-key">"status"</span>: <span class="c-accent">"open_to_work"</span>,
  <span class="c-key">"passion"</span>: <span class="c-str">"Clean Code ✨"</span>
<span class="c-brace">}</span></pre>
          </div>
        </div>

        <!-- Tech pills floating -->
        <div class="hero__float hero__float--1">Vue.js</div>
        <div class="hero__float hero__float--2">Laravel</div>
        <div class="hero__float hero__float--3">Kotlin</div>
        <div class="hero__float hero__float--4">Docker</div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="hero__scroll">
      <span>Scroll</span>
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useTypewriter } from '@/composables/useTypewriter.js'

const { display: typed } = useTypewriter([
  'Web Apps.',
  'Mobile Apps.',
  'REST APIs.',
  'Clean Code.',
  'the future.'
], 80, 2200)
</script>

<style scoped>
.hero {
  min-height: calc(100vh - var(--nav-h));
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

/* Background grid */
.hero__grid {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  pointer-events: none;
}

.hero__grid-line {
  border-right: 1px solid rgba(255,255,255,0.03);
}

.hero__inner {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
}

/* Badge */
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid rgba(76, 175, 80, 0.3);
  background: rgba(76, 175, 80, 0.08);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #4caf50;
  margin-bottom: var(--space-md);
}

.hero__badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4caf50;
  animation: pulse 2s infinite;
}

/* Name */
.hero__name {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6vw, 5.5rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.hero__name-last {
  color: var(--text-primary);
  position: relative;
}

.hero__name-accent {
  color: var(--accent);
}

/* Role */
.hero__role {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: var(--space-md);
  font-family: var(--font-serif);
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-style: italic;
}

.hero__role-prefix {
  color: var(--text-secondary);
}

.hero__role-typed {
  color: var(--accent);
  font-style: italic;
  min-width: 200px;
}

.cursor-blink {
  animation: blink 1s step-end infinite;
  font-style: normal;
}

/* Bio */
.hero__bio {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.8;
  max-width: 44ch;
  margin-bottom: var(--space-md);
}

.hero__bio strong {
  color: var(--text-primary);
}

/* Actions */
.hero__actions {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
  margin-bottom: var(--space-lg);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: var(--accent);
  color: var(--paper);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: all var(--t-fast);
}

.btn-primary:hover {
  background: var(--accent-soft);
  transform: translateY(-2px);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  border: 1px solid var(--border-strong);
  color: var(--text-secondary);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: all var(--t-fast);
}

.btn-outline:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* Stats */
.hero__stats {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.hero__stat {
  display: flex;
  flex-direction: column;
}

.hero__stat-num {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
}

.hero__stat-label {
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  margin-top: 4px;
}

.hero__stat-sep {
  width: 1px;
  height: 40px;
  background: var(--border);
}

/* Visual / Card */
.hero__visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__card {
  width: 100%;
  max-width: 420px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  box-shadow: 0 40px 80px rgba(0,0,0,0.5);
}

.hero__card-header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
  background: var(--surface-3);
}

.hero__card-dots {
  display: flex;
  gap: 6px;
}

.hero__card-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
}

.hero__card-file {
  font-size: 11px;
  color: var(--text-muted);
  flex: 1;
  text-align: center;
}

.hero__card-body {
  padding: var(--space-md);
}

.hero__code {
  font-family: var(--font-body);
  font-size: 13px;
  line-height: 1.8;
  white-space: pre;
}

.c-brace { color: var(--text-muted); }
.c-key { color: #80cbc4; }
.c-str { color: #a5d6a7; }
.c-accent { color: var(--accent); }

/* Floating pills */
.hero__float {
  position: absolute;
  padding: 10px 20px;
  background: var(--surface-3);
  border: 1px solid var(--border);
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 0.06em;
  white-space: nowrap;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  pointer-events: none;
}

.hero__float--1 { top: 12%; right: -2%; animation: float 6s ease-in-out infinite; }
.hero__float--2 { top: 35%; left: -8%; animation: float 7s ease-in-out infinite 1s; }
.hero__float--3 { bottom: 18%; right: -5%; animation: float 8s ease-in-out infinite 2s; }
.hero__float--4 { bottom: 38%; left: -3%; animation: float 9s ease-in-out infinite 3s; }


/* Scroll indicator */
.hero__scroll {
  position: absolute;
  bottom: var(--space-md);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; transform: scaleY(1); }
  50% { opacity: 1; transform: scaleY(1.2); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

@media (max-width: 1024px) {
  .hero__inner {
    grid-template-columns: 1fr;
    padding-top: var(--space-lg);
    gap: var(--space-lg);
  }
  .hero__float { display: none; }
}

@media (max-width: 480px) {
  .hero__actions { flex-direction: column; }
  .hero__stats { flex-wrap: wrap; }
}
</style>
