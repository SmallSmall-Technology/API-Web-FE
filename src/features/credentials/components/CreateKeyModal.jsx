import { useState } from 'react'
import Button from '@/components/ui/Button.jsx'
import Modal from '@/components/ui/Modal.jsx'
import EnvironmentPicker from './EnvironmentPicker.jsx'

function CreateKeyForm({ onCancel, onSubmit, isSubmitting, error }) {
  const [environment, setEnvironment] = useState('sandbox')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(environment)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-[21px]">
      <EnvironmentPicker name="environment" value={environment} onChange={setEnvironment} />

      {error && (
        <p role="alert" className="mt-3 text-[13px] text-red-600">
          {error.message || 'Could not create the key. Please try again.'}
        </p>
      )}

      <div className="mt-[51px] flex justify-end gap-[15px]">
        <Button size="compact" variant="secondary" onClick={onCancel} className="sm:w-[104px]">
          Cancel
        </Button>
        <Button
          type="submit"
          size="compact"
          weight="bold"
          disabled={isSubmitting}
          className="flex-1 sm:w-[211px] sm:flex-none"
        >
          {isSubmitting ? 'Generating…' : 'Generate key'}
        </Button>
      </div>
    </form>
  )
}

/** "Create a new API key" dialog: pick an environment, then generate. */
export default function CreateKeyModal({ open, onClose, onSubmit, isSubmitting, error }) {
  return (
    <Modal open={open} onClose={onClose} title="Create a new API key">
      <CreateKeyForm onCancel={onClose} onSubmit={onSubmit} isSubmitting={isSubmitting} error={error} />
    </Modal>
  )
}
