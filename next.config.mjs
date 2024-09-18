/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { runtime: 'edge' },
        
    reactStrictMode: false,
    // async rewrites() {
    //   return [
    //     {
    //       source: '/api/:path*',
    //       destination: 'https://192.168.100.137/:path*',
    //     },
    //   ]
    // },
      server: {
          // You can specify any IP address (e.g., '0.0.0.0' for all available network interfaces)
          host: '192.168.100.137',
        },
        images: {
          domains: ['images.unsplash.com', 'localhost','oiqvaluk0meo17sm.public.blob.vercel-storage.com','api.mehmetk2.sg-host.com'],
        },
        middleware: ["middleware"],
        eslint: {
          // Warning: This allows production builds to successfully complete even if
          // your project has ESLint errors.
          ignoreDuringBuilds: true,
        },
  }

export default nextConfig;
