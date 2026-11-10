/**
 * The bordered two-column section from the login design:
 * a narrow left column (e.g. <Welcome />) and a wider right column (e.g. a form).
 * Columns stack on small screens.
 */
export default function SplitSection({ left, right }) {
  return (
    <section className="grid flex-1 border-y border-line lg:min-h-[586px] lg:grid-cols-[37fr_63fr]">
      <div className="border-b border-line px-4 py-12 sm:px-14 lg:border-r lg:border-b-0 lg:pt-[60px]">
        {left}
      </div>
      <div className="px-4 py-12 sm:px-14 lg:pt-[58px] lg:pl-[148px]">{right}</div>
    </section>
  )
}
