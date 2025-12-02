import SectionTitle from '../components/SectionTitle'
import ProjectCard, { Project } from '../components/ProjectCard'
import { useEffect, useState } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/src/data/projects.json', { cache: 'no-cache' })
      .then(r => r.json())
      .then(setProjects)
      .catch(() => setProjects([]))
  }, [])

  const ongoing = projects.filter(p => p.status === 'Ongoing')
  const completed = projects.filter(p => p.status !== 'Ongoing')

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <SectionTitle title="Projects" subtitle="Ongoing and completed research initiatives" />
      {ongoing.length > 0 && (
        <section className="mb-10">
          <h3 className="font-semibold mb-4">Ongoing</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {ongoing.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>
        </section>
      )}
      <section>
        <h3 className="font-semibold mb-4">Completed</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {completed.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>
      </section>
    </div>
  )
}

