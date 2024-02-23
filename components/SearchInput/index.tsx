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
  links: FolderItem[];
  setLinks: Dispatch<SetStateAction<FolderItem[]>>;
  initialLinks: FolderItem[];
}

export const SearchInput = ({ links, setLinks, initialLinks }: Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue) {
      const filteredLinks: FolderItem[] = links?.filter(link => {
        return (
          link?.url?.includes(inputValue) ||
          link?.title?.includes(inputValue) ||
          link?.description?.includes(inputValue)
        );
      });
      setLinks(filteredLinks);
      return;
    }

    setLinks(initialLinks);
  };

  const handleSearchCancelIconClick = () => {
    setInputValue('');
    setLinks(initialLinks);
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
      <input
        className={styles['search__input']}
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
