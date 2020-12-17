import { IpcNetConnectOpts } from 'net'
import styled from "styled-components"

type icon = {
  name: string;
}

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
  width: 18.75rem;
  height: 100%;
  cursor: pointer;
  transition: background 0.2s;
  :hover{
    background: ${props => props.theme.color.sub}
  }
`

export const Link = styled.img<icon>`
  position: relative;
  width: 10px;
  height: 8.75rem;
`