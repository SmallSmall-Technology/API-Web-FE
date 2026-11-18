// import { api } from '@/lib/api.js'
import { mockDeliveries } from './mockWebhooks.js'

/**
 * Most recent webhook deliveries, newest first.
 *
 * Each delivery has the event name, the event ID, when it was last sent
 * (`deliveredAt`), the HTTP status the endpoint answered with, and how many
 * attempts it took (`attempts`).
 *
 * TODO: there is no backend endpoint yet. This stub returns the data shown in
 * the Figma design. Replace it with a call through `api` once the endpoint is
 * confirmed.
 */
export async function getWebhookDeliveries() {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockDeliveries.map((delivery) => ({ ...delivery }))
}
