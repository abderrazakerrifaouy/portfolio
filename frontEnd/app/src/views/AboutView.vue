<template>
  <div class="about">
    <div class="container">
      <!-- Header -->
      <div class="about__header">
        <p class="about__breadcrumb">02 — About</p>
        <h1 class="about__title reveal">
          Behind the <span class="italic-serif">code</span>.
        </h1>
      </div>

      <!-- Main grid -->
      <div class="about__grid">
        <!-- Left: Avatar area -->
        <div class="about__left reveal">
          <div class="about__avatar">
            <div class="about__avatar-inner">
              <img src="../assets/images/me.png" alt="Abderrazake Errifaouy" class="about__avatar-img">
              
            </div>
            <div class="about__avatar-badge">
              Morocco
            </div>
          </div>

          <div class="about__quick-info">
            <div class="info-row">
              <span class="info-label">Name</span>
              <span class="info-val">Abderrazake Errifaouy</span>
            </div>
            <div class="info-row">
              <span class="info-label">Location</span>
              <span class="info-val">Morocco </span>
            </div>
            <div class="info-row">
              <span class="info-label">Training</span>
              <span class="info-val">YouCode 2025–2026</span>
            </div>
            <div class="info-row">
              <span class="info-label">Mobile Exp.</span>
              <span class="info-val">2+ Years</span>
            </div>
            <div class="info-row">
              <span class="info-label">Email</span>
              <a href="mailto:abdrzakrifawi@gmail.com" class="info-link">abdrzakrifawi@gmail.com</a>
            </div>
            <div class="info-row">
              <span class="info-label">GitHub</span>
              <a href="https://github.com/abderrazakerrifaouy" target="_blank" rel="noopener" class="info-link">@abderrazakerrifaouy</a>
            </div>
          </div>

          <div class="about__achievements">
            <h4 class="about__achievements-title">GitHub Achievements</h4>
            <div class="achievement-badges">
              <span v-for="badge in achievements" :key="badge" class="achievement-badge">
                {{ badge }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right: Story -->
        <div class="about__right">
          <div class="about__story reveal">
            <h2 class="about__story-title">My Story</h2>
            <p>
              I'm a self-driven developer from Morocco with a deep passion for building things that work well.
              My journey began with algorithmic problem solving in C, then expanded through mobile development
              with <strong>Kotlin and Flutter</strong>, and now I'm mastering the full web stack at <strong>YouCode</strong>.
            </p>
            <p>
              What sets me apart is the combination of mobile-first thinking and backend engineering depth.
              When I build APIs, I think about how mobile clients will consume them. When I design UIs,
              I think about state management and data flow.
            </p>
            <p>
              I believe in <em>clean code</em> — not just working code. I follow <strong>SOLID principles</strong>,
              write tests first when possible, and structure projects so they can grow without falling apart.
            </p>
          </div>

          <!-- Timeline -->
          <div class="about__timeline reveal" style="transition-delay: 0.15s">
            <h2 class="about__story-title">Journey</h2>
            <div class="timeline">
              <div v-for="(event, i) in timeline" :key="i" class="timeline__item">
                <div class="timeline__dot"></div>
                <div class="timeline__content">
                  <span class="timeline__date">{{ event.date }}</span>
                  <h4 class="timeline__title">{{ event.title }}</h4>
                  <p class="timeline__desc">{{ event.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Passions -->
          <div class="about__passions reveal" style="transition-delay: 0.3s">
            <h2 class="about__story-title">What Drives Me</h2>
            <div class="passion-grid">
              <div v-for="p in passions" :key="p.label" class="passion-card">
                <h4>{{ p.label }}</h4>
                <p>{{ p.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal.js'

useReveal()

const achievements = ['Pull Shark x2', 'YOLO', 'Quickdraw']

const timeline = [
  { date: '2023', title: 'Started Mobile Development', desc: 'Began building Android apps with Kotlin — fell in love with clean architecture.' },
  { date: '2024', title: 'Expanded to Flutter', desc: 'Added cross-platform mobile skills with Dart & Flutter, explored Firebase integration.' },
  { date: 'Oct 2025', title: 'Joined YouCode', desc: 'Enrolled in the intensive Full Stack Web Developer program at YouCode (Simplon Maroc).' },
  { date: '2025–2026', title: 'Full Stack Mastery', desc: 'Vue.js, Laravel, Docker, AWS, TDD — building production-grade web applications.' },
  { date: 'Now', title: 'Open to Opportunities', desc: 'Seeking collaborations, freelance projects, and impactful roles.' }
]

const passions = [
  {  label: 'Mobile Apps', desc: 'Native and cross-platform experiences that feel native.' },
  {  label: 'Backend Systems', desc: 'Scalable APIs, queues, real-time — the foundation matters.' },
  {  label: 'Clean Code', desc: 'Readable, testable, maintainable — always.' },
  {  label: 'DevOps', desc: 'CI/CD, Docker, deployment pipelines that just work.' }
]
</script>

<style scoped>
.about {
  padding: var(--space-xl) 0;
}

.about__header {
  margin-bottom: var(--space-xl);
}

.about__breadcrumb {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: var(--space-sm);
}

.about__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.04em;
}

.italic-serif {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  color: var(--accent);
}

.about__grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: var(--space-xl);
  align-items: start;
}

/* Left column */
.about__avatar {
  position: relative;
  margin-bottom: var(--space-md);
}

.about__avatar-inner {
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, var(--surface-3), var(--ink-mid));
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
}

.about__avatar-initials {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 800;
  color: var(--accent);
  letter-spacing: -0.04em;
}

.about__avatar-badge {
  position: absolute;
  bottom: -10px;
  left: 20px;
  background: var(--surface-3);
  border: 1px solid var(--border);
  padding: 6px 14px;
  font-size: 12px;
  color: var(--text-secondary);
}

/* Quick info */
.about__quick-info {
  border: 1px solid var(--border);
  overflow: hidden;
  margin-bottom: var(--space-md);
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  gap: var(--space-sm);
}

.info-row:last-child { border-bottom: none; }

.info-label {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  flex-shrink: 0;
}

.info-val {
  font-size: 12px;
  color: var(--text-primary);
  text-align: right;
}

.info-link {
  font-size: 12px;
  color: var(--accent);
  text-align: right;
  transition: opacity var(--t-fast);
}

.info-link:hover { opacity: 0.7; }

/* Achievements */
.about__achievements-title {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: var(--space-sm);
}

.achievement-badges {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.achievement-badge {
  padding: 8px 12px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  font-size: 12px;
  color: var(--gold);
}

/* Right column — Story */
.about__story-title,
h2.about__story-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-sm);
  color: var(--text-primary);
}

.about__story {
  margin-bottom: var(--space-xl);
}

.about__story p {
  color: var(--text-secondary);
  line-height: 1.9;
  font-size: 15px;
  margin-bottom: var(--space-sm);
}

.about__story strong { color: var(--text-primary); }
.about__story em { color: var(--accent); font-style: italic; font-family: var(--font-serif); }

/* Timeline */
.about__timeline {
  margin-bottom: var(--space-xl);
}

.timeline {
  position: relative;
  padding-left: 32px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 0;
  width: 1px;
  background: var(--border);
}

.timeline__item {
  position: relative;
  padding-bottom: var(--space-md);
  display: flex;
  gap: var(--space-sm);
}

.timeline__dot {
  position: absolute;
  left: -28px;
  top: 8px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--accent);
  background: var(--ink);
  flex-shrink: 0;
}

.timeline__date {
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--accent);
  text-transform: uppercase;
  display: block;
  margin-bottom: 4px;
}

.timeline__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.timeline__desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Passion grid */
.passion-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
}

.passion-card {
  padding: var(--space-sm);
  border: 1px solid var(--border);
  background: var(--surface-2);
  transition: border-color var(--t-fast);
}

.passion-card:hover { border-color: var(--accent); }

.passion-icon {
  font-size: 1.5rem;
  display: block;
  margin-bottom: 8px;
}

.passion-card h4 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.passion-card p {
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .about__grid { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .passion-grid { grid-template-columns: 1fr; }
}
</style>
