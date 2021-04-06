import React from 'react';
import Header from '../header/Header';
import FilterBox from './FliterBox';
import Pagination from './pagination/Pagination';
import Posts from './pagination/Posts';
import Wait from './employmentDetailView/Wait';
import * as S from './style';

const Employment = ({setPosts, searchResult, postsContainer, post}: any) => {
  const {postsPerPage, totalPosts, paginate} = post;
  const {posts, loading} = postsContainer;

  return (
    <div>
      <Header />
      <S.Main>
        {/* <S.AdminBox>
          <S.Management>기업 관리</S.Management>
          <S.Add>기업 추가</S.Add>
        </S.AdminBox> */}
        {loading ?
          <>
            <div></div>
          </>
        :
        <>
          <FilterBox setPosts={setPosts}/>
          <S.DetailViewWarpper>
            <S.Text>검색 결과 {searchResult}</S.Text>
            {/* <S.InputBox> 보류 - 두평이가 안만들었어요
              <S.CheckBox type='radio' name="orderBy" value="resently" defaultChecked></S.CheckBox>
              <span>최신 순</span>
              <S.CheckBox type='radio' name="orderBy" value="deadline"></S.CheckBox>
              <span>마감 순</span>
            </S.InputBox> */}
            {
              posts.length === 0?<S.Unexist>해당하는 회사가 없습니다.</S.Unexist>
              :<Posts posts={posts} loading={loading}></Posts>
            }
            <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}></Pagination>
          </S.DetailViewWarpper>
        </>
        }
      </S.Main>
    </div>
  );
};

export default Employment;