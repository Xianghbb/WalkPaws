# WalkPaws Platform Constitution

## Core Principles

### I. Frontend Architecture & Code Quality
React/Next.js components must be clean, modular, reusable, and readable. The app/ directory maintains consistent file structure with clear separation of UI logic, business logic, and data fetching. Server components are favored over client components to minimize complexity. Figma serves as the single source of truth for UI implementation, ensuring pixel-perfect design adherence. All components follow accessibility (a11y) and responsive design best practices, with proper semantic HTML, ARIA labels, and mobile-first approaches.

### II. State Management & Data Flow
Server components and server actions are the primary approach for data handling. Client-side state remains minimal and well-scoped, used only for interactive UI elements that cannot be server-rendered. Data flows predictably from Supabase → Next.js → UI through clearly defined API routes and database queries. No direct client-to-database connections are permitted; all data access flows through server-side abstractions.

### III. Supabase Usage Principles
Authentication flows follow Supabase best practices with secure session management and proper error handling. Database tables and relationships are designed with clarity and consistency, using descriptive names and proper foreign key constraints. Row-Level Security (RLS) policies are mandatory for all tables, ensuring users access only their authorized data. Data exposure is minimized, with privacy-first design principles governing all database interactions and API responses.

### IV. Deployment & DevOps Workflow
Vercel serves as the primary runtime environment with automated deployments from GitHub. Environment variables are managed through Vercel's dashboard with clear separation between staging and production. Staging and production environments maintain parity in configuration and dependencies. GitHub Actions automate testing, building, and deployment tasks, ensuring consistent CI/CD pipelines across all branches.

### V. Git & Collaboration
Feature branches use meaningful names following the pattern `feature/description` or `fix/issue-description`. Commit messages focus on intent rather than implementation details, using conventional commit format. Pull requests contain reviewable, logical chunks of work with clear descriptions and linked issues. Major architectural decisions and changes are documented in the repository's docs/ directory with ADR (Architecture Decision Record) format.

### VI. Design Consistency
UI components are implemented exactly as defined in Figma, maintaining consistent spacing, typography, colors, and interactions. Design tokens are extracted from Figma and used throughout the codebase for consistency. Component reusability is prioritized to avoid duplication, with shared components living in designated directories. Any deviations from Figma designs require explicit approval and documentation.

### VII. AI-Driven Development (Claude Code + MCP)
Claude Code functions as a collaboration partner, not an autopilot. MCP servers (filesystem, github, vercel, figma, memory, etc.) provide structured workflows for consistent development patterns. The AI maintains current context through memory servers and project documentation. All AI-generated code undergoes manual review, refinement, and testing to ensure it meets project quality standards. AI outputs are validated against the constitution principles before integration.

### VIII. Testing, Reliability, and Maintainability
Code is written for simplicity in understanding, testing, and debugging. Premature optimization is avoided while designing for future scalability needs. Error handling provides clear, user-friendly feedback with appropriate logging levels. Technical debt is tracked and managed through regular refactoring cycles, with complexity justified through documentation when necessary.

### IX. Security & Privacy
User data protection is paramount at all times. Sensitive information is never logged or exposed in error messages. Supabase RLS policies and authentication mechanisms are correctly implemented and regularly audited. API endpoints validate and sanitize all inputs, preventing common vulnerabilities. Privacy considerations are embedded in every feature decision, following data minimization principles.

## Technology Stack Standards

### Required Technologies
- **Frontend**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Supabase client libraries
- **Database**: Supabase (PostgreSQL) with proper schema design
- **Authentication**: Supabase Auth with multi-factor authentication support
- **Storage**: Supabase Storage for file uploads and media management
- **Deployment**: Vercel with edge functions and caching strategies
- **Development**: Claude Code with MCP servers for AI-assisted development

### Prohibited Patterns
- Direct database connections from client-side code
- Storing sensitive data in localStorage or cookies without encryption
- Skipping RLS policies on any database table
- Hardcoded API keys or secrets in source code
- Client-side data validation as the only validation layer
- Bypassing TypeScript type checking with `any` types

## Development Workflow

### Code Review Requirements
All pull requests require review focusing on constitution compliance, security implications, and performance considerations. Reviews must verify adherence to design specifications from Figma, proper error handling, and test coverage for new features. Architecture changes require additional approval and documentation updates.

### Quality Gates
- TypeScript compilation must pass without errors
- All existing tests must pass before merge
- New features require corresponding tests
- Performance budgets must be maintained (Core Web Vitals)
- Accessibility audits must pass for user-facing changes
- Security review for authentication and data handling changes

### Deployment Process
1. Feature branches deploy to preview environments automatically
2. Staging environment mirrors production configuration
3. Production deployments require approval for breaking changes
4. Rollback procedures must be tested and documented
5. Database migrations run in transactions with rollback capability

## Governance

This constitution supersedes all other development practices and guidelines. Amendments require documentation of the change, team approval, and a migration plan for existing code. All team members must review and acknowledge constitution updates. Regular compliance reviews ensure ongoing adherence to these principles.

The constitution is enforced through:
- Automated checks in CI/CD pipelines
- Code review requirements focusing on principle compliance
- Regular architecture reviews and refactoring cycles
- Team training and onboarding processes
- Integration with development tools and workflows

**Version**: 1.0.0 | **Ratified**: 2025-11-20 | **Last Amended**: 2025-11-20