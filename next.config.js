/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // url 이미지를 사용하기 위한 경로 설정
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ca.slack-edge.com",
                port: "",
                pathname: "/*",
            },
            {
                protocol: "https",
                hostname: "codeit-front.s3.ap-northeast-2.amazonaws.com",
                port: "",
                pathname: "/**/*",
            },
            {
                protocol: "https",
                hostname: "codeit-images.codeit.com",
                port: "",
                pathname: "/**/*",
            },
        ],
    },
};

module.exports = nextConfig;
