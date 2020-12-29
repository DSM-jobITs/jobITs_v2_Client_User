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
  :hover{
    transform: scale(1.01);
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