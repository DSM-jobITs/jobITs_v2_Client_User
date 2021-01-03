import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Header = () => {
  const [isShow,setIsShow] = useState(false);
  const [isLogin,setIsLogin] = useState(false);

  const showUserBox = () => {
    setIsShow(!(isShow))
  }

  const logout = () => {
    setIsLogin(false);
  }

  return (
    <div>
      <S.Main>
        <S.Inner>
          <Link to="/">
            <S.Logo src="/src/assets/images/Logo.png" alt="로고"/>
          </Link>
          <S.NavWarp>
            <S.NavItem to='/employment'>채용의뢰</S.NavItem>
            <S.NavItem to='/employment'>공지사항</S.NavItem>
            <S.NavItem to='/employment'>면접</S.NavItem>
            <S.NavItem to='/employment'>기업</S.NavItem>
            <S.NavItem to='/employment'>FAQ</S.NavItem>
            {isLogin ? 
              <S.User onClick={showUserBox}>
                배길준 님
                <S.UserBox show={isShow}>
                  <S.UserBoxItems>비밀번호 변경</S.UserBoxItems>
                  <S.UserBoxItems onClick={logout}>로그아웃</S.UserBoxItems>
                </S.UserBox>
              </S.User> :
              <S.Login to="/login" as={Link}>LOGIN</S.Login>
            }
          </S.NavWarp>
        </S.Inner>
      </S.Main>
    </div>
  );
};

export default Header;