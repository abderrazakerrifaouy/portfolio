<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__left">
        <span class="footer__logo">Abderrazake Errifaouy</span>
        <p class="footer__tagline">Full Stack Web & Mobile Developer — Morocco</p>
      </div>

      <div class="footer__center">
        <nav class="footer__nav">
          <RouterLink v-for="link in links" :key="link.path" :to="link.path" class="footer__link">
            {{ link.label }}
          </RouterLink>
        </nav>
      </div>

      <div class="footer__right">
        <div class="footer__socials">
          <a href="https://github.com/abderrazakerrifaouy" target="_blank" rel="noopener" class="footer__social" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="mailto:abdrzakrifawi@gmail.com" class="footer__social" aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <polyline points="2,4 12,13 22,4"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/abderrazak_errifaouy/" target="_blank" rel="noopener" class="footer__social" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container">
        <span class="footer__copy">© {{ new Date().getFullYear() }} Abderrazake Errifaouy. Built with Vue.js.</span>
        <span class="footer__status">
          <span class="footer__dot"></span>
          Open to opportunities
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' }
]
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding-top: var(--space-lg);
}

.footer__inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--space-md);
  padding-bottom: var(--space-lg);
  align-items: start;
}

.footer__logo {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  display: block;
  margin-bottom: 8px;
}

.footer__tagline {
  color: var(--text-muted);
  font-size: 12px;
}

.footer__center {
  display: flex;
  justify-content: center;
}

.footer__nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__link {
  color: var(--text-secondary);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: color var(--t-fast);
}
.footer__link:hover { color: var(--accent); }

.footer__right {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.footer__socials {
  display: flex;
  gap: var(--space-sm);
}

.footer__social {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  transition: all var(--t-fast);
}

.footer__social:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.footer__bottom {
  border-top: 1px solid var(--border);
  padding: var(--space-sm) 0;
}

.footer__bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__copy {
  color: var(--text-muted);
  font-size: 11px;
}

.footer__status {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 11px;
}

.footer__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4caf50;
  animation: pulse 2s infinite;
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
  .footer {
    padding-top: var(--space-md);
  }

  .footer__inner {
    grid-template-columns: 1fr;
    gap: var(--space-md);
    padding-bottom: var(--space-md);
    text-align: center;
  }

  .footer__logo {
    font-size: 1rem;
  }

  .footer__tagline {
    font-size: 11px;
  }

  .footer__center {
    justify-content: center;
  }

  .footer__nav {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }

  .footer__link {
    font-size: 11px;
  }

  .footer__right {
    justify-content: center;
  }

  .footer__socials {
    gap: var(--space-xs);
  }

  .footer__social {
    width: 36px;
    height: 36px;
  }

  .footer__social svg {
    width: 14px;
    height: 14px;
  }

  .footer__bottom {
    padding: var(--space-sm) 0;
  }

  .footer__bottom .container {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  .footer__copy,
  .footer__status {
    font-size: 10px;
  }
}

/* Tablet (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .footer {
    padding-top: var(--space-lg);
  }

  .footer__inner {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
    padding-bottom: var(--space-lg);
  }

  .footer__center {
    grid-column: 1 / -1;
    justify-content: center;
  }

  .footer__nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
  }

  .footer__link {
    font-size: 11px;
  }

  .footer__logo {
    font-size: 1rem;
  }

  .footer__bottom .container {
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
  }
}

/* Desktop (>= 1024px) */
@media (min-width: 1024px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--space-md);
  }
}
</style>
