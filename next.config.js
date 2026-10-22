/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  typescript: {
    // Ignore les erreurs de types bloquantes lors du build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore les avertissements ESLint lors du build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;