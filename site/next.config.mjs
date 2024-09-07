/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: 'https://127.0.0.1:8055',
      },
    ];
  },
};

export default nextConfig;
