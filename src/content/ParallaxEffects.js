import React, { Fragment } from 'react'
import { Parallax } from 'react-scroll-parallax'

const ParallaxEffects = () => (
  <Fragment style={{ height: '100vh' }}>
    <Parallax offsetYMax={50} offsetYMin={-50} className="third">
      <p style={{ height: '10vh' }}>dror</p>
    </Parallax>
    <Parallax
      offsetYMax={50}
      offsetYMin={-50}
      slowerScrollRate
      className="third"
    >
      <p style={{ height: '10vh' }}>poliak</p>
    </Parallax>
  </Fragment>
)

export default ParallaxEffects
