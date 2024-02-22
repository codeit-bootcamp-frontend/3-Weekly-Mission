import {createContext, useState} from "react";

export const UserContext = createContext();

export default function UserProvider({children}) {

  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState('');
  const [userMail, setUserMail] = useState('');

  const userData = {
    isLogin,
    userName,
    userMail,
    setIsLogin,
    setUserName,
    setUserMail
  }

  return (
      <UserContext.Provider value={userData}>
        {children}
      </UserContext.Provider>
  );

}

