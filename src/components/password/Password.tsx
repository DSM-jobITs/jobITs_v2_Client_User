import React,{ useState } from 'react';
import axios from 'axios';
import * as S from './style';

const Password = () => {
  const [isError,setIsError] = useState(false);
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
      setIsError(false);
    }
  }

  const submit = () => {
    axios({
      method:"POST",
      url: '/signin/password',
      data:{
        "oldPw": currentPassword,
        "newPw": newPassword
      }
    }).then((res)=>{
      console.log(res);
    }).catch((error)=>{
      console.log(error);
      setIsError(true);
    })
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
        <S.ErrorText error={isError}>비밀번호가 일치하지 않습니다.</S.ErrorText>
      </S.LoginForm>
    </S.Main>
  );
};

export default Password;