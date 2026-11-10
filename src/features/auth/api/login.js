// import { api } from '@/lib/api.js'

/**
 * Sign in a partner developer.
 *
 * TODO: there is no backend endpoint yet. This stub waits briefly and pretends
 * the sign-in worked. When the API is ready, replace the body with:
 *   return api.post('/auth/login', { email, password })
 */
export async function login({ email, password }) {
  await new Promise((resolve) => setTimeout(resolve, 600))
  return { email, passwordLength: password.length }
}
