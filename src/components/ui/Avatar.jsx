const sizes = {
  sm: 'size-5 text-[12px]',
  md: 'size-[30px] text-[14px]',
}

const tones = {
  brand: 'bg-brand',
  soft: 'bg-brand-soft',
}

/** Round avatar showing the first letter of a name. */
export default function Avatar({ name = '', size = 'md', tone = 'brand' }) {
  return (
    <span
      aria-hidden
      className={`inline-flex shrink-0 items-center justify-center rounded-full leading-none text-ink uppercase ${sizes[size]} ${tones[tone]}`}
    >
      {name.charAt(0)}
    </span>
  )
}
