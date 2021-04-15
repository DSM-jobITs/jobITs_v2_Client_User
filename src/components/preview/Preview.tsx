import React from 'react';
import HomeEmployment from "./employment/HomeEmployment";
import * as S from './style';
import {preview} from '../../assets/images/index';

const Preview = () => {
  const helpMe = () => {
    alert("준비중인 서비스 입니다.");
  }
  return (
    <div>
      <S.Preview>
        <S.NoticeImg src={preview} alt="notice 소개 글" />
        <S.PreviewNav>
          <S.Type active>채용 의뢰</S.Type>
          <S.Type active={false} use={false} onClick={helpMe}>전체 공지</S.Type>
          <S.Type active={false} use={false} onClick={helpMe}>중요 공지</S.Type>
          <S.Type active={false} use={false} onClick={helpMe}>취업 현황</S.Type>
        </S.PreviewNav>
        <S.PreviewTemplate>
            <HomeEmployment />
          {/* 추후 미리보기엔 공지 사항과 취업 현황이 추가될 예정 */}
        </S.PreviewTemplate>
      </S.Preview>
    </div>
  );
};

export default Preview;