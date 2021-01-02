import React from 'react'
import styled from 'styled-components'
import { pink, mobile } from './Shared'

export const Card = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease-in-out;
  transform-style: preserve-3d;
  position: relative;
  box-shadow: 1px 1px white;

  & div {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 5px;
  }
`

export const CardContainer = styled.div`
  width: 350px;
  height: 250px;
  ${mobile} {
    width: 250px;
    height: 230px;
    font-size: 12px;
  }

  &:hover ${Card} {
    transform: rotateY(180deg);
  }
  & a {
    color: inherit;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }
`

export const CardFront = styled.div`
  backface-visibility: hidden;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    filter: brightness(80%);
  }
`

export const CardBack = styled.div`
  background: ${pink};
  transform: rotateY(180deg);
  padding: 0 20px;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 10px;
`

const FlipCard = ({ image, title, description }) => {
  return (
    <div>
      <CardContainer>
        <Card>
          <CardFront>
            <img src={image} alt='img' />
          </CardFront>
          <CardBack>
            <h1>{title}</h1>
            <p>{description}</p>
          </CardBack>
        </Card>
      </CardContainer>
    </div>
  )
}

export default FlipCard
