import Link from "next/link";
import Image from "next/image";
import * as S from "./SnsSignForm.style";

export default function SnsSignForm({ label = "" }) {
  return (
    <S.MainDiv>
      <S.Text>{label}</S.Text>
      <S.SNS>
        <S.Button>
          <Link href="https://www.google.com" target="_blank">
            <Image
              src={"/assets/Icons/google-sign-icon.svg"}
              alt="구글 아이콘 이미지"
              width={42}
              height={42}
            />
          </Link>
        </S.Button>
        <S.Button>
          <Link href="https://www.kakaocorp.com/page" target="_blank">
            <Image
              src={"/assets/Icons/kakao-sign-icon.svg"}
              alt="카카오 아이콘 이미지"
              width={42}
              height={42}
            />
          </Link>
        </S.Button>
      </S.SNS>
    </S.MainDiv>
  );
}
