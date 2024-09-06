/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: 'http://127.0.0.1:8055/admin/:path*',
      },
    ];
  },
};

export default nextConfig;
