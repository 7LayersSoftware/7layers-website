# 7Layers API Documentation

## Overview

The 7Layers backend is built on Next.js 16 with Supabase as the database. All APIs are REST endpoints that follow RESTful conventions.

## Base URL

```
http://localhost:3000/api
```

## Authentication

### Public Endpoints
- Solutions list
- Case studies list
- Blog posts
- Contact form submission

### Protected Endpoints (Require Auth)
- Client portal
- Project management
- Admin dashboard

Use Supabase Auth tokens in the `Authorization` header:
```
Authorization: Bearer {supabase_access_token}
```

## Endpoints

### Contact Form

#### POST `/api/contact`

Submit a contact form inquiry.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "phone": "+1 (555) 123-4567",
  "message": "I'm interested in your services",
  "service": "cloud_migration"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Thank you for contacting us. We will get back to you soon.",
  "leadId": "uuid"
}
```

**Errors:**
- `400` - Missing required fields or invalid email
- `429` - Rate limited (max 5 requests per 15 minutes)
- `500` - Server error

---

### Solutions

#### GET `/api/solutions`

Fetch all active solutions.

**Query Parameters:**
- None

**Response (200):**
```json
[
  {
    "id": "uuid",
    "name": "Cloud Migration",
    "description": "Seamless migration to cloud infrastructure",
    "icon_url": "https://...",
    "display_order": 1,
    "is_active": true,
    "created_at": "2024-01-01T00:00:00Z"
  }
]
```

**Errors:**
- `500` - Server error

---

### Case Studies

#### GET `/api/case-studies`

Fetch all published case studies.

**Query Parameters:**
- None

**Response (200):**
```json
[
  {
    "id": "uuid",
    "title": "Enterprise Cloud Transformation",
    "description": "How we transformed a legacy system",
    "client_name": "Fortune 500 Company",
    "results": ["99.9% uptime", "40% cost reduction"],
    "industry": "Finance",
    "is_published": true,
    "created_at": "2024-01-01T00:00:00Z"
  }
]
```

**Errors:**
- `500` - Server error

---

### Blog Posts (Planned)

#### GET `/api/blog`

Fetch published blog posts with pagination.

**Query Parameters:**
- `page` (int, default: 1)
- `limit` (int, default: 10)
- `category` (string, optional)

---

## Error Handling

All errors follow this format:

```json
{
  "error": "Error message",
  "status": 400,
  "timestamp": "2024-01-01T00:00:00Z"
}
```

Common HTTP Status Codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Too Many Requests
- `500` - Server Error

---

## Rate Limiting

Public endpoints are rate limited:
- **Contact form**: 5 requests per 15 minutes per IP
- **Public data**: 100 requests per 15 minutes per IP

Rate limit headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1234567890
```

---

## Database Schema

### Tables

#### `leads`
Store contact form submissions and inquiries.

```sql
- id: UUID (PRIMARY KEY)
- name: TEXT
- email: TEXT
- company: TEXT
- phone: TEXT
- message: TEXT
- service: TEXT
- source: TEXT (e.g., 'website_contact_form')
- status: TEXT (e.g., 'new', 'contacted', 'converted')
- ip_address: INET
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

#### `solutions`
Core service offerings.

```sql
- id: UUID (PRIMARY KEY)
- name: TEXT
- description: TEXT
- icon_url: TEXT
- display_order: INT
- is_active: BOOLEAN
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

#### `case_studies`
Published project success stories.

```sql
- id: UUID (PRIMARY KEY)
- title: TEXT
- description: TEXT
- client_name: TEXT
- results: JSONB (array of strings)
- industry: TEXT
- image_url: TEXT
- is_published: BOOLEAN
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

#### `blog_posts`
Published articles and insights.

```sql
- id: UUID (PRIMARY KEY)
- title: TEXT
- slug: TEXT
- content: TEXT
- excerpt: TEXT
- author_id: UUID (FK to team_members)
- category: TEXT
- image_url: TEXT
- is_published: BOOLEAN
- published_at: TIMESTAMP
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

#### `client_accounts`
Client portal user accounts.

```sql
- id: UUID (PRIMARY KEY)
- user_id: UUID (FK to auth.users)
- company_name: TEXT
- contact_person: TEXT
- status: TEXT
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

#### `client_projects`
Client project management.

```sql
- id: UUID (PRIMARY KEY)
- client_id: UUID (FK to client_accounts)
- project_name: TEXT
- description: TEXT
- status: TEXT
- progress: INT (0-100)
- assigned_team_member_id: UUID
- start_date: DATE
- end_date: DATE
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

#### `team_members`
Internal team member accounts.

```sql
- id: UUID (PRIMARY KEY)
- user_id: UUID (FK to auth.users)
- name: TEXT
- email: TEXT
- role: TEXT (admin, manager, account_manager, developer, designer)
- department: TEXT
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

---

## Best Practices

### Security
1. Always validate and sanitize input
2. Use parameterized queries (Supabase handles this)
3. Implement rate limiting
4. Validate email addresses
5. Use HTTPS in production

### Performance
1. Use pagination for large datasets
2. Implement caching where appropriate
3. Use database indexes on frequently queried columns
4. Cache static content (solutions, case studies) client-side

### Error Handling
1. Return meaningful error messages
2. Log errors server-side
3. Don't expose sensitive information in error messages
4. Use appropriate HTTP status codes

---

## Extending the API

### Adding a New Endpoint

1. Create a new file in `/app/api/{feature}/route.ts`
2. Implement the GET, POST, etc. handlers
3. Add validation and error handling
4. Document the endpoint in this file
5. Test with sample data

### Example: New Blog Endpoint

```typescript
// /app/api/blog/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
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

---

## Deployment

### Production Checklist

- [ ] Set environment variables in Vercel
- [ ] Enable RLS policies in Supabase
- [ ] Configure CORS for production domain
- [ ] Set up email notifications
- [ ] Enable database backups
- [ ] Configure monitoring and logging
- [ ] Test all endpoints
- [ ] Set up SSL certificates

---

## Support & Maintenance

For adding new features or scaling:
1. Review the database schema
2. Plan new tables or columns
3. Create migration scripts
4. Update API endpoints
5. Test thoroughly before deployment

---

*Last updated: 2024*
