import React from 'react';
import Header from '../header/Header';
import * as S from './style';

const Warning = () => {
  return (
    <div>
      <Header />
      <S.Main>
        <S.Text>Oops!</S.Text>
        <S.Text>아직 개발중인 페이지 입니다</S.Text>
      </S.Main>
    </div>
  );
};

export default Warning;