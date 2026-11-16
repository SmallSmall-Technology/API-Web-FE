import StatusBadge from '@/components/ui/StatusBadge.jsx'
import { EnvironmentBadge } from '@/features/credentials'
import webhookIcon from '@/assets/icons/webhook.svg'
import refreshIcon from '@/assets/icons/refresh-24.svg'
import pencilIcon from '@/assets/icons/pencil-15.svg'

const statusLabels = {
  active: 'Active',
}

const iconButtonClass =
  'inline-flex shrink-0 cursor-pointer items-center justify-center rounded-[4px] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink'

/** One registered endpoint: URL, environment, status, and refresh / edit actions. */
export default function EndpointRow({ endpoint, onRefresh, onEdit }) {
  return (
    <li className="flex flex-col gap-3 rounded-[10px] border border-edge pt-[15px] pr-4 pb-4 pl-4 sm:flex-row sm:items-center sm:pr-[27px]">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <img src={webhookIcon} alt="" width="20" height="20" className="shrink-0" />
        <code className="min-w-0 truncate font-mono text-[12px]/[15px] text-ink">{endpoint.url}</code>
      </div>

      <div className="flex items-center pl-8 sm:pl-0">
        <EnvironmentBadge environment={endpoint.environment} size="sm" />
        <span className="ml-1.5">
          <StatusBadge size="md" bordered={false}>
            {statusLabels[endpoint.status] ?? endpoint.status}
          </StatusBadge>
        </span>

        <button
          type="button"
          onClick={() => onRefresh?.(endpoint)}
          aria-label={`Refresh ${endpoint.url}`}
          className={`ml-[15px] ${iconButtonClass}`}
        >
          <img src={refreshIcon} alt="" width="24" height="24" />
        </button>

        <button
          type="button"
          onClick={() => onEdit?.(endpoint)}
          aria-label={`Edit ${endpoint.url}`}
          className={`ml-[26px] flex-col gap-0.5 text-[11px]/[13px] text-ink ${iconButtonClass}`}
        >
          <img src={pencilIcon} alt="" width="15" height="15" />
          <span aria-hidden>Edit</span>
        </button>
      </div>
    </li>
  )
}
