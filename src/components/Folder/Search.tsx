/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as S from "./Style";
// import Image from "next/image";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [closeSearch, setCloseSearch] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("search");
    if (stored) {
      setSearch(stored);
      setCloseSearch(true);
    }
  }, []);

  const inputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const changed = e.target.value;
    setSearch(changed);

    if (changed !== "") {
      setCloseSearch(true);
    }
    localStorage.setItem("search", changed);
  };

  const getSearch: React.MouseEventHandler<HTMLFormElement> = (e) => {
    if (!search) {
      router.push("/");
      return;
    }
    router.push(`/search?query=${search}`);
  };

  useEffect(() => {
    getSearch;
    inputChange;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const resetSearch = () => {
    setSearch("");
    setCloseSearch(false);
    localStorage.removeItem("search");
  };

  return (
    <S.SearchMain>
      <S.SearchBox onSubmit={getSearch}>
        <div>
          <button type="submit">
            <S.SearchImg src={"/assets/Icons/search.svg"} alt="검색 이미지" />
          </button>
          <S.SearchInput
            name="search"
            placeholder="링크를 검색해 보세요."
            value={search}
            onChange={inputChange}
            type="text"
          />
        </div>
        {closeSearch && (
          <button onClick={resetSearch}>
            <img src={"/assets/Icons/close.png"} alt="닫기 아이콘 이미지" />
          </button>
        )}
      </S.SearchBox>
      {search && (
        <S.SearchResult>
          <h1>{search}</h1>
          <h2>으로 검색한 결과입니다</h2>
        </S.SearchResult>
      )}
    </S.SearchMain>
  );
}
