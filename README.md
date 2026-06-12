# Lenox's Creations

A web platform for sharing and reading poetry, where poets can upload and publish their work for others to enjoy.

## About

Lenox's Creations is a community space for poets to share their writing and for readers to discover new voices. Users can upload poems and reading materials, browse a public library of submissions, and explore work by different authors.

## Features

- 📖 Browse and read poems from multiple poets
- ✍️ Upload your own poetry and reading materials
- 🔍 Search and filter by author, title, or tags
- 👤 User accounts for poets to manage their submissions
- 📱 Responsive website layout for desktop and mobile readers
- ✨ Clean design that puts poetry front and center

## Website structure

This project is a poetry website, not a mobile app. The website is organized around pages for readers and poets:

- **Home** — featured poems, author highlights, and quick access to the library
- **Library / Browse** — poem listings with search and tag filters
- **Poem detail** — full poem text, author, tags, publish date, and related work
- **Author profile** — bio, published poems, and poet highlights
- **Submit poem** — simple submission form for title, poem text, tags, and optional cover image
- **About** — mission, how the website works, and contact details

## Website page content

Each page should include the following content elements:

- **Home**: site headline, featured poems, latest uploads, and clear navigation links
- **Library / Browse**: poem cards with title, excerpt, author, tags, and search/filter bar
- **Poem detail**: poem text, author name, publication info, tags, and related poems
- **Author profile**: author photo, bio, published poems, and social/contact details
- **Submit poem**: input for title, poem body, tags, optional cover image, and submission guidelines
- **About**: site story, purpose, community invitation, and contact or support info

## Design and usability

For a strong poetry website, make sure the site is:

- **Readable** — large, legible type and good line spacing for poem text
- **Responsive** — works well on mobile, tablet, and desktop
- **Simple** — clean layout that keeps poems and authors visible
- **Easy to use** — clear navigation, search, and page hierarchy
- **Inviting** — calm colors, thoughtful spacing, and gentle typography

## Tech Stack

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS
- **Database & Auth:** Supabase
- **File Storage:** Supabase Storage
- **Deployment:** Vercel/GitHub

## Getting Started

## Prerequisites

- Node.js (v18 or later)
- npm

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/lenodewere/Lenox-s-Creations.git
   cd Lenox-s-Creations
   ```

2. Install Dependencies
   - npm install

3. Setup environment variables
   Create a .env.local file in the root directory:

   ```ini
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server

   ```bash
   npm run dev
   ```

5. Open <http://localhost:3000> in your browser

### Deploy as a static site

This website can also be published as a simple static site using GitHub Pages.

- Commit the HTML and CSS files to your repository
- In GitHub, go to Settings > Pages
- Choose the `main` branch and `/ (root)` folder as the source
- Publish the site and use the provided GitHub Pages URL

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Author: Lenox - Lenox's Creations
