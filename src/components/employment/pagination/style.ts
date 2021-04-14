import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.25rem;
`

export const PageUl = styled.div`
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
  border: 1px solid #B7B7B7;
  width:2.5rem;
  height: 1.9rem;
  cursor:pointer;
  background: #fff;
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