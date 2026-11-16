import toggleOn from '@/assets/icons/toggle-on-lg.svg'
import toggleOff from '@/assets/icons/toggle-off-lg.svg'

/**
 * On/off switch drawn with the Figma toggle icons (44px).
 * The "off" icon has its knob on the right, so it is mirrored, as in the design.
 */
export default function Toggle({ checked, onChange, label, disabled = false }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className="inline-flex shrink-0 cursor-pointer rounded-full transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-not-allowed disabled:opacity-60"
    >
      <img
        src={checked ? toggleOn : toggleOff}
        alt=""
        width="44"
        height="44"
        className={checked ? undefined : '-scale-x-100'}
      />
    </button>
  )
}
