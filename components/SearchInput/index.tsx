import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { FolderItem } from '@/types/Common';

interface Props {
  link: FolderItem[];
  setLink: Dispatch<SetStateAction<FolderItem[]>>;
  initialLink: FolderItem[];
}

export const SearchInput = ({ link, setLink, initialLink }: Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue) {
      const filteredLinks: FolderItem[] = link?.filter(linkItem => {
        return (
          linkItem?.url?.includes(inputValue) ||
          linkItem?.title?.includes(inputValue) ||
          linkItem?.description?.includes(inputValue)
        );
      });
      setLink(filteredLinks);
      return;
    }

    setLink(initialLink);
  };

  const handleSearchCancelIconClick = () => {
    setInputValue('');
    setLink(initialLink);
  };

  return (
    <form className={styles['search-form']} onSubmit={handleSearchFormSubmit}>
      <Image
        width={16}
        height={16}
        className={styles['search__icon']}
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
        <Image
          width={24}
          height={24}
          className={styles['search__icon--cancel']}
          src="/images/close-white.png"
          onClick={handleSearchCancelIconClick}
          alt="검색 지우기 버튼"
        />
      )}
    </form>
  );
};
