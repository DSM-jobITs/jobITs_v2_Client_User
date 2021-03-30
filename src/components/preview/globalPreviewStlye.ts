// Preview에서 보여주는 형식은 비슷하기 때문에 큰 틀은 여기서 가져가서 사용한다.
import styled from 'styled-components';

type name = {
  name?: string;
  text?: boolean;
}

export const Main = styled.div`
  position: relative;
  width: 85%;
  height: 85%;
  overflow: hidden;
`

export const Title = styled.div`
  position: relative;
  font-size: 1.4375rem;
  color: #4d4d4d;
`

export const ItemsTitleWrapper = styled.div<name>`
  display: grid;
  grid-template-columns: 2fr 10fr 3fr;
  width: 100%;
  height: 2.5625rem;
  margin-top: 0.9375rem;
  border-top: 2px solid #707070;
`

export const ItemsTitle = styled.div<name>`
  place-self: center;
  font-size: 1.075rem;
`

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr 3fr;
  width: 100%;
  height: 15.7%;
  cursor: pointer;
  overflow: hidden;
  :nth-child(even){
    background: #EAFFE0;
  }
  ::before{
    content:"";
    position:absolute;
    width: 90%;
    height: 60px;
    left: -90%;
    background: #2bff00;
    opacity: 0.1;
    transition: all ease-out 0.3s;
  }

  :hover::before{
    left: 0;
    width: 100%;
    height: 60px;
    background: #2bff00;
  }
`

export const Items = styled.div<name>`
  place-self: center;
  justify-self: ${props => {
    if(props.text) return "start"
  }};
  color: ${props => {
    if(!props.text) return props.theme.color.color
  }};

`


