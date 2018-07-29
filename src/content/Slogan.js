import React from 'react'
import Type from '../components/Type'

const Slogan = ({ style }) => (
  <Type
    strings="Create your project"
    deleteChars={7}
    replaceWith="dream"
    speed={45}
    deleteSpeed={100}
    pause={600}
    replaceSpeed={40}
    style={style}
  />
)

export default Slogan
