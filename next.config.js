// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

// module.exports = {
//   images: {
//     domains: ["www.bimaabazar.com"],
//   },
// };
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ["www.bimaabazar.com"],
  },

  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
module.exports = nextConfig