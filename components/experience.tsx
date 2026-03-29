'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface ExperienceEntry {
  id: string;
  company: string;
  title: string;
  dateRange: string;
  location: string;
  responsibilities: string[];
}

const experienceData: ExperienceEntry[] = [
  {
    id: 'tech-corp',
    company: 'TechCorp Inc.',
    title: 'Senior Product Designer',
    dateRange: 'Jan 2021 - Present',
    location: 'San Francisco, CA',
    responsibilities: [
      'Led design of customer-facing web application used by 500K+ users',
      'Established design system with 100+ reusable components',
      'Mentored 4 junior designers and improved team design process',
    ],
  },
  {
    id: 'design-studio',
    company: 'Creative Design Studio',
    title: 'Product Designer',
    dateRange: 'Jun 2019 - Dec 2020',
    location: 'New York, NY',
    responsibilities: [
      'Designed user interface for 12+ web and mobile applications',
      'Increased user engagement by 45% through UX improvements',
      'Collaborated with stakeholders to define product requirements and roadmap',
    ],
  },
  {
    id: 'startup',
    company: 'StartupXYZ',
    title: 'UI/UX Designer',
    dateRange: 'Mar 2018 - May 2019',
    location: 'Austin, TX',
    responsibilities: [
      'Created wireframes and prototypes for SaaS platform',
      'Conducted user research and usability testing with 50+ participants',
      'Developed brand identity and visual design guidelines',
    ],
  },
  {
    id: 'agency',
    company: 'Digital Agency Co.',
    title: 'Junior Designer',
    dateRange: 'Aug 2017 - Feb 2018',
    location: 'Boston, MA',
    responsibilities: [
      'Designed digital assets for 20+ client projects',
      'Assisted in concept development and brainstorming sessions',
      'Maintained brand consistency across all deliverables',
    ],
  },
];

interface TimelineCardProps {
  entry: ExperienceEntry;
  isLeft: boolean;
  index: number;
}

function TimelineCard({ entry, isLeft, index }: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`flex gap-8 items-start mb-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Timeline Dot and Line */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-md relative z-10" />
        {index < experienceData.length - 1 && (
          <div className="w-1 h-24 bg-gradient-to-b from-teal-600 to-teal-200 mt-2" />
        )}
      </div>

      {/* Card Content */}
      <div className="flex-1 bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{entry.title}</h3>
            <p className="text-sm text-teal-600 font-semibold">{entry.company}</p>
          </div>
          <span className="text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full whitespace-nowrap">
            {entry.dateRange}
          </span>
        </div>

        <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
          📍 {entry.location}
        </p>

        <ul className="space-y-2">
          {entry.responsibilities.map((resp, i) => (
            <li key={i} className="text-sm text-gray-700 flex gap-3">
              <span className="text-teal-600 font-bold flex-shrink-0 mt-0.5">•</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const companies = experienceData.map(entry => entry.company);
  const uniqueCompanies = Array.from(new Set(companies));
  const filteredData = selectedCompany
    ? experienceData.filter(entry => entry.company === selectedCompany)
    : experienceData;

  return (
    <section ref={ref} className="py-20 lg:py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-sm font-bold text-teal-600 tracking-widest uppercase">
            02. Experience
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            Work Experience
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap gap-3"
        >
          <button
            onClick={() => setSelectedCompany(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCompany === null
                ? 'bg-teal-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {uniqueCompanies.map(company => (
            <button
              key={company}
              onClick={() => setSelectedCompany(company)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                selectedCompany === company
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {company}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {filteredData.map((entry, index) => (
            <TimelineCard
              key={entry.id}
              entry={entry}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500">No experience entries found.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
