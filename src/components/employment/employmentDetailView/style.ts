import styled from 'styled-components'

type active = {
  fixed?: boolean;
}

export const Main = styled.div`
  display: flex;
  position: positive;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self:center;
  width: 71.0625rem;
  min-height: 100vh;
  margin: 0 auto;
`

export const Name = styled.div`
  position: positive;
  font-size: 1.75rem;
  margin-top: 4.375rem;
  color: #565656;
`

export const CompanyNumber = styled.div`
  position: positive;
  font-size: 1.0625rem;
  color: #CECECE;
`

export const DeadLine = styled.div`
  align-self: flex-end;
`

export const Text = styled.div`
  position: absolute;
  margin-top: -3.125rem;
  left: 0;
  font-size: 1.0625rem;
  color: #414141;
`
// -50px -200px

export const Pre = styled.pre`
  text-decoration: none;
  line-height: 25px;
  margin: 0;
  white-space: pre-wrap;
  font-family: "InfinitySans-RegularA1";
`

export const Introduce = styled.div`
  position: relative;
  width: 69rem;
  min-height: 9.0625rem;
  margin-top: 6.25rem;
  padding: 1.25rem;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  font-size: 0.975rem;
`

export const ComplexBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 69rem;
  min-height: 7.375rem;
  margin-top: 6.25rem;
  padding: 1.25rem;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  font-size: 0.9375rem;
`

export const BoxInner = styled.div`
  display: grid;
  grid-template-columns: 2fr 12fr;
  width: 100%;
  height: 1.4375rem;
  margin: 10px 0;
`

export const FileInner = styled.div`
  display: flex;
  width: 100%;
  height: 1.4375rem;
  margin: 10px 0;
`

export const InnerText = styled.div<active>`
  place-self: center;
  justify-self: start;
  font-size: 0.975rem;
  color: ${props => {
    if(props.fixed){
      return "#9B9B9B"
    }else{
      return "#565656"
    }
  }};
`

export const File = styled.a`
  place-self: center;
  justify-self: start;
  font-size: 0.875rem;
  margin-right: 20px;
  color: #9B9B9B;
  :hover{
    color: #1234a2;
  }
`

export const Back = styled.button`
  position: fixed;
  width: 5.8rem;
  height: 2.125rem;
  top: 7%;
  left: 2%;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
  background: ${props => props.theme.color.sub};
  opacity: 0.7;
  clip-path: polygon(100% 0%, 100% 48%, 100% 100%, 13% 100%, 0% 50%, 13% 0);
`

export const MarginDiv = styled.div`
  width: 100%;
  height: 10rem;
`