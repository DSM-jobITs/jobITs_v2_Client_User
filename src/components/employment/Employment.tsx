import React from 'react';
import Header from '../header/Header';
import EmploymentItems from './employmentItems/EmploymentItems';
import * as S from './style';
import * as C from './comboBoxStyle';

const Employment = () => {
  return (
    <div>
      <Header />
      <S.Main>
        <S.FilterBox>
          <S.Text>기업 검색</S.Text>
          <S.FilterBoxInner>
            <form>
              <C.Select id="member" name="member">
                <option value="">인원</option>
                <option value="">5명 이상</option>
                <option value="">20명 이상</option>
                <option value="">50명 이상</option>
                <option value="">100명 이상</option>
              </C.Select>
            </form>
            <div>
              <S.Search type="text" placeholder="기업 명"></S.Search>
              <S.Search type="text" placeholder="업무내용" style={{marginLeft:21}}></S.Search>
              <S.Search type="text" placeholder="지역" style={{marginLeft:21}}></S.Search>
            </div>
            <S.BottomWrapper>
              <S.FilterText>원하시는 검색 조건을 선택(입력)하신 뒤에 결과를 조회해주세요.</S.FilterText>
              <S.SearchButton>검색하기</S.SearchButton>
            </S.BottomWrapper>
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