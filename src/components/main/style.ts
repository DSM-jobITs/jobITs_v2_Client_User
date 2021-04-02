import styled from "styled-components"

export const Main = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50rem;
`

export const Img = styled.img`
  width: 75.25rem;
  height: 21.0625rem;
`

export const Nav = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 14.125rem;
  background: ${props => props.theme.color.main}
`

export const NavWarp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 65%;
  height: 100%;
`

export const LinkWarp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 18.75rem;
  height: 100%;
  cursor: pointer;
  transition: background 0.2s;
  :hover{
    background: ${props => props.theme.color.sub};
    color: #ffffff;
  }
`

export const Icon = styled.img`
  position: relative;
  height: 5.625rem;
  text-decoration: none;
`

export const IconText = styled.div`
  position: relative;
  margin-top: 1.3125rem;
  font-size: 1.3125rem;
  color: #ffffff;
  text-decoration: none;
`

export const Line = styled.div`
  position: relative;
  width: 75.3125rem;
  height: 10px;
  margin: auto;
  margin-bottom: 6.25rem;
  background: ${props => props.theme.color.main};
  overflow: hidden;

  ::before{
    content: "";
    position: absolute;
    width: 6.25rem;
    height: 6.25rem;
    left: 47%;
    top: -50px;
    background: #fff;
    transform: rotateZ(30deg);
  }
`