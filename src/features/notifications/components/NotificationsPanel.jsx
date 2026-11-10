import { useId } from 'react'
import { Card } from '@/components/ui/Card.jsx'
import { formatTimeAgo } from '@/lib/formatTimeAgo.js'

export function NotificationItem({ title, message, createdAt, read }) {
  return (
    <li
      className={`border-b border-edge-strong pt-[7px] pr-2.5 pb-1.5 pl-[13px] last:border-b-0 ${
        read ? '' : 'bg-canvas'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-[14px]/[18px] text-ink">{title}</p>
        {!read && (
          <span className="size-2 shrink-0 rounded-full bg-ink">
            <span className="sr-only">Unread</span>
          </span>
        )}
      </div>
      <p className="mt-1 text-[12px]/[15px] text-ink-soft">{message}</p>
      <time dateTime={createdAt} className="mt-[15px] block text-[10px]/[13px] text-ink-soft">
        {formatTimeAgo(createdAt)}
      </time>
    </li>
  )
}

/**
 * The notifications list shown under the bell. Display only: it gets the
 * notifications as props and does no fetching.
 */
export default function NotificationsPanel({ id, notifications, isLoading = false, className = '' }) {
  const titleId = useId()

  return (
    <Card id={id} aria-labelledby={titleId} className={`overflow-hidden ${className}`}>
      <h2
        id={titleId}
        className="mx-[18px] border-b border-edge-strong px-3.5 pt-[22px] pb-[15px] text-[16px]/[20px] font-semibold text-ink"
      >
        Notifications
      </h2>

      {isLoading && <p className="px-8 py-6 text-[14px]/[18px] text-muted">Loading…</p>}

      {!isLoading && notifications?.length === 0 && (
        <p className="px-8 py-6 text-[14px]/[18px] text-muted">No notifications yet.</p>
      )}

      {notifications?.length > 0 && (
        <ul className="mx-[18px] min-h-0 flex-1 overflow-y-auto pb-[29px]">
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} {...notification} />
          ))}
        </ul>
      )}
    </Card>
  )
}
