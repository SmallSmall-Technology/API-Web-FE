import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Outlet, useNavigate } from 'react-router'
import Sidebar from '@/components/dashboard/Sidebar.jsx'
import TopBar from '@/components/dashboard/TopBar.jsx'
import { mainNav, utilityNav } from '@/components/dashboard/navigation.js'
import { logout } from '@/features/auth'
import { getNotifications } from '@/features/notifications'

// TODO: replace with the signed-in partner's details once the account API exists.
const account = {
  company: 'Piggyvest',
  email: 'john.doe@aws.com',
}

/** Shell for signed-in pages: sidebar on the left, white panel on the right. */
export default function DashboardLayout() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLive, setIsLive] = useState(true)

  const notifications = useQuery({
    queryKey: ['notifications'],
    queryFn: getNotifications,
  })

  const signOut = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      // Drop cached data from the signed-in session.
      queryClient.clear()
      navigate('/login', { replace: true })
    },
  })

  return (
    <div className="min-h-screen bg-canvas font-sans text-ink lg:flex">
      <Sidebar
        company={account.company}
        email={account.email}
        onLogout={() => signOut.mutate()}
        isLoggingOut={signOut.isPending}
        sections={mainNav}
        utilitySection={utilityNav}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <div className="min-w-0 flex-1 p-2 lg:py-[15px] lg:pr-4 lg:pl-0">
        <div className="min-h-[calc(100vh-16px)] rounded-[15px] border border-edge bg-white lg:min-h-[calc(100vh-30px)]">
          <TopBar
            notifications={notifications.data}
            notificationsLoading={notifications.isPending}
            isLive={isLive}
            onToggleLive={() => setIsLive((live) => !live)}
            apiStatus="operational"
            onOpenMenu={() => setMenuOpen(true)}
          />
          <main className="px-4 pt-[19px] pb-10 sm:pr-[33px] sm:pl-[43px]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
