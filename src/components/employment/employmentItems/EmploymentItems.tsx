import React from 'react';
import * as S from './style';

const EmploymentItems = ({name,introduce,skills,deadline}: any) => {
  return (
    <S.Main>
      <S.CompanyName>{name}</S.CompanyName>
      <S.Introduce>{introduce}</S.Introduce>
      <hr style={{width:"57.375rem", border:"1px solid #D5D5D5"}}/>
      <S.Skills>{skills}</S.Skills>
      <S.DeadLine>{deadline}</S.DeadLine>
    </S.Main>
  );
};

export default EmploymentItems;