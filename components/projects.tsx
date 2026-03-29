'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Star, Download, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectMetric {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface FeaturedProject {
  id: string;
  category: string;
  title: string;
  description: string;
  metrics: ProjectMetric[];
  accentColor: string;
  link: string;
}



const featuredProjects: FeaturedProject[] = [
  {
    id: 'fintech-dashboard',
    category: 'FinTech',
    title: 'Enterprise Analytics Platform',
    description:
      'Led the design and development of a real-time analytics dashboard for financial institutions, enabling data-driven decision making.',
    metrics: [
      { label: 'Users', value: '1.2M', icon: <Users className="w-3 h-3" /> },
      { label: 'Growth', value: '+340%', icon: <TrendingUp className="w-3 h-3" /> },
      { label: 'Rating', value: '4.9', icon: <Star className="w-3 h-3" /> },
    ],
    accentColor: 'bg-teal-500',
    link: '#',
  },
  {
    id: 'healthcare-app',
    category: 'Healthcare',
    title: 'Patient Care Mobile App',
    description:
      'Designed an intuitive mobile experience for patient-doctor communication, appointment scheduling, and health tracking.',
    metrics: [
      { label: 'Downloads', value: '850K', icon: <Download className="w-3 h-3" /> },
      { label: 'Retention', value: '78%', icon: <TrendingUp className="w-3 h-3" /> },
      { label: 'Rating', value: '4.8', icon: <Star className="w-3 h-3" /> },
    ],
    accentColor: 'bg-teal-600',
    link: '#',
  },
  {
    id: 'ecommerce-redesign',
    category: 'E-Commerce',
    title: 'Marketplace Redesign',
    description:
      'Complete UX overhaul of a major e-commerce platform, resulting in significant conversion rate improvements.',
    metrics: [
      { label: 'Visitors', value: '5M+', icon: <Eye className="w-3 h-3" /> },
      { label: 'Conversion', value: '+62%', icon: <TrendingUp className="w-3 h-3" /> },
      { label: 'Revenue', value: '+$2.1M', icon: <Star className="w-3 h-3" /> },
    ],
    accentColor: 'bg-teal-700',
    link: '#',
  },
];



function FeaturedProjectCard({ project, index }: { project: FeaturedProject; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Accent Bar */}
      <div className={`h-1.5 ${project.accentColor}`} />

      <div className="p-6">
        {/* Category Label */}
        <Badge
          variant="secondary"
          className="mb-4 bg-teal-50 text-teal-700 border-teal-100 font-medium"
        >
          {project.category}
        </Badge>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-2">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.metrics.map((metric, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full text-xs font-medium text-gray-700"
            >
              <span className="text-teal-600">{metric.icon}</span>
              <span className="font-semibold">{metric.value}</span>
              <span className="text-gray-500">{metric.label}</span>
            </div>
          ))}
        </div>

        {/* View Project Link */}
        <a
          href={project.link}
          className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group/link hover:text-teal-700 transition-colors"
        >
          View Project
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
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
