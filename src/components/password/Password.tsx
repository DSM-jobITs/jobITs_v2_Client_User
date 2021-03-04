import React,{ useState } from 'react';
import * as S from './style';

const Password = () => {
  const [isFine,setIsFine] = useState(true);
  const [inputs, setInputs] = useState({
    password: '',
    currentPassword: '',
    newPassword: '',
  })

  const {password, currentPassword, newPassword} = inputs;
  const onChange = (e: any) => {
    const {name, value} = e.target;
    const nextInputs = {
      ...inputs,
      [name]: value
    }
    setInputs(nextInputs);
  }

  const checkPassword = () => {
    if(password !== newPassword){
      setIsFine(false);
    }
  }

  return (
    <S.Main>
      <S.LoginForm>
        <S.LoginText text="main">PASSWORD</S.LoginText>
        <S.LoginText text="sub">8 ~ 20자 영어, 숫자, 특수기호</S.LoginText>
        <div>
          <S.Input 
            name="currentPassword"
            type="password" 
            placeholder="현재 비밀번호"
            onChange={onChange}
            value={currentPassword}
          />
        </div>
        <div>
          <S.Input 
            name="password"
            type="password" 
            placeholder="비밀번호" 
            onChange={onChange}
            value={password}
          />
        </div>
        <div>
          <S.Input 
            name="newPassword"
            type="password" 
            placeholder="비밀번호 확인" 
            onChange={onChange}
            value={newPassword}
          />
        </div>
        <S.Submit onClick={checkPassword}>비밀번호 변경</S.Submit>
        <div>{currentPassword}-{password}-{newPassword}</div>
        <S.ErrorText>tlqkf</S.ErrorText>
      </S.LoginForm>
    </S.Main>
  );
};

export default Password;