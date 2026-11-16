import Toggle from '@/components/ui/Toggle.jsx'

/** One event type: name, description and an on/off switch. */
export default function EventRow({ event, onToggle, disabled }) {
  return (
    <li className="flex items-center justify-between gap-4 py-[18px] pl-px sm:pr-[15px]">
      <div className="min-w-0">
        <p className="font-mono text-[14px]/[18px] font-bold break-all text-ink-soft">{event.name}</p>
        <p className="mt-px text-[12px]/[15px] text-subtle">{event.description}</p>
      </div>
      <Toggle
        checked={event.enabled}
        onChange={(enabled) => onToggle?.(event, enabled)}
        label={`Send ${event.name} events`}
        disabled={disabled}
      />
    </li>
  )
}
