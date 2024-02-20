import { useState } from 'react';
import Image from 'next/image';
import styles from './Search.module.css';
import search from '@/public/search.svg';
import close from '@/public/close.png';

function Search({ result }) {
  const [value, setValue] = useState('');

  function handleSearchWord(e) {
    const text = e.target.value;
    setValue(text);
    result(text);
  }

  function deleteValue() {
    const text = '';
    setValue(text);
    result(text);
  }

  return (
    <div className={styles.searchBox}>
      <label>
        <input
          type="text"
          placeholder="링크를 검색해 보세요."
          id="search-bar"
          className={styles.searchBar}
          onChange={handleSearchWord}
          value={value}
        />
        <Image src={search} alt="search-icon" className={styles.search} />
        <Image
          src={close}
          alt="close"
          className={styles.close}
          onClick={deleteValue}
        />
      </label>
    </div>
  );
}

export default Search;
