# Rauoof Premium Portfolio v3

## Run locally
```bash
npm install
npm run dev
```

## Best way to update your already-deployed GitHub/Vercel site
Do **not** manually edit every file one by one. The cleanest method is:

1. Download and unzip this package.
2. Open your current GitHub project folder in VS Code.
3. Copy the new files into the existing GitHub project folder and choose **Replace**.
4. Keep your existing `.git` folder. Do not delete `.git`.
5. Run:
```bash
npm install
npm run dev
```
6. Test mobile size in Chrome DevTools.
7. Commit and push:
```bash
git add .
git commit -m "Upgrade responsive portfolio and project case studies"
git push
```
8. Vercel will redeploy automatically.

## Add a new project
Edit:
```bash
src/data/projects.ts
```
Add one new object to the `projects` array.

You can also open `/admin` locally to draft a project object, then copy it into `src/data/projects.ts`.

## Important
The `/admin` page is a local project-content helper. It is not a real database admin panel. For a true admin dashboard that saves live changes without GitHub, connect Supabase or another database later.
