import styled from "styled-components";

const StyleTitle = styled.h1`
  font-size: 1.5em;
`

export default function Title({children}) {
  return (
    <StyleTitle>{children}</StyleTitle>
  )
}