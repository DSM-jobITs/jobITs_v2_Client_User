import React, { useState } from 'react';
import axios from 'axios';
import * as S from './style'; 

const Login = () => {
  const [isError,setIsError] = useState(false);
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

  const submit = () => {
    axios({
      method:"POST",
      url: '/signin/basic',
      data:{
        "id": id,
        "password": password
      }
    }).then((res)=>{
      console.log(res);
      // localStorage.setItem("token",JSON.stringify(res.accessToken));
      // localStorage.setItem("refresh",JSON.stringify(res.refreshToken));
    }).catch(error=>{
      console.log(error);
      setIsError(true);
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
          />
        </div>
        <S.ErrorText error={isError}>아이디 혹은 비밀번호가 틀렸습니다.</S.ErrorText>
        <S.Submit>Sign in</S.Submit>
      </S.LoginForm>
    </S.Main>
  );
};

export default Login;