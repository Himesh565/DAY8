# 🚀 Random User App - Vite + React

Production-quality Random User API component with glassmorphism design, built with Vite + React.

---

## 🎯 Quick Start

### 1. Navigate to Project Directory

```bash
cd random-user-app
```

### 2. Run the Development Server

```bash
npm run dev
```

### 3. Open in Browser

Visit: **http://localhost:5173/**

---

## 📦 Project Structure

```
random-user-app/
├── src/
│   ├── RandomUser.jsx      # Main component
│   ├── RandomUser.css      # Glassmorphism styling
│   ├── App.jsx             # App wrapper
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/
├── package.json
└── vite.config.js
```

---

## 🛠️ Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies (if needed)
npm install
```

---

## ✨ Features

- ✅ **Vite** - Lightning-fast HMR (Hot Module Replacement)
- ✅ **React Hooks** - useState, useEffect
- ✅ **API Integration** - Random User API
- ✅ **Glassmorphism UI** - Premium frosted glass effect
- ✅ **Loading States** - Animated skeleton loader
- ✅ **Error Handling** - Retry functionality
- ✅ **Responsive Design** - Mobile, tablet, desktop
- ✅ **Smooth Animations** - fadeIn, scaleIn, shimmer effects

---

## 🎨 Component Features

### Displays:
- 👤 Random user profile picture
- 📧 Email address
- 🌍 Country
- ✨ "Load New User" button

### States:
- ⏳ Loading (animated skeleton)
- ✅ Success (user card)
- ❌ Error (retry option)

---

## 🔥 Hot Module Replacement

Vite provides instant updates when you save files:
- Edit `RandomUser.jsx` - Changes appear immediately
- Edit `RandomUser.css` - Styles update instantly
- No page refresh needed!

---

## 📱 Responsive Breakpoints

| Device | Screen Width | Avatar Size |
|--------|-------------|-------------|
| Desktop | > 480px | 150px |
| Mobile | ≤ 480px | 120px |
| Small Mobile | ≤ 360px | 100px |

---

## 🎯 API Endpoint

```
https://randomuser.me/api/
```

Returns random user data with:
- Name, email, location
- Profile pictures (large, medium, thumbnail)
- Phone, DOB, nationality, etc.

---

## 🔧 Customization

### Change Colors

Edit `RandomUser.css`:

```css
/* Background gradient */
.random-user-container {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

### Add More Fields

Edit `RandomUser.jsx`:

```jsx
<div className="detail-item">
  <span className="detail-icon">📞</span>
  <span className="detail-text">{user.phone}</span>
</div>
```

---

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Output will be in dist/ folder
```

Deploy the `dist/` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

---

## 🚀 Deploy Commands

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

---

## 🐛 Troubleshooting

### Port already in use?
```bash
# Vite will automatically use next available port
# Or specify custom port:
npm run dev -- --port 3000
```

### Dependencies issue?
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Styles not loading?
```bash
# Clear browser cache or hard refresh
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

---

## 📚 Tech Stack

- **React** 18.x - UI library
- **Vite** 7.x - Build tool & dev server
- **Fetch API** - HTTP requests
- **CSS3** - Glassmorphism styling
- **Random User API** - Data source

---

## 🎉 That's It!

Your Random User component is ready to use with Vite's blazing-fast development experience!

Enjoy building! 🚀
