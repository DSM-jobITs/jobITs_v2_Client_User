import styled from 'styled-components';
import { Link } from 'react-router-dom';

type active = {
  active: boolean;
  use?: boolean;
}

export const Preview = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 57rem;
`

export const NoticeImg = styled.img`
  width: 20.25rem;
  height: 7.5rem;
  margin-top: 2rem;
`

export const PreviewNav = styled.div`
  display: flex;
  position: relative;
  width: 65.8125rem;
  height: 4.0625rem;
  background: #F5F5F5;
  margin: 2.6rem 0;
  box-shadow: 0 3px 6px rgba(0,0,0,0.2); 
`

export const Type = styled.div<active>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
  background: ${props => {
    if(props.active) return props.theme.color.main
  }};
  color: ${props => {
    if(props.active) return "white";
    if(!props.use) return "#C6C6C6";
  }};
`

export const PreviewTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 65.8125rem;
  height: 27.875rem;
  background: ${props => props.theme.color.background};
  border-radius: 5px;
  box-shadow: 5px 5px 15px rgba(90, 90, 90, 0.16);
`

export const Links = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-appearance: none;
  text-decoration: none;
  :visited{
    color: #707070;
  
  }
  :active{
    color: #707070;
  }
`