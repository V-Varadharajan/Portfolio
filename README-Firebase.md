Firebase Hosting: Quick Deploy Guide

Prerequisites
- Node.js and npm installed
- A Firebase project (from https://console.firebase.google.com)
- Firebase CLI installed: npm install -g firebase-tools

One-time setup
1) Login and init project
   - firebase login
   - firebase use --add <your-project-id>
     (or run firebase init hosting and select 'dist' as public folder; select 'Configure as a single-page app')

2) Build
   - npm run build

3) Deploy
   - npm run deploy:firebase

Local test (optional)
- npm run serve:firebase

Notes
- hosting rewrites send all routes to /index.html for SPA routing
- static assets are cached for a year; index.html is no-cache
