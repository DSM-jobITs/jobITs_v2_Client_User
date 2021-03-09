import React, { useState } from 'react';
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

  return (
    <S.Main>
      <S.LoginForm>
        <S.Rabbit src='/src/assets/images/Rabbit.png' alt="토끼" />
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