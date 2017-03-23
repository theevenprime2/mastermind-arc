import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  > a {
    display: block;
    margin: 20px auto;
    text-align: center;
  }
`

const Menu = (props) => {
  return (
    <Wrapper {...props}>
      <Button href="/game" raised label="Play!" />
      <Button href="/instructions" raised label="Instructions" />
      <Button href="/credits" raised label="Credits" />
    </Wrapper>
  )
}

export default Menu
