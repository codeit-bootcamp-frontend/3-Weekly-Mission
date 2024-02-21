import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import * as S from "./SearchBar.style";

export default function SearchBar({
  onChange,
  keys,
}: {
  onChange: (w: string) => void;
  keys?: string;
}) {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e?.key === "Enter") {
      e.preventDefault();
      onChange(text);
    }
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setText("");
    onChange("");
  };

  return (
    <S.SearchBarMain>
      <S.SearchBarForm>
        <Image
          src={"/assets/Icons/search-icon.svg"}
          alt="검색 아이콘 이미지"
          width={16}
          height={16}
        />
        <S.SearchBarInput
          value={text}
          placeholder="링크를 검색해 보세요"
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        {keys && (
          <S.SearchBarButton onClick={handleReset}>
            <Image
              src={"/assets/Icons/reset-keywords.svg"}
              alt="초기화 버튼 아이콘 이미지"
              width={16}
              height={16}
            />
          </S.SearchBarButton>
        )}
      </S.SearchBarForm>
    </S.SearchBarMain>
  );
}
