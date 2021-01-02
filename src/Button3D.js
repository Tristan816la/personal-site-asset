import React, { Fragment } from 'react'
import styled from 'styled-components'
import { pink, darkGray, mobile } from './Shared'

export const Tiler = styled.div`
  display: flex;
  width: 200px;
  height: 80px;
  background-color: ${pink};
  color: ${darkGray};
  font-size: 20px;
  transform: rotate(-30deg) skew(25deg);
  box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  gap: 10px;
  ${mobile} {
    width: 100px;
    height: 40px;
    font-size: 11px;
  }
  &:hover {
    transition: all 0.5s;
    opacity: 0.9;
    background-color: #fefce8;
    box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
    transform: rotate(-30deg) skew(25deg) translate(20px, -20px);
  }
  &:hover::before {
    opacity: 0.9;
    background-color: #fefce8;
  }
  &:hover::after {
    opacity: 0.9;
    background-color: #fefce8;
  }

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 100%;
    top: 10px;
    left: -20px;
    transform: skewY(-45deg);
    background: ${pink};
    opacity: 0.9;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 20px;
    bottom: -20px;
    left: -10px;
    transform: rotate(0deg) skewX(-45deg);
    background: ${pink};
    opacity: 0.9;
  }
`

export const Logo = styled.img`
  width: 28px;
`

const Button3D = ({ logo, text = 'add your text' }) => {
  return (
    <Fragment>
      <Tiler>
        <Logo src={logo} alt='logo' />
        {text}
      </Tiler>
    </Fragment>
  )
}

export default Button3D
