import styled from 'styled-components';
import AddLink from '../AddLink/AddLink';
import FolderBody from './FolderBody';

const AddLinkArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f6ff;
  padding: 60px 0 90px;
  @media (max-width: 767px) {
    & {
      padding: 24px 32px 40px;
    }
  }
`;
const FolderBodyArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  padding: 40px 0;
  @media (max-width: 767px) {
    & {
      padding: 20px 0;
    }
  }
`;

export default function Folder() {
  return (
    <>
      <AddLinkArea>
        <AddLink />
      </AddLinkArea>
      <FolderBodyArea>
        <FolderBody />
      </FolderBodyArea>
    </>
  );
}
