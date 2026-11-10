function FooterDivider() {
  return <span aria-hidden className="h-2.5 w-px bg-line" />
}

const defaultLinks = [
  { label: 'Support', href: '#' },
  { label: 'Documentation', href: '#' },
]

export default function Footer({
  copyright = 'SmallSmall Partner portal 2026',
  links = defaultLinks,
  className = 'px-4 py-9 sm:px-14',
}) {
  return (
    <footer
      className={`flex flex-wrap items-center gap-x-[18px] gap-y-2 text-[12px] leading-normal text-ink ${className}`}
    >
      <span>{copyright}</span>
      {links.map((link) => (
        <span key={link.label} className="contents">
          <FooterDivider />
          <a href={link.href} className="hover:underline">
            {link.label}
          </a>
        </span>
      ))}
    </footer>
  )
}
