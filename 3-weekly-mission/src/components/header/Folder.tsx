import { useEffect, useState } from 'react';
import { getFolder } from '@/pages/api/api';
import styled from 'styled-components';

const InformationContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
  padding: 11.4rem 0 6rem;
  background: var(--linkbrary-bg);
`;

const FolderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const OwnerProfileImage = styled.img`
  width: 6rem;
  height: 6rem;
  position: relative;

  @media (max-width: 767px) {
    width: 4rem;
    height: 4rem;
  }
`;

const OwnerName = styled.span`
  color: var(--text-color-light-mode, #000);
  font-size: 1.6rem;
  line-height: 2.4rem; /* 150% */

  @media (max-width: 767px) {
    color: var(--text-color-light-mode, #000);
    font-size: 1.4rem;
  }
`;

const FolderName = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 4rem;
  font-weight: 600;

  @media (max-width: 767px) {
    color: #000;
    text-align: center;
    font-size: 3.2rem;
    font-weight: 600;
    letter-spacing: -0.2px;
  }
`;

export default function Folder() {
  const [folder, setFolder] = useState<FolderType | null>(null);

  useEffect(() => {
    async function applyGetFolder() {
      const nextFolder = await getFolder();
      if (!nextFolder) return;
      setFolder(nextFolder.folder);
    }

    applyGetFolder();
  }, []);

  return (
    <InformationContainer>
      <FolderInfoContainer>
        <UserInfoContainer>
          <OwnerProfileImage
            src={folder?.owner.profileImageSource || '/images/logo.svg'}
            alt="소유자 프로필"
          />
          <OwnerName>
            {folder?.owner.name || 'anonymous'}
          </OwnerName>
        </UserInfoContainer>
        <FolderName>
          {folder?.name || 'Linkbrary'}
        </FolderName>
      </FolderInfoContainer>
    </InformationContainer>
  );
}
