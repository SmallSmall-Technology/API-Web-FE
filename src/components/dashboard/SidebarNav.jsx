import { NavLink } from 'react-router'

export function NavItem({ to, icon, label, onNavigate }) {
  return (
    <NavLink
      to={to}
      end
      onClick={onNavigate}
      className={({ isActive }) =>
        `flex items-center gap-2 rounded-[8px] px-3 py-[9px] text-[14px]/[18px] font-semibold transition-colors ${
          isActive ? 'bg-nav-active text-ink' : 'text-ink-soft hover:bg-nav-active/60'
        }`
      }
    >
      <img src={icon} alt="" width="20" height="20" className="size-5 shrink-0" />
      <span className="whitespace-nowrap">{label}</span>
    </NavLink>
  )
}

/** A group of sidebar links with an optional heading. */
export function NavSection({ title, items, onNavigate, className = '' }) {
  return (
    <div className={`py-3.5 ${className}`}>
      {title && <p className="mb-0.5 px-3 text-[13px]/[17px] font-semibold text-subtle">{title}</p>}
      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.to}>
            <NavItem {...item} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Sidebar link groups, separated by dividers. */
export default function SidebarNav({ sections, onNavigate }) {
  return (
    <nav aria-label="Main">
      {sections.map((section, i) => (
        <NavSection
          key={section.title ?? i}
          {...section}
          onNavigate={onNavigate}
          className={i === 0 ? 'pt-5' : 'border-t border-edge'}
        />
      ))}
    </nav>
  )
}
