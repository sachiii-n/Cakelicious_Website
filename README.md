# 🍰 Cakelicious

A website for a home baking business, built to give customers an easy way to browse cakes, get in touch, and (soon) customize their own cake order with AI-powered previews and pricing.

This project also serves as a portfolio piece demonstrating front-end fundamentals, DOM manipulation, async/await, and third-party API integration.

## Live Demo

_Coming soon — will be deployed on [Netlify](https://www.netlify.com/)._

## Features

- **Responsive navbar** with smooth scroll navigation (pure CSS, no JS)
- **Hero section** with primary and secondary call-to-action buttons
- **Cake menu** — card-based layout showcasing available cakes
- **Feedback / testimonials section** *(in progress)* — customer feedback form powered by [Formspree](https://formspree.io/), with a full async submission flow (fetch, FormData, error handling)

## Planned Features

- 🎂 **AI Cake Customizer** — a visual preview and price estimator powered by the Anthropic API, letting customers describe their dream cake and see an estimate before ordering
- 📱 Full mobile responsiveness pass across all sections
- 📄 Expanded documentation and clean commit history for portfolio presentation

## Tech Stack

- **HTML5 / CSS3** — structure and styling
- **JavaScript (Vanilla)** — DOM manipulation, form handling, async/await
- **Formspree** — feedback form backend (no server required)
- **Anthropic API (Claude)** — planned for the AI cake customizer
- **Tabler Icons** — icon set (via CDN)
- **Netlify** — hosting/deployment

## Design System

| Element | Value |
|---|---|
| Deep brown | `#5c4a1f` |
| Gold-brown | `#998148` |
| Tan | `#c0b295` |
| Cream | `#fffaf0` / `#fff7e6` |
| Terracotta accent | `#b5541a` |
| Headings | Georgia (serif) |
| Buttons | Pill-shaped |

## Project Structure

```
Cakelicious_Website/
├── index.html
├── style.css
├── script.js        # form submission logic (Formspree)
└── README.md
```

*(Structure will expand as new sections and the AI customizer are added.)*

## Getting Started

This is a static site — no build step required.

1. Clone the repo
   ```bash
   git clone https://github.com/sachiii-n/Cakelicious_Website.git
   ```
2. Open `index.html` in your browser, or serve it locally with a tool like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

### Feedback Form Setup

The feedback form submits to Formspree. To use your own endpoint:

1. Create a form at [formspree.io](https://formspree.io/)
2. Replace the form's `action` URL in `index.html` with your own Formspree endpoint
3. The destination email can be changed anytime from the Formspree dashboard — no code changes needed

## Branching Workflow

This project uses:
- `main` — stable, deployable code
- `dev` — active development
- `feature/*` — individual features, merged into `dev` when complete

## Roadmap

- [x] Navbar + smooth scroll
- [x] Hero section
- [x] Cake menu
- [ ] Finish testimonials/feedback section
- [ ] AI-powered cake customizer (Anthropic API)
- [ ] Mobile responsiveness pass
- [ ] Deploy to Netlify

## Author

Built by [Sachi](https://github.com/sachiii-n) for a family member's home baking business — and as a hands-on portfolio project.
