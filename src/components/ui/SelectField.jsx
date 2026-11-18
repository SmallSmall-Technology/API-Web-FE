import chevronDown from '@/assets/icons/chevron-down.svg'
import angleSmallDown from '@/assets/icons/angle-small-down-15.svg'
import { fieldSizes } from './fieldStyles.js'

// Chevron and select padding per size, as in the designs.
const chevrons = {
  sm: { src: chevronDown, size: 20, position: 'right-[11px]', padding: 'pr-10' },
  md: { src: angleSmallDown, size: 15, position: 'right-[22px]', padding: 'pr-12 pl-[17px]' },
}

/**
 * Label + native dropdown with the design's chevron.
 * `options` is a list of { value, label }. `placeholder` shows while nothing is picked.
 * `size` is "sm" (default, auth forms) or "md" (dashboard dialogs).
 */
export default function SelectField({
  id,
  label,
  options,
  placeholder,
  value,
  size = 'sm',
  className = '',
  ...selectProps
}) {
  const classes = fieldSizes[size] ?? fieldSizes.sm
  const chevron = chevrons[size] ?? chevrons.sm

  return (
    <div className={className}>
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
      <div className={`relative ${classes.offset}`}>
        <select
          id={id}
          value={value}
          className={`${classes.box} cursor-pointer appearance-none ${chevron.padding} ${value ? '' : classes.placeholderText}`}
          {...selectProps}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-ink">
              {option.label}
            </option>
          ))}
        </select>
        <img
          src={chevron.src}
          alt=""
          width={chevron.size}
          height={chevron.size}
          className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${chevron.position}`}
        />
      </div>
    </div>
  )
}
