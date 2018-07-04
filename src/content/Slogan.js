import React from 'react'
import Type from '../components/Type'

const Slogan = () => (
  <Type
    strings="A Crypto Merchants Network"
    speed={45}
    deleteSpeed={100}
    pause={1000}
    deleteChars={7}
    replaceWith="community"
    replaceSpeed={70}
  />
)

export default Slogan
