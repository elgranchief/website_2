import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Disable image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.flodesk.com',
      },
      // Add other image domains as needed
    ]
  },
  // Fix for path resolution issues in Vercel deployment
  experimental: {
    esmExternals: 'loose', // Try to resolve ESM imports more liberally
  },
  // Ensure webpack properly resolves the paths
  webpack: (config) => {
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      fs: false,
    };
    
    // Fix for module not found errors - using absolute paths
    config.resolve.alias = {
      ...config.resolve.alias,
      // Use absolute paths for better resolution
      '@': path.resolve(__dirname),
      'lib/payload': path.resolve(__dirname, 'lib/payload.ts'),
      'components/PayloadRichText': path.resolve(__dirname, 'components/PayloadRichText.tsx'),
      // Add explicit mapping for all problematic imports with escaped quotes
      "'lib/payload'": path.resolve(__dirname, 'lib/payload.ts'),
      "'components/PayloadRichText'": path.resolve(__dirname, 'components/PayloadRichText.tsx'),
    };
    
    // Add resolveDirectories to find modules more easily
    config.resolve.modules = [
      path.resolve(__dirname),
      'node_modules',
      ...config.resolve.modules || [],
    ];
    
    return config;
  },
};

export default nextConfig;
