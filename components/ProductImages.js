import { useState } from "react"
import styled from "styled-components"

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const BigImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const ImageButtons = styled.div`
  display: flex;
  gap:10px;
  flex-grow: 0;
  margin-top: 10px;
`
const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${props => props.$active ? `
    border-color: #ccc;
  ` : `
    border-color: transparent;
    opacity: .7;
  `}
  height: 60px;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;
`

const BigImageWrapper = styled.div`
  text-align: center;
`

export default function ProductImages({ images }) {

  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <>
      <BigImageWrapper>
        <BigImage />
      </BigImageWrapper>
      <Image 
        src={activeImage}
        alt="" 
        style={{
          objectFit: 'contain'
        }}
        width={300}
        height={400}
      />
      <ImageButtons>
        {images.map((image, index) => (
          <ImageButton
            key={index}
            $active={image === activeImage ? ` active` : ``}
            onClick={() => { setActiveImage(image) }}>
            <Image src={image} alt={index} />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  )
}
