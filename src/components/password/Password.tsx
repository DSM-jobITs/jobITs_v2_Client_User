import React from 'react';
import * as S from './style';

const Password = ({inputs, change, keyPress, submit, error, errorText}:any) => {
  const {checkPassword, oldPassword, newPassword} = inputs;

  return (
    <S.Main>
      <S.LoginForm>
        <S.LoginText text="main">PASSWORD</S.LoginText>
        <S.LoginText text="sub">6 ~ 20자 영어, 숫자, 특수기호</S.LoginText>
        <form>
          <S.Input 
            name="oldPassword"
            type="password" 
            placeholder="현재 비밀번호"
            onKeyPress={keyPress}
            onChange={change}
            value={oldPassword}
            autoComplete="on"
          />
        </form>
        <form>
          <S.Input 
            name="checkPassword"
            type="password" 
            placeholder="비밀번호"
            required
            maxLength={20}
            onKeyPress={keyPress}
            onChange={change}
            value={checkPassword}
            autoComplete="on"
          />
        </form>
        <form>
          <S.Input 
            name="newPassword"
            type="password" 
            placeholder="비밀번호 확인" 
            required
            maxLength={20}
            onChange={change}
            onKeyPress={keyPress}
            value={newPassword}
            autoComplete="on"
          />
        </form>
        <S.Submit onClick={submit}>비밀번호 변경</S.Submit>
        <S.ErrorText error={error}>{errorText}</S.ErrorText>
      </S.LoginForm>
    </S.Main>
  );
};

export default Password;