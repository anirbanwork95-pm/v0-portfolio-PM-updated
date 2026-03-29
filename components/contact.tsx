'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, Github, GraduationCap, Award, Trophy, ArrowRight } from 'lucide-react';

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
    value: 'hello@johndoe.com',
    href: 'mailto:hello@johndoe.com',
  },
  {
    id: 'phone',
    icon: <Phone className="w-6 h-6" />,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    id: 'linkedin',
    icon: <Linkedin className="w-6 h-6" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/johndoe',
    href: 'https://linkedin.com/in/johndoe',
  },
  {
    id: 'github',
    icon: <Github className="w-6 h-6" />,
    label: 'GitHub',
    value: 'github.com/johndoe',
    href: 'https://github.com/johndoe',
  },
];

interface EducationItem {
  id: string;
  title: string;
  institution: string;
  year: string;
}

interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: string;
}

const educationData: EducationItem[] = [
  {
    id: 'masters',
    title: 'M.S. in Human-Computer Interaction',
    institution: 'Stanford University',
    year: '2017',
  },
  {
    id: 'bachelors',
    title: 'B.A. in Graphic Design',
    institution: 'Rhode Island School of Design',
    year: '2015',
  },
];

const awardsData: AwardItem[] = [
  {
    id: 'award1',
    title: 'Design Excellence Award',
    organization: 'AIGA',
    year: '2023',
  },
  {
    id: 'award2',
    title: 'Best Product Design',
    organization: 'Awwwards',
    year: '2022',
  },
  {
    id: 'award3',
    title: 'Innovation in UX',
    organization: 'UX Design Awards',
    year: '2021',
  },
];

function ContactCard({ method, index }: { method: ContactMethod; index: number }) {
  return (
    <motion.a
      href={method.href}
      target={method.id === 'email' || method.id === 'phone' ? '_self' : '_blank'}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 mb-4">
        {method.icon}
      </div>
      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
        {method.label}
      </span>
      <span className="text-sm text-gray-700 text-center group-hover:text-teal-600 transition-colors duration-300">
        {method.value}
      </span>
    </motion.a>
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
              {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}
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
              href="mailto:hello@johndoe.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Say Hello
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Contact Method Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {contactMethods.map((method, index) => (
              <ContactCard key={method.id} method={method} index={index} />
            ))}
          </div>

          {/* Education & Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
              Education & Recognition
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-teal-600" />
                  <h4 className="font-semibold text-gray-800">Education</h4>
                </div>
                <ul className="space-y-4">
                  {educationData.map((edu) => (
                    <li key={edu.id} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-teal-600 mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{edu.title}</p>
                        <p className="text-sm text-gray-500">
                          {edu.institution} &bull; {edu.year}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Awards */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-teal-600" />
                  <h4 className="font-semibold text-gray-800">Awards & Recognition</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {awardsData.map((award) => (
                    <div
                      key={award.id}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-teal-50 rounded-lg border border-teal-100"
                    >
                      <Award className="w-4 h-4 text-teal-600" />
                      <div className="text-left">
                        <p className="text-xs font-semibold text-gray-900">{award.title}</p>
                        <p className="text-xs text-gray-500">{award.organization} &bull; {award.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@johndoe.com"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
