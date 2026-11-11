# Right People — Full Stack Website

Recreation of [rightpeople.ae](https://rightpeople.ae/) as a modern full-stack app: React + Tailwind frontend, Node.js/Express + MongoDB backend for job applications and contact/request-talent leads.

## Structure

- `client/` — React (Vite) + Tailwind CSS frontend
- `server/` — Express + MongoDB API (job applications, contact & request-talent leads, resume/file uploads)

## Running locally

**Backend**
```
cd server
npm install
# copy .env.example to .env and set MONGO_URI if not using local MongoDB
npm run dev
```
Runs on http://localhost:5050

**Frontend**
```
cd client
npm install
npm run dev
```
Runs on http://localhost:5173 (or next free port)

## Pages

Home, About Us, Services, Jobs (with apply form + resume upload), Request Talent, Contact.

## API

- `POST /api/applications` — job application (multipart: name, email, phone, jobTitle, jobId, coverNote, resume file)
- `POST /api/leads` — contact / request-talent (multipart: type, name, email, phone, message, attachment file)
- `GET /api/health` — health check

Submitted data is stored in MongoDB (`applications`, `leads` collections). Resumes/attachments are saved to `server/uploads/`. There's no admin panel yet — view data via MongoDB Compass/Atlas or `mongosh`.

## Next steps to go live

1. Set up a MongoDB Atlas cluster (free tier) and update `MONGO_URI` in `server/.env`.
2. Deploy `server/` (Render, Railway, or a VPS) and `client/` (Vercel, Netlify, or Hostinger).
3. Update `client/.env` → `VITE_API_URL` to point to the deployed backend.
4. Point the `rightpeople.ae` domain (or a subdomain) to the new deployment once approved.
