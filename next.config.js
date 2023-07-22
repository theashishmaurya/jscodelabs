/** @type {import('next').NextConfig} */
const nextConfig = {
  // import the question folder as a module path
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
