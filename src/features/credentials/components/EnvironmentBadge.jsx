const environments = {
  sandbox: { label: 'Sandbox', className: 'border-info bg-info-soft text-info' },
  production: { label: 'Production', className: 'border-ink-soft bg-nav-active text-ink-soft' },
}

// Padding + border + 18px line height give the Figma heights.
const sizes = {
  // 24px tall, fixed width so badges line up in the API keys table.
  md: 'w-[88px] justify-center py-0.5',
  // 22px tall, fits its label (webhook endpoints).
  sm: 'px-[10px] py-px',
}

/** Pill showing which environment an API key or endpoint belongs to. */
export default function EnvironmentBadge({ environment, size = 'md' }) {
  const { label, className } = environments[environment] ?? environments.sandbox

  return (
    <span className={`inline-flex rounded-[10px] border text-[14px]/[18px] ${sizes[size]} ${className}`}>
      {label}
    </span>
  )
}
