/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    return config;
  },
};
const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);
