import { FolderInterface } from "@/types/types";
import Image from "next/image";
import * as S from "./ShareModal.style";

export default function ShareModal({ folder }: { folder: FolderInterface }) {
  const handleCopy = () => {
    let url = "https://bootcamp-api.codeit.kr/shared";
    const query = new URLSearchParams();
    query.append("user", "1");
    query.append("folder", folder.id || "");
    url = `${url}?${query.toString()}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <S.Content>
      <S.Title>폴더 공유</S.Title>
      <S.Description>{folder.name}</S.Description>
      <S.SNS>
        <S.Button>
          <Image
            src={"/assets/Icons/kakao-icon.svg"}
            alt="카카오 아이콘 이미지"
            width={42}
            height={42}
          />
          <S.Span>카카오톡</S.Span>
        </S.Button>
        <S.Button>
          <Image
            src={"/assets/Icons/facebook-icon.svg"}
            alt="페이스북 아이콘 이미지"
            width={42}
            height={42}
          />
          <S.Span>페이스북</S.Span>
        </S.Button>
        <S.Button onClick={handleCopy}>
          <Image
            src={"/assets/Icons/link-icon.svg"}
            alt="링크 공유 아이콘 이미지"
            width={42}
            height={42}
          />
          <S.Span>링크 복사</S.Span>
        </S.Button>
      </S.SNS>
    </S.Content>
  );
}
