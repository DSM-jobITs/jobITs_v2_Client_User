import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {basicURL} from '../const';
import { Link } from 'react-router-dom';
import * as S from './style';

const Header = () => {
  const [isShow,setIsShow] = useState(false);
  const [name,setName] = useState("");
  const [isLogin,setIsLogin] = useState(false);

  useEffect(()=>{
    const fetchData = async () =>{
      let token: any = localStorage.getItem("token");
      token = token.replace(/["]+/g, '');
      const config = {
        headers : { Authorization: "Bearer "+token}
      }
      console.log(config);
      if(token){
        const response: any = await axios.get(basicURL+"/info/name",config);
        setName(response.data.data.name);
        setIsLogin(true);
      }
    }
    fetchData();
  },[])
  
  const showUserBox = () => {
    setIsShow(!(isShow))
  }

  const logout = () => {
    localStorage.removeItem("token");
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
                {name} 님
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