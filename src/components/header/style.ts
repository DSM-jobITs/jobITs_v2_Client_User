import styled from "styled-components";

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
  width: 4.375rem;
  height: 2.00rem;
  margin-left: 45px;
  border: solid 2px #3A801D;
  border-radius: 10px;
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