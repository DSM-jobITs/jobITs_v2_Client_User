import React from 'react';
import * as P from '../globalPreviewStlye';
import {useHistory} from 'react-router-dom';

const ItemsWrapper = ({recruitNum,entName,reception,recruitId}: any) => {
  let history = useHistory();
  const pushEmployment = () => {
    history.push("employment/"+recruitId);
  } 

  return (
    <P.ItemsWrapper onClick={pushEmployment}>
      <P.Items>{recruitNum}</P.Items>
      <P.Items text>{entName}</P.Items>
      <P.Items>{reception}</P.Items>
    </P.ItemsWrapper>
  );
};

export default ItemsWrapper;