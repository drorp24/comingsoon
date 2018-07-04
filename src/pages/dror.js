import React, { Fragment } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Section from '../components/Section'
import Slogan from '../components/Slogan'

// Attached to body element, henced affects every page
injectGlobal`
  body {

  }
`

// Affects everything beneath theme={theme}
const theme = {
  color: '#000',
}

const Dror = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Section>
        <Slogan />
      </Section>
      <Section />
      <Section />
    </Fragment>
  </ThemeProvider>
)

export default Dror
