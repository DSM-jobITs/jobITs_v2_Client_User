import styled from 'styled-components';

export const Div = styled.div`
  position: fixed;
  display: flex;
  top: 50%;
  left: 20%;
  justify-content: center;
  align-items: center;
  height: 6.25rem;
`

export const PageUl = styled.div`
  display: flex;
  flex-direction: column;
  text-align:center;
  border-radius:3px;
  color:#000;
  padding:1px;
  /* margin-top: 100px; */
`;

export const PageLi = styled.button`
  display:inline-block;
  font-size:14px;
  padding:5px;
  border: none;
  border-radius: 50%;
  margin-bottom: 10px;
  width:2.5rem;
  height: 2.5rem;
  cursor:pointer;
  background: #f2ffe6;
  :focus{
    outline: none;
    color:white;
    background-color: ${props=>props.theme.color.main};
  }
  :hover{
    color:white;
    border: 1px solid ${props=>props.theme.color.main};
    background-color: ${props=>props.theme.color.main};
  }
`;