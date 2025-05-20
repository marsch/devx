# Developer Portal

An open-source, production-ready developer portal for API consumers, with admin and consumer UIs, authentication, API key management, documentation, and monetization.

## Features

- **Admin UI** for managing APIs, users, and documentation
- **Consumer UI** (developer dashboard) for accessing APIs and documentation
- **Authentication** via Okta (OIDC)
- **API Management** via Kong Gateway
- **Documentation** for OpenAPI/Swagger and GraphQL
- **Monetization** via Stripe
- **Analytics** for API usage

## Tech Stack

- **Backend:** [Hono](https://honojs.dev/) (TypeScript) running on [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- **Frontend:** React with [shadcn/ui](https://ui.shadcn.com/) and TailwindCSS
- **Database:** [Cloudflare D1](https://developers.cloudflare.com/d1/) (SQLite on edge) and [KV](https://developers.cloudflare.com/kv/)
- **API Gateway:** [Kong](https://konghq.com/kong/)
- **Identity:** [Okta](https://www.okta.com/) (OIDC/OAuth2)
- **Payments:** [Stripe](https://stripe.com/)

## Project Structure

```
developer-portal/
├── apps/
│   ├── portal-backend/    # Hono API
│   └── portal-frontend/   # React UI
├── packages/
│   └── shared/            # Shared types and utilities
└── infrastructure/        # Deployment scripts and worker configs
```

## Getting Started

### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io/) 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/developer-portal.git
cd developer-portal

# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

## Development

- **Backend:** `cd apps/portal-backend && pnpm dev`
- **Frontend:** `cd apps/portal-frontend && pnpm dev`
- **Shared:** `cd packages/shared && pnpm dev`

### Deploying to Cloudflare Workers

The backend can be deployed to Cloudflare Workers using
[Wrangler](https://developers.cloudflare.com/workers/wrangler/). A minimal
`wrangler.toml` configuration lives in `infrastructure/wrangler.toml`.

```bash
pnpm build
wrangler publish
```

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.