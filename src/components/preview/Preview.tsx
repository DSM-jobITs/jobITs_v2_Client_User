import React from 'react';
import Employment from "./employment/Employment";
import * as S from './style';

const Preview = () => {

  return (
    <div>
      <S.Preview>
        <S.NoticeImg src="/src/assets/images/Notice.png" alt="notice 소개 글" />
        <S.PreviewNav>
          <S.Type active>채용 의뢰</S.Type>
          <S.Type active={false} use={false}>전체 공지</S.Type>
          <S.Type active={false} use={false}>중요 공지</S.Type>
          <S.Type active={false} use={false}>취업 현황</S.Type>
        </S.PreviewNav>
        <S.PreviewTemplate />
      </S.Preview>
    </div>
  );
};

export default Preview;