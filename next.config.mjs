/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jasonwatmore.com',
        port: '',
        pathname: '/_content/images/**',
      },
    ],
  },
};

export default nextConfig;
