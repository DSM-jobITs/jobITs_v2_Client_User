import React from 'react';
import * as S from './style';

const EmploymentItems = ({name,introduce,skills,deadline}: any) => {
  return (
    <S.Main>
      <S.CompanyName>{name}</S.CompanyName>
      <S.Introduce>간단한 회사 소개</S.Introduce>
      <hr style={{width:"57.375rem", border:"1px solid #D5D5D5"}}/>
      <S.Skills>기술 스택을 보여줍니다.</S.Skills>
      <S.DeadLine>마감 시간을 보여줍니다.</S.DeadLine>
    </S.Main>
  );
};

export default EmploymentItems;