'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const skillsData = {
  'Product & Growth': [
    'Product Strategy',
    'Market Analysis',
    'User Research',
    'A/B Testing',
    'Growth Metrics',
    'Data Analysis',
    'Roadmapping',
    'Customer Insights'
  ],
  'Technical': [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'PostgreSQL',
    'APIs',
    'Web Performance'
  ],
  'Leadership': [
    'Team Building',
    'Mentoring',
    'Strategic Planning',
    'Cross-functional Collaboration',
    'Decision Making',
    'Communication',
    'Project Management',
    'Problem Solving'
  ]
};

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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold tracking-widest text-gray-400">
              SECTION
            </span>
            <span
              className="text-3xl font-bold"
              style={{ color: 'var(--teal-accent)' }}
            >
              03
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            A diverse toolkit spanning product, technical, and leadership domains.
          </p>
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-20"
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
      </div>
    </section>
  );
}
