import Profile from './Profile'
import Bookmark from './Bookmark'
import './Header.css';

export default function Header() {
  
  return (
    <div className='headerArea'>
      <Profile/>
      <Bookmark/>
    </div>
  )
}

// {/* <>
// <div className='nav'>
// <Profile/>
// </div>
// <div className='headerArea'>
// <Bookmark/>
// </div>
// </>
// //이런식으로 nav와 headerArea를 분리해야할듯 */}