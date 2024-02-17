/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async function redirects() {
    return [
      {
        source: "/ㄴㄴㄴㄴ",
        destination: "/ㄴㄴㄴ",
        permanent: true,
      },
    ];
  },
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
