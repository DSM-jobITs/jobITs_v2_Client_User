import React, { useEffect, useState } from 'react';
import * as P from '../globalPreviewStlye';
import ItemsWrapper from './ItemsWrapper';
import axios from 'axios';
import {basicURL} from '../../const';

const Employment = () => {
  const [datas,setDatas] = useState<any>([]);

  useEffect(()=>{
    const fetchData = () => {
      axios.get(basicURL+'/home/notice').then((res)=>{
        setDatas(res.data);
      }).catch((err)=>{
        console.log(err.message);
      })
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
            recruitNum={d.recruitNum}
            entName={d.entName}
            reception={d.reception}
          />
        ))
      }
    </P.Main>
  );
};

export default Employment;