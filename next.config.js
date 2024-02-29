/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // url 이미지를 사용하기 위한 경로 설정
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
            },
        ],
    },
    compiler: {
        styledComponents: true, // styled-components 사용을 위한 설정
        // removeConsole: true, // 컴파일시 console.log 제거
    },
};

module.exports = nextConfig;
