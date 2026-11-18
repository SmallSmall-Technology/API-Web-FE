import Modal from '@/components/ui/Modal.jsx'
import EndpointForm from './EndpointForm.jsx'

/** "Register a webhook endpoint" dialog: enter a URL and pick an environment, then save. */
export default function AddEndpointModal({ open, onClose, onSubmit, isSubmitting, error }) {
  return (
    <Modal open={open} onClose={onClose} title="Register a webhook endpoint">
      <EndpointForm
        showEnvironment
        onCancel={onClose}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
        error={error}
      />
    </Modal>
  )
}
