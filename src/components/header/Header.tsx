import React,{useState} from 'react';
import * as S from './style';

const Header = () => {
  const [isShow,setIsShow] = useState(false);
  const [isLogin,setIsLogin] = useState(false);

  const showUserBox = () => {
    setIsShow(!(isShow))
  }

  const login = () => {
    setIsLogin(true);
  }

  const logout = () => {
    setIsLogin(false);
  }

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
            {isLogin ? 
              <S.User onClick={showUserBox}>
                배길준 님
                <S.UserBox show={isShow}>
                  <S.UserBoxItems>비밀번호 변경</S.UserBoxItems>
                  <S.UserBoxItems onClick={logout}>로그아웃</S.UserBoxItems>
                </S.UserBox>
              </S.User> :
              <S.Login onClick={login}>LOGIN</S.Login>
            }
          </S.NavWarp>
        </S.Inner>
      </S.Main>
    </div>
  );
};

export default Header;