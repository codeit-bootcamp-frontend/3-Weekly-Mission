import ImageButton from "@/components/button/imageButton/ImageButton";

export default function CopyLinkButton({ shareUrl }: any) {
  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ImageButton
      src="/assets/linkShare.png"
      width={42}
      height={42}
      onClick={copyToClipBoard}
      alt="링크 복사"
    >
      <h3>링크 복사</h3>
    </ImageButton>
  );
}
