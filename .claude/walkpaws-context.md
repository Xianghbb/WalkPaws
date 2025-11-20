# WalkPaws Platform Development Guidelines

**Auto-generated from feature plans. Last updated: 2025-11-20**

## Active Technologies

### Frontend
- **Next.js 14+** with App Router
- **TypeScript 5.x** for type safety
- **Tailwind CSS** for styling
- **React Hook Form** for form management
- **Zod** for validation

### Backend & Database
- **Supabase** for authentication, database, storage, and real-time features
- **PostgreSQL** with Row-Level Security (RLS) policies
- **Server Actions** for mutations
- **Server Components** for data fetching

### Development Tools
- **Vercel** for hosting and deployment
- **GitHub** for version control
- **Claude Code** with MCP servers for AI assistance

## Project Structure

```text
walkpaws/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Authenticated user dashboard
│   ├── (public)/          # Public pages
│   └── api/               # API routes
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── forms/            # Form components
│   └── cards/            # Card components
├── lib/                   # Utility functions
│   ├── supabase/         # Supabase client and actions
│   ├── utils/            # Helper functions
│   └── types/            # TypeScript types
├── hooks/                 # Custom React hooks
├── middleware.ts         # Next.js middleware
└── tests/                 # Test files
```

## Development Commands

### Setup and Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Formatting
npm run format
```

### Testing
```bash
# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e
```

### Database Operations
```bash
# Start local Supabase
supabase start

# Create migration
supabase migration new migration-name

# Apply migrations
supabase migration up

# Generate types
supabase gen types typescript --project-id your-project-id > lib/types/database.ts
```

## Code Style Guidelines

### TypeScript
- Use strict TypeScript configuration
- Define return types for all functions
- Use type imports: `import type { User } from '@/types'`
- Avoid `any` type - use `unknown` or proper typing

### React Components
- Prefer server components by default
- Use client components only for interactive elements
- Extract reusable components into separate files
- Follow naming convention: `PascalCase` for components, `camelCase` for functions

### File Naming
- `kebab-case` for files: `user-profile.tsx`
- `camelCase` for functions and variables
- `PascalCase` for React components and types

### Server Actions
```typescript
// Always use 'use server'
'use server'

// Return typed responses
export async function createBooking(data: BookingData) {
  // Implementation
  return { success: true, data: booking }
}
```

### Database Queries
```typescript
// Use typed Supabase client
const { data, error } = await supabase
  .from('users')
  .select('id, email, created_at')
  .eq('id', userId)
  .single()
```

## Key Development Patterns

### Authentication Flow
1. Use Supabase Auth for all authentication
2. Implement email verification (required)
3. Use server-side session management
4. Protect routes with middleware

### Database Access
1. Always use RLS policies
2. Server components use service role key
3. Client components use anon key
4. No direct client-to-database connections

### State Management
1. Server components for initial data
2. Server actions for mutations
3. Client state only for UI interactions
4. Use URL search params for filter state

### Error Handling
1. Return typed error responses from server actions
2. Use error boundaries for client components
3. Provide user-friendly error messages
4. Log errors appropriately (no sensitive data)

## Security Requirements

### Mandatory Practices
- All tables must have RLS policies
- Validate all user inputs
- Use parameterized queries
- Implement proper authentication checks
- Never expose sensitive data in logs

### Prohibited Patterns
- Direct database connections from client
- Storing sensitive data in localStorage
- Skipping RLS policies
- Hardcoded API keys in code
- Client-side only validation

## Performance Guidelines

### Database
- Use proper indexes
- Implement connection pooling
- Use selective queries
- Monitor query performance

### Frontend
- Use Next.js Image component
- Implement code splitting
- Use ISR for static content
- Optimize bundle size

## Testing Requirements

### Unit Tests
- Test all utility functions
- Test form validation logic
- Test data transformation functions
- Aim for 80%+ coverage

### Integration Tests
- Test database operations
- Test API endpoints
- Test authentication flows
- Test RLS policies

### E2E Tests
- Test critical user flows
- Test booking workflow
- Test payment processing
- Test error scenarios

## Deployment Process

### Development
- Feature branches from `main`
- Automatic preview deployments on Vercel
- Database migrations via Supabase CLI

### Production
- Merge to `main` triggers production deploy
- Database migrations must be applied first
- Monitor deployment status
- Verify functionality post-deployment

## Monitoring and Debugging

### Local Development
- Use browser DevTools
- Check Supabase logs
- Monitor network requests
- Use React DevTools

### Production
- Vercel Analytics for performance
- Supabase dashboard for database metrics
- Error tracking (future: Sentry)
- User behavior analytics

## Recent Changes

### WalkPaws Platform (1-walkpaws-platform)
- **Added**: Complete product specification with user stories
- **Added**: Technical implementation plan with server-first architecture
- **Added**: Database schema with RLS policies
- **Added**: API contracts for all user actions
- **Added**: Quickstart guide for development setup

This establishes the foundation for building the WalkPaws marketplace platform with Next.js, Supabase, and Vercel.

<!-- MANUAL ADDITIONS START -->
<!-- Add any manual context or notes here -->
<!-- MANUAL ADDITIONS END -->