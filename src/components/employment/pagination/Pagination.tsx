import React from 'react';
import * as S from './style';

const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <S.PageUl className="pagination">
          {pageNumbers.map(number => (
            <S.PageLi key={number} className="page-item" onClick={() => paginate(number)}>
                {number}
            </S.PageLi>
          ))}
        </S.PageUl>
      </nav>
    </div>
  );
};

export default Pagination;