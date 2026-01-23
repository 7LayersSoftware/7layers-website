# 7Layers Quick Start Guide

Get up and running in 5 minutes.

## Prerequisites
- Node.js 18+ installed
- Supabase account with project set up
- GitHub account (for deployment)

## 1️⃣ Clone & Install (2 min)

```bash
# Clone the repository
git clone <repository-url>
cd 7layers

# Install dependencies
npm install
```

## 2️⃣ Setup Environment (2 min)

```bash
# Copy the template
cp .env.example .env.local

# Edit .env.local with your values:
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
SUPABASE_SERVICE_ROLE_KEY=your_key_here
RESEND_API_KEY=your_key_here
```

### Finding Your Supabase Keys
1. Go to [supabase.com](https://supabase.com)
2. Select your project
3. Settings → API → Copy the keys
4. `NEXT_PUBLIC_SUPABASE_URL` = Project URL
5. `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Anon Public
6. `SUPABASE_SERVICE_ROLE_KEY` = Service Role Secret

## 3️⃣ Setup Database (1 min)

**In Supabase Dashboard**:
1. Click "SQL Editor" in the left sidebar
2. Click "New Query"
3. Copy & paste content from `/scripts/001_init_database.sql`
4. Click "Run"
5. Repeat for `/scripts/002_enable_rls.sql`

## 4️⃣ Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📍 Key Pages to Visit

- **Homepage**: http://localhost:3000
- **About**: http://localhost:3000/about
- **Solutions**: http://localhost:3000/solutions
- **Projects**: http://localhost:3000/projects
- **Contact**: http://localhost:3000/contact

## 🧪 Test the Contact Form

1. Go to http://localhost:3000/contact
2. Fill in the form
3. Submit
4. Check Supabase → `leads` table for the entry
5. If email notifications don't work (expected), the data is still saved

## 📚 Documentation

- **Getting Help?** → See `/docs/DEVELOPER_GUIDE.md`
- **API Reference?** → See `/docs/API.md`
- **Detailed Summary?** → See `/docs/IMPLEMENTATION_SUMMARY.md`

## 🚀 Deploy to Vercel

```bash
# 1. Push to GitHub
git add .
git commit -m "Initial 7Layers setup"
git push origin main

# 2. Go to vercel.com
# 3. Import project from GitHub
# 4. Add environment variables in project settings
# 5. Deploy!
```

## 🎯 Common Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Format code
npm run format

# Type checking
npm run type-check
```

## 🆘 Troubleshooting

### "Cannot find module '@supabase/supabase-js'"
```bash
npm install @supabase/supabase-js
```

### "Environment variable not found"
- Check `.env.local` exists with all required variables
- Restart dev server after changing `.env.local`

### Contact form not submitting
- Check browser console for errors
- Verify Supabase keys in `.env.local`
- Check that database is set up correctly

### Pages not loading
- Clear `.next` folder: `rm -rf .next`
- Restart dev server: `npm run dev`

## 📞 Need More Help?

1. Check `/docs/DEVELOPER_GUIDE.md` for detailed architecture
2. Review `/docs/API.md` for API endpoints
3. See `/README.md` for full project overview
4. Check existing components for code examples

---

**You're all set! Start building! 🚀**

Visit `/docs/IMPLEMENTATION_SUMMARY.md` for what's next and how to extend the platform.
