import { useId, useState } from 'react'
import Button from '@/components/ui/Button.jsx'
import SelectField from '@/components/ui/SelectField.jsx'
import TextField from '@/components/ui/TextField.jsx'

const environmentOptions = [
  { value: 'sandbox', label: 'Sandbox' },
  { value: 'production', label: 'Production' },
]

// A filled-in URL is shown in the same monospace style as the endpoint list;
// the placeholder keeps the regular field font.
const urlValueClass = 'not-placeholder-shown:font-mono not-placeholder-shown:text-[12px]'

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

function FieldError({ id, children }) {
  if (!children) return null
  return (
    <p id={id} role="alert" className="mt-2 text-[13px] text-red-600">
      {children}
    </p>
  )
}

/**
 * Endpoint URL (and optionally environment) form shared by the add and edit dialogs.
 * Calls `onSubmit({ url, environment })` once the values are valid; `environment`
 * is only included when `showEnvironment` is true.
 */
export default function EndpointForm({
  initialValues = { url: '', environment: '' },
  showEnvironment = false,
  onCancel,
  onSubmit,
  isSubmitting,
  error,
}) {
  const baseId = useId()
  const ids = {
    url: `${baseId}-url`,
    urlError: `${baseId}-url-error`,
    environment: `${baseId}-environment`,
    environmentError: `${baseId}-environment-error`,
  }
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  function update(field) {
    return (event) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const url = values.url.trim()
    const nextErrors = {}
    const urlError = validateUrl(url)
    if (urlError) nextErrors.url = urlError
    if (showEnvironment && !values.environment) nextErrors.environment = 'Choose an environment.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    onSubmit(showEnvironment ? { url, environment: values.environment } : { url })
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-[21px]">
      <TextField
        id={ids.url}
        size="md"
        label="Endpoint URL"
        type="url"
        inputMode="url"
        autoComplete="off"
        spellCheck={false}
        placeholder="https://api.yourplatform/payflow/webhooks"
        value={values.url}
        onChange={update('url')}
        inputClassName={urlValueClass}
        aria-invalid={Boolean(errors.url)}
        aria-describedby={errors.url ? ids.urlError : undefined}
        required
        autoFocus
      />
      <FieldError id={ids.urlError}>{errors.url}</FieldError>

      {showEnvironment && (
        <>
          <SelectField
            id={ids.environment}
            size="md"
            label="Environment"
            placeholder="Select"
            options={environmentOptions}
            value={values.environment}
            onChange={update('environment')}
            aria-invalid={Boolean(errors.environment)}
            aria-describedby={errors.environment ? ids.environmentError : undefined}
            required
            className="mt-[21px]"
          />
          <FieldError id={ids.environmentError}>{errors.environment}</FieldError>
        </>
      )}

      {error && (
        <p role="alert" className="mt-3 text-[13px] text-red-600">
          {error.message || 'Could not save the endpoint. Please try again.'}
        </p>
      )}

      <div className={`${showEnvironment ? 'mt-[30px]' : 'mt-7'} flex justify-end gap-[15px]`}>
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
          {isSubmitting ? 'Saving…' : 'Save'}
        </Button>
      </div>
    </form>
  )
}
