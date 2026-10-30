import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'sanchay',
    slug: 'sanchay-resource-optimization',
    title: 'SANCHAY: AI-Powered Resource Optimization Platform',
    subtitle: 'Centralized Platform Integrating Multi-Vector Utility, Workforce, and Predictive Insights',
    category: 'Optimization Platforms',
    status: 'Implemented Prototype / In Development',
    statusType: 'prototype',
    featured: true,
    shortDescription:
      'A centralized resource optimization platform built with Java, Spring Boot, and MySQL, unifying electricity, water, workforce, machine, and maintenance data with JWT security.',
    problemStatement:
      'Industrial and institutional facilities manage electricity, water, workforce schedules, and equipment maintenance in disconnected silos, leading to undetected resource waste, high utility bills, and unexpected equipment downtime.',
    architectureOverview:
      'Engineered a centralized backend system using Java, Spring Boot, and MySQL that consolidates disparate utility and asset streams into a unified relational model. Incorporates real-time monitoring, anomaly detection heuristics, predictive analytics, and secure JWT token-based authentication.',
    roleAndContributions: [
      'Built backend REST services with Java and Spring Boot for resource telemetry ingestion and aggregation.',
      'Designed the relational MySQL schema to model electricity, water, workforce shifts, and machine health metrics.',
      'Implemented real-time monitoring and anomaly detection to flag atypical consumption spikes and maintenance delays.',
      'Constructed predictive insight logic to generate actionable recommendations that reduce resource wastage.',
      'Secured all user and administrator API endpoints with stateless JWT (JSON Web Token) authentication.',
    ],
    techStack: [
      'Java',
      'Spring Boot',
      'MySQL',
      'JWT Authentication',
      'REST APIs',
      'Predictive Analytics',
      'Anomaly Detection',
    ],
    keyFeatures: [
      'Centralized multi-resource data integration across electricity, water, workforce, and machines.',
      'Real-time consumption telemetry and anomaly detection for off-hour spikes.',
      'Predictive maintenance scheduling tracking asset hours against threshold limits.',
      'Actionable operational recommendations to optimize shift distribution and minimize waste.',
      'Secure, stateless JWT (JSON Web Token) user authentication and authorization.',
    ],
    implementationStatus: {
      implemented: [
        'Java & Spring Boot backend services and REST API controllers',
        'Relational MySQL schema for multi-vector resource tracking',
        'JWT token-based authentication and role filtering',
        'Real-time anomaly detection heuristics and monitoring endpoints',
        'Predictive recommendation engine rules',
      ],
      inProgress: [
        'Automated PDF weekly audit report export',
        'Live telemetry WebSocket dashboard streaming',
      ],
      planned: [
        'Hardware IoT MQTT broker ingestion pipeline',
        'Seasonal machine learning forecasting models',
      ],
    },
    keyLearnings: [
      'Normalizing varied resource units (kWh, liters, machine hours) into an intuitive unified metric requires domain-specific data contracts.',
      'Stateless JWT tokens provide lightweight, robust security for decoupled frontend-backend architectures.',
      'Alert fatigue can be eliminated by calibrating dynamic baselines rather than using static thresholds.',
    ],
    futureRoadmap: [
      'Deploy Dockerized cloud demonstration on Render/Railway.',
      'Publish open-source algorithmic core for resource scheduling.',
    ],
  },
  {
    id: 'sanjeev',
    slug: 'sanjeev-rural-business-companion',
    title: 'SANJEEV: AI-Powered Rural Business Companion',
    subtitle: 'Market Analysis, Financial Planning & Scheme Recommendation Platform for Rural Entrepreneurs',
    category: 'AI Systems & Platforms',
    status: 'Containerized Prototype',
    statusType: 'prototype',
    featured: true,
    shortDescription:
      'An AI-powered platform built with Java, APIs, JWT authentication, and Docker, helping rural entrepreneurs analyze local markets, estimate capital requirements, and discover government support schemes.',
    problemStatement:
      'Aspiring rural entrepreneurs face significant hurdles accessing tailored business intelligence, understanding capital requirements, and navigating complex government support schemes due to fragmented information and language barriers.',
    architectureOverview:
      'Constructed a backend platform using Java and RESTful APIs wrapped in Docker containers. Integrates market estimation models, financial calculators, and government scheme recommendation algorithms delivered through a responsive, multilingual user interface with secure JWT authentication.',
    roleAndContributions: [
      'Developed core backend services using Java and RESTful APIs to analyze local market dynamics and business opportunities.',
      'Built financial requirement estimation algorithms calculating startup capital, operational reserves, and break-even points.',
      'Engineered recommendation engine matching entrepreneurial profiles to eligible government support schemes and subsidies.',
      'Designed responsive, multilingual frontend interfaces to deliver accessible, data-driven growth insights.',
      'Secured user access with JWT (JSON Web Token) authentication and containerized the full service with Docker.',
    ],
    techStack: [
      'Java',
      'RESTful APIs',
      'JWT Authentication',
      'Docker',
      'AI Recommendation Models',
      'Multilingual UI',
      'MySQL',
    ],
    keyFeatures: [
      'Local market analysis engine identifying viable rural commercial opportunities.',
      'Automated financial calculator estimating capital requirements and operational expenses.',
      'Government scheme recommendation engine matching entrepreneur eligibility with state/central support programs.',
      'Responsive, multilingual interface tailored for accessibility across diverse user demographics.',
      'Stateless JWT authentication securing profile and financial information.',
      'Docker containerization ensuring consistent deployment and environment parity.',
    ],
    implementationStatus: {
      implemented: [
        'Java backend API controllers and business evaluation services',
        'Capital requirement and operational cost calculation models',
        'Government subsidy and scheme dataset mapping with recommendation logic',
        'Stateless JWT user authentication layer',
        'Dockerfile and containerized runtime environment',
      ],
      inProgress: [
        'Enhanced vernacular language model support for voice-driven queries',
        'Offline-first caching for regions with low bandwidth',
      ],
      planned: [
        'Direct micro-lending API integration with cooperative rural banks',
        'Community entrepreneur discussion forum with peer reviews',
      ],
    },
    keyLearnings: [
      'Building for rural users requires simplifying complex financial jargon into clear, actionable metrics.',
      'Docker containerization drastically simplifies deployment by guaranteeing exact JVM and dependency runtimes.',
      'Recommendation algorithms must prioritize schemes with active operational funding and local availability.',
    ],
    futureRoadmap: [
      'Integrate voice-to-text input in regional languages.',
      'Deploy live demo on managed cloud container services.',
    ],
  },
  {
    id: 'aria',
    slug: 'aria-release-intelligence',
    title: 'ARIA: Agentic Release Intelligence Architecture',
    subtitle: 'Closed-Loop Multi-Agent Framework Connecting Production Incidents to CI/CD',
    category: 'AI & Multi-Agent',
    status: 'Proposed Architecture & Simulation',
    statusType: 'architecture',
    featured: true,
    shortDescription:
      'A multi-agent architecture designed to close the feedback loop between production incidents and upstream CI/CD pipelines using governed, attributable telemetry.',
    problemStatement:
      'In traditional software delivery, post-incident reviews remain static documents decoupled from the build system. As a result, regressions recur because CI test suites lack dynamic context regarding recent production vulnerabilities.',
    architectureOverview:
      'ARIA decomposes release intelligence into five specialized agents communicating over an Attributable Feedback Protocol (AFP). Each agent is bound by strict human-in-the-loop governance policies to prevent automated release derailments while autonomously reprioritizing test suites based on real failure modes.',
    roleAndContributions: [
      'Architected the five-agent release intelligence lifecycle model and agent interaction state machines.',
      'Authored the Attributable Feedback Protocol (AFP) specification ensuring cryptographic lineage of incident evidence.',
      'Designed human-approval guardrails ensuring automated agents cannot unilaterally block production without escalation.',
      'Conducted synthetic simulation scenarios testing test-suite reprioritization efficiency under modeled failure vectors.',
    ],
    techStack: [
      'Multi-Agent Systems',
      'System Architecture',
      'CI/CD Pipelines',
      'Attributable Feedback Protocol',
      'Java / Spring Boot',
      'PostgreSQL',
    ],
    keyFeatures: [
      'Five specialized agent personas (BIA, COA, RCA, DCA, IRA) with bounded responsibilities.',
      'Attributable Feedback Protocol (AFP) connecting production root causes directly to build-stage risk scores.',
      'Dynamic regression test reprioritization based on recent incident signatures.',
      'Strict human-in-the-loop approval gates before any deployment canary degradation or release veto.',
      'Simulated scenario testbed validating agent consensus under high incident frequency.',
    ],
    agents: [
      {
        code: 'BIA',
        name: 'Build Intelligence Agent',
        role: 'Upstream Risk Scoring',
        responsibility:
          'Analyzes code delta, dependency changes, and historical failure vectors to calculate build risk before pipeline execution.',
      },
      {
        code: 'COA',
        name: 'CI Orchestration Agent',
        role: 'Test Suite Dynamic Scheduler',
        responsibility:
          'Prioritizes high-risk test suites and selects targeted regression matrices using feedback from previous production incidents.',
      },
      {
        code: 'RCA',
        name: 'Release Control Agent',
        role: 'Governance & Release Gates',
        responsibility:
          'Evaluates pipeline artifacts against organizational release policies and issues cryptographic go/no-go recommendations to human approvers.',
      },
      {
        code: 'DCA',
        name: 'Deployment Canary Agent',
        role: 'Real-Time Blast Radius Monitor',
        responsibility:
          'Monitors canary deployment metrics (error rates, latency thresholds, resource spikes) during live canary rollout stages.',
      },
      {
        code: 'IRA',
        name: 'Incident Response Agent',
        role: 'Root Cause Attribution & Feedback',
        responsibility:
          'Ingests production telemetry during incidents, aggregates stack traces, and synthesizes attributable feedback tokens for upstream agents.',
      },
    ],
    attributableFeedbackProtocol: {
      summary:
        'The Attributable Feedback Protocol (AFP) creates immutable, traceable incident telemetry records that map production stack traces and log anomalies back to specific code commits, test suites, and deployment batches.',
      safeguards: [
        'Immutable Cryptographic Hashing: Every feedback token contains a verifiable parent commit and deployment ID.',
        'Human Approval Enforcement: Critical release stops require authenticated engineering lead sign-off.',
        'Anti-Thrashing Thresholds: Prevents cascading false positives from over-biasing the CI test scheduler.',
      ],
    },
    simulatedScenarios: [
      {
        scenario: 'Simulated Database Connection Pool Starvation',
        observedEffect:
          'IRA attributed production latency spikes to unindexed join; COA promoted DB-heavy integration tests to Stage 1 of subsequent builds.',
        isSimulated: true,
      },
      {
        scenario: 'Third-Party Webhook Timeout Canary Drift',
        observedEffect:
          'DCA detected p99 degradation at 5% rollout; generated mitigation ticket and prompted RCA canary pause.',
        isSimulated: true,
      },
    ],
    implementationStatus: {
      implemented: [
        'Architectural whitepaper & agent interaction state specifications',
        'Attributable Feedback Protocol schema definition',
        'Synthetic scenario simulation engine and test cases',
        'Comprehensive GitHub documentation and architecture diagrams',
      ],
      inProgress: [
        'Agent communication protocol prototyping in Python',
        'Mock CI/CD webhook event pipeline',
      ],
      planned: [
        'Spring Boot backend service for central agent registry',
        'PostgreSQL schema for persistent AFP telemetry storage',
        'Interactive live demonstration dashboard with WebSocket event stream',
      ],
    },
    githubUrl: 'https://github.com/rajratanpcu/ARIA',
    keyLearnings: [
      'Multi-agent systems require rigorous boundary constraints and clear fallback paths to prevent deadlocks.',
      'Simulations provide essential architectural validation before committing to complex distributed infrastructure.',
      'Human-in-the-loop governance is a strict operational prerequisite for any AI agent touching CI/CD releases.',
    ],
    futureRoadmap: [
      'Build the production Spring Boot microservice orchestrator.',
      'Integrate with GitHub Actions via custom Webhook receivers.',
      'Develop real-time SVG topology visualization for active agent consensus.',
    ],
  },
  {
    id: 'kta-erp',
    slug: 'kta-erp-business-system',
    title: 'KTA ERP: Multi-Godown Inventory & Business Management',
    subtitle: 'Production-Grade Business ERP for Wholesale & Event Decor Operations',
    category: 'Enterprise ERP',
    status: 'Deployed Prototype',
    statusType: 'deployed',
    featured: false,
    shortDescription:
      'A business ERP supporting multi-warehouse inventory across 4 regional godowns, double-entry ledgers, and real Vyapar data migration (178 invoices, ₹1.53 Cr sales).',
    problemStatement:
      'Kushwaha Tent Agency (Hajipur, Bihar) operates wholesale distribution across 4 distinct warehouses. Managing 107 products, 37 party credit ledgers, and ₹1.53+ Cr in historical sales via spreadsheets caused stock discrepancies and audit delays.',
    architectureOverview:
      'Built with a decoupled, high-performance architecture: React 18 + TypeScript on Vercel connecting to a Java 17 + Spring Boot 3.1.5 backend on Render with managed PostgreSQL. Engineered under strict native Windows constraints (Zero Docker) with Flyway migrations V1–V8 and transactional Excel ingestion.',
    roleAndContributions: [
      'Engineered the frontend client using React 18, TypeScript, Tailwind CSS, and Lucide icons.',
      'Developed backend REST APIs using Java 17, Spring Boot, Spring Data JPA, and Flyway database migrations.',
      'Implemented robust Vyapar Excel migration pipeline processing 178 invoices with atomic rollback.',
      'Designed multi-godown stock transfer logic (Central GDN-HAJIPUR, GDN-VAISHALI, GDN-PATNA-NORTH, GDN-MUZAFFARPUR).',
    ],
    techStack: [
      'React 18 & TypeScript',
      'Java 17 & Spring Boot',
      'PostgreSQL',
      'Spring Data JPA',
      'Flyway Migrations',
      'Vercel & Render',
    ],
    keyFeatures: [
      'Multi-godown inventory management tracking stock across 4 regional warehouses.',
      'Reconciled historical financial ledger: ₹1.53 Cr invoiced sales across 178 invoices with zero data loss.',
      'Vyapar Excel data import engine with atomic multi-sheet validation and rollback.',
      'Customer & party credit ledger with outstanding balance calculations and payment receipt tracking.',
    ],
    implementationStatus: {
      implemented: [
        'Complete React 18 + TypeScript frontend UI deployed to Vercel',
        'Spring Boot 3.1.5 backend service deployed to Render',
        'PostgreSQL schema with Flyway migrations V1 through V8',
        'Vyapar multi-sheet Excel ingestion engine with transactional rollback',
      ],
      inProgress: [
        'Automated GST tax report generation and export',
      ],
      planned: [
        'n8n workflow triggers for payment reminder notifications via WhatsApp/SMS',
      ],
    },
    liveDemoUrl: 'https://frontend-liard-delta-44.vercel.app',
    keyLearnings: [
      'Real-world business data requires defensive schema design and transaction rollbacks.',
      'Financial applications must utilize BigDecimal arithmetic to prevent rounding discrepancies.',
    ],
    futureRoadmap: [
      'Incorporate automated n8n webhook pipelines for customer payment receipts.',
    ],
  },
];
