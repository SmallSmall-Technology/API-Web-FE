/**
 * In-memory API keys shared by the getApiKeys and createApiKey stubs, so a
 * created key shows up in the list. Resets on page reload.
 *
 * TODO: delete this file once the API key endpoints exist.
 */
export const mockApiKeys = [
  {
    id: 'key_1',
    name: 'SS_BNPL- API',
    createdAt: '2026-10-25',
    environment: 'sandbox',
    publicKey: 'pk_live_7f3k8393999983774747d2a',
    secretKey: 'sk_live_7f3k8393999983774747d2a',
  },
  {
    id: 'key_2',
    name: 'SS_BNPL- API',
    createdAt: '2026-10-25',
    environment: 'production',
    publicKey: 'pk_live_7f3k8393999983774747d2a',
    secretKey: 'sk_live_7f3k8393999983774747d2a',
  },
]
