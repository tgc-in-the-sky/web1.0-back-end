# React Three Fiber Physics Demo

A beautiful 3D physics simulation built with React Three Fiber and Next.js, featuring interactive spheres that are attracted to a center point with mouse-controlled lighting and post-processing effects.

## 🚀 Features

- **Physics Simulation**: 40 spheres with realistic physics using React Three Cannon
- **Interactive Controls**: Mouse-following pointer with dynamic lighting
- **Visual Effects**: 
  - Ambient occlusion (N8AO)
  - Bloom lighting effects
  - Anti-aliasing (SMAA)
  - HDR environment mapping
- **Real-time Controls**: Adjustable outline thickness using Leva debug panel
- **Performance Optimized**: Instanced meshes for efficient rendering
- **Next.js Powered**: Server-side rendering, optimized builds, and modern development experience

## 🛠️ Technologies Used

- **Next.js 14** - React framework with SSR and optimization
- **React 18** - UI framework
- **React Three Fiber** - React renderer for Three.js
- **React Three Cannon** - Physics engine integration
- **React Three Drei** - Useful helpers and components
- **React Three Postprocessing** - Visual effects and post-processing
- **Three.js** - 3D graphics library
- **Leva** - Debug controls and UI

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/tgc-in-the-sky/web1.0-back-end.git
cd web1.0-back-end
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎮 How to Use

- **Move your mouse** to control the interactive pointer
- **Watch the physics simulation** as spheres are attracted to the center
- **Adjust outline thickness** using the Leva controls panel (right side)
- **Observe the visual effects** including bloom, ambient occlusion, and anti-aliasing

## 🏗️ Project Structure

```
├── pages/                 # Next.js pages
│   ├── _app.js           # App wrapper
│   ├── _document.js      # Custom document
│   └── index.js          # Home page
├── src/
│   ├── App.js            # Main 3D scene component
│   ├── ErrorBoundary.js  # Error handling component
│   └── styles.css        # Component styles
├── styles/
│   └── globals.css       # Global styles
├── public/               # Static assets
│   ├── adamsbridge.hdr   # HDR environment map
│   └── cross.jpg         # Texture for spheres
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies and scripts
```

## 🔧 Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm start` - Starts the production server
- `npm run lint` - Runs the linter

## 🎨 Customization

### Changing Physics Behavior
Modify the `Clump` component in `src/App.js`:
- Adjust `gravity` in the Physics component
- Change force strength in the `applyForce` call
- Modify sphere count by changing the instanced mesh count

### Visual Effects
- Adjust post-processing parameters in the `EffectComposer`
- Change lighting setup in the Canvas
- Modify materials and textures

### Adding New Features
- Add new 3D models using React Three Drei components
- Implement keyboard controls
- Add more interactive elements
- Create new pages in the `pages/` directory

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 🐛 Troubleshooting

If you encounter the "Can not resolve #include <colorspace_fragment>" error:
1. Ensure all dependencies are up to date
2. Clear browser cache and restart the development server
3. Check that your graphics drivers are up to date

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Original inspiration: [Dribbble shot by BestServedBold](https://dribbble.com/shots/5708399-Christmas-Collisions)
- Built with [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- Physics powered by [React Three Cannon](https://github.com/pmndrs/react-three-cannon)
- Framework powered by [Next.js](https://nextjs.org/) 