import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Experience */}
      <Experience />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Contact & Footer */}
      <Contact />
    </div>
  )
}
