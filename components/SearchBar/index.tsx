import { ChangeEvent, FormEvent, useState } from "react";
import { getFolderLinks, getSampleFolder } from "@/lib/api";
import { FolderLink, SampleFolderLink } from "@/lib/types";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./SearchBar.module.css";

interface SearchProps {
  setFolderPageLinks?: React.Dispatch<React.SetStateAction<FolderLink[]>>;
  setSharedPageLinks?: React.Dispatch<React.SetStateAction<SampleFolderLink[]>>;
  folderId?: number;
}

const SearchBar = ({ setFolderPageLinks, setSharedPageLinks, folderId }: SearchProps) => {
  const [value, setValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const { pathname } = useRouter();

  const handelInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleLoadLinks = async () => {
    if (pathname === "/folder") {
      const response = await getFolderLinks(folderId);
      return response.data;
    }

    if (pathname === "/share") {
      const response = await getSampleFolder();
      return response.folder.links;
    }
  };

  const filterData = (items: (FolderLink | SampleFolderLink)[]) => {
    return items.filter(
      (item) =>
        item.title?.toLowerCase().includes(value.toLowerCase()) ||
        item.url?.toLowerCase().includes(value.toLowerCase()) ||
        item.description?.toLowerCase().includes(value.toLowerCase())
    );
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSearch(true);
    setResultValue(value);
    const links = filterData((await handleLoadLinks()) ?? []);
    setFolderPageLinks && setFolderPageLinks(links as FolderLink[]);
    setSharedPageLinks && setSharedPageLinks(links as SampleFolderLink[]);
  };

  const handelInputClear = () => {
    setValue("");
  };

  return (
    <div className={styles["SearchBar-box"]}>
      <div className={styles.SearchBar}>
        <div className={styles["SearchBar-icon"]}>
          <Image fill src="/assets/search.svg" alt="검색 아이콘" />
        </div>
        <form onSubmit={onSubmit}>
          <input
            className={styles["SearchBar-input"]}
            type="text"
            value={value}
            onChange={handelInputChange}
            placeholder="링크를 검색해 보세요"
          />
        </form>
        {value && (
          <div className={styles["SearchBar-clear-icon"]}>
            <Image fill src="/assets/clear.svg" onClick={handelInputClear} alt="내용 지우기 아이콘" />
          </div>
        )}
      </div>
      {isSearch && (
        <div className={styles["SearchBar-result"]}>
          <strong>{resultValue}</strong>으로 검색한 결과입니다.
        </div>
      )}
    </div>
  );
};

export default SearchBar;
