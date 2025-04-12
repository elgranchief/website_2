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
    
    // Fix for module not found errors
    config.resolve.alias = {
      ...config.resolve.alias,
      // Add explicit mappings for problematic imports
      'lib/payload': './lib/payload',
      'components/PayloadRichText': './components/PayloadRichText'
    };
    
    return config;
  },
};

export default nextConfig;
