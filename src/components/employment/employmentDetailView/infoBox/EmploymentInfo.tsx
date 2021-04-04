import React from 'react';
import * as S from '../style';

const EmploymentInfo = ({numOfWorker,entPhone,entSales,address,establishmentDate,startTime,endTime}:any) => {
  return (
    <S.ComplexBox>
      <S.Text>기업 정보</S.Text>
      <S.BoxInner>
        <S.InnerText fixed>근로자 수</S.InnerText>
        <S.InnerText>
        { numOfWorker }명
        </S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>연락처</S.InnerText><S.InnerText>{ entPhone }</S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>연 매출액</S.InnerText><S.InnerText>{ entSales }억</S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>주소</S.InnerText><S.InnerText>{ address }</S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>설립 일자</S.InnerText><S.InnerText>{ establishmentDate }</S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>근무 일자</S.InnerText><S.InnerText>{ startTime } ~ { endTime }</S.InnerText>
      </S.BoxInner>
    </S.ComplexBox>
  );
};

export default EmploymentInfo;