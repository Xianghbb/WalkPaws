# Quick Start Guide: WalkPaws Platform

**Date**: 2025-11-20
**Feature**: WalkPaws Platform Implementation
**Status**: Phase 1 Complete

## Development Environment Setup

### Prerequisites

- Node.js 18+ and npm/yarn
- Git for version control
- Supabase CLI (`npm install -g supabase`)
- Vercel CLI (`npm install -g vercel`)

### 1. Clone and Install

```bash
git clone https://github.com/your-org/walkpaws.git
cd walkpaws
npm install
```

### 2. Supabase Setup

#### Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note your project URL and anon key from the project settings
3. Create a service role key for server-side operations

#### Initialize Local Supabase
```bash
supabase init
supabase start  # Starts local Supabase stack
```

#### Apply Database Schema
```bash
supabase db push --project-ref your-project-ref
```

### 3. Environment Configuration

Create `.env.local` file:
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_JWT_SECRET=your-jwt-secret

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=WalkPaws

# Email (for production)
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
SMTP_FROM=noreply@walkpaws.com

# File Storage
NEXT_PUBLIC_STORAGE_URL=your-storage-url
MAX_FILE_SIZE=10485760  # 10MB in bytes

# Security
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000
```

### 4. Database Migrations

Run the migration scripts in order:
```bash
# Create core tables
supabase migration new create_core_tables
supabase migration up

# Create RLS policies
supabase migration new create_rls_policies
supabase migration up

# Create indexes
supabase migration new create_indexes
supabase migration up
```

## Development Workflow

### Start Development Server
```bash
npm run dev
```

### Code Quality Tools
```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Formatting
npm run format

# Tests
npm run test
npm run test:e2e
```

### Database Operations
```bash
# Reset local database
supabase db reset

# Create new migration
supabase migration new migration-name

# Apply migrations
supabase migration up

# Generate TypeScript types from database
supabase gen types typescript --project-id your-project-id > lib/types/database.ts
```

## Project Structure Overview

```
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
└── tests/                 # Test files
```

## Key Development Patterns

### Server Components
```typescript
// app/(dashboard)/owner/page.tsx
import { createServerClient } from '@/lib/supabase/server'

export default async function OwnerDashboard() {
  const supabase = createServerClient()

  const { data: pets } = await supabase
    .from('pets')
    .select('*')
    .eq('owner_id', user.id)

  return <Dashboard pets={pets} />
}
```

### Server Actions
```typescript
// app/actions/bookings.ts
'use server'

import { createServerClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function createBooking(data: CreateBookingData) {
  const supabase = createServerClient()

  const { data: booking, error } = await supabase
    .from('bookings')
    .insert({
      owner_id: user.id,
      ...data
    })
    .single()

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath('/dashboard/owner')
  return { success: true, data: booking }
}
```

### Form Handling
```typescript
// components/forms/BookingForm.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { bookingSchema } from '@/lib/schemas'

export function BookingForm({ onSubmit }: BookingFormProps) {
  const form = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      scheduled_date: '',
      duration: '30_min',
      special_instructions: ''
    }
  })

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  )
}
```

## Database Queries Examples

### Get User with Pets
```typescript
const { data, error } = await supabase
  .from('users')
  .select(`
    *,
    pets(*)
  `)
  .eq('id', userId)
  .single()
```

### Get Available Walkers
```typescript
const { data, error } = await supabase
  .from('walker_profiles')
  .select(`
    *,
    users!inner(first_name, last_name, avatar_url)
  `)
  .eq('is_available', true)
  .eq('is_active', true)
  .gte('radius_miles', requestedRadius)
  .order('average_rating', { ascending: false })
```

### Get User Bookings
```typescript
const { data, error } = await supabase
  .from('bookings')
  .select(`
    *,
    pets!inner(name, breed, photo_urls),
    walker:users!walker_id(first_name, last_name, avatar_url)
  `)
  .eq('owner_id', userId)
  .order('scheduled_date', { ascending: true })
```

## Testing Strategy

### Unit Tests
```bash
# Run unit tests
npm run test:unit

# Run with coverage
npm run test:unit:coverage
```

### Integration Tests
```bash
# Test database operations
npm run test:integration

# Test API endpoints
npm run test:api
```

### E2E Tests
```bash
# Run Playwright tests
npm run test:e2e

# Run in headed mode
npm run test:e2e:headed
```

## Deployment Process

### Development to Staging
```bash
# Push to staging branch
git checkout staging
git merge feature/your-feature
git push origin staging

# Automatic deployment via Vercel
```

### Staging to Production
```bash
# Create production deployment
git checkout main
git merge staging
git push origin main

# Database migrations
supabase db push --project-ref production-project-id
```

## Environment Variables Reference

### Required
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY`: Server-side Supabase key
- `NEXTAUTH_SECRET`: NextAuth.js secret
- `NEXTAUTH_URL`: Application URL

### Optional
- `SMTP_*`: Email configuration
- `STRIPE_*`: Payment processing (future)
- `SENTRY_*`: Error monitoring (future)
- `ANALYTICS_*`: Analytics configuration

## Common Issues and Solutions

### Database Connection Issues
```bash
# Check Supabase status
supabase status

# Reset local database
supabase db reset

# Check connection string
supabase inspect db
```

### Authentication Issues
```bash
# Check JWT secret
supabase secrets list

# Verify RLS policies
supabase query "SELECT * FROM pg_policies"
```

### Build Issues
```bash
# Clear cache
npm run clean
rm -rf .next
rm -rf node_modules
npm install
```

## Performance Optimization

### Database Performance
- Use proper indexes on frequently queried columns
- Implement connection pooling
- Use database views for complex queries
- Monitor query performance with Supabase dashboard

### Frontend Performance
- Implement code splitting with dynamic imports
- Use Next.js Image component for optimized images
- Implement proper loading states
- Use React.memo for expensive components

### Caching Strategy
- Use ISR for static pages
- Implement proper cache headers
- Use React Query for client-side caching
- Optimize images with next/image

## Monitoring and Debugging

### Local Development
- Use browser DevTools for debugging
- Check Supabase logs for database issues
- Use React DevTools for component debugging
- Monitor network requests

### Production Monitoring
- Vercel Analytics for performance monitoring
- Supabase dashboard for database metrics
- Error tracking with Sentry (future)
- Real-time user monitoring

## Security Checklist

### Development
- [ ] No hardcoded secrets in code
- [ ] Proper input validation
- [ ] SQL injection prevention via RLS
- [ ] XSS prevention with React
- [ ] CSRF protection with NextAuth.js

### Production
- [ ] HTTPS enforced
- [ ] Secure headers configured
- [ ] Rate limiting implemented
- [ ] Input sanitization
- [ ] Regular security updates

## Getting Help

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Support
- Check existing issues in GitHub
- Create new issue with detailed description
- Include error messages and steps to reproduce
- Tag issues with appropriate labels

## Next Steps

1. Set up development environment
2. Configure Supabase project
3. Apply database migrations
4. Start building features based on specification
5. Run tests regularly
6. Deploy to staging for testing
7. Deploy to production when ready

For detailed implementation guidance, refer to:
- [Specification](../spec.md)
- [Data Model](../data-model.md)
- [API Contracts](../contracts/openapi.yml)
- [WalkPaws Constitution](../../../memory/constitution.md)

Happy coding! 🐕🐾

---

**Last Updated**: 2025-11-20
**Next Review**: After MVP completion
**Maintainer**: Development Team