import trashIcon from '@/assets/icons/trash.svg'
import EnvironmentBadge from './EnvironmentBadge.jsx'
import KeyField from './KeyField.jsx'

/** Shared with the column headings in ApiKeysCard so they line up with the rows. */
export const apiKeyColumnsClass = 'lg:grid-cols-[233px_minmax(0,1fr)_185px_71px]'

const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

function formatDate(value) {
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? '' : dateFormat.format(date)
}

/** One API key: name and date, its public and secret keys, environment and delete action. */
export default function ApiKeyRow({ apiKey, onDelete }) {
  return (
    <li className={`grid gap-4 py-5 lg:items-start lg:gap-0 ${apiKeyColumnsClass}`}>
      <div className="min-w-0">
        <p className="text-[14px]/[18px] font-semibold text-ink-soft">{apiKey.name}</p>
        <p className="mt-[5px] text-[12px]/[15px] text-subtle">Created {formatDate(apiKey.createdAt)}</p>
      </div>

      <div className="min-w-0 space-y-[7px] lg:pt-px">
        <KeyField label="Public key" value={apiKey.publicKey} />
        <KeyField label="Secret key" value={apiKey.secretKey} hidden />
      </div>

      <div className="flex items-center justify-between lg:contents">
        <div className="lg:-mt-[3px]">
          <EnvironmentBadge environment={apiKey.environment} />
        </div>

        <div className="lg:pt-px">
          <button
            type="button"
            onClick={() => onDelete?.(apiKey)}
            aria-label={`Delete ${apiKey.name}`}
            className="inline-flex size-[15px] cursor-pointer items-center justify-center rounded-[3px] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <img src={trashIcon} alt="" width="12.5" height="15" />
          </button>
        </div>
      </div>
    </li>
  )
}
