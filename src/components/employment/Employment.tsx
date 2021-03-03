import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Header from '../header/Header';
import FilterBox from './FliterBox';
import EmploymentItems from './employmentItems/EmploymentItems';
import * as S from './style';

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
        <FilterBox />
        <S.DetailViewWarpper>
          <S.Text>전체 검색 (5)</S.Text>
          <S.InputBox>
            <S.CheckBox type='radio' name="orderBy" value="resently" defaultChecked></S.CheckBox>
            <span>최신 순</span>
            <S.CheckBox type='radio' name="orderBy" value="deadline"></S.CheckBox>
            <span>마감 순</span>
          </S.InputBox>
          {/* {
            loading &&
            <div> loading... </div>
          }
          {
            posts.map(post => (
              <EmploymentItems 
                key={1}
                name={}
                introduce={}
                deadline={}
              />
            ))
          } */}
          <EmploymentItems />
        </S.DetailViewWarpper>
      </S.Main>
    </div>
  );
};

export default Employment;