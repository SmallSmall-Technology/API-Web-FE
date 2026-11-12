import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Link, useNavigate } from 'react-router'
import TextField from '@/components/ui/TextField.jsx'
import SelectField from '@/components/ui/SelectField.jsx'
import Button from '@/components/ui/Button.jsx'
import { signUp } from '../api/signUp.js'
import { INDUSTRY_OPTIONS } from '../constants/industries.js'

const initialValues = { companyName: '', email: '', industry: '', password: '' }

export default function SignUpForm() {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialValues)

  const mutation = useMutation({
    mutationFn: signUp,
    // Same OTP step as login; after the code is verified the user is signed in.
    onSuccess: () => navigate('/login/verify', { state: { email: values.email, from: '/signup' } }),
  })

  function update(field) {
    return (event) => setValues((current) => ({ ...current, [field]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    mutation.mutate(values)
  }

  return (
    <div className="w-full max-w-[756px]">
      <h2 className="text-[24px] font-semibold leading-normal text-ink">Create a developer account</h2>
      <p className="mt-0.5 text-[14px] leading-normal text-ink">
        Tell us a bit about yourself and your business — we&apos;ll set up your account
      </p>

      <form onSubmit={handleSubmit} className="mt-[38px]">
        <div className="grid gap-x-[38px] gap-y-[18px] sm:grid-cols-2">
          <TextField
            id="companyName"
            label="Company name"
            placeholder="company name"
            autoComplete="organization"
            required
            value={values.companyName}
            onChange={update('companyName')}
          />
          <TextField
            id="email"
            label="Email address"
            type="email"
            placeholder="Email address"
            autoComplete="email"
            required
            value={values.email}
            onChange={update('email')}
          />
          <SelectField
            id="industry"
            label="Industry"
            placeholder="Select industry"
            options={INDUSTRY_OPTIONS}
            required
            value={values.industry}
            onChange={update('industry')}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            required
            value={values.password}
            onChange={update('password')}
          />
        </div>

        {mutation.isError && (
          <p role="alert" className="mt-3 text-[13px] text-red-600">
            {mutation.error.message || 'Sign up failed. Please try again.'}
          </p>
        )}

        {/* The button is one field wide, as in the design. */}
        <div className="mt-[29px] grid gap-x-[38px] sm:grid-cols-2">
          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? 'Signing up…' : 'Sign up'}
          </Button>
        </div>
      </form>

      <p className="mt-4 text-[16px] leading-normal text-ink">
        Have an account?{' '}
        <Link to="/login" className="font-semibold underline">
          Login
        </Link>
      </p>
    </div>
  )
}
