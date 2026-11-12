import chevronDown from '@/assets/icons/chevron-down.svg'
import { fieldBoxClass, fieldLabelClass } from './TextField.jsx'

/**
 * Label + native dropdown with the design's chevron.
 * `options` is a list of { value, label }. `placeholder` shows while nothing is picked.
 */
export default function SelectField({
  id,
  label,
  options,
  placeholder,
  value,
  className = '',
  ...selectProps
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className={fieldLabelClass}>
        {label}
      </label>
      <div className="relative mt-2.5">
        <select
          id={id}
          value={value}
          className={`${fieldBoxClass} cursor-pointer appearance-none pr-10 ${value ? '' : 'text-placeholder'}`}
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
          src={chevronDown}
          alt=""
          width="20"
          height="20"
          className="pointer-events-none absolute top-1/2 right-[11px] -translate-y-1/2"
        />
      </div>
    </div>
  )
}
