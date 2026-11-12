export const fieldLabelClass = 'block text-[13px]/[17px] text-ink'

/** Bordered box shared by text inputs and selects. Padding gives the 38px Figma height. */
export const fieldBoxClass =
  'w-full rounded-[5px] border border-field bg-white px-4 py-[9px] text-[13px]/[18px] text-ink outline-none placeholder:text-placeholder focus:border-ink'

/** Label + text input. Extra props (type, value, onChange, required…) go to the <input>. */
export default function TextField({ id, label, className = '', ...inputProps }) {
  return (
    <div className={className}>
      <label htmlFor={id} className={fieldLabelClass}>
        {label}
      </label>
      <input id={id} className={`${fieldBoxClass} mt-2.5`} {...inputProps} />
    </div>
  )
}
