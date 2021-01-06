import React from 'react';
import * as S from './style';

const Password = () => {
  return (
    <S.Main>
      <S.LoginForm>
        <S.LoginText text="main">PASSWORD</S.LoginText>
        <S.LoginText text="sub">8 ~ 20자 영어, 숫자, 특수기호</S.LoginText>
        <div>
          <S.Input type="password" placeholder="현재 비밀번호" />
        </div>
        <div>
          <S.Input type="password" placeholder="비밀번호" />
        </div>
        <div>
          <S.Input type="password" placeholder="비밀번호 확인" />
        </div>
        <S.Submit>비밀번호 변경</S.Submit>
      </S.LoginForm>
    </S.Main>
  );
};

export default Password;