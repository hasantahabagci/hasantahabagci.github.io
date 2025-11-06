# Personal Website - Hasan Tahaba Bagci

A modern, responsive personal website built with **Astro** and **Tailwind CSS**, showcasing education, experience, projects, publications, awards, skills, and contact information.

🌐 **Live Site**: [https://hasantahabagci.github.io/htb.github.io](https://hasantahabagci.github.io/htb.github.io)

## ✨ Features

- 🎨 **Modern Design**: Clean and professional interface with smooth animations
- 🌓 **Dark/Light Theme**: Toggle between dark and light modes with persistent storage
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast Performance**: Built with Astro for optimal loading times
- 🔍 **SEO Optimized**: Complete meta tags and Open Graph support
- ♿ **Accessible**: Semantic HTML and ARIA labels
- 🎯 **9 Sections**: Complete portfolio with all essential sections

## 📄 Pages

1. **Home** - Hero section with introduction and quick navigation
2. **About** - Personal information, bio, and interests
3. **Education** - Academic background with timeline view
4. **Experience** - Professional work history with achievements
5. **Projects** - Showcase of featured projects with tags
6. **Publications** - Research papers and academic contributions
7. **Awards** - Honors and recognitions received
8. **Skills** - Technical skills with proficiency levels
9. **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) 5.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 3.x
- **Language**: TypeScript
- **Deployment**: GitHub Pages via GitHub Actions
- **Icons**: Heroicons (SVG)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hasantahabagci/htb.github.io.git
cd htb.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321/htb.github.io`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 🏗️ Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── favicon.svg             # Site favicon
├── src/
│   ├── components/
│   │   ├── Card.astro          # Reusable card component
│   │   ├── Footer.astro        # Footer with social links
│   │   ├── Navigation.astro    # Header navigation with mobile menu
│   │   └── Timeline.astro      # Timeline component for education/experience
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Base HTML structure with SEO
│   │   └── MainLayout.astro    # Main layout with nav and footer
│   ├── pages/
│   │   ├── index.astro         # Home page
│   │   ├── about.astro         # About page
│   │   ├── education.astro     # Education page
│   │   ├── experience.astro    # Experience page
│   │   ├── projects.astro      # Projects page
│   │   ├── publications.astro  # Publications page
│   │   ├── awards.astro        # Awards page
│   │   ├── skills.astro        # Skills page
│   │   └── contact.astro       # Contact page
│   └── styles/
│       └── global.css          # Global styles and Tailwind imports
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies
```

## 🎨 Customization

### Update Personal Information

1. **Site Configuration**: Edit `astro.config.mjs` to update site URL
2. **Content**: Update data in each page file (e.g., `src/pages/experience.astro`)
3. **Colors**: Modify the color scheme in `tailwind.config.mjs`
4. **Fonts**: Change fonts in `src/layouts/BaseLayout.astro`
5. **Social Links**: Update social media URLs in `src/components/Footer.astro` and `src/pages/contact.astro`

### Theme Customization

The color palette can be customized in `tailwind.config.mjs`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      },
    },
  },
}
```

## 🚢 Deployment

The site is automatically deployed to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
npm run build
```

The built site will be in the `dist/` directory.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Hasan Tahaba Bagci**

- GitHub: [@hasantahabagci](https://github.com/hasantahabagci)
- Website: [https://hasantahabagci.github.io/htb.github.io](https://hasantahabagci.github.io/htb.github.io)

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from [Heroicons](https://heroicons.com)
- Deployed on [GitHub Pages](https://pages.github.com)

---

⭐ Star this repository if you find it helpful!