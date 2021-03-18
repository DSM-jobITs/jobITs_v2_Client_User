import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import * as S from './style';

const Warning = ({history}:any) => {
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => { 
      clearInterval(countdown);
    };
  }, [timer]);

  if(timer === 0){
    setTimeout(() => {
      history.push('/');
    }, 30);
  }

  return (
    <div>
      <Header />
      <S.Main>
        <S.Text>아직 개발중인 페이지 입니다</S.Text>
        <S.Text>메인 화면으로 돌아갑니다.</S.Text>
        <S.Text>{timer}</S.Text>
      </S.Main>
    </div>
  );
};

export default Warning;