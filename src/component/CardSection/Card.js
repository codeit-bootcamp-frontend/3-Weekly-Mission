import { createDay, beforeTime } from '../../shared';
import { useState } from 'react';
import useUserLinkData from '../../Hook/useUserLinkData';
import star from '../../image/star.jpg';
import kebab_svg from '../../image/kebab.svg';
import Kebab from '../Kebab';

function CardList({link}){
  const [kebab, setKebab] = useState(false);

  const kebabClick = (e) => {
    e.preventDefault();
    setKebab(!kebab); //!kebab이면 true, kebab이면 false  // true일때만 kebab 컴포넌트를 보여줌
  }

  return(
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
          <img src={kebab_svg} alt='더보기' className='케밥버튼'  onClick={kebabClick}/>  
          {kebab && //kebab가 true일때만 실행/ true일때만 kebab 컴포넌트를 보여줌
          <Kebab/>}
          <p className='description'>{link.description}</p>
          <span className='date'>{createDay(link.created_at)}</span>
        </div>
      </div>
  )
}

export default function Card({ selectedFolderId }) {
  const {linkData} = useUserLinkData(selectedFolderId);
  return (
    <>
      {linkData.map((link) => (
        <CardList key={link.id} link={link}/>
      ))}
    </>
  );
}


