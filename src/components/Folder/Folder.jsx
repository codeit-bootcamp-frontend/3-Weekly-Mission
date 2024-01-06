import { useState } from 'react';
import styled from 'styled-components';
import FolderTitle from './FolderTitle/FolderTitle';

const FolderContainer = styled.div`
  width: 1060px;
  margin-bottom: 24px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1123px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 8px;
  }
`;

const FolderButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;

const FolderButton = styled.button`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: #fff;
  color: #000;
  font-family: Pretendard;
  margin: 0 8px 8px 0;

  &:focus {
    color: #fff;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 5px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-primary-color, #6d6afe);
  }

  @media (max-width: 767px) {
    padding: 6px 10px;
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

const AddFolderButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;

  span {
    color: #6d6afe;
    text-align: center;
    font-family: Abel;
    font-size: 16px;
    letter-spacing: -0.3px;
    white-space: nowrap;
  }

  img {
    width: 16px;
    height: 16px;
    content: url('${process.env.PUBLIC_URL}/images/add.svg');
  }

  @media (max-width: 767px) {
    display: flex;
    padding: 8px 24px;
    gap: 20px;
    border-radius: 20px;
    border: 1px solid var(--Linkbrary-white, #fff);
    background: var(--Linkbrary-primary-color, #6d6afe);
    position: fixed;
    bottom: 101px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;

    span {
      color: var(--Linkbrary-gray10, #e7effb);
      text-align: center;
      font-family: Abel;
      font-size: 16px;
      letter-spacing: -0.3px;
    }

    img {
      content: url('${process.env.PUBLIC_URL}/images/mobile_add.svg');
    }
  }
`;

const Folder = ({ folderData, HandleOverViewFolderCardData, HandleFolderCardData }) => {
  const [currentFolder, setCurrentFolder] = useState('전체');

  const handleCurrentFolder = (name) => {
    setCurrentFolder(name);
  };

  return (
    <>
      <FolderContainer>
        <div>
          <FolderButtonContainer>
            <FolderButton
              type="button"
              onClick={() => {
                handleCurrentFolder('전체');
                HandleOverViewFolderCardData();
              }}
            >
              전체
            </FolderButton>
            {folderData.map((folder) => {
              return (
                <FolderButton
                  type="button"
                  key={folder.id}
                  onClick={() => {
                    handleCurrentFolder(folder.name);
                    HandleFolderCardData(folder.id);
                  }}
                >
                  {folder.name}
                </FolderButton>
              );
            })}
          </FolderButtonContainer>
          <AddFolderButton>
            <span>폴더추가</span>
            <img alt="폴더 더보기 사진" />
          </AddFolderButton>
        </div>
      </FolderContainer>
      <FolderTitle currentFolder={currentFolder} />
    </>
  );
};

export default Folder;
