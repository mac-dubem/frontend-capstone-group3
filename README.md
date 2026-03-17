# 🪐 Frontend Capstone Project — Group 3

A React web application that explores our solar system through data. Built as a capstone project for the TS Academy Frontend Development course.

---

## 🌍 Live Demo

> **Deployment Link:** _Update this once deployed to Netlify/Vercel_
> `https://github.com/jerrybarry/frontend-capstone-group3/`

---

## 📋 Project Summary

This app recreates a provided mockup as a fully working React application. It fetches real planet data from an external API, displays it in a responsive grid of planet cards and a comparative data table, and includes a validated contact form. The project demonstrates HTML/CSS/JS fundamentals, React component architecture, the Fetch API, responsive design, and collaborative Git workflows.

---

## 👥 Team Members

| Name | GitHub Profile | Role |
|------|---------------|------|
| Jeremiah Barnabas | [GitHub](https://github.com/) | **Team Lead** |
| Caleb Oyeyipo | [GitHub](https://github.com/) | Assistant Team Lead |
| Mary Nwankwo | [GitHub](https://github.com/) | Member |
| Abdul Afeez Abubakar | [GitHub](https://github.com/) | Member |
| Oladejo Oluwatoyin | [GitHub](https://github.com/) | Member |
| Chikezie Samuel | [GitHub](https://github.com/) | Member |
| Ani Benjamin | [GitHub](https://github.com/) | Member |
| Muideen Idris | [GitHub](https://github.com/) | Member |
| Adebayo Samuel | [GitHub](https://github.com/) | Member |
| Blessing Ocheme | [GitHub](https://github.com/) | Member |

> 📝 **Action for each member:** Replace the `(https://github.com/)` link above with your actual GitHub profile URL.

---

## 🧩 Components & Contributors

| Component | File | Description | Assigned To |
|-----------|------|-------------|-------------|
| `Header` | `src/components/Header/` | Logo and sticky navigation bar | Muideen Idris |
| `Hero` | `src/components/Hero/` | Landing section with CTAs that scroll to Planets and Contact sections | Adebayo Samuel |
| `VideoSection` | `src/components/VideoSection/` | Autoplay/muted/loop HTML5 video + descriptive text | Blessing Ocheme |
| `PlanetCard` | `src/components/PlanetCard/` | Reusable `<figure>` card showing planet image, name & distance | Mary Nwankwo |
| `PlanetSection` | `src/components/PlanetSection/` | Fetches planets from API and renders grid of PlanetCards | Caleb Oyeyipo |
| `DataTable` | `src/components/DataTable/` | NASA comparative planetary facts table | Abdul Afeez Abubakar |
| `ContactForm` | `src/components/ContactForm/` | Validated form with POST submission and success message | Oladejo Oluwatoyin |
| `Footer` | `src/components/Footer/` | About section, team names, links to Amaka, Ifeoma, TSAcademy, and group repo | Chikezie Samuel |
| `App.jsx` | `src/App.jsx` | Root component composing all sections | Ani Benjamin |
| `index.css` | `src/index.css` | Global styles, CSS variables/design tokens | Jeremiah Barnabas |

---

## 🚀 Running the Project Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)
- [Git](https://git-scm.com/)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-ORG/YOUR-REPO-NAME.git

# 2. Navigate into the project folder
cd YOUR-REPO-NAME

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open your browser and go to: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The output will be in the `/dist` folder — this is what you deploy.

---

## 🌐 Deployment (Netlify)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and log in
3. Click **"Add new site" → "Import an existing project"**
4. Connect your GitHub account and select the repo
5. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**
7. Copy the live URL and update the Live Demo link at the top of this README

---

## 🔌 API Reference

| Purpose | URL |
|---------|-----|
| Planet data (GET) | `https://anurella.github.io/json/planets.json` |
| Form submission (POST) | _(Update with endpoint provided by instructor)_ |

---

## 🌿 Git Workflow

```
main              ← protected, production-ready code only
└── feature/header
└── feature/hero
└── feature/video-section
└── feature/planet-card
└── feature/planet-section
└── feature/data-table
└── feature/contact-form
└── feature/footer
```

### Rules
- All work happens on **feature branches**, never directly on `main`
- Every change is submitted via a **Pull Request**
- The person who opens a PR **cannot** review or merge their own PR
- PRs must be reviewed and approved before merging
- Use **GitHub Projects** to track task status (To Do → In Progress → Done)

---

## 📁 Project Structure

```
capstone-group3/
├── index.html                  # Entry HTML (meta author = Group 3)
├── package.json
├── vite.config.js
├── .gitignore
└── src/
    ├── main.jsx                # React DOM entry point
    ├── App.jsx                 # Root component
    ├── index.css               # Global styles + CSS variables
    └── components/
        ├── Header/
        │   ├── Header.jsx
        │   └── Header.css
        ├── Hero/
        │   ├── Hero.jsx
        │   └── Hero.css
        ├── VideoSection/
        │   ├── VideoSection.jsx
        │   └── VideoSection.css
        ├── PlanetCard/
        │   ├── PlanetCard.jsx
        │   └── PlanetCard.css
        ├── PlanetSection/
        │   ├── PlanetSection.jsx
        │   └── PlanetSection.css
        ├── DataTable/
        │   ├── DataTable.jsx
        │   └── DataTable.css
        ├── ContactForm/
        │   ├── ContactForm.jsx
        │   └── ContactForm.css
        └── Footer/
            ├── Footer.jsx
            └── Footer.css
```
