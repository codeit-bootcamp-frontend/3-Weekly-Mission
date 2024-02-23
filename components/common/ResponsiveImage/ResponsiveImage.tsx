import Image from "next/image";
import * as S from "./ResponsiveImage.style";

export default function ResponsiveImage({ src = "", alt = "" }) {
  return (
    <S.ImageBox>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        priority={true}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </S.ImageBox>
  );
}
