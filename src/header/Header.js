import { useState, useEffect } from 'react';
import defaultProfile from '../img/Avatar.svg'
import logoImage from '../img/Linkbrary.svg'
import Account from "./Account";
import Logo from "./Logo";
import User from "./User";
import AddInput from './AddInput';
import {getOwner} from '../main/api/folderOwnerApi';
import './Header.css';

function Header() {
  const getInfo = async () => {
      const { folder } = await getOwner();
      setProfile(folder.owner.profileImageSource)
      setOwner(folder.owner.name)
      setName(folder.name)
    }

    const [userState, setUserState] = useState(false);
    const [profile, setProfile] = useState(defaultProfile);
    const [owner, setOwner] = useState('@코드잇');
    const [name, setName] = useState('');

  useEffect(()=> {
    getInfo();
  }, [userState]);
  // 로그인 버튼을 누르면 userState 가 true로 바뀌어 <User>가 보인다. 
  return (
    <div className="Header">
        <div className="box01">
          <div className='item01'>
          <Logo value={logoImage}/>
            <Account loginState={setUserState}/>
          </div>
        </div> 
        { userState 
        ?
        <div className="box02"><User  profileImage={profile} folderOwner={owner} folderName={name} /></div> 
        : 
        <AddInput />
        }
        {/* <div className="box02"><User  profileImage={profile} folderOwner={owner} folderName={name} /></div>  */}
    </div>
  )
}

export default Header;