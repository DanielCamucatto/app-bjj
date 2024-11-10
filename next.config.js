/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Reduz o tamanho do bundle
  webpack: (config) => {
    config.optimization.minimize = true;
    return config;
  },
};

module.exports = nextConfig; 