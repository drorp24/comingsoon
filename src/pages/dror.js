import React, { Fragment } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Section from '../components/Section'
import Slogan from '../content/Slogan'
import Counter from '../content/Counter'

// Attached to body element, hence affects every page
injectGlobal`
  body {

  }
`

// Affects everything beneath theme={theme}
const theme = {
  color: '#000',
  section: {
    title: {
      fontSize: '2vw',
    },
  },
}

const Dror = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Section>
        <Slogan />
      </Section>
      <Section>
        <Counter />
      </Section>
      <Section />
    </Fragment>
  </ThemeProvider>
)

export default Dror
