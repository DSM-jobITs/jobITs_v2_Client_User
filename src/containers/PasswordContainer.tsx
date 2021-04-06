import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../const';
import Password from '../components/password/Password';

const PasswordContainer = ({history}: any) => {
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
  if(token){
    token = token.replace(/["]+/g, '');
    var headers = { 
      Authorization: "Bearer "+token
    }
  } else {
    alert("로그인 후 이용해 주세요");
    history.push('/login');
  }


  const enter = (e: any) => {
    if(e.key == "Enter"){
      e.preventDefault();
      submit();
    }
  }

  const submit = () => {
    if(checkPassword !== newPassword){
      setIsError(true);
      setErrorMsg("비밀번호가 일치하지 않습니다.");
    } else if(checkPassword == '' || oldPassword == '' || newPassword == ''){
      setIsError(true);
      setErrorMsg("비밀번호를 확인해주세요.");
    } else {
      let pw = {
        newPw: newPassword,
        oldPw: oldPassword
      }
      axios.post(baseURL+"/signin/password/",pw,{headers})
      .then((res)=>{
        history.push("/");
      })
      .catch((err)=>{
        if(err.request.status === 400){
          setIsError(true);
          setErrorMsg("비밀번호 입력형식이 올바르지 않습니다.");
        }
        if(err.request.status === 403){
          setIsError(true);
          setErrorMsg("비밀번호를 확인해주세요.");
        }
      })
    }
  }

  return (
    <>
      <Password
        change={onChange}
        keyPress={enter}
        submit={submit}
        error={isError}
        errorText={errorMsg}
        inputs={inputs}
      />
    </>
  );
};

export default PasswordContainer;