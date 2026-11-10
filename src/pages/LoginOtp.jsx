import { Navigate, useLocation } from 'react-router'
import { OtpForm } from '@/features/auth'

export default function LoginOtp() {
  const email = useLocation().state?.email

  // The OTP step only makes sense after the email/password step.
  if (!email) return <Navigate to="/login" replace />

  return <OtpForm email={email} />
}
