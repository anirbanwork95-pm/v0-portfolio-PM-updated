'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface FeaturedProject {
  id: string;
  category: string;
  title: string;
  description: string;
  badges: string[];
  accentColor: string;
  link?: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 'subscription-monetization',
    category: 'Monetization',
    title: 'Subscription Monetization Engine',
    description:
      'Led 0→1 launch of subscription pricing for doctors on a SaaS platform. Designed tiered plans, pricing logic, and conversion flows that drove 62% conversion to paid plans, 10,000 paid doctors, and ₹5 Cr ARR from enterprise chains.',
    badges: ['10K Paid Doctors', '62% Conversion', '₹5Cr ARR'],
    accentColor: 'bg-teal-500',
    link: 'https://doctors.bajajfinservhealth.in/',
  },
  {
    id: 'ai-beat-planning',
    category: 'AI / Sales Ops',
    title: 'AI-Powered Beat Planning Engine',
    description:
      'Built AI scheduling optimization for field sales agents to maximize coverage and conversion. Improved sales efficiency by 33% — from 1 sale per 12 meetings to 1 per 8 — embedded directly in Salesforce.',
    badges: ['33% Efficiency Gain', 'AI-Powered', 'Salesforce Embedded'],
    accentColor: 'bg-teal-600',
    link: 'https://doctors.bajajfinservhealth.in/',
  },
  {
    id: 'rag-llm-chatbot',
    category: 'AI / LLM',
    title: 'RAG+LLM Sales Chatbot',
    description:
      'Built an internal AI assistant for field agents providing real-time pitch guidance and objection handling. Trained on 200+ doctor attributes to surface contextual, personalized sales intelligence at point of contact.',
    badges: ['RAG+LLM', '200+ Attributes', 'Real-time Intel'],
    accentColor: 'bg-teal-700',
    link: 'https://doctors.bajajfinservhealth.in/',
  },
  {
    id: 'clinic-platform-scaling',
    category: 'Platform',
    title: 'Doctor-to-Clinic Platform Scaling',
    description:
      'Transformed an individual doctor tool into a multi-location enterprise clinic platform. Enabled centralized management across 50+ clinic chains and 1,200+ locations with role-based access and consolidated reporting.',
    badges: ['50+ Chains', '1,200+ Locations', 'Enterprise'],
    accentColor: 'bg-teal-500',
    link: 'https://www.bajajfinservhealth.in/clinic',
  },
  {
    id: 'dental-payments',
    category: 'Payments',
    title: 'Dental Procedure Payments',
    description:
      'Built a procedure payment system supporting 100+ dental procedures with dynamic pricing, insurance integration, and split-payment flows. Drove ₹11.2 Cr in annual transaction value and ₹4.5 Cr in direct revenue.',
    badges: ['100+ Procedures', '₹11.2Cr Transactions', '₹4.5Cr Revenue'],
    accentColor: 'bg-teal-600',
    link: 'https://www.bajajfinservhealth.in/search?mode=inclinic&source=inclinic_consultation&specialities=Dentist',
  },
  {
    id: 'fraud-prevention',
    category: 'Trust & Safety',
    title: 'Fraud Prevention & QC System',
    description:
      'Built a doctor credential verification and quality control system in Salesforce to detect fraudulent profiles at onboarding. Verified 30,000+ doctor profiles and reduced fraud incidents by 30%.',
    badges: ['30K+ Verified', '30% Fraud Reduction', 'Salesforce'],
    accentColor: 'bg-teal-700',
    link: 'https://www.bajajfinservhealth.in/in-clinic-consultation?utm_source=hrx_dweb',
  },
];

function FeaturedProjectCard({ project, index }: { project: FeaturedProject; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
    >
      {/* Accent Bar */}
      <div className={`h-1.5 ${project.accentColor}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Category Label */}
        <Badge
          variant="secondary"
          className="mb-4 self-start bg-teal-50 text-teal-700 border-teal-100 font-medium"
        >
          {project.category}
        </Badge>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.badges.map((badge) => (
            <span
              key={badge}
              className="bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* View Project Link — only shown when a URL is provided */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group/link hover:text-teal-700 transition-colors"
          >
            View Project
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-sm font-bold text-teal-600 tracking-widest uppercase">
            04. Projects
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            Featured Work
          </h2>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
