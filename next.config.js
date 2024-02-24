/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'codeit-images.codeit.com',
        port: '',
        pathname: '/badges/**',
      },
      {
        protocol: 'https',
        hostname: 'codeit-frontend.codeit.com',
        port: '',
        pathname: '/static/**',
      },
      {
        protocol: 'https',
        hostname: 'reactjs.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'tanstack.com',
        port: '',
        pathname: '/build/**',
      },
      {
        protocol: 'https',
        hostname: 'storybook.js.org',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'testing-library.com',
        port: '',
        pathname: '/img/**',
      },
      {
        protocol: 'https',
        hostname: 'static.cdninstagram.com',
        port: '',
        pathname: '/rsrc.php/**',
      },
      {
        protocol: 'https',
        hostname: 's.pstatic.net',
        port: '',
        pathname: '/static/**',
      },
      {
        protocol: 'https',
        hostname: 'jasonwatmore.com',
        port: '',
        pathname: '/_content/**',
      },
      {
        protocol: 'https',
        hostname: 'ca.slack-edge.com',
        port: '',
        pathname: '/T04T2BTF4F5-U0505C4KP8Q-607dc1ebd010-512/**',
      },
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'codeit.kr',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'codeit.kr',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 't1.kakaocdn.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
