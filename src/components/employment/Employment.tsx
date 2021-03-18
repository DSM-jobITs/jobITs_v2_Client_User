import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Header from '../header/Header';
import FilterBox from './FliterBox';
import Pagination from './pagination/Pagination';
import Posts from './pagination/Posts';
import * as S from './style';

const Employment = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);

  useEffect(() => {
    const config = {
      headers : { Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiam9iaXRzQGRzbS5ocy5rciIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MTU5NDc2OTgsImV4cCI6MTYxNjgxMTY5OCwiaXNzIjoiSm9iSVRzIn0.xHyhsZ5ZtXdZWyiXNtGNuU6Ltxw56C8Iw_YT8W_p6N0"}
    };
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get('http://54.180.2.226/recruit/basic',config);
      setPosts(response.data);
      setLoading(false);
    }
    fetchData();
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
        <S.AdminBox>
          <S.Management>기업 관리</S.Management>
          <S.Add>기업 추가</S.Add>
        </S.AdminBox>
        <FilterBox />
        <S.DetailViewWarpper>
          <S.Text>검색 결과 {posts.length}</S.Text>
          <S.InputBox>
            <S.CheckBox type='radio' name="orderBy" value="resently" defaultChecked></S.CheckBox>
            <span>최신 순</span>
            <S.CheckBox type='radio' name="orderBy" value="deadline"></S.CheckBox>
            <span>마감 순</span>
          </S.InputBox>
          <Posts posts={currentPosts(posts)} loading={loading}></Posts>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}></Pagination>
        </S.DetailViewWarpper>
        <S.Design></S.Design>
      </S.Main>
    </div>
  );
};

export default Employment;