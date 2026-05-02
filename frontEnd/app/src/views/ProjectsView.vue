<template>
  <div class="projects">
    <div class="container">
      <div class="projects__header">
        <p class="projects__breadcrumb">03 — Projects</p>
        <h1 class="projects__title reveal">
          What I've <span class="italic-serif">built</span>.
        </h1>
        <p class="projects__subtitle reveal">
          {{ store.github.totalRepos }} repositories on GitHub — here are the highlighted ones.
        </p>
      </div>

      <!-- Filter tabs -->
      <div class="projects__filters reveal">
        <label class="projects__filter-select-wrap" for="projectTypeSelect">
          <span class="projects__filter-label">Project type</span>
          <select id="projectTypeSelect" v-model="activeFilter" class="projects__filter-select">
            <option v-for="filter in filters" :key="`select-${filter}`" :value="filter">
              {{ filter }}
            </option>
          </select>
        </label>

        <button
          v-for="filter in filters"
          :key="filter"
          class="filter-btn"
          :class="{ active: activeFilter === filter }"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Projects grid -->
      <div class="projects__grid">
        <ProjectCard
          v-for="(project, i) in filteredProjects"
          :key="project.id"
          :project="project"
          class="reveal"
          :style="{ transitionDelay: i * 0.08 + 's' }"
        />
      </div>

      <!-- GitHub CTA -->
      <div class="projects__github reveal">
        <div class="github-card">
          <div class="github-card__icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <div class="github-card__info">
            <h3>See all {{ store.github.totalRepos }} repositories</h3>
            <p>Follow my work on GitHub — from mobile apps to web projects.</p>
          </div>
          <div class="github-card__stats">
            <div class="github-stat">
              <strong>{{ store.github.totalRepos }}</strong>
              <span>Repos</span>
            </div>
            <div class="github-stat">
              <strong>{{ store.github.followers }}</strong>
              <span>Followers</span>
            </div>
            <div class="github-stat">
              <div class="achievements-mini">
                <span v-for="a in store.github.achievements" :key="a" class="achievement-mini">🏅</span>
              </div>
              <span>Achievements</span>
            </div>
          </div>
          <a :href="store.github.url" target="_blank" rel="noopener" class="github-card__btn">
            View GitHub Profile
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 13L13 1M13 1H6M13 1V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProfileStore } from '@/stores/profile.js'
import { useReveal } from '@/composables/useReveal.js'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const store = useProfileStore()
useReveal()

const filters = ['All', 'C', 'Web', 'Docs']
const activeFilter = ref('All')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return store.projects
  if (activeFilter.value === 'C') return store.projects.filter(p => p.language === 'C')
  if (activeFilter.value === 'Web') return store.projects.filter(p => ['HTML/CSS', 'JavaScript'].includes(p.language))
  if (activeFilter.value === 'Docs') return store.projects.filter(p => p.language === 'Markdown')
  return store.projects
})
</script>

<style scoped>
.projects {
  padding: var(--space-xl) 0;
}

.projects__breadcrumb {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: var(--space-sm);
}

.projects__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin-bottom: var(--space-sm);
}

.italic-serif {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  color: var(--accent);
}

.projects__subtitle {
  color: var(--text-secondary);
  font-size: 15px;
  margin-bottom: var(--space-xl);
}

/* Filters */
.projects__filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: end;
  margin-bottom: var(--space-lg);
}

.projects__filter-select-wrap {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-right: 8px;
}

.projects__filter-label {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.projects__filter-select {
  min-width: 180px;
  padding: 8px 12px;
  border: 1px solid var(--border);
  background: var(--surface-2);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.projects__filter-select:focus {
  outline: none;
  border-color: var(--accent);
}

.filter-btn {
  padding: 8px 20px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-secondary);
  font-family: var(--font-body);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all var(--t-fast);
}

.filter-btn:hover,
.filter-btn.active {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-muted);
}

/* Grid */
.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
}

/* GitHub CTA */
.github-card {
  border: 1px solid var(--border);
  background: var(--surface-2);
  padding: var(--space-lg);
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.github-card__icon {
  color: var(--text-secondary);
  flex-shrink: 0;
}

.github-card__info {
  flex: 1;
  min-width: 200px;
}

.github-card__info h3 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.github-card__info p {
  font-size: 13px;
  color: var(--text-secondary);
}

.github-card__stats {
  display: flex;
  gap: var(--space-md);
}

.github-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.github-stat strong {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-primary);
}

.github-stat span {
  font-size: 10px;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.achievements-mini {
  display: flex;
}

.github-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  border: 1px solid var(--accent);
  color: var(--accent);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all var(--t-fast);
  white-space: nowrap;
}

.github-card__btn:hover {
  background: var(--accent);
  color: var(--paper);
}

@media (max-width: 1024px) {
  .projects__grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 640px) {
  .projects__grid { grid-template-columns: 1fr; }
  .github-card { flex-direction: column; align-items: flex-start; }
  .projects__filter-select-wrap {
    width: 100%;
    margin-right: 0;
  }
  .projects__filter-select {
    width: 100%;
  }
}
</style>
