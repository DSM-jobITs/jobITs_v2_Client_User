import React,{ useState } from 'react';
import axios from 'axios';
import * as S from './style';
import { basicURL } from '../const';

const Password = ({history}:any) => {
  const [isError,setIsError] = useState(false);
  const [errorMsg,setErrorMsg] = useState("wfef");
  const [inputs, setInputs] = useState({
    checkPassword: '',
    oldPassword: '',
    newPassword: '',
  })

  const {checkPassword, oldPassword, newPassword} = inputs;
  const onChange = (e: any) => {
    const {name, value} = e.target;
    const nextInputs = {
      ...inputs,
      [name]: value
    }
    setInputs(nextInputs);
  }
  
  let token: any = localStorage.getItem("token");
  token = token.replace(/["]+/g, '');
  const headers = { 
    Authorization: "Bearer "+token
  }

  const submit = () => {
    if(checkPassword !== newPassword){
      setIsError(true);
      setErrorMsg("비밀번호를 확인해주세요.")
    } else if(checkPassword == '' || oldPassword == '' || newPassword == ''){
      setIsError(true);
      setErrorMsg("비밀번호를 확인해주세요.")
    } else {
      let pw = {
        newPw: newPassword,
        oldPw: oldPassword
      }
      axios.post(basicURL+"/signin/password/",pw,{headers})
      .then((res)=>{
        history.push("/");
      })
      .catch((err)=>{
        console.log(err.request.status);
      })
    }
  }

  return (
    <S.Main>
      <S.LoginForm>
        <S.LoginText text="main">PASSWORD</S.LoginText>
        <S.LoginText text="sub">8 ~ 20자 영어, 숫자, 특수기호</S.LoginText>
        <div>
          <S.Input 
            name="oldPassword"
            type="password" 
            placeholder="현재 비밀번호"
            onChange={onChange}
            value={oldPassword}
          />
        </div>
        <div>
          <S.Input 
            name="checkPassword"
            type="password" 
            placeholder="비밀번호" 
            onChange={onChange}
            value={checkPassword}
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
        <S.Submit onClick={submit}>비밀번호 변경</S.Submit>
        <S.ErrorText error={isError}>{errorMsg}</S.ErrorText>
      </S.LoginForm>
    </S.Main>
  );
};

export default Password;