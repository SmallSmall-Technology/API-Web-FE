import Modal from '@/components/ui/Modal.jsx'
import EndpointForm from './EndpointForm.jsx'

/**
 * "Edit Webhook endpoint" dialog for changing an endpoint's URL.
 * Open while `endpoint` is set. Saving an unchanged URL just closes the dialog.
 */
export default function EditEndpointModal({ endpoint, onClose, onSubmit, isSubmitting, error }) {
  function handleSubmit({ url }) {
    if (url === endpoint.url) onClose()
    else onSubmit({ id: endpoint.id, url })
  }

  return (
    <Modal open={Boolean(endpoint)} onClose={onClose} title="Edit Webhook endpoint">
      {endpoint && (
        <EndpointForm
          // A different endpoint starts a fresh form.
          key={endpoint.id}
          initialValues={{ url: endpoint.url }}
          onCancel={onClose}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          error={error}
        />
      )}
    </Modal>
  )
}
