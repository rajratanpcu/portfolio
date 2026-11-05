export interface Profile {
  name: string;
  pronouns: string;
  headline: string;
  avatar: string;
  subtitles: string[];
  bio: string[];
  education: {
    degree: string;
    specialization: string;
    institution: string;
    location: string;
    period: string;
    status: string;
    cgpa?: string;
  };
  social: {
    github: string;
    linkedin: string;
    leetcode: string;
    email: string;
    phone?: string;
    location?: string;
  };
  availabilityStatus: {
    isAvailable: boolean;
    roleTarget: string;
    locationPreference: string;
  };
  resume: {
    filename: string;
    downloadPath: string;
    lastUpdated: string;
  };
}

export type SkillProficiency = 'Core' | 'Comfortable' | 'Exploring';

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: string;
  proficiency: SkillProficiency;
  icon: string;
  description?: string;
  tags?: string[];
}

export type ProjectStatusType = 'architecture' | 'prototype' | 'deployed';

export interface AgentSpec {
  code: string;
  name: string;
  role: string;
  responsibility: string;
}

export interface ChallengeSolution {
  challenge: string;
  solution: string;
  technicalDetail?: string;
}

export interface ArchitectureDiagram {
  type: 'mermaid' | 'svg' | 'component';
  content: string;
  title: string;
  description?: string;
}

export interface ImplementationBreakdown {
  area: string;
  description: string;
  files?: string[];
  complexity?: 'Low' | 'Medium' | 'High';
}

export interface ProjectAccentColors {
  primary: string;
  secondary: string;
  gradient?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'AI & Multi-Agent' | 'Enterprise ERP' | 'Optimization Platforms' | 'AI Systems & Platforms';
  status: string;
  statusType: ProjectStatusType;
  featured: boolean;
  shortDescription: string;
  problemStatement: string;
  architectureOverview: string;
  roleAndContributions: string[];
  techStack: string[];
  keyFeatures: string[];
  governanceAndSafeguards?: string[];
  agents?: AgentSpec[];
  attributableFeedbackProtocol?: {
    summary: string;
    safeguards: string[];
  };
  simulatedScenarios?: {
    scenario: string;
    observedEffect: string;
    isSimulated: boolean;
  }[];
  implementationStatus: {
    implemented: string[];
    inProgress: string[];
    planned: string[];
  };
  githubUrl?: string;
  liveDemoUrl?: string;
  prototypeUrl?: string;
  documentationUrl?: string;
  screenshots?: string[];
  keyLearnings: string[];
  futureRoadmap: string[];

  // Enhanced case study fields
  accentColors?: ProjectAccentColors;
  architectureDiagrams?: ArchitectureDiagram[];
  challengesSolutions?: ChallengeSolution[];
  implementationBreakdown?: ImplementationBreakdown[];
  screenshotGallery?: {
    url: string;
    caption: string;
    thumbnail?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  activityType: 'Student Leadership' | 'Ambassador Program' | 'Technical Community';
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  evidenceUrl?: string;
  tags: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  documentPath: string;
  skills: string[];
  summary: string;
  verified: boolean;
  trainingDuration?: string;
  linkedinUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  organization: string;
  date: string;
  type: 'Hackathon Selection' | 'Community Milestone' | 'Technical Participation';
  resultBadge: string;
  description: string;
  evidenceUrl?: string;
  tags: string[];
}

export interface ActivityItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Community' | 'Conference' | 'Workshop' | 'Architecture';
  date: string;
  organization: string;
  summary: string;
  link?: string;
  tags: string[];
}
