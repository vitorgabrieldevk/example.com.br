// site/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/admin/:path*',
          destination: 'http://localhost:8055/admin/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  