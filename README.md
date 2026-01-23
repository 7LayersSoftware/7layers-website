# 7Layers - Enterprise IT Infrastructure Solutions

A Fortune-500-grade website and backend platform for 7Layers, built with Next.js 16, React 19, Supabase, and TypeScript.

## 🎯 Project Overview

7Layers is a comprehensive SaaS platform showcasing enterprise IT infrastructure solutions with:

- **Public-facing website** with solutions, case studies, and blog
- **Lead management system** for contact form submissions
- **Client portal** for project management and updates
- **Admin dashboard** for content management and analytics
- **Scalable backend infrastructure** ready for enterprise growth

## 🏗️ Architecture

### Frontend
- **Next.js 16** - App Router with React 19
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - Accessible component library
- **Responsive Design** - Mobile-first approach

### Backend
- **Next.js API Routes** - RESTful endpoints
- **Supabase PostgreSQL** - Scalable relational database
- **Row Level Security (RLS)** - Data protection policies
- **Supabase Auth** - User authentication
- **Email Integration** - Contact form notifications (Resend)

### Brand Colors
- **Primary (Dark)**: Midnight Obsidian (#0A1128)
- **Accent (Teal)**: Kinetic Teal (#00F5D4)
- **Neutral**: Off-white and grays (#F8F9FA, etc.)

## 📁 Project Structure

```
7layers/
├── app/
│   ├── api/                          # API Route Handlers
│   │   ├── contact/route.ts          # Contact form submissions
│   │   ├── solutions/route.ts        # Solutions list API
│   │   ├── case-studies/route.ts     # Case studies API
│   │   ├── blog/route.ts             # Blog posts API (planned)
│   │   └── ...
│   │
│   ├── (pages)/                      # Page route groups
│   │   ├── about/page.tsx            # About Us page
│   │   ├── solutions/page.tsx        # Solutions page
│   │   ├── projects/page.tsx         # Case Studies/Projects
│   │   ├── contact/page.tsx          # Contact & inquiry form
│   │   ├── blog/page.tsx             # Blog listing (planned)
│   │   ├── admin/page.tsx            # Admin dashboard (protected)
│   │   └── ...
│   │
│   ├── layout.tsx                    # Root layout with metadata
│   ├── globals.css                   # Global styles & theme tokens
│   └── page.tsx                      # Homepage
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                # Navigation header
│   │   └── Footer.tsx                # Footer component
│   │
│   ├── ui/                           # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── ...
│   │
│   └── features/                     # Feature-specific components
│       ├── SolutionCard.tsx
│       ├── ProjectCard.tsx
│       └── ...
│
├── lib/
│   ├── supabase.ts                   # Supabase client setup
│   └── utils.ts                      # Utility functions (cn, etc.)
│
├── hooks/
│   ├── use-mobile.tsx                # Mobile detection
│   └── use-toast.ts                  # Toast notifications
│
├── public/
│   ├── icon.svg
│   ├── icon-light-32x32.png
│   ├── icon-dark-32x32.png
│   └── apple-icon.png
│
├── scripts/
│   ├── 001_init_database.sql         # Initial database schema
│   ├── 002_enable_rls.sql            # Row Level Security policies
│   └── 003_add_feature.sql           # Example migration template
│
├── docs/
│   ├── API.md                        # Complete API documentation
│   └── DEVELOPER_GUIDE.md            # Developer setup & extending
│
├── .env.example                      # Environment variables template
├── package.json                      # Dependencies & scripts
├── tsconfig.json                     # TypeScript configuration
└── next.config.mjs                   # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Supabase account
- npm or pnpm

### Installation

1. **Clone & Setup**
   ```bash
   git clone <repository>
   cd 7layers
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   RESEND_API_KEY=your_resend_api_key
   ```

3. **Database Setup**
   - Execute `/scripts/001_init_database.sql` in Supabase
   - Execute `/scripts/002_enable_rls.sql` for security policies

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

## 📚 Database Schema

### Core Tables

#### `leads`
Contact form submissions from website visitors.
```sql
id, name, email, company, phone, message, service, source, status, ip_address, created_at, updated_at
```

#### `solutions`
Service offerings displayed on the website.
```sql
id, name, description, icon_url, display_order, is_active, created_at, updated_at
```

#### `case_studies`
Published client success stories.
```sql
id, title, description, client_name, results (JSONB), industry, image_url, is_published, created_at, updated_at
```

#### `blog_posts`
Articles and insights.
```sql
id, title, slug, content, excerpt, author_id, category, image_url, is_published, published_at, created_at, updated_at
```

#### `client_accounts`
Client portal user accounts.
```sql
id, user_id (FK auth.users), company_name, contact_person, status, created_at, updated_at
```

#### `client_projects`
Active client projects.
```sql
id, client_id, project_name, description, status, progress, assigned_team_member_id, start_date, end_date, created_at, updated_at
```

#### `team_members`
Internal team/staff accounts.
```sql
id, user_id, name, email, role (admin, manager, account_manager, developer, designer), department, created_at, updated_at
```

#### `page_content`
Dynamic content for pages (SEO, descriptions).
```sql
id, page_slug, section_name, content (JSONB), meta_title, meta_description, is_published, created_at, updated_at
```

#### `analytics_events`
Website visitor analytics and events.
```sql
id, event_type, user_id, page_path, metadata (JSONB), created_at
```

### Row Level Security (RLS)

All tables have RLS enabled with policies:
- **Public data** (solutions, case studies, blog) - public read
- **Leads** - admin/account manager access only
- **Client data** - user sees own, admins see all
- **Team members** - admin access only
- **Admin content** - authenticated staff write, public read published

## 🔌 API Endpoints

### Public Endpoints

```
POST /api/contact
  Submit contact form inquiry
  
GET /api/solutions
  Fetch all active solutions
  
GET /api/case-studies
  Fetch published case studies
  
GET /api/blog (planned)
  Fetch blog posts with pagination
```

### Protected Endpoints (Require Auth)

```
GET /api/client/projects
  Get projects for authenticated client
  
GET /api/admin/leads
  Get all leads (admin only)
  
POST /api/admin/solutions
  Create/update solutions (admin only)
```

See `/docs/API.md` for complete API documentation.

## 🎨 Design System

### Colors
- **Backgrounds**: Midnight Obsidian dark backgrounds
- **Text**: Off-white on dark (#F8F9FA)
- **Accents**: Kinetic Teal (#00F5D4) for buttons, highlights
- **Borders**: Subtle grays for structure

### Typography
- **Sans-serif**: Geist (headings & body)
- **Monospace**: Geist Mono (code blocks)

### Components
- Built with shadcn/ui for consistency
- Responsive Tailwind CSS utilities
- Dark mode support (system preference)

## 📖 Documentation

- **[API Documentation](/docs/API.md)** - Complete API reference, endpoints, and examples
- **[Developer Guide](/docs/DEVELOPER_GUIDE.md)** - Setup, architecture, extending features

## 🛠️ Development

### Add a New API Endpoint

1. Create `/app/api/feature/route.ts`
2. Implement GET/POST/etc. handlers
3. Add validation & error handling
4. Document in `/docs/API.md`

Example:
```typescript
// /app/api/blog/route.ts
export async function GET() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_published', true)
  
  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json(data)
}
```

### Add a New Page

1. Create `/app/(pages)/feature/page.tsx`
2. Import Header/Footer components
3. Build UI with components
4. Use API endpoints or Server Components for data

### Create a Database Migration

1. Create `/scripts/00X_feature.sql`
2. Write SQL for tables, indexes, RLS policies
3. Execute in Supabase dashboard or with SystemAction
4. Update documentation

## 🔐 Security

- **RLS Policies** - Data access controlled at database level
- **Input Validation** - All API inputs validated
- **Rate Limiting** - Contact form: 5 requests/15 min per IP
- **Authentication** - Supabase Auth for user management
- **HTTPS** - Required in production
- **Environment Secrets** - Never committed to git

## 📈 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Push to GitHub
   - Connect in Vercel dashboard

2. **Set Environment Variables**
   - Add all `.env.local` variables to Vercel project settings
   - Mark NEXT_PUBLIC_* as public

3. **Deploy**
   - Automatic on push to main branch
   - Preview deployments for pull requests

### Manual Deployment

```bash
npm run build
npm start
```

## 📊 Analytics & Monitoring

- **Database**: Monitor Supabase dashboard for performance
- **Errors**: Server logs in Vercel
- **Uptime**: Configure monitoring service
- **Analytics**: Add Google Analytics via NEXT_PUBLIC_GA_ID

## 🔄 Content Management

### Managing Solutions
1. Go to Supabase dashboard
2. Edit `solutions` table directly
3. Or build admin endpoints for managed UI

### Publishing Blog Posts
1. Insert into `blog_posts` table
2. Set `is_published = true` to publish
3. Schedule with cron job for future publish times

### Lead Management
- View in Supabase: `leads` table
- Filter by status: 'new', 'contacted', 'converted'
- Export for CRM integration

## 🎯 Future Enhancements

- [ ] Client portal dashboard
- [ ] Admin content management interface
- [ ] Blog with category filtering
- [ ] Email notifications for leads
- [ ] Team member management
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Webhook integrations

## 🤝 Contributing

1. Create feature branch
2. Make changes following the architecture
3. Test thoroughly
4. Submit pull request
5. Follow code style (TypeScript, Tailwind conventions)

## 📞 Support

For development questions, refer to:
- `/docs/DEVELOPER_GUIDE.md` - Architecture & extending
- `/docs/API.md` - API reference
- Vercel docs: https://nextjs.org/docs
- Supabase docs: https://supabase.com/docs

## 📄 License

Proprietary - 7Layers

---

**Built with Next.js 16, React 19, Supabase, and Tailwind CSS**

*Last Updated: January 2025*
