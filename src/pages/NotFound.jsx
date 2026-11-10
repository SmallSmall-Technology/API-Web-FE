import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="text-slate-400">This page doesn't exist.</p>
      <Link to="/" className="text-sky-400 hover:underline">
        Go home
      </Link>
    </div>
  )
}
