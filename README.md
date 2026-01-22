# Yeshwanth Portfolio

A modern, interactive, and role-based portfolio website designed to showcase a multifaceted developer's skills. Built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, this portfolio allows users to seamlessly switch between three distinct professional personas: **SDE (Software Development Engineer)**, **AI Engineer**, and **UI/UX Designer**.

> **Live Demo:** [https://personal-portfolio-alpha-gules-41.vercel.app/](https://personal-portfolio-alpha-gules-41.vercel.app/)

---

## 🚀 Key Features

*   **Dynamic Role Switching**:  
    Instantly toggle between **Dev Profile**, **AI Profile**, and **UX Profile** modes. The entire content—including bio, skills, projects, and themes—updates dynamically to reflect the selected persona.
*   **Interactive Design**:  
    Features scroll-triggered animations, hover effects, and smooth transitions powered by **Framer Motion**.
*   **Project Filtering**:  
    Smart filtering for projects based on primary programming languages (Java, Python, JavaScript, etc.).
*   **Responsive & Accessible**:  
    Fully optimized for desktop, tablet, and mobile devices with a focus on accessibility.
*   **Resume Download**:  
    Context-aware resume download button that serves the specific resume (SDE, AI, or UX) matching the active profile.
*   **Modern Tech Stack**:  
    Utilizes **Next.js 15 (App Router)** and **Tailwind CSS v4** for cutting-edge performance and styling.

---

## 🛠️ Technology Stack

*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Deployment**: [Vercel](https://vercel.com/)

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally on your machine.

### Prerequisites
*   Node.js (v18 or higher)
*   npm or yarn

### Steps

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/YeshwanthBalaji0412/Personal-Portfolio.git
    cd Personal-Portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the Development Server**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **View in Browser**
    Open [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📝 Usage Guide

### Customizing Content
All profile data is centralized in `src/data/profile.ts`. 

1.  Open `src/data/profile.ts`.
2.  You will find three profile constants: `devProfile`, `aiProfile`, and `uxProfile`.
3.  Edit these objects to update your:
    *   **Bio & Highlights**
    *   **Skills** (Categorized)
    *   **Projects** (Description, Tech Stack, GitHub Links)
    *   **Experience & Education**
    *   **Social Links**

### Adding Resumes
1.  Place your resume PDF files in the `public/` directory.
2.  Update the `resume` field in `src/data/profile.ts` for each profile:
    ```typescript
    export const devProfile: ProfileData = {
      // ...
      resume: "/SDE_Resume.pdf",
    };
    ```

---

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router root
│   ├── globals.css       # Global styles & Tailwind theme
│   ├── layout.tsx        # Root layout with Context Providers
│   └── page.tsx          # Main entry page
├── components/           # React Components
│   ├── ui/               # Reusable UI elements (Card, Button, Badge)
│   ├── Hero.tsx          # Dynamic Hero section
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Projects grid with filters
│   ├── ...               # Other sections (Skills, Experience, Contact)
├── context/              # Global State Management
│   └── ProfileContext.tsx # Logic for profile switching
├── data/                 # Content Data
│   └── profile.ts        # CENTRALIZED DATA FILE
└── lib/                  # Utilities
```

---

## ☁️ Deployment

This project is optimized for deployment on **Vercel**.

1.  Push your changes to GitHub.
2.  Import the repository in Vercel.
3.  Vercel will detect the Next.js framework and build settings automatically.
4.  Deploy!

---

Developed by **Yeshwanth Balaji**  
*Built with ❤️ and code.*
