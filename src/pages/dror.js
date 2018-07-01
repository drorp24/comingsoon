import React, { Fragment } from 'react'
import styled from 'styled-components'
import Type from '../components/Type'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const Dror = () => (
  <Fragment>
    <Wrapper>
      <Title>{React.version}</Title>
    </Wrapper>
    <Type
      strings="A Crypto Merchants Network"
      speed={45}
      deleteSpeed={100}
      pause={1000}
      deleteChars={7}
      replaceWith="<strong style='color: black'>community<strong>"
      replaceSpeed={70}
    />
  </Fragment>
)

export default Dror
