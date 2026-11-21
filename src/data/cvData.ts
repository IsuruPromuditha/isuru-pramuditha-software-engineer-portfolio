export type ProjectCategory =
  | 'all'
  | 'ai-realtime'
  | 'fullstack'
  | 'ecommerce'
  | 'enterprise';

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  summary: string;
  highlights: string[];
  stack: string[];
  year: string;
  image: string;
  repoUrl: string;
  architectureFocus: string;
  constellationCoords: { x: number; y: number };
}

export interface ExperienceItem {
  id: string;
  role: string;
  specialization: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
  note: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  detail: string;
  year: string;
}

export interface ReferenceItem {
  id: string;
  name: string;
  title: string;
  institution: string;
  address: string;
  email: string;
  phone: string;
}

export const PROFILE_INFO = {
  name: 'Isuru Pramuditha',
  role: 'Software Engineer',
  headline: 'Engineering resilient web, mobile, and AI-driven software.',
  location: 'Matugama, Sri Lanka',
  phone: '+94717287298',
  phoneDisplay: '+94 71 728 7298',
  email: 'isurupromuditha617@gmail.com',
  linkedin: 'https://www.linkedin.com/in/isuru-jayasooriya-891a50217',
  linkedinDisplay: 'linkedin.com/in/isuru-jayasooriya-891a50217',
  github: 'https://github.com/IsuruPromuditha/',
  githubDisplay: 'github.com/IsuruPromuditha',
  legacyPortfolio: 'https://isuru-pramuditha-jayasooriya-porfol.vercel.app',
  legacyPortfolioDisplay: 'isuru-pramuditha-jayasooriya-porfol.vercel.app',
  cvPdfPath: '/assets/aistudio/Isuru-Pramuditha-CV_5b8a3c85.pdf',
  summary:
    'Motivated and detail-oriented Mobile and Web Developer with hands-on experience developing responsive web applications and mobile applications using modern technologies. Experienced in Flutter, Dart, Java, React, Node.js, Spring Boot, PHP, JavaScript, HTML, CSS, Bootstrap, jQuery, and Firebase, with database experience using MySQL.',
  extendedSummary:
    'Have developed and contributed to individual and group projects including tourism applications, vehicle booking systems, management systems, e-commerce applications, and healthcare channeling platforms. Strong understanding of application development, database integration, responsive UI design, and full-stack development, with a passion for learning new technologies and building user-friendly, reliable software solutions.',
};

