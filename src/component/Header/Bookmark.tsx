import useUserProfileData from '../../Hook/useUserProfileData'
import {UserProfileType} from '../../Hook/Types'

export default function Bookmark(){
  const {folderData}  = useUserProfileData();

  if(folderData === null) return null; 

  return (
    <div className='headerUnder'>
    {folderData.folder.owner && ( 
      <div className='bookmarkArea'>
        <img className='userLogo' src={folderData.folder.owner.profileImageSource} alt='codeit' />
        <p className='userName'>@{folderData.folder.owner.name}</p>
        <p className='bookmarkText'>{folderData.folder.name}</p>
      </div>
    )}
  </div>
  )
}
