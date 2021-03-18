import React from 'react';
import * as P from '../globalPreviewStlye';

const ItemsWrapper = ({no,title,date}: any) => {
  return (
    <P.ItemsWrapper>
      <P.Items>5</P.Items>
      <P.Items text>마이다스 아이티</P.Items>
      <P.Items>2020 / 11 / 11</P.Items>
    </P.ItemsWrapper>
  );
};

export default ItemsWrapper;