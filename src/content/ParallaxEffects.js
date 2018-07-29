import React, { Fragment } from 'react'
import { Parallax } from 'react-scroll-parallax'

const ParallaxEffects = () => (
  <Fragment>
    <Parallax offsetYMax={50} offsetYMin={-50}>
      <p style={{ height: '10vh' }}>dror</p>
    </Parallax>
    <Parallax offsetYMax={50} offsetYMin={-50} slowerScrollRate>
      <p style={{ height: '10vh' }}>poliak</p>
    </Parallax>
  </Fragment>
)

export default ParallaxEffects
