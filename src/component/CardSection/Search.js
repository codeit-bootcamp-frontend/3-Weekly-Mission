import glass from '../../image/glass.svg'
import { useState } from 'react';
export default function Search() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('검색하기');
  }

  return (
  <div> 
    <form className='formBox' onSubmit={handleSubmit}>
      <input  type='text' placeholder='링크를 검색해 보세요' />
      <img  src={glass} alt='glass' />
    </form>
  </div> 
  )
}