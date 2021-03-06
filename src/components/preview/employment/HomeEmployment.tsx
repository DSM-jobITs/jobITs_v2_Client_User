import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import * as P from '../globalPreviewStlye';
import axios from 'axios';
import {baseURL} from '../../../const';
import ItemsWrapper from './ItemsWrapper';


const HomeEmployment = () => {
  const [datas,setDatas] = useState<any>([]);

  const history = useHistory();

  useEffect(()=>{
    const fetchData = () => {
      axios.get(baseURL+'/home/notice').then((res)=>{
        setDatas(res.data.data.recruit_list);
      }).catch((err)=>{
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
        (datas!==undefined) &&
        datas.map( (d:any) => (
          <ItemsWrapper
            key={d.recruit_no}
            recruitNum={d.recruit_no}
            entName={d.enterprise_name}
            reception={d.recruit_reception}
            recruitId={d.recruit_id}
          />
        ))
      }
    </P.Main>
  );
};

export default HomeEmployment;