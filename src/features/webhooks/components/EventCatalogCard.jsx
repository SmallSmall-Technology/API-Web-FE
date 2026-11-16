import { Card } from '@/components/ui/Card.jsx'
import EventRow from './EventRow.jsx'

/** List of event types with a switch to turn delivery of each one on or off. */
export default function EventCatalogCard({ events, onToggle, pendingEvent }) {
  return (
    <Card>
      {events.length === 0 ? (
        <p className="px-4 py-6 text-[14px]/[18px] text-ink-soft sm:px-[30px]">No events are available yet.</p>
      ) : (
        <ul className="divide-y divide-edge-strong px-4 pb-[21px] sm:px-[29px]">
          {events.map((event) => (
            <EventRow
              key={event.name}
              event={event}
              onToggle={onToggle}
              disabled={pendingEvent === event.name}
            />
          ))}
        </ul>
      )}
    </Card>
  )
}
