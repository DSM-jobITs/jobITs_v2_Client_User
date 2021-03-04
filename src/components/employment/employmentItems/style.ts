import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  flex-direction: column;
  padding: 1.25rem 2.5rem;
  margin-bottom: 20px;
  width: 57.1875rem;
  height: 13.75rem;
  border-radius: 16px;
  box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
  background: #fff;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  overflow: hidden;

  ::before{
    content:"";
    position: absolute;
    bottom: -1200px;
    left: -65px;
    width: 1200px;
    height: 1200px;
    margin-left: -40px;
    background: #AEF98E;
    border-radius: 600px;
    opacity: 0.1;
    transition: bottom ease-out 0.2s;
  }

  :hover::before{
    bottom: -400px;
  }
`

export const CompanyName = styled.div`
  font-size: 1.4375rem;
`

export const Introduce = styled.div`
  color: #ABABAB;
  font-size: 0.9375rem;
`

export const Skills = styled.div`
  color: #828282;
  font-size: 0.9375rem;
`

export const DeadLine = styled.div`
  align-self: flex-end;
  font-size: 0.9375rem;
`