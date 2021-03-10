import React from 'react';
import * as S from '../style';

const Qualification = ({certificate,grade,specialty}: any) => {
  const certificateStr = certificate.join('  ');
  const specialtyStr = specialty.join('  ');

  return (
    <S.ComplexBox>
      <S.Text>자격 요건</S.Text>
      <S.BoxInner>
        <S.InnerText fixed>자격증</S.InnerText><S.InnerText>{certificateStr}</S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>성적</S.InnerText><S.InnerText>{grade}</S.InnerText>
      </S.BoxInner>
      <S.BoxInner>
        <S.InnerText fixed>특기사항</S.InnerText><S.InnerText>{specialtyStr}</S.InnerText>
      </S.BoxInner>
    </S.ComplexBox>
  );
};

export default Qualification;