import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const PageTemplate = (props) => {
  return (
    <Wrapper {...props} />
  )
}

export default PageTemplate
