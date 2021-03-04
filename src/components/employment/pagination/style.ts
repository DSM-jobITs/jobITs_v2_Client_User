import styled from 'styled-components';

export const PageUl = styled.ul`
  list-style: none;
  text-align:center;
  border-radius:3px;
  color:#000;
  padding:1px;
  margin-top: 100px;
`;

export const PageLi = styled.li`
  display:inline-block;
  font-size:17px;
  font-weight:600;
  padding:5px;
  border: 1px solid #B7B7B8;
  width:25px;
  :hover{
    cursor:pointer;
    color:white;
  border: 1px solid ${props=>props.theme.color.main};
    background-color: ${props=>props.theme.color.main};
  }
  :focus::after{
    color:white;
    background-color:#263A6C;
  }
`;