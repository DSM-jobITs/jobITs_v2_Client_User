import React, {useState} from 'react';
import * as S from './style';

const Preview = () => {

  return (
    <div>
      <S.Notice>
        <S.NoticeImg src="/src/assets/images/Notice.png" alt="notice 소개 글" />
        <S.NoticeNav>
          <S.Type active></S.Type>
          <S.Type active={false}></S.Type>
          <S.Type active={false}></S.Type>
          <S.Type active={false}></S.Type>
        </S.NoticeNav>
      </S.Notice>
    </div>
  );
};

export default Preview;