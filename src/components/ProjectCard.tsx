import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export interface Project {
  title: string
  description: string
  tech: string[]
  collaborators?: string[]
  outcomes?: string
  links?: { label: string; url: string }[]
  status?: 'Ongoing' | 'Completed'
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="rounded-lg border border-black/10 dark:border-white/10 p-5 bg-white dark:bg-charcoal/60 hover:shadow-soft transition"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold">{project.title}</h3>
        {project.status && (
          <span className="text-xs px-2 py-1 rounded bg-black/5 dark:bg-white/10">{project.status}</span>
        )}
      </div>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
      {project.tech?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-black/5 dark:bg-white/10">
              {t}
            </span>
          ))}
        </div>
      )}
      {project.collaborators && project.collaborators.length > 0 && (
        <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">
          Collaborators: {project.collaborators.join(', ')}
        </p>
      )}
      {project.outcomes && (
        <p className="mt-3 text-sm">{project.outcomes}</p>
      )}
      {project.links && project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {project.links.map(l => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-1 hover:text-accent">
              {l.label} <ExternalLink size={14} />
            </a>
          ))}
        </div>
      )}
    </motion.article>
  )
}

