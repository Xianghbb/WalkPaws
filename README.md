# WalkPaws Platform 🐕

A modern marketplace platform connecting dog owners with professional dog walkers. Built with Next.js, Supabase, and AI-assisted development.

## 🚀 Overview

WalkPaws is a full-stack application that enables dog owners to find, book, and manage professional dog walking services while providing walkers with tools to manage their schedules and grow their client base.

## 🏗️ Architecture

- **Frontend**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Backend**: Supabase (Authentication, PostgreSQL Database, Storage, Real-time)
- **Deployment**: Vercel with automatic CI/CD
- **Development**: Claude Code with multiple MCP servers for AI assistance

## 📋 Features

### For Dog Owners
- 📝 Easy registration and profile setup
- 🐕 Pet profile management with photos and details
- 🔍 Browse and filter available walkers by location, availability, and ratings
- 📅 Book one-time or recurring walks
- 📱 Real-time booking status updates
- ⭐ Rate and review walkers after completed walks
- 📊 Walk history and analytics

### For Dog Walkers
- 🎯 Professional profile creation with credentials
- ⏰ Availability management with calendar integration
- 📬 Booking request management with accept/decline functionality
- 📍 Route tracking and walk reporting
- 📸 Photo sharing with pet owners
- 💰 Payment processing and earnings tracking

## 🎯 User Stories

1. **First-Time Dog Owner** (P1): Sarah adopts a rescue dog and books her first walk within 10 minutes
2. **Regular User** (P2): Mike schedules recurring walks and manages his account efficiently
3. **Professional Walker** (P3): Jessica manages her schedule and provides excellent service to clients

## 🗂️ Project Structure

```
walkpaws/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Authenticated user dashboard
│   ├── (public)/          # Public pages
│   └── api/               # API routes
├── components/            # Reusable UI components
├── lib/                   # Utility functions and configurations
├── specs/                 # Project specifications and planning
└── tests/                 # Test files
```

## 📚 Documentation

### Planning Documents
- [📋 Product Specification](specs/1-walkpaws-platform/spec.md) - User stories and requirements
- [🏗️ Technical Implementation Plan](specs/1-walkpaws-platform/plan.md) - Architecture and technical decisions
- [📊 Data Model](specs/1-walkpaws-platform/data-model.md) - Database schema and relationships
- [🔗 API Contracts](specs/1-walkpaws-platform/contracts/openapi.yml) - API specifications
- [🚀 Quick Start Guide](specs/1-walkpaws-platform/quickstart.md) - Development setup and workflow
- [📋 Task Breakdown](specs/1-walkpaws-platform/tasks.md) - Complete implementation tasks (200 tasks)

### Development Guidelines
- [📜 Project Constitution](.specify/memory/constitution.md) - Development principles and standards
- [🤖 AI Context](.claude/walkpaws-context.md) - AI development guidelines

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase CLI
- Vercel CLI

### Installation
```bash
# Clone the repository
git clone https://github.com/Xianghbb/WalkPaws.git
cd WalkPaws

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials

# Start development server
npm run dev
```

### Database Setup
```bash
# Initialize Supabase
supabase init
supabase start

# Apply database migrations
supabase db push

# Generate TypeScript types
npm run db:types
```

## 🧪 Testing

```bash
# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e
```

## 📈 Development Status

### Current Phase: Planning Complete ✅
- [x] Product specification finalized
- [x] Technical implementation plan complete
- [x] Database schema designed
- [x] API contracts defined
- [x] 200-task implementation breakdown created

### Next Phase: Implementation
Ready to start building the platform using the detailed task breakdown.

## 🛡️ Security

- Row-Level Security (RLS) policies on all database tables
- Input validation and sanitization
- Secure authentication with email verification
- No sensitive data exposure in logs
- Privacy-first data handling

## 📱 Performance

- Server-side rendering with Next.js App Router
- Image optimization and lazy loading
- Database query optimization
- CDN integration for static assets
- Real-time features with Supabase

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the project constitution
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📝 License

This project is currently private and not licensed for public use.

## 🆘 Support

For questions or issues:
- Create an issue in this repository
- Check the documentation in `/specs/` directory
- Review the task breakdown for implementation guidance

## 🎯 Roadmap

### Phase 1: MVP (User Story 1)
- User registration and authentication
- Pet profile management
- Walker discovery and booking
- Basic notification system

### Phase 2: Enhanced Features (User Stories 2-3)
- Recurring bookings
- Payment processing
- Walker management tools
- Advanced analytics

### Phase 3: Scale and Polish
- Performance optimization
- Mobile app development
- Advanced features
- International expansion

---

**Built with ❤️ and AI assistance**