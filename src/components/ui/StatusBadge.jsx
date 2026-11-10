const variants = {
  success: 'border-positive bg-positive-soft text-positive',
  warning: 'border-warning-line bg-warning-soft text-warning',
}

/** Small rounded label, e.g. "Active" or "Pending". */
export default function StatusBadge({ variant = 'success', children }) {
  return (
    <span
      className={`inline-flex items-center rounded-[10px] border px-3 py-0.5 text-[12px]/[16px] ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
