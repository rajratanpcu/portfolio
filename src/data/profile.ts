import { Profile } from '../types';

export const profileData: Profile = {
  name: 'Raj Ratan',
  pronouns: 'He/Him',
  headline: 'Computer Science Undergraduate & Java Backend Developer',
  avatar: '/avatar-fallback.svg',
  subtitles: [
    'B.Tech CSE (2025–2029) @ PCU Pune',
    'Java & Spring Boot Backend Systems',
    'RAG Pipelines & AI Chatbot Architecture',
    'Practical Systems & Community Leadership',
  ],
  bio: [
    'I am a Computer Science undergraduate (B.Tech 2025–2029, CGPA: 7.71/10) at Pimpri Chinchwad University (PCU), Pune, seeking a Java Backend Internship.',
    'I have hands-on experience building backend systems with Java and Spring Boot, secure JWT authentication, and MySQL, plus developing applied RAG pipelines and AI chatbots. I have a strong foundation in Data Structures & Algorithms (DSA) and Object-Oriented Programming (OOP).',
    'Beyond engineering software, I am an active contributor to open-source and developer ecosystems: serving as an MLSA PCU Chapter Lead, Google Student Ambassador (GSA), and volunteer across GDG and AWS Community Pune.',
  ],
  education: {
    degree: 'Bachelor of Technology (B.Tech)',
    specialization: 'Computer Science & Engineering',
    institution: 'Pimpri Chinchwad University (PCU)',
    location: 'Pune, Maharashtra, India 412106',
    period: '2025 – 2029 (Expected)',
    status: 'In Progress (Year 1 Completed)',
    cgpa: '7.71 / 10.0',
  },
  social: {
    github: 'https://github.com/rajratanpcu',
    linkedin: 'https://www.linkedin.com/in/rajratanpcu/',
    leetcode: 'https://leetcode.com/u/Rajratan60/',
    email: 'ratanraj087@gmail.com',
    phone: '+91 6203683567',
    location: 'Pune, Maharashtra, India 412106',
  },
  availabilityStatus: {
    isAvailable: true,
    roleTarget: 'Java Backend Engineering Internships / Co-ops',
    locationPreference: 'Pune / Remote / Hybrid',
  },
  resume: {
    filename: 'Raj_Ratan_Resume.pdf',
    downloadPath: '/resume/Raj_Ratan_Resume.pdf',
    lastUpdated: 'October 2026',
  },
};
