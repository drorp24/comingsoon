import React from 'react'
import Feature from '../components/Feature'
import Aligned from '../styled/Aligned'

/* eslint quotes: 'off' */
const Features = () => (
  <Aligned horizontally around>
    <Feature title={'Feature Title'} text={'Feature text'} />
    <Feature title={'Feature Title'} text={'Feature text'} />
    <Feature title={'Feature Title'} text={'Feature text'} />
  </Aligned>
)

export default Features
