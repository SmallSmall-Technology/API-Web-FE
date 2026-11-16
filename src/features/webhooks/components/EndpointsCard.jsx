import { Card } from '@/components/ui/Card.jsx'
import EndpointRow from './EndpointRow.jsx'

/** "Endpoints" card listing each registered webhook URL. */
export default function EndpointsCard({ endpoints, onRefresh, onEdit }) {
  return (
    <Card>
      {/* Shorter (50px) and softer than CardHeader, as in the design. */}
      <header className="border-b border-edge-strong px-4 py-[15px] sm:px-[30px]">
        <h2 className="text-[14px]/[18px] font-semibold text-ink-soft">Endpoints</h2>
      </header>

      <div className="px-4 pt-[22px] pb-[31px] sm:px-[30px]">
        {endpoints.length === 0 ? (
          <p className="text-[14px]/[18px] text-ink-soft">You have not added any endpoints yet.</p>
        ) : (
          <ul className="space-y-2">
            {endpoints.map((endpoint) => (
              <EndpointRow key={endpoint.id} endpoint={endpoint} onRefresh={onRefresh} onEdit={onEdit} />
            ))}
          </ul>
        )}
      </div>
    </Card>
  )
}
