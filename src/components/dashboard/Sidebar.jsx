import Footer from '@/components/layout/Footer.jsx'
import Avatar from '@/components/ui/Avatar.jsx'
import SidebarNav, { NavSection } from './SidebarNav.jsx'
import UserMenu from './UserMenu.jsx'

export function CompanyBadge({ name }) {
  return (
    <div className="flex items-center gap-1.5 px-3 pt-[33px] pb-[11px]">
      <Avatar name={name} />
      <span className="truncate text-[14px]/[18px] font-semibold text-ink">{name}</span>
    </div>
  )
}

/**
 * Left-hand navigation. Always visible on large screens; on small screens it
 * slides in as a drawer while `open` is true.
 */
export default function Sidebar({
  company,
  email,
  sections,
  utilitySection,
  onLogout,
  isLoggingOut,
  open = false,
  onClose,
}) {
  return (
    <>
      {open && (
        <div aria-hidden onClick={onClose} className="fixed inset-0 z-30 bg-ink/30 lg:hidden" />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[258px] shrink-0 flex-col overflow-x-hidden overflow-y-auto bg-canvas pr-[9px] pl-3.5 transition-transform lg:sticky lg:top-0 lg:z-auto lg:h-screen lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="border-b border-edge">
          <CompanyBadge name={company} />
        </div>

        <SidebarNav sections={sections} onNavigate={onClose} />

        <div className="mt-auto border-t border-edge">
          <NavSection {...utilitySection} onNavigate={onClose} className="pb-[9px]" />
        </div>

        <UserMenu
          email={email}
          company={company}
          onLogout={onLogout}
          isLoggingOut={isLoggingOut}
        />

        <Footer copyright="SmallSmall Partner Portal 2026" links={[]} className="px-[3px] pt-[62px] pb-5" />
      </aside>
    </>
  )
}
