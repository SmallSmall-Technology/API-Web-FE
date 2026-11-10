# SmallSmall API Platform (Web)

The frontend for the SmallSmall API Platform. Developers and partner businesses use it to integrate SmallSmall services into their own products through our APIs.

On the platform, users will be able to:

- Sign up and manage their developer account
- Create and manage API keys
- Browse API documentation and try out endpoints
- Monitor their API usage

## Tech stack

- [React](https://react.dev) + [Vite](https://vite.dev) (JavaScript)
- [Tailwind CSS](https://tailwindcss.com) for styling
- [React Router](https://reactrouter.com) for routing
- [TanStack Query](https://tanstack.com/query) for fetching and caching data

## Getting started

```bash
npm install
cp .env.example .env   # set VITE_API_BASE_URL to the backend URL
npm run dev
```

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
│   ├── icons/          # Small SVG icons
│   └── images/         # Logos and images
├── components/         # Shared, reusable UI
│   ├── layout/         # Header, Footer
│   └── sections/       # Page sections: Hero, Welcome, SplitSection
├── features/           # Code grouped by feature
│   └── auth/
│       ├── api/        # API calls (login)
│       ├── components/ # SignInForm
│       └── index.js    # Public exports of the feature
├── layouts/            # Route layouts (RootLayout)
├── lib/                # API client and TanStack Query setup
├── pages/              # One file per route
├── routes/             # Route definitions
├── styles/             # Global CSS and Tailwind theme
└── main.jsx            # App entry: providers and router
```

Imports use the `@/` alias for `src/`, e.g. `import Header from '@/components/layout/Header.jsx'`.
