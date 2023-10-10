import styled from "styled-components"
import Button from "@/components/Button"
import CartIcon from "@/components/icons/CartIcon"
import Link from "next/link"
import { useContext } from "react"
import { CartContext } from "./CartContext"
import Image from "next/image";

const ProductWrapper = styled.div`

`

const WhiteBox = styled(Link)`
  background-color: #FFF;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 100%;
    max-height: 80px;
  }
`

const Title = styled(Link)`
  font-weight: normal;
  font-size: .9rem;
  color:inherit;
  text-decoration: none;
  margin: 0;
`

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
`

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
    font-weight: 600;
  }
`

export default function ProductBox({ _id, title, description, price, images }) {

  const { addProduct } = useContext(CartContext);

  const url = '/product/' + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <Image 
            src={images?.[0]}
            alt="" 
            style={{
              objectFit: 'contain'
            }}
            width={300}
            height={400}
          />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>
            ${price}
          </Price>
          <Button $block={0} onClick={() => addProduct(_id)} $primary={1} $outline={1}>
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>

  )
}
