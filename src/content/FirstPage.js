import React, { Fragment } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import desk from '../assets/images/desk1.jpg'
import Slogan from '../content/Slogan'

const FirstPage = () => (
  <Fragment>
    <ParallaxBanner
      layers={[
        {
          image: desk,
          amount: 0.0,
          slowerScrollRate: false,
        },
      ]}
      style={{
        height: '100vh', // couldn't make the background image responsive
      }}
    />
    <Parallax
      offsetYMax={50}
      offsetYMin={-50}
      slowerScrollRate
      styleOuter={{ background: 'blue' }}
    >
      <Slogan
        style={{
          color: 'black',
          fontSize: '2.5em',
          lineHeight: '10em',
          position: 'relative',
          top: '-20vh',
          right: '-40vw',
        }}
      />
    </Parallax>
  </Fragment>
)

export default FirstPage
