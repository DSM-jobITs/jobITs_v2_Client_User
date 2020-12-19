import styled from 'styled-components';

type active = {
  active: boolean;
  use?: boolean;
}

export const Notice = styled.div`
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

export const NoticeNav = styled.div`
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