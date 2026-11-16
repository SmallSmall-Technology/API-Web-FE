import { createBrowserRouter, Navigate } from 'react-router'
import AuthLayout from '@/layouts/AuthLayout.jsx'
import DashboardLayout from '@/layouts/DashboardLayout.jsx'
import Login from '@/pages/Login.jsx'
import LoginOtp from '@/pages/LoginOtp.jsx'
import SignUp from '@/pages/SignUp.jsx'
import Onboarding from '@/pages/Onboarding.jsx'
import ApiCredentials from '@/pages/ApiCredentials.jsx'
import Webhooks from '@/pages/Webhooks.jsx'
import NotFound from '@/pages/NotFound.jsx'

export const router = createBrowserRouter([
  // The login page is the first thing users see.
  { path: '/', element: <Navigate to="/login" replace /> },

  // Sign-in pages share the same header, hero and welcome column.
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/login/verify', element: <LoginOtp /> },
      // The two-column sign-up form starts closer to the divider (68px) than the login form.
      { path: '/signup', element: <SignUp />, handle: { rightClassName: 'lg:pl-[68px]' } },
    ],
  },

  // Pages shown after signing in.
  {
    element: <DashboardLayout />,
    children: [
      { path: '/dashboard', element: <Onboarding /> },
      { path: '/credentials', element: <ApiCredentials /> },
      { path: '/webhooks', element: <Webhooks /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
