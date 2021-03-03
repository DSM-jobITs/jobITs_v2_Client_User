import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Header from '../header/Header';
import EmploymentItems from './employmentItems/EmploymentItems';
import * as S from './style';
import * as C from './comboBoxStyle';

const Employment = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);

  useEffect( () => {
    setLoading(true);
    const response: any = axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data);
    setLoading(false);
  },[]);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp: any) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

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
                <option value="5">5명 이상</option>
                <option value="20">20명 이상</option>
                <option value="50">50명 이상</option>
                <option value="100">100명 이상</option>
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
            <S.CheckBox type='radio' name="orderBy" value="resently" defaultChecked></S.CheckBox>
            <span>최신 순</span>
            <S.CheckBox type='radio' name="orderBy" value="deadline"></S.CheckBox>
            <span>마감 순</span>
          </S.InputBox>
          <EmploymentItems posts={currentPosts(posts)} loading={loading}/>
          <EmploymentItems posts={currentPosts(posts)} loading={loading}/>
          <EmploymentItems posts={currentPosts(posts)} loading={loading}/>
          <EmploymentItems posts={currentPosts(posts)} loading={loading}/>
        </S.DetailViewWarpper>
      </S.Main>
    </div>
  );
};

export default Employment;