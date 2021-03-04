import React, { useDebugValue, useEffect, useState } from 'react';
import * as S from './style';
import * as C from './comboBoxStyle';
import { stringify } from 'querystring';

const FliterBox = () => {
  const [inputs, setInputs] = useState({  
    company: '',
    work: '',
    location: '',
  });
  const [members,setMembers] = useState(null);

  const { company, work, location } = inputs;

  const onChange = (e: any) => {
    const { name, value } = e.target;
    const nextInputs = {
      ...inputs,
      [name]: value,
    }
    setInputs(nextInputs);
  }

  const memberSelect = (e: any) => {
    const set = e.target.value;
    setMembers(set);
  }

  const checkInput = () => {
    /*검색창 3개가 모두 공백이면 검색 불가 및 검색 최소 글자 수 제한*/
    if(((inputs.company != '') || (inputs.work != '') || (inputs.location != '')) 
      && (((inputs.company.length > 1) || (inputs.company == ''))
      && ((inputs.work.length > 1) || (inputs.work == ''))
      && ((inputs.location.length > 1) || (inputs.location == '')))) {
      console.log(inputs);
      /*axios로 필터링된 데이터 요청하기*/
    }
  }

  return (
    <S.FilterBox>
      <S.Text>기업 검색</S.Text>
      <S.FilterBoxInner>
        <form>
          <C.Select id="member" name="member" onChange={memberSelect} >
            <option value="" >인원</option>
            <option value="5" >5명 이상</option>
            <option value="20">20명 이상</option>
            <option value="50">50명 이상</option>
            <option value="100">100명 이상</option>
          </C.Select>
        </form>
        <div>
          <S.Search
            name="company"
            type="text" 
            placeholder="기업 명"
            onChange={onChange}
            value={company}
            minLength={2}
          />
          <S.Search 
            name="work"
            type="text" 
            placeholder="업무내용" 
            style={{marginLeft:21}} 
            onChange={onChange}
            value={work}
            minLength={2}
          />
          <S.Search 
            name="location"
            type="text"
            placeholder="지역" 
            style={{marginLeft:21}} 
            onChange={onChange}
            value={location}
            minLength={2}
          />
        </div>
        <div>
          {company}:{work}:{location}
        </div>
        <S.BottomWrapper>
          <S.FilterText>원하시는 검색 조건을 선택(입력)하신 뒤에 결과를 조회해주세요.</S.FilterText>
          <S.SearchButton onClick={checkInput}>검색하기</S.SearchButton>
        </S.BottomWrapper>
      </S.FilterBoxInner>
    </S.FilterBox>
  );
};

export default FliterBox;