import { useId, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Button from '@/components/ui/Button.jsx'
import { Card } from '@/components/ui/Card.jsx'
import PageHeader from '@/components/ui/PageHeader.jsx'
import {
  AddEndpointModal,
  DeliveriesCard,
  EditEndpointModal,
  EndpointsCard,
  createWebhookEndpoint,
  EventCatalogCard,
  WebhookTabs,
  getWebhookDeliveries,
  getWebhookEndpoints,
  getWebhookEvents,
  setWebhookEventEnabled,
  updateWebhookEndpoint,
} from '@/features/webhooks'
import paperPlaneIcon from '@/assets/icons/paper-plane.svg'
import plusIcon from '@/assets/icons/plus-15.svg'

const tabs = [
  { value: 'events', label: 'Event catalog' },
  { value: 'deliveries', label: 'Recent deliveries' },
  { value: 'payload', label: 'Payload' },
]

// Both header buttons are 147px wide in the design, with their content centered.
const headerButtonClass = 'w-[147px] px-0!'

function QueryState({ query, errorMessage, children }) {
  if (query.isPending) return <p className="text-[14px] text-muted">Loading…</p>
  if (query.isError) {
    return (
      <p role="alert" className="text-[14px] text-red-600">
        {query.error.message || errorMessage}
      </p>
    )
  }
  return children(query.data)
}

export default function Webhooks() {
  const queryClient = useQueryClient()
  const tabsId = useId()
  const [activeTab, setActiveTab] = useState('events')
  const [addOpen, setAddOpen] = useState(false)
  // The endpoint being edited; the edit dialog is open while this is set.
  const [editing, setEditing] = useState(null)

  const endpoints = useQuery({ queryKey: ['webhook-endpoints'], queryFn: getWebhookEndpoints })
  const events = useQuery({ queryKey: ['webhook-events'], queryFn: getWebhookEvents })
  // Only fetched once the "Recent deliveries" tab is opened.
  const deliveries = useQuery({
    queryKey: ['webhook-deliveries'],
    queryFn: getWebhookDeliveries,
    enabled: activeTab === 'deliveries',
  })

  // Flip the switch straight away and roll back if the request fails.
  const toggleEvent = useMutation({
    mutationFn: setWebhookEventEnabled,
    onMutate: async ({ name, enabled }) => {
      await queryClient.cancelQueries({ queryKey: ['webhook-events'] })
      const previous = queryClient.getQueryData(['webhook-events'])
      queryClient.setQueryData(['webhook-events'], (list = []) =>
        list.map((event) => (event.name === name ? { ...event, enabled } : event)),
      )
      return { previous }
    },
    onError: (_error, _variables, context) => {
      queryClient.setQueryData(['webhook-events'], context?.previous)
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['webhook-events'] }),
  })

  const addEndpoint = useMutation({
    mutationFn: createWebhookEndpoint,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['webhook-endpoints'] })
      setAddOpen(false)
    },
  })

  function closeAdd() {
    setAddOpen(false)
    addEndpoint.reset()
  }

  const editEndpoint = useMutation({
    mutationFn: updateWebhookEndpoint,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['webhook-endpoints'] })
      setEditing(null)
    },
  })

  function closeEdit() {
    setEditing(null)
    editEndpoint.reset()
  }

  return (
    <>
      <PageHeader
        title="Webhooks & Real time events"
        subtitle="Register endpoints, choose events, verify the handshake, and monitor every delivery"
        action={
          <div className="flex flex-wrap gap-2.5">
            {/* TODO: open the send-test-event flow once it is designed and the endpoint exists. */}
            <Button size="compact" variant="secondary" className={`${headerButtonClass} gap-2!`}>
              <img src={paperPlaneIcon} alt="" width="20" height="20" />
              Send test event
            </Button>
            <Button size="compact" onClick={() => setAddOpen(true)} className={`${headerButtonClass} gap-3!`}>
              <img src={plusIcon} alt="" width="15" height="15" />
              Add endpoint
            </Button>
          </div>
        }
      />

      <div className="mt-[35px]">
        <QueryState query={endpoints} errorMessage="Could not load your endpoints.">
          {/* TODO: pass onRefresh once that flow and endpoint exist. */}
          {(data) => <EndpointsCard endpoints={data} onEdit={setEditing} />}
        </QueryState>
      </div>

      <div className="mt-[30px]">
        <WebhookTabs
          tabs={tabs}
          value={activeTab}
          onChange={setActiveTab}
          idPrefix={tabsId}
          label="Webhook details"
        />

        <div
          role="tabpanel"
          id={`${tabsId}-panel-${activeTab}`}
          aria-labelledby={`${tabsId}-tab-${activeTab}`}
          className="mt-[33px]"
        >
          {activeTab === 'events' && (
            <>
              <QueryState query={events} errorMessage="Could not load the event catalog.">
                {(data) => (
                  <EventCatalogCard
                    events={data}
                    onToggle={(event, enabled) => toggleEvent.mutate({ name: event.name, enabled })}
                    pendingEvent={toggleEvent.isPending ? toggleEvent.variables?.name : undefined}
                  />
                )}
              </QueryState>
              {toggleEvent.isError && (
                <p role="alert" className="mt-3 text-[13px] text-red-600">
                  {toggleEvent.error.message || 'Could not update the event. Please try again.'}
                </p>
              )}
            </>
          )}

          {activeTab === 'deliveries' && (
            <QueryState query={deliveries} errorMessage="Could not load recent deliveries.">
              {(data) => <DeliveriesCard deliveries={data} />}
            </QueryState>
          )}

          {activeTab === 'payload' && (
            // TODO: build this tab once it is designed.
            <Card>
              <p className="px-4 py-10 text-center text-[14px]/[18px] text-subtle">Coming soon</p>
            </Card>
          )}
        </div>
      </div>

      <AddEndpointModal
        open={addOpen}
        onClose={closeAdd}
        onSubmit={({ url, environment }) => addEndpoint.mutate({ url, environment })}
        isSubmitting={addEndpoint.isPending}
        error={addEndpoint.error}
      />

      <EditEndpointModal
        endpoint={editing}
        onClose={closeEdit}
        onSubmit={(changes) => editEndpoint.mutate(changes)}
        isSubmitting={editEndpoint.isPending}
        error={editEndpoint.error}
      />
    </>
  )
}
