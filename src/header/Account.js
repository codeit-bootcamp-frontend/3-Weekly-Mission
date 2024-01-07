import { useState } from 'react';
import Button from './Button';
import AccountEmail from './AccountEmail';
import AccountImage from './AccountImage';
import imgSrc from '../img/profile img.svg';

const API_BASE_URL_USER = 'https://bootcamp-api.codeit.kr/api/sample/user';
 
function Account({loginState}){
  const [info, setInfo] = useState();
  const [imgsrc, setImgsrc] = useState();
  const [isLogin, setIsLogin] = useState(false);
  
  const handleLogin = () => {
    fetch(API_BASE_URL_USER)
    .then((response) => response.json())
    .then((result) => {
      setInfo(result['email']);
    })
      setImgsrc(imgSrc);
      setIsLogin(true);
  }
  const handleLogout = () => {
      setInfo('');
      setImgsrc('');
      setIsLogin(false)
  }
  return (
    <div className="Account">
        <AccountImage value={imgsrc} /> 
        <AccountEmail content={info}/>
        <Button text={isLogin ? '로그아웃' : '로그인'} onClick={isLogin ? handleLogout : handleLogin}/>
    </div>
  )
}

export default Account;