/**
 * Short relative time in the style used by the designs:
 * "just now", "2m ago", "4h ago", "1 day ago", "2 days ago".
 */
export function formatTimeAgo(date, now = Date.now()) {
  const seconds = Math.max(0, Math.floor((now - new Date(date).getTime()) / 1000))

  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return days === 1 ? '1 day ago' : `${days} days ago`
}
