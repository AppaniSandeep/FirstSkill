# Movie App – Next.js + TMDB API

A modern movie browsing application built using Next.js (App Router), Server Components, TMDB API, and Tailwind CSS.  
This app demonstrates server-side rendering, dynamic routing, optimized images, and API integration.

--------------------------------------------------
## Features

1. Server-side data fetching on the homepage using the native fetch API.
2. Dynamic route for movie details: /movie/[id].
3. Hero Banner that highlights the first movie result.
4. Reusable MovieRow component rendered as a Client Component.
5. Optimized images using the Next.js <Image/> component.
6. Environment variable security for API keys.
7. Fixed header with navigation links.
8. Fully deployed on Vercel.

--------------------------------------------------
## Project Structure

src/
 ├── app/
 │    ├── layout.tsx
 │    ├── page.tsx
 │    ├── globals.css
 │    ├── movie/
 │    │     └── [id]/
 │    │           └── page.tsx
 │    └── components/
 │          ├── Header.tsx
 │          ├── HeroBanner.tsx
 │          └── MovieRow.tsx
 └── lib/
      └── tmdb.ts

--------------------------------------------------
## Technologies Used

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- TMDB API
- TypeScript
- Vercel

--------------------------------------------------
## Environment Variables

Create a `.env.local` file in the root:

TMDB_API_KEY=your_tmdb_api_key_here
NEXT_PUBLIC_BASE_URL=http://localhost:3000

After creating this file, restart the dev server:

npm run dev

--------------------------------------------------
## Installation and Setup

1. Clone the repository:

   git clone <your-repo-url>
   cd movie-app

2. Install dependencies:

   npm install

3. Run the development server:

   npm run dev

--------------------------------------------------
## Deployment (Vercel)

1. Push the project to GitHub.
2. Open Vercel → New Project → Import GitHub Repository.
3. Add the environment variables:

   TMDB_API_KEY=your_tmdb_api_key
   NEXT_PUBLIC_BASE_URL=https://your-vercel-project.vercel.app

4. Click Deploy.

--------------------------------------------------
## Routes Overview

### Homepage (/)
- Fetches popular movies from TMDB.
- Renders:
  - Hero Banner
  - Multiple MovieRow sections

### Movie Detail Page (/movie/[id])
- Fetches detailed movie data using the movie ID.
- Renders:
  - Poster
  - Title and overview
  - Release date and rating
  - Genres

--------------------------------------------------
## Additional Notes

A separate file named `AI_Report.md` is included which explains:
- AI tools used
- Which parts of the code were AI-assisted
- GitHub and Vercel deployment links
