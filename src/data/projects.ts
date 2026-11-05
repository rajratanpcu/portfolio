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
      'Java 17',
      'Spring Boot 3.x',
      'MySQL 8.0',
      'JWT Authentication',
      'REST APIs',
      'Predictive Analytics',
      'Anomaly Detection',
      'Maven',
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
    githubUrl: 'https://github.com/rajratanpcu/SANCHAY',
    liveDemoUrl: 'https://sanchay-gwhb.onrender.com/',
    prototypeUrl: 'https://sanchay-prototype.vercel.app',
    documentationUrl: 'https://github.com/rajratanpcu/SANCHAY/wiki',
    screenshots: [
      '/images/projects/sanchay-dashboard.svg',
      '/images/projects/sanchay-architecture.svg',
    ],
    // Enhanced case study fields
    accentColors: {
      primary: '#0ea5e9',
      secondary: '#06b6d4',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
    },
    architectureDiagrams: [
      {
        type: 'mermaid',
        title: 'System Architecture Overview',
        description: 'High-level architecture showing data flow from sensors through Spring Boot services to MySQL and the recommendation engine.',
        content: `graph TD
    A[IoT Sensors: Electricity, Water, Machines] --> B[Spring Boot REST API]
    B --> C[(MySQL 8.0)]
    C --> D[Anomaly Detection Engine]
    C --> E[Predictive Analytics Engine]
    D --> F[Alerting & Notification Service]
    E --> G[Recommendation API]
    F --> H[Admin Dashboard]
    G --> H
    B --> I[JWT Auth Service]
    I --> B
    style A fill:#0ea5e9,color:#fff
    style B fill:#06b6d4,color:#fff
    style C fill:#0891b2,color:#fff
    style D fill:#0284c7,color:#fff
    style E fill:#0369a1,color:#fff`
      },
      {
        type: 'mermaid',
        title: 'Database Schema Relationships',
        description: 'Core entity relationships for multi-resource tracking across electricity, water, workforce, and machine domains.',
        content: `erDiagram
    RESOURCE_METER ||--o{ TELEMETRY_READING : "generates"
    RESOURCE_METER {
      bigint id PK
      varchar type
      varchar location
      varchar unit
      jsonb metadata
    }
    TELEMETRY_READING {
      bigint id PK
      bigint meter_id FK
      timestamp recorded_at
      decimal value
      jsonb tags
    }
    WORKFORCE_SHIFT ||--o{ SHIFT_ASSIGNMENT : "contains"
    WORKFORCE_SHIFT {
      bigint id PK
      timestamp start_time
      timestamp end_time
      varchar shift_type
    }
    SHIFT_ASSIGNMENT {
      bigint id PK
      bigint shift_id FK
      bigint employee_id FK
      varchar role
    }
    MACHINE_ASSET ||--o{ MAINTENANCE_LOG : "has"
    MACHINE_ASSET {
      bigint id PK
      varchar name
      varchar category
      int threshold_hours
      int current_hours
    }
    MAINTENANCE_LOG {
      bigint id PK
      bigint asset_id FK
      timestamp performed_at
      varchar description
      boolean completed
    }`
      }
    ],
    challengesSolutions: [
      {
        challenge: 'Heterogeneous data normalization across electricity (kWh), water (liters), workforce (hours), and machines (operating hours) with different scales and update frequencies.',
        solution: 'Designed a unified telemetry schema with a polymorphic resource_meter table using JSONB metadata for type-specific attributes. Implemented unit-aware aggregation functions in SQL to normalize all resources to a common "resource unit" baseline for cross-domain analytics.',
        technicalDetail: 'Used MySQL generated columns for computed normalized values; Spring Data JPA @Formula annotations for ORM-level calculations.'
      },
      {
        challenge: 'Real-time anomaly detection on streaming telemetry without introducing latency spikes in the REST API response path.',
        solution: 'Decoupled detection from ingestion using a non-blocking CompletableFuture pipeline. Anomaly rules (statistical z-score, rate-of-change, threshold breach) execute asynchronously; alerts are persisted and pushed via WebSocket to the dashboard without blocking the HTTP 202 Accepted response.',
        technicalDetail: 'Spring @Async with custom ThreadPoolTaskExecutor; Redis-backed alert deduplication with TTL-based sliding windows.'
      },
      {
        challenge: 'Predictive maintenance scheduling with sparse historical data for new assets lacking sufficient failure history.',
        solution: 'Implemented a hybrid approach: rule-based thresholds (manufacturer-specified operating hours) as fallback, augmented by exponential smoothing forecasts once 10+ maintenance cycles exist. Used Bayesian updating to blend prior (manufacturer) and posterior (observed) distributions.',
        technicalDetail: 'Apache Commons Math for statistical computations; custom Spring EventListener for maintenance_due events triggering recommendation engine.'
      }
    ],
    implementationBreakdown: [
      {
        area: 'REST API Layer',
        description: 'ResourceMeterController, TelemetryController, AlertController with OpenAPI 3.0 docs. Pagination, filtering, and cursor-based streaming for large telemetry datasets.',
        files: ['src/main/java/.../controller', 'src/main/java/.../dto'],
        complexity: 'Medium'
      },
      {
        area: 'Data Layer',
        description: 'JPA entities with composite indexes on (meter_id, recorded_at) for time-series queries. Flyway migrations V1-V5 for schema evolution. Custom repository methods for time-bucket aggregations.',
        files: ['src/main/java/.../entity', 'src/main/resources/db/migration'],
        complexity: 'High'
      },
      {
        area: 'Anomaly Detection Engine',
        description: 'Pluggable RuleEngine interface with ZScoreRule, RateOfChangeRule, ThresholdRule implementations. Dynamic rule configuration via @ConfigurationProperties. Alert persistence with deduplication.',
        files: ['src/main/java/.../detection', 'src/main/java/.../alert'],
        complexity: 'High'
      },
      {
        area: 'Predictive Recommendations',
        description: 'RecommendationService generating shift optimization and maintenance scheduling suggestions. Exponential smoothing with configurable alpha. REST endpoint for dashboard consumption.',
        files: ['src/main/java/.../recommendation'],
        complexity: 'Medium'
      },
      {
        area: 'Security & Auth',
        description: 'JWT filter chain with RS256 asymmetric keys. Role-based access (ADMIN, OPERATOR, VIEWER). Token refresh rotation. Actuator endpoints secured separately.',
        files: ['src/main/java/.../security', 'src/main/java/.../config'],
        complexity: 'Medium'
      }
    ],
    screenshotGallery: [
      {
        url: '/images/projects/sanchay-dashboard.svg',
        caption: 'Main dashboard showing real-time resource consumption across all four domains with anomaly highlights',
        thumbnail: '/images/projects/sanchay-dashboard.svg'
      },
      {
        url: '/images/projects/sanchay-architecture.svg',
        caption: 'System architecture diagram illustrating data flow from sensors to recommendation engine',
        thumbnail: '/images/projects/sanchay-architecture.svg'
      }
    ]
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
    githubUrl: 'https://github.com/rajratanpcu/SANJEEV',
    liveDemoUrl: 'https://sanjeev-demo.vercel.app',
    prototypeUrl: 'https://sanjeev-prototype.vercel.app',
    documentationUrl: 'https://github.com/rajratanpcu/SANJEEV/wiki',
    screenshots: [
      '/images/projects/sanjeev-dashboard.svg',
      '/images/projects/sanjeev-market-analysis.svg',
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
    liveDemoUrl: 'https://aria-six-jet.vercel.app/',
    prototypeUrl: 'https://aria-prototype.vercel.app',
    documentationUrl: 'https://github.com/rajratanpcu/ARIA/wiki',
    screenshots: [
      '/images/projects/aria-architecture.svg',
      '/images/projects/aria-agent-topology.svg',
    ],
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
    // Enhanced case study fields
    accentColors: {
      primary: '#8b5cf6',
      secondary: '#a855f7',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #d946ef 100%)',
    },
    architectureDiagrams: [
      {
        type: 'mermaid',
        title: 'ARIA Multi-Agent Interaction Flow',
        description: 'Complete agent lifecycle showing how production incidents flow through the five agents back to CI/CD pipeline.',
        content: `graph TD
    subgraph "Production Environment"
      P1[Production Incident] --> IRA[IRA: Incident Response Agent]
      IRA -->|AFP Token| AFP[(AFP Telemetry Store)]
    end

    subgraph "ARIA Orchestration Layer"
      AFP --> BIA[BIA: Build Intelligence Agent]
      AFP --> COA[COA: CI Orchestration Agent]
      BIA -->|Risk Score| RCA[RCA: Release Control Agent]
      COA -->|Test Priority Matrix| RCA
    end

    subgraph "CI/CD Pipeline"
      RCA -->|Go/No-Go| DCA[DCA: Deployment Canary Agent]
      DCA -->|Metrics| CAN[Canary Deployment]
      CAN -->|Rollback Signal| RCA
    end

    subgraph "Governance"
      RCA -->|Escalation| HUMAN[Human Approver]
      HUMAN -->|Decision| RCA
    end

    style IRA fill:#8b5cf6,color:#fff
    style BIA fill:#a855f7,color:#fff
    style COA fill:#c084fc,color:#fff
    style RCA fill:#d946ef,color:#fff
    style DCA fill:#e879f9,color:#fff
    style AFP fill:#7c3aed,color:#fff
    style HUMAN fill:#fbbf24,color:#000`
      },
      {
        type: 'mermaid',
        title: 'Attributable Feedback Protocol (AFP) Token Structure',
        description: 'Cryptographic token schema ensuring immutable lineage from production incident to code commit.',
        content: `erDiagram
    AFP_TOKEN ||--|| INCIDENT : "references"
    AFP_TOKEN ||--|| COMMIT : "attributed_to"
    AFP_TOKEN ||--|| DEPLOYMENT : "deployed_in"
    AFP_TOKEN ||--|| TEST_SUITE : "impacts"

    AFP_TOKEN {
      uuid id PK
      string schema_version
      timestamp created_at
      string incident_id FK
      string commit_sha FK
      string deployment_id FK
      jsonb evidence
      string hash
      string parent_token_id
    }
    INCIDENT {
      uuid id PK
      timestamp occurred_at
      string service
      jsonb stack_trace
      jsonb logs
      string severity
    }
    COMMIT {
      string sha PK
      string repo
      string author
      timestamp committed_at
      jsonb files_changed
    }
    DEPLOYMENT {
      uuid id PK
      string environment
      string version
      timestamp deployed_at
      jsonb config
    }
    TEST_SUITE {
      uuid id PK
      string name
      string category
      int priority
      jsonb tags
    }`
      },
      {
        type: 'mermaid',
        title: 'Agent State Machines & Governance Gates',
        description: 'Formal state transitions for each agent with human-in-the-loop approval requirements.',
        content: `stateDiagram-v2
    [*] --> IDLE: Startup
    IDLE --> ANALYZING: Trigger Event
    ANALYZING --> RECOMMENDING: Analysis Complete
    RECOMMENDING --> AWAITING_APPROVAL: Critical Decision
    AWAITING_APPROVAL --> EXECUTING: Human Approve
    AWAITING_APPROVAL --> REJECTED: Human Reject
    EXECUTING --> COMPLETED: Action Done
    COMPLETED --> IDLE: Reset
    REJECTED --> IDLE: Reset

    note right of AWAITING_APPROVAL
      Human-in-the-loop REQUIRED for:
      - Release veto (RCA)
      - Canary pause (DCA)
      - Test suite reprioritization >50% (COA)
    end note

    stateDiagram-v2
    [*] --> IDLE
    IDLE --> MONITORING: Canary Started
    MONITORING --> DEGRADED: Metric Threshold Breach
    DEGRADED --> ESCALATING: Sustained > 2min
    ESCALATING --> PAUSED: Human Confirms
    PAUSED --> ROLLED_BACK: Auto Rollback
    ROLLED_BACK --> IDLE: Cleanup
    MONITORING --> HEALTHY: Metrics Normalized
    HEALTHY --> PROMOTED: Full Rollout
    PROMOTED --> IDLE: Complete`
      }
    ],
    challengesSolutions: [
      {
        challenge: 'Designing a multi-agent system where agents must coordinate without central orchestration while maintaining strict auditability of every decision.',
        solution: 'Implemented the Attributable Feedback Protocol (AFP) as an immutable event log with cryptographic hashing. Each agent emits AFP tokens containing parent commit SHA, deployment ID, and evidence payload. Tokens are chained via hash linking, creating an tamper-evident audit trail from production incident back to source code.',
        technicalDetail: 'SHA-256 chaining with Ed25519 signatures for non-repudiation. PostgreSQL advisory locks for token serialization. AFP schema versioned for forward compatibility.'
      },
      {
        challenge: 'Preventing CI/CD pipeline thrashing when agents over-react to transient production anomalies (false positives cascading into test suite instability).',
        solution: 'Designed anti-thrashing thresholds at three levels: (1) IRA requires 3+ correlated signals within 10min window before emitting AFP token, (2) COA applies exponential backoff to test priority changes (max 20% shift per build), (3) RCA enforces minimum 4-hour cooldown between release vetoes for same root cause category.',
        technicalDetail: 'Sliding window counters in Redis with Lua scripts for atomicity. Configurable via Spring @ConfigurationProperties. Circuit breaker pattern for agent communication failures.'
      },
      {
        challenge: 'Validating complex multi-agent interaction logic without production deployment — simulating realistic incident patterns and measuring agent consensus quality.',
        solution: 'Built a synthetic simulation engine generating parameterized incident scenarios (DB pool starvation, webhook timeout, memory leak, dependency failure). Engine replays historical telemetry patterns with injected faults. Measures: test reprioritization accuracy (precision@k), false positive rate, mean time to detection, and human escalation frequency.',
        technicalDetail: 'Python simulation harness with pytest parametrization. Prometheus metrics export for Grafana dashboards. Scenario definitions as YAML for version control.'
      }
    ],
    implementationBreakdown: [
      {
        area: 'Agent Specifications & AFP Schema',
        description: 'Formal agent interaction state machines (5 agents), AFP token JSON Schema v1.0, governance safeguard rules. Documented in GitHub wiki with Mermaid diagrams.',
        files: ['docs/architecture/', 'docs/afp-schema.json', 'docs/agent-specs/'],
        complexity: 'High'
      },
      {
        area: 'Simulation Engine',
        description: 'Python-based synthetic incident generator with configurable fault injection. Replays production telemetry patterns. Exports metrics for validation dashboards. 12 scenario templates implemented.',
        files: ['simulation/', 'simulation/scenarios/', 'simulation/metrics.py'],
        complexity: 'High'
      },
      {
        area: 'Agent Communication Prototyping',
        description: 'Python asyncio prototype for agent message passing over Redis Streams. Implements AFP token emission, validation, and chaining. Circuit breaker and retry logic.',
        files: ['prototype/agents/', 'prototype/comms/'],
        complexity: 'Medium'
      },
      {
        area: 'CI/CD Webhook Receivers',
        description: 'FastAPI endpoints for GitHub Actions / GitLab CI event ingestion. Transforms pipeline events into AFP-compatible format. Signature verification for webhook authenticity.',
        files: ['prototype/webhooks/', 'prototype/transformers/'],
        complexity: 'Medium'
      },
      {
        area: 'Documentation & Architecture Artifacts',
        description: 'Comprehensive GitHub wiki with agent specs, AFP schema, sequence diagrams, threat model, and deployment architecture. Interactive Mermaid diagrams render in-browser.',
        files: ['docs/', '.github/wiki/'],
        complexity: 'Low'
      }
    ],
    screenshotGallery: [
      {
        url: '/images/projects/aria-architecture.svg',
        caption: 'ARIA multi-agent architecture overview showing five agents and AFP feedback loop',
        thumbnail: '/images/projects/aria-architecture.svg'
      },
      {
        url: '/images/projects/aria-agent-topology.svg',
        caption: 'Real-time agent topology visualization showing active consensus state',
        thumbnail: '/images/projects/aria-agent-topology.svg'
      }
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
    githubUrl: 'https://github.com/rajratanpcu/KTA-ERP',
    liveDemoUrl: 'https://frontend-liard-delta-44.vercel.app',
    prototypeUrl: 'https://kta-erp-prototype.vercel.app',
    documentationUrl: 'https://github.com/rajratanpcu/KTA-ERP/wiki',
    screenshots: [
      '/images/projects/kta-erp-dashboard.svg',
      '/images/projects/kta-erp-inventory.svg',
    ],
    keyLearnings: [
      'Real-world business data requires defensive schema design and transaction rollbacks.',
      'Financial applications must utilize BigDecimal arithmetic to prevent rounding discrepancies.',
    ],
    futureRoadmap: [
      'Incorporate automated n8n webhook pipelines for customer payment receipts.',
    ],
    // Enhanced case study fields
    accentColors: {
      primary: '#10b981',
      secondary: '#059669',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    },
    architectureDiagrams: [
      {
        type: 'mermaid',
        title: 'KTA ERP Decoupled Cloud Architecture',
        description: 'Vercel frontend connecting to Render Spring Boot backend with managed PostgreSQL, engineered under Zero Docker Windows constraints.',
        content: `graph LR
    subgraph "Vercel Frontend"
      UI[React 18 + TypeScript]
      TC[Tailwind CSS UI]
      UI --- TC
    end

    subgraph "Render Managed Backend"
      SB[Java 17 + Spring Boot 3.1.5]
      SEC[JWT Security Filter]
      FLY[Flyway Migrations V1-V8]
      EXC[Vyapar Excel Ingestion]
      SB --- SEC
      SB --- FLY
      SB --- EXC
    end

    subgraph "Data Tier"
      PG[(Render PostgreSQL)]
      SB -->|JPA/Hibernate| PG
      FLY -->|Migrate| PG
    end

    UI -->|HTTPS REST / JSON| SB

    style UI fill:#10b981,color:#fff
    style SB fill:#059669,color:#fff
    style PG fill:#047857,color:#fff
    style FLY fill:#34d399,color:#000
    style EXC fill:#6ee7b7,color:#000`
      },
      {
        type: 'mermaid',
        title: 'Multi-Godown Stock Transfer & Ledger Model',
        description: 'Relational data model supporting 4 regional warehouses with double-entry inventory ledger.',
        content: `erDiagram
    GODOWN ||--o{ STOCK_LEVEL : "maintains"
    PRODUCT ||--o{ STOCK_LEVEL : "tracked_at"
    GODOWN ||--o{ STOCK_TRANSFER : "source_godown"
    GODOWN ||--o{ STOCK_TRANSFER : "dest_godown"
    PARTY ||--o{ INVOICE : "billed_to"
    INVOICE ||--o{ INVOICE_ITEM : "contains"
    PRODUCT ||--o{ INVOICE_ITEM : "sold_as"
    PARTY ||--o{ PAYMENT_RECEIPT : "paid_by"

    GODOWN {
      string code PK
      string name
      string location
      boolean is_central
    }
    PRODUCT {
      string code PK
      string name
      string category
      decimal unit_price
      string unit_measure
    }
    STOCK_LEVEL {
      bigint id PK
      string godown_code FK
      string product_code FK
      decimal quantity
      decimal reorder_level
    }
    STOCK_TRANSFER {
      uuid id PK
      string source_code FK
      string dest_code FK
      string product_code FK
      decimal quantity
      timestamp transferred_at
      string status
    }
    PARTY {
      string code PK
      string name
      string phone
      decimal credit_limit
      decimal current_balance
    }
    INVOICE {
      string invoice_no PK
      string party_code FK
      date invoice_date
      decimal total_amount
      decimal tax_amount
      string payment_status
    }
    PAYMENT_RECEIPT {
      string receipt_no PK
      string party_code FK
      date payment_date
      decimal amount
      string payment_mode
    }`
      }
    ],
    challengesSolutions: [
      {
        challenge: 'Strict Windows native development environment constraint: No Docker, no WSL, no Linux-specific tools, with all builds running natively on Windows 11.',
        solution: 'Configured pure native tooling: OpenJDK 17 on Windows PATH, Maven 3.9, native PostgreSQL CLI for local testing, and Render managed PostgreSQL for cloud parity. Replaced containerized workflows with explicit PowerShell scripts and environment variable management.',
        technicalDetail: 'Flyway migrations (V1-V8) execute directly against remote Render PostgreSQL via Maven plugin; frontend builds via native Node.js 20 on Windows.'
      },
      {
        challenge: 'Migrating real historical Vyapar business data (178 invoices, 107 products, 37 parties, ₹1.53 Cr total sales) from multi-sheet Excel files without data loss or financial discrepancies.',
        solution: 'Engineered an atomic Excel ingestion engine using Apache POI with a two-phase commit: Phase 1 parses all sheets (Parties, Items, Invoices, Payments) into in-memory validation graph checking foreign keys and amount sums. Phase 2 executes in a single Spring @Transactional block — any failure triggers complete rollback.',
        technicalDetail: 'BigDecimal arithmetic throughout; validation rules enforce that invoice items sum equals invoice total within ±0.01 tolerance (rounding differences in source Vyapar data).'
      },
      {
        challenge: 'Multi-godown inventory tracking with stock transfers between 4 regional warehouses (Central Hajipur, Vaishali, Patna-North, Muzaffarpur) preventing phantom inventory during transit.',
        solution: 'Implemented double-entry inventory ledger: each stock transfer creates two balancing ledger entries (debit source godown, credit in-transit account; on receipt: debit in-transit, credit destination godown). Pessimistic locking on stock_level rows prevents concurrent overdraft.',
        technicalDetail: 'SELECT ... FOR UPDATE on stock_level; transfer state machine (INITIATED -> IN_TRANSIT -> RECEIVED -> RECONCILED) with audit logging.'
      }
    ],
    implementationBreakdown: [
      {
        area: 'Frontend Client (Vercel)',
        description: 'React 18 + TypeScript SPA with Tailwind CSS. Godown inventory matrix, invoice generator with real-time tax calculation, party ledger view with balance aging, and Excel upload UI with validation feedback.',
        files: ['src/components/inventory/', 'src/components/invoices/', 'src/components/ledger/'],
        complexity: 'High'
      },
      {
        area: 'Backend REST Services (Render)',
        description: 'Java 17 + Spring Boot 3.1.5 with 24 REST endpoints across 6 controllers (Inventory, Invoice, Party, Godown, Report, Migration). OpenAPI/Swagger documentation.',
        files: ['src/main/java/.../controller/', 'src/main/java/.../service/'],
        complexity: 'High'
      },
      {
        area: 'Database & Migrations',
        description: 'PostgreSQL schema with 12 tables, foreign keys, check constraints, and Flyway migrations V1 through V8. Composite indexes on (party_id, invoice_date) and (godown_id, product_id).',
        files: ['src/main/resources/db/migration/V1__*.sql', '.../V8__*.sql'],
        complexity: 'Medium'
      },
      {
        area: 'Vyapar Excel Ingestion Engine',
        description: 'Apache POI streaming reader for multi-sheet workbooks. Custom validators for phone numbers, GSTIN formats, and invoice balance arithmetic. Comprehensive error reporting with row/column pointers.',
        files: ['src/main/java/.../migration/vyapar/', 'src/main/java/.../validator/'],
        complexity: 'High'
      },
      {
        area: 'Ledger & Financial Engine',
        description: 'Double-entry accounting services using BigDecimal. Party outstanding balance calculation with running ledger entries. Payment receipt allocation against oldest outstanding invoices (FIFO).',
        files: ['src/main/java/.../ledger/', 'src/main/java/.../financial/'],
        complexity: 'High'
      }
    ],
    screenshotGallery: [
      {
        url: '/images/projects/kta-erp-dashboard.svg',
        caption: 'KTA ERP executive dashboard showing sales trends, outstanding party balances, and low-stock alerts',
        thumbnail: '/images/projects/kta-erp-dashboard.svg'
      },
      {
        url: '/images/projects/kta-erp-inventory.svg',
        caption: 'Multi-godown inventory matrix showing stock levels across all four regional warehouses',
        thumbnail: '/images/projects/kta-erp-inventory.svg'
      }
    ],
  },
  {
    id: 'dsa',
    slug: 'dsa-algorithm-mastery',
    title: 'DSA & Algorithm Mastery: Competitive Programming Foundation',
    subtitle: 'Comprehensive Data Structures & Algorithms Implementation in Java & C++',
    category: 'AI & Multi-Agent',
    status: 'Active Practice & Interview Preparation',
    statusType: 'prototype',
    featured: true,
    shortDescription:
      'Rigorous algorithmic problem-solving practice covering graphs, dynamic programming, trees, arrays, and advanced data structures. Solutions implemented in Java and C++ with focus on time/space complexity optimization for technical interviews.',
    problemStatement:
      'Software engineering interviews at top-tier companies demand deep mastery of algorithmic paradigms. Most candidates struggle with identifying optimal approaches under time pressure, handling edge cases, and explaining complexity trade-offs clearly.',
    architectureOverview:
      'Structured learning system organized by algorithmic patterns: sliding window, two pointers, fast/slow pointers, binary search variants, graph traversals (BFS/DFS), topological sort, dynamic programming (memoization/tabulation), greedy algorithms, and advanced tree manipulations. Each pattern includes canonical problems, variant recognition, and optimal implementations.',
    roleAndContributions: [
      'Solved 300+ algorithmic problems across LeetCode, Codeforces, and GFG with focus on pattern recognition.',
      'Implemented canonical solutions in both Java (for production-style OOP) and C++ (for competitive performance).',
      'Built personal reference library with complexity annotations, variant mappings, and optimization notes.',
      'Practiced timed mock interviews simulating FAANG/MAANG interview conditions.',
    ],
    techStack: [
      'Java 17+',
      'C++17/20',
      'LeetCode',
      'Codeforces',
      'GeeksforGeeks',
      'Time Complexity Analysis',
      'Space Optimization',
    ],
    keyFeatures: [
      'Pattern-based problem classification for rapid interview recognition.',
      'Dual-language implementations (Java/C++) highlighting language-specific optimizations.',
      'Time/space complexity annotations with Big-O proofs for each solution.',
      'Edge case handling matrices covering empty inputs, single elements, overflow, and cyclic structures.',
      'Variant mapping connecting seemingly different problems to shared algorithmic cores.',
    ],
    implementationStatus: {
      implemented: [
        'Graph algorithms: Dijkstra, A*, Bellman-Ford, Floyd-Warshall, MST (Kruskal/Prim), SCC (Kosaraju/Tarjan)',
        'Dynamic Programming: Knapsack variants, LCS, LIS, Edit Distance, Matrix Chain Multiplication, Bitmask DP',
        'Tree algorithms: LCA (Binary Lifting), Tree DP, Centroid Decomposition, Heavy-Light Decomposition',
        'Advanced data structures: Segment Trees, Fenwick Trees, Treaps, Splay Trees, Persistent Structures',
      ],
      inProgress: [
        'String algorithms: Z-function, KMP, Manacher, Suffix Array/Automaton, Aho-Corasick',
        'Computational geometry: Convex Hull, Line Sweep, Rotating Calipers',
      ],
      planned: [
        'Number theory: FFT/NTT, Miller-Rabin, Pollard-Rho, Chinese Remainder Theorem',
        'Advanced graph: Min-Cost Max-Flow, Gomory-Hu Tree, Link-Cut Trees',
      ],
    },
    githubUrl: 'https://github.com/rajratanpcu/DSA-Solutions',
    liveDemoUrl: 'https://leetcode.com/u/Rajratan60/',
    prototypeUrl: 'https://dsa-patterns.vercel.app',
    documentationUrl: 'https://github.com/rajratanpcu/DSA-Solutions/wiki',
    screenshots: [
      '/images/projects/dsa-leetcode-stats.svg',
      '/images/projects/dsa-pattern-guide.svg',
    ],
    keyLearnings: [
      'Pattern recognition is more valuable than memorizing individual problem solutions.',
      'Writing clean, explainable code under time pressure requires deliberate practice with communication.',
      'Space optimization often reveals deeper understanding of algorithmic invariants.',
    ],
    futureRoadmap: [
      'Publish open-source pattern guide with interactive visualizations.',
      'Create video walkthrough series for high-frequency interview problems.',
    ],
  },
  {
    id: 'smart-medical-assistant',
    slug: 'ai-smart-medical-assistant',
    title: 'AI-Powered Smart Medical Assistant',
    subtitle: 'RAG-Enhanced Clinical Decision Support with Multi-Modal Medical Intelligence',
    category: 'AI Systems & Platforms',
    status: 'Prototype / Research Phase',
    statusType: 'prototype',
    featured: true,
    shortDescription:
      'A conversational AI medical assistant leveraging Retrieval-Augmented Generation (RAG) over curated medical knowledge bases, providing evidence-based clinical decision support with citation tracking and safety guardrails.',
    problemStatement:
      'Healthcare professionals face information overload when accessing current medical literature, drug interactions, and diagnostic criteria. Existing tools lack contextual grounding, hallucination resistance, and transparent citation of source evidence for clinical trust.',
    architectureOverview:
      'RAG pipeline with multi-stage retrieval: semantic search over vector-embedded medical corpora (PubMed abstracts, clinical guidelines, drug databases), hybrid retrieval combining dense + sparse vectors, reranking with cross-encoders, and grounded generation with mandatory citation injection. Safety layer enforces disclaimer protocols, drug interaction checking, and escalation pathways.',
    roleAndContributions: [
      'Designed RAG architecture with chunking strategies optimized for medical terminology and document structure.',
      'Implemented vector embedding pipeline using domain-adapted medical embeddings (BioBERT/ClinicalBERT variants).',
      'Built retrieval stack: dense (HNSW/FAISS) + sparse (BM25) hybrid search with reciprocal rank fusion.',
      'Developed citation-aware generation enforcing inline reference to source document spans.',
      'Implemented safety guardrails: drug interaction cross-reference, contraindication flagging, clinical escalation triggers.',
    ],
    techStack: [
      'Python',
      'LangChain / LlamaIndex',
      'FastAPI',
      'PostgreSQL + pgvector',
      'FAISS / HNSW',
      'Sentence Transformers (BioBERT/ClinicalBERT)',
      'Cross-Encoder Reranking',
      'Docker',
      'Redis (caching)',
    ],
    keyFeatures: [
      'Evidence-grounded responses with mandatory inline citations to source medical literature.',
      'Multi-modal retrieval combining dense semantic + sparse keyword search for clinical precision.',
      'Real-time drug interaction checking against FDA/WHO databases via integrated APIs.',
      'Clinical safety layer: automatic disclaimer injection, contraindication alerts, specialist referral triggers.',
      'Conversation memory with HIPAA-compliant session isolation and audit logging.',
      'Multi-language support for regional clinical guideline access.',
    ],
    implementationStatus: {
      implemented: [
        'Core RAG pipeline with hybrid retrieval and cross-encoder reranking',
        'Vector embedding pipeline with domain-adapted medical embeddings',
        'FastAPI backend with streaming response generation',
        'Citation injection and source document span highlighting',
        'Docker containerization for reproducible deployment',
      ],
      inProgress: [
        'Integration with PubMed API for live literature updates',
        'Drug interaction knowledge graph construction from FDA Orange Book',
        'Clinical guideline ontology mapping (ICD-10, SNOMED-CT)',
      ],
      planned: [
        'Multi-modal input: medical image analysis (X-ray, MRI report extraction)',
        'Voice interface for hands-free clinical consultation',
        'FHIR-compliant EHR integration prototype',
        'Regulatory compliance validation (HIPAA, FDA SaMD guidance)',
      ],
    },
    githubUrl: 'https://github.com/rajratanpcu/Smart-Medical-Assistant',
    liveDemoUrl: 'https://medical-assistant-demo.vercel.app',
    prototypeUrl: 'https://medical-assistant-prototype.vercel.app',
    documentationUrl: 'https://github.com/rajratanpcu/Smart-Medical-Assistant/wiki',
    screenshots: [
      '/images/projects/medical-assistant-chat.svg',
      '/images/projects/medical-assistant-rag-pipeline.svg',
    ],
    keyLearnings: [
      'Medical RAG requires domain-specific chunking — generic text splitters destroy clinical context.',
      'Citation fidelity is non-negotiable in clinical decision support; hallucinations can cause patient harm.',
      'Hybrid retrieval significantly outperforms pure semantic search for precise medical terminology.',
    ],
    futureRoadmap: [
      'Secure clinical pilot with partner healthcare institution.',
      'Publish open-source medical RAG evaluation framework.',
      'Expand to multilingual clinical guideline coverage (Hindi, Marathi, Bengali).',
    ],
    // Enhanced case study fields
    accentColors: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
    },
    architectureDiagrams: [
      {
        type: 'mermaid',
        title: 'Smart Medical Assistant RAG Pipeline Architecture',
        description: 'End-to-end RAG flow from clinical query through hybrid retrieval, reranking, and grounded generation with safety layer.',
        content: `graph TD
    Q[Clinical Query] --> CQE[Clinical Query Expander]
    CQE --> HS[Hybrid Search: Dense + Sparse]

    subgraph "Vector Index (FAISS/HNSW)"
      VD[(Medical Corpus Embeddings)]
      SD[(Sparse BM25 Index)]
    end

    HS --> VD
    HS --> SD
    VD --> RRF[Reciprocal Rank Fusion]
    SD --> RRF
    RRF --> CE[Cross-Encoder Reranker]
    CE --> CTX[Top-K Context Window]
    CTX --> LLM[LLM Generation with Citation Injection]
    LLM --> SL[Safety Layer]
    SL -->|Drug Check| DI[(Drug Interaction KB)]
    SL -->|Contraindication| CI[(Clinical Guidelines)]
    SL --> OUT[Final Response with Citations]

    style Q fill:#6366f1,color:#fff
    style HS fill:#8b5cf6,color:#fff
    style VD fill:#a855f7,color:#fff
    style CE fill:#c084fc,color:#fff
    style LLM fill:#d946ef,color:#fff
    style SL fill:#f43f5e,color:#fff
    style OUT fill:#10b981,color:#fff`
      },
      {
        type: 'mermaid',
        title: 'Data Pipeline & Knowledge Graph',
        description: 'Medical data ingestion, embedding, and knowledge graph construction for drug interactions and clinical guidelines.',
        content: `graph LR
    subgraph "Data Sources"
      PM[PubMed API]
      CG[Clinical Guidelines PDF]
      FO[FDA Orange Book]
      DR[Drug Databases]
    end

    subgraph "Ingestion & Processing"
      CH[Clinical Chunker]
      EM[Embedding Model: BioBERT/ClinicalBERT]
      KG[Knowledge Graph Builder]
    end

    subgraph "Storage Layer"
      VDB[(pgvector / FAISS)]
      SKG[(Drug Interaction KG)]
      CGK[(Guideline Ontology)]
    end

    PM --> CH
    CG --> CH
    FO --> KG
    DR --> KG
    CH --> EM
    EM --> VDB
    KG --> SKG
    KG --> CGK

    style PM fill:#6366f1,color:#fff
    style CG fill:#8b5cf6,color:#fff
    style FO fill:#a855f7,color:#fff
    style CH fill:#c084fc,color:#fff
    style EM fill:#d946ef,color:#fff
    style KG fill:#e879f9,color:#fff
    style VDB fill:#f43f5e,color:#fff
    style SKG fill:#fb7185,color:#fff
    style CGK fill:#fda4af,color:#000`
      }
    ],
    challengesSolutions: [
      {
        challenge: 'Medical RAG requires domain-specific chunking — generic text splitters destroy clinical context by breaking sentences mid-condition, separating dosages from indications, or splitting drug names from contraindications.',
        solution: 'Designed a clinical-aware chunker using section-aware parsing (HTML/XML structure from guidelines), sentence-boundary detection with medical NER (scispaCy), and semantic overlap sliding windows. Chunks preserve full clinical statements: condition → intervention → dosage → monitoring → contraindications as atomic units.',
        technicalDetail: 'LlamaIndex custom NodeParser with scispaCy NER for UMLS entity recognition. Overlap=2 sentences. Metadata tags: specialty, evidence_level, publication_year.'
      },
      {
        challenge: 'Citation fidelity is non-negotiable in clinical decision support — hallucinations can cause patient harm. Standard RAG generates plausible but ungrounded text.',
        solution: 'Implemented mandatory citation injection at generation time: every clinical claim must reference a source document span. Used constrained decoding with citation tokens [DOC_ID:SPAN_START:SPAN_END]. Post-generation validator rejects responses with uncited medical assertions. Safety layer adds automatic disclaimers and escalation triggers.',
        technicalDetail: 'LangChain custom OutputParser with regex citation extraction. Cross-encoder similarity threshold >0.7 for citation grounding. Drug interaction check via RxNav API with 500ms SLA.'
      },
      {
        challenge: 'Hybrid retrieval significantly outperforms pure semantic search for precise medical terminology, but combining dense (FAISS) + sparse (BM25) at query time introduces latency.',
        solution: 'Pre-computed both indexes offline. At query time: parallel async retrieval (dense + sparse), reciprocal rank fusion (RRF) with k=60, then cross-encoder reranking only top-20 candidates. Cached frequent query embeddings in Redis. Achieved <800ms p95 latency for end-to-end pipeline.',
        technicalDetail: 'FastAPI async endpoints with asyncio.gather for parallel retrieval. sentence-transformers cross-encoder (ms-marco-MiniLM-L-6-v2). Redis TTL=1hr for query embeddings.'
      }
    ],
    implementationBreakdown: [
      {
        area: 'RAG Core Pipeline',
        description: 'LangChain/LlamaIndex orchestration: query expansion → parallel hybrid retrieval → RRF fusion → cross-encoder rerank → citation-aware generation. Streaming SSE responses.',
        files: ['src/rag/pipeline.py', 'src/rag/retrieval.py', 'src/rag/generation.py'],
        complexity: 'High'
      },
      {
        area: 'Embedding & Vector Index',
        description: 'Domain-adapted BioBERT/ClinicalBERT embeddings (384-dim). FAISS HNSW index (M=32, efConstruction=200). pgvector for metadata-filtered search. Incremental index updates.',
        files: ['src/embedding/', 'src/indexing/', 'docker/faiss/'],
        complexity: 'High'
      },
      {
        area: 'Safety & Guardrails',
        description: 'Drug interaction checker (RxNav/FDA API), contraindication matcher (SNOMED-CT), automatic disclaimer injection, specialist referral triggers (red flag symptoms), HIPAA session isolation with audit logging.',
        files: ['src/safety/', 'src/guardrails/', 'src/compliance/'],
        complexity: 'High'
      },
      {
        area: 'API & Deployment',
        description: 'FastAPI with Pydantic v2 models, SSE streaming, rate limiting, request validation. Docker multi-stage build. Redis caching layer. Health checks and Prometheus metrics.',
        files: ['src/api/', 'Dockerfile', 'docker-compose.yml', 'k8s/'],
        complexity: 'Medium'
      },
      {
        area: 'Evaluation Framework',
        description: 'Medical QA benchmark (PubMedQA, MedQA, custom clinical cases). Metrics: citation precision/recall, hallucination rate, safety violation count, latency percentiles. CI/CD integration.',
        files: ['eval/', 'eval/benchmarks/', 'eval/metrics.py'],
        complexity: 'Medium'
      }
    ],
    screenshotGallery: [
      {
        url: '/images/projects/medical-assistant-chat.svg',
        caption: 'Clinical chat interface showing evidence-grounded response with inline citations and safety alerts',
        thumbnail: '/images/projects/medical-assistant-chat.svg'
      },
      {
        url: '/images/projects/medical-assistant-rag-pipeline.svg',
        caption: 'RAG pipeline architecture diagram showing hybrid retrieval, reranking, and safety layer',
        thumbnail: '/images/projects/medical-assistant-rag-pipeline.svg'
      }
    ],
  },
  {
    id: 'kdsh-2025',
    slug: 'kdsh-2025-data-science-hackathon',
    title: 'KDSH 2025: Kharagpur Data Science Hackathon',
    subtitle: 'Team Lead — Exploratory Analysis, Feature Engineering & Statistical Modeling for Real-World Challenge',
    category: 'AI & Multi-Agent',
    status: 'Competition Submission — Top Tier Finalist',
    statusType: 'prototype',
    featured: true,
    shortDescription:
      'Led a 4-member team at IIT Kharagpur\'s flagship data science hackathon. Built end-to-end predictive pipeline for a real industry problem statement: exploratory data analysis, feature engineering, ensemble modeling, and production-ready inference API.',
    problemStatement:
      'KDSH 2025 presented a complex industry-sponsored challenge requiring rapid data understanding, robust feature engineering under time pressure, and delivery of a reproducible ML pipeline with clear business interpretation — all within 36 hours.',
    architectureOverview:
      'Designed a modular ML pipeline: automated EDA profiling → missing value treatment with domain-aware imputation → feature engineering (temporal, interaction, target encoding) → model selection via cross-validated ensemble (XGBoost + LightGBM + CatBoost stacking) → SHAP explainability → FastAPI inference service with Docker packaging.',
    roleAndContributions: [
      'Served as Team Lead: coordinated task decomposition, git workflow, and integration checkpoints across 4-member team.',
      'Architected the end-to-end ML pipeline structure with reusable preprocessing modules and experiment tracking.',
      'Implemented advanced feature engineering: temporal lag features, rolling window statistics, categorical target encoding with smoothing, and domain-specific interaction terms.',
      'Built model training harness with Optuna hyperparameter optimization, stratified k-fold CV, and ensemble stacking logic.',
      'Developed FastAPI inference endpoint with Pydantic request validation, batch prediction support, and model artifact versioning.',
      'Prepared competition deliverables: technical report, architecture diagrams, and 10-minute presentation deck.',
    ],
    techStack: [
      'Python 3.11',
      'Pandas / Polars',
      'Scikit-learn',
      'XGBoost / LightGBM / CatBoost',
      'Optuna',
      'SHAP',
      'FastAPI',
      'Docker',
      'MLflow (experiment tracking)',
      'JupyterLab',
    ],
    keyFeatures: [
      'Automated EDA profiling generating 50+ statistical summaries and visualizations in <30 seconds.',
      'Robust preprocessing pipeline handling missingness patterns, outliers, and class imbalance with SMOTE.',
      'Ensemble stacking meta-learner improving validation AUC by 3.2% over best single model.',
      'SHAP-based global and local explainability for stakeholder trust and regulatory readiness.',
      'Containerized inference API deployable to any cloud with single Docker command.',
      'MLflow experiment tracking with artifact lineage for full reproducibility.',
    ],
    implementationStatus: {
      implemented: [
        'Complete EDA automation module with profiling reports (ydata-profiling equivalent custom build)',
        'Feature engineering library with 15+ transformer classes (temporal, categorical, numerical, text)',
        'Model training pipeline with Optuna optimization (200+ trials) and 5-fold stratified CV',
        'Stacking ensemble: XGBoost + LightGBM + CatBoost base learners with Ridge meta-learner',
        'FastAPI inference service with /predict and /predict_batch endpoints, health checks, Prometheus metrics',
        'Docker multi-stage build (builder → runtime) with model artifact baked into image',
        'MLflow integration: parameters, metrics, artifacts, and model registry logging',
      ],
      inProgress: [
        'Model monitoring dashboard with drift detection (PSI, KS statistic) and performance alerting',
        'Automated retraining trigger based on data drift threshold and scheduled cron',
      ],
      planned: [
        'Feature store integration (Feast) for consistent offline/online feature serving',
        'A/B testing framework for gradual model rollout with statistical significance testing',
        'ONNX export for edge deployment and cross-framework compatibility',
      ],
    },
    githubUrl: 'https://github.com/rajratanpcu/KDSH-2025',
    liveDemoUrl: 'https://kdsh-2025-demo.vercel.app',
    prototypeUrl: 'https://kdsh-2025-prototype.vercel.app',
    documentationUrl: 'https://github.com/rajratanpcu/KDSH-2025/wiki',
    screenshots: [
      '/images/projects/kdsh-eda-profile.svg',
      '/images/projects/kdsh-model-comparison.svg',
      '/images/projects/kdsh-shap-explain.svg',
    ],
    keyLearnings: [
      'In time-boxed competitions, a clean, modular pipeline beats complex models — invest in preprocessing infrastructure first.',
      'SHAP explainability is not optional for stakeholder buy-in; it transforms "black box" into actionable insights.',
      'Ensemble stacking with diverse base learners consistently outperforms single-model tuning within same compute budget.',
      'Experiment tracking (MLflow) pays dividends during crunch time — instant comparison, no lost runs.',
    ],
    futureRoadmap: [
      'Publish open-source hackathon ML pipeline template with cookiecutter structure.',
      'Extend to multi-modal tabular + text tasks for future competitions.',
      'Integrate with Kaggle API for automated competition submission workflow.',
    ],
    // Enhanced case study fields
    accentColors: {
      primary: '#f97316',
      secondary: '#fb923c',
      gradient: 'linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fdba74 100%)',
    },
    architectureDiagrams: [
      {
        type: 'mermaid',
        title: 'KDSH 2025 ML Pipeline Architecture',
        description: 'End-to-end pipeline from raw data through feature engineering, ensemble training, and containerized inference.',
        content: `graph TD
    RAW[Raw Competition Data] --> EDA[Automated EDA Profiler]
    EDA --> PRE[Preprocessing Pipeline]
    PRE --> FE[Feature Engineering Suite]

    subgraph "Feature Engineering"
      FE1[Temporal: Lags, Rolling Windows]
      FE2[Categorical: Target Encoding + Smoothing]
      FE3[Numerical: Binning, Interactions]
      FE4[Text: TF-IDF, Embeddings]
    end

    FE --> FE1
    FE --> FE2
    FE --> FE3
    FE --> FE4
    FE1 --> TRAIN[Training Harness]
    FE2 --> TRAIN
    FE3 --> TRAIN
    FE4 --> TRAIN

    subgraph "Model Training (Optuna + 5-Fold CV)"
      XGB[XGBoost]
      LGB[LightGBM]
      CAT[CatBoost]
      META[Ridge Meta-Learner]
    end

    TRAIN --> XGB
    TRAIN --> LGB
    TRAIN --> CAT
    XGB --> STACK[Stacking Ensemble]
    LGB --> STACK
    CAT --> STACK
    STACK --> META
    META --> SHAP[SHAP Explainer]
    META --> API[FastAPI Inference Service]

    style RAW fill:#f97316,color:#fff
    style EDA fill:#fb923c,color:#fff
    style PRE fill:#fdba74,color:#000
    style FE fill:#fed7aa,color:#000
    style XGB fill:#f97316,color:#fff
    style LGB fill:#fb923c,color:#fff
    style CAT fill:#fdba74,color:#000
    style META fill:#fed7aa,color:#000
    style API fill:#10b981,color:#fff`
      },
      {
        type: 'mermaid',
        title: 'Experiment Tracking & Model Registry Flow',
        description: 'MLflow-based experiment management with model versioning, artifact lineage, and promotion gates.',
        content: `graph LR
    subgraph "MLflow Tracking Server"
      EXP[Experiments]
      RUN[Runs: Params + Metrics + Artifacts]
      REG[Model Registry]
      STAGE[Stages: Staging → Production]
    end

    TRAIN[Training Pipeline] -->|Log| RUN
    RUN -->|Register| REG
    REG -->|Transition| STAGE
    STAGE -->|Load| API[Inference API]

    subgraph "Artifacts"
      MOD[Model Binary]
      PRE[Preprocessor Pickle]
      SHP[SHAP Explainer]
      MET[Metrics JSON]
    end

    RUN --> MOD
    RUN --> PRE
    RUN --> SHP
    RUN --> MET

    style EXP fill:#f97316,color:#fff
    style RUN fill:#fb923c,color:#fff
    style REG fill:#fdba74,color:#000
    style STAGE fill:#fed7aa,color:#000
    style API fill:#10b981,color:#fff`
      }
    ],
    challengesSolutions: [
      {
        challenge: '36-hour timebox with unknown dataset — need to rapidly understand data quality, distributions, and relationships without manual exploration overhead.',
        solution: 'Built automated EDA profiler generating 50+ statistical summaries (missingness heatmaps, correlation clusters, target leakage detection, distribution shifts) in <30 seconds. Output as interactive HTML report for team sharing.',
        technicalDetail: 'Custom profiler using Polars for speed, matplotlib/seaborn for viz. Key detectors: near-zero variance, high cardinality categoricals, target correlation >0.95 (leakage), train/test distribution KS-test.'
      },
      {
        challenge: 'Categorical features with high cardinality (1000+ unique values) and rare categories causing target encoding overfitting and memory blowup in tree models.',
        solution: 'Implemented smoothed target encoding with Bayesian prior (global mean) and minimum sample threshold. Categories below threshold mapped to "RARE" bucket. Used leave-one-out encoding for training, global mean for inference to prevent leakage.',
        technicalDetail: 'Custom TargetEncoder class with fit/transform API. Smoothing: (n * cat_mean + alpha * global_mean) / (n + alpha). Alpha=10 tuned via Optuna. Handles unseen categories at inference gracefully.'
      },
      {
        challenge: 'Ensemble diversity vs. compute budget — need multiple strong base learners but limited training time.',
        solution: 'Selected three gradient boosting implementations with different inductive biases: XGBoost (exact greedy), LightGBM (leaf-wise), CatBoost (ordered boosting). Each trained with 5-fold CV. Stacking meta-learner (Ridge) learns optimal combination. Achieved +3.2% AUC over best single model.',
        technicalDetail: 'Optuna TPE sampler for hyperparameter search. Pruning callback stops unpromising trials early. Shared preprocessing artifacts across models. Parallel training via joblib n_jobs=-1.'
      }
    ],
    implementationBreakdown: [
      {
        area: 'EDA & Profiling Module',
        description: 'Automated data profiler: schema inference, missingness patterns, univariate/bivariate stats, correlation clustering, target leakage detection, distribution shift tests. Outputs HTML report + JSON summary.',
        files: ['src/eda/profiler.py', 'src/eda/detectors.py', 'src/eda/report.py'],
        complexity: 'Medium'
      },
      {
        area: 'Feature Engineering Suite',
        description: '15+ transformer classes: TemporalLagEncoder, RollingWindowStats, TargetEncoderSmoothed, InteractionGenerator, TextVectorizer. All sklearn-compatible with fit/transform. ColumnTransformer pipeline integration.',
        files: ['src/features/', 'src/features/temporal.py', 'src/features/categorical.py', 'src/features/numerical.py'],
        complexity: 'High'
      },
      {
        area: 'Model Training & Optimization',
        description: 'Optuna-based hyperparameter optimization (200 trials per model). 5-fold stratified CV with custom scoring. Early stopping via LightGBM/XGBoost callbacks. Stacking ensemble with Ridge meta-learner.',
        files: ['src/training/', 'src/training/optuna_objective.py', 'src/training/ensemble.py'],
        complexity: 'High'
      },
      {
        area: 'Inference API & Deployment',
        description: 'FastAPI service: /predict (single), /predict_batch (bulk), /health, /metrics (Prometheus). Pydantic v2 request/response models. Docker multi-stage build. Model artifact + preprocessor bundled.',
        files: ['src/api/main.py', 'src/api/schemas.py', 'Dockerfile', 'docker-compose.yml'],
        complexity: 'Medium'
      },
      {
        area: 'Experiment Tracking & Reproducibility',
        description: 'MLflow integration: autolog for sklearn/XGBoost/LightGBM/CatBoost. Custom artifact logging for SHAP explainers, feature importance plots. Model registry with stage transitions (Staging → Production).',
        files: ['src/tracking/mlflow_utils.py', 'src/tracking/artifacts.py'],
        complexity: 'Medium'
      }
    ],
    screenshotGallery: [
      {
        url: '/images/projects/kdsh-eda-profile.svg',
        caption: 'Automated EDA profiling report showing missingness heatmap, correlation clusters, and target leakage detection',
        thumbnail: '/images/projects/kdsh-eda-profile.svg'
      },
      {
        url: '/images/projects/kdsh-model-comparison.svg',
        caption: 'Model comparison dashboard: CV scores across XGBoost, LightGBM, CatBoost, and Stacking Ensemble',
        thumbnail: '/images/projects/kdsh-model-comparison.svg'
      },
      {
        url: '/images/projects/kdsh-shap-explain.svg',
        caption: 'SHAP explainability: global feature importance (beeswarm) and local waterfall plot for individual prediction',
        thumbnail: '/images/projects/kdsh-shap-explain.svg'
      }
    ]
  },
];
