import { useState, ChangeEvent, MouseEvent, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.css';
import Image from 'next/image';

const cn = classNames.bind(styles);

interface Props {
  handleOnChange: (value: string) => void;
}

export default function Search({ handleOnChange }: Props) {
  const [showEraseButton, setShowEraseButton] = useState(false);

  const searchInput = useRef<HTMLInputElement>(null);

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    handleOnChange(e.target.value.toLowerCase());
    if (!e.target.value) {
      setShowEraseButton(false);
    } else {
      setShowEraseButton(true);
    }
  };

  const onClickEraseKeyword = (e: MouseEvent) => {
    if (searchInput.current) {
      searchInput.current.value = '';
    }
    handleOnChange('');
    setShowEraseButton(false);
  };

  return (
    <div className={cn('search')}>
      <Image width={16} height={16} src="/images/Search.png" alt="돋보기" />
      <input
        className={cn('search-input')}
        placeholder="링크를 검색해 보세요."
        onChange={onChangeSearchInput}
        ref={searchInput}
      />
      {showEraseButton && (
        <div className={cn('eraseKeyword')}>
          <Image
            fill
            src="/images/_close.png"
            alt="X 버튼"
            onClick={onClickEraseKeyword}
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
    </div>
  );
}
