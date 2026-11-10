// import { api } from '@/lib/api.js'

/**
 * Verify the one-time code emailed after sign-in.
 *
 * TODO: there is no backend endpoint yet. This stub waits briefly and pretends
 * the code is valid. When the API is ready, replace the body with:
 *   return api.post('/auth/otp/verify', { email, code })
 */
export async function verifyOtp({ email, code }) {
  await new Promise((resolve) => setTimeout(resolve, 600))
  return { email, verified: code.length === 6 }
}

/**
 * Send a new one-time code to the email.
 *
 * TODO: replace with: return api.post('/auth/otp/resend', { email })
 */
export async function resendOtp({ email }) {
  await new Promise((resolve) => setTimeout(resolve, 600))
  return { email }
}
