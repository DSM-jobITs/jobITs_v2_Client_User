import React from 'react';
import {Link} from 'react-router-dom';
import * as S from './style';

const NotFound = () => {
  return (
    <S.Main>
      <S.NotFound src="/src/assets/images/NotFound.png" />
      <S.Text type='en'>Oops!</S.Text>
      <S.Text type='kr'>요청하신 페이지를 찾을 수 없습니다.</S.Text>
      <S.ButtonWarpper>
        <S.Button type='back'>이전 페이지</S.Button>
        <S.Button type='main' as={Link} to='/'>메인 페이지</S.Button>
      </S.ButtonWarpper>
    </S.Main>
  );
};

export default NotFound;