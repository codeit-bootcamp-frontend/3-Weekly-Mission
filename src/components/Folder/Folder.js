import styled from "styled-components";

const FolderItem = styled.span`
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: #fff;

  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function Folder({ item }) {
  //   console.log("item", item);
  return <FolderItem>{item.name}</FolderItem>;
}

export default Folder;
