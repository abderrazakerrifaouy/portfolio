<template>
  <div class="contact">
    <div class="container">
      <div class="contact__header">
        <p class="contact__breadcrumb">05 — Contact</p>
        <h1 class="contact__title reveal">
          Let's <span class="italic-serif">talk</span>.
        </h1>
      </div>

      <div class="contact__grid">
        <!-- Left: Info -->
        <div class="contact__left reveal">
          <p class="contact__intro">
            I'm currently open to new opportunities — full-time roles, freelance projects,
            or exciting collaborations. If you have something interesting in mind, let's chat.
          </p>

          <div class="contact__channels">
            <a href="mailto:abdrzakrifawi@gmail.com" class="channel">
              <div class="channel__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <polyline points="2,4 12,13 22,4"/>
                </svg>
              </div>
              <div class="channel__info">
                <span class="channel__label">Email</span>
                <span class="channel__value">abdrzakrifawi@gmail.com</span>
              </div>
              <svg class="channel__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 15L15 1M15 1H8M15 1V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </a>

            <a href="https://github.com/abderrazakerrifaouy" target="_blank" rel="noopener" class="channel">
              <div class="channel__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div class="channel__info">
                <span class="channel__label">GitHub</span>
                <span class="channel__value">@abderrazakerrifaouy</span>
              </div>
              <svg class="channel__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 15L15 1M15 1H8M15 1V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </a>

            <a href="tel:0656561323" class="channel">
              <div class="channel__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.94 19.79 19.79 0 0118 2.18 2 2 0 0122 4.18v3a2 2 0 01-2 2 15.79 15.79 0 00-6.87 1.5 15.73 15.73 0 00-3.87 3.87A15.79 15.79 0 007.76 20a2 2 0 012 2z"/>
                </svg>
              </div>
              <div class="channel__info">
                <span class="channel__label">Phone</span>
                <span class="channel__value">+212 656 561 323</span>
              </div>
              <svg class="channel__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 15L15 1M15 1H8M15 1V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </a>
          </div>

          <div class="contact__availability reveal" style="transition-delay:0.2s">
            <span class="avail-dot"></span>
            <div>
              <strong>Available for opportunities</strong>
              <p>Based in Morocco · Remote friendly</p>
            </div>
          </div>
        </div>

        <!-- Right: Contact form -->
        <div class="contact__right reveal" style="transition-delay: 0.15s">
          <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
            <div class="form-group">
              <label for="name" class="form-label">Your Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                class="form-input"
                :class="{ error: errors.name }"
                placeholder="John Doe"
              >
              <span v-if="errors.name" class="form-error">{{ errors.name }}</span>
            </div>

            <div class="form-group">
              <label for="email" class="form-label">Email Address</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="form-input"
                :class="{ error: errors.email }"
                placeholder="john@example.com"
              >
              <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">Subject</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                class="form-input"
                placeholder="Project collaboration"
              >
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                class="form-input form-textarea"
                :class="{ error: errors.message }"
                placeholder="Tell me about your project..."
                rows="6"
              ></textarea>
              <span v-if="errors.message" class="form-error">{{ errors.message }}</span>
            </div>

            <button type="submit" class="form-submit" :class="{ loading: submitting, success: submitted }">
              <span v-if="!submitting && !submitted">
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </span>
              <span v-else-if="submitting">Sending...</span>
              <span v-else>Message Sent ✓</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useReveal } from '@/composables/useReveal.js'

useReveal()

