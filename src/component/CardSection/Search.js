import glass from '../../image/glass.svg'

export default function Search() {

  return (
  <div> 
    <form className='formBox'>
      <input  type='text' placeholder='링크를 검색해 보세요'/>
      <img  src={glass} alt='glass' />
    </form>
  </div> 
  )
}