/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    return config;
  },
  experimental: {
    mdxRs: true,
  },
};
const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);
