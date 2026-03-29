'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const decorationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting Label */}
            <motion.div variants={itemVariants}>
              <span className="text-sm font-medium text-teal-600 tracking-wide uppercase">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Alex Chen
            </motion.h1>

            {/* Job Title */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 font-medium"
            >
              Full Stack Developer & Design Engineer
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed max-w-lg"
            >
              I craft beautiful, performant digital experiences by blending thoughtful design with robust engineering. Specializing in modern web technologies and user-centered solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white"
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-900 hover:bg-gray-50"
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Decoration */}
          <motion.div
            className="hidden lg:flex justify-center items-center relative h-96"
            variants={decorationVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Abstract Geometric Shapes */}
            <div className="relative w-full h-full">
              {/* Large Teal Circle */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 rounded-full bg-teal-100 opacity-60"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Navy Blue Accent Shape */}
              <motion.div
                className="absolute bottom-12 left-8 w-48 h-48 bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl opacity-80 transform -rotate-12"
                animate={{ y: [0, -20, 0], rotate: [-12, -15, -12] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Small Floating Circle */}
              <motion.div
                className="absolute top-32 left-12 w-24 h-24 rounded-full border-2 border-teal-400 opacity-60"
                animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Subtle Gray Accent */}
              <motion.div
                className="absolute bottom-0 right-16 w-40 h-40 rounded-full bg-gray-100 opacity-40"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
