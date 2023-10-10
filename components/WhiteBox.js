import styled from 'styled-components'

const StyleWhiteBox = styled.div`
  background-color: #FFF;
  border-radius: 10px;
  padding:30px;
`;

export default function Box({children}) {
  return (
    <StyleWhiteBox>{children}</StyleWhiteBox>
  )
}