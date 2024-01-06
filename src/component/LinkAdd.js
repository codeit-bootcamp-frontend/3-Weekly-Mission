import './LinkAdd.css';
import link_svg from '../image/link.svg';
export default function LinkAdd() {
  return (
    <div className='linkAddArea'>
      <form className='linkAddBox'>
        <input  type='text' placeholder='링크를 추가해 보세요'/>
        <img className='link_svg' src={link_svg} alt='link' />
        <button className='linkAddButton'>추가하기</button>
      </form>
    </div>
  )
}
