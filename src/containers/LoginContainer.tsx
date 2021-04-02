import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {baseURL} from '../const';
import Login from '../components/login/Login';

const LoginContainr = ({history}: any) => {
  const [isError,setIsError] = useState(false);
  const [errorMsg,setErrorMsg] = useState("wfef");
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  })
  const {id, password} = inputs;
  const onChange = (e: any) => {
    const { name, value } = e.target;
    const nextInputs = {
      ...inputs,
      [name]: value,
    }
    setInputs(nextInputs);
  }

  const enter = (e: any) => {
    if(e.key == "Enter"){
      submit();
    }
  }

  const submit = () => {
    axios({
      method:"POST",
      url: baseURL+'/signin/basic',
      data:{
        "id": id,
        "password": password
      }
    }).then((res: any)=>{
      localStorage.setItem("token",JSON.stringify(res.data.data.accessToken));
      localStorage.setItem("refresh",JSON.stringify(res.data.data.refreshToken));
      history.push("/");
    }).catch((err)=>{
      if(err.request.status === 400){
        setIsError(true);
        setErrorMsg("입력형식이 올바르지 않습니다.");
      }
      if(err.request.status === 403){
        setIsError(true);
        setErrorMsg("비밀번호가 틀렸습니다.");
      }
      if(err.request.status === 404){
        setIsError(true);
        setErrorMsg("존재하지 않는 아이디 입니다.");
      }
    })
  }

  const pushMain = () => {
    history.push('/');
  }

  return (
    <>
      <Login 
        inputs={inputs}
        keyPress={enter}
        submit={submit}
        change={onChange}
        error={isError}
        errorText={errorMsg}
        pushMain={pushMain}
      />
    </>
  )
}

export default withRouter(LoginContainr);