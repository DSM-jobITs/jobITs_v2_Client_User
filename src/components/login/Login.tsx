import React, { useState } from 'react';
import axios from 'axios';
import {baseURL} from '../const';
import * as S from './style'; 

const Login = ({history}: any) => {
  const [isError,setIsError] = useState(false);
  const [errorMsg,setErrorMsg] = useState("wfef");
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  })

  const {id, password} = inputs;
  const onChange = (e: any) => {
    const { name, value } = e.target;
    const nextInputs = {
      ...inputs,
      [name]: value,
    }
    setInputs(nextInputs);
  }

  const enter = (e: any) => {
    if(e.key == "Enter"){
      submit();
    }
  }

  const submit = () => {
    axios({
      method:"POST",
      url: baseURL+'/signin/basic',
      data:{
        "id": id,
        "password": password
      }
    }).then((res: any)=>{
      localStorage.setItem("token",JSON.stringify(res.data.data.accessToken));
      localStorage.setItem("refresh",JSON.stringify(res.data.data.refreshToken));
      history.push("/");
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
        <S.Rabbit src='/src/assets/images/Rabbit.png' alt="rabbit" />
        <S.LoginText text="main">LOGIN</S.LoginText>
        <S.LoginText text="welcome">Welcome to jobITs</S.LoginText>
        <S.LoginText text="sub">로그인하여 다양한 기업정보를 확인해보세요.</S.LoginText>
        <div>
          <S.Input
            name="id"
            type="id" 
            placeholder="id"
            onChange={onChange}
            value={id}
          />
        </div>
        <div>
          <S.Input
            name="password"
            type="password"
            placeholder="password"
            onChange={onChange}
            value={password}
            onKeyPress={enter}
          />
        </div>
        <S.ErrorText error={isError}>{errorMsg}</S.ErrorText>
        <S.Submit onClick={submit}>Sign in</S.Submit>
      </S.LoginForm>
    </S.Main>
  );
};

export default Login;