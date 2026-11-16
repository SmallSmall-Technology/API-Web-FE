// import { api } from '@/lib/api.js'
import { mockApiKeys } from './mockApiKeys.js'

function randomHex(length) {
  const bytes = crypto.getRandomValues(new Uint8Array(Math.ceil(length / 2)))
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('').slice(0, length)
}

/**
 * Create a new API key in the given environment ("sandbox" or "production").
 * Resolves with the created key.
 *
 * TODO: there is no backend endpoint yet. This stub makes up a key and adds it
 * to the in-memory list. Replace it with a call through `api` once the
 * endpoint is confirmed.
 */
export async function createApiKey({ environment }) {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const suffix = randomHex(23)
  const key = {
    id: `key_${randomHex(8)}`,
    name: 'SS_BNPL- API',
    createdAt: new Date().toISOString(),
    environment,
    publicKey: `pk_live_${suffix}`,
    secretKey: `sk_live_${suffix}`,
  }
  mockApiKeys.push(key)
  return key
}
