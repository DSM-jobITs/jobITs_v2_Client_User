import React from 'react';
import * as S from '../style';

const Etc = ({personnel,recruitPlan,reception,file}:any) => {
  return (
    <S.ComplexBox>
      <S.Text>기타</S.Text>
      <S.BoxInner>
        <S.InnerText fixed>모집 인원</S.InnerText>
        {/* <S.InnerText>{ personnel }</S.InnerText> */}
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>실습 후 채용 계획</S.InnerText>
        {/* <S.InnerText>{ recruitPlan ? "있음" : "없음" }</S.InnerText> */}
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>접수 일자</S.InnerText>
        {/* <S.InnerText>{ reception }</S.InnerText> */}
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>첨부 파일</S.InnerText>
        {/* {file.map((f:any)=>(
          <S.File href={"https://google.com"+f.url}>f.name</S.File>
        ))} */}
      </S.BoxInner>
    </S.ComplexBox>
  );
};

export default Etc;