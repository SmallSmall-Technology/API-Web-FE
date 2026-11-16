# SmallSmall API Platform (Web)

The frontend for the SmallSmall API Platform. Developers and partner businesses use it to integrate SmallSmall services into their own products through our APIs.

On the platform, users will be able to:

- Sign up and manage their developer account
- Create and manage API keys
- Browse API documentation and try out endpoints
- Monitor their API usage

> **Status:** in development. Sign-in and OTP verification are currently **stubbed** in `src/features/auth/api/` and accept any input. Do not deploy this build to a public environment until they are connected to the real backend.

## Tech stack

- [React](https://react.dev) + [Vite](https://vite.dev) (JavaScript)
- [Tailwind CSS](https://tailwindcss.com) for styling
- [React Router](https://reactrouter.com) for routing
- [TanStack Query](https://tanstack.com/query) for fetching and caching data

## Requirements

- Node.js 20.19+ or 22.12+ (required by Vite)
- npm

## Getting started

```bash
npm install
cp .env.example .env   # then edit .env for your environment
npm run dev
```

### Environment variables

| Variable            | Description                        | Example                 |
| ------------------- | ---------------------------------- | ----------------------- |
| `VITE_API_BASE_URL` | Base URL of the SmallSmall API     | `http://localhost:8000` |

Ask the team for the values to use for staging and production. Do not commit them to the repository.

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the dev server         |
| `npm run build`   | Build for production         |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Lint the code with oxlint    |

## Project structure

```
src/
├── assets/
│   ├── icons/            # Small SVG icons
│   └── images/           # Logos and images
├── components/           # Shared, reusable UI
│   ├── dashboard/        # Sidebar, SidebarNav, TopBar, UserMenu
│   ├── layout/           # Header, Footer
│   ├── sections/         # Page sections: Hero, Welcome, SplitSection
│   └── ui/               # Avatar, Card, PageHeader, ProgressBar, StatusBadge
├── features/             # Code grouped by feature
│   ├── auth/             # Sign-in and OTP verification
│   ├── notifications/    # Notifications panel
│   └── onboarding/       # Integration progress and environments
├── hooks/                # Shared React hooks
├── layouts/              # Route layouts: AuthLayout, DashboardLayout
├── lib/                  # API client, TanStack Query setup, helpers
├── pages/                # One file per route
├── routes/               # Route definitions
├── styles/               # Global CSS and Tailwind theme
└── main.jsx              # App entry: providers and router
```

Each feature folder follows the same layout:

```
features/<name>/
├── api/          # Functions that call the backend through @/lib/api.js
├── components/   # UI for the feature
└── index.js      # Public exports of the feature
```

Imports use the `@/` alias for `src/`, e.g. `import Header from '@/components/layout/Header.jsx'`.

## Security

This app handles developer accounts and API keys, so treat it as security-sensitive.

### Environment variables are public

Every `VITE_*` variable is embedded into the JavaScript bundle at build time and **can be read by anyone who loads the site**. Only put public configuration in them, such as the API base URL.

Never put these in `.env` or anywhere in the frontend code:

- API secret keys, client secrets or private tokens
- Database or third-party service credentials
- Internal-only hostnames or admin URLs

Secrets belong on the backend.

### Do not commit secrets

- `.env` and `.env.*.local` files must stay out of Git. Only `.env.example` is committed, and it should contain placeholder or local values only.
- Do not commit real user data, test account passwords or API keys, even in comments, fixtures or screenshots.
- If a secret is committed by mistake, treat it as leaked: rotate it immediately, then remove it from the history.

### Coding guidelines

- Send all backend requests through `src/lib/api.js`. Do not call `fetch` directly with hard-coded URLs.
- Do not log passwords, OTP codes, tokens or API keys to the console, including during debugging.
- Show API keys masked by default (e.g. `sk_live_••••1234`) and reveal them only on an explicit user action.
- Do not use `dangerouslySetInnerHTML` with data from the API or from users.
- Store auth tokens the way the backend team agrees on (preferably `HttpOnly` cookies). Avoid `localStorage` for tokens.
- Do not add API endpoints that the backend does not provide. Confirm new endpoints with the backend team first.

### Reporting a vulnerability

If you find a security issue, **do not open a public issue or pull request**. Report it privately to the SmallSmall engineering team so it can be fixed before it is disclosed.
