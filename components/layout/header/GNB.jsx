import React from 'react';
import logo from '../../../assets/images/landing-logo.svg';
import LoginButton from "../../Forms/LoginButton";
import * as S from "./GNB.style";
import {useNavigate} from "react-router-dom";

function GNB() {

  const navigate = useNavigate();

  return (
      <S.Nav>
        <img src={logo} alt="logo" onClick={() => navigate('/')}/>
        <LoginButton/>
      </S.Nav>
  );
}

export default GNB;
