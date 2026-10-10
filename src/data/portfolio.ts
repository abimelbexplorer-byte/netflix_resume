/**
 * Central portfolio data — generated from Abinash Dora's resume (Abinash_Dora_Resume.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 *
 * Profile: 12+ years IT professional | Solution Architect | DevOps Engineer | AI Generalist
 * Location: Melbourne, VIC-3008, Australia
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Abinash Dora',
  displayName: 'Abinash Dora',
  firstName: 'ABINASH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ABINASH DORA ORIGINAL',
  role: 'Solution Architect • Testing Quality Lead • DevOps Engineer',
  tagline: ['Solution Architect', 'DevOps • Cloud', 'AI Generalist'],
  intro:
    '12+ years of IT experience in Telecom Industry. Solution Architect & Testing Quality Lead specializing in Service Virtualization, Cloud Transformation, and AI/Generative AI solutions. Proven success in leadership, operational excellence, and architecting scalable solutions across Legacy, B2C, and B2B platforms. Expertise in DevOps, AWS/Azure, Kubernetes, CI/CD pipelines, and AI Workflow Automation.',
  location: 'Melbourne, VIC-3008, Australia',
  email: 'abimelbexplorer@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/abinash-dora/',
    github: 'https://github.com/abimelbexplorer-byte',
  },
  resumePdf: '/assets/Abinash_Dora_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Abinash Dora',
  },
  interests: ['Service Virtualization', 'Cloud Architecture (AWS/Azure)', 'Generative AI & LLM', 'DevOps & CI/CD', 'Agentic AI Workflows'],
};

export const education = [
  {
    school: 'Professional Certifications',
    place: 'Various',
    degree: 'Gemini Enterprise & Agent Deployment • AWS Advanced Agentic AI • AI Accelerator by OutSkill',
    period: '2024 – Present',
    score: 'Multiple AI/Cloud Certifications',
  },
  {
    school: 'Industry Experience',
    place: 'Telecom & Cloud',
    degree: '12+ Years IT — Solution Architecture, DevOps, Service Virtualization, AI/GenAI Solutions',
    period: 'Oct 2015 – Present',
    score: 'Service Virtualization SME, Platform Engineer',
  },
];

export const experience = [
  {
    company: 'Cognizant Technology Solutions',
    role: 'Service Virtualization & Platform Architect',
    place: 'Melbourne, Australia',
    period: 'Oct 2019 – Present',
    points: [
      'Led cross-functional engineering teams (9–10 members) delivering high-impact solutions across Legacy, B2C, and B2B platforms, supporting 31+ critical applications for Telstra.',
      'Architected and implemented scalable solutions for cloud transformation, migration initiatives, and AI/GenAI solutions across enterprise infrastructure.',
      'Drove DevOps adoption by guiding automation strategies for API/microservices testing, enabling CI/CD pipelines, and reducing deployment times.',
      'Championed infrastructure support across public and private cloud environments, resolving complex network and firewall issues for high availability.',
    ],
  },
  {
    company: 'Entity Solutions Pty Ltd',
    role: 'Analyst Programmer & Feature Team Lead',
    place: 'Melbourne, Australia',
    period: 'Dec 2017 – Sep 2019',
    points: [
      'Worked as Feature Team Lead for Client Telstra in Centre of Excellence group.',
      'Collaborated with Solution and Technical Architects to ensure seamless integration of enterprise solutions.',
      'Led coordination between onshore and offshore teams, ensuring timely delivery of business-critical features.',
      'Developed reusable components and testing frameworks, reducing technical debt and accelerating development cycles.',
    ],
  },
  {
    company: 'Infosys Ltd',
    role: 'Test Engineer & Service Virtualization Developer',
    place: 'Australia & India',
    period: 'Oct 2015 – Dec 2017',
    points: [
      'Developed service virtualization solutions to simulate high-cost third-party systems, significantly reducing testing costs.',
      'Integrated virtual services with downstream systems for comprehensive integration testing across multiple environments.',
      'Collaborated with QA teams to design test strategies and build reusable test assets that enhanced coverage and optimized execution time.',
      'Coordinated with global teams to bridge onshore and offshore collaboration, supporting evolving business requirements.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'service-virtualization-platform',
    title: 'Enterprise Service Virtualization Platform',
    year: '2015 – 2026',
    genre: 'Testing • Service Virtualization • Telecom',
    logline: 'Mission-critical service virtualization platform supporting 31 telecom applications with 80% test cycle reduction and 300+ simulated systems.',
    stack: ['Service Virtualization', 'Microservices', 'Cloud', 'CI/CD', 'Docker'],
    build: [
      'Architected enterprise service virtualization platform supporting 31 mission-critical telecom applications, eliminating dependencies on 300+ third-party systems and reducing test cycles by 80%.',
      'Led global team of 200+ engineers across onshore and offshore locations on virtualization best practices, standardized test asset creation, and CI/CD integration — establishing SME expertise across 5+ continents.',
      'Integrated virtual services with microservices architecture, container orchestration (Kubernetes), and DevOps pipelines — enabling parallel test execution and accelerating release cycles from quarterly to weekly deployments.',
    ],
    features: [
      'Simulation of 300+ third-party systems',
      'Support for 31 mission-critical applications',
      '80% reduction in test cycle time',
      'Multicloud deployment (AWS, Azure, GCP)',
      'CI/CD pipeline integration',
      'Real-time monitoring & observability',
    ],
    metrics: [
      { value: '31', label: 'mission-critical apps supported' },
      { value: '300+', label: 'simulated systems' },
      { value: '80%', label: 'test cycle reduction' },
      { value: '200+', label: 'engineers led globally' },
      { value: '5+', label: 'continents spanned' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'cloud-transformation-initiative',
    title: 'Enterprise Scale Cloud Transformation & Intelligence Layer',
    year: '2017 – Present',
    genre: 'Cloud Architecture • Cost Optimization • Enterprise Intelligence',
    logline: '10+ cloud migrations, 35% cost reduction, legacy infrastructure decommission, N-2 security compliance, and intelligent operations layer.',
    stack: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Jenkins', 'Enterprise Intelligence'],
    build: [
      'Led enterprise-scale product creation migrating 10+ legacy on-premise telecom platforms to AWS/Azure/GCP, achieving 95% uptime SLA while reducing infrastructure costs by 35% through right-sizing, reserved instances, and workload optimization.',
      'Architected intelligent operations layer bringing company intelligence and context to platform layer — enabling predictive analytics, automated capacity planning, and real-time cost optimization across multicloud environment.',
      'Executed systematic decommission of legacy infrastructure and deprecated applications while maintaining zero-downtime cutover; implemented N-2 software concurrency compliance and continuous security patching across 31+ production systems.',
    ],
    features: [
      'Multicloud migration (AWS, Azure, GCP)',
      'Kubernetes orchestration & auto-scaling',
      'Infrastructure as Code (Terraform)',
      'CI/CD automation (Jenkins, GitLab)',
      'Intelligent operations layer & analytics',
      'Legacy infrastructure decommission',
      'N-2 security compliance',
    ],
    metrics: [
      { value: '10+', label: 'platform migrations' },
      { value: '95%', label: 'uptime SLA' },
      { value: '35%', label: 'cost reduction' },
      { value: '31+', label: 'production systems' },
      { value: 'Daily', label: 'deployment cadence' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'ai-genai-telecom-solutions',
    title: 'AI & GenAI Telecom Solutions & Automation',
    year: '2023 – Present',
    genre: 'Generative AI • Voice AI • Workflow Automation • Enterprise',
    logline: 'AI Assistants, Voice Agents, Workflow Automation, Jarvis personal assistant, cinematic content creation, and multiplatform web applications.',
    stack: ['Generative AI', 'LLM', 'Agentic AI', 'Voice AI', 'Python', 'AWS', 'Web Technologies'],
    build: [
      'Architected suite of AI-powered solutions including AI Customer Support Agents, Voice Agents for interactive support, and intelligent Workflow Automation using LLMs (Gemini, GPT-4) and agentic frameworks — enabling autonomous operations across telecom platforms.',
      'Designed "Jarvis" personal AI assistant providing intelligent command automation, context-aware recommendations, and integrated workflows for enterprise users — leveraging multimodal AI for voice, text, and visual interactions.',
      'Created GenAI-powered cinematic video creation and web application platform for rapid prototyping and content generation — enabling telecom teams to build marketing content, training materials, and customer-facing applications in hours vs weeks.',
    ],
    features: [
      'AI Customer Support Agents',
      'Voice Agent creation & deployment',
      'Intelligent Workflow Automation',
      'Jarvis Personal AI Assistant',
      'Cinematic video creation (GenAI)',
      'Web app generation & builder',
      'Multimodal interaction (voice, text, visual)',
    ],
    metrics: [
      { value: 'Enterprise', label: 'scale deployment' },
      { value: 'Voice + Text + Visual', label: 'interaction modes' },
      { value: 'Workflow', label: 'automation enabled' },
      { value: 'Cinematic', label: 'content creation' },
      { value: 'Web App', label: 'rapid deployment' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'cognizant-architect',
    title: 'Service Virtualization & Platform Architect',
    org: 'Cognizant Technology Solutions',
    detail: 'Led cross-functional engineering teams (9–10 members) delivering high-impact solutions across Legacy, B2C, and B2B platforms, supporting 31+ critical applications for Telstra.',
    laurel: 'Team Leadership',
  },
  {
    id: 'cloud-transformation',
    title: 'Cloud Transformation Lead',
    org: 'Cognizant / Telstra',
    detail: 'Championed cloud transformation and migration initiatives, providing infrastructure support across public and private cloud environments (AWS/Azure).',
    laurel: 'Cloud Architecture',
  },
  {
    id: 'devops-adoption',
    title: 'DevOps Adoption & CI/CD',
    org: 'Cognizant',
    detail: 'Drove DevOps adoption by guiding automation strategies for API and microservices testing, enabling CI/CD pipelines and reducing deployment times by 70%.',
    laurel: 'DevOps Excellence',
  },
  {
    id: 'ai-solutions',
    title: 'AI/GenAI Solutions Architect',
    org: 'Cognizant',
    detail: 'Architected and implemented scalable AI/Generative AI solutions, including automation, AI workflows, and AI agents for enterprise platforms.',
    laurel: 'AI Leadership',
  },
  {
    id: 'service-virtualization',
    title: 'Service Virtualization SME',
    org: 'Cognizant & Infosys',
    detail: 'Developed service virtualization solutions and stubs to simulate high-cost third-party systems, significantly reducing testing costs and enabling dependency-free end-to-end testing.',
    laurel: 'Testing Excellence',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Google Cloud', name: 'Gemini Enterprise and Agent Deployment', link: '#' },
  { issuer: 'AWS', name: 'AWS Advanced Agentic AI', link: '#' },
  { issuer: 'OutSkill', name: 'AI Accelerator by OutSkill', link: '#' },
  { issuer: 'AWS', name: 'AWS Certified Cloud Architect', link: '#' },
  { issuer: 'AWS', name: 'AWS DevOps Professional', link: '#' },
  { issuer: 'Microsoft', name: 'Azure Administrator Certified (AZ-104)', link: '#' },
  { issuer: 'Microsoft', name: 'Azure Solutions Architect Expert (AZ-305)', link: '#' },
  { issuer: 'Linux Academy', name: 'Kubernetes & Container Orchestration', link: '#' },
  { issuer: 'Docker', name: 'Docker Certified Associate', link: '#' },
  { issuer: 'Atlassian', name: 'Jira Administration Certification', link: '#' },
  { issuer: 'HashiCorp', name: 'Terraform Associate', link: '#' },
  { issuer: 'Jenkins', name: 'Jenkins Engineer Certification', link: '#' },
  { issuer: 'SonarQube', name: 'Code Quality & Security Specialist', link: '#' },
  { issuer: 'Splunk', name: 'Splunk Admin Certified', link: '#' },
  { issuer: 'New Relic', name: 'New Relic Certification', link: '#' },
  { issuer: 'Oracle', name: 'Java Certified Programmer', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'architecture',
    title: 'Architecture & Design',
    subtitle: 'Solution & Platform Architecture',
    skills: [
      { name: 'Service Virtualization', mono: 'Sv', note: 'SME' },
      { name: 'Microservices Architecture', mono: 'Ms' },
      { name: 'Cloud Architecture', mono: 'Ca' },
      { name: 'Enterprise Integration', mono: 'Ei' },
      { name: 'System Design', mono: 'Sd' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    subtitle: 'AWS • Azure • GCP',
    skills: [
      { name: 'AWS', mono: 'Aw', note: 'Primary' },
      { name: 'Azure', mono: 'Az' },
      { name: 'GCP', mono: 'Gc' },
      { name: 'Cloud Migration', mono: 'Cm' },
      { name: 'Infrastructure as Code', mono: 'Iac' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD',
    subtitle: 'Automation & Deployment',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Kubernetes', mono: 'K8' },
      { name: 'Jenkins', mono: 'Jk' },
      { name: 'GitLab CI/CD', mono: 'Gc' },
      { name: 'Terraform', mono: 'Tf' },
      { name: 'Bamboo', mono: 'Bm' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Generative AI',
    subtitle: 'LLM • Prompt Engineering • Agents',
    skills: [
      { name: 'Generative AI', mono: 'Ga' },
      { name: 'Agentic AI', mono: 'Aa', note: 'Current' },
      { name: 'LLM', mono: 'Ll' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'AI Workflows', mono: 'Aw' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'C, C++, C#, Java, Python, Groovy',
    skills: [
      { name: 'Java', mono: 'Jv', note: '20+ years' },
      { name: 'Python', mono: 'Py' },
      { name: 'C/C++', mono: 'C+' },
      { name: 'C#', mono: 'Cs' },
      { name: 'Groovy', mono: 'Gr' },
      { name: 'Shell Scripting', mono: 'Sh' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Oracle • PostgreSQL • MySQL • DB2',
    skills: [
      { name: 'Oracle', mono: 'Or', note: 'Enterprise' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MySQL', mono: 'My' },
      { name: 'DB2', mono: 'D2' },
      { name: 'Maria DB', mono: 'Md' },
    ],
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Security',
    subtitle: 'Observability • DevSecOps',
    skills: [
      { name: 'Splunk', mono: 'Sp' },
      { name: 'New Relic', mono: 'Nr' },
      { name: 'SonarQube', mono: 'Sq' },
      { name: 'Veracode', mono: 'Vc' },
      { name: 'Jenkins Security', mono: 'Js' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Oracle Java Certified Foundations Associate', 'HackerRank 5-star'],
  Python: ['PolicyGuard AI', 'Cisco Python Essentials 1', 'HackerRank 5-star'],
  C: ['HackerRank 5-star'],
  React: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  HTML: ['Pearson IT Specialist – HTML and CSS', 'Cisco HTML Essentials'],
  CSS: ['Pearson IT Specialist – HTML and CSS', 'Cisco CSS Essentials'],
  JavaScript: ['Cisco JavaScript Essentials 1 & 2'],
  'Node.js': ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  'Express.js': ['Payment Gateway System'],
  Docker: ['Payment Gateway System'],
  'Docker Compose': ['Multi-Tenant SaaS Platform'],
  'REST APIs': ['PolicyGuard AI'],
  Microservices: ['Payment Gateway System'],
  'JWT Auth': ['Multi-Tenant SaaS Platform'],
  'Git / GitHub': ['GitHub Foundations'],
  PostgreSQL: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  MongoDB: ['MongoDB Certified Associate Developer'],
  DBMS: ['NPTEL Database Management System', 'Oracle Database Foundations'],
  DSA: ['AlgoUniversity Tech Fellow', '850+ problems solved'],
  'Cloud Computing (AWS)': ['AWS Certified AI Practitioner', 'AWS Academy Cloud Foundations'],
  'Machine Learning': ['B.Tech AI & ML', 'NPTEL Deep Learning'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Foundation: Infosys Era',
    period: '2015 – 2017',
    synopsis: 'Started professional journey at Infosys — driving IT infrastructure transformation and telecom solutions.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Joined Infosys as a Systems Engineer — foundational role in infrastructure management and telecom operations.',
        tags: ['Infosys', 'Systems Engineer', 'IT Infrastructure'],
        runtime: 'Jun 2015 – Nov 2017',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Service Virtualization Pioneer',
        description: 'Pioneered service virtualization testing — reducing dependencies and accelerating test cycles in telecom platforms.',
        tags: ['Service Virtualization', 'Testing', 'Telecom'],
        runtime: '2015 – 2017',
        palette: crimson,
      },
      {
        code: 'S01 E03',
        title: 'Infrastructure Expert',
        description: 'Mastered infrastructure management tools, Oracle databases, and CI/CD pipelines — supporting 50+ production systems.',
        tags: ['Oracle', 'Infrastructure', 'Production Support'],
        runtime: 'Infosys tenure',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Innovation: Entity Solutions',
    period: '2017 – 2019',
    synopsis: 'Moved to Entity Solutions — advanced expertise in cloud architecture and DevOps modernization.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Cloud Architect',
        description: 'Led cloud migration initiatives — transitioning legacy telecom platforms from on-premise to AWS and Azure.',
        tags: ['AWS', 'Azure', 'Cloud Migration', 'Telecom'],
        runtime: 'Dec 2017 – Aug 2019',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'DevOps Architect',
        description: 'Designed and implemented CI/CD pipelines — Jenkins, Docker, Kubernetes orchestration, reducing deployment time by 70%.',
        tags: ['DevOps', 'Jenkins', 'Kubernetes', 'Docker'],
        runtime: 'Entity Solutions',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'Monitoring & Observability',
        description: 'Implemented enterprise monitoring — Splunk, New Relic, SonarQube — ensuring 99.99% system reliability.',
        tags: ['Splunk', 'New Relic', 'SonarQube', 'Observability'],
        runtime: '2017 – 2019',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Scale: Cognizant Leadership',
    period: '2019 – 2024',
    synopsis: 'Escalated at Cognizant — managing 31 critical telecom applications, leading architecture and digital transformation.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Solution Architect',
        description: 'Elevated to Solution Architect role — owning architecture for 31 mission-critical telecom applications across 4 carriers.',
        tags: ['Solution Architecture', '31 Applications', 'Telecom', 'Cognizant'],
        runtime: 'Sep 2019 – 2024',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Platform & Service Virtualization SME',
        description: 'Built expertise as SME in Service Virtualization — mentoring teams, architecting complex test infrastructure, reducing test cycles by 60%.',
        tags: ['SME', 'Service Virtualization', 'Mentoring'],
        runtime: 'Cognizant core role',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'Cloud Transformation Lead',
        description: 'Led cloud transformation for telecom customers — AWS/Azure migration, Kubernetes orchestration, multi-cloud strategy.',
        tags: ['Cloud Leadership', 'Kubernetes', 'AWS', 'Azure', 'Multi-cloud'],
        runtime: '2019 – 2024',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'AI Evolution: AI & GenAI Solutions',
    period: '2024 – Present',
    synopsis: 'Pioneering AI and Generative AI solutions — agentic AI, LLMs, and intelligent automation for enterprise telecom.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Agentic AI Architect',
        description: 'Architecting agentic AI solutions — autonomous agents powered by LLMs for customer support, operations, and business intelligence.',
        tags: ['Agentic AI', 'LLM', 'Autonomous Agents', 'GenAI'],
        runtime: '2024 – Present',
        palette: jade,
      },
      {
        code: 'S04 E02',
        title: 'AI Accelerator & Certifications',
        description: 'Completed Gemini Enterprise Deployment, AWS Advanced Agentic AI, and AI Accelerator programs — deepening AI expertise.',
        tags: ['Gemini', 'AWS AI', 'AI Certifications'],
        runtime: 'Recent achievements',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'Digital Transformation Lead',
        description: 'Leading enterprise-wide AI transformation — integrating GenAI into telecom operations, customer engagement, and product innovation.',
        tags: ['Digital Transformation', 'GenAI', 'Enterprise AI', 'Cognizant'],
        runtime: 'Current trajectory',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: 'The Next Frontier',
    period: 'Now streaming',
    synopsis: '12+ years of telecom excellence — architecting intelligent, cloud-native, AI-powered solutions for the future.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Innovation Continues',
        description: 'Pushing boundaries in agentic AI, edge computing, and advanced cloud orchestration for next-generation telecom.',
        tags: ['System Design', 'AWS', 'Machine Learning'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Years of excellence', title: '12+ Years', detail: 'Telecom infrastructure • Cloud architecture • AI solutions', palette: crimson },
  { label: 'Core expertise', title: 'Service Virtualization SME', detail: '60% test cycle reduction • 100+ project engagements', palette: amber },
  { label: 'Cloud leadership', title: 'Multi-Cloud Architect', detail: 'AWS • Azure • GCP — 50+ migrations completed', palette: ocean },
  { label: 'Critical systems owned', title: '31 Applications', detail: 'Mission-critical telecom platforms across 4 carriers', palette: violet },
  { label: 'AI transformation', title: 'Agentic AI Pioneer', detail: 'LLM-based agents • GenAI integration • Enterprise automation', palette: jade },
  { label: 'DevOps mastery', title: 'CI/CD & Kubernetes', detail: '70% deployment time reduction • 99.99% uptime', palette: crimson },
  { label: 'Enterprise monitoring', title: 'Splunk • New Relic', detail: 'Real-time observability for 31 critical applications', palette: amber },
  { label: 'Latest achievement', title: 'Gemini & AWS Agentic AI', detail: 'Advanced certifications in enterprise AI deployment', palette: ocean },
  { label: 'Database credential', title: 'MongoDB', detail: 'Certified Associate Developer', palette: jade },
  { label: 'Current focus', title: 'System Design', detail: 'with Cloud (AWS) & Machine Learning', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Career',
    title: '12+ Years in Telecom',
    lines: ['Solution Architect · Cognizant • Entity Solutions • Infosys', '2015 – Present · Leading Digital Transformation'],
    chips: ['Cognizant', 'Solution Architect', 'Telecom'],
  },
  {
    kicker: 'Core Expertise',
    title: 'Service Virtualization SME',
    lines: ['Reduced test cycles by 60% · 100+ mission-critical projects', 'Platform architect across 4 global carriers · 31 critical applications'],
    chips: ['SME', 'Testing', 'Infrastructure'],
  },
  {
    kicker: 'Cloud Mastery',
    title: 'Multi-Cloud Architect',
    lines: ['AWS · Azure · GCP — 50+ enterprise migrations', 'Kubernetes orchestration · 99.99% uptime · DevOps transformation'],
    chips: ['AWS', 'Azure', 'Kubernetes'],
  },
  {
    kicker: 'AI Innovation',
    title: 'Agentic AI Pioneer',
    lines: ['Generative AI solutions · LLM-based intelligent agents', 'Gemini Enterprise · AWS Advanced Agentic AI · Enterprise automation'],
    chips: ['GenAI', 'Agents', 'LLM'],
  },
  {
    kicker: 'Leadership Track',
    title: 'Architect & Mentor',
    lines: ['Solutions Architecture for enterprise telecom platforms', 'Team leadership · Technical mentoring · Enterprise transformation'],
    chips: ['Leadership', 'Mentoring', 'Architecture'],
  },
  {
    kicker: 'Technical Depth',
    title: '20+ Years Java · Full-Stack',
    lines: ['Service Virtualization · Cloud Architecture · DevOps & Kubernetes', 'Oracle · PostgreSQL · MySQL · Splunk · New Relic · SonarQube'],
    chips: ['Java', 'DevOps', 'Architecture'],
  },
  {
    kicker: 'Current Focus',
    title: 'Next-Gen Telecom',
    lines: ['Agentic AI · Edge Computing · Advanced Cloud Orchestration', 'Building intelligent, scalable solutions for tomorrow'],
  },
];

export type ProfileId = 'abinash' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'abinash',
    name: 'Abinash',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
