import ImageButton from "@/components/button/imageButton/ImageButton";

type KakaoButtonProps = {
  folderName: string;
  shareUrl: string;
};

export default function KakaoButton({
  folderName,
  shareUrl,
}: KakaoButtonProps) {
  const kakaoApiKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
  const { Kakao } = window;

  const shareToKakao = () => {
    if (!Kakao.isInitialized()) {
      Kakao.init(kakaoApiKey);
    }

    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: folderName,
        imageUrl:
          "https://i.namu.wiki/i/8AS4OSvzlQ_Tw8Jvy4g7gQb0w0JTQRf4lhvsqUYUqOcTTmeMFVBHCL72kO6PR2NDilN2i2wuZidniZgvLs0w3o8r8Xt8RgOgh-L7x1HoPju69RSHFg9LAOuyScKgcTasezzJm8g9JYUp-Vy5WHpI_Q.webp",
        link: {
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            webUrl: shareUrl,
          },
        },
      ],
    });
  };

  return (
    <ImageButton
      src="/assets/kakaoShare.png"
      width={42}
      height={42}
      onClick={shareToKakao}
      alt="카카오톡 공유"
    >
      <h3>카카오톡</h3>
    </ImageButton>
  );
}
