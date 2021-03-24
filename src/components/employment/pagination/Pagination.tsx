import React from 'react';
import * as S from './style';

const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <S.Div>
      <S.PageUl className="pagination">
        {pageNumbers.map(number => (
          <S.PageLi key={number} className="hello" onClick={() => {paginate(number); window.scrollTo(0,0)}}>
            {number}
          </S.PageLi>
        ))}
      </S.PageUl>
    </S.Div>
  );
};

export default Pagination;