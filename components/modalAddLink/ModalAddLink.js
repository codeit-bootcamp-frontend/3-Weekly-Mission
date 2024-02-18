import styled from 'styled-components';
import close from '@/public/close.png';
import { useState, useEffect } from 'react';
import check from '@/public/check.svg';
import Image from 'next/image';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: default;

  div {
    width: 360px;
    max-height: 500px;
    background: white;
    padding: 32px 40px;
    border-radius: 15px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .addlink-text {
      padding: 0;
      gap: 8px;
      width: 100%;

      h1 {
        color: #373740;
        font-size: 1.25rem;
        font-weight: 700;
      }

      p {
        color: #9fa6b2;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 22px;
      }

      img {
        position: absolute;
        top: -20px;
        right: -25px;
        cursor: pointer;
      }
    }

    .addlink-folder {
      padding: 0;
      gap: 4px;
      width: 100%;
      overflow: scroll;
      overflow-x: hidden;

      div {
        padding: 8px;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        border-radius: 8px;
        width: 100%;

        h2 {
          color: #373740;
          font-size: 1rem;
          font-weight: 400;
          line-height: 24px;
        }

        h3 {
          color: #9fa6b2;
          font-size: 0.875rem;
          font-weight: 400;
        }

        img {
          position: absolute;
          right: 8px;
          display: none;
        }
      }

      div:hover {
        background-color: #f0f6ff;
      }

      .selected {
        background-color: #f0f6ff;

        img {
          display: inherit;
        }
      }
    }

    button {
      width: 280px;
      padding: 16px 20px;
      border-radius: 8px;
      background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
      border: 0px;
      cursor: pointer;

      color: #f5f5f5;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

const ModalAddLink = ({ handleClose, handleButton, link, buttonInfo }) => {
  const [selectedFolders, setSelectedFolders] = useState([]);

  const handleFolderSelected = folderId => {
    if (selectedFolders.includes(folderId)) {
      setSelectedFolders(selectedFolders.filter(id => id !== folderId));
    } else {
      setSelectedFolders([...selectedFolders, folderId]);
    }
  };

  return (
    <ModalContainer onClick={e => e.preventDefault()}>
      <div>
        <div className="addlink-text">
          <h1>폴더에 추가</h1>
          <p>{link}</p>
          <Image src={close} alt="close" onClick={handleClose} />
        </div>

        <div className="addlink-folder">
          {buttonInfo &&
            buttonInfo.map(item => (
              <div
                key={item.id}
                onClick={() => handleFolderSelected(item.id)}
                className={
                  selectedFolders.includes(item.id) ? 'selected' : undefined
                }
              >
                <h2>{item.name}</h2>
                <h3>{item.link.count}개 링크</h3>
                <Image src={check} alt="check" />
              </div>
            ))}
        </div>

        <button onClick={handleButton}>추가하기</button>
      </div>
    </ModalContainer>
  );
};

export default ModalAddLink;
