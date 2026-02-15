# 🚀 Subham Bhattacharya - Portfolio Website

An extraordinary 3D portfolio website built with **React**, **Three.js**, and cutting-edge web technologies. Features stunning animations, 3D particle effects, and a cyberpunk-inspired design.

## ✨ Features

- **3D Interactive Background**: Real-time Three.js particle system with geometric shapes
- **Custom Cursor**: Dynamic cursor with smooth follower animation
- **Smooth Animations**: Scroll-triggered reveals and micro-interactions
- **Fully Responsive**: Optimized for all screen sizes
- **Embedded Project Videos**: YouTube video integration for project demos
- **Modern Design**: Cyberpunk aesthetic with neon accents and futuristic typography
- **Performance Optimized**: Smooth 60fps animations

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Three.js** - 3D graphics and particle systems
- **Vite** - Fast build tool and dev server
- **CSS3** - Advanced animations and effects
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Step 3: Build for Production
```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🚀 Deployment

### Deploy to Netlify (Easiest)
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Build the project: `npm run build`
3. Deploy: `netlify deploy --prod --dir=dist`

### Deploy to Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── Portfolio.jsx    # Main component with all sections
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## 🎨 Customization

### Update Pokemon Game Video
In `src/Portfolio.jsx`, find the projects array and update the video ID:
```javascript
{
  title: 'Terminal-Based Pokemon Game',
  video: 'YOUR_YOUTUBE_VIDEO_ID', // Add your video ID here
  // ...
}
```

### Change Colors
Update the CSS variables in the `<style>` tag in `Portfolio.jsx`:
```css
:root {
  --accent-cyan: #00ffff;
  --accent-green: #00ff88;
  --accent-pink: #ff0088;
}
```

### Modify Sections
All content is in `src/Portfolio.jsx`. Edit the JSX to update:
- Hero section text
- About content
- Experience details
- Project information
- Skills list

## 🎯 Performance Tips

- The Three.js particle count is set to 3000. Reduce this for lower-end devices
- Animations use `requestAnimationFrame` for 60fps performance
- Images and videos are lazy-loaded for faster initial page load

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🙌 Credits

Built by **Subham Bhattacharya**
- GitHub: [@CyberDragon25](https://github.com/CyberDragon25)
- LinkedIn: [shubhambhattacharya](https://linkedin.com/in/shubhambhattacharya)

---

**Made with ❤️ using React & Three.js**
