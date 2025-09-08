/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
      },
      {
        source: '/api/:path*',
        destination: 'https://external-api.com/:path*', // Proxy to external API
      },
      {
        source: '/(.*)',
        destination: '/', // Catch-all fallback to homepage
      },
    ]
  },
}

module.exports = nextConfig
