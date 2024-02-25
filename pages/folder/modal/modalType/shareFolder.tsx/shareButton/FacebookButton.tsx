import ImageButton from "@/components/button/imageButton/ImageButton";

export default function FacebookButton({ shareUrl }: any) {
  const shareToFacebook = () => {
    const sharedLink = encodeURIComponent(shareUrl);
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };

  return (
    <ImageButton
      src="/assets/facebookShare.png"
      width={42}
      height={42}
      onClick={shareToFacebook}
      alt="페이스북 공유"
    >
      <h3>페이스북</h3>
    </ImageButton>
  );
}
