// import { api } from '@/lib/api.js'
import { mockEndpoints } from './mockWebhooks.js'

/**
 * Webhook endpoints registered by the signed-in partner.
 *
 * Each endpoint has a URL, an environment ("sandbox" or "production") and a
 * status ("active").
 *
 * TODO: there is no backend endpoint yet. This stub returns the data shown in
 * the Figma design. Replace it with a call through `api` once the endpoint is
 * confirmed.
 */
export async function getWebhookEndpoints() {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockEndpoints.map((endpoint) => ({ ...endpoint }))
}
