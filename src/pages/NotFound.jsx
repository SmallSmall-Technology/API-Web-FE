import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="space-y-3">
      <h1 className="text-[24px] font-semibold text-ink">404</h1>
      <p className="text-[14px] text-muted">This page doesn't exist.</p>
      <Link to="/dashboard" className="text-[14px] text-ink underline">
        Back to dashboard
      </Link>
    </div>
  )
}
