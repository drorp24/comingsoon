import React from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Counter = styled.div`
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
  text-align: center;
`

const Fact = props => (
  <Container className="animated fadeInUp">
    <Title>{props.title}</Title>
    <Counter>
      <CountUp start={0} end={props.count} duration={3} />%
    </Counter>
    <Text>{props.text}</Text>
  </Container>
)

Fact.propTypes = {
  title: PropTypes.string,
  count: PropTypes.string,
  text: PropTypes.number,
}

export default Fact
