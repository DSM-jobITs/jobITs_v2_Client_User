import React,{ useState } from 'react';
import axios from 'axios';
import * as S from './style';
import { baseURL } from '../../const';

const Password = ({history}:any) => {
  const [isError,setIsError] = useState(false);
  const [errorMsg,setErrorMsg] = useState("wfef");
  const [inputs, setInputs] = useState({
    checkPassword: '',
    oldPassword: '',
    newPassword: '',
  })

  const {checkPassword, oldPassword, newPassword} = inputs;
  const onChange = (e: any) => {
    const {name, value} = e.target;
    const nextInputs = {
      ...inputs,
      [name]: value
    }
    setInputs(nextInputs);
  }
  
  let token: any = localStorage.getItem("token");
  token = token.replace(/["]+/g, '');
  const headers = { 
    Authorization: "Bearer "+token
  }

  const enter = (e: any) => {
    if(e.key == "Enter"){
      submit();
    }
  }

  const submit = () => {
    if(checkPassword !== newPassword){
      setIsError(true);
      setErrorMsg("비밀번호가 일치하지 않습니다.");
    } else if(checkPassword == '' || oldPassword == '' || newPassword == ''){
      setIsError(true);
      setErrorMsg("비밀번호를 확인해주세요.");
    } else {
      let pw = {
        newPw: newPassword,
        oldPw: oldPassword
      }
      axios.post(baseURL+"/signin/password/",pw,{headers})
      .then((res)=>{
        history.push("/");
      })
      .catch((err)=>{
        if(err.request.status === 400){
          setIsError(true);
          setErrorMsg("비밀번호 입력형식이 올바르지 않습니다.");
        }
        if(err.request.status === 403){
          setIsError(true);
          setErrorMsg("비밀번호를 확인해주세요.");
        }
      })
    }
  }

  return (
    <S.Main>
      <S.LoginForm>
        <S.LoginText text="main">PASSWORD</S.LoginText>
        <S.LoginText text="sub">6 ~ 20자 영어, 숫자, 특수기호</S.LoginText>
        <div>
          <S.Input 
            name="oldPassword"
            type="password" 
            placeholder="현재 비밀번호"
            onChange={onChange}
            value={oldPassword}
          />
        </div>
        <div>
          <S.Input 
            name="checkPassword"
            type="password" 
            placeholder="비밀번호"
            required
            maxLength={20}
            onChange={onChange}
            value={checkPassword}
          />
        </div>
        <div>
          <S.Input 
            name="newPassword"
            type="password" 
            placeholder="비밀번호 확인" 
            required
            maxLength={20}
            onChange={onChange}
            onKeyPress={enter}
            value={newPassword}
          />
        </div>
        <S.Submit onClick={submit}>비밀번호 변경</S.Submit>
        <S.ErrorText error={isError}>{errorMsg}</S.ErrorText>
      </S.LoginForm>
    </S.Main>
  );
};

export default Password;