# Cyber-Tech Personal Portfolio

A trendy, geeky, and interactive personal portfolio website built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## 🚀 Features

- **Cyber-Tech Theme**: Dark mode only, neon accents, noise textures, and holographic UI elements.
- **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop.
- **Data-Driven Content**: ALL content is managed in a single file `src/data/profile.ts`.
- **Animations**: Smooth page transitions and micro-interactions using Framer Motion.
- **Project Filtering**: Filter projects by tech stack.
- **Project Modal**: Expandable details for each project without leaving the page.
- **Performance**: High Lighthouse scores, optimized fonts (Inter, Space Grotesk, JetBrains Mono).

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 📝 How to Edit Content

1. Open `src/data/profile.ts`.
2. Update the `profile` object with your details:
   - **Name, Role, Bio**: Standard text fields.
   - **Socials**: Add your links.
   - **Skills**: Group your skills by category.
   - **Projects**: array of project objects. Each project has `techStack`, `description`, `links`.
   - **Experience/Education**: Add timeline items.
3. Save the file. The site updates instantly.

## 🏃‍♂️ Running Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Browser**:
   Visit [http://localhost:3000](http://localhost:3000).

## 🌍 Deployment on Vercel

1. Push this code to a **GitHub** repository.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click **"Add New Project"** and select your repository.
4. Click **"Deploy"**.
5. Vercel will automatically detect Next.js and build your site.

## 🎨 Customizing the Theme

To change colors or fonts, edit `src/app/globals.css`.
- **Colors**: Modified the `--color-primary`, `--color-secondary` variables in the `@theme` block.
- **Animations**: Adjust keyframes in `globals.css`.

## 📂 Project Structure

```
src/
├── app/                  # App Router pages and layout
│   ├── globals.css       # Global styles & Tailwind theme
│   ├── layout.tsx        # Root layout with fonts
│   └── page.tsx          # Main single-page structure
├── components/           # React Components
│   ├── ui/               # Reusable UI components (Button, Card, Badge)
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── ...               # Other sections
├── data/                 # Content Data
│   └── profile.ts        # EDIT THIS FILE
├── hooks/                # Custom hooks
└── lib/                  # Utilities
```
