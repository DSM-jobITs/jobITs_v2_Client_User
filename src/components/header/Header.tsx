import React from 'react';
import * as S from './style';

const Header = () => {
  return (
    <div>
      <S.Main>
        <S.Inner>
          <S.Logo src="/src/assets/images/Logo.png" alt="로고"/>
          <S.NavWarp>
            <S.NavLink>채용의뢰</S.NavLink>
            <S.NavLink>공지사항</S.NavLink>
            <S.NavLink>면접</S.NavLink>
            <S.NavLink>기업</S.NavLink>
            <S.NavLink>FAQ</S.NavLink>
            {/* <S.Login>LOGIN</S.Login> */}
            <S.User>
              배길준 님
              <S.UserBox>
                <S.UserBoxItems>비밀번호 변경</S.UserBoxItems>
                <S.UserBoxItems>로그아웃</S.UserBoxItems>
              </S.UserBox>
            </S.User>
          </S.NavWarp>
        </S.Inner>
      </S.Main>
    </div>
  );
};

export default Header;