const form = reactive({ name: '', email: '', subject: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const submitting = ref(false)
const submitted = ref(false)

const validate = () => {
  errors.name = form.name.trim() ? '' : 'Name is required'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Valid email required'
  errors.message = form.message.trim().length >= 10 ? '' : 'Message must be at least 10 characters'
  return !errors.name && !errors.email && !errors.message
}

const handleSubmit = async () => {
  if (!validate()) return
  submitting.value = true
  await new Promise(r => setTimeout(r, 1500)) // Simulate API call
  submitting.value = false
  submitted.value = true
  // Open mailto as fallback
  const mailto = `mailto:abdrzakrifawi@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\n\n${form.message}`)}`
  window.open(mailto)
}
</script>

<style scoped>
.contact {
  padding: var(--space-xl) 0;
}

.contact__breadcrumb {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: var(--space-sm);
}

.contact__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin-bottom: var(--space-xl);
}

.italic-serif {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  color: var(--accent);
}

.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--space-xl);
  align-items: start;
}

/* Left */
.contact__intro {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.9;
  margin-bottom: var(--space-lg);
  max-width: 40ch;
}

.contact__channels {
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-bottom: var(--space-lg);
  background: var(--border);
}

.channel {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 20px;
  background: var(--surface-2);
  transition: background var(--t-fast);
  position: relative;
}

.channel:hover {
  background: var(--surface-3);
}

.channel:hover .channel__arrow {
  transform: translate(4px, -4px);
  color: var(--accent);
}

.channel__icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  flex-shrink: 0;
}

.channel__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.channel__label {
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.channel__value {
  font-size: 14px;
  color: var(--text-primary);
}

.channel__arrow {
  color: var(--text-muted);
  transition: transform var(--t-fast), color var(--t-fast);
  flex-shrink: 0;
}

/* Availability */
.contact__availability {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 20px;
  border: 1px solid rgba(76, 175, 80, 0.2);
  background: rgba(76, 175, 80, 0.05);
}

.avail-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #4caf50;
  flex-shrink: 0;
  animation: pulse 2s infinite;
}

.contact__availability strong {
  font-family: var(--font-display);
  font-weight: 700;
  color: #4caf50;
  display: block;
  font-size: 0.95rem;
}

.contact__availability p {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 2px;
}

/* Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding: var(--space-lg);
  border: 1px solid var(--border);
  background: var(--surface-2);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.form-input {
  background: var(--ink);
  border: 1px solid var(--border);
  padding: 14px 16px;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 14px;
  transition: border-color var(--t-fast);
  outline: none;
  width: 100%;
}

.form-input::placeholder { color: var(--text-muted); }

.form-input:focus {
  border-color: var(--accent);
}

.form-input.error {
  border-color: #ef5350;
}

.form-textarea {
  resize: vertical;
  min-height: 140px;
  line-height: 1.6;
}

.form-error {
  font-size: 11px;
  color: #ef5350;
}

.form-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 32px;
  background: var(--accent);
  color: var(--paper);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all var(--t-fast);
  margin-top: 8px;
}

.form-submit:hover:not(.loading):not(.success) {
  background: var(--accent-soft);
  transform: translateY(-2px);
}

.form-submit.loading {
  opacity: 0.7;
  cursor: wait;
}

.form-submit.success {
  background: #4caf50;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* ═══════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════ */

/* Mobile (< 768px) */
@media (max-width: 767px) {
  .contact {
    padding: var(--space-md) 0;
  }

  .contact__breadcrumb {
    font-size: 10px;
  }

  .contact__title {
    font-size: clamp(2rem, 6vw, 3rem);
    margin-bottom: var(--space-md);
  }

  .contact__grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }

  .contact__intro {
    font-size: 13px;
    line-height: 1.8;
    margin-bottom: var(--space-md);
  }

  .contact__channels {
    margin-bottom: var(--space-md);
    gap: 0;
  }

  .channel {
    gap: var(--space-xs);
    padding: 14px;
  }

  .channel__icon {
    width: 36px;
    height: 36px;
  }

  .channel__icon svg {
    width: 16px;
    height: 16px;
  }

  .channel__label {
    font-size: 9px;
  }

  .channel__value {
    font-size: 12px;
  }

  .channel__arrow {
    width: 14px;
    height: 14px;
  }

  .contact__availability {
    padding: 14px;
    gap: var(--space-xs);
  }

  .contact__availability strong {
    font-size: 0.85rem;
  }

  .contact__availability p {
    font-size: 11px;
  }

  .contact-form {
    gap: var(--space-xs);
    padding: var(--space-md);
  }

  .form-label {
    font-size: 10px;
  }

  .form-input {
    padding: 12px 14px;
    font-size: 13px;
  }

  .form-textarea {
    min-height: 100px;
  }

  .form-submit {
    padding: 12px 24px;
    font-size: 12px;
  }
}

/* Tablet (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .contact {
    padding: var(--space-lg) 0;
  }

  .contact__title {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    margin-bottom: var(--space-lg);
  }

  .contact__grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .contact__intro {
    font-size: 14px;
    margin-bottom: var(--space-lg);
  }

  .contact__channels {
    margin-bottom: var(--space-lg);
  }

  .channel {
    padding: 16px;
  }

  .contact-form {
    padding: var(--space-lg);
  }

  .form-input {
    padding: 12px 14px;
  }

  .form-submit {
    padding: 14px 28px;
  }
}

/* Desktop (>= 1024px) */
@media (min-width: 1024px) {
  .contact__grid {
    grid-template-columns: 1fr 1.2fr;
  }
}
</style>
