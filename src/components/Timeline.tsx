import { motion } from 'framer-motion'

export interface TimelineItem {
  date: string
  title: string
  description?: string
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-s border-black/10 dark:border-white/10 pl-6">
      {items.map((it, idx) => (
        <motion.li
          key={idx}
          initial={{ x: -12, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: idx * 0.04 }}
          className="mb-6"
        >
          <div className="absolute -left-[9px] mt-1 h-2.5 w-2.5 rounded-full bg-accent"></div>
          <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{it.date}</div>
          <div className="font-medium">{it.title}</div>
          {it.description && <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">{it.description}</div>}
        </motion.li>
      ))}
    </ol>
  )
}

