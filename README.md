<p align="center">
  <img src="https://cdn.clawhost.cloud/assets/generals/clawhost-logo-light.png" alt="ClawHost" height="42" />
</p>

<p align="center">
  Deploy OpenClaw on your own VPS with one click.<br/>
  Full privacy, dedicated resources, no shared infrastructure.
</p>

<p align="center">
  <a href="https://clawhost.cloud">Website</a> &middot;
  <a href="https://clawhost.cloud/posts">Blog</a> &middot;
  <a href="#self-hosting">Self-Host Guide</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License" />
  <img src="https://img.shields.io/badge/bun-%3E%3D1.3-orange" alt="Bun 1.3+" />
  <img src="https://img.shields.io/badge/TypeScript-strict-blue" alt="TypeScript" />
</p>

---

## What is ClawHost?

ClawHost is an open-source, self-hostable cloud hosting platform that lets anyone deploy an AI agent runtime — [OpenClaw](https://openclaw.dev) or [Hermes](https://github.com/NousResearch/hermes-agent) — on a dedicated VPS in under a minute. It handles server provisioning, DNS, SSL, firewall configuration, and agent installation automatically.

### Key Highlights

- **One-Click Deploy** — Pick a plan, pay, and your agent runtime is live within minutes
- **Multi-Agent** — Deploy either OpenClaw or Hermes; each ships with its own gateway service
- **Hetzner Cloud** — Reliable, high-performance VPS provisioning powered by Hetzner
- **Dedicated VPS** — Real servers with full root access, not shared containers
- **Browser Terminal** — Full SSH terminal access directly from the dashboard via WebSocket
- **Diagnostics & Logs** — Monitor server health, view logs, and repair instances
- **File Management** — Edit configuration files remotely
- **Version Management** — View installed agent version, browse available versions, and upgrade
- **Automatic SSL** — HTTPS via Let's Encrypt, configured automatically
- **DNS Management** — Automatic subdomain creation via Cloudflare
- **SSH Key Management** — Store and assign keys for passwordless access
- **Persistent Storage** — Attach additional volumes to any instance
- **Multi-Auth** — Sign in with OTP email, Google, or GitHub
- **Billing Built-In** — Polar.sh integration for subscriptions, invoicing, and billing portal
- **Affiliate & Referrals** — Built-in referral codes and payouts
- **Export & Backup** — Export agent configurations for backup and migration
- **Cross-Platform** — Web and desktop (Electron) apps
- **Fully Open Source** — MIT licensed, self-host the entire platform yourself

## Architecture

ClawHost is a TypeScript monorepo built with [Turborepo](https://turbo.build) and managed with [Bun](https://bun.sh).

```
clawhost/
├── apps/
│   ├── api/                 # Hono.js backend API (runs on Bun)
│   ├── web/                 # React + Vite frontend
│   └── clawhostgo/          # Electron desktop app (ClawHostGo)
├── packages/
│   ├── shared/              # @openclaw/shared — HTTP client, API paths, status/role/provider
│   │                        # constants, input validation, plan catalog, error types
│   └── i18n/                # @openclaw/i18n — Internationalization (EN, FR, ES, DE)
├── scripts/
│   ├── build-go-manifest.ts # Generates the desktop-app release manifest
│   └── version-patch.ts     # Auto-bumps app versions on commit
├── turbo.json               # Turborepo build orchestration
└── bun.lock                 # Bun lockfile
```

> Cloud-init is **not** a static YAML file — it is generated per-server at provision
> time by `apps/api/src/controllers/agents/helpers/generateCloudInit.ts` so the
> bootstrap script can be tailored to the selected agent runtime (OpenClaw or Hermes),
> subdomain, gateway token, and tool defaults.

### Tech Stack

| Layer                   | Technology                                                                                                      |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Runtime**             | [Bun](https://bun.sh) 1.3+ (all apps, scripts, and tests run on Bun)                                            |
| **API Framework**       | [Hono](https://hono.dev) on Bun (HTTP + native WebSocket on a single port)                                      |
| **Database**            | PostgreSQL ([Neon](https://neon.tech)) with [Drizzle ORM](https://orm.drizzle.team)                             |
| **Authentication**      | [Firebase](https://firebase.google.com) (OTP email, Google, GitHub)                                             |
| **Server Provisioning** | [Hetzner Cloud](https://docs.hetzner.cloud)                                                                     |
| **Remote Management**   | SSH2 for remote command execution, file management, and diagnostics                                             |
| **Browser Terminal**    | [xterm.js](https://xtermjs.org) with WebSocket proxy over SSH2                                                  |
| **DNS**                 | [Cloudflare API](https://developers.cloudflare.com/api)                                                         |
| **Billing**             | [Polar.sh](https://polar.sh)                                                                                    |
| **Email**               | [Resend](https://resend.com) with React Email                                                                   |
| **Frontend**            | [React 18](https://react.dev) + [Vite](https://vitejs.dev)                                                      |
| **UI Components**       | [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://radix-ui.com) + [Tailwind CSS](https://tailwindcss.com) |
| **Visual Canvas**       | [React Flow](https://reactflow.dev) with [Dagre](https://github.com/dagrejs/dagre) layout                       |
| **Code Editor**         | [CodeMirror](https://codemirror.net) via @uiw/react-codemirror                                                  |
| **State Management**    | [Zustand](https://zustand-demo.pmnd.rs)                                                                         |
| **Data Fetching**       | [TanStack React Query](https://tanstack.com/query)                                                              |
| **Icons**               | [Phosphor Icons](https://phosphoricons.com)                                                                     |
| **Animations**          | [Framer Motion](https://www.framer.com/motion)                                                                  |
| **Blog**                | MDX with frontmatter                                                                                            |
| **Desktop**             | [Electron](https://www.electronjs.org) with Electron Forge                                                      |
| **Monorepo**            | [Turborepo](https://turbo.build) + [Bun](https://bun.sh)                                                        |

### Database Schema

| Table              | Purpose                                                                        |
| ------------------ | ------------------------------------------------------------------------------ |
| `users`            | Firebase-authenticated users with Polar customer IDs and auth methods          |
| `agents`           | Cloud server instances (status, IP, subdomain, gateway token, agent type, etc) |
| `pendingAgents`    | Temporary storage for in-progress checkout sessions before provisioning        |
| `sshKeys`          | SSH public keys with Hetzner key IDs                                           |
| `volumes`          | Persistent storage volumes attached to agents                                  |
| `otpCodes`         | OTP authentication codes with expiration and attempt tracking                  |
| `rateLimits`       | Rate limiting for authentication and other sensitive endpoints                 |
| `emails`           | Outbound email log (deliverability + auditing)                                 |
| `referrals`        | Affiliate referral codes and user-attribution links                            |
| `referralPayments` | Commission payouts owed to referrers                                           |

## Self-Hosting

### Prerequisites

- **Bun** 1.0+
- **PostgreSQL** database (Neon, Supabase, or self-hosted)

### External Services

| Service                                         | Purpose                 | What You Need                         |
| ----------------------------------------------- | ----------------------- | ------------------------------------- |
| [Hetzner Cloud](https://console.hetzner.cloud)  | Server provisioning     | API Token (Read & Write)              |
| [Firebase](https://console.firebase.google.com) | Authentication          | Project credentials + Service account |
| [Cloudflare](https://dash.cloudflare.com)       | DNS management          | API Token + Zone ID                   |
| [Polar.sh](https://polar.sh)                    | Billing & subscriptions | API credentials + Webhook secret      |
| [Resend](https://resend.com)                    | Transactional email     | API Key                               |

A Hetzner Cloud API token is required for server provisioning.

### 1. Clone & Install

```bash
git clone https://github.com/bfzli/clawhost.git
cd clawhost
bun install
```

### 2. Configure Environment Variables

**API** — create `apps/api/.env`:

```bash
# Database
DATABASE_URL=postgresql://user:password@host:5432/database?sslmode=require

# Firebase Admin SDK
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Hetzner Cloud
HETZNER_API_TOKEN=your-hetzner-api-token

# Cloudflare DNS
CLOUDFLARE_API_TOKEN=your-cloudflare-api-token
CLOUDFLARE_ZONE_ID=your-zone-id

# Polar (payments)
POLAR_ACCESS_TOKEN=your-polar-access-token
POLAR_ORGANIZATION_ID=your-polar-org-id
POLAR_WEBHOOK_SECRET=your-polar-webhook-secret

# Polar product IDs — one per Hetzner plan + interval you sell.
# Naming scheme: POLAR_PRODUCT_<PLAN>_<MONTHLY|YEARLY>
# Plans: CX23, CX33, CX43, CX53, CPX11, CPX21, CPX31, CPX41, CPX51,
#        CAX11, CAX21, CAX31, CAX41, CCX13, CCX23, CCX33, CCX43, CCX53, CCX63
POLAR_PRODUCT_CX23_MONTHLY=...
POLAR_PRODUCT_CX23_YEARLY=...
# ... repeat for every plan you offer
POLAR_PRODUCT_LICENSE=...    # one-time desktop (ClawHostGo) license product

# Resend (email)
RESEND_API_KEY=your-resend-api-key
FROM_EMAIL=OpenClaw <noreply@yourdomain.com>
RESEND_AUDIENCE_ID=...       # optional: auto-subscribe new users to a Resend audience

# Cron (required to call any /cron/* endpoint)
CRON_SECRET=...              # any high-entropy string; sent as `Authorization: Bearer <secret>`

# Optional — only needed for the AI blog generator cron job
OPENAI_API_KEY=...
GITHUB_TOKEN=...             # used by the blog generator to read repo metadata

# Encryption (AES-256-GCM for secrets at rest: gateway tokens, SSH keys, root passwords)
# Generate with: bun -e "console.log(crypto.getRandomValues(new Uint8Array(32)).reduce((s,b)=>s+b.toString(16).padStart(2,'0'),''))"
ENCRYPTION_KEY=...           # 32-byte hex string (64 chars)

# Server
PORT=2222
CLIENT=localhost:1111

```

> The API uses a **single Bun port** for both HTTP and WebSocket (via `Bun.serve`'s
> built-in WebSocket upgrade handler). There is no separate WS server.

**Web** — create `apps/web/.env`:

```bash
# API
VITE_API_URL=/api
VITE_API_PORT=2222
VITE_WS_PORT=2222   # same as VITE_API_PORT; the API serves HTTP + WS on one port
VITE_PORT=1111

# Firebase Client SDK
# authDomain is derived from VITE_FIREBASE_PROJECT_ID at runtime — no AUTH_DOMAIN needed.
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123

# OAuth (used by the in-app Google/GitHub account linking flows)
VITE_GOOGLE_OAUTH_CLIENT_ID=
VITE_GITHUB_OAUTH_CLIENT_ID=
```

> See `apps/api/.env.example` and `apps/web/.env.example` for ready-to-copy templates with every variable the code actually reads.

### 3. Set Up External Services

<details>
<summary><strong>Hetzner Cloud</strong></summary>

1. Go to [Hetzner Cloud Console](https://console.hetzner.cloud)
2. Create a new project or select an existing one
3. Navigate to **Security** > **API Tokens**
4. Generate a token with **Read & Write** permissions
5. Copy to `HETZNER_API_TOKEN`

</details>

<details>
<summary><strong>Firebase</strong></summary>

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable **Authentication** > **Sign-in method** > **Email/Password** (required for OTP login)
4. Add your domain to **Authorized domains**
5. For the web app: **Project Settings** > **General** > **Your apps** > Add a web app and copy config
6. For the API: **Project Settings** > **Service accounts** > Generate a new private key

**Google Sign-In:**

1. In **Authentication** > **Sign-in method**, enable **Google**
2. Set a project support email

**GitHub Sign-In:**

1. Create an OAuth App on [GitHub Developer Settings](https://github.com/settings/developers)
2. Set the **Authorization callback URL** to your Firebase callback URL (found in Firebase Console under the GitHub provider setup)
3. In **Authentication** > **Sign-in method**, enable **GitHub** and paste the Client ID and Client Secret from your GitHub OAuth App

All three sign-in methods (OTP, Google, GitHub) are always displayed in the UI, so all three must be configured in Firebase for a working setup. Users can also link/unlink Google and GitHub accounts from their Account settings page.

</details>

<details>
<summary><strong>Cloudflare</strong></summary>

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Add your domain or select an existing one
3. Copy the **Zone ID** from the domain overview page
4. Create an API token with **Zone:DNS:Edit** permission
5. Copy Zone ID and API Token to your `.env`

</details>

<details>
<summary><strong>Polar.sh</strong></summary>

1. Go to [Polar.sh](https://polar.sh)
2. Create an organization and set up your products/subscriptions
3. Generate an access token and copy to `POLAR_ACCESS_TOKEN`
4. Copy your organization ID to `POLAR_ORGANIZATION_ID`
5. Configure webhook to point to your API's `/api/webhooks/polar` endpoint
6. Copy the webhook secret to `POLAR_WEBHOOK_SECRET`

</details>

### 4. Initialize Database

```bash
bun --filter api db:migrate
```

### 5. Start Development

```bash
bun dev
```

This starts both apps:

| App | URL                                                  |
| --- | ---------------------------------------------------- |
| Web | http://localhost:1111                                |
| API | http://localhost:2222 (HTTP + WebSocket on one port) |

The web dev server proxies `/api` requests to the API and `/ws` requests to the same port for WebSocket upgrades (terminal sessions).

To run the desktop app alongside:

```bash
bun dev:desktop
```

## Scripts

### Root Commands

| Command                 | Description                                     |
| ----------------------- | ----------------------------------------------- |
| `bun dev`               | Start all apps in development mode              |
| `bun dev:web`           | Start web app only                              |
| `bun dev:api`           | Start API only                                  |
| `bun dev:desktop`       | Start the ClawHostGo desktop app (Electron)     |
| `bun test`              | Run Vitest across the monorepo                  |
| `bun test:watch`        | Run Vitest in watch mode                        |
| `bun build-go-manifest` | Build the desktop release manifest              |
| `bun version-patch`     | Patch-bump app versions (used by Husky)         |
| `bun build`             | Build all apps for production                   |
| `bun lint`              | Run ESLint across the monorepo                  |
| `bun lint:fix`          | Auto-fix ESLint issues                          |
| `bun format`            | Format all files with Prettier                  |
| `bun format:check`      | Check formatting without writing                |
| `bun check`             | Run TypeScript type-check + ESLint for all apps |

### Database Commands

| Command                        | Description                                   |
| ------------------------------ | --------------------------------------------- |
| `bun --filter api db:generate` | Generate a new migration after schema changes |
| `bun --filter api db:migrate`  | Apply pending migrations                      |
| `bun --filter api db:studio`   | Open Drizzle Studio (database GUI)            |

### Email Development

```bash
bun --filter api email:dev    # Preview email templates at localhost:3333
```

## API Reference

### Public Endpoints

| Method | Endpoint                                | Description                                |
| ------ | --------------------------------------- | ------------------------------------------ |
| `GET`  | `/api/`                                 | Health check                               |
| `POST` | `/api/auth/send-otp`                    | Send OTP code via email                    |
| `POST` | `/api/auth/verify-otp`                  | Verify OTP and get a Firebase custom token |
| `POST` | `/api/auth/resolve-credential-conflict` | Resolve provider/email conflicts at login  |
| `GET`  | `/api/plans/locations`                  | List available regions                     |
| `GET`  | `/api/plans/volume-pricing`             | Get volume pricing                         |
| `GET`  | `/api/plans/availability`               | Check plan availability per location       |
| `POST` | `/api/webhooks/polar`                   | Polar payment/subscription webhook         |

### Protected Endpoints (Bearer token required)

**Agents (Server Instances)**

| Method   | Endpoint                               | Description                                        |
| -------- | -------------------------------------- | -------------------------------------------------- |
| `GET`    | `/api/agents`                          | List the user's agents                             |
| `GET`    | `/api/agents/:id`                      | Get a specific agent                               |
| `GET`    | `/api/agents/check-subdomain`          | Check whether a subdomain is available             |
| `GET`    | `/api/agents/stars`                    | Get aggregate stars (OpenClaw repo metric)         |
| `POST`   | `/api/agents/purchase`                 | Initiate a paid agent purchase via Polar           |
| `DELETE` | `/api/agents/pending/:id`              | Cancel a pending purchase                          |
| `POST`   | `/api/agents/:id/sync`                 | Sync agent state with the cloud provider           |
| `POST`   | `/api/agents/:id/start`                | Start an agent                                     |
| `POST`   | `/api/agents/:id/stop`                 | Stop an agent                                      |
| `POST`   | `/api/agents/:id/restart`              | Restart an agent                                   |
| `POST`   | `/api/agents/:id/reinstall`            | Reinstall the agent runtime (rate-limited)         |
| `POST`   | `/api/agents/:id/cancel-deletion`      | Cancel scheduled deletion                          |
| `PATCH`  | `/api/agents/:id`                      | Rename an agent                                    |
| `PATCH`  | `/api/agents/:id/emoji`                | Update the agent emoji                             |
| `PATCH`  | `/api/agents/:id/ssh-key`              | Change the assigned SSH key                        |
| `PATCH`  | `/api/agents/:id/subdomain`            | Change the agent subdomain                         |
| `DELETE` | `/api/agents/:id`                      | Soft-delete an agent (schedules deletion)          |
| `GET`    | `/api/agents/:id/export`               | Export agent configuration                         |
| `GET`    | `/api/agents/:id/credentials`          | Get agent credentials (root password, SSH info)    |
| `GET`    | `/api/agents/:id/billing`              | Per-agent billing summary                          |
| `POST`   | `/api/agents/:id/version`              | Get the currently installed agent version          |
| `POST`   | `/api/agents/:id/versions`             | List available agent versions                      |
| `POST`   | `/api/agents/:id/metrics`              | Live CPU/RAM/disk metrics                          |
| `POST`   | `/api/agents/:id/overview`             | Aggregated overview (status + parsed gateway info) |
| `POST`   | `/api/agents/:id/enable-preview`       | Enable the public preview surface for the agent    |
| `POST`   | `/api/agents/:id/rotate-password`      | Rotate the root password                           |
| `POST`   | `/api/agents/:id/rotate-gateway-token` | Rotate the Hermes/OpenClaw gateway token           |

**Agent Diagnostics**

| Method | Endpoint                             | Description                    |
| ------ | ------------------------------------ | ------------------------------ |
| `POST` | `/api/agents/:id/diagnostics/status` | Get gateway/service status     |
| `POST` | `/api/agents/:id/diagnostics/logs`   | Stream the gateway/service log |

**Agent Files**

| Method | Endpoint                     | Description                |
| ------ | ---------------------------- | -------------------------- |
| `POST` | `/api/agents/:id/files`      | List files on the instance |
| `POST` | `/api/agents/:id/files/read` | Read a file                |
| `PUT`  | `/api/agents/:id/files`      | Update a file              |

**Admin Agent Endpoints**

| Method | Endpoint                             | Description                                |
| ------ | ------------------------------------ | ------------------------------------------ |
| `GET`  | `/api/agents/admin`                  | List all agents                            |
| `POST` | `/api/agents/:id/hard-delete`        | Permanently delete an agent + cloud server |
| `POST` | `/api/agents/:id/diagnostics/repair` | Attempt repair (restarts gateway/services) |
| `POST` | `/api/agents/:id/install-version`    | Install a specific runtime version         |

**Admin Dashboard** (all under `/api/admin`, admin only)

| Method | Endpoint                    | Description                  |
| ------ | --------------------------- | ---------------------------- |
| `GET`  | `/api/admin/stats`          | Platform stats               |
| `GET`  | `/api/admin/analytics`      | Time-series analytics        |
| `GET`  | `/api/admin/billing`        | Cross-user billing overview  |
| `GET`  | `/api/admin/users`          | List all users               |
| `GET`  | `/api/admin/users/:id`      | User detail                  |
| `PUT`  | `/api/admin/users/:id`      | Update a user (role, flags)  |
| `GET`  | `/api/admin/agents`         | List all agents (admin view) |
| `GET`  | `/api/admin/pending-agents` | List pending purchases       |
| `GET`  | `/api/admin/ssh-keys`       | All SSH keys                 |
| `GET`  | `/api/admin/volumes`        | All volumes                  |
| `GET`  | `/api/admin/referrals`      | Affiliate referral log       |
| `GET`  | `/api/admin/emails`         | Outbound email log           |

**SSH Keys**

| Method   | Endpoint            | Description       |
| -------- | ------------------- | ----------------- |
| `GET`    | `/api/ssh-keys`     | List SSH keys     |
| `POST`   | `/api/ssh-keys`     | Add an SSH key    |
| `DELETE` | `/api/ssh-keys/:id` | Delete an SSH key |

**Users**

| Method   | Endpoint                                 | Description                            |
| -------- | ---------------------------------------- | -------------------------------------- |
| `GET`    | `/api/users/me`                          | Get the current user profile           |
| `PUT`    | `/api/users/me`                          | Update profile                         |
| `GET`    | `/api/users/me/stats`                    | Get user stats                         |
| `GET`    | `/api/users/me/billing`                  | Get billing history                    |
| `GET`    | `/api/users/me/billing/:orderId/invoice` | Get invoice for an order               |
| `POST`   | `/api/users/me/billing/portal`           | Open the Polar billing portal          |
| `POST`   | `/api/users/me/license/checkout`         | Purchase a ClawHostGo desktop license  |
| `POST`   | `/api/users/me/auth/:method`             | Connect an auth method (Google/GitHub) |
| `DELETE` | `/api/users/me/auth/:method`             | Disconnect an auth method              |

**Affiliate**

| Method | Endpoint                  | Description                        |
| ------ | ------------------------- | ---------------------------------- |
| `GET`  | `/api/affiliate`          | Get the user's affiliate dashboard |
| `POST` | `/api/affiliate/generate` | Generate a new referral code       |
| `PUT`  | `/api/affiliate/code`     | Update the user's referral code    |

**Cron** — called by an external scheduler; not protected by Firebase auth. Each request must include `Authorization: Bearer ${CRON_SECRET}` matching the API env var.

| Method | Endpoint                              | Description                      |
| ------ | ------------------------------------- | -------------------------------- |
| `GET`  | `/api/cron/generate-blog-post`        | Generate the daily AI blog post  |
| `GET`  | `/api/cron/send-feature-emails`       | Send feature announcement emails |
| `GET`  | `/api/cron/cleanup-expired-otps`      | Delete expired OTP codes         |
| `GET`  | `/api/cron/cleanup-stale-rate-limits` | Prune stale rate-limit rows      |

**WebSocket**

| Protocol    | Endpoint                         | Description                                        |
| ----------- | -------------------------------- | -------------------------------------------------- |
| `WebSocket` | `/ws/agents/:id/terminal?token=` | Live SSH terminal session, proxied through the API |

## Deployment

### Web App

The web app builds to `apps/web/dist/` as a static SPA with pre-rendered pages and a generated sitemap. Deploy to any static hosting provider:

- **Cloudflare Pages** (includes `_redirects` and `functions/` for SPA rewrites)
- Netlify
- Nginx / Apache

```bash
bun build
```

### API

The API runs as a Hono.js application on Bun with native WebSocket for terminal access:

```bash
cd apps/api
bun start    # HTTP + WebSocket on PORT (default 2222)
```

## How It Works

When a user deploys a new agent, the platform:

1. **Creates a checkout** — Initiates a Polar.sh subscription for the selected plan
2. **Generates cloud-init** — `generateCloudInit.ts` produces a per-server bootstrap script tailored to the selected agent runtime (OpenClaw or Hermes), subdomain, gateway token, and tool defaults
3. **Provisions a VPS** — Spins up a server on Hetzner Cloud with that cloud-init payload
4. **Configures DNS** — Creates a Cloudflare A record pointing to the server IP
5. **Delivers access** — User gets a subdomain URL, root password, and SSH access

### What the bootstrap installs

**Shared (every agent):**

- Node.js + system dependencies
- A dedicated unprivileged service user (`openclaw` or `hermes`)
- A `systemd` unit so the gateway restarts on failure and at boot
- A health-check loop that retries until the gateway responds locally

**OpenClaw runtime:**

- `openclaw` installed globally via `npm`
- Google Chrome (for headless browser tooling)
- OpenClaw gateway on `127.0.0.1:18789`, fronted by an Nginx reverse proxy on `:443`
- Nginx with WebSocket upgrade support and per-tenant CSP headers
- Let's Encrypt SSL via Certbot, with a renewal cron entry
- Homebrew install kicked off in the background for the service user

**Hermes runtime:**

- Hermes Agent installed for the `hermes` user via the upstream installer
  (`raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh`)
- `hermes-gateway.service` runs `hermes gateway start` under `systemd`
- Hermes manages its own networking and TLS, so no Nginx/Certbot is provisioned

The gateway token is generated at purchase time, stored encrypted in the
`agents` table (AES-256-GCM), and baked into the cloud-init script so the
dashboard can authenticate against the gateway over HTTPS without ever exposing
the token to the browser. Tokens can be rotated via
`POST /api/agents/:id/rotate-gateway-token`.

Once provisioned, users can manage their agent through the dashboard — viewing
metrics, browsing logs, editing config files over SSH, and dropping into a
browser-based terminal that proxies an SSH session over the API's WebSocket.

## Customization

### Subdomain Pattern

Instances get subdomains like `abc1234.yourdomain.com`. To use your own domain, update the Cloudflare zone configuration and the cloud-init template.

### Pricing Markup

The default pricing markup on cloud provider base prices is configurable in the plans controller.

### Cloud-Init

Cloud-init is generated in code, not from a static YAML file. Edit
`apps/api/src/controllers/agents/helpers/generateCloudInit.ts` to change what
gets installed on new instances — add packages, change the agent install
command, tweak the Nginx config, or alter the gateway systemd unit. Both the
OpenClaw and Hermes bootstrap paths live there.

### Internationalization

All UI text is managed through `@openclaw/i18n`. Translation strings live in `packages/i18n/src/langs/en.ts`, organized by category (`common`, `nav`, `auth`, `dashboard`, `landing`, etc.).

## Troubleshooting

<details>
<summary><strong>SSL certificates not working</strong></summary>

Instances may take 1-2 minutes for SSL certificates to provision after the server boots. The cloud-init script includes retry logic for certificate generation. Ensure ports 80 and 443 are open.

</details>

<details>
<summary><strong>DNS not resolving</strong></summary>

New subdomains may take 1-5 minutes to propagate through Cloudflare. Check that your Cloudflare API token has Zone:DNS:Edit permission and the Zone ID is correct.

</details>

<details>
<summary><strong>Firebase auth not working</strong></summary>

1. Verify your domain is listed in Firebase **Authorized domains**
2. Confirm Email/Password sign-in is enabled under **Authentication** > **Sign-in method**
3. If using Google/GitHub auth, ensure those providers are configured
4. Double-check that all `VITE_FIREBASE_*` values match your Firebase project

</details>

<details>
<summary><strong>Database connection errors</strong></summary>

1. Verify `DATABASE_URL` is correct and includes `?sslmode=require` for hosted databases
2. Run `bun --filter api db:migrate` to apply any pending migrations
3. Use `bun --filter api db:studio` to inspect the database directly

</details>

## Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Make your changes following the project's code conventions
4. Run `bun check` to verify TypeScript and linting pass
5. Run `bun format` to ensure formatting is correct
6. Commit and push your changes
7. Open a pull request

## License

MIT License — see [LICENSE](LICENSE) for details.
