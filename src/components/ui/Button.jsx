/** Dark full-width button from the auth designs. Padding gives the 48px Figma height. */
export default function Button({ className = '', type = 'button', children, ...props }) {
  return (
    <button
      type={type}
      className={`w-full cursor-pointer rounded-[6px] bg-ink py-[15px] text-[14px]/[18px] font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
