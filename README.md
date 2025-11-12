# TuneWave_Dashboard

https://cors-anywhere.herokuapp.com/ should i add every time for cors issues with every url is it naccesy or it is right?

Good question, Mannu 🌟 — using
https://cors-anywhere.herokuapp.com/
is fine only for learning and testing, but not recommended for real projects.

Here’s why 👇

⚠️ **Why you shouldn’t rely on it permanently**

// IMPORTANT : Public proxy = not secure

Your API request and data go through someone else’s server.

That proxy could log, throttle, or block requests anytime.

Temporary access

The demo server requires you to click “Request temporary access” every few hours.

It’s not stable for production or even long-term development.

Rate limits

The free Heroku demo is rate-limited and sometimes shuts down due to overload.

**✅ # The Right Way (Safe & Permanent Fixes)**

You have 3 good options:

Option 1: Use your own backend proxy

If your React app runs on Vite, create a proxy in vite.config.js:

export default {
server: {
proxy: {
"/api": {
target: "https://itunes.apple.com",
changeOrigin: true,
rewrite: (path) => path.replace(/^\/api/, ""),
},
},
},
};

Then call:

fetch("/api/search?term=arijit+singh&entity=song&limit=150");

✅ No need for CORS-anywhere
✅ Secure — runs through your local dev server

Option 2: Use a small backend (Node/Express)

You can create a simple Express server that forwards requests:

app.get("/api/music", async (req, res) => {
const response = await fetch(`https://itunes.apple.com${req.url}`);
const data = await response.json();
res.json(data);
});

✅ Fully under your control
✅ Works in production too

Option 3: Use APIs that already support CORS (like Spotify API)

Spotify’s API supports CORS by default — so you won’t need any proxy at all.

Perfect 👏 Mannu! Let’s set up a Vite proxy step-by-step — this is the cleanest and most secure way to solve CORS issues in your React + Vite project.

⚙️ STEP 1: Open your project folder

Open your React project created with Vite — the one that has this structure:

my-project/
┣ src/
┣ public/
┣ vite.config.js
┣ package.json

🧩 STEP 2: Open vite.config.js

It should look something like this:

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
plugins: [react()],
});

Now, add a proxy configuration inside the server section 👇

✅ STEP 3: Add proxy setup
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
plugins: [react()],
server: {
proxy: {
"/itunes": {
target: "https://itunes.apple.com",
changeOrigin: true,
rewrite: (path) => path.replace(/^\/itunes/, ""),
},
},
},
});

🎧 STEP 4: Use it in your fetch call

Now you can safely call iTunes API without using CORS-anywhere.

Example:

const response = await fetch(
`/itunes/search?term=${artistName}&entity=song&limit=150`
);
const data = await response.json();
console.log(data);

✅ No cors-anywhere
✅ No need to request access
✅ Secure and runs directly through your Vite dev server

🧠 STEP 5: Restart the dev server

After saving your vite.config.js, stop your app (Ctrl + C in terminal) and restart it:

npm run dev
