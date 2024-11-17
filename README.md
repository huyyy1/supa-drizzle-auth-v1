```markdown
## 🚀 Project Overview - SimplyMaid House Cleaning Booking Platform 

A modern, scalable booking platform & marketing website for [SimplyMaid](https://www.simplymaid.com.au) designed to innovate the house cleaning services across **Sydney, Adelaide, Melbourne, Canberra, Brisbane, Perth**, and their major suburbs.

This project is a fresh start using **Next.js 15 App Router*, **Tailwind CSS**, **Zod**, **React Query**, **Drizzle ORM**, **Drizzle Studio & Kit**, and **Shadcn UI components** with proper usage of class names and props to build a comprehensive component system as we develop the website and booking form. The MVP focuses on delivering all marketing pages, lead capture features, and a dynamic booking form to replace the existing Launch27 form and n8n integration. While we continue building the platform, the new booking form will communicate with Launch27 via API calls to handle bookings and payments.


## Documentation

- [Architecture](./docs/ARCHITECTURE.md) - System architecture and technical decisions
- [Routes](./docs/ROUTES.md) - Application routing structure
- [Components](./docs/COMPONENTS.md) - Component system and guidelines
- [Content](./docs/CONTENT.md) - Content strategy and SEO
- [API](./docs/API.md) - API routes and integration
- [Webhooks](./docs/WEBHOOKS.md) - Webhook system
- [Auth](./docs/AUTH.md) - Authentication and authorization
- [Cron](./docs/CRON.md) - Scheduled tasks
- [Implementation](./docs/IMPLEMENTATION.md) - Implementation plan
- [Integrations](./docs/INTEGRATIONS.md) - Third-party integrations

## Tech Stack

### Core

- **Framework**: Next.js 14 with App Router
- **Database**: Supabase (PostgreSQL)
- **ORM**: Drizzle
- **UI**: shadcn/ui + Tailwind CSS
- **Auth**: Supabase Auth
- **Storage**: Supabase storage
- **Payments**: LAUNCH27 API CALL 
- **Email**: BentoNow + React email
- **CMS**: MDX + Custom Admin
- **Deployment**: ELEST.IO CI/CD

### Integrations

- **Analytics**: Bento + PostHog
- **Support**: Missive
- **Communications**: Twilio
- **Automation**: n8n





## Project Structure
```

/app # Next.js application
├── (auth) # Authentication flows
├── (marketing) # Public pages
├── (booking) # Booking system
└── (dashboard) # Protected areas

/components # React components
├── ui # Base components
├── sections # Page sections
├── booking # Booking components
└── dashboard # Dashboard components

/libs # Core libraries
├── auth # Auth utilities
├── content # Content system
├── db # Database (Drizzle)
├── seo # SEO utilities
└── api # API clients

/content # MDX content
├── cities # City content
├── services # Service content
└── blog # Blog posts

/docs # Documentation

````

## Features

### Core Platform
(MVP)- 🏠 **Location-Based Services**: City-specific landing pages and service areas
(MVP)- 📅 **Smart Booking System**: Real-time availability and instant pricing
- 👥 **Multi-User Platform**: Customer, cleaner, and admin portals
(MVP)- 📱 **Responsive Design**: Optimized for all devices
(MVP)- 🔍 **SEO Optimized**: City and service-specific content
(MVP)- ⚡ **Performance First**: Built for speed and reliability

### Content Management
(MVP)- 📝 **MDX Blog**: Rich content editor with AI assistance
(MVP)- 🎯 **SEO Dashboard**: Content optimization and analytics
(MVP)- 🗺️ **City Pages**: Dynamic location-based content
(MVP)- 📊 **Analytics**: Comprehensive tracking and reporting

### Business Operations
- 💳 **Payment Processing**: Stripe integration
(MVP)- 📧 **Email System**: Transactional and marketing emails
- 💬 **Customer Support**: Missive integration
- 📱 **SMS/WhatsApp**: Twilio communications
(MVP)- 🤖 **Automation**: n8n workflows, 

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/simplymaid.git
cd simplymaid
````

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Run database migrations:

```bash
npm run db:migrate
```

5. Start development server:

```bash
npm run dev
```

## Development Workflow

1. Create feature branch:

```bash
git checkout -b feature/feature-name
```

2. Make changes and commit:

```bash
git add .
git commit -m "feat: add feature description"
```

3. Push changes:

```bash
git push origin feature/feature-name
```

## Deployment

### Prerequisites

- Elest.io/digitalocean deployment
- Github account
- Supabase project
- Launch27 account
- BentoNow account

### Environment Variables

Required environment variables are documented in `.env.example`

### Deploy

```bash
npm run deploy
```

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## License

This project is private and confidential.

```

```
