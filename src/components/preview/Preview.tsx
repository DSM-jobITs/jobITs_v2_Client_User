import React from 'react';
import HomeEmployment from "./employment/HomeEmployment";
import * as S from './style';
import {preview} from '../../assets/images/index';

const Preview = () => {

  return (
    <div>
      <S.Preview>
        <S.NoticeImg src={preview} alt="notice 소개 글" />
        <S.PreviewNav>
          <S.Type active>채용 의뢰</S.Type>
          <S.Type active={false} use={false}>전체 공지</S.Type>
          <S.Type active={false} use={false}>중요 공지</S.Type>
          <S.Type active={false} use={false}>취업 현황</S.Type>
        </S.PreviewNav>
        <S.PreviewTemplate>
          <S.Links to="/employment">
            <HomeEmployment />
          </S.Links>
          {/* 추후 미리보기엔 공지 사항과 취업 현황이 추가될 예정 */}
        </S.PreviewTemplate>
      </S.Preview>
    </div>
  );
};

export default Preview;