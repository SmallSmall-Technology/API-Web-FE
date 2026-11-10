import stepCheck from '@/assets/icons/step-check.svg'
import { Card, CardHeader } from '@/components/ui/Card.jsx'
import ProgressBar from '@/components/ui/ProgressBar.jsx'

export function StepItem({ title, completed }) {
  return (
    <li>
      <div className="flex items-center">
        <span aria-hidden className="flex w-[27px] shrink-0">
          {completed ? (
            <img src={stepCheck} alt="" width="12" height="12" />
          ) : (
            <span className="size-2 rounded-full bg-ink" />
          )}
        </span>
        <p className="text-[14px]/[18px] font-semibold text-ink">{title}</p>
      </div>
      {completed && <p className="pl-[27px] text-[12px]/[15px] text-ink-soft">Completed.</p>}
    </li>
  )
}

export function StepList({ steps }) {
  return (
    <ul className="space-y-[13px]">
      {steps.map((step) => (
        <StepItem key={step.id} {...step} />
      ))}
    </ul>
  )
}

export default function IntegrationProgressCard({ steps, totalSteps }) {
  const done = steps.filter((step) => step.completed).length

  return (
    <Card className="lg:min-h-[267px]">
      <CardHeader title="Integration progress" subtitle={`${done} of ${totalSteps} steps complete`} />
      <div className="px-[30px] pt-[17px] pb-6 lg:pr-9">
        <ProgressBar value={done} max={totalSteps} label="Integration progress" />
        <div className="mt-[22px]">
          <StepList steps={steps} />
        </div>
      </div>
    </Card>
  )
}
