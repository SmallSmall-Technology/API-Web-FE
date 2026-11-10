import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Link, useNavigate } from 'react-router'
import pencil from '@/assets/icons/pencil.svg'
import { resendOtp, verifyOtp } from '../api/verifyOtp.js'
import OtpInput from './OtpInput.jsx'

const OTP_LENGTH = 6

export default function OtpForm({ email }) {
  const navigate = useNavigate()
  const [code, setCode] = useState('')
  const [formError, setFormError] = useState('')

  const verify = useMutation({
    mutationFn: verifyOtp,
    onSuccess: () => navigate('/dashboard'),
  })

  const resend = useMutation({ mutationFn: resendOtp })

  function handleSubmit(event) {
    event.preventDefault()
    if (code.length !== OTP_LENGTH) {
      setFormError(`Enter the ${OTP_LENGTH}-digit code from your email.`)
      return
    }
    setFormError('')
    verify.mutate({ email, code })
  }

  function handleCodeChange(next) {
    setCode(next)
    if (formError) setFormError('')
  }

  const error = formError || (verify.isError && (verify.error.message || 'Verification failed. Please try again.'))

  return (
    <div className="w-full max-w-[430px]">
      <h2 className="text-[24px] font-semibold leading-normal text-ink">We emailed you a code</h2>

      <p className="mt-2 text-[14px] leading-normal text-muted">Enter the verification code sent to:</p>
      <div className="mt-1 flex items-center gap-[7px]">
        <span className="-ml-1 bg-highlight px-[7px] text-[14px] leading-[22px] text-ink">{email}</span>
        <Link to="/login" aria-label="Change email address" className="shrink-0 hover:opacity-70">
          <img src={pencil} alt="" width="12" height="12" />
        </Link>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-3">
        <label htmlFor="otp" className="block text-[13px] leading-normal text-ink">
          OTP
        </label>
        <div className="mt-[11px]">
          <OtpInput
            id="otp"
            value={code}
            onChange={handleCodeChange}
            length={OTP_LENGTH}
            autoFocus
            aria-invalid={Boolean(error)}
          />
        </div>

        <p className="mt-6 flex flex-wrap items-center gap-x-1.5 text-[13px] leading-normal">
          <span className="text-muted">Didnt get your code?</span>
          <button
            type="button"
            onClick={() => resend.mutate({ email })}
            disabled={resend.isPending}
            className="cursor-pointer font-semibold text-ink hover:underline disabled:cursor-not-allowed disabled:opacity-60"
          >
            {resend.isPending ? 'Sending…' : 'Send a new code'}
          </button>
          {resend.isSuccess && !resend.isPending && (
            <span role="status" className="text-success">
              New code sent.
            </span>
          )}
        </p>

        {error && (
          <p role="alert" className="mt-3 text-[13px] text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={verify.isPending}
          className="mt-[41px] h-12 w-full cursor-pointer rounded-[6px] bg-ink text-[14px] font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {verify.isPending ? 'Verifying…' : 'Verify'}
        </button>
      </form>
    </div>
  )
}
