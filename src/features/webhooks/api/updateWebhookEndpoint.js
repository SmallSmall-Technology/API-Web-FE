// import { api } from '@/lib/api.js'
import { mockEndpoints } from './mockWebhooks.js'

/**
 * Change the URL of a registered webhook endpoint. Resolves with the updated endpoint.
 *
 * TODO: there is no backend endpoint yet. This stub updates the in-memory
 * list. Replace it with a call through `api` once the endpoint is confirmed.
 */
export async function updateWebhookEndpoint({ id, url }) {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const endpoint = mockEndpoints.find((item) => item.id === id)
  if (!endpoint) throw new Error('This endpoint no longer exists.')
  endpoint.url = url
  return { ...endpoint }
}
