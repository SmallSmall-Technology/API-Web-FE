// import { api } from '@/lib/api.js'

/**
 * Create a partner developer account.
 *
 * TODO: there is no backend endpoint yet. This stub waits briefly and pretends
 * the sign-up worked. Replace it with a call through `api` once the endpoint
 * is confirmed.
 */
export async function signUp({ companyName, email, industry, password }) {
  await new Promise((resolve) => setTimeout(resolve, 600))
  return { companyName, email, industry, passwordLength: password.length }
}
