import styled from 'styled-components';

type fixed = {
  part?: boolean;
}

export const Main = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20.625rem;
  background: #303740;
`

export const Inner = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65.8125rem;
  height: 20.625rem;
`

export const DevelopWrap = styled.div`
  display:flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75%;
`

export const PartInner = styled.div`
  display:flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  height: 70%;
  padding: 30px;
`

export const Text = styled.div<fixed>`
  margin: 10px 0;
  font-weight: ${props => {
    if(props.part){
      return "bold"
    }else{
      return "inherit"
    }
  }};
  font-size: 1.125rem;
  color: #ffffff;
`

export const Information = styled.div`
  display:flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 19%;
`

export const Logo = styled.img`
  width: 6.875rem;
  height: 2.6875rem;
`

export const Icon = styled.img`
  
`