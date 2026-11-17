/** Outlined pill with an HTTP status code, e.g. "200". Padding + border give the 24px Figma height. */
export default function HttpStatusBadge({ status }) {
  return (
    <span className="inline-flex w-[52px] shrink-0 justify-center rounded-[10px] border border-edge-strong bg-white py-0.5 font-mono text-[14px]/[18px] text-ink">
      {status}
    </span>
  )
}
