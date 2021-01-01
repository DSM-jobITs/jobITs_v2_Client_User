import React from 'react';
import * as S from './style';

const Login = () => {
  return (
    <S.Main>
      <S.LoginForm>
        <S.LoginText text="main">LOGIN</S.LoginText>
        <S.LoginText text="welcome">Welcome to jobITs</S.LoginText>
        <S.LoginText text="sub">Login to jobITs and use various features.</S.LoginText>
        <S.Input type="id" placeholder="id" />
        <S.Input type="password" placeholder="password" />
        <S.Submit>Sign in</S.Submit>
      </S.LoginForm>
    </S.Main>
  );
};

export default Login;