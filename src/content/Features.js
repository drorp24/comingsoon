import React from 'react'
import Feature from '../components/Feature'
import Aligned from '../styled/Aligned'

const Features = () => (
  <div className="two_thirds section_height">
    <Aligned vertically around>
      <Feature title={'Feature Title'} text={'Feature text'} />
      <Feature title={'Feature Title'} text={'Feature text'} />
      <Feature title={'Feature Title'} text={'Feature text'} />
    </Aligned>
  </div>
)

export default Features
