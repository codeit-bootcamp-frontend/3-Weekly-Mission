/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jasonwatmore.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "codeit-images.codeit.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
