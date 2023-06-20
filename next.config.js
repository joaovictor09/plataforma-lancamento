/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'media.licdn.com',
      'www.guilhermenagel.com.br',
      'github.com',
      'clubeusmle.com',
      'media.graphassets.com',
    ],
  },
  eslint: {
    dirs: ['app', 'assets', 'lib'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}

module.exports = nextConfig
