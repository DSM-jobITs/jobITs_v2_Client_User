import React, { useState } from 'react';
import * as S from './style';

const Login = () => {
  const [isError,setIsError] = useState(true);

  return (
    <S.Main>
      <S.LoginForm>
        <S.LoginText text="main">LOGIN</S.LoginText>
        <S.LoginText text="welcome">Welcome to jobITs</S.LoginText>
        <S.LoginText text="sub">Login to jobITs and use various features.</S.LoginText>
        <div>
          <S.Input type="id" placeholder="id" />
        </div>
        <div>
          <S.Input type="password" placeholder="password" />
          <S.ErrorText error={isError}>존재하지 않는 아이디 혹은 비밀번호가 틀렸습니다.</S.ErrorText>
        </div>
        <S.Submit>Sign in</S.Submit>
      </S.LoginForm>
    </S.Main>
  );
};

export default Login;