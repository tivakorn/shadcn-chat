import PWA from 'next-pwa'

/** @type {import('next').NextConfig} */
// Configuration options for Next.js
const nextConfig = {
    reactStrictMode: true, // Enable React strict mode for improved error handling
    swcMinify: true,      // Enable SWC minification for improved performance
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'upload.convolab.ai',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

// Configuration object tells the next-pwa plugin 
const withPWA = PWA({
    dest: "public", // Destination directory for the PWA files
    disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
    register: true, // Register the PWA service worker
    skipWaiting: true, // Skip waiting for service worker activation
});

// Export the combined configuration for Next.js with PWA support
export default withPWA(nextConfig)