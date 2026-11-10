/** Horizontal progress bar. `value` out of `max`. */
export default function ProgressBar({ value, max = 100, label }) {
  const percent = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      className="h-4 w-full overflow-hidden rounded-[7px] bg-edge"
    >
      <div className="h-full bg-ink transition-[width]" style={{ width: `${percent}%` }} />
    </div>
  )
}
