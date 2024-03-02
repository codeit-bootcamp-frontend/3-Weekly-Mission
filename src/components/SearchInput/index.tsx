import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { FolderLink } from '@/types/Common';

interface Props {
  folderLinks: FolderLink[];
  setFolderLinks: Dispatch<SetStateAction<FolderLink[]>>;
  initialFolderLinks: FolderLink[];
}

export const SearchInput = ({
  folderLinks,
  setFolderLinks,
  initialFolderLinks,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue) {
      const filteredFolderLinks: FolderLink[] = folderLinks?.filter(
        (folderLink) => {
          return (
            folderLink?.url?.includes(inputValue) ||
            folderLink?.title?.includes(inputValue) ||
            folderLink?.description?.includes(inputValue)
          );
        },
      );
      setFolderLinks(filteredFolderLinks);
      return;
    }

    setFolderLinks(initialFolderLinks);
  };

  const handleSearchCancelIconClick = () => {
    setInputValue('');
    setFolderLinks(initialFolderLinks);
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
