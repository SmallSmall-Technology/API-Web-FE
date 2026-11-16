import { Card, CardHeader } from '@/components/ui/Card.jsx'
import ApiKeyRow, { apiKeyColumnsClass } from './ApiKeyRow.jsx'

const columns = ['Name', 'Keys', 'Environment', 'Action']

/** "Active Keys" card listing each API key with its public and secret parts. */
export default function ApiKeysCard({ apiKeys, onDelete }) {
  // Each API key holds a public and a secret key.
  const keyCount = apiKeys.length * 2

  return (
    <Card>
      <CardHeader title="Active Keys" subtitle={`${keyCount} ${keyCount === 1 ? 'key' : 'keys'}`} />

      <div className="px-4 pb-[13px] lg:pt-[29px] lg:pr-[27px] lg:pl-[30px]">
        {apiKeys.length === 0 ? (
          <p className="pb-4 text-[14px]/[18px] text-ink-soft">You have no API keys yet.</p>
        ) : (
          <>
            <div
              aria-hidden
              className={`hidden text-[14px]/[18px] font-semibold text-subtle lg:grid ${apiKeyColumnsClass}`}
            >
              {columns.map((column) => (
                <span key={column}>{column}</span>
              ))}
            </div>
            <ul className="divide-y divide-edge">
              {apiKeys.map((apiKey) => (
                <ApiKeyRow key={apiKey.id} apiKey={apiKey} onDelete={onDelete} />
              ))}
            </ul>
          </>
        )}
      </div>
    </Card>
  )
}
