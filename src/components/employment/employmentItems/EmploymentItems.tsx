import React, { useState } from 'react';
import * as S from './style';

const EmploymentItems = ({name,introduce,specialty,deadline}: any) => {
  const [introduceCut,setIntroduceCut] = useState(introduce);
  const temp = introduceCut;
  const stringCutter = 85; // 85자 이상은 안보여줌
  introduceCut.length>stringCutter ? setIntroduceCut(temp.slice(0,stringCutter)) : "";

  return (
    <S.Main>
      <S.CompanyName>{name}</S.CompanyName>
      <S.Introduce>{introduceCut.length==stringCutter?introduceCut+"...":introduceCut}</S.Introduce>
      <hr style={{width:"57.375rem", border:"1px solid #D5D5D5"}}/>
      <S.Skills>{specialty}</S.Skills>
      <S.DeadLine>마감일자 : {deadline}</S.DeadLine>
    </S.Main>
  );
};

export default EmploymentItems;