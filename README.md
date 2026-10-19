# MoRD Programmes

A plain-language guide to seven programmes of India's Ministry of Rural Development, in six languages (English, Hindi, Bengali, Tamil, Telugu, Marathi). It covers rural jobs, rural housing, rural roads, women's self-help groups, skills for rural youth, social pensions, and land records and watersheds.

For each programme the site shows:

- what the programme does
- how it works, step by step
- how far it has reached
- where it falls short

It also has a state map. Every page can be read aloud, and there is a large-text mode.

This is an independent explainer, not an official government website.

## Put it on GitHub Pages

1. Create a new public repository on GitHub, for example `mord-programmes`.
2. Upload everything in this folder to the root of the repository, including the hidden `.nojekyll` file. You can drag the files onto **Add file → Upload files**.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then select branch `main` and folder `/ (root)`. Click **Save**.
5. After about a minute the site will be live at `https://<your-username>.github.io/mord-programmes/`.

The site is fully static, so there is no build step. Each programme has its own link, for example `.../#home` for rural housing and `.../#road` for rural roads.

To get a proper preview card when you share the link on social media, change `og:image` in `index.html` to the full address of `img/og.jpg` on your live site.

## Preview on your computer

```bash
cd mord-programmes
python3 -m http.server 8000
# open http://localhost:8000
```

## Files

| Path | What it holds |
|---|---|
| `index.html` | Page shell and header |
| `assets/style.css` | All styling: colour tokens, light and dark themes, layout for every screen size |
| `assets/app.js` | Screens, navigation, read-aloud, the state map |
| `assets/i18n.js` | All text in six languages. Edit text here; keep the keys the same in every language |
| `assets/map-data.js` | State outlines (official boundaries of India) and the state-wise figures |
| `img/` | Photos in WebP at several sizes. The browser picks the smallest size that looks sharp on the screen |

## Data sources

- **Budget figures (2026–27)** and programme progress: PRS Legislative Research, *Demand for Grants 2026–27: Rural Development*.
- **State map:**
  - Rural housing: share of target built. Lok Sabha Unstarred Q. 3744, 12 Aug 2025.
  - Rural roads: km built in the last ten years. Lok Sabha Unstarred Q. 2852, 18 Mar 2025.
  - Rural jobs: workers who got work in 2024–25. Lok Sabha Unstarred Q. 456, 22 Jul 2025.
  - Self-help groups formed: Lok Sabha Unstarred Q. 1203, 11 Feb 2025.
- **State boundaries:** [udit-001/india-maps-data](https://github.com/udit-001/india-maps-data). The districts were merged into states and simplified. The outline follows India's official boundaries.

## Before going public

- Have a native speaker check each translation.
- Confirm you have the right to use each photo. The social pensions photo appears to be AI-generated. The name plate on the housing photo has been blurred on purpose.
- The read-aloud feature uses the voices installed on the visitor's device. Microsoft Edge and Google Chrome usually have the most natural voices for Indian languages.

## Browser support

The site works in current Chrome, Edge, Firefox and Safari, on phones from 320 px wide up to large desktops. It also supports:

- light and dark mode
- reduced-motion settings
- keyboard use
- a "Skip to content" link
