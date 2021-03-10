import styled,{keyframes} from 'styled-components';

const ani = keyframes`
  0%{
    transform: translateY(0px);
  }
  30%{
    transform: translateY(-70px);
  }
  50,100%{
    transform: translateY(0px);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  background: #fff;
  color: #cfcfcf;
  font-size: 60px;
`

export const Span = styled.span`
  position: relative;
  display: inline-block;
  animation: ${ani} 2s ease-in-out infinite;
`