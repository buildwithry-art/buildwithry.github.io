/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  output: 'export',  // 👈 ensures Next.js generates static HTML
  trailingSlash: true, // 👈 helps with GitHub Pages routing
  assetPrefix: isProd ? '/<your-repo-name>/' : '', // 👈 only if deploying to project pages
}

export default nextConfig
