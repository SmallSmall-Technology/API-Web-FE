// import { api } from '@/lib/api.js'
import { mockEvents } from './mockWebhooks.js'

/**
 * Event types a partner can subscribe to, and whether each one is turned on.
 *
 * TODO: there is no backend endpoint yet. This stub returns the data shown in
 * the Figma design. Replace it with a call through `api` once the endpoint is
 * confirmed.
 */
export async function getWebhookEvents() {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockEvents.map((event) => ({ ...event }))
}
