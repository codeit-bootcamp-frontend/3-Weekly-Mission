import { useEffect, useState } from "react";

const useGetKakaoSdkScript = () => {
    const [kakaoSdk, setKakaoSdk] = useState(false);

    useEffect(() => {
        // script 요소를 생성한다
        const script = document.createElement("script");
        // 'https://developers.kakao.com/sdk/js/kakao.js' 에서 sdk 로드한다.
        script.src = "https://developers.kakao.com/sdk/js/kakao.js";
        // 비동기적으로 실행되게 해서 페이지의 다른 부분이 로드되게 한다.
        script.async = true;
        // body에 추가한다
        document.body.appendChild(script);
        setKakaoSdk(true);
        // 클리너 함수
        return () => {
            document.body.removeChild(script);
            setKakaoSdk(false);
        };
    }, []);

    return { kakaoSdk };
};

export default useGetKakaoSdkScript;
