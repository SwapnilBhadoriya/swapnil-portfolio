export const portfolioConfig = {
  personal: {
    name: 'Swapnil Singh',
    title: 'Full Stack Developer & Cloud Architect',
    tagline: 'Available for Opportunities',
    bio: 'I craft enterprise-grade web applications and cloud-native systems that scale. Passionate about clean architecture, real-time data, and delightful user experiences.',
    extendedBio: 'Results-driven full stack developer with 3+ years of hands-on experience designing and delivering scalable web applications, backend systems, and cloud-native architectures. Specialized in React JS, Node.js, Laravel, and AWS.',
    email: 'swapnilsbwork@gmail.com',
    location: 'Gandhinagar, India',
    timezone: 'GMT+5:30',
    avatar: '/avatar.jpg',
    resume: '/Swapnil Singh.pdf',
  },

  social: {
    github: 'https://github.com/SwapnilBhadoriya',
    linkedin: 'https://www.linkedin.com/in/swapnil-bhadoriya',
    email: 'mailto:swapnilsbwork@gmail.com',
  },

  stats: [
    { value: '3+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Shipped' },
    { value: '100%', label: 'Client Satisfaction' },
  ],

  about: {
    title: 'About Me',
    paragraphs: [
      "I bridge the gap between complex backend systems and delightful user experiences. With expertise spanning React, Node.js, Laravel, and AWS, I focus on building software that's not just functional—but elegant, maintainable, and scalable.",
      "At Argusoft India, I've architected enterprise-grade modules serving thousands of users, built real-time analytics dashboards with AWS Kinesis, and led content migration initiatives. I thrive at the intersection of technical excellence and practical problem-solving.",
      "When I'm not shipping features, you'll find me optimizing that one database query that's been bugging me at 2am, exploring new cloud technologies, or mentoring fellow developers. I believe great software is built by people who genuinely care about their craft.",
    ],
  },

  experience: [
    {
      title: 'Solution Analyst',
      company: 'Argusoft India Pvt. Ltd.',
      location: 'Gandhinagar, India',
      period: 'Jul 2025 – Present',
      award: undefined,
      highlights: [
        'Architected data computation workflows processing 100K+ records daily with improved accuracy and scalability',
        'Built automated meeting & notification system with background task scheduling, reducing manual coordination by 80%',
        'Led CMS migration of 5000+ multilingual content pages with full data integrity using custom automation scripts',
        'Optimized enterprise platform performance, achieving 40% faster page loads through query optimization and caching',
      ],
      tags: ['Data Engineering', 'Automation', 'CMS Migration', 'Performance'],
    },
    {
      title: 'Programmer Analyst',
      company: 'Argusoft India Pvt. Ltd.',
      location: 'Gandhinagar, India',
      period: 'Jul 2023 – Jul 2025',
      award: 'Employee of the Month',
      highlights: [
        'Engineered full-stack modules with React, AWS Amplify & Cognito serving 10K+ users with 99.9% uptime',
        'Built real-time analytics dashboards with AWS Kinesis & ApexCharts, reducing data latency from minutes to seconds',
        'Delivered zero-downtime CI/CD pipeline with GitHub Actions, S3 & CloudFront for seamless deployments',
        'Developed interactive GIS dashboard with Next.js & Mapbox featuring live heatmaps and boundary overlays',
        'Modernized legacy Laravel systems reducing technical debt by 60% through framework upgrades and query optimization',
      ],
      tags: ['React', 'AWS', 'Next.js', 'Laravel', 'GIS', 'Real-time Analytics'],
    },
    {
      title: 'Programmer Analyst Intern',
      company: 'Argusoft India Pvt. Ltd.',
      location: 'Gandhinagar, India',
      period: 'Jan 2023 – Jul 2023',
      award: undefined,
      highlights: [
        'Developed Billing Module with Vue.js & Node.js/Express handling invoice flows and payment integrations',
        'Built RESTful APIs with proper authentication, validation, and comprehensive API documentation',
      ],
      tags: ['Vue.js', 'Node.js', 'Express.js', 'API Development'],
    },
  ],

  skills: [
    {
      category: 'Core Languages',
      icon: 'code',
      description: 'Foundation for building robust applications',
      items: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'PHP', 'Python'],
    },
    {
      category: 'Frontend & UI',
      icon: 'layout',
      description: 'Crafting responsive, interactive interfaces',
      items: ['React & Hooks', 'Next.js', 'Redux', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      category: 'Backend & APIs',
      icon: 'server',
      description: 'Building scalable server-side solutions',
      items: ['Node.js', 'Express.js', 'Laravel', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Cloud & DevOps',
      icon: 'cloud',
      description: 'Infrastructure and deployment automation',
      items: ['AWS (S3, EC2, RDS, Kinesis)', 'Azure', 'Docker', 'CI/CD', 'GitHub Actions'],
    },
    {
      category: 'Specialized',
      icon: 'target',
      description: 'Domain expertise and advanced capabilities',
      items: ['Real-time Systems', 'GIS & Mapbox', 'Stripe', 'Performance Tuning', 'Microservices'],
    },
  ],

  education: [
    {
      school: 'Shivajirao Kadam Institute of Technology & Management',
      university: 'RGPV',
      location: 'Indore, India',
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science & Engineering',
      period: '2019 - 2023',
      cgpa: '8.40/10',
      highlights: [
        'Comprehensive coursework in Data Structures, Algorithms, DBMS, and Cloud Computing',
        'Led technical projects focusing on full-stack development and cloud-native architectures',
        'Graduated with distinction in computer science principles and modern web development',
      ],
    },
  ],

  projects: [
    {
      title: 'CricWale',
      subtitle: 'Live Cricket Platform',
      description:
        'Full-featured cricket web app delivering real-time scores, match statistics, blogs, and series data to thousands of cricket fans worldwide.',
      longDescription:
        'Built from scratch to handle high-traffic during live matches with optimized caching strategies and real-time data synchronization.',
      link: 'www.cricwale.in',
      tech: ['React JS', 'Context API', 'REST APIs', 'Real-time Updates'],
      metrics: [
        { label: 'Monthly Users', value: '5K+' },
        { label: 'API Calls/Day', value: '50K+' },
      ],
      features: [
        'Live score updates with sub-second latency',
        'Comprehensive match statistics and player profiles',
        'Curated cricket blogs and news',
        'Mobile-responsive design',
      ],
      type: 'personal',
      featured: true,
    },
    {
      title: 'GIS Analytics Dashboard',
      subtitle: 'Enterprise Geospatial Platform',
      description:
        'Interactive geographic information system with layered spatial visualizations including heatmaps, boundary overlays, and real-time data rendering.',
      longDescription:
        'Architected for enterprise use with support for massive datasets and complex geospatial queries.',
      link: undefined,
      tech: ['Next.js', 'Mapbox GL', 'GeoServer', 'PostgreSQL/PostGIS'],
      metrics: [
        { label: 'Data Points', value: '1M+' },
        { label: 'Map Layers', value: '15+' },
      ],
      features: [
        'Interactive heatmaps and choropleth maps',
        'Real-time boundary and line overlays',
        'Custom layer controls and filtering',
        'Export and reporting capabilities',
      ],
      type: 'enterprise',
      featured: true,
    },
    {
      title: 'Real-time Analytics Platform',
      subtitle: 'AWS-powered Data Pipeline',
      description:
        'Enterprise analytics dashboard processing live streaming data with AWS Kinesis, enabling instant business insights and decision-making.',
      longDescription:
        'Designed to handle high-throughput data streams with fault tolerance and automatic scaling.',
      link: undefined,
      tech: ['React', 'AWS Kinesis', 'ApexCharts', 'Lambda', 'DynamoDB'],
      metrics: [
        { label: 'Events/Second', value: '10K+' },
        { label: 'Latency', value: '<1s' },
      ],
      features: [
        'Real-time streaming data visualization',
        'Custom dashboard widgets and layouts',
        'Automated alerts and notifications',
        'Historical data analysis and trends',
      ],
      type: 'enterprise',
      featured: true,
    },
    {
      title: 'Content Migration Automation',
      subtitle: 'CMS Data Pipeline',
      description:
        'Automated migration system that transferred 5000+ multilingual content pages from legacy CMS to modern platform with full data integrity.',
      longDescription:
        'Built custom parsers and validators to ensure zero data loss during migration.',
      link: undefined,
      tech: ['Python', 'Node.js', 'PostgreSQL', 'REST APIs'],
      metrics: [
        { label: 'Pages Migrated', value: '5K+' },
        { label: 'Languages', value: '3' },
      ],
      features: [
        'Automated content parsing and transformation',
        'Multi-language support with encoding handling',
        'Validation and integrity checks',
        'Rollback capabilities',
      ],
      type: 'enterprise',
      featured: false,
    },
  ],

  contact: {
    title: "Let's Build Something Great",
    description:
      "I'm always excited to discuss new opportunities, challenging projects, or just chat about tech. Whether you're looking for a full-stack developer or need help architecting cloud solutions, I'd love to hear from you.",
    availability: 'Currently open to full-time opportunities and select freelance projects',
    contacts: [
      {
        label: 'Email',
        value: 'swapnilsbwork@gmail.com',
        href: 'mailto:swapnilsbwork@gmail.com',
        icon: 'mail',
        primary: true,
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/swapnil-bhadoriya',
        href: 'https://www.linkedin.com/in/swapnil-bhadoriya',
        icon: 'linkedin',
        primary: false,
      },
      {
        label: 'GitHub',
        value: 'github.com/SwapnilBhadoriya',
        href: 'https://github.com/SwapnilBhadoriya',
        icon: 'github',
        primary: false,
      },
    ],
  },

  navigation: [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],

  seo: {
    title: 'Swapnil Singh — Full Stack Developer & Cloud Architect',
    description:
      'Portfolio of Swapnil Singh, a full-stack developer specializing in React, Node.js, AWS, and cloud-native architectures. 3+ years building enterprise-grade solutions.',
    keywords: [
      'Full Stack Developer',
      'React Developer',
      'Node.js',
      'AWS',
      'Cloud Architect',
      'Gandhinagar',
      'India',
    ],
  },
} as const;

// Type exports
export type PortfolioConfig = typeof portfolioConfig;
export type Project = (typeof portfolioConfig.projects)[number];
export type Experience = (typeof portfolioConfig.experience)[number];
export type Skill = (typeof portfolioConfig.skills)[number];
