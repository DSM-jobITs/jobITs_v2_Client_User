import React from 'react';
import {Link} from 'react-router-dom';
import * as S from './style';
import {notFound} from '../../assets/images/index';

const NotFound = ({history}: any) => {

  const goBack = () => {
    history.goBack();
  }

  return (
    <S.Main>
      <S.NotFound src={notFound} />
      <S.Text type='en'>Oops!</S.Text>
      <S.Text type='kr'>요청하신 페이지를 찾을 수 없습니다.</S.Text>
      <S.ButtonWarpper>
        <S.Button type='back' onClick={goBack}>이전 페이지</S.Button>
        <S.Button type='main' as={Link} to='/'>메인 페이지</S.Button>
      </S.ButtonWarpper>
    </S.Main>
  );
};

export default NotFound;