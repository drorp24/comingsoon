import React from 'react'
import Feature from '../components/Feature'
import Aligned from '../styled/Aligned'

const Features = () => (
  <Aligned horizontally around>
    <Feature title={'Feature Title'} text={'Feature text'} />
    <Feature title={'Feature Title'} text={'Feature text'} />
    <Feature title={'Feature Title'} text={'Feature text'} />
  </Aligned>
)

export default Features
