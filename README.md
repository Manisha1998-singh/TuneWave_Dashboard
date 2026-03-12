# 🎵 TuneWave Dashboard

A modern **React Music Dashboard** that allows users to search songs, explore music, and manage their favorite tracks.
The project demonstrates **React best practices, performance optimization, and API integration**.

---

## 🚀 Features

* 🔎 **Search Songs**
* 🎧 **Music Dashboard UI**
* ❤️ **Liked Songs Section**
* 📂 **Sidebar Navigation**
* ⚡ **Optimized Rendering using React.memo**
* 🔄 **State Management with Redux Toolkit**
* 📡 **API Integration**
* 🎨 **Modern Responsive UI**

---

## 🛠 Tech Stack

* **React**
* **Redux Toolkit**
* **JavaScript (ES6+)**
* **Vite**
* **CSS**
* **iTunes Search API**

---

## 📂 Project Structure

```
TuneWave_Dashboard
│
├── src
│   ├── components
│   │   ├── MusicList
│   │   ├── Sidebar
│   │   ├── Search
│   │   └── LikedSongs
│   │
│   ├── redux
│   │   ├── store.js
│   │   └── slices
│   │
│   ├── App.jsx
│   ├── main.jsx
│
├── public
├── vite.config.js
└── package.json
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/TuneWave_Dashboard.git
```

Go to the project folder:

```bash
cd TuneWave_Dashboard
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 🔧 Fixing CORS Issues (Vite Proxy)

Instead of using **cors-anywhere**, this project uses a **Vite proxy configuration**.

### vite.config.js

```javascript
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
```

API call example:

```javascript
const response = await fetch(
  `/itunes/search?term=${artistName}&entity=song&limit=150`
);
```

✅ No CORS errors
✅ No external proxy needed

---

## ⚡ Performance Optimizations Used

### 1️⃣ React.memo

Prevents unnecessary re-renders of components.

Example:

```javascript
export default React.memo(MusicList);
```

Used for components like:

* MusicList
* Sidebar
* LikedSongs

---

### 2️⃣ useEffect

Used for:

* Fetching API data
* Updating UI when state changes

Example:

```javascript
useEffect(() => {
  dispatch(fetchSongs());
}, [dispatch]);
```

---

### 3️⃣ useMemo

Used to cache expensive calculations like filtering songs.

```javascript
const filteredSongs = useMemo(() => {
  return songs.filter((song) =>
    song.title.toLowerCase().includes(searchText.toLowerCase())
  );
}, [songs, searchText]);
```

---

## 🧠 Concepts Demonstrated

* React Component Architecture
* Redux Toolkit State Management
* Performance Optimization
* API Fetching
* CORS Handling
* React Hooks (useEffect, useMemo)
* Code Optimization with React.memo

---

## 📡 API Used

**iTunes Search API**

Example:

```
https://itunes.apple.com/search?term=arijit+singh&entity=song&limit=150
```

---

## 📌 Future Improvements

* 🎧 Music Player Controls
* 🔊 Audio Preview
* 📱 Mobile Optimization
* ⭐ Save Favorite Songs
* 🎨 Dark Mode

---

🌐 Live Demo

👉 https://tune-wave-dashboard-hwvqtxakw-manisha-singhs-projects-a32f3486.vercel.app

---

## 👩‍💻 Author

**Manisha Singh**

Frontend Developer
React | JavaScript | CSS | HTML

GitHub: https://github.com/Manisha1998-singh

---

⭐ If you like this project, consider giving it a **star** on GitHub!
