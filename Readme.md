# 🧠 Remind

> Your Digital Second Brain for YouTube Videos & Personal Notes

Remind is a full-stack web application that helps you organize valuable YouTube videos and personal thoughts in one centralized, distraction-free workspace.

Instead of scattered bookmarks and random notes, Remind gives you a structured personal knowledge system.

---

## 🚀 Features

* 📺 Save important YouTube videos
* 📝 Create and manage personal notes
* 🔐 Secure authentication (JWT-based)
* 🗂 Filter content by type (Videos / Notes)
* 🗑 Delete saved content
* ⚡ Smooth UI animations with Framer Motion
* 🎨 Modern, responsive design

---

## 🛠 Tech Stack

### Frontend

* **React.js**
* **TypeScript**
* **Tailwind CSS**
* **Framer Motion**
* **Axios**

### Backend

* **Express.js**
* **TypeScript**
* **Drizzle ORM**
* **PostgreSQL**
* **JWT Authentication**

---

## 🏗 Project Structure

```
Remind/
│
├── Readme.md
│
├── frontend/            # React + Vite Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Logo.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Action.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Features.tsx
│   │   │   └── AddContentModal.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Login.tsx
│   │   │   └── Register.tsx
│   │   ├── config/
│   │   │   └── config.ts
│   │   ├── assets/
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── public/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── eslint.config.js
│   ├── index.html
│   └── README.md
│
└── backend/             # Express + TypeScript Backend
    ├── src/
    │   ├── controllers/
    │   │   ├── authController.ts
    │   │   └── contentController.ts
    │   ├── routes/
    │   │   ├── authRoutes.ts
    │   │   └── contentRoutes.ts
    │   ├── middleware/
    │   │   └── middleware.ts
    │   ├── drizzle/
    │   │   ├── schema.ts
    │   │   └── migrations/
    │   │       ├── 0000_wealthy_apocalypse.sql
    │   │       └── meta/
    │   ├── config/
    │   │   └── db.ts
    │   └── server.ts
    ├── package.json
    ├── drizzle.config.ts
    ├── tsconfig.json
    └── .gitignore
```

---

## 🔐 Authentication Flow

* User registers / logs in
* Server generates JWT token
* Token stored in localStorage
* Protected routes verify token via middleware
* User-specific data fetched using `createdBy` field

---

## 📦 Database Schema Overview

### Users

* id
* email
* password

### YouTube Content

* id
* title
* url
* createdBy
* createdAt

### Notes

* id
* title
* userNotes
* createdBy
* createdAt

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git https://github.com/Lucid-Synth/Remind.git
cd remind
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

Run migrations (Drizzle):

```bash
npx drizzle-kit push
```

Start backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Make sure `Base_Url` in config points to your backend:

```ts
export const Base_Url = "http://localhost:3000";
```

---

## 📡 API Endpoints

### Auth

* `POST /auth/register`
* `POST /auth/login`

### Content

* `GET /content/yt`

* `POST /content/yt`

* `DELETE /content/yt/:id`

* `GET /content/notes`

* `POST /content/notes`

* `DELETE /content/notes/:id`

All content routes require Authorization header:

```
Authorization: <JWT_TOKEN>
```

---

## 🧠 Why Remind?

Modern learning is fragmented:

* YouTube playlists
* Random note apps
* Browser bookmarks
* Screenshots

Remind centralizes everything into one structured second-brain system.

---

## 🌍 Deployment Ideas

* Frontend → Vercel
* Backend → Netlify
* Database → NileDB

---

## 👨‍💻 Author

Built with ❤️ by **[LucidSynth]**

---

## 📄 License

MIT License
