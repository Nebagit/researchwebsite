import { Github, Linkedin, GraduationCap, Globe, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Nebiyu Tefera. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:text-accent" href="mailto:contact@example.com" aria-label="Email">
              <Mail size={20} />
            </a>
            <a className="hover:text-accent" href="https://scholar.google.com" target="_blank" rel="noreferrer" aria-label="Google Scholar">
              <GraduationCap size={20} />
            </a>
            <a className="hover:text-accent" href="https://orcid.org" target="_blank" rel="noreferrer" aria-label="ORCID">
              <Globe size={20} />
            </a>
            <a className="hover:text-accent" href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a className="hover:text-accent" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
          “Artificial Intelligence & Computational Systems” — designed with a minimalist academic aesthetic.
        </p>
      </div>
    </footer>
  )
}

