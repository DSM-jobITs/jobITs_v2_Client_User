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
          <S.FilterBoxInner>
            <S.FilterWarpper>
              <div>이 부분은 필터링을 위한 컴포넌트가 들어갑니다.</div>
            </S.FilterWarpper>
            <S.Search type="text" placeholder="기업검색"></S.Search>
            <S.FilterText>원하시는 검색 조건을 선택(입력)하신 뒤에 결과를 조회해주세요.</S.FilterText>
          </S.FilterBoxInner>
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
          <EmploymentItems />
          <EmploymentItems />
        </S.DetailViewWarpper>
      </S.Main>
    </div>
  );
};

export default Employment;