import { useRef } from 'react'

/**
 * Underlined tab row. `tabs` is a list of { value, label }; `idPrefix` links
 * each tab to its panel (`${idPrefix}-panel-${value}`).
 * Left/Right/Home/End move between tabs, as in the WAI-ARIA tabs pattern.
 */
export default function WebhookTabs({ tabs, value, onChange, idPrefix, label }) {
  const tabRefs = useRef([])

  function handleKeyDown(event, index) {
    const last = tabs.length - 1
    const next = { ArrowRight: index === last ? 0 : index + 1, ArrowLeft: index === 0 ? last : index - 1, Home: 0, End: last }[
      event.key
    ]
    if (next === undefined) return
    event.preventDefault()
    onChange(tabs[next].value)
    tabRefs.current[next]?.focus()
  }

  return (
    // The divider is an inset shadow (not a border) so the active tab's underline can sit on top of it
    // without a negative margin, which overflow-x-auto would clip.
    <div
      role="tablist"
      aria-label={label}
      className="flex gap-[14px] overflow-x-auto shadow-[inset_0_-1px_0_var(--color-edge-strong)]"
    >
      {tabs.map((tab, index) => {
        const selected = tab.value === value
        return (
          <button
            key={tab.value}
            ref={(node) => (tabRefs.current[index] = node)}
            type="button"
            role="tab"
            id={`${idPrefix}-tab-${tab.value}`}
            aria-selected={selected}
            aria-controls={`${idPrefix}-panel-${tab.value}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(tab.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`shrink-0 cursor-pointer border-b px-[14px] pb-[14px] text-[14px]/[18px] font-semibold whitespace-nowrap transition-colors first:pl-[31px] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink ${
              selected ? 'border-ink text-ink' : 'border-transparent text-ink-soft hover:text-ink'
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
