<template>
  <div class="skills">
    <div class="container">
      <div class="skills__header">
        <p class="skills__breadcrumb">04 — Skills</p>
        <h1 class="skills__title reveal">
          My <span class="italic-serif">Arsenal</span>.
        </h1>
        <p class="skills__subtitle reveal">
          Built across YouCode's curriculum and 2+ years of hands-on mobile development.
        </p>
      </div>

      <div class="skills__selectors reveal">
        <label class="skills__select-wrap" for="phaseSelect">
          <span class="skills__select-label">Select phase</span>
          <select id="phaseSelect" v-model="activePhase" class="skills__select">
            <option v-for="phase in phases" :key="`phase-${phase.id}`" :value="phase.id">
              {{ phase.titre }}
            </option>
          </select>
        </label>

        <label class="skills__select-wrap" for="competenceCategorySelect">
          <span class="skills__select-label">Select competence</span>
          <select id="competenceCategorySelect" v-model="activeCategory" class="skills__select">
            <option value="Toutes">Toutes</option>
            <option v-for="category in categoryOptions" :key="`cat-${category}`" :value="category">
              {{ category }}
            </option>
          </select>
        </label>
      </div>

      <!-- Phase progress overview -->
      <div class="skills__phases reveal">
        <div
          v-for="phase in phases"
          :key="phase.id"
          class="phase-pill"
          :class="{ active: activePhase === phase.id }"
          @click="activePhase = phase.id"
        >
          <span class="phase-pill__period">{{ phase.periode }}</span>
          <span class="phase-pill__title">{{ phase.titre }}</span>
          <span class="phase-pill__count">{{ phase.competences.length }}</span>
        </div>
      </div>

      <!-- Active phase detail -->
      <Transition name="fade-slide" mode="out-in">
        <div v-if="currentPhase" :key="activePhase" class="skills__phase-detail">
          <div class="phase-header reveal">
            <div>
              <h2 class="phase-title">{{ currentPhase.titre }}</h2>
              <p class="phase-period">{{ currentPhase.periode }}</p>
            </div>
            <span class="phase-count-badge">{{ currentPhase.competences.length }} skills</span>
          </div>

          <div class="skills__grid">
            <div
              v-for="(skill, i) in displayedSkills"
              :key="skill.nom"
              class="skill-card reveal"
              :style="{ transitionDelay: i * 0.05 + 's' }"
            >
              <div class="skill-card__header">
                <h3 class="skill-card__name">{{ skill.nom }}</h3>
                <span class="skill-card__cat">{{ skill.categorie }}</span>
              </div>
              <p class="skill-card__desc">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Overall tech stack summary -->
      <div class="skills__summary">
        <h2 class="skills__summary-title reveal">Complete Stack</h2>
        <div class="skills__summary-grid">
          <div
            v-for="(techs, category) in store.techStack"
            :key="category"
            class="stack-group reveal"
          >
            <h4 class="stack-group__title">{{ catLabels[category] }}</h4>
            <div class="stack-group__tags">
              <SkillBadge
                v-for="tech in techs"
                :key="tech"
                :label="tech"
                variant="default"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useProfileStore } from '@/stores/profile.js'
import { useReveal } from '@/composables/useReveal.js'
import SkillBadge from '@/components/ui/SkillBadge.vue'

// Import competences data directly
import competencesData from '@/assets/data/competences.js'

const store = useProfileStore()
useReveal()

const phases = competencesData.phases
const activePhase = ref(phases[0].id)
const activeCategory = ref('Toutes')

const currentPhase = computed(() => phases.find(p => p.id === activePhase.value))

const categoryOptions = computed(() => {
  if (!currentPhase.value) return []
  return [...new Set(currentPhase.value.competences.map(skill => skill.categorie))]
})

const displayedSkills = computed(() => {
  if (!currentPhase.value) return []
  if (activeCategory.value === 'Toutes') return currentPhase.value.competences
  return currentPhase.value.competences.filter(skill => skill.categorie === activeCategory.value)
})

watch(activePhase, () => {
  activeCategory.value = 'Toutes'
})

const catLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile',
  database: 'Database',
  devops: 'DevOps',
  concepts: 'Concepts & Patterns'
}
</script>

<style scoped>
.skills {
  padding: var(--space-xl) 0;
}

.skills__breadcrumb {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: var(--space-sm);
}

.skills__title {
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

.skills__subtitle {
  color: var(--text-secondary);
  font-size: 15px;
  margin-bottom: var(--space-xl);
}

.skills__selectors {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: var(--space-md);
}

.skills__select-wrap {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skills__select-label {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.skills__select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border);
  background: var(--surface-2);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 12px;
  letter-spacing: 0.04em;
}

.skills__select:focus {
  outline: none;
  border-color: var(--accent);
}

/* Phases pills */
.skills__phases {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--border);
}

.phase-pill {
  display: flex;
  flex-direction: column;
  padding: 12px 18px;
  border: 1px solid var(--border);
  background: var(--surface-2);
  cursor: pointer;
  transition: all var(--t-normal) var(--ease);
  min-width: 140px;
  gap: 4px;
}

.phase-pill:hover,
.phase-pill.active {
  border-color: var(--accent);
  background: var(--surface-3);
}

.phase-pill.active .phase-pill__title {
  color: var(--accent);
}

.phase-pill__period {
  font-size: 10px;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.phase-pill__title {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
}

.phase-pill__count {
  font-size: 10px;
  color: var(--accent);
  background: var(--accent-muted);
  padding: 2px 8px;
  width: fit-content;
  margin-top: 4px;
}

/* Phase detail */
.skills__phase-detail {
  margin-bottom: var(--space-xl);
}

.phase-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-lg);
}

.phase-title {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
}

.phase-period {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 4px;
  letter-spacing: 0.06em;
}

.phase-count-badge {
  padding: 8px 16px;
  background: var(--accent-muted);
  color: var(--accent);
  font-size: 12px;
  letter-spacing: 0.06em;
  border: 1px solid rgba(232, 93, 47, 0.2);
}

/* Skills grid */
.skills__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.skill-card {
  padding: var(--space-sm);
  border: 1px solid var(--border);
  background: var(--surface-2);
  transition: border-color var(--t-fast), background var(--t-fast), transform var(--t-normal) var(--ease);
}

.skill-card:hover {
  border-color: var(--accent);
  background: var(--surface-3);
  transform: translateY(-2px);
}

.skill-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 10px;
}

.skill-card__name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-primary);
  line-height: 1.2;
}

.skill-card__cat {
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-muted);
  padding: 3px 8px;
  white-space: nowrap;
  flex-shrink: 0;
  align-self: flex-start;
}

.skill-card__desc {
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Summary section */
.skills__summary {
  padding-top: var(--space-xl);
  border-top: 1px solid var(--border);
}

.skills__summary-title {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
}

.skills__summary-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.stack-group__title {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: var(--space-sm);
}

.stack-group__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s var(--ease), transform 0.3s var(--ease);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 1024px) {
  .skills__grid { grid-template-columns: 1fr 1fr; }
  .skills__summary-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 640px) {
  .skills__grid { grid-template-columns: 1fr; }
  .skills__summary-grid { grid-template-columns: 1fr; }
  .phase-header { flex-direction: column; gap: 12px; }
  .skills__selectors { grid-template-columns: 1fr; }
}
</style>
