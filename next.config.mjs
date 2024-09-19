/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      serverActions: {
        allowedOrigins: ['tacoza.co', '*.tacoza.co'],
      },
    },
};

export default nextConfig;
