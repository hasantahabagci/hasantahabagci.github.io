# Hasan Taha Bagci - Personal Website

A modern, lightweight, and accessible personal website built for GitHub Pages. No build tools required—just clean HTML, CSS, and JavaScript.

## Features

- **Zero dependencies**: Pure HTML/CSS/JS
- **Responsive design**: Mobile-first approach with fluid layouts
- **Accessible**: WCAG AA compliant with semantic HTML and ARIA landmarks
- **Performance optimized**: Lighthouse score ≥ 95
- **Dark mode**: Automatic theme based on system preferences
- **SEO ready**: Meta tags, Open Graph, JSON-LD structured data
- **Print-friendly**: Clean PDF export via browser print

## Quick Start

### 1. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to **Pages** section (under "Code and automation")
3. Under **Source**, select `main` branch and `/` (root) folder
4. Click **Save**
5. Your site will be published at `https://[username].github.io/[repository-name]/`

### 2. Customize Content

All content is stored in `cv.json`. Edit this file to update:

- Personal information
- Research interests
- Achievements and awards
- Experience timeline
- Projects
- Publications
- Skills
- And more...

The website automatically reads from this JSON file and renders all sections.

### 3. Update Contact Information

In `index.html`, update the meta tags:

- Line 7-8: Update description and keywords
- Line 15: Update canonical URL
- Line 17: Add social preview image (optional)

### 4. Customize Styling (Optional)

All styles are in `styles.css`. Key customization areas:

- **Colors**: Edit CSS variables in `:root` (lines 2-24)
- **Fonts**: Update `--font-system` for different fonts
- **Spacing**: Adjust `--spacing-unit` for tighter/looser layout
- **Border radius**: Change `--border-radius` for sharper/rounder corners

### 5. Add Your Own Assets

Place any custom images in the `assets/` folder:

- `favicon.svg` - Site favicon
- `social-preview.png` - Social media preview (1200×630px recommended)

## File Structure

```
.
├── index.html           # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive features
├── cv.json             # Structured content data
├── site.webmanifest    # PWA manifest
├── robots.txt          # Search engine instructions
├── assets/             # Images and icons
│   ├── favicon.svg
│   └── social-preview.png
└── README.md           # This file
```

## Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
  --accent: #2563eb;        /* Primary color */
  --accent-hover: #1d4ed8;  /* Hover state */
  /* ... more colors ... */
}
```

For dark mode, update the `@media (prefers-color-scheme: dark)` section.

### Adding New Sections

1. Add section HTML to `index.html`
2. Add corresponding data to `cv.json`
3. Create a render function in `script.js`
4. Call the function from `renderAllSections()`

### Updating Navigation

Edit the `<nav>` in `index.html` and ensure section IDs match the `href` attributes.

### Social Links

Update the footer links and hero action buttons with your social media profiles.

## Performance Tips

- Keep images under 200KB each
- Use SVG for logos and icons when possible
- Compress images with tools like TinyPNG or ImageOptim
- Test with Lighthouse in Chrome DevTools

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML5 elements
- ARIA landmarks and labels
- Keyboard navigation support
- Screen reader friendly
- Color contrast ratios meet WCAG AA
- Focus indicators on all interactive elements

## Print to PDF

Click the "Download CV" button or use your browser's print function (Ctrl/Cmd + P) to generate a PDF version. The print stylesheet removes navigation and optimizes the layout.

## License

Content is licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).

## Support

For issues or questions:
- Open an issue on GitHub
- Email: bagcih21@itu.edu.tr

---

**Last updated:** November 2025
