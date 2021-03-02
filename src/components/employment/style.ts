import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 120rem;
  margin-top: 7.5rem;
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
  position: relative;
  width: 21.875rem;
  height: 50px;
  justify-content:center;
  background: #ccc;
`

export const Search = styled.input`
  width: 56.75rem;
  height: 2.4375rem;
  padding: 0 10px;
  border: 2px solid #CFCFCF;
  border-radius: 8px;
  ::placeholder{
    color: #CECECE;
  }
`

export const FilterText = styled.div`
  font-size: 0.9375rem;
`

export const DetailViewWarpper = styled.div`
  position: relative;
  width: 62.25rem;
  height: 80.0625rem;
  margin-top: 130px;
`