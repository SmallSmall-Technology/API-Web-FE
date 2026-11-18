// Shared by every size. Padding + border + 18px line height give the 38px Figma height.
const fieldBoxBaseClass =
  'w-full rounded-[5px] border border-field bg-white py-[9px] text-ink outline-none focus:border-ink'

/**
 * Label and box styles per size, shared by TextField and SelectField.
 * `sm`: auth forms. `md`: dashboard dialogs, e.g. "Register a webhook endpoint".
 * `offset` is the gap between the label and the box; `placeholderText` colors an empty select.
 */
export const fieldSizes = {
  sm: {
    label: 'block text-[13px]/[17px] text-ink',
    box: `${fieldBoxBaseClass} px-4 text-[13px]/[18px] placeholder:text-placeholder`,
    offset: 'mt-2.5',
    placeholderText: 'text-placeholder',
  },
  md: {
    label: 'block text-[14px]/[18px] text-ink',
    box: `${fieldBoxBaseClass} px-3 text-[14px]/[18px] placeholder:text-subtle`,
    offset: 'mt-[11px]',
    placeholderText: 'text-subtle',
  },
}
