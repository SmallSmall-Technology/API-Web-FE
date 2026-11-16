import { useId, useState } from 'react'
import Button from '@/components/ui/Button.jsx'
import Modal from '@/components/ui/Modal.jsx'
import TextField from '@/components/ui/TextField.jsx'

/** Returns an error message, or null when `value` is a valid https URL. */
function validateUrl(value) {
  if (!value) return 'Enter the URL that should receive webhook events.'
  try {
    const url = new URL(value)
    if (url.protocol !== 'https:') return 'The URL must start with https://.'
    return null
  } catch {
    return 'Enter a valid URL, e.g. https://api.yourplatform.com/webhooks.'
  }
}

function AddEndpointForm({ onCancel, onSubmit, isSubmitting, error }) {
  const fieldId = useId()
  const errorId = `${fieldId}-error`
  const [url, setUrl] = useState('')
  const [validationError, setValidationError] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    const trimmed = url.trim()
    const message = validateUrl(trimmed)
    setValidationError(message)
    if (!message) onSubmit(trimmed)
  }

  const shownError = validationError ?? (error ? error.message || 'Could not add the endpoint. Please try again.' : null)

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-[21px]">
      <TextField
        id={fieldId}
        size="md"
        label="Endpoint URL"
        type="url"
        inputMode="url"
        autoComplete="off"
        spellCheck={false}
        placeholder="https://api.yourplatform/payflow/webhooks"
        value={url}
        onChange={(event) => {
          setUrl(event.target.value)
          if (validationError) setValidationError(null)
        }}
        aria-invalid={Boolean(validationError)}
        aria-describedby={shownError ? errorId : undefined}
        required
        autoFocus
      />

      {shownError && (
        <p id={errorId} role="alert" className="mt-2 text-[13px] text-red-600">
          {shownError}
        </p>
      )}

      <div className="mt-7 flex justify-end gap-[15px]">
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
          {isSubmitting ? 'Saving…' : 'Continue'}
        </Button>
      </div>
    </form>
  )
}

/** "Register a webhook endpoint" dialog: enter a URL, then continue. */
export default function AddEndpointModal({ open, onClose, onSubmit, isSubmitting, error }) {
  return (
    <Modal open={open} onClose={onClose} title="Register a webhook endpoint">
      <AddEndpointForm onCancel={onClose} onSubmit={onSubmit} isSubmitting={isSubmitting} error={error} />
    </Modal>
  )
}
