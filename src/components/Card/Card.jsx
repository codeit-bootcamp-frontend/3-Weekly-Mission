import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import defaultImage from '../../asset/default-image.svg';
import calculateTime from '../../utils/calculateTime';
import starIcon from '../../asset/star.svg';
import kebabIcon from '../../asset/kebab.svg';

const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 335px;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  color: #000000;
  @media (max-width: 767px) {
    & {
      width: 325px;
      height: 327px;
    }
  }
`;
const CardImgArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  cursor: pointer;
  overflow: hidden;
`;
const CardPreviewImg = styled.img`
  max-height: 100%;
  margin: auto;

  &:hover {
    transition: all 0.3s;
    transform: scale(1.3);
  }
`;
const StarIcon = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
`;
const CardInfoArea = styled.div`
  display: flex;
  width: 100%;
  height: 135px;
  flex-direction: column;
  padding: 15px 20px;
  gap: 10px;
  overflow: hidden;
`;
const CardInfoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CardInfoTime = styled.p`
  font-size: 13px;
  color: #666666;
`;
const KebabIcon = styled.img``;
const CardInfoBody = styled.p`
  height: 49px;
  line-height: 24px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
const CardInfoDate = styled.p`
  font-size: 14px;
  color: #333333;
`;

export default function Card({ link }) {
  const [formattedCreatedAt, setFormattedCreatedAt] = useState('');
  const [elapsedTime, setElapsedTime] = useState('');
  const [cardImgUrl, setCardImgUrl] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

  const updateFormattedCreatedAt = (dateTimeString) => {
    const formattedDateTime = new Date(dateTimeString);

    const year = formattedDateTime.getFullYear();
    const month = formattedDateTime.getMonth() + 1;
    const day = formattedDateTime.getDate();

    setFormattedCreatedAt(`${year}. ${month}. ${day}`);
  };

  useEffect(() => {
    const formattedElapsedTime = calculateTime(link.createdAt);

    setElapsedTime(formattedElapsedTime);
    setLinkUrl(link.url);
    setCardImgUrl(link.imageSource);
    updateFormattedCreatedAt(link.createdAt);
  }, [link]);

  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };
  return (
    <CardContainer to={linkUrl} target="_blank">
      <CardImgArea>
        <CardPreviewImg
          src={cardImgUrl || defaultImage}
          alt="카드 미리보기 이미지"
          onError={handleImageError}
        />
        <StarIcon src={starIcon} alt="즐겨찾기 버튼" />
      </CardImgArea>
      <CardInfoArea>
        <CardInfoTop>
          <CardInfoTime>{elapsedTime}</CardInfoTime>
          <KebabIcon src={kebabIcon} alt="더보기 아이콘" />
        </CardInfoTop>
        <CardInfoBody>{link.description || '설명이 없습니다.'}</CardInfoBody>
        <CardInfoDate>{formattedCreatedAt}</CardInfoDate>
      </CardInfoArea>
    </CardContainer>
  );
}
