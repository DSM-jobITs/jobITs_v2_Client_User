import React, { useState } from 'react';
import axios from 'axios';
import { withRouter, useHistory } from 'react-router-dom';
import {baseURL} from '../../const'
import * as S from './style'; 

const Login = () => {
  const [isError,setIsError] = useState(false);
  const [errorMsg,setErrorMsg] = useState("wfef");
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  })
  const history = useHistory();

  const onChange = (e: any) => {
    const { name, value } = e.target;
    const nextInputs = {
      ...inputs,
      [name]: value,
    }
    setInputs(nextInputs);
  }

  const enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      e.preventDefault();
      submit()
    };
  }

  const pushMain = () => {
    history.push('/');
  }

  const submit = () => {
    axios.post(baseURL+"/signin/basic",{
        "id": inputs.id,
        "password": inputs.password
    }).then((res: any)=>{
      localStorage.setItem("token",JSON.stringify(res.data.data.accessToken));
      localStorage.setItem("refresh",JSON.stringify(res.data.data.refreshToken));
      pushMain();
    }).catch((err)=>{
      if(err.request.status === 400){
        setIsError(true);
        setErrorMsg("입력형식이 올바르지 않습니다.");
      }
      if(err.request.status === 403){
        setIsError(true);
        setErrorMsg("비밀번호가 틀렸습니다.");
      }
      if(err.request.status === 404){
        setIsError(true);
        setErrorMsg("존재하지 않는 아이디 입니다.");
      }
    })
  }

  return (
    <S.Main>
      <S.LoginForm>
        <S.LoginText text="main">LOGIN</S.LoginText>
        <S.LoginText text="welcome">Welcome to jobITs</S.LoginText>
        <S.LoginText text="sub">로그인하여 다양한 기업정보를 확인해보세요.</S.LoginText>
        <div>
          <S.Input
            name="id"
            type="id" 
            placeholder="email"
            onChange={onChange}
            value={inputs.id}
          />
        </div>
        <form>
          <S.Input
            name="password"
            type="password"
            placeholder="password"
            onChange={onChange}
            value={inputs.password}
            onKeyPress={enter}
            autoComplete="on"
          />
        </form>
        <S.ErrorText error={isError}>{errorMsg}</S.ErrorText>
        <S.Submit onClick={submit}>Sign in</S.Submit>
      </S.LoginForm>
      <S.Button onClick={pushMain}>메인으로</S.Button>
    </S.Main>
  );
};

export default withRouter(Login);



