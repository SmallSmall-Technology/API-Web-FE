// import { api } from '@/lib/api.js'

/**
 * Onboarding progress and environment status for the signed-in partner.
 *
 * `steps` holds only the steps the partner can see: completed ones plus the
 * next one. Later steps stay hidden until they unlock. `totalSteps` counts all
 * of them.
 *
 * TODO: there is no backend endpoint yet. This stub returns the data shown in
 * the Figma design. Replace it with a call through `api` once the endpoint
 * is confirmed.
 */
export async function getOnboarding() {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return {
    totalSteps: 6,
    steps: [
      { id: 'sandbox-credentials', title: 'Generate sandbox API credentials', completed: true },
      { id: 'webhook-endpoint', title: 'Register a webhook endpoint', completed: false },
    ],
    environments: [
      { id: 'sandbox', name: 'Sandbox', status: 'active' },
      { id: 'production', name: 'Production', status: 'pending' },
    ],
  }
}
