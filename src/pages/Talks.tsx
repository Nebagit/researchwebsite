import SectionTitle from '../components/SectionTitle'
import Timeline, { TimelineItem } from '../components/Timeline'

const talks: TimelineItem[] = [
  { date: '2025', title: 'Invited Talk: Reliable AI Systems', description: 'Seminar on evaluation and robustness' },
  { date: '2024', title: 'Conference Presentation: Efficient Training', description: 'Presented at ML Systems Workshop' },
  { date: '2023', title: 'Guest Lecture: Interpretable Models', description: 'Undergraduate seminar series' }
]

const awards: TimelineItem[] = [
  { date: '2025', title: 'Best Paper Honorable Mention', description: 'Recognition for systems-focused contribution' },
  { date: '2024', title: 'Travel Grant', description: 'Support to present at international conference' }
]

export default function Talks() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <SectionTitle title="Talks & Awards" subtitle="Conferences, lectures, and recognitions" />
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-semibold mb-4">Talks & Lectures</h3>
          <Timeline items={talks} />
        </div>
        <div>
          <h3 className="font-semibold mb-4">Awards & Certificates</h3>
          <Timeline items={awards} />
        </div>
      </div>
    </div>
  )
}

