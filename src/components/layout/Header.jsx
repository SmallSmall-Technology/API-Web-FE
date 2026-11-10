import { Link } from 'react-router'
import logo from '@/assets/images/smallsmall-logo.svg'
import statusDot from '@/assets/icons/status-dot.svg'

function PillDivider() {
  return <span aria-hidden className="h-[14.5px] w-px bg-ink" />
}

export default function Header({
  status = 'All systems operational',
  documentationHref = '#',
  contactHref = '#',
  tagline = 'Partner developer portal',
}) {
  return (
    <header className="grid items-center gap-4 px-4 pt-[27px] sm:px-[53px] lg:grid-cols-[1fr_auto_1fr]">
      <Link to="/" className="justify-self-start">
        <img src={logo} alt="SmallSmall" width="149.119" height="40" />
      </Link>

      <nav className="flex min-h-[39px] flex-wrap items-center justify-center gap-x-3.5 gap-y-1 rounded-[20px] bg-brand px-6 py-2 text-[14px] leading-normal whitespace-nowrap lg:h-[39px] lg:w-[588px] lg:flex-nowrap lg:rounded-[30px] lg:py-0">
        <span className="flex items-center gap-1.5">
          <span className="font-semibold">API Status:</span>
          <img src={statusDot} alt="" width="15" height="15" />
          <span>{status}</span>
        </span>
        <PillDivider />
        <a href={documentationHref} className="hover:underline">
          Documentation
        </a>
        <PillDivider />
        <a href={contactHref} className="hover:underline">
          Contact partner team
        </a>
      </nav>

      <p className="hidden justify-self-end text-[16px] leading-normal text-subtle lg:block">
        {tagline}
      </p>
    </header>
  )
}
