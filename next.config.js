/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/3d',
  
  // Handle static assets
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf|hdr)$/,
      type: 'asset/resource',
    })
    
    return config
  },
  
  // Optimize images and static files
  images: {
    domains: [],
  },
  
  // Enable experimental features if needed
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig 