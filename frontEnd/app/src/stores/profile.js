import { defineStore } from 'pinia'
import myProjectsData from '@/data/myProjects.json'

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
    projects: myProjectsData.projets.map(p => ({
      id: p.id,
      name: p.nom,
      url: p.url,
      language: p.langage_principal || 'Unknown',
      description: p.description_courte,
      category: p.categorie,
      featured: p.featured || false,
      files: []
    })),
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
