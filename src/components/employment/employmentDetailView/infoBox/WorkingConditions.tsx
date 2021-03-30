import React from 'react';
import * as S from "../style";

const WorkingConditions = ({salary,period,meal,welfare}:any) => {
  return (
    <S.ComplexBox>
      <S.Text>근무 조건 및 복지</S.Text>
      <S.BoxInner>
        <S.InnerText fixed>실습 수당</S.InnerText>
        <S.InnerText>{salary}원</S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>채용 후 연봉</S.InnerText>
        <S.InnerText>{salary}원</S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>실습 기간</S.InnerText>
        <S.InnerText>{period}개월</S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>식비지원</S.InnerText>
        <S.InnerText>
          { meal.breakfast ? "조식제공 " : "" }
          { meal.lunch ? "중식제공 " : "" }
          { meal.dinner ? "석식제공 " : "" }
          { meal.includeSalary ? "급여 포함" : "" }
        </S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>복지</S.InnerText>
        <S.InnerText>
          { welfare.fourMajor ? "4대 보험" : " " }
          { welfare.selfDevelop ? "자기 개발비" : " " }
          { welfare.laptop ? "노트북 지급" : " " }
          { welfare.etc }
        </S.InnerText>
      </S.BoxInner>
    </S.ComplexBox>
  );
};

export default WorkingConditions;