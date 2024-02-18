import Image from 'next/image';
import styles from './Search.module.css';
import search from '@/public/search.svg';

function Search({ result }) {
  return (
    <div className={styles.searchBox}>
      <label>
        <input
          type="text"
          placeholder="링크를 검색해 보세요."
          id="search-bar"
          className={styles.searchBar}
          onChange={result}
        />
        <Image src={search} alt="magnifier" />
      </label>
    </div>
  );
}

export default Search;
