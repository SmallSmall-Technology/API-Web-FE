// import { api } from '@/lib/api.js'
import { mockApiKeys } from './mockApiKeys.js'

/**
 * API keys for the signed-in partner.
 *
 * Each key has a public and a secret part, and belongs to one environment
 * ("sandbox" or "production").
 *
 * TODO: there is no backend endpoint yet. This stub returns the data shown in
 * the Figma design, plus any keys created this session. Replace it with a call
 * through `api` once the endpoint is confirmed.
 */
export async function getApiKeys() {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return [...mockApiKeys]
}
