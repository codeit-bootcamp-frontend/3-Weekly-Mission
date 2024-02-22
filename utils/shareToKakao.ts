import { ModalInterface } from "../interfaces";

const shareToKakao = (kakaoSdk: boolean, modal: ModalInterface) => {
    if (kakaoSdk) {
        if (window.Kakao) {
            console.log(window.Kakao);
            const kakao = window.Kakao;
            if (!kakao.isInitialized()) {
                kakao.init(`${process.env.NEXT_APP_KAKAO_JS_KEY}`); // 카카오에서 제공받은 javascript key를 넣어줌
            }

            kakao.Link.sendDefault({
                // 링크 공유 중 여러가지 타입
                objectType: "feed",
                content: {
                    title: modal.folderName,
                    description: modal.sharingUrl,
                    imageUrl: "이미지 url",
                    link: {
                        mobileWebUrl: modal.sharingUrl,
                        webUrl: modal.sharingUrl,
                    },
                },
                buttons: [
                    {
                        title: modal.folderName,
                        link: {
                            mobileWebUrl: modal.sharingUrl,
                            webUrl: modal.sharingUrl,
                        },
                    },
                ],
            });
        }
    }
};

export default shareToKakao;
