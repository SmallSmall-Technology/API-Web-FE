import { useEffect, useId, useRef } from "react";
import angleDown from "@/assets/icons/angle-small-down.svg";
import externalLink from "@/assets/icons/external-link.svg";
import Avatar from "@/components/ui/Avatar.jsx";
import { useDropdown } from "@/hooks/useDropdown.js";

/**
 * Signed-in user button at the bottom of the sidebar. Clicking it opens a
 * small panel above it with the company name and a "Log out" action.
 */
export default function UserMenu({ email, company, onLogout, isLoggingOut = false }) {
  const { open, toggle, rootRef, triggerRef } = useDropdown();
  const firstItemRef = useRef(null);
  const menuId = useId();

  // Move focus into the menu when it opens.
  useEffect(() => {
    if (open) firstItemRef.current?.focus();
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      {open && (
        <div className="absolute bottom-full left-0 z-10 mb-2 w-full rounded-[9px] border border-edge bg-white">
          {company && (
            <p className="px-8 pt-5.5 pb-3.75 text-[16px]/[20px] font-semibold break-words text-ink">
              {company}
            </p>
          )}
          <div aria-hidden className="mx-4.5 border-t border-edge-strong" />
          <div id={menuId} role="menu" aria-label="Account" className="px-2 pt-3.75 pb-3.25">
            <button
              ref={firstItemRef}
              type="button"
              role="menuitem"
              onClick={onLogout}
              disabled={isLoggingOut}
              className="flex w-full cursor-pointer items-center gap-4.75 rounded-[8px] px-6 py-2.5 text-left text-[14px]/[18px] text-ink hover:bg-canvas focus-visible:bg-canvas focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
            >
              <img src={externalLink} alt="" width="20" height="20" className="shrink-0" />
              {isLoggingOut ? "Logging out…" : "Log out"}
            </button>
          </div>
        </div>
      )}

      <button
        ref={triggerRef}
        type="button"
        onClick={toggle}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        className="flex w-full cursor-pointer items-center gap-1.75 rounded-[9px] border border-edge-strong bg-white px-4 py-2 text-left hover:bg-canvas"
      >
        <Avatar name={email} size="sm" tone="soft" />
        <span className="min-w-0 flex-1 truncate text-[12px]/[16px] text-ink">{email}</span>
        <img
          src={angleDown}
          alt=""
          width="13"
          height="13"
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
}
