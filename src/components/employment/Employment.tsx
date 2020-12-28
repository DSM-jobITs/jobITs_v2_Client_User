import React from 'react';
import Header from '../header/Header';
import EmploymentItems from './employmentItems/EmploymentItems';
import * as S from './style';

const Employment = () => {
  return (
    <div>
      <Header />
      <S.Main>
        <S.FilterBox>
          <S.Text>기업 검색</S.Text>
        </S.FilterBox>
        <S.DetailViewWarpper>
          <S.Text>전체 검색 (5)</S.Text>
          <S.InputBox>
            <S.CheckBox type='radio' name="orderBy" value="resently" checked></S.CheckBox>
            <span>최신 순</span>
            <S.CheckBox type='radio' name="orderBy" value="deadline"></S.CheckBox>
            <span>마감 순</span>
          </S.InputBox>
          <EmploymentItems />
          <EmploymentItems />
        </S.DetailViewWarpper>
      </S.Main>
    </div>
  );
};

export default Employment;