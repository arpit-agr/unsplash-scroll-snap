# Unsplash Scroll Snap

A small demo of CSS [scroll snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap) carousels, built with [Eleventy](https://www.11ty.dev/) and photos from [Unsplash](https://unsplash.com/).

The page shows two horizontal carousels driven entirely by CSS, no JavaScript:

- **Full width** — each slide fills the viewport and snaps to the start edge. Uses `svh` units where supported so slides fit mobile browser chrome.
- **Small width** — fixed-size cards (320×200) with gaps that snap to the center.

Both share the same markup; the variant is chosen with a `data-type` attribute on `.container`, which sets custom properties (`--width`, `--height`, `--slide-gap`, `--scroll-snap-align`, …) in `block.css`.

## Getting started

Requires Node.js.

```bash
npm install
```

```bash
npm start
```

This runs the Eleventy dev server with live reload. To build the static site into `public/`:

```bash
npm run build
```

## Project structure

```
src/
├── index.md                  # Page front matter (uses the home layout)
├── _data/site.json           # Site metadata
└── _includes/
    ├── layouts/
    │   ├── base.html         # HTML shell
    │   └── home.html         # Carousel markup
    ├── partials/meta.html    # <head> meta tags
    └── css/
        ├── styles.njk        # Inlines and minifies the CSS below
        ├── reset.css
        ├── global.css
        ├── utilities.css
        └── block.css         # Carousel variants
```

CSS is inlined into the page and minified with `clean-css`; HTML output is minified with `html-minifier` (see `.eleventy.js`).

## Credits

Photos by [Dibakar Roy](https://unsplash.com/@dibakar16roy) on Unsplash.

## License

MIT
