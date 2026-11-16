// import { api } from '@/lib/api.js'
import { mockEvents } from './mockWebhooks.js'

/**
 * Turn delivery of one event type on or off. Resolves with the updated event.
 *
 * TODO: there is no backend endpoint yet. This stub updates the in-memory
 * list. Replace it with a call through `api` once the endpoint is confirmed.
 */
export async function setWebhookEventEnabled({ name, enabled }) {
  await new Promise((resolve) => setTimeout(resolve, 200))
  const event = mockEvents.find((item) => item.name === name)
  if (!event) throw new Error(`Unknown event "${name}".`)
  event.enabled = enabled
  return { ...event }
}
