import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    identity: {
      fullName: 'Abderrazake Errifaouy',
      firstName: 'Abderrazake',
      lastName: 'Errifaouy',
      location: 'Morocco',
      status: 'Full Stack Web Developer — YouCode'
    },
    contact: {
      phone: '0656561323',
      email: 'abdrzakrifawi@gmail.com',
      github: 'https://github.com/abderrazakerrifaouy',
      facebook: 'https://web.facebook.com/abderrazak.errifaouy',
      instagram: 'https://www.instagram.com/abderrazak_errifaouy/'
    },
    professional: {
      title: 'Full Stack Web Developer',
      training: 'YouCode (Simplon Maroc) — Full Stack Web Developer 2025–2026',
      mobileExp: '2+ years in Mobile Development',
      currentFocus: 'Android with modern architectures',
      learning: ['Spring Boot microservices', 'Firebase advanced integration'],
      openTo: 'Collaboration on innovative mobile projects',
      passions: ['Mobile Apps', 'Backend Systems', 'Clean Code']
    },
    github: {
      url: 'https://github.com/abderrazakerrifaouy',
      username: 'abderrazakerrifaouy',
      totalRepos: 51,
      followers: 3,
      following: 6,
      achievements: ['Pull Shark x2', 'YOLO', 'Quickdraw']
    },
    projects: [
      {
        id: 1,
        name: 'challenges',
        url: 'https://github.com/abderrazakerrifaouy/challenges',
        language: 'C',
        description: 'Collection of 6 programming challenges in C — string manipulation, algorithms, data structures.',
        files: ['challenge1.c', 'challenge2.c', 'challenge3.c', 'challenge4.c', 'challenge5.c', 'challenge6.c'],
        commits: 7,
        category: 'Algorithms / C',
        featured: true
      },
      {
        id: 2,
        name: 'brojecet-sas',
        url: 'https://github.com/abderrazakerrifaouy/brojecet-sas',
        language: 'C',
        description: 'Modular C project with function management and file I/O — demonstrates structured data handling.',
        files: ['main.c', 'VOIDE.c', 'main.txt'],
        commits: 9,
        category: 'Project / C',
        featured: true
      },
      {
        id: 3,
        name: 'abderrazakerrifaouy',
        url: 'https://github.com/abderrazakerrifaouy/abderrazakerrifaouy',
        language: 'Markdown',
        description: 'GitHub profile README — full developer showcase with tech stack, stats, and contact links.',
        files: ['README.md'],
        commits: 9,
        category: 'Profile / Docs',
        featured: true
      },
      {
        id: 4,
        name: 'my-web-site',
        url: 'https://github.com/abderrazakerrifaouy/my-web-site',
        language: 'HTML/CSS',
        description: 'Personal portfolio website built with HTML, CSS and JavaScript — responsive and mobile-first.',
        files: ['README.md'],
        commits: 1,
        category: 'Portfolio / Web',
        featured: false
      },
      {
        id: 5,
        name: 'abderrazak',
        url: 'https://github.com/abderrazakerrifaouy/abderrazak',
        language: 'C',
        description: 'Algorithmic exercises in C — foundational data structures and programming logic.',
        files: ['main.c', '12.cbp'],
        commits: 2,
        category: 'Learning / C',
        featured: false
      }
    ],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'TypeScript', 'SASS/SCSS', 'Bootstrap', 'Figma'],
      backend: ['PHP', 'Laravel', 'Python', 'Django', 'Java', 'Spring'],
      mobile: ['Kotlin', 'Android Studio', 'Flutter', 'Dart', 'Firebase'],
      database: ['MySQL', 'PostgreSQL', 'Eloquent ORM'],
      devops: ['Git', 'Docker', 'GitHub Actions', 'AWS', 'CI/CD'],
      concepts: ['REST API', 'JWT', 'TDD', 'SOLID', 'MVC', 'WebSocket', 'PWA']
    }
  }),

  getters: {
    featuredProjects: (state) => state.projects.filter(p => p.featured),
    allTechTags: (state) => Object.values(state.techStack).flat()
  }
})
