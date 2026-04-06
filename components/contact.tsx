'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, GraduationCap, MapPin, ArrowRight } from 'lucide-react';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

interface ContactMethod {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    icon: <Mail className="w-6 h-6" />,
    label: 'Email',
    value: 'anirban.work95@gmail.com',
    href: 'mailto:anirban.work95@gmail.com',
  },
  {
    id: 'phone',
    icon: <Phone className="w-6 h-6" />,
    label: 'Phone',
    value: '+91 72048 10797',
    href: 'tel:+917204810797',
  },
  {
    id: 'linkedin',
    icon: <LinkedInIcon className="w-6 h-6" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/anirban-banerjee95',
    href: 'https://linkedin.com/in/anirban-banerjee95',
  },
  {
    id: 'github',
    icon: <GitHubIcon className="w-6 h-6" />,
    label: 'GitHub',
    value: 'github.com/anirbanwork95-pm',
    href: 'https://github.com/anirbanwork95-pm',
  },
  {
    id: 'location',
    icon: <MapPin className="w-6 h-6" />,
    label: 'Location',
    value: 'Pune, India',
    href: '#',
  },
];

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  detail?: string;
}

const educationData: EducationItem[] = [
  {
    id: 'mba',
    degree: 'MBA',
    institution: 'KJ Somaiya Institute of Management, Mumbai',
    duration: 'Jun 2021 – Mar 2023',
    detail: 'GPA: 7.8',
  },
  {
    id: 'btech',
    degree: 'B.Tech',
    institution: 'Sapthagiri College of Engineering, Bangalore',
    duration: 'Jul 2014 – Mar 2018',
  },
];

function ContactCard({ method, index }: { method: ContactMethod; index: number }) {
  const isClickable = method.href !== '#';
  const Tag = isClickable ? motion.a : motion.div;
  const extraProps = isClickable
    ? {
        href: method.href,
        target: method.id === 'email' || method.id === 'phone' ? '_self' : '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <Tag
      {...(extraProps as object)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group flex flex-col items-center p-8 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 min-w-0 ${
        isClickable ? 'hover:shadow-md hover:border-teal-200 cursor-pointer' : 'cursor-default'
      }`}
    >
      <div className={`w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 transition-colors duration-300 mb-4 ${isClickable ? 'group-hover:bg-teal-600 group-hover:text-white' : ''}`}>
        {method.icon}
      </div>
      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
        {method.label}
      </span>
      <span className={`text-sm text-gray-700 text-center break-all w-full transition-colors duration-300 ${isClickable ? 'group-hover:text-teal-600' : ''}`}>
        {method.value}
      </span>
    </Tag>
  );
}

export function Contact() {
  const ref = useRef(null);

  return (
    <>
      <section ref={ref} id="contact" className="py-20 lg:py-32 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-bold text-teal-600 tracking-widest uppercase">
              05. Contact
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
              {"Let's Connect"}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Open to product roles, consulting engagements, and interesting conversations about growth, monetization, and AI-powered products.
            </p>
          </motion.div>

          {/* Say Hello Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <a
              href="mailto:anirban.work95@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Say Hello
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Contact Method Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <ContactCard key={method.id} method={method} index={index} />
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-teal-600" />
              <h3 className="text-xl font-bold text-gray-900">Education</h3>
            </div>
            <ul className="space-y-5">
              {educationData.map((edu) => (
                <li key={edu.id} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-teal-600 mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{edu.degree}</p>
                    <p className="text-sm text-gray-700">{edu.institution}</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {edu.duration}
                      {edu.detail && <span className="ml-2 text-teal-600 font-medium">{edu.detail}</span>}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Anirban Banerjee. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:anirban.work95@gmail.com"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/anirban-banerjee95"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/anirbanwork95-pm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
