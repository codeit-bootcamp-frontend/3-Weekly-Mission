import Folder from "./Folder";
import styled from "styled-components";
import { useFolderData } from "../../hooks/useFolderData";

const FolderListBar = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
`;
const FolderItems = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const Text = styled.span`
  color: #6d6afe;
  text-align: center;
  font-family: Abel;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;
const Img = styled.img``;
function FolderList() {
  const { folderData, loadingError } = useFolderData();

  return (
    <FolderListBar>
      <FolderItems>
        {folderData &&
          folderData.map((item) => <Folder key={item.id} item={item} />)}
      </FolderItems>
      <Text>폴더추가</Text>
      <Img src="/assets/add-icon.svg" />
    </FolderListBar>
  );
}

export default FolderList;
