import checkCircle from '@/assets/icons/check-circle.svg'

// Copy from the Figma design. The three highlights are placeholders there.
const defaultHighlights = [
  'Sign in to your developer account',
  'Sign in to your developer account',
  'Sign in to your developer account',
]

export default function Hero({
  title = 'Embed flexible housing & retail financing directly into your platform',
  subtitle = 'Enable your users to purchase items and pay rent flexibly through SmallSmall’s multi-tenant Developer API',
  highlights = defaultHighlights,
}) {
  return (
    <section className="px-4 pt-[59px] pb-[90px] text-center text-ink">
      <h1 className="mx-auto max-w-[870px] font-display text-[32px] font-semibold leading-normal sm:text-[48px]">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-2.5 max-w-[535px] font-display text-[16px] font-medium leading-normal text-muted">
          {subtitle}
        </p>
      )}

      {highlights.length > 0 && (
        <ul className="mt-[66px] flex flex-col items-center justify-center gap-x-10 gap-y-4 md:flex-row">
          {highlights.map((text, i) => (
            <li key={i} className="flex items-center gap-4 text-[16px] font-semibold leading-normal">
              <img src={checkCircle} alt="" width="20" height="20" />
              {text}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
