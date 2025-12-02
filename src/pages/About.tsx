import SectionTitle from '../components/SectionTitle'
import Timeline, { TimelineItem } from '../components/Timeline'
import { motion } from 'framer-motion'

const education: TimelineItem[] = [
  { date: '2023 – Present', title: 'Focus: AI & Computational Systems', description: 'Independent and collaborative research projects' },
  { date: '2019 – 2023', title: 'B.Sc. in Computer Science', description: 'Core: ML, Systems, Algorithms' }
]

const honors = [
  'Dean’s List (multiple terms)',
  'Best Undergraduate Research Poster',
  'Open-Source Contributor Recognition'
]

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionTitle title="About" subtitle="Biography, education, and affiliations" />
          <motion.p
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Nebiyu Tefera is a researcher focused on building reliable, interpretable, and efficient AI systems.
            His interests span learning theory, optimization, and scalable systems that translate to real-world impact.
            He values rigor, clarity, and reproducibility in research.
          </motion.p>
          <div className="mt-8">
            <SectionTitle title="Education & Timeline" />
            <Timeline items={education} />
          </div>
          <div className="mt-8">
            <a
              href="/Nebiyu-Tefera-CV.pdf"
              className="inline-flex items-center rounded-md border border-black/10 dark:border-white/10 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition"
            >
              Download CV
            </a>
          </div>
        </div>
        <div>
          <SectionTitle title="Honors & Affiliations" />
          <ul className="space-y-3">
            {honors.map(h => (
              <li key={h} className="rounded-lg border border-black/10 dark:border-white/10 p-4 bg-white dark:bg-charcoal/60">
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

