import React from 'react';
import * as P from '../globalPreviewStlye';

const ItemsWrapper = ({recruitNum,entName,reception}: any) => {
  return (
    <P.ItemsWrapper>
      <P.Items>{recruitNum}</P.Items>
      <P.Items text>{entName}</P.Items>
      <P.Items>{reception}</P.Items>
    </P.ItemsWrapper>
  );
};

export default ItemsWrapper;