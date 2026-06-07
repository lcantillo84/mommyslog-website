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
  async redirects() {
    return [
      {
        source: '/blog/best-baby-feeding-tracker-apps-2025',
        destination: '/blog/best-baby-feeding-tracker-apps-2026',
        permanent: true,
      },
      {
        source: '/blog/newborn-essentials-checklist-2025',
        destination: '/blog/newborn-essentials-checklist-2026',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
