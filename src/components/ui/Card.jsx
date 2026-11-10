/** White bordered panel used for dashboard content. */
export function Card({ className = '', children, ...props }) {
  return (
    <section className={`flex flex-col rounded-[15px] border border-edge bg-white ${className}`} {...props}>
      {children}
    </section>
  )
}

/**
 * Card title row with an optional subtitle and a divider underneath.
 * Padding is set so both versions are 59px tall, as in the design.
 */
export function CardHeader({ title, subtitle }) {
  return (
    <header
      className={`flex flex-col gap-[5px] border-b border-edge-strong px-[30px] ${subtitle ? 'py-2.5' : 'py-5'}`}
    >
      <h2 className="text-[14px]/[18px] font-semibold text-ink">{title}</h2>
      {subtitle && <p className="text-[12px]/[15px] text-ink-soft">{subtitle}</p>}
    </header>
  )
}
