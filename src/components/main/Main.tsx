import React from 'react';
import Preview from '../preview/Preview';
import Header from '../header/Header';
import Footer from "../footer/Footer";
import { mainImg } from '../../assets/images/index';
import * as S from './style';

const Main = () => {
  return (
    <div>
      <Header />
      <S.Main>
        <S.Img src={mainImg} alt="메인 이미지" />
      </S.Main>
      {/* <S.Nav>
        <S.NavWarp>
          <S.LinkWarp>
            <Link to='/employment' style={{textDecoration:'solid', textAlign: 'center'}}>
              <S.Icon alt="Employment" src="/src/assets/images/Icon_Employment.png" />
              <S.IconText>채용의뢰</S.IconText>
            </Link>
          </S.LinkWarp>
          <S.LinkWarp onClick={hello}>
            <S.Icon alt="Notice" src="/src/assets/images/Icon_Notice.png" />
            <S.IconText>공지사항</S.IconText>
          </S.LinkWarp>
          <S.LinkWarp onClick={hello}>
            <S.Icon alt="Interview" src="/src/assets/images/Icon_Interview.png" />
            <S.IconText>면접</S.IconText>
          </S.LinkWarp>
          <S.LinkWarp onClick={hello}>
            <S.Icon alt="Company" src="/src/assets/images/Icon_Company.png" />
            <S.IconText>기업</S.IconText>
          </S.LinkWarp>
          <S.LinkWarp onClick={hello}>
            <S.Icon alt="FAQ" src="/src/assets/images/Icon_FAQ.png" />
            <S.IconText>FAQ</S.IconText>
          </S.LinkWarp>
        </S.NavWarp>
      </S.Nav> */}
      <S.Line />
      <Preview />
      <Footer />
    </div>
  );
};

export default Main;