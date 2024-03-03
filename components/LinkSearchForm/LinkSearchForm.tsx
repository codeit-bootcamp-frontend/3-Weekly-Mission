import { FormEvent } from "react";
import styled from "styled-components";
import { CardItem } from "../../types/dataTypes";
import { ApiFunc, VoidFunc } from "../../types/functionType";
import Image from "next/image";
import { closeButton, searchIcon } from "@/public/img";

interface Props {
  searchName: string;
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
  filterCardList: React.Dispatch<React.SetStateAction<CardItem[] | null>>;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setCardListItem: (callback?: ApiFunc) => void;
}

export default function LinkSearchForm({
  searchName,
  setSearchName,
  filterCardList,
  setIsSearch,
  setCardListItem,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
    setIsSearch(true);
    filterCardList((prvItem) => {
      const filterItem =
        prvItem?.filter(
          (item) =>
            (item.description && item.description.includes(searchName)) ||
            (item.title && item.title.includes(searchName)) ||
            item.url.includes(searchName)
        ) || [];
      return filterItem;
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleCloseClick = () => {
    setIsSearch(false);
    setSearchName("");
    setCardListItem();
  };

  return (
    <Form onSubmit={handleSubmit} onReset={handleCloseClick}>
      <Image width={16} height={16} src={searchIcon} alt="돋보기 아이콘" />
      <Input
        type="search"
        name="search"
        placeholder="링크를 검색해보세요."
        value={searchName}
        onChange={handleChange}
      />
      {searchName ? (
        <CloseButton type="reset">
          <Image src={closeButton} alt="검색어 삭제하기 버튼" />
        </CloseButton>
      ) : null}
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  max-width: 106rem;
  width: 100%;
  margin-top: 4rem;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 15px 16px;
  margin: 0 auto;
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  @media screen and (max-width: 1124px) {
    max-width: 704px;
  }

  @media screen and (max-width: 765px) {
    max-width: 325px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
`;

const Img = styled.img`
  width: 16px;
  height: 16px;
  left: 16px;
  text-align: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
`;
