import { createBrowserRouter, Navigate } from 'react-router'
import AuthLayout from '@/layouts/AuthLayout.jsx'
import DashboardLayout from '@/layouts/DashboardLayout.jsx'
import Login from '@/pages/Login.jsx'
import LoginOtp from '@/pages/LoginOtp.jsx'
import Onboarding from '@/pages/Onboarding.jsx'
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
    ],
  },

  // Pages shown after signing in.
  {
    element: <DashboardLayout />,
    children: [
      { path: '/dashboard', element: <Onboarding /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
