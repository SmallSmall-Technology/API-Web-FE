import { useId } from 'react'
import bell from '@/assets/icons/bell.svg'
import toggleOn from '@/assets/icons/toggle-on.svg'
import { NotificationsPanel } from '@/features/notifications'
import { useDropdown } from '@/hooks/useDropdown.js'

/** Bell with an unread count. Clicking it opens the notifications panel. */
export function NotificationBell({ notifications, isLoading = false }) {
  const { open, toggle, rootRef, triggerRef } = useDropdown()
  const panelId = useId()
  const count = notifications?.filter((item) => !item.read).length ?? 0
  const label = count > 0 ? `Notifications, ${count} unread` : 'Notifications'

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={toggle}
        aria-label={label}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        className="relative flex size-5 cursor-pointer items-center justify-center hover:opacity-70"
      >
        <img src={bell} alt="" width="19.0624" height="20.0076" />
        {count > 0 && (
          <span
            aria-hidden
            className="absolute -top-[7px] left-[11px] flex size-4 items-center justify-center rounded-full bg-danger text-[11px] leading-none font-semibold text-white"
          >
            {count > 9 ? '9+' : count}
          </span>
        )}
      </button>

      {open && (
        <NotificationsPanel
          id={panelId}
          notifications={notifications}
          isLoading={isLoading}
          // Under the bell, right-aligned to it. On phones the bell sits too far
          // left for a 320px panel, so it spans the screen width instead.
          className="absolute top-full right-0 z-20 mt-3 max-h-[calc(100vh-90px)] w-80 max-sm:fixed max-sm:inset-x-2 max-sm:top-16 max-sm:mt-0 max-sm:w-auto"
        />
      )}
    </div>
  )
}

/** Pill that shows (and switches) whether the portal is pointed at live data. */
export function EnvironmentToggle({ isLive = true, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isLive}
      aria-label="Live mode"
      className="cursor-pointer rounded-[12px] border border-edge-strong bg-white p-0.5"
    >
      <span
        className={`flex items-center gap-1.5 rounded-[10px] bg-canvas py-0.5 pr-[9px] pl-[7px] text-[14px]/[18px] ${
          isLive ? 'text-positive' : 'text-muted'
        }`}
      >
        {/* Only the "on" icon exists in the design; mirror and grey it for "off". */}
        <img
          src={toggleOn}
          alt=""
          width="20"
          height="20"
          className={isLive ? '' : '-scale-x-100 grayscale'}
        />
        {isLive ? 'Live' : 'Sandbox'}
      </span>
    </button>
  )
}

const statusStyles = {
  operational: { dot: 'bg-online', text: 'All systems operational' },
  degraded: { dot: 'bg-brand', text: 'Degraded performance' },
  down: { dot: 'bg-danger', text: 'Service disruption' },
}

export function ApiStatusPill({ status = 'operational' }) {
  const style = statusStyles[status] ?? statusStyles.operational

  return (
    <div title={style.text} className="rounded-[12px] border border-edge-strong bg-white px-[3px] py-0.5">
      <span className="flex items-center gap-[7px] rounded-[10px] bg-canvas px-[13px] py-[3px] text-[14px]/[18px] text-ink">
        API Status
        <span aria-hidden className={`size-[7px] rounded-full ${style.dot}`} />
        <span className="sr-only">: {style.text}</span>
      </span>
    </div>
  )
}

/** Top row of the main panel. */
export default function TopBar({
  notifications,
  notificationsLoading,
  isLive,
  onToggleLive,
  apiStatus,
  onOpenMenu,
}) {
  return (
    <div className="flex items-center gap-1.5 border-b border-edge-strong py-3.5 pr-[21px] pl-4">
      <button
        type="button"
        onClick={onOpenMenu}
        aria-label="Open menu"
        className="flex size-[30px] cursor-pointer flex-col items-center justify-center gap-1 lg:hidden"
      >
        <span className="h-0.5 w-4 rounded bg-ink" />
        <span className="h-0.5 w-4 rounded bg-ink" />
        <span className="h-0.5 w-4 rounded bg-ink" />
      </button>

      <div className="ml-auto mr-[15px]">
        <NotificationBell notifications={notifications} isLoading={notificationsLoading} />
      </div>
      <EnvironmentToggle isLive={isLive} onToggle={onToggleLive} />
      <ApiStatusPill status={apiStatus} />
    </div>
  )
}
