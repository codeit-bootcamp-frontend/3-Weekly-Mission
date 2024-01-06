import { useEffect, useState } from 'react';
import { createDay, beforeTime } from '../../shared';
import star from '../../image/star.jpg';

export default function Card() {
  const [cardData, setCardData] = useState([]);
  
  async function cardImgs() {
    try {
      const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
      const data = await response.json();
      const link = data.folder.links; // response 안에 있는 links 데이터
      setCardData(link); // links 데이터를 cardData에 저장
    } catch (error) {
      console.log('Error');
    }
  }
  useEffect(() => {
    cardImgs();
  }, []);
  return (
    <div className='linkImgBox'>
      {cardData.map((link) => { // cardData 안에 있는 데이터를 하나씩 꺼내서 link에 저장
        const date = createDay(link.createdAt);
        const time = beforeTime(link.createdAt);
        return( 
        <div key={link.id} className='cardBox'> 
            <div className='imgBox'>
              <a href={link.url} target='_blank' rel='noopener noreferrer'>
                {link.imageSource ? 
              <img className='linkImg' src={link.imageSource} alt='linkImg' />  
              :
              <img className='linkImg' src={star} alt='starlink'/>
            }
              </a>     
            </div>
            <div className='textBox'>
              <span className='time'>{time}</span>
              <p className='description'>{link.description}</p>
              <span className='date'>{date}</span>
            </div>
         </div>
        );
      })}
    </div>
  );
};






// import { useEffect, useState } from 'react';
// import { createDay, beforeTime } from '../shared';
// import star from '../image/star.jpg';

// export default function Card({folderData}) {
// const {url,imageSource, description, createdAt } = folderData;
//   return (
//     <div className='linkImgBox'>
//       {folderData.map((link) => { // cardData 안에 있는 데이터를 하나씩 꺼내서 link에 저장
//         const date = createDay(createdAt);
//         const time = beforeTime(createdAt);
//         return( 
//         <div key={link.id} className='cardBox'> 
//             <div className='imgBox'>
//               <a href={url} target='_blank' rel='noreferrer'>
//                 {imageSource ? 
//               <img className='linkImg' src={imageSource} alt='linkImg' />  
//               :
//               <img className='linkImg' src={star} alt='starlink'/>
//             }
//               </a>     
//             </div>
//             <div className='textBox'>
//               <span className='time'>{time}</span>
//               <p className='description'>{description}</p>
//               <span className='date'>{date}</span>
//             </div>
//          </div>
//         );
//       })}
//     </div>
//   );
// };
