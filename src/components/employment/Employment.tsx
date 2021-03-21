import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Header from '../header/Header';
import FilterBox from './FliterBox';
import Pagination from './pagination/Pagination';
import Posts from './pagination/Posts';
import { baseURL } from '../const';
import * as S from './style';

const Employment = ({history}: any) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);

  useEffect(() => {
    
    const fetchData = async () => {
      setLoading(true);
      let token: any = localStorage.getItem("token");
      if(token){
        token = token.replace(/["]+/g, '');
      }
      const config = {
        headers : { Authorization: "Bearer "+token}
      }
      await axios.get(baseURL+'/recruit/basic',config).then((res)=>{
        setPosts(res.data.data.list);
        setLoading(false);  
      }).catch((err)=>{
        alert("로그인 후 이용할 수 있습니다.");
        history.push("/login");
      })
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
        <FilterBox setPosts={setPosts}/>
        <S.DetailViewWarpper>
          <S.Text>검색 결과 {posts.length}</S.Text>
          {/* <S.InputBox> 보류 - 두평이가 안만들었어요
            <S.CheckBox type='radio' name="orderBy" value="resently" defaultChecked></S.CheckBox>
            <span>최신 순</span>
            <S.CheckBox type='radio' name="orderBy" value="deadline"></S.CheckBox>
            <span>마감 순</span>
          </S.InputBox> */}
          <Posts posts={currentPosts(posts)} loading={loading}></Posts>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}></Pagination>
        </S.DetailViewWarpper>
      </S.Main>
    </div>
  );
};

export default withRouter(Employment);