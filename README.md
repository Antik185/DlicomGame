# DLICOM: Night Shift

Browser-based social deduction and community moderation game.

## Run locally

The playable static build is stored in `dist` and does not require dependencies or a build step.

```powershell
python -m http.server 4173 --directory dist
```

Then open `http://localhost:4173`.

## Deploy on Vercel

1. Import this GitHub repository into Vercel.
2. Use the **Other** framework preset.
3. Leave the build and install commands empty.
4. Deploy. The included `vercel.json` publishes the `dist` directory automatically.

The site is a static HTML/CSS/JavaScript project, so no environment variables are required.
