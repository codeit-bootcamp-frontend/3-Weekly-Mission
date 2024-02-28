/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codeit-images.codeit.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jasonwatmore.com",
        port: "",
        pathname: "/_content/images/**",
      },
      {
        protocol: "https",
        hostname: "codeit-frontend.codeit.com",
        port: "",
        pathname: "/static/images/**",
      },
      {
        protocol: "https",
        hostname: "reactjs.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.vercel.com",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "tanstack.com",
        port: "",
        pathname: "/build/_assets/**",
      },
      {
        protocol: "https",
        hostname: "storybook.js.org",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "testing-library.com",
        port: "",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "static.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s.pstatic.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
