import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {baseURL} from '../../const';
import { Link, withRouter } from 'react-router-dom';
import {logo} from '../../assets/images/index';
import * as S from './style';

const Header = ({history}: any) => {
  const [isShow,setIsShow] = useState(false);
  const [name,setName] = useState("");
  const [isLogin,setIsLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(()=>{
    const fetchData = async () =>{
      let token: any = localStorage.getItem("token");
      if(token){
        token = token.replace(/["]+/g, '');
        const config = {
          headers : { Authorization: "Bearer "+token}
        }
        const response: any = await axios.get(baseURL+"/info/name",config);
        setName(response.data.data.name);
        setIsLogin(true);
      }
    }
    setTimeout(() => {
      setIsVisible(true);
    }, 160);
    fetchData();
  },[])

  const activeStyle = {
    color: "#006004"
  }

  const showUserBox = () => {
    setIsShow(!(isShow))
  }

  const logout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    history.push("/");
  }

  return (
    <div>
      <S.Main>
        <S.Inner>
          <Link to="/">
            <S.Logo src={logo} alt="로고"/>
          </Link>
          <S.NavWarp>
            <S.NavItem to='/employment' activeStyle={activeStyle}>채용의뢰</S.NavItem>
            {/* <S.NavItem to='/warning' activeStyle={activeStyle}>공지사항</S.NavItem>
            <S.NavItem to='/warning' activeStyle={activeStyle}>면접</S.NavItem>
            <S.NavItem to='/warning' activeStyle={activeStyle}>기업</S.NavItem>
            <S.NavItem to='/warning' activeStyle={activeStyle}>FAQ</S.NavItem> */}
            <S.Visible show={isVisible}>
            {isLogin ? 
              <S.User onClick={showUserBox}>
                {name} 님
                <S.UserBox show={isShow}>
                  <Link style={{margin:"auto",marginTop:"25px",textDecoration:"none"}} to="/password">
                    <S.UserBoxItems>비밀번호 변경</S.UserBoxItems>
                  </Link>
                  <S.UserBoxItems onClick={logout}>로그아웃</S.UserBoxItems>
                </S.UserBox>
              </S.User> :
              <S.Login to="/login" as={Link}>LOGIN</S.Login>
            }
            </S.Visible>
          </S.NavWarp>
        </S.Inner>
      </S.Main>
    </div>
  );
};

export default withRouter(Header);