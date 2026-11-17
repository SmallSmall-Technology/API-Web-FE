import { fieldSizes } from './fieldStyles.js'

/**
 * Label + text input. Extra props (type, value, onChange, required…) go to the <input>.
 * `size` is "sm" (default, auth forms) or "md" (dashboard dialogs).
 * `className` styles the wrapper; `inputClassName` adds classes to the <input> itself.
 */
export default function TextField({ id, label, size = 'sm', className = '', inputClassName = '', ...inputProps }) {
  const classes = fieldSizes[size] ?? fieldSizes.sm

  return (
    <div className={className}>
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
      <input id={id} className={`${classes.box} ${classes.offset} ${inputClassName}`} {...inputProps} />
    </div>
  )
}
