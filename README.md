# 🌟 Modern Personal Portfolio Website

A responsive, single-page personal portfolio web application built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. It features fluid physics-based animations, dynamic dark/light theme toggling with browser `localStorage` persistence, robust form validation via `react-hook-form`, and automated draft state saving.

---

## 🚀 Key Features

- **Dynamic Dark / Light Mode**: Seamless theme switching with class-based theming persisted in browser `localStorage`.
- **Framer Motion Animations**: Fluid hero heading, responsive stagger transitions, interactive project cards, and animated skill badges.
- **Form Validation & Draft Persistence**: Contact form built with `react-hook-form` validating required fields and email formats, with automatic `localStorage` draft saving (`form_draft`).
- **Responsive Architecture**: Mobile-first responsive layouts with collapsible navigation and desktop-optimized grids.
- **Smooth Navigation**: Anchor link scrolling to `#projects`, `#contact`, and all key portfolio sections.
- **Accessibility & SEO**: WCAG-aligned focus rings, descriptive ARIA attributes, semantic HTML5 structure, and `prefers-reduced-motion` support.

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Declarative Component-driven UI |
| **Vite** | Lightning-fast Build Tool & Dev Server |
| **Tailwind CSS** | Utility-first Design System & Dark Mode |
| **Framer Motion** | Declarative Animations & Gestures |
| **React Hook Form** | Performant Form Validation & State Management |
| **React Icons** | Clean Scalable Vector Icons |

---

## 📂 Architecture & Directory Structure

```text
personal-portfolio/
├── index.html                 # HTML entry point with meta tags & SEO preconnects
├── package.json               # Dependencies and build scripts
├── tailwind.config.js         # Tailwind configuration with class-based darkMode
├── postcss.config.js          # PostCSS processor plugins
├── vite.config.js             # Vite configuration
├── src/
│   ├── main.jsx               # React DOM root render
│   ├── App.jsx                # Application root container (data-testid="app-root") & theme provider
│   ├── index.css              # Global styles, fonts, smooth scroll, & glassmorphism
│   ├── data.js                # Structured portfolio data (projects, skills, profile)
│   └── components/
│       ├── Navbar.jsx         # Navigation header, mobile menu, & theme toggle button
│       ├── Hero.jsx           # Hero banner with Framer Motion animated heading
│       ├── About.jsx          # Bio, experience overview, and achievements
│       ├── Skills.jsx         # Technical proficiencies grid with motion elements
│       ├── Projects.jsx       # Project showcase grid with repository & demo links
│       ├── Contact.jsx        # Contact form with validation & Local Storage draft saving
│       └── Footer.jsx         # Footer credits and social profile links
└── dist/                      # Production build output
```

---

## 🧪 Evaluation Test IDs & Requirements

| Requirement | Test ID | Description |
|-------------|---------|-------------|
| **App Root** | `data-testid="app-root"` | Root container applying `.dark` class dynamically and syncing `theme` with `localStorage` |
| **Theme Toggle** | `data-testid="theme-toggle"` | Button toggling theme between `"light"` and `"dark"` |
| **Hero Heading** | `data-testid="hero-heading"` | Framer Motion animated heading component (`<motion.h1>`) |
| **Project Grid** | `data-testid="project-grid"` | Grid container displaying 4+ project items |
| **Project Item** | `data-testid="project-item"` | Individual project cards inside the grid |
| **Skills List** | `data-testid="skills-list"` | Skills container displaying 3+ skill items |
| **Skill Item** | `data-testid="skill-item"` | Individual skill items enhanced with Framer Motion |
| **Contact Name** | `data-testid="contact-name"` | Name input field |
| **Contact Email** | `data-testid="contact-email"` | Email input field |
| **Contact Message** | `data-testid="contact-message"` | Message textarea field |
| **Contact Submit** | `data-testid="contact-submit"` | Form submit button |
| **Name Error** | `data-testid="name-error"` | Validation error for empty name |
| **Email Error** | `data-testid="email-error"` | Validation error for invalid email |
| **Message Error** | `data-testid="message-error"` | Validation error for empty message |
| **Nav Projects** | `data-testid="nav-projects"` | Navigation anchor linking to `#projects` |
| **Nav Contact** | `data-testid="nav-contact"` | Navigation anchor linking to `#contact` |
| **Form Persistence** | `localStorage: form_draft` | Auto-saves and restores form inputs on reload |

---

## ⚙️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📄 License
MIT License © 2026 Blessy Nookathati
