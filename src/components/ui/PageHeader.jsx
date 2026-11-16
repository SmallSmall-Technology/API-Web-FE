/** Page title, optional subtitle, an optional action on the right and a divider underneath. */
export default function PageHeader({ title, subtitle, action }) {
  return (
    <header className="flex flex-wrap items-start justify-between gap-4 border-b border-edge-strong pb-[27px]">
      <div>
        <h1 className="text-[24px]/[31px] font-semibold text-ink">{title}</h1>
        {subtitle && <p className="mt-[7px] text-[14px]/[18px] text-ink">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0 sm:mt-4">{action}</div>}
    </header>
  )
}
