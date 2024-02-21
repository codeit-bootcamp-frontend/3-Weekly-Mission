declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_BASE_URL: string;
    NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY: string;
    NEXT_PUBLIC_KAKAO_INTEGRITY: string;
    // 추가적인 환경 변수가 있다면 여기에 추가합니다.
  }
}
