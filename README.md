# 🧵 Sutramesh

**Sutramesh** is a full-stack workflow automation platform — a Zapier / n8n-style SaaS that lets users visually build, connect, and run automated workflows using a drag-and-drop node canvas.

> The name *Sutramesh* comes from **"Sutra"** (thread) + **"Mesh"** (network) — a mesh of threads connecting your automations together.

---

## 🚀 About the Project

Sutramesh lets users:
- Build automations visually on an interactive node-based canvas
- Trigger workflows manually or via events (e.g. HTTP requests, webhooks)
- Connect nodes together to chain actions and logic
- Run long-running tasks reliably in the background
- Manage authentication, subscriptions, and billing out of the box

This project was built as a hands-on learning exercise, following a full-course tutorial and adapted/extended with my own implementation, naming, and customizations.

---

## 🛠️ Tech Stack

| Category | Tech |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS v4, Shadcn UI, Lucide Icons |
| Database | Neon (Serverless PostgreSQL) + Prisma ORM |
| Data Layer | tRPC (end-to-end type safety) |
| Auth | Better Auth |
| Payments | Polar (Merchant of Record, subscriptions & billing) |
| Background Jobs | Ingest (retries, pub/sub, async processing) |
| Visual Canvas | React Flow |
| State Management | Jotai (editor state), Nuqs (URL state) |
| Forms & Validation | React Hook Form + Zod |
| Monitoring | Sentry (error tracking + AI/LLM monitoring) |
| AI | OpenAI / Claude / Gemini via AI SDK |

---

## ✨ Features

- 🔐 **Authentication** — email/password + social login, with automatic customer creation on sign-up
- 💳 **Subscriptions & Billing** — usage-based and tiered plans powered by Polar, with premium-gated procedures
- 🧩 **Visual Workflow Editor** — drag-and-drop canvas built on React Flow with custom node types (Manual Trigger, HTTP Request, and more)
- ⚙️ **Background Job Processing** — long-running and async tasks (e.g. AI calls, external API requests) handled reliably via Ingest, without blocking the UI
- 🔎 **Search & Pagination** — shareable, bookmarkable views synced with URL state
- 🤖 **AI Integration** — supports multiple LLM providers with full observability into cost, tokens, and latency
- 🧱 **Type-safe Data Access Layer** — tRPC + Prisma ensure end-to-end safety from database to UI

---

## 📚 Reference & Credits

This project was built by following this excellent 2-part tutorial series:

- 🎥 [Part 1 — Build and Deploy an AI Automation SaaS](https://youtu.be/ED2H_y6dmC8)
- 🎥 [Part 2 — Build and Deploy an N8N & Zapier Clone](https://youtu.be/S-4DrLHtL1s)

Huge credit to the original creator for the in-depth walkthrough of the architecture, tooling, and production-readiness patterns used in this project.

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/<your-username>/sutramesh.git
cd sutramesh

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run database migrations
npx prisma migrate dev

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🔑 Environment Variables

Create a `.env` file with the following (fill in your own values):

```env
DATABASE_URL=
BETTER_AUTH_SECRET=
POLAR_ACCESS_TOKEN=
INGEST_EVENT_KEY=
OPENAI_API_KEY=
SENTRY_DSN=
```

---

## 🗺️ Roadmap

- [ ] More trigger types (Schedule, Webhook, Email)
- [ ] More action nodes (Slack, Discord, Google Sheets integrations)
- [ ] Workflow templates/marketplace
- [ ] Team collaboration & shared workspaces

---

## 🙌 Acknowledgements

- [React Flow](https://reactflow.dev/) for the visual canvas
- [Shadcn UI](https://ui.shadcn.com/) for the component library
- [Polar](https://polar.sh/) for payments infrastructure
- [Better Auth](https://www.better-auth.com/) for authentication
