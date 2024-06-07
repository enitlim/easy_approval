/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "production",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
