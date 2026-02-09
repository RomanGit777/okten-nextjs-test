🎬 Next.js Movie App
A modern, production‑ready movie browsing application built with Next.js  14, React Query, and TMDB API.
The app features trending movies/TV shows, genre‑based browsing, detailed media pages, and a fully interactive search experience.

🚀 Features
✔ Modern Next.js Architecture

Server Components for data‑fetching pages

Client Components only where needed (SearchBar, sliders, interactive UI)

Secure server‑only TMDB API calls

Route Handler for client‑safe search request

✔ Fast & Optimized

Static rendering for stable pages

Dynamic rendering for detail pages

Smart caching with revalidate

Debounced search requests

Lazy‑loaded images

✔ Clean UI/UX

Responsive layout

Slider components with arrows

Search dropdown with:

debounce

click‑outside close

loading state

“no results” state

Consistent spacing and typography

✔ Strong Code Structure

Domain‑driven API modules (movies.ts, tv.ts)

Centralized genre map (GENRE_MAP)

Reusable components (cards, rating, sliders)

Clear separation of server/client logic

🔧 Development

Install dependencies:

bash
npm install

Run locally:

bash
npm run dev

Build:

bash
npm run build

Start production:

bash
npm start

🔑 Environment Variables

Create .env.local:

TMDB_API_KEY=your_tmdb_bearer_token

This project uses data provided by The Movie Database (TMDB).

(token for a mentor: TMDB_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGUzOThjMzdiNTE5ZjYyYzZhOTk1YzlhYzFjYTMwMSIsIm5iZiI6MTc2MzM5MTE2MS4wMzEwMDAxLCJzdWIiOiI2OTFiMzZiOTExN2MwZTQ3ZDIxNzVlNmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.m6cehBsc3dhuTWSTa02LI996v5AiVw2xv7c0vgrZRLY
) 