export const KEY_METRICS = [
  { label: 'Current Practice', value: 'Full-Stack & Mobile' },
  { label: 'Experience', value: 'Esupport Rajagiriya (2025–2026)' },
  { label: 'Delivered Systems', value: '13 Portfolio Repositories' },
  { label: 'Academic Track', value: 'B.Sc. (Hons) Software Eng.' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'esupport-rajagiriya',
    role: 'Software Engineer',
    specialization: 'Frontend and Backend Developer',
    company: 'Esupport Rajagiriya',
    period: '2025 – 2026',
    responsibilities: [
      'Designed, developed, and maintained mobile and web applications in alignment with business and user requirements.',
      'Developed scalable and reusable code components while following clean coding and best practices. Identified, debugged, and resolved application-level issues to improve system stability and performance.',
      'API testing with all bug reports, maintaining all test cases and finding solutions for all identified bugs.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'ai-background-remover',
    index: '01',
    title: 'AI Photo Studio & Background Remover',
    subtitle: 'Client-Side Segmentation & Gemini AI Cutout Suite',
    category: 'ai-realtime',
    categoryLabel: 'AI & Creative Tools',
    year: '2026',
    image: '/src/assets/images/project_bg_remover_1795268581446.jpg',
    repoUrl:
      'https://github.com/IsuruPromuditha/AI-Based-Photo-Editing-Website-Background-Remover-',
    summary:
      'Full-stack AI photo editing and background removal web application built with React, TypeScript, and Express. Combines instant client-side Sobel edge segmentation, Magic Wand color selection, precision brush/eraser touch-up tools, Gemini AI background removal, custom studio backdrops, and high-resolution export.',
    highlights: [
      'Implemented instant local edge and color segmentation using Sobel gradient operators and color delta thresholds.',
      'Built interactive Magic Wand sampling, configurable brush/eraser touch-ups, and multi-image project management.',
      'Integrated server-side Gemini AI background removal and studio backdrop replacement via Express.',
    ],
    stack: ['React', 'TypeScript', 'Express', 'Gemini API', 'Tailwind CSS'],
    architectureFocus: 'Hybrid client-side canvas segmentation with Gemini AI backend',
    constellationCoords: { x: 24, y: 26 },
  },
  {
    id: 'kidsmart-tuft',
    index: '02',
    title: 'KidsMart — Tuft Organic Studio',
    subtitle: 'Tactile Children’s Organic Clothing Storefront',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Retail',
    year: '2026',
    image: '/src/assets/images/project_kidsmart_1795268581277.jpg',
    repoUrl: 'https://github.com/IsuruPromuditha/kidsMart',
    summary:
      'Tactile children’s organic clothing store built with React 19, TypeScript, Motion, and Lenis smooth scrolling. Features an interactive spring-driven 3D garment ring, a fabric magnifying lens for knit texture inspection, a grow-along draggable height chart, and an animated slide-out shopping cart.',
    highlights: [
      'Engineered a spring-driven hero garment ring stage and interactive fabric texture magnifying lens.',
      'Built a draggable grow-along children’s height chart and flying garment cart transition overlay.',
      'Delivered silky smooth scroll choreography powered by Lenis and Motion.',
    ],
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Motion', 'Lenis'],
    architectureFocus: 'Tactile interactive garment inspection and kinetic storefront UX',
    constellationCoords: { x: 72, y: 22 },
  },
  {
    id: 'ishatravels',
    index: '03',
    title: 'Isha Travels — Paradise Island Sri Lanka',
    subtitle: 'Full-Stack Travel, Villa & Tour Booking Platform',
    category: 'fullstack',
    categoryLabel: 'Travel & Hospitality',
    year: '2026',
    image: '/src/assets/images/project_ishatravels_1795268581503.jpg',
    repoUrl: 'https://github.com/IsuruPromuditha/ishatravels',
    summary:
      'Full-stack Sri Lankan travel and tour booking platform built with React, Express, TypeScript, and PostgreSQL. Showcases curated multi-day itineraries with expandable day-by-day breakdowns, a filterable villa & coastal stay directory, and a dynamic booking flow with auto-filled package details.',
    highlights: [
      'Built automated landmark hero slideshows paired with expandable day-by-day itinerary accordions and carousels.',
      'Implemented seamless booking redirection that auto-populates package title, duration, pricing, and ID.',
      'Backed tour packages, villas, and reservations with a Node.js, Express, and PostgreSQL REST API.',
    ],
    stack: ['React', 'Express', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    architectureFocus: 'Relational tour package engine and auto-filled booking pipeline',
    constellationCoords: { x: 48, y: 46 },
  },
  {
    id: 'asset-management-system',
    index: '04',
    title: 'Asset Management System',
    subtitle: 'Enterprise Lifecycle & Check-In/Out Platform',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Inventory',
    year: '2026',
    image: '/src/assets/images/project_asset_mgmt_1795268583276.jpg',
    repoUrl: 'https://github.com/IsuruPromuditha/asset-management-system',
    summary:
      'Full-featured organizational Asset Management System built with React, Node.js, and Tailwind CSS. Supports real-time asset lifecycle tracking, role-based access control, check-in/check-out assignment workflows, dynamic analytics dashboards, instant multi-criteria filtering, and Playwright end-to-end verification.',
    highlights: [
      'Implemented real-time asset custody check-in/check-out workflows and role-based access control.',
      'Built dynamic dashboard analytics and instant multi-criteria inventory filtering across devices.',
      'Verified critical workflows using automated Playwright end-to-end test suites.',
    ],
    stack: ['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Playwright'],
    architectureFocus: 'Role-based asset lifecycle tracking with E2E Playwright coverage',
    constellationCoords: { x: 25, y: 72 },
  },
  {
    id: 'hearth-ladle',
    index: '05',
    title: 'Hearth & Ladle',
    subtitle: 'Statically Generated Next.js Culinary & Recipe Platform',
    category: 'fullstack',
    categoryLabel: 'Travel & Hospitality',
    year: '2026',
    image: '/src/assets/images/project_hearth_ladle_1795268581632.jpg',
    repoUrl: 'https://github.com/IsuruPromuditha/hearth-ladle',
    summary:
      'Modern culinary and recipe web application built with Next.js 15 App Router, TypeScript, and Tailwind CSS. Compiles structured JSON recipe data into statically generated pages with automatic Recipe JSON-LD SEO metadata, interactive servings scalers, US/metric unit toggles, and comment ratings.',
    highlights: [
      'Built interactive servings scaling and real-time US/metric fraction formatting utilities.',
      'Generated automated XML sitemaps, OpenGraph metadata, and Schema.org Recipe JSON-LD per recipe slug.',
      'Added recipe saving, print layouts, nutrition readouts, and an API route for ratings and comments.',
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Motion', 'JSON-LD'],
    architectureFocus: 'Static App Router recipe compiler with live unit/servings scaling',
    constellationCoords: { x: 73, y: 64 },
  },
  {
    id: 'quickguide-sri-lanka',
    index: '06',
    title: 'QuickGuide Sri Lanka',
    subtitle: 'Tourism & Certified Guide Management Platform',
    category: 'fullstack',
    categoryLabel: 'Travel & Hospitality',
    year: '2026',
    image: '/src/assets/images/project_quickguide_1795268597655.jpg',
    repoUrl: 'https://github.com/IsuruPromuditha/QuickGuide',
    summary:
      'Undergraduate research web platform built with React, Node.js, MySQL, and Google Maps integration. Connects travelers with certified local tour guides across Sri Lanka by location, language, and specialty while streamlining multi-day itinerary planning and digital tourism administration.',
    highlights: [
      'Enabled travelers to search, filter, and book licensed local tour guides by language and specialty.',
      'Integrated interactive Google Maps destination exploration alongside custom smart itinerary planning.',
      'Structured tour guide verification and travel management tools on a Node.js & MySQL backend.',
    ],
    stack: ['React', 'Node.js', 'MySQL', 'Google Maps', 'Tailwind CSS'],
    architectureFocus: 'Geospatial destination discovery and certified guide booking',
    constellationCoords: { x: 50, y: 82 },
  },
  {
    id: 'lunalumeweb',
    index: '07',
    title: 'Luna~Lume — PHP E-Commerce',
    subtitle: 'Dynamic Apparel Storefront & AI Webchat',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Retail',
    year: '2026',
    image: '/src/assets/images/project_lunalume_1795268581602.jpg',
    repoUrl: 'https://github.com/IsuruPromuditha/LunaLumeWeb',
    summary:
      'Responsive e-commerce web application built with native PHP 8 (PDO), MySQL, and Tailwind CSS. Features dynamic database-driven product catalogs, real-time size variation and stock availability badges, interactive category browsing, AOS scroll animations, and an integrated Botpress AI webchat widget.',
    highlights: [
      'Engineered dynamic PDO-backed inventory queries with real-time size availability and out-of-stock states.',
      'Integrated an automated Botpress AI webchat assistant for real-time shopper inquiries.',
      'Combined Tailwind CSS responsive layouts with smooth AOS scroll-triggered animations.',
    ],
    stack: ['PHP 8', 'MySQL (PDO)', 'Tailwind CSS', 'AOS', 'Botpress AI'],
    architectureFocus: 'PDO relational stock/sizing engine with AI webchat support',
    constellationCoords: { x: 30, y: 38 },
  },
  {
    id: 'lk-shoe-ecommerce',
    index: '08',
    title: 'LK Shoe — Stealth Hype',
    subtitle: 'Dark Brutalist Footwear E-Commerce Platform',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Retail',
    year: '2026',
    image: '/src/assets/images/project_lk_shoe_1795268581649.jpg',
    repoUrl: 'https://github.com/IsuruPromuditha/LK_shoe',
    summary:
      'Responsive React 18 and Vite e-commerce platform for a Sri Lankan footwear store styled in a Stealth Hype dark brutalist theme. Includes glassmorphic UI components, an animated admin product management dashboard, Context API state management, toast feedback, and Framer Motion page transitions.',
    highlights: [
      'Designed a high-contrast dark brutalist storefront with modular components and Framer Motion transitions.',
      'Built an animated administrative dashboard for product catalog management and store metrics.',
      'Managed global cart and catalog state cleanly with React Context API and responsive Tailwind layouts.',
    ],
    stack: ['React 18', 'Vite', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    architectureFocus: 'Motion-choreographed brutalist storefront and admin UI',
    constellationCoords: { x: 64, y: 40 },
  },
  {
    id: 'hotel-inventory',
    index: '09',
    title: 'Hotel Inventory Management',
    subtitle: 'Hospitality Supply & Room Amenity Tracking System',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Inventory',
    year: '2026',
    image: '/src/assets/images/project_hotel_inventory_1795268581598.jpg',
    repoUrl: 'https://github.com/IsuruPromuditha/hotel-inventory',
    summary:
      'Hospitality inventory and operations management system tailored for tracking hotel room amenities, housekeeping linens, F&B consumables, stock threshold alerts, and supplier replenishment workflows across departments.',
    highlights: [
      'Structured stock tracking across housekeeping linens, room amenities, and departmental storerooms.',
      'Built low-stock threshold visibility and consumption audit trails to prevent operational shortages.',
      'Streamlined supplier restock requests and item categorization in a clean administrative interface.',
    ],
    stack: ['Full-Stack Web', 'Inventory Control', 'Database Design', 'REST API'],
    architectureFocus: 'Hospitality stock ledger and departmental replenishment tracking',
    constellationCoords: { x: 40, y: 60 },
  },
  {
    id: 'tts-ai-web-app',
    index: '10',
    title: 'Text-to-Speech AI Web App',
    subtitle: 'Generative Voice & Real-Time Audio Studio',
    category: 'ai-realtime',
    categoryLabel: 'AI & Creative Tools',
    year: '2026',
    image: '/src/assets/images/project_tts_ai_1795268582446.jpg',
    repoUrl: 'https://github.com/IsuruPromuditha/remix-text-to-voice_',
    summary:
      'AI-powered web application for converting text into speech and generating expressive voice-based content. Integrates Gemini API generative capabilities, moodboard-driven vocal tone features, live audio frequency visualization, and WebSocket real-time communication.',
    highlights: [
      'Integrated Gemini API for generative AI text-to-speech synthesis and mood-adaptive vocal inflection.',
      'Built live audio waveform visualization alongside low-latency WebSocket streaming.',
      'Engineered an accessible, responsive TypeScript and Tailwind CSS studio workspace.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'WebSockets'],
    architectureFocus: 'Real-time generative speech pipeline with live waveform feedback',
    constellationCoords: { x: 25, y: 50 },
  },
  {
    id: 'quickdine',
    index: '11',
    title: 'QuickDine',
    subtitle: 'Restaurant Table Booking & Management System',
    category: 'fullstack',
    categoryLabel: 'Travel & Hospitality',
    year: '2026',
    image: '/src/assets/images/project_quickdine_1795268582557.jpg',
    repoUrl: 'https://github.com/IsuruPromuditha/QuickDine-main',
    summary:
      'Full-stack restaurant reservation and management platform enabling diners to discover curated dining venues, check real-time table availability by date and party size, and manage upcoming bookings through an intuitive restaurant operator interface.',
    highlights: [
      'Engineered real-time table slot availability queries filtered by reservation date and party size.',
      'Built dedicated diner discovery views alongside restaurant operator booking management.',
      'Exposed clean REST API endpoints backed by relational MySQL schemas.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'MySQL', 'REST API'],
    architectureFocus: 'Availability conflict resolution and reservation REST API',
    constellationCoords: { x: 60, y: 28 },
  },
  {
    id: 'student-management-system',
    index: '12',
    title: 'Student Management REST API',
    subtitle: 'Academic Records, Courses & Grades Service',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Inventory',
    year: '2024',
    image: '/src/assets/images/project_student_api_1795268581536.jpg',
    repoUrl:
      'https://github.com/IsuruPromuditha/Student_Management_System-Rest_Api-',
    summary:
      'RESTful API service for educational institutions to manage student records, course enrollments, grades, and academic profiles. Implements full CRUD operations, data validation, and authentication with clean layered architecture.',
    highlights: [
      'Designed normalized relational models for students, enrollments, courses, and grade histories.',
      'Implemented complete CRUD REST endpoints with validation and structured error responses.',
      'Built with Java, Spring Boot, and MySQL persistence for institutional reliability.',
    ],
    stack: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
    architectureFocus: 'Layered RESTful API with relational academic schema',
    constellationCoords: { x: 35, y: 76 },
  },
  {
    id: 'timeticker-inventory',
    index: '13',
    title: 'TimeTicker',
    subtitle: 'Standalone Stock & Parts Management System',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Inventory',
    year: '2024',
    image: '/src/assets/images/project_timeticker_1795268581516.jpg',
    repoUrl: 'https://github.com/IsuruPromuditha/TimeTicker',
    summary:
      'Standalone Java and MySQL inventory management application engineered for tracking spare parts, managing item catalogs, monitoring stock levels, and overseeing component lifecycles through a clean desktop interface.',
    highlights: [
      'Built comprehensive stock-level tracking, part categorization, and lifecycle state transitions.',
      'Provided real-time inventory monitoring views to prevent stockouts and track component usage.',
      'Engineered standalone desktop reliability powered by Java and MySQL.',
    ],
    stack: ['Java', 'MySQL'],
    architectureFocus: 'Standalone inventory lifecycle and parts tracking engine',
    constellationCoords: { x: 70, y: 74 },
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages & Frameworks',
    items: [
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'HTML',
      'CSS',
      'Flutter',
      'Dart',
      'Java',
      'Spring Boot',
      'PHP',
      'C',
      'C++',
      'JavaScript',
      'Bootstrap',
      'jQuery',
    ],
    note: 'Web, cross-platform mobile, and backend application engineering.',
  },
  {
    category: 'Platforms & Cloud',
    items: ['AWS', 'Firebase'],
    note: 'Cloud infrastructure, hosting, and real-time backend services.',
  },
  {
    category: 'Data & Persistence',
    items: ['PostgreSQL', 'MongoDB', 'MySQL'],
    note: 'Relational schema architecture and document data modeling.',
  },
  {
    category: 'Engineering Practice',
    items: ['System Design', 'Observability', 'CI/CD', 'Code Review', 'REST API Architecture'],
    note: 'Maintainable component design, stability, and delivery pipelines.',
  },
  {
    category: 'QA & Automation',
    items: ['Playwright', 'Postman', 'Selenium'],
    note: 'End-to-end browser verification, API test suites, and bug triage.',
  },
  {
    category: 'Tooling & Design',
    items: ['Git', 'Figma', 'Trello', 'Power BI', 'JMeter'],
    note: 'Version control, UI prototyping, load testing, and analytics.',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'bsc-bedfordshire',
    degree: 'B.Sc. (Hons) Software Engineering',
    institution: 'University of Bedfordshire',
    detail: '2nd Class Upper Division',
    year: '2026',
  },
  {
    id: 'hnd-sliit',
    degree: 'Higher Diploma in Information Technology',
    institution: 'SLIIT CITY UNI · Offered by SLIIT Academy',
    detail: 'Core foundations in software development, databases, and networks',
    year: '2024',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Flutter Training Course',
    issuer: 'Franking Training',
    detail: 'Cross-platform mobile application architecture and Dart UI development.',
  },
];

export const LANGUAGES = [
  { name: 'English', proficiency: 'Professional Working Proficiency' },
  { name: 'Sinhala', proficiency: 'Native Proficiency' },
];

export const REFERENCES: ReferenceItem[] = [
  {
    id: 'dr-gayana',
    name: 'Dr Gayana Fernando',
    title: 'Senior Lecturer (Higher Grade)',
    institution: 'SLIIT City Uni (Subsidiary of SLIIT)',
    address: '13th Floor, BoC Merchant Tower No 28, St Michael’s Road, Colombo 03',
    email: 'gayana.f@sliit.lk',
    phone: '0117543600',
  },
  {
    id: 'dr-nipunika',
    name: 'Dr Nipunika Vithana',
    title: 'Senior Lecturer (Higher Grade)',
    institution: 'SLIIT City Uni (SLIIT)',
    address: '13th Floor, BoC Merchant Tower No 28, St Michael’s Road, Colombo 03',
    email: 'nipunika.v@sliit.lk',
    phone: '0117543612',
  },
];
