# Suchana Dutta — Portfolio

This is a responsive, single-page portfolio built with React and Vite.

Getting started:

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

User details included: name, course, skills, projects, GitHub and LinkedIn links.

Adding your profile photo

1. Save your image file (the one you attached) somewhere local, for example `C:/Downloads/photo.jpg`.
2. Install the new dependency and run the crop script to create `public/profile.jpg`:

```bash
cd "c:/react native js/portfolio"
npm install
node ./scripts/crop-profile.js "C:/Downloads/photo.jpg"
```

This crops the image to a center square and writes `public/profile.jpg`. The app will automatically use `public/profile.jpg` when present; otherwise it falls back to the placeholder `public/profile.svg`.
