import React from 'react';
import * as S from './style';

const Preview = () => {

  return (
    <div>
      <S.Notice>
        <S.NoticeImg src="/src/assets/images/Notice.png" alt="notice 소개 글" />
        <S.NoticeNav>
          <S.Type active>채용 의뢰</S.Type>
          <S.Type active={false} use={false}>전체 공지</S.Type>
          <S.Type active={false} use={false}>중요 공지</S.Type>
          <S.Type active={false} use={false}>취업 현황</S.Type>
        </S.NoticeNav>
      </S.Notice>
    </div>
  );
};

export default Preview;