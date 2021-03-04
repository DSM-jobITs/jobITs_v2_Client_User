import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 400px;
  margin-top: 5.5rem;
`

export const Text = styled.div`
  position: absolute;
  margin-top: -30px;
  font-size: 1.125rem;
  color: #414141;
`

export const InputBox = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  margin-top: -30px;
  right: 0;
  width: 200px;
  height: 1.125rem;
`

export const CheckBox = styled.input`
  margin-top: 0.125rem;
  margin-left: 1.8875rem;
  margin-right: 0.3125rem;
`

export const AdminBox = styled.div`
  display: flex;
  flex-direction: row-reverse;  
  align-items: center;
  width: 62.25rem;
  height: 50px;
  margin-top: -30px;
  margin-bottom: 50px;
  /* background: #ccc; */
  border-bottom: 2px solid rgba(0,0,0,0.16);
`

export const Management = styled.button`
  width: 95px;
  height: 33px;
  margin-left: 10px;
  background: #FFFFFF;
  color: #6A5657;
  border: 1px solid #D7D7D7;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`

export const Add = styled.button`
  width: 95px;
  height: 33px;
  background: #FFFFFF;
  color: #6A5657;
  border: 1px solid #D7D7D7;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`

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

export const FilterWarpper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 21.875rem;
  height: 50px;
  justify-content:center;
  background: #ccc;
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
  :hover{
    background: #616161;
  }
`

export const DetailViewWarpper = styled.div`
  position: relative;
  width: 62.25rem;
  min-height: 400px;
  margin-top: 130px;
`