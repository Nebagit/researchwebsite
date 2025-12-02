import { motion } from 'framer-motion'

export interface Publication {
  title: string
  authors: string
  year: number
  doi?: string
  summary: string
  pdf?: string
  topics?: string[]
}

export default function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <motion.article
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="rounded-lg border border-black/10 dark:border-white/10 p-5 bg-white dark:bg-charcoal/60 hover:shadow-soft transition"
    >
      <h3 className="font-semibold">{pub.title}</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{pub.authors} · {pub.year}</p>
      <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{pub.summary}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {pub.doi && (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-accent hover:underline"
          >
            DOI: {pub.doi}
          </a>
        )}
        {pub.pdf && (
          <a
            href={pub.pdf}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-primary hover:underline"
          >
            PDF
          </a>
        )}
      </div>
      {pub.topics && pub.topics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {pub.topics.map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-black/5 dark:bg-white/10">
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  )
}

