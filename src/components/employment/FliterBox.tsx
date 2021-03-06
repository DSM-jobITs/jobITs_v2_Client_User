import React, { useState } from 'react';
import axios from 'axios';
import {baseURL} from '../../const';
import * as S from './filterStyle';
import * as C from './comboBoxStyle';

const FliterBox = ({setPosts}: any) => {
  const [inputs, setInputs] = useState({  
    entName: '',
    workContent: '',
    address: '',
  });
  const [numOfWorker,setNumOfWorker] = useState<any>(0);
  const [errorText, setErrorEext] = useState(false);

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
    headers : { Authorization: "Bearer "+token }
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
      setErrorEext(false);
      /*axios로 필터링된 데이터 요청하기*/
      axios({
        url: baseURL+"/recruit/search",
        method: "GET",
        params: {
          entName:entName,
          workContent:workContent,
          address:address,
          numOfWorker: numOfWorker
        },
        headers: config.headers
      }).then((res)=>{
        setPosts(res.data.data.list);
      })
    } else {
      setErrorEext(true);
    }
  }

  const resetInput = () => {
    axios({
      url: baseURL+"/recruit/basic",
      method: "GET",
      headers: config.headers
    }).then((res)=>{
      setInputs({entName:"",workContent:"",address:""});
      setNumOfWorker(0);
      setPosts(res.data.data.list);
      setErrorEext(false);
    })
  }

  const enter = (e: any) => {
    if(e.key == "Enter"){
      checkInput();
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
            onKeyPress={enter}
          />
          <S.Search 
            name="workContent"
            type="text" 
            placeholder="특기사항" 
            style={{marginLeft:21}} 
            onChange={onChange}
            value={workContent}
            minLength={2}
            onKeyPress={enter}
          />
          <S.Search 
            name="address"
            type="text"
            placeholder="지역" 
            style={{marginLeft:21}} 
            onChange={onChange}
            value={address}
            minLength={2}
            onKeyPress={enter}
          />
        </div>
        <S.BottomWrapper>
          <S.FilterText>원하시는 검색 조건을 선택(2글자 이상 입력)한 후 결과를 조회해주세요. </S.FilterText>
          <S.ResetButton onClick={resetInput}>초기화</S.ResetButton>
          <S.SearchButton onClick={checkInput}>검색하기</S.SearchButton>
          <S.SearchAlert error={errorText}>2글자 이상 입력해주세요.</S.SearchAlert>
        </S.BottomWrapper>
      </S.FilterBoxInner>
    </S.FilterBox>
  );
};

export default FliterBox;