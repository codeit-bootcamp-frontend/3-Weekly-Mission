import Link from "next/link";
import * as S from "./Home.style";

export default function Home() {
  return (
    <>
      <S.Header>
        <S.Title>
          <S.Highlight>세상의 모든 정보</S.Highlight>를 <br />
          쉽게 저장하고 관리해 보세요
        </S.Title>
        <S.Button>
          <Link href="/folder">링크 추가하기</Link>
        </S.Button>
        <S.ImageBox></S.ImageBox>
      </S.Header>
    </>
  );
}
