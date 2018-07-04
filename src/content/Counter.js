import React from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Figure = styled.div`
  font-weight: 900;
  font-size: 5em;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 1em;
  text-transform: uppercase;
`

const Text = styled.div`
  font-weight: 400;
  font-size: 1em;
  color: #888;
`

const Counter = () => (
  <Container>
    <Title>Soaring market</Title>
    <Figure>
      <CountUp start={0} end={99} duration={3} />%
    </Figure>
    <Text>of world's population have not yet acquired cryptocurrency.</Text>
  </Container>
)

export default Counter
