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
  /* background-color: #333; */
`

export const Title = styled.div`
  position: relative;
  font-size: 1.4375rem;
  color: #4d4d4d;
`

export const ItemsTitleWarpper = styled.div<name>`
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

export const ItemsWarpper = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr 3fr;
  width: 100%;
  height: 16.5%;
  cursor: pointer;
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


