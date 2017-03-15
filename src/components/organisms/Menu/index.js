import React from 'react'
import styled from 'styled-components'
import Button from 'react-md/lib/Buttons'

// react-md components do not play well with styled-components?
const Wrapper = styled.div`
  > button {
    display: block;
    margin: 20px auto;
  }
`

const Menu = (props) => {
  return (
    <Wrapper {...props}>
      <Button raised label="Play!" />
      <Button raised label="Instructions" />
      <Button raised label="Credits" />
    </Wrapper>
  )
}

export default Menu
