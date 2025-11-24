# WalkPaws MVP File Structure Plan

## Core Configuration Files
- `.env.local` - Environment variables for Supabase
- `src/lib/supabase/client.ts` - Supabase client configuration
- `src/lib/supabase/middleware.ts` - Supabase middleware for auth
- `src/lib/supabase/server.ts` - Server-side Supabase client

## Page Components (App Router)
- `src/app/page.tsx` - Landing page
- `src/app/auth/signup/page.tsx` - Signup page
- `src/app/auth/login/page.tsx` - Login page
- `src/app/dashboard/page.tsx` - Owner dashboard
- `src/app/pets/page.tsx` - Pet list page
- `src/app/pets/add/page.tsx` - Add pet page
- `src/app/walkers/page.tsx` - Walker list page
- `src/app/booking/confirm/page.tsx` - Booking confirmation page

## Components
- `src/components/layout/Header.tsx` - Main navigation header
- `src/components/auth/AuthForm.tsx` - Reusable auth form component
- `src/components/pets/PetCard.tsx` - Pet card component
- `src/components/walkers/WalkerCard.tsx` - Walker card component
- `src/components/ui/` - Reusable UI components

## Types
- `src/types/database.ts` - Database type definitions
- `src/types/app.ts` - Application type definitions