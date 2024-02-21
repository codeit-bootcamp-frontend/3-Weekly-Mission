import React, {createRef, useContext, useEffect, useRef, useState} from 'react';
import * as S from './SearchArea.style';
import {FolderContext} from "@/pages/folder";

const SearchArea = () => {
  const {folderList, setFolderList,loadUserFoldersByCategoryId,curCategoryId } = useContext(FolderContext);
  const [input, setInput] = useState('');
  const inputRef = createRef();

  // const searchInUrl = (item, searchInput) => {
  //   return item.url.includes(searchInput);
  // }
  // const searchInTitle = (item, searchInput) => {
  //   return item.title.includes(searchInput);
  // }
  const searchInDescription = (item, searchInput) => {
    return item.description?.includes(searchInput);
  }
  const handleSearch = (input) => {
    console.log(input);
    console.log(folderList);
    const filteredList = folderList.filter(
        (item) => searchInDescription(item, input));
    setFolderList(()=>[...filteredList]);
  }

  useEffect(() => {
    if (!input) {
      loadUserFoldersByCategoryId(curCategoryId);
    }
    handleSearch(input);
  }, [input]);



  return (
      <S.SearchArea>
        <S.SearchBar ref={inputRef} value={input}
                     onChange={(e) => setInput(e.target.value)}
                     placeholder="검색어를 입력하세요"/>
        {input && <S.SearchText>{input}<span>으로 검색한결과입니다.</span>
        </S.SearchText>}

      </S.SearchArea>
  )
}

export default SearchArea;
