import { Navigate, useLocation } from 'react-router'
import { OtpForm } from '@/features/auth'

/** OTP step after login or sign-up. `from` is the page that sent the user here. */
export default function LoginOtp() {
  const { email, from = '/login' } = useLocation().state ?? {}

  // The OTP step only makes sense after the login or sign-up step.
  if (!email) return <Navigate to={from} replace />

  return <OtpForm email={email} changeEmailHref={from} />
}
