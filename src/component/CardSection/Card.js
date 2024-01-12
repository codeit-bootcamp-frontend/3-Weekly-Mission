import { useEffect, useState } from 'react';
import { createDay, beforeTime } from '../../shared';
import star from '../../image/star.jpg';

export default function Card() {
  const [cardData, setCardData] = useState([]);
  
  async function cardImgs() {
    try {
      const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1/links");
      const data = await response.json();
      const result = data.data; // response 안에 있는 links 데이터
      setCardData(result); // links 데이터를 cardData에 저장
    } catch (error) {
      console.log('Error');
    }
  }
  useEffect(() => {
    cardImgs();
  }, []);
  return (
    <div className='linkImgBox'>
      {cardData.map((link) => (
        <div key={link.id} className='cardBox'>
          <div className='imgBox'>
            <a href={link.url} target='_blank' rel='noopener noreferrer'>
              {link.image_source ? (
                <img className='linkImg' src={link.image_source} alt='링크 이미지' />
              ) : (
                <img className='linkImg' src={star} alt='별 이미지' />
              )}
            </a>
          </div>
          <div className='textBox'>
            <span className='time'>{beforeTime(link.created_at)}</span>
            <p className='description'>{link.description}</p>
            <span className='date'>{createDay(link.created_at)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}




