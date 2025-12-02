import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid items-center gap-10 grid-cols-1 md:grid-cols-[1.5fr_1fr]">
        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight"
          >
            Nebiyu Tefera
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-lg sm:text-xl text-primary font-medium"
          >
            Artificial Intelligence & Computational Systems
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-gray-700 dark:text-gray-300 max-w-2xl"
          >
            I build robust, interpretable AI systems and computational frameworks that bridge
            theory and real-world impact—focused on learning, reasoning, and systems reliability.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/research"
              className="inline-flex items-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-white shadow-soft hover:shadow transition"
            >
              View Research
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center rounded-md border border-black/10 dark:border-white/10 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition"
            >
              Explore Projects
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="justify-self-center md:justify-self-end"
        >
          <img
            src="/portrait.svg"
            alt="Portrait of Nebiyu Tefera"
            className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 rounded-full object-cover ring-4 ring-white dark:ring-charcoal shadow-soft"
          />
        </motion.div>
      </div>
    </section>
  )
}

