import { useState } from 'react';
import styles from './styles.module.css';

export const SearchInput = ({ link, setLink, initialLink }) => {
  const [inputValue, setInputValue] = useState(null);

  const handleSearchInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSearchFormSubmit = e => {
    e.preventDefault();

    if (inputValue) {
      const filteredLinks = link?.filter(linkItem => {
        return (
          linkItem?.url?.includes(inputValue) ||
          linkItem?.title?.includes(inputValue) ||
          linkItem?.description?.includes(inputValue)
        );
      });
      setLink(filteredLinks);
    }

    if (!inputValue || inputValue === '') {
      setLink(initialLink);
    }
  };

  const handleSearchCancelIconClick = () => {
    setInputValue('');
    setLink(initialLink);
  };

  return (
    <form className={styles['search-form']} onSubmit={handleSearchFormSubmit}>
      <img
        className={styles['search__icon']}
        width="16"
        src="/images/search.svg"
        alt="검색 아이콘"
      />
      <label htmlFor="input-search" />
      <input
        className={styles['search__input']}
        id="input-search"
        placeholder="링크를 검색해 보세요"
        name="searchData"
        onChange={handleSearchInputChange}
        value={inputValue}
      />
      {inputValue && (
        <img
          className={styles['search__icon--cancel']}
          src="/images/close-white.png"
          onClick={handleSearchCancelIconClick}
        />
      )}
    </form>
  );
};
