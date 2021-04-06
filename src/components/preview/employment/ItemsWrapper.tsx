import React from 'react';
import * as P from '../globalPreviewStlye';
import {useHistory} from 'react-router-dom';

const ItemsWrapper = ({recruitNum,entName,reception,recruitId}: any) => {
  let history = useHistory();

  return (
    <P.ItemsWrapper onClick={()=>history.push('recruit/'+recruitId)}>
      <P.Items>{recruitNum}</P.Items>
      <P.Items text>{entName}</P.Items>
      <P.Items>{reception}</P.Items>
    </P.ItemsWrapper>
  );
};

export default ItemsWrapper;