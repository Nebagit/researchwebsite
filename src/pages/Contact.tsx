import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import { GraduationCap, Github, Linkedin, Globe } from 'lucide-react'

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <SectionTitle title="Contact" subtitle="Reach out for collaboration or opportunities" />
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <ContactForm />
        </div>
        <div>
          <div className="rounded-lg border border-black/10 dark:border-white/10 p-5 bg-white dark:bg-charcoal/60">
            <h3 className="font-semibold">Profiles</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a className="inline-flex items-center gap-2 hover:text-accent" href="https://scholar.google.com" target="_blank" rel="noreferrer">
                  <GraduationCap size={18} /> Google Scholar
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 hover:text-accent" href="https://orcid.org" target="_blank" rel="noreferrer">
                  <Globe size={18} /> ORCID
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 hover:text-accent" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 hover:text-accent" href="https://github.com" target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

