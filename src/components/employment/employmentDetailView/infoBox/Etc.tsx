import React from 'react';
import * as S from '../style';

const Etc = ({personnel,recruitPlan,reception,file}:any) => {
  return (
    <S.ComplexBox>
      <S.Text>기타</S.Text>
      <S.BoxInner>
        <S.InnerText fixed>모집 인원</S.InnerText>
        <S.InnerText>{ personnel }명</S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>실습 후 채용 계획</S.InnerText>
        <S.InnerText>{ recruitPlan ? "결격 사유 없을 시 전원 채용" : "평가 후 일부 채용" }</S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>접수 일자</S.InnerText>
        <S.InnerText>{ reception }</S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>첨부 파일</S.InnerText>
        {file ? file.map((f:any)=>(
          <S.File key={f.url} href={"https://jobitsdsm.s3.ap-northeast-2.amazonaws.com/"+f.url}>{f.name}</S.File>
        )): <S.InnerText >첨부 파일 없음</S.InnerText>}
      </S.BoxInner>
    </S.ComplexBox>
  );
};

export default Etc;