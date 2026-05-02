<template>
  <div class="home">
    <HeroSection />

    <!-- About teaser -->
    <section class="home-about section">
      <div class="container">
        <SectionTitle num="01 —" title="About Me" subtitle="Developer. Builder. Problem solver." />
        <div class="home-about__grid">
          <div class="home-about__text reveal">
            <p>
              I'm <strong>Abderrazake Errifaouy</strong>, a passionate Full Stack Web Developer
              currently enrolled in the intensive YouCode program in Morocco.
              With over <strong>2 years of mobile development experience</strong>, I bring depth
              to both frontend and backend work.
            </p>
            <p>
              My philosophy: code should be <em>clean, maintainable, and purposeful.</em>
              I care about architecture as much as I care about the final user experience.
            </p>
            <RouterLink to="/about" class="home-about__link">
              Read my full story
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </RouterLink>
          </div>

          <div class="home-about__passions reveal" style="transition-delay:0.15s">
            <div v-for="passion in passions" :key="passion.label" class="passion-item">
              <div>
                <strong>{{ passion.label }}</strong>
                <p>{{ passion.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="home-projects section">
      <div class="container">
        <SectionTitle num="02 —" title="Projects" subtitle="A selection of my work." />
        <div class="home-projects__grid">
          <ProjectCard
            v-for="(project, i) in featuredProjects"
            :key="project.id"
            :project="project"
            class="reveal"
            :style="{ transitionDelay: i * 0.1 + 's' }"
          />
        </div>
        <div class="home-projects__more reveal">
          <RouterLink to="/projects" class="btn-text">
            View all {{ store.projects.length }} projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Tech stack strip -->
    <section class="home-stack section">
      <div class="container">
        <SectionTitle num="03 —" title="Tech Stack" subtitle="Tools I work with daily." />
        <div class="home-stack__categories">
          <div
            v-for="(skills, cat) in store.techStack"
            :key="cat"
            class="home-stack__category reveal"
          >
            <h4 class="home-stack__cat-title">{{ catLabels[cat] || cat }}</h4>
            <div class="home-stack__badges">
              <SkillBadge v-for="s in skills" :key="s" :label="s" />
            </div>
          </div>
        </div>
        <div class="home-stack__cta reveal">
          <RouterLink to="/skills" class="btn-text">
            Full skills breakdown
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="home-cta section">
      <div class="container">
        <div class="home-cta__box reveal">
          <span class="home-cta__label">Let's collaborate</span>
          <h2 class="home-cta__title">Have a project in mind?</h2>
          <p class="home-cta__text">
            I'm open to freelance work, collaborative projects, and full-time opportunities.
          </p>
          <RouterLink to="/contact" class="btn-primary-lg">
            Start a conversation
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 9h16M9 1l8 8-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useProfileStore } from '@/stores/profile.js'
import { useReveal } from '@/composables/useReveal.js'
import HeroSection from '@/components/sections/HeroSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import SkillBadge from '@/components/ui/SkillBadge.vue'

const store = useProfileStore()
const featuredProjects = computed(() => store.featuredProjects)

useReveal()

const passions = [
  {  label: 'Mobile Apps', desc: 'Kotlin, Flutter, Firebase — native & cross-platform.' },
  {  label: 'Backend Systems', desc: 'Laravel, REST APIs, queues, real-time.' },
  {  label: 'Clean Code', desc: 'SOLID principles, TDD, readable architecture.' }
]

const catLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile',
  database: 'Database',
  devops: 'DevOps',
  concepts: 'Concepts'
}
</script>

<style scoped>
.section {
  padding: var(--space-xl) 0;
}

 .home-about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: start;
}

.home-about__text {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.home-about__text p {
  color: var(--text-secondary);
  line-height: 1.9;
  font-size: 15px;
}

.home-about__text strong { color: var(--text-primary); }
.home-about__text em { color: var(--accent); font-style: italic; font-family: var(--font-serif); }

.home-about__link,
.btn-text {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-top: var(--space-sm);
  transition: gap var(--t-fast);
}

.home-about__link:hover,
.btn-text:hover { gap: 12px; }

.passion-item {
  display: flex;
  gap: var(--space-sm);
  padding: var(--space-sm);
  border: 1px solid var(--border);
  background: var(--surface-2);
  margin-bottom: 12px;
  transition: border-color var(--t-fast);
}

.passion-item:hover { border-color: var(--accent); }

.passion-item__icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.passion-item strong {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  display: block;
  color: var(--text-primary);
}

.passion-item p {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 4px;
}

/* Projects */
.home-projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.home-projects__more {
  text-align: right;
}

/* Stack */
.home-stack__categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.home-stack__cat-title {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: var(--space-sm);
}

.home-stack__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.home-stack__cta {
  text-align: right;
  margin-top: var(--space-md);
}

/* CTA */
.home-cta__box {
  border: 1px solid var(--border);
  background: var(--surface-2);
  padding: var(--space-xl);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.home-cta__box::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 100%, rgba(232,93,47,0.08), transparent 70%);
  pointer-events: none;
}

.home-cta__label {
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
}

.home-cta__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin: var(--space-sm) 0;
}

.home-cta__text {
  color: var(--text-secondary);
  max-width: 40ch;
  margin: 0 auto var(--space-md);
  font-size: 15px;
}

.btn-primary-lg {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 18px 40px;
  background: var(--accent);
  color: var(--paper);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: all var(--t-fast);
}

.btn-primary-lg:hover {
  background: var(--accent-soft);
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(232, 93, 47, 0.3);
}

@media (max-width: 1024px) {
  .home-about__grid { grid-template-columns: 1fr; }
  .home-projects__grid { grid-template-columns: 1fr 1fr; }
  .home-stack__categories { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 768px) {
  .home-projects__grid { grid-template-columns: 1fr; }
  .home-stack__categories { grid-template-columns: 1fr; }
}
</style>
