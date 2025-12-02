import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import PublicationCard, { Publication } from '../components/PublicationCard'
import ProjectCard, { Project } from '../components/ProjectCard'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [pubs, setPubs] = useState<Publication[]>([])
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/src/data/publications.json', { cache: 'no-cache' })
      .then(r => r.json())
      .then(setPubs)
      .catch(() => setPubs([]))
    fetch('/src/data/projects.json', { cache: 'no-cache' })
      .then(r => r.json())
      .then(setProjects)
      .catch(() => setProjects([]))
  }, [])

  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <section className="mb-12">
          <SectionTitle title="Selected Publications" subtitle="Peer-reviewed and preprints" />
          <div className="grid gap-6 md:grid-cols-2">
            {pubs.slice(0, 4).map((p, i) => <PublicationCard key={i} pub={p} />)}
          </div>
          <div className="mt-6">
            <Link to="/research" className="text-sm text-primary hover:underline">View all publications →</Link>
          </div>
        </section>
        <section>
          <SectionTitle title="Recent Projects" subtitle="Ongoing and completed work" />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>
          <div className="mt-6">
            <Link to="/projects" className="text-sm text-primary hover:underline">Explore all projects →</Link>
          </div>
        </section>
      </div>
    </>
  )
}

