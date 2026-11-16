import { useEffect, useState } from 'react'
import eyeIcon from '@/assets/icons/eye.svg'
import duplicateIcon from '@/assets/icons/duplicate.svg'

// Characters left visible on a hidden key, e.g. "sk_live_7f3".
const VISIBLE_PREFIX = 11
const MASK = '·'.repeat(20)

const iconButtonClass =
  'inline-flex size-[15px] shrink-0 cursor-pointer items-center justify-center rounded-[3px] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink'

/** One key line: label, monospace value, show/hide and copy buttons. */
export default function KeyField({ label, value, hidden: initiallyHidden = false }) {
  const [hidden, setHidden] = useState(initiallyHidden)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1500)
    return () => clearTimeout(timer)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
    } catch {
      // Clipboard can be blocked (e.g. insecure context); nothing else to do.
    }
  }

  const shown = hidden ? `${value.slice(0, VISIBLE_PREFIX)}${MASK}` : value

  return (
    <div className="flex items-center">
      <span className="w-[65px] shrink-0 text-[12px]/[15px] text-subtle">{label}</span>
      <code className="min-w-0 flex-1 truncate font-mono text-[12px]/[15px] text-ink lg:w-[225px] lg:flex-none">
        {shown}
      </code>
      <button
        type="button"
        onClick={() => setHidden((value) => !value)}
        aria-label={hidden ? `Show ${label.toLowerCase()}` : `Hide ${label.toLowerCase()}`}
        aria-pressed={!hidden}
        className={`ml-[5px] ${iconButtonClass}`}
      >
        <img src={eyeIcon} alt="" width="13.0188" height="8.75" />
      </button>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label.toLowerCase()}`}
        title={copied ? 'Copied' : 'Copy'}
        className={`ml-[11px] ${iconButtonClass}`}
      >
        <img src={duplicateIcon} alt="" width="15" height="15" />
      </button>
      <span role="status" className="sr-only">
        {copied ? `${label} copied` : ''}
      </span>
    </div>
  )
}
