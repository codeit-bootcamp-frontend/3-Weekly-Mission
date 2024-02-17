/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // svg를 사용하기 위한 경로 설정
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ca.slack-edge.com",
                port: "",
                pathname: "/*",
            },
        ],
    },
};

module.exports = nextConfig;
