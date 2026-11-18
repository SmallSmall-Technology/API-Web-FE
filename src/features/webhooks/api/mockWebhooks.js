/**
 * In-memory webhook data shared by the webhook API stubs, so changes (e.g.
 * turning an event off) show up when the list is refetched. Resets on page reload.
 *
 * TODO: delete this file once the webhook endpoints exist.
 */
export const mockEndpoints = [
  {
    id: 'we_1',
    url: 'https://api.amazon.com/payflow/webhooks',
    environment: 'sandbox',
    status: 'active',
  },
  {
    id: 'we_2',
    url: 'https://api.amazon.com/payflow/webhooks',
    environment: 'production',
    status: 'active',
  },
]

// Times have no zone so they read 10:30:55pm in any timezone, as in the design.
export const mockDeliveries = [
  { id: 'dlv_1', event: 'checkout.session.completed', eventId: 'evt_8f21aa', deliveredAt: '2026-10-25T22:30:55', status: 200, attempts: 1 },
  { id: 'dlv_2', event: 'order.confirmed', eventId: 'evt_8f21aa', deliveredAt: '2026-10-25T22:30:55', status: 500, attempts: 5 },
  { id: 'dlv_3', event: 'payment.installment.paid', eventId: 'evt_8f21aa', deliveredAt: '2026-10-25T22:30:55', status: 200, attempts: 1 },
  { id: 'dlv_4', event: 'payment.upfront.paid', eventId: 'evt_8f21aa', deliveredAt: '2026-10-25T22:30:55', status: 429, attempts: 2 },
]

export const mockEvents = [
  { name: 'checkout.session.completed', description: 'Customer finished the BNPL application', enabled: true },
  { name: 'order.confirmed', description: 'Plan approved and funds reserved for capture', enabled: true },
  { name: 'payment.installment.paid', description: 'An installment was successfully charged', enabled: false },
  { name: 'payment.installment.failed', description: 'An installment charge was declined', enabled: true },
  { name: 'payment.upfront.paid', description: 'Customer paid upfront', enabled: true },
]
