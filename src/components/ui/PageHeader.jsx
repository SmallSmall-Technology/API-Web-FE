/** Page title, optional subtitle and a divider underneath. */
export default function PageHeader({ title, subtitle }) {
  return (
    <header className="border-b border-edge-strong pb-[27px]">
      <h1 className="text-[24px]/[31px] font-semibold text-ink">{title}</h1>
      {subtitle && <p className="mt-[7px] text-[14px]/[18px] text-ink">{subtitle}</p>}
    </header>
  )
}
