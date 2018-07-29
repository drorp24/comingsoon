import React from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Section from '../components/Section'
import Slogan from '../content/Slogan'
import Facts from '../content/Facts'
import Features from '../content/Features'
import '../../node_modules/animate.css/animate.css'
import '../assets/css/dror.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import ParallaxEffects from '../content/ParallaxEffects'
import FirstPage from '../content/FirstPage'
import pencil from '../assets/images/pencil.jpeg'

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
    <ParallaxProvider>
      <FirstPage />
      <Section background={pencil} />
      <Section>
        <Slogan />
      </Section>
      <Section>
        <Features />
      </Section>
      <Section>
        <Facts />
      </Section>
      <Section>
        <ParallaxEffects />
      </Section>
    </ParallaxProvider>
  </ThemeProvider>
)

export default Dror
