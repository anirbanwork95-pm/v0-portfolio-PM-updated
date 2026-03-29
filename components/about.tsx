'use client';

import { motion, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import CountUp from 'react-countup';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

interface StatCardProps {
  number: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  label: string;
  isInView: boolean;
}

function StatCard({ number, prefix = '', suffix = '', separator = '', label, isInView }: StatCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
    >
      <div className="text-center">
        <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">
          {isInView ? (
            <CountUp end={number} duration={2.5} prefix={prefix} suffix={suffix} separator={separator} />
          ) : (
            `${prefix}0${suffix}`
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
      id="about"
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
              Product Manager with 4+ years of experience in B2B SaaS, growth, and monetization. Currently at Bajaj Finserv Health, I&apos;ve built subscription models, AI-powered sales tools, and scaled a doctor platform from individual users to enterprise clinic chains. I specialize in turning ambiguous problem spaces into structured, revenue-generating products.
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
              number={11}
              prefix="₹"
              suffix="+ Cr ARR"
              label="Unlocked"
              isInView={isInView}
            />
            <StatCard
              number={200}
              suffix="K+"
              label="Doctors Onboarded"
              isInView={isInView}
            />
            <StatCard
              number={1200}
              suffix="+"
              separator=","
              label="Locations Served"
              isInView={isInView}
            />
            <StatCard
              number={10000}
              separator=","
              label="Paid Subscribers"
              isInView={isInView}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
