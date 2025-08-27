/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',              // 👈 required for static GitHub Pages
  images: { unoptimized: true }, // 👈 fixes next/image
  trailingSlash: true,           // 👈 prevents 404s on refresh
  // 👇 only needed if your site is a project repo (username.github.io/my-app)
  assetPrefix: isProd ? '/<repo-name>/' : '',
}

export default nextConfig
