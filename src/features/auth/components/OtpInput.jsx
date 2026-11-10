import otpDot from '@/assets/icons/otp-dot.svg'

/**
 * Single-field OTP entry drawn as fixed slots (from the Login OTP design).
 * A transparent native input sits on top, so typing, pasting and SMS/email
 * autofill (`one-time-code`) all work as usual.
 */
export default function OtpInput({ id, value, onChange, length = 6, ...props }) {
  function handleChange(event) {
    onChange(event.target.value.replace(/\D/g, '').slice(0, length))
  }

  return (
    <div className="relative flex h-[38px] w-[233px] items-center rounded-[5px] border border-field bg-white pl-[13px] focus-within:border-ink">
      {Array.from({ length }, (_, i) => (
        <span
          key={i}
          aria-hidden
          className="flex w-[34px] items-center justify-center text-[14px] text-ink"
        >
          {value[i] ?? <img src={otpDot} alt="" width="4" height="4" />}
        </span>
      ))}

      <input
        id={id}
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        pattern={`\\d{${length}}`}
        maxLength={length}
        value={value}
        onChange={handleChange}
        className="absolute inset-0 h-full w-full cursor-text opacity-0"
        {...props}
      />
    </div>
  )
}
