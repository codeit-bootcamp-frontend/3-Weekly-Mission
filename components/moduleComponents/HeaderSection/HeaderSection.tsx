import Profile from './Profile'
import Bookmark from './Bookmark'
import styles from './HeaderSection.module.css';

export default function HeaderSection() {
  
  return (
    <div className={styles.header_Area}>
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