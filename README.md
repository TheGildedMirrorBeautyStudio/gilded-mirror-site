# The Gilded Mirror Beauty Studio — Website

A fast React + Vite site with Tailwind styling, a **CMS** (Decap/Netlify CMS) for Services & Blog, an **Admin Dashboard**, and **Netlify Functions + Supabase** for bookings.

## Quick Start (Local)

1. **Install Node** (LTS 18 or 20) from nodejs.org.
2. Unzip this project, open a terminal in the folder and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open http://localhost:5173 in your browser.

## Deploy on Netlify (recommended)

1. Create a new **GitHub repo** and push this folder.
2. In **Netlify → Add new site → Import from Git**, pick your repo.
3. Build command: `npm run build` • Publish directory: `dist`.
4. Go to **Site settings → Identity**: enable Identity and Git Gateway (Invite‑only).
5. **Invite yourself** and any other admins via Identity.
6. Visit `/gold-admin-mirror-7f3a/` to access the CMS.

## Environment Variables (create in Netlify & local `.env`)

For the React app (visible to browser):
```
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
VITE_SITE_URL=https://your-site.netlify.app
```

For Netlify Functions (private):
```
SUPABASE_URL=YOUR_SUPABASE_URL
SUPABASE_SERVICE_ROLE=YOUR_SUPABASE_SERVICE_ROLE_KEY
RESEND_API_KEY=YOUR_RESEND_API_KEY
BOOKING_FROM='Gilded Mirror <bookings@yourdomain.com>'
SITE_URL=https://your-site.netlify.app
ADMIN_API_KEY=make-up-a-long-random-string
```

Create a local `.env` file by copying `.env.example` and filling values.

## Supabase Setup

1. Create a project at supabase.com → get **Project URL** and **Keys**.
2. In the Supabase dashboard → **SQL editor** → paste contents of `supabase/schema.sql` → **Run**.
3. (Optional) Insert initial staff/services rows using the **Table editor**.

## Booking Flow (Overview)

- Frontend (React) collects service/date/time/client details.
- Calls `/.netlify/functions/bookings-create` (inserts in Supabase, sends email with calendar invite).
- `/.netlify/functions/bookings-list` returns existing bookings (to avoid overlap).
- Admin dashboard visualizes data from Supabase.

## Hardened Admin URL

- CMS: `/gold-admin-mirror-7f3a/` (change the folder name to your own long string).
- Admin app route: `/gold-admin-mirror-7f3a` (change route path in `src/main.jsx` and component import path accordingly).
- Identity is **Invite‑only**; only invited emails can log in.

## SPA redirects

Netlify uses `_redirects` and `netlify.toml` to handle client‑side routing and to serve admin/CMS correctly.

---

**Folders**

- `public/` → favicons, manifest, CMS loader and config
- `content/` → Markdown from the CMS (Services + Blog)
- `src/` → React app (pages/components/lib)
- `netlify/functions/` → serverless functions (bookings, email)
- `supabase/` → SQL schema for tables
