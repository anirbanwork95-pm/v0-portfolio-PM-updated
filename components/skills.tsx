'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillsData = {
  'Product & Growth': [
    'Product Strategy',
    'Roadmapping',
    'Feature Prioritization',
    'PRD/BRD Writing',
    'Subscription Pricing',
    'Monetization Strategy',
    'Product-Led Growth',
    'Conversion Optimization',
    'Feature Gating',
    'Revenue Share Models',
  ],
  'Technical & AI': [
    'Salesforce (CRM, Workflows, APIs)',
    'SQL',
    'API Integrations',
    'Platform Architecture',
    'AI-Powered Products',
    'RAG',
    'LLM Applications',
    'Sales Intelligence Tools',
    'Mixpanel',
    'Google Analytics',
    'Power BI',
    'Figma',
    'Jira',
  ],
  'Leadership': [
    'Cross-Functional Leadership',
    'Stakeholder Management',
    'Sprint Planning',
    'Agile/Scrum',
    'Backlog Management',
    'Customer Discovery',
    'User Research',
  ],
};

const domainBadges = [
  'B2B SaaS',
  'Healthcare Tech',
  'Enterprise Software',
  'Sales Enablement',
];

export function Skills() {
  const [activeTab, setActiveTab] = useState('Product & Growth');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const currentSkills = skillsData[activeTab as keyof typeof skillsData];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="py-24 px-4 bg-gradient-to-b from-gray-50 via-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-sm font-bold text-teal-600 tracking-widest uppercase">
            03. Skills
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            Skills & Expertise
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12 border-b border-gray-200"
        >
          {Object.keys(skillsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-all duration-300 relative ${
                activeTab === tab
                  ? 'text-foreground'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-full"
                  style={{ backgroundColor: 'var(--teal-accent)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-16"
        >
          {currentSkills.map((skill) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-center hover:shadow-md hover:border-gray-300 transition-all duration-300 cursor-default"
            >
              <span className="text-foreground/80 font-medium text-sm">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Domain Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
            Domain Expertise
          </p>
          <div className="flex flex-wrap gap-3">
            {domainBadges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 bg-teal-50 border border-teal-200 text-teal-700 rounded-full text-sm font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
