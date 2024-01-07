import styled from 'styled-components';
import addFolderIcon from '../../asset/addfolder.svg';
import addFolderWhiteIcon from '../../asset/addfolderwhite.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  width: 80px;
  height: 20px;
`;
const AddFolderText = styled.span`
  cursor: pointer;
  @media (max-width: 767px) {
    & {
      color: #e7effb;
    }
  }
`;
const AddFolderIcon = styled.div`
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
  background-image: url(${addFolderIcon});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  @media (max-width: 767px) {
    background-image: url(${addFolderWhiteIcon});
  }
`;

export default function AddFolder() {
  return (
    <Wrapper>
      <AddFolderText>폴더 추가</AddFolderText>
      <AddFolderIcon />
    </Wrapper>
  );
}
