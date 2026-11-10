import { Card, CardHeader } from '@/components/ui/Card.jsx'
import StatusBadge from '@/components/ui/StatusBadge.jsx'

const statusBadges = {
  active: { variant: 'success', label: 'Active' },
  pending: { variant: 'warning', label: 'Pending' },
}

export function EnvironmentRow({ name, status }) {
  const badge = statusBadges[status] ?? statusBadges.pending

  return (
    <li className="flex items-center justify-between gap-3 rounded-[10px] border border-edge py-[13px] pr-[13px] pl-[25px]">
      <span className="text-[14px]/[18px] font-semibold text-ink">{name}</span>
      <StatusBadge variant={badge.variant}>{badge.label}</StatusBadge>
    </li>
  )
}

export default function EnvironmentsCard({ environments }) {
  return (
    <Card className="lg:min-h-[267px]">
      <CardHeader title="Your environments" />
      <ul className="space-y-3 px-4 pt-4 pb-6">
        {environments.map((env) => (
          <EnvironmentRow key={env.id} name={env.name} status={env.status} />
        ))}
      </ul>
    </Card>
  )
}
