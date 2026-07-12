# PETA Group ePortfolio

## GitHub Pages deployment

This Vite site is configured for the project URL:

`https://roja-projects-only.github.io/ePort-zy/`

It uses a hash-based router, so chapter links work on GitHub Pages without a server-side fallback or a `404.html` redirect.

### First deployment

1. Push the `main` branch to the `roja-projects-only/ePort-zy` GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Open the **Actions** tab and wait for **Deploy ePortfolio to GitHub Pages** to complete.
5. Open the deployed site at the URL above.

Future pushes to `main` deploy automatically. You can also run the workflow manually from the Actions tab.

### Local verification

```bash
npm run build
npm run preview -- --host 127.0.0.1
```

With the production base path, open `http://127.0.0.1:4173/ePort-zy/` when using the preview server.
