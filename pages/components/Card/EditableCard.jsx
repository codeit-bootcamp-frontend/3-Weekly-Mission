import Link from 'next/link';
import { CardImage } from './CardImage/CardImage';
import { CardContent } from './CardContent/CardContent';
import Image from 'next/image';
import styled from 'styled-components';
import { useCallback, useRef, useState } from 'react';
import { Popover } from '../Popover/Popover';

export const EditableCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  onDeleteClick,
  onAddToFolderClick,
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const kebabButtonRef = useRef(null);

  const handleBackgroundClick = useCallback(() => {
    setIsPopoverOpen(false);
  }, []);
  const handleKebabClick = (event) => {
    event.preventDefault();
    setIsPopoverOpen(true);
  };
  const handleDeleteClick = (event) => {
    event.preventDefault();
    onDeleteClick();
    setIsPopoverOpen(false);
  };
  const handleAddToFolderClick = (event) => {
    event.preventDefault();
    onAddToFolderClick();
    setIsPopoverOpen(false);
  };

  return (
    <CardContainer>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <CardImage imageSource={imageSource} alt={alt} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
        />
      </Link>
      <button onClick={(event) => event.preventDefault()}>
        <StarImage
          src="/images/star.svg"
          width={34}
          height={34}
          alt="즐겨찾기 별"
        />
      </button>
      <button ref={kebabButtonRef} onClick={handleKebabClick}>
        <KebabImage
          src="/images/kebab.svg"
          width={21}
          height={17}
          alt="더보기 점"
        />
      </button>
      <Popover
        isOpen={isPopoverOpen}
        anchorRef={kebabButtonRef}
        onBackgroundClick={handleBackgroundClick}
      >
        <ul>
          <li onClick={handleDeleteClick}>삭제하기</li>
          <li onClick={handleAddToFolderClick}>폼더에 추가</li>
        </ul>
      </Popover>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 32.5rem;
  height: 32.7rem;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;

  @media (min-width: 768px) {
    width: 34rem;
    height: 33.4rem;
  }
`;

const StarImage = styled(Image)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 3.4rem;
  height: 3.4rem;
`;

const KebabImage = styled(Image)`
  position: absolute;
  top: 20.7rem;
  right: 2rem;
`;
