// Every button has a 1px border, so padding + border + 18px line height give the Figma heights.
const sizes = {
  // Full-width button from the auth designs: 48px tall.
  block: 'w-full py-[14px]',
  // Inline button for page and modal actions: 40px tall.
  compact: 'inline-flex items-center justify-center gap-[9px] py-[10px] pr-[18px] pl-[21px]',
}

const variants = {
  primary: 'border-ink bg-ink text-white hover:opacity-90',
  secondary: 'border-edge-strong bg-white text-ink hover:bg-canvas',
}

const weights = {
  semibold: 'font-semibold',
  bold: 'font-bold',
}

/**
 * Button in the dashboard styles.
 * `size` is "block" (full width) or "compact" (fits its content).
 * `variant` is "primary" (dark) or "secondary" (white with a border).
 * `weight` defaults to bold for block buttons and semibold for compact ones, as in the designs.
 */
export default function Button({
  className = '',
  type = 'button',
  size = 'block',
  variant = 'primary',
  weight = size === 'block' ? 'bold' : 'semibold',
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={`cursor-pointer rounded-[6px] border text-[14px]/[18px] transition disabled:cursor-not-allowed disabled:opacity-60 ${sizes[size]} ${variants[variant]} ${weights[weight]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
