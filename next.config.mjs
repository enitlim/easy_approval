/** @type {import('next').NextConfig} */

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

// const nextConfig = {
//   output: "export",
//   distDir: "production",
//   images: {
//     unoptimized: true,
//   },
//   reactStrictMode: true,
// };

export default nextConfig;
