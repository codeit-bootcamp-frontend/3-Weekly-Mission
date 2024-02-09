import './LinkAdd.css';
import link_svg from '../image/link.svg';
import { useState } from 'react';
import ModalMessge from './ModalMessage';

export default function LinkAdd() {
  const [modalOpen, setModalOpen] = useState(false); 
 
  const handlePopMessage = (e) => {
    e.preventDefault();
    setModalOpen(true);
  }
  const close=()=>{
    setModalOpen();
  }
  
  return (
    <div className='linkAddArea'>
      <form className='linkAddBox'>
        <input  type='text' placeholder='링크를 추가해 보세요'/>
        <img className='link_svg' src={link_svg} alt='link' />  
        <button className='linkAddButton' onClick={handlePopMessage}>추가하기</button>
        <ModalMessge type ={'blue'}modalOpen={modalOpen} headerText='링크 추가' onClick={close} buttonText='추가하기'/>
      </form>
    </div>
  )
}


// }