const variants = {
  success: { fill: 'bg-positive-soft text-positive', line: 'border-positive' },
  warning: { fill: 'bg-warning-soft text-warning', line: 'border-warning-line' },
}

// Padding + line height (+ border when shown) give the Figma heights.
const sizes = {
  sm: 'px-3 py-0.5 text-[12px]/[16px]',
  // 22px tall without a border, e.g. "Active" on webhook endpoints.
  md: 'px-[11px] py-0.5 text-[14px]/[18px]',
}

/**
 * Small rounded label, e.g. "Active" or "Pending".
 * `size` is "sm" (default) or "md"; `bordered` adds an outline in the variant's color.
 */
export default function StatusBadge({ variant = 'success', size = 'sm', bordered = true, children }) {
  const { fill, line } = variants[variant] ?? variants.success

  return (
    <span
      className={`inline-flex items-center rounded-[10px] ${sizes[size]} ${fill} ${bordered ? `border ${line}` : ''}`}
    >
      {children}
    </span>
  )
}
