# 7Layers Developer Guide

## Project Architecture

### Tech Stack
- **Frontend**: Next.js 16 (React 19) with TypeScript
- **Backend**: Next.js API Routes with Server Actions
- **Database**: Supabase PostgreSQL with Row Level Security (RLS)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Deployment**: Vercel

### Project Structure

```
7layers/
├── app/
│   ├── api/                 # API Routes
│   │   ├── contact/         # Contact form handler
│   │   ├── solutions/       # Solutions API
│   │   ├── case-studies/    # Case studies API
│   │   └── ...
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── page.tsx             # Homepage
│   └── (pages)/             # Route groups
│       ├── about/           # About page
│       ├── solutions/       # Solutions pages
│       ├── projects/        # Case studies pages
│       ├── blog/            # Blog pages
│       ├── contact/         # Contact page
│       └── admin/           # Admin dashboard (protected)
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── layout/              # Layout components (Header, Footer, etc.)
│   └── features/            # Feature-specific components
├── lib/
│   ├── supabase.ts          # Supabase client configuration
│   ├── utils.ts             # Utility functions
│   └── ...
├── hooks/                   # React hooks (use-mobile, use-toast, etc.)
├── public/                  # Static assets
├── scripts/                 # Database migration scripts
├── docs/                    # Documentation
└── package.json
```

---

## Database Schema Overview

### Core Tables

1. **solutions** - Service offerings displayed on the website
2. **case_studies** - Client success stories
3. **blog_posts** - Articles and insights
4. **leads** - Contact form submissions
5. **client_accounts** - Client portal user accounts
6. **client_projects** - Active projects for clients
7. **project_updates** - Status updates on client projects
8. **team_members** - Internal team member accounts
9. **page_content** - Dynamic page content (SEO, descriptions)
10. **analytics_events** - Website visitor analytics

### Creating New Tables

**Step 1: Create Migration Script**

```sql
-- scripts/003_add_new_feature.sql
CREATE TABLE new_feature (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE new_feature ENABLE ROW LEVEL SECURITY;

-- Add policies
CREATE POLICY "new_feature public read" ON new_feature
  FOR SELECT USING (true);
```

**Step 2: Execute Migration**

```bash
# In v0, use the SystemAction tool to execute the script
```

**Step 3: Update Supabase Client**

Reference the table in your API routes using the supabase client.

---

## API Endpoints Checklist

### Public Endpoints (No Auth Required)

- ✅ `GET /api/solutions` - Fetch all solutions
- ✅ `GET /api/case-studies` - Fetch case studies
- ✅ `POST /api/contact` - Submit contact form
- 📋 `GET /api/blog` - Fetch blog posts (planned)
- 📋 `GET /api/team` - Fetch team members (planned)

### Protected Endpoints (Auth Required)

- 📋 `GET /api/client/projects` - Get client projects
- 📋 `POST /api/client/projects` - Create project
- 📋 `GET /api/admin/leads` - View all leads
- 📋 `POST /api/admin/solutions` - Create solution

### Implementation Pattern

```typescript
// /app/api/feature/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('feature_table')
      .select('*')

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

---

## Adding New Features

### Example: Add Blog System

#### 1. Database Setup

```sql
-- Already exists in schema
-- Check /scripts/001_init_database.sql for blog_posts table
```

#### 2. Create API Route

```typescript
// /app/api/blog/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = 10
  const offset = (page - 1) * limit

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json(data)
}
```

#### 3. Create React Components

```typescript
// /components/features/BlogCard.tsx
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="border rounded-lg p-6">
      <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-600">{post.excerpt}</p>
      <a href={`/blog/${post.slug}`} className="text-teal-500 mt-4">
        Read More →
      </a>
    </article>
  )
}
```

#### 4. Create Pages

```typescript
// /app/(pages)/blog/page.tsx
import { BlogCard } from '@/components/features/BlogCard'

export default async function BlogPage() {
  const response = await fetch('http://localhost:3000/api/blog')
  const posts = await response.json()

  return (
    <main>
      <h1>Blog</h1>
      <div className="grid gap-6">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}
```

---

## Authentication Implementation

### Client Portal (Supabase Auth)

```typescript
// Server Component with Auth
import { supabase } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export default async function ProtectedPage() {
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <div>
      <p>Welcome, {session.user.email}</p>
    </div>
  )
}
```

### Admin Dashboard Protection

```typescript
// /app/(pages)/admin/page.tsx
import { supabase } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export default async function AdminDashboard() {
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) redirect('/login')

  // Check if user is admin via team_members table
  const { data: teamMember } = await supabase
    .from('team_members')
    .select('role')
    .eq('user_id', session.user.id)
    .single()

  if (teamMember?.role !== 'admin') {
    redirect('/')
  }

  return <div>Admin Dashboard</div>
}
```

---

## Content Management (CMS)

### Adding New Solution Categories

The solutions table is designed for CMS-like management:

```typescript
// Example: Insert new solution
const { data, error } = await supabase
  .from('solutions')
  .insert({
    name: 'New Service',
    description: 'Service description',
    icon_url: 'https://...',
    display_order: 8,
    is_active: true
  })
```

You can manage this through:
1. **Supabase Dashboard** - Direct table editing
2. **Admin API** - Create admin endpoints for management
3. **Admin Interface** - Build a custom admin dashboard

### Publishing Content

All published content uses an `is_published` flag:

```typescript
// Only fetch published content
const { data } = await supabase
  .from('blog_posts')
  .select('*')
  .eq('is_published', true)
```

---

## Performance Optimization

### Server-Side Rendering

Prefer Server Components for:
- Static content (solutions, case studies)
- Content that needs auth checks
- SEO-critical pages

```typescript
// Good: Server Component
export default async function SolutionsPage() {
  const response = await fetch('/api/solutions')
  const solutions = await response.json()
  return <SolutionsList solutions={solutions} />
}
```

### Caching Strategies

```typescript
// Cache solutions for 1 hour
const response = await fetch('/api/solutions', {
  next: { revalidate: 3600 }
})
```

### Database Indexes

Create indexes on frequently queried columns:

```sql
CREATE INDEX idx_blog_posts_published ON blog_posts(is_published, published_at);
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_case_studies_industry ON case_studies(industry);
```

---

## Security Best Practices

### Row Level Security (RLS)

All tables have RLS enabled. Policies are defined in `/scripts/002_enable_rls.sql`

### Input Validation

Always validate user input:

```typescript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if (!emailRegex.test(email)) {
  return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
}
```

### Environment Variables

Never commit secrets to git. Use `.env.local`:

```
SUPABASE_SERVICE_ROLE_KEY=your_secret_key
RESEND_API_KEY=your_api_key
```

---

## Testing

### Manual API Testing

```bash
# Test contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Test message"
  }'

# Test solutions
curl http://localhost:3000/api/solutions
```

---

## Deployment

### Environment Variables (Vercel)

Add in Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `ADMIN_EMAIL`

### Database Backups

Supabase provides automatic backups. Configure in the dashboard.

### Monitoring

Monitor key metrics:
- API response times
- Error rates
- Database connections
- Storage usage

---

## Troubleshooting

### Common Issues

**Issue**: RLS policy denying access
- **Solution**: Check the policy conditions match your auth setup

**Issue**: API returning 500 error
- **Solution**: Check server logs and database error messages

**Issue**: Slow queries
- **Solution**: Add database indexes, check query plans

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

---

*Last updated: 2024*
