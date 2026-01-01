# AbilityWave Solutions — Site scaffold

This is a minimal static brand hub scaffold for AbilityWaveSolutions.com.

Pages:
- `index.html` — landing hub
- `products.html` — product list
- `product-waveanalytics.html`, `product-signalkit.html` — sample product pages
- `free-software.html` — free/open-source tools
- `insights.html` — tag-filterable team posts (client-side filter)
- `about.html`, `contact.html`

Assets:
- `assets/css/styles.css` — small custom rules
- `assets/js/main.js` — mobile nav + insights tag-filtering

Preview locally:

cd site
python3 -m http.server 8000
# open http://localhost:8000

Next steps:
- Replace placeholder copy and links
- Add product checkout (Stripe/Gumroad) or external links
- Migrate to Next.js + Tailwind for dynamic pages and easier CMS

