// /** @type {import('next').NextConfig} */


const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  clientsClaim: true,

  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
});

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  distDir: "out",
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = withPWA(nextConfig);
