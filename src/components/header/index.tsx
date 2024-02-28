import { useState, useEffect } from 'react';
import defaultProfile from 'assets/Avatar.svg'
import logoImage from 'assets/Linkbrary.svg'
import Account from "components/header/Account";
import Logo from "components/header/Logo";
import User from "components/header/User";
import AddInput from 'components/header/AddInput';
import {getOwner} from 'components/main/api/Api';
import 'components/header/Header.css';

interface PropsLoading {
  searchIsLoading: boolean;
}

function Header({ searchIsLoading }: PropsLoading) {
  const getInfo = async () => {
      const { folder } = await getOwner();
      setProfile(folder.owner.profileImageSource)
      setOwner(folder.owner.name)
      setName(folder.name)
    }

    const [profile, setProfile] = useState<string>(defaultProfile);
    const [owner, setOwner] = useState<string>('@코드잇');
    const [name, setName] = useState<string>('');

    useEffect(()=>{
      getInfo();
    },[])

  return (
    <div className="Header">
        <div className="box01">
          <div className='item01'>
          <Logo value={logoImage}/>
            <Account/>
          </div>
        </div> 
        {searchIsLoading ?  
        <AddInput/>
        :
        <div className="box02"><User  profileImage={profile} folderOwner={owner} folderName={name} /></div>
        }
        
    </div>
  )
}

export default Header;