import { useEffect, useId, useRef } from 'react'
import closeIcon from '@/assets/icons/close.svg'

/**
 * Centered dialog built on the native <dialog> element, which handles focus
 * trapping, Escape and stacking above the page.
 *
 * Content is only rendered while `open` is true, so forms inside start fresh
 * each time. `onClose` runs on the close button, Escape or a backdrop click.
 */
export default function Modal({ open, onClose, title, className = '', children }) {
  const dialogRef = useRef(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  function handleCancel(event) {
    // Escape: let React state decide when the dialog closes.
    event.preventDefault()
    onClose()
  }

  function handleClick(event) {
    // Clicks on the dialog element itself (not its content) are on the backdrop.
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onCancel={handleCancel}
      onClick={handleClick}
      className={`m-auto w-[calc(100%-32px)] max-w-[522px] rounded-[15px] border border-edge bg-white text-ink backdrop:bg-ink/30 ${className}`}
    >
      {open && (
        <div className="relative pt-[27px] pr-[29px] pb-7 pl-[33px]">
          <h2 id={titleId} className="pr-8 text-[16px]/[20px] font-semibold text-ink">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-[18px] right-4 cursor-pointer rounded-full transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <img src={closeIcon} alt="" width="24" height="24" />
          </button>
          {children}
        </div>
      )}
    </dialog>
  )
}
