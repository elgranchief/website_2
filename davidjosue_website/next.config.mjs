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
};

export default nextConfig;
