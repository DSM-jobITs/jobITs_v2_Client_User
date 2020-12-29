import React from 'react';
import * as S from './style';

const EmploymentItems = () => {
  return (
    <S.Main>
      <S.CompanyName>미란다</S.CompanyName>
      <S.Introduce>미란다 최고!</S.Introduce>
      <hr style={{width:"57.375rem", border:"1px solid #D5D5D5"}}/>
      <S.Skills>Vue.js React.js TypeScript</S.Skills>
      <S.DeadLine>2020.11.27 마감</S.DeadLine>
    </S.Main>
  );
};

export default EmploymentItems;