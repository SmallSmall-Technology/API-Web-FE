import rocket from '@/assets/icons/rocket.svg'
import operation from '@/assets/icons/operation.svg'
import digitalKey from '@/assets/icons/digital-key.svg'
import webhook from '@/assets/icons/webhook.svg'
import flask from '@/assets/icons/flask.svg'
import pulseRate from '@/assets/icons/pulse-rate.png'
import map from '@/assets/icons/map.svg'
import database from '@/assets/icons/database.png'
import home from '@/assets/icons/home.svg'
import calendarCheck from '@/assets/icons/calendar-check.svg'
import shieldCheck from '@/assets/icons/shield-check.svg'
import wallet from '@/assets/icons/wallet.svg'
import refresh from '@/assets/icons/refresh.svg'
import userBag from '@/assets/icons/user-bag.svg'
import boxOpen from '@/assets/icons/box-open.svg'
import customerService from '@/assets/icons/customer-service.svg'
import folders from '@/assets/icons/folders.svg'
import settings from '@/assets/icons/settings.svg'

// Sidebar links. Only /dashboard, /credentials and /webhooks have pages so far; the rest show the
// "not found" page until they are built.
export const mainNav = [
  {
    items: [
      { to: '/dashboard', label: 'Onboarding & quickstart', icon: rocket },
      { to: '/integration', label: 'Integration', icon: operation },
    ],
  },
  {
    title: 'Developer tools',
    items: [
      { to: '/credentials', label: 'API Credentials & Secrets', icon: digitalKey },
      { to: '/webhooks', label: 'Webhooks & Real-time Events', icon: webhook },
      { to: '/sandbox', label: 'API Sandbox', icon: flask },
      { to: '/logs', label: 'API Request Logs & Diagnostics', icon: pulseRate },
    ],
  },
  {
    title: 'Home Rental Integration',
    items: [
      { to: '/rental/overview', label: 'Rental Overview', icon: map },
      { to: '/rental/operations', label: 'Rental Operations', icon: database },
      { to: '/rental/property-search', label: 'Property search API', icon: home },
      { to: '/rental/inspections', label: 'Inspection Scheduling API', icon: calendarCheck },
      { to: '/rental/verification', label: 'Verification API', icon: shieldCheck },
      { to: '/rental/billing', label: 'Rent Billing API', icon: wallet },
      { to: '/rental/renewal', label: 'Rent Renewal API', icon: refresh },
    ],
  },
  {
    title: 'Business & transactions',
    items: [
      { to: '/orders', label: 'Order & Customer Purchase', icon: userBag },
      { to: '/catalog', label: 'Catalog & Inventory Mapping', icon: boxOpen },
    ],
  },
]

// Pinned to the bottom of the sidebar.
export const utilityNav = {
  items: [
    { to: '/support', label: 'Support', icon: customerService },
    { to: '/docs', label: 'Documentation', icon: folders },
    { to: '/settings', label: 'Settings', icon: settings },
  ],
}
