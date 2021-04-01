import styled from 'styled-components';

export const FilterBox = styled.div`
  position: relative;
  justify-content: center;
  width: 62.25rem;
  height: 15.625rem;
  border: 1px solid #D2D2D2;
  border-radius: 10px;
  background: ${props => props.theme.color.background};
`

export const FilterBoxInner = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  height: 10.75rem;
  padding: 32px;
`

export const Search = styled.input`
  display: inline;
  width: 17rem;
  height: 2.4375rem;
  padding: 0 10px;
  border: 2px solid #CFCFCF;
  border-radius: 8px;
  ::placeholder{
    color: #CECECE;
  }
`

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* margin-top: 30px; */
`

export const FilterText = styled.div`
  font-size: 0.9375rem;
  color: #B4B4B4;
`

export const SearchButton = styled.button`
  width: 6.25rem;
  height: 2.0625rem;
  border: none;
  border-radius: 8px;
  background: #818181;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.2s ease-in-out; 
  outline: none;
  :hover{
    background: #616161;
  }
`

export const ResetButton = styled.button`
  width: 5.25rem;
  height: 2.0625rem;
  margin-right: -15.625rem;
  border: none;
  border-radius: 8px;
  background: #616161;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.2s ease-in-out; 
  outline: none;
  :hover{
    background: #414141;
  }
`

export const Text = styled.div`
  position: absolute;
  margin-top: -30px;
  font-size: 1.125rem;
  color: #414141;
`