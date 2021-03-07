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
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
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
          <S.Text>전체 검색 {posts.length}</S.Text>
          <S.InputBox>
            <S.CheckBox type='radio' name="orderBy" value="resently" defaultChecked></S.CheckBox>
            <span>최신 순</span>
            <S.CheckBox type='radio' name="orderBy" value="deadline"></S.CheckBox>
            <span>마감 순</span>
          </S.InputBox>
          <Posts posts={currentPosts(posts)} loading={loading}></Posts>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}></Pagination>
        </S.DetailViewWarpper>
      </S.Main>
    </div>
  );
};

export default Employment;