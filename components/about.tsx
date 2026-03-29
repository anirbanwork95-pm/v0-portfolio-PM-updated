'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import CountUp from 'react-countup';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

interface StatCardProps {
  number: number;
  suffix?: string;
  label: string;
  isInView: boolean;
}

function StatCard({ number, suffix = '', label, isInView }: StatCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
    >
      <div className="text-center">
        <div className="text-4xl lg:text-5xl font-bold text-teal-600 mb-2">
          {isInView ? (
            <CountUp end={number} duration={2.5} suffix={suffix} />
          ) : (
            `0${suffix}`
          )}
        </div>
        <p className="text-gray-600 text-sm lg:text-base font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-16"
        >
          <span className="text-sm font-bold text-teal-600 tracking-widest uppercase">
            01. About
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            About Me
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16 lg:mb-20">
          {/* Bio Section */}
          <motion.div
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-700 leading-relaxed text-base lg:text-lg"
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 leading-relaxed text-base lg:text-lg mt-6"
            >
              {`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`}
            </motion.p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <StatCard
              number={12}
              suffix="+"
              label="Years Experience"
              isInView={isInView}
            />
            <StatCard
              number={1.2}
              suffix="M+"
              label="Users Impacted"
              isInView={isInView}
            />
            <StatCard
              number={45}
              suffix="+"
              label="Projects Completed"
              isInView={isInView}
            />
            <StatCard
              number={98}
              suffix="%"
              label="Client Satisfaction"
              isInView={isInView}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
