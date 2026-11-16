// import { api } from '@/lib/api.js'
import { mockEndpoints } from './mockWebhooks.js'

function randomHex(length) {
  const bytes = crypto.getRandomValues(new Uint8Array(Math.ceil(length / 2)))
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('').slice(0, length)
}

/**
 * Register a webhook endpoint URL in the given environment ("sandbox" or
 * "production"). Resolves with the created endpoint.
 *
 * TODO: there is no backend endpoint yet. This stub adds the endpoint to the
 * in-memory list. Replace it with a call through `api` once the endpoint is
 * confirmed.
 */
export async function createWebhookEndpoint({ url, environment }) {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const endpoint = {
    id: `we_${randomHex(8)}`,
    url,
    environment,
    status: 'active',
  }
  mockEndpoints.push(endpoint)
  return { ...endpoint }
}
