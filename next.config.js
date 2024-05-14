/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const withVideos = require("next-videos");

module.exports = withVideos({
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  reactStrictMode: true,
});
