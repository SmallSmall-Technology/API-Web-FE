/**
 * Notifications for the signed-in partner, newest first.
 * Each item: { id, title, message, createdAt (ISO string), read (boolean) }.
 *
 * TODO: there is no backend endpoint yet. This stub returns the sample
 * notifications from the Figma design. Replace it with a call through
 * `api` from '@/lib/api.js' once the endpoint is confirmed.
 */
export async function getNotifications() {
  await new Promise((resolve) => setTimeout(resolve, 300))

  const minutesAgo = (minutes) => new Date(Date.now() - minutes * 60_000).toISOString()

  return [
    {
      id: 'api-version',
      title: 'New api version available',
      message: 'New api version available',
      createdAt: minutesAgo(2),
      read: false,
    },
    {
      id: 'webhook-failure-3',
      title: 'Webhook delivery failing',
      message: 'staging endpoint: failure',
      createdAt: minutesAgo(4 * 60),
      read: true,
    },
    {
      id: 'webhook-failure-2',
      title: 'Webhook delivery failing',
      message: 'staging endpoint: failure',
      createdAt: minutesAgo(2 * 24 * 60),
      read: true,
    },
    {
      id: 'webhook-failure-1',
      title: 'Webhook delivery failing',
      message: 'staging endpoint: failure',
      createdAt: minutesAgo(2 * 24 * 60 + 30),
      read: true,
    },
  ]
}
