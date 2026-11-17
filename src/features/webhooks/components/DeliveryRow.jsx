import HttpStatusBadge from './HttpStatusBadge.jsx'

/**
 * Shared with the column headings in DeliveriesCard so they line up with the rows.
 * Fractions of the Figma widths (443 / 290 / 135 / 141px) so the table fits narrower screens too;
 * Time and HTTP Status keep enough room for "10:30:55pm" and "500  attempt 5" on one line.
 */
export const deliveryColumnsClass =
  'lg:grid-cols-[minmax(0,443fr)_minmax(0,290fr)_minmax(92px,135fr)_minmax(140px,141fr)]'

const timeFormat = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
})
const fullFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'medium' })

/** "10:30:55pm", as in the design. Empty for an invalid date. */
function formatTime(date) {
  return timeFormat
    .formatToParts(date)
    .filter((part) => !(part.type === 'literal' && part.value.trim() === ''))
    .map((part) => (part.type === 'dayPeriod' ? part.value.toLowerCase() : part.value))
    .join('')
}

const monoClass = 'font-mono text-[12px]/[16px] font-bold'

/** One delivery: event name, event ID, time sent, HTTP status and retry count. */
export default function DeliveryRow({ delivery }) {
  const date = new Date(delivery.deliveredAt)
  const validDate = !Number.isNaN(date.getTime())

  return (
    <li className={`grid gap-2 py-4 lg:items-center lg:gap-0 lg:py-[18px] ${deliveryColumnsClass}`}>
      <p className={`${monoClass} min-w-0 break-all text-ink lg:pr-4`}>{delivery.event}</p>

      <div className={`${monoClass} flex gap-3 text-ink-soft lg:contents`}>
        <p className="min-w-0 truncate lg:pr-4">{delivery.eventId}</p>
        {validDate && (
          <time dateTime={date.toISOString()} title={fullFormat.format(date)} className="lg:pr-4">
            {formatTime(date)}
          </time>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1">
        <HttpStatusBadge status={delivery.status} />
        {delivery.attempts > 1 && (
          <span className={`${monoClass} whitespace-nowrap text-ink-soft`}>attempt {delivery.attempts}</span>
        )}
      </div>
    </li>
  )
}
