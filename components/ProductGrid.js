import styled from "styled-components"
import ProductBox from "@/components/ProductBox"

const StyleProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export default function ProductGrid({ products }) {
  return (
    <StyleProductGrid>
      {products?.length && products.map((product, index) => (
        <ProductBox key={index} {...product} />
      ))}
    </StyleProductGrid>
  )
}