import { useState, ChangeEvent } from "react";
import Image from "next/image";
import * as S from "./AddLink.style";

export default function AddLink() {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  return (
    <>
      <S.AddLink>
        <S.AddLinkForm>
          <S.FormBox>
            <Image
              src={"/assets/Icons/link-icon.svg"}
              alt="링크 추가 아이콘 이미지"
              width={20}
              height={20}
            />
            <S.FormInput
              value={keyword}
              onChange={handleChange}
              placeholder="링크를 추가해 보세요"
            />
            <S.FormButton>추가하기</S.FormButton>
          </S.FormBox>
        </S.AddLinkForm>
      </S.AddLink>
    </>
  );
}
