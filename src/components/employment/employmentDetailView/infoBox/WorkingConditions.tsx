import React from 'react';
import * as S from "../style";

const WorkingConditions = ({salary,allowance,period,meal,welfare}:any) => {
  let allowanceWithComma = allowance+"";
  let salaryWithComma = salary+"";

  // 3자리 수마다 ','를 추가해주는 함수
  const CommaAdder = (type: string) => {
    let array: any = [];
    let count = 0;

    for(let i = type.length; i>0; i--){
      count++;
      if(count%3 == 0) {
        array.unshift(type[i-1]);
        array.unshift(",");
      } else {
        array.unshift(type[i-1]);
      }
    }
    if(count == 6) array.shift(); // 만약 10만원이면 ",100,100" 와 같이 표시되는 불상사를 막기 위해 사용
    const result = array.join("");
    return result;
  }

  return (
    <S.ComplexBox>
      <S.Text>근무 조건 및 복지</S.Text>
      <S.BoxInner>
        <S.InnerText fixed>실습 수당</S.InnerText>
        <S.InnerText>{CommaAdder(allowanceWithComma)} 원</S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>채용 후 연봉</S.InnerText>
        <S.InnerText>{CommaAdder(salaryWithComma)} 원</S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>실습 기간</S.InnerText>
        <S.InnerText>{period}개월</S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>식비지원</S.InnerText>
        <S.InnerText>
          { meal.breakfast ? "조식제공, " : "" }
          { meal.lunch ? "중식제공, " : "" }
          { meal.dinner ? "석식제공, " : "" }
          { meal.includeSalary ? "급여 포함" : "" }
        </S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>복지</S.InnerText>
        <S.InnerText>
          { welfare.fourMajor ? "4대 보험," : " " }
          { welfare.selfDevelop ? "자기 개발비," : " " }
          { welfare.laptop ? "노트북 지급," : " " }
          { welfare.etc }
        </S.InnerText>
      </S.BoxInner>
    </S.ComplexBox>
  );
};

export default WorkingConditions;