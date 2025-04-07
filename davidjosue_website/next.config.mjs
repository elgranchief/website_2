 /** @type {import('next').NextConfig} */
 import { withPayload } from '@payloadcms/next/withPayload'; // Import withPayload

 // Function to safely extract hostname
const getHostnameFromUrl = (url) => {
  if (!url) return null; // Handle undefined or null URL
  try {
    return new URL(url).hostname;
  } catch (error) {
    console.error("Invalid PAYLOAD_API_URL for image hostname:", error);
    // Fallback or default hostname if needed, or null to skip pattern
    return null; // Or a default like 'localhost' if running locally only initially
  }
};

const payloadHostname = getHostnameFromUrl(process.env.PAYLOAD_API_URL);

const remotePatterns = [];

if (payloadHostname) {
  remotePatterns.push({
    protocol: process.env.PAYLOAD_API_URL?.startsWith('https') ? 'https' : 'http',
    hostname: payloadHostname,
    port: '',
    pathname: '/media/**', // Default Payload media path, adjust if necessary
  });
} else {
   console.warn("PAYLOAD_API_URL is not defined or invalid. Remote patterns for Payload images are not configured.");
}

// Add other necessary domains like Flodesk if they serve images
// remotePatterns.push({ protocol: 'https', hostname: 'assets.flodesk.com', ... });

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: remotePatterns,
    unoptimized: true, // Re-adding this to disable optimization for all images
  },
  // Add other Next.js configurations if needed
 };

 // Wrap the config with withPayload
 export default withPayload(nextConfig);
