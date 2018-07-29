import React, { Fragment } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import desk from '../assets/images/desk1.jpg'
import Slogan from '../content/Slogan'
import dream from '../assets/images/dream.jpeg'

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
      styleOuter={{
        backgroundImage: `url(${dream})`,
        backgroundSize: '100% 200%',
      }}
    >
      <Slogan
        style={{
          color: 'black',
          fontSize: '3em',
          lineHeight: '10em',
          position: 'relative',
          top: '-30vh',
          right: '-40vw',
        }}
      />
    </Parallax>
  </Fragment>
)

export default FirstPage
