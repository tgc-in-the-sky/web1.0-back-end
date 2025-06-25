# React Three Fiber Physics Demo

A beautiful 3D physics simulation built with React Three Fiber, featuring interactive spheres that are attracted to a center point with mouse-controlled lighting and post-processing effects.

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

## 🛠️ Technologies Used

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
git clone <your-repo-url>
cd web-back-end-1.0
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎮 How to Use

- **Move your mouse** to control the interactive pointer
- **Watch the physics simulation** as spheres are attracted to the center
- **Adjust outline thickness** using the Leva controls panel (right side)
- **Observe the visual effects** including bloom, ambient occlusion, and anti-aliasing

## 🏗️ Project Structure

```
src/
├── App.js              # Main 3D scene component
├── ErrorBoundary.js    # Error handling component
├── index.js           # Application entry point
├── styles.css         # Global styles
└── Outlines.tsx       # Outline effect component

public/
├── adamsbridge.hdr    # HDR environment map
├── cross.jpg          # Texture for spheres
└── index.html         # HTML template
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

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