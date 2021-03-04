import styled from 'styled-components';

type message = {
  text?: string;
  error?: boolean;
}

export const Main = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 87.5vh;
`

export const LoginForm = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 52.3125rem;
  height: 42.875rem;
  border: 3px solid ${props => props.theme.color.main};
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(0,0,0,16%);
  background: #ffffff;
`

export const LoginText = styled.p<message>`
  margin: 5px;
  font-size: 3.3125rem;
  font-size: ${props => {
    if(props.text === "main"){ // mainText 일 때 font-size
      return 3.3125
    } else if(props.text === "welcome"){ // welcomeText 일 때 font-size
      return 2.3125
    } else if(props.text === "sub"){ // subText 일 때 font-size
      return 1.6875
    }
  }}rem;
  color: ${props => {
    if(props.text === "main"){
      return props.theme.color.sub
    } else if(props.text === "sub"){
      return props.theme.color.color
    } 
  }};
`

export const Input = styled.input`
  position: relative;
  width: 30.3125rem;
  height: 3.875rem;
  margin-top: 20px;
  padding: 0 20px;
  border: 3px solid ${props => props.theme.color.color};
  font-size: 1.5625rem;
  :focus{
    outline: none;
    border: 3px solid ${props => props.theme.color.main};
  }
`

export const ErrorText = styled.div<message>`
  /* position: absolute; */
  /* visibility: ${props => {
    if(props.error){
      return "visible"
    }else{
      return "hidden"
    }
  }}; */
  color: #ff1f1f;
`

export const Submit = styled.button`
  width: 33.3125rem;
  height: 4.275rem;
  margin: 1.875rem;
  border: none;
  font-size: 1.375rem;
  background: ${props => props.theme.color.main};
  color: #ffffff;
  transition: background 0.2s;
  outline: none;
  cursor: pointer;
  :hover{
    background: ${props => props.theme.color.sub};
  }
`