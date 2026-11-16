import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Link, useNavigate } from 'react-router'
import { login } from '../api/login.js'

const inputClass =
  'h-[38px] w-full rounded-[5px] border border-field bg-white px-4 text-[13px] text-ink placeholder:text-placeholder outline-none focus:border-ink'

export default function SignInForm() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => navigate('/login/verify', { state: { email } }),
  })

  function handleSubmit(event) {
    event.preventDefault()
    mutation.mutate({ email, password })
  }

  return (
    <div className="w-full max-w-[430px]">
      <h2 className="text-[24px] font-semibold leading-normal text-ink">
        Sign in to your developer account
      </h2>

      <form onSubmit={handleSubmit} className="mt-[34px]">
        <label htmlFor="email" className="block text-[13px] leading-normal text-ink">
          Email address
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${inputClass} mt-[11px]`}
        />

        <label htmlFor="password" className="mt-[19px] block text-[13px] leading-normal text-ink">
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`${inputClass} mt-[11px]`}
        />

        {mutation.isError && (
          <p role="alert" className="mt-3 text-[13px] text-red-600">
            {mutation.error.message || 'Sign in failed. Please try again.'}
          </p>
        )}

        <button
          type="submit"
          disabled={mutation.isPending}
          className="mt-[29px] h-12 w-full cursor-pointer rounded-[6px] bg-ink text-[14px] font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {mutation.isPending ? 'Signing in…' : 'Sign in'}
        </button>
      </form>

      <a href="#" className="mt-[19px] inline-block text-[16px] leading-normal text-ink underline">
        Forgot password?
      </a>

      <p className="mt-[23px] text-[16px] leading-normal text-ink">
        Don’t have an account?{' '}
        <Link to="/signup" className="font-semibold underline">
          Sign up
        </Link>
      </p>

      <p className="mt-[23px] max-w-[424px] text-[14px] leading-normal text-ink">
        Access to the SmallSmall API Gateway is restricted to authorized enterprise partners.
      </p>
    </div>
  )
}
