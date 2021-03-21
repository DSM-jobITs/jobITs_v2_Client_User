import React, { useState } from 'react';
import axios from 'axios';
import {baseURL} from '../const';
import * as S from './filterStyle';
import * as C from './comboBoxStyle';

const FliterBox = ({setPosts}: any) => {
  const [inputs, setInputs] = useState({  
    entName: '',
    workContent: '',
    address: '',
  });
  const [numOfWorker,setNumOfWorker] = useState<any>(0);
  const { entName, workContent, address } = inputs;
  const onChange = (e: any) => {
    const { name, value } = e.target;
    const nextInputs = {
      ...inputs,
      [name]: value,
    }
    setInputs(nextInputs);
  }

  let token: any = localStorage.getItem("token");
  if(token){
    token = token.replace(/["]+/g, '');
  }
  const config = {
    headers : { Authorization: "Bearer "+token}
  }

  const memberSelect = (e: any) => {
    let set = Number(e.target.value);
    setNumOfWorker(set);
  }

  const checkInput = () => {
    /*검색창 3개가 모두 공백이면 검색 불가 및 검색 최소 글자 수 제한*/
    if(((inputs.entName != '') || (inputs.workContent != '') || (inputs.address != '')) 
      && (((inputs.entName.length > 1) || (inputs.entName == ''))
      && ((inputs.workContent.length > 1) || (inputs.workContent == ''))
      && ((inputs.address.length > 1) || (inputs.address == '')))) {

      /*axios로 필터링된 데이터 요청하기*/
      const response: any = axios.get(baseURL+"/recruit/search"+"?entName="+entName+"?workContent="+workContent+"?address="+address+"?numOfWorker="+numOfWorker,config);
      console.log(response);
      setPosts();
    }
  }

  return (
    <S.FilterBox>
      <S.Text>기업 검색</S.Text>
      <S.FilterBoxInner>
        <form>
          <C.Select id="member" name="member" onChange={memberSelect} >
            <option value="0" >인원</option>
            <option value="5" >5명 이상</option>
            <option value="20">20명 이상</option>
            <option value="50">50명 이상</option>
            <option value="100">100명 이상</option>
          </C.Select>
        </form>
        <div>
          <S.Search
            name="entName"
            type="text" 
            placeholder="기업 명"
            onChange={onChange}
            value={entName}
            minLength={2}
          />
          <S.Search 
            name="workContent"
            type="text" 
            placeholder="업무내용" 
            style={{marginLeft:21}} 
            onChange={onChange}
            value={workContent}
            minLength={2}
          />
          <S.Search 
            name="address"
            type="text"
            placeholder="지역" 
            style={{marginLeft:21}} 
            onChange={onChange}
            value={address}
            minLength={2}
          />
        </div>
        <div>
          {entName}:{workContent}:{address}:{numOfWorker}
        </div>
        <S.BottomWrapper>
          <S.FilterText>원하시는 검색 조건을 선택(2글자 이상 입력)하신 뒤에 결과를 조회해주세요. </S.FilterText>
          <S.SearchButton onClick={checkInput}>검색하기</S.SearchButton>
        </S.BottomWrapper>
      </S.FilterBoxInner>
    </S.FilterBox>
  );
};

export default FliterBox;