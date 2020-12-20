import styled from "styled-components";

type show = {
  show: boolean;
}

export const Main = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  width: 100%;
  top: 0;
  left: 0;
  height: 3.75rem;
  background: rgba(255,255,255,0.95);
  border-bottom: solid 1px #D4D4D4;
  z-index: 100;
`

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 73.75rem;
  height: 100%;
`

export const Logo = styled.img`
  height: 2.625rem;
  margin-left: -0.625rem;
  align-self: center;
`

export const NavWarp = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  width: 43.125rem;
`

export const NavLink = styled.div`
  display: flex;
  position:relative;
  justify-content: center;
  align-items: center;
  /* width: 6.375rem; */
  padding: 0 15px;
  height: 100%;
  cursor: pointer;
  &::after{
    content: "";
    position: absolute;
    left:0;
    width: 0px;
    height: 3px;
    margin-top: 3.65rem;
    transition: all 0.2s ease-in-out;
    transition-duration: 0.3s;
    opacity: 0;
    background:  #006004;
  }
  &:hover::after{
    width: 100%;
    opacity: 1;
  }
`

export const Login = styled.button`
  width: 4.875rem;
  height: 2.00rem;
  margin-left: 60px;
  border: solid 2px #3A801D;
  border-radius: 5px;
  background: #ffffff;
  color: #3A801D;
  font-weight: bold;
  transition: background, color 0.2s;
  cursor: pointer;
  outline: none;
  &:hover{
    background: #3A801D;
    color: #ffffff;
  }
`

export const User = styled.div`
  position: relative;
  width: 5.375rem;
  margin-left: 3.75rem;
  font-size: 1.125rem;
  cursor: pointer;
  ::before{
    content: '';
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    margin-left: -1.625rem;
    border-radius: 0.625rem;
    background: ${props => props.theme.color.main}
  }
  ::after{
    content: '';
    position: absolute;
    width: 1rem;
    height: 1rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    clip-path: polygon(100% 0, 0 0, 50% 50%);
    background: #C4C4C4;
  }
`

export const UserBox = styled.div<show>`
  visibility: ${props => {
    if(props.show){
      return "inherit"
    }
    return "hidden"
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  width: 7.525rem;
  height: 7.1875rem;
  box-shadow: 0 3px 6px rgba(0,0,0,16%);
  margin-top: 10px;
  margin-left: -1.5125rem;
  background: #ffffff;
  ::after{
    content: '';
    position: absolute;
    width: 6.525rem;
    height: 1px;
    margin-left: 0.5rem;
    background: #ECECEC;
  }
`

export const UserBoxItems = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  font-size: 0.9375rem;
  color: ${props => props.theme.color.color};
  transition: background 0.2s;
  :hover{
    background:${props => props.theme.color.background};
  }
`
