import SectionTitle from '../components/SectionTitle'
import PublicationCard, { Publication } from '../components/PublicationCard'
import { useEffect, useMemo, useState } from 'react'

export default function Research() {
  const [pubs, setPubs] = useState<Publication[]>([])
  const [query, setQuery] = useState('')
  const [year, setYear] = useState<string>('All')

  useEffect(() => {
    fetch('/src/data/publications.json', { cache: 'no-cache' })
      .then(r => r.json())
      .then(setPubs)
      .catch(() => setPubs([]))
  }, [])

  const years = useMemo(() => {
    const ys = Array.from(new Set(pubs.map(p => p.year))).sort((a, b) => b - a)
    return ['All', ...ys.map(String)]
  }, [pubs])

  const filtered = pubs.filter(p => {
    const matchesYear = year === 'All' || String(p.year) === year
    const q = query.toLowerCase()
    const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q) || p.authors.toLowerCase().includes(q)
    return matchesYear && matchesQuery
  })

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <SectionTitle title="Research & Publications" subtitle="Peer-reviewed articles and preprints" />
      <div className="flex flex-wrap gap-3 items-center mb-6">
        <input
          placeholder="Search title, authors, summary…"
          className="w-full sm:w-72 rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-charcoal/60 px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
          value={query}
          onChange={e => setQuery(e.target.value)}
          aria-label="Search publications"
        />
        <select
          className="rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-charcoal/60 px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
          value={year}
          onChange={e => setYear(e.target.value)}
          aria-label="Filter by year"
        >
          {years.map(y => <option key={y}>{y}</option>)}
        </select>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((p, i) => <PublicationCard key={i} pub={p} />)}
      </div>
    </div>
  )
}

