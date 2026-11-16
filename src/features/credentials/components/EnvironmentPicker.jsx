const options = [
  { value: 'sandbox', label: 'Sandbox' },
  { value: 'production', label: 'Production' },
]

/**
 * Two side-by-side choices for an API key's environment.
 * Real radio inputs underneath, so arrow keys and screen readers work as usual.
 */
export default function EnvironmentPicker({ name, value, onChange }) {
  return (
    <fieldset>
      <legend className="text-[14px]/[18px] text-ink">Environment</legend>
      <div className="mt-[11px] grid grid-cols-2 gap-[9px]">
        {options.map((option) => (
          <label key={option.value} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="peer sr-only"
            />
            <span className="block rounded-[5px] border border-field bg-white py-[9px] text-center text-[14px]/[18px] text-subtle transition-colors peer-checked:border-ink peer-checked:bg-edge-strong peer-checked:text-ink peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
