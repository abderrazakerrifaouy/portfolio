// Competences data extracted from competences.json
export default {
  programme: "Formation Full Stack Web Developer",
  annee: "2025-2026",
  phases: [
    {
      id: "frontend-html-css",
      titre: "Frontend — HTML / CSS",
      periode: "Octobre 2025",
      competences: [
        { nom: "HTML5 / CSS3", categorie: "Frontend", description: "Bases du développement web : structure des pages avec HTML5 (sémantique, balises, formulaires) et mise en forme avec CSS3 (propriétés, cascades, héritage). Fondation de tout développeur web." },
        { nom: "SEO Basics", categorie: "Frontend", description: "Optimisation pour les moteurs de recherche : utilisation des balises méta, structure sémantique, attributs alt, titres hiérarchiques. Permet d'améliorer la visibilité d'un site sur Google." },
        { nom: "UX / UI Design", categorie: "Frontend", description: "Principes de conception centrée utilisateur (UX) et d'interface visuelle (UI) : hiérarchie visuelle, couleurs, typographie, espacement, et expérience de navigation intuitive." },
        { nom: "Accessibilité web", categorie: "Frontend", description: "Conception de sites utilisables par tous, y compris les personnes en situation de handicap : attributs ARIA, contrastes suffisants, navigation au clavier, lecteurs d'écran." },
        { nom: "Mobile First / Responsive Design", categorie: "Frontend", description: "Approche de conception qui commence par les petits écrans puis s'adapte aux grands. Utilisation des media queries CSS pour créer des interfaces adaptées à tous les appareils." },
        { nom: "Sélecteurs, Événements et Animations CSS", categorie: "Frontend", description: "Sélecteurs avancés CSS (pseudo-classes, pseudo-éléments, combinateurs), gestion des transitions et animations CSS (@keyframes, transform, transition) pour des interfaces dynamiques sans JavaScript." },
        { nom: "Préprocesseurs CSS (SASS/SCSS)", categorie: "Frontend", description: "Outils qui étendent CSS avec des variables, mixins, fonctions et l'imbrication de règles. SASS/SCSS permet d'écrire du CSS plus maintenable et réutilisable." },
        { nom: "CSS Architecture (BEM)", categorie: "Frontend", description: "Méthodologie de nommage Block-Element-Modifier pour organiser les classes CSS de façon claire et éviter les conflits. Essentielle pour les projets de grande taille en équipe." },
        { nom: "CSS Frameworks", categorie: "Frontend", description: "Bibliothèques CSS prêtes à l'emploi (Bootstrap, Tailwind CSS) qui accélèrent le développement avec des composants et utilitaires préconçus et responsives." },
        { nom: "Flexbox", categorie: "Frontend", description: "Module CSS pour la mise en page unidimensionnelle (ligne ou colonne) : alignement, distribution de l'espace, et réorganisation d'éléments de façon flexible et responsive." },
        { nom: "CSS Grid", categorie: "Frontend", description: "Système de mise en page bidimensionnel CSS (lignes ET colonnes) : permet de créer des layouts complexes comme des grilles de cartes, dashboards ou pages entières." },
        { nom: "Figma / Prototypes interactifs", categorie: "Frontend", description: "Outil de design collaboratif pour créer des maquettes (wireframes), des prototypes interactifs et des design systems. Utilisé avant le développement pour valider l'interface avec les clients." }
      ]
    },
    {
      id: "javascript",
      titre: "JavaScript",
      periode: "Octobre – Novembre 2025",
      competences: [
        { nom: "JavaScript (bases)", categorie: "JavaScript", description: "Langage de programmation du web : variables, types, fonctions, boucles, tableaux, objets. Permet d'ajouter de l'interactivité et de la logique aux pages web." },
        { nom: "JS DOM", categorie: "JavaScript", description: "Document Object Model : API JavaScript pour manipuler le contenu HTML/CSS en temps réel. Sélectionner des éléments, modifier leur contenu, ajouter/supprimer des nœuds." },
        { nom: "Debugging JavaScript", categorie: "JavaScript", description: "Techniques et outils pour trouver et corriger les bugs : console.log, DevTools Chrome, breakpoints, inspection de variables, gestion des erreurs avec try/catch." },
        { nom: "Events & Animations JS", categorie: "JavaScript", description: "Gestion des événements utilisateur (click, scroll, input) avec addEventListener. Création d'animations dynamiques via JavaScript en manipulant les styles et les classes CSS." },
        { nom: "Callbacks", categorie: "JavaScript", description: "Fonctions passées en argument à d'autres fonctions, exécutées après une opération. Base de la programmation asynchrone en JS avant les Promises." },
        { nom: "Promises", categorie: "JavaScript", description: "Objet représentant la complétion (ou l'échec) future d'une opération asynchrone. Permet d'écrire du code asynchrone plus lisible avec .then() et .catch(), et async/await." },
        { nom: "Event Loop", categorie: "JavaScript", description: "Mécanisme interne de JavaScript qui gère l'exécution du code asynchrone : call stack, heap, queue de tâches, microtasks. Explique pourquoi JS est non-bloquant malgré son single thread." },
        { nom: "Data Fetching", categorie: "JavaScript", description: "Récupération de données depuis des APIs externes avec fetch() ou Axios. Gestion des requêtes HTTP (GET, POST), traitement des réponses JSON, et affichage dynamique des données." },
        { nom: "GSAP", categorie: "JavaScript", description: "GreenSock Animation Platform : bibliothèque JavaScript professionnelle pour créer des animations web haute performance, des timelines complexes et des interactions avancées." },
        { nom: "TypeScript", categorie: "JavaScript", description: "Sur-ensemble typé de JavaScript qui ajoute des types statiques. Permet de détecter les erreurs à la compilation, améliore l'autocomplétion et la maintenabilité du code." },
        { nom: "Babel", categorie: "JavaScript", description: "Compilateur JavaScript qui transforme le code ES6+ en ES5 compatible avec les anciens navigateurs. Permet d'utiliser les dernières fonctionnalités JS sans problèmes de compatibilité." },
        { nom: "PWA (Progressive Web Apps)", categorie: "JavaScript", description: "Applications web qui se comportent comme des apps natives : mode hors-ligne (Service Workers), installation sur l'écran d'accueil, notifications push, chargement rapide." }
      ]
    },
    {
      id: "outils-collaboration",
      titre: "Outils & Collaboration",
      periode: "Tout au long de l'année",
      competences: [
        { nom: "Git Branching / Stratégies de merge", categorie: "DevOps / Outils", description: "Gestion des branches Git : feature branches, Gitflow, merge strategies (fast-forward, squash, rebase). Organisation du code en équipe pour éviter les conflits et maintenir un historique propre." },
        { nom: "Git Rebase / Collaboration GitHub", categorie: "DevOps / Outils", description: "Réécriture de l'historique Git avec rebase pour un historique linéaire. Collaboration sur GitHub : pull requests, code reviews, issues, GitHub Actions. Workflows de collaboration professionnels." },
        { nom: "Docker", categorie: "DevOps / Outils", description: "Conteneurisation des applications : Dockerfile, images, conteneurs, docker-compose. Garantit que l'application fonctionne de la même façon en développement et en production." },
        { nom: "GitHub Actions (CI/CD)", categorie: "DevOps / Outils", description: "Automatisation des workflows de développement : tests automatisés, build, déploiement continu à chaque push. Pipelines CI/CD directement intégrés dans GitHub." },
        { nom: "Trello / Agilité / SCRUM", categorie: "DevOps / Outils", description: "Gestion de projet agile : sprints, daily stand-ups, rétrospectives, user stories. Trello pour visualiser le flux de travail en Kanban. Méthodes de travail en équipe efficaces." }
      ]
    },
    {
      id: "php-backend",
      titre: "PHP & Backend",
      periode: "Novembre – Décembre 2025",
      competences: [
        { nom: "PHP Bases", categorie: "PHP", description: "Rendu conditionnel, routes, query string, formulaires, validation, sécurité. Les fondamentaux du développement backend avec PHP." },
        { nom: "PHP POO", categorie: "PHP", description: "Classes & Objets, Encapsulation, Méthodes magiques, Namespaces, MVC, Exceptions, Autoloading, Routing maison. Programmation orientée objet en PHP." },
        { nom: "Composer / Twig", categorie: "PHP", description: "Composer pour la gestion des dépendances PHP. Twig comme moteur de templates pour séparer la logique de la présentation." },
        { nom: "MySQL / PostgreSQL", categorie: "Base de données", description: "Systèmes de gestion de bases de données relationnelles. SQL : SELECT, INSERT, UPDATE, DELETE, Jointures, SubQuery, Triggers. Normalisation et conception de schémas." },
        { nom: "ORM from Scratch", categorie: "Architecture", description: "Implémentation d'un ORM maison en PHP : comprendre comment fonctionnent les relations, le mapping objet-relationnel et les design patterns (ActiveRecord, DataMapper)." }
      ]
    },
    {
      id: "laravel",
      titre: "Laravel Framework",
      periode: "Janvier – Mars 2026",
      competences: [
        { nom: "Eloquent ORM / QueryBuilder", categorie: "Laravel", description: "ORM puissant de Laravel pour interagir avec la base de données via des modèles PHP. QueryBuilder pour des requêtes SQL complexes sans écrire de SQL brut." },
        { nom: "Authentication & Guards", categorie: "Laravel", description: "Système d'authentification complet de Laravel : guards, providers, middleware d'auth. Gestion des utilisateurs, sessions, et tokens d'authentification." },
        { nom: "RESTful API + JWT", categorie: "Laravel", description: "Création d'APIs REST avec Laravel. JWT pour l'authentification stateless des SPAs et applications mobiles. API Resources pour transformer les modèles en JSON." },
        { nom: "Laravel Sanctum", categorie: "Laravel", description: "Système d'authentification léger de Laravel pour les SPAs et APIs mobiles : tokens API personnels et authentification par cookies de session." },
        { nom: "WebSocket / Pusher / Real-time", categorie: "Laravel", description: "Fonctionnalités temps réel avec Laravel : Short/Long Polling, Webhook, Server-Sent Events, WebSocket, Pusher. Pour des applications collaboratives et des notifications live." },
        { nom: "TDD / PHPUnit / PEST", categorie: "Laravel", description: "Test Driven Development : écrire les tests avant le code. PHPUnit pour les tests unitaires et fonctionnels. PEST pour une syntaxe de test plus élégante." },
        { nom: "Laravel Queues / Octane", categorie: "Laravel", description: "Files d'attente pour les tâches lourdes en arrière-plan. Laravel Octane avec Swoole/RoadRunner pour des performances 10x supérieures." },
        { nom: "AWS / CI/CD", categorie: "Laravel", description: "Déploiement sur Amazon Web Services (EC2, S3, RDS). Pipelines CI/CD avec GitHub Actions pour le déploiement automatique. Blue/Green Deployment." }
      ]
    },
    {
      id: "frontend-vuejs",
      titre: "Frontend Avancé — Vue.js",
      periode: "Mars – Avril 2026",
      competences: [
        { nom: "Virtual DOM", categorie: "Frontend Avancé", description: "Représentation légère en mémoire du DOM réel. Les frameworks comparent le Virtual DOM avant/après chaque changement pour mettre à jour uniquement ce qui a changé." },
        { nom: "Vue Router", categorie: "Frontend Avancé", description: "Routeur officiel de Vue.js pour les SPAs : navigation sans rechargement, routes dynamiques, guards de navigation, routes imbriquées et lazy loading." },
        { nom: "Lifecycle Hooks Vue", categorie: "Frontend Avancé", description: "Méthodes appelées à des moments précis de la vie d'un composant Vue : created, mounted, updated, destroyed. Permettent d'exécuter du code au bon moment." },
        { nom: "Options API / Composition API", categorie: "Frontend Avancé", description: "Options API : approche historique intuitive avec data, methods, computed. Composition API : API moderne Vue 3 avec setup(), ref(), reactive(), computed() pour une meilleure réutilisabilité." },
        { nom: "Pinia (State Management)", categorie: "Frontend Avancé", description: "Store officiel de Vue 3 : gestion d'état global partagé entre composants. Stores modulaires, réactifs, avec DevTools, support TypeScript natif." },
        { nom: "Hooks / State / Props", categorie: "Frontend Avancé", description: "Fondamentaux des composants : state (données internes réactives), props (données passées par le parent), et hooks (fonctions réutilisant de la logique d'état)." }
      ]
    },
    {
      id: "mobile",
      titre: "Mobile Development",
      periode: "2023 – Présent",
      competences: [
        { nom: "Android / Kotlin", categorie: "Mobile", description: "Développement d'applications Android natives avec Kotlin. Architectures modernes (MVVM, Clean Architecture), Jetpack Compose, coroutines, Flow." },
        { nom: "Flutter / Dart", categorie: "Mobile", description: "Framework cross-platform de Google pour créer des apps iOS et Android à partir d'une seule base de code. Dart comme langage, widgets personnalisés." },
        { nom: "Firebase", categorie: "Mobile", description: "Plateforme Google pour les applications mobiles : Authentication, Firestore, Realtime Database, Cloud Storage, Push Notifications, Analytics." }
      ]
    }
  ]
}
