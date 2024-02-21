import React from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import * as S from './BasicLayout.style';
import {Outlet} from "react-router-dom";

function BasicLayout() {
  return (
      <S.BasicLayout>
        <Header/>
        <Outlet/>
        <Footer/>
      </S.BasicLayout>
  )
}

export default BasicLayout;
