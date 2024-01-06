import styled from 'styled-components';
import { useState } from 'react';
import calculatePassedTime from '../../../../utils/calculatePassedTime';
import getFormattedDate from '../../../../utils/getFormattedDate';

export const CardContentContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 135px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px;
  background: #fff;
`;

const CardContentTimePassed = styled.div`
  color: #666;
  font-family: Pretendard;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const CardContentDescription = styled.div`
  overflow: hidden;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const CardContentCreatedAt = styled.div`
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 14px;
`;

const KebabBtn = styled.button`
  width: 21px;
  height: 17px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const KebabMenu = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  position: absolute;
  right: -80px;
  top: 16px;
`;

const KebabMenuDeleteBtn = styled.button`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  gap: 10px;
  align-self: stretch;
  color: var(--gray-light-gray-100, #333236);
  font-family: Pretendard;
  background: var(--gray-light-gray-00, #fff);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

const KebabMenuAddFolderBtn = styled.button`
  display: flex;
  padding: 7px 12px;
  justify-content: center;

  gap: 10px;
  align-self: stretch;
  background: var(--Linkbrary-gray10, #e7effb);
  color: var(--Linkbrary-primary-color, #6d6afe);
  font-family: Pretendard;
`;

const CardDescription = ({ link }) => {
  const [kebabToggle, setKebabToggle] = useState(false);

  const handleKebabToggle = () => {
    setKebabToggle(!kebabToggle);
  };

  return (
    <CardContentContainer>
      <CardContentTimePassed>
        {calculatePassedTime(link.created_at)}
        <KebabBtn
          onClick={(e) => {
            e.preventDefault();
            handleKebabToggle();
          }}
        >
          <img
            className="link__content--More-Btn"
            src={`${process.env.PUBLIC_URL}/images/kebab.svg`}
            alt="더보기 케밥 버튼"
          />
        </KebabBtn>
        {kebabToggle ? (
          <KebabMenu>
            <KebabMenuDeleteBtn>삭제하기</KebabMenuDeleteBtn>
            <KebabMenuAddFolderBtn>폴더에 추가</KebabMenuAddFolderBtn>
          </KebabMenu>
        ) : null}
      </CardContentTimePassed>
      <CardContentDescription>{link.description}</CardContentDescription>
      <CardContentCreatedAt>{getFormattedDate(link.created_at)}</CardContentCreatedAt>
    </CardContentContainer>
  );
};

export default CardDescription;
