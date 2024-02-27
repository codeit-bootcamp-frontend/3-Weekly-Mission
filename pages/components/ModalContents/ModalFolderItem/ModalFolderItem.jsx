import Image from 'next/image';
import styled from 'styled-components';

export const ModalFolderItem = ({
  folderName,
  linkCount,
  isSelected = false,
  onClick,
}) => {
  return (
    <ItemButton onClick={onClick}>
      <FolderName>{folderName}</FolderName>
      <LinkCount>{linkCount}개 링크</LinkCount>
      {isSelected && (
        <CheckImage
          src="/images/check.svg"
          width={14}
          height={14}
          alt="체크아이콘"
        />
      )}
    </ItemButton>
  );
};

const ItemButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
  width: 100%;
  height: 4rem;
  padding: 0.8rem;
  border-radius: 0.8rem;

  &:hover {
    background-color: var(--light-blue);
  }

  &:focus {
    background-color: var(--light-blue);
  }
`;

const FolderName = styled.span`
  font-size: 1.6rem;
  color: var(--gray100);
`;

const LinkCount = styled.span`
  font-size: 1.4rem;
  color: var(--gray60);
`;

const CheckImage = styled(Image)`
  margin-left: auto;
`;
