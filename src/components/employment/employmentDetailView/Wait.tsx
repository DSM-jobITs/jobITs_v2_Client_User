import React from 'react';
import * as S from './waitStyle';

const Wait = () => {

  setTimeout(() => {  
  const element = document.querySelectorAll('span');
  for(let i = 0; i<element.length;i++){
    element[i].style.animationDelay = i*0.07 + 's';
  }
  console.log(element.length)
  },100)

  return (
    <S.Container>
      <S.Span className="text">L</S.Span>
      <S.Span className="text">o</S.Span>
      <S.Span className="text">a</S.Span>
      <S.Span className="text">d</S.Span>
      <S.Span className="text">i</S.Span>
      <S.Span className="text">n</S.Span>
      <S.Span className="text">g</S.Span>
      <S.Span className="text">.</S.Span>
      <S.Span className="text">.</S.Span>
      <S.Span className="text">.</S.Span>
    </S.Container>
  );
};

export default Wait;