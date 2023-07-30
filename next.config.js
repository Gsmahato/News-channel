/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  images: {
    domains: ["www.bimaabazar.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   output: 'export',
//   reactStrictMode: true,
// future: {
//   webpack5: true,
// },
//   images: {
//     domains: ["www.bimaabazar.com"],
//   },
// };

// module.exports = nextConfig;

