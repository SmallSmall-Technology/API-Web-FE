export const fieldLabelClass = 'block text-[13px]/[17px] text-ink'

// Shared by every size. Padding + border + 18px line height give the 38px Figma height.
const fieldBoxBaseClass =
  'w-full rounded-[5px] border border-field bg-white py-[9px] text-ink outline-none focus:border-ink'

/** Bordered box shared by text inputs and selects. */
export const fieldBoxClass = `${fieldBoxBaseClass} px-4 text-[13px]/[18px] placeholder:text-placeholder`

const sizes = {
  // Auth forms.
  sm: { label: fieldLabelClass, input: `${fieldBoxClass} mt-2.5` },
  // Dashboard dialogs, e.g. "Register a webhook endpoint".
  md: {
    label: 'block text-[14px]/[18px] text-ink',
    input: `${fieldBoxBaseClass} mt-[11px] px-3 text-[14px]/[18px] placeholder:text-subtle`,
  },
}

/**
 * Label + text input. Extra props (type, value, onChange, required…) go to the <input>.
 * `size` is "sm" (default, auth forms) or "md" (dashboard dialogs).
 */
export default function TextField({ id, label, size = 'sm', className = '', ...inputProps }) {
  const classes = sizes[size] ?? sizes.sm

  return (
    <div className={className}>
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
      <input id={id} className={classes.input} {...inputProps} />
    </div>
  )
}
