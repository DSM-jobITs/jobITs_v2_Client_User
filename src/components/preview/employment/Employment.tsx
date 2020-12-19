import React from 'react';
import * as P from '../globalPreviewStlye';
// import * as S from './style';

const Employment = () => {
  return (
    <P.Main>
      <P.Title>채용 의뢰</P.Title>
      <P.ItemsTitleWarpper name="Employment"> {/* name으로 구별하여 공지사항인지 채용 공고인지 취업 현황인지에 따라 grid를 다르게 준다. */}
        <P.ItemsTitle name="Number">No</P.ItemsTitle>
        <P.ItemsTitle name="Name">기업</P.ItemsTitle>
        <P.ItemsTitle name="Date">등록일</P.ItemsTitle>
      </P.ItemsTitleWarpper>
      <P.ItemsWarpper>
        <P.Items>5</P.Items>
        <P.Items text>마이다스 아이티</P.Items>
        <P.Items>2020 / 11 / 11</P.Items>
      </P.ItemsWarpper>
      <P.ItemsWarpper>
        <P.Items>4</P.Items>
        <P.Items text>게임 스프링</P.Items>
        <P.Items>2020 / 11 / 08</P.Items>
      </P.ItemsWarpper>
      <P.ItemsWarpper>
        <P.Items>3</P.Items>
        <P.Items text>데브시스터즈</P.Items>
        <P.Items>2020 / 11 / 11</P.Items>
      </P.ItemsWarpper>
      <P.ItemsWarpper>
        <P.Items>2</P.Items>
        <P.Items text>EJN</P.Items>
        <P.Items>2020 / 11 / 11</P.Items>
      </P.ItemsWarpper>
      <P.ItemsWarpper>
        <P.Items>1</P.Items>
        <P.Items text>프리윌린</P.Items>
        <P.Items>2020 / 11 / 11</P.Items>
      </P.ItemsWarpper>
    </P.Main>
  );
};

export default Employment;