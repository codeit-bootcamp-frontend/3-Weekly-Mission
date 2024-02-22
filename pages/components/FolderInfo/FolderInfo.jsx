import Image from 'next/image';
import styled from 'styled-components';

export const FolderInfo = ({ profileImage, ownerName, folderName }) => {
  return (
    <FolderInfoContainer>
      <FolderInfoImage
        src={profileImage}
        width={60}
        height={60}
        alt="폴더 소유자 프로필 이미지"
      />
      <FolderInfoOwner>{ownerName}</FolderInfoOwner>
      <FolderInfoFolder>{folderName}</FolderInfoFolder>
    </FolderInfoContainer>
  );
};

const FolderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 0 4rem;
  background-color: var(--light-blue);

  @media (min-width: 768px) {
    padding: 2rem 0 6rem;
  }
`;

const FolderInfoImage = styled(Image)`
  width: 4rem;
  height: 4rem;

  @media (min-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`;

const FolderInfoOwner = styled.span`
  margin-top: 0.6rem;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    margin-top: 1.2rem;
    font-size: 1.6rem;
    line-break: 150%;
  }
`;

const FolderInfoFolder = styled.h2`
  margin-top: 1rem;
  font-size: 3.2rem;
  font-weight: 600;

  @media (min-width: 768px) {
    margin-top: 2rem;
    font-size: 4rem;
  }
`;
