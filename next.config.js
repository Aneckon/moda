/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    host: process.env.HOST,
  },
}

module.exports = nextConfig
