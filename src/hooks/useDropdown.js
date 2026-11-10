import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Open/close state for a dropdown anchored to a trigger button.
 *
 * Put `rootRef` on an element that wraps both the trigger and the panel, and
 * `triggerRef` on the trigger. While open, the dropdown closes on a click
 * outside `rootRef` or on Escape (which also moves focus back to the trigger).
 */
export function useDropdown() {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!open) return

    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const toggle = useCallback(() => setOpen((value) => !value), [])
  const close = useCallback(() => setOpen(false), [])

  return { open, toggle, close, rootRef, triggerRef }
}
