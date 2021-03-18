import React, { useEffect, useState } from 'react';
import * as P from '../globalPreviewStlye';
import ItemsWrapper from './ItemsWrapper';
import axios from 'axios';

const Employment = () => {
  const [datas,setDatas] = useState<any>([]);

  useEffect(()=>{
    const fetchData = async () => {
      const response = await axios.get('url');
      setDatas(response.data);
    }
    fetchData();
  },[])

  return (
    <P.Main>
      <P.Title>채용 의뢰</P.Title>
      <P.ItemsTitleWrapper name="Employment"> {/* name으로 구별하여 공지사항인지 채용 공고인지 취업 현황인지에 따라 grid를 다르게 준다. */}
        <P.ItemsTitle name="Number">no</P.ItemsTitle>
        <P.ItemsTitle name="Name">기업</P.ItemsTitle>
        <P.ItemsTitle name="Date">등록일</P.ItemsTitle>
      </P.ItemsTitleWrapper>
      {
        datas &&
        datas.map( (d:any) => (
          <ItemsWrapper
            no={d.no}
            title={d.title}
            date={d.date}
          />
        ))
      }
    </P.Main>
  );
};

export default Employment;