# 🐱 Virtual Pet App

A pixel-art virtual pet game where you can care for your own digital companion. Feed it, play with it, put it to sleep, and spend coins at the shop - all in a cozy animated pixel room.

---

## ✨ Features

- 🐾 **Animated pixel sprite** - idle, feeding, playing, and sleeping states
- 📊 **Live stat bars** - Hunger, Happiness, and Energy with color-coded indicators
- ⭐ **Level & XP system** - earn XP by interacting with your pet
- 🪙 **Coin economy** - earn coins and spend them in the shop
- 🛍️ **Shop** - buy food and toys for your pet
- ⏱️ **Stat decay** - stats decrease over time, keeping your pet needy
- 🎮 **Game HUD** - frosted-glass panels for vitals and inventory
- 🖼️ **Pixel art background** - fully immersive room environment
- 🔤 **Press Start 2P font** - retro pixel typography throughout

---

## 🛠️ Tech Stack

### Frontend
| Tech | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 8 | Build tool & dev server |
| Tailwind CSS v4 | Utility styling |
| Axios | API calls |

### Backend
| Tech | Purpose |
|---|---|
| Node.js + Express 5 | REST API server |
| MongoDB + Mongoose | Database & ODM |
| dotenv | Environment config |
| nodemon | Dev auto-restart |

---

## 📁 Project Structure

```
Virtual Pet App/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   ├── petController.js   # Route handlers
│   │   ├── petUtils.js        # Stat decay logic
│   │   └── levelUtils.js      # XP & levelling logic
│   ├── models/
│   │   └── Pet.js             # Mongoose schema
│   ├── routes/
│   │   └── petRoutes.js       # API routes
│   └── server.js              # Express entry point
│
└── frontend/
    ├── public/
    │   └── background.png     # Pixel art room background
    ├── src/
    │   ├── assets/
    │   │   └── sprites/       # Animated sprite sheets
    │   ├── components/
    │   │   ├── PetCard.jsx    # Pet display component
    │   │   ├── PetSprite.jsx  # Sprite sheet animator
    │   │   └── StatBar.jsx    # Animated stat bar
    │   ├── App.jsx            # Main app & HUD layout
    │   └── index.css          # Global styles & font
    └── index.html
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd "Virtual Pet App"
```

### 2. Set up the Backend
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/virtualpet
```

Start the backend server:
```bash
npm run dev
```

### 3. Set up the Frontend
```bash
cd ../frontend
npm install
npm run dev
```

Open your browser at **http://localhost:5173**

---

## 🐾 Pet Stats

| Stat | Description | Range |
|---|---|---|
| Hunger | How full the pet is | 0 – 100 |
| Happiness | How happy the pet is | 0 – 100 |
| Energy | How rested the pet is | 0 – 100 |
| XP | Experience points towards next level | 0 – 100 |
| Coins | Currency for the shop | 0+ |

Stats **decay over time** - the longer you leave your pet alone, the worse it gets!

---

## 🎮 How to Play

1. **Feed** your pet when hunger drops - costs nothing, earns coins & XP
2. **Play** with your pet to boost happiness - drains energy
3. **Sleep** to restore energy fully
4. **Buy Food / Toy** from the shop using your earned coins
