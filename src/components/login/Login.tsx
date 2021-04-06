import React from 'react';
import { withRouter } from 'react-router-dom';
import * as S from './style'; 

const Login = React.memo(({inputs, keyPress, submit, change, error, errorText, pushMain}:any) => {
  const {id, password} = inputs;

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
            onChange={change}
            value={id}
          />
        </div>
        <form>
          <S.Input
            name="password"
            type="password"
            placeholder="password"
            onChange={change}
            value={password}
            onKeyPress={keyPress}
            autoComplete="on"
          />
        </form>
        <S.ErrorText error={error}>{errorText}</S.ErrorText>
        <S.Submit onClick={submit}>Sign in</S.Submit>
      </S.LoginForm>
      <S.Button onClick={pushMain}>메인으로</S.Button>
    </S.Main>
  );
});

export default withRouter(Login);