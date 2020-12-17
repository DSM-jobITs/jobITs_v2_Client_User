import React from 'react';
import Preview from '../preview/Preview';
import * as S from './style';

const Main = () => {
  return (
    <div>
      <S.Main>
        <S.Img src="/src/assets/images/MainImg.png" alt="메인 이미지" />
      </S.Main>
      <S.Nav>
        <S.NavWarp>
          <S.LinkWarp>
            <div>채용의뢰</div>
          </S.LinkWarp>
          <S.LinkWarp>
            <div>공지사항</div>
          </S.LinkWarp>
          <S.LinkWarp>
            <div>면접</div>
          </S.LinkWarp>
          <S.LinkWarp>
            <div>취업</div>
          </S.LinkWarp>
          <S.LinkWarp>
            <div>FAQ</div>
          </S.LinkWarp>
        </S.NavWarp>
      </S.Nav>
      <Preview />
    </div>
  );
};

export default Main;