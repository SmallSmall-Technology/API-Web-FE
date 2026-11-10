import { Outlet } from 'react-router'
import Header from '@/components/layout/Header.jsx'
import Footer from '@/components/layout/Footer.jsx'
import Hero from '@/components/sections/Hero.jsx'
import Welcome from '@/components/sections/Welcome.jsx'
import SplitSection from '@/components/sections/SplitSection.jsx'

/**
 * Shared shell for the sign-in pages (Login, Login OTP).
 * Only the right-hand column changes between pages.
 */
export default function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <Header />
      <Hero />
      <SplitSection left={<Welcome />} right={<Outlet />} />
      <Footer />
    </div>
  )
}
