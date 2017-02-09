import React, { PropTypes } from 'react'
import { injectGlobal } from 'styled-components'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons']
  }
})

import '../../public/styles.scss';

injectGlobal`
  body {
    margin: 0;
  }
`

const App = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default App
