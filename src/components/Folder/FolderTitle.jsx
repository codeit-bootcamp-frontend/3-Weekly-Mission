import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FolderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background-color: ${(prop) => (prop.$isSelected ? '#6D6AFE' : '#FFFFFF')};
  color: ${(prop) => (prop.$isSelected ? '#FFFFFF' : '#000000')};
  cursor: pointer;
`;
export default function FolderTitle({ item, onClick, folderId }) {
  const [folderName, setFolderName] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(false);
    if (item.id === folderId) {
      setIsSelected(true);
    }
  }, [folderId]);

  useEffect(() => {
    setFolderName(item.name);
  }, [item.name]);

  const handleClick = () => {
    onClick();
  };

  return (
    <FolderItem $isSelected={isSelected} onClick={handleClick}>
      {folderName}
    </FolderItem>
  );
}
