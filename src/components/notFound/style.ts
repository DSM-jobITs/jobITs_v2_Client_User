import styled from 'styled-components';

type select = {
  type: string;
}

export const Main = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`

export const NotFound = styled.img`
  margin-bottom: -20px;
`

export const Text = styled.div<select>`
  margin-bottom: 10px;
  font-size: ${props => {
    if(props.type === 'kr'){
      return 1.375
    } else if(props.type === 'en'){
      return 2.8125
    }
  }}rem;
  color: ${props => {
    if(props.type === 'kr'){
      return props.theme.color.color
    } else if(props.type === 'en'){
      return '#202020'
    }
  }};
`

export const ButtonWarpper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`

export const Button = styled.a<select>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 8.75rem;
  height: 3.0625rem;
  margin: 20px;
  border: 3px solid ${props => props.theme.color.main};
  border-radius: 5px;
  box-shadow: 3px 3px 6px rgba(0,0,0,0.16);
  background: ${props => {
    if(props.type === 'back'){
      return props.theme.color.main
    } else if(props.type === 'main'){
      return '#ffffff'
    }
  }};
  color: ${props => {
    if(props.type === 'back'){
      return '#ffffff'
    } else if(props.type === 'main'){
      return props.theme.color.main
    }
  }};
  font-size: 1.1625rem;
  text-decoration: none;
  cursor: pointer;
`