import styled from 'styled-components';

type message = {
  text?: string;
  error?: boolean;
}

export const Main = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 87.5vh;
`

export const Rabbit = styled.img`
  position: absolute;
  width: 50px;
  top: -20.5%;
  left: 20px;
`

export const LoginForm = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  width: 52.3125rem;
  height: 42.875rem;
  border: 3px solid ${props => props.theme.color.main};
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(0,0,0,16%);
  background: #ffffff;
`

export const LoginText = styled.p<message>`
  margin: 0.3125rem;
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
  width: 36.3125rem;
  height: 4.875rem;
  margin-top: 1.25rem;
  padding: 0 1.25rem;
  border: 0.1875rem solid ${props => props.theme.color.color};
  font-size: 1.5625rem;
  :focus{
    outline: none;
    border: 0.1875rem solid ${props => props.theme.color.main};
  }
`

export const ErrorText = styled.div<message>`
  visibility: ${props => {
    if(props.error){
      return "visible"
    }else{
      return "hidden"
    }
  }};
  margin-top: 0.3125rem;
  color: #ff1f1f;
`

export const Submit = styled.button`
  width: 39.1875rem;
  height: 5.25rem;
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

export const Button = styled.button`
  width: 6.25rem;
  height: 3.125rem;
  margin-top: 1.25rem;
  outline: none;
  border: none;
  background: ${props => props.theme.color.main};
  transition: background 0.2s;
  color: white;
  cursor: pointer;

  :hover{
    background: ${props => props.theme.color.sub};
  }
`