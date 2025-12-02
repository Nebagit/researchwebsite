import SectionTitle from '../components/SectionTitle'
import { motion } from 'framer-motion'

const posts = [
  { title: 'Notes on Evaluation in AI Systems', date: '2025-10-01', excerpt: 'Thoughts on metrics, reliability, and meaningful progress.' },
  { title: 'Bridging Theory and Practice', date: '2025-06-12', excerpt: 'On designing experiments that test claims rigorously.' }
]

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <SectionTitle title="Blog & Essays" subtitle="Academic reflections and research notes" />
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.03 }}
            className="rounded-lg border border-black/10 dark:border-white/10 p-5 bg-white dark:bg-charcoal/60 hover:shadow-soft transition"
          >
            <div className="text-xs text-gray-500">{new Date(p.date).toLocaleDateString()}</div>
            <h3 className="font-semibold mt-1">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{p.excerpt}</p>